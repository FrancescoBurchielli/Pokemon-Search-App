import styled from "styled-components";

export const SearchContainer = styled.form`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
#mainSearch{
  display: flex;     
  width: 100%;
  justify-content: center;    
  #searchInput{   
    width: 250px; 
    min-width:100px;
    box-sizing: border-box;      
    padding: 10px 7px 10px 7px;
    border: none;
    border-radius: 5px;
    box-shadow:  rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  #searchButton{   
    width: 50px;
    height: 45px;       
    cursor: pointer;          
    margin-left: 5px;  
    box-shadow:  rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    border: none;
    background-color: rgba(238,21,21,0.7);
    color: white;
    font-weight: bold;
    box-shadow: 3px 4px 10px 5px rgba(186,186,186,0.31);
    #searchButtonIcon{
      width:25px;
      height: auto;
    }
    #searchButtonText{
      display: none;
    }
  } 
    
  @media only screen and (min-width:667px) {
        width:60%;
        padding: 10px 7px 10px 7px;
        #searchInput {flex-grow:1} 
        #searchButton{
          width: 60px;
          height: auto;          
          #searchButtonIcon {display:none}        
          #searchButtonText {display:inline-block}     
        }             
        
  } 
}
`