/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import  Loader  from '../Popular/Loader'
import FetchError from "./FetchError";

const Repositories = () => {
  const repos = useSelector((state) => state.popular.repos)
  const isLoading = useSelector((state) => state.popular.loading)
  const err = useSelector((state) => state.popular.error)


  return (
    <>
      {err ? 
        <FetchError err={err}/>
      : 
      !isLoading ? (
        <ul className="popular-list">
          {repos.map((repo, index) => {
            return (
              <li key={repo.id} className="popular-item">
                <div className="popular-rank">#{index + 1}</div>
                <ul>
                  <li>
                    <img
                      className="avatar"
                      src={repo.owner.avatar_url}
                      alt="avatar"
                    />
                  </li>
                  <li>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </li>
                  <li>@{repo.owner.login}</li>
                  <li>{repo.stargazers_count} stars</li>
                </ul>
              </li>
            );
          })}
        </ul>
      ) : 
        <Loader />
      }
    </>
  );
};

export default Repositories;