// Importamos o 'tipo' do produto para o TypeScript não reclamar
import type { IProduct } from '../../../types/product';

// Importamos o hook para adicionar ao carrinho
import { useCart } from '../../../contexts/CartContext';

// Definimos o que esse componente PRECISA receber para funcionar
interface MenuItemCardProps {
  product: IProduct;
}

export const MenuItemCard = ({ product }: MenuItemCardProps) => {
  // Pegamos a função 'addItem' de dentro do nosso Contexto Global
  const { addItem } = useCart();

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '250px' }}>
      {/* Imagem do produto */}
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
      />
      
      {/* Informações */}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>R$ {product.price.toFixed(2)}</strong></p>

      {/* Botão de Ação */}
      <button 
        onClick={() => addItem(product)}
        style={{ padding: '5px 10px', cursor: 'pointer' }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};