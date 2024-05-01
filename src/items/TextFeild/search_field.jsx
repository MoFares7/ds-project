import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box, Button, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import colors from '../../assets/theme/base/colors';

export default function SearchField() {
        return (
                <Paper
                        component="form"
                        sx={{
                                p: 1, display: 'flex', alignItems: 'center', width: {
                                        xs: 350,
                                        sm: 720,
                                        md: 900,
                                        xl: 900
                                }
                        }}
                >
                        <InputBase
                                sx={{ mx: 1, flex: 1 }}
                                placeholder="Search On Book"
                                inputProps={{ 'aria-label': 'Search On Book' }}
                        />

                        <Button sx={{
                                backgroundColor: colors.gradients.dark.main,
                        }}>
                                <Search sx={{ color: colors.white.main }} />
                        </Button>
                </Paper>
                // <Paper
                //         component="form"
                //         sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                // >

                //         <InputBase
                //                 sx={{ ml: 1, flex: 1 }}
                //                 placeholder="Search Google Maps"
                //                 // inputProps={{ 'aria-label': 'search google maps' }}
                //         />
                //         {/* <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                //                 <SearchIcon />
                //         </IconButton> */}
                //         {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                //         {/* <IconButton  sx={{ p: '10px' }}>
                //                 <SearchIcon />
                //         </IconButton> */}
                // </Paper>
        );
}
