"use client";
import React, { ReactNode } from 'react';
import RootHeader from './components/RootHeader';
//import './globals.css'; // 전역 스타일을 적용하려면 필요합니다.
import RootFooter from './components/RootFooter';


type LayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <RootHeader />
                {children}
                <RootFooter />
            </body>
        </html>
    );
};
