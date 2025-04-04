import Link from 'next/link';
import React, { FC, JSX } from 'react';

export const url = 'https://next15-ts-ssr.new-cafe.com/api/menus';

const fetchMenus = async () => {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const MenuPage = async () => {
    const menus = await fetchMenus(); // Fetch menus data
    console.log(menus); // Log the fetched data 

    return (
        <main>
            목록 페이지
            {menus.menus.map((m:any) => (
                <div key={m.id}>
                    <Link href={`/menus/${m.id}`}>
                        {m.korName}
                    </Link>
                </div>
            ))}
        </main>
    );
};

export default MenuPage;
