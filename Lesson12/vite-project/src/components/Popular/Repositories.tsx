/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import  Loader  from './Loader'
import FetchError from "./FetchError";
import { FC, ReactElement } from "react";
import { RootState } from "../../redux/store";

export interface PopularRepo {
  [key:string]: any
}

const Repositories: FC = (): ReactElement => {
  const repos = useSelector<RootState, PopularRepo[]>((state) => state.popular.repos)
  const isLoading = useSelector<RootState, boolean>((state) => state.popular.loading)
  const err = useSelector<RootState, string|null>((state) => state.popular.error)


  return (
    <>
      {err ? 
        <FetchError err={err}/>
      : 
      !isLoading ? (
        <ul className="popular-list">
          {repos.map((repo: PopularRepo, index: number) => {
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