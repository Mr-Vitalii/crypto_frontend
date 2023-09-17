import { FC } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { StyledTableContainer } from "./styled-components";
import { ISingleCoin, ITablePriceData } from "common/types/coins";
import { colors } from "theme";

export const CoinsTable: FC<ITablePriceData> = (
    props: ITablePriceData,
): JSX.Element => {
    const { coins } = props;

    return (
        <>
            <StyledTableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Changes (%)</TableCell>
                            <TableCell align="right">Changes ($)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coins.map((element: ISingleCoin) => (
                            <TableRow
                                key={element.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {element.name}
                                </TableCell>
                                <TableCell align="right">
                                    {element.current_price}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        color:
                                            element.price_change_24h > 0
                                                ? `${colors.greenAccent[200]}`
                                                : `${colors.redAccent[200]}`,
                                    }}
                                >
                                    {element.price_change_percentage_24h.toFixed(
                                        2,
                                    )}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        color:
                                            element.price_change_24h > 0
                                                ? `${colors.greenAccent[200]}`
                                                : `${colors.redAccent[200]}`,
                                    }}
                                >
                                    {element.price_change_24h.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </>
    );
};
