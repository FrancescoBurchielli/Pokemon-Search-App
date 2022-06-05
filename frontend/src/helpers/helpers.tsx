import { SearchHistory } from "../AppInterfaces";

export const retrieveSearchHistory = (setSearchHistory:React.Dispatch<React.SetStateAction<SearchHistory>>) => {
    const retrievedHistory = localStorage.getItem('searchHistory');    
    if(retrievedHistory!==null){
      setSearchHistory(JSON.parse(retrievedHistory));
    }     
}

export const updateSearchHistory = (name:string,timeOfSearch:number,searchHistory:SearchHistory,setSearchHistory:React.Dispatch<React.SetStateAction<SearchHistory>>) => {    
    const history = [...searchHistory.history,{name,timeOfSearch}].sort((a,b)=>b.timeOfSearch-a.timeOfSearch);
    const newSearchHistory = {...searchHistory,history};
    setSearchHistory(newSearchHistory); 
    localStorage.setItem('searchHistory',JSON.stringify(newSearchHistory));
}  

export const nameFormatter = (name:string) => {
    let formattedName;
    const trimmedString = name.trim();
    if(!name || trimmedString.length === 0){return ""}
    else{    
      const splittedName = trimmedString.split(' ');
      if(splittedName.length===1){
        formattedName = splittedName[0];
      }else{
        formattedName = splittedName.join("-");
      }
    } 
    return formattedName;
  }