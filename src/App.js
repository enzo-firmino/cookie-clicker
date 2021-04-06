import './App.css';
import {useViews} from "./services/hooks/useViews";
import {Home} from "./components/Home";
import {Game} from "./components/Game";
import React, {useState} from "react";
import {Settings} from "./components/Settings";
import {End} from "./components/End";

function App() {

    const [currentView, setView] = useViews();

    const [playerName, setPlayerName] = useState("stranger");
    const [gameLength, setGameLength] = useState(5);
    const [score, setScore] = useState(0);

    function onChangeSettings(playerName, gameLength) {
        console.log(playerName);
        console.log(gameLength);
        setPlayerName(playerName);
        setGameLength(gameLength);
    }

    function onScoreChange(score) {
        setScore(score);
    }

    function renderSwitch() {
        switch (currentView) {
            case 'HOME':
                return <Home
                    gameLength={gameLength}
                    playerName={playerName}
                    onStart={() =>  {
                        setView('GAME');
                        onScoreChange(0);
                    }}
                    onSettings={() => setView('SETTINGS')}
                />;
            case 'GAME':
                return <Game
                    playerName={playerName}
                    gameLength={gameLength}
                    onEnd={() => setView('END')}
                    onScoreChange={onScoreChange}
                    score={score}
                />;
            case 'END':
                return <End
                    score={score}
                    gameLength={gameLength}
                    onStart={() => {
                        setView('GAME');
                        onScoreChange(0);
                    }}
                    onBack={() => setView('HOME')}/>;
            case 'SETTINGS':
                return <Settings
                    onBack={() => setView('HOME')}
                    gameLength={gameLength}
                    playerName={playerName}
                    onChangeSettings={onChangeSettings}
                />;
            default:
                return <Home/>;
        }
    }

    return (
        <div className="App">
            {renderSwitch()}
        </div>
    );
}

export default App;
