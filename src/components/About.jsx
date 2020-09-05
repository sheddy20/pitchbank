import React from 'react'

export default function About () {
    const positive = (x) => {
        return x * x / 2;
    }
    const myAge = (num1, num2) => {
        return num1 - num2;
    }
    const checkAge = myAge(2020, 1998);
    const result = positive(10);
    return (
        <div>
            <h1>{result}</h1>
            <h1>{`you are: ${checkAge} years old...`}</h1>
        </div>
    );
}