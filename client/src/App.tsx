import {Box, Container} from '@mui/material';
import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {Route, Routes, useParams} from "react-router-dom";
import Products from "./pages/Products";


function App() {


  return (
    <>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", 
            flexDirection: "column", }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products/:category" element={<Products />} />
                </Routes>
            </Box>
        
    </>
  );
}

export default App;