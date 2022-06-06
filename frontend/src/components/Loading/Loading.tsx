import { LoadingContainer } from "./LoadingStyled";

export const Loading = () => {
  return (
    <LoadingContainer>
      <div id="spinnerContainer">
        <div id="spinner"></div>
      </div>
    </LoadingContainer>
  );
};
