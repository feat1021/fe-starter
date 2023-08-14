# <center>JS 中 function 与箭头函数</center>

## 1. 写法

```js
let foo = function fn(name) {
  console.log(`common function. name is ${name}`);
};
foo('Lawson'); //common function. name is Lawson
fn('Lawson'); //fn is not a function
//采用函数表达式声明函数时，function命令后面可以不带有函数名
//如果加上函数名fn，fn只在函数体内部有效，在函数体外部无效
//函数名fn只读，无法被修改

let fooArrow = (name) => {
  console.log(`arrow function. name is ${name}`);
};
fooArrow('Nion'); //arrow function. name is Nion
//箭头函数可以更好地编写匿名函数
//箭头函数书写更加简洁
```

## 2. this 指向

[this 指向](./this指向.md)

## 3. arguments 对象

[定义说明](https://wangdoc.com/javascript/types/function.html#arguments-%E5%AF%B9%E8%B1%A1)

```js
let foo = function () {
  console.log(`common function. first param is ${arguments[0]}, second param is ${arguments[1]}`);
};

foo('Lawson', 18); //common function. first param is Lawson, second param is 18
foo('Nion'); //common function. first param is Nion, second param is undefined
```

- 普通函数中，可以使用`arguments`来获取参数，不受形参个数影响

```js
let fooArrow = () => {
  console.log(`arrow function. first param is ${arguments[0]}, second param is ${arguments[1]}`);
};
fooArrow('Lawson', 18); //Uncaught ReferenceError: arguments is not defined
```

```js
let fooArrow = (...args) => {
  console.log(`arrow function. first param is ${args[0]}, second param is ${args[1]}`);
};
fooArrow('Lawson', 18); //arrow function. first param is Lawson, second param is 18
fooArrow('Nion'); //arrow function. first param is Nion, second param is undefined
```

- 箭头函数中，不存在`arguments`对象，但是可以通过扩展运算符 `...` 来获取参数

## 4. 构造函数

```js
let Person = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.show = function () {
  console.log(`${this.name} is ${this.age} years old.`);
};

let p1 = new Person('Lawson', 18);
p1.show(); //Lawson is 18 years old.
```

```js
let Person = (name, age) => {
  this.name = name;
  this.age = age;
};

let p1 = new Person('Lawson', 18); //Person is not a constructor
```

- 箭头函数无法通过`new`进行实例化，所以箭头函数不能作为构造函数
