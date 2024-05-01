import React from 'react';
import { AppBar, Box, Card, CardMedia, Toolbar, Typography } from '@mui/material';
import colors from '../assets/theme/base/colors';
import un from '../assets/images/un.jpg'
import MDTypography from '../items/MDTypography';

const Footer = () => {
        return (
                <AppBar position="static" sx={{ backgroundColor: colors.gradients.dark.main }}>
                        <Toolbar>
                                <Typography variant="body1" color="inherit">
                                        <Box sx={{ display: 'flex', p: 1 }}>
                                                <Card>
                                                        <CardMedia
                                                                component="img"
                                                                src={un}
                                                                style={{ borderRadius: '7x 7px 0px 0px', width: '100%', height: '150px', objectFit: 'revert' }}
                                                        >
                                                        </CardMedia>
                                                </Card>
                                                <Box p={2}>
                                                        <MDTypography>Damascus Univarsity </MDTypography>
                                                        <MDTypography>DS</MDTypography>
                                                </Box>

                                        </Box>

                                </Typography>
                        </Toolbar>
                </AppBar>
        );
};

export default Footer;
