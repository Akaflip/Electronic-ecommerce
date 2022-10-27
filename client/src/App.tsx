import {Box, Container} from '@mui/material';
import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Container maxWidth="xl">
            <Box sx={{ height: '100vh',
                display: 'flex',
                justifyContent: 'center', width: 1400 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Box>
        </Container>
    </>
  );
}

export default App;