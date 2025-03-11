"use client"

import React from 'react';
import { Box, Container, Typography, TextField, Button, Stack, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {Google} from "@mui/icons-material";

const SignUpPage = () => {
    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
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
                    <Box sx={{ maxWidth: 450, mx: 'auto', p: 3 }}>
                        <Typography variant="h4" color={'black'} sx={{ mb: 1, fontWeight: 'bold' }}>
                            Create an account
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                            Enter your details below
                        </Typography>

                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                variant="standard"
                                placeholder="Name"
                                InputProps={{
                                    sx: {
                                        color:'black',
                                        '&::before': { borderColor: '#E8E8E8' },
                                        fontSize: '14px',
                                        py: 1
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                variant="standard"
                                placeholder="Email or Phone Number"
                                InputProps={{
                                    sx: {
                                        color:'black',
                                        '&::before': { borderColor: '#E8E8E8' },
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
                                        color:'black',
                                        '&::before': { borderColor: '#E8E8E8' },
                                        fontSize: '14px',
                                        py: 1
                                    }
                                }}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: '#DB4444',
                                    color:'white',
                                    py: 1.5,
                                    '&:hover': {
                                        bgcolor: '#c13030'
                                    }
                                }}
                            >
                                Create Account
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<Google size={20} />}
                                sx={{
                                    color: '#000',
                                    borderColor: '#E8E8E8',
                                    py: 1.5,
                                    '&:hover': {
                                        borderColor: '#000',
                                        bgcolor: 'transparent'
                                    }
                                }}
                            >
                                Sign up with Google
                            </Button>

                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body2" color="text.secondary" component="span">
                                    Already have account?{' '}
                                </Typography>
                                <Link href="/login" style={{
                                    color: '#000',
                                    textDecoration: 'underline',
                                    fontWeight: 500
                                }}>
                                    Log in
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignUpPage;