import React, { Component } from 'react';
import Axios from "axios";


class Title extends Component {
    state = {
        users: [],
    }
    componentDidMount() {
        Axios.get(`https://jsonplaceholder.typicode.com/users`)
             .then(res =>{
                 const users = res.data;
                 this.setState({ users });
             });
    }
    render() {
        return (
            <div>
                <ol>
                    {this.state.users.map(m=> <li>{m.name}</li>)}
                </ol>
            </div>
        );
    }
}

export default Title;