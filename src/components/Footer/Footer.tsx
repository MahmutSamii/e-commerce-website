"use client"

import React from 'react';
import { Box, Container, Grid, Typography, InputBase, IconButton, Stack } from '@mui/material';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', pt: 8, pb: 2 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Exclusive
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Subscribe
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Get 10% off your first order
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            borderRadius: 1,
                            border: '1px solid #666',
                            mb: 2
                        }}>
                            <InputBase
                                placeholder="Enter your email"
                                sx={{
                                    ml: 2,
                                    flex: 1,
                                    color: 'white'
                                }}
                            />
                            <IconButton sx={{ color: 'white', p: 1 }}>
                                <ArrowRight size={20} />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Support
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            111 Bijoy sarani, Dhaka,
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            DH 1515, Bangladesh.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            exclusive@gmail.com
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            +88015-88888-9999
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Account
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="body2">My Account</Typography>
                            <Typography variant="body2">Login / Register</Typography>
                            <Typography variant="body2">Cart</Typography>
                            <Typography variant="body2">Wishlist</Typography>
                            <Typography variant="body2">Shop</Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Quick Link
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="body2">Privacy Policy</Typography>
                            <Typography variant="body2">Terms Of Use</Typography>
                            <Typography variant="body2">FAQ</Typography>
                            <Typography variant="body2">Contact</Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Download App
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
                            Save $3 with App New User Only
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <Box sx={{ width: '100px', height: '90px', position: 'relative' }}>
                                <Image
                                    src="/assets/png/qr-code.png"
                                    alt="QR Code"
                                    layout="fill"
                                    objectFit="fill"
                                />
                            </Box>
                            <Stack spacing={1}>
                                <Box sx={{ width: '120px', height: '40px', position: 'relative' }}>
                                    <Image
                                        src="/assets/png/google-play-store.png"
                                        alt="Google Play"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </Box>
                                <Box sx={{ width: '120px', height: '40px', position: 'relative' }}>
                                    <Image
                                        src="/assets/png/app-store.png"
                                        alt="App Store"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </Box>
                            </Stack>
                        </Box>
                        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <Facebook size={24} />
                            <Twitter size={24} />
                            <Instagram size={24} />
                            <Linkedin size={24} />
                        </Stack>
                    </Grid>
                </Grid>

                <Box sx={{
                    mt: 4,
                    pt: 2,
                    borderTop: '1px solid #333',
                    textAlign: 'center',
                    color: '#666'
                }}>
                    <Typography variant="body2">
                        © Copyright Mahmut Sami 2025. All right reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;