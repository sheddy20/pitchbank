import React, { Component } from 'react';
import Axios from 'axios';

class About extends Component {

    state = {
        comments: [],
    }
    componentDidMount() {
        Axios.get(`https://jsonplaceholder.typicode.com/comments`)
             .then(res => {
                 const comments = res.data;
                 this.setState({ comments });
             })
    }
    render() {
        return (
            <div>
                <ol>
                    {this.state.comments.map(com => <li>{com.name}</li>)}
                </ol>
            </div>
        );
    }
}

export default About;