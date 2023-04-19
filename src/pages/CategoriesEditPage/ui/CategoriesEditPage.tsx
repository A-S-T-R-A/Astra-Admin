import { useParams } from "react-router-dom"

export function CategoriesEditPage() {
    const { id } = useParams()

    return (
        <div>
            CategoriesEditPage id:
            {id}
        </div>
    )
}
