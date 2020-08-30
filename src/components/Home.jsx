import React from 'react';

function Home () {

    let todos = [];

    todos.push('wash your clothes');
    todos.push('go to church');
    todos.push('join react developers forum');
    todos.push('join linkeind');

    todos.forEach(function(index, todo){
        console.log(`${index++} ${todo}`)
    });

    return (
        <div>
            <stron>Wolfgang</stron>
            <hr></hr>
            <ul>
                <li>{}</li>
            </ul>
        </div>
    );
}

export default Home;