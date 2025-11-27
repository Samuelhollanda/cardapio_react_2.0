import styled from 'styled-components';
import { LoginForm } from '../components/features/LoginForm';

// Criamos um wrapper que ocupa toda a altura disponível e centraliza
const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; /* Garante que ocupe a altura do pai */
  padding: 2rem; /* Um pouco de espaço nas bordas */
  flex: 1; /* Força expandir para empurrar o footer se necessário */
`;

const LoginBox = styled.div`
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 400px;
  text-align: center;

  h1 {
    color: #e67e22;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

export const Login = () => {
  return (
    <LoginPageWrapper>
      <LoginBox>
        <h1>Bem-vindo</h1>
        <LoginForm />
      </LoginBox>
    </LoginPageWrapper>
  );
};