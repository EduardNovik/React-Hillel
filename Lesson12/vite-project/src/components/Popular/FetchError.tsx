/* eslint-disable react/prop-types */
import { FC, ReactElement } from "react";

interface ErrorPopular {
  err: string | null
}

const FetchError:FC<ErrorPopular> = ({err}): ReactElement => {

    return (
        <div className="column-error">
          <h3>{err ? err : 'Unknown error'}</h3>
          <button className="button" onClick={()=> window.location.reload()}>Refresh</button>
        </div>
    );
};

export default FetchError;