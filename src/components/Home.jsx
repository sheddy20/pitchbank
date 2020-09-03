import React, {useState} from 'react';

export default function () {
    const [count, setCount] = useState(0);
    return (
        <div className="div-app">
            <h1>State With Functional Componoents In React.</h1>
            <p className='p-app'>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)} className="b-app">
                Tap Me.
            </button>
        </div>
    );
}