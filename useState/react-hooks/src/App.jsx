import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(() => {
        console.log("State function for Performance");
        return 4
    });

    function decrementCount() {
        setCount(prevCount => count - prevCount);
    }

    function incrementCount() {
        setCount(prevCount => count + prevCount);
    }


    return (
        <>
            <button onClick={decrementCount}> -</button>
            <span>{count}</span>
            <button onClick={incrementCount}> +</button>
        </>
    )
}

export default App
