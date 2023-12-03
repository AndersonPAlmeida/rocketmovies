import styled from "styled-components";

export const Container = styled.section`
   width: 100%;

   h2 {
      font-size: 2rem;
      font-weight: 400;
      padding-bottom: 2.4rem;
      color: ${({theme}) => theme.colors.grayLight};
   }
`;