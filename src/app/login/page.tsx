"use client"

import React from 'react';
import {Box, Container, Typography, TextField, Button, Stack, Grid} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {Google} from "@mui/icons-material";

const Login = () => {
    return (
        <Container maxWidth="xl" sx={{py: 8}}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        width: '80%',
                        height: '600px',
                        position: 'relative',
                        bgcolor: '#E7F0F1'
                    }}>
                        <Image
                            src="/assets/png/login-image.png"
                            alt="Shopping Cart"
                            layout="fill"
                            objectFit="fill"
                            priority
                        />
                    </Box>
                </Grid>

                {/* Right side - Form */}
                <Grid item xs={12} md={6}>
                    <Box sx={{maxWidth: 450, mx: 'auto', p: 3}}>
                        <Typography variant="h4" color={'black'} sx={{mb: 1, fontWeight: 'bold'}}>
                            Log in to Exclusive
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{mb: 4}}>
                            Enter your details below
                        </Typography>

                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                variant="standard"
                                placeholder="Email or Phone Number"
                                InputProps={{
                                    sx: {
                                        color: 'black',
                                        '&::before': {borderColor: '#E8E8E8'},
                                        fontSize: '14px',
                                        py: 1
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                variant="standard"
                                color="text.secondary"
                                type="password"
                                placeholder="Password"
                                InputProps={{
                                    sx: {
                                        color: 'black',
                                        '&::before': {borderColor: '#E8E8E8'},
                                        fontSize: '14px',
                                        py: 1
                                    }
                                }}
                            />

                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#DB4444',
                                        color: 'white',
                                        py: 1.5,
                                        px: 3.5,
                                        '&:hover': {
                                            bgcolor: '#c13030'
                                        }
                                    }}
                                >
                                    Login
                                </Button>
                                <Link href="#" style={{
                                    color: '#DB4444',
                                    textDecoration: 'underline'
                                }}>
                                    Forgot Password?{' '}
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;