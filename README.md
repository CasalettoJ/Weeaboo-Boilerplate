# Personal React/Redux Boilerplate - Introduction

I made this for myself because I'm an idiot and need to walk through modern web development with React step by step in order to understand what even the fuck is going on.

This project represents a solid boilerplate for a modern React/Redux web project. It will contain mistakes. Fix them? =)

The following guide will walk through creating the boilerplate project from an empty project. Reading through it will explain these handy skills:

-   Which dependencies are required and what each one does
-   How to add the dependencies and configure them correctly
-   What the hell webpack is even doing how do you set that guy up
-   How to set up a basic "atomic design" pattern for the app
-   Using Storybook to easily develop and test changes to atomic UI components visually
-   Creating a basic web app with React, Redux, and React-Router, using Styled Components for styling and Axios for rest calls. And Animejs for juice.
-   Using scripts to build, bundle, and serve the app in a test environment
-   How to ignore this entire README and just clone the repo to make websites because who cares

The Boilerplate project has the following uncovered topics as TO-DOs:

-   Authorization / Authentication
-   Testing
-   `flow-typed` to get third party flow typings
-   webpack build optimizations

I use yarn. You can use npm instead. It's the same crap who cares.

# Guide Structure

This guide will follow a step-by-step pace for setting up the project, based on setting up and using each required dependency in the project. The dependencies and their groupings are listed here:

## **devDependencies**

**Bundling**

-   `webpack` -- Webpack https://webpack.js.org/concepts/
-   `webpack-dev-server` -- Convenient temporary server for testing
-   `html-webpack-plugin` -- Creates or maps html templates for JS bundles
-   `file-loader` -- Loads assets into output during webpacking (fonts, svgs, etc)

**Transpiling / Polyfill**

-   `babel-core` -- Babel transpiles ES2015+ to another target (ES5)
-   `babel-loader` -- Loader used for webpack integration of babel
-   `babel-runtime` -- Required for storybook
-   `babel-eslint` -- Parser for eslint to handle flowtyping correctly (default parser does not handle typing syntax)
-   `babel-preset-env` -- Preset containing syntax transpiling for ES2015+
-   `babel-preset-react` -- Preset containing React/Flow transpiling
-   `babel-polyfill` (**NOT a devDependency**) -- Polyfill for modern JS functions (like Object.assign)

**Storybook**

-   `@storybook/react` -- https://storybook.js.org/basics/guide-react/ UI Dev Tool
-   `@storybook/addons` -- Required for addons in storybook
-   `@storybook/addon-knobs` -- https://github.com/storybooks/storybook/tree/release/3.4/addons/knobs modifiable props in the storybook editor

**Linting / Code Standards**
(Can use VSCode Extensions alternatively)

-   `eslint` -- Javascript linting utility
-   `eslint-loader` -- ESLint loader for webpack integration
-   `eslint-config-airbnb` -- Airbnb's popular eslint rules\*
    -   Requires Dependencies: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
-   `prettier` -- Code Formatter
-   `eslint-plugin-flowtype` -- For eslint to lint flowtyping correctly
-   `eslint-import-resolver-webpack` -- Allows eslint to detect webpack aliasing import statements to avoid messy relative import paths
-   `eslint-plugin-prettier` -- https://prettier.io/docs/en/eslint.html For prettier + eslint combination
-   `eslint-config-prettier` -- https://prettier.io/docs/en/eslint.html For prettier + eslint combination
-   `flow-bin` -- https://flow.org/en/docs/install/ static typing for JS

**Required Configuration Files**

    webpack.config.js -- Webpack configuration
    .babelrc -- Babel configuration
    .eslintrc -- ESLint configuration
    .prettierrc -- Prettier configuration
    .flowconfig -- Flow configuration

## **dependencies**

**React**

-   `react` -- React.
-   `react-dom` -- React DOM rendering
-   `react-router-dom` -- Routing with React to have separate "pages".

**Redux**

-   `redux` -- Redux.
-   `react-redux` - Redux store connections for react components
-   `redux-thunk` - Dispatch actions inside async functions
-   `redux-logger` - Redux state logging for debugging

