import styled from "styled-components";
import backgroundImg from '../../assets/poltronas.png'
export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;
`;

export const Form = styled.form`
   padding: 0 13.4rem;

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;

   > h1 {
      font-size: 4.8rem;
      font-weight:700;
      color: ${({theme}) => theme.colors.pinkLight};
   }
   > p {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({theme}) => theme.colors.gray};
   }
   > h2 {
      font-size: 2.4rem;
      font-weight: 500;
      margin-block: 4.8rem;
   }

   > a {
      align-self: center;
      font-weight: 400;
      color: ${({theme}) => theme.colors.pinkLight};
      margin-top: 4.2rem;

      display: flex;
      align-items: center;

      > svg {
         margin-right: .8rem;
      }
   }
`;


export const Background = styled.div`
   flex: 1;
   background: url(${backgroundImg}) no-repeat center center;
   background-size: cover;
   filter: brightness(0.7);
`;