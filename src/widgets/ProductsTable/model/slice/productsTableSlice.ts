import { createSlice } from "@reduxjs/toolkit"
import { ProductsTableSchema } from "../types/productsTableSchema"

const initialState: ProductsTableSchema = {
    data: [],
    isLoading: false,
}

const productsTableSlice = createSlice({
    name: "productsTableSlice",
    initialState,
    reducers: {},
})

export const { reducer: productsTableReducer, actions: productsTableActions } = productsTableSlice
