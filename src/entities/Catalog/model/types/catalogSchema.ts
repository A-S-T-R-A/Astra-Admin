import { navigationTreeType } from "./types"

export interface CatalogSchema {
    tree: navigationTreeType | []
    isLoading: boolean
    error?: string
}
