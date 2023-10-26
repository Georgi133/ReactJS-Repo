
const rootElement = document.querySelector('#root');//root Dom element

//this way we tranfer dom element to react element
const root = ReactDOM.createRoot(rootElement); //root REACT element

// const headingElement = React.createElement('h1', null, 'Hello from React');

// const secondEelement = React.createElement('h2', null, 'Something');
// const headerElement = React.createElement('header', null, headingElement, secondEelement)

//Use JSX syntax

const Heading = (props) => {
    return <h1 className="heading">Hello from {props.title}!</h1>;
}

const headerElement = (
    <header>
        <Heading title="Kufte" />
        <h2>Slogan here</h2>
    </header>
);


root.render(headerElement);