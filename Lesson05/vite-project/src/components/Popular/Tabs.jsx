/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { setSelectedLanguage } from "../../redux/popularSlice";
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from "../../redux/popularSlice";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const Tabs = ({searchParams, setSearchParams }) => {

  const dispatch = useDispatch()
  const selectedLanguage = useSelector((state) => state.popular.selectedLanguage)
  const isLoading = useSelector((state) => state.popular.loading)


  const changeLangHandler = (language) => {
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
      {languages.map((language, index) => (
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