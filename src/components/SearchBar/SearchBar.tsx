import React, { FC, useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "utils/hooks";
import { selectAllCoins } from "redux/coins/selectors";
import { ISingleCoin } from "common/types/coins";

//
export const SearchBar: FC = (): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const navigate = useNavigate();
    const allCoins: ISingleCoin[] = useAppSelector(selectAllCoins);

    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                value={selectedItem}
                onChange={(e: any, value: string | null) => {
                    navigate(`single/${value}`);
                    setSelectedItem(null);
                }}
                renderInput={(element) => (
                    <TextField
                        {...element}
                        label="Search"
                        InputProps={{
                            ...element.InputProps,
                            type: "search",
                        }}
                    />
                )}
                options={allCoins.map(
                    (element: { name: string }) => element.name,
                )}
            />
        </Stack>
    );
};
