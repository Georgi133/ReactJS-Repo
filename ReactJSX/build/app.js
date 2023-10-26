
var rootElement = document.querySelector('#root'); //root Dom element

//this way we tranfer dom element to react element
var root = ReactDOM.createRoot(rootElement); //root REACT element

// const headingElement = React.createElement('h1', null, 'Hello from React');

// const secondEelement = React.createElement('h2', null, 'Something');
// const headerElement = React.createElement('header', null, headingElement, secondEelement)

//Use JSX syntax

var Heading = function Heading(props) {
    return React.createElement(
        "h1",
        { className: "heading" },
        "Hello from ",
        props.title,
        "!"
    );
};

var headerElement = React.createElement(
    "header",
    null,
    React.createElement(Heading, { title: "Kufte" }),
    React.createElement(
        "h2",
        null,
        "Slogan here"
    )
);

root.render(headerElement);