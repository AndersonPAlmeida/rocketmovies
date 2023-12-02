import { Container, Form, Avatar } from "./styles";
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';

export function Profile(){
   return (
      <Container>
         <header>
            <ButtonText />
         </header>
         <Form>
            <Avatar>
               <img src="https://github.com/AndersonPAlmeida.png" alt="Foto do Usuário" />

               <label htmlFor="avatar">
                  <FiCamera />

                  <input type="file" id="avatar" />
               </label>
            </Avatar>

            <Input icon={FiUser} type="text" placeholder="Nome Completo"/>
            <Input icon={FiMail} type="email" placeholder="Seu E-mail"/>

            <Input icon={FiLock} type="password" placeholder="Senha Atual"/>
            <Input icon={FiLock} type="password" placeholder="Nova Senha"/>
            <Button />
         </Form>
      </Container>
   );
}