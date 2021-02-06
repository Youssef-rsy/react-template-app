const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => (path.resolve(appDirectory, relativePath));
const host = process.env.HOST || 'localhost';

const { NODE_PATH } = process.env;
const sourcePath = path.join(__dirname, '..',);
const distPath = path.join(__dirname, '..', 'dist',);
const withReport = true;//process.env.npm_config_withReport;
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    context: sourcePath,
    output: {
        filename: 'js/[name].[contenthash].bundle.js',
        path: distPath,
        chunkFilename: 'js/[id].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            "@": path.join(__dirname, "..", "src"),
            "@components": path.join(__dirname, "..", "src", "components"),
            "@utilities": path.join(__dirname, "..", "src", "utilities"),

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
                            name: "[folder]/[name].[contenthash].[ext]",
                            outputPath: "locales/"
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
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
                    loader: 'babel-loader',
                    options: {
                        plugins: ['lodash'],
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: resolveAppPath('public/home.ico'),
            inject: true,
            template: resolveAppPath('public/index.html'),
        }),
        new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[id].css"
        }),
        new CopyPlugin({
            patterns:
                [
                    { from: 'public/locales', to: 'public/locales' },
                ]
        }
        ),
    ]
};