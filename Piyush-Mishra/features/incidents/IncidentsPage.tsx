"use client";

import AccordionTable from "@/components/AccordionTable/index";
import { incidentsConfig } from "./config";
import { FormValues } from "@/components/AccordionTable/types";
import { useFormValues } from "@/hooks/useFormValues";

interface Props {
  values: FormValues;
  setValues: (data: FormValues) => void;
}

export default function IncidentsPage({ values, setValues }: Props) {
  const { updateAnswer, updateComment } = useFormValues(values, setValues);

  return (
    <AccordionTable
      data={incidentsConfig}
      values={values}
      onChange={updateAnswer}
      onCommentChange={updateComment}
    />
  );
}