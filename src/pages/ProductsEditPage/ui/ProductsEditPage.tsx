import { useParams } from "react-router-dom"

export function ProductsEditPage() {
    const { id } = useParams()

    return (
        <div>
            ProductsEditPage id:
            {id}
        </div>
    )
}
