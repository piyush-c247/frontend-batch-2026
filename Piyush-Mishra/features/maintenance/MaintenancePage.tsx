"use client";

import AccordionTable from "@/components/AccordionTable/index";
import { maintenanceConfig } from "./config";
import { FormValues} from "@/components/AccordionTable/types";
import { useFormValues } from "@/hooks/useFormValues";

interface Props {
  values: FormValues;
  setValues: (data: FormValues) => void;
}

export default function MaintenancePage({ values, setValues }: Props) {
const { updateAnswer, updateComment } = useFormValues(values, setValues);

  return (
    <AccordionTable
      data={maintenanceConfig}
      values={values}
      onChange={updateAnswer}
      onCommentChange={updateComment}
    />
  );
}