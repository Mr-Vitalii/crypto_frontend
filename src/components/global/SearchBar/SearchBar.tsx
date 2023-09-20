import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Stack, Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAppSelector } from "utils/hooks";
import { selectAllCoins } from "redux/coins/selectors";
import { ISingleCoin } from "common/types/coins";

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
                        placeholder="Search"
                        InputProps={{
                            ...element.InputProps,
                            type: "search",
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
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
