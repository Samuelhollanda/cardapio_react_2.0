import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; // Podemos ter estilos diferentes
}

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  // Define cores baseadas na variante
  const backgroundColor = variant === 'primary' ? '#007bff' : '#6c757d';

  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: backgroundColor,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold'
      }}
    >
      {children}
    </button>
  );
};