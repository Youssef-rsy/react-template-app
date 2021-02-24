
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => (path.resolve(appDirectory, relativePath));
var webpack = require('webpack');
const withReport = true;
const host = process.env.HOST || 'localhost';
const environment = 'development';

module.exports = merge(common, {
    mode: 'development',
    devServer:
    {
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
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${environment}"` }),
        // new webpack.HotModuleReplacementPlugin(),
        withReport ? new BundleAnalyzerPlugin() : '',
    ]
});