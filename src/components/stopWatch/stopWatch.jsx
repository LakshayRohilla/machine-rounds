import { useState, useRef } from "react";

const StopWatch = () =>{
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);  

    function handleStart(){
        if(!running){
            setRunning(true);
            intervalRef.current = setInterval(() => {
                setTime(prev => prev+1);
            }, 1);
        }
    }

    function handlePause(){
        setRunning(false);
        clearInterval(intervalRef.current)
    }

    function handleReset(){
        setRunning(false);
        setTime(0);
        clearInterval(intervalRef.current);
    }

    function formatedTime(time){
        const getSec = `0${time%60}`.slice(-2);
        const min = Math.floor(time/60);
        const getMin = `0${min%60}`.slice(-2);
        const getHr = `0${Math.floor(time/3600)}`.slice(-2);

        return `${getHr} : ${getMin} : ${getSec}`;
    }

    return (
        <>
        {formatedTime(time)}
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}

export default StopWatch;