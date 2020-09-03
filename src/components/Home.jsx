import React from 'react';

export default function Home () {
    function getName () {
        let name = 'Hal jordan';
        return name;
    }
    const names = getName('Jordan Peterson'); 
    return (
        <div>
           <h1>{names}</h1>
        </div>
    );
}