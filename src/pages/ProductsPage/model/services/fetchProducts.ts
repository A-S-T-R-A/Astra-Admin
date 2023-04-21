import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { IProduct } from "entities/Product"
import { getCategoryId } from "../selectors/productsPageSelectors"

export const fetchProducts = createAsyncThunk<IProduct[], void, ThunkConfig<string>>(
    "productsPage/fetchProducts",
    async (props, thunkApi) => {
        const { extra, getState, rejectWithValue } = thunkApi

        const categoryId = getCategoryId(getState())

        try {
            if (categoryId) {
                const response = await extra.api.get(`/category/${categoryId}/products`)

                if (!response.data) {
                    throw new Error()
                }

                return response.data.products
            }
            return undefined
        } catch (error: any) {
            return rejectWithValue("Unexpected error")
        }
    }
)
