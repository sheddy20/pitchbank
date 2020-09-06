import React from 'react';

export default function Blog () {
    const details = {
        // name: 'shedrack',
        // location: 'Karu LGA',
        employer: 'OSGF',
        minister: 'George Akume',
    }
    return (
        <div>
            <h1>Name: {details.name ? details.name : 'Please type ur name'}</h1>
            <h1>Location: {details.location ? details.location : 'Error 404'}</h1>
        </div>
    );
}