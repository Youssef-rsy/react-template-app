const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => (path.resolve(appDirectory, relativePath));
const host = process.env.HOST || 'localhost';


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: resolveAppPath('dist'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src') // shortcut to reference src folder from anywhere
        }
    },
    module: {
        rules: [
            {
                test: /\.(json)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[folder]/[name].[ext]",
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localsConvention: 'camelCase',
                        sourceMap: true
                    }
                }],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader"
                    }
                ],
            },
            { // config for images
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        }
                    }
                ],
            },
            { // config for fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                        }
                    }
                ],
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: resolveAppPath('public/home.ico'),
            inject: true,
            template: resolveAppPath('public/index.html'),
        }),
        new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*"]
        }),
    ],
    devServer: {

        // Serve index.html as the base
        contentBase: resolveAppPath('./'),

        // Enable compression
        compress: true,

        // Enable hot reloading
        hot: true,

        host,

        port: 3000,

        open: true,
        // Public path is root of content base
        publicPath: '/',

        historyApiFallback: true,

    },
};