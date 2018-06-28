// @flow

// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "babel-polyfill";

// node_modules
import React from "react";
import ReactDOM from "react-dom";

// Components
import Home from "templates/Home";
import Away from "templates/Away";

type Props = {
    message: string
};

function App(props: Props) {
    const { message }: { message: string } = props;
    return <div>{message}</div>;
}

// "document" can technically be null and so flow gives an error to getElementById()'s call.
// $FlowFixMe
ReactDOM.render(<App message="Hello, World" />, document.getElementById("app"));