import { Box, Card, CardMedia } from '@mui/material'
import React from 'react'
import colors from '../../../../assets/theme/base/colors'
import headerImage from '../../../../assets/images/book-cover.jpg';
import MDTypography from './../../../../items/MDTypography/index';
import typography from './../../../../assets/theme/base/typography';
import './style/button.css';

const HeaderMain = ({ onClickAddBook, onClickShowSoldBook }) => {
        return (

                <Box sx={{ display: 'flex', backgroundColor: colors.dark.main }}>
                        <Box sx={{
                                display: 'flex',
                                // flexDirection: 'column',
                                width: '35%', backgroundColor: colors.gradients.dark.main,
                                alignItems: 'center',
                                textAlign: 'center',
                        }}>
                                <Box>
                                        <MDTypography typography={typography.d5} sx={{}}>
                                                Best Books Of The Year Sales 35%
                                        </MDTypography>
                                        <MDTypography typography={typography.body2} sx={{ pt: 1 }}>
                                                Top 10 Books Based On Buy
                                        </MDTypography >
                                        <Box sx={{
                                                display: {
                                                        xs: 'block',
                                                        md: 'flex',
                                                        xl: 'flex'
                                                },
                                                mx: 1
                                        }}></Box>
                                        <button onClick={onClickAddBook}>Add Book</button>
                                        <button onClick={onClickShowSoldBook}>Books Sold</button>

                                </Box>

                        </Box>
                        <Card sx={{ width: '65%' }}>
                                <CardMedia
                                        component="img"
                                        src={headerImage}
                                        style={{ width: '100%', height: '500px', objectFit: 'revert' }}
                                >
                                </CardMedia>
                        </Card>
                        {/* <Box sx={{ width: '65%' }}>
                                        oo
                                </Box> */}
                </Box>
        )
}

export default HeaderMain