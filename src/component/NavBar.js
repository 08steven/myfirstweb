import './navBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { withTheme } from '@emotion/react';
import { pink } from '@mui/material/colors';
import { IconButton } from '@mui/material';
import { color } from '@mui/system';
import { useState } from "react";

function NavBar(props) {
    const{searchText , setSearchText} = props;

    return (
        <nav className="nav-bar">
            <div className="logo">
                <div className='div-menu-logo'>
                <a className='menu-logo' href=''>Liverpool Squad</a></div>
                <div className='div-menu'><a className='menu' href=''>Forward</a></div>
                <div className='div-menu'><a className='menu' href=''>Midfielder</a></div>
                <div className='div-menu'> <a className='menu' href=''>Defender</a></div>
                <div className='div-menu'> <a className='menu' href=''>Goalkeeper</a></div>
            </div>
            <div className='iconButton-search'>
                <input className='search-input'
                type="text"
                placeholder='Search'
                value={searchText}
                onChange={(event)=>{setSearchText(event.target.value)}}/>
                <IconButton aria-label="delete">
                <SearchIcon sx={{ color: 'white' }} />
            </IconButton>
            </div>
        </nav>
    )

}

export default NavBar;
