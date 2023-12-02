import { Container } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'
export function ButtonText({title}){
   return (
      <Container>
         <FiArrowLeft />
         {title}
      </Container>
   );
}