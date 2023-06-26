# <center><h1>性能优化-props</h1></center>

## 说明

> 以下内容都是聚焦于组件 props，或者是传递 props 给组件之前

## 1. 尽量使用 `基本类型` 属性

- 基本类型: `number` `string` `boolean` `null` `undefined` `symbol` `bigint`
- 有强相关性的属性可以合并成对象
- react 默认采用 `浅比较(Object.is)` 来判定数据是否发生变化
  - 非基本类型使用比较内存地址来判定是否变更，所以【直接修改对象的属性】或者【直接调用数组方法】$\color{red}{不会}$ 修改内存地址，不会触发变更。
  - 对象可以监听内部基本类型属性，或者序列化
  - 数组可以序列化，或者重新定义数组方法

## 2. 回调函数的传递

- 使用匿名箭头函数
  - 可以传递额外参数
  - $\color{red}{无法解决}$父组件 re-render，子组件也 re-render 的性能问题
  ```tsx
  <TimePicker
    onChange={(value, valueStr) => handleChange(valueStr, 'minValue')}
    value={searchValue.minValue ? moment(searchValue.minValue, 'HH:mm:ss') : null}
  />
  ```
- 不使用匿名箭头函数

  - 子组件触发时传递参数
  - 拆成多个事件
  - 使用 `useMemoizedFn` + `React.memo`来做到，在父组件发生 re-render 时，子组件的参数没有发生改变，子组件不 re-render

  ```tsx
  // 父组件中
  const handleEdit = useMemoizedFn((id: string) => {
    ... // 其内可以使用本组件的外部值
  });

  <FormAction
    ...
    onEdit={handleEdit}
    ...
  />

  // 子组件中
  const FormAction = (props: IFormActionProps) => {
    const { ..., onEdit, ...  } = props;
    ...

    const handleClick = () => {
      onEdit?.(id)
    }
  }

  export default React.memo(FormAction, deepEqual);
  ```

## 3. 解构并赋予默认值

- 不使用解构的$\color{red}{坏处}$
  - 每一次从大对象 `props` 中获取属性需要消耗性能
  - 每一次的值异常都要判定，比如【问号判空】、【感叹号断言】、【默认值赋予】等
  - 代码会不简洁

```ts
const control = getControl(controlId, controls);
const originControl = getControl(control?.componentSettings?.srcColumnId || '', props.relatedForm?.template?.controls) || {};
return basicInputComponents(originControl.controlId, originControl.type, props.relatedForm?.template?.controls);
```

**对比**

```ts
const { relatedForm } = props;
const { template } = relatedForm || {};
// 别名
const { controls: relatedControls = [] } = template || {};
const control = getControl(controlId, controls);
const { componentSettings } = control || {};
const { srcColumnId = '' } = componentSettings || {};

const originControl = getControl(srcColumnId, relatedControls) || {};
return basicInputComponents(originControl.controlId, originControl.type, relatedControls);
```

- 解构赋予默认值是在属性值为`undefined`的时候才生效，`null`不会生效

```ts
const targetObj = { a: 0, b: undefined, c: null, d: [], e: {} };
const { a = '默认值', b = '默认值', c = '默认值', d = '默认值', e = '默认值' } = targetObj;

console.log('a:', a); // 0
console.log('b:', b); // 默认值
console.log('c:', c); // null
console.log('d:', d); // []
console.log('e:', e); // {}
```

- 默认值为非基本类型时，请注意不要作为 hooks 的监听值，会导致`死循环`问题

## 4. React.memo

- 类似 **class component** 中的`shouldComponentUpdate`的逻辑
- 组件被渲染时，若返回 $\color{red}{false}$，则会进行此次 re-render；返回 $\color{red}{true}$，则会忽略此次 re-render。可以有效避免父组件渲染导致的无效子组件渲染
- 默认使用 [Object.is](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)浅比较的方式，来判定 props 前后是否发生了变化
- props 中有函数时，需要结合`useCallback`(最好用`useMemorizedFn`替代)来保证回调函数的不变性
  - `useCallback` 无法有效处理有外部依赖的函数
- 使用第二个参数来设置自定义逻辑(可以采用`react-fase-compare`插件)。逻辑同第二点

```ts
React.memo(someComponent, (prev, next) => {
  if (prev.id === next.id) {
    return true; // 忽略此次渲染
  }
  return false; // 进行此次渲染
});
```

- 没有特殊判定，直接可以使用 `react-fast-compare`

```ts
import isEqual from 'react-fast-compare';
...
export default React.memo(MyComponent, isEqual);
```
