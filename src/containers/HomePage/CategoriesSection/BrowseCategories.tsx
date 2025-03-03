'use client';
import React, { useState } from 'react';
import {Box, Container, Typography, IconButton, Stack, styled, Divider} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const SectionDivider = styled(Divider)(({ theme }) => ({
    marginTop: '58px',
    marginBottom: '58px',
    marginLeft: '-12px',
    borderColor: '#E8E8E8',
    borderWidth: '1px',
    width: '100%'
}));

const CategoryBox = styled(Box)(({ theme, active }) => ({
    width: '170px',
    height: '145px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #E8E8E8',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: active === "true" ? "#DB4444" : "white",
    color: active === "true" ? "white" : "black",
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#DB4444',
        color: 'white',
        '& .MuiSvgIcon-root': {
            color: 'white',
        }
    },
    '& .MuiSvgIcon-root': {
        fontSize: '40px',
        color: active === "true" ? "white" : "inherit",
        marginBottom: '8px',
    }
}));

const categories = [
    { id: 1, name: 'Phones', icon: <PhoneIphoneIcon /> },
    { id: 2, name: 'Computers', icon: <ComputerIcon /> },
    { id: 3, name: 'SmartWatch', icon: <WatchIcon /> },
    { id: 4, name: 'Camera', icon: <CameraAltIcon /> },
    { id: 5, name: 'HeadPhones', icon: <HeadphonesIcon /> },
    { id: 6, name: 'Gaming', icon: <SportsEsportsIcon /> }
];

const BrowseCategories = () => {
    const [activeCategory, setActiveCategory] = useState('Camera');
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 6;

    const handleSlide = (direction) => {
        if (direction === 'left') {
            setCurrentIndex(prev => Math.max(prev - 1, 0));
        } else {
            setCurrentIndex(prev =>
                Math.min(prev + 1, Math.ceil(categories.length / itemsPerView) - 1)
            );
        }
    };

    const visibleCategories = categories.slice(
        currentIndex * itemsPerView,
        currentIndex * itemsPerView + itemsPerView
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box sx={{ width: 20, height: 40, bgcolor: '#DB4444', borderRadius: 1 }} />
                <Typography variant="subtitle1" color="#DB4444" fontWeight="600">
                    Categories
                </Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h4" color="black" fontWeight="600">
                    Browse By Category
                </Typography>
                <Stack direction="row" spacing={1}>
                    <IconButton
                        onClick={() => handleSlide('left')}
                        disabled={currentIndex === 0}
                        sx={{
                            bgcolor: '#F5F5F5',
                            '&:hover': { bgcolor: '#E5E5E5' }
                        }}
                    >
                        <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton
                        onClick={() => handleSlide('right')}
                        disabled={currentIndex >= Math.ceil(categories.length / itemsPerView) - 1}
                        sx={{
                            bgcolor: '#F5F5F5',
                            '&:hover': { bgcolor: '#E5E5E5' }
                        }}
                    >
                        <KeyboardArrowRight />
                    </IconButton>
                </Stack>
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 2,
                    justifyContent: 'center',
                }}
            >
                {visibleCategories.map((category) => (
                    <CategoryBox
                        key={category.id}
                        active={(activeCategory === category.name).toString()}
                        onClick={() => setActiveCategory(category.name)}
                    >
                        {category.icon}
                        <Typography variant="subtitle1" fontWeight="500">
                            {category.name}
                        </Typography>
                    </CategoryBox>
                ))}
            </Box>
            <SectionDivider />
        </Container>
    );
};

export default BrowseCategories;