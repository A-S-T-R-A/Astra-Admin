import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProductSchema } from "../types/productSchema"
import { StockStatusOptionVariant } from "../types/types"

const initialState: ProductSchema = {
    name: "",
    description: "",
    price: 0,
    category: "",
    images: [],
    stockStatus: StockStatusOptionVariant.IN_STOCK,
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
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setImages: (state, action: PayloadAction<string[]>) => {
            state.images = [...action.payload, ...state.images]
        },
        setStockStatus: (state, action: PayloadAction<StockStatusOptionVariant>) => {
            state.stockStatus = action.payload
        },
        toggleIsNew: state => {
            state.isNew = !state.isNew
        },
        toggleIsTop: state => {
            state.isTop = !state.isTop
        },
    },
})

export const { reducer: productReducer, actions: productActions } = productSlice
