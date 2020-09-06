import React from 'react'

export default function About () {
    const address = {
        name: 'shedrack',
        last: 'Abel',
        age: 45,
        isMarried: true,
        country: 'Nigeria',
    }
    const {name, last, age, isMarried, country} = address;
    const getFullName = (name) => {
        return name.split(' ')[1];
    }
    const names = getFullName('Mike Smith');

    const getNames = (myName) => myName.split(' ')[1];
    const getMyName = getNames('Arash Ferdowsi');

    const fullName = 'Abel Shedrack';
    let lastName;
    if (fullName) {
        lastName = fullName.split(' ')[1];
    }
    return (
        <div>
           <h1>{`${name} ${last} ${age} ${country} ${isMarried}`}</h1>
            <h1>{lastName}</h1>
            <h1>{getMyName}</h1>
            <h1>{names}</h1>
        </div>
    );
}