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
import { LABELS } from "./constants";

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
            values={formData.Incidents}
            setValues={(data) => setTabValues("Incidents", data)}
          />
        );
      case "Maintenance":
        return (
          <MaintenancePage
            values={formData.Maintenance}
            setValues={(data) => setTabValues("Maintenance", data)}
          />
        );
      case "Policies":
        return (
          <PoliciesPage
            values={formData.Policies}
            setValues={(data) => setTabValues("Policies", data)}
          />
        );
      case "Drivers":
        return (
          <DriversPage
            values={formData.Drivers}
            setValues={(data) => setTabValues("Drivers", data)}
          />
        );
      case "Performance":
        return (
          <PerformancePage
            values={formData.Performance}
            setValues={(data) => setTabValues("Performance", data)}
          />
        );
      case "Bonus":
        return (
          <BonusPage
            values={formData.Bonus}
            setValues={(data) => setTabValues("Bonus", data)}
          />
        );
      case "Summary":
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