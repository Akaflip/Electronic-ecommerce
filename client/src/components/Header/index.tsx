import React from 'react';
import {AppBar, Box, Divider, Toolbar} from "@mui/material";
import logo from "../../assets/image/Logo.png";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import Categories from "./Categories";
import { NavLink } from 'react-router-dom';



const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "#002F6C", width: "100%" }}>
                <Toolbar>
                    <Box sx={{ ml: "40px" }}>
                        <NavLink to={'/'}>
                            <img src={logo} alt="logo"/>
                        </NavLink>
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