import React from 'react';
import {AppBar, Box, Divider, Toolbar} from "@mui/material";
import logo from "../../assets/image/Logo.png";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import Categories from "./Categories";



const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "#002F6C", maxWidth: "1400px", width: "90vw" }}>
                <Toolbar>
                    <Box sx={{ ml: "40px" }}>
                        <img src={logo} alt="logo"/>
                    </Box>
                    <SearchBar />
                    <Icons />
                </Toolbar>
                <Divider variant="middle" sx={{ bgcolor: "#ffffff", marginTop: "15px" }} />
                <Categories />
            </AppBar>
    )
};

export default Header;