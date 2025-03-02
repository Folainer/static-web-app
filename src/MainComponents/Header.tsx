import {AppBar, Box, CssBaseline, Toolbar, Typography, Button, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import './Main.scss'
import { useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';

const Header : React.FC<{name: string}> = ({name}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [isAuthorized] = useState<boolean>(true)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <header className="header">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="sticky"
                >
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton
                            onClick={ () => toggleOpen()}
                            className='header__menuicon'
                            sx={{ mr: 2}}
                            edge="start"
                            aria-label="menu"
                            color='inherit' >
                            <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                {name}
                            </Typography>
                        </Box>
                        {!isAuthorized ? (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Button className='header__button' variant='text' color='inherit' href='/signin'>
                                    <Link className='header__link' to='/signin'>Sign in</Link>
                                </Button>
                                <Button sx={{ml: 2}} className='header__button' variant='outlined' color='inherit'>
                                    <Link className='header__link' to='/signup'>Sign up</Link>
                                </Button>
                            </Box>
                        ) : (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <IconButton aria-label="fingerprint" href='/profile'>
                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                                </IconButton>
                            </Box>
                        )} 
                        
                    </Toolbar>
                </AppBar>
            </Box>
            <Navigation open={open} toggleOpen={toggleOpen} />
        </header>
    )
}

export default Header