
import './App.css'
import {createContext} from "react";
import ChildA from "./Child A.jsx";

export const TextContext = createContext();

function App() {

    return (
        <>
            <TextContext.Provider value={"Hello World"} >
                <ChildA/>
            </TextContext.Provider>

        </>
    )
}

export default App
