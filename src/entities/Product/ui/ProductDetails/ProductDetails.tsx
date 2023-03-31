import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Product } from "entities/Product/model/types"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProductDetails.module.scss"
import { ProductImages } from "./ProductImages/ProductImages"
import { productImagesList, productDescriptionData } from "./lists"
import { ProductInfo } from "./ProductInfo/ProductInfo"

interface ProductDetailsProps extends Product {
    isLoading: boolean
    error?: string
}

export function ProductDetails(props: ProductDetailsProps) {
    const { isLoading, error, id, name, price, currency, images } = props

    let content

    switch (true) {
        case isLoading:
            content = <div>Loading...</div>
            break
        case !!error:
            content = <div>Error</div>
            break
        case !id:
            content = <div>Product doesn t exist</div>
            break
        case !!id:
            content = (
                <>
                    <div className={styles.header}>
                        <Typography variant={TypographyVariant.H3} className={styles.title}>
                            {name}
                        </Typography>
                        <Typography color={TypographyColor.ACCENT} className={styles.isPresent}>
                            В наличии
                        </Typography>
                        <Typography
                            variant={TypographyVariant.H2}
                            color={TypographyColor.DARK_GRAY}
                            className={styles.price}
                        >
                            {`${price} ${currency}`}
                        </Typography>
                    </div>
                    <ProductImages list={productImagesList} className={styles.images} />
                    <Button variant={ButtonVariant.FILLED_RED} className={styles.btn}>
                        В корзину
                    </Button>
                    <ProductInfo className={styles.description} data={productDescriptionData} />
                </>
            )
            break
        default:
            content = <div>Error</div>
    }

    return <div className={styles.container}>{content}</div>
}
