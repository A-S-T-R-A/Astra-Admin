import { StateSchema } from "app/providers/StoreProvider"

export const getCategoryId = (state: StateSchema) => state.productsPage.categoryId
export const getProducts = (state: StateSchema) => state.productsPage.products || []
