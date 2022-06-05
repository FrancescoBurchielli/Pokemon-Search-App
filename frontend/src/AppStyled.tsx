import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;  
  flex-direction: column;  
  justify-content: center;
  box-sizing: border-box; 
  padding: 30px;
  height: 100%;
  width: 100%;  
  @media only screen and (min-width:667px) {
    flex-direction: row-reverse;
  }
  

  #mainApp{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #logo{
        height: auto;
        width: 150px;
        margin-bottom: 20px;
    }
    #pokemonNotFound{
      margin: 50px;
      display: flex;
      flex-direction: column;      
      align-items: center;
      p{
        margin:0px;
      }
      #notFound{
        width: 200px;
        height: auto;
      }
    }
   
    @media only screen and (min-width:667px) {
      flex-grow:0;
      height: 100%;
      width: 70%;
      #logo{
        height: auto;
        width: 200px;
        margin-bottom: 20px;
      }
  }
  }
`