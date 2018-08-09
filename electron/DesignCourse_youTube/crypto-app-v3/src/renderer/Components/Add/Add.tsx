import * as React from "react";
import * as ReactDOM from "react-dom";
import "../App.css";
import "./Add.css";
// import electron from "electron";
// import { remote, ipcRenderer } from "electron";


function Add() {
    return (

        <div>
            <p className="notify">Notify me when BTC reaches...</p>

            <div className="row2">
                <div>
                    <input type="text" placeholder="USD" id="notifyVal" />
                </div>
                <button id="updateBtn">Update</button>
            </div>

            <a href="" id="closeBtn">Close Window</a>
            <br />
        </div>

    );
}
// export class Add extends React.Component {
//     constructor(props: Readonly<{}>) {
//         super(props);

//     }
//     public render() {
//         return (

//             <div>
//                 <p className="notify">Notify me when BTC reaches...</p>

//                 <div className="row2">
//                     <div>
//                         <input type="text" placeholder="USD" id="notifyVal" />
//                     </div>
//                     <button id="updateBtn">Update</button>
//                 </div>

//                 <a href="" id="closeBtn">Close Window</a>
//                 <br />
//             </div>

//         );
//     };
// }


ReactDOM.render(
    <Add />, document.getElementById('addRoot')
);