import { Box } from '@mui/material';
import React from 'react';
import image from '../../../../assets/images/book-cover.jpg';
import MDTypography from '../../../../items/MDTypography';
import typography from './../../../../assets/theme/base/typography';
import BuyCard from '../components/buy_card';

const PaymentOperationPage = () => {

        const buys = [
                {
                        "id": 1,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "12/3/2024"
                },
                {
                        "id": 2,
                        "bookName": "Software Engineer",
                        "buyerName": "Mo Fares",
                        "date": "4/2/2024"
                },
                {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "bookNumber": "213",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "bookNumber": "856",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "bookNumber": "77",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "bookNumber": "213",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookName": "Malcom",
                        "bookNumber": "213",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                }, {
                        "id": 3,
                        "bookNumber": "213",
                        "bookName": "Malcom",
                        "buyerName": "Mo Fares",
                        "date": "18/7/2023"
                },
        ];

        return (
                <Box p={3} >

                        <MDTypography typography={typography.d6}>
                                Books Sold
                        </MDTypography>
                        <Box display="flex" flexWrap="wrap" justifyContent="center">
                                {buys.map((buy) => (
                                        <BuyCard
                                                key={buy.id}
                                                bookName={buy.bookName}
                                                bookNumber={buy.bookNumber}
                                                buyerName={buy.buyerName}
                                                date={buy.date}
                                        />
                                ))}

                        </Box>
                </Box>

        );
};

export default PaymentOperationPage;
