import React, { FC, useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

// 
export const SearchBar: FC = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const assetsArray = [
    { name: "coin-name1" },
    { name: "coin-name2" },
    { name: "coin-name3" },
  ];

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        value={selectedItem}
        onChange={(e: any, value: string | null) => {
       
          setSelectedItem(null);
        }}
        renderInput={(element) => (
          <TextField
            {...element}
            label="Поиск"
            InputProps={{
              ...element.InputProps,
              type: "search",
            }}
          />
        )}
        options={assetsArray.map((element: { name: string }) => element.name)}
      />
    </Stack>
  );
};

