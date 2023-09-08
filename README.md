# vue-cli-plugin-inject-style

automatically inject style files based on the style path

<p align="center">
  <img src="https://img.shields.io/npm/v/vue-cli-plugin-inject-style" alt='version'>
  <img src="https://img.shields.io/npm/dm/vue-cli-plugin-inject-style" alt='download'>
  <img src="https://img.shields.io/github/issues/jwyGithub/vue-cli-plugin-inject-style" alt='issues'>
  <img src="https://img.shields.io/github/license/jwyGithub/vue-cli-plugin-inject-style" alt='license'>
</p>
<br />

## Install

### with pnpm

```sh
pnpm add vue-cli-plugin-inject-style -D
```

### with yarn

```sh
yarn add vue-cli-plugin-inject-style -D
```

### with npm

```sh
npm install vue-cli-plugin-inject-style -D
```

### with vue

```sh
vue add vue-cli-plugin-inject-style
```

## Option

```typescript
export type InjectStyle = {
    /**
     * @description style root
     * @default src/style
     */
    path: string;

    /**
     * @description style suffix
     * @default ["scss","less"]
     */
    suffixs: suffix[];
};
```

## Config

```javascript
// vue.config.js
const path = require('path');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        sourceMap: false,
        loaderOptions: {
            // manual add
            scss: {
                additionalData: '@import "~@/styles/index.scss";'
            }
        }
    },
    pluginOptions: {
        'vue-cli-plugin-inject-style': {
            path: path.join(__dirname, 'src', 'style'),
            suffixs: ['scss', 'less']
        }
    }
});
```

