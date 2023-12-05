
import { Container, Profile } from './styles';
import { Input } from '../Input';
import { FiSearch} from 'react-icons/fi'
import { Link } from 'react-router-dom';

export function Header() {
   return (
      <Container>
         <Link to="/">
            <h1>RocketMovies</h1>
         </Link>

         <Input icon={FiSearch} type="text" placeholder="Pesquisar pelo título"/>

         <Profile to="/profile">
            <div>
               <span>Anderson Almeida</span>
               <Link to="/">sair</Link>
            </div>
            <img src="https://github.com/AndersonPAlmeida.png" alt="Foto do Usuário" />
         </Profile>
      </Container>
   );
}