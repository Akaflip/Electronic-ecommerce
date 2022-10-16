import React from 'react';
import {Button, styled, TextField} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const StyledInputBase = styled(TextField)(({ theme }) => ({
    color: 'inherit',
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 680,
    height: 48,
    border: "none",
    marginTop: 30,
    marginLeft: 50

})) as typeof TextField;

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
        <StyledInputBase id="outlined-basic" placeholder="Outlined" variant="outlined"  />
        <StyledSearchButton>
            <SearchOutlinedIcon color="action" height={15} />
        </StyledSearchButton>
    </>
);

export default SearchBar;