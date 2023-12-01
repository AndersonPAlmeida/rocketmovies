import styled from 'styled-components';

export const Container = styled.span`
   background-color: ${({ theme}) => theme.colors.backgroundTags};
   color: ${({ theme}) => theme.colors.white};

   padding: .5rem 1.6rem;
   font-size: 1.2rem;
   font-weight: 400;
   
   margin-right: .8rem;
   border-radius: .8rem;
`;