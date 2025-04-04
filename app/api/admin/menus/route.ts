import { NextResponse } from 'next/server';
import { MenuListUsecase } from '@/application/usecases/admin/menu/MenuListUsecase';

export async function GET() {
    try {
        const menus = MenuListUsecase

        return NextResponse.json(menus, { status: 200 });
    } catch (error) {
        console.error('Error fetching menus', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}