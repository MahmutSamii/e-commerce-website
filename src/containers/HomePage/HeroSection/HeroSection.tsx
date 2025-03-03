'use client';
import React, {useState} from 'react';
import {
    Box,
    Container,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Stack,
    Typography,
    styled
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledListItem = styled(ListItem)(({theme}) => ({
    padding: 0,
    color: 'black',
}));

const StyledListButton = styled(ListItemButton)({
    padding: '12px 16px',
    '&:hover': {
        backgroundColor: '#f5f5f5'
    }
});

const DotButton = styled('button')(({active}: { active?: boolean }) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: active ? '#DB4444' : '#D9D9D9',
    margin: '0 5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
}));

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const menuItems = [
        {title: "Woman's Fashion", hasSubmenu: true},
        {title: "Men's Fashion", hasSubmenu: true},
        {title: "Electronics", hasSubmenu: false},
        {title: "Home & Lifestyle", hasSubmenu: false},
        {title: "Medicine", hasSubmenu: false},
        {title: "Sports & Outdoor", hasSubmenu: false},
        {title: "Baby's & Toys", hasSubmenu: false},
        {title: "Groceries & Pets", hasSubmenu: false},
        {title: "Health & Beauty", hasSubmenu: false},
    ];

    const slides = [
        {
            image: '/assets/png/iphone.png',
            title: 'iPhone 14 Series',
            subtitle: 'Up to 10% off Voucher',
            buttonText: 'Shop Now'
        },
        {
            image: '/assets/png/iphone.png',
            title: 'iPhone 15 Series',
            subtitle: 'Up to 10% off Voucher',
            buttonText: 'Shop Now'
        },
        {
            image: '/assets/png/iphone.png',
            title: 'iPhone 16 Series',
            subtitle: 'Up to 10% off Voucher',
            buttonText: 'Shop Now'
        },
        {
            image: '/assets/png/iphone.png',
            title: 'iPhone 17 Series',
            subtitle: 'Up to 10% off Voucher',
            buttonText: 'Shop Now'
        },
        {
            image: '/assets/png/iphone.png',
            title: 'iPhone 18 Series',
            subtitle: 'Up to 10% off Voucher',
            buttonText: 'Shop Now'
        },
    ];

    const handleSubmenu = (title: string) => {
        setOpenSubmenu(openSubmenu === title ? null : title);
    };

    return (
        <Container maxWidth="lg" sx={{mt: 5}}>
            <Stack direction="row" spacing={2}>
                <Box sx={{width: 250, bgcolor: 'white'}}>
                    <List>
                        {menuItems.map((item) => (
                            <StyledListItem key={item.title} disablePadding>
                                <StyledListButton
                                    onClick={() => item.hasSubmenu && handleSubmenu(item.title)}
                                >
                                    <ListItemText primary={item.title}/>
                                    {item.hasSubmenu && (
                                        <ChevronRightIcon/>
                                    )}
                                </StyledListButton>
                            </StyledListItem>
                        ))}
                    </List>
                </Box>



                <Box sx={{
                    flex: 1,
                    height: '400px',
                    position: 'relative',
                    bgcolor: 'black',
                    borderRadius: 1,
                    overflow: 'hidden'
                }}>
                    <Box sx={{position: 'relative', height: '400px'}}>
                        <Box sx={{
                            p: 8,
                            color: 'white',
                            position: 'absolute',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '500px',
                            gap: 2
                        }}>
                            <Typography component={'div'} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                width: 'fit-content'
                            }}>
                                <Box component="img" src="/assets/png/apple-logo.png" sx={{width: 60}}/>
                                <Typography variant="h4" fontSize={'19px'}>{slides[activeSlide].title}</Typography>
                            </Typography>
                            <Typography variant="h3" fontSize={'4rem'} fontWeight="bold">
                                {slides[activeSlide].subtitle}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    cursor: 'pointer',
                                    width: 'fit-content'
                                }}
                            >
                                <Typography
                                    sx={{
                                        borderBottom: '1px solid white',
                                        letterSpacing: '3px',
                                        pb: 0.5
                                    }}
                                >
                                    Shop Now
                                </Typography>
                                <ArrowForwardIcon/>
                            </Box>
                        </Box>

                        <Box
                            component="img"
                            src="/assets/png/iphone.png"
                            sx={{
                                position: 'absolute',
                                right: '0',
                                top: '55%',
                                transform: 'translateY(-50%)',
                                height: '90%',
                                objectFit: 'contain'
                            }}
                        />
                    </Box>

                    <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        sx={{position: 'absolute', bottom: 20, width: '100%'}}
                    >
                        {[0, 1, 2, 3, 4].map((index) => (
                            <DotButton
                                key={index}
                                active={index === activeSlide}
                                onClick={() => setActiveSlide(index)}
                            />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default HeroSection;