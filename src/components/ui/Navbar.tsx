import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav>
      <div style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* MUDANÇA 1: O Título agora é um Link que leva para a Home (/home) */}
        <Link to="/home" style={{ textDecoration: 'none', color: 'black', fontSize: 35 }}>
            <h3>Cardápio Digital</h3>
        </Link>

        <div style={{ display: 'flex', gap: '25px' }}>
          {/* MUDANÇA 2: Adicionei o link explícito para "Início" */}
          <Link to="/home" style={{ textDecoration: 'none', color: 'black', fontSize: 30 }}>Início</Link> 

          <Link to="/cardapio" style={{ textDecoration: 'none', color: 'black', fontSize: 30  }}>Cardápio</Link>
          
          <Link to="/carrinho" style={{ textDecoration: 'none', color: 'black', fontSize: 30  }}>
            Carrinho ({itemCount})
          </Link>
          
          <Link to="/login" style={{ textDecoration: 'none', color: 'black', fontSize: 30  }}>Sair</Link>
        </div>
      </div>
    </nav>
  );
};
