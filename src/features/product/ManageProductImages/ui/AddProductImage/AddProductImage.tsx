import { useDispatch } from "react-redux"
import { imagesUploadHandler } from "../../model/services/imagesUploadHandler"

export function AddProductImage() {
    const dispatch = useDispatch()

    return <input type="file" onChange={e => imagesUploadHandler(e, dispatch)} />
}
