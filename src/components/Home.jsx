import React from 'react';


function Home () {
    const info = {
        name: 'Alesso',
        location: 'fortcollins Wincosin',
        age: 30,
        sex: 'male',
        isMarried: true,
    }

    function getAge(age) {
        if (age === 30) {
            return <h1 className="age">{info.age}</h1>
        } else {
            return <h1>age undefiened</h1>
        }
    }

    return(
        <div>
            <h1>Name: {info.name ? info.name : 'name props not found'}</h1>
            <ul>
                <li>{}</li>
            </ul>
            {getAge(info.age)}
        </div>
    );
}

export default Home;