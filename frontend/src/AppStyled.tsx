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
    /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
    #spinnerContainer{
        width: 90%;
        margin-top: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        #spinner{
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid rgba(238,21,21,0.7);
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width:667px) {
        margin-top: 5%;;
      }
    }
    
    #pokemonNotFound{
      margin: 50px;
      display: flex;
      flex-direction: column;      
      align-items: center;
      p{
        margin:0px;
        text-align:center;
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