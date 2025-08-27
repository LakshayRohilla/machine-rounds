import { useEffect, useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState('red');

    useEffect(()=>{
        const cycleDuration = 7500;

        function startLight(){
            setColor('red');
            setTimeout(()=>setColor('yellow'), 4000);
            setTimeout(()=>setColor('green'), 4500);
        }

        startLight();

        const interval = setInterval(startLight, cycleDuration);

        return ()=>clearInterval(interval);

    }, []);

    return (
        < div style={{margin:'5px 35px 5px 35px'}}>
            <h1>Traffic Light</h1>
            <div style={{padding:13, backgroundColor:color}}></div>
        </div>
    );
}

export default TrafficLight;