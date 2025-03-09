"use client";

import React from "react";
import Header from "@/Layout/header";
import Footer from "@/Layout/footer";   

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}