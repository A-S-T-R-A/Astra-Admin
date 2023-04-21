import {
    getCategoryName,
    getCategoryImage,
    getCategoryParent,
    getCategorySlug,
} from "entities/Category"
import { useState } from "react"
import { useSelector } from "react-redux"
import { $api } from "shared/api/api"
import { Button } from "shared/ui/Button/Button"

export function AddCategory() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const name = useSelector(getCategoryName)
    const hru = useSelector(getCategorySlug)
    const parentId = useSelector(getCategoryParent)
    const icon = useSelector(getCategoryImage)

    async function clickHandler() {
        const data = { name, hru, parent_category_id: parentId, icon }

        try {
            setError("")
            setIsSuccess(false)
            setIsLoading(true)

            const response = await $api.post("/category", data)

            if (!response.data) {
                throw new Error("err")
            }
            setIsSuccess(true)
        } catch (e) {
            setError("error")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {isSuccess && !error && <div>Category added successfully!</div>}
            {!!error && <div>Oops, something went wrong</div>}

            <Button onClick={clickHandler}>{isLoading ? "Loading..." : "Add New Category"}</Button>
        </>
    )
}
