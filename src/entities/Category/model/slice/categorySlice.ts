import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CategorySchema } from "../types/categorySchema"

const initialState: CategorySchema = {
    name: "",
    slug: "",
    parentCategory: "",
    image: "",
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setSlug: (state, action: PayloadAction<string>) => {
            state.slug = action.payload
        },
        setParentCategory: (state, action: PayloadAction<string>) => {
            state.parentCategory = action.payload
        },
        setImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload
        },
    },
})

export const { reducer: categoryReducer, actions: categoryActions } = categorySlice
