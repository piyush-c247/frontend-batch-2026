import { AccordionConfig } from "@/components/AccordionTable/types";

export const driversConfig: AccordionConfig[] = [
    {
        id: "abstracts",
        title: "Abstracts",
        questions: [
            {
                id: "abstracts_q2",
                label: "Was a PSP or CVOR (Abstract) report reviewed?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                    { id: "a5", type: "yesNo" },
                    { id: "a6", type: "yesNo" },
                ],
            },
            {
                id: "abstracts_q3",
                label: "Is there an abstract within 30 days of hire?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                    { id: "a5", type: "yesNo" },
                    { id: "a6", type: "yesNo" },
                ],
            },
        ],
    },
    {
        id: "driver_evaluation",
        title: "driver evaluation",
        questions: [
            {
                id: "eval_q2",
                label: "Has a pre hire inspection road test been conducted before hire?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                    { id: "a5", type: "yesNo" },
                    { id: "a6", type: "yesNo" },
                ],
            },
            {
                id: "eval_q3",
                label: "Is there a trip book completed before hire?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                    { id: "a5", type: "yesNo" },
                    { id: "a6", type: "yesNo" },
                ],
            },
            {
                id: "eval_q4",
                label: "Is there an annual road test?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
        ],
    },
    {
        id: "application",
        title: "application",
        questions: [
            {
                id: "app_q1",
                label: "Does the application ask for previous employers for previous 10 years for commercial use vehicles?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                    { id: "a3", type: "percentage" },
                    { id: "a4", type: "percentage" },
                    { id: "a5", type: "percentage" },
                    { id: "a6", type: "percentage" },
                ],
            },
            {
                id: "app_q2",
                label: "Is there a copy of a Drivers License with the current Date in the file?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                    { id: "a5", type: "yesNo" },
                    { id: "a6", type: "yesNo" },
                ],
            },
            {
                id: "app_q3",
                label: "All the reference checks completed for the past 3 years?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "app_q4",
                label: "Has the application asked if they have ever been subject to a positive drug or alcohol test?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "app_q5",
                label: "Does the application ask if they ever held any other driver license?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "app_q6",
                label: "Does the application ask for previous fine citations and convictions for the last 3 years (including OOS / non-moving violations)?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "app_q7",
                label: "Is there a verification check on if they were subject to FMCSR Drug and Alcohol testing?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "app_q8",
                label: "Does the application ask for 10 years work experience?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "app_q9",
                label: "Is there a formal application?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
        ],
    },
    {
        id: "training_courses",
        title: "training courses",
        questions: [
            {
                id: "training_q2",
                label: "Was there Weights and Dimensions Training? and is there a test and certificate in the file?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "training_q3",
                label: "Was there Pre-Trip Inspection Training? and is there a test and certificate in the file?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "training_q4",
                label: "Was there Cargo Securement Training? And is there a test and certificate in the file?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "training_q5",
                label: "Are the ELD / ELD instructions carried by the driver?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "training_q6",
                label: "Any other relevant training records for the driver when applicable?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                    { id: "a3", type: "percentage" },
                    { id: "a4", type: "percentage" },
                ],
            },
        ],
    },
];
