import { redirect } from "next/navigation";
import { ROUTECONSTANTS } from "@/utils/routesConstants";

export default function RootPage() {
  redirect(ROUTECONSTANTS.INCIDENT);
}