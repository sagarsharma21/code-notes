# code-notes
Small snippets of code for practice and reference purposes


Node.js is an cross-platform open-source server environment. Node.js initially released in 2009, is a JavaScript runtime environment that can execute JavaScript code outside the browser using the V8 engine.

Node.js Modules
Module in Node.js is a functionality organized in simple or multiple JavaScript files which can be reused in Node.js application.
    In order to use Node.js or NPM modules, you first need to import it using 'require' function 
    var module = require('module_name');

    module.exports is used to expose a function, object and variable 
    as a module in Node.js.

Loading Local Module
To use local modules in the application, it can be loaded using require() function.
    var module = require('./mod.js');
    The '.' represents the root folder.     