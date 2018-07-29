import * as React from "react";
import User from "./User"


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: "John", age: 20 },
                { name: "Abe", age: 30 },
            ],
            title: "Users List"
        };
    }

    handleClick = () => {

        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });

        this.setState({
            users: newState
        })
    }
    render() {
        return <div>
            <button onClick={this.handleClick} >Make 10 years younger</button>
            <br />
            <h1>{this.state.title}</h1>
            <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        </div>
    }
}


export default Users;