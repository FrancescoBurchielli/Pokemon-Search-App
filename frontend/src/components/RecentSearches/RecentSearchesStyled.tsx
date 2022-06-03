import styled from 'styled-components'

export const RecentSearchesContainer = styled.div`
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
        cursor: pointer;
        color: #0000ffc7;
    }
    p:hover{
        color: #0077ffc6;
    }
    
    @media only screen and (min-width:667px) {
        height: 50%;
        flex-direction: column;            
        justify-content: space-evenly;      
    }       
}
`