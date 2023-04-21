import { Button } from "shared/ui/Button/Button"

interface IDeleteProductProps {
    id: number
}

export function DeleteProduct({ id }: IDeleteProductProps) {
    function deleteProductHandler() {}

    return <Button onClick={deleteProductHandler}>Delete</Button>
}
