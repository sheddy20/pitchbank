import React from 'react';

export default function Blog () {
    const users = {
        name: 'Shedrack',
        placesVisited: ['Upsala', 'Ontario', 'lagos', 'Amsterdam'],
        placesLived: function () {
            return <div>
                <h1>{`${this.name}`}</h1>
                <h1>{`${this.placesVisited}`}</h1>
            </div>
        }
    }
    const details = users.placesLived();
    return (
        <div>
            <h1>{details}</h1>
            <h1>Hello world</h1>
        </div>
    );
}