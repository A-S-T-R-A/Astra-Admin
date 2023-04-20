import { AxiosInstance } from "axios"
import { ProductSchema } from "entities/Product"
import { ManageProductAttributeSchema } from "features/product/ManageProductAttribute"

export interface StateSchema {
    product: ProductSchema
    manageProductAttributes: ManageProductAttributeSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
