import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav>
      <div style={{ backgroundColor: '#dc8d39ff', borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* MUDANÇA 1: O Título agora é um Link que leva para a Home (/home) */}
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>Cardápio Digital</h3>
        </Link>

        <div style={{ display: 'flex', gap: '15px' }}>
          {/* MUDANÇA 2: Adicionei o link explícito para "Início" */}
          <Link to="/home">Início</Link>

          <Link to="/cardapio">Cardápio</Link>
          
          <Link to="/carrinho">
            Carrinho ({itemCount})
          </Link>
          
          <Link to="/login">Sair</Link>
        </div>
      </div>
    </nav>
  );
};