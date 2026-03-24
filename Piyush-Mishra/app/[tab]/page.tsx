import { notFound } from "next/navigation";
import { Suspense } from "react";
import { tabs, TabType } from "@/components/Tabs/tabs.config"; 
import MainLayout from "@/layouts/MainLayout";

interface Props {
  params: Promise<{ tab: string }>;
}

export default async function TabPage({ params }: Props) {
  const { tab } = await params;

  const normalised = (tab.charAt(0).toUpperCase() + tab.slice(1)) as TabType;

  // invalid tab  404
  if (!(tabs as readonly string[]).includes(normalised)) {
    notFound();
  }

  return (
    <Suspense fallback={null}>
      <MainLayout />
    </Suspense>
  );
}

export function generateStaticParams() {
  return (tabs as readonly string[]).map((tab) => ({ tab: tab.toLowerCase() }));
}