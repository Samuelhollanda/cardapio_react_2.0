import type { IProduct } from '../types/product';

export const menuItems: IProduct[] = [
  // --- LANCHES ---
  {
    id: 1,
    name: "X-Burger Clássico",
    description: "Pão brioche, carne suculenta de 180g, queijo cheddar derretido e maionese especial da casa.",
    price: 25.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lanches"
  },
  {
    id: 2,
    name: "Double Bacon",
    description: "Para os fortes: duas carnes de 150g, muito bacon crocante, alface, tomate e molho barbecue.",
    price: 32.50,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lanches"
  },
  {
    id: 3,
    name: "Veggie Burger",
    description: "Hambúrguer de grão de bico, rúcula, tomate seco e molho de iogurte no pão integral.",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lanches"
  },
  {
    id: 4,
    name: "Chicken Crispy",
    description: "Filé de frango empanado crocante, alface americana e maionese de limão siciliano.",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lanches"
  },

  // --- PIZZAS ---
  {
    id: 5,
    name: "Pizza Calabresa",
    description: "A clássica: molho de tomate, mussarela, calabresa fatiada, cebola e orégano. (8 fatias)",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pizzas"
  },
  {
    id: 6,
    name: "Pizza Quatro Queijos",
    description: "Combinação perfeita de mussarela, parmesão, gorgonzola e catupiry. (8 fatias)",
    price: 48.90,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pizzas"
  },
  {
    id: 7,
    name: "Pizza Marguerita",
    description: "Molho de tomate artesanal, mussarela de búfala, manjericão fresco e azeite. (8 fatias)",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pizzas"
  },

  // --- BEBIDAS ---
  {
    id: 8,
    name: "Coca-Cola Lata",
    description: "Lata 350ml gelada.",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bebidas"
  },
  {
    id: 9,
    name: "Suco de Laranja",
    description: "Suco natural da fruta, feito na hora. 500ml.",
    price: 10.00,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bebidas"
  },
  {
    id: 10,
    name: "Milkshake Morango",
    description: "Sorvete de morango batido com leite e calda especial.",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bebidas"
  },

  // --- SOBREMESAS ---
  {
    id: 11,
    name: "Brownie com Sorvete",
    description: "Brownie de chocolate meio amargo servido quente com sorvete de creme.",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sobremesas"
  },
  {
    id: 12,
    name: "Pudim de Leite",
    description: "Tradicional pudim de leite condensado com calda de caramelo.",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1517438407062-11c633a2862d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sobremesas"
  }
];