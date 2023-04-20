import { StateSchema } from "app/providers/StoreProvider"

export const getProductName = (state: StateSchema) => state.product.name
export const getProductDescription = (state: StateSchema) => state.product.description
export const getProductPrice = (state: StateSchema) => state.product.price
export const getProductCategory = (state: StateSchema) => state.product.category
export const getProductImages = (state: StateSchema) => state.product.images
export const getProductStockStatus = (state: StateSchema) => state.product.stockStatus
export const getProductIsNew = (state: StateSchema) => state.product.isNew
export const getProductIsTop = (state: StateSchema) => state.product.isTop
