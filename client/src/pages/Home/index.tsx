import React from 'react';
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import {Box, Container, Divider} from "@mui/material";
import FavoritesProducts from "../../components/FavoritesProducts";
import LatestProducts from "../../components/LatestProducts";
import Catalogs from "../../components/Catalogs";

const Home = () => {
    return (
        <>
            <Container>
                <Box >

                    <Header />
                    <Divider variant="middle" sx={{ bgcolor: "#ffffff", }} />
                    <Slider />
                    <FavoritesProducts />
                    <LatestProducts />
                    <Catalogs />
                </Box>
            </Container>
        </>
    )
};

export default Home;