**Style and API**

-   `animejs` -- https://github.com/juliangarnier/anime Pretty animation engine
-   `styled-components` -- https://www.styled-components.com/docs/basics#motivation Good styling solution for react components in atomic design pattern
-   `axios` -- REST Api calls

# Table of Contents

-   [Milestone 0: Adding dependencies](#0)

-   [Milestone 1: Configuring a build system and Linting / IDE Extensions](#1)

-   [Milestone 2: React. Routing. Redux.](#2)

-   [Milestone 3: Styled Components and Storybook](#3)

-   [Milestone 4: Optimizations](#4)

-   [Further Reading](#5)

# <a name="0" ></a> Milestone 0: Adding dependencies

Add all dev-dependencies (sans eslint packages)

```
$ yarn add --dev webpack webpack-dev-server html-webpack-plugin file-loader babel-core babel-loader babel-preset-env babel-preset-react babel-eslint @storybook/react @storybook/addons @storybook/addon-knobs eslint eslint-loader prettier eslint-plugin-flowtype eslint-plugin-prettier eslint-config-prettier eslint-import-resolver-webpack flow-bin
```

Determine dependencies for eslint-config-airbnb and add packages

```
$ npm info "eslint-config-airbnb@latest" peerDependencies
```

Install all listed plugins as dev dependencies with specified versions. As of writing these were:

```
$ yarn add --dev  eslint@4.19.1 eslint-plugin-import@2.12.0 eslint-plugin-jsx-a11y@6.0.3 eslint-plugin-react@7.9.1 eslint-config-airbnb@latest
```

Add all other dependencies

```
$ yarn add react react-dom react-router-dom redux react-redux redux-thunk redux-logger animejs styled-components axios babel-polyfill
```

Afterward `package.json` should look something like this:

```
{
    "name": "boilerplate",
    "scripts": {
        "start-dev": "webpack-dev-server",
        "build": "webpack"
    },
    "devDependencies": {
        "@storybook/addon-knobs": "^3.4.8",
        "@storybook/addons": "^3.4.8",
        "@storybook/react": "^3.4.8",
        "babel-core": "^6.26.3",
        "babel-eslint": "^8.2.5",
        "babel-loader": "^7.1.4",
        "babel-preset-env": "^1.7.0",
        "babel-preset-react": "^6.24.1",
        "babel-runtime": "^6.26.0",
        "eslint": "4.19.1",
        "eslint-config-airbnb": "17.0.0",
        "eslint-config-prettier": "^2.9.0",
        "eslint-import-resolver-webpack": "^0.10.1",
        "eslint-loader": "^2.0.0",
        "eslint-plugin-flowtype": "^2.49.3",
        "eslint-plugin-import": "^2.13.0",
        "eslint-plugin-jsx-a11y": "^6.0.3",
        "eslint-plugin-prettier": "^2.6.1",
        "eslint-plugin-react": "^7.9.1",
        "file-loader": "^1.1.11",
        "flow-bin": "^0.75.0",
        "html-webpack-plugin": "^3.2.0",
        "prettier": "^1.13.5",
        "webpack": "^4.12.1",
        "webpack-cli": "^3.0.8",
        "webpack-dev-server": "^3.1.4"
    },
    "dependencies": {
        "animejs": "^2.2.0",
        "axios": "^0.18.0",
        "babel-polyfill": "^6.26.0",
        "react": "^16.4.1",
        "react-dom": "^16.4.1",
        "react-redux": "^5.0.7",
        "react-router-dom": "^4.3.1",
        "redux": "^4.0.0",
        "redux-logger": "^3.0.6",
        "redux-thunk": "^2.3.0",
        "styled-components": "^3.3.3"
    }
}
```

# <a name="1"></a> Milestone 1: Configuring a build system and Linting / IDE Extensions

## Create a webpack file and set up build process

First, create a webpack file at the root directory:

```
$ touch webpack.config.js
```

Add this code to it:

```javascript
/// /webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    build: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src")
};

const webpackConfig = {
    // https://webpack.js.org/concepts/#mode
    mode: "development",

    // https://babeljs.io/docs/en/babel-polyfill
    entry: ["babel-polyfill", path.resolve(paths.src, "App.js")],
    output: {
        path: paths.build,
        filename: "bundle.js"
    },

    module: {
        rules: [
            // https://babeljs.io/docs/en/babel-preset-env (Also see babel-preset-react/babel-preset-flow)
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            // https://github.com/webpack-contrib/file-loader --See for config
            { test: /\.(png|jpg|gif|svg)$/, loader: "file-loader" },
            // https://www.npmjs.com/package/eslint-loader --See "Usage"
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader" }
        ]
    },

    plugins: [
        //https://github.com/jantimon/html-webpack-plugin#options --See for config.
        new HtmlWebpackPlugin()
    ],

    resolve: {
        extensions: [".js", ".jsx"]
    }
};

module.exports = webpackConfig;
```

This webpack configuration file will do a few things when `webpack` is run:

-   Sets the mode to "development" for webpack's internal configuration magic (see comment for more info on modes)
-   Use the files `babel-polyfill` and `src/App.js` as code entrypoints for bundling
-   When bundling, it will follow these rules in this order:

    -   First it will run all js / jsx files through eslint (with rules from `.eslintrc` set up later -- including `prettier` and `flow` integration.)
    -   Second, it will use `file-loader` to package the local assets used in the source while bundling
    -   Last, it will bundle js/jsx files into the output specified (`bundle.js`) using `babel-loader`, configured in `.babelrc`. This will turn the modern javascript into more browser-compatible code.

-   It uses the plugin HtmlWebpackPlugin to automatically generate a stub html file to place the `bundle.js` in for distribution. It should be configured to use an actual template.
-   Imports will be resolved with js/ jsx extensions.

## Configuring Utilities

With webpack all set up, the following need to be configured:

-   Babel
-   ESLint
-   Prettier
-   Flow

**Babel**

Create the babel config file at root

```
$ touch .babelrc
```

Add this to the file:

```json
{
    "presets": ["env", "react"]
}
```

"env" is the ES2015+ preset and "react" is for react and flow, so flow is also included here. `babel-loader` will use this file when webpack builds a bundle.

**ESLint**

Create the ESLint config file at root

```
$ touch .eslintrc
```

Add this to the file:

```json
{
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier", "flowtype"],
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "rules": {
        "no-console": "off",
        "prettier/prettier": "off",
        "react/jsx-indent": "off",
        "react/jsx-one-expression-per-line": "off"
    }
}
```

`env` with browser set to true ensures that global browser variables (document, window, ...) are available to the linter.
The parser is required to handle flowtyping syntax in eslint. Otherwise you'll get complaints about `:` etc. `flowtype` is handled as a plugin here.
Anything that says `prettier` is used to integrate prettier with eslint via plugin so that eslint doesn't complain about prettier rule inconsistencies while linting. It uses the `eslint-*-prettier` dependencies added earlier (https://prettier.io/docs/en/eslint.html). `"airbnb"` enables the `eslint-config-airbnb` dependency added as a basic style guide.

It may have some rules you disagree with when you edit. You can edit it later to add a 'rules' object to change individual rules:

```js
    "rules": {
        "rule-name": "value" // (e.g.'no-nested-loops': 'off')
    }
```

Finally, install the `ESLint` extension for VSCode. It uses the .eslintrc file as a configuration file to integrate with VSCode's UI.

You'll also want to make sure eslint doesn't lint your build folder. Create a `.eslintignore` file and add the following:

```
build/*
```

**Flow**

Add the Flow config file at root

```
$ touch .flowconfig
```

That's it. The `.flowconfig` file helps Flow find the root directory to start parsing in. Babel's flow preset is included in the react preset defined earlier so it's already a part of the webpack -> babel -> bundle.js flow.

You can add this to make sure flow ignores any bundled files:

```
[ignore]
./build/.*
```

Install the `Flow Language Support` VSCode Extension to integrate flow static typechecking into the IDE in real time.

Next, you'll have to tell the IDE Extension to use the flow bin from node_modules. Add this to the VSCode `User Settings`:

```json
"flow.useNPMPackagedFlow": true
```

you'll also need to install flow-bin globally unfortunately:

```
npm install -g flow-bin
```

**Prettier**

Prettier is best used when integrated with the IDE, so install `Prettier - Code Formatter` for VS Code. However, there is a prettier CLI that you can use instead if you want.
**Make sure to edit your VSCode user config settings** to add this: `"editor.formateOnSave": true`. This will let the extension automatically format your code when you save based on your prettier rules.

Make the config file at root

```
$ touch .prettierrc
```

Prettier has a lot of default code style options listed here https://prettier.io/docs/en/options.html which can be overwritten in the config file. The `.prettierrc` file should be populated by personal preference. For example, mine looks like this:

```json
{
    "tabWidth": 4,
    "printWidth": 120
}
```

Because I think the default 2 spaces per tab is too small. I'm blind.

That's it! The directory should look like this right now:

```
.
..
node_modules
.babelrc
.eslintignore
.eslintrc
.flowconfig
.prettierrc
package.json
webpack.config.js
yarn.lock
```

## Testing the build process

Add the entrypoint specified in the `webpack.config.js` file:

```
$ mkdir src && touch src/App.js
```

Add some very basic ES2016 code to the file:

```js
// @flow

// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "babel-polyfill";

console.log("Hello World!");

// array.prototype.includes() is an ES7 feature.
// Test its transpiling and polyfill along with arrow functions via the IIFE:
(() => {
    const numbers = [1, 2, 3, 4];
    if (numbers.includes(3, 1)) {
        console.log("ES7 working.");
    }
})();
```

Instead of manually running webpack all the time, open `package.json` and add these two scripts:

```json
...

  "scripts": {
    "start-dev": "webpack-dev-server",
    "build": "flow check && webpack"
  },
...
```

Run the following command:

```
$ yarn build
```

This script will check for flow errors, and if there are none it will run webpack to bundle.
if you get the following warning about needing a webpack-cli, that's because I have a webpack cli installed globally but you might not. If you see this:

```
One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
   The original webpack full-featured CLI.
 - webpack-command (https://github.com/webpack-contrib/webpack-command)
   A lightweight, opinionated webpack CLI.
We will use "yarn" to install the CLI via "yarn add -D".
Which one do you like to install (webpack-cli/webpack-command):
```

just use `webpack-cli`. It will add the dependency to your project.

When it's done, you should see an output like this:

```
Hash: 08104d827bb5f17ddbac
Version: webpack 4.12.1
Time: 2709ms
Built at: 2018-06-25 21:40:37
     Asset       Size  Chunks             Chunk Names
 bundle.js    461 KiB    main  [emitted]  main
index.html  182 bytes          [emitted]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {main} [built]
[./src/App.js] 405 bytes {main} [built]
[0] multi babel-polyfill ./src/App.js 40 bytes {main} [built]
    + 326 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {0} [built]
    [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
✨  Done in 82.64s.
```

`index.html`, `bundle.js` were created in a folder named `build`. If you got errors. ... yeesh. Good luck. Do it again. Like all of it.

To test it, run:

```
$ yarn start-dev
```

Then open a browser to `localhost:8080`. Look in the console and you should see:

```
Hello world!
ES7 working.
```

The list of depdendencies now looks like this:

-   ~~webpack~~
-   ~~webpack-dev-server~~
-   ~~html-webpack-plugin~~
-   ~~file-loader~~
-   ~~babel-core~~
-   ~~babel-loader~~
-   ~~babel-runtime~~
-   ~~babel-preset-env~~
-   ~~babel-preset-react~~
-   ~~babel-eslint~~
-   ~~babel-polyfill~~
-   `@storybook/react`
-   `@storybook/addons`
-   `@storybook/addon-knobs`
-   ~~eslint~~
-   ~~eslint-loader~~
-   ~~eslint-config-airbnb~~
-   ~~prettier~~
-   ~~eslint-plugin-flowtype~~
-   ~~eslint-plugin-prettier~~
-   ~~eslint-config-prettier~~
-   `eslint-import-resolver-webpack`
-   ~~flow-bin~~
-   `react`
-   `react-dom`
-   `react-router-dom`
-   `redux`
-   `react-redux`
-   `redux-thunk`
-   `redux-logger`
-   `animejs`
-   `styled-components`
-   `axios`

# <a name="2"></a> Milestone 2: React, Routing, Redux.

## Setting up React

Delete `src/App.js` and create `src/App.jsx` in its place, then add this to the file:

```javascript
// @flow

// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

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
```

add a new file titled `index.html` that will serve as a base template:

```
$ touch src/index.html
```

Add this basic HTML to the file:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Boilerplate</title>
</head>

<body>
    <div id="app">
    </div>
</body>

</html>
```

`HtmlWebpackPlugin` can be configured to use this template instead of creating one from scratch. It has the `<div id="app">` element that ReactDOM renders the <App /> React element to -- the base of the React app.

Open `webpack.config.js` and update it to include the following:

```js
/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    build: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src")
};

const webpackConfig = {
    mode: "development",
    entry: ["babel-polyfill", path.resolve(paths.src, "App.jsx")],
    output: {
        path: paths.build,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            // https://github.com/webpack-contrib/file-loader --See for config
            { test: /\.(png|jpg|gif|ttf|otf|svg)$/, loader: "file-loader" },
            // https://www.npmjs.com/package/eslint-loader --See "Usage"
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader" }
        ]
    },
    plugins: [
        //https://github.com/jantimon/html-webpack-plugin#options --See for config.
        new HtmlWebpackPlugin({
            template: path.join(paths.src, "index.html")
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
};

module.exports = webpackConfig;
```

The `HtmlWebpackPlugin` creation has been updated to use the `src/index.html` file.

Run the build command and serve the test file:

```
$ yarn build && yarn start-dev
```

You shouldn't see any errors, just lots of green success messages. Feels good, man.
Open up a browser and go to `localhost:8080` and you'll see the React App's "Hello World" message showing on-screen.

Now the following dependencies have been implemented:

-   `eslint-import-resolver-webpack`
-   `@storybook/react`
-   `@storybook/addons`
-   `@storybook/addon-knobs`
-   ~~react~~
-   ~~react-dom~~
-   `react-router-dom`
-   `redux`
-   `react-redux`
-   `redux-thunk`
-   `redux-logger`
-   `animejs`
-   `styled-components`
-   `axios`

## Project Folder Setup and Atomic Design

**Directory Structure**

Before setting up React-router, I'm going to go ahead and set up the folder structure for the atomic design boilerplate right now so that we can use React Router to route between two pages.

```
$ mkdir -p src/components/atoms src/components/molecules src/components/organisms src/components/templates/Home src/components/templates/Away && touch src/components/atoms/.placeholder src/components/molecules/.placeholder src/components/organisms/.placeholder src/components/templates/Home/index.jsx src/components/templates/Away/index.jsx
```

Now the directory structure should look something like this:

```
boilerplate/
├── .vscode/
├── build/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   └── .placeholder
│   │   ├── molecules/
│   │   │   └── .placeholder
│   │   ├── organisms/
│   │   │   └── .placeholder
│   │   └── templates/
│   │       ├── Home/
│   │       │   └── index.jsx
│   │       └── Away/
│   │           └── index.jsx
│   ├── App.jsx
│   └── Index.html
├── .babelrc
├── .eslintignore
├── .eslintrc
├── .flowconfig
├── .gitignore
├── .prettierrc
├── package.json
├── webpack.config.js
└── yarn.lock
```

Super simple. Read more about atomic design on google or here http://bradfrost.com/blog/post/atomic-web-design/ and http://atomicdesign.bradfrost.com/chapter-1/ but basically it's just a way to organize components in a way that encourages reusability and I think it'll lend itself well to React. The `.placeholder` files are to keep the directories tracked with git.

With that done, a basic react-router setup using BrowserRouter can be added to App.jsx. There will be two pages in this boilerplate project: `Home` and `Away`. Each has a folder under `templates` in components as they represent remplates for react to render into the DOM as pages with prop data populated by Redux. The other folders `atoms`, `molecules`, and `organisms` are best populated subjectively trying to follow the principals outlined in the above link.

**TL;DR:** If it can be expressed in one or very few html tags it is likely an atom. If it cannot, it likely can be split up into multiple atoms. The example the write-up gives is this:

Label, Button, Input: atoms
Login form combining the three: molecule
Header component with login form and links for nav: organism
Page that displays all content including the header: template
Page populated with data and rendered: page

It'll make more sense when Redux is added and components need to be added to display the store data.

**Import Aliases**

Setting up and maintaining good import aliases is a good idea! Struggling with relative import paths is a stupid don't do it just do this and maintain it; it's worth it I promise.

Instead of having to import the `Away` component as `../../components/templates/Away` or some other stupid nonsense depending on file location, I'm going to set up import aliases in `webpack` and `flow`, and help `ESlint` understand webpack's aliases to not report errors.

Open up `webpack.config.js` and replace the `paths` and `resolve` objects with this:

```javascript
const paths = {
    build: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
    components: path.resolve(__dirname, "src/components")
};

. . .

resolve: {
    alias: {
        Base: paths.src,
        Atoms: path.resolve(paths.components, "atoms/"),
        Molecules: path.resolve(paths.components, "molecules/"),
        Organisms: path.resolve(paths.components, "organisms/"),
        Templates: path.resolve(paths.components, "templates/")
    },
    extensions: [".js", ".jsx"]
}
```

This will set up an alias for each component path and one for the root `src` folder (useful for importing base level files like constants, configs, etc). Now you can import `Away` like this:

```javascript
import Away from "Templates/Away";
```

No matter what file you are trying to import into, you can just use the same import code. I cannot stress enough **how useful it is to not have to waste brainpower on figuring out relative import paths**.

Now that webpack is aliasing those import paths, `flow` and `ESlint` need to be able to understand the aliases so they don't report errors in importing nonexistent code.

Open `.eslintrc` and replace the contents with this:

```json
{
    "extends": ["airbnb", "prettier"],
    "plugins": ["flowtype", "prettier"],
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "rules": {
        "no-console": "off",
        "prettier/prettier": "off",
        "react/jsx-indent": "off",
        "react/jsx-one-expression-per-line": "off"
    },
    "settings": {
        "import/resolver": "webpack"
    }
}
```

The `settings` object was added, setting the import resolver to webpack defaults. This works because of the `eslint-import-resolver-webpack` package added at the beginning step. (read more about eslint import resolvers here: https://github.com/benmosher/eslint-plugin-import#resolvers)

Finally, open `.flowconfig` and replace the contents with this:

```
[ignore]
./build/.*

[options]
module.name_mapper='^Base\(\/?.*\)$' -> '<PROJECT_ROOT>/src/\1'
module.name_mapper='^Atoms\(\/?.*\)$' -> '<PROJECT_ROOT>/src/components/atoms/\1'
module.name_mapper='^Molecules\(\/?.*\)$' -> '<PROJECT_ROOT>/src/components/molecules/\1'
module.name_mapper='^Organisms\(\/?.*\)$' -> '<PROJECT_ROOT>/src/components/organisms/\1'
module.name_mapper='^Templates\(\/?.*\)$' -> '<PROJECT_ROOT>/src/components/templates/\1'
```

It looks like a hot mess, I know. But it's not that complicated: `module.name_mapper=` sets a regular expression string to an alias of another string -- in this case, these five options lines are mirroring what was added in `webpack.config.js`.

**Enabling correct intellisense and click-through in VSCode**

Once imports have been aliased, you'll need to add a `jsconfig.json` file at the root of the project folder:

```
$ touch jsconfig.json
```

Then, add this to the json file:

```json
{
    "compilerOptions": {
        "target": "esnext",
        "jsx": "react",
        "module": "commonjs",
        "allowSyntheticDefaultImports": true,
        "baseUrl": ".",
        "paths": {
            "Base/*": ["./src/*"],
            "Atoms/*": ["./src/components/atoms/*"],
            "Molecules/*": ["./src/components/molecules/*"],
            "Organisms/*": ["./src/components/organisms/*"],
            "Templates/*": ["./src/components/templates/*"]
        }
    },

    "exclude": ["node_modules", "build", ".vscode"]
}
```

This will let the VSCode intellisense system work with the aliased imports to generate intellisense for props and click-through functionality for ctrl+clicking an import's name. (Read more here https://code.visualstudio.com/docs/languages/jsconfig)

**Every time you add a new alias, add it to the `webpack.config.js` alias list, the `.flowconfig` options list, and `jsconfig.json`'s paths.**

Whenever you want to create a new alias (e.g. `API` or `Assets`), you will have to add it in all three places to get the linting and intellisense to play nicely with your expected keyboard shortcuts. Yeah it's kind of a pain in the ass, but it's still so much better than not setting up aliasing. Just do it.

And that's it for the project structure for now! If eslint/flow still give you any shit about imports, you might need to just restart your IDE.

## Back to React Router...

Let's set up a basic route between two pages.

Add this code to the `Away/index.jsx` file:

```js
// @flow
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    message: string
};

function Away(props: Props) {
    const { message }: { message: string } = props;
    return (
        <div>
            {message}
            <br />
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default Away;
```

Add something similar to `Home/index.jsx`:

```js
// @flow
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    message: string
};

function Home(props: Props) {
    const { message }: { message: string } = props;
    return (
        <div>
            {message}
            <br />
            <Link to="/away">Go Away</Link>
        </div>
    );
}

export default Home;
```

Finally, edit `App.jsx` to serve as the top-level navigation component of `react-router-dom`, which will switch what is rendered on the page in real-time based on navigation from `Link` components in the library.

```js
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
```

One last thing to edit in `webpack.config.js`:

```js
    . . .
    devServer: {
        contentBase: paths.build,
        publicPath: "/",
        historyApiFallback: true
    },
    . . .
```

Add this `devServer` object back in; the `historyApiFallback` will help `webpack-dev-server` set up initial routing correctly when the app loads from a refresh, hot-reload, etc.

After that's done, build and launch the site to test:

```
$ yarn build && yarn start-dev
```

Open a browser to `localhost:8080` and you'll see the message `I'm home!` with a link to go to `Away`. Click it and you can navigate back and forth.

That's it! That's react-router! ...ish. See further reading to learn how to use it.

## Setting up Redux

Not going to explain a ton about what Redux is because you can just go read about it if you don't know, just going to set it up here. It's basically a global immutable state for the app. How redux is implemented is subject to personal opinion to some extent, but for this boilerplate I'm going to try and use redux for all state in the app, leaving most if not all React components as functional components with locally scoped redux store state data. If you don't like the approach, try something else I'm not your mom I'm not in charge of you.

# <a name="5"></a> Further Reading

**Good Articles**

-   https://github.com/webpack/webpack/issues/5718 airbnb webpack optimizations

-   http://atomicdesign.bradfrost.com/chapter-1/ Atomic web design

-   https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/ Solved by Flexbox - flexbox solutions to layout problems

-   https://developers.redhat.com/blog/2017/11/15/best-practices-react-redux-web-application-development/ Suggestions for redux best practices

-   https://www.thegreatcodeadventure.com/building-a-simple-crud-app-with-react-redux-part-1/ - What it says

-   https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md - React Architecture best practices

-   https://blog.iansinnott.com/getting-started-with-flow-and-webpack/

-   https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9

**Docs**

-   https://github.com/juliangarnier/anime AnimeJs Docs

-   https://redux.js.org/basics Redux docs

-   https://www.styled-components.com/docs/basics#installation Styled Components docs

-   https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/basic-components.md Basics of react router's browserrouter, etc.

-   https://github.com/flowtype/flow-typed How to use flow-typed to set up flow typings for third party libraries.

-   https://reacttraining.com/react-router Deep dive into react-router

-   https://www.npmjs.com/package/eslint-plugin-flowtype#eslint-plugin-flowtype-configuration flowtype eslint plugin configuration details

-   https://code.visualstudio.com/docs/languages/jsconfig jsconfig.json configuration opts
