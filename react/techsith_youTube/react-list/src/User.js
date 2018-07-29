import React from "react";

const User = (props) => {
    return (
        <li>
            <span>Name: {props.children} | Age: {props.age}</span>
            <input type="text" onChange={props.changeUser} value={props.children} />
            <button onClick={props.deleteEvent}>Delete</button>

        </li>
    );
}

export default User;