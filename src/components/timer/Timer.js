import { useState, useEffect, useRef, useContext } from "react";
import StatsContext from "../../context/stats_context";
import TimerLap from "./TimerLap";

const Timer = () => {
    const [timerValue, setTimerValue] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const prevlapTotal = useRef(0);
    const minDuration = useRef(0);
    const maxDuration = useRef(0);
    const context = useContext(StatsContext)

    useEffect(() => {
        let id;
        if (isRunning) {
            id = setInterval(() => {
                setTimerValue(prevState => prevState + 1);
            }, 10);
        }

        return () => {
            if (id) {
                clearInterval(id);
            }
        }
    }, [isRunning]);

    const toggleTimerHandler = () => {
        setIsRunning(prevState => !prevState);
    }

    const addLapHandler = () => {
        const currentLapDuration = timerValue - prevlapTotal.current
        prevlapTotal.current = timerValue;
        if (laps.length >= 1) {
            if (minDuration.current > currentLapDuration) {
                minDuration.current = currentLapDuration
            }
            else if (maxDuration.current < currentLapDuration) {
                maxDuration.current = currentLapDuration
            }
        } else {
            minDuration.current = timerValue;
            maxDuration.current = timerValue;
        }

        setLaps(prevState => [...prevState, { total: timerValue, duration: currentLapDuration }])
        context.incrementTimerLaps()
    }

    return (
        <div>
            <p>{`Time: ${(timerValue / 100)}s`}</p>
            <button onClick={toggleTimerHandler}>Start/Stop timer</button>
            <button disabled={!isRunning} onClick={addLapHandler} >Lap</button>
            {laps.map((lap, index) => <TimerLap key={index} indexProps={index + 1} duration={lap.duration} total={lap.total}
                isFastest={minDuration.current === lap.duration} isSlowest={maxDuration.current === lap.duration} />)}
        </div>
    )
}

export default Timer;
