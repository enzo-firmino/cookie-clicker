import React from "react";
import Button from 'react-bootstrap/Button';
import {HighScores} from "./HighScores";

export function Home({onStart, onSettings, gameLength, playerName, ...props}) {
    return (
        <div className='content'>
            <h1 className='screenTitle'>Cookie Clicker ! </h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Player name : {playerName}</span>
            <span>Game length : {gameLength}</span>
                <HighScores gameLength={gameLength}/>
            </div>
            <Button onClick={onStart}>Start game</Button>
            <Button onClick={onSettings}>Settings</Button>
        </div>
    );
}
