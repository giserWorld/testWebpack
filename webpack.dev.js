/**********************webpack  dev配置*************************/
const merge = require('webpack-merge');//webpack 融合模块
const common = require('./webpack.common.js');//导入webpack公共配置文件

//将webpack公共配置和新的配置对象融合为一个配置
module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});