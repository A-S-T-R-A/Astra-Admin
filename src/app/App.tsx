import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Sidebar } from "widgets/Sidebar"
import { AppRouter } from "./providers/router"

function App() {
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
