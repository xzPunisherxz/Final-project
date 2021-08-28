import React, { Component } from "react";

import { Link } from "react-router-dom"; 

export class UsersList extends Component {
    state = {
        users: [],
    }
    componentDidMount() {
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {
            this.setState({ users });
        });
    }
    render () {
        const { users } = this.state;

        return (
            <div>
                <Link to="/create">Создать пользователя</Link>
                <ul>
                    {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            </div>
        )
    }
}