import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AppRoutes } from './routes/index'; // Seu componente de rotas

function App() {
  return (
    // 1. O BrowserRouter envolve tudo
    <BrowserRouter>
      {/* 2. O CartProvider envolve as rotas */}
      <CartProvider>
        {/* 3. Suas rotas/páginas vêm aqui */}
        <AppRoutes /> 
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;