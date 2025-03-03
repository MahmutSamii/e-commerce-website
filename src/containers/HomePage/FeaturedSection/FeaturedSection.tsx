import React from 'react';
import {Box, Typography, Grid, Card, CardContent, CardMedia, Button, Stack} from '@mui/material';

const FeaturedSection = () => {
    return (
        <Box sx={{ p: 4, maxWidth: '1200px', margin: '0 auto' }}>
            <Box sx={{ mb: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Box sx={{width: 20, height: 40, bgcolor: '#DB4444', borderRadius: 1}}/>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#ff0000',
                            mb: 1,
                            fontWeight: 500
                        }}
                    >
                        Featured
                    </Typography>
                </Stack>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        color:'black',
                        mb:6
                    }}
                >
                    New Arrival
                </Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            position: 'relative',
                            height: '530px',
                            backgroundColor: '#000',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 4
                        }}>
                            <CardMedia
                                component="img"
                                image="/assets/png/ps5.png"
                                alt="PlayStation 5"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'fill'
                                }}
                            />
                        </Box>
                        <CardContent
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                p: 3,
                                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)'
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 1 }}>
                                PlayStation 5
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Black and White version of the PS5 <br/> coming out on sale.
                            </Typography>
                            <Button
                                variant="text"
                                sx={{
                                    color: 'white',
                                    textTransform: 'none',
                                    textDecoration: 'underline',
                                    p: 0,
                                    '&:hover': {
                                        backgroundColor: 'transparent'
                                    }
                                }}
                            >
                                Shop Now
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    height: '257px',
                                    backgroundColor: '#0D0D0D',
                                    color: 'white',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box sx={{
                                    position: 'relative',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <CardMedia
                                        component="img"
                                        image="/assets/png/woman.png"
                                        alt="Women's Collections"
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'contain',
                                            objectPosition: 'right'
                                        }}
                                    />
                                </Box>
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        p: 2,
                                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ mb: 1 }}>
                                        Women's Collections
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        Featured women collections that <br/> give you another vibe.
                                    </Typography>
                                    <Button
                                        variant="text"
                                        sx={{
                                            color: 'white',
                                            textTransform: 'none',
                                            textDecoration: 'underline',
                                            p: 0,
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                    >
                                        Shop Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={6}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    height: '256px',
                                    backgroundColor: '#000',
                                    color: 'white',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box sx={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CardMedia
                                        component="img"
                                        image="/assets/png/speakers.png"
                                        alt="Speakers"
                                        sx={{
                                            width: '80%',
                                            height: '80%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </Box>
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        p: 2,
                                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ mb: 1 }}>
                                        Speakers
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        Amazon Wireless Speakers
                                    </Typography>
                                    <Button
                                        variant="text"
                                        sx={{
                                            color: 'white',
                                            textTransform: 'none',
                                            textDecoration: 'underline',
                                            p: 0,
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                    >
                                        Shop Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={6}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    height: '256px',
                                    backgroundColor: '#000',
                                    color: 'white',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box sx={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 2
                                }}>
                                    <CardMedia
                                        component="img"
                                        image="/assets/png/perfume.png"
                                        alt="Perfume"
                                        sx={{
                                            width: '80%',
                                            height: '80%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </Box>
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        p: 2,
                                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ mb: 1 }}>
                                        Perfume
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        GUCCI INTENSE OUD EDP
                                    </Typography>
                                    <Button
                                        variant="text"
                                        sx={{
                                            color: 'white',
                                            textTransform: 'none',
                                            textDecoration: 'underline',
                                            p: 0,
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                    >
                                        Shop Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeaturedSection;