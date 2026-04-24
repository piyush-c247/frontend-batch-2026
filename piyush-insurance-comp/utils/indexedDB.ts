// utils/indexedDB.ts

import { Company } from '@/types';

const DB_NAME = 'insuranceDB';
const DB_VERSION = 2;           // ← bumped to recreate store clean
const STORE_NAME = 'companies';

/* ---------- Open DB ---------- */

const openDB = (): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;

      // Drop old store if exists, recreate clean
      if (db.objectStoreNames.contains(STORE_NAME)) {
        db.deleteObjectStore(STORE_NAME);
      }

      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    };

    request.onsuccess  = (e) => resolve((e.target as IDBOpenDBRequest).result);
    request.onerror    = (e) => reject((e.target as IDBOpenDBRequest).error);
  });

/* ---------- Add ---------- */

export const addCompanyToDB = async (company: Omit<Company, 'id'>): Promise<Company> => {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx      = db.transaction(STORE_NAME, 'readwrite');
    const store   = tx.objectStore(STORE_NAME);
    const request = store.add(company);

    request.onsuccess = (e) =>
      resolve({ ...company, id: (e.target as IDBRequest).result as number });

    request.onerror = (e) => reject((e.target as IDBRequest).error);
  });
};

/* ---------- Get All ---------- */

export const getAllCompanies = async (): Promise<Company[]> => {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx      = db.transaction(STORE_NAME, 'readonly');
    const store   = tx.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = (e) =>
      resolve((e.target as IDBRequest).result as Company[]);

    request.onerror = (e) => reject((e.target as IDBRequest).error);
  });
};

/* ---------- Update ---------- */

export const updateCompanyInDB = async (company: Company): Promise<Company> => {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx      = db.transaction(STORE_NAME, 'readwrite');
    const store   = tx.objectStore(STORE_NAME);
    const request = store.put(company);     // put = insert or replace by keyPath

    request.onsuccess = () => resolve(company);
    request.onerror   = (e) => reject((e.target as IDBRequest).error);
  });
};

/* ---------- Delete ---------- */

export const deleteCompanyFromDB = async (id: number): Promise<void> => {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx      = db.transaction(STORE_NAME, 'readwrite');
    const store   = tx.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror   = (e) => reject((e.target as IDBRequest).error);
  });
};