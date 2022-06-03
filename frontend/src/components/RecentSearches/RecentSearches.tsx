import {FC} from 'react'
import {RecentSearchesProps} from './RecentSearchesInterfaces'
import { RecentSearchesContainer } from './RecentSearchesStyled'


const RecentSearches:FC<RecentSearchesProps> = ({searchHistory,setUserInput,searchPokemon}) => {

    const recentSearchClickHandler = (e:React.MouseEvent<HTMLParagraphElement, MouseEvent>,name:string) => {
        searchPokemon(name,false);
        setUserInput(name);        
    }

    return (
        <RecentSearchesContainer>
            <div id="mainRecentSearches">
                {searchHistory.history.sort((a,b)=>b.timeOfSearch-a.timeOfSearch).slice(0,5).map(searchedPokemon=>{
                    return <p key={searchedPokemon.timeOfSearch} onClick={(e)=>{recentSearchClickHandler(e,searchedPokemon.name)}}>{searchedPokemon.name}</p>
                })}
            
            </div>
        </RecentSearchesContainer>
    )
}

export default RecentSearches;