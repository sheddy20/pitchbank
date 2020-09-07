import React from 'react';

export default function Blog() {
    const getfullName = (name) => {
        return name.split(' ')[0];
    }

    const getSecondName = (newName) => newName.split(' ')[0];
    const checkSecond = getSecondName('Lebron James')
    const names = getfullName('Anthony davis');
    return (
        <div>
            <h1>{checkSecond}</h1>
            <h1>{names}</h1>
            <h1>hello world</h1>
        </div>
    );
}