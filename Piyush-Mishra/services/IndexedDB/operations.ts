import { openDB } from "./db";
import { FormValues } from "@/components/AccordionTable/types";
import { SectionScore } from "@/utils/sectionScoring";

const AUDIT_STORE = "auditData";
const SUMMARY_STORE = "summaryData";

//Summary section type 

export interface SummarySection {
  id: string;      
  title: string;
  content: string;
  isFilled: boolean;
  order: number;
}

//Audit tab operations 

export const saveTabData = async (
  tab: string,
  data: FormValues,
  score: number,
  sectionScores: SectionScore[]
): Promise<void> => {
  const db = await openDB();
  const tx = db.transaction(AUDIT_STORE, "readwrite");
  const store = tx.objectStore(AUDIT_STORE);

  store.put({ tab, data, score, sectionScores, updatedAt: Date.now() });

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(new Error("Transaction aborted"));
  });
};

export const getTabData = async (tab: string): Promise<FormValues | null> => {
  const db = await openDB();
  const tx = db.transaction(AUDIT_STORE, "readonly");
  const store = tx.objectStore(AUDIT_STORE);
  const request = store.get(tab);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result?.data || null);
    request.onerror = () => reject(request.error);
  });
};

export const saveSummarySections = async (
  sections: SummarySection[]
): Promise<void> => {
  const db = await openDB();
  const tx = db.transaction(SUMMARY_STORE, "readwrite");
  const store = tx.objectStore(SUMMARY_STORE);

 
  store.clear();
  sections.forEach((section) => store.put(section));

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(new Error("Transaction aborted"));
  });
};

export const getSummarySections = async (): Promise<SummarySection[]> => {
  const db = await openDB();
  const tx = db.transaction(SUMMARY_STORE, "readonly");
  const store = tx.objectStore(SUMMARY_STORE);
  const request = store.getAll();

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const sections = (request.result as SummarySection[]) ?? [];
      // restore original order
      resolve(sections.sort((a, b) => a.order - b.order));
    };
    request.onerror = () => reject(request.error);
  });
};