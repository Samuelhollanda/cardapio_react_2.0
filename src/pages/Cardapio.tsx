import { MenuItemCard } from '../components/features/menu/MenuItemCard';
import { menuItems } from '../data/menuData';

export const Cardapio = () => {
  return (
    <div>
      <h1>Nosso Cardápio</h1>
      
      {/* Container para organizar os cards lado a lado (básico) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        
        {/* MAP: O segredo do React. 
            Para cada item na lista 'menuItems', criamos um <MenuItemCard /> 
        */}
        {menuItems.map((item) => (
          <MenuItemCard key={item.id} product={item} />
        ))}
        
      </div>
    </div>
  );
};