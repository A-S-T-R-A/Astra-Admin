import { IProduct } from "entities/Product"

export interface ProductsPageSchema {
    products: IProduct[]
    isLoading: boolean
    error?: string
    categoryId: string
}
