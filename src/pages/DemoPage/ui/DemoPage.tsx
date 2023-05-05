import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { Textarea } from "shared/ui/Textarea/Textarea"
import { Dropdown } from "shared/ui/Dropdown/index"

import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { useState } from "react"
import styles from "./DemoPage.module.scss"

export function DemoPage() {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

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
                        onChange={value => setName(value)}
                        value={name}
                        label="User:"
                        placeholder="User name"
                    />
                </div>
            </div>

            <div className={styles.mainContainer}>
                <h3>Textarea </h3>
                <div className={styles.wrapper}>
                    <Textarea
                        onChange={value => setComment(value)}
                        value={comment}
                        label="Comments:"
                        placeholder="Leave your comment"
                        rows={4}
                        cols={4}
                    />
                </div>
            </div>
            <div className={styles.mainContainer}>
                <h3>Dropdown</h3>
                <div className={styles.wrapper}>
                    <Dropdown />
                </div>
            </div>
            <div className={styles.mainContainer}>
                <h3>Checkbox</h3>
                <div className={styles.wrapper}>
                    <Checkbox positionCheckboxRight label="Option 1" />
                    <Checkbox positionCheckboxRight={false} label="Option 2" />
                    <Checkbox positionCheckboxRight={false} label="Option 3" />
                </div>
            </div>
        </div>
    )
}
