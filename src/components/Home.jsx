import React from 'react';

export default function Home () {
    const info = {
        name: 'Drew Barrymore',
        title: 'Miss universe',
        awards: ['Grammy', 'Emmy awards', 'Oscar', 'E choice'],
    }
    return (
        <div>
            {info.name && <p>{info.name}</p>}
            {info.title && <p>{info.title}</p>}
            <p>{info.awards.length < 0 ? 'Awards is correct' : 'WRONG!!'}</p>
        </div>
    );
}