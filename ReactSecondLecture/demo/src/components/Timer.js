import { useState } from 'react';

const Timer = (props) => {
    let [seconds, setSeconds] = useState(56); 
    let [minutes, setMinutes] = useState(0); 
    //array destruction
    //ima znachenie porednosta , a ne imenata
    //v object destruction imenata sa ot znachenie, a ne porednost


    //Not good practise (useEffect is better)
    setTimeout (() => {
        // if(seconds % 59 === 0) {
        //     setMinutes(minutes + 1);
        //     seconds = 1;
        // }else {
        // setSeconds(seconds + 1);
        setSeconds(state => state + 1)
        // }
    }, 1000);

    

    return (
        <div>
            <h2>Timer</h2>
            Time: {minutes > 0 ? minutes : ''} {seconds}s
        </div>
    );
};


export default Timer;