import React, {useState} from 'react';

 function Home () {
    const [count, setCount] = useState(0);
    return (
        <div className="div-app">
            <h1>Functional Componoents With State.</h1>
            <h3 className="h-app">React Hooks</h3>
            <p className='p-app'>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)} className="b-app">
                Tap Me.
            </button>
        </div>
    );
}

export default  Home