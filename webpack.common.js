/**********************webpack(dev、prod)公共配置*************************/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');//生成index.html文件
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');//构建之前先清除dist文件中的文件


module.exports = {
    entry:{
        app: './src/index.js'
    },
    output:{
        path: path.resolve(__dirname, "dist"),//打包文件输出目录
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production'
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