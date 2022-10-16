import React from 'react';
import {AppBar, Box, Divider, Toolbar} from "@mui/material";
import logo from "../../assets/image/Logo.png";
import SearchBar from "./SearchBar";
import Icons from "./Icons";



const Header: React.FC = () => {
    return (
            <AppBar position="static"
                    sx={{ display: "flex", width: 1400, height: "800", backgroundColor: "#002F6C" }}>

                <Toolbar>
                    <Box>
                        <img src={logo} alt="logo"/>
                    </Box>
                    <SearchBar />
                    <Icons />
                </Toolbar>
                <Divider variant="middle" sx={{ bgcolor: "#ffffff", marginTop: "15px" }} />
            </AppBar>
    )
};

export default Header;