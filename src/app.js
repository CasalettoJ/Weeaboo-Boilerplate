// @flow

// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "babel-polyfill";

console.log("Hello World!");

// array.prototype.includes() is an ES7 feature.  Test its transpiling and polyfill:
(() => {
    const numbers = [1, 2, 3, 4];
    if (numbers.includes(3, 1)) {
        console.log("ES7 working.");
    }
})();
