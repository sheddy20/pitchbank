import React from 'react';

export default function Blog () {
    const myinfo = {
        name: 'Shedrack',
        cities: ['New York', 'Sweden', 'san francisco', 'Los Angeles'],
        placesVisited() {
          const newCities = this.cities.map((city) =>{
              return `${this.name} has lived in ${city}`;
          });
          return newCities;
        }
    }
    console.log(myinfo.placesVisited());
    return (
        <div>
            <h1>hello world..</h1>
        </div>
    );
}