import { StateSchema } from "app/providers/StoreProvider"

export const getCategoryName = (state: StateSchema) => state.category.name
export const getCategorySlug = (state: StateSchema) => state.category.slug
export const getCategoryParent = (state: StateSchema) => state.category.parentCategory
export const getCategoryImage = (state: StateSchema) => state.category.image
