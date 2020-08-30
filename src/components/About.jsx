import React from 'react';

function About(){
    const appdetails = {
        title: 'Indecision App',
        subtitle: 'Indecision',
        developer: 'Abel Shedrack Nicholas',
        locationArea: 'Andela lagos Nigeria',
    }
    return (
        <div>
            <h1>App Details</h1>
            <hr></hr>
            <h1>{appdetails.locationArea}</h1>
            <h2>{appdetails.title}</h2>
            <h3>{appdetails.subtitle}</h3>
            <h4>{appdetails.developer}</h4>
        </div>
    );
}

export default About;