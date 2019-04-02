import React from "react";
import "./Header.css";

const Header = (props) => (
    <div className="row">
        <div className="header">
            <div className="title">{props.children}</div>
            <div className="scores">
                Score: {props.score} Highscore: {props.highscore}
            </div>
        </div>
    </div>
);

// function Header (props) {
//     return  (
//         <div className="header">
//           <div className="title">{props.children}</div>
//           <div className="scores">
//             Score: {props.score} Highscore: {props.highscore}
//           </div>
//         </div>
//       );
// }

export default Header;