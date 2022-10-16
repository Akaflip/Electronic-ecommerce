import {Box, Container} from '@mui/material';
import React from 'react';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <>
        <Container>
            <Box sx={{ height: '100vh',
                display: 'flex',
                justifyContent: 'center'}}>

                <Home />
            </Box>
        </Container>
    </>
  );
}

export default App;
