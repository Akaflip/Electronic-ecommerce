import React from 'react';
import {Badge, Box, Stack, Typography} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Icons = () => (
    <>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ display: "flex", gap: 5, marginLeft: 20, marginTop: 4 }}>
            <Box sx={{ display: "flex", gap: "12px" }}>
                <Badge  badgeContent={4} color="secondary">
                    <FavoriteBorderOutlinedIcon />
                </Badge>
                <Typography >
                    Favorites
                </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "12px" }}>
                <Badge  badgeContent={5} color="warning">
                    <ShoppingCartOutlinedIcon />
                </Badge>
                <Typography >
                    Cart
                </Typography>
            </Box>
        </Stack>
    </>
);

export default Icons;