import { productActions } from "entities/Product"
import { ChangeEvent } from "react"
import { Dispatch } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"

export async function imagesUploadHandler(e: ChangeEvent, dispatch: Dispatch) {
    const { files } = e.target as HTMLInputElement

    if (!!files?.length && files.length > 0) {
        const formData = new FormData()

        Array.from(files).forEach(file => {
            formData.append("images", file)
        })

        try {
            const response = await $api.post("/upload/images", formData)

            if (!response.data) {
                throw new Error("err")
            }

            dispatch(productActions.setImages(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
