import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "./providers/router"

function App() {
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <div>Sidebar</div>
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
