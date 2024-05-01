import { Box, Button, Card, CardMedia } from '@mui/material'
import React from 'react'
import headerImage from '../../../../assets/images/book-cover.jpg';
import MDTypography from '../../../../items/MDTypography';
import typography from './../../../../assets/theme/base/typography';
import colors from '../../../../assets/theme/base/colors';

const BookCard = ({ image, bookNumber, bookName, authorName, price, handleBuyBook }) => {
        return (
                <Box sx={{
                        m: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        width: '25%',
                        transition: 'transform 0.4s ease',
                        '&:hover': {
                                transform: 'scale(0.97)',
                        },
                }}>
                        <Card>
                                <CardMedia
                                        component="img"
                                        src={headerImage}
                                        style={{ width: '100%', height: '200px', objectFit: 'revert' }}
                                >
                                </CardMedia>
                        </Card>
                        <MDTypography typography={typography.caption} p={1}>books #{bookNumber}</MDTypography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1 }}>
                                <Box sx={{ textAlign: 'start' }}>
                                        <MDTypography typography={typography.body1}>Book Name</MDTypography>
                                        <MDTypography typography={typography.body2}>Author Name</MDTypography>
                                        <MDTypography typography={typography.body2}>Price</MDTypography>
                                </Box>
                                <Box sx={{ textAlign: 'end' }}>
                                        <MDTypography typography={typography.body1}>{bookName}</MDTypography>
                                        <MDTypography typography={typography.body2}>{authorName}</MDTypography>
                                        <MDTypography typography={typography.body2}>{price}$</MDTypography>
                                </Box>
                        </Box>
                        <Box sx={{
                                dipslay: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                p: 1
                        }}>
                                <Button sx={{
                                        backgroundColor: colors.white.main,
                                        color: colors.dark.main,
                                        borderRadius: 2,
                                        width: '40%',
                                        '&:hover': {
                                                backgroundColor: colors.grey[400],
                                                color: colors.white.main,
                                        }
                                }}
                                        onClick={handleBuyBook}
                                >
                                        buy
                                </Button>

                        </Box>



                </Box>
        )
}

export default BookCard
