import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;

   grid-template-columns: auto auto;
   grid-template-rows: 11.6rem 8.5rem auto;
   grid-template-areas:
      "header header"
      "prev prev"
      "content content"
   ;

   .markes {
      background-color: ${({theme}) => theme.colors.black};
      padding:1.6rem;
      border-radius: .8rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2.4rem;
   }
`;

export const Prev = styled.div`
   grid-area: prev;

   width: 100%;
   padding-left: 12.3rem;
   margin-block: auto;
`;

export const Content = styled.div`
   grid-area: content;
   
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

export const Form = styled.form`
   width: 100%;
   padding: 0 12.3rem 5rem;

   display: flex;
   flex-direction: column;
   gap: 4rem;

   > .wrapper {
      display: flex;
      gap: 4rem;
   }
`;