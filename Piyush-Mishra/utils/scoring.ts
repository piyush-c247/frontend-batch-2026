import { FormValues } from "@/components/AccordionTable/types";

const SCORE_MAP: Record<string, number> = {
  Yes: 1,
  Partial: 0.5,
  No: 0,
  "N/A": 0,

  Monthly: 1,
  Quarterly: 0.75,
  "Half-Yearly": 0.5,
  "Semi Annual": 0.5, 
  Yearly: 0.25,
  Annual: 0.25,
  Never: 0,
};

export const calculateScore = (data: FormValues) => {
  let total = 0;
  let count = 0;

  Object.values(data).forEach((q) => {
    Object.values(q.answers).forEach((ans) => {
      if (typeof ans === "string" && SCORE_MAP[ans] !== undefined) {
        total += SCORE_MAP[ans];
        count++;
        return;
      }

      if (typeof ans === "number" && ans >= 0 && ans <= 100) {
        total += ans / 100;
        count++;
        return;
      }
    });
  });

  const percentage = count === 0 ? 0 : (total / count) * 100;

  return {
    total,
    count,
    percentage: Number(percentage.toFixed(2)),
  };
};