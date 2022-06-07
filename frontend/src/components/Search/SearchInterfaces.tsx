export interface SearchProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  onSubmitSearchPokemon: () => void;
}
