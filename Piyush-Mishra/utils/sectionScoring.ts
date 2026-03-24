import { AccordionConfig, FormValues } from "@/components/AccordionTable/types";
import { calculateScore } from "./scoring";

export interface SectionScore {
  sectionId: string;
  title: string;
  percentage: number;
}

export const calculateSectionScores = (
  config: AccordionConfig[],
  data: FormValues
) => {
  const sectionScores: SectionScore[] = [];

  config.forEach((section) => {
    const sectionData: FormValues = {};

    
    section.questions.forEach((q) => {
      if (data[q.id]) {
        sectionData[q.id] = data[q.id];
      }
    });

    const result = calculateScore(sectionData);

    sectionScores.push({
      sectionId: section.id,
      title: section.title,
      percentage: result.percentage,
    });
  });

  
  const total =
    sectionScores.reduce((acc, s) => acc + s.percentage, 0) /
    (sectionScores.length || 1);

  return {
    sectionScores,
    total: Math.round(total * 100) / 100,
  };
};