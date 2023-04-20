import { StateSchema } from "app/providers/StoreProvider"

export const getAttributeName = (state: StateSchema) => state.manageProductAttributes.name
export const getAttributeValues = (state: StateSchema) => state.manageProductAttributes.values
export const getAttributeModalOpen = (state: StateSchema) => state.manageProductAttributes.isOpen
