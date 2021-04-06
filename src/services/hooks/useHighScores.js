import {useEffect, useState} from "react";

export function useHighScores(gameLength) {

    const [highScores, setHighScores] = useState([]);


    useEffect( () => {
       getHighScores(gameLength).then( (highScores) => setHighScores(highScores));
    }, [gameLength]);

    function getHighScores(time) {
        return fetch("http://localhost:4000/highscores?time="+time)
            .then(response => response.json());
    }

    return highScores;
}
