import { SelectCategory } from "features/SelectCategory"
import { ReactElement } from "react"
import { Input } from "shared/ui/Input/Input"
import { useDispatch, useSelector } from "react-redux"
import styles from "./CategoryForm.module.scss"
import {
    getCategoryImage,
    getCategoryName,
    getCategorySlug,
} from "../model/selectors/categorySelectors"
import { categoryActions } from "../model/slice/categorySlice"

interface ICategoryFormProps {
    SelectCategory?: (props: { onChange: (value: string) => void }) => ReactElement
    ManageCategoryImage?: () => ReactElement
}

export function CategoryForm({ SelectCategory, ManageCategoryImage }: ICategoryFormProps) {
    const dispatch = useDispatch()

    const name = useSelector(getCategoryName)
    const slug = useSelector(getCategorySlug)
    const imgSrc = useSelector(getCategoryImage)

    return (
        <div className={styles.container}>
            <Input
                label="Name"
                value={name}
                onChange={value => dispatch(categoryActions.setName(value))}
            />
            <Input
                label="Slug"
                value={slug}
                onChange={value => dispatch(categoryActions.setSlug(value))}
            />
            {!!SelectCategory && (
                <SelectCategory
                    onChange={value => dispatch(categoryActions.setParentCategory(value))}
                />
            )}
            {!!ManageCategoryImage && <ManageCategoryImage />}
            {!!imgSrc && <img src={imgSrc} alt="" />}
        </div>
    )
}
