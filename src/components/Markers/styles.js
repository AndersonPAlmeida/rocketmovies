import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   padding-right: 1.6rem;
   border-radius: 1rem;
   
   background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.colors.backgroundForms};
   color: ${({theme, isNew}) => isNew ? theme.colors.grayLight : theme.colors.white};
   border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.colors.gray}` : "none"};

   > button {
      border: none;
      background: none;
      color: ${({theme}) => theme.colors.pinkLight};
   }

   > input {
      width: 100%;
      max-width: 15rem;
      height: 5.6rem;
      padding-left: 1.6rem;

      color: ${({theme }) => theme.colors.white};
      
      background: none;
      border: none;

      &::placeholder {
         ${({theme}) => theme.colors.grayLight};
      }
   }
`;