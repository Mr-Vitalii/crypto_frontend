import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "components/Navbar/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useStyles } from "./styles";
import { Sidebar } from "components/Sidebar/Sidebar";

export const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:760px)");
  
  const [isOpen, setIsOpen] = useState(isNonMobile ? true : false);
  const classes = useStyles();

  return (
    <div>
      <Box
        display={isNonMobile ? "flex" : "block"}
        justifyContent="space-between"
        width="100%"
        height="100%"
      >
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isNonMobile={isNonMobile}
        />
      </Box>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
