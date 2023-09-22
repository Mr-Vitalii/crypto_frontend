import { FC } from "react";
import { deleteWatchListElement } from "redux/watchlist/thunks";
import { toast } from "react-hot-toast";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ISingleCoin, ITablePriceData } from "common/types/coins";
import {
    EmptyContainer,
    StyledTableCell,
    StyledTableContainer,
} from "./styled-components";
import { useAppDispatch } from "utils/hooks";
import { getErrorMessage } from "utils/helpers/getErrorMessage";

export const CoinsTable: FC<ITablePriceData> = (
    props: ITablePriceData,
): JSX.Element => {
    const { coins, isWatchlist } = props;
    const dispatch = useAppDispatch();

    const handleDelete = async (id: string) => {
        try {
            await dispatch(deleteWatchListElement(id)).unwrap();
            toast.success(`Element deleted`, {
                duration: 3000,
            });
        } catch (e: any) {
            toast.error(getErrorMessage(e), {
                duration: 3000,
            });
        }
    };

    return (
        <>
            <StyledTableContainer component={Paper}>
                {coins.length === 0 ? (
                    <EmptyContainer>
                        <Typography sx={{ textAlign: "center" }}>
                            You haven't added any items to the list yet
                        </Typography>
                    </EmptyContainer>
                ) : (
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
                                    {isWatchlist && (
                                        <TableCell
                                            sx={{ p: 0, cursor: "pointer" }}
                                        >
                                            <DeleteForeverIcon
                                                onClick={() =>
                                                    handleDelete(element.id)
                                                }
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </StyledTableContainer>
        </>
    );
};
