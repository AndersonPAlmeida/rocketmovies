
import { Container, Profile } from './styles';

export function Header() {
   return (
      <Container>
         <h1>RocketMovies</h1>

         <Profile>
            <div>
               <p>Anderson Almeida</p>
               <a>sair</a>
            </div>
            <img src="https://github.com/AndersonPAlmeida.png" alt="" />
         </Profile>
      </Container>
   );
}