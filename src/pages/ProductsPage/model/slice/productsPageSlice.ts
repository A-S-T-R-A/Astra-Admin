import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "entities/Product"
import { ProductsPageSchema } from "../types/productsPageSchema"
import { fetchProducts } from "../services/fetchProducts"
import { fetchSearchProducts } from "../services/fetchSearchProducts"

const initialState: ProductsPageSchema = {
    products: [],
    isLoading: false,
    categoryId: "",
}

const productsPageSlice = createSlice({
    name: "productsTableSlice",
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<string>) => {
            state.categoryId = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false
                state.error = action.payload
            })

            .addCase(fetchSearchProducts.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchSearchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(
                fetchSearchProducts.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false
                    state.error = action.payload
                }
            )
    },
})

export const { reducer: productsPageReducer, actions: productsPageActions } = productsPageSlice
