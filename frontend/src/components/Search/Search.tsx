import {FC} from 'react'
import SearchIcon from "../../assets/searchIcon.png"
import SearchIconWhite from "../../assets/searchIconWhite.png"
import { SearchProps } from './SearchInterfaces'
import { SearchContainer } from './SearchStyled'


const Search:FC<SearchProps> = ({userInput,setUserInput,searchPokemon}) => {  
 
  const keyUpHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key || e.keyCode;
    if (key==='Enter' || key===13) {
      searchPokemon();
    }
  }

  return (
    <SearchContainer>               
      <div id="mainSearch">
        <input id="searchInput" onKeyUp={(e)=>keyUpHandler(e)} onClick={()=>{setUserInput('')}}placeholder="type a pokemon here.." value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}></input>
        <button id="searchButton" onClick={()=>{searchPokemon()}}>
            <span id="searchButtonText">search</span>
            <img src={SearchIconWhite} id="searchButtonIcon"></img>
        </button>            
      </div>
      
    </SearchContainer>
  )
}

export default Search;