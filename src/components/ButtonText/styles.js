import styled from "styled-components";

export const Container = styled.button`
   background: none;
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${({ theme}) => theme.colors.pinkLight};

   > svg {
      margin-right: 1rem;
   }
`;