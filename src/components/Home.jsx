import React, { Component } from 'react';
import Axios from "axios";

class Home extends Component {
    state = {
        todos: [],
    }

    componentDidMount() {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
             .then(res =>{
                 const todos = res.data;
                 this.setState({ todos });
             });
    }
    render() {
        return(
            <div>
                <ol>
                    {this.state.todos.map(t=> <li>{t.name}</li>)}
                </ol>
            </div>
        );
    }
}

export default Home;