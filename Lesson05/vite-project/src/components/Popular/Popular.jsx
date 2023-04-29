import { useState, useEffect } from "react";
import { fetchPopularRepos } from '../api'
import  Loader  from '../Popular/Loader'
import Tabs from "./Tabs";
import Repositories from "./Repositories";
import { useSearchParams } from "react-router-dom";
import FetchError from "./FetchError";
 

const Popular = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [repos, setRepos] = useState([]);
  const [err, setErr] = useState()

  useEffect(() => {
    if(!searchParams.get('lang')){
      setSearchParams({lang:'All'})
    }
  }, []);

  useEffect(() => {
    setIsLoading(true)
    fetchPopularRepos(searchParams.get('lang'))
    .then((data) => {setRepos(data), setIsLoading(false)})
    .catch((error) => {setErr(`${error.message}, please wait and try to refresh the page.`)});
  }, [searchParams])

  return (
    <div>
      <Tabs 
        searchParams={searchParams} 
        setSearchParams={setSearchParams} 
        isLoading={isLoading}
      />
      {err ?
        <FetchError err={err}/>
      :
        !isLoading ?
          <Repositories repos={repos}/>
          :
          <Loader/>
      }
    </div>
  );
};

export default Popular;




