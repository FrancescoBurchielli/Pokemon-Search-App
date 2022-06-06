import {FC} from 'react'
import SearchIconWhite from "../../assets/searchIconWhite.png"
import { SearchProps } from './SearchInterfaces'
import { SearchContainer } from './SearchStyled'


const Search:FC<SearchProps> = ({userInput,setUserInput,onSubmitSearchPokemon}) => {  
 
  const _onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitSearchPokemon();
  }

  return (
    <SearchContainer onSubmit={_onSubmit}>               
      <div id="mainSearch">
        <input id="searchInput" onClick={()=>{setUserInput('')}}placeholder="type a pokemon name here.." value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}></input>
        <button id="searchButton" type='submit'>
            <span id="searchButtonText">search</span>
            <img src={SearchIconWhite} id="searchButtonIcon"></img>
        </button>            
      </div>
      
    </SearchContainer>
  )
}

export default Search;