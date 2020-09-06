import React, { useState, useEffect } from 'react';

export default function Blog () {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `you click the button ${counter} times`
    });

    return (
        <div>
            <p>you have tap the button {counter} times</p>
            <button onClick={()=> setCounter(counter + 1)}>
                Press the Button..
            </button>
        </div>
    );
}