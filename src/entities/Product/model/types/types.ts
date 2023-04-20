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
