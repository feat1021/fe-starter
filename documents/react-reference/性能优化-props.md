<center><h1>性能优化-props</h1></center>

##1. 尽量使用 `基本类型` 属性

- 基本类型: `number` `string` `boolean` `null` `undefined` `symbol` `bigint`
- react 默认采用 `浅比较(Object.is)` 来判定数据是否发生变化

##2. 解构并赋予默认值

- 解构赋予默认值是在属性值为`undefined`的时候才生效，`null`不会生效
- 默认值为非基本类型时，请注意不要作为 hooks 的监听值，会导致`死循环`问题

##3. React.memo

- 类似 class component 中的`shouldComponentUpdate`的逻辑
- 组件被渲染时，若返回 false，则会进行此次 re-render；返回 true，则会忽略此次 re-render
- 默认使用 [Object.is](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 来判定 props 前后是否发生了变化
- props中有函数时，需要结合`useCallback`(最好用`useMemorizedFn`替代)来保证回调函数的不变性
- 使用第二个参数来设置自定义逻辑。逻辑同第二点

```
React.memo(someComponent, (prev, next) => {
  if(prev.id === next.id){
    return true; // 忽略此次渲染
  }
  return false; // 进行此次渲染
})
```
