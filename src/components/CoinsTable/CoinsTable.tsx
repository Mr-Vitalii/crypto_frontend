import { FC } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { StyledTableCell, StyledTableContainer } from "./styled-components";
import { ISingleCoin, ITablePriceData } from "common/types/coins";

export const CoinsTable: FC<ITablePriceData> = (
    props: ITablePriceData,
): JSX.Element => {
    const { coins } = props;

    return (
        <>
            <StyledTableContainer component={Paper}>
                <Table aria-label="simple table">
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
                                <StyledTableCell
                                    trendup={element.price_change_24h > 0}
                                    align="right"
                                >
                                    {element.price_change_percentage_24h.toFixed(
                                        2,
                                    )}
                                </StyledTableCell>
                                <StyledTableCell
                                    trendup={element.price_change_24h > 0}
                                    align="right"
                                >
                                    {element.price_change_24h.toFixed(2)}
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </>
    );
};
