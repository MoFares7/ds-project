import { Box, Card, CardMedia } from '@mui/material';
import React, { useState } from 'react';
import HeaderMain from '../components/header_main';
import headerImage from '../../../../assets/images/book-cover.jpg';
import MDTypography from '../../../../items/MDTypography';
import typography from './../../../../assets/theme/base/typography';
import BookCard from '../components/book_card';
import SearchField from '../../../../items/TextFeild/search_field';
import MainDialog from '../../../../items/Dialog/add_book_dialog';
import BuyBookDialog from '../../../../items/Dialog/buy_book_dialog';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const HomePage = () => {
        const [isOpendDialodAddBook, setIsOpendDialodAddBook] = useState(false);
        const [isOpendDialodBuyBook, setIsOpendDialodBuyBook] = useState(false);
        const navigate = useNavigate(); // Initialize navigate function using useNavigate hook

        const handleClickAddBook = () => {
                setIsOpendDialodAddBook(true);
        };

        const handleClickBuyBook = () => {
                console.log("test");
                setIsOpendDialodBuyBook(true);
        };

        // Define onClickShowSoldBook to navigate to "/buys" route
        const onClickShowSoldBook = () => {
                navigate('/buys'); // Use navigate function to navigate to "/buys"
        };

        const books = [
                {
                        "number": 1,
                        "name": "MALCOLM AND ME",
                        "author": "Mo Fares",
                        "price": "1299",
                },
                {
                        "number": 2,
                        "name": "MALCOLM  ME",
                        "author": "Alexander",
                        "price": "1099",
                },
                {
                        "number": 3,
                        "name": "MALCOLM  ME",
                        "author": "Makc",
                        "price": "999",
                },
                {
                        "number": 4,
                        "name": "MALCOLM  ME",
                        "author": "Tester",
                        "price": "1199",
                },
                {
                        "number": 4,
                        "name": "MALCOLM  ME",
                        "author": "Soft",
                        "price": "500",
                },
        ];

        return (
                <>
                        {/* <Box sx={{ height: '40%', }}> */}
                                <HeaderMain
                                        onClickAddBook={handleClickAddBook}
                                        onClickShowSoldBook={onClickShowSoldBook}
                                />
                        {/* </Box> */}

                        <Box sx={{
                                display: 'flex',
                                py: 3,
                                justifyContent: 'center'
                        }}>
                                <SearchField />
                        </Box>

                        <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                        }}>
                                {books.map((book) => (
                                        <BookCard
                                                key={book.number}
                                                bookNumber={book.number}
                                                bookName={book.name}
                                                authorName={book.author}
                                                price={book.price}
                                                handleBuyBook={handleClickBuyBook}
                                        />
                                ))}
                        </Box>

                        <MainDialog
                                isDialogOpen={isOpendDialodAddBook}
                                onCloseDialog={() => setIsOpendDialodAddBook(false)}
                        />

                        <BuyBookDialog
                                isDialogOpen={isOpendDialodBuyBook}
                                onCloseDialog={() => setIsOpendDialodBuyBook(false)}
                        />
                </>
        );
};

export default HomePage;
