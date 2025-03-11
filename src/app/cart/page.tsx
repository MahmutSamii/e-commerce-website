'use client'
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Stack,
    Container,
    IconButton,
    Divider,
    Paper,
    Select,
    MenuItem
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const CartItem = ({ image, name, price, quantity }) => {
    const [qty, setQty] = useState(quantity);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, position: 'relative' }}>
            <Box sx={{ position: 'relative', width: 60, height: 60 }}>
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: -10,
                        left:-10,
                        p: 0.1,
                        bgcolor: '#DB4444',
                        color:'white',
                        border: '1px solid #DB4444',
                        '&:hover': {
                            color:'black',
                            bgcolor: 'white'
                        }
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
                <Box component="img" src={image} alt={name} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography variant="body1">{name}</Typography>
            </Box>
            <Typography sx={{ width: 100, textAlign: 'center' }}>${price}</Typography>
            <Box sx={{ width: 100, textAlign: 'right' }}>
                <Select
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        color:'black',
                        width: 70,
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#e0e0e0'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#e0e0e0'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#e0e0e0'
                        }
                    }}
                >
                    {[1, 2, 3, 4, 5].map((num) => (
                        <MenuItem key={num} value={num} color={'black'} sx={{
                            color:'black'
                        }}>
                            {num.toString().padStart(2, '0')}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            <Typography sx={{ width: 100, textAlign: 'right' }}>${price * qty}</Typography>
        </Box>
    );
};

const ShoppingCart = () => {
    const cartItems = [
        {
            id: 1,
            name: 'LCD Monitor',
            price: 850,
            quantity: 1,
            image: '/assets/png/tv.png'
        },
        {
            id: 2,
            name: 'H1 Gamepad',
            price: 550,
            quantity: 2,
            image: '/assets/png/gamepad.png'
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box sx={{ display: 'flex', gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', borderBottom: 1, borderColor: 'divider', pb: 2, mb: 3 }}>
                        <Typography sx={{ flex: 1 }}>Product</Typography>
                        <Typography sx={{ width: 100, textAlign: 'left' }}>Price</Typography>
                        <Typography sx={{ width: 100, textAlign: 'center' }}>Quantity</Typography>
                        <Typography sx={{ width: 100, textAlign: 'right' }}>Subtotal</Typography>
                    </Box>

                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}

                    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#e0e0e0',
                                color: 'black',
                                '&:hover': {
                                    borderColor: '#e0e0e0',
                                    bgcolor: 'transparent'
                                }
                            }}
                        >
                            Return To Shop
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                marginLeft: 'auto',
                                borderColor: '#e0e0e0',
                                color: 'black',
                                '&:hover': {
                                    borderColor: '#e0e0e0',
                                    bgcolor: 'transparent'
                                }
                            }}
                        >
                            Update Cart
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                        <TextField
                            placeholder="Coupon Code"
                            size="small"
                            sx={{
                                width: 200,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 1
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: 'black',
                                    border: '1px solid black'
                                },
                                '& .MuiOutlinedInput-input:focus': {
                                    outline: 'none'
                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#dc3545',
                                color: 'white',
                                '&:hover': {
                                    bgcolor: '#c82333'
                                }
                            }}
                        >
                            Apply Coupon
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ width: 300 }}>
                    <Paper sx={{ color: 'black', height: 'fit-content', p: 3 }} elevation={0} variant="outlined">
                        <Typography variant="h6" sx={{ mb: 2 }}>Cart Total</Typography>
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Subtotal:</Typography>
                                <Typography>$1750</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Shipping:</Typography>
                                <Typography color="success.main">Free</Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Total:</Typography>
                                <Typography>$1750</Typography>
                            </Box>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: '#dc3545',
                                    color: 'white',
                                    mt: 2,
                                    '&:hover': {
                                        bgcolor: '#c82333'
                                    }
                                }}
                            >
                                Proceed to checkout
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
};

export default ShoppingCart;