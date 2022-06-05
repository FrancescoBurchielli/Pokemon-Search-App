import {FC,useState,useEffect} from 'react'
import { AppContainer } from './AppStyled';
import Content from './components/Content/Content';
import RecentSearches from './components/RecentSearches/RecentSearches';
import Search from './components/Search/Search';
import { Pokemon, SearchHistory } from './AppInterfaces';
import {fetchPokemon} from './axios/fetches';
import NotFound from "./assets/not_found.jpg"
import Logo from "./assets/logo.png"
import { nameFormatter, retrieveSearchHistory, updateSearchHistory } from './helpers/helpers';


const App:FC<{}> = ({}) => {
 
  const [searchHistory,setSearchHistory] = useState<SearchHistory>({history:[]});
  const [userInput,setUserInput] = useState<string>('');
  const [pokemon,setPokemon] = useState<Pokemon>();
  const [loading,setLoading] = useState<boolean>(false);
  const [errorNotFound,setErrorNotFound] = useState<boolean>(false);
  const [errorOther,setErrorOther] = useState<boolean>(false);  

  useEffect(() => {
    retrieveSearchHistory(setSearchHistory);
  }, [])  

  const searchPokemon = async (name=userInput) => {    
    const formattedName = nameFormatter(name);
    if(!formattedName){return};    
    await fetchPokemon(
      formattedName,
      setPokemon,
      setErrorNotFound,
      setErrorOther,
      searchHistory,
      setSearchHistory,
      updateSearchHistory,
      setLoading,      
      )
  }

  return (
    <AppContainer>   
      <RecentSearches searchHistory={searchHistory} searchPokemon={searchPokemon} setUserInput={setUserInput}/>    
      <div id='mainApp'>    
        <img id="logo" src={Logo}></img>    
        <Search userInput={userInput} setUserInput={setUserInput} searchPokemon={searchPokemon} />  
        {loading && (         
          <div id="spinnerContainer">
            <div id="spinner"></div>
          </div>
        )}    
        {errorNotFound && (
          <div id="pokemonNotFound">
          <p>We couldn't find your Pokemon, sorry...</p>
          <img id="notFound" src={NotFound}></img>
        </div>
        )}  
        {errorOther && <p>Something went wrong. Please try again later...</p>}        
        {pokemon && <Content pokemon={pokemon}/>}
       
      </div>   
    </AppContainer>
  );
}

export default App;
