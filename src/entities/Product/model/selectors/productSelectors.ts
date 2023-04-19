import { StateSchema } from "app/providers/StoreProvider"

export const getProductName = (state: StateSchema) => state.product.name
