export const categoryList:CATEGORY_PROPS[] = [
    {
        label: "Activity",
        link: ""
    },
    {
        label: "Contact",
        link: ""
    },
    {
        label: "Engagment",
        link: ""
    }
];

import { ACTION_BUTTON_PROPS, BUTTON_PROPS, CATEGORY_PROPS } from "@/types/types";
import { Plus,Phone, Mail, Ellipsis } from "lucide-react";
export const actionButtons:ACTION_BUTTON_PROPS[] = [
    {
        label: "Log",
        icon: <Plus />,
        link:""
    },
    {
        label: "Call",
        icon: <Phone />,
        link:""
    },
    {
        label: "Email",
        icon: <Mail />,
        link:""
    },
    {
        label: "More",
        icon: <Ellipsis />,
        link:""
    },
    
]
export const buttons:BUTTON_PROPS[] = [
    { label: "New" },
    { label: "Proposal Creation" },
    { label: "Presentation" },
    { label: "Negotiation" },
    { label: "Closed" },
  ];