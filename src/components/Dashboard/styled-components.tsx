import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { Grid } from "@mui/material";

export const StyledGridContainer = styled(Grid)(
    ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.secondaryBackground.main,
        padding: "20px 16px",
        marginBottom: "32px",
        minHeight: "270px",
        border: `1px solid ${theme.palette.borderColor.main}`,
        borderRadius: "12px",
    }),
);
