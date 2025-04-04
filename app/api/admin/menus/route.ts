import { NextResponse } from 'next/server';
import  MenuListUsecase  from '@/application/usecases/admin/menu/MenuListUsecase';
import { SbMenuRepository } from '@/infra/repositories/supabase/SbMenuRepository';
import { MenuListDto } from '@/application/usecases/admin/menu/dto/MenuListDto';

export async function GET() {
    try {
        const menuRepqository = new SbMenuRepository(); // Assuming you have a MenuRepository class
        const menuListUsecase = new MenuListUsecase(menuRepqository); // Assuming you have a MenuListUsecase class
        const menuListDto: MenuListDto = await menuListUsecase.execute(); // Pass the repository to the use case
        

        return NextResponse.json(menuListDto, { status: 200 });
    } catch (error) {
        console.error('Error fetching menus', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}