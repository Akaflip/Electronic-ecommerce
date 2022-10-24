import React from 'react';
import {Box, Button, styled, TextField} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const StyledInputBase = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 680,
    height: 48,
    marginTop: 30,
    marginLeft: 50,
    outlined: "none"

})) as typeof Box;

const StyledSearchButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    height: 48,
    backgroundColor: "#E31C79",
    marginTop: 27,
    marginLeft: 980,
    border: "None",
    mixBlendMode: "normal",
    borderRadius: 5,

"&:hover": {
        backgroundColor: "#d41771",
    }
})) as typeof Button;

const SearchBar = () => (
    <>
        <StyledInputBase placeholder="Outlined" component='input'  />
        <StyledSearchButton>
            <SearchOutlinedIcon color="action" height={15} />
        </StyledSearchButton>
    </>
);

export default SearchBar;