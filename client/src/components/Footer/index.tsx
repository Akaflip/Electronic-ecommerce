import React from 'react';
import {Box, Typography} from "@mui/material";

import arrow from "../../assets/image/Rectangle.png";

import fb from "../../assets/image/socialNetworks/fb.png";
import tw from "../../assets/image/socialNetworks/tw.png";
import ig from "../../assets/image/socialNetworks/Ig.png";
import In from "../../assets/image/socialNetworks/In.png";
import You from "../../assets/image/socialNetworks/Youtube.png"

import chat from "../../assets/image/socialNetworks/Chat.png";

import paypal from "../../assets/image/PayApps/PP.png"
import visa from "../../assets/image/PayApps/Visa.png"
import masterCard from "../../assets/image/PayApps/MC.png"
import azur from "../../assets/image/PayApps/Azul_home_logo 1.png"
import tp from "../../assets/image/PayApps/tpago wht 1.png"


const Footer = () => {

    return (
        <footer>
            <Box sx={{ display: "flex", gap: "20px", bgcolor: "#002F6C", color: "#fff", mt: "3%", width: "100%" }}>

                <Box sx={{ ml: "40px", pt: "30px" }}>
                    <Typography variant='h5'>
                        Us
                    </Typography>
                    <Box sx={{ ml:"-20px", mt:"10px" }}>
                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>Who we are Services Jobs Contacts</Typography>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>Services</Typography>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>Jobs</Typography>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>Contacts</Typography>
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ ml: "40px", pt: "30px" }}>
                    <Typography variant='h5'>
                        Your account
                    </Typography>
                    <Box sx={{ mt:"10px" }}>
                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>Log in</Typography>
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ ml: "40px", pt: "30px" }}>
                    <Typography variant='h5'>
                        Aid
                    </Typography>
                    <Box sx={{ ml:"-20px", mt:"10px" }}>
                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>Warranty</Typography>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>Frequent questions</Typography>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>returns</Typography>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>How do I make a purchase?</Typography>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ display: "flex", gap: "5px" }}>
                            <Box>
                                <Box component="img" src={arrow} />
                            </Box>
                            <Typography>Apply for financing</Typography>
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{ display: "flex", flexDirection: "column", ml: "auto", mr: "3em", pt: "60px" }}>
                    <Box sx={{ display: "flex", gap: "12px", ml: "auto" }}>
                        <div><img src={fb} alt=""/></div>
                        <div><img src={tw} alt=""/></div>
                        <div><img src={ig} alt=""/></div>
                        <div><img src={In} alt=""/></div>
                        <div><img src={You} alt=""/></div>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                        <img src={chat} alt=""/>
                    </Box>
                    <Box sx={{ display: "flex", gap: "12px" }}>
                        <div><img src={paypal} alt=""/></div>
                        <div><img src={visa} alt=""/></div>
                        <div><img src={masterCard} alt=""/></div>
                        <div><img src={azur} alt=""/></div>
                        <div><img src={tp} alt="" /></div>
                    </Box>
                </Box>


            </Box>
        </footer>
    )
}

export default Footer;