import { MenuDto } from './MenuDto'; // Adjust the import path as necessary

export class MenuListDto {
    constructor(
        public menus: MenuDto[],
        public totalCount: number,
        public totalPage: number,
        public hasPreviousPage: boolean,
        public hasNextPage: boolean,
        public pages: number[]

    ) {}
}
