import { AccordionConfig } from "@/components/AccordionTable/types";

export const policiesConfig: AccordionConfig[] = [
    {
        id: "company_policy_sign_offs",
        title: "company policy sign offs",
        questions: [
            {
                id: "policy_q1",
                label: "Is there a PPE Policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                ],
            },
            {
                id: "policy_q2",
                label: "Is there a Fatigue Management Policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                ],
            },
            {
                id: "policy_q3",
                label: "Is there a medical questionnaire completed for Diabetes and Epilepsy",
                answers: [
                    {
                        id: "a1",
                        type: "text",
                        placeholder: "Enter # of Trailers",
                        helperText: "Total Trailers Available: 2",
                    },
                ],
            },
            {
                id: "policy_q4",
                label: "Are the policies and procedures signed off",
                answers: [
                    {
                        id: "a1",
                        type: "text",
                        placeholder: "Enter # of Trucks",
                        helperText: "Total Trucks Available: 5",
                    },
                ],
            },
            {
                id: "policy_q5",
                label: "Is there an Adverse Driving Conditions Policy / Procedure? - describe via and comment",
                answers: [
                    {
                        id: "a1",
                        type: "text",
                        placeholder: "Enter # of Trucks",
                        helperText: "Total Trucks Available: 5",
                    },
                ],
            },
            {
                id: "policy_q6",
                label: "Is there a Retention of Records Policy?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                    { id: "a3", type: "percentage" },
                ],
            },
            {
                id: "policy_q7",
                label: "Is there a Driver Conduct Policy?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                    { id: "a3", type: "frequency" },
                    { id: "a4", type: "frequency" },
                ],
            },
            {
                id: "policy_q8",
                label: "Is there a policy that stipulates the driver must obey all Federal and Provincial Laws?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                    { id: "a3", type: "frequency" },
                    { id: "a4", type: "frequency" },
                ],
            },
            {
                id: "policy_q9",
                label: "Is there a policy for Bill of Lading (BOL) and Manifests?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                ],
            },
            {
                id: "policy_q10",
                label: "Is there a Distracted Driving Policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                ],
            },
            {
                id: "policy_q11",
                label: "Is there a Safety Equipment (Examples: First Aid Kit, Fire Extinguisher) Policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                ],
            },
            {
                id: "policy_q12",
                label: "Is there a Disciplinary Action Policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                ],
            },
            {
                id: "policy_q13",
                label: "Is there an Authorized Driver policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                ],
            },
            {
                id: "policy_q14",
                label: "Is there a Weights and Dimensions Policy?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                    { id: "a3", type: "frequency" },
                ],
            },
            {
                id: "policy_q15",
                label: "Is there a Fueling Policy?",
                answers: [
                    {
                        id: "a1",
                        type: "text",
                        placeholder: "Enter # of Trailers",
                        helperText: "Total Trailers Available: 2",
                    },
                ],
            },
            {
                id: "policy_q16",
                label: "Is there a Load Securement Policy?",
                answers: [
                    {
                        id: "a1",
                        type: "text",
                        placeholder: "Enter # of Trucks",
                        helperText: "Total Trucks Available: 5",
                    },
                ],
            },
            {
                id: "policy_q17",
                label: "Is there a Defensive Driving Policy?",
                answers: [
                    {
                        id: "a1",
                        type: "text",
                        placeholder: "Enter # of Trailers",
                        helperText: "Total Trailers Available: 2",
                    },
                ],
            },
            {
                id: "policy_q18",
                label: "Is there a speed policy?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "policy_q19",
                label: "Is there a CVSA Inspection Policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "policy_q20",
                label: "Is there a Citation Policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "policy_q21",
                label: "Is there Incident Reporting Policy?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "policy_q22",
                label: "Is there a thorough Drug and Alcohol Policy?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
        ],
    },
    {
        id: "carrier_profile_cver_sms",
        title: "carrier profile / cver / sms",
        questions: [
            {
                id: "profile_q1",
                label: "Do you pull your CVSA or Carrier Profile monthly and then review?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                    { id: "a3", type: "percentage" },
                ],
            },
            {
                id: "profile_q2",
                label: "Do you pull your SMS report monthly and then review?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                    { id: "a3", type: "frequency" },
                ],
            },
        ],
    },
];
