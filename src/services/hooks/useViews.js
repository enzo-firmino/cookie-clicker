import {useState} from "react";


export function useViews() {

    const [currentView, setCurrentView] = useState('HOME');

    function setView (view) {
        if (["HOME", "GAME", "END", "SETTINGS"].includes(view)) {
            setCurrentView(view);
        }
    }

    return [currentView, setView];
}
