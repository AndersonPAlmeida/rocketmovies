
import { Container, Profile } from './styles';
import { Input } from '../Input';
import { FiSearch} from 'react-icons/fi'

export function Header() {
   return (
      <Container>
         <h1>RocketMovies</h1>

         <Input icon={FiSearch} type="text" placeholder="Pesquisar pelo título"/>

         <Profile>
            <div>
               <span>Anderson Almeida</span>
               <a>sair</a>
            </div>
            <img src="https://github.com/AndersonPAlmeida.png" alt="Foto do Usuário" />
         </Profile>
      </Container>
   );
}