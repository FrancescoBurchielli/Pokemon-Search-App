import { SearchHistory, SearchItem } from "../../AppInterfaces";

export interface RecentSearchesProps {
  searchHistory: SearchHistory;
  onSearchItemClickHandler: (searchItem: SearchItem) => void;
}
