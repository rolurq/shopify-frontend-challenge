# Toronto Waste Lookup App

Web app for the Shopify Web Engineer Challenge 2019. This app is built with React + Redux + TypeScript.

## About the server

The server for the API implemented in `server.js` has a very simple and naive implementation of the search algorithm. Caching is left to the frontend using the service worker.

## Running the app

Install the app dependencies:

```sh
$ yarn install
```

Or with `npm`:

```sh
$ npm install
```

To start the app in debug mode _(this will not have API calls support)_ run:

```sh
$ yarn start
```

To execute the app properly, with API support, run:

```sh
$ yarn build && node server.js
```

This will serve the app in the port `8080`, but this can be changed defining an environment variable:

```sh
$ PORT=5000 node server.js
```

## Running tests

To run the tests execute:

```sh
$ yarn test
```

This will start a watcher running tests on code changes.
