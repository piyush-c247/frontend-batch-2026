"use client";

import AccordionTable from "@/components/AccordionTable/index";
import { policiesConfig } from "./config";
import { FormValues} from "@/components/AccordionTable/types";
import { useFormValues } from "@/hooks/useFormValues";
interface Props {
  values: FormValues;
  setValues: (data: FormValues) => void;
}

export default function PoliciesPage({ values, setValues }: Props) {
  const { updateAnswer, updateComment } = useFormValues(values, setValues);
  
  return (
    <AccordionTable
      data={policiesConfig}
      values={values}
      onChange={updateAnswer}
      onCommentChange={updateComment}
    />
  );
}