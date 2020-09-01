import React, { Component } from 'react';
import axios from "axios";



class Title extends Component {
    state = {
        users: [],
    }
    componentDidMount () {
         axios.get(`https://jsonplaceholder.typicode.com/users`)
              .then(res => {
                  const users = res.data;
                  this.setState({ users })
              });
    }
    render() {
        const info = {
            name: 'shedrack',
            location: 'San Francisco',
            age: 40,
            country: 'United State Of America'
        }
        return (
            <div>
                <h1>users info in listview</h1>
                <ul>
                    {this.state.users.map(m=> <li>{m.name}</li>)}
                </ul>
                <h2>Name: {info.name}</h2>
            </div>
        );
    }
}

export default Title;