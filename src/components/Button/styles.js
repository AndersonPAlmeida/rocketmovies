import styled from "styled-components";

export const Container = styled.button`
   width: 100%;
   padding: 1.6rem 0;
   
   background-color: ${({theme}) => theme.colors.pinkLight};
   color: ${({theme}) => theme.colors.backgroundTags};
   border-radius: 1rem;
   transition: all .5s;

   &:not(:disabled):hover {
      background-color: ${({theme}) => theme.colors.black};
      color: ${({theme}) => theme.colors.pinkLight};
   }

   &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }
`;