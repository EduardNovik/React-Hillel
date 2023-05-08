import { useEffect } from "react";
import  PlayerPreview  from '../Battle/PlayerPreview'
import BattleInfo from "./BattleInfo";
import Loader from '../Popular/Loader'
import BattleError from "./BattleError";
import { useDispatch, useSelector } from 'react-redux'
import { getBattleResultsThunk } from '../../redux/results.thunk'
import { useLocation } from "react-router-dom";


const Results = () => {

  const dispatch = useDispatch()
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const battleResultData = useSelector((state)=> state.results.battleResultsData)
  const isLoading = useSelector((state)=> state.results.loading)
  const err = useSelector((state)=> state.results.error)


  useEffect(() => {
   dispatch(getBattleResultsThunk(params)) 
  }, []);

  return (
    <>
      {err ? (
        <BattleError/>
      ) : isLoading ? (
        <Loader/>
      ) : (
        <div className="row">
          {battleResultData.map((player, index) => {
            return (
              <PlayerPreview
                key={index}
                avatar={player.profile.avatar_url}
                username={player.profile.login}
              >
                <BattleInfo player={player} index={index} />
              </PlayerPreview>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Results;






