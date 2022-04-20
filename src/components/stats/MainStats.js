import CounterStats from "./CounterStats";
import TimerStats from "./TimerStats";

const MainStats = () => {
    return (
        <div>
            <h1>Stats: </h1>
            <TimerStats />
            <CounterStats />
        </div>
    )
}

export default MainStats; 