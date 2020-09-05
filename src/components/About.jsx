import React from 'react'

export default function About () {
    var fullName = 'Abel Shedrack';
    if (fullName) {
        var firstName = fullName.split(' ')[1];
        return <h1>{firstName}</h1>
    }
    return (
        <div>
            <h1>h</h1>
        </div>
    );
}