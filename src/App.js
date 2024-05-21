import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "hellooo from react");
// const heading1 = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//     "div",
//     {id:"child"},
//     [React.createElement("h1",{id:"heading"},"child h1"),React.createElement("h2",{id:"heading"},"child h2")]
//     )
// );

// //JSX
// const jsxHeading = <h1 className="head">Namaste react using JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //root.render(jsxHeading);
// const num=1;

// //react functional component
// const HeadingComponentChild = () =>(
//         <h1 className="child">Namaste react functional Child component
//         </h1>
//     );
// const HeadingComponent = () =>(
// <div className="container">
// {console.log(HeadingComponentChild )}
//     <HeadingComponentChild/>
//     <h1 className="Heading">Namaste react functional 
//     component</h1>
// </div>
// );
// //const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);