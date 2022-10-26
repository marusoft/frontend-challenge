import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  /* flex-direction: row; */
`;
export const LoginLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 90vh;
  padding: 0 80px;
  @media only screen and (min-width: 1200px) {
    /* flex: 2; */
  }
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;
export const LoginImage = styled.div``;
export const LoginRight = styled.div`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.loginBg};
  box-shadow: 0px 15px 90px ${({ theme }) => theme.colors.boxShadowColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 80px;
  font-family: "Poppins";
  @media only screen and (min-width: 1200px) {
    flex: 6;
    height: 110vh;
  }
  @media only screen and (max-width: 1200px) {
    height: 140vh;
  }
  @media only screen and (max-width: 1024px) {
    height: 140vh;
  }
  @media only screen and (max-width: 920px) {
    justify-content: start;
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
    width: 110px;
    font-size: 18px;
  }
`;
export const FormContainer = styled.div`
  font-family: "Poppins";
  @media only screen and (max-width: 920px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const EmailWrapper = styled.div``;
// export const Input = styled.input`
//   width: 447px;
//   height: 50px;
//   background: ${({ theme }) => theme.colors.loginBg};
//   border: 2px solid ${({ theme }) => theme.colors.borderColor};
//   border-radius: ${({ theme }) => theme.colors.borderRadius};
//   margin-bottom: 1rem;
//   padding: 1rem;
//   font-family: "Poppins";
//   font-weight: 400;
//   font-size: 15px;
//   color: ${({ theme }) => theme.colors.inputTextColor};
//   opacity: 0.6;
//   &:focus {
//     outline: none;
//   }
//   @media only screen and (max-width: 768px) {
//     width: 400px;
//   }
//   @media only screen and (max-width: 540px) {
//     width: 350px;
//   }
//   @media only screen and (max-width: 480px) {
//     width: 330px;
//   }
//   @media only screen and (max-width: 300px) {
//     width: 250px;
//   }
// `;
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
// export const Button = styled.button`
//   width: 447px;
//   height: 50px;
//   font-weight: 600;
//   font-size: 16px;
//   text-transform: uppercase;
//   background: ${({ theme }) => theme.colors.buttonBgColor};
//   border-radius: 8px;
//   color: ${({ theme }) => theme.colors.loginBg};
//   border: none;
//   cursor: pointer;
//   @media only screen and (max-width: 768px) {
//     width: 400px;
//   }
//   @media only screen and (max-width: 540px) {
//     width: 350px;
//   }
//   @media only screen and (max-width: 480px) {
//     width: 330px;
//   }
//   @media only screen and (max-width: 300px) {
//     width: 250px;
//   }
// `;
