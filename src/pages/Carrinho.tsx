import { useCart } from '../contexts/CartContext';
import { CartItem } from '../components/features/cart/CartItem';
import { Link } from 'react-router-dom';

export const Carrinho = () => {
  // Pegamos os itens e o total direto do Contexto
  const { items, total, itemCount } = useCart();

  // Se o carrinho estiver vazio, mostramos um aviso
  if (itemCount === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Seu carrinho está vazio</h2>
        <Link to="/cardapio">Voltar para o cardápio</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Seu Carrinho</h1>

      {/* Lista de Itens */}
      <div style={{ marginBottom: '20px' }}>
        {items.map((item) => (
          // Renderizamos o componente que acabamos de criar
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      {/* Resumo do Pedido (Total) */}
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

      {/* Botões de Ação */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <Link to="/cardapio">
          <button style={{ padding: '10px' }}>Continuar Comprando</button>
        </Link>
        
        <button 
          style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
          onClick={() => alert('Pedido finalizado com sucesso! (Aqui entraria a integração com API)')}
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
};