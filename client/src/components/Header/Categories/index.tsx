import React from 'react';
import {Box, Stack} from "@mui/material";
import ExpandMore from '@mui/icons-material/ExpandMore';


const categoriesList = [
    {
        name: "Computers",
        id: 0,
    },
    {
        name: "Gaming",
        id: 0,
    },
    {
        name: "Apple",
        id: 0,
    },
    {
        name: "Storage",
        id: 0,
    },
    {
        name: "Images and Sound",
        id: 0,
    },
    {
        name: "printers",
        id: 0,
    },
    {
        name: "Office",
        id: 0,
    },
    {
        name: "More categories",
        id: 0,
    },

];

const Categories = () => (
    <>
        <Stack direction={{ xs: 'column', sm: 'row' }}
               spacing={{ xs: 1, sm: 2, md: 4 }}
               sx={{ mt: "20px", gap: "25px", height: 50 }}>
            {categoriesList.map((o, i) => (
                <Box key={o.id} sx={{ display: "flex", ml: "70px",  }}>
                    {o.name}
                    <ExpandMore fontSize="small"  />
                </Box>
            ))}
        </Stack>

    </>
);

export default Categories;