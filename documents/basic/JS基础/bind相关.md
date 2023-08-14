# <center>【JS】bind 相关</center>

## 1. 前置知识

[作用域链](./作用域与作用域链.md)
[原型链](./原型链.md)

## 2. 使用和 polyfill

参考资料：请移步[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
polyfill 解析：[这位写的不错](https://segmentfault.com/a/1190000015191260)

## 3. 注意点

- bind 方法创建新函数，第一个参数作为运行时的 `this`，后面的就是正常的参数
- bind 方法可以创建偏函数，作初始参数用，作为一种柯里化的方案
- bind 后生成的新函数也能使用 `new` 操作符创建对象，但是会冲掉绑定的 `this`，即：`this` 会指向原来的函数
- bind 第一个参数如果是 null（非严格模式），则是软绑，后面 `this` 是啥就是啥，可以自动绑到 `window` 上，但是如果传的是对象,则就是硬绑，`this` 就不会乱窜了
