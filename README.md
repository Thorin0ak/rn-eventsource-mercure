[![Maintainability](https://api.codeclimate.com/v1/badges/0bd4a598dfee9b700e30/maintainability)](https://codeclimate.com/github/Thorin0ak/rn-eventsource-mercure/maintainability)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0bd4a598dfee9b700e30/test_coverage)](https://codeclimate.com/github/Thorin0ak/rn-eventsource-mercure/test_coverage)


# rn-eventsource-mercure

This package that implements the [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) web standard using low-level React Native networking primitives.

There are several `EventSource` polyfills today, as highlighted in [this post on the state of React Native EventSource polyfills](http://ngineering.io/2022/03/19/state-of-react-native-sse-client-libraries/), but none of them satisfy the following three goals:

* Don't depend on the Node.js standard library
    - The Node.js standard library isn't supported by React Native.
* Don't depend on a native module
    - This makes it harder to work with simple Expo-based apps.
* Don't implement with XmlHttpRequest
    - Existing polyfills that use XmlHttpRequest are not optimal for streaming sources because they cache the entire stream of data until the request is over.

Thanks to the low-level network primitives exposed in React Native 0.62, it became possible to build this native `EventSource` implementation for React Native. See [this thread in react-native-community](https://github.com/react-native-community/discussions-and-proposals/issues/99#issue-404506330) for a longer discussion around the motivations of this implementation.

## Usage

Install the package in your React Native project with:

```bash
npm install --save rn-eventsource-mercure
```

To import the library in your project:
```js
const EventSource = require('rn-eventsource-mercure');
```

Once imported, you can use it like any other `EventSource`. See the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) for more usage examples.
```js
const ticker = new EventSource('https://www.example.com/stream?token=blah');

ticker.onmessage = (message) => {
    console.log(message.data)
}
```
