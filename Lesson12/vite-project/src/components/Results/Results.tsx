import { useEffect } from "react";
import  PlayerPreview  from '../Battle/PlayerPreview'
import ResultsInfo from "./ResultsInfo";
import Loader from '../Popular/Loader'
import ResultsError from "./ResultsError";
import { useDispatch, useSelector } from 'react-redux'
import { getBattleResultsThunk } from '../../redux/resultsSlice'
import { useLocation } from "react-router-dom";
import { FC, ReactElement } from "react";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";

type ErrorResult = string|null

type PlayerProfileResult = {
  [key: string]: any;
};


export interface SinglePlayerResult {
  profile: PlayerProfileResult,
  score: number
}

export type TotalPlayersResult = SinglePlayerResult[]


const Results: FC = (): ReactElement => {

  const dispatch: AppDispatch = useDispatch()
  const location = useLocation();
  const params: URLSearchParams = new URLSearchParams(location.search);
  

  const battleResultData = useSelector<RootState, TotalPlayersResult>((state)=> state.results.battleResultsData)
  const isLoading = useSelector<RootState, boolean>((state)=> state.results.loading)
  const err = useSelector<RootState, ErrorResult>((state)=> state.results.error)

  useEffect(() => {
   dispatch(getBattleResultsThunk(params)) 
  }, []);

  return (
    <>
      {err ? (
        <ResultsError err={err}/>
      ) : isLoading ? (
        <Loader/>
      ) : (
        <div className="row">
          {battleResultData.map((player:SinglePlayerResult, index: number):ReactElement => {
            return (
              <PlayerPreview
                key={index}
                avatar={player.profile.avatar_url}
                username={player.profile.login}
              >
                <ResultsInfo player={player} index={index} />
              </PlayerPreview>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Results;






