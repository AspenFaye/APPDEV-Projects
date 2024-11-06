import React, {useState} from 'react'
export default function Counter(){

    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count => count + 2)
    }
    
    const decrementCount = () => {
        setCount(count => count - 2)
    }
    return(
        <>
        <div className="container">
            <p className="counter-container">
                Counter: <br/>
                {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick = {decrementCount}>Decrement</button>
            <button className="button-container-increment" onClick = {incrementCount}>Increment</button>
        </div>
        </>
    )
}