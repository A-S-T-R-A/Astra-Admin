import { IProduct } from "entities/Product"

export interface IFetchProductsByCategory {
    parent_category_id: number
    id: number
    name: string
    image: string
    icon: string
    hru: string
    products: IProduct[]
}
