import { Box, Card, CardMedia } from '@mui/material'
import React from 'react'
import image from '../../../../assets/images/book-cover.jpg';
import MDTypography from '../../../../items/MDTypography';
import typography from './../../../../assets/theme/base/typography';

const BuyCard = ({  bookName, buyerName, date }) => {
        return (
                <Box sx={{
                        display: 'flex',
                        m: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        width: '25%',
                        alignItems: 'center',
                        transition: 'transform 0.4s ease',
                        '&:hover': {
                                transform: 'scale(0.97)',
                        },
                }}>
                        <Box sx={{ width: '35%' }}>
                                <Card>
                                        <CardMedia
                                                component="img"
                                                src={image}
                                                style={{ borderRadius: '7x 7px 0px 0px', width: '100%', height: '150px', objectFit: 'revert' }}
                                        >
                                        </CardMedia>
                                </Card>
                        </Box>

                        <Box sx={{ p: 1, width: '65%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <MDTypography typography={typography.body1} >Book Name</MDTypography>
                                        <MDTypography typography={typography.body2}>{bookName}</MDTypography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <MDTypography typography={typography.body1}>Buyer's Name</MDTypography>
                                        <MDTypography typography={typography.body2} >{buyerName}</MDTypography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <MDTypography typography={typography.body1} sx={{ textAlign: 'end' }}>Date Of Purchase</MDTypography>
                                        <MDTypography typography={typography.body2}>{date}</MDTypography>
                                </Box>
                        </Box>
                </Box>
        )
}

export default BuyCard
