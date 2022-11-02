import React from 'react';
import Layout from "../../components/Layout";
import {Box, Grid, Typography} from "@mui/material";
import CardComponent from "../../components/Card";
import CategoriesBar from "../../components/CategoriesBar";
import {useParams} from "react-router-dom";

const e = [1,2,3,4,5,6]

const Products = () => {

    let { category } = useParams();

    return (
        <Layout>
            <Box sx={{ flexDirection: 1 }}>
                <CategoriesBar category={category} />

                {/*<Grid container spacing={4} sx={{gap: "15px"}}>
                    {e.map((_, i) => (
                        <Grid>
                            <CardComponent key={i} title={"Apple iPad 10.2 Retina 32GB Gris Espacial"}
                                           price={"22,200,00"}
                            />
                        </Grid>
                    ))}
                </Grid> */}
            </Box>
        </Layout>

    )
}

export default Products;