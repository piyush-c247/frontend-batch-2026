import { AccordionConfig } from "@/components/AccordionTable/types";

export const maintenanceConfig: AccordionConfig[] = [
    {
        id: "maintenance_equipment_files",
        title: "Maintenance / equipment files",
        questions: [
            {
                id: "maint_q1",
                label: "Does the Carrier utilize an e-PM schedule?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "maint_q2",
                label: "Does the carrier retain record of blank yard checks / seasonal tire work orders?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },],
            },
            {
                id: "maint_q3",
                label: "Does the carrier have a retention policy?",
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
                ],
            },
            {
                id: "maint_q4",
                label: "Is there a policy for Driver / Operators to book in defect Rectifications?",
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
                ],
            },
            {
                id: "maint_q5",
                label: "Does the Maintenance program indicate that the driver shall not be permitted to drive unless all paper defects are repaired, corrected, and certified on that the repair is corrected / unnecessary?",
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
                        placeholder: "Enter # of Trailers",
                        helperText: "Total Trailers Available: 2",
                    },
                ],
            },
            {
                id: "maint_q6",
                label: "Does a process ensure that trailer / defect records are corrected and signed off once the repair is completed? - 40% for record stack oldest in the last 30 days for review",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "maint_q7",
                label: "Does the policy cover how long assessment files need to be kept?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "maint_q8",
                label: "Does the policy state the DVIR's must be be kept for 6 months if no defects and 2 years if defects?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "maint_q9",
                label: "Does the policy detail the requirement to carrier advice by 3 within the release?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
            {
                id: "maint_q10",
                label: "Does the carrier have a Maintenance Plan?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                ],
            },
        ],
    },
    {
        id: "equipment",
        title: "equipment",
        questions: [
            {
                id: "equip_q1",
                label: "Does the equipment file contain the Purchase or Lease Agreement?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "equip_q2",
                label: "Does the equipment file contain the original side rail vin?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "equip_q3",
                label: "Are all PM inspections completed and being getting back as per the schedule?",
                answers: [
                    { id: "a1", type: "frequency" },
                    { id: "a2", type: "frequency" },
                    { id: "a3", type: "frequency" },
                    { id: "a4", type: "frequency" },
                ],
            },
            {
                id: "equip_q4",
                label: "Are all annual inspections complete and is this equipment going back to systematic date?",
                answers: [
                    { id: "a1", type: "text" },
                    { id: "a2", type: "text" },
                    { id: "a3", type: "text" },
                    { id: "a4", type: "text" },
                ],
            },
            {
                id: "equip_q5",
                label: "Is there an expiry set for this?",
                answers: [
                    { id: "a1", type: "text" },
                    { id: "a2", type: "text" },
                    { id: "a3", type: "text" },
                    { id: "a4", type: "text" },
                ],
            },
            {
                id: "equip_q6",
                label: "Are all asset numbers documented and checked within the company?",
                answers: [
                    { id: "a1", type: "percentage" },
                    { id: "a2", type: "percentage" },
                    { id: "a3", type: "percentage" },
                    { id: "a4", type: "percentage" },
                ],
            },
        ],
    },
    {
        id: "cvsa_inspections",
        title: "cvsa inspections",
        questions: [
            {
                id: "cvsa_q1",
                label: "Does the listed CVSA inspection have the supporting work order attached?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "cvsa_q2",
                label: "Are OOS / Repairs recorded on CVSA inspections completed in a timely manner?",
                answers: [
                    { id: "a1", type: "yesNo" },
                    { id: "a2", type: "yesNo" },
                    { id: "a3", type: "yesNo" },
                    { id: "a4", type: "yesNo" },
                ],
            },
            {
                id: "cvsa_q3",
                label: "Are broker inspection records all up completed and recorded back to the broker records?",
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
