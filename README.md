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
->The module.exports is a special object that is included in every JavaScript file in Node.js by default.
->It exposes anything that is assigned to it as a module. 

NPM is the largest repository of packages. NPM is a command line tool used to install, uninstall and update npm packages in the node environment. NPM is installed with Node.js installation.


npm install <package-name>
npm update <package-name>
npm uninstall <package-name>

Web server is required to ccesss any web pages of any application.