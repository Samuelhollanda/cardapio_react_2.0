import { createContext, useContext, useState, useMemo, Children } from "react";
import type { ReactNode } from "react";
import type { ICartItem } from "../types/cart";
import type { IProduct } from "../types/product";
import type { ICartContextData } from "../types/cartContext";

export const CartContext = createContext<ICartContextData | undefined>(undefined);

type CartProviderProps = {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [items, setItems] = useState<ICartItem[]>([]);

    const addItem = (product: IProduct) => {
        setItems((prevItems) => {
            const existing 
        })
    }
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
};