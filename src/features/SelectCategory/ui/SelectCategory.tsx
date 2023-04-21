import { ChangeEvent, useState } from "react"
import { useSelector } from "react-redux"
import { getNavigationTree } from "entities/Catalog"
import styles from "./SelectCategory.module.scss"
import { IFlattenedCategories } from "../model/types/types"

interface ISelectCategoryProps {
    onChange?: (value: string) => void
}

export function SelectCategory({ onChange }: ISelectCategoryProps) {
    const [value, setValue] = useState("")

    const categoriesTree = useSelector(getNavigationTree) || []

    const flattenedCategories: IFlattenedCategories[] = categoriesTree.flatMap(item => {
        const { id, name, categories } = item
        if (categories?.length > 0) {
            const subCategories = categories.map(item => ({
                id: item.id,
                name: item.name,
                isSub: true,
            }))
            return [{ id, name }, ...subCategories]
        }
        return { id, name }
    })

    function changeHandler(e: ChangeEvent) {
        const target = e.target as HTMLSelectElement
        setValue(target.value)
        onChange?.(target.value)
    }

    return (
        <select value={value} onChange={changeHandler} className={styles.container}>
            <option value="">Select an Option</option>
            {flattenedCategories.map(item => (
                <option key={item.id} value={item.id}>
                    {item.isSub ? `  -- ${item.name}` : item.name}
                </option>
            ))}
        </select>
    )
}
