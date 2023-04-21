import { configureStore } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { manageProductAttributesReducer } from "features/product/ManageProductAttribute"
import { productReducer } from "entities/Product"
import { productsPageReducer } from "pages/ProductsPage"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            product: productReducer,
            manageProductAttributes: manageProductAttributesReducer,
            productsPage: productsPageReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }),
    })
}
