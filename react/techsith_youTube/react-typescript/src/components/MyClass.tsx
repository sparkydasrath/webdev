import * as React from 'react';

export interface IMyClassProps {
    name?: string;
    isBoolProp: boolean;
}

export interface IMyClassState {
    age: number;
}

class MyClass extends React.Component<IMyClassProps, IMyClassState>{

    public static defaultProps: Partial<IMyClassProps> = {
        name: "default name",
    };


    public state = {
        age: 21
    };



    public render() {
        return (
            <div >
                <h1>{this.props.name}</h1>
                <h1>{this.state.age}</h1>
            </div>
        );
    }
}

export default MyClass;
