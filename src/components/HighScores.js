import {useHighScores} from "../services/hooks/useHighScores";
import React from "react";

export function HighScores({gameLength}) {

    const highScores = useHighScores(gameLength);


    const listHighScore = highScores.map((highScore) =>
        <li style={{listStyle: 'none'}} key={highScore.id}>{highScore.name} - {highScore.score}</li>
    );
    return (
        <div className='highScores'>
            <h2> High Scores ( {gameLength} seconds )</h2>
        <ul>{listHighScore}</ul>
        </div>
    );

}
