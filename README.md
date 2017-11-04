# web前端面试
> about HTML/css、JavaScript
## HTML/css面试题
1. 什么是盒子模型
```
在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），
元素的外边距（margin）四个部分。这四个部分占有的空间中，4个部分一起构成了css中元素的盒模型。
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
