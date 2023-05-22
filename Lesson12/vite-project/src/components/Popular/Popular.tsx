import { useEffect } from "react";
import Tabs from "./Tabs";
import Repositories from "./Repositories";
import { useSearchParams, SetURLSearchParams} from "react-router-dom";
import { FC, ReactElement } from "react";

const Popular: FC = (): ReactElement => {

  const [searchParams, setSearchParams]: [URLSearchParams, SetURLSearchParams] = useSearchParams() 
 
  useEffect(() => {
    if(!searchParams.get('lang')){
      setSearchParams({lang:'All'})
    }
  }, []);


  return (
    <>
      <Tabs 
        searchParams={searchParams} 
        setSearchParams={setSearchParams} 
      />
      <Repositories/>
    </>
  );
};

export default Popular;




