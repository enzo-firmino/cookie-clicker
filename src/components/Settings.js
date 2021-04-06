import React, {useState} from "react";
import Button from "react-bootstrap/Button";

export function Settings({onBack, gameLength, playerName, onChangeSettings, ...props}) {


    const [newPlayerName, setPlayerName] = useState(playerName);
    const [newGameLength, setGameLength] = useState(gameLength);

    function handleSubmit(event) {
        event.preventDefault();
        onChangeSettings(newPlayerName, newGameLength)
        onBack();
    }

    function handleChangePlayerName(event) {
        setPlayerName(event.target.value);
        event.preventDefault();
    }

    function handleChangeGameLength(event) {
        setGameLength(event.target.value);
        event.preventDefault();
    }

    return (
        <div className='content'>
            <h1 className='screenTitle'>Settings</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    User name :
                    <input type="text" name="name" onChange={handleChangePlayerName} />
                </label>
                <label>
                    Game length (seconds) :
                    <select value={newGameLength} onChange={handleChangeGameLength}>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='30'>30</option>
                    </select>
                </label>
                <input type="submit" value="Save changes" />
            </form>
            <Button onClick={onBack}>Back</Button>
        </div>
    );
}
