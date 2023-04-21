import { ChangeEvent } from "react"
import { Dispatch } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { categoryActions } from "entities/Category"

export async function imageUploadHandler(e: ChangeEvent, dispatch: Dispatch) {
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

            dispatch(categoryActions.setImage(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
