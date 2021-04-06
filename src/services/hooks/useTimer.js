import {useState} from "react";
import useInterval from "./useInterval";

export function useTimer(onEnd, delay) {

    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(count + 1);
    }, 1000);
    if (count > delay) {
        onEnd(count);
    }

    return count;
}
