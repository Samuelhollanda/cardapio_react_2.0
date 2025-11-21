import type { ICartItem } from '../../../types/cart';
import { useCart } from '../../../contexts/CartContext';

interface CartItemProps {
  item: ICartItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      borderBottom: '1px solid #eee', 
      padding: '10px 0',
      gap: '15px' 
    }}>
      {/* Imagem pequena */}
      <img 
        src={item.product.image} 
        alt={item.product.name} 
        style={{ width: '60px', height: '60px', objectFit: 'cover' }} 
      />

      {/* Nome e Preço unitário */}
      <div style={{ flex: 1 }}>
        <h4>{item.product.name}</h4>
        <p>R$ {item.product.price.toFixed(2)}</p>
      </div>

      {/* Controles de Quantidade */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button 
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          disabled={item.quantity <= 1} // Desabilita se for 1 (ou pode remover se quiser)
        >
          -
        </button>
        
        <span>{item.quantity}</span>
        
        <button 
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
        >
          +
        </button>
      </div>

      {/* Subtotal do item */}
      <div style={{ width: '80px', textAlign: 'right' }}>
        <strong>R$ {(item.product.price * item.quantity).toFixed(2)}</strong>
      </div>

      {/* Botão de Remover (Lixeira) */}
      <button 
        onClick={() => removeItem(item.product.id)}
        style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
      >
        Remover
      </button>
    </div>
  );
};