import {FC,useState} from 'react'
import styled from 'styled-components'
import Content from './components/Content/Content';
import RecentSearches from './components/RecentSearches/RecentSearches';
import Search from './components/Search/Search';

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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media only screen and (min-width:667px) {
      width: 90%;
  }
  }

`


const App:FC<{}> = ({}) => {
  const [name,setName] = useState<string>('');
  const [description,setDescription] = useState<string>('');
  const [legendary,setLegendary] = useState<boolean>(false);
  

  return (
    <AppContainer>   
      <RecentSearches/>    
      <div id='mainApp'>
        <Search/>        
        <Content name={name} description={description}/>
      </div>   
     </AppContainer>
  );
}

export default App;
