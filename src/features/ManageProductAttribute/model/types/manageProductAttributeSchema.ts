import { IAttributeValues } from "./types"

export interface ManageProductAttributeSchema {
    name: string
    values: IAttributeValues[]
    isOpen: boolean
}
