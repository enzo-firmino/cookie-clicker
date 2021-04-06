import React from "react";
import Button from "react-bootstrap/Button";

export function End({onBack, onStart, score, gameLength, playerName, ...props}) {


    return (
        <div className='content'>
            <h1 className='screenTitle'>End</h1>
            <span>The game is over.</span>
            <br/>
            <span>
                    Your score is {score} clicks in {gameLength} seconds
                </span>
            <Button onClick={onStart}>Restart a new game</Button>
            <Button onClick={onBack}>Go back home</Button>
        </div>
    );
}


