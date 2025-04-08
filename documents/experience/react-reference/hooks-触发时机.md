# <center>hooks 触发时机</center>

### 1. 初始化/挂载阶段：

useState: 在组件挂载时初始化状态。
useEffect: 在组件挂载后执行副作用操作。

### 2. 更新阶段：

useState: 在每次组件渲染时更新状态。
useEffect: 在组件更新后执行副作用操作。
useUpdateEffect: 在组件更新后执行副作用操作。

### 3. 卸载阶段：

useEffect: 在组件卸载前执行清理操作。

### 4. 布局和重渲染：

useLayoutEffect: 在 DOM 更新后立即同步执行副作用操作。

## 1. 说明

### 1.1 初始化，执行到 jsx 之前

- useState: 初始化 state
- usePrevious: 初始化值，一般为 null
- useMemo: 进行第一次计算
- useRef: 若需要配合 ref 挂载到 dom 上，则一般为 null，即还没有挂载成功
- useDebounce: 已经生成对应函数的引用
- useHover: 初始化，需配合 ref 使用，未挂载
- useSize: 初始化，需配合 ref 使用，未挂载

### 1.2 完成初始化，执行完成 jsx 解析

- useEffect:
