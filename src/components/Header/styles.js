import styled from 'styled-components';

export const Container = styled.header`
   grid-area: header;

   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 3.5rem;
   width: 100%;
   max-height: 11.6rem;

   border-bottom: .1rem solid #3E3B47;
   padding: 2.4rem 12.3rem;
   /* margin-bottom: 4rem; */

   > h1 {
      color: ${({ theme}) => theme.colors.pinkLight};
      font-weight: 700;
      font-size: 2.4rem;
   }
`;

export const Profile = styled.div`
   display: flex;
   align-items: center;

   text-align: end;
   gap: 1rem;

   > div {
      display: flex;
      flex-direction: column;
      min-width:12.5rem;
      span {
         color: ${({ theme}) => theme.colors.white};
         font-weight: 700;
         font-size: 1.4rem;
         display: block;
      }
   
      a{
         font-size: 1.4rem;
         font-weight: 400;
         color: ${({ theme}) => theme.colors.gray};
      }
   }

   > img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
   }
`;