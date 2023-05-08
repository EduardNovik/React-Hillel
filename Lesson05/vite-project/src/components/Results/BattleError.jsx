/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const BattleError = () => {
  const err = useSelector((state) => state.results.error);

  return (
    <div className="column-error">
      <h3>{err}</h3>
      <h3>Please choose other players</h3>
      <Link className="button" to="/battle">
        Go to Battle
      </Link>
    </div>
  );
};


export default BattleError;

