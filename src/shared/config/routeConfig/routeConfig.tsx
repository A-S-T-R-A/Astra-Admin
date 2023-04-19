import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"

import { RouteProps } from "react-router-dom"
import { AppRoutes, RoutePath } from "./const"

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

// @ts-ignore
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    /*  [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage />,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPage />,
    },
    [AppRoutes.DELIVERY]: {
        path: RoutePath.delivery,
        element: <DeliveryPage />,
    },
    [AppRoutes.ORDER]: {
        path: RoutePath.order,
        element: <OrderPage />,
    },
    [AppRoutes.CATEGORY]: {
        path: `${RoutePath.category}/:id`,
        element: <CategoryPage />,
    },
    [AppRoutes.SUB_CATEGORY]: {
        path: `${RoutePath.sub_category}/:id`,
        element: <SubCategoryPage />,
    },
    [AppRoutes.PRODUCT_DETAILS]: {
        path: `${RoutePath.product_details}/:id`,
        element: <ProductDetailsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    }, */
}
