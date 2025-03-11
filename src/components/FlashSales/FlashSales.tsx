'use client'
import React, {useState, useEffect} from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Card,
    CardMedia,
    CardContent,
    Button,
    Rating,
    Stack,
    styled,
    Divider,
} from '@mui/material';
import {
    Favorite,
    Visibility,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
    discount?: number;
    colors?: string[];
}

interface FlashSalesProps {
    subtitle?: string;
    subtitleColor?: string;
    title: string;
    products: Product[];
    showTimer?: boolean;
    onAddToCart?: boolean;
    btnOpen?: boolean;
    viewBtnOpen?: boolean;
    viewBtnOpenColor?: string;
    viewBtnOpenText?: string;
    viewBtnOpenTextColor?: string;
    discountBadgeColor?: string;
    discountBadgeText?: string;
    enableSlider?: boolean;
    cardsPerRow?: number;
    currentTime?: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
}

const SectionDivider = styled(Divider)(({}) => ({
    margin: '48px 0',
    borderColor: '#E8E8E8',
    borderWidth: '1px',
    width: '100%',
}));

const ProductCard = styled(Card)(({}) => ({
    maxWidth: 270,
    position: 'relative',
    borderRadius: '4px',
    boxShadow: 'none',
    '&:hover .cart-button': {
        opacity: 1,
    },
}));

const DiscountBadge = styled(Box)<{ color?: string }>(({ color }) =>  ({
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: color || '#DB4444',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    zIndex: 1,
}));

const IconWrapper = styled(Box)(({}) => ({
    position: 'absolute',
    top: 12,
    right: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    zIndex: 1,
}));

const StyledIconButton = styled(IconButton)(({}) => ({
    backgroundColor: 'white',
    padding: '8px',
    '&:hover': {
        backgroundColor: '#DB4444',
        color: 'white',
    },
}));

