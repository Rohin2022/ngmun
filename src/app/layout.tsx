import Header from "@/components/Header";
import "./globals.css";
import {Inter} from "next/font/google";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "NGMUN - MUN Conference at Noble and Greenough School",
    description: "Noble and Greenough Model UN Conference",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any"/>
            </head>
            <body className={inter.className}>
            <div className="relative">
                <Header/>
                <main>{children}</main>
            </div>
            </body>
        </html>
    );
}