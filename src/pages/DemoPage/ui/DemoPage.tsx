import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { Textarea } from "shared/ui/Textarea/Textarea"
import { Dropdown } from "shared/ui/Dropdown/index"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { useState, ChangeEvent } from "react"
import {
    ArrowDown,
    ArrowUp,
    CategoriesIcon,
    DeleteIcon,
    EditIcon,
    HomeIcon,
    ProductIcon,
    SearchIcon,
} from "shared/assets/icons"
import { MinusIcon } from "shared/assets/icons/others"
import styles from "./DemoPage.module.scss"

export function DemoPage() {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)
    const [isChecked3, setIsChecked3] = useState(false)

    const options = [
        { value: "cars", label: "Cars" },
        { value: "motocycles", label: "Motorcycles" },
        { value: "auto parts", label: "Auto Parts" },
        { value: "auto tyres", label: "AutoTyres" },
    ]

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
                    <Dropdown options={options} />
                </div>
            </div>
            <div className={styles.mainContainer}>
                <h3>Checkbox</h3>
                <div className={styles.wrapper}>
                    <Checkbox
                        onChange={value => setIsChecked(value)}
                        checked={isChecked}
                        positionCheckboxRight
                        label="Option 1"
                    />
                    <Checkbox
                        checked={isChecked2}
                        onChange={value => setIsChecked2(value)}
                        positionCheckboxRight={false}
                        label="Option 2"
                    />
                    <Checkbox
                        checked={isChecked3}
                        onChange={value => setIsChecked3(value)}
                        positionCheckboxRight={false}
                        label="Option 3"
                    />
                </div>
            </div>
            <div className={styles.mainContainer}>
                <h3>Icons</h3>
                <div className={styles.wrapper}>
                    <ArrowUp size="L" color="base" />
                    <ArrowDown size="L" color="accent" />
                    <CategoriesIcon size="L" color="base" />
                    <DeleteIcon />
                    <EditIcon />
                    <HomeIcon color="accent" />
                    <ProductIcon />
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}
