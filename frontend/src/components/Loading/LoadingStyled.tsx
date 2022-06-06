import styled from "styled-components";

export const LoadingContainer = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #spinnerContainer {
    width: 90%;
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #spinner {
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid rgba(238, 21, 21, 0.7);
      width: 120px;
      height: 120px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
    }
    @media only screen and (min-width: 667px) {
      margin-top: 5%;
    }
  }
`;
