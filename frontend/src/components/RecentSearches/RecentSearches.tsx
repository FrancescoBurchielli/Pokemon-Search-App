import {FC} from 'react'
import { Pokemon } from '../../AppInterfaces'
import {RecentSearchesProps} from './RecentSearchesInterfaces'
import { RecentSearchesContainer } from './RecentSearchesStyled'


const RecentSearches:FC<RecentSearchesProps> = ({searchHistory,setUserInput,setPokemon}) => {

    const recentSearchClickHandler = (e:React.MouseEvent<HTMLParagraphElement, MouseEvent>,pokemon:Pokemon) => {        
        setPokemon(pokemon);
        setUserInput(pokemon.name);        
    }

    return (
        <RecentSearchesContainer>
            <div id="mainRecentSearches">
                {searchHistory.history.sort((a,b)=>b.timeOfSearch-a.timeOfSearch).map(searchedItem=>{
                    return <p key={searchedItem.timeOfSearch} onClick={(e)=>{recentSearchClickHandler(e,searchedItem.pokemon)}}>{searchedItem.pokemon.name}</p>
                })}
            
            </div>
        </RecentSearchesContainer>
    )
}

export default RecentSearches;