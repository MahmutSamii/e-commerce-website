import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import Image from "next/image";

const CountdownItem = ({value, label}) => (
    <Typography component={'div'} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        backgroundColor:'#FFFFFF',
        borderRadius:'9999px',
        width: '4rem',
        height: '4rem',
        m:1
    }}>
        <Typography component={'div'} sx={{
            fontSize:'1.125rem',
            fontWeight:'bold',
            color: '#363738',
        }}>{value}</Typography>
        <Typography component={'div'} sx={{
            fontSize:'0.75rem',
            color:'rgb(75 85 99 / var(--tw-text-opacity, 1))'
        }}>{label}</Typography>
    </Typography>
);

const PromoBanner = () => {
    return (
        <Container maxWidth="lg" sx={{py: 10}}>
            <Typography component={'div'} sx={{
                width: '100%',
                backgroundColor: 'black',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Typography component={'div'} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 8
                }}>
                    <Typography component={'div'} sx={{
                        display: 'flex',
                        flexDirection:'column',
                        justifyContent: 'center',
                        marginTop: '2rem'
                    }}>
                        <Typography component={'span'} sx={{
                            color: 'rgb(74 222 128 / var(--tw-bg-opacity, 1))'
                        }}>Categories</Typography>

                        <Typography component={'h1'} sx={{
                            fontSize: '2.25rem',
                            lineHeight: '2.85rem',
                            fontWeight: 'bold',
                            color: '#FEFAF1',
                            mt:3
                        }}>
                            Enhance Your <br/> Music Experience
                        </Typography>

                        <Typography component={'div'} sx={{
                            display:'flex',
                            ml:-2
                        }}>
                            <CountdownItem value="23" label="Hours"/>
                            <CountdownItem value="05" label="Days"/>
                            <CountdownItem value="59" label="Minutes"/>
                            <CountdownItem value="35" label="Seconds"/>
                        </Typography>

                        <Button
                            sx={{
                                backgroundColor: 'rgb(74 222 128 / var(--tw-bg-opacity, 1))',
                                color:'#FEFAF1',
                                padding:'0.75rem 1.5rem',
                                borderRadius: '0.375rem',
                                width: '8rem',
                                mt:3,
                                '&:hover': {
                                    backgroundColor:'rgb(34 197 94 / var(--tw-bg-opacity, 1))',
                                    color: '#FFFFFF'
                                },
                                transitionProperty:'color, background-color, border-color, text-decoration-color, fill, stroke',
                                transitionTimingFunction:'cubic-bezier(0.4, 0, 0.2, 1)',
                                transitionDuration:'150ms'
                            }}>
                            Buy Now!
                        </Button>
                    </Typography>

                    <Typography component={'div'} sx={{
                        position:'relative',
                        width: '50%',

                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px',
                                padding: '20px'
                            }}
                        >
                            <Image
                                src="/assets/png/boombox.png"
                                alt="JBL Speaker"
                                width={500}
                                height={1000}
                            />
                        </Box>
                    </Typography>
                </Typography>
            </Typography>
        </Container>
    );
};

export default PromoBanner;