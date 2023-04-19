import { classNames } from "shared/lib/classNames/classNames"

function App() {
    return <div className={classNames("app", {}, [])}>hello</div>
}

export default App
