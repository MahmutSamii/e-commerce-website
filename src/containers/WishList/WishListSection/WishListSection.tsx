'use client'
import React from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    Stack, Container, styled
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashSales from "../../../components/FlashSales/FlashSales";

const ProductCard = styled(Card)(({theme}) => ({
    maxWidth: 270,
    position: 'relative',
    borderRadius: '4px',
    boxShadow: 'none',
    '&:hover .cart-button': {
        opacity: 1,
    },
}));

const CartButton = styled(Button)(({theme}) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0 0 4px 4px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    '&:hover': {
        backgroundColor: '#333',
    },
}));


const WishlistSection = () => {
    const products = [
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            image: 'assets/png/gamepad.png',
            price: 120,
            oldPrice: 160,
            discount:30,
            rating: 5,
            reviews: 88,
        },
        {
            id: 2,
            name: 'HAVIT HV-G92 Gamepad',
            image: 'assets/png/gamepad.png',
            price: 120,
            oldPrice: 160,
            discount:30,
            rating: 5,
            reviews: 88,
        },
        {
            id: 3,
            name: 'AK-900 Wired Keyboard',
            image: 'assets/png/keyboard.png',
            price: 960,
            oldPrice: 1160,
            discount:30,
            rating: 4.5,
            reviews: 75,
        },
        {
            id: 4,
            name: 'AK-900 Wired Keyboard',
            image: 'assets/png/keyboard.png',
            price: 960,
            oldPrice: 1160,
            discount:30,
            rating: 4.5,
            reviews: 75,
        }
    ];

    const wishlistItems = [
        {
            id: 1,
            name: 'Gucci duffle bag',
            image: '/assets/png/bag.png',
            price: 960,
            originalPrice: 1150,
            discount: 35
        },
        {
            id: 2,
            name: 'RGB liquid CPU Cooler',
            image: '/assets/png/cpu-cooler.png',
            price: 1960,
            originalPrice: 1960
        },
        {
            id: 3,
            name: 'GP11 Shooter USB Gamepad',
            image: '/assets/png/gamepad.png',
            price: 550,
            originalPrice: 550
        },
        {
            id: 4,
            name: 'Quilted Satin Jacket',
            image: '/assets/png/coat.png',
            price: 750,
            originalPrice: 750
        }
    ];

    return (
        <Container maxWidth="lg" sx={{py: 8}}>
            <Box sx={{p: 3}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3
                }}>
                    <Typography variant="h6" color={'black'} sx={{fontWeight: 500}}>
                        Wishlist ({wishlistItems.length})
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: '#000',
                            color: '#000',
                            '&:hover': {
                                borderColor: '#000',
                                backgroundColor: 'rgba(0,0,0,0.04)'
                            }
                        }}
                    >
                        Move All To Bag
                    </Button>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 2,
                }}>
                    {wishlistItems.map((item) => (
                        <ProductCard key={item.id}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                                p: 2,
                                backgroundColor: '#F5F5F5',
                                height: 220
                            }}>
                                {item?.discount && (
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: 10,
                                            bgcolor: '#dc3545',
                                            color: 'white',
                                            px: 1,
                                            py: 0.5,
                                            borderRadius: 1,
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        -{item?.discount}%
                                    </Typography>
                                )}

                                <IconButton
                                    sx={{
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                        bgcolor: 'rgba(255,255,255,0.9)',
                                        color: 'black',
                                        '&:hover': {
                                            bgcolor: 'black',
                                            color: 'white'
                                        }
                                    }}
                                >
                                    <DeleteIcon/>
                                </IconButton>

                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.name}
                                    sx={{objectFit: 'contain', height: '120px'}}
                                />
                                <CartButton
                                    className={'cart-button'}
                                    startIcon={<ShoppingCartIcon/>}
                                >
                                    Add To Cart
                                </CartButton>
                            </Box>
                            <CardContent sx={{pt: 1, pb: 1}}>
                                <Typography variant="subtitle1" color={'black'} sx={{fontWeight: 500}}>
                                    {item.name}
                                </Typography>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography variant="body1" color="error" sx={{fontWeight: 500}}>
                                        ${item.price}
                                    </Typography>
                                    {item.price !== item.originalPrice && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textDecoration: 'line-through',
                                                color: 'text.secondary'
                                            }}
                                        >
                                            ${item.originalPrice}
                                        </Typography>
                                    )}
                                </Stack>
                            </CardContent>
                        </ProductCard>
                    ))}
                </Box>
            </Box>
            <FlashSales
                subtitle={"Just For You"}
                subtitleColor={'black'}
                showTimer={false}
                products={products}
                enableSlider={false}
                viewBtnOpen={true}
                btnOpen={false}
                cardsPerRow={4}
                viewBtnOpenColor={'#FFFFFF'}
                viewBtnOpenText={'See All'}
                viewBtnOpenTextColor={'black'}
            />
        </Container>
    );
};

export default WishlistSection;