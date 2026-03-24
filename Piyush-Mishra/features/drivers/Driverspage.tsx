"use client";

import AccordionTable from "@/components/AccordionTable/index";
import { driversConfig } from "./config";
import { FormValues } from "@/components/AccordionTable/types";
import { useFormValues } from "@/hooks/useFormValues";

interface Props {
  values: FormValues;
  setValues: (data: FormValues) => void;
}

export default function DriversPage({ values, setValues }: Props) {
const { updateAnswer, updateComment } = useFormValues(values, setValues);

  return (
    <AccordionTable
      data={driversConfig}
      values={values}
      onChange={updateAnswer}
      onCommentChange={updateComment}
    />
  );
}