import { AxiosInstance } from "axios"
import { ProductSchema } from "entities/Product"
import { ManageProductAttributeSchema } from "features/product/ManageProductAttribute"
import { ProductsPageSchema } from "pages/ProductsPage"

export interface StateSchema {
    product: ProductSchema
    manageProductAttributes: ManageProductAttributeSchema
    productsPage: ProductsPageSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
