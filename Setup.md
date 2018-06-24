1. add all dev-dependencies (sans eslint packages)

`yarn add --dev webpack webpack-dev-server html-webpack-plugin file-loader babel-core babel-loader babel-preset-env babel-preset-react babel-polyfill @storybook/react @storybook/addon-knobs eslint prettier eslint-plugin-prettier eslint-config-prettier flow-bin`

2. Determine dependencies for eslint-config-airbnb and add packages

`npm info "eslint-config-airbnb@latest" peerDependencies`

Install all listed plugins as dev dependencies with specified versions.  As of writing these were:

`yarn add --dev  eslint@^4.19.1 eslint-plugin-import@2.12.0 eslint-plugin-jsx-a11y@^6.0.3 eslint-plugin-react@^7.9.1 eslint-config-airbnb`

3. add all other dependencies

`yarn add react react-dom react-router-dom redux react-redux redux-thunk redux-logger animejs styled-components axios`

