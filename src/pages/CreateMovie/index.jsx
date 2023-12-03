import { Container, Prev, Content, Form } from "./styles";
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Section } from "../../components/Section";
import { Markers } from "../../components/Markers";

export function CreateMovie(){
   return(
      <Container>
         <Header /> 
         <Prev>
            <ButtonText title="Voltar"/>
         </Prev> 

         <Content>
            <Form>
               <h2>Novo Filme</h2>

               <div className="wrapper">
                  <Input type="text" placeholder="Título"/>

                  <Input type="text" placeholder="Sua Nota (de 0 a 5)"/>
               </div>

               <TextArea placeholder="Observações"/>

               <Section title="Marcadores"> 
                  <div className="markes">
                     <Markers value="React"/>
                     
                     <Markers isNew placeholder="Novo marcador"/>
                  </div>
               </Section>

               <div className="wrapper">
                  <Button title="Excluir filme"/>
                  <Button title="Salvar alterações"/>
               </div>
            </Form>
         </Content>   
      </Container>
   );
}