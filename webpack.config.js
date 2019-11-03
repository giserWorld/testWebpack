/************************************webpack配置***************************************/
const path = require('path');//path模块

module.exports = {
  entry: './src/myCesium.js',//入口文件
  output: {//打包输出配置
    filename: 'myCesium.min.js',
    path:path.resolve(__dirname,'dist')
  }
};