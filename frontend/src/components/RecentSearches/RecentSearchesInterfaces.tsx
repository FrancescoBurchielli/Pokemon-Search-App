import { SearchHistory, SearchItem } from "../../AppInterfaces";

export interface RecentSearchesProps {
  searchHistory: SearchHistory;
  onSearchItemClickHandler: (searchItem: SearchItem) => void;
  clickedSearchItem: SearchItem | undefined;
  setClickedSearchItem: React.Dispatch<
    React.SetStateAction<SearchItem | undefined>
  >;
}
