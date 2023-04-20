import { StockStatusOptionVariant } from "./types"

export interface ProductSchema {
    name: string
    description: string
    price: number
    category: string
    images: string[]
    stockStatus: StockStatusOptionVariant
    isNew: boolean
    isTop: boolean
}
