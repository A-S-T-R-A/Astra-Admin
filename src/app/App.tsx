import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Sidebar } from "widgets/Sidebar"
import { fetchNavigationTree } from "entities/Catalog"
import { AppRouter } from "./providers/router"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNavigationTree())
    }, [dispatch])

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Sidebar />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
