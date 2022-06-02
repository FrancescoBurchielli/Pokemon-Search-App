import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;  
  flex-direction: column;  
  justify-content: space-evenly;
  box-sizing: border-box; 
  padding: 30px;
  height: 100%;
  width: 100%;  
  @media only screen and (min-width:667px) {
    flex-direction: row-reverse;
  }
  

  #mainApp{
    width: 100%;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width:667px) {
      width: 90%;
  }
  }
`