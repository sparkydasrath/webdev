Trying to rebuild this project to get more familiar with the process

## Typescript + React
[Reference](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
Installed via: create-react-app my-app --scripts-version=react-scripts-ts
Ran: 
  1. In the project folder, did *git init* (this is for Jest)
  2. *npm test* (passed)
  3. *npm start* (basic react starter page showed up)

## + Babel
[Reference](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)

Note: as of this writing
1. babel versions are at 7.0.0-beta.56
2. typescript version is 3.0.1

npm install --save-dev typescript@3.0.1 

npm install --save-dev @babel/core@7.0.0-beta.56
npm install --save-dev @babel/cli@7.0.0-beta.56
npm install --save-dev @babel/plugin-proposal-class-properties@7.0.0-beta.56
npm install --save-dev @babel/plugin-proposal-object-rest-spread@7.0.0-beta.56
npm install --save-dev @babel/preset-env@7.0.0-beta.56
npm install --save-dev @babel/preset-typescript@7.0.0-beta.56
npm install --save-dev @babel/preset-react@7.0.0-beta.56
npm install --save-dev babel-preset-env 

package.json now looks like:

{
  "name": "ts_react_elect_wpack_v2",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-scripts-ts": "2.17.0"
  },
  "scripts": {
    "start": "react-scripts-ts start",
    "build": "react-scripts-ts build",
    "test": "react-scripts-ts test --env=jsdom",
    "eject": "react-scripts-ts eject"
  },
  "devDependencies": {
    "@babel/cli": "^7.0.0-beta.56",
    "@babel/core": "^7.0.0-beta.56",
    "@babel/plugin-proposal-class-properties": "^7.0.0-beta.56",
    "@babel/plugin-proposal-object-rest-spread": "^7.0.0-beta.56",
    "@babel/preset-env": "^7.0.0-beta.56",
    "@babel/preset-react": "^7.0.0-beta.56",
    "@babel/preset-typescript": "^7.0.0-beta.56",
    "@types/jest": "^23.3.1",
    "@types/node": "^10.5.6",
    "@types/react": "^16.4.7",
    "@types/react-dom": "^16.0.6",
    "typescript": "^3.0.1"
  }
}

## + Webpack
[Reference](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)

npm install --save-dev webpack webpack-cli babel-loader@8.0.0-beta.4




