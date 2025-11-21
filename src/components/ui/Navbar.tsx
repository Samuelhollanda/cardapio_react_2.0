import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export const Navbar = () => {
  // Aqui usamos o hook para pegar a quantidade de itens
  const { itemCount } = useCart();

  return (
    <nav>
      <div style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Logo / Título */}
        <h3>Cardápio Digital</h3>

        {/* Links de Navegação */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/cardapio">Cardápio</Link>
          
          {/* Link do Carrinho mostrando a quantidade dinâmica */}
          <Link to="/carrinho">
            Carrinho ({itemCount})
          </Link>
          
          <Link to="/">Sair</Link>
        </div>
      </div>
    </nav>
  );
};