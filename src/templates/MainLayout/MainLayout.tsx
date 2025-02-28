'use client'
import { Fragment, ReactNode } from 'react';

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar/navbar';
import Header from '@/components/Header/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Fragment>
        <html>
         <body>
         <Header/>
         <Navbar />
         <main>{children}</main>
         <Footer />
         </body>
        </html>
    </Fragment>
  );
};
