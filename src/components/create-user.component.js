import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    //constructor with this bindings
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: ''
        };
    }

    // methods to change the username and submit the form
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
        };
        console.log(newUser);

        // axios.post method sends an HTTP POST request to the backend
        // endpoint http://localhost:3000/users/add. This endpoint is 
        // expecting a JSON object in the request body so we passed in 
        // the newUser object as a second argument.
        axios.post('http://localhost:3000/users/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}