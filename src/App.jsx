// @flow

// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "babel-polyfill";

// node_modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from "Templates/Home";
import Away from "Templates/Away";

function App() {
    const HomeComponent = () => <Home message="I'm Home." />;
    const AwayComponent = () => <Away message="I'm away." />;
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/away" component={AwayComponent} />
            </Switch>
        </BrowserRouter>
    );
}

// "document" can technically be null and so flow gives an error to getElementById()'s call.
// $FlowFixMe
ReactDOM.render(<App />, document.getElementById("app"));
