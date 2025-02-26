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
        },
        button: {
            button1: '#47B486',
            button2: '#DB4444',
            hover1: '#E2B93B',
            hover2: '#EB5757',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1368,
            xl: 1536,
            mobile: 0,
            tablet: 768,
            laptop: 900,
            desktop: 1368,
        },
    },
});

export default theme;