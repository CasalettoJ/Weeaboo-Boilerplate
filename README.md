# Personal React/Redux Boilerplate - Introduction

I made this for myself because I'm an idiot and need to walk through modern web development with React step by step in order to understand what even the fuck is going on.

This project represents a solid boilerplate for a modern React/Redux web project. It will contain mistakes. Fix them? =)

The following guide will walk through creating the boilerplate project from an empty project. Reading through it will explain these handy skills:

-   Which dependencies are required and what each one does
-   How to add the dependencies and configure them correctly
-   What the hell webpack is even doing how do you set that guy up
-   How to set up a basic "atomic design" pattern for the app
-   Using Storybook to easily develop and test changes to atomic UI components visually
-   Creating a basic web app with React, Redux, and React-Router, using Styled Components for styling and Axios for rest calls.
-   Using scripts to build, bundle, and serve the app in a test environment
-   How to ignore this entire README and just clone the repo to make websites because who cares

The Boilerplate project has the following uncovered topics as TO-DOs:

-   Authorization / Authentication
-   Testing

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

-   [Milestone 2: Basic React and Redux](#1)

# <a name="0" ></a> Milestone 0: Adding dependencies

Add all dev-dependencies (sans eslint packages)

```
$ yarn add --dev webpack webpack-dev-server html-webpack-plugin file-loader babel-core babel-loader babel-preset-env babel-preset-react @storybook/react @storybook/addons @storybook/addon-knobs eslint eslint-loader prettier eslint-plugin-prettier eslint-config-prettier flow-bin
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
  "scripts": {},
  "devDependencies": {
    "@storybook/addon-knobs": "^3.4.8",
    "@storybook/addons": "^3.4.8",
    "@storybook/react": "^3.4.8",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "babel-runtime": "^6.26.0",
    "eslint": "4.19.1",
    "eslint-config-airbnb": "17.0.0",
    "eslint-config-prettier": "^2.9.0",
    "eslint-plugin-import": "2.12.0",
    "eslint-plugin-jsx-a11y": "6.0.3",
    "eslint-plugin-prettier": "^2.6.1",
    "eslint-plugin-react": "7.9.1",
    "file-loader": "^1.1.11",
    "flow-bin": "^0.75.0",
    "html-webpack-plugin": "^3.2.0",
    "prettier": "^1.13.5",
    "webpack": "^4.12.1",
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
    entry: ["babel-polyfill", path.resolve(paths.src, "app.js")],
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
-   Use the files "babel-polyfill" and "/src/app.js" as code entrypoints for bundling
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
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error"
    }
}
```

Anything that says `prettier` is used to integrate prettier with eslint via plugin so that eslint doesn't complain about prettier rule inconsistencies while linting. It uses the `eslint-*-prettier` dependencies added earlier (https://prettier.io/docs/en/eslint.html). `"airbnb"` enables the `eslint-config-airbnb` dependency added as a basic style guide.

It may have some rules you disagree with when you edit. You can edit it later to add a 'rules' object to change individual rules:

```js
    "rules": {
        "rule-name": "value" // (e.g.'no-nested-loops': 'off')
    }
```

Finally, install the `ESLint` extension for VSCode. It uses the .eslintrc file as a configuration file to integrate with VSCode's UI.

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
$ mkdir src && touch src/app.js
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
    "build": "webpack"
  },
...
```

Run the following command:

```
$ yarn build
```

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
[./src/app.js] 405 bytes {main} [built]
[0] multi babel-polyfill ./src/app.js 40 bytes {main} [built]
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
-   ~~babel-polyfill~~
-   `@storybook/react`
-   `@storybook/addons`
-   `@storybook/addon-knobs`
-   ~~eslint~~
-   ~~eslint-loader~~
-   ~~eslint-config-airbnb~~
-   ~~prettier~~
-   ~~eslint-plugin-prettier~~
-   ~~eslint-config-prettier~~
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

# <a name="2"></a> Milestone 2: Basic React and Redux

// TODO
