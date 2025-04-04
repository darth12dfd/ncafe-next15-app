"use client";
import React, { ReactNode } from 'react';
import Basket from './components/Basket';

type LayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <>
            {children}
            <Basket />
        </>
    );
};
