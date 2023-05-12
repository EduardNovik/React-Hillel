/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const BattleError = ({err}) => {

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

