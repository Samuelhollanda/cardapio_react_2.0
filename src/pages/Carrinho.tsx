 // 1. Importe o useNavigate
import { Link, useNavigate } from 'react-router-dom'; 
import { useCart } from '../contexts/CartContext';
import { CartItem } from '../components/features/cart/CartItem';

export const Carrinho = () => {
  const { items, total, itemCount } = useCart();
  
  // 2. Inicie o hook de navegação
  const navigate = useNavigate(); 

  if (itemCount === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', fontSize: 28,  }}>
        <h2>Seu carrinho está vazio</h2>
        <Link to="/cardapio" style={{ textDecoration: 'none', color: 'black', fontSize: 35 }}>Voltar para o cardápio</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Seu Carrinho</h1>

      <div style={{ marginBottom: '20px' }}>
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <div style={{ 
        borderTop: '2px solid #333', 
        paddingTop: '20px', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3>Total do Pedido:</h3>
        <h2 style={{ color: 'green' }}>R$ {total.toFixed(2)}</h2>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <Link to="/cardapio">
          <button style={{ padding: '10px' }}>Continuar Comprando</button>
        </Link>
        
        {/* 3. ALTERAÇÃO AQUI: Mudamos para navegar para o /checkout */}
        <button 
          style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
          onClick={() => navigate('/checkout')} 
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
};