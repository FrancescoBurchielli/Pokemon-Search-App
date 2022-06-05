import axios from "axios";
import { Pokemon } from "../AppInterfaces";
import axiosInstance from "./index";

interface FetchPokemonFunction {
    (
        name:string,
        lastSearched:string,
        setPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>,
        setErrorNotFound: React.Dispatch<React.SetStateAction<boolean>>,
        setErrorOther: React.Dispatch<React.SetStateAction<boolean>>,
        updateSearchHistory:(name: string, timeOfSearch: number) => void,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    )
    :
    Promise<void>
}


export const fetchPokemon:FetchPokemonFunction = async (
    name,
    lastSearched,
    setPokemon,
    setErrorNotFound,
    setErrorOther,
    updateSearchHistory,
    setLoading
    ) => {    
    console.log("lastSearched from fetches:",lastSearched);
    const url = `/backend/pokemon/${name.toLowerCase()}/`;  
    setPokemon(undefined);
    setErrorNotFound(false);
    setErrorOther(false);
    setLoading(true);    
    axiosInstance.get(url)
    .then(response => {        
      setPokemon(response.data);     
      let timeOfSearch = new Date().getTime();   
      if(name.toLowerCase()!==lastSearched){updateSearchHistory(name.toLowerCase(),timeOfSearch)};           
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