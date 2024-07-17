import  { ReactElement } from "react";

export interface SIDEBAR_MENUS_PROPS{
    label: string,
    icon: ReactElement
    link:string
}

export interface ACTION_BUTTON_PROPS{
    label: string;
    icon: ReactElement,
    link?:string
}

export interface BUTTON_PROPS{
    label:string
}

export interface CATEGORY_PROPS{
    label: string;
    link?:string
}