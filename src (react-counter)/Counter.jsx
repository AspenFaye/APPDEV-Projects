import React, {useState} from 'react'
export default function Counter(){
    //useState Hook for updating variables or Stateful Variables
    //function components

    const [count, setCount] = useState(0)
    //function to implement state count
    const incrementCount = () => {
        setCount(count => count + 1)
    }
    
    //function to reset the state count
    const resetCount = () => {
        setCount(count => count = 0)
    }

    //function to decrement the value of state count 
    const decrementCount = () => {
        setCount(count => count - 1)
    }

    //nbsp = no break space (the more you know)
    return(
        <>
        <div className="container">
            <p className="counter-container">
                Counter: <br/>
                {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick = {decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick = {resetCount}>Reset</button>
            <button className="button-container-increment" onClick = {incrementCount}>Increment</button>
        </div>
        </>
    )
}