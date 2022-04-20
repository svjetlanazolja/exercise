import { useContext } from "react";
import StatsContext from "../../context/stats_context";

const TimerStats = () => {
    const { timersLaps, timersAmount } = useContext(StatsContext);

    return (
        <>
            <div>Timer Laps: {timersLaps}</div>
            <div>Timer Amount: 0</div>
        </>
    )

}

export default TimerStats;