import styled from "styled-components";

interface Props {
    spriteLoaded:boolean,
}


export const ContentContainer = styled.div<Props>`
    visibility: ${props => (props.spriteLoaded? 'visible' : 'hidden')}
    width: 90%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;    
    justify-content: center;  
    align-items:center;
    h1,h5 {
        margin:0px;
    }    
    p{
        text-align:center;
        margin: 0px;
    }
    #legendaryStyle{       
        background: #CF7C1D;
        background: linear-gradient(to right, #CF7C1D 6%, #C8CF0A 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #sprite{
        width: 150px;
        height: auto;
    }
    #pokeBall{
        width: 50px;
        height: auto;
        opacity: 0.2;
        margin: 20px 0px;
    }
   
    @media only screen and (min-width:667px) {
        width: 50%;
        align-items:flex-start;
        p{
            text-align:left;
        }
    }
`