import React from 'react';

function Home () {
    const people = ['adams', 'amy', 'lewis', 'chadwick', 'curry', 'tyrone'];
    return (
        <div>
            <h1>welcome</h1>
            <ol>
                {people.map(m=> <li>{m.people}</li>)}
            </ol>
        </div>
    );
}

export default Home;