import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
    const location = useLocation()
    // const location = window.location
    

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        console.log(params.get('playerOneName'), params.get('playerTwoName'), 'location');

    }, [])

    return (
        <h2>Results</h2>
    );
};

export default Results;