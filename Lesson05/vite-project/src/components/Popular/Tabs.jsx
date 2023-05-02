/* eslint-disable react/prop-types */

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const Tabs = ({searchParams, setSearchParams, isLoading}) => {

  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={{
            color: language === searchParams.get('lang') ? "#d0021b": isLoading ? 'grey' : "#000000",
          }}
          onClick={() => isLoading? null : setSearchParams({lang:`${language}`})}
        >
         {language}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;

