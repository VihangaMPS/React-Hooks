import {useContext} from "react";
import {TextContext} from "./App.jsx";

const ChildA = () => {
    const text = useContext(TextContext);

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default ChildA;