import { createContext, useState, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
// Importe os "tipos" que criamos
import type { ICartItem } from '../types/cart';
import type { IProduct } from '../types/product';
import type { ICartContextData } from '../types/cartContext';

// 1. Criar o Contexto
// Usamos o tipo ICartContextData e iniciamos como 'undefined'
const CartContext = createContext<ICartContextData | undefined>(undefined);

// 2. Criar o "Provedor" (Provider)
// Este componente vai "abraçar" sua aplicação e fornecer o carrinho
type CartProviderProps = {
  children: ReactNode; // 'children' são os componentes que o Provider irá abraçar
};

export const CartProvider = ({ children }: CartProviderProps) => {
  // Estado principal: a lista de itens no carrinho
  const [items, setItems] = useState<ICartItem[]>([]);

  // Função para ADICIONAR um item
  const addItem = (product: IProduct) => {
    setItems((prevItems) => {
      // Verifica se o item já existe no carrinho
      const existingItem = prevItems.find(item => item.product.id === product.id);

      if (existingItem) {
        // Se existe, apenas aumenta a quantidade
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Se não existe, adiciona o novo item com quantidade 1
        return [...prevItems, { product: product, quantity: 1 }];
      }
    });
  };

  // Função para REMOVER um item (pelo ID)
  const removeItem = (productId: string | number) => {
    setItems((prevItems) =>
      prevItems.filter(item => item.product.id !== productId)
    );
  };

  // Função para ATUALIZAR a quantidade
  const updateQuantity = (productId: string | number, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Se a quantidade for 0 ou menos, remove o item
      removeItem(productId);
    } else {
      setItems((prevItems) =>
        prevItems.map(item =>
          item.product.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // 3. Cálculos (Total e Contagem de Itens)
  // Usamos 'useMemo' para otimizar: ele só recalcula se 'items' mudar.
  const itemCount = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const total = useMemo(() => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [items]);

  // 4. Fornecer os valores para os componentes "filhos"
  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 5. Criar o Custom Hook (Obrigatório pelo professor)
// Este hook facilita o uso do carrinho em qualquer componente
export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }

  return context;
};