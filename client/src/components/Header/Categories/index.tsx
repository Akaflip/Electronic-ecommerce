import React from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import ExpandMore from '@mui/icons-material/ExpandMore';
import {NavLink} from "react-router-dom";


const categoriesList = [
    {
        title: "Computers",
        id: 0,
        categories: [
            "Desktop",
            "Gaming Desktop",
            "Laptop"
        ]
    },
    {
        title: "Gaming",
        id: 0,
        categories: [
            "Desktop",
            "Gaming Desktop",
            "Laptop"
        ]
    },
    {
        title: "Apple",
        id: 0,
        categories: [
            "Desktop",
            "Gaming Desktop",
            "Laptop"
        ]
    },
    {
        title: "Storage",
        id: 0,
        categories: [
            "Desktop",
            "Gaming Desktop",
            "Laptop"
        ]
    },
    {
        title: "Images and Sound",
        id: 0,
        categories: [
            "Desktop",
            "Gaming Desktop",
            "Laptop"
        ]
    },
    {
        title: "printers",
        id: 0,
        categories: [
            "Desktop",
            "Gaming Desktop",
            "Laptop"
        ]
    },
    {
        title: "Office",
        id: 0,
        categories: [
            "Desktop",
            "Gaming Desktop",
            "Laptop"
        ]
    },
    {
        title: "More categories",
        id: 0,
        categories: [
            "Desktop",
            "Gaming Desktop",
            "Laptop"
        ]
    },

];

const Categories = () => (

    <>
        <Stack direction={{ xs: 'column', sm: 'row' }}
               spacing={{ xs: 1, sm: 2, md: 4 }}
               sx={{ mt: "20px", gap: "25px", height: 50 }}>
            {categoriesList.map((o, i) => (
                <Box key={i} sx={{ display: "flex", ml: "70px", ":hover": {
                        "div": {
                            display: "flex",
                        }
                    }  }}>
                    <Typography>
                        {o.title}
                        <ExpandMore fontSize="small"  />
                        <Box component="div"
                             sx={{ display: "none", flexDirection: "column", bgcolor: "#fff", width: "200px", textAlign: "center", position: "absolute", zIndex: "100000" }}>
                            <Typography variant="body1" sx={{ color: "#002F6C" }}>
                                {o.title}
                            </Typography>

                            {o.categories.map(( name, i ) => <NavLink to={`/${i}`} style={{ textDecoration: "none" }} ><Typography sx={{ color: "#000", mt: "5px" }}> {name} </Typography></NavLink>)}



                        </Box>
                    </Typography>
                </Box>

            ))}
        </Stack>

    </>
);

export default Categories;