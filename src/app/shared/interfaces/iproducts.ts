export interface Iproducts {

    name: string;
    flesh: string;
    code: string;
    calibers: {
        ref: string,
        size: string
    }[];
    isActive: boolean

}
