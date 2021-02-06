
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');
const environment = 'production';


const x = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${environment}"` }),

        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*"]
        }),
        //filtering out moment.js locals we didn't use
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        //
        new LodashModuleReplacementPlugin,
        new CompressionPlugin({
            test: /\.js/
        }),
    ]

});
module.exports = x;