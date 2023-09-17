import React from "react";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { colors } from "theme";

export const NavMenu = (props: any) => {
    const { navMenu, active, navigate } = props;

    return (
        <React.Fragment>
            {navMenu.map((element: any) => (
                <ListItem key={element.id}>
                    <ListItemButton
                        sx={{
                            backgroundColor:
                                active === element.path
                                    ? colors.blueAccent[500]
                                    : "transparent",
                            color:
                                active === element.path
                                    ? colors.whiteAccent[500]
                                    : colors.secondary[500],
                            "& .MuiSvgIcon-root": {
                                color:
                                    active === element.path
                                        ? colors.whiteAccent[500]
                                        : colors.secondary[500],
                            },
                            "&:hover, &:focus": {
                                backgroundColor: colors.blueAccent[500],
                                color: colors.whiteAccent[500],
                                borderRadius: "4px",
                                "& .MuiSvgIcon-root": {
                                    color: colors.whiteAccent[500],
                                },
                            },
                        }}
                        onClick={() => navigate(`${element.path}`)}
                    >
                        <ListItemIcon>{element.icon}</ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1">
                                {element.name}
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </React.Fragment>
    );
};
