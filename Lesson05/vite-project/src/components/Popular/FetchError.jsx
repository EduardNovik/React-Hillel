/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

const FetchError = () => {

  const err = useSelector((state) => state.popular.error)

    return (
        <div className="column-error">
          <h3>{err}</h3>
          <button className="button" onClick={()=> window.location.reload()}>Refresh</button>
        </div>
    );
};

export default FetchError;