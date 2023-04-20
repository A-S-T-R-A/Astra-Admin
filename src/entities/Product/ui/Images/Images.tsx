import { ReactElement } from "react"
import { useSelector } from "react-redux"
import { getProductImages } from "../../model/selectors/productSelectors"
import styles from "./Images.module.scss"

interface IImagesProps {
    AddProductImage?: () => ReactElement
}

export function Images(props: IImagesProps) {
    const { AddProductImage } = props

    const images = useSelector(getProductImages)

    return (
        <div className={styles.container}>
            {!!AddProductImage && <AddProductImage />}
            <div className={styles.images}>
                {images.length > 0 && images.map(item => <img key={item} src={item} alt="" />)}
            </div>
        </div>
    )
}
