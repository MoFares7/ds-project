import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogActions, Button, Divider, CircularProgress, Box } from '@mui/material';
import colors from '../../assets/theme/base/colors.jsx';
import MDTypography from '../MDTypography/index.jsx';
import NormalTextFeild from '../TextFeild/normal_feild.jsx';
import typography from '../../assets/theme/base/typography.jsx';

const AddBookDialog = ({ isDialogOpen, onCloseDialog }) => {
        const [nameBook, setNameBook] = useState('');
        const [numberBook, setNumberBook] = useState('');
        const [nameAuthor, setNameAuthor] = useState('');
        const [price, setPrice] = useState('');

        const [validationErrors, setValidationErrors] = useState({
                nameBook: '',
                numberBook: '',
                nameAuthor: '',
                price: '',
        });

        const handleDialogClose = () => {
                onCloseDialog()
                setValidationErrors({
                        nameBook: '',
                        numberBook: '',
                        nameAuthor: '',
                        price: '',
                });
        };

        const handleAddGoodsType = async () => {
                const errors = {};

                if (nameBook.trim() === '') {
                        errors.nameBook = 'Name Book is required';
                }

                if (numberBook.trim() === '') {
                        errors.numberBook = 'Number Book is required';
                }

                if (nameAuthor.trim() === '') {
                        errors.nameAuthor = 'Name Author is required';
                }

                if (price.toString().trim() === '') {
                        errors.price = 'Price is required';
                }

                setValidationErrors(errors);

                if (Object.keys(errors).length === 0) { };
        }

        return (
                <div>
                        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                                <DialogContent sx={{ justifyContent: "center", textAlign: 'center' }}>
                                        <MDTypography typography={typography.h5} pb={1} alignItems='center' >Add a New Book
                                        </MDTypography>

                                        <Divider sx={{
                                                mt: -0.5,
                                                mb: 1,
                                                color: "#252525",
                                                backgroundColor: "#252525;"
                                        }} />
                                        <NormalTextFeild
                                                isFulWidth={true}
                                                value={nameBook}
                                                placeholder={validationErrors.nameBook ? validationErrors.nameBook : "Book Name"}
                                                label={"Book Name"}
                                                validationColor={validationErrors.nameBook ? colors.gradients.error.main : colors.white}
                                                validationErrors={validationErrors.nameBook}
                                                onChange={(e) => {
                                                        setNameBook(e.target.value);
                                                        setValidationErrors({ ...validationErrors, nameBook: '' });
                                                }}
                                        />

                                        <NormalTextFeild
                                                isFulWidth={true}
                                                value={numberBook}
                                                placeholder={validationErrors.numberBook ? validationErrors.numberBook : "Book Number"}
                                                label={"Book Number"}
                                                validationColor={validationErrors.numberBook ? colors.gradients.error.main : colors.white}
                                                validationErrors={validationErrors.numberBook}
                                                onChange={(e) => {
                                                        setNumberBook(e.target.value);
                                                        setValidationErrors({ ...validationErrors, numberBook: '' });
                                                }}
                                        />

                                        <NormalTextFeild
                                                isFulWidth={true}
                                                value={nameAuthor}
                                                placeholder={validationErrors.nameAuthor ? validationErrors.nameAuthor : "Author Name"}
                                                label={"Author Name"}
                                                validationColor={validationErrors.nameAuthor ? colors.gradients.error.main : colors.white}
                                                validationErrors={validationErrors.nameAuthor}
                                                onChange={(e) => {
                                                        setNameAuthor(e.target.value);
                                                        setValidationErrors({ ...validationErrors, nameAuthor: '' });
                                                }}
                                        />

                                        <NormalTextFeild
                                                isNumaric={true}
                                                // isFulWidth={true}
                                                isFulWidth={true}
                                                value={price}
                                                placeholder={validationErrors.price ? validationErrors.price : "Price"}
                                                label={"Price"}
                                                validationColor={validationErrors.price ? colors.gradients.error.main : colors.white}
                                                validationErrors={validationErrors.price}
                                                onChange={(e) => {
                                                        setPrice(e.target.value);
                                                        setValidationErrors({ ...validationErrors, price: '' });
                                                }}
                                        />



                                </DialogContent>
                                <DialogActions>
                                        <Box display="flex" justifyContent="space-between">
                                                <Button onClick={handleAddGoodsType}
                                                        sx={{
                                                                m: 1,
                                                                backgroundColor: colors.gradients.dark.main,
                                                                color: '#fff',
                                                                '&:hover': {
                                                                        backgroundColor: '#2f4858'
                                                                }
                                                        }}> Add
                                                </Button>

                                                <Button onClick={handleDialogClose}
                                                        sx={{
                                                                m: 1,
                                                                color: colors.black.main
                                                        }}
                                                >Close
                                                </Button>
                                        </Box>
                                </DialogActions>
                        </Dialog>
                </div >
        );
};

export default AddBookDialog;
