import { Container, Form, Avatar } from "./styles";
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Profile(){
   return (
      <Container>
         <header>
            <Link to="/">
               <ButtonText title="Voltar"/>
            </Link>
         </header>
         <Form>
            <Avatar>
               <img src="https://github.com/AndersonPAlmeida.png" alt="Foto do Usuário" />

               <label htmlFor="avatar">
                  <FiCamera />

                  <input type="file" id="avatar" />
               </label>
            </Avatar>

            <Input icon={FiUser} type="text" placeholder="Nome Completo" value="Anderson Almeida"/>
            <Input icon={FiMail} type="email" placeholder="Seu E-mail" value="anderson@gmail.com"/>

            <Input icon={FiLock} type="password" placeholder="Senha Atual"/>
            <Input icon={FiLock} type="password" placeholder="Nova Senha"/>
            
            <Link to="/">
               <Button title="Salvar"/>
            </Link>
         </Form>
      </Container>
   );
}