const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { defineTsLoader, defineJsLoader, defineStyleLoader, MiniCssExtractPlugin } = require('./define.config.js');

function defineOutput(env) {
    return {
        asyncChunks: true,
        publicPath: env.NODE_ENV === 'production' ? './' : '/',
        chunkFilename: '[name].[contenthash:8].js',
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'data/code.ts'
    };
}

function defineEntry() {
    return {
        entry: path.resolve(__dirname, '../src/main.ts')
    };
}

function defineResolve() {
    return {
        extensions: ['.ts', '.js', '.scss', '.css', '...'],
        fallback: {
            // assert: require.resolve('assert'),
            // buffer: require.resolve('buffer'),
            // console: require.resolve('console-browserify'),
            // constants: require.resolve('constants-browserify'),
            // crypto: require.resolve('crypto-browserify'),
            // domain: require.resolve('domain-browser'),
            // events: require.resolve('events'),
            // http: require.resolve('stream-http'),
            // https: require.resolve('https-browserify'),
            // os: require.resolve('os-browserify/browser'),
            // path: require.resolve('path-browserify'),
            // punycode: require.resolve('punycode'),
            process: require.resolve('process/browser')
            // querystring: require.resolve('querystring-es3'),
            // stream: require.resolve('stream-browserify'),
            // string_decoder: require.resolve('string_decoder'),
            // sys: require.resolve('util'),
            // timers: require.resolve('timers-browserify'),
            // tty: require.resolve('tty-browserify'),
            // url: require.resolve('url'),
            // util: require.resolve('util'),
            // vm: require.resolve('vm-browserify'),
            // zlib: require.resolve('browserify-zlib')
        }
    };
}

function definePlugins(env) {
    return [
        new HtmlWebpackPlugin({
            title: 'JS Functions',
            // 模板路径
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            // favicon的路径
            // favicon: '',
            // 在index.html中添加meta标签  以对象的形式   key是name  值是content
            // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            // 压缩  默认如果是production或者true，则压缩，其它情况下不压缩
            minify: env.NODE_ENV === 'production',
            // 缓存  默认为true
            cache: true,
            // 显示错误信息在index.html页面，默认为true
            showErrors: true,
            // 自动注入js文件 css文件 默认为true
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name]_[contenthash:8].css'
        })
    ];
}

function defineModule(env) {
    return {
        rules: [
            defineTsLoader(),
            defineJsLoader(),
            defineStyleLoader(env),
            {
                test: /code.data.ts/,
                type: 'asset/resource'
            }
        ]
    };
}

module.exports = env => {
    return {
        mode: env.NODE_ENV || 'development',
        context: process.cwd(),
        entry: defineEntry(),
        output: defineOutput(env),
        resolve: defineResolve(),
        plugins: definePlugins(env),
        module: defineModule(env)
    };
};

