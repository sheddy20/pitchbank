import React from 'react';

function Title () {
    
    for (let i = 1; i <= 50; i++){
        return <div>
            <h1>{`hello world: ${i}`}</h1>
        </div>
    }
    return (
        <div>
            <h1>hello world</h1>
            <br></br>
            <p>my age is: 22</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
                <li>Item three</li>
                <li>Item four</li>
                <li>Item five</li>
            </ol>
        </div>
    ); 
}

export default Title;