import {FC,useState,useEffect} from 'react'
import { AppContainer } from './AppStyled';
import Content from './components/Content/Content';
import RecentSearches from './components/RecentSearches/RecentSearches';
import Search from './components/Search/Search';
import { Pokemon, SearchHistory } from './AppInterfaces';
import {fetchPokemon} from './axios/fetches';
import NotFound from "./assets/not_found.jpg"
import Logo from "./assets/logo.png"



const App:FC<{}> = ({}) => {
 
  const [searchHistory,setSearchHistory] = useState<SearchHistory>({history:[]});
  const [userInput,setUserInput] = useState<string>('');
  const [pokemon,setPokemon] = useState<Pokemon>();
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

  const updateSearchHistory = (name:string,timeOfSearch:number) => {    
      const history = [...searchHistory.history,{name,timeOfSearch}].sort((a,b)=>b.timeOfSearch-a.timeOfSearch);
      const newSearchHistory = {...searchHistory,history};
      setSearchHistory(newSearchHistory); 
      localStorage.setItem('searchHistory',JSON.stringify(newSearchHistory));
  }  

  const searchPokemon = async (name=userInput,lastSearched=searchHistory.history[0]?.name) => {
    
    await fetchPokemon(
      name,
      lastSearched,
      setPokemon,
      setErrorNotFound,
      setErrorOther,
      updateSearchHistory,
      setLoading,
      )
  }

  console.log(pokemon);

  return (
    <AppContainer>   
      <RecentSearches searchHistory={searchHistory} searchPokemon={searchPokemon} setUserInput={setUserInput}/>    
      <div id='mainApp'>
        <img id="logo" src={Logo}/> 
        <Search userInput={userInput} setUserInput={setUserInput} searchPokemon={searchPokemon} />  
        {loading && <p>Searching...</p>}    
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
