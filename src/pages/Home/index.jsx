import { Header } from "../../components/Header";
import { AddMovie, Container, Title } from "./styles";
import { FiPlus} from 'react-icons/fi'

export function Home() {
   return (
      <Container>
         <Header />

         <Title>
            <h2>Meus Filmes</h2>
            <AddMovie>
               <FiPlus />
               Adicionar Filme
            </AddMovie>
         </Title>
      </Container>
   ); 
}