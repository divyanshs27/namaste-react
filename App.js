const heading = React.createElement(
    "h1",
    {id:"heading"},
    "hellooo from react");
const heading1 = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1",{id:"heading"},"child h1"),React.createElement("h2",{id:"heading"},"child h2")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);