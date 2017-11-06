# web前端面试
> about HTML/css、JavaScript
## HTML/CSS面试题
1. 什么是盒子模型
```
在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），
元素的边框（border），元素的外边距（margin）四个部分。
这四个部分占有的空间中，4个部分一起构成了css中元素的盒模型。
其中，在iE浏览器中，盒模型=content+margin，也就是content包含了padding和border的值。
而在w3c标准中，盒模型=content+padding+margin+border。
```
2. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
```
行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img
```
3. CSS实现垂直水平居中
> 其中一个经典的方式
```
HTML结构：

    <div class="wrapper">
        <div class="content"></div>
    </div>    

CSS：

    .wrapper {
      position: relative;
      width: 500px;
      height: 500px;
      background-color: #ddd;
     }
    .content{
        background-color:#6699FF;
        width:200px;
        height:200px;
        position: absolute;        //父元素需要相对定位
        top: 50%;
        left: 50%;
        margin-top:-100px ;   //二分之一的height，width
        margin-left: -100px;
    } 
```
4. 简述一下src与href的区别
- href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
- src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。
5. 什么是CSS Hack?
>一般来说是针对不同的浏览器写不同的CSS,就是 CSS Hack。IE浏览器Hack一般又分为三种，条件Hack、属性级Hack、选择符Hack
```
// 1、条件Hack
   <!--[if IE]>
      <style>
            .test{color:red;}
      </style>
   <![endif]-->
   // 2、属性Hack
    .test{
    color:#090\9; /* For IE8+ */
    *color:#f00;  /* For IE7 and earlier */
    _color:#ff0;  /* For IE6 and earlier */
    }
   // 3、选择符Hack
    * html .test{color:#090;}       /* For IE6 and earlier */
    * + html .test{color:#ff0;}     /* For IE7 */
```
6. 简述同步和异步的区别
- 同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；
- 异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。
7. px和em的区别
- px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。
- 浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em
8. 浏览器的内核分别是什么?
- IE: trident内核
- Firefox：gecko内核
- Safari：webkit内核
- Opera和Chrome：Blink(基于webkit，Google与Opera Software共同开发)
## JavaScript部分
1. 怎样添加、移除、移动、复制、创建和查找节点？
- 创建新节点
```
createDocumentFragment() //创建一个DOM片段
createElement() //创建一个具体的元素
createTextNode() //创建一个文本节点
```
- 添加、移除、替换、插入
```
appendChild() //添加
removeChild() //移除
replaceChild() //替换
insertBefore() //插入
```
- 查找
```
getElementsByTagName() //通过标签名称
getElementsByName() //通过元素的Name属性的值
getElementById() //通过元素Id，唯一性
```
2. 实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制。
> 详解函数[Object.prototype.toString.call(obj)和toString方法](http://www.cnblogs.com/youhong/p/6209054.html)
```
/**
 * 对象克隆
 * 支持基本数据类型及对象
 * 递归方法
 */
function clone(obj) {
    var o;
    switch (typeof obj) {
        case "undefined":
            break;
        case "string":
            o = obj + "";
            break;
        case "number":
            o = obj - 0;
            break;
        case "boolean":
            o = obj;
            break;
        case "object": // object 分为两种情况 对象（Object）或数组（Array）
            if (obj === null) {
                o = null;
            } else {
                if (Object.prototype.toString.call(obj).slice(8, -1) === "Array") {
                    o = [];
                    for (var i = 0; i < obj.length; i++) {
                        o.push(clone(obj[i]));
                    }
                } else {
                    o = {};
                    for (var k in obj) {
                        o[k] = clone(obj[k]);
                    }
                }
            }
            break;
        default:
            o = obj;
            break;
    }
    return o;
}
```
