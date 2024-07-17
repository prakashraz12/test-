import { SIDEBAR_MENUS_PROPS } from "./types/types";
import { CircleUserRound, Handshake, LayoutDashboard, Lightbulb, Users } from 'lucide-react';

export const sideBarMenus: SIDEBAR_MENUS_PROPS[] = [
    {
        label: "Dashboard",
        link: "/",
        icon: <LayoutDashboard  className="w-5"/>
    },
    {
        label: "Contact",
        link: "/",
        icon: <CircleUserRound className="w-5"/>
    },
    {
        label: "Leads",
        link: "/",
        icon: <Users className="w-5" />
    },
    {
        label: "Opportunity",
        link: "/",
        icon: <Lightbulb className="w-5"/>
    },
    {
        label: "Coustomer",
        link: "/",
        icon: <Handshake className="w-5" />
    }
]

