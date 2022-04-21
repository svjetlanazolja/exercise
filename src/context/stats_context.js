import React, { useState } from "react";

const StatsContext = React.createContext(
    {
        counterAmount: 0,
        timersAmount: 0,
        timersLaps: 0,
        setCounterAmount: () => { },
        incrementTimerLaps: () => { },
        setTimersAmount: () => { }
    }
);

export const StatsContextProvider = (props) => {
    const [counterAmount, setCounterAmount] = useState(0);
    const [timersAmount, setTimersAmount] = useState(0);
    const [timersLaps, setTimersLaps] = useState(0);

    const incrementTimerLaps = () => {
        setTimersLaps(prevState => prevState + 1);
    }

    return (

        <StatsContext.Provider value={
            {
                counterAmount: counterAmount,
                timersAmount: timersAmount,
                timersLaps: timersLaps,
                setCounterAmount,
                incrementTimerLaps,
                setTimersAmount
            }
        }>
            {props.children}
        </StatsContext.Provider>

    )
}

export default StatsContext;