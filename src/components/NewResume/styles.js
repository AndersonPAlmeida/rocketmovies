import styled from 'styled-components';

export const Container = styled.div`
   background-color: ${({ theme}) => theme.colors.backgroundSecondary};

   padding: 3.2rem;
   border-radius: .8rem;
   margin-top: 3rem;
   
   > h2 {
      font-size: 2.4rem;
      font-weight: 700;
   }

   > div svg{
      color: ${({ theme}) => theme.colors.pinkLight};
   }

   > p {
      margin: 4rem 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: ${({ theme}) => theme.colors.gray};
   }

`;