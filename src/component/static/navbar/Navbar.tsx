import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Box, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            DnC
                        </Typography>
                        <Box className='button-navbar'>
                            <Box mx={1} >
                                <Button className="button-nav">
                                    HOME
                                </Button>
                            </Box>
                            <Box mx={1} >
                                <Button className="button-nav">
                                    POSTAGENS
                                </Button>
                            </Box>
                            <Box mx={1} >
                                <Button className="button-nav">
                                    TEMA
                                </Button>
                            </Box>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Button variant="outlined" color="inherit">
                                        LOGIN
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;