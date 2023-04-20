import { ProductForm } from "entities/Product"
import { AddProduct, DiscardProduct } from "features/product/ManageProduct"
import {
    AddProductAttribute,
    AttributeModal,
    DeleteProductAttribute,
    EditProductAttribute,
} from "features/product/ManageProductAttribute"
import { AddProductImage } from "features/product/ManageProductImages"

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
            />
            <AddProduct />
            <DiscardProduct />
        </div>
    )
}
