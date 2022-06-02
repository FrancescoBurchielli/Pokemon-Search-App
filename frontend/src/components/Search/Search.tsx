import {FC, useState,useEffect} from 'react'
import Logo from "../../assets/logo.png"
import SearchIcon from "../../assets/searchIcon.png"
import axiosInstance from '../../axios'
import { SearchProps } from './SearchInterfaces'
import { SearchContainer } from './SearchStyled'


const Search:FC<SearchProps> = ({setPokemon,setLoading,setErrorNotFound,setErrorOther}) => {

  const [userInput,setUserInput] = useState<string>('');

  const searchClickHandler = async () => {
      setPokemon(undefined);
      setErrorNotFound(false);
      setErrorOther(false);
      setLoading(true);    
      axiosInstance.get(`/backend/pokemon/${userInput}/`)
      .then(response => {
        setLoading(false);
        setPokemon(response.data);
      })
      .catch(error => {
        setLoading(false);
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
  }
  
 
  return (
    <SearchContainer>
      <img id="logo" src={Logo}/>          
      <div id="mainSearch">
        <input id="searchInput" onClick={()=>{setUserInput('')}}placeholder="type a pokemon here.." value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}></input>
        <div id="searchButtonIconWrapper" onClick={searchClickHandler}>
          <button id="searchButton" >search</button>
          <img src={SearchIcon} id="searchIcon"></img>
        </div>        
      </div>
      
    </SearchContainer>
  )
}

export default Search;