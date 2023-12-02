import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
   
   > header {
      background-color: ${({theme}) => theme.colors.backgroundSecondary};

      height: 14.4rem;
      display: flex;
      align-items: center;
      padding-left: 14.4rem;
   }
`;

export const Form = styled.form`
   width: 34rem;
   margin: 0 auto;

   display: flex;
   flex-direction: column;
   gap: 2rem;
`;

export const Avatar = styled.div`
   position: relative;
   
   margin: -9.3rem auto 6.4rem;
   width: 18.6rem;
   height: 18.6rem;

   > img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
   }

   > label {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;

      background-color: ${({theme}) => theme.colors.pinkLight};
      color: ${({theme}) => theme.colors.backgroundPrimary};

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      
      position: absolute;
      bottom: .7rem;
      right: .7rem;

      > input {
         display: none;
      }

      svg {
         width: 2rem;
         height: 2rem;
      }
   }
`;