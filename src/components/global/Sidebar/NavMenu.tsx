import React from "react";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { StyledListItemButton } from "./styled-components";

export const NavMenu = (props: any) => {
    const { navMenu, active, navigate } = props;

    return (
        <React.Fragment>
            {navMenu.map((element: any) => (
                <ListItem key={element.id}>
                    <StyledListItemButton
                        active={active === element.path}
                        onClick={() => navigate(`${element.path}`)}
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
