import { useRef, useState } from "react";
import Timerrr from "./Timerrr";

const TimerListtt = () => {

    const idAutoIncrementt = useRef(0);
    const [timerss, setTimerss] = useState([]);

    const addTimerHandlerr = () => {
        idAutoIncrementt.current++;
        setTimerss(prevState => [...prevState, idAutoIncrementt.current])
    }

    return (
        <div>
            <h2>Timersss</h2>
            <button onClick={addTimerHandlerr}>Add New Timer</button>
            {timerss.map(timerrId => <Timerrr key={timerrId} />)}
        </div>
    )
}

export default TimerListtt;