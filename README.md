# Analytics X

Cross-platform analytics for React and React Native apps.

## Getting Started

Install `analytics-x` using `yarn`:

```shell
yarn add analytics-x
```

## Setup

### React Native

No additional setup required for react-native.

### React DOM

If using Webpack, you need to add the `.dom.js` extension to the extensions array.

```javascript
module.exports = {
  resolve: {
    extensions: ['.dom.js', '.js', '.json'],
  },
};
```

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/analytics-x/issues) or [submit a PR](https://github.com/negativetwelve/analytics-x/pulls).
