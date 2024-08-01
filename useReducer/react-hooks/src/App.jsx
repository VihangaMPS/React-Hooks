import './App.css'
import {useReducer} from "react";

const ACTIONS = {
    INCREMENT : 'increment',
    DECREMENT : 'decrement'
}
const initialState = {
    count: 0
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT : return { count: state.count + 1 }
        case ACTIONS.DECREMENT : return { count: state.count - 1 }

        default : return false
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function decrement() {
        dispatch({type: ACTIONS.DECREMENT})
    }
    function increment() {
        dispatch({type: ACTIONS.INCREMENT})
    }

    return (
        <>
            <button onClick={decrement}> - </button>
            <span>{state.count}</span>
            <button onClick={increment}> + </button>
        </>
    )
}

export default App
