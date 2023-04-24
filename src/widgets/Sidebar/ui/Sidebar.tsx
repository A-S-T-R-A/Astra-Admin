import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/const"
import styles from "./Sidebar.module.scss"

interface SidebarProps {
    className?: string
}

export function Sidebar(props: SidebarProps) {
    const { className } = props

    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <div className={styles.container}>
                <AppLink to={RoutePath.dashboard}>Dashboard</AppLink>
                <AppLink to={RoutePath.products}>Products</AppLink>
                <AppLink to={RoutePath.categories}>Categories</AppLink>
            </div>
        </div>
    )
}
