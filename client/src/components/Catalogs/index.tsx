import React from 'react';
import {Box, Divider, Typography} from "@mui/material";
import catalogImage from "../../assets/image/Catalog1.png";
import catalogImage2 from "../../assets/image/Catalog2.png";
import catalogImage3 from "../../assets/image/Catalog3.png";
import catalogImage4 from "../../assets/image/Catalog4.png"


const Catalogs = () => (
    <Box sx={{ mt: "70px", width: "100%" }}>
        <Typography variant="h3" sx={{ color: "#555453", }}>
            Favorite Products
        </Typography>

        <Divider variant='middle'
                 sx={{ maxWidth: "380px", width: "19vw", ml: "-1px", border: "1px solid #002F6C" }} />

        <Divider sx={{  border: "0.4px solid #D0D0D0", mt: "10px", width: "70vw" }} />

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", mt: "25px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#002F6C", height: "370px", width: "25vw" }}>
                <Box component="img" src={catalogImage} />
            </Box>

            <Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",  bgcolor: "#E31C79", height: "185px", width: "20vw" }}>
                    <Box component="img" src={catalogImage2} sx={{ width: "60%", height: "70%" }} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#84BD00", height: "185px", width: "20vw" }}>
                    <Box component="img" src={catalogImage3} sx={{ width: "60%", height: "70%" }} />
                </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#FF6900", height: "370px", width: "25vw" }}>
                <Box component="img" src={catalogImage4} />
            </Box>


        </Box>
    </Box>
);

export default Catalogs;