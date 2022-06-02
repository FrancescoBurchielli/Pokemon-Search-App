import {FC,useState} from 'react'
import { AppContainer } from './AppStyled';
import Content from './components/Content/Content';
import RecentSearches from './components/RecentSearches/RecentSearches';
import Search from './components/Search/Search';
import { Pokemon } from './AppInterfaces';



const App:FC<{}> = ({}) => {

  const [pokemon,setPokemon] = useState<Pokemon>();
  const [loading,setLoading] = useState<boolean>(false);
  const [errorNotFound,setErrorNotFound] = useState<boolean>(false);
  const [errorOther,setErrorOther] = useState<boolean>(false);
  

  return (
    <AppContainer>   
      <RecentSearches/>    
      <div id='mainApp'>
        <Search setPokemon={setPokemon} setLoading={setLoading} setErrorNotFound={setErrorNotFound} setErrorOther={setErrorOther}/>  
        {loading && <p>Loading..</p>}    
        {errorNotFound && <p>We couldn't find your Pokemon, sorry :(</p>}  
        {errorOther && <p>Something went wrong. Please try again later..</p>}  
        {pokemon && <Content pokemon={pokemon}/>}
      </div>   
     </AppContainer>
  );
}

export default App;
