import {Box, Container} from '@mui/material';
import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Products from "./pages/Products";


function App() {
  return (
    <>
        <Container maxWidth="xl">
            <Box sx={{
                display: 'flex',
                justifyContent: 'center', flexDirection: "column", width: 1400 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products/:category" element={<Products />} />
                </Routes>
            </Box>
        </Container>
    </>
  );
}

export default App;