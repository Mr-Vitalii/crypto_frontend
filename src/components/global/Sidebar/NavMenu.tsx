import React from "react";
import { StyledListItemButton } from "./styled-components";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { INavMenu, INavMenuProps } from "common/types/sidebar";

export const NavMenu = (props: INavMenuProps) => {
    const { navMenu, active, navigate, isNonMobile, isOpen, setIsOpen } = props;

    const handleClick = (element: INavMenu) => {
        navigate(`${element.path}`);
        !isNonMobile && setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            {navMenu.map((element: INavMenu) => (
                <ListItem
                    key={element.id}
                    sx={{
                        maxWidth: !isNonMobile ? "400px" : "auto",
                        margin: !isNonMobile ? "auto" : "initial",
                    }}
                >
                    <StyledListItemButton
                        active={active === element.path}
                        onClick={() => handleClick(element)}
                    >
                        <ListItemIcon>{element.icon}</ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1">
                                {element.name}
                            </Typography>
                        </ListItemText>
                    </StyledListItemButton>
                </ListItem>
            ))}
        </React.Fragment>
    );
};
