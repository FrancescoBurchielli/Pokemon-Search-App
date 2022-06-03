import {FC,useState,useEffect} from 'react'
import { AppContainer } from './AppStyled';
import Content from './components/Content/Content';
import RecentSearches from './components/RecentSearches/RecentSearches';
import Search from './components/Search/Search';
import { Pokemon, SearchHistory } from './AppInterfaces';
import Logo from "./assets/logo.png"
import {fetchPokemon} from './axios/fetches';


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
      const history = [...searchHistory.history,{name,timeOfSearch}];
      const newSearchHistory = {...searchHistory,history};
      setSearchHistory(newSearchHistory); 
      localStorage.setItem('searchHistory',JSON.stringify(newSearchHistory));
  }  

  const searchPokemon = async (name=userInput,updateHistory=true) => {
    await fetchPokemon(
      name,
      updateHistory,
      setPokemon,
      setErrorNotFound,
      setErrorOther,
      updateSearchHistory,
      setLoading
      )
  }

  return (
    <AppContainer>   
      <RecentSearches searchHistory={searchHistory} searchPokemon={searchPokemon} setUserInput={setUserInput}/>    
      <div id='mainApp'>
        <img id="logo" src={Logo}/> 
        <Search userInput={userInput} setUserInput={setUserInput} searchPokemon={searchPokemon} />  
        {loading && <p>Searching...</p>}    
        {errorNotFound && <p>We couldn't find your Pokemon, sorry :(</p>}  
        {errorOther && <p>Something went wrong. Please try again later...</p>}  
        {pokemon && <Content pokemon={pokemon}/>}
      </div>   
    </AppContainer>
  );
}

export default App;
