import { Button, ButtonVariant } from "shared/ui/Button/Button"
import styles from "./DemoPage.module.scss"
import { Input } from "shared/ui/Input/Input"

export function DemoPage() {
    function getInfo(e: any) {
        console.log(e)
    }

    return (
        <div>
            <h1>Demo</h1>
            <div className={styles.mainContainer}>
                <h3>Buttons</h3>
                <div className={styles.wrapper}>
                    <Button variant={ButtonVariant.FILLED}>Filed</Button>
                    <Button variant={ButtonVariant.OUTLINE}>Outline</Button>
                    <Button variant={ButtonVariant.CLEAR}>Clear</Button>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <h3>Inputs</h3>
                <div className={styles.wrapper}>
                    <Input
                        onChange={getInfo}
                        value={""}
                        label={"User:"}
                        placeholder={"User name"}
                    ></Input>
                </div>
            </div>
        </div>
    )
}
