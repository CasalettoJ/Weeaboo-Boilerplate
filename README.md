Build:
    Required Files:
        webpack.config.js
        .babelrc
        .eslintrc
        .prettierrc
        .flowconfig
    
    Bundling
    ______________________________
    webpack^                      |  Webpack https://webpack.js.org/concepts/
    webpack-dev-server^           |  Convenient temp dev server for dist/
    html-webpack-plugin^          |  Creates / maps html templates for JS bundles
    file-loader^                  |  Loads assets into bundles for /dist (fonts, svgs, etc)
    ______________________________|
    ^ = Dev dependency

    Transpiling / Polyfill
    ______________________________
    babel-core^                   |  Babel transpiles ES2015+ to another target (ES5)
    babel-loader^                 |  Loader used for webpack integration
    babel-preset-env^             |  Preset containing syntax transpiling for ES2015+
    babel-preset-react^           |  Preset containing React/Flow transpiling
    babel-polyfill^               |  Polyfill for modern JS functions (like Object.assign)
    ______________________________|
    ^ = Dev dependency

Frontend:
    Architecture: http://bradfrost.com/blog/post/atomic-web-design/
        Components
            Atoms
            Molecules
            Organisms
            Templates
            Screens (React-Router "Pages")

    React
    ______________________________
    react                         |  React
    react-dom                     |  React DOM Rendering
    react-router-dom              |  Routing with React
    ______________________________|

    Redux
    ______________________________
    redux                         | Redux
    react-redux                   | Redux connections for react components
    redux-thunk                   | dispatching actions inside async functions (as actions)
    redux-logger                  | Redux state logging
    ______________________________|

    Style and API
    ______________________________
    @storybook/react^             | https://storybook.js.org/basics/guide-react/ UI Dev Tool
    @storybook/addon-knobs^       | https://github.com/storybooks/storybook/tree/release/3.4/addons/knobs modifiable props in stories
    anime.js                      | https://github.com/juliangarnier/anime pretty animation engine
    styled-components             | https://www.styled-components.com/docs/basics#motivation
    axios                         | REST Api Calls (Unless using Websockets instead -- then anything but Socket.io)
    ______________________________|
    ^ = Dev dependency

    Linting / Code Standards
        (Can use VSCode Extensions alternatively)
    ______________________________
    eslint^                       | Javascript linting utility
    eslint-config-airbnb^         | Airbnb's popular eslint rules*
    prettier^                     | Code Formatter
    eslint-plugin-prettier^       | https://prettier.io/docs/en/eslint.html For prettier + eslint combination
    eslint-config-prettier^       | https://prettier.io/docs/en/eslint.html For prettier + eslint combination
    flow-bin^                     | https://flow.org/en/docs/install/ static typing for JS
    ______________________________
    * Requires Dependencies: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    ^ = Dev dependency



Backend:
    Go + gorilla/mux :^)
      Unless using Websockets - then gorilla/websockets too
      gorm - ORM



Missing:
    Authentication (Backend / Frontend)
    Documentation Generation (Frontend / Backend)
    DB/Store (Backend)
    Unit Testing (Jest)

