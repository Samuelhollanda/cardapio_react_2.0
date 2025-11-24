import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button'; // Usamos nosso botão novo!
import pizza from '../../assets/pizza.jpg';
export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '80px 20px', 
      backgroundImage: `url(${pizza})`,
      backgroundSize: 'cover',
      backgroundColor: '#c6c0c0ff',
      borderRadius: '10px',
      margin: '20px',
    }}>
    
      <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: 'white' }}>
        Fome de quê?
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#ffffffff', marginBottom: '30px' }}>
        Os melhores lanches e pizzas entregues na sua mesa.
      </p>
      
      {/* Aqui usamos o componente Button que acabamos de criar */}
      <Button onClick={() => navigate('/cardapio')}>
        VER CARDÁPIO COMPLETO
      </Button>
    </div>
  );
};