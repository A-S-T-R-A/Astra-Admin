import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchNavigationTree } from "../services/fetchNavigationTree/fetchNavigationTree"
import { CatalogSchema } from "../types/catalogSchema"
import { navigationTreeType } from "../types/types"

const initialState: CatalogSchema = {
    tree: [],
    isLoading: false,
    error: undefined,
}

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNavigationTree.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchNavigationTree.fulfilled,
                (state, action: PayloadAction<navigationTreeType>) => {
                    state.isLoading = false
                    state.tree = action.payload
                }
            )
            .addCase(
                fetchNavigationTree.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false
                    state.error = action.payload
                }
            )
    },
})

export const { reducer: catalogReducer, actions: catalogActions } = catalogSlice
