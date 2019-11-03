/************************************path模块***********************************
 *1. resolve():解析为绝对路径
*/
var path=require("path");
var currentFileDir=__dirname;//获取当前js模块所在目录
//获取绝对路径"e:\codeSpace\webpack\mywebpack\nodeJS\dist\datas"
var absolute_path=path.resolve(currentFileDir,"dist/datas");
console.log(absolute_path);
