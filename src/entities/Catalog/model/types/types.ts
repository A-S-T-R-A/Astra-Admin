export interface navigationSubcategory {
    name: string
    id: number
    image: string
    parent_category_id: number
}

export interface navigationCategory {
    name: string
    id: number
    icon: string
    categories: navigationSubcategory[]
}

export type navigationTreeType = navigationCategory[]
