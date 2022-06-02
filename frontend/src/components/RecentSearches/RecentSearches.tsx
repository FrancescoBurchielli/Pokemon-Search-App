import {FC} from 'react'
import styled from 'styled-components'

const RecentSearchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    #mainRecentSearches{
        
        flex-wrap: wrap;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        p{
            font-size: 12px;
            margin: 0px;
        }
        
        @media only screen and (min-width:667px) {
            height: 50%;
            flex-direction: column;            
            justify-content: space-evenly;      
        }       
    }
`

const RecentSearches:FC<{}> = ({}) => {
  return (
    <RecentSearchesContainer>
        <div id="mainRecentSearches">
            <p>Search1</p>
            <p>Search2</p>
            <p>Search3</p>
            <p>Search4</p>
            <p>Search5</p>
        </div>
    </RecentSearchesContainer>
  )
}

export default RecentSearches;