import React from 'react';

function Home () {
    const myStuff = {
        name: 'Alesso',
        location: 'fortcollins Wincosin',
        age: 30,
        sex: 'male',
        isMarried: true,
    }
    return(
        <div>
            <h1>Name: {myStuff.name}</h1>
        </div>
    );
}

export default Home;