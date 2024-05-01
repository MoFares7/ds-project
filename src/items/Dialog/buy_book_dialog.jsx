import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogActions, Button, Divider, CircularProgress, Box } from '@mui/material';
import colors from '../../assets/theme/base/colors.jsx';
import MDTypography from '../MDTypography/index.jsx';
import NormalTextFeild from '../TextFeild/normal_feild.jsx';
import typography from './../../assets/theme/base/typography';

const BuyBookDialog = ({ isDialogOpen, onCloseDialog }) => {
        const [name, setname] = useState('');
        const [phoneNumber, setphoneNumber] = useState('');
        const [address, setaddress] = useState('');
        const [creditCardNumber, setcreditCardNumber] = useState('');

        const [validationErrors, setValidationErrors] = useState({
                name: '',
                phoneNumber: '',
                address: '',
                creditCardNumber: '',
        });

        const handleDialogClose = () => {
                onCloseDialog()
                setValidationErrors({
                        name: '',
                        phoneNumber: '',
                        address: '',
                        creditCardNumber: '',
                });
        };

        const handleAddGoodsType = async () => {
                const errors = {};

                if (name.trim() === '') {
                        errors.name = "Buyer's is required";
                }

                if (phoneNumber.trim() === '') {
                        errors.phoneNumber = 'Phone Number is required';
                }

                if (address.trim() === '') {
                        errors.address = 'Address is required';
                }

                if (creditCardNumber.toString().trim() === '') {
                        errors.creditCardNumber = 'Credit Card Number is required';
                }

                setValidationErrors(errors);

                if (Object.keys(errors).length === 0) { };
        }

        return (
                <div>
                        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                                <DialogContent sx={{ justifyContent: "center", textAlign: 'center' }}>
                                        <MDTypography typography={typography.h5} pb={1} alignItems='center' >Buy The Book Operation
                                        </MDTypography>

                                        <Divider sx={{
                                                mt: -0.5,
                                                mb: 1,
                                                color: "#252525",
                                                backgroundColor: "#252525;"
                                        }} />
                                        <NormalTextFeild
                                                isFulWidth={true}
                                                value={name}
                                                placeholder={validationErrors.name ? validationErrors.name : "Buyer's Name"}
                                                label={"Buyer's Name"}
                                                validationColor={validationErrors.name ? colors.gradients.error.main : colors.white}
                                                validationErrors={validationErrors.name}
                                                onChange={(e) => {
                                                        setname(e.target.value);
                                                        setValidationErrors({ ...validationErrors, name: '' });
                                                }}
                                        />

                                        <NormalTextFeild
                                                isFulWidth={true}
                                                value={phoneNumber}
                                                placeholder={validationErrors.phoneNumber ? validationErrors.phoneNumber : "Buyer's Phone Number"}
                                                label={"Buyer's Phone Number"}
                                                validationColor={validationErrors.phoneNumber ? colors.gradients.error.main : colors.white}
                                                validationErrors={validationErrors.phoneNumber}
                                                onChange={(e) => {
                                                        setphoneNumber(e.target.value);
                                                        setValidationErrors({ ...validationErrors, phoneNumber: '' });
                                                }}
                                        />

                                        <NormalTextFeild
                                                isFulWidth={true}
                                                value={address}
                                                placeholder={validationErrors.address ? validationErrors.address : "Address Buyer's Name"}
                                                label={"Address Buyer's Name"}
                                                validationColor={validationErrors.address ? colors.gradients.error.main : colors.white}
                                                validationErrors={validationErrors.address}
                                                onChange={(e) => {
                                                        setaddress(e.target.value);
                                                        setValidationErrors({ ...validationErrors, address: '' });
                                                }}
                                        />

                                        <NormalTextFeild
                                                isNumaric={true}
                                                // isFulWidth={true}
                                                isFulWidth={true}
                                                value={creditCardNumber}
                                                placeholder={validationErrors.creditCardNumber ? validationErrors.creditCardNumber : "Credit Card Number"}
                                                label={"Credit Card Number"}
                                                validationColor={validationErrors.creditCardNumber ? colors.gradients.error.main : colors.white}
                                                validationErrors={validationErrors.creditCardNumber}
                                                onChange={(e) => {
                                                        setcreditCardNumber(e.target.value);
                                                        setValidationErrors({ ...validationErrors, creditCardNumber: '' });
                                                }}
                                        />



                                </DialogContent>
                                <DialogActions>
                                        <Box display="flex" justifyContent="space-between">
                                                <Button onClick={handleAddGoodsType}
                                                        sx={{
                                                                backgroundColor: colors.gradients.dark.main,
                                                                color: '#fff',
                                                                '&:hover': {
                                                                        backgroundColor: '#2f4858'
                                                                }
                                                        }}> Buy
                                                </Button>
                                                <Button onClick={handleDialogClose}
                                                        sx={{ color: colors.black.main }}
                                                >Close
                                                </Button>
                                        </Box>
                                </DialogActions>
                        </Dialog>
                </div >
        );
};

export default BuyBookDialog;
