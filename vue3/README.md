# eslint-config-fl3nkey-vue3

## Requirements
- eslint^8
- eslint-config-fl3nkey-base^1

## Install
via npm
```
npm install eslint-config-fl3nkey-base eslint-config-fl3nkey-vue3 --save-dev
```
via yarn
```
yarn add -D eslint-config-fl3nkey-base eslint-config-fl3nkey-vue3
```

## Usage
In .eslintrc.js
```javascript
module.exports = {
    root: true,
    extends: ['fl3nkey-base', 'fl3nkey-vue3']
};
```

## Usage with typescript
```javascript
module.exports = {
    root: true,
    extends: ['fl3nkey-base', 'fl3nkey-typescript', 'fl3nkey-vue3/typescript']
};
```
