'use client'
import {Fragment, ReactNode} from 'react';
import {Geist, Geist_Mono} from "next/font/google";
import {ThemeProvider} from '@mui/material/styles';
import theme from "@/app/theme";
import {CssBaseline} from "@mui/material";

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar/navbar';
import Header from '@/components/Header/Header';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <Fragment>
            <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Navbar/>
                <main>{children}</main>
                <Footer/>
            </ThemeProvider>
            </body>
            </html>
        </Fragment>
    );
};
