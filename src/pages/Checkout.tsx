import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { PaymentMethod } from '../components/features/checkout/PaymentMethod';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const { total, items } = useCart();
  const navigate = useNavigate();
  
  // Estado local para controlar a opção selecionada
  const [paymentType, setPaymentType] = useState('pix');

  const handleFinishOrder = () => {
    // Aqui você faria a validação final
    alert(`Pedido confirmado! \nTotal: R$ ${total.toFixed(2)} \nPagamento via: ${paymentType}`);
    
    // Limpar carrinho (opcional, precisaríamos criar uma função clearCart no context)
    navigate('/cardapio');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Finalizar Pedido</h1>

      {/* Resumo Simples */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Resumo</h3>
        {items.map(item => (
          <div key={item.product.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>{item.quantity}x {item.product.name}</span>
            <span>R$ {(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2em', fontWeight: 'bold', marginTop: '10px' }}>
          <span>Total a Pagar:</span>
          <span style={{ color: 'green' }}>R$ {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Nosso Componente de Pagamento (Componente #5 da lista!) */}
      <PaymentMethod 
        selected={paymentType} 
        onSelect={setPaymentType} 
      />

      {/* Botão Final */}
      <button 
        onClick={handleFinishOrder}
        style={{ 
          width: '100%', 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: 'green', 
          color: 'white', 
          border: 'none', 
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}
      >
        Confirmar Pagamento
      </button>
    </div>
  );
};