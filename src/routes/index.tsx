import { Routes, Route } from 'react-router-dom';

// Importe os componentes "esqueleto" que criamos
import { Navbar } from '../components/ui/Navbar'; // (Vamos assumir que ele existe)
import { Footer } from '../components/ui/Footer'; // (Vamos assumir que ele existe)

// Importe as páginas que acabamos de criar
import { Home } from '../pages/Home';
import { Cardapio } from '../pages/Cardapio'
import { Carrinho } from '../pages/Carrinho';
import { Login } from '../pages/Login';
import { DetalhesPedido } from '../pages/DetalhesPedido'

export const AppRoutes = () => {
  return (
    <>
      {/* Colocamos o Navbar aqui, fora do <Routes>, 
        para que ele apareça em TODAS as páginas. 
      */}
      <Navbar /> 

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detalhes" element={<DetalhesPedido />} /> 
          {/* Você pode mudar para /detalhes/:id depois */}
          
          {/* Rota "Curinga" para páginas não encontradas */}
          <Route path="*" element={<h1>Página não encontrada!</h1>} />
        </Routes>
      </main>

      {/* O Footer também fica fora para aparecer em todas as páginas */}
      <Footer />
    </>
  );
};