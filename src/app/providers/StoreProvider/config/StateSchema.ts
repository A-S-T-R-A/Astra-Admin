import { AxiosInstance } from "axios"
import { ProductSchema } from "entities/Product"

export interface StateSchema {
    product: ProductSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
