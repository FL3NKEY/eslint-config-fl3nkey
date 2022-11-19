# eslint-config-fl3nkey-typescript

## Requirements
- eslint^8
- eslint-config-fl3nkey-base^1

## Install
via npm
```
npm install eslint-config-fl3nkey-base eslint-config-fl3nkey-typescript --save-dev
```
via yarn
```
yarn add -D eslint-config-fl3nkey-base eslint-config-fl3nkey-typescript
```

## Usage
In .eslintrc.js
```javascript
module.exports = {
    root: true,
    extends: ['fl3nkey-base', 'fl3nkey-typescript']
};
```
