/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { setSelectedLanguage } from "../../redux/popular.actions";
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from "../../redux/popular.thunk";

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













// if I return function inside useChangeLangHandler than I need to invoke it (by this ()) at the end of useChangeLangHandler()()

// const handleChangeLanguage = (language) => {
//   return useChangeLangHandler(setSearchParams, dispatch, setSelectedLanguage, searchParams, language)();
  
// };


//It has closure 

// const handleChangeLanguage = (language) => {
//   return () => {
//     useChangeLangHandler(setSearchParams, dispatch, setSelectedLanguage, searchParams, language);
//   };
// };


//It doesnt have the closure but we pass language from handleChangeLanguage(language) to useChangeLangHandler(language)

// const handleChangeLanguage = (language) => useChangeLangHandler(setSearchParams, dispatch, setSelectedLanguage, searchParams, language);



// const doThis = (language) => useChangeLangHandler(setSearchParams, dispatch, setSelectedLanguage, searchParams, language);
// onClick={() => isLoading? null : doThis(language) }








// export const useChangeLangHandler = (setSearchParams, dispatch, setSelectedLanguage, searchParams) => {
//   const changeLangHandler = (language) => {
//     setSearchParams({ lang: language });
//     dispatch(setSelectedLanguage(language));
//   };

//   useEffect(() => {
//     console.log(searchParams);
//   }, [searchParams]);

//   return changeLangHandler;
// };
// Then, modify the doThis variable in the Tabs component to call the returned function like this:

 

// const doThis = useChangeLangHandler(setSearchParams, dispatch, setSelectedLanguage, searchParams);

// ...

// <li
//   key={index}
//   style={{
//     color: language === searchParams.get('lang') ? "#d0021b": isLoading ? 'grey' : "#000000",
//   }}
//   onClick={() => isLoading ? null : doThis(language)}
// >
// This should properly pass the language argument to the changeLangHandler function.









// const doThis = useChangeLangHandler(setSearchParams, dispatch, setSelectedLanguage, searchParams);

// ...

// <li
//   key={index}
//   style={{
//     color: language === searchParams.get('lang') ? "#d0021b": isLoading ? 'grey' : "#000000",
//   }}
//   onClick={() => isLoading ? null : doThis(language)}
// >


// can be the same as this 


// const doThis = (language) => useChangeLangHandler(setSearchParams, dispatch, setSelectedLanguage, searchParams, language);
// onClick={() => isLoading? null : doThis(language) }

// ChatGPT
// Yes, these two implementations are functionally equivalent, 
// and you can use either one of them to achieve the same result. 
// The first implementation creates a constant doThis that references 
// the result of the useChangeLangHandler hook, and the second 
// implementation creates a function doThis that calls the useChangeLangHandler 
// hook with the given arguments. Both implementations result in a 
// function that takes a language parameter and returns the result of the useChangeLangHandler hook with the given arguments.

// The second implementation may be slightly more concise and easier to read 
// since it eliminates the need for a separate constant declaration. However, 
// it may also depend on the context of your code and personal preference.













// Yes, returning (language) => handleChangeLang(language) allows us to create a closure around the handleChangeLang 
// function and have access to the setSearchParams, dispatch, setSelectedLanguage,
//  and searchParams variables that are defined outside of the handleChangeLang function. 
//  This way, when we later call the returned function with a language argument, 
//  it has access to all these variables from the closure.












// // /* eslint-disable react/prop-types */

// // const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

// // const Tabs = ({searchParams, setSearchParams, isLoading}) => {


//   return (
//     <ul className="languages">
//       {languages.map((language, index) => (
//         <li
//           key={index}
//           style={{
//             color: language === searchParams.get('lang') ? "#d0021b": isLoading ? 'grey' : "#000000",
//           }}
//           onClick={() => isLoading? null : setSearchParams({lang:`${language}`})}
//         >
//          {language}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Tabs;


