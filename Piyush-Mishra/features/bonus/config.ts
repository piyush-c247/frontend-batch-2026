import { AccordionConfig } from "@/components/AccordionTable/types";

export const bonusConfig: AccordionConfig[] = [
    {
        id: "technology_bonus",
        title: "technology",
        questions: [
            {
                id: "tech_b_q2",
                label: "Did the carrier provide records for the telematics access to cameras / ELD's?",
                answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "tech_b_q3",
                label: "Did the carrier provide the records for safety team the SMS PIN?",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "tech_b_q4",
                label: "Does the carrier use their dispatch system to lock down drivers & equipment? This could be due to expired PM's / CVP's, expired driver licenses, etc.",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "tech_b_q5",
                label: "Are there additional cameras - ex. Rear / side view cameras?",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
        ],
    },
    {
        id: "drivers_bonus",
        title: "drivers",
        questions: [
            {
                id: "driver_b_q1",
                label: "Are abstracts pulled more than annually?",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "driver_b_q2",
                label: "Is there a reward program for clean CVSA inspection?",
                answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "driver_b_q3",
                label: "Is there an orientation program and agenda?",
                answers: [{ id: "a1", type: "percentage" }],
            },
            {
                id: "driver_b_q4",
                label: "Does the carrier have a HRD (High Risk Drivers) tracking program?",
                answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "driver_b_q5",
                label: "Is there an observation program?",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "driver_b_q6",
                label: "Is there a casual driver review completed?",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
        ],
    },
    {
        id: "organization_bonus",
        title: "organization",
        questions: [
            {
                id: "org_b_q1",
                label: "Are the truck files organized?",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "org_b_q2",
                label: "Are the trailer files organized?",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "org_b_q3",
                label: "Are the drivers files organized?",
                answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
        ],
    },
    {
        id: "management_bonus",
        title: "management",
        questions: [
            {
                id: "mgmt_b_q1",
                label: "Is there a in house LEAD safety professional (on headcount) - SAFETY must be their only role within the operation",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "percentage" }
                ],
            },
            {
                id: "mgmt_b_q2",
                label: "Is there a near miss reporting program?",
                 answers: [
                    { id: "a1", type: "percentage", },
                    { id: "a2", type: "percentage" }
                ],
            },
            {
                id: "mgmt_b_q3",
                label: "Do you find there is buy in from the owner?",
                 answers: [
                    { id: "a1", type: "percentage", },
                    { id: "a2", type: "yesNo" }
                ],
            },
            {
                id: "mgmt_b_q4",
                label: "Is there a health investigation committee?",
                 answers: [
                    { id: "a1", type: "percentage", },
                    { id: "a2", type: "percentage" }
                ],
            },
            {
                id: "mgmt_b_q5",
                label: "Is the finding of the investigation shared with other employees?",
                 answers: [
                    { id: "a1", type: "yesNo", },
                    { id: "a2", type: "yesNo" }
                ],
            },
        ],
    },
];
