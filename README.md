# About

This project contains common types that uses in many projects:


# Why do we have that dev dependency?

* `@eigenspace/codestyle` - contains type definitions for specific library.
* `clean-webpack-plugin` - used for clean bundle before run building. 
* `copy-webpack-plugin` - used for copy package.json in package bundle.
* `ts-loader` - it is used to load typescript code with webpack.  
* `tslint` - it checks TypeScript code for readability, maintainability, and functionality errors.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
* `webpack` - it create app bundle for dev mode and production.
* `webpack-cli` - cli for webpack, provides commands for tasks.

# Project structure

Project should adhere to this structure:
```
    /src - files used by this application (modules, templates, ligic)
        /type - folder that containings all types
             <concrete type>..ts - type
        
        package-api.js - a public interface for a library consumer         
                     
    package.json - project configuration, contains project information, dependencies and settings
    webpack.config.package.json - main configuration for webpack
    yarn.log - file fixing specific dependency numbers
    README.md
    <other root configuration files> - for example, jest.config.ts, .gitignore, ...                                             
```
              