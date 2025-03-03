'use client';
import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Truck, Headphones, ShieldCheck, ArrowUp } from 'lucide-react';

const ServicesSection = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ position: 'relative', py: 12, px: 4, maxWidth: '1200px', margin: '0 auto' }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                    <Box sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: '#E5E5E5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        mb: 2
                    }}>
                        <Box sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            bgcolor: 'black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Truck size={24} color="white" />
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'black', mb: 1 }}>
                        FREE AND FAST DELIVERY
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Free delivery for all orders over $140
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                    <Box sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: '#E5E5E5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        mb: 2
                    }}>
                        <Box sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            bgcolor: 'black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Headphones size={24} color="white" />
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'black', mb: 1 }}>
                        24/7 CUSTOMER SERVICE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Friendly 24/7 customer support
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                    <Box sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: '#E5E5E5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        mb: 2
                    }}>
                        <Box sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            bgcolor: 'black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <ShieldCheck size={24} color="white" />
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'black', mb: 1 }}>
                        MONEY BACK GUARANTEE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        We return money within 30 days
                    </Typography>
                </Grid>
            </Grid>

            {/* Scroll to Top Button */}
            <IconButton
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    bgcolor: '#f5f5f5',
                    color: 'white',
                    width: 40,
                    height: 40,
                    '&:hover': {
                        bgcolor: 'grey.400',
                    },
                    zIndex: 1000
                }}
            >
                <ArrowUp size={20} color={'black'}/>
            </IconButton>
        </Box>
    );
};

export default ServicesSection;