const CartButton = styled(Button)(({}) => ({
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

const TimerBox = styled(Box)(({}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#F5F5F5',
    padding: '4px 12px',
    borderRadius: '4px',
}));

const FlashSales: React.FC<FlashSalesProps> = ({
                                                   subtitle,
                                                   subtitleColor = 'black',
                                                   title,
                                                   products = [],
                                                   showTimer = true,
                                                   onAddToCart = true,
                                                   btnOpen = true,
                                                   viewBtnOpen = true,
                                                   viewBtnOpenColor = '#DB4444',
                                                   viewBtnOpenText = 'View All',
                                                   viewBtnOpenTextColor = 'white',
                                                   discountBadgeColor = '#DB4444',
                                                   discountBadgeText,
                                                   enableSlider = true,
                                                   cardsPerRow = 4,
                                                   currentTime
                                               }) => {
    const [isClient, setIsClient] = useState(false);
    const [timer, setTimer] = useState(
        currentTime || { days: 0, hours: 0, minutes: 0, seconds: 0 }
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedColors, setSelectedColors] = useState<Record<number, string>>({});

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && showTimer) {
            const timer = setInterval(() => {
                setTimer((prev) => {
                    if (prev.seconds > 0) {
                        return {...prev, seconds: prev.seconds - 1};
                    } else if (prev.minutes > 0) {
                        return {...prev, minutes: prev.minutes - 1, seconds: 59};
                    } else if (prev.hours > 0) {
                        return {...prev, hours: prev.hours - 1, minutes: 59, seconds: 59};
                    } else if (prev.days > 0) {
                        return {...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59};
                    }
                    return prev;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [showTimer, isClient]);

    const handleSlide = (direction: 'left' | 'right') => {
        setCurrentIndex((prev) =>
            direction === 'left'
                ? Math.max(prev - 1, 0)
                : Math.min(prev + 1, Math.ceil(products.length / cardsPerRow) - 1)
        );
    };

    const handleColorSelect = (productId: number, color: string) => {
        setSelectedColors((prev) => ({ ...prev, [productId]: color }));
    };

    const visibleProducts = enableSlider
        ? products.slice(currentIndex * cardsPerRow, currentIndex * cardsPerRow + cardsPerRow)
        : products;

    return (
        <Container maxWidth="lg" sx={{pt: 10}}>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box sx={{width: 20, height: 40, bgcolor: '#DB4444', borderRadius: 1}}/>
                <Typography variant="subtitle1" color={subtitleColor} fontWeight="600">
                    {subtitle}
                </Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                <Stack direction="row" spacing={4} alignItems="center">
                    <Typography variant="h4" color={'black'} fontWeight="600" pr={5}>
                        {title}
                    </Typography>
                    {showTimer && isClient && (
                        <>
                            <Stack spacing={1}>
                                <Typography fontSize={'13px'} fontWeight={'bold'} variant="caption"
                                            color="text.secondary">
                                    Days
                                </Typography>
                                <TimerBox sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                }}>
                                    <Typography variant="h5" fontWeight="600">
                                        {String(timer.days).padStart(2, '0')}
                                    </Typography>
                                </TimerBox>
                            </Stack>
                            <Typography variant="h5" color="text.secondary">:</Typography>
                            <Stack spacing={1}>
                                <Typography fontSize={'13px'} fontWeight={'bold'} variant="caption"
                                            color="text.secondary">
                                    Hours
                                </Typography>
                                <TimerBox sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                }}>
                                    <Typography variant="h5" fontWeight="600">
                                        {String(timer.hours).padStart(2, '0')}
                                    </Typography>
                                </TimerBox>
                            </Stack>
                            <Typography variant="h5" color="text.secondary">:</Typography>
                            <Stack spacing={1}>
                                <Typography fontSize={'13px'} fontWeight={'bold'} variant="caption"
                                            color="text.secondary">
                                    Minutes
                                </Typography>
                                <TimerBox sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                }}>
                                    <Typography variant="h5" fontWeight="600">
                                        {String(timer.minutes).padStart(2, '0')}
                                    </Typography>
                                </TimerBox>
                            </Stack>
                            <Typography variant="h5" color="text.secondary">:</Typography>
                            <Stack spacing={1}>
                                <Typography fontSize={'13px'} fontWeight={'bold'} variant="caption"
                                            color="text.secondary">
                                    Seconds
                                </Typography>
                                <TimerBox sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                }}>
                                    <Typography variant="h5" fontWeight="600">
                                        {String(timer.seconds).padStart(2, '0')}
                                    </Typography>
                                </TimerBox>
                            </Stack>
                        </>
                    )}
                </Stack>
                {enableSlider && (
                    <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 4}}>
                        <IconButton onClick={() => handleSlide('left')} disabled={currentIndex === 0}>
                            <KeyboardArrowLeft/>
                        </IconButton>
                        <IconButton
                            onClick={() => handleSlide('right')}
                            disabled={currentIndex === Math.ceil(products.length / cardsPerRow) - 1}
                        >
                            <KeyboardArrowRight/>
                        </IconButton>
                    </Box>
                )}
                {viewBtnOpen && (
                    <Stack direction="row" spacing={1}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: viewBtnOpenColor,
                                '&:hover': {bgcolor: '#c13e3e'},
                                px: 4,
                                py: 1.5,
                                color: viewBtnOpenTextColor
                            }}
                        >
                            {viewBtnOpenText}
                        </Button>
                    </Stack>
                )}
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 2,
                }}
            >
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id}>
                        <Box sx={{position: 'relative', p: 2, backgroundColor: '#F5F5F5'}}>
                            {product.discount && (
                                <DiscountBadge color={discountBadgeColor}>
                                    {"-" + product.discount + '%'}
                                </DiscountBadge>
                            )}
                            {discountBadgeText && (
                                <DiscountBadge color={discountBadgeColor}>
                                    {discountBadgeText}
                                </DiscountBadge>
                            )}
                            <IconWrapper>
                                <StyledIconButton>
                                    <Favorite fontSize="small"/>
                                </StyledIconButton>
                                <StyledIconButton>
                                    <Visibility fontSize="small"/>
                                </StyledIconButton>
                            </IconWrapper>
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.name}
                                sx={{objectFit: 'contain', height: '150px'}}
                            />
                            {onAddToCart && (
                                <CartButton className="cart-button">
                                    Add To Cart
                                </CartButton>
                            )}
                        </Box>
                        <CardContent>
                            <Typography gutterBottom color="black" fontSize="0.9rem" fontWeight="bold">
                                {product.name}
                            </Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography color="error" fontWeight="600">
                                    ${product.price}
                                </Typography>
                                {product.oldPrice && (
                                    <Typography
                                        color="text.secondary"
                                        sx={{textDecoration: 'line-through'}}
                                    >
                                        ${product.oldPrice}
                                    </Typography>
                                )}
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Rating name="read-only" value={product.rating} readOnly precision={0.5} />
                                <Typography color="text.secondary">({product.reviews})</Typography>
                            </Stack>
                            {product.colors && (
                                <Stack direction="row" spacing={1} sx={{mt: 2}}>
                                    {product.colors.map((color) => (
                                        <Box
                                            key={color}
                                            sx={{
                                                width: 18,
                                                height: 18,
                                                borderRadius: '50%',
                                                backgroundColor: color,
                                                border: selectedColors[product.id] === color ? '2px solid black' : '2px solid transparent',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => handleColorSelect(product.id, color)}
                                        />
                                    ))}
                                </Stack>
                            )}
                        </CardContent>
                    </ProductCard>
                ))}
            </Box>
            {btnOpen && (
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#DB4444',
                            '&:hover': {bgcolor: '#c13e3e'},
                            px: 4,
                            py: 1.5,
                            color: 'white'
                        }}
                    >
                        View All Products
                    </Button>
                </Box>
            )}
            <SectionDivider/>
        </Container>
    );
};

export default FlashSales;