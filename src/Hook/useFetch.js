import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
    const [movie, setMovie] = useState([]);
    
    const getMovie = useCallback(async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data.results);
        } catch (error) {
            alert(Error);
        }
    }, [url]);

    useEffect(() => {
        getMovie(); 
    }, [getMovie]);

    return movie;
};

export default useFetch;
