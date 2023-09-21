import { ReactNode } from "react";

export interface ISidebarProps {
    isNonMobile: boolean;
    drawerWidth: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export interface INavMenu {
    icon: ReactNode;
    id: number;
    name: string;
    path: string;
}

export interface INavMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    isNonMobile: boolean;
    active: string;
    navigate: (to: string) => void;
    navMenu: INavMenu[];
}
