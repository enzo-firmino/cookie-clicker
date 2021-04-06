import React from "react";
import Button from "react-bootstrap/Button";
import {useTimer} from "../services/hooks/useTimer";

export function Game({onEnd, score, onScoreChange, gameLength, playerName,...props}) {

    const count = useTimer(onEndTimer, gameLength)

    function onEndTimer() {
        append(score, gameLength, playerName);
        onEnd();
    }

    return (
        <div className='content'>
            <h1 className='screenTitle'>Game</h1>
            <span>Score : {score} </span>
            <br/>
            <span>Timer : {count} </span>
            <div onClick={() => onScoreChange(score+1)}>
                <img
                    src="https://iut-info.univ-reims.fr/users/jonquet/intranet/lp/react/eval/cookie-clicker/img/perfectCookie.png"
                    alt="cookie"
                />
            </div>
            <Button onClick={onEnd}>End game</Button>

        </div>
    );
}

function append(score, time, name) {
    return jsonFetch('POST', "http://localhost:4000/scores", {
            "score": score,
            "time": time,
            "name": name,
        },
    );
}

function jsonFetch(method, url, data = {}) {
    let init = {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }
    let request = new Request(url);

    return fetch(request, init)
        .then((response) => response.json())
}
