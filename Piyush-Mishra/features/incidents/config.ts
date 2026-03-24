import { AccordionConfig } from "@/components/AccordionTable/types";

export const incidentsConfig: AccordionConfig[] = [
  {
    id: "major_damage",
    title: "Major Damage",
    questions: [
      {
        id: "major_damage_q1",
        label:
          "Does the carrier investigate critical events? (Harsh braking, speeding, etc.)",
        answers: [
          { id: "a1", type: "yesNo" },
          { id: "a2", type: "yesNo" },
          { id: "a3", type: "yesNo" },
        ],
      },
      {
        id: "major_damage_q2",
        label: "Does the file have the Root Cause of the incident determined?",
        answers: [
          { id: "a1", type: "yesNo" },
          { id: "a2", type: "yesNo" },
          { id: "a3", type: "yesNo" },
        ],
      },
      {
        id: "major_damage_q3",
        label: "Does the file document if any injuries occurred?",
        answers: [
          { id: "a1", type: "yesNo" },
          { id: "a2", type: "yesNo" },
          { id: "a3", type: "yesNo" },
        ],
      },
    ],
  },

  {
    id: "event_hazards",
    title: "Damage caused by Envt hazards",
    questions: [
      {
        id: "event_q1",
        label: "Does the file contain 3rd Party Information?",
        answers: [
          { id: "a1", type: "yesNo" },
          { id: "a2", type: "yesNo" },
          { id: "a3", type: "yesNo" },
        ],
      },
      {
        id: "event_q2",
        label: "Does the file have sufficient details about the incident?",
        answers: [
          { id: "a1", type: "yesNo" },
          { id: "a2", type: "yesNo" },
          { id: "a3", type: "yesNo" },
        ],
      },
      {
        id: "event_q3",
        label: "Does the file document if any injuries occurred?",
        answers: [
          { id: "a1", type: "yesNo" },
          { id: "a2", type: "yesNo" },
          { id: "a3", type: "yesNo" },
        ],
      },
      {
        id: "event_q4",
        label: "Does the incident file contain photos / video from the scene?",
        answers: [
          { id: "a1", type: "frequency" },
          { id: "a2", type: "frequency" },
          { id: "a3", type: "frequency" },
        ],
      },
      {
        id: "event_q5",
        label: "Does incident file contain the police report?",
        answers: [
          { id: "a1", type: "text", placeholder: "Enter Answer" },
          { id: "a2", type: "text", placeholder: "Enter Answer" },
          { id: "a3", type: "text", placeholder: "Enter Answer" },
        ],
      },
      {
        id: "event_q6",
        label: "Does the incident file contain a drivers statement?",
        answers: [
          { id: "a1", type: "text", placeholder: "Enter Answer" },
          { id: "a2", type: "text", placeholder: "Enter Answer" },
          { id: "a3", type: "text", placeholder: "Enter Answer" },
        ],
      },
      {
        id: "event_q7",
        label:
          "Does the file indicate corrective actions taken - Disciplinary and/or Remedial Training?",
        answers: [
          {
            id: "a1",
            type: "text",
            placeholder: "Enter # of Trucks",
            helperText: "Total Trucks Available: 5",
          },
          {
            id: "a2",
            type: "text",
            placeholder: "Enter # of Trucks",
            helperText: "Total Trucks Available: 5",
          },
          {
            id: "a3",
            type: "text",
            placeholder: "Enter # of Trucks",
            helperText: "Total Trucks Available: 5",
          },
        ],
      },
      {
        id: "event_q8",
        label: "Does the incident file contain a copy of the drivers licence?",
        answers: [
          {
            id: "a1",
            type: "text",
            placeholder: "Enter # of Trucks",
            helperText: "Total Trucks Available: 5",
          },
          {
            id: "a2",
            type: "text",
            placeholder: "Enter # of Trucks",
            helperText: "Total Trucks Available: 5",
          },
          {
            id: "a3",
            type: "text",
            placeholder: "Enter # of Trucks",
            helperText: "Total Trucks Available: 5",
          },
        ],
      },
      {
        id: "event_q9",
        label:
          "Does the incident file contain the drivers previous 14 days of logs?",
        answers: [
          {
            id: "a1",
            type: "text",
            placeholder: "Enter # of Trailers",
            helperText: "Total Trailers Available: 2",
          },
          {
            id: "a2",
            type: "text",
            placeholder: "Enter # of Trailers",
            helperText: "Total Trailers Available: 2",
          },
          {
            id: "a3",
            type: "text",
            placeholder: "Enter # of Trailers",
            helperText: "Total Trailers Available: 2",
          },
        ],
      },
      {
        id: "event_q10",
        label:
          "Does the incident file contain previous 60 days of maintenance records?",
        answers: [
          {
            id: "a1",
            type: "text",
            placeholder: "Enter # of Trailers",
            helperText: "Total Trailers Available: 2",
          },
          {
            id: "a2",
            type: "text",
            placeholder: "Enter # of Trailers",
            helperText: "Total Trailers Available: 2",
          },
          {
            id: "a3",
            type: "text",
            placeholder: "Enter # of Trailers",
            helperText: "Total Trailers Available: 2",
          },
        ],
      },
      {
        id: "event_q12",
        label:
          "Does the incident file contain ownership documentation of vehicles?",
        answers: [
          { id: "a1", type: "yesNo" },
          { id: "a2", type: "yesNo" },
          { id: "a3", type: "yesNo" },
        ],
      },
      {
        id: "event_q13",
        label:
          "Does the file have the Root Cause of the incident determined?",
        answers: [
          { id: "a1", type: "yesNo" },
          { id: "a2", type: "yesNo" },
          { id: "a3", type: "yesNo" },
        ],
      },
    ],
  },
];