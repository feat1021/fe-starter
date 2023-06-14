# <center><h1>性能优化-state</h1></center>

## 1. state 类型

- 尽量使用 `基本类型` 属性，比较时方便
- 若必须使用复杂对象，或多个基本属性有联动，则建议使用`reducer`来统一管理
- 修改复杂大对象时，尽量使用`immutability-helper`，可以保证除了修改点和父级点之外的点没有变动；进而减少子组件的 re-render

## 2. 使用中的 tips

- setState 时，使用函数，可以有效获取上次的真实值，防止因为异步导致的数据滞后的问题
- React 接管事件中，setState 是异步更新的且会合并，即多次 setState，只会有一次 re-render，且 re-render 时拿到的 state 是上次的 state;
- 非 React 接管事件中，比如 `Promise`、`setTimeout`、`addEventListener` 等，setState 是同步更新且不会合并，多次 setState 会产生多次 re-render（$\color{red}React18$ 后都会合并更新，并只 re-render 一次; $\color{red}React18$ 之前，可以尝试使用`unstable_batchupdate`）

## 3. 其他

- 计算 state，使用·来计算出数据，以保证计算数据的不变性的方式，降低 re-render(注意依赖)
- 不希望某个 state，或被解构的属性作为依赖项，但是希望在 useMemo 或 useEffect 中使用时，可以考虑使用`useLatest`; 以降低可能发生变动的源头的方式，来降低 re-render 的可能性
- 为了解决异步数据 undefined 的问题，一般需要设置 isLoading 状态，来区分两种渲染 div; 此时需要注意 setLoading 要放在最后，因为很有可能当前处于同步更新中，不会 `batchUpdate`
