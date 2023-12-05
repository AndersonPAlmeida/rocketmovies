import { Container } from './styles';
import { Tag } from '../Tag';
export function NewResume({title, id,data, children}){
   return (
      <Container to={`/movie/${id}`}>
         <h2>{title}</h2>
         {children}

         {
            data.tags && 
            <footer>
               {
                  data.tags.map(
                     tag => <Tag key={tag.id} title={tag.name} />
                  )
               }
            </footer>
         }
      </Container>
   );
}