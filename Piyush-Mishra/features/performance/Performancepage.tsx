"use client";

import AccordionTable from "@/components/AccordionTable/index";
import { performanceConfig } from "./config";
import { FormValues} from "@/components/AccordionTable/types";
import { useFormValues } from "@/hooks/useFormValues";

interface Props {
  values: FormValues;
  setValues: (data: FormValues) => void;
}

export default function PerformancePage({ values, setValues }: Props) {
const { updateAnswer, updateComment } = useFormValues(values, setValues);
  
  return (
    <AccordionTable
      data={performanceConfig}
      values={values}
      onChange={updateAnswer}
      onCommentChange={updateComment}
    />
  );
}