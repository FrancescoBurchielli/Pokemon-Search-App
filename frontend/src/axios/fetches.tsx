import { Pokemon, FetchErrorInterface, SearchHistory } from "../AppInterfaces";
import axiosInstance from "./index";

interface FetchPokemonFunction {
    (
        name:string,        
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>,
        setError:React.Dispatch<React.SetStateAction<FetchErrorInterface | undefined>>,   
        /*   
        searchHistory:SearchHistory,
        setSearchHistory:React.Dispatch<React.SetStateAction<SearchHistory>>,
        updateSearchHistory:(name:string,timeOfSearch:number,searchHistory:SearchHistory,setSearchHistory:React.Dispatch<React.SetStateAction<SearchHistory>>) => void,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
        */
    )
    :
    void
}

/*
export const fetchPokemon:FetchPokemonFunction = async (
    name,
    setPokemon,
    setError,   
    searchHistory,
    setSearchHistory,
    updateSearchHistory,
    setLoading
    ) => {   
    
    const url = `/backend/pokemon/${name.toLowerCase()}/`;  
    setPokemon(undefined);
    setError(undefined);
    setLoading(true);    
    axiosInstance.get(url)
    .then(response => {        
      setPokemon(response.data);     
      let timeOfSearch = new Date().getTime();   
      if(!searchHistory.history.slice(0,5).map(searchObj=>searchObj.name).includes(name.toLowerCase())){
        updateSearchHistory(name.toLowerCase(),timeOfSearch,searchHistory,setSearchHistory)};           
    })
    .catch(error => {
      let errorObject:FetchError = {status:500,message:"something went wrong, please try again later..."};
      if(error.response && error.response.status===404){       
          errorObject = {message:"we couldn't find your pokemon, sorry...",status:error.response.status};          
      }
      setError(errorObject);        
    })
    .finally(()=>{     
      setLoading(false);       
    })
}
*/


export const fetchPokemon:FetchPokemonFunction = async (
  name,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPokemon,
  setError,  
  ) => {  
  setLoading(true);
  const url = `/backend/pokemon/${name.toLowerCase()}/`;    
  axiosInstance.get(url)
  .then(response => {        
    setPokemon(response.data);                
  })
  .catch(error => {
    let errorObject:FetchErrorInterface = {status:500,message:"something went wrong, please try again later..."};
    if(error.response && error.response.status===404){       
        errorObject = {status:error.response.status,message:"we couldn't find your pokemon, sorry..."};          
    }
    setError(errorObject);        
  })
  .finally(()=>{     
    setLoading(false);       
  })  
}