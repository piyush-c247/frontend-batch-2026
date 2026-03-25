"use client";

import styles from "./MainLayout.module.scss";
import { useAuditForm } from "@/hooks/useAuditForm";
import Header from "@/components/Header";
import DetailsSection from "@/layouts/DetailsSection";
import Tabs from "@/components/Tabs";
import ScoreCard from "@/components/ScoreCard";
import FooterActions from "@/components/FooterActions";
import IncidentsPage from "@/features/incidents/IncidentsPage";
import MaintenancePage from "@/features/maintenance/MaintenancePage";
import PoliciesPage from "@/features/policies/PoliciesPage";
import DriversPage from "@/features/drivers/Driverspage";
import PerformancePage from "@/features/performance/Performancepage";
import BonusPage from "@/features/bonus/BonusPage";
import SummaryPage from "@/features/summary/SummaryPage";
import { LABELS, TABS} from "./constants";

export default function MainLayout() {
  const {
    activeTab,
    setActiveTab,
    formData,
    setTabValues,
    sectionScores,
    total,
    handleSave,
    handleSaveNext,
  } = useAuditForm();

  const renderTabContent = () => {
    switch (activeTab) {
      case "Incidents":
        return (
              <IncidentsPage
            values={formData[TABS.INCIDENTS]}
            setValues={(data) => setTabValues(TABS.INCIDENTS, data)}
          />
        );
      case TABS.MAINTENANCE:
        return (
          <MaintenancePage
            values={formData[TABS.MAINTENANCE]}
            setValues={(data) => setTabValues(TABS.MAINTENANCE, data)}
          />
        );
      case TABS.POLICIES:
        return (
          <PoliciesPage
            values={formData[TABS.POLICIES]}
            setValues={(data) => setTabValues(TABS.POLICIES, data)}
          />
        );
      case TABS.DRIVERS:
        return (
          <DriversPage
            values={formData[TABS.DRIVERS]}
            setValues={(data) => setTabValues(TABS.DRIVERS, data)}
          />
        );
      case TABS.PERFORMANCE:
        return (
          <PerformancePage
            values={formData[TABS.PERFORMANCE]}
            setValues={(data) => setTabValues(TABS.PERFORMANCE, data)}
          />
        );
      case TABS.BONUS:
        return (
          <BonusPage
            values={formData[TABS.BONUS]}
            setValues={(data) => setTabValues(TABS.BONUS, data)}
          />
        );
      case TABS.SUMMARY:
        return <SummaryPage />;
      default:
        return <div>{LABELS.COMING_SOON}</div>;
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>

      <main className={styles.main}>
        <DetailsSection />

        <Tabs activeTab={activeTab} onChange={setActiveTab} />

        <div className={styles.content}>
          {renderTabContent()}
        </div>

        {activeTab !== "Summary" && (
          <ScoreCard sectionScores={sectionScores} total={total} />
        )}

        <FooterActions onSave={handleSave} onSaveNext={handleSaveNext} />
      </main>
    </div>
  );
}