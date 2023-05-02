import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../api";
import  PlayerPreview  from '../Battle/PlayerPreview'
import BattleInfo from "./BattleInfo";
import Loader from '../Popular/Loader'
import BattleError from "./BattleError";


const Results = () => {
  const location = useLocation();
  const [battleResultData, setBattleResultData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState()


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log(params.get("playerOneName"),params.get("playerTwoName"),"location");

    const getBattleResults = async () => {
      setIsLoading(true)
      try {
        const players = await battle([
          params.get("playerOneName"),
          params.get("playerTwoName"),
        ])
        setBattleResultData(players);
        
      } catch (error) {
        setErr(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getBattleResults();
  }, []);

  return (
    <div>
      {err ? (
        <BattleError err={err} />
      ) : isLoading ? (
        <Loader />
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
    </div>
  );
};

export default Results;






