export interface IAttributeValues {
    id: string | number
    value: string
}

export interface IAttribute {
    name: string
    values: IAttributeValues[]
}
