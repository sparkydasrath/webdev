import React from "react";
import Child from "./child";
const Parent = (props) => {
    return (
        <div>
            <Child {...props} />
        </div>
    );
}

export default Parent;