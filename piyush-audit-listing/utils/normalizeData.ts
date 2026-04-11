import { AuditData, Section } from "@/types/auditTable";

export const getAllSections = (data: AuditData): Section[] => {
  return [...data.data, data.bonus];
};