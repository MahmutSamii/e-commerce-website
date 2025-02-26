'use client'
import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Box, Button, Select, MenuItem} from '@mui/material';

function Header() {

    const [language, setLanguage] = useState('English');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: 'black', height: '48px'}}>
                <Toolbar sx={{minHeight: '48px', paddingX: '16px', display: 'flex', justifyContent: 'space-evenly'}}>
                    <Typography
                        component="p"
                        sx={{
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 400,
                        }}
                    >
                        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{' '}
                        <Button
                            sx={{
                                color: '#FFFFFF',
                                textTransform: 'none',
                                fontWeight: 700,
                                fontSize: '14px',
                                padding: 0,
                                marginLeft: '8px',
                            }}
                        >
                            ShopNow
                        </Button>
                    </Typography>

                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Select
                            value={language}
                            onChange={handleLanguageChange}
                            sx={{
                                color: 'white',
                                fontSize: '14px',
                                fontWeight: 400,
                                '.MuiSelect-icon': {
                                    color: 'white',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                            }}
                        >
                            <MenuItem sx={{
                                color: '#363738'
                            }} value="English">English</MenuItem>
                            <MenuItem sx={{
                                color: '#363738'
                            }} value="Türkçe">Turkish</MenuItem>
                        </Select>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;