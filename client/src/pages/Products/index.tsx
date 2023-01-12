import React from 'react';
import Layout from "../../components/Layout";
import {Box, Grid, Typography} from "@mui/material";
import CardComponent from "../../components/Card";
import CategoriesBar from "../../components/CategoriesBar";
import {NavLink, useParams} from "react-router-dom";
import Pagination from '@mui/material/Pagination';


const e = [[1,2,3,4,1,2,3,4],[5,6,7,8,9]]

const Products = () => {
    let [step, setStep] = React.useState(0);
    let { category } = useParams();
    let href = window.location.href.split('/',-3);

    return (
        <Layout>
            <Box sx={{ display: "flex", flexDirection: 'row', gap: "40px", height: "100%"}}>
                <Box>
                    <Typography sx={{ mt: "20px",}}>
                        <NavLink to={'/'} style={{ textDecoration: "none" }}>Home/</NavLink>
                            {href.slice(3).map((link, i) => (
                                <NavLink key={i} to={`/${link}`} style={{ textDecoration: "none" }}>
                                    {link.replace(/%/g, ' ').replace(/20/g, '')}/
                                </NavLink>
                                ))}
                    </Typography>
                <CategoriesBar category={category} />
                </Box>

                <Box >
                    <Grid container spacing={2} sx={{gap: "15px", mt: "3%", ml: "auto"}}>
                        {e[step].map((_, i) => (
                            <Grid>
                                <CardComponent key={i} title={"Apple iPad 10.2 Retina 32GB Gris Espacial"}
                                           price={"22,200,00"}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Pagination count={e.length} color="secondary" sx={{ ml: "auto" }}/>
                </Box>
            </Box>
        </Layout>

    )
}

export default Products;