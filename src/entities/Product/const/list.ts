import {
    ICategoryDropdownList,
    SidebarListItem,
    StockStatusOptionItem,
    StockStatusOptionVariant,
} from "../model/types/types"

export const sidebarList: SidebarListItem[] = [
    SidebarListItem.GENERAL,
    SidebarListItem.ATTRIBUTES,
    SidebarListItem.IMAGES,
    SidebarListItem.OTHER,
]

export const stockStatusOptions: StockStatusOptionItem[] = [
    { label: "In stock", value: StockStatusOptionVariant.IN_STOCK, id: "1" },
    { label: "Out of stock", value: StockStatusOptionVariant.OUT_OF_STOCK, id: "1" },
    { label: "On backorder", value: StockStatusOptionVariant.ON_BACKORDER, id: "1" },
]

export const categoryDropdownList: ICategoryDropdownList[] = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Third" },
]
