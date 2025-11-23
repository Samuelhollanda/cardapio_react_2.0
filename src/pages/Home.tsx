import { Hero } from '../components/home/Hero';

export const Home = () => {
  return (
    <div>
      {/* Componente Hero */}
      <Hero />

      {/* Uma seção extra de texto só para encher a página */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <h2>COMO FUNCIONA</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px', marginLeft: '-50px' }}>
          <div>
            <h3>1. Escolha</h3>
            <p>Navegue pelo nosso cardápio delicioso.</p>
          </div>
          <div>
            <h3>2. Peça</h3>
            <p>Adicione ao carrinho e escolha como pagar.</p>
          </div>
          <div>
            <h3>3. Aproveite</h3>
            <p>Receba seu pedido quentinho.</p>
          </div>
        </div>
      </div>
    </div>
  );
};