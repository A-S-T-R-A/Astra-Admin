import { AxiosInstance } from "axios"
import { ProductSchema } from "entities/Product"
import { SearchProductsSchema } from "features/SearchProduct"
import { ManageProductAttributeSchema } from "features/product/ManageProductAttribute"
import { ProductsTableSchema } from "widgets/ProductsTable"

export interface StateSchema {
    product: ProductSchema
    manageProductAttributes: ManageProductAttributeSchema
    searchProducts: SearchProductsSchema
    productsTable: ProductsTableSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
