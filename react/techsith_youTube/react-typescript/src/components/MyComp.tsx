import * as React from 'react';

interface IMyCompProps {
    name: "comp props" | "comp props 2",
}

const MyComp = (props: IMyCompProps) => {
    return (<div>{props.name}</div>);
};

export default MyComp;
