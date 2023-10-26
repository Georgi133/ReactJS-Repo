import { useState } from 'react'

const getByTitle = (count) => {
    if(count === 1) {
       return 'First Kill'
    } else if (count === 2) {
      return  'Double'
    }else {
       return  'Counter'
    }

};

export default function Counter (props){

    const [counter,setCounter] = useState(0);
    const [reset, setReset] = useState(props.canReset);


    const onButtonClickIncrement = (e) => {
        setCounter(counter => counter + 1);
        setReset(true);
    };

    const onButtonClickDecrement = (e) => {
        setCounter(counter => counter - 1);
        setReset(true);

    };
    const onButtonClickReset = (e) => {
        setCounter(0)
    };

    const title = getByTitle(counter);
    

    return (
        <div>
            <h3>{title} {counter}</h3>
            {/* <button onClick={onButtonClickIncrement}>+</button> */}
            <button onClick={onButtonClickDecrement}>-</button>

            {reset && <button onClick={onButtonClickReset}>X</button>}
            
            {counter < 10 
            ? <button onClick={onButtonClickIncrement}>+</button> 
            : null 
            }
            
        </div>
    );

}