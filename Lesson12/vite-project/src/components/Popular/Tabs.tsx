/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { setSelectedLanguage } from "../../redux/popularSlice";
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from "../../redux/popularSlice";
import { FC, ReactElement } from "react";
import { RootState } from "../../redux/store";
import { SetURLSearchParams} from "react-router-dom";
import { AppDispatch } from "../../redux/store";

interface SearchParamsProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

const languages: string[] = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const Tabs: FC<SearchParamsProps> = ({ searchParams, setSearchParams }): ReactElement => {

  const dispatch: AppDispatch = useDispatch()
  const selectedLanguage = useSelector<RootState, string>((state) => state.popular.selectedLanguage)
  const isLoading = useSelector<RootState, boolean>((state) => state.popular.loading)


  const changeLangHandler = (language: string):void => {
    setSearchParams({lang:`${language}`})
  }

  useEffect(() => {
    dispatch(setSelectedLanguage(searchParams.get('lang')))
  },[searchParams])



  useEffect(() => {
    dispatch(getRepos(selectedLanguage))
  }, [selectedLanguage])
  


  return (
    <ul className="languages">
      {languages.map((language:string, index: number): ReactElement => (
        <li
          key={index}
          style={{
            color: language === selectedLanguage ? "#d0021b": isLoading ? 'grey' : "#000000",
          }}
          onClick={() => isLoading? null : changeLangHandler(language) } 
        >
         {language}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;