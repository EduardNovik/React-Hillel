/* eslint-disable react/prop-types */

const FetchError = ({err}) => {

    return (
        <div className="column-error">
          <h3>{err ? err : 'Unknown error'}</h3>
          <button className="button" onClick={()=> window.location.reload()}>Refresh</button>
        </div>
    );
};

export default FetchError;