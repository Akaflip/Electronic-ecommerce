import React from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography, Card, Rating, Box} from "@mui/material";
import Product from "../../assets/image/product.png"

type cardProps = {
    title: string;
    price: string;

}

const CardComponent = ({ title, price }: cardProps) => {
    const [value, setValue] = React.useState<number | null>(2);


    return (
        <Card sx={{ maxWidth: "250px", width: "100%", ":hover": {
                "button": {
                    display: "block"
                }
            } }}>
            <CardMedia sx={{ textAlign: "center" }}>
                <Box component="img"
                     src={Product} alt="product"/>
            </CardMedia>

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