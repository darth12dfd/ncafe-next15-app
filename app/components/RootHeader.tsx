"use client";
import Link from "next/link";

export default function RootHeader () {
    return (
        <header>
            <h1>Root Header</h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/menus">menus</Link></li>
                    <li><Link href="/admin">dashboard</Link></li>
                    <li><Link href="/login">login</Link></li>
                </ul>
            </nav>
        </header>
    );
}