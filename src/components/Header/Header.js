import React from "react";
import "./Header.css";
// import '../../bootstrap.min.css';

const Header = (props) => (

    <nav className="navbar">

        <div className="col-md-4">
            <div className="title">{props.children}<a href="/">Clicky Game</a></div>
        </div>
        <div className="col-md-4">
            <div className="message">{props.message}</div>
        </div>
        <div className="col-md-4">
            <div className="score">Score: {props.score} | Highscore: {props.highscore}</div>
        </div>

    </nav>
);

// function Header () {
//     return  (
//         <div className="header">
//           <div className="title"></div>
//           <div className="scores">
//             Score: Highscore: 
//           </div>
//         </div>
//       );
// }
// <nav className="navbar">
//     <div className="header">
//         <div className="col-sm-4">
//             <div className="title">{props.children}</div>
//         </div>
//         <div className="col-sm-4">
//             <div className="centerTitle">test{props.message}</div>
//         </div>
//         <div className="col-sm-4">
//             <div className="scores">
//                 Score: {props.score} Highscore: {props.highscore}
//             </div>
//         </div>
//     </div>
// </nav>
export default Header;