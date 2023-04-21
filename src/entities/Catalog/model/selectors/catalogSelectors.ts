import { StateSchema } from "app/providers/StoreProvider"

export const getNavigationTree = (state: StateSchema) => state.catalog.tree
export const getNavigationTreeError = (state: StateSchema) => state.catalog.error
