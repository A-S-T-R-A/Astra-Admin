import { useEffect, useRef, useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { useDispatch } from "react-redux"
import { filterProductsActions } from "features/FilterProducts/model/slice/filterProductsSlice"
import styles from "./PriceFilter.module.scss"

interface PriceFilterProps {
    groupId: number
    title: string
    range: any
    onChangeFilters: () => void
}

export function PriceFilter(props: PriceFilterProps) {
    const { title, groupId, range, onChangeFilters } = props

    const GAP = 100
    const MINIMUM_PRICE = range.from
    const MAXIMUM_PRICE = range.to
    const PRICE_RANGE = MAXIMUM_PRICE - MINIMUM_PRICE

    const [priceSort, setPriceSort] = useState({
        min: MINIMUM_PRICE,
        max: MAXIMUM_PRICE,
    })
    const [position, setPosition] = useState({
        left: "0%",
        right: "0%",
    })

    const minRef = useRef<HTMLInputElement>(null)
    const maxRef = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const debounsedChangeFilters = useDebounce(() => onChangeFilters(), 500)

    useEffect(() => {
        dispatch(filterProductsActions.setPriceRange({ groupId, range: priceSort }))
        debounsedChangeFilters()
    }, [priceSort, dispatch, groupId, debounsedChangeFilters])

    useEffect(() => {
        if (minRef.current && maxRef.current) {
            minRef.current.value = priceSort.min.toString()
            maxRef.current.value = priceSort.max.toString()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function inputChangeHandler(value: string, side: string) {
        if (Number.isNaN(+value)) {
            return
        }

        const { min, max } = priceSort

        if (side === "min") {
            if (max - +value < GAP) {
                setPriceSort(prev => ({ ...prev, min: prev.max - GAP }))
                if (minRef.current) minRef.current.value = (max - GAP).toString()
                const left = `${((+max - GAP - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition(prev => ({ ...prev, left }))
            } else if (+value < MINIMUM_PRICE) {
                setPriceSort(prev => ({ ...prev, min: +value }))
                if (minRef.current) minRef.current.value = MINIMUM_PRICE.toString()
                setPosition(prev => ({ ...prev, left: "0%" }))
            } else {
                const left = `${((+value - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition(prev => ({ ...prev, left }))
                setPriceSort(prev => ({ ...prev, min: +value }))
                if (minRef.current) minRef.current.value = value
            }
        } else if (side === "max") {
            if (+value - min < GAP) {
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) {
                    maxRef.current.value = (min + GAP).toString()
                }
                const right = `${100 - ((min + GAP - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition(prev => ({ ...prev, right }))
            } else if (+value > MAXIMUM_PRICE) {
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) maxRef.current.value = MAXIMUM_PRICE.toString()
                setPosition(prev => ({ ...prev, right: "0%" }))
            } else {
                const right = `${100 - ((+value - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition(prev => ({ ...prev, right }))
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) maxRef.current.value = value
            }
        }
    }

    function onMinBlur(e: any) {
        if (e.target.value < MINIMUM_PRICE) {
            setPriceSort(prev => ({ ...prev, min: MINIMUM_PRICE }))
        } else if (e.target.value > priceSort.max) {
            setPriceSort(prev => ({ ...prev, min: prev.max - GAP }))
        }
    }

    function onMaxBlur(e: any) {
        if (e.target.value > MAXIMUM_PRICE) {
            setPriceSort(prev => ({ ...prev, max: MAXIMUM_PRICE }))
        } else if (e.target.value < priceSort.min) {
            setPriceSort(prev => ({ ...prev, max: prev.min + GAP }))
        }
    }

    function sliderChangeHandler(name: string) {
        if (minRef.current && maxRef.current) {
            const min = +minRef.current.value
            const max = +maxRef.current.value

            if (max - min < GAP) {
                if (name === "min") {
                    const min = Number(max - GAP).toString()
                    minRef.current.value = min
                    setPriceSort((prev: any) => ({ ...prev, min }))
                    const left = `${((+minRef.current.value - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                    const right = `${
                        100 - ((+maxRef.current.value - MINIMUM_PRICE) / PRICE_RANGE) * 100
                    }%`
                    setPosition({ left, right })
                } else {
                    const max = Number(min + GAP).toString()
                    maxRef.current.value = max
                    setPriceSort((prev: any) => ({ ...prev, max }))
                    const left = `${((+minRef.current.value - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                    const right = `${
                        100 - ((+maxRef.current.value - MINIMUM_PRICE) / PRICE_RANGE) * 100
                    }%`
                    setPosition({ left, right })
                }
            } else {
                const left = `${((min - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                const right = `${100 - ((max - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition({ left, right })
                setPriceSort({ min, max })
            }
        }
    }

    return (
        <div className={styles.container}>
            <Typography variant={TypographyVariant.P} className={styles.title}>
                {title}
            </Typography>
            <div className={styles.info}>
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    от
                </Typography>
                <Input
                    value={priceSort.min.toString()}
                    onChange={value => inputChangeHandler(value, "min")}
                    onBlur={onMinBlur}
                    className={styles.input}
                />
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    до
                </Typography>
                <Input
                    value={priceSort.max.toString()}
                    onChange={value => inputChangeHandler(value, "max")}
                    onBlur={onMaxBlur}
                    className={styles.input}
                />
            </div>
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    <div
                        className={styles.progress}
                        style={{ left: position.left, right: position.right }}
                    />
                </div>
                <div className={styles.range}>
                    <input
                        type="range"
                        ref={minRef}
                        className={styles.min}
                        min={MINIMUM_PRICE}
                        max={MAXIMUM_PRICE}
                        onInput={() => sliderChangeHandler("min")}
                    />
                    <input
                        type="range"
                        ref={maxRef}
                        className={styles.max}
                        min={MINIMUM_PRICE}
                        max={MAXIMUM_PRICE}
                        onInput={() => sliderChangeHandler("max")}
                    />
                </div>
            </div>
        </div>
    )
}