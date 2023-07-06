# <center>markdown说明</center>

## 1. 说明
为了对已有知识进行总结，也为了为后来者铺路，我们要有编写文献的习惯。

学会如何快速编写一篇自己思路的`wiki`是必不可少的技能。

使用`markdown`语法，能让我们快速书写一些具有一定$\color{seagreen}{富文本样式}$的纯文本内容。

[官方说明文档](https://docs.gitlab.com/ee/user/markdown.html)

$\color{seagreen}{若想要的内容markdown无法满足，则完全可以用html语言替代}$

## 2. 功能详述
### 2.1 章节
$\color{green}{范式:}$ `# 当前章节` `## 子章节`

$\color{lightskyblue}{说明:}$
+ 会自动产生下划线的样式
+ 非主章节没有下划线
+ 和html中的`h1 h2 h3`相似，`#号`的多少决定层级和字体大小
   + 比如 `2.1 章节`，用的就是三个`#号`（因为我觉着两个`#号`和一个样式差别太小）

---
### 2.2 列表
##### 2.2.1 有序列表
$\color{green}{范式:}$ `n. 内容`

$\color{darkorange}{源码:}$
<pre>
1. 列表1
1. 列表2 
   1. 列表2.1
   2. 列表2.2
1. 列表3
</pre>

$\color{seagreen}{效果:}$
1. 列表1
1. 列表2 
   1. 列表2.1
   2. 列表2.2
1. 列表3

$\color{lightskyblue}{说明:}$
+ 注意数字后面加一个`.`
+ 数字和点与内容之间有$\color{indianred}{一个空格}$
+ 会递增生成对应的序列
+ 有层级关系的，在数字序列之前添加$\color{indianred}{三个空格}$

---
##### 2.2.2 无序列表
$\color{green}{范式:}$ `+ 列表` `- 列表` `* 列表`

$\color{darkorange}{源码:}$
<pre>
+ 列表1
+ 列表2
   + 列表2.1
   + 列表2.2
+ 列表3
- 列表a
- 列表b
   - 列表b.a
   - 列表b.b
- 列表c
* 列表A
* 列表B
   * 列表B.A
   * 列表B.B
* 列表C
</pre>

$\color{seagreen}{效果:}$
+ 列表1
+ 列表2
   + 列表2.1
   + 列表2.2
+ 列表3
- 列表a
- 列表b
   - 列表b.a
   - 列表b.b
- 列表c
* 列表A
* 列表B
   * 列表B.A
   * 列表B.B
* 列表C

$\color{lightskyblue}{说明:}$
+ 注意三个标志符和内容之间有$\color{indianred}{一个空格}$
+ 可以使用不同的符号来区分不同的列表，中间的间隔比较大
+ 有层级关系的，在数字序列之前添加$\color{indianred}{三个空格}$

---
### 2.3 换行
+ 多输出一个空白行
+ 可以使用html中的`<br />`

---
### 2.4 分割线
$\color{green}{范式:}$ `---`

---
### 2.5 加粗bold
$\color{green}{范式:}$ `**内容**`

$\color{darkorange}{源码:}$
<pre>
**此内容被加粗了**
</pre>

$\color{seagreen}{效果:}$
**此内容被加粗了**

---
### 2.6 倾斜italic
$\color{green}{范式:}$ `***内容***`

$\color{darkorange}{源码:}$
<pre>
***此内容被倾斜了***
</pre>

$\color{seagreen}{效果:}$
***此内容被倾斜了***

---
### 2.7 内容标注
##### 2.7.1 行内标注

$\color{green}{范式:}$
<pre>
`内容`
</pre>

$\color{darkorange}{源码:}$
<pre>
`此内容被标注了`
</pre>

$\color{seagreen}{效果:}$
`此内容被标注了`

---
##### 2.7.2 块级标注
$\color{green}{范式:}$ 
<pre>
```js
内容
```
</pre>

$\color{darkorange}{源码:}$
<pre>
```js
  // 注释的内容
  useEffect(() => {
    if (visible && flowId) {
      setLoadWritePage('');
      handleWriteInfo();
    }
  }, [flowId, visible]);
```
</pre>

$\color{seagreen}{效果:}$
```js
  // 注释的内容
  useEffect(() => {
    if (visible && flowId) {
      setLoadWritePage('');
      handleWriteInfo();
    }
  }, [flowId, visible]);
```

$\color{lightskyblue}{说明:}$

+ 要以成对的` ``` `进行包裹
+ 可以在第一个` ``` `右侧标明当前语言，可以获得对应的高亮

---
##### 2.7.3 书签模式
$\color{green}{范式:}$ `> 内容`

$\color{darkorange}{源码:}$
<pre>
> npm i gitbook -g
</pre>

$\color{seagreen}{效果：}$
> npm i gitbook -g

$\color{lightskyblue}{说明:}$

---
**可以使用多级书签**

$\color{darkorange}{源码:}$
<pre>
> 一级书签
>> 二级书签
>>> 三级书签
>
>> 二级书签
>> 二级书签
> 一级书签
</pre>

$\color{seagreen}{效果:}$
> 一级书签
>> 二级书签
>>> 三级书签
>
>> 二级书签
>>> 三级书签
> 一级书签

---
### 2.8 外部超链接
$\color{green}{范式:}$`[显示内容](实际链接地址)`

$\color{darkorange}{源码:}$
<pre>
[gitlab的markdown官方文档](https://about.gitlab.com/handbook/markdown-guide/)
</pre>

$\color{seagreen}{效果:}$
[gitlab的markdown官方文档](https://docs.gitlab.com/ee/user/markdown.html)

---
### 2.9 图片
$\color{green}{范式:}$`![imageName](相对路径)`

最简单的方式就是截取一张图，然后直接粘贴过来

---
### 2.10 内部超链接
$\color{green}{范式:}$ `[^tag]` + `[^tag]:`

$\color{darkorange}{源码:}$
<pre>
**点击后面的链接到底部** [^topPage]
[^topPage]: **点击后面的链接回到顶部**
</pre>

$\color{seagreen}{效果:}$
**点击后面的链接到底部** [^topPage]
[^topPage]: **点击后面的链接回到2.10章节**

$\color{lightskyblue}{说明：}$
+ 必须是先`[^tag]`定义，然后再写`[^tag]:`进行标明，类似先有题目，后有答案一样
+ 无论`[^tag]:`写在哪里，都会自动出现在文章最后
+ 无论`[^tag]`里面声明的tag是啥，展示的时候，都是按照数字顺序来标志

---
### 2.11 checkbox
$\color{green}{范式:}$ `- [ ] 列表` `- [x] 列表`

$\color{darkorange}{源码：}$
<pre>
- [ ] 未完成列表1
- [ ] 未完成列表2
   - [x] 已完成列表2.1
   - [ ] 未完成列表2.2
- [x] 已完成列表3
</pre>

$\color{seagreen}{效果：}$
+ [ ] 未完成列表1
- [ ] 未完成列表2
   - [x] 已完成列表2.1
   - [ ] 未完成列表2.2
- [x] 已完成列表3

$\color{lightskyblue}{说明：}$
+ 和列表很像，也是 `+` `-` `*` 都行，混用会有层级的样式，三个空格也可以产生层级样式
+ 没被打钩的中括号中是空格，打钩的中括号中是x
+ 可以操作，即：文档是可以互动的，且互动会有记录

---
### 2.12 颜色
$\color{green}{范式:}$ `$\color{颜色}{内容}$`

$\color{darkorange}{源码:}$
<pre>
$\color{green}{安全}$
$\color{SandyBrown}{告警}$
$\color{red}{危险}$
$\color{#CB9F70}{自定义}$
</pre>

$\color{seagreen}{效果:}$

$\color{green}{安全}$
$\color{SandyBrown}{告警}$
$\color{red}{危险}$
$\color{#CB9F70}{自定义}$

$\color{lightskyblue}{说明：}$
+ 既可以是内定的颜色，比如`red`，也可以是16进制颜色，比如`#CB9F70`

---
### 2.13 collapsible可伸缩
$\color{green}{范式:}$ 
```html
<details>
  <summary>概述内容</summary>
  可伸缩的具体内容
</details>
```

$\color{darkorange}{源码:}$
```
<details>
  <summary>我是概述，点我查看详情</summary>
  + 我是详情1
  + 我是详情2
  + 我是详情3
</details>
```

$\color{seagreen}{效果:}$
<details>
  <summary>我是概述，点我查看详情</summary>
  
  + 我是详情1
  + 我是详情2
  + 我是详情3
</details>

---
### 2.14 表格
这部分有点复杂，请直接观看[文档](https://docs.gitlab.com/ee/user/markdown.html)
