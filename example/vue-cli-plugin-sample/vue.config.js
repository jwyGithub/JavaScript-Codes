const path = require('path');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        sourceMap: false,
        loaderOptions: {
            scss: {
                additionalData: '@import "~@/styles/index.scss";'
            }
        }
    },
    pluginOptions: {
        'vue-cli-plugin-inject-style': {
            suffixs: ['scss']
        }
    }
});

