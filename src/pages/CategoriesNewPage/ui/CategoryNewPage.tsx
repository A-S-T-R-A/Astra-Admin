import { CategoryForm } from "entities/Category"
import { AddCategory } from "features/ManageCategory"
import { ManageCategoryImage } from "features/ManageCategoryImage"
import { SelectCategory } from "features/SelectCategory"

export function CategoriesNewPage() {
    return (
        <div>
            CategoriesNewPage
            <CategoryForm
                SelectCategory={SelectCategory}
                ManageCategoryImage={ManageCategoryImage}
            />
            <AddCategory />
        </div>
    )
}
