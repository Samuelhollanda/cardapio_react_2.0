import type { IProduct } from "./product";

export interface ICartItem {
    product: IProduct;
    quantity: number;
}