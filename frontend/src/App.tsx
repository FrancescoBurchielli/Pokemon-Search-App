import {FC,useState,useEffect} from 'react'
import { AppContainer } from './AppStyled';
import Content from './components/Content/Content';
import RecentSearches from './components/RecentSearches/RecentSearches';
import Search from './components/Search/Search';
import { Pokemon, SearchHistory } from './AppInterfaces';



const App:FC<{}> = ({}) => {

  const [pokemon,setPokemon] = useState<Pokemon>();
  const [searchHistory,setSearchHistory] = useState<SearchHistory>({history:[]});
  const [loading,setLoading] = useState<boolean>(false);
  const [errorNotFound,setErrorNotFound] = useState<boolean>(false);
  const [errorOther,setErrorOther] = useState<boolean>(false);  

  useEffect(() => {
    retrieveSearchHistory();
  }, [])
  
  const retrieveSearchHistory = () => {
    const retrievedHistory = localStorage.getItem('searchHistory');    
    if(retrievedHistory!==null){
      setSearchHistory(JSON.parse(retrievedHistory));
    }     
  }

  return (
    <AppContainer>   
      <RecentSearches searchHistory={searchHistory}/>    
      <div id='mainApp'>
        <Search setPokemon={setPokemon} setLoading={setLoading} setErrorNotFound={setErrorNotFound} setErrorOther={setErrorOther} searchHistory={searchHistory} setSearchHistory={setSearchHistory}/>  
        {loading && <p>Loading..</p>}    
        {errorNotFound && <p>We couldn't find your Pokemon, sorry :(</p>}  
        {errorOther && <p>Something went wrong. Please try again later..</p>}  
        {pokemon && <Content pokemon={pokemon}/>}
      </div>   
     </AppContainer>
  );
}

export default App;
