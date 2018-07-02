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
    const HomeComponent = () => <Home message="I'm home!" />;
    const AwayComponent = () => <Away message="I'm away!" />;
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/away" component={AwayComponent} />
            </Switch>
        </BrowserRouter>
    );
}

// This is an example of type casting with flow: https://flow.org/en/docs/types/casting/
// Prettier and flow typecasting do not work well together; prettier is too opinionated on parens.
/* prettier-ignore */ ReactDOM.render(<App />, ((document): any).getElementById("app"));
