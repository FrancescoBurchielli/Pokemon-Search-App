import styled from "styled-components";

interface Props {
  spriteLoaded: boolean;
}

export const PokemonCardContainer = styled.div<Props>`
  visibility: ${(props) => (props.spriteLoaded ? "visible" : "hidden")};
  height: 400px;
  width: 80%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h1 {
    margin: 0px;
    margin-top: 10px;
  }
  h3 {
    margin: 0px;
    margin-bottom: 30px;
  }
  p {
    text-align: center;
    margin: 0px;
    margin: 30px;
  }
  #legendaryStyle {
    background: #cf7c1d;
    background: linear-gradient(to right, #cf7c1d 6%, #c8cf0a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #sprite {
    width: 150px;
    height: auto;
  }
  #pokeBall {
    width: 50px;
    height: auto;
    opacity: 0.2;
    margin: 20px 0px;
  }

  @media only screen and (min-width: 667px) {
    width: 50%;
  }
`;
