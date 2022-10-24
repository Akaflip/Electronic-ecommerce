import {Box, Container} from '@mui/material';
import React from 'react';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <>
        <Container maxWidth="xl">
            <Box sx={{ height: '100vh',
                display: 'flex',
                justifyContent: 'center', width: 1400 }}>

                <Home />
            </Box>
        </Container>
    </>
  );
}

export default App;