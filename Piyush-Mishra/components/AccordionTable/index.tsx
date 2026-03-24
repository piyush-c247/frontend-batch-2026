"use client";

import { Accordion } from "react-bootstrap";
import TableRenderer from "../TableRenderer/index";
import { AccordionConfig, FormValues, AnswerValue } from "./types";
import styles from "./AccordionTable.module.scss";

interface Props {
  data: AccordionConfig[];
  values: FormValues;
  onChange: (
    questionId: string,
    answerId: string,
    value: AnswerValue
  ) => void;
  onCommentChange: (questionId: string, value: string) => void;
}

export default function AccordionTable({
  data,
  values,
  onChange,
  onCommentChange,
}: Props) {
  return (
    <Accordion defaultActiveKey="0" className={styles.accordion}>
      {data.map((section, index) => (
        <Accordion.Item eventKey={String(index)} key={section.id}>
          <Accordion.Header>{section.title}</Accordion.Header>

          <Accordion.Body>
            <TableRenderer
              questions={section.questions}
              values={values}
              onChange={onChange}
              onCommentChange={onCommentChange}
            />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}