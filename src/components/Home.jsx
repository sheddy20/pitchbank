import React from 'react';

function Home () {
    function getDetails (name, age, location, job, role) {
        return <div>
            <h1>{`my name is: ${name}`}</h1>
            <h1>{`i am ${age} years old...`}</h1>
            <h1>{`am from ${location}`}</h1>
            <h1>{`i work as ${job}`}</h1>
            <h3>{`my role there is ${role}`}</h3>
        </div>
    }
    const details = getDetails('shedrack', 20, 'Upsala', 'programmer', 'CTO');
    return (
        <div>
            <h4>{details}</h4>
        </div>
    );
}

export default Home;