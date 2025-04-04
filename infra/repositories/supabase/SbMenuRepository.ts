import { MenuRepository } from "../../../domain/repositories/MenuRepository";
import { Menu } from "../../../domain/entities/Menu";

export class SbMenuRepository implements MenuRepository {
    async findById(id: number): Promise<Menu> {
        // Implementation goes here
        console.log("MenuID:", id);
        return{
            id: id,
            korName: "Sample Menu",
            engName: "Sample Menu",
            price:10.99,
        };
        
    }

    async findAll(): Promise<Menu> {
        // Implementation goes here
        return{
            id: 1,
            korName: "Sample Menu",
            engName: "Sample Menu",
            price:10.99,
        };
    }

    async save(menu: Menu): Promise<Menu> {
        // Implementation goes here
        return{
            id: 1,
            korName: "Sample Menu",
            engName: "Sample Menu",
            price:10.99,
        };
    }
}
