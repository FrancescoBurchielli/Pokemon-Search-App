import {FC, useState,useEffect} from 'react'
import Logo from "../../assets/logo.png"
import SearchIcon from "../../assets/searchIcon.png"
import axiosInstance from '../../axios'
import { SearchProps } from './SearchInterfaces'
import { SearchContainer } from './SearchStyled'


const Search:FC<SearchProps> = ({setPokemon,setLoading,setErrorNotFound,setErrorOther,searchHistory,setSearchHistory}) => {

  const [userInput,setUserInput] = useState<string>('');

  const updateSearchHistory = (name:string,timeOfSearch:number) => {
    const history = [...searchHistory.history,{name,timeOfSearch}];
    const newSearchHistory = {...searchHistory,history};
    console.log('newSearchHistory: ',newSearchHistory);
    setSearchHistory(newSearchHistory); 
    localStorage.setItem('searchHistory',JSON.stringify(newSearchHistory));
  }

  const searchPokemon = async (name=userInput) => {
      
      setPokemon(undefined);
      setErrorNotFound(false);
      setErrorOther(false);
      setLoading(true); 
      const url = `/backend/pokemon/${name.toLowerCase()}/`;
      axiosInstance.get(url)
      .then(response => {        
        setPokemon(response.data);
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
        let timeOfSearch = new Date().getTime();   
        updateSearchHistory(name.toLowerCase(),timeOfSearch);            
      })
  }
  
 
  return (
    <SearchContainer>
      <img id="logo" src={Logo}/>          
      <div id="mainSearch">
        <input id="searchInput" onClick={()=>{setUserInput('')}}placeholder="type a pokemon here.." value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}></input>
        <div id="searchButtonIconWrapper" onClick={()=>{searchPokemon()}}>
          <button id="searchButton" >search</button>
          <img src={SearchIcon} id="searchIcon"></img>
        </div>        
      </div>
      
    </SearchContainer>
  )
}

export default Search;