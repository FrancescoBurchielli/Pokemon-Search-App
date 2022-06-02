import {FC,useState} from 'react'
import styled from 'styled-components'
import Content from './components/Content/Content';
import RecentSearches from './components/RecentSearches/RecentSearches';
import Search from './components/Search/Search';
import { Pokemon } from './interfaces';

const AppContainer = styled.div`
  display: flex;  
  flex-direction: column;  
  box-sizing: border-box; 
  padding: 30px;
  height: 100%;
  width: 100%;  
  @media only screen and (min-width:667px) {
    flex-direction: row-reverse;
  }
  

  #mainApp{
    width: 100%;   
    flex-grow:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width:667px) {
      width: 90%;
  }
  }
`

const App:FC<{}> = ({}) => {

  const [pokemon,setPokemon] = useState<Pokemon>();
  

  return (
    <AppContainer>   
      <RecentSearches/>    
      <div id='mainApp'>
        <Search setPokemon={setPokemon}/>        
        {pokemon && <Content pokemon={pokemon}/>}
      </div>   
     </AppContainer>
  );
}

export default App;
