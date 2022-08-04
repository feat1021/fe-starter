import{_ as e,o as i,c as n,b as d}from"./app.12353158.js";var l="/assets/20210307225291.8ef94f05.png",s="/assets/20220307225416.ae3b54e9.png",c="/assets/20220307225439.d612213d.jpeg",o="/assets/20210408091523.f3b80ed3.png",t="/assets/20210328214834.475410e7.png",r="/assets/20210328112610.23237621.png",a="/assets/20210408093135.fa723c04.png",v="/assets/20210407162653.149decaa.png",u="/assets/20210504211204.eddec198.png";const m={},b=d('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><hr><h3 id="_1-vue-\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-vue-\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a> 1 Vue \u54CD\u5E94\u5F0F\u539F\u7406</h3><blockquote><p>Vue \u7684\u54CD\u5E94\u5F0F\u539F\u7406\u662F\u6838\u5FC3\u662F\u901A\u8FC7 ES5 \u7684\u4FDD\u62A4\u5BF9\u8C61\u7684\xA0<code>Object.defindeProperty</code>\xA0\u4E2D\u7684\u8BBF\u95EE\u5668\u5C5E\u6027\u4E2D\u7684 get \u548C set \u65B9\u6CD5\uFF0Cdata \u4E2D\u58F0\u660E\u7684\u5C5E\u6027\u90FD\u88AB\u6DFB\u52A0\u4E86\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u5F53\u8BFB\u53D6 data \u4E2D\u7684\u6570\u636E\u65F6\u81EA\u52A8\u8C03\u7528 get \u65B9\u6CD5\uFF0C\u5F53\u4FEE\u6539 data \u4E2D\u7684\u6570\u636E\u65F6\uFF0C\u81EA\u52A8\u8C03\u7528 set \u65B9\u6CD5\uFF0C\u68C0\u6D4B\u5230\u6570\u636E\u7684\u53D8\u5316\uFF0C\u4F1A\u901A\u77E5\u89C2\u5BDF\u8005 Wacher\uFF0C\u89C2\u5BDF\u8005 Wacher\u81EA\u52A8\u89E6\u53D1\u91CD\u65B0render \u5F53\u524D\u7EC4\u4EF6\uFF08\u5B50\u7EC4\u4EF6\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF09,\u751F\u6210\u65B0\u7684\u865A\u62DF DOM \u6811\uFF0CVue \u6846\u67B6\u4F1A\u904D\u5386\u5E76\u5BF9\u6BD4\u65B0\u865A\u62DF DOM \u6811\u548C\u65E7\u865A\u62DF DOM \u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u5DEE\u522B\uFF0C\u5E76\u8BB0\u5F55\u4E0B\u6765\uFF0C\u6700\u540E\uFF0C\u52A0\u8F7D\u64CD\u4F5C\uFF0C\u5C06\u6240\u6709\u8BB0\u5F55\u7684\u4E0D\u540C\u70B9\uFF0C\u5C40\u90E8\u4FEE\u6539\u5230\u771F\u5B9E DOM\u6811\u4E0A\u3002</p></blockquote><p><img src="'+l+'" alt=""></p><ul><li>\u865A\u62DFDOM (Virtaul DOM): \u7528 js \u5BF9\u8C61\u6A21\u62DF\u7684\uFF0C\u4FDD\u5B58\u5F53\u524D\u89C6\u56FE\u5185\u6240\u6709 DOM \u8282\u70B9\u5BF9\u8C61\u57FA\u672C\u63CF\u8FF0\u5C5E\u6027\u548C\u8282\u70B9\u95F4\u5173\u7CFB\u7684\u6811\u7ED3\u6784\u3002\u7528 js \u5BF9\u8C61\uFF0C\u63CF\u8FF0\u6BCF\u4E2A\u8282\u70B9\uFF0C\u53CA\u5176\u7236\u5B50\u5173\u7CFB\uFF0C\u5F62\u6210\u865A\u62DF DOM \u5BF9\u8C61\u6811\u7ED3\u6784\u3002</li><li>\u56E0\u4E3A\u53EA\u8981\u5728\xA0<code>data</code>\xA0\u4E2D\u58F0\u660E\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u57FA\u672C\u4E0D\u5B58\u5728\u6570\u636E\u4E0D\u54CD\u5E94\u95EE\u9898\uFF0C\u6240\u4EE5\u91CD\u70B9\u4ECB\u7ECD\u6570\u7EC4\u548C\u5BF9\u8C61\u5728<code>vue</code>\u4E2D\u7684\u6570\u636E\u54CD\u5E94\u95EE\u9898\uFF0Cvue\u53EF\u4EE5\u68C0\u6D4B\u5BF9\u8C61\u5C5E\u6027\u7684\u4FEE\u6539\uFF0C\u4F46\u65E0\u6CD5\u76D1\u542C\u6570\u7EC4\u7684\u6240\u6709\u53D8\u52A8\u53CA\u5BF9\u8C61\u7684\u65B0\u589E\u548C\u5220\u9664\uFF0C\u53EA\u80FD\u4F7F\u7528\u6570\u7EC4\u53D8\u5F02\u65B9\u6CD5\u53CA<code>$set</code>\u65B9\u6CD5\u3002</li></ul><p><img src="'+s+'" alt=""></p><blockquote><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>arrayMethods</code>\xA0\u9996\u5148\u7EE7\u627F\u4E86\xA0<code>Array</code>\uFF0C\u7136\u540E\u5BF9\u6570\u7EC4\u4E2D\u6240\u6709\u80FD\u6539\u53D8\u6570\u7EC4\u81EA\u8EAB\u7684\u65B9\u6CD5\uFF0C\u5982\xA0<code>push</code>\u3001<code>pop</code>\xA0\u7B49\u8FD9\u4E9B\u65B9\u6CD5\u8FDB\u884C\u91CD\u5199\u3002\u91CD\u5199\u540E\u7684\u65B9\u6CD5\u4F1A\u5148\u6267\u884C\u5B83\u4EEC\u672C\u8EAB\u539F\u6709\u7684\u903B\u8F91\uFF0C\u5E76\u5BF9\u80FD\u589E\u52A0\u6570\u7EC4\u957F\u5EA6\u7684 3 \u4E2A\u65B9\u6CD5\xA0<code>push</code>\u3001<code>unshift</code>\u3001<code>splice</code>\xA0\u65B9\u6CD5\u505A\u4E86\u5224\u65AD\uFF0C\u83B7\u53D6\u5230\u63D2\u5165\u7684\u503C\uFF0C\u7136\u540E\u628A\u65B0\u6DFB\u52A0\u7684\u503C\u53D8\u6210\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u5E76\u4E14\u518D\u8C03\u7528\xA0<code>ob.dep.notify()</code>\xA0\u624B\u52A8\u89E6\u53D1\u4F9D\u8D56\u901A\u77E5\uFF0C\u8FD9\u5C31\u5F88\u597D\u5730\u89E3\u91CA\u4E86\u7528\xA0<code>vm.items.splice</code>(<code>newLength</code>) \u65B9\u6CD5\u53EF\u4EE5\u68C0\u6D4B\u5230\u53D8\u5316</p></blockquote><blockquote><p>\u603B\u7ED3\uFF1AVue \u91C7\u7528\u6570\u636E\u52AB\u6301\u7ED3\u5408\u53D1\u5E03---\u8BA2\u9605\u6A21\u5F0F\u7684\u65B9\u6CD5\uFF0C\u901A\u8FC7\xA0<code>Object.defineProperty()</code>\xA0\u6765\u52AB\u6301\u5404\u4E2A\u5C5E\u6027\u7684 setter\uFF0Cgetter\uFF0C\u5728\u6570\u636E\u53D8\u52A8\u65F6\u53D1\u5E03\u6D88\u606F\u7ED9\u8BA2\u9605\u8005\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u76D1\u542C\u56DE\u8C03\u3002</p></blockquote><p><img src="'+c+`" alt=""></p><ul><li><code>Observer</code>\xA0\u904D\u5386\u6570\u636E\u5BF9\u8C61\uFF0C\u7ED9\u6240\u6709\u5C5E\u6027\u52A0\u4E0A\xA0<code>setter</code>\xA0\u548C\xA0<code>getter</code>\uFF0C\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316</li><li><code>compile</code>\xA0\u89E3\u6790\u6A21\u677F\u6307\u4EE4\uFF0C\u5C06\u6A21\u677F\u4E2D\u7684\u53D8\u91CF\u66FF\u6362\u6210\u6570\u636E\uFF0C\u7136\u540E\u521D\u59CB\u5316\u6E32\u67D3\u9875\u9762\u89C6\u56FE\uFF0C\u5E76\u5C06\u6BCF\u4E2A\u6307\u4EE4\u5BF9\u5E94\u7684\u8282\u70B9\u7ED1\u5B9A\u66F4\u65B0\u51FD\u6570\uFF0C\u6DFB\u52A0\u76D1\u542C\u6570\u636E\u7684\u8BA2\u9605\u8005\uFF0C\u4E00\u65E6\u6570\u636E\u6709\u53D8\u52A8\uFF0C\u6536\u5230\u901A\u77E5\uFF0C\u66F4\u65B0\u89C6\u56FE</li></ul><blockquote><p><code>Watcher</code>\xA0\u8BA2\u9605\u8005\u662F\xA0<code>Observer</code>\xA0\u548C\xA0<code>Compile</code>\xA0\u4E4B\u95F4\u901A\u4FE1\u7684\u6865\u6881\uFF0C\u4E3B\u8981\u505A\u7684\u4E8B\u60C5</p></blockquote><ul><li>\u5728\u81EA\u8EAB\u5B9E\u4F8B\u5316\u65F6\u5F80\u5C5E\u6027\u8BA2\u9605\u5668 (<code>dep</code>) \u91CC\u9762\u6DFB\u52A0\u81EA\u5DF1</li><li>\u5F85\u5C5E\u6027\u53D8\u52A8\xA0<code>dep.notice()</code>\xA0\u901A\u77E5\u65F6\uFF0C\u8C03\u7528\u81EA\u8EAB\u7684\xA0<code>update()</code>\xA0\u65B9\u6CD5\uFF0C\u5E76\u89E6\u53D1\xA0<code>Compile</code>\xA0\u4E2D\u7ED1\u5B9A\u7684\u56DE\u8C03</li></ul><p>Object.defineProperty()\uFF0C\u90A3\u4E48\u5B83\u7684\u7528\u6CD5\u662F\u4EC0\u4E48\uFF0C\u4EE5\u53CA\u4F18\u7F3A\u70B9\u662F\u4EC0\u4E48\u5462\uFF1F</p><ul><li>\u53EF\u4EE5\u68C0\u6D4B\u5BF9\u8C61\u4E2D\u6570\u636E\u53D1\u751F\u7684\u4FEE\u6539</li><li>\u5BF9\u4E8E\u590D\u6742\u7684\u5BF9\u8C61\uFF0C\u5C42\u7EA7\u5F88\u6DF1\u7684\u8BDD\uFF0C\u662F\u4E0D\u53CB\u597D\u7684\uFF0C\u9700\u8981\u7ECF\u884C\u6DF1\u5EA6\u76D1\u542C\uFF0C\u8FD9\u6837\u5B50\u5C31\u9700\u8981\u9012\u5F52\u5230\u5E95\uFF0C\u8FD9\u4E5F\u662F\u5B83\u7684\u7F3A\u70B9\u3002</li><li>\u5BF9\u4E8E\u4E00\u4E2A\u5BF9\u8C61\u4E2D\uFF0C\u5982\u679C\u4F60\u65B0\u589E\u52A0\u5C5E\u6027\uFF0C\u5220\u9664\u5C5E\u6027\uFF0C**Object.defineProperty()**\u662F\u4E0D\u80FD\u89C2\u6D4B\u5230\u7684\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5982\u4F55\u89E3\u51B3\u5462\uFF1F\u53EF\u4EE5\u901A\u8FC7<code>Vue.set()</code>\u548C<code>Vue.delete()</code>\u6765\u5B9E\u73B0\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6A21\u62DF Vue \u4E2D\u7684 data \u9009\u9879
let data = {
    msg: &#39;hello&#39;
}
// \u6A21\u62DF Vue \u7684\u5B9E\u4F8B
let vm = {}
// \u6570\u636E\u52AB\u6301:\u5F53\u8BBF\u95EE\u6216\u8005\u8BBE\u7F6E vm \u4E2D\u7684\u6210\u5458\u7684\u65F6\u5019\uFF0C\u505A\u4E00\u4E9B\u5E72\u9884\u64CD\u4F5C
Object.defineProperty(vm, &#39;msg&#39;, {
  // \u53EF\u679A\u4E3E(\u53EF\u904D\u5386)
  enumerable: true,
  // \u53EF\u914D\u7F6E(\u53EF\u4EE5\u4F7F\u7528 delete \u5220\u9664\uFF0C\u53EF\u4EE5\u901A\u8FC7 defineProperty \u91CD\u65B0\u5B9A\u4E49)
  configurable: true,
  // \u5F53\u83B7\u53D6\u503C\u7684\u65F6\u5019\u6267\u884C
  get () {
    console.log(&#39;get: &#39;, data.msg)
    return data.msg
  },
  // \u5F53\u8BBE\u7F6E\u503C\u7684\u65F6\u5019\u6267\u884C
  set (newValue) {
    console.log(&#39;set: &#39;, newValue)
    if (newValue === data.msg) {
      return
    }
    data.msg = newValue
    // \u6570\u636E\u66F4\u6539\uFF0C\u66F4\u65B0 DOM \u7684\u503C
    document.querySelector(&#39;#app&#39;).textContent = data.msg
  }
})

// \u6D4B\u8BD5
vm.msg = &#39;Hello World&#39;
console.log(vm.msg)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3.x\u54CD\u5E94\u5F0F\u6570\u636E\u539F\u7406</p><blockquote><p><code>Vue3.x</code>\u6539\u7528<code>Proxy</code>\u66FF\u4EE3<code>Object.defineProperty</code>\u3002\u56E0\u4E3A<code>Proxy</code>\u53EF\u4EE5\u76F4\u63A5\u76D1\u542C<code>\u5BF9\u8C61\u548C\u6570\u7EC4</code>\u7684\u53D8\u5316\uFF0C\u5E76\u4E14\u6709\u591A\u8FBE13\u79CD\u62E6\u622A\u65B9\u6CD5\u3002\u5E76\u4E14\u4F5C\u4E3A\u65B0\u6807\u51C6\u5C06\u53D7\u5230\u6D4F\u89C8\u5668\u5382\u5546\u91CD\u70B9\u6301\u7EED\u7684\u6027\u80FD\u4F18\u5316\u3002</p></blockquote><p><code>Proxy</code>\u53EA\u4F1A\u4EE3\u7406\u5BF9\u8C61\u7684\u7B2C\u4E00\u5C42\uFF0C\u90A3\u4E48<code>Vue3</code>\u53C8\u662F\u600E\u6837\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\u7684\u5462\uFF1F</p><blockquote><p>\u5224\u65AD\u5F53\u524D<code>Reflect.get\u7684</code>\u8FD4\u56DE\u503C\u662F\u5426\u4E3A<code>Object</code>\uFF0C\u5982\u679C\u662F\u5219\u518D\u901A\u8FC7<code>reactive</code>\u65B9\u6CD5\u505A\u4EE3\u7406\uFF0C \u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u6DF1\u5EA6\u89C2\u6D4B\u3002</p></blockquote><p>\u76D1\u6D4B\u6570\u7EC4\u7684\u65F6\u5019\u53EF\u80FD\u89E6\u53D1\u591A\u6B21get/set\uFF0C\u90A3\u4E48\u5982\u4F55\u9632\u6B62\u89E6\u53D1\u591A\u6B21\u5462\uFF1F</p><blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u5224\u65AD<code>key</code>\u662F\u5426\u4E3A\u5F53\u524D\u88AB\u4EE3\u7406\u5BF9\u8C61<code>target</code>\u81EA\u8EAB\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u5224\u65AD\u65E7\u503C\u4E0E\u65B0\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u53EA\u6709\u6EE1\u8DB3\u4EE5\u4E0A\u4E24\u4E2A\u6761\u4EF6\u4E4B\u4E00\u65F6\uFF0C\u624D\u6709\u53EF\u80FD\u6267\u884C<code>trigger</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6A21\u62DF Vue \u4E2D\u7684 data \u9009\u9879
let data = {
  msg: &#39;hello&#39;,
  count: 0
}
// \u6A21\u62DF Vue \u5B9E\u4F8B
let vm = new Proxy(data, {
  // \u5F53\u8BBF\u95EE vm \u7684\u6210\u5458\u4F1A\u6267\u884C
  get (target, key) {
    console.log(&#39;get, key: &#39;, key, target[key])
    return target[key]
  },
  // \u5F53\u8BBE\u7F6E vm \u7684\u6210\u5458\u4F1A\u6267\u884C
  set (target, key, newValue) {
    console.log(&#39;set, key: &#39;, key, newValue)
    if (target[key] === newValue) {
      return
    }
    target[key] = newValue
    document.querySelector(&#39;#app&#39;).textContent = target[key]
  }
})

// \u6D4B\u8BD5
vm.msg = &#39;Hello World&#39;
console.log(vm.msg)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proxy \u76F8\u6BD4\u4E8E defineProperty \u7684\u4F18\u52BF</p><ul><li>\u6570\u7EC4\u53D8\u5316\u4E5F\u80FD\u76D1\u542C\u5230</li><li>\u4E0D\u9700\u8981\u6DF1\u5EA6\u904D\u5386\u76D1\u542C</li></ul><blockquote><p><code>Proxy</code>\xA0\u662F\xA0<code>ES6</code>\xA0\u4E2D\u65B0\u589E\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u7528\u6765\u81EA\u5B9A\u4E49\u5BF9\u8C61\u4E2D\u7684\u64CD\u4F5C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let p = new Proxy(target, handler);
// \`target\` \u4EE3\u8868\u9700\u8981\u6DFB\u52A0\u4EE3\u7406\u7684\u5BF9\u8C61
// \`handler\` \u7528\u6765\u81EA\u5B9A\u4E49\u5BF9\u8C61\u4E2D\u7684\u64CD\u4F5C
// \u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u4F7F\u7528 Proxy \u6765\u5B9E\u73B0\u4E00\u4E2A\u6570\u636E\u7ED1\u5B9A\u548C\u76D1\u542C

let onWatch = (obj, setBind, getLogger) =&gt; {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      setBind(value);
      return Reflect.set(target, property, value);
    }
  };
  return new Proxy(obj, handler);
};

let obj = { a: 1 }
let value
let p = onWatch(obj, (v) =&gt; {
  value = v
}, (target, property) =&gt; {
  console.log(\`Get &#39;\${property}&#39; = \${target[property]}\`);
})
p.a = 2 // bind \`value\` to \`2\`
p.a // -&gt; Get &#39;a&#39; = 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3</p><p><img src="`+o+`" alt=""></p><ul><li>Vue <ul><li>\u8BB0\u5F55\u4F20\u5165\u7684\u9009\u9879\uFF0C\u8BBE\u7F6E\xA0<code>$data/$el</code></li><li>\u628A\xA0<code>data</code>\xA0\u7684\u6210\u5458\u6CE8\u5165\u5230\xA0<code>Vue</code>\xA0\u5B9E\u4F8B</li><li>\u8D1F\u8D23\u8C03\u7528\xA0<code>Observer</code>\xA0\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F\u5904\u7406(\u6570\u636E\u52AB\u6301)</li><li>\u8D1F\u8D23\u8C03\u7528\xA0<code>Compiler</code>\xA0\u7F16\u8BD1\u6307\u4EE4/\u63D2\u503C\u8868\u8FBE\u5F0F\u7B49</li></ul></li><li><code>Observer</code><ul><li>\u6570\u636E\u52AB\u6301 <ul><li>\u8D1F\u8D23\u628A\xA0<code>data</code>\xA0\u4E2D\u7684\u6210\u5458\u8F6C\u6362\u6210\xA0<code>getter/setter</code></li><li>\u8D1F\u8D23\u628A\u591A\u5C42\u5C5E\u6027\u8F6C\u6362\u6210\xA0<code>getter/setter</code></li><li>\u5982\u679C\u7ED9\u5C5E\u6027\u8D4B\u503C\u4E3A\u65B0\u5BF9\u8C61\uFF0C\u628A\u65B0\u5BF9\u8C61\u7684\u6210\u5458\u8BBE\u7F6E\u4E3A\xA0<code>getter/setter</code></li></ul></li><li>\u6DFB\u52A0\xA0<code>Dep</code>\xA0\u548C\xA0<code>Watcher</code>\xA0\u7684\u4F9D\u8D56\u5173\u7CFB</li><li>\u6570\u636E\u53D8\u5316\u53D1\u9001\u901A\u77E5</li></ul></li><li><code>Compiler</code><ul><li>\u8D1F\u8D23\u7F16\u8BD1\u6A21\u677F\uFF0C\u89E3\u6790\u6307\u4EE4/\u63D2\u503C\u8868\u8FBE\u5F0F</li><li>\u8D1F\u8D23\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3\u8FC7\u7A0B</li><li>\u5F53\u6570\u636E\u53D8\u5316\u540E\u91CD\u65B0\u6E32\u67D3</li></ul></li><li><code>Dep</code><ul><li>\u6536\u96C6\u4F9D\u8D56\uFF0C\u6DFB\u52A0\u8BA2\u9605\u8005(<code>watcher</code>)</li><li>\u901A\u77E5\u6240\u6709\u8BA2\u9605\u8005</li></ul></li><li><code>Watcher</code><ul><li>\u81EA\u8EAB\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u5F80<code>dep</code>\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u81EA\u5DF1</li><li>\u5F53\u6570\u636E\u53D8\u5316<code>dep</code>\u901A\u77E5\u6240\u6709\u7684\xA0<code>Watcher</code>\xA0\u5B9E\u4F8B\u66F4\u65B0\u89C6\u56FE</li></ul></li></ul><h3 id="_2-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 2 \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F</h3><p>1. \u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F</p><ul><li>\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F <ul><li>\u8BA2\u9605\u8005</li><li>\u53D1\u5E03\u8005</li><li>\u4FE1\u53F7\u4E2D\u5FC3</li></ul></li></ul><blockquote><p>\u6211\u4EEC\u5047\u5B9A\uFF0C\u5B58\u5728\u4E00\u4E2A&quot;\u4FE1\u53F7\u4E2D\u5FC3&quot;\uFF0C\u67D0\u4E2A\u4EFB\u52A1\u6267\u884C\u5B8C\u6210\uFF0C\u5C31\u5411\u4FE1\u53F7\u4E2D\u5FC3&quot;\u53D1\u5E03&quot;(publish)\u4E00\u4E2A\u4FE1 \u53F7\uFF0C\u5176\u4ED6\u4EFB\u52A1\u53EF\u4EE5\u5411\u4FE1\u53F7\u4E2D\u5FC3&quot;\u8BA2\u9605&quot;(subscribe)\u8FD9\u4E2A\u4FE1\u53F7\uFF0C\u4ECE\u800C\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u81EA\u5DF1\u53EF\u4EE5\u5F00\u59CB\u6267 \u884C\u3002\u8FD9\u5C31\u53EB\u505A&quot;\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F&quot;(publish-subscribe pattern)</p></blockquote><blockquote><p>Vue \u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let vm = new Vue()
vm.$on(&#39;dataChange&#39;, () =&gt; { console.log(&#39;dataChange&#39;)})
vm.$on(&#39;dataChange&#39;, () =&gt; {
  console.log(&#39;dataChange1&#39;)
})
vm.$emit(&#39;dataChange&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5144\u5F1F\u7EC4\u4EF6\u901A\u4FE1\u8FC7\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// eventBus.js
// \u4E8B\u4EF6\u4E2D\u5FC3
let eventHub = new Vue()

// ComponentA.vue
// \u53D1\u5E03\u8005
addTodo: function () {
  // \u53D1\u5E03\u6D88\u606F(\u4E8B\u4EF6)
  eventHub.$emit(&#39;add-todo&#39;, { text: this.newTodoText })
  this.newTodoText = &#39;&#39;
}
// ComponentB.vue
// \u8BA2\u9605\u8005
created: function () {
  // \u8BA2\u9605\u6D88\u606F(\u4E8B\u4EF6)
  eventHub.$on(&#39;add-todo&#39;, this.addTodo)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6A21\u62DF Vue \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u5B9E\u73B0</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class EventEmitter {
  constructor(){
    // { eventType: [ handler1, handler2 ] }
    this.subs = {}
  }
  // \u8BA2\u9605\u901A\u77E5
  $on(eventType, fn) {
    this.subs[eventType] = this.subs[eventType] || []
    this.subs[eventType].push(fn)
  }
  // \u53D1\u5E03\u901A\u77E5
  $emit(eventType) {
    if(this.subs[eventType]) {
      this.subs[eventType].forEach(v=&gt;v())
    }
  }
}

// \u6D4B\u8BD5
var bus = new EventEmitter()

// \u6CE8\u518C\u4E8B\u4EF6
bus.$on(&#39;click&#39;, function () {
  console.log(&#39;click&#39;)
})

bus.$on(&#39;click&#39;, function () {
  console.log(&#39;click1&#39;)
})

// \u89E6\u53D1\u4E8B\u4EF6
bus.$emit(&#39;click&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2. \u89C2\u5BDF\u8005\u6A21\u5F0F</p><ul><li>\u89C2\u5BDF\u8005(\u8BA2\u9605\u8005) --\xA0<code>Watcher</code><ul><li><code>update()</code>:\u5F53\u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0C\u5177\u4F53\u8981\u505A\u7684\u4E8B\u60C5</li></ul></li><li>\u76EE\u6807(\u53D1\u5E03\u8005) --\xA0<code>Dep</code><ul><li><code>subs</code>\xA0\u6570\u7EC4:\u5B58\u50A8\u6240\u6709\u7684\u89C2\u5BDF\u8005</li><li><code>addSub()</code>:\u6DFB\u52A0\u89C2\u5BDF\u8005</li><li><code>notify()</code>:\u5F53\u4E8B\u4EF6\u53D1\u751F\uFF0C\u8C03\u7528\u6240\u6709\u89C2\u5BDF\u8005\u7684\xA0<code>update()</code>\xA0\u65B9\u6CD5</li></ul></li><li>\u6CA1\u6709\u4E8B\u4EF6\u4E2D\u5FC3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u76EE\u6807(\u53D1\u5E03\u8005)
// Dependency
class Dep {
  constructor () {
    // \u5B58\u50A8\u6240\u6709\u7684\u89C2\u5BDF\u8005
    this.subs = []
  }
  // \u6DFB\u52A0\u89C2\u5BDF\u8005
  addSub (sub) {
    if (sub &amp;&amp; sub.update) {
      this.subs.push(sub)
    }
  }
  // \u901A\u77E5\u6240\u6709\u89C2\u5BDF\u8005
  notify () {
    this.subs.forEach(sub =&gt; sub.update())
  }
}

// \u89C2\u5BDF\u8005(\u8BA2\u9605\u8005)
class Watcher {
  update () {
    console.log(&#39;update&#39;)
  }
}

// \u6D4B\u8BD5
let dep = new Dep()
let watcher = new Watcher()
dep.addSub(watcher)
dep.notify()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3. \u603B\u7ED3</p><ul><li>\u89C2\u5BDF\u8005\u6A21\u5F0F\u662F\u7531\u5177\u4F53\u76EE\u6807\u8C03\u5EA6\uFF0C\u6BD4\u5982\u5F53\u4E8B\u4EF6\u89E6\u53D1\uFF0C<code>Dep</code>\xA0\u5C31\u4F1A\u53BB\u8C03\u7528\u89C2\u5BDF\u8005\u7684\u65B9\u6CD5\uFF0C\u6240\u4EE5\u89C2\u5BDF\u8005\u6A21 \u5F0F\u7684\u8BA2\u9605\u8005\u4E0E\u53D1\u5E03\u8005\u4E4B\u95F4\u662F\u5B58\u5728\u4F9D\u8D56\u7684</li><li>\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F\u7531\u7EDF\u4E00\u8C03\u5EA6\u4E2D\u5FC3\u8C03\u7528\uFF0C\u56E0\u6B64\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u4E0D\u9700\u8981\u77E5\u9053\u5BF9\u65B9\u7684\u5B58\u5728</li></ul><p><img src="`+t+'" alt=""></p><h3 id="_3-\u4E3A\u4EC0\u4E48\u4F7F\u7528-virtual-dom" tabindex="-1"><a class="header-anchor" href="#_3-\u4E3A\u4EC0\u4E48\u4F7F\u7528-virtual-dom" aria-hidden="true">#</a> 3 \u4E3A\u4EC0\u4E48\u4F7F\u7528 Virtual DOM</h3><ul><li>\u624B\u52A8\u64CD\u4F5C\xA0<code>DOM</code>\xA0\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u8FD8\u9700\u8981\u8003\u8651\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u867D\u7136\u6709\xA0<code>jQuery</code>\xA0\u7B49\u5E93\u7B80\u5316\xA0<code>DOM</code>\xA0\u64CD\u4F5C\uFF0C\u4F46\u662F\u968F\u7740\u9879\u76EE\u7684\u590D\u6742 DOM \u64CD\u4F5C\u590D\u6742\u63D0\u5347</li><li>\u4E3A\u4E86\u7B80\u5316\xA0<code>DOM</code>\xA0\u7684\u590D\u6742\u64CD\u4F5C\u4E8E\u662F\u51FA\u73B0\u4E86\u5404\u79CD\xA0<code>MVVM</code>\xA0\u6846\u67B6\uFF0C<code>MVVM</code>\xA0\u6846\u67B6\u89E3\u51B3\u4E86\u89C6\u56FE\u548C\u72B6\u6001\u7684\u540C\u6B65\u95EE\u9898</li><li>\u4E3A\u4E86\u7B80\u5316\u89C6\u56FE\u7684\u64CD\u4F5C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6A21\u677F\u5F15\u64CE\uFF0C\u4F46\u662F\u6A21\u677F\u5F15\u64CE\u6CA1\u6709\u89E3\u51B3\u8DDF\u8E2A\u72B6\u6001\u53D8\u5316\u7684\u95EE\u9898\uFF0C\u4E8E\u662F<code>Virtual DOM</code>\xA0\u51FA\u73B0\u4E86</li><li><code>Virtual DOM</code>\xA0\u7684\u597D\u5904\u662F\u5F53\u72B6\u6001\u6539\u53D8\u65F6\u4E0D\u9700\u8981\u7ACB\u5373\u66F4\u65B0 DOM\uFF0C\u53EA\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u6811\u6765\u63CF\u8FF0<code>DOM</code>\uFF0C<code>Virtual DOM</code>\xA0\u5185\u90E8\u5C06\u5F04\u6E05\u695A\u5982\u4F55\u6709\u6548(<code>diff</code>)\u7684\u66F4\u65B0\xA0<code>DOM</code></li><li>\u865A\u62DF\xA0<code>DOM</code>\xA0\u53EF\u4EE5\u7EF4\u62A4\u7A0B\u5E8F\u7684\u72B6\u6001\uFF0C\u8DDF\u8E2A\u4E0A\u4E00\u6B21\u7684\u72B6\u6001</li><li>\u901A\u8FC7\u6BD4\u8F83\u524D\u540E\u4E24\u6B21\u72B6\u6001\u7684\u5DEE\u5F02\u66F4\u65B0\u771F\u5B9E\xA0<code>DOM</code></li></ul><p>\u865A\u62DF DOM \u7684\u4F5C\u7528</p><ul><li>\u7EF4\u62A4\u89C6\u56FE\u548C\u72B6\u6001\u7684\u5173\u7CFB</li><li>\u590D\u6742\u89C6\u56FE\u60C5\u51B5\u4E0B\u63D0\u5347\u6E32\u67D3\u6027\u80FD</li><li>\u9664\u4E86\u6E32\u67D3\xA0<code>DOM</code>\xA0\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5B9E\u73B0\xA0<code>SSR(Nuxt.js/Next.js)</code>\u3001\u539F\u751F\u5E94\u7528(<code>Weex/React Native</code>)\u3001\u5C0F\u7A0B\u5E8F(<code>mpvue/uni-app</code>)\u7B49</li></ul><p><img src="'+r+'" alt=""></p><h3 id="_4-vdom-\u4E09\u4E2A-part" tabindex="-1"><a class="header-anchor" href="#_4-vdom-\u4E09\u4E2A-part" aria-hidden="true">#</a> 4 VDOM\uFF1A\u4E09\u4E2A part</h3><ul><li>\u865A\u62DF\u8282\u70B9\u7C7B\uFF0C\u5C06\u771F\u5B9E\xA0<code>DOM</code>\u8282\u70B9\u7528\xA0<code>js</code>\xA0\u5BF9\u8C61\u7684\u5F62\u5F0F\u8FDB\u884C\u5C55\u793A\uFF0C\u5E76\u63D0\u4F9B\xA0<code>render</code>\xA0\u65B9\u6CD5\uFF0C\u5C06\u865A\u62DF\u8282\u70B9\u6E32\u67D3\u6210\u771F\u5B9E\xA0<code>DOM</code></li><li>\u8282\u70B9\xA0<code>diff</code>\xA0\u6BD4\u8F83\uFF1A\u5BF9\u865A\u62DF\u8282\u70B9\u8FDB\u884C\xA0<code>js</code>\xA0\u5C42\u9762\u7684\u8BA1\u7B97\uFF0C\u5E76\u5C06\u4E0D\u540C\u7684\u64CD\u4F5C\u90FD\u8BB0\u5F55\u5230\xA0<code>patch</code>\xA0\u5BF9\u8C61</li><li><code>re-render</code>\uFF1A\u89E3\u6790\xA0<code>patch</code>\xA0\u5BF9\u8C61\uFF0C\u8FDB\u884C\xA0<code>re-render</code></li></ul><p>\u8865\u51451\uFFFD\uFFFDVDOM \u7684\u5FC5\u8981\u6027\uFF1F</p><ul><li>\u521B\u5EFA\u771F\u5B9EDOM\u7684\u4EE3\u4EF7\u9AD8\uFF1A\u771F\u5B9E\u7684\xA0<code>DOM</code>\xA0\u8282\u70B9\xA0<code>node</code>\xA0\u5B9E\u73B0\u7684\u5C5E\u6027\u5F88\u591A\uFF0C\u800C\xA0<code>vnode</code>\xA0\u4EC5\u4EC5\u5B9E\u73B0\u4E00\u4E9B\u5FC5\u8981\u7684\u5C5E\u6027\uFF0C\u76F8\u6BD4\u8D77\u6765\uFF0C\u521B\u5EFA\u4E00\u4E2A\xA0<code>vnode</code>\xA0\u7684\u6210\u672C\u6BD4\u8F83\u4F4E\u3002</li><li>\u89E6\u53D1\u591A\u6B21\u6D4F\u89C8\u5668\u91CD\u7ED8\u53CA\u56DE\u6D41\uFF1A\u4F7F\u7528\xA0<code>vnode</code>\xA0\uFF0C\u76F8\u5F53\u4E8E\u52A0\u4E86\u4E00\u4E2A\u7F13\u51B2\uFF0C\u8BA9\u4E00\u6B21\u6570\u636E\u53D8\u52A8\u6240\u5E26\u6765\u7684\u6240\u6709\xA0<code>node</code>\xA0\u53D8\u5316\uFF0C\u5148\u5728\xA0<code>vnode</code>\xA0\u4E2D\u8FDB\u884C\u4FEE\u6539\uFF0C\u7136\u540E\xA0<code>diff</code>\xA0\u4E4B\u540E\u5BF9\u6240\u6709\u4EA7\u751F\u5DEE\u5F02\u7684\u8282\u70B9\u96C6\u4E2D\u4E00\u6B21\u5BF9\xA0<code>DOM tree</code>\xA0\u8FDB\u884C\u4FEE\u6539\uFF0C\u4EE5\u51CF\u5C11\u6D4F\u89C8\u5668\u7684\u91CD\u7ED8\u53CA\u56DE\u6D41\u3002</li></ul><p>\u8865\u51452\uFF1Avue \u4E3A\u4EC0\u4E48\u91C7\u7528 vdom\uFF1F</p><blockquote><p>\u5F15\u5165\xA0<code>Virtual DOM</code>\xA0\u5728\u6027\u80FD\u65B9\u9762\u7684\u8003\u91CF\u4EC5\u4EC5\u662F\u4E00\u65B9\u9762\u3002</p></blockquote><ul><li>\u6027\u80FD\u53D7\u573A\u666F\u7684\u5F71\u54CD\u662F\u975E\u5E38\u5927\u7684\uFF0C\u4E0D\u540C\u7684\u573A\u666F\u53EF\u80FD\u9020\u6210\u4E0D\u540C\u5B9E\u73B0\u65B9\u6848\u4E4B\u95F4\u6210\u500D\u7684\u6027\u80FD\u5DEE\u8DDD\uFF0C\u6240\u4EE5\u4F9D\u8D56\u7EC6\u7C92\u5EA6\u7ED1\u5B9A\u53CA\xA0<code>Virtual DOM</code>\xA0\u54EA\u4E2A\u7684\u6027\u80FD\u66F4\u597D\u8FD8\u771F\u4E0D\u662F\u4E00\u4E2A\u5BB9\u6613\u4E0B\u5B9A\u8BBA\u7684\u95EE\u9898\u3002</li><li><code>Vue</code>\xA0\u4E4B\u6240\u4EE5\u5F15\u5165\u4E86\xA0<code>Virtual DOM</code>\uFF0C\u66F4\u91CD\u8981\u7684\u539F\u56E0\u662F\u4E3A\u4E86\u89E3\u8026\xA0<code>HTML</code>\u4F9D\u8D56\uFF0C\u8FD9\u5E26\u6765\u4E24\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u597D\u5904\u662F\uFF1A</li></ul><blockquote><ul><li>\u4E0D\u518D\u4F9D\u8D56\xA0<code>HTML</code>\xA0\u89E3\u6790\u5668\u8FDB\u884C\u6A21\u7248\u89E3\u6790\uFF0C\u53EF\u4EE5\u8FDB\u884C\u66F4\u591A\u7684\xA0<code>AOT</code>\xA0\u5DE5\u4F5C\u63D0\u9AD8\u8FD0\u884C\u65F6\u6548\u7387\uFF1A\u901A\u8FC7\u6A21\u7248\xA0<code>AOT</code>\xA0\u7F16\u8BD1\uFF0C<code>Vue</code>\xA0\u7684\u8FD0\u884C\u65F6\u4F53\u79EF\u53EF\u4EE5\u8FDB\u4E00\u6B65\u538B\u7F29\uFF0C\u8FD0\u884C\u65F6\u6548\u7387\u53EF\u4EE5\u8FDB\u4E00\u6B65\u63D0\u5347\uFF1B</li><li>\u53EF\u4EE5\u6E32\u67D3\u5230\xA0<code>DOM</code>\xA0\u4EE5\u5916\u7684\u5E73\u53F0\uFF0C\u5B9E\u73B0\xA0<code>SSR</code>\u3001\u540C\u6784\u6E32\u67D3\u8FD9\u4E9B\u9AD8\u7EA7\u7279\u6027\uFF0C<code>Weex</code>\u7B49\u6846\u67B6\u5E94\u7528\u7684\u5C31\u662F\u8FD9\u4E00\u7279\u6027\u3002</li></ul></blockquote><blockquote><p>\u7EFC\u4E0A\uFF0C<code>Virtual DOM</code>\xA0\u5728\u6027\u80FD\u4E0A\u7684\u6536\u76CA\u5E76\u4E0D\u662F\u6700\u4E3B\u8981\u7684\uFF0C\u66F4\u91CD\u8981\u7684\u662F\u5B83\u4F7F\u5F97\xA0<code>Vue</code>\xA0\u5177\u5907\u4E86\u73B0\u4EE3\u6846\u67B6\u5E94\u6709\u7684\u9AD8\u7EA7\u7279\u6027\u3002</p></blockquote><h3 id="_5-vue-\u548C-react\u6280\u672F\u9009\u578B" tabindex="-1"><a class="header-anchor" href="#_5-vue-\u548C-react\u6280\u672F\u9009\u578B" aria-hidden="true">#</a> 5 vue \u548C react\u6280\u672F\u9009\u578B</h3><p>\u76F8\u540C\u70B9\uFF1A</p><ol><li>\u6570\u636E\u9A71\u52A8\u9875\u9762\uFF0C\u63D0\u4F9B\u54CD\u5E94\u5F0F\u7684\u8BD5\u56FE\u7EC4\u4EF6</li><li>\u90FD\u6709virtual DOM,\u7EC4\u4EF6\u5316\u7684\u5F00\u53D1\uFF0C\u901A\u8FC7props\u53C2\u6570\u8FDB\u884C\u7236\u5B50\u4E4B\u95F4\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\uFF0C\u90FD\u5B9E\u73B0\u4E86webComponents\u89C4\u8303</li><li>\u6570\u636E\u6D41\u52A8\u5355\u5411\uFF0C\u90FD\u652F\u6301\u670D\u52A1\u5668\u7684\u6E32\u67D3SSR</li><li>\u90FD\u6709\u652F\u6301native\u7684\u65B9\u6CD5\uFF0Creact\u6709React native\uFF0C vue\u6709wexx</li></ol><p>\u4E0D\u540C\u70B9\uFF1A</p><ol><li>\u6570\u636E\u7ED1\u5B9A\uFF1AVue\u5B9E\u73B0\u4E86\u53CC\u5411\u7684\u6570\u636E\u7ED1\u5B9A\uFF0Creact\u6570\u636E\u6D41\u52A8\u662F\u5355\u5411\u7684</li><li>\u6570\u636E\u6E32\u67D3\uFF1A\u5927\u89C4\u6A21\u7684\u6570\u636E\u6E32\u67D3\uFF0Creact\u66F4\u5FEB</li><li>\u4F7F\u7528\u573A\u666F\uFF1AReact\u914D\u5408Redux\u67B6\u6784\u9002\u5408\u5927\u89C4\u6A21\u591A\u4EBA\u534F\u4F5C\u590D\u6742\u9879\u76EE\uFF0CVue\u9002\u5408\u5C0F\u5FEB\u7684\u9879\u76EE</li><li>\u5F00\u53D1\u98CE\u683C\uFF1Areact\u63A8\u8350\u505A\u6CD5jsx + inline style\u628Ahtml\u548Ccss\u90FD\u5199\u5728js\u4E86</li></ol><blockquote><p>vue\u662F\u91C7\u7528webpack +vue-loader\u5355\u6587\u4EF6\u7EC4\u4EF6\u683C\u5F0F\uFF0Chtml, js, css\u540C\u4E00\u4E2A\u6587\u4EF6</p></blockquote><h3 id="_6-nexttick" tabindex="-1"><a class="header-anchor" href="#_6-nexttick" aria-hidden="true">#</a> 6 nextTick</h3><blockquote><p><code>nextTick</code>\xA0\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u4E0B\u6B21\xA0<code>DOM</code>\xA0\u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u6267\u884C\u5EF6\u8FDF\u56DE\u8C03\uFF0C\u7528\u4E8E\u83B7\u5F97\u66F4\u65B0\u540E\u7684\xA0<code>DOM</code></p></blockquote><p><code>nextTick</code>\u4E3B\u8981\u4F7F\u7528\u4E86\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u3002\u6839\u636E\u6267\u884C\u73AF\u5883\u5206\u522B\u5C1D\u8BD5\u91C7\u7528</p><ul><li><code>Promise</code></li><li><code>MutationObserver</code></li><li><code>setImmediate</code></li><li>\u5982\u679C\u4EE5\u4E0A\u90FD\u4E0D\u884C\u5219\u91C7\u7528<code>setTimeout</code></li></ul><blockquote><p>\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5\uFF0C\u591A\u6B21\u8C03\u7528<code>nextTick</code>\u4F1A\u5C06\u65B9\u6CD5\u5B58\u5165\u961F\u5217\u4E2D\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u5F02\u6B65\u65B9\u6CD5\u6E05\u7A7A\u5F53\u524D\u961F\u5217</p></blockquote><h3 id="_7-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_7-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 7 \u751F\u547D\u5468\u671F</h3><p><img src="'+a+`" alt=""></p><p><em>init</em></p><ul><li><code>initLifecycle/Event</code>\uFF0C\u5F80vm\u4E0A\u6302\u8F7D\u5404\u79CD\u5C5E\u6027</li><li><code>callHook: beforeCreated</code>: \u5B9E\u4F8B\u521A\u521B\u5EFA</li><li><code>initInjection/initState</code>: \u521D\u59CB\u5316\u6CE8\u5165\u548C\xA0<code>data</code>\xA0\u54CD\u5E94\u6027</li><li><code>created: \u521B\u5EFA\u5B8C\u6210\uFF0C\u5C5E\u6027\u5DF2\u7ECF\u7ED1\u5B9A\uFF0C \u4F46\u8FD8\u672A\u751F\u6210\u771F\u5B9E</code>dom\`</li><li>\u8FDB\u884C\u5143\u7D20\u7684\u6302\u8F7D\uFF1A\xA0<code>$el / vm.$mount()</code></li><li>\u662F\u5426\u6709<code>template</code>: \u89E3\u6790\u6210\xA0<code>render function</code><ul><li><code>*.vue</code>\u6587\u4EF6:\xA0<code>vue-loader</code>\u4F1A\u5C06<code>&lt;template&gt;</code>\u7F16\u8BD1\u6210<code>render function</code></li></ul></li><li><code>beforeMount</code>: \u6A21\u677F\u7F16\u8BD1/\u6302\u8F7D\u4E4B\u524D</li><li>\u6267\u884C<code>render function</code>\uFF0C\u751F\u6210\u771F\u5B9E\u7684<code>dom</code>\uFF0C\u5E76\u66FF\u6362\u5230<code>dom tree</code>\u4E2D</li><li><code>mounted</code>: \u7EC4\u4EF6\u5DF2\u6302\u8F7D</li></ul><p>update</p><ul><li>\u6267\u884C<code>diff</code>\u7B97\u6CD5\uFF0C\u6BD4\u5BF9\u6539\u53D8\u662F\u5426\u9700\u8981\u89E6\u53D1<code>UI</code>\u66F4\u65B0</li><li><code>flushScheduleQueue</code></li><li><code>watcher.before</code>: \u89E6\u53D1<code>beforeUpdate</code>\u94A9\u5B50 -\xA0<code>watcher.run()</code>: \u6267\u884C<code>watcher</code>\u4E2D\u7684\xA0<code>notify</code>\uFF0C\u901A\u77E5\u6240\u6709\u4F9D\u8D56\u9879\u66F4\u65B0UI</li><li>\u89E6\u53D1<code>updated</code>\u94A9\u5B50: \u7EC4\u4EF6\u5DF2\u66F4\u65B0</li><li><code>actived / deactivated(keep-alive)</code>: \u4E0D\u9500\u6BC1\uFF0C\u7F13\u5B58\uFF0C\u7EC4\u4EF6\u6FC0\u6D3B\u4E0E\u5931\u6D3B</li><li><code>destroy</code><ul><li><code>beforeDestroy</code>: \u9500\u6BC1\u5F00\u59CB</li><li>\u9500\u6BC1\u81EA\u8EAB\u4E14\u9012\u5F52\u9500\u6BC1\u5B50\u7EC4\u4EF6\u4EE5\u53CA\u4E8B\u4EF6\u76D1\u542C <ul><li><code>remove()</code>: \u5220\u9664\u8282\u70B9</li><li><code>watcher.teardown()</code>: \u6E05\u7A7A\u4F9D\u8D56</li><li><code>vm.$off()</code>: \u89E3\u7ED1\u76D1\u542C</li></ul></li><li><code>destroyed</code>: \u5B8C\u6210\u540E\u89E6\u53D1\u94A9\u5B50</li></ul></li></ul><table><thead><tr><th>Vue2</th><th>Vue3</th></tr></thead><tbody><tr><td><code>beforeCreate</code></td><td>\u274C<code>setup</code>(\u66FF\u4EE3)</td></tr><tr><td><code>created</code></td><td>\u274C<code>setup</code>(\u66FF\u4EE3)</td></tr><tr><td><code>beforeMount</code></td><td><code>onBeforeMount</code></td></tr><tr><td><code>mounted</code></td><td><code>onMounted</code></td></tr><tr><td><code>beforeUpdate</code></td><td><code>onBeforeUpdate</code></td></tr><tr><td><code>updated</code></td><td><code>nUpdated</code></td></tr><tr><td><code>beforeDestroy</code></td><td><code>onBeforeUnmount</code></td></tr><tr><td><code>destroyed</code></td><td><code>onUnmounted</code></td></tr><tr><td><code>errorCaptured</code></td><td><code>onErrorCaptured</code></td></tr><tr><td>-</td><td>\u{1F389}<code>onRenderTracked</code></td></tr><tr><td>-</td><td>\u{1F389}<code>onRenderTriggered</code></td></tr></tbody></table><blockquote><p>\u4E0A\u9762\u662Fvue\u7684\u58F0\u660E\u5468\u671F\u7684\u7B80\u5355\u68B3\u7406\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u76F4\u63A5\u4EE5\u4EE3\u7801\u7684\u5F62\u5F0F\u6765\u5B8C\u6210vue\u7684\u521D\u59CB\u5316</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
new Vue({})

// \u521D\u59CB\u5316Vue\u5B9E\u4F8B
function _init() {
	 // \u6302\u8F7D\u5C5E\u6027
    initLifeCycle(vm)
    // \u521D\u59CB\u5316\u4E8B\u4EF6\u7CFB\u7EDF\uFF0C\u94A9\u5B50\u51FD\u6570\u7B49
    initEvent(vm)
    // \u7F16\u8BD1slot\u3001vnode
    initRender(vm)
    // \u89E6\u53D1\u94A9\u5B50
    callHook(vm, &#39;beforeCreate&#39;)
    // \u6DFB\u52A0inject\u529F\u80FD
    initInjection(vm)
    // \u5B8C\u6210\u6570\u636E\u54CD\u5E94\u6027 props/data/watch/computed/methods
    initState(vm)
    // \u6DFB\u52A0 provide \u529F\u80FD
    initProvide(vm)
    // \u89E6\u53D1\u94A9\u5B50
    callHook(vm, &#39;created&#39;)

	 // \u6302\u8F7D\u8282\u70B9
    if (vm.$options.el) {
        vm.$mount(vm.$options.el)
    }
}

// \u6302\u8F7D\u8282\u70B9\u5B9E\u73B0
function mountComponent(vm) {
	 // \u83B7\u53D6 render function
    if (!this.options.render) {
        // template to render
        // Vue.compile = compileToFunctions
        let { render } = compileToFunctions()
        this.options.render = render
    }
    // \u89E6\u53D1\u94A9\u5B50
    callHook(&#39;beforeMounte&#39;)
    // \u521D\u59CB\u5316\u89C2\u5BDF\u8005
    // render \u6E32\u67D3 vdom\uFF0C
    vdom = vm.render()
    // update: \u6839\u636E diff \u51FA\u7684 patchs \u6302\u8F7D\u6210\u771F\u5B9E\u7684 dom
    vm._update(vdom)
    // \u89E6\u53D1\u94A9\u5B50
    callHook(vm, &#39;mounted&#39;)
}

// \u66F4\u65B0\u8282\u70B9\u5B9E\u73B0
funtion queueWatcher(watcher) {
	nextTick(flushScheduleQueue)
}

// \u6E05\u7A7A\u961F\u5217
function flushScheduleQueue() {
	 // \u904D\u5386\u961F\u5217\u4E2D\u6240\u6709\u4FEE\u6539
    for(){
	    // beforeUpdate
        watcher.before()

        // \u4F9D\u8D56\u5C40\u90E8\u66F4\u65B0\u8282\u70B9
        watcher.update()
        callHook(&#39;updated&#39;)
    }
}

// \u9500\u6BC1\u5B9E\u4F8B\u5B9E\u73B0
Vue.prototype.$destory = function() {
	 // \u89E6\u53D1\u94A9\u5B50
    callHook(vm, &#39;beforeDestory&#39;)
    // \u81EA\u8EAB\u53CA\u5B50\u8282\u70B9
    remove()
    // \u5220\u9664\u4F9D\u8D56
    watcher.teardown()
    // \u5220\u9664\u76D1\u542C
    vm.$off()
    // \u89E6\u53D1\u94A9\u5B50
    callHook(vm, &#39;destoryed&#39;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-vue-router" tabindex="-1"><a class="header-anchor" href="#_8-vue-router" aria-hidden="true">#</a> 8 vue-router</h3><p>mode</p><ul><li><code>hash</code></li><li><code>history</code></li></ul><p>\u8DF3\u8F6C</p><ul><li><code>this.$router.push()</code></li><li><code>&lt;router-link to=&quot;&quot;&gt;&lt;/router-link&gt;</code></li></ul><p>\u5360\u4F4D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-view&gt;&lt;/router-view&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>vue-router\u6E90\u7801\u5B9E\u73B0</p><ul><li>\u4F5C\u4E3A\u4E00\u4E2A\u63D2\u4EF6\u5B58\u5728:\u5B9E\u73B0<code>VueRouter</code>\u7C7B\u548C<code>install</code>\u65B9\u6CD5</li><li>\u5B9E\u73B0\u4E24\u4E2A\u5168\u5C40\u7EC4\u4EF6:<code>router-view</code>\u7528\u4E8E\u663E\u793A\u5339\u914D\u7EC4\u4EF6\u5185\u5BB9\uFF0C<code>router-link</code>\u7528\u4E8E\u8DF3\u8F6C</li><li>\u76D1\u63A7<code>url</code>\u53D8\u5316:\u76D1\u542C<code>hashchange</code>\u6216<code>popstate</code>\u4E8B\u4EF6</li><li>\u54CD\u5E94\u6700\u65B0<code>url</code>:\u521B\u5EFA\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u5C5E\u6027<code>current</code>\uFF0C\u5F53\u5B83\u6539\u53D8\u65F6\u83B7\u53D6\u5BF9\u5E94\u7EC4\u4EF6\u5E76\u663E\u793A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6211\u4EEC\u7684\u63D2\u4EF6\uFF1A
// 1.\u5B9E\u73B0\u4E00\u4E2ARouter\u7C7B\u5E76\u6302\u8F7D\u671F\u5B9E\u4F8B
// 2.\u5B9E\u73B0\u4E24\u4E2A\u5168\u5C40\u7EC4\u4EF6router-link\u548Crouter-view
let Vue;

class VueRouter {
  // \u6838\u5FC3\u4EFB\u52A1\uFF1A
  // 1.\u76D1\u542Curl\u53D8\u5316
  constructor(options) {
    this.$options = options;

    // \u7F13\u5B58path\u548Croute\u6620\u5C04\u5173\u7CFB
    // \u8FD9\u6837\u627E\u7EC4\u4EF6\u66F4\u5FEB
    this.routeMap = {}
    this.$options.routes.forEach(route =&gt; {
      this.routeMap[route.path] = route
    })

    // \u6570\u636E\u54CD\u5E94\u5F0F
    // \u5B9A\u4E49\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684current\uFF0C\u5219\u5982\u679C\u4ED6\u53D8\u4E86\uFF0C\u90A3\u4E48\u4F7F\u7528\u5B83\u7684\u7EC4\u4EF6\u4F1Arerender
    Vue.util.defineReactive(this, &#39;current&#39;, &#39;&#39;)

    // \u8BF7\u786E\u4FDDonHashChange\u4E2Dthis\u6307\u5411\u5F53\u524D\u5B9E\u4F8B
    window.addEventListener(&#39;hashchange&#39;, this.onHashChange.bind(this))
    window.addEventListener(&#39;load&#39;, this.onHashChange.bind(this))
  }

  onHashChange() {
    // console.log(window.location.hash);
    this.current = window.location.hash.slice(1) || &#39;/&#39;
  }
}

// \u63D2\u4EF6\u9700\u8981\u5B9E\u73B0install\u65B9\u6CD5
// \u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0CVue\u6784\u9020\u51FD\u6570\uFF0C\u4E3B\u8981\u7528\u4E8E\u6570\u636E\u54CD\u5E94\u5F0F
VueRouter.install = function (_Vue) {
  // \u4FDD\u5B58Vue\u6784\u9020\u51FD\u6570\u5728VueRouter\u4E2D\u4F7F\u7528
  Vue = _Vue

  // \u4EFB\u52A11\uFF1A\u4F7F\u7528\u6DF7\u5165\u6765\u505Arouter\u6302\u8F7D\u8FD9\u4EF6\u4E8B\u60C5
  Vue.mixin({
    beforeCreate() {
      // \u53EA\u6709\u6839\u5B9E\u4F8B\u624D\u6709router\u9009\u9879
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }

    }
  })

  // \u4EFB\u52A12\uFF1A\u5B9E\u73B0\u4E24\u4E2A\u5168\u5C40\u7EC4\u4EF6
  // router-link: \u751F\u6210\u4E00\u4E2Aa\u6807\u7B7E\uFF0C\u5728url\u540E\u9762\u6DFB\u52A0#
  // &lt;a href=&quot;#/about&quot;&gt;aaaa&lt;/a&gt;
  // &lt;router-link to=&quot;/about&quot;&gt;aaa&lt;/router-link&gt;
  Vue.component(&#39;router-link&#39;, {
    props: {
      to: {
        type: String,
        required: true
      },
    },
    render(h) {
      // h(tag, props, children)
      return h(&#39;a&#39;,
        { attrs: { href: &#39;#&#39; + this.to } },
        this.$slots.default
      )
      // \u4F7F\u7528jsx
      // return &lt;a href={&#39;#&#39;+this.to}&gt;{this.$slots.default}&lt;/a&gt;
    }
  })
  Vue.component(&#39;router-view&#39;, {
    render(h) {
      // \u6839\u636Ecurrent\u83B7\u53D6\u7EC4\u4EF6\u5E76render
      // current\u600E\u4E48\u83B7\u53D6?
      // console.log(&#39;render&#39;,this.$router.current);
      // \u83B7\u53D6\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6
      let component = null
      const { routeMap, current } = this.$router
      if (routeMap[current]) {
        component = routeMap[current].component
      }
      return h(component)
    }
  })
}

export default VueRouter

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-vuex" tabindex="-1"><a class="header-anchor" href="#_9-vuex" aria-hidden="true">#</a> 9 vuex</h3><blockquote><p>Vuex \u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316</p></blockquote><p>\u6838\u5FC3\u6982\u5FF5</p><ul><li><code>state</code>: \u72B6\u6001\u4E2D\u5FC3</li><li><code>mutations</code>: \u66F4\u6539\u72B6\u6001</li><li><code>actions</code>: \u5F02\u6B65\u66F4\u6539\u72B6\u6001</li><li><code>getters</code>: \u83B7\u53D6\u72B6\u6001</li><li><code>modules</code>: \u5C06<code>state</code>\u5206\u6210\u591A\u4E2A<code>modules</code>\uFF0C\u4FBF\u4E8E\u7BA1\u7406</li></ul><ol><li>\u72B6\u6001\xA0- state</li></ol><p>state\u4FDD\u5B58\u5E94\u7528\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default new Vuex.Store({ state: { counter:0 },})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u72B6\u6001\u53D8\u66F4\xA0- mutations</li></ol><blockquote><p><code>mutations</code>\u7528\u4E8E\u4FEE\u6539\u72B6\u6001\uFF0C<code>store.js</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default new Vuex.Store({
    mutations:
    {
      add(state) {
        state.counter++
      }
    }
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u6D3E\u751F\u72B6\u6001\xA0- getters</li></ol><blockquote><p>\u4ECEstate\u6D3E\u751F\u51FA\u65B0\u72B6\u6001\uFF0C\u7C7B\u4F3C\u8BA1\u7B97\u5C5E\u6027</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default new Vuex.Store({
    getters:
    {
      doubleCounter(state) { // \u8BA1\u7B97\u5269\u4F59\u6570\u91CF return state.counter * 2;
      }
    }
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u52A8\u4F5C\xA0- actions</li></ol><p>\u52A0\u4E1A\u52A1\u903B\u8F91\uFF0C\u7C7B\u4F3C\u4E8E<code>controller</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default new Vuex.Store({
    actions:
    {
      add({
        commit
      }) {
        setTimeout(() = &gt;{}
      }
    })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u4EE3\u7801:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;p @click=&quot;$store.commit(&#39;add&#39;)&quot;&gt;counter: {{$store.state.counter}}&lt;/p&gt;
&lt;p @click=&quot;$store.dispatch(&#39;add&#39;)&quot;&gt;async counter: {{$store.state.counter}}&lt;/p&gt;
&lt;p&gt;double:{{$store.getters.doubleCounter}}&lt;/p&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuex\u539F\u7406\u89E3\u6790</p><ul><li>\u5B9E\u73B0\u4E00\u4E2A\u63D2\u4EF6:\u58F0\u660E<code>Store</code>\u7C7B\uFF0C\u6302\u8F7D<code>$store</code></li><li><code>Store</code>\u5177\u4F53\u5B9E\u73B0: <ul><li>\u521B\u5EFA\u54CD\u5E94\u5F0F\u7684<code>state</code>\uFF0C\u4FDD\u5B58<code>mutations</code>\u3001<code>actions</code>\u548C<code>getters</code></li><li>\u5B9E\u73B0<code>commit</code>\u6839\u636E\u7528\u6237\u4F20\u5165<code>type</code>\u6267\u884C\u5BF9\u5E94<code>mutation</code></li><li>\u5B9E\u73B0<code>dispatch</code>\u6839\u636E\u7528\u6237\u4F20\u5165<code>type</code>\u6267\u884C\u5BF9\u5E94<code>action</code>\uFF0C\u540C\u65F6\u4F20\u9012\u4E0A\u4E0B\u6587</li><li>\u5B9E\u73B0<code>getters</code>\uFF0C\u6309\u7167<code>getters</code>\u5B9A\u4E49\u5BF9<code>state</code>\u505A\u6D3E\u751F</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u76EE\u68071\uFF1A\u5B9E\u73B0Store\u7C7B\uFF0C\u7BA1\u7406state\uFF08\u54CD\u5E94\u5F0F\u7684\uFF09\uFF0Ccommit\u65B9\u6CD5\u548Cdispatch\u65B9\u6CD5
// \u76EE\u68072\uFF1A\u5C01\u88C5\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u4F7F\u7528\u66F4\u5BB9\u6613\u4F7F\u7528
let Vue;

class Store {
  constructor(options) {
    // \u5B9A\u4E49\u54CD\u5E94\u5F0F\u7684state
    // this.$store.state.xx
    // \u501F\u9E21\u751F\u86CB
    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })

    this._mutations = options.mutations
    this._actions = options.actions

    // \u7ED1\u5B9Athis\u6307\u5411
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  // \u53EA\u8BFB
  get state() {
    return this._vm._data.$$state
  }

  set state(val) {
    console.error(&#39;\u4E0D\u80FD\u76F4\u63A5\u8D4B\u503C\u5440\uFF0C\u8BF7\u6362\u522B\u7684\u65B9\u5F0F\uFF01\uFF01\u5929\u738B\u76D6\u5730\u864E\uFF01\uFF01&#39;);

  }

  // \u5B9E\u73B0commit\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u4FEE\u6539state
  commit(type, payload) {
    // \u62FF\u51FAmutations\u4E2D\u7684\u5904\u7406\u51FD\u6570\u6267\u884C\u5B83
    const entry = this._mutations[type]
    if (!entry) {
      console.error(&#39;\u672A\u77E5mutaion\u7C7B\u578B&#39;);
      return
    }

    entry(this.state, payload)
  }

  dispatch(type, payload) {
    const entry = this._actions[type]

    if (!entry) {
      console.error(&#39;\u672A\u77E5action\u7C7B\u578B&#39;);
      return
    }

    // \u4E0A\u4E0B\u6587\u53EF\u4EE5\u4F20\u9012\u5F53\u524Dstore\u5B9E\u4F8B\u8FDB\u53BB\u5373\u53EF
    entry(this, payload)
  }
}

function install(_Vue){
  Vue = _Vue

  // \u6DF7\u5165store\u5B9E\u4F8B
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

// { Store, install }\u76F8\u5F53\u4E8EVuex
// \u5B83\u5FC5\u987B\u5B9E\u73B0install\u65B9\u6CD5
export default { Store, install }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-vue3\u5E26\u6765\u7684\u65B0\u7279\u6027-\u4EAE\u70B9" tabindex="-1"><a class="header-anchor" href="#_10-vue3\u5E26\u6765\u7684\u65B0\u7279\u6027-\u4EAE\u70B9" aria-hidden="true">#</a> 10 vue3\u5E26\u6765\u7684\u65B0\u7279\u6027/\u4EAE\u70B9</h3><p>1. \u538B\u7F29\u5305\u4F53\u79EF\u66F4\u5C0F</p><blockquote><p>\u5F53\u524D\u6700\u5C0F\u5316\u5E76\u88AB\u538B\u7F29\u7684 Vue \u8FD0\u884C\u65F6\u5927\u5C0F\u7EA6\u4E3A 20kB\uFF082.6.10 \u7248\u4E3A 22.8kB\uFF09\u3002Vue 3.0\u6346\u7ED1\u5305\u7684\u5927\u5C0F\u5927\u7EA6\u4F1A\u51CF\u5C11\u4E00\u534A\uFF0C\u5373\u53EA\u670910kB\uFF01</p></blockquote><p>2. Object.defineProperty -&gt; Proxy</p><ul><li><code>Object.defineProperty</code>\u662F\u4E00\u4E2A\u76F8\u5BF9\u6BD4\u8F83\u6602\u8D35\u7684\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u5B83\u76F4\u63A5\u64CD\u4F5C\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u9897\u7C92\u5EA6\u6BD4\u8F83\u5C0F\u3002\u5C06\u5B83\u66FF\u6362\u4E3Aes6\u7684<code>Proxy</code>\uFF0C\u5728\u76EE\u6807\u5BF9\u8C61\u4E4B\u4E0A\u67B6\u4E86\u4E00\u5C42\u62E6\u622A\uFF0C\u4EE3\u7406\u7684\u662F\u5BF9\u8C61\u800C\u4E0D\u662F\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u8FD9\u6837\u53EF\u4EE5\u5C06\u539F\u672C\u5BF9\u5BF9\u8C61\u5C5E\u6027\u7684\u64CD\u4F5C\u53D8\u4E3A\u5BF9\u6574\u4E2A\u5BF9\u8C61\u7684\u64CD\u4F5C\uFF0C\u9897\u7C92\u5EA6\u53D8\u5927\u3002</li><li>javascript\u5F15\u64CE\u5728\u89E3\u6790\u7684\u65F6\u5019\u5E0C\u671B\u5BF9\u8C61\u7684\u7ED3\u6784\u8D8A\u7A33\u5B9A\u8D8A\u597D\uFF0C\u5982\u679C\u5BF9\u8C61\u4E00\u76F4\u5728\u53D8\uFF0C\u53EF\u4F18\u5316\u6027\u964D\u4F4E\uFF0Cproxy\u4E0D\u9700\u8981\u5BF9\u539F\u59CB\u5BF9\u8C61\u505A\u592A\u591A\u64CD\u4F5C\u3002</li></ul><p>3. Virtual DOM \u91CD\u6784</p><blockquote><p>vdom\u7684\u672C\u8D28\u662F\u4E00\u4E2A\u62BD\u8C61\u5C42\uFF0C\u7528javascript\u63CF\u8FF0\u754C\u9762\u6E32\u67D3\u6210\u4EC0\u4E48\u6837\u5B50\u3002react\u7528jsx\uFF0C\u6CA1\u529E\u6CD5\u68C0\u6D4B\u51FA\u53EF\u4EE5\u4F18\u5316\u7684\u52A8\u6001\u4EE3\u7801\uFF0C\u6240\u4EE5\u505A\u65F6\u95F4\u5206\u7247\uFF0Cvue\u4E2D\u8DB3\u591F\u5FEB\u7684\u8BDD\u53EF\u4EE5\u4E0D\u7528\u65F6\u95F4\u5206\u7247</p></blockquote><ul><li><p>\u4F20\u7EDFvdom\u7684\u6027\u80FD\u74F6\u9888\uFF1A</p><ul><li>\u867D\u7136 Vue \u80FD\u591F\u4FDD\u8BC1\u89E6\u53D1\u66F4\u65B0\u7684\u7EC4\u4EF6\u6700\u5C0F\u5316\uFF0C\u4F46\u5728\u5355\u4E2A\u7EC4\u4EF6\u5185\u90E8\u4F9D\u7136\u9700\u8981\u904D\u5386\u8BE5\u7EC4\u4EF6\u7684\u6574\u4E2A vdom \u6811\u3002</li><li>\u4F20\u7EDF vdom \u7684\u6027\u80FD\u8DDF\u6A21\u7248\u5927\u5C0F\u6B63\u76F8\u5173\uFF0C\u8DDF\u52A8\u6001\u8282\u70B9\u7684\u6570\u91CF\u65E0\u5173\u3002\u5728\u4E00\u4E9B\u7EC4\u4EF6\u6574\u4E2A\u6A21\u7248\u5185\u53EA\u6709\u5C11\u91CF\u52A8\u6001\u8282\u70B9\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E9B\u904D\u5386\u90FD\u662F\u6027\u80FD\u7684\u6D6A\u8D39\u3002</li><li>JSX \u548C\u624B\u5199\u7684 render function \u662F\u5B8C\u5168\u52A8\u6001\u7684\uFF0C\u8FC7\u5EA6\u7684\u7075\u6D3B\u6027\u5BFC\u81F4\u8FD0\u884C\u65F6\u53EF\u4EE5\u7528\u4E8E\u4F18\u5316\u7684\u4FE1\u606F\u4E0D\u8DB3</li></ul></li><li><p>\u90A3\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u629B\u5F03vdom\u5462\uFF1F</p><ul><li>\u9AD8\u7EA7\u573A\u666F\u4E0B\u624B\u5199\xA0<code>render function</code>\xA0\u83B7\u5F97\u66F4\u5F3A\u7684\u8868\u8FBE\u529B</li><li>\u751F\u6210\u7684\u4EE3\u7801\u66F4\u7B80\u6D01</li><li>\u517C\u5BB92.x</li></ul></li></ul><blockquote><p>vue\u7684\u7279\u70B9\u662F\u5E95\u5C42\u4E3AVirtual DOM\uFF0C\u4E0A\u5C42\u5305\u542B\u6709\u5927\u91CF\u9759\u6001\u4FE1\u606F\u7684\u6A21\u7248\u3002\u4E3A\u4E86\u517C\u5BB9\u624B\u5199 render function\uFF0C\u6700\u5927\u5316\u5229\u7528\u6A21\u7248\u9759\u6001\u4FE1\u606F\uFF0C<code>vue3.0\u91C7\u7528\u4E86\u52A8\u9759\u7ED3\u5408\u7684\u89E3\u51B3\u65B9\u6848</code>\uFF0C\u5C06vdom\u7684\u64CD\u4F5C\u9897\u7C92\u5EA6\u53D8\u5C0F\uFF0C\u6BCF\u6B21\u89E6\u53D1\u66F4\u65B0\u4E0D\u518D\u4EE5\u7EC4\u4EF6\u4E3A\u5355\u4F4D\u8FDB\u884C\u904D\u5386\uFF0C\u4E3B\u8981\u66F4\u6539\u5982\u4E0B</p></blockquote><ul><li>\u5C06\u6A21\u7248\u57FA\u4E8E\u52A8\u6001\u8282\u70B9\u6307\u4EE4\u5207\u5272\u4E3A\u5D4C\u5957\u7684\u533A\u5757</li><li>\u6BCF\u4E2A\u533A\u5757\u5185\u90E8\u7684\u8282\u70B9\u7ED3\u6784\u662F\u56FA\u5B9A\u7684</li><li>\u6BCF\u4E2A\u533A\u5757\u53EA\u9700\u8981\u4EE5\u4E00\u4E2A\xA0<code>Array</code>\xA0\u8FFD\u8E2A\u81EA\u8EAB\u5305\u542B\u7684\u52A8\u6001\u8282\u70B9</li></ul><blockquote><p>vue3.0\u5C06 vdom \u66F4\u65B0\u6027\u80FD\u7531\u4E0E\u6A21\u7248\u6574\u4F53\u5927\u5C0F\u76F8\u5173\u63D0\u5347\u4E3A\u4E0E\u52A8\u6001\u5185\u5BB9\u7684\u6570\u91CF\u76F8\u5173</p></blockquote><p>Vue 3.0 \u52A8\u9759\u7ED3\u5408\u7684 Dom diff</p><blockquote><ul><li>Vue3.0 \u63D0\u51FA\u52A8\u9759\u7ED3\u5408\u7684 DOM diff \u601D\u60F3\uFF0C\u52A8\u9759\u7ED3\u5408\u7684 DOM diff\u5176\u5B9E\u662F\u5728\u9884\u7F16\u8BD1\u9636\u6BB5\u8FDB\u884C\u4E86\u4F18\u5316\u3002\u4E4B\u6240\u4EE5\u80FD\u591F\u505A\u5230\u9884\u7F16\u8BD1\u4F18\u5316\uFF0C\u662F\u56E0\u4E3A Vue core \u53EF\u4EE5\u9759\u6001\u5206\u6790 template\uFF0C\u5728\u89E3\u6790\u6A21\u7248\u65F6\uFF0C\u6574\u4E2A parse \u7684\u8FC7\u7A0B\u662F\u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u987A\u5E8F\u89E3\u6790\u6A21\u677F\uFF0C\u5F53\u89E3\u6790\u5230\u5F00\u59CB\u6807\u7B7E\u3001\u95ED\u5408\u6807\u7B7E\u548C\u6587\u672C\u7684\u65F6\u5019\u90FD\u4F1A\u5206\u522B\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6765\u8FBE\u5230\u6784\u9020 AST \u6811\u7684\u76EE\u7684\u3002</li><li>\u501F\u52A9\u9884\u7F16\u8BD1\u8FC7\u7A0B\uFF0CVue \u53EF\u4EE5\u505A\u5230\u7684\u9884\u7F16\u8BD1\u4F18\u5316\u5C31\u5F88\u5F3A\u5927\u4E86\u3002\u6BD4\u5982\u5728\u9884\u7F16\u8BD1\u65F6\u6807\u8BB0\u51FA\u6A21\u7248\u4E2D\u53EF\u80FD\u53D8\u5316\u7684\u7EC4\u4EF6\u8282\u70B9\uFF0C\u518D\u6B21\u8FDB\u884C\u6E32\u67D3\u524D diff \u65F6\u5C31\u53EF\u4EE5\u8DF3\u8FC7&quot;\u6C38\u8FDC\u4E0D\u4F1A\u53D8\u5316\u7684\u8282\u70B9&quot;\uFF0C\u800C\u53EA\u9700\u8981\u5BF9\u6BD4&quot;\u53EF\u80FD\u4F1A\u53D8\u5316\u7684\u52A8\u6001\u8282\u70B9&quot;\u3002\u8FD9\u4E5F\u5C31\u662F\u52A8\u9759\u7ED3\u5408\u7684 DOM diff \u5C06 diff \u6210\u672C\u4E0E\u6A21\u7248\u5927\u5C0F\u6B63\u76F8\u5173\u4F18\u5316\u5230\u4E0E\u52A8\u6001\u8282\u70B9\u6B63\u76F8\u5173\u7684\u7406\u8BBA\u4F9D\u636E\u3002</li></ul></blockquote><p>4. Performance</p><blockquote><p>vue3\u5728\u6027\u80FD\u65B9\u9762\u6BD4vue2\u5FEB\u4E862\u500D\u3002</p></blockquote><ul><li>\u91CD\u5199\u4E86\u865A\u62DFDOM\u7684\u5B9E\u73B0</li><li>\u8FD0\u884C\u65F6\u7F16\u8BD1</li><li>update\u6027\u80FD\u63D0\u9AD8</li><li>SSR\u901F\u5EA6\u63D0\u9AD8</li></ul><p>5. Tree-shaking support</p><blockquote><p>vue3\u4E2D\u7684\u6838\u5FC3api\u90FD\u652F\u6301\u4E86tree-shaking\uFF0C\u8FD9\u4E9Bapi\u90FD\u662F\u901A\u8FC7\u5305\u5F15\u5165\u7684\u65B9\u5F0F\u800C\u4E0D\u662F\u76F4\u63A5\u5728\u5B9E\u4F8B\u5316\u65F6\u5C31\u6CE8\u5165\uFF0C\u53EA\u4F1A\u5BF9\u4F7F\u7528\u5230\u7684\u529F\u80FD\u6216\u7279\u6027\u8FDB\u884C\u6253\u5305\uFF08\u6309\u9700\u6253\u5305\uFF09\uFF0C\u8FD9\u610F\u5473\u7740\u66F4\u591A\u7684\u529F\u80FD\u548C\u66F4\u5C0F\u7684\u4F53\u79EF\u3002</p></blockquote><p>6. Composition API</p><blockquote><p>vue2\u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u4F1A\u91C7\u7528mixin\u6765\u590D\u7528\u903B\u8F91\u4EE3\u7801\uFF0C\u7528\u5012\u662F\u633A\u597D\u7528\u7684\uFF0C\u4E0D\u8FC7\u4E5F\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF1A\u4F8B\u5982\u4EE3\u7801\u6765\u6E90\u4E0D\u6E05\u6670\u3001\u65B9\u6CD5\u5C5E\u6027\u7B49\u51B2\u7A81\u3002\u57FA\u4E8E\u6B64\u5728vue3\u4E2D\u5F15\u5165\u4E86Composition API\uFF08\u7EC4\u5408API\uFF09\uFF0C\u4F7F\u7528\u7EAF\u51FD\u6570\u5206\u9694\u590D\u7528\u4EE3\u7801\u3002\u548CReact\u4E2D\u7684<code>hooks</code>\u7684\u6982\u5FF5\u5F88\u76F8\u4F3C</p></blockquote><ul><li>\u66F4\u597D\u7684\u903B\u8F91\u590D\u7528\u548C\u4EE3\u7801\u7EC4\u7EC7</li><li>\u66F4\u597D\u7684\u7C7B\u578B\u63A8\u5BFC</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;X: {{ x }}&lt;/div&gt;
    &lt;div&gt;Y: {{ y }}&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent, onMounted, onUnmounted, ref } from &quot;vue&quot;;

const useMouseMove = () =&gt; {
    const x = ref(0);
    const y = ref(0);

    function move(e) {
        x.value = e.clientX;
        y.value = e.clientY;
    }

    onMounted(() =&gt; {
        window.addEventListener(&quot;mousemove&quot;, move);
    });

    onUnmounted(() =&gt; {
        window.removeEventListener(&quot;mousemove&quot;, move);
    });

    return { x, y };
};

export default defineComponent({
    setup() {
        const { x, y } = useMouseMove();

        return { x, y };
    }
});
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7. \u65B0\u589E\u7684\u4E09\u4E2A\u7EC4\u4EF6Fragment\u3001Teleport\u3001Suspense</p><p>Fragment</p><blockquote><p>\u5728\u4E66\u5199vue2\u65F6\uFF0C\u7531\u4E8E\u7EC4\u4EF6\u5FC5\u987B\u53EA\u6709\u4E00\u4E2A\u6839\u8282\u70B9\uFF0C\u5F88\u591A\u65F6\u5019\u4F1A\u6DFB\u52A0\u4E00\u4E9B\u6CA1\u6709\u610F\u4E49\u7684\u8282\u70B9\u7528\u4E8E\u5305\u88F9\u3002Fragment\u7EC4\u4EF6\u5C31\u662F\u7528\u4E8E\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\uFF08\u8FD9\u548CReact\u4E2D\u7684Fragment\u7EC4\u4EF6\u662F\u4E00\u6837\u7684\uFF09\u3002</p></blockquote><p>\u8FD9\u610F\u5473\u7740\u73B0\u5728\u53EF\u4EE5\u8FD9\u6837\u5199\u7EC4\u4EF6\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* App.vue */
&lt;template&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;main v-bind=&quot;$attrs&quot;&gt;...&lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/template&gt;

&lt;script&gt;
export default {};
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u8FD9\u6837</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// app.js
import { defineComponent, h, Fragment } from &#39;vue&#39;;

export default defineComponent({
    render() {
        return h(Fragment, {}, [
            h(&#39;header&#39;, {}, [&#39;...&#39;]),
            h(&#39;main&#39;, {}, [&#39;...&#39;]),
            h(&#39;footer&#39;, {}, [&#39;...&#39;]),
        ]);
    }
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Teleport</p><blockquote><p>Teleport\u5176\u5B9E\u5C31\u662FReact\u4E2D\u7684Portal\u3002Portal \u63D0\u4F9B\u4E86\u4E00\u79CD\u5C06\u5B50\u8282\u70B9\u6E32\u67D3\u5230\u5B58\u5728\u4E8E\u7236\u7EC4\u4EF6\u4EE5\u5916\u7684 DOM \u8282\u70B9\u7684\u4F18\u79C0\u7684\u65B9\u6848\u3002</p></blockquote><p>\u4E00\u4E2A portal \u7684\u5178\u578B\u7528\u4F8B\u662F\u5F53\u7236\u7EC4\u4EF6\u6709 overflow: hidden \u6216 z-index \u6837\u5F0F\u65F6\uFF0C\u4F46\u4F60\u9700\u8981\u5B50\u7EC4\u4EF6\u80FD\u591F\u5728\u89C6\u89C9\u4E0A&quot;\u8DF3\u51FA&quot;\u5176\u5BB9\u5668\u3002\u4F8B\u5982\uFF0C\u5BF9\u8BDD\u6846\u3001\u60AC\u6D6E\u5361\u4EE5\u53CA\u63D0\u793A\u6846\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* App.vue */
&lt;template&gt;
    &lt;div&gt;123&lt;/div&gt;
    &lt;Teleport to=&quot;#container&quot;&gt;
        Teleport
    &lt;/Teleport&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent } from &quot;vue&quot;;

export default defineComponent({
    setup() {}
});
&lt;/script&gt;

/* index.html */
&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
&lt;div id=&quot;container&quot;&gt;&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><p>Suspense</p><p>\u540C\u6837\u7684\uFF0C\u8FD9\u548CReact\u4E2D\u7684Supense\u662F\u4E00\u6837\u7684\u3002</p><blockquote><p><code>Suspense</code>\xA0\u8BA9\u4F60\u7684\u7EC4\u4EF6\u5728\u6E32\u67D3\u4E4B\u524D\u8FDB\u884C&quot;\u7B49\u5F85&quot;\uFF0C\u5E76\u5728\u7B49\u5F85\u65F6\u663E\u793A fallback \u7684\u5185\u5BB9</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// App.vue
&lt;template&gt;
    &lt;Suspense&gt;
        &lt;template #default&gt;
            &lt;AsyncComponent /&gt;
        &lt;/template&gt;
        &lt;template #fallback&gt;
            Loading...
        &lt;/template&gt;
    &lt;/Suspense&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent } from &quot;vue&quot;;
import AsyncComponent from &#39;./AsyncComponent.vue&#39;;

export default defineComponent({
    name: &quot;App&quot;,

    components: {
        AsyncComponent
    }
});
&lt;/script&gt;

// AsyncComponent.vue
&lt;template&gt;
    &lt;div&gt;Async Component&lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent } from &quot;vue&quot;;

const sleep = () =&gt; {
    return new Promise(resolve =&gt; setTimeout(resolve, 1000));
};

export default defineComponent({
    async setup() {
        await sleep();
    }
});
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8. Better TypeScript support</p><blockquote><p>\u5728vue2\u4E2D\u4F7F\u7528\u8FC7TypesScript\u7684\u7AE5\u978B\u5E94\u8BE5\u6709\u8FC7\u4F53\u4F1A\uFF0C\u5199\u8D77\u6765\u5B9E\u5728\u662F\u6709\u70B9\u96BE\u53D7\u3002vue3\u5219\u662F\u4F7F\u7528ts\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u5F00\u53D1\u8005\u4F7F\u7528vue3\u65F6\u62E5\u6709\u66F4\u597D\u7684\u7C7B\u578B\u652F\u6301\u548C\u66F4\u597D\u7684\u7F16\u5199\u4F53\u9A8C\u3002</p></blockquote><h3 id="_11-compositon-api" tabindex="-1"><a class="header-anchor" href="#_11-compositon-api" aria-hidden="true">#</a> 11 Compositon api</h3><p><code>Composition API</code>\u4E5F\u53EB\u7EC4\u5408\u5F0FAPI\uFF0C\u662FVue3.x\u7684\u65B0\u7279\u6027\u3002</p><blockquote><p>\u901A\u8FC7\u521B\u5EFA Vue \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u63A5\u53E3\u7684\u53EF\u91CD\u590D\u90E8\u5206\u53CA\u5176\u529F\u80FD\u63D0\u53D6\u5230\u53EF\u91CD\u7528\u7684\u4EE3\u7801\u6BB5\u4E2D\u3002\u4EC5\u6B64\u4E00\u9879\u5C31\u53EF\u4EE5\u4F7F\u6211\u4EEC\u7684\u5E94\u7528\u7A0B\u5E8F\u5728\u53EF\u7EF4\u62A4\u6027\u548C\u7075\u6D3B\u6027\u65B9\u9762\u8D70\u5F97\u66F4\u8FDC\u3002\u7136\u800C\uFF0C\u6211\u4EEC\u7684\u7ECF\u9A8C\u5DF2\u7ECF\u8BC1\u660E\uFF0C\u5149\u9760\u8FD9\u4E00\u70B9\u53EF\u80FD\u662F\u4E0D\u591F\u7684\uFF0C\u5C24\u5176\u662F\u5F53\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u53D8\u5F97\u975E\u5E38\u5927\u7684\u65F6\u5019------\u60F3\u60F3\u51E0\u767E\u4E2A\u7EC4\u4EF6\u3002\u5728\u5904\u7406\u5982\u6B64\u5927\u7684\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u5171\u4EAB\u548C\u91CD\u7528\u4EE3\u7801\u53D8\u5F97\u5C24\u4E3A\u91CD\u8981</p></blockquote><ul><li>Vue2.0\u4E2D\uFF0C\u968F\u7740\u529F\u80FD\u7684\u589E\u52A0\uFF0C\u7EC4\u4EF6\u53D8\u5F97\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u8D8A\u6765\u8D8A\u96BE\u7EF4\u62A4\uFF0C\u800C\u96BE\u4EE5\u7EF4\u62A4\u7684\u6839\u672C\u539F\u56E0\u662FVue\u7684API\u8BBE\u8BA1\u8FEB\u4F7F\u5F00\u53D1\u8005\u4F7F\u7528<code>watch\uFF0Ccomputed\uFF0Cmethods</code>\u9009\u9879\u7EC4\u7EC7\u4EE3\u7801\uFF0C\u800C\u4E0D\u662F\u5B9E\u9645\u7684\u4E1A\u52A1\u903B\u8F91\u3002</li><li>\u53E6\u5916Vue2.0\u7F3A\u5C11\u4E00\u79CD\u8F83\u4E3A\u7B80\u6D01\u7684\u4F4E\u6210\u672C\u7684\u673A\u5236\u6765\u5B8C\u6210\u903B\u8F91\u590D\u7528\uFF0C\u867D\u7136\u53EF\u4EE5<code>minxis</code>\u5B8C\u6210\u903B\u8F91\u590D\u7528\uFF0C\u4F46\u662F\u5F53<code>mixin</code>\u53D8\u591A\u7684\u65F6\u5019\uFF0C\u4F1A\u4F7F\u5F97\u96BE\u4EE5\u627E\u5230\u5BF9\u5E94\u7684<code>data\u3001computed</code>\u6216\u8005<code>method</code>\u6765\u6E90\u4E8E\u54EA\u4E2A<code>mixin</code>\uFF0C\u4F7F\u5F97\u7C7B\u578B\u63A8\u65AD\u96BE\u4EE5\u8FDB\u884C\u3002</li><li>\u6240\u4EE5<code>Composition API</code>\u7684\u51FA\u73B0\uFF0C\u4E3B\u8981\u662F\u4E5F\u662F\u4E3A\u4E86\u89E3\u51B3Option API\u5E26\u6765\u7684\u95EE\u9898\uFF0C\u7B2C\u4E00\u4E2A\u662F\u4EE3\u7801\u7EC4\u7EC7\u95EE\u9898\uFF0C<code>Compostion API</code>\u53EF\u4EE5\u8BA9\u5F00\u53D1\u8005\u6839\u636E\u4E1A\u52A1\u903B\u8F91\u7EC4\u7EC7\u81EA\u5DF1\u7684\u4EE3\u7801\uFF0C\u8BA9\u4EE3\u7801\u5177\u5907\u66F4\u597D\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u6269\u5C55\u6027\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F53\u4E0B\u4E00\u4E2A\u5F00\u53D1\u8005\u63A5\u89E6\u8FD9\u4E00\u6BB5\u4E0D\u662F\u4ED6\u81EA\u5DF1\u5199\u7684\u4EE3\u7801\u65F6\uFF0C\u4ED6\u53EF\u4EE5\u66F4\u597D\u7684\u5229\u7528\u4EE3\u7801\u7684\u7EC4\u7EC7\u53CD\u63A8\u51FA\u5B9E\u9645\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u6216\u8005\u6839\u636E\u4E1A\u52A1\u903B\u8F91\u66F4\u597D\u7684\u7406\u89E3\u4EE3\u7801\u3002</li><li>\u7B2C\u4E8C\u4E2A\u662F\u5B9E\u73B0\u4EE3\u7801\u7684\u903B\u8F91\u63D0\u53D6\u4E0E\u590D\u7528\uFF0C\u5F53\u7136<code>mixin</code>\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u903B\u8F91\u63D0\u53D6\u4E0E\u590D\u7528\uFF0C\u4F46\u662F\u50CF\u524D\u9762\u6240\u8BF4\u7684\uFF0C\u591A\u4E2A<code>mixin</code>\u4F5C\u7528\u5728\u540C\u4E00\u4E2A\u7EC4\u4EF6\u65F6\uFF0C\u5F88\u96BE\u770B\u51FA<code>property</code>\u662F\u6765\u6E90\u4E8E\u54EA\u4E2A<code>mixin</code>\uFF0C\u6765\u6E90\u4E0D\u6E05\u695A\uFF0C\u53E6\u5916\uFF0C\u591A\u4E2A<code>mixin</code>\u7684<code>property</code>\u5B58\u5728\u53D8\u91CF\u547D\u540D\u51B2\u7A81\u7684\u98CE\u9669\u3002\u800C<code>Composition API</code>\u521A\u597D\u89E3\u51B3\u4E86\u8FD9\u4E24\u4E2A\u95EE\u9898\u3002</li></ul><p>\u901A\u4FD7\u7684\u8BB2\uFF1A</p><p>\u6CA1\u6709<code>Composition API</code>\u4E4B\u524Dvue\u76F8\u5173\u4E1A\u52A1\u7684\u4EE3\u7801\u9700\u8981\u914D\u7F6E\u5230option\u7684\u7279\u5B9A\u7684\u533A\u57DF\uFF0C\u4E2D\u5C0F\u578B\u9879\u76EE\u662F\u6CA1\u6709\u95EE\u9898\u7684\uFF0C\u4F46\u662F\u5728\u5927\u578B\u9879\u76EE\u4E2D\u4F1A\u5BFC\u81F4\u540E\u671F\u7684\u7EF4\u62A4\u6027\u6BD4\u8F83\u590D\u6742\uFF0C\u540C\u65F6\u4EE3\u7801\u53EF\u590D\u7528\u6027\u4E0D\u9AD8\u3002Vue3.x\u4E2D\u7684composition-api\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u800C\u751F\u7684</p><p>compositon api\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u51FD\u6570\uFF1A</p><ul><li><code>setup</code></li><li><code>ref</code></li><li><code>reactive</code></li><li><code>watchEffect</code></li><li><code>watch</code></li><li><code>computed</code></li><li><code>toRefs</code></li><li>\u751F\u547D\u5468\u671F\u7684<code>hooks</code></li></ul><p>\u90FD\u8BF4Composition API\u4E0EReact Hook\u5F88\u50CF\uFF0C\u8BF4\u8BF4\u533A\u522B</p><blockquote><p>\u4ECEReact Hook\u7684\u5B9E\u73B0\u89D2\u5EA6\u770B\uFF0CReact Hook\u662F\u6839\u636EuseState\u8C03\u7528\u7684\u987A\u5E8F\u6765\u786E\u5B9A\u4E0B\u4E00\u6B21\u91CD\u6E32\u67D3\u65F6\u7684state\u662F\u6765\u6E90\u4E8E\u54EA\u4E2AuseState\uFF0C\u6240\u4EE5\u51FA\u73B0\u4E86\u4EE5\u4E0B\u9650\u5236</p></blockquote><ul><li>\u4E0D\u80FD\u5728\u5FAA\u73AF\u3001\u6761\u4EF6\u3001\u5D4C\u5957\u51FD\u6570\u4E2D\u8C03\u7528Hook</li><li>\u5FC5\u987B\u786E\u4FDD\u603B\u662F\u5728\u4F60\u7684React\u51FD\u6570\u7684\u9876\u5C42\u8C03\u7528Hook</li><li><code>useEffect\u3001useMemo</code>\u7B49\u51FD\u6570\u5FC5\u987B\u624B\u52A8\u786E\u5B9A\u4F9D\u8D56\u5173\u7CFB</li></ul><blockquote><p>\u800CComposition API\u662F\u57FA\u4E8EVue\u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u5B9E\u73B0\u7684\uFF0C\u4E0EReact Hook\u7684\u76F8\u6BD4</p></blockquote><ul><li>\u58F0\u660E\u5728<code>setup</code>\u51FD\u6570\u5185\uFF0C\u4E00\u6B21\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u53EA\u8C03\u7528\u4E00\u6B21<code>setup</code>\uFF0C\u800CReact Hook\u6BCF\u6B21\u91CD\u6E32\u67D3\u90FD\u9700\u8981\u8C03\u7528Hook\uFF0C\u4F7F\u5F97React\u7684GC\u6BD4Vue\u66F4\u6709\u538B\u529B\uFF0C\u6027\u80FD\u4E5F\u76F8\u5BF9\u4E8EVue\u6765\u8BF4\u4E5F\u8F83\u6162</li><li><code>Compositon API</code>\u7684\u8C03\u7528\u4E0D\u9700\u8981\u987E\u8651\u8C03\u7528\u987A\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5FAA\u73AF\u3001\u6761\u4EF6\u3001\u5D4C\u5957\u51FD\u6570\u4E2D\u4F7F\u7528</li><li>\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u81EA\u52A8\u5B9E\u73B0\u4E86\u4F9D\u8D56\u6536\u96C6\uFF0C\u8FDB\u800C\u7EC4\u4EF6\u7684\u90E8\u5206\u7684\u6027\u80FD\u4F18\u5316\u7531Vue\u5185\u90E8\u81EA\u5DF1\u5B8C\u6210\uFF0C\u800C<code>React Hook</code>\u9700\u8981\u624B\u52A8\u4F20\u5165\u4F9D\u8D56\uFF0C\u800C\u4E14\u5FC5\u987B\u5FC5\u987B\u4FDD\u8BC1\u4F9D\u8D56\u7684\u987A\u5E8F\uFF0C\u8BA9<code>useEffect</code>\u3001<code>useMemo</code>\u7B49\u51FD\u6570\u6B63\u786E\u7684\u6355\u83B7\u4F9D\u8D56\u53D8\u91CF\uFF0C\u5426\u5219\u4F1A\u7531\u4E8E\u4F9D\u8D56\u4E0D\u6B63\u786E\u4F7F\u5F97\u7EC4\u4EF6\u6027\u80FD\u4E0B\u964D\u3002</li></ul><blockquote><p>\u867D\u7136<code>Compositon API</code>\u770B\u8D77\u6765\u6BD4<code>React Hook</code>\u597D\u7528\uFF0C\u4F46\u662F\u5176\u8BBE\u8BA1\u601D\u60F3\u4E5F\u662F\u501F\u9274<code>React Hook</code>\u7684\u3002</p></blockquote><h3 id="_12-computed-\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_12-computed-\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 12 computed \u7684\u5B9E\u73B0\u539F\u7406</h3><blockquote><p><code>computed</code>\xA0\u672C\u8D28\u662F\u4E00\u4E2A\u60F0\u6027\u6C42\u503C\u7684\u89C2\u5BDF\u8005<code>computed watcher</code>\u3002\u5176\u5185\u90E8\u901A\u8FC7\xA0<code>this.dirty</code>\xA0\u5C5E\u6027\u6807\u8BB0\u8BA1\u7B97\u5C5E\u6027\u662F\u5426\u9700\u8981\u91CD\u65B0\u6C42\u503C\u3002</p></blockquote><ul><li>\u5F53 computed \u7684\u4F9D\u8D56\u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6,\u5C31\u4F1A\u901A\u77E5\u8FD9\u4E2A\u60F0\u6027\u7684 watcher,<code>computed watcher</code>\xA0\u901A\u8FC7\xA0<code>this.dep.subs.length</code>\xA0\u5224\u65AD\u6709\u6CA1\u6709\u8BA2\u9605\u8005,</li><li>\u6709\u7684\u8BDD,\u4F1A\u91CD\u65B0\u8BA1\u7B97,\u7136\u540E\u5BF9\u6BD4\u65B0\u65E7\u503C,\u5982\u679C\u53D8\u5316\u4E86,\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002 (Vue \u60F3\u786E\u4FDD\u4E0D\u4EC5\u4EC5\u662F\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\u7684\u503C\u53D1\u751F\u53D8\u5316\uFF0C\u800C\u662F\u5F53\u8BA1\u7B97\u5C5E\u6027<code>\u6700\u7EC8\u8BA1\u7B97\u7684\u503C</code>\u53D1\u751F\u53D8\u5316\u65F6\u624D\u4F1A<code>\u89E6\u53D1\u6E32\u67D3 watcher</code>\xA0\u91CD\u65B0\u6E32\u67D3\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u79CD\u4F18\u5316\u3002)</li><li>\u6CA1\u6709\u7684\u8BDD,\u4EC5\u4EC5\u628A\xA0<code>this.dirty = true</code>\xA0(\u5F53\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\u4E8E\u5176\u4ED6\u6570\u636E\u65F6\uFF0C\u5C5E\u6027\u5E76\u4E0D\u4F1A\u7ACB\u5373\u91CD\u65B0\u8BA1\u7B97\uFF0C\u53EA\u6709\u4E4B\u540E\u5176\u4ED6\u5730\u65B9\u9700\u8981\u8BFB\u53D6\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5B83\u624D\u4F1A\u771F\u6B63\u8BA1\u7B97\uFF0C\u5373\u5177\u5907 lazy\uFF08\u61D2\u8BA1\u7B97\uFF09\u7279\u6027\u3002)</li></ul><h3 id="_13-watch-\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_13-watch-\u7684\u7406\u89E3" aria-hidden="true">#</a> 13 watch \u7684\u7406\u89E3</h3><p><code>watch</code>\u6CA1\u6709\u7F13\u5B58\u6027\uFF0C\u66F4\u591A\u7684\u662F\u89C2\u5BDF\u7684\u4F5C\u7528\uFF0C\u53EF\u4EE5\u76D1\u542C\u67D0\u4E9B\u6570\u636E\u6267\u884C\u56DE\u8C03\u3002\u5F53\u6211\u4EEC\u9700\u8981<code>\u6DF1\u5EA6\u76D1\u542C\u5BF9\u8C61\u4E2D</code>\u7684\u5C5E\u6027\u65F6\uFF0C\u53EF\u4EE5\u6253\u5F00deep\uFF1Atrue\u9009\u9879\uFF0C\u8FD9\u6837\u4FBF\u4F1A\u5BF9\u5BF9\u8C61\u4E2D\u7684\u6BCF\u4E00\u9879\u8FDB\u884C\u76D1\u542C\u3002\u8FD9\u6837\u4F1A\u5E26\u6765\u6027\u80FD\u95EE\u9898\uFF0C\u4F18\u5316\u7684\u8BDD\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u5F62\u5F0F\u76D1\u542C</p><blockquote><p>\u6CE8\u610F\uFF1AWatcher : \u89C2\u5BDF\u8005\u5BF9\u8C61 , \u5B9E\u4F8B\u5206\u4E3A<code>\u6E32\u67D3 watcher</code>\xA0(render watcher),<code>\u8BA1\u7B97\u5C5E\u6027 watcher</code>\xA0(computed watcher),<code>\u4FA6\u542C\u5668 watcher</code>\uFF08user watcher\uFF09\u4E09\u79CD</p></blockquote><h3 id="_14-vue-\u6E32\u67D3\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_14-vue-\u6E32\u67D3\u8FC7\u7A0B" aria-hidden="true">#</a> 14 vue \u6E32\u67D3\u8FC7\u7A0B</h3><p><img src="`+u+`" alt=""></p><ul><li>\u8C03\u7528\xA0<code>compile</code>\xA0\u51FD\u6570,\u751F\u6210 render \u51FD\u6570\u5B57\u7B26\u4E32 ,\u7F16\u8BD1\u8FC7\u7A0B\u5982\u4E0B: <ul><li>parse \u4F7F\u7528\u5927\u91CF\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5BF9template\u5B57\u7B26\u4E32\u8FDB\u884C\u89E3\u6790\uFF0C\u5C06\u6807\u7B7E\u3001\u6307\u4EE4\u3001\u5C5E\u6027\u7B49\u8F6C\u5316\u4E3A\u62BD\u8C61\u8BED\u6CD5\u6811AST\u3002<code>\u6A21\u677F -&gt; AST \uFF08\u6700\u6D88\u8017\u6027\u80FD\uFF09</code></li><li>optimize \u904D\u5386AST\uFF0C\u627E\u5230\u5176\u4E2D\u7684\u4E00\u4E9B\u9759\u6001\u8282\u70B9\u5E76\u8FDB\u884C\u6807\u8BB0\uFF0C\u65B9\u4FBF\u5728\u9875\u9762\u91CD\u6E32\u67D3\u7684\u65F6\u5019\u8FDB\u884Cdiff\u6BD4\u8F83\u65F6\uFF0C\u76F4\u63A5\u8DF3\u8FC7\u8FD9\u4E00\u4E9B\u9759\u6001\u8282\u70B9\uFF0C<code>\u4F18\u5316runtime\u7684\u6027\u80FD</code></li><li>generate \u5C06\u6700\u7EC8\u7684AST\u8F6C\u5316\u4E3Arender\u51FD\u6570\u5B57\u7B26\u4E32</li></ul></li><li>\u8C03\u7528\xA0<code>new Watcher</code>\xA0\u51FD\u6570,\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316,\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0CRender \u51FD\u6570\u6267\u884C\u751F\u6210 vnode \u5BF9\u8C61</li><li>\u8C03\u7528\xA0<code>patch</code>\xA0\u65B9\u6CD5,\u5BF9\u6BD4\u65B0\u65E7 vnode \u5BF9\u8C61,\u901A\u8FC7 DOM diff \u7B97\u6CD5,\u6DFB\u52A0\u3001\u4FEE\u6539\u3001\u5220\u9664\u771F\u6B63\u7684 DOM \u5143\u7D20</li></ul><h3 id="_15-\u8BF4\u4E00\u8BF4keep-alive\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_15-\u8BF4\u4E00\u8BF4keep-alive\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 15 \u8BF4\u4E00\u8BF4keep-alive\u5B9E\u73B0\u539F\u7406</h3><blockquote><p>keep-alive<code>\u7EC4\u4EF6\u63A5\u53D7\u4E09\u4E2A\u5C5E\u6027\u53C2\u6570\uFF1A</code>include<code>\u3001</code>exclude<code>\u3001</code>max</p></blockquote><ul><li><code>include</code>\xA0\u6307\u5B9A\u9700\u8981\u7F13\u5B58\u7684<code>\u7EC4\u4EF6name</code>\u96C6\u5408\uFF0C\u53C2\u6570\u683C\u5F0F\u652F\u6301<code>String, RegExp, Array\u3002</code>\u5F53\u4E3A\u5B57\u7B26\u4E32\u7684\u65F6\u5019\uFF0C\u591A\u4E2A\u7EC4\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u9694\u5F00\u3002</li><li><code>exclude</code>\xA0\u6307\u5B9A\u4E0D\u9700\u8981\u7F13\u5B58\u7684<code>\u7EC4\u4EF6name</code>\u96C6\u5408\uFF0C\u53C2\u6570\u683C\u5F0F\u548Cinclude\u4E00\u6837\u3002</li><li><code>max</code>\xA0\u6307\u5B9A\u6700\u591A\u53EF\u7F13\u5B58\u7EC4\u4EF6\u7684\u6570\u91CF,\u8D85\u8FC7\u6570\u91CF\u5220\u9664\u7B2C\u4E00\u4E2A\u3002\u53C2\u6570\u683C\u5F0F\u652F\u6301String\u3001Number\u3002</li></ul><p>\u539F\u7406</p><p><code>keep-alive</code>\u5B9E\u4F8B\u4F1A\u7F13\u5B58\u5BF9\u5E94\u7EC4\u4EF6\u7684<code>VNode</code>,\u5982\u679C\u547D\u4E2D\u7F13\u5B58\uFF0C\u76F4\u63A5\u4ECE\u7F13\u5B58\u5BF9\u8C61\u8FD4\u56DE\u5BF9\u5E94<code>VNode</code></p><p><code>LRU\uFF08Least recently used\uFF09</code>\xA0\u7B97\u6CD5\u6839\u636E\u6570\u636E\u7684\u5386\u53F2\u8BBF\u95EE\u8BB0\u5F55\u6765\u8FDB\u884C\u6DD8\u6C70\u6570\u636E\uFF0C\u5176\u6838\u5FC3\u601D\u60F3\u662F&quot;\u5982\u679C\u6570\u636E\u6700\u8FD1\u88AB\u8BBF\u95EE\u8FC7\uFF0C\u90A3\u4E48\u5C06\u6765\u88AB\u8BBF\u95EE\u7684\u51E0\u7387\u4E5F\u66F4\u9AD8&quot;\u3002(\u58A8\u83F2\u5B9A\u5F8B\uFF1A\u8D8A\u62C5\u5FC3\u7684\u4E8B\u60C5\u8D8A\u4F1A\u53D1\u751F)</p><h3 id="_16-\u4E3A\u4EC0\u4E48\u8BBF\u95EEdata\u5C5E\u6027\u4E0D\u9700\u8981\u5E26data" tabindex="-1"><a class="header-anchor" href="#_16-\u4E3A\u4EC0\u4E48\u8BBF\u95EEdata\u5C5E\u6027\u4E0D\u9700\u8981\u5E26data" aria-hidden="true">#</a> 16 \u4E3A\u4EC0\u4E48\u8BBF\u95EEdata\u5C5E\u6027\u4E0D\u9700\u8981\u5E26data</h3><blockquote><p>vue\u4E2D\u8BBF\u95EE\u5C5E\u6027\u4EE3\u7406\xA0<code>this.data.xxx</code>\xA0\u8F6C\u6362\xA0<code>this.xxx</code>\xA0\u7684\u5B9E\u73B0</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> /** \u5C06 \u67D0\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027 \u8BBF\u95EE \u6620\u5C04\u5230 \u5BF9\u8C61\u7684\u67D0\u4E00\u4E2A\u5C5E\u6027\u6210\u5458\u4E0A */
function proxy( target, prop, key ) {
  Object.defineProperty( target, key, {
    enumerable: true,
    configurable: true,
    get () {
      return target[ prop ][ key ];
    },
    set ( newVal ) {
      target[ prop ][ key ] = newVal;
    }
  } );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-template\u9884\u7F16\u8BD1\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_17-template\u9884\u7F16\u8BD1\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 17 template\u9884\u7F16\u8BD1\u662F\u4EC0\u4E48</h3><p>\u5BF9\u4E8E Vue \u7EC4\u4EF6\u6765\u8BF4\uFF0C\u6A21\u677F\u7F16\u8BD1\u53EA\u4F1A\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u7F16\u8BD1\u4E00\u6B21\uFF0C\u751F\u6210\u6E32\u67D3\u51FD\u6570\u4E4B\u540E\u5728\u4E5F\u4E0D\u4F1A\u8FDB\u884C\u7F16\u8BD1\u3002\u56E0\u6B64\uFF0C\u7F16\u8BD1\u5BF9\u7EC4\u4EF6\u7684 runtime \u662F\u4E00\u79CD\u6027\u80FD\u635F\u8017\u3002</p><blockquote><p>\u800C\u6A21\u677F\u7F16\u8BD1\u7684\u76EE\u7684\u4EC5\u4EC5\u662F\u5C06template\u8F6C\u5316\u4E3Arender function\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u6B63\u597D\u53EF\u4EE5\u5728\u9879\u76EE\u6784\u5EFA\u7684\u8FC7\u7A0B\u4E2D\u5B8C\u6210\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8BA9\u5B9E\u9645\u7EC4\u4EF6\u5728 runtime \u65F6\u76F4\u63A5\u8DF3\u8FC7\u6A21\u677F\u6E32\u67D3\uFF0C\u8FDB\u800C\u63D0\u5347\u6027\u80FD\uFF0C\u8FD9\u4E2A\u5728\u9879\u76EE\u6784\u5EFA\u7684\u7F16\u8BD1template\u7684\u8FC7\u7A0B\uFF0C\u5C31\u662F\u9884\u7F16\u8BD1\u3002</p></blockquote><h3 id="_18-\u4ECB\u7ECD\u4E00\u4E0Bvue\u4E2D\u7684diff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_18-\u4ECB\u7ECD\u4E00\u4E0Bvue\u4E2D\u7684diff\u7B97\u6CD5" aria-hidden="true">#</a> 18 \u4ECB\u7ECD\u4E00\u4E0BVue\u4E2D\u7684Diff\u7B97\u6CD5</h3><p>\u5728\u65B0\u8001\u865A\u62DFDOM\u5BF9\u6BD4\u65F6</p><ul><li>\u9996\u5148\uFF0C\u5BF9\u6BD4\u8282\u70B9\u672C\u8EAB\uFF0C\u5224\u65AD\u662F\u5426\u4E3A\u540C\u4E00\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u4E3A\u76F8\u540C\u8282\u70B9\uFF0C\u5219\u5220\u9664\u8BE5\u8282\u70B9\u91CD\u65B0\u521B\u5EFA\u8282\u70B9\u8FDB\u884C\u66FF\u6362</li><li>\u5982\u679C\u4E3A\u76F8\u540C\u8282\u70B9\uFF0C\u8FDB\u884CpatchVnode\uFF0C\u5224\u65AD\u5982\u4F55\u5BF9\u8BE5\u8282\u70B9\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u5904\u7406\uFF0C\u5148\u5224\u65AD\u4E00\u65B9\u6709\u5B50\u8282\u70B9\u4E00\u65B9\u6CA1\u6709\u5B50\u8282\u70B9\u7684\u60C5\u51B5(\u5982\u679C\u65B0\u7684children\u6CA1\u6709\u5B50\u8282\u70B9\uFF0C\u5C06\u65E7\u7684\u5B50\u8282\u70B9\u79FB\u9664)</li><li>\u6BD4\u8F83\u5982\u679C\u90FD\u6709\u5B50\u8282\u70B9\uFF0C\u5219\u8FDB\u884CupdateChildren\uFF0C\u5224\u65AD\u5982\u4F55\u5BF9\u8FD9\u4E9B\u65B0\u8001\u8282\u70B9\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u64CD\u4F5C\uFF08diff\u6838\u5FC3\uFF09\u3002 \u5339\u914D\u65F6\uFF0C\u627E\u5230\u76F8\u540C\u7684\u5B50\u8282\u70B9\uFF0C\u9012\u5F52\u6BD4\u8F83\u5B50\u8282\u70B9</li></ul><blockquote><p>\u5728diff\u4E2D\uFF0C\u53EA\u5BF9\u540C\u5C42\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\uFF0C\u653E\u5F03\u8DE8\u7EA7\u7684\u8282\u70B9\u6BD4\u8F83\uFF0C\u4F7F\u5F97\u65F6\u95F4\u590D\u6742\u4ECEO(n^3)\u964D\u4F4E\u503CO(n)\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u6709\u5F53\u65B0\u65E7children\u90FD\u4E3A\u591A\u4E2A\u5B50\u8282\u70B9\u65F6\u624D\u9700\u8981\u7528\u6838\u5FC3\u7684Diff\u7B97\u6CD5\u8FDB\u884C\u540C\u5C42\u7EA7\u6BD4\u8F83\u3002</p></blockquote><h3 id="_19-\u8BF4\u8BF4vue2-0\u548Cvue3-0\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_19-\u8BF4\u8BF4vue2-0\u548Cvue3-0\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 19 \u8BF4\u8BF4Vue2.0\u548CVue3.0\u6709\u4EC0\u4E48\u533A\u522B</h3><ul><li>\u91CD\u6784\u54CD\u5E94\u5F0F\u7CFB\u7EDF\uFF0C\u4F7F\u7528<code>Proxy</code>\u66FF\u6362<code>Object.defineProperty</code>\uFF0C\u4F7F\u7528<code>Proxy</code>\u4F18\u52BF\uFF1A <ul><li>\u53EF\u76F4\u63A5\u76D1\u542C\u6570\u7EC4\u7C7B\u578B\u7684\u6570\u636E\u53D8\u5316</li><li>\u76D1\u542C\u7684\u76EE\u6807\u4E3A\u5BF9\u8C61\u672C\u8EAB\uFF0C\u4E0D\u9700\u8981\u50CF<code>Object.defineProperty</code>\u4E00\u6837\u904D\u5386\u6BCF\u4E2A\u5C5E\u6027\uFF0C\u6709\u4E00\u5B9A\u7684\u6027\u80FD\u63D0\u5347</li><li>\u53EF\u62E6\u622A<code>apply\u3001ownKeys\u3001has</code>\u7B4913\u79CD\u65B9\u6CD5\uFF0C\u800C<code>Object.defineProperty</code>\u4E0D\u884C</li><li>\u76F4\u63A5\u5B9E\u73B0\u5BF9\u8C61\u5C5E\u6027\u7684\u65B0\u589E/\u5220\u9664</li></ul></li><li>\u65B0\u589E<code>Composition API</code>\uFF0C\u66F4\u597D\u7684\u903B\u8F91\u590D\u7528\u548C\u4EE3\u7801\u7EC4\u7EC7</li><li>\u91CD\u6784\xA0<code>Virtual DOM</code><ul><li>\u6A21\u677F\u7F16\u8BD1\u65F6\u7684\u4F18\u5316\uFF0C\u5C06\u4E00\u4E9B\u9759\u6001\u8282\u70B9\u7F16\u8BD1\u6210\u5E38\u91CF</li><li><code>slot</code>\u4F18\u5316\uFF0C\u5C06<code>slot</code>\u7F16\u8BD1\u4E3A<code>lazy</code>\u51FD\u6570\uFF0C\u5C06<code>slot</code>\u7684\u6E32\u67D3\u7684\u51B3\u5B9A\u6743\u4EA4\u7ED9\u5B50\u7EC4\u4EF6</li><li>\u6A21\u677F\u4E2D\u5185\u8054\u4E8B\u4EF6\u7684\u63D0\u53D6\u5E76\u91CD\u7528\uFF08\u539F\u672C\u6BCF\u6B21\u6E32\u67D3\u90FD\u91CD\u65B0\u751F\u6210\u5185\u8054\u51FD\u6570\uFF09</li></ul></li><li>\u4EE3\u7801\u7ED3\u6784\u8C03\u6574\uFF0C\u66F4\u4FBF\u4E8ETree shaking\uFF0C\u4F7F\u5F97\u4F53\u79EF\u66F4\u5C0F</li><li>\u4F7F\u7528Typescript\u66FF\u6362Flow</li></ul>`,192),p=[b];function h(g,f){return i(),n("div",null,p)}var k=e(m,[["render",h],["__file","Vue.html.vue"]]);export{k as default};
