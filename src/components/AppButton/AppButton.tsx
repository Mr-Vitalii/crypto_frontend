import { styled } from "@mui/material/styles";
import { Button, Theme } from "@mui/material";
import { colors } from "theme";

export const AppButton = styled(Button)(
    ({ theme }: { theme: Theme }) => `
    border-radius: 4px;
    background-color: ${colors.blueAccent[500]};
    box-shadow: 0px 1px 7px ${colors.blueAccent[700]} ;
    padding: 10px 20px ;
    min-width: 185px ;
    max-width: 300px;
    color:${theme.palette.common.white} ;
    transition: box-shadow 0.3s;

    &:hover {
        background-color:  ${colors.blueAccent[400]} ;
        box-shadow: 0px 1px 20px ${colors.blueAccent[400]};
    };
`,
);
