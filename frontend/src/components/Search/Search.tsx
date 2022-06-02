import {FC, useState,useEffect} from 'react'
import styled from 'styled-components'
import Logo from "../../assets/logo.png"
import SearchIcon from "../../assets/searchIcon.png"
import axiosInstance from '../../axios'
import { Pokemon } from '../../interfaces'

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  #logo{
    height: auto;
    width: 300px;
    margin-bottom: 20px;
  }
  #mainSearch{
    display: flex;     
    width: 100%;
    justify-content: center;    
    #searchInput{
      width:300px;
      box-sizing: border-box;      
      padding: 10px 7px 10px 7px;
      border: none;
      border-radius: 5px;
      box-shadow: 3px 4px 10px 5px rgba(186,186,186,0.31);
;
    }
    #searchIcon{
      width: 30px;
      height: auto; 
      padding: 5px;
      cursor: pointer;
    }     
    #searchButton{
      cursor: pointer;
      display:none;
      width: 70px;
      height: auto; 
      padding: 10px 7px 10px 7px;
      margin-left: 5px;  
      border-radius: 5px;
      border:none;
      background-color: #dfdfdfac;
      box-shadow: 3px 4px 10px 5px rgba(186,186,186,0.31);
    }
    @media only screen and (min-width:667px) {
        #searchIcon {display:none}
        #searchButton {display:inline-block}
        #searchInput {width: 50%}
    } 
  }
`


const Search:FC<{setPokemon:React.Dispatch<React.SetStateAction<Pokemon | undefined>>}> = ({setPokemon}) => {

  const [userInput,setUserInput] = useState<string>('');

  const searchClickHandler = async () => {
    
      axiosInstance.get(`/backend/pokemon/${userInput}/`)
      .then(response => setPokemon(response.data))
      .catch(error => {
        if(error.response){
          console.log(error.response.data);
          console.log(error.response.status);
        }else if (error.request){
          console.log(error.request);
        }else{
          console.log('Error',error.message);
        }
      })
  }
  
 
  return (
    <SearchContainer>
      <img id="logo" src={Logo}/>          
      <div id="mainSearch">
        <input id="searchInput" placeholder="type a pokemon here.." value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}></input>
        <button id="searchButton" onClick={searchClickHandler}>search</button>
        <img src={SearchIcon} id="searchIcon"></img>
      </div>
      
    </SearchContainer>
  )
}

export default Search;