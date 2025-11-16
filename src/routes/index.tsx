import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

// Importe as páginas
import { Login } from '../pages/Login'; // <--- Importe a página de Login
import { Home } from '../pages/Home';
import { Cardapio } from '../pages/Cardapio';
import { Carrinho } from '../pages/Carrinho';
import { DetalhesPedido } from '../pages/DetalhesPedido';

export const AppRoutes = () => {
  // ATENÇÃO: Por enquanto, vamos deixar o Navbar e Footer 
  // aparecendo em todas as rotas. Depois, podemos criar um
  // "Layout" para esconder isso na tela de login.
  // Por agora, está bom assim.
  return (
    <>
      <Navbar /> 

      <main>
        <Routes>
          {/* A Rota principal AGORA é o Login */}
          <Route path="/" element={<Login />} /> 
          
          {/* As outras páginas mudam de caminho */}
          <Route path="/home" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/detalhes" element={<DetalhesPedido />} /> 
          
          <Route path="*" element={<h1>Página não encontrada!</h1>} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};