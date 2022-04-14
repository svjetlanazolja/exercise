import { useState, useRef, useEffect } from "react"
import Timer from "./Timer";

const TimerList = () => {
    // const idAutoIncrement = useRef(0);
    // const [timers, setTimers] = useState([]);

    // const addTimerHandler = () => {
    //     setTimers(prevState => [...prevState, <Timer key={idAutoIncrement.current++}/>])
    // }

    const idAutoIncrement = useRef(0);
    const [timers, setTimers] = useState([]);

    const addTimerHandler = () => {
        idAutoIncrement.current++;
        setTimers(prevState => [...prevState, idAutoIncrement.current])
    }

    const handleKeyDown = (e) => {
        switch (e.key) {
            case "Enter":
                addTimerHandler()
                break;
            case "Delete":
            case "Backspace":
            case "Escape":
                setTimers([])
                break;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, []);

    // console.log(timers);
    return (
        <div>
            <h1>Timers:</h1>
            <button onKeyDown={(e) => { e.preventDefault() }} onClick={addTimerHandler}>Add new timer</button>
            {timers.map(timerId => <Timer key={timerId} />)}
            {/* {timers} */}
        </div>
    )
}

export default TimerList;
