import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LoginLeft = styled.div`
  padding: 0 80px;
  flex: 50%;
  background: ${({ theme }) => theme.colors.body};
`;
export const LoginRight = styled.div`
  flex: 50%;
  padding: 0 80px;
  background: ${({ theme }) => theme.colors.loginBg};
`;
