import { useDispatch } from "react-redux"
import { imageUploadHandler } from "../model/services/imageUploadHandler"

export function ManageCategoryImage() {
    const dispatch = useDispatch()

    return (
        <div>
            <input type="file" onChange={e => imageUploadHandler(e, dispatch)} multiple={false} />
        </div>
    )
}
