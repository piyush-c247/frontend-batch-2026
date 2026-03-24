import { FormValues, AnswerValue } from "@/components/AccordionTable/types";

interface UseFormValuesReturn {
  updateAnswer: (questionId: string, answerId: string, value: AnswerValue) => void;
  updateComment: (questionId: string, comment: string) => void;
}

export function useFormValues(
  values: FormValues,
  setValues: (data: FormValues) => void
): UseFormValuesReturn {

  const updateAnswer = (
    questionId: string,
    answerId: string,
    value: AnswerValue
  ) => {
    setValues({
      ...values,
      [questionId]: {
        ...values[questionId],
        answers: {
          ...values[questionId]?.answers,
          [answerId]: value,
        },
        comment: values[questionId]?.comment || "",
      },
    });
  };

  const updateComment = (questionId: string, comment: string) => {
    setValues({
      ...values,
      [questionId]: {
        ...values[questionId],
        answers: values[questionId]?.answers || {},
        comment,
      },
    });
  };

  return { updateAnswer, updateComment };
}