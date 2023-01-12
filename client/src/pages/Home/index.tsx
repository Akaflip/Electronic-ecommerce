import React from 'react';
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import {Box, Container, Divider} from "@mui/material";
import FavoritesProducts from "../../components/FavoritesProducts";
import LatestProducts from "../../components/LatestProducts";
import Catalogs from "../../components/Catalogs";
import Layout from "../../components/Layout";

const Home = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", 
        flexDirection: "column", }}>
            <Layout>

<Divider variant="middle" sx={{ bgcolor: "#ffffff", }} />
<Slider />
<FavoritesProducts />
<LatestProducts />
<Catalogs />
</Layout>
        </Box>
                


    )
};

export default Home;