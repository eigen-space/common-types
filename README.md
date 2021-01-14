# About

This project contains common types that uses in many projects:

# Project structure

Project should adhere to this structure:
```
    /src - files used by this application (modules, templates, ligic)
        /@types - declaration modules and namespaces
            <concrete type>.d.ts
        /types - folder that containings all types and interfaces
             <concrete type>.ts
        
        index.js - a public interface for a library consumer         
                     
    package.json - project configuration, contains project information, dependencies and settings
    webpack.config.package.json - main configuration for webpack
    yarn.log - file fixing specific dependency numbers
    README.md
    <other root configuration files> - for example, jest.config.ts, .gitignore, ...                                             
```

# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes lint rules, config for typescript.
* `@eigenspace/helper-scripts` - common scripts for dev. environment.
* `@types/*` - contains type definitions for specific library.
* `ts-loader` - it is used to load typescript code with webpack. 
* `eslint` - it checks code for readability, maintainability, and functionality errors.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
See `webpack.config.js`.
* `webpack` - it create app bundle for dev mode and production. 
* `copy-webpack-plugin` - used for copy package.json in package bundle.
* `clean-webpack-plugin` - used for clean bundle before run building.
* `husky` - used for configure git hooks.
* `lint-staged` - used for configure linters against staged git files.
* `webpack-cli` - command line interface dor webpack.
