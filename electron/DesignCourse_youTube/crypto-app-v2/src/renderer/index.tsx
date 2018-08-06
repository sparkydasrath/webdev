import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./Components/App";
import "./styles.scss";

ReactDOM.render(
    <div className="index">
        <h1>Entry of electron app</h1>
        <App />
    </div>, document.getElementById("root") as HTMLElement,
);