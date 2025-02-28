import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {MainLayout} from "@/templates/MainLayout/MainLayout";

export const metadata: Metadata = {
    title: "E commerce website",
    description: "Generated by talented devs",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <MainLayout>{children}</MainLayout>
    );
}
