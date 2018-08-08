## Building a simple BTC price grabber with Electron + Typescript + React + Webpack

The original basis for this comes from the [YouTube electron tutorial](https://www.youtube.com/watch?v=2RxHQoiDctI) written in vanilla JS.  

I spent a **lot** of time researching and trying to get all these pieces to work. This may not be the most optimal setup for sure and I welcome feedback on how I can improve bits of it. I ended up following the [most recent guide I found online](https://taraksharma.com/setting-up-electron-typescript-react-webpack/)

Packages I used are listed below:

**Dependencies**
yarn add react react-dom typescript axios electron

**Dev Dependecies**
yarn add -D typescript node-sass webpack webpack-cli clean-webpack-plugin html-webpack-plugin awesome-typescript-loader source-map-loader ts-lint tslint-loader sass-loader css-loader style-loader file-loader jest enzyme @types/electron @types/react @types/react-dom @types/webpack @types/node

## Other TODOs
1. Use just the *fetch* API instead of Axios
2. Cannot get notifications to work yet
3. Model the whole app better
4. Leverage Jest and Enzyme for tests
5. Extend to get more px/currency pairs

# REMAINING ISSUES
One I still haven't solved yet is how to map a HTML file to just a single script - it seems to be a webpack config issue that I have no idea about. For example, in /dist there is index.html and add.html and **both** have references to *addComp.bundle.js* and *main.bundle.js*. Ideally, what I am looking for is that *addComp.html* references *addComp.bundle.js* **only** and *index.html* references *main.bundle.js* **only**
