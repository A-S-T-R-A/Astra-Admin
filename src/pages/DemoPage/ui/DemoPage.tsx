import {Button, ButtonVariant} from "shared/ui/Button/Button";
import styles from './DemoPage.module.scss'

export function DemoPage() {

    return (
        <div >
            <h1>Demo</h1>
            <div className={styles.wrapper}>
                <Button variant={ButtonVariant.FILLED}>{'Filed'}</Button>
                <Button variant={ButtonVariant.OUTLINE}>{'Outline'}</Button>
                <Button variant={ButtonVariant.CLEAR}>{'Clear'}</Button>
            </div>

        </div>
    )
}
