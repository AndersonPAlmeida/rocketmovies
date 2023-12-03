import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;

   grid-template-columns: auto auto;
   grid-template-rows: 11.6rem auto;
   grid-template-areas:
      "header header"
      "content content"
   ;
`;

export const Content = styled.div`
   grid-area: content;
   padding: 4rem 12.3rem;
   overflow-y: auto;

   display: flex;
   flex-direction: column;
   gap: 4rem;

   &::-webkit-scrollbar {
      width: .8rem;
   }
   &::-webkit-scrollbar-track {
      background: transparent;
   }
   &::-webkit-scrollbar-thumb {
      background: ${({ theme}) => theme.colors.pinkLight};
      border-radius: .8rem;
   }

   svg {
      color: ${({ theme}) => theme.colors.pinkLight};
   }

   p {
      text-align: justify;
   }
`;
export const Description = styled.div`
   width: 100%;

   > h2 {
      padding: 2.4rem 0;
      
      display: flex;
      align-items: center;
      gap: 1.9rem;

      svg {
         margin-right: 1rem;
      }
   }
`;

export const Timeline = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   gap: .8rem;

   > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%
   }
`;