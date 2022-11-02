import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 920px) {
    flex-direction: column;
  }
`;
export const LoginLeft = styled.div`
  padding: 0 80px;
  height: 100vh;
  flex: 50%;
  background: ${({ theme }) => theme.colors.body};
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;
export const LoginRight = styled.div`
  flex: 50%;
  padding: 0 70px;
  background: ${({ theme }) => theme.colors.loginBg};
  background: ${({ theme }) => theme.colors.loginBg};
  box-shadow: 0px 15px 90px ${({ theme }) => theme.colors.boxShadowColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins";
  @media only screen and (max-width: 920px) {
    /* justify-content: start; */
  }
  @media only screen and (max-width: 480px) {
    padding: 0 15px;
  }
`;
export const WelcomeContainer = styled.div`
  margin-bottom: 2.5rem;
  @media only screen and (max-width: 920px) {
    text-align: center;
    margin-top: 10rem;
  }
`;
export const WelcomeText = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  color: #213f7d;
  @media only screen and (max-width: 300px) {
    font-size: 23px;
  }
`;
export const WelcomeDesc = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  color: #545f7d;
  margin-top: 0.5rem;
  @media only screen and (max-width: 300px) {
    font-size: 18px;
  }
`;
export const FormContainer = styled.div`
  font-family: "Poppins";
  form{
    width: 100%;
  }
  @media only screen and (max-width: 920px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const PasswordWrapper = styled.div`
  display: inline;
  position: relative;
`;
export const TogglePassword = styled.span`
  position: absolute;
  margin: 13px;
  right: 0px;
  font-weight: 650;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.loginColor};
  cursor: pointer;
`;
export const ForgotPassword = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.loginColor};
  margin: 1rem 0rem;
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;
