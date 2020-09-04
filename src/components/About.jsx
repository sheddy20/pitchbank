import React, { useState } from 'react';

export default  function Body () {
    function addNumbers(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }
    const number = addNumbers(10, 5);
    const [setCounter] = useState(addNumbers(10, 10));
    return (
        <div>
            <input  placeholder="add number 1" />
            <input  placeholder="add number 2" />
            <h1>{number}</h1>
            <button onClick={()=> setCounter(addNumbers(10, 10))}>
                Press Button..
            </button>
        </div>
    );
}