import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100%;
   align-items: center;

   background-color: ${({ theme}) => theme.colors.backgroundForms};
   border-radius: 1rem;

   > input {
      width: 100%;
      max-height: 5.6rem;
      background-color: ${({ theme}) => theme.colors.backgroundForms};
      border: none;
      border-radius: 1rem;
      padding: 1.9rem 1.6rem;

      color: ${({ theme}) => theme.colors.white};

      &::placeholder {
         color: ${({ theme}) => theme.colors.gray};
      }
   }

   > svg {
      margin-left: 1.6rem;
   }
`;