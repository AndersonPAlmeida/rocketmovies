import styled from 'styled-components';

export const Container = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;

   width: 100%;

   border-bottom: .1rem solid #3E3B47;
   padding: 2.4rem 12.3rem;
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

   p {
      color: ${({ theme}) => theme.colors.white};
      font-weight: 700;
      font-size: 1.4rem;
   }

   a{
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme}) => theme.colors.gray};
   }
   > img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
   }
`;