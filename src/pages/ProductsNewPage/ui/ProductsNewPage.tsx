import { ProductForm } from "entities/Product"
import { SelectCategory } from "features/SelectCategory"
import { AddProduct, DiscardProductChanges } from "features/ManageProduct"
import {
    AddProductAttribute,
    AttributeModal,
    DeleteProductAttribute,
    EditProductAttribute,
} from "features/ManageProductAttribute"
import { AddProductImage } from "features/ManageProductImages"

export function ProductsNewPage() {
    return (
        <div>
            ProductsNewPage
            <ProductForm
                AddProductAttribute={AddProductAttribute}
                EditProductAttribute={EditProductAttribute}
                DeleteProductAttribute={DeleteProductAttribute}
                AttributeModal={AttributeModal}
                AddProductImage={AddProductImage}
                SelectCategory={SelectCategory}
            />
            <AddProduct />
            <DiscardProductChanges />
        </div>
    )
}
