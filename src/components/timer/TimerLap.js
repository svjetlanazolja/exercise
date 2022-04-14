const TimerLap = (props) => {
    return (
        <div>{`${props.indexProps} Duration: ${props.duration / 100} Time: ${props.total / 100}
        ${props.isSlowest ? "Slowest" : ""} ${props.isFastest ? "Fastest" : ""} `} </div>
    )
}

export default TimerLap;