import React from 'react';
import FlashSales from "../../../components/FlashSales/FlashSales";

function FlashSale(props) {
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
        },
        {
            id: 5,
            name: 'IPS LCD Gaming Monitor',
            image: 'assets/png/tv.png',
            price: 370,
            oldPrice: 400,
            discount:30,
            rating: 5,
            reviews: 99,
        },
        {
            id: 6,
            name: 'IPS LCD Gaming Monitor',
            image: 'assets/png/tv.png',
            price: 370,
            oldPrice: 400,
            discount:30,
            rating: 5,
            reviews: 99,
        },
        {
            id: 7,
            name: 'S-Series Comfort Chair',
            image: 'assets/png/chair.png',
            price: 375,
            oldPrice: 400,
            discount:30,
            rating: 4.5,
            reviews: 99,
        },
        {
            id: 8,
            name: 'S-Series Comfort Chair',
            image: 'assets/png/chair.png',
            price: 375,
            oldPrice: 400,
            discount:30,
            rating: 4.5,
            reviews: 99,
        }
    ];

    const currentTime = {
        days: 2,
        hours: 5,
        minutes: 30,
        seconds: 15,
    };

    return (
        <FlashSales
            subtitle={"today's"}
            subtitleColor={'#DB4444'}
            title="Flash Sales"
            showTimer={true}
            products={products}
            currentTime={currentTime}
            discountBadgeColor={'#DB4444'}
            showSlider
            viewBtnOpen={true}
            viewBtnOpenColor={'#DB4444'}
            viewBtnOpenText={'View All'}
            viewBtnOpenTextColor={'white'}
        />
    );
}

export default FlashSale;