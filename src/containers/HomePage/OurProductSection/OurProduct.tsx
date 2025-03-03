import React from 'react';
import FlashSales from "../../../components/FlashSales/FlashSales";

function OurProductSection(props) {
    const products = [
        {
            id: 1,
            name: 'The North Coat',
            image: 'assets/png/coat.png',
            price: 120,
            oldPrice: 160,
            rating: 5,
            reviews: 88,
            colors: ['#000000', '#FFFFFF'],
        },
        {
            id: 2,
            name: 'Gucci Duffle Bag',
            image: 'assets/png/bag.png',
            price: 120,
            oldPrice: 160,
            rating: 5,
            reviews: 88,
        },
        {
            id: 3,
            name: 'RGB Liquid CPU Cooler',
            image: 'assets/png/cpu-cooler.png',
            price: 960,
            oldPrice: 1160,
            rating: 3,
            reviews: 75,
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 4,
            name: 'Small Bookshelf',
            image: 'assets/png/desk.png',
            price: 960,
            oldPrice: 1160,
            rating: 1,
            reviews: 75,
        },
        {
            id: 5,
            name: 'Gaming Chair',
            image: 'assets/png/chair.png',
            price: 250,
            oldPrice: 300,
            rating: 4,
            reviews: 45,
            colors: ['#8B0000', '#FFA500'],
        },
        {
            id: 6,
            name: 'Smartphone',
            image: 'assets/png/keyboard.png',
            price: 700,
            rating: 5,
            reviews: 320,
        },
        {
            id: 7,
            name: 'Bluetooth Speaker',
            image: 'assets/png/gamepad.png',
            price: 150,
            rating: 4,
            reviews: 150,
            colors: ['#000000', '#FFFF00'],
        },
        {
            id: 8,
            name: 'Wireless Mouse',
            image: 'assets/png/boombox.png',
            price: 50,
            rating: 3,
            reviews: 120,
        },
    ];

    return (
        <FlashSales
            subtitle={'Our Products'}
            subtitleColor={'#DB4444'}
            title="Explore Our Products"
            products={products}
            showTimer={false}
            enableSlider={true}
            onAddToCart={true}
            btnOpen={true}
            viewBtnOpen={false}
            cardsPerRow={8}
        />
    );
}

export default OurProductSection;