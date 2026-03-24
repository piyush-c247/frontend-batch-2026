import { AccordionConfig } from "@/components/AccordionTable/types";

export const performanceConfig: AccordionConfig[] = [
    {
        id: "programs",
        title: "programs",
        questions: [
            {
                id: "prog_q1",
                label: "Is there a formal 'Weather' Protocol?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "prog_q2",
                label: "Is the Monthly bonus tier (Red Zone) active?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                    { id: "a3", type: "percentage" },
                    { id: "a4", type: "percentage" },
                ],
            },
            {
                id: "prog_q3",
                label: "Is there an incentive to simplify program?",
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
        id: "technology",
        title: "technology",
        questions: [
            {
                id: "tech_q2",
                label: "How many vehicles have dashcam as present?",
                answers: [
                    { id: "a1", type: "text" },
                    { id: "a2", type: "text" },
                ],
            },
            {
                id: "tech_q3",
                label: "Are all dashcam videos downloaded?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "tech_q4",
                label: "How many vehicles have hard braking (faces cameras)?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "tech_q5",
                label: "Does the camera / ELD record - Hard Braking, sudden start, cornering, etc?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                ],
            },
        ],
    },
    {
        id: "training",
        title: "training",
        questions: [
            {
                id: "train_q1",
                label: "How frequently is the driver's driver performance reviewed? - 10% / Score card - 1/4 - 10, 50% - 1/2",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                    { id: "a3", type: "frequency"},
                    { id: "a4", type: "frequency"},
                ],
            },
            {
                id: "train_q2",
                label: "Are any alert mechanisms in driving available to our drivers present?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                    { id: "a3", type: "frequency"},
                    { id: "a4", type: "frequency"},
                ],
            },
            {
                id: "train_q3",
                label: "Is a dynamic (Monthly) training available for drivers in terms of safety after the coaching?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "train_q4",
                label: "Are all safety - coaching files present? - they must contain sign off sheets?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "train_q5",
                label: "How often are safety meetings conducted?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                ],
            },
            {
                id: "train_q6",
                label: "Are all safety handbook and documents sign off by drivers within a week of the handbook?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "train_q7",
                label: "Is there a road test conducted for all drivers hired?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "train_q8",
                label: "Are all safety handbooks, route docs, manuals and maps accessible on the road safety checklist?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
        ],
    },
    {
        id: "trust",
        title: "trust",
        questions: [
            {
                id: "trust_q1",
                label: "Is there a 3rd party audit review?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "trust_q2",
                label: "Are 30% of the carrier audit results sent via electronic submission?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "trust_q3",
                label: "Is there a copy of your audit certificate in the file?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                ],
            },
            {
                id: "trust_q4",
                label: "Is the audit video recorded?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "trust_q5",
                label: "Is the audit hosted with a second reviewer?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
        ],
    },
    {
        id: "security",
        title: "security",
        questions: [
            {
                id: "sec_q1",
                label: "Does the carrier prevent the misuse (theft) of tracking / destroying devices?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "sec_q2",
                label: "Does carrier review all parts of the cargo / terminal security checks for unauthorized and unsafe persons?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "sec_q3",
                label: "Does driver have a record of any cargo / yard log entries regarding theft and loss of products?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
        ],
    },
    {
        id: "management",
        title: "management",
        questions: [
            {
                id: "mgmt_q1",
                label: "Is the CVSA / Carrier Profile updated as per carrier requirement?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "mgmt_q2",
                label: "Are the questions being answered (3PL to 1st party)? - comment on how that questions charts after being?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "mgmt_q3",
                label: "Is the CVSA (broker) review process determined?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "mgmt_q4",
                label: "Is there an investigation process for accident / CVSA reports?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "mgmt_q5",
                label: "Is trail document / student card from road test available after hire of drivers within the file?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "mgmt_q6",
                label: "Is driver training (initial or periodic) for the documenting safety courses (and the pass marks)?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                    { id: "a3", type: "frequency" },
                    { id: "a4", type: "frequency" },
                ],
            },
        ],
    },
];
