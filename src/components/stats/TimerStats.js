import { useContext } from "react";
import StatsContext from "../../context/stats_context";

const TimerStats = () => {
    const { timersLaps, timersAmount } = useContext(StatsContext);

    return (
        <>
            <div>Timer Laps: {timersLaps}</div>
            <div>Timer Amount: {timersAmount}</div>
        </>
    )

}

export default TimerStats;