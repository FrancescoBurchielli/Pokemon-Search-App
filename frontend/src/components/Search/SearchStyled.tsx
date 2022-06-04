import styled from "styled-components";

export const SearchContainer = styled.div`
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
    width: 80%;
    min-width:100px;
    box-sizing: border-box;      
    padding: 10px 7px 10px 7px;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 4px 10px 5px rgba(186,186,186,0.31);
;
  }
  #searchButtonIconWrapper{
    #searchIcon{
        width: 30px;
        height: auto; 
        padding: 5px;
        cursor: pointer;
    }     
    #searchButton{
        cursor: pointer;
        display:none;
        width: 70px;
        height: auto; 
        padding: 10px 7px 10px 7px;
        margin-left: 5px;  
        border-radius: 5px;
        border:none;
        background-color: #dfdfdfac;
        box-shadow: 3px 4px 10px 5px rgba(186,186,186,0.31);
    }
  }

  @media only screen and (min-width:667px) {
        width:50%;
        #searchInput {flex-grow:1}
        #searchIcon {display:none}
        #searchButtonIconWrapper{
            #searchButton {display:inline-block}       
      }
  } 
}
`