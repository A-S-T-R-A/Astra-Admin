export enum SidebarListItem {
    GENERAL = "general",
    ATTRIBUTES = "attributes",
    IMAGES = "images",
    OTHER = "other",
}

export enum StockStatusOptionVariant {
    IN_STOCK = "inStock",
    OUT_OF_STOCK = "outOfStock",
    ON_BACKORDER = "onBackorder",
}

export interface StockStatusOptionItem {
    label: string
    value: StockStatusOptionVariant
    id: string
}

export interface ICategoryDropdownList {
    id: number
    name: string
}

export interface IProductAttributes {
    [key: string]: string | string[]
}

interface IProductParentCategory {
    id: number
    parent_category_id: number
    name: string
}

export interface IProduct {
    id: number
    name: string
    is_new?: boolean
    images: string[]
    price: number
    description?: string
    attributes?: IProductAttributes
    parent_category_id?: number
    parentCategories?: IProductParentCategory[]
}
