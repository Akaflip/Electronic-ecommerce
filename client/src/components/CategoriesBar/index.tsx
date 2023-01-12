import React from 'react';
import {Box, Typography} from "@mui/material";
import {categoriesList} from "../../assets/categories";
import arrow from "../../assets/image/Rectangle 31.png"
import clickedArrow from "../../assets/image/Rectangle 5.png"
import {NavLink} from "react-router-dom";

const CategoriesBar = ({ category }: any) => {
    const [activeCategory, setActiveCategory] = React.useState('');

    return (
    <Box
        sx={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            width: "15vw", boxShadow: "4px 4px 20px #D0D0D0", borderRadius: "10px",mt: "2%",
        }}>

        <Box sx={{ml: "47px"}}>
            <Typography variant="h4" sx={{color: "#555453"}}>
                Categories
            </Typography>
            {categoriesList.map((o, i) => (
                <Box>
                    <Box component={NavLink} to={`/products/${o.title}`} key={i} sx={{ display: "flex", flexDirection: "column", color: "#555453", textDecoration: "none", mt: "10px", fontWeight: "700"}}>
                        {o.title}
                    </Box>
                    {category == o.title ? (
                        <Box sx={{display: "flex", flexDirection: "column", color: "#002F6C", fontWeight: "600"}}>
                            {o.categories.map((c, i) => (
                                <Box key={i} sx={{display: "flex", gap: "5px"}} onClick={() => setActiveCategory(c.name)}>
                                    <div>{activeCategory == c.name ? (<img src={clickedArrow} alt="clickedArrow"/>) : (<img src={arrow} alt="array"/>)}</div>
                                    <Typography variant='body1'>
                                        {c.name}
                                        {activeCategory == c.name ?
                                            c.categorie.map((ca, i) => (<NavLink to={`${ca}`} >
                                                <Typography key={i} variant='subtitle2'>{ca}</Typography>
                                            </NavLink>)) : null}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>) : null}
                </Box>
            ))}
        </Box>
    </Box>
    )};

export default CategoriesBar;