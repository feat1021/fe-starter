import{_ as e,o as n,c as i,b as d}from"./app.12353158.js";const s={},a=d(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><hr><h2 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u7840\u77E5\u8BC6</h2><h3 id="\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> \u94A9\u5B50\u51FD\u6570</h3><blockquote><p>\u5176\u5B9E\u548C\u56DE\u8C03\u662F\u4E00\u4E2A\u6982\u5FF5\uFF0C\u5F53\u7CFB\u7EDF\u6267\u884C\u5230\u67D0\u5904\u65F6\uFF0C\u68C0\u67E5\u662F\u5426\u6709<code>hook</code>(\u94A9\u5B50)\uFF0C\u6709\u7684\u8BDD\u5C31\u4F1A\u6267\u884C\u56DE\u8C03\u3002</p></blockquote><p>\u901A\u4FD7\u7684\u8BF4\uFF0C<code>hook</code>\u5C31\u662F\u5728\u7A0B\u5E8F\u8FD0\u884C\u4E2D\uFF0C\u5728\u67D0\u4E2A\u7279\u5B9A\u7684\u4F4D\u7F6E\uFF0C\u6846\u67B6\u7684\u5F00\u53D1\u8005\u8BBE\u8BA1\u597D\u4E86\u4E00\u4E2A\u94A9\u5B50\u6765\u544A\u8BC9\u6211\u4EEC\u5F53\u524D\u7A0B\u5E8F\u5DF2\u7ECF\u8FD0\u884C\u5230\u7279\u5B9A\u7684\u4F4D\u7F6E\u4E86\uFF0C\u4F1A\u89E6\u53D1\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u63D0\u4F9B\u7ED9\u6211\u4EEC\uFF0C\u8BA9\u6211\u4EEC\u53EF\u4EE5\u5728\u751F\u547D\u5468\u671F\u7684\u7279\u5B9A\u9636\u6BB5\u8FDB\u884C\u76F8\u5173\u4E1A\u52A1\u4EE3\u7801\u7684\u7F16\u5199</p><p><img src="https://s.poetries.work/gitee/2020/07/77.jpeg" alt=""></p><p>\u603B\u7684\u6765\u8BF4\uFF0CVue\u7684\u751F\u547D\u5468\u671F\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B\u516B\u4E2A\u9636\u6BB5</p><ul><li><code>beforeCreate</code>\xA0\u5B9E\u4F8B\u521B\u5EFA\u524D</li><li><code>created</code>\xA0\u5B9E\u4F8B\u521B\u5EFA\u5B8C\u6210</li><li><code>beforeMount</code>\xA0\u6302\u8F7D\u524D</li><li><code>mounted</code>\xA0\u6302\u8F7D\u5B8C\u6210</li><li><code>beforeUpdate</code>\xA0\u66F4\u65B0\u524D</li><li><code>updated</code>\xA0\u66F4\u65B0\u5B8C\u6210</li><li><code>beforeDestory</code>\xA0\u9500\u6BC1\u524D</li><li><code>destoryed</code>\xA0\u9500\u6BC1\u5B8C\u6210</li></ul><h3 id="beforecreate" tabindex="-1"><a class="header-anchor" href="#beforecreate" aria-hidden="true">#</a> beforeCreate</h3><blockquote><p>\u8FD9\u4E2A\u94A9\u5B50\u662F<code>new Vue()</code>\u4E4B\u540E\u89E6\u53D1\u7684\u7B2C\u4E00\u4E2A\u94A9\u5B50\uFF0C\u5728\u5F53\u524D\u9636\u6BB5\u4E2D<code>data</code>\u3001<code>methods</code>\u3001<code>computed</code>\u4EE5\u53CA<code>watch</code>\u4E0A\u7684\u6570\u636E\u548C\u65B9\u6CD5\u5747\u4E0D\u80FD\u88AB\u8BBF\u95EE\u3002</p></blockquote><h3 id="created" tabindex="-1"><a class="header-anchor" href="#created" aria-hidden="true">#</a> created</h3><blockquote><p>\u8FD9\u4E2A\u94A9\u5B50\u5728\u5B9E\u4F8B\u521B\u5EFA\u5B8C\u6210\u540E\u53D1\u751F\uFF0C\u5F53\u524D\u9636\u6BB5\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6570\u636E\u89C2\u6D4B\uFF0C\u4E5F\u5C31\u662F\u53EF\u4EE5\u4F7F\u7528\u6570\u636E\uFF0C\u66F4\u6539\u6570\u636E\uFF0C\u5728\u8FD9\u91CC\u66F4\u6539\u6570\u636E\u4E0D\u4F1A\u89E6\u53D1<code>updated</code>\u51FD\u6570\u3002\u53EF\u4EE5\u505A\u4E00\u4E9B\u521D\u59CB\u6570\u636E\u7684\u83B7\u53D6\uFF0C\u5728\u5F53\u524D\u9636\u6BB5\u65E0\u6CD5\u4E0E<code>Dom</code>\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5982\u679C\u4F60\u975E\u8981\u60F3\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>vm.$nextTick</code>\u6765\u8BBF\u95EE<code>Dom</code>\u3002</p></blockquote><h3 id="beforemount" tabindex="-1"><a class="header-anchor" href="#beforemount" aria-hidden="true">#</a> beforeMount</h3><blockquote><p>\u8FD9\u4E2A\u94A9\u5B50\u53D1\u751F\u5728\u6302\u8F7D\u4E4B\u524D\uFF0C\u5728\u8FD9\u4E4B\u524D<code>template</code>\u6A21\u677F\u5DF2\u5BFC\u5165\u6E32\u67D3\u51FD\u6570\u7F16\u8BD1\u3002\u800C\u5F53\u524D\u9636\u6BB5\u865A\u62DF<code>Dom</code>\u5DF2\u7ECF\u521B\u5EFA\u5B8C\u6210\uFF0C\u5373\u5C06\u5F00\u59CB\u6E32\u67D3\u3002\u5728\u6B64\u65F6\u4E5F\u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u66F4\u6539\uFF0C\u4E0D\u4F1A\u89E6\u53D1<code>updated</code></p></blockquote><h3 id="mounted" tabindex="-1"><a class="header-anchor" href="#mounted" aria-hidden="true">#</a> mounted</h3><blockquote><p>\u8FD9\u4E2A\u94A9\u5B50\u5728\u6302\u8F7D\u5B8C\u6210\u540E\u53D1\u751F\uFF0C\u5728\u5F53\u524D\u9636\u6BB5\uFF0C\u771F\u5B9E\u7684<code>Dom</code>\u6302\u8F7D\u5B8C\u6BD5\uFF0C\u6570\u636E\u5B8C\u6210\u53CC\u5411\u7ED1\u5B9A\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u5230<code>Dom</code>\u8282\u70B9\uFF0C\u4F7F\u7528<code>$refs</code>\u5C5E\u6027\u5BF9<code>Dom</code>\u8FDB\u884C\u64CD\u4F5C\u3002\u4E5F\u53EF\u4EE5\u5411\u540E\u53F0\u53D1\u9001\u8BF7\u6C42\uFF0C\u62FF\u5230\u8FD4\u56DE\u6570\u636E</p></blockquote><h3 id="beforeupdate" tabindex="-1"><a class="header-anchor" href="#beforeupdate" aria-hidden="true">#</a> beforeUpdate</h3><blockquote><p>\u8FD9\u4E2A\u94A9\u5B50\u53D1\u751F\u5728\u66F4\u65B0\u4E4B\u524D\uFF0C\u4E5F\u5C31\u662F\u54CD\u5E94\u5F0F\u6570\u636E\u53D1\u751F\u66F4\u65B0\uFF0C\u865A\u62DFdom\u91CD\u65B0\u6E32\u67D3\u4E4B\u524D\u88AB\u89E6\u53D1\uFF0C\u4F60\u53EF\u4EE5\u5728\u5F53\u524D\u9636\u6BB5\u8FDB\u884C\u66F4\u6539\u6570\u636E\uFF0C\u4E0D\u4F1A\u9020\u6210\u91CD\u6E32\u67D3</p></blockquote><h3 id="updated" tabindex="-1"><a class="header-anchor" href="#updated" aria-hidden="true">#</a> updated</h3><blockquote><p>\u8FD9\u4E2A\u94A9\u5B50\u53D1\u751F\u5728\u66F4\u65B0\u5B8C\u6210\u4E4B\u540E\uFF0C\u5F53\u524D\u9636\u6BB5\u7EC4\u4EF6Dom\u5DF2\u5B8C\u6210\u66F4\u65B0\u3002\u8981\u6CE8\u610F\u7684\u662F\u907F\u514D\u5728\u6B64\u671F\u95F4\u66F4\u6539\u6570\u636E\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u9650\u5FAA\u73AF\u7684\u66F4\u65B0</p></blockquote><h3 id="beforedestroy" tabindex="-1"><a class="header-anchor" href="#beforedestroy" aria-hidden="true">#</a> beforeDestroy</h3><blockquote><p>\u8FD9\u4E2A\u94A9\u5B50\u53D1\u751F\u5728\u5B9E\u4F8B\u9500\u6BC1\u4E4B\u524D\uFF0C\u5728\u5F53\u524D\u9636\u6BB5\u5B9E\u4F8B\u5B8C\u5168\u53EF\u4EE5\u88AB\u4F7F\u7528\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u65F6\u8FDB\u884C\u5584\u540E\u6536\u5C3E\u5DE5\u4F5C\uFF0C\u6BD4\u5982\u6E05\u9664\u8BA1\u65F6\u5668\u3002</p></blockquote><h3 id="destroyed" tabindex="-1"><a class="header-anchor" href="#destroyed" aria-hidden="true">#</a> destroyed</h3><blockquote><p>\u8FD9\u4E2A\u94A9\u5B50\u53D1\u751F\u5728\u5B9E\u4F8B\u9500\u6BC1\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EA\u5269\u4E0B\u4E86dom\u7A7A\u58F3\u3002\u7EC4\u4EF6\u5DF2\u88AB\u62C6\u89E3\uFF0C\u6570\u636E\u7ED1\u5B9A\u88AB\u5378\u9664\uFF0C\u76D1\u542C\u88AB\u79FB\u51FA\uFF0C\u5B50\u5B9E\u4F8B\u4E5F\u7EDF\u7EDF\u88AB\u9500\u6BC1</p></blockquote><p>\u6CE8\u610F\u70B9</p><blockquote><p>\u5728\u4F7F\u7528\u751F\u547D\u5468\u671F\u65F6\u6709\u51E0\u70B9\u6CE8\u610F\u4E8B\u9879\u9700\u8981\u6211\u4EEC\u7262\u8BB0</p></blockquote><p>1.\u9664\u4E86<code>beforeCreate</code>\u548C<code>created</code>\u94A9\u5B50\u4E4B\u5916\uFF0C\u5176\u4ED6\u94A9\u5B50\u5747\u5728\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u671F\u95F4\u4E0D\u88AB\u8C03\u7528\u3002 2.\u4E0A\u6587\u66FE\u63D0\u5230\u8FC7\uFF0C\u5728<code>updated</code>\u7684\u65F6\u5019\u5343\u4E07\u4E0D\u8981\u53BB\u4FEE\u6539<code>data</code>\u91CC\u9762\u8D4B\u503C\u7684\u6570\u636E\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u3002 3.<code>Vue</code>\u7684\u6240\u6709\u751F\u547D\u5468\u671F\u51FD\u6570\u90FD\u662F\u81EA\u52A8\u7ED1\u5B9A\u5230<code>this</code>\u7684\u4E0A\u4E0B\u6587\u4E0A\u3002\u6240\u4EE5\uFF0C\u4F60\u8FD9\u91CC\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7684\u8BDD\uFF0C\u5C31\u4F1A\u51FA\u73B0<code>this</code>\u6307\u5411\u7684\u7236\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002\u539F\u56E0\u4E0B\u9762\u6E90\u7801\u90E8\u5206\u4F1A\u8BB2\u89E3</p><h2 id="\u6E90\u7801\u89E3\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u89E3\u8BFB" aria-hidden="true">#</a> \u6E90\u7801\u89E3\u8BFB</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// src/core/instance/lifecycle.js
// callhook \u51FD\u6570\u7684\u529F\u80FD\u5C31\u662F\u5728\u5F53\u524Dvue\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\uFF0C\u8C03\u7528\u67D0\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u6CE8\u518C\u7684\u6240\u6709\u56DE\u8C03\u51FD\u6570\u3002
// vm:Vue\u5B9E\u4F8B
// hook:\u751F\u547D\u5468\u671F\u540D\u5B57
export function callHook (vm: Component, hook: string) {
  pushTarget()
  const handlers = vm.$options[hook]
  // \u521D\u59CB\u5316\u5408\u5E76 options \u7684\u8FC7\u7A0B \u3001\uFF0C\u5C06\u5404\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u5408\u5E76\u5230 options \u91CC
  const info = \`\${hook} hook\`
  if (handlers) {
    for (let i = 0, j = handlers.length; i &lt; j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info)
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit(&#39;hook:&#39; + hook)
  }
  popTarget()
}

// src/core/util/error.js
export function invokeWithErrorHandling (
  handler: Function,
  context: any,
  args: null | any[],
  vm: any,
  info: string
) {
  let res
  try {
    res = args ? handler.apply(context, args) : handler.call(context)
    if (res &amp;&amp; !res._isVue &amp;&amp; isPromise(res) &amp;&amp; !res._handled) {
      res._handled = true
    }
  } catch (e) {
    handleError(e, vm, info)
  }
  return res
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6211\u4EEC\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230<code>callHook</code>\u4E2D\u8C03\u7528\u4E86<code>invokeWithErrorHandling</code>\u65B9\u6CD5\uFF0C\u5728<code>invokeWithErrorHandling</code>\u65B9\u6CD5\u4E2D\uFF0C\u4F7F\u7528\u4E86<code>apply</code>\u548C<code>call</code>\u6539\u53D8\u4E86<code>this</code>\u6307\u5411\uFF0C\u800C\u5728\u7BAD\u5934\u51FD\u6570\u4E2D<code>this</code>\u6307\u5411\u662F\u65E0\u6CD5\u6539\u53D8\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u7F16\u5199\u751F\u547D\u5468\u671F\u51FD\u6570\u7684\u65F6\u5019\u4E0D\u80FD\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</p></blockquote><h3 id="beforecreate\u548Ccreated" tabindex="-1"><a class="header-anchor" href="#beforecreate\u548Ccreated" aria-hidden="true">#</a> beforeCreate\u548Ccreated</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// src/core/instance/init
export function initMixin (Vue: Class&lt;Component&gt;) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    ...
    // \u5408\u5E76\u9009\u9879\u90E8\u5206\u5DF2\u7701\u7565

    initLifecycle(vm)
    // \u4E3B\u8981\u5C31\u662F\u7ED9vm\u5BF9\u8C61\u6DFB\u52A0\u4E86 $parent\u3001$root\u3001$children \u5C5E\u6027\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u5176\u5B83\u7684\u751F\u547D\u5468\u671F\u76F8\u5173\u7684\u6807\u8BC6
    initEvents(vm) // \u521D\u59CB\u5316\u4E8B\u4EF6\u76F8\u5173\u7684\u5C5E\u6027
    initRender(vm)  // vm \u6DFB\u52A0\u4E86\u4E00\u4E9B\u865A\u62DF dom\u3001slot \u7B49\u76F8\u5173\u7684\u5C5E\u6027\u548C\u65B9\u6CD5
    callHook(vm, &#39;beforeCreate&#39;)  // \u8C03\u7528 beforeCreate \u94A9\u5B50
    //\u4E0B\u9762 initInjections(vm) \u548C initProvide(vm) \u4E24\u4E2A\u914D\u5957\u4F7F\u7528\uFF0C\u7528\u4E8E\u5C06\u7236\u7EC4\u4EF6 _provided \u4E2D\u5B9A\u4E49\u7684\u503C\uFF0C\u901A\u8FC7 inject \u6CE8\u5165\u5230\u5B50\u7EC4\u4EF6\uFF0C\u4E14\u8FD9\u4E9B\u5C5E\u6027\u4E0D\u4F1A\u88AB\u89C2\u5BDF
    initInjections(vm)
    initState(vm)   // props\u3001methods\u3001data\u3001watch\u3001computed\u7B49\u6570\u636E\u521D\u59CB\u5316
    initProvide(vm)
    callHook(vm, &#39;created&#39;)  // \u8C03\u7528 created \u94A9\u5B50
  }
}

// src/core/instance/state
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch &amp;&amp; opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230<code>beforeCreate</code>\u94A9\u5B50\u8C03\u7528\u662F\u5728<code>initState</code>\u4E4B\u524D\u7684\uFF0C\u800C\u4ECE\u4E0A\u9762\u7684\u7B2C\u4E8C\u6BB5\u4EE3\u7801\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA<code>initState</code>\u7684\u4F5C\u7528\u662F\u5BF9<code>props</code>\u3001<code>methods</code>\u3001<code>data</code>\u3001<code>computed</code>\u3001<code>watch</code>\u7B49\u5C5E\u6027\u505A\u521D\u59CB\u5316\u5904\u7406\u3002</li><li>\u901A\u8FC7\u9605\u8BFB\u6E90\u7801\uFF0C\u6211\u4EEC\u66F4\u52A0\u6E05\u695A\u7684\u660E\u767D\u4E86\u5728beforeCreate\u94A9\u5B50\u7684\u65F6\u5019\u6211\u4EEC\u6CA1\u6709\u5BF9<code>props</code>\u3001<code>methods</code>\u3001<code>data</code>\u3001<code>computed</code>\u3001<code>watch</code>\u4E0A\u7684\u6570\u636E\u7684\u8BBF\u95EE\u6743\u9650\u3002\u5728<code>created</code>\u4E2D\u624D\u53EF\u4EE5</li></ul><h3 id="beforemount\u548Cmounted" tabindex="-1"><a class="header-anchor" href="#beforemount\u548Cmounted" aria-hidden="true">#</a> beforeMount\u548Cmounted</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// mountComponent \u6838\u5FC3\u5C31\u662F\u5148\u5B9E\u4F8B\u5316\u4E00\u4E2A\u6E32\u67D3Watcher
// \u5728\u5B83\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u4F1A\u8C03\u7528 updateComponent \u65B9\u6CD5
// \u4E24\u4E2A\u6838\u5FC3\u65B9\u6CD5 vm._render(\u751F\u6210\u865A\u62DFDom) \u548C vm._update(\u6620\u5C04\u5230\u771F\u5B9EDom)
// src/core/instance/lifecycle
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
    ...
  }
  callHook(vm, &#39;beforeMount&#39;)  // \u8C03\u7528 beforeMount \u94A9\u5B50

  let updateComponent
  if (p<wbr>rocess.env.NODE_ENV !== &#39;production&#39; &amp;&amp; config.performance &amp;&amp; mark) {
    updateComponent = () =&gt; {
    // \u5C06\u865A\u62DF Dom \u6620\u5C04\u5230\u771F\u5B9E Dom \u7684\u51FD\u6570\u3002
    // vm._update \u4E4B\u524D\u4F1A\u5148\u8C03\u7528 vm._render() \u51FD\u6570\u6E32\u67D3 VNode
      ...
      const vnode = vm._render()
      ...
      vm._update(vnode, hydrating)
    }
  } else {
    updateComponent = () =&gt; {
      vm._update(vm._render(), hydrating)
    }
  }

  new Watcher(vm, updateComponent, noop, {
    before () {
     // \u5148\u5224\u65AD\u662F\u5426 mouted \u5B8C\u6210 \u5E76\u4E14\u6CA1\u6709\u88AB destroyed
      if (vm._isMounted &amp;&amp; !vm._isDestroyed) {
        callHook(vm, &#39;beforeUpdate&#39;)
      }
    }
  }, true /* isRenderWatcher */)

  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, &#39;mounted&#39;)  //\u8C03\u7528 mounted \u94A9\u5B50
  }
  return vm
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u901A\u8FC7\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\u5728\u6267\u884C<code>vm._render()</code>\u51FD\u6570\u6E32\u67D3<code>VNode</code>\u4E4B\u524D\uFF0C\u6267\u884C\u4E86\xA0<code>beforeMount</code>\u94A9\u5B50\u51FD\u6570\uFF0C\u5728\u6267\u884C\u5B8C\xA0<code>vm._update()</code>\xA0\u628A<code>VNode patch</code>\u5230\u771F\u5B9EDom\u540E\uFF0C\u6267\u884C\xA0<code>mouted</code>\u94A9\u5B50\u3002\u4E5F\u5C31\u660E\u767D\u4E86\u4E3A\u4EC0\u4E48\u76F4\u5230<code>mounted</code>\u9636\u6BB5\u624D\u540D\u6B63\u8A00\u987A\u7684\u62FF\u5230\u4E86Dom</p></blockquote><h3 id="beforeupdate\u548Cupdated" tabindex="-1"><a class="header-anchor" href="#beforeupdate\u548Cupdated" aria-hidden="true">#</a> beforeUpdate\u548Cupdated</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // src/core/instance/lifecycle
 new Watcher(vm, updateComponent, noop, {
    before () {
     // \u5148\u5224\u65AD\u662F\u5426 mouted \u5B8C\u6210 \u5E76\u4E14\u6CA1\u6709\u88AB destroyed
      if (vm._isMounted &amp;&amp; !vm._isDestroyed) {
        callHook(vm, &#39;beforeUpdate&#39;)  // \u8C03\u7528 beforeUpdate \u94A9\u5B50
      }
    }
  }, true /* isRenderWatcher */)

 // src/core/observer/scheduler
 function callUpdatedHooks (queue) {
   let i = queue.length
   while (i--) {
     const watcher = queue[i]
     const vm = watcher.vm
     if (vm._watcher === watcher &amp;&amp; vm._isMounted &amp;&amp; !vm._isDestroyed) {
       // \u53EA\u6709\u6EE1\u8DB3\u5F53\u524D watcher \u4E3A vm._watcher\uFF08\u4E5F\u5C31\u662F\u5F53\u524D\u7684\u6E32\u67D3watcher\uFF09
       // \u4EE5\u53CA\u7EC4\u4EF6\u5DF2\u7ECF mounted \u5E76\u4E14\u6CA1\u6709\u88AB destroyed \u624D\u4F1A\u6267\u884C updated \u94A9\u5B50\u51FD\u6570\u3002
       callHook(vm, &#39;updated&#39;)  // \u8C03\u7528 updated \u94A9\u5B50
       }
     }
   }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E00\u6BB5\u4EE3\u7801\u5C31\u662F\u5728<code>beforeMount</code>\u548C<code>mounted</code>\u94A9\u5B50\u4E2D\u95F4\u51FA\u73B0\u7684\uFF0C\u90A3\u4E48<code>watcher</code>\u4E2D\u7A76\u7ADF\u505A\u4E86\u4E9B\u4EC0\u4E48\u5462\uFF1F</li><li>\u7B2C\u4E8C\u6BB5\u4EE3\u7801\u7684<code>callUpdatedHooks</code>\u51FD\u6570\u4E2D\u4EC0\u4E48\u65F6\u5019\u624D\u53EF\u4EE5\u6EE1\u8DB3\u6761\u4EF6\u5E76\u6267\u884C<code>updated</code>\u5462\uFF1F\u6211\u4EEC\u6765\u63A5\u7740\u5F80\u4E0B\u770B\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// src/instance/observer/watcher.js
export default class Watcher {
  ...
  constructor (
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    // \u5728\u5B83\u7684\u6784\u9020\u51FD\u6570\u91CC\u4F1A\u5224\u65AD isRenderWatcher\uFF0C
    // \u63A5\u7740\u628A\u5F53\u524D watcher \u7684\u5B9E\u4F8B\u8D4B\u503C\u7ED9 vm._watcher
    isRenderWatcher?: boolean
  ) {
    // \u8FD8\u628A\u5F53\u524D wathcer \u5B9E\u4F8B push \u5230 vm._watchers \u4E2D\uFF0C
    // vm._watcher \u662F\u4E13\u95E8\u7528\u6765\u76D1\u542C vm \u4E0A\u6570\u636E\u53D8\u5316\u7136\u540E\u91CD\u65B0\u6E32\u67D3\u7684\uFF0C
    // \u6240\u4EE5\u5B83\u662F\u4E00\u4E2A\u6E32\u67D3\u76F8\u5173\u7684 watcher\uFF0C\u56E0\u6B64\u5728 callUpdatedHooks \u51FD\u6570\u4E2D\uFF0C
    // \u53EA\u6709 vm._watcher \u7684\u56DE\u8C03\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u624D\u4F1A\u6267\u884C updated \u94A9\u5B50\u51FD\u6570
    this.vm = vm
    if (isRenderWatcher) {
      vm._watcher = this
    }
    vm._watchers.push(this)
    ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u770B\u5230\u8FD9\u91CC\u6211\u4EEC\u660E\u767D\u4E86<code>Vue</code>\u662F\u901A\u8FC7<code>watcher</code>\u6765\u76D1\u542C\u5B9E\u4F8B\u4E0A\u7684\u6570\u636E\u53D8\u5316\uFF0C\u8FDB\u800C\u63A7\u5236\u6E32\u67D3\u6D41\u7A0B</p></blockquote><h3 id="beforedestroy\u548Cdestroyed" tabindex="-1"><a class="header-anchor" href="#beforedestroy\u548Cdestroyed" aria-hidden="true">#</a> beforeDestroy\u548Cdestroyed</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // src/core/instance/lifecycle.js
  // \u5728 $destroy \u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5B83\u4F1A\u6267\u884C vm.__patch__(vm._vnode, null)
  // \u89E6\u53D1\u5B83\u5B50\u7EC4\u4EF6\u7684\u9500\u6BC1\u94A9\u5B50\u51FD\u6570\uFF0C\u8FD9\u6837\u4E00\u5C42\u5C42\u7684\u9012\u5F52\u8C03\u7528\uFF0C
  // \u6240\u4EE5 destroy \u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F\u662F\u5148\u5B50\u540E\u7236\uFF0C\u548C mounted \u8FC7\u7A0B\u4E00\u6837\u3002
  Vue.prototype.$destroy = function () {
    const vm: Component = this
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, &#39;beforeDestroy&#39;)  // \u8C03\u7528 beforeDestroy \u94A9\u5B50
    vm._isBeingDestroyed = true
    // \u4E00\u4E9B\u9500\u6BC1\u5DE5\u4F5C
    const parent = vm.$parent
    if (parent &amp;&amp; !parent._isBeingDestroyed &amp;&amp; !vm.$options.abstract) {
      remove(parent.$children, vm)
    }
    // \u62C6\u5378 watchers
    if (vm._watcher) {
      vm._watcher.teardown()
    }
    let i = vm._watchers.length
    while (i--) {
      vm._watchers[i].teardown()
    }
    ...
    vm._isDestroyed = true
    // \u8C03\u7528\u5F53\u524D rendered tree \u4E0A\u7684 destroy \u94A9\u5B50
    // \u53D1\u73B0\u5B50\u7EC4\u4EF6\uFF0C\u4F1A\u5148\u53BB\u9500\u6BC1\u5B50\u7EC4\u4EF6
    vm.__patch__(vm._vnode, null)
    callHook(vm, &#39;destroyed&#39;)  // \u8C03\u7528 destroyed \u94A9\u5B50
    // \u5173\u95ED\u6240\u6709\u5B9E\u4F8B\u4FA6\u542C\u5668\u3002
    vm.$off()
    // \u5220\u9664 __vue__ \u5F15\u7528
    if (vm.$el) {
      vm.$el.__vue__ = null
    }
    // \u91CA\u653E\u5FAA\u73AF\u5F15\u7528
    if (vm.$vnode) {
      vm.$vnode.parent = null
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u901A\u8FC7\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u6211\u4EEC\u4E86\u89E3\u4E86\u7EC4\u4EF6\u9500\u6BC1\u9636\u6BB5\u7684\u62C6\u5378\u8FC7\u7A0B\uFF0C\u5176\u4E2D\u4F1A\u6267\u884C\u4E00\u4E2A<code>__patch__</code>\u51FD\u6570</li><li>\u9664\u4E86\u8FD9\u516B\u79CD\u94A9\u5B50\u5916\uFF0C\u6211\u4EEC\u5728\u5B98\u7F51\u4E5F\u53EF\u4EE5\u67E5\u9605\u5230\u53E6\u5916\u51E0\u79CD\u4E0D\u5E38\u7528\u7684\u94A9\u5B50\uFF0C\u8FD9\u91CC\u5217\u4E3E\u51FA\u6765</li></ul><h2 id="\u51E0\u79CD\u4E0D\u5E38\u7528\u7684\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u51E0\u79CD\u4E0D\u5E38\u7528\u7684\u94A9\u5B50" aria-hidden="true">#</a> \u51E0\u79CD\u4E0D\u5E38\u7528\u7684\u94A9\u5B50</h2><h3 id="activated" tabindex="-1"><a class="header-anchor" href="#activated" aria-hidden="true">#</a> activated</h3><blockquote><p><code>keep-alive</code>\xA0\u7EC4\u4EF6\u6FC0\u6D3B\u65F6\u8C03\u7528\uFF0C\u8BE5\u94A9\u5B50\u5728\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u671F\u95F4\u4E0D\u88AB\u8C03\u7528\u3002</p></blockquote><h3 id="deactivated" tabindex="-1"><a class="header-anchor" href="#deactivated" aria-hidden="true">#</a> deactivated</h3><blockquote><p><code>keep-alive</code>\xA0\u7EC4\u4EF6\u505C\u7528\u65F6\u8C03\u7528\uFF0C\u8BE5\u94A9\u5B50\u5728\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u671F\u95F4\u4E0D\u88AB\u8C03\u7528\u3002</p></blockquote><h3 id="errorcaptured" tabindex="-1"><a class="header-anchor" href="#errorcaptured" aria-hidden="true">#</a> errorCaptured</h3><ul><li>\u5F53\u6355\u83B7\u4E00\u4E2A\u6765\u81EA\u5B50\u5B59\u7EC4\u4EF6\u7684\u9519\u8BEF\u65F6\u88AB\u8C03\u7528\u3002\u6B64\u94A9\u5B50\u4F1A\u6536\u5230\u4E09\u4E2A\u53C2\u6570\uFF1A\u9519\u8BEF\u5BF9\u8C61\u3001\u53D1\u751F\u9519\u8BEF\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u4EE5\u53CA\u4E00\u4E2A\u5305\u542B\u9519\u8BEF\u6765\u6E90\u4FE1\u606F\u7684\u5B57\u7B26\u4E32\u3002\u6B64\u94A9\u5B50\u53EF\u4EE5\u8FD4\u56DE\xA0<code>false</code>\xA0\u4EE5\u963B\u6B62\u8BE5\u9519\u8BEF\u7EE7\u7EED\u5411\u4E0A\u4F20\u64AD</li><li>\u4F60\u53EF\u4EE5\u5728\u6B64\u94A9\u5B50\u4E2D\u4FEE\u6539\u7EC4\u4EF6\u7684\u72B6\u6001\u3002\u56E0\u6B64\u5728\u6A21\u677F\u6216\u6E32\u67D3\u51FD\u6570\u4E2D\u8BBE\u7F6E\u5176\u5B83\u5185\u5BB9\u7684\u77ED\u8DEF\u6761\u4EF6\u975E\u5E38\u91CD\u8981\uFF0C\u5B83\u53EF\u4EE5\u9632\u6B62\u5F53\u4E00\u4E2A\u9519\u8BEF\u88AB\u6355\u83B7\u65F6\u8BE5\u7EC4\u4EF6\u8FDB\u5165\u4E00\u4E2A\u65E0\u9650\u7684\u6E32\u67D3\u5FAA\u73AF\u3002</li></ul>`,52),l=[a];function r(c,o){return n(),i("div",null,l)}var t=e(s,[["render",r],["__file","Vue.html.vue"]]);export{t as default};
