import styled from "styled-components";

export const FetchErrorContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  #pokemonNotFound {
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 0px;
      text-align: center;
    }
    #notFound {
      width: 200px;
      height: auto;
      color: white;
    }
  }
`;
