import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { RoutePath } from "shared/config/routeConfig/const"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import styles from "./Banner.module.scss"

export enum BannerVariant {
    TOP = "top",
    MAIN = "main",
    NORMAL = "normal",
}

export enum BannerColor {
    NORMAL = "colorNormal",
    INVERTED = "colorInverted",
}

interface BannerProps {
    className?: string
    title: string
    desc: string
    img: string
    variant?: BannerVariant
    color?: BannerColor
}

export function Banner(props: BannerProps) {
    const {
        className,
        title,
        desc,
        img,
        variant = BannerVariant.NORMAL,
        color = BannerColor.NORMAL,
    } = props

    const navigate = useNavigate()

    const { t } = useTranslation()

    const isMain = variant === BannerVariant.MAIN || variant === BannerVariant.TOP

    return (
        <div
            className={classNames(styles.wrapper, {}, [className, styles[variant], styles[color]])}
        >
            <div className={styles.content}>
                <Typography
                    variant={TypographyVariant.H1}
                    color={
                        color === BannerColor.NORMAL
                            ? TypographyColor.INVERTED
                            : TypographyColor.BASE
                    }
                    className={styles.title}
                >
                    {title}
                </Typography>
                {isMain && (
                    <Typography
                        color={
                            color === BannerColor.NORMAL
                                ? TypographyColor.INVERTED
                                : TypographyColor.DARK_GRAY
                        }
                        className={styles.description}
                    >
                        {desc}
                    </Typography>
                )}
                {isMain ? (
                    <Button
                        variant={ButtonVariant.FILLED}
                        onClick={() => navigate(RoutePath.catalog)}
                    >
                        {t("view")}
                    </Button>
                ) : (
                    <Button
                        variant={ButtonVariant.CLEAR}
                        onClick={() => navigate(RoutePath.catalog)}
                    >
                        {t("viewProducts")}
                    </Button>
                )}
            </div>
            <img src={img} alt="" className={styles.img} />
        </div>
    )
}
