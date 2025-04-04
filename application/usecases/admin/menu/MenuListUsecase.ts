import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { MenuListDto } from "./dto/MenuListDto";

export default class MenuListUsecase {
    private menuRepository: MenuRepository
    constructor(menuRepository: MenuRepository) {
        this.menuRepository = menuRepository;
    }
    
    async execute(){
        try {
            const menus = await this.menuRepository.findAll();
            
            const menuListDto: MenuListDto = {
                menus: menus.map(menu => ({
                    id: menu.id,
                    korName: menu.korName,
                    engName: menu.engName
                })),
                totalCount: menus.length,
                totalPage: 1, // Assuming you want to return all in one page
                hasPreviousPage: false,
                hasNextPage: false,
                pages: [1] // Assuming you want to return only one page
            }

            return menuListDto;
        } catch (error) {
            console.error('Error fetching menus', error);
            throw new Error('Failed to fetch menus');
        }
    }
}