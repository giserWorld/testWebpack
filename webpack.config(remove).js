/**********************webpack配置文件*************************/

const path = require('path');
//生成index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//构建之前清除dist文件中的文件
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

//nodeJS模块暴露
module.exports = {
    entry: './src/index.js',
    mode: "production",//运行模式
    output: {
      path: path.resolve(__dirname, "dist"),//打包文件输出目录
      //filename: 'bundle.js'//打包文件输出文件名
      filename: 'bundle.js',
      publicPath: '/'//适合“生产环境”，webpack-dev-server 在进行打包时生成的静态文件访问路径
    },
    devtool: 'inline-source-map',//显示源代码
    devServer: {//配置webpack提供的开发服务器,浏览器会自动重新打包部署，刷新页面
        contentBase: './dist'//告诉开发服务器(dev server)，在哪里查找文件
    },
    plugins: [//webpack配置插件
            new HtmlWebpackPlugin({
                title: 'Output Management'
            }),
            new CleanWebpackPlugin(),
    ],
    module:{
        rules:[//模块处理规则
            {//.css 加载规则，.css结尾的全部文件，都将被提供给 style-loader 和 css-loader进行加载解析
                test: /\.css$/,//检测模块的类型
                use: [//该类型模块使用的加载器
                    'style-loader',
                    'css-loader'
                ]
            },
            {//图片模块加载规则
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {//字体图标加载规则
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {//.csv、.tsv模块加载规则
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {//.xml模块加载规则
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};