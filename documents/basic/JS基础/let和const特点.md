# <center>JS 中 let 和 const 特点</center>

## 1. 块级作用域和变量提升

被{}包裹的语句，就是代码块，可以被执行。先看一个和代码块相关的题目：

```js
{} + []//计算结果为0
[] + {}//计算结果为"[object Object]"
```

第一个算式里面{}被当成了代码块处理，第二个算式里面{}被当成空对象处理。
[显式类型转换](./显式类型转换.md)

`if(){}` `for(){}` `while(){}`都会牵扯到块级作用域

```js
if (false) {
  var a = 12;
}
console.log(a); //undefined

//等价于

var a;
if (false) {
  a = 12;
}
console.log(a);
```

```js
if (true) {
  let a = 12;
}
console.log(a); //ReferenceError: a is not defined
```

- var 会进行[变量提升](./变量提升.md)，而 let 不会
- let const 是块级作用域的，块级以外的地方无法访问

## 2. 暂时性死区

```js
let testVal = 1;
if (true) {
  console.log(testVal); //ReferenceError: Cannot access 'testVal' before initialization
  let testVal = 2;
}
```

- 块级内有相应变量声明，则使用块级内的(var 也是)
- 在没有声明之前使用 let const 声明的变量，会产生暂时性死区（TDZ）

## 3. 重复声明

```js
var a = 12;
var a = 5;
```

```js
let a = 12;
let a = 5; //Identifier 'a' has already been declared
```

- let const 声明的变量，不能重复声明

## 4. 不绑定全局作用域

```js
var a = 12;
console.log(window.a); //12
```

```js
let a = 12;
console.log(window.a); //undefined
```

## 5. let 与 const 不同点

```js
let a = 12;
a = 5; //it's OK

const b = 12;
b = 5; //Assignment to constant variable
```

- const 用于声明常量，其值一旦被设定不能再被修改，否则会报错

```js
const data = {
  value: 1,
};
data.value = 3;
data.name = 'Lawson';
console.log(data); //{ value: 3, name: 'Lawson' }
data = {}; //Assignment to constant variable.
```

- const 不能被修改的是栈里面存的值，若栈里面存的是对象的引用，那修改堆里面的内容试可以的
- 若希望堆里面的也不能更改，则可以使用 [深度冻结](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)（deep freeze），或者使用[immutable.js](https://github.com/immutable-js/immutable-js)

## 6. 循环中的 let const

有人已经写的很好了，我就不赘述了，[传送门](https://segmentfault.com/a/1190000014951691?utm_source=tag-newest)
