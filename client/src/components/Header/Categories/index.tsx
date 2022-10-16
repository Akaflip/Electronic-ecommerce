import React from 'react';
import {Stack} from "@mui/material";

const categoriesList = [
    {
        name: "Computers"
    },
    {
        name: "Gaming"
    },
    {
        name: "Apple"
    },
    {
        name: "Storage"
    },
    {
        name: "Images and Sound"
    },
    {
        name: "printers"
    },
    {
        name: "Office"
    },
    {
        name: "More categories\n"
    },

]

const Categories = () => (
    <>
        <Stack>
            {categoriesList.map((o, i) => (
                <div key={i}>
                    {o.name}
                </div>
            ))}
        </Stack>

    </>
);

export default Categories;