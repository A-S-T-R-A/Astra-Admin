import { AxiosInstance } from "axios"
import { CatalogSchema } from "entities/Catalog"
import { CategorySchema } from "entities/Category"
import { ProductSchema } from "entities/Product"
import { ManageProductAttributeSchema } from "features/ManageProductAttribute"
import { ProductsPageSchema } from "pages/ProductsPage"

export interface StateSchema {
    product: ProductSchema
    category: CategorySchema
    manageProductAttributes: ManageProductAttributeSchema
    productsPage: ProductsPageSchema
    catalog: CatalogSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
