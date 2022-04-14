import { useEffect, useRef, useState } from "react";
import TimerLappp from "./TimerLappp";

const Timerrr = () => {
    const [timerrValue, setTimerrValue] = useState(0);
    const [isRunninggg, setIsRunninggg] = useState(false);
    const [lapss, setLapss] = useState([]);
    const lastLapStart = useRef(0);
    const minIndex = useRef(0);
    const maxIndex = useRef(0);
    const idAutoIncrementt = useRef(0);

    useEffect(() => {
        let id;
        if (isRunninggg) {
            id = setInterval(() => {
                setTimerrValue(prevState => prevState + 1)
            }, 10);
        }

        return () => {
            if (id) {
                clearInterval(id);
            }
        }

    }, [isRunninggg]);


    const togleTimerrrHandler = () => {
        setIsRunninggg(prevState => !prevState)
    }

    const addLapHandlerr = () => {
        idAutoIncrementt.current++;
        const lapDuration = timerrValue - lastLapStart.current;
        lastLapStart.current = timerrValue;

        if (lapss.length >= 1) {
            if (lapDuration < lapss[minIndex.current].duration) {
                minIndex.current = lapss.length;
            }
            if (lapDuration > lapss[maxIndex.current].duration) {
                maxIndex.current = lapss.length
            }
        }
        setLapss(prevState => [...prevState, { time: timerrValue, duration: lapDuration, id: idAutoIncrementt.current }])
    }


    return (
        <div>
            <p>{`Time: ${(timerrValue / 100)}s`}</p>
            <button onClick={togleTimerrrHandler}>Start/Stop Timer</button>
            <button disabled={!isRunninggg} onClick={addLapHandlerr} >Lap</button>
            {lapss.map((lap, index) => <TimerLappp key={lap.id} time={lap.time} duration={lap.duration} isMax={lapss.length > 1 && maxIndex.current === index} isMin={lapss.length > 11 && minIndex.current === index} />)}
        </div>
    )

}

export default Timerrr;