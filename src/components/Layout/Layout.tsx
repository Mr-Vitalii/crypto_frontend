import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "components/Navbar/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useStyles } from "./styles";

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const classes = useStyles();
  const isNonMobile = useMediaQuery("(min-width:760px)");
    
  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isNonMobile={isNonMobile} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
