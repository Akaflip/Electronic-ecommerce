import React from 'react';
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import {Box, Container, Divider} from "@mui/material";

const Home = () => {
    return (
        <>
            <Container>
                <Box>

                    <Header />
                    <Divider variant="middle" sx={{ bgcolor: "#ffffff", }} />
                    <Slider />
                </Box>
            </Container>
        </>
    )
};

export default Home;