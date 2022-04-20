import { useContext } from "react";
import StatsContext from "../../context/stats_context";

const CounterStats = () => {
    const context = useContext(StatsContext);

    return (
        <div>Counter amount: {context.counterAmount}</div>
    )

}

export default CounterStats;