import styled from "styled-components";

export const Container = styled.textarea`
   width: 100%;
   height: 27.4rem;
   padding: 1.9rem 1.6rem;

   background-color: ${({theme}) => theme.colors.backgroundForms};
   color: ${({ theme}) => theme.colors.white};

   border: none;
   resize: none;
   border-radius: 1rem;
   
   &::placeholder {
      color: ${({ theme}) => theme.colors.gray};
   }
`;