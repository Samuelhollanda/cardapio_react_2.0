import type { ICartItem } from "./cart";
import type { IProduct } from "./product";

export interface ICartContextData {
    items: ICartItem[];
    additem: (product: IProduct) => void;
    removeItem: (productId: string | number) => void;
    updateQuantity: (productId: string | number, newQuantity: number) => void;
    total: number;
    itemCount: number;
}