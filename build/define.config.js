const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function defineBabelConfig() {
    return {
        presets: [
            [
                // babel预设
                '@babel/preset-env',
                {
                    // 使用corejs 3的版本
                    corejs: 3,
                    // 按需加载
                    useBuiltIns: 'usage',
                    // 不使用模块化  交给其它打包工具处理
                    modules: false
                }
            ],
            [
                // typescript,
                '@babel/preset-typescript',
                {
                    isTSX: true,
                    allExtensions: true
                }
            ]
        ],
        plugins: [
            [
                // 只引入用到的模块
                '@babel/plugin-transform-runtime',
                {
                    corejs: 3,
                    helpers: true,
                    regenerator: true,
                    useESModules: false
                }
            ]
        ]
    };
}

function defineTsLoader() {
    return {
        test: /\.ts(x?)$/,
        exclude: /node_modules|code.data.ts/,
        use: [
            {
                loader: 'babel-loader',
                options: defineBabelConfig()
            },
            {
                loader: 'ts-loader'
            }
        ]
    };
}

function defineJsLoader() {
    return {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: defineBabelConfig()
            }
        ]
    };
}

function defineStyleLoader(env) {
    return {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [
            env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            {
                loader: 'css-loader',
                options: { sourceMap: env.NODE_ENV !== 'production', importLoaders: 1 }
            },
            {
                loader: 'postcss-loader',
                options: { sourceMap: env.NODE_ENV !== 'production' }
            },
            {
                loader: 'sass-loader',
                options: { sourceMap: env.NODE_ENV !== 'production' }
            }
        ]
    };
}

module.exports = {
    MiniCssExtractPlugin,
    defineBabelConfig,
    defineTsLoader,
    defineJsLoader,
    defineStyleLoader
};

