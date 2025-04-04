"use client";
import React, {FC,JSX} from 'react';

/*
interface MenuPageParams {
    params: {
        id: string;
    };
}
    */

type MenuPageParams = {
    params: {
        id: string; // 메뉴 ID 
    }; 
};

const MenuPage: FC<MenuPageParams> = ({ params }): JSX.Element=> {
    const {id} = params;
    return (
        <main>
            상세 페이지 {id}
        </main>
    );
};

export default MenuPage;