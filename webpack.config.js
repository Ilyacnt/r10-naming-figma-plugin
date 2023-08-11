const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (env, argv) => ({
    mode: argv.mode === 'production' ? 'production' : 'development',

    devtool: argv.mode === 'production' ? false : 'inline-source-map',

    entry: {
        ui: './src/view/ui.tsx',
        code: './src/figma/code.ts',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            // Enables including CSS by doing "import './file.css'" in your TypeScript code
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
            // { test: /\.(png|jpg|gif|webp|svg|zip)$/, loader: [{ loader: 'url-loader' }] }
            {
                test: /\.svg/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'), // Compile into a folder called "dist"
    },
    // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
    plugins: [
        new webpack.DefinePlugin({
            global: {}, // Fix missing symbol error when running in developer VM
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/view/ui.html',
            filename: 'ui.html',
            chunks: ['ui'],
        }),
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
    ],
})
