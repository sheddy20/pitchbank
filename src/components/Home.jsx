import React from 'react';


function Home () {
    const info = {
        // name: 'Alesso',
        // location: 'fortcollins Wincosin',
        // age: 30,
        // sex: 'male',
        // isMarried: 'Single',
        subtitle: 'welcome to javascript mastery',
        users: ['one', 'two', 'three', 'four', 'five',  'seven'],
    }

    return(
        <div>
             {info.users.length >= 7 && <p>{info.users}</p>}
            <p className="App">{info.subtitle ? info.subtitle : 'subtitle not found'}</p>
            <h1>Name: {info.name ? info.name : 'name props not found'}</h1>
            <h1>Location: {info.location ? info.location : 'No name'}</h1>
            <h1>Gender: {info.sex ? info.sex : 'Not provided'}</h1>
            <h1>Marrital Status: {info.isMarried ? info.isMarried : 'Unknown'}</h1>
            {info.age >= 18 && <p className="one">Age:{info.age}</p> ? <p classNam="two">{info.age}</p> : <p>Age not found</p>}
        </div>
    );
}

export default Home;