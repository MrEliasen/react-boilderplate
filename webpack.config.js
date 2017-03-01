/*
* @Author: mark
* @Date:   2017-03-01 15:30:19
* @Last Modified by:   mark
* @Last Modified time: 2017-03-01 16:47:49
*/

module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: './dist/',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}