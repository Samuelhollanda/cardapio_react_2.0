// --- ATUALIZAÇÃO NO ARQUIVO DE ROTAS ---
// Atualize o arquivo: src/routes/index.tsx
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/ui/Layout'; // Importe o novo Layout
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Cardapio } from '../pages/Cardapio';
import { Carrinho } from '../pages/Carrinho';
import { Checkout } from '../pages/Checkout';


export const AppRoutes = () => {
  return (
    <Routes>
      {/* Envolvemos todas as rotas com o Layout principal */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} /> {/* Rota padrão */}
        <Route path="home" element={<Home />} />
        <Route path="cardapio" element={<Cardapio />} />
        <Route path="carrinho" element={<Carrinho />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Route>
    </Routes>
  );
};