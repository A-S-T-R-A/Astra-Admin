import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProductSchema } from "../types/productSchema"

const initialState: ProductSchema = {
    name: "",
    description: "",
    price: 0,
    category: "",
    stockStatus: "",
    isNew: false,
    isTop: false,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
    },
})

export const { reducer: productReducer, actions: productActions } = productSlice
