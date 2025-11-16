import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação!

export const LoginForm = () => {
  // --- HOOKS OBRIGATÓRIOS ---
  // 1. Hook 'useState' para controlar os inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Hook 'useNavigate' para redirecionar o usuário
  const navigate = useNavigate();

  // --- Função de "Login" ---
  const handleSubmit = (event: React.FormEvent) => {
    // 1. Previne o recarregamento padrão do formulário
    event.preventDefault();

    // 2. (FUTURAMENTE, AQUI ENTRA O AXIOS)

    // 3. Por enquanto, só imprime no console e navega
    console.log('Login "fake" com:', { email, password });
    
    // 4. Navega o usuário para a página do cardápio
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};