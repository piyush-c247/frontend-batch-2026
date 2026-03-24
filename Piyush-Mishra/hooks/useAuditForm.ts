import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import { getTabData, saveTabData } from "@/services/IndexedDB/operations";
import { TabType, tabs } from "@/components/Tabs";
import { AccordionConfig, FormValues } from "@/components/AccordionTable/types";
import { calculateScore } from "@/utils/scoring";
import { calculateSectionScores } from "@/utils/sectionScoring";
import { incidentsConfig } from "@/features/incidents/config";
import { maintenanceConfig } from "@/features/maintenance/config";
import { policiesConfig } from "@/features/policies/config";
import { driversConfig } from "@/features/drivers/config";
import { performanceConfig } from "@/features/performance/config";
import { bonusConfig } from "@/features/bonus/config";

// Tab config map 

const tabConfigMap: Record<TabType, AccordionConfig[]> = {
  Incidents:   incidentsConfig,
  Maintenance: maintenanceConfig,
  Policies:    policiesConfig,
  Drivers:     driversConfig,
  Performance: performanceConfig,
  Bonus:       bonusConfig,
  Summary:     [],
};

// Form tabs 

const FORM_TABS = tabs.filter((t) => t !== "Summary") as Exclude<
  TabType,
  "Summary"
>[];

// Initial empty form data 

const EMPTY_FORM_DATA: Record<TabType, FormValues> = {
  Incidents:   {},
  Maintenance: {},
  Policies:    {},
  Drivers:     {},
  Performance: {},
  Bonus:       {},
  Summary:     {},
};

 

export interface UseAuditFormReturn {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  formData: Record<TabType, FormValues>;
  setTabValues: (tab: TabType, data: FormValues) => void;
  sectionScores: ReturnType<typeof calculateSectionScores>["sectionScores"];
  total: number;
  handleSave: () => Promise<void>;
  handleSaveNext: () => Promise<void>;
}



export function useAuditForm(): UseAuditFormReturn {
  const router = useRouter();
  const params = useParams();

  
  const tabParam = typeof params?.tab === "string" ? params.tab : "incidents";
  const normalised = (tabParam.charAt(0).toUpperCase() + tabParam.slice(1)) as TabType;

  //if somehow an invalid tab slips through, default to Incidents
  const activeTab: TabType = tabs.includes(normalised) ? normalised : "Incidents";

  const [formData, setFormData] = useState<Record<TabType, FormValues>>(
    EMPTY_FORM_DATA
  );

  // navigate to the tab's route — /incidents etc.
  const setActiveTab = (tab: TabType) => {
    router.push(`/${tab.toLowerCase()}`);
  };

  //  Live score for active tab 
  const { sectionScores, total } = calculateSectionScores(
    tabConfigMap[activeTab],
    formData[activeTab]
  );

  //  Debounced auto-save 
  const debouncedTabData = useDebounce(formData[activeTab], 500);

  useEffect(() => {
    if (activeTab === "Summary") return;

    const hasData = Object.keys(debouncedTabData || {}).length > 0;
    if (!hasData) return;

    saveTabData(activeTab, debouncedTabData, total, sectionScores);
  }, [debouncedTabData, activeTab]);

  // Load all form tabs from IndexedDB on mount 
  useEffect(() => {
    const loadInitialData = async () => {
      const updatedData: Record<TabType, FormValues> = { ...EMPTY_FORM_DATA };

      for (const tab of FORM_TABS) {
        const saved = await getTabData(tab);
        if (saved) updatedData[tab] = saved;
      }

      setFormData(updatedData);
    };

    loadInitialData();
  }, []);

  // Update a specific tab's form values 
  const setTabValues = (tab: TabType, data: FormValues) => {
    setFormData((prev) => ({ ...prev, [tab]: data }));
  };

  //  Manual save 
  const handleSave = async () => {
    if (activeTab === "Summary") return;
    await saveTabData(activeTab, formData[activeTab], total, sectionScores);
  };

  // Save and advance to next tab this
  const handleSaveNext = async () => {
    await handleSave();
    const currentIndex = tabs.indexOf(activeTab);
    const nextTab = tabs[currentIndex + 1];
    if (nextTab) setActiveTab(nextTab);
  };

  return {
    activeTab,
    setActiveTab,
    formData,
    setTabValues,
    sectionScores,
    total,
    handleSave,
    handleSaveNext,
  };
}