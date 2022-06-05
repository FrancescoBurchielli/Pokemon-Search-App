import { Pokemon, SearchHistory } from "../AppInterfaces";
import axiosInstance from "./index";

interface FetchPokemonFunction {
    (
        name:string,
        setPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>,
        setErrorNotFound: React.Dispatch<React.SetStateAction<boolean>>,
        setErrorOther: React.Dispatch<React.SetStateAction<boolean>>,
        searchHistory:SearchHistory,
        setSearchHistory:React.Dispatch<React.SetStateAction<SearchHistory>>,
        updateSearchHistory:(name:string,timeOfSearch:number,searchHistory:SearchHistory,setSearchHistory:React.Dispatch<React.SetStateAction<SearchHistory>>) => void,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    )
    :
    Promise<void>
}

export const fetchPokemon:FetchPokemonFunction = async (
    name,
    setPokemon,
    setErrorNotFound,
    setErrorOther,
    searchHistory,
    setSearchHistory,
    updateSearchHistory,
    setLoading
    ) => {   
    
    const url = `/backend/pokemon/${name.toLowerCase()}/`;  
    setPokemon(undefined);
    setErrorNotFound(false);
    setErrorOther(false);
    setLoading(true);    
    axiosInstance.get(url)
    .then(response => {        
      setPokemon(response.data);     
      let timeOfSearch = new Date().getTime();   
      if(!searchHistory.history.slice(0,5).map(searchObj=>searchObj.name).includes(name.toLowerCase())){
        updateSearchHistory(name.toLowerCase(),timeOfSearch,searchHistory,setSearchHistory)};           
    })
    .catch(error => {
      if(error.response){
        if(error.response.status===404){
          setErrorNotFound(true);
        }else{
          setErrorOther(true);
        };       
      }else{
        setErrorOther(true);
      }        
    })
    .finally(()=>{     
      setLoading(false);       
    })
}