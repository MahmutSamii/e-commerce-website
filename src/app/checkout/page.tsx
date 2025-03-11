import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Checkbox,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Button,
    Grid,
    Stack, Container
} from '@mui/material';

const page = () => {
    return (
        <Container maxWidth="lg" sx={{py: 10}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>

                    <Typography variant="h4" sx={{ mb: 3 }}>
                        Billing Details
                    </Typography>

                    <Stack spacing={2}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            color={'primary.dark'}
                            required
                            sx={{
                                backgroundColor: '#f8f8f8',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    }
                                },
                                '& .MuiOutlinedInput-input':{
                                    color: 'black'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Company Name"
                            variant="outlined"
                            color={'primary.dark'}
                            sx={{
                                backgroundColor: '#f8f8f8',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                },
                                '& .MuiOutlinedInput-input':{
                                    color: 'black'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Street Address"
                            variant="outlined"
                            color={'primary.dark'}
                            required
                            sx={{
                                backgroundColor: '#f8f8f8',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                },
                                '& .MuiOutlinedInput-input':{
                                    color: 'black'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Apartment, floor, etc. (optional)"
                            variant="outlined"
                            color={'primary.dark'}
                            sx={{
                                backgroundColor: '#f8f8f8',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                },
                                '& .MuiOutlinedInput-input':{
                                    color: 'black'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Town/City"
                            variant="outlined"
                            color={'primary.dark'}
                            required
                            sx={{
                                backgroundColor: '#f8f8f8',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                },
                                '& .MuiOutlinedInput-input':{
                                    color: 'black'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Phone Number"
                            variant="outlined"
                            required
                            color={'primary.dark'}
                            sx={{
                                backgroundColor: '#f8f8f8',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                },
                                '& .MuiOutlinedInput-input':{
                                    color: 'black'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Email Address"
                            variant="outlined"
                            required
                            type="email"
                            color={'primary.dark'}
                            sx={{
                                backgroundColor: '#f8f8f8',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                },
                                '& .MuiOutlinedInput-input':{
                                    color: 'black'
                                },
                            }}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        color: '#d32f2f',
                                        '&.Mui-checked': {
                                            color: '#d32f2f',
                                        },
                                    }}
                                />
                            }
                            label="Save this information for faster check-out next time"
                            sx={{ mt: 2 }}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5} mt={8}>
                    <Box sx={{p: 3, borderRadius: 1 }}>
                        <Stack spacing={2}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                    <Box
                                        component="img"
                                        src="/assets/png/tv.png"
                                        alt="LCD Monitor"
                                        sx={{width: 50, height: 50}}
                                    />
                                    <Typography>LCD Monitor</Typography>
                                </Box>
                                <Typography>$650</Typography>
                            </Box>

                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                    <Box
                                        component="img"
                                        src="/assets/png/gamepad.png"
                                        alt="H1 Gamepad"
                                        sx={{width: 50, height: 50}}
                                    />
                                    <Typography>H1 Gamepad</Typography>
                                </Box>
                                <Typography>$1100</Typography>
                            </Box>

                            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 2}}>
                                <Typography>Subtotal:</Typography>
                                <Typography>$1750</Typography>
                            </Box>
                            <hr/>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Typography>Shipping:</Typography>
                                <Typography>Free</Typography>
                            </Box>
                            <hr/>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Typography variant="h6">Total:</Typography>
                                <Typography variant="h6">$1750</Typography>
                            </Box>

                            <FormControl component="fieldset">
                                <RadioGroup defaultValue="bank">
                                    <FormControlLabel
                                        value="bank"
                                        color={'black'}
                                        control={<Radio/>}
                                        label={
                                            <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'space-between', gap: 2}}>
                                                Bank
                                                <Box sx={{display: 'flex', gap: 1, ml: 2}}>
                                                    <img
                                                        src="/assets/png/visa.png"
                                                        alt="bKash"
                                                        style={{width: '50px', objectFit: 'contain'}}
                                                    />
                                                    <img
                                                        src="/assets/png/master-card.png"
                                                        alt="Visa"
                                                        style={{width: '50px', objectFit: 'contain'}}
                                                    />
                                                </Box>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        value="cash"
                                        color={'black'}
                                        control={<Radio/>}
                                        label="Cash on delivery"
                                    />
                                </RadioGroup>
                            </FormControl>

                            <Box sx={{display: 'flex', gap: 1}}>
                                <TextField
                                    placeholder="Coupon Code"
                                    variant="outlined"
                                    size="small"
                                    color={'black'}
                                    fullWidth
                                    sx={{
                                        backgroundColor: 'white',
                                        width: '350px',
                                        '& .MuiOutlinedInput-input': {
                                            color: 'black',
                                            border: '1px solid black',
                                            borderRadius: 1
                                        },
                                        '& .MuiOutlinedInput-input:hover': {
                                            border: '1px solid black'
                                        }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '200px',
                                        color: 'white',
                                        backgroundColor: '#d32f2f',
                                        '&:hover': {
                                            backgroundColor: '#b71c1c',
                                        },
                                    }}
                                >
                                    Apply Coupon
                                </Button>
                            </Box>

                            <Button
                                variant="contained"
                                sx={{
                                    color: 'white',
                                    width: '200px',
                                    backgroundColor: '#d32f2f',
                                    mt: 2,
                                    py: 1.5,
                                    '&:hover': {
                                        backgroundColor: '#b71c1c',
                                    },
                                }}
                            >
                                Place Order
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default page;