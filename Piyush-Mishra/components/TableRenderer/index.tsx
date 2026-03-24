"use client";

import styles from "./TableRenderer.module.scss";

import {
  QuestionConfig,
  AnswerConfig,
  AnswerValue,
  FormValues,
} from "../AccordionTable/types";

import SelectField from "../FormControls/SelectField";
import InputField from "../FormControls/InputField";
import PercentageField from "../FormControls/PercentageField";
import TextareaField from "../FormControls/TextareaField";
import { LABELS } from "./constants";

interface Props {
  questions: QuestionConfig[];
  values: FormValues;
  onChange: (
    qId: string,
    aId: string,
    value: AnswerValue
  ) => void;
  onCommentChange: (qId: string, value: string) => void;
}

export default function TableRenderer({
  questions,
  values,
  onChange,
  onCommentChange,
}: Props) {

  const renderField = (
    answer: AnswerConfig,
    value: AnswerValue | undefined,
    onChangeFn: (val: AnswerValue) => void
  ) => {
    switch (answer.type) {

      case "yesNo":
        return (
          <SelectField
            options={["Yes", "No", "Partial", "N/A"]}
            value={typeof value === "string" ? value : ""}
            onChange={onChangeFn}
          />
        );

      case "frequency":
        return (
          <SelectField
            options={["Monthly", "Quarterly", "Half-Yearly", "Yearly"]}
            value={typeof value === "string" ? value : ""}
            onChange={onChangeFn}
          />
        );

      case "percentage":
        return (
          <PercentageField
            value={typeof value === "number" ? value : ""}
            onChange={onChangeFn}
          />
        );

      case "number":
        return (
          <InputField
            type="number"
            value={typeof value === "number" ? value : ""}
            placeholder={answer.placeholder}
            onChange={onChangeFn}
          />
        );

      case "text":
        return (
          <InputField
            type="text"
            value={typeof value === "string" ? value : ""}
            placeholder={answer.placeholder}
            onChange={onChangeFn}
          />
        );

      default:
        return null;
    }
  };

  return (
    <table className={styles.table}>

      {/*  Column headers */}
      <thead>
        <tr>
          <th className={styles.questionHeader} />
          <th className={styles.answersHeader}>{LABELS.ANSWER_COLUMN}</th>
          <th className={styles.spacerHeader} />
          <th className={styles.commentHeader}>{LABELS.COMMENT_COLUMN}</th>
        </tr>
      </thead>

      <tbody>
        {questions.map((q) => (
          <tr key={q.id}>

            {/* Question */}
            <td className={styles.question}>{q.label}</td>

            {/* Answers */}
            <td className={styles.answers}>
              <div className={styles.answersWrapper}>
                {q.answers.map((a) => (
                  <div key={a.id} className={styles.answerItem}>
                    {renderField(
                      a,
                      values[q.id]?.answers?.[a.id],
                      (val) => onChange(q.id, a.id, val)
                    )}

                    {a.helperText && (
                      <div className={styles.helper}>
                        {a.helperText}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </td>

            <td className={styles.spacer} />

            {/* Comment */}
            <td className={styles.comment}>
              <TextareaField
                value={values[q.id]?.comment ?? ""}
                onChange={(val) => onCommentChange(q.id, val)}
              />
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}