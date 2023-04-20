import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ManageProductAttributeSchema } from "../types/manageProductAttributeSchema"
import { IAttribute, IAttributeValues } from "../types/types"

const initialState: ManageProductAttributeSchema = {
    name: "",
    values: [],
    isOpen: false,
}

const manageProductAttributesSlice = createSlice({
    name: "manageProductAttributes",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setValues: (state, action: PayloadAction<IAttributeValues[]>) => {
            state.values = action.payload
        },
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        initModal: (state, action: PayloadAction<IAttribute | undefined>) => {
            if (action.payload) {
                state.name = action.payload.name
                state.values = action.payload.values
            } else {
                state.name = ""
                state.values = []
            }
        },
    },
})

export const { reducer: manageProductAttributesReducer, actions: manageProductAttributesActions } =
    manageProductAttributesSlice
