import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const NavMenu = (props: any) => {
  const { navMenu, active, classes, navigate } = props;

  return (
    <React.Fragment>
      {navMenu.map((element: any) => (
        <ListItem key={element.id}>
          <ListItemButton
            onClick={() => navigate(`${element.path}`)}
            className={
              active === element.path
                ? `${classes.navItem} ${classes.active}`
                : classes.navItem
            }
          >
            <ListItemIcon>{element.icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="body1">{element.name}</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </React.Fragment>
  );
};
