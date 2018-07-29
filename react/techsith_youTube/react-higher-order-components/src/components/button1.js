import React from 'react';

const styles = {
    default:
    {
        backgroundColor: "#737373",
        color: "#eae8e8",
        padding: "10px"
    },
    disabled: {
        backgroundColor: "#9c9c9c",
        color: "#c7c6c6",
    }
};


const ButtonOne = (props) => {
    let _styles = { ...styles.default };
    if (props.disabled) {
        _styles = { ...styles, ...styles.disabled };
    }

    return (<button style={_styles}>Button one</button>);
}

export default ButtonOne;