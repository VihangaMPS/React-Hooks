import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_limit=10`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => {setResourceType('Users')}}>Users</button>
                <button onClick={() => {setResourceType('Comments')}}>Comments</button>
            </div>

            <h1>{resourceType}</h1>

            {items.map(item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default App
