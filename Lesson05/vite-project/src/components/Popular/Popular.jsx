import { useEffect } from "react";
import Tabs from "./Tabs";
import Repositories from "./Repositories";
import { useSearchParams } from "react-router-dom";

 

const Popular = () => {

  const [searchParams, setSearchParams] = useSearchParams()

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




