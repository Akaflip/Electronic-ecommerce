import React from 'react';
import {Box, Divider, Stack, Typography} from "@mui/material";
import CardComponent from "../Card";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const steps = [[1,2,3,4,5,],[6,7,8]];


const FavoritesProducts = () => {
    let [step, setStep] = React.useState(0);

    return(
        <Box sx={{ mt: "70px", width: "100%" }}>
            <Typography variant="h3" sx={{ color: "#555453", }}>
                Favorite Products
            </Typography>

            <Divider variant='middle'
                     sx={{ maxWidth: "380px", width: "19vw", ml: "-1px", border: "1px solid #002F6C" }} />

            <Divider sx={{  border: "0.4px solid #D0D0D0", mt: "10px", width: "73vw" }} />

            <Stack direction="row" spacing={3}
                   sx={{ maxWidth: "1350px", width: "100vw", mt: "5%", alignItems: "center" }}>

                { step !== 0 ? <KeyboardArrowLeftIcon fontSize='large'
                                                            sx={{ bgcolor: "#D0D0D0", borderRadius: "15px", ":hover": {
                                                                    bgcolor: "#E31C79" } }} onClick={() => setStep(step - 1)}/>
                    : <KeyboardArrowLeftIcon fontSize='large' sx={{ bgcolor: "#D0D0D0", borderRadius: "15px",  ":hover": {
                            bgcolor: "#E31C79" } }} onClick={() => setStep(steps.length - 1)}/> }


                {steps[step].map((st, i) => (
                    (
                        <CardComponent key={i} title={"Apple iPad 10.2 Retina 32GB Gris Espacial"}
                                       price={"22,200,00"}
                        />
                    )
                ))}


                { step !== steps.length - 1 ? <KeyboardArrowRightIcon fontSize='large'
                                                                       sx={{ bgcolor: "#D0D0D0", borderRadius: "15px", ":hover": {
                                                                           bgcolor: "#E31C79" } }} onClick={() => setStep(step + 1)}/>
                    : <KeyboardArrowRightIcon fontSize='large' sx={{ bgcolor: "#D0D0D0", borderRadius: "15px", ":hover": {
                            bgcolor: "#E31C79" } }} onClick={() => setStep(0)}/> }







            </Stack>

        </Box>
    )
};

export default FavoritesProducts;