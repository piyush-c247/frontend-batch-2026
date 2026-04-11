import { AuditTable } from "@/components/AuditTable";
import { Header } from "@/components/Layout/Header";
import { TitleBar } from "@/components/Layout/TitleBar";
import { Toolbar } from "@/components/Layout/Toolbar";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <Toolbar />
      <TitleBar />
      <AuditTable />
    </div>
  );
}