import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const LoadingComponent: FC = (): JSX.Element => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
            }}
        >
            <CircularProgress color={"secondary"} />
        </Box>
    );
};
