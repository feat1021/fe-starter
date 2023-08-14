# <center>JS this 指向</center>

## 1. 普通函数中

```js
var name = 'globalName';
var obj = {
  name: 'objName',
  fn: function () {
    console.log('current name is:', this.name);
  },
};

obj.fn(); //objName
var innerFn = obj.fn;
innerFn(); //globalName，浏览器和NodeJS不一样
```

- 一般情况下最后是谁调用的函数（并且此函数和 this 直接相关），this 指向谁
- `obj.fn()`中，调用 fn 的是 obj 对象，所以 this 指向 obj 对象，得到的是 `obj.name`
- `innerFn()`，没有调用方，默认为 window 调用（浏览器中）

### 1.1 立即执行函数模式

```js
var name = 'globalName';
var obj = {
  name: 'objName',
  fn: function () {
    function gn() {
      console.log('current name is:', this.name);
    }
    gn();
  },
};

obj.fn(); //globalName
```

- 最终【执行】的函数是 gn，而调用 gn 的是 window（因为没有调用方），此模式类似执行回调函数

### 1.2 返回函数模式

```js
var name = 'globalName';
var obj = {
  name: 'objName',
  fn: function () {
    return function gn() {
      console.log('current name is:', this.name);
    };
  },
};

obj.fn()(); //globalName
```

## 2. 构造函数中

```js
var name = 'globalName';
function Test(name) {
  console.log('current this is: ', this); //Test 函数构造的实例 testObj
  console.log(this instanceof Test); //true
  this.name = name;
}
var testObj = new Test('Lawson');
console.log(testObj.name); //Lawson
```

- 构造函数中（用 new 调用函数），this 指向生成的实例

```js
var name = 'globalName';
function Test(name) {
  this.name = name;
  return {
    name: 'Nion',
  }; //构造函数中返回了非基本类型
}
var testObj = new Test('Lawson');
console.log(testObj.name); //Nion
```

```js
var name = 'globalName';
function Test(name) {
  this.name = name;
  return 0; //基本类型
}
var testObj = new Test('Lawson');
console.log(testObj.name); //Lawson
```

```js
var name = 'globalName';
function Test(name) {
  this.name = name;
  return this;
}
var testObj = new Test('Lawson');
console.log(testObj.name); //Lawson
```

- 若构造函数中返回了非【基本类型】（number string boolean null undefined symbol bigint）也不是 this，则生成的实例会被非基本类型替换

## 3. 结合 call apply bind 函数

[call 传送门](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
[apply 传送门](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
[bind 传送门](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

- 三者的第一个参数，都会改变执行函数中 this 指向
- call 后面接收的参数，以正常参数一样，一个个传入，最后执行函数
- apply 后面接收一个参数，将所有的正常参数，按照类数组的方式传入，最后执行函数
- bind 的入参和 call 一样，但是最后不执行函数，而是返回被改变 this 之后的新函数，传入的参数会作为新函数的预置参数，从而实现偏函数的功效

```js
var name = 'globalName';
var obj = {
  name: 'objName',
  fn: function () {
    console.log('current name is:', this.name);
  },
};
//和 obj.fn()效果一致，而且使用 call 更加不容易混淆 this
obj.fn.call(obj); //objName
//和 var innerFn = obj.fn; innerFn(); 效果一致
obj.fn.call(window); //globalName
//注意：call 后面的参数，可以传入 null 即 obj.fn.call(null)实现软绑，但是严格模式下报错
```

## 4. 箭头函数

下面只谈和 this 相关的内容

### 4.1 立即执行函数模式

```js
var name = 'globalName';
var obj = {
  name: 'objName',
  fn: function () {
    console.log('this.name of fn is:', this.name);
    var arrowFn = () => {
      console.log('current name is:', this.name);
    };
    arrowFn();
  },
};

obj.fn();
//current name is: objName
//this.name of fn is: objName
```

### 4.2 返回函数模式

```js
var name = 'globalName';
var obj = {
  name: 'objName',
  fn: function () {
    console.log('this.name of fn is:', this.name);
    return () => {
      console.log('current name is:', this.name);
    };
  },
};

obj.fn()();
//this.name of fn is: objName
//current name is: objName

var arrowFn = obj.fn();
arrowFn();
//this.name of fn is: objName
//current name is: objName

var innerFn = obj.fn;
innerFn()();
//this.name of fn is: globalName
//current name is: globalName

obj.fn().call(window);
//this.name of fn is: objName
//current name is: objName
```

- 对象中没有函数级作用域

```js
var name = 'globalName';
var obj = {
  name: 'objName',
  methods: {
    showName: () => {
      console.log('current name is:', this.name);
    },
  },
};

obj.methods.showName(); //globalName
```

- JS 中说作用域，一般是按照函数级作用域进行分级的
- 箭头函数的 this，在声明的时候已经和其父级作用域（函数级）绑定，无法解绑，bind call apply 均不能改变其 this 指向
