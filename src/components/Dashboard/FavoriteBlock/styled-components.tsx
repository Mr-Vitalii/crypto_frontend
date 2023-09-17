import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { colors } from "theme";

export const FavoriteCardItem = styled(Grid)(
    ({ theme }: { theme: Theme }) => `
            background-color: ${theme.palette.secondaryBackground.main};
            padding: 20px 16px;
            min-height: 185px;
            border: 1px solid ${theme.palette.borderColor.main};
            border-radius: 12px;
`,
);

export const CoinDetails = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const PriceTrend = styled(Box)(
    ({ trendUp }: { trendUp: boolean }) => `
    width: 80px;
    display: flex;
    align-items: center;
    padding: 2px;
    border-radius: 4px;
    background-color:  ${
        trendUp ? colors.greenAccent[200] : colors.redAccent[200]
    };
    color: ${trendUp ? colors.greenAccent[500] : colors.redAccent[500]};
`,
);
