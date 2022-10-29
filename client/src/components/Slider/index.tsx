import React from 'react';
import { Banners } from '../../assets/Banners';
import {Box, Stack} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import dot from '../../assets/image/dot.png';
import activeDot from '../../assets/image/activeDot.png';



const Slider = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);

    return(
        <>
            <Box sx={{ bgcolor: "#002F6C", width: "73vw", height: "50vh", }}>
                {
                    Banners.map((b, i) => (
                        <div key={i}>
                            {
                                activeSlide == i ? (<Box
                                    component="img"
                                    sx={{
                                        height: "50vh",
                                        width: "73vw",
                                        bgcolor: "#fff"
                                    }}
                                    src={b.ban}
                                />) : null
                            }
                        </div>
                    ) )
                }

                <Stack
                    direction='row'
                    spacing={{ xs: 1, sm: 2, md: 2 }}
                    sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    {
                        Banners.map((b, i) => (
                            <Box key={i}
                                 onClick={() => setActiveSlide(i)}>
                                {
                                    activeSlide == i ?
                                        <Box>
                                            <img src={activeDot} alt="activeDot" />
                                        </Box>
                                        : <Box>
                                            <img src={dot} alt="dot"/>
                                        </Box>
                                }
                            </Box>
                        ))
                    }
                </Stack>
            </Box>
        </>

    )
    };

export default Slider;