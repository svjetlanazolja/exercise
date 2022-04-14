const TimerLappp = (props) => {
    return (
        <div>
            {`Lap ${(props.time / 100).toFixed(2)} 
            Duration: ${(props.duration / 100).toFixed(2)} 
            ${props.isMin ? "Fastest" : ""} 
            ${props.isMax ? "Slowest" : ""} `}
        </div>
    )
}

export default TimerLappp;