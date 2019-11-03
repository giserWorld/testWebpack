import _ from 'lodash';
import './style.css';//导入.css文件模块
import icon from './logo.png';//导入图片模块
import xml from './data.xml';//导入图片模块

import printMe from './print.js';//js模块

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['你好', '天55'], ' ');
    element.classList.add('hello');//给标签元素添加样式

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);

    //按钮元素
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}
document.body.appendChild(component());