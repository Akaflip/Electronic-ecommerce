import {Box, Container} from '@mui/material';
import React from 'react';
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <>
        <Container>
            <Box sx={{ height: '100vh',
                display: 'flex',
                justifyContent: 'center' }}>
                <Header />
            </Box>
        </Container>
    </>
  );
}

export default App;
