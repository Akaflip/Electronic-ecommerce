import React from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography, Card, Rating, Box} from "@mui/material";
import Product from "../../assets/image/product.png";


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

type cardProps = {
    title: string;
    price: string;

}

const CardComponent = ({ title, price }: cardProps) => {
    const [value, setValue] = React.useState<number | null>(2);


    return (
        <Card sx={{ maxWidth: "250px", width: "100%", ":hover": {
            boxShadow: "0px 0px 20px #D0D0D0",
            borderRadius: "10px",
                "button": {
                    display: "block"
                },
                "div": {
                    display: "block",
                },
            } }}>
            <CardMedia sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", ":hover": {

            } }}>
                <Box component="img"src={Product} alt="product"/>
            </CardMedia>
            <Box component="div" sx={{ display: "none", position: "absolute", mt: "-190px", ml: "195px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", ml: "auto", mr: "30px", pl: "auto", height: "30px", width: "30px", borderRadius: "4px", alignItems: "center", bgcolor: "#E5E5E5", ":hover": { bgcolor: "#E31C79" } }}>
                        <FavoriteBorderIcon sx={{ height: "20px", ml: "auto", mr: "auto" }}/>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", ml: "auto", mr: "30px", mt: "5px", height: "30px", width: "30px", borderRadius: "4px", alignItems: "center", bgcolor: "#E5E5E5", ":hover": { bgcolor: "#E31C79" } }}>
                        <RemoveRedEyeOutlinedIcon sx={{ height: "20px", ml: "auto", mr: "auto" }}/>
                    </Box>
                </Box>

            <Box sx={{ bgcolor: "#F9F9F9" }}>
                <CardContent>
                    <Typography sx={{ fontSize: "18px", color: "#002F6C", lineHeight: "18px", fontWeight: 400 }}>
                        {title}
                    </Typography>

                    <Box sx={{ display: "flex", pt: "15px", gap: "7px" }} >
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            sx={{ ml: "-10px" }}
                        />
                        <Typography variant="subtitle1" sx={{ marginTop: "5px" }}> 4 reviews </Typography>
                    </Box>

                    <Typography variant="h6" sx={{ color: "#E31C79" }}>
                        ${price}
                    </Typography>


                </CardContent>
                <CardActions>
                    <Button sx={{ display: "none", bgcolor: "#E31C79", color: "#fff",
                        width: "80%", height: "100%",
                        marginLeft: "auto", marginRight: "auto", ":hover": {
                            backgroundColor: "#bf1565"
                        } }}>

                        Add to cart
                    </Button>
                </CardActions>
            </Box>
        </Card>
        );
    };

export default CardComponent;