const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => (path.resolve(appDirectory, relativePath));
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');

const host = process.env.HOST || 'localhost';

const { NODE_PATH } = process.env;
console.log(NODE_PATH);

const sourcePath = path.join(__dirname, '..',);
const distPath = path.join(__dirname, '..', 'dist',);
const withReport = true;//process.env.npm_config_withReport;
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    context: sourcePath,
    output: {
        path: distPath,
        filename: 'js/[name].bundle.js',
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
                            name: "[folder]/[name].[ext]",
                            outputPath: "assets/locales/"
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
                    loader: "babel-loader",
                    options: {
                        plugins: ['lodash'],
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
        //filtering out moment.js locals we didn't use
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        //
        new LodashModuleReplacementPlugin,
        //bundle report
        withReport ? new BundleAnalyzerPlugin() : '',
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
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false,
                    output: {
                        comments: false,
                    },
                },
                sourceMap: true,
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        }
    }
};