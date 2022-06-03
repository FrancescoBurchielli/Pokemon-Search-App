import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 90%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;    
    justify-content: center;  
    h2,h4 {
        margin:0px;
    } 
    #legendaryStyle{       
        background: #CF7C1D;
        background: linear-gradient(to right, #CF7C1D 6%, #C8CF0A 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media only screen and (min-width:667px) {
        width: 50%;
    }
`