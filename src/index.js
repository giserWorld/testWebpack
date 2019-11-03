import './style.css';//导入.css文件模块
import { cube } from './math.js';//导入模块中的方法


function component() {
    var element = document.createElement('pre');
    //html元素写入内容
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;//返回pre节点
}
document.body.appendChild(component());