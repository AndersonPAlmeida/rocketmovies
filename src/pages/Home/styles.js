import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;

   grid-template-columns: auto;
   grid-template-rows: 11.6rem 12rem auto;
   grid-template-areas:
      "header"
      "title"
      "content"
   ;
`;
export const Title = styled.div`
   grid-area: title;
   
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 0 12.3rem;
   
   >h2 {
      font-size: 3.2rem;
      font-weight: 400;
   }
`;


export const AddMovie = styled.button`
   grid-area: movies;

   display: flex;
   align-items: center;
   justify-content: center;

   padding: 3.0rem;
   height: 4.8rem;
   border-radius: .8rem;

   background-color: ${({ theme}) => theme.colors.pinkLight};

   > svg{
      margin-right: 1.6rem;
   }
`;

export const Content = styled.div`
   grid-area: content;
   padding: 0 12.3rem;
   overflow-y: auto;

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
`;