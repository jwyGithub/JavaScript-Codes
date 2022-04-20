const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: resolve(__dirname, '../src/main.ts'),
    output: {
        publicPath: './',
        filename: '[name].[contenthash:8].js',
        path: resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.ts', '.js', '...']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JS Functions',
            // 模板路径
            template: resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            // favicon的路径
            // favicon: '',
            // 在index.html中添加meta标签  以对象的形式   key是name  值是content
            // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            // 压缩  默认如果是production或者true，则压缩，其它情况下不压缩
            minify: true,
            // 缓存  默认为true
            cache: true,
            // 显示错误信息在index.html页面，默认为true
            showErrors: true,
            // 自动注入js文件 css文件 默认为true
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader'
            },
            {
                test: /\.(css|scss)$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: false, importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: false }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: false }
                    }
                ]
            }
        ]
    }
};

