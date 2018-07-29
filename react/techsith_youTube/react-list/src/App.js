import React, { Component } from 'react';
import './App.css';
import User from "./User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: "sdsa", name: "user 1", age: 1 },
        { id: "losh", name: "user 2", age: 2 },
        { id: "oews", name: "user 3", age: 3 },
      ]
    }

  }

  deleteUser = (index, e) => {
    const users = this.state.users.slice();
    users.splice(index, 1);
    this.setState({ users: users });
  }

  changeUserEvent = (userId, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === userId;
    });

    console.log(this.state.users);
    const user = Object.assign({}, this.state.users[index]);
    user.name = e.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = user;
    this.setState({ users: users });
    console.log(this.state.users);
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) => {
              return (
                <User
                  age={user.age}
                  key={user.id}
                  deleteEvent={this.deleteUser.bind(this, index)}
                  changeUser={this.changeUserEvent.bind(this, user.id)}>
                  {user.name}
                </User>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
