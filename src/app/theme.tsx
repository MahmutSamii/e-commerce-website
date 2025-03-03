'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {

        primary: {
            main: '#FFFFFF',
            light: '#FFFFFF',
            dark: '#363738'
        },
        secondary: {
            light: '#F5F5F5',
            main: '#FEFAF1',
            dark: '#DB4444'
        },
        background: {
            default: '#FFFFFF',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#363738',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1368,
            xl: 1536,
        },
    },
});

export default theme;