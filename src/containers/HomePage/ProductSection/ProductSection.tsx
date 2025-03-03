import React from 'react';
import FlashSales from "../../../components/FlashSales/FlashSales";

function ProductSection(props) {
    const products = [
        {
            id: 1,
            name: 'The North Coat',
            image: 'assets/png/coat.png',
            price: 120,
            oldPrice: 160,
            rating: 5,
            reviews: 88,
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
    ];

    return (
        <FlashSales
            subtitle={'This Month'}
            subtitleColor={'#DB4444'}
            title="Best Selling Products"
            products={products}
            showTimer={false}
            enableSlider={false}
            onAddToCart={false}
            btnOpen={false}
            viewBtnOpen={true}
            viewBtnOpenColor={'#DB4444'}
            viewBtnOpenText={'View All'}
            viewBtnOpenTextColor={'white'}
        />
    );
}

export default ProductSection;