import{_ as s,o as v,c as r,a as n,d as l,b as i,e,r as c}from"./app.12353158.js";var a="/assets/99.7fef5b6b.png",t="/assets/100.8adca2e0.png",o="/assets/202203211358420.50e386ca.png",u="/assets/202203211358473.9380426d.png",m="/assets/202203211358728.7a007c71.png",b="/assets/202203211358228.88001293.png",p="/assets/202203211358441.8114a883.png",x="/assets/202203211359786.76f6b8b5.png",h="/assets/202203211359054.254c65ac.png",f="/assets/202203211359533.41a599c7.png",g="/assets/202203211359184.742d974c.png",N="/assets/202203211359531.604150ab.png",S="/assets/202203211359343.fc347716.png",y="/assets/202203211359968.463cd194.png",w="/assets/202203211359489.62da3f67.png",k="/assets/202203211400801.0ffdba19.png",C="/assets/202203211400020.6794d061.png",E="/assets/202203211400324.6fd2fe4c.png",I="/assets/202203211400687.8981ece0.png",_="/assets/202203211400875.a2eaa69f.png",j="/assets/202203211400253.e787e9c7.png",D="/assets/202203211400806.d5307f3e.png",M="/assets/202203211400840.3043ce85.png",O="/assets/202203211401709.02f82d3f.png",q="/assets/202203211401591.f419f7ee.png",P="/assets/202203211401764.0592491a.png",V="/assets/202203211401780.f6fa3bad.png",L="/assets/image-20210220201751694.bf34a7f1.png";const B={},A=i(`<h1 id="\u6846\u67B6\u901A\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u6846\u67B6\u901A\u8BC6" aria-hidden="true">#</a> \u6846\u67B6\u901A\u8BC6</h1><hr><h2 id="_1-mvvm" tabindex="-1"><a class="header-anchor" href="#_1-mvvm" aria-hidden="true">#</a> 1 MVVM</h2><blockquote><p><code>MVVM</code>\xA0\u7531\u4EE5\u4E0B\u4E09\u4E2A\u5185\u5BB9\u7EC4\u6210</p></blockquote><ul><li><code>View</code>\uFF1A\u754C\u9762</li><li><code>Model</code>\uFF1A\u6570\u636E\u6A21\u578B</li><li><code>ViewModel</code>\uFF1A\u4F5C\u4E3A\u6865\u6881\u8D1F\u8D23\u6C9F\u901A\xA0<code>View</code>\xA0\u548C\xA0<code>Model</code></li></ul><blockquote><p>\u5728\xA0<code>JQuery</code>\xA0\u65F6\u671F\uFF0C\u5982\u679C\u9700\u8981\u5237\u65B0\xA0<code>UI</code>\xA0\u65F6\uFF0C\u9700\u8981\u5148\u53D6\u5230\u5BF9\u5E94\u7684\xA0<code>DOM</code>\xA0\u518D\u66F4\u65B0\xA0<code>UI</code>\uFF0C\u8FD9\u6837\u6570\u636E\u548C\u4E1A\u52A1\u7684\u903B\u8F91\u5C31\u548C\u9875\u9762\u6709\u5F3A\u8026\u5408\u3002</p></blockquote><p>MVVM</p><p>\u5728\xA0<code>MVVM</code>\xA0\u4E2D\uFF0C<code>UI</code>\xA0\u662F\u901A\u8FC7\u6570\u636E\u9A71\u52A8\u7684\uFF0C\u6570\u636E\u4E00\u65E6\u6539\u53D8\u5C31\u4F1A\u76F8\u5E94\u7684\u5237\u65B0\u5BF9\u5E94\u7684\xA0<code>UI</code>\uFF0C<code>UI</code>\xA0\u5982\u679C\u6539\u53D8\uFF0C\u4E5F\u4F1A\u6539\u53D8\u5BF9\u5E94\u7684\u6570\u636E\u3002\u8FD9\u79CD\u65B9\u5F0F\u5C31\u53EF\u4EE5\u5728\u4E1A\u52A1\u5904\u7406\u4E2D\u53EA\u5173\u5FC3\u6570\u636E\u7684\u6D41\u8F6C\uFF0C\u800C\u65E0\u9700\u76F4\u63A5\u548C\u9875\u9762\u6253\u4EA4\u9053\u3002<code>ViewModel</code>\xA0\u53EA\u5173\u5FC3\u6570\u636E\u548C\u4E1A\u52A1\u7684\u5904\u7406\uFF0C\u4E0D\u5173\u5FC3\xA0<code>View</code>\xA0\u5982\u4F55\u5904\u7406\u6570\u636E\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>View</code>\xA0\u548C\xA0<code>Model</code>\xA0\u90FD\u53EF\u4EE5\u72EC\u7ACB\u51FA\u6765\uFF0C\u4EFB\u4F55\u4E00\u65B9\u6539\u53D8\u4E86\u4E5F\u4E0D\u4E00\u5B9A\u9700\u8981\u6539\u53D8\u53E6\u4E00\u65B9\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5C06\u4E00\u4E9B\u53EF\u590D\u7528\u7684\u903B\u8F91\u653E\u5728\u4E00\u4E2A\xA0<code>ViewModel</code>\xA0\u4E2D\uFF0C\u8BA9\u591A\u4E2A\xA0<code>View</code>\u590D\u7528\u8FD9\u4E2A\xA0<code>ViewModel</code>\u3002</p><ul><li>\u5728\xA0<code>MVVM</code>\xA0\u4E2D\uFF0C\u6700\u6838\u5FC3\u7684\u4E5F\u5C31\u662F\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\uFF0C\u4F8B\u5982\xA0<code>Angluar</code>\xA0\u7684\u810F\u6570\u636E\u68C0\u6D4B\uFF0C<code>Vue</code>\xA0\u4E2D\u7684\u6570\u636E\u52AB\u6301\u3002</li></ul><p>\u810F\u6570\u636E\u68C0\u6D4B</p><blockquote><p>\u5F53\u89E6\u53D1\u4E86\u6307\u5B9A\u4E8B\u4EF6\u540E\u4F1A\u8FDB\u5165\u810F\u6570\u636E\u68C0\u6D4B\uFF0C\u8FD9\u65F6\u4F1A\u8C03\u7528\xA0<code>$digest</code>\xA0\u5FAA\u73AF\u904D\u5386\u6240\u6709\u7684\u6570\u636E\u89C2\u5BDF\u8005\uFF0C\u5224\u65AD\u5F53\u524D\u503C\u662F\u5426\u548C\u5148\u524D\u7684\u503C\u6709\u533A\u522B\uFF0C\u5982\u679C\u68C0\u6D4B\u5230\u53D8\u5316\u7684\u8BDD\uFF0C\u4F1A\u8C03\u7528\xA0<code>$watch</code>\xA0\u51FD\u6570\uFF0C\u7136\u540E\u518D\u6B21\u8C03\u7528\xA0<code>$digest</code>\xA0\u5FAA\u73AF\u76F4\u5230\u53D1\u73B0\u6CA1\u6709\u53D8\u5316\u3002\u5FAA\u73AF\u81F3\u5C11\u4E3A\u4E8C\u6B21 \uFF0C\u81F3\u591A\u4E3A\u5341\u6B21\u3002</p></blockquote><blockquote><p>\u810F\u6570\u636E\u68C0\u6D4B\u867D\u7136\u5B58\u5728\u4F4E\u6548\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u4E0D\u5173\u5FC3\u6570\u636E\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u6539\u53D8\u7684\uFF0C\u90FD\u53EF\u4EE5\u5B8C\u6210\u4EFB\u52A1\uFF0C\u4F46\u662F\u8FD9\u5728\xA0<code>Vue</code>\xA0\u4E2D\u7684\u53CC\u5411\u7ED1\u5B9A\u662F\u5B58\u5728\u95EE\u9898\u7684\u3002\u5E76\u4E14\u810F\u6570\u636E\u68C0\u6D4B\u53EF\u4EE5\u5B9E\u73B0\u6279\u91CF\u68C0\u6D4B\u51FA\u66F4\u65B0\u7684\u503C\uFF0C\u518D\u53BB\u7EDF\u4E00\u66F4\u65B0\xA0<code>UI</code>\uFF0C\u5927\u5927\u51CF\u5C11\u4E86\u64CD\u4F5C\xA0<code>DOM</code>\xA0\u7684\u6B21\u6570\u3002\u6240\u4EE5\u4F4E\u6548\u4E5F\u662F\u76F8\u5BF9\u7684\uFF0C\u8FD9\u5C31\u4EC1\u8005\u89C1\u4EC1\u667A\u8005\u89C1\u667A\u4E86\u3002</p></blockquote><p>\u6570\u636E\u52AB\u6301</p><blockquote><p><code>Vue</code>\xA0\u5185\u90E8\u4F7F\u7528\u4E86\xA0<code>Object.defineProperty()</code>\xA0\u6765\u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9A\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u76D1\u542C\u5230\xA0<code>set</code>\xA0\u548C\xA0<code>get</code>\xA0\u7684\u4E8B\u4EF6\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var data = { name: &#39;yck&#39; }
observe(data)
let name = data.name // -&gt; get value
data.name = &#39;yyy&#39; // -&gt; change value

function observe(obj) {
  // \u5224\u65AD\u7C7B\u578B
  if (!obj || typeof obj !== &#39;object&#39;) {
    return
  }
  Object.keys(obj).forEach(key =&gt; {
    defineReactive(obj, key, obj[key])
  })
}

function defineReactive(obj, key, val) {
  // \u9012\u5F52\u5B50\u5C5E\u6027
  observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      console.log(&#39;get value&#39;)
      return val
    },
    set: function reactiveSetter(newVal) {
      console.log(&#39;change value&#39;)
      val = newVal
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4EE5\u4E0A\u4EE3\u7801\u7B80\u5355\u7684\u5B9E\u73B0\u4E86\u5982\u4F55\u76D1\u542C\u6570\u636E\u7684\xA0<code>set</code>\xA0\u548C\xA0<code>get</code>\xA0\u7684\u4E8B\u4EF6\uFF0C\u4F46\u662F\u4EC5\u4EC5\u5982\u6B64\u662F\u4E0D\u591F\u7684\uFF0C\u8FD8\u9700\u8981\u5728\u9002\u5F53\u7684\u65F6\u5019\u7ED9\u5C5E\u6027\u6DFB\u52A0\u53D1\u5E03\u8BA2\u9605</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div&gt;
    {{name}}
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728\u89E3\u6790\u5982\u4E0A\u6A21\u677F\u4EE3\u7801\u65F6\uFF0C\u9047\u5230\xA0<code>{name}</code>\xA0\u5C31\u4F1A\u7ED9\u5C5E\u6027\xA0<code>name</code>\xA0\u6DFB\u52A0\u53D1\u5E03\u8BA2\u9605\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u901A\u8FC7 Dep \u89E3\u8026
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    // sub \u662F Watcher \u5B9E\u4F8B
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach(sub =&gt; {
      sub.update()
    })
  }
}
// \u5168\u5C40\u5C5E\u6027\uFF0C\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E Watcher
Dep.target = null

function update(value) {
  document.querySelector(&#39;div&#39;).innerText = value
}

class Watcher {
  constructor(obj, key, cb) {
    // \u5C06 Dep.target \u6307\u5411\u81EA\u5DF1
    // \u7136\u540E\u89E6\u53D1\u5C5E\u6027\u7684 getter \u6DFB\u52A0\u76D1\u542C
    // \u6700\u540E\u5C06 Dep.target \u7F6E\u7A7A
    Dep.target = this
    this.cb = cb
    this.obj = obj
    this.key = key
    this.value = obj[key]
    Dep.target = null
  }
  update() {
    // \u83B7\u5F97\u65B0\u503C
    this.value = this.obj[this.key]
    // \u8C03\u7528 update \u65B9\u6CD5\u66F4\u65B0 Dom
    this.cb(this.value)
  }
}
var data = { name: &#39;yck&#39; }
observe(data)
// \u6A21\u62DF\u89E3\u6790\u5230 \`{{name}}\` \u89E6\u53D1\u7684\u64CD\u4F5C
new Watcher(data, &#39;name&#39;, update)
// update Dom innerText
data.name = &#39;yyy&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u63A5\u4E0B\u6765,\u5BF9\xA0<code>defineReactive</code>\xA0\u51FD\u6570\u8FDB\u884C\u6539\u9020</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function defineReactive(obj, key, val) {
  // \u9012\u5F52\u5B50\u5C5E\u6027
  observe(val)
  let dp = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      console.log(&#39;get value&#39;)
      // \u5C06 Watcher \u6DFB\u52A0\u5230\u8BA2\u9605
      if (Dep.target) {
        dp.addSub(Dep.target)
      }
      return val
    },
    set: function reactiveSetter(newVal) {
      console.log(&#39;change value&#39;)
      val = newVal
      // \u6267\u884C watcher \u7684 update \u65B9\u6CD5
      dp.notify()
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4EE5\u4E0A\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u6613\u7684\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6838\u5FC3\u601D\u8DEF\u5C31\u662F\u624B\u52A8\u89E6\u53D1\u4E00\u6B21\u5C5E\u6027\u7684\xA0<code>getter</code>\xA0\u6765\u5B9E\u73B0\u53D1\u5E03\u8BA2\u9605\u7684\u6DFB\u52A0</p></blockquote><p>Proxy \u4E0E Object.defineProperty \u5BF9\u6BD4</p><blockquote><p><code>Object.defineProperty</code>\xA0\u867D\u7136\u5DF2\u7ECF\u80FD\u591F\u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9A\u4E86\uFF0C\u4F46\u662F\u4ED6\u8FD8\u662F\u6709\u7F3A\u9677\u7684\u3002</p></blockquote><ul><li>\u53EA\u80FD\u5BF9\u5C5E\u6027\u8FDB\u884C\u6570\u636E\u52AB\u6301\uFF0C\u6240\u4EE5\u9700\u8981\u6DF1\u5EA6\u904D\u5386\u6574\u4E2A\u5BF9\u8C61 \u5BF9\u4E8E\u6570\u7EC4\u4E0D\u80FD\u76D1\u542C\u5230\u6570\u636E\u7684\u53D8\u5316</li><li>\u867D\u7136\xA0<code>Vue</code>\xA0\u4E2D\u786E\u5B9E\u80FD\u68C0\u6D4B\u5230\u6570\u7EC4\u6570\u636E\u7684\u53D8\u5316\uFF0C\u4F46\u662F\u5176\u5B9E\u662F\u4F7F\u7528\u4E86\xA0<code>hack</code>\u7684\u529E\u6CD5\uFF0C\u5E76\u4E14\u4E5F\u662F\u6709\u7F3A\u9677\u7684\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)
// hack \u4EE5\u4E0B\u51E0\u4E2A\u51FD\u6570
const methodsToPatch = [
  &#39;push&#39;,
  &#39;pop&#39;,
  &#39;shift&#39;,
  &#39;unshift&#39;,
  &#39;splice&#39;,
  &#39;sort&#39;,
  &#39;reverse&#39;
]
methodsToPatch.forEach(function (method) {
  // \u83B7\u5F97\u539F\u751F\u51FD\u6570
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    // \u8C03\u7528\u539F\u751F\u51FD\u6570
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case &#39;push&#39;:
      case &#39;unshift&#39;:
        inserted = args
        break
      case &#39;splice&#39;:
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // \u89E6\u53D1\u66F4\u65B0
    ob.dep.notify()
    return result
  })
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53CD\u89C2\xA0<code>Proxy</code>\u5C31\u6CA1\u4EE5\u4E0A\u7684\u95EE\u9898\uFF0C\u539F\u751F\u652F\u6301\u76D1\u542C\u6570\u7EC4\u53D8\u5316\uFF0C\u5E76\u4E14\u53EF\u4EE5\u76F4\u63A5\u5BF9\u6574\u4E2A\u5BF9\u8C61\u8FDB\u884C\u62E6\u622A\uFF0C\u6240\u4EE5\xA0<code>Vue</code>\xA0\u4E5F\u5C06\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u4E2D\u4F7F\u7528\xA0<code>Proxy</code>\xA0\u66FF\u6362\xA0<code>Object.defineProperty</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let onWatch = (obj, setBind, getLogger) =&gt; {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u8DEF\u7531\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u8DEF\u7531\u539F\u7406" aria-hidden="true">#</a> 2 \u8DEF\u7531\u539F\u7406</h2><blockquote><p>\u524D\u7AEF\u8DEF\u7531\u5B9E\u73B0\u8D77\u6765\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u672C\u8D28\u5C31\u662F\u76D1\u542C\xA0<code>URL</code>\xA0\u7684\u53D8\u5316\uFF0C\u7136\u540E\u5339\u914D\u8DEF\u7531\u89C4\u5219\uFF0C\u663E\u793A\u76F8\u5E94\u7684\u9875\u9762\uFF0C\u5E76\u4E14\u65E0\u987B\u5237\u65B0\u3002\u76EE\u524D\u5355\u9875\u9762\u4F7F\u7528\u7684\u8DEF\u7531\u5C31\u53EA\u6709\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F</p></blockquote><ul><li><code>hash</code>\xA0\u6A21\u5F0F</li><li><code>history</code>\xA0\u6A21\u5F0F</li></ul><blockquote><p><code>www.test.com/##/</code>\xA0\u5C31\u662F\xA0<code>Hash URL</code>\uFF0C\u5F53\xA0<code>##</code>\xA0\u540E\u9762\u7684\u54C8\u5E0C\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4E0D\u4F1A\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E\uFF0C\u53EF\u4EE5\u901A\u8FC7\xA0<code>hashchange</code>\xA0\u4E8B\u4EF6\u6765\u76D1\u542C\u5230\xA0<code>URL</code>\xA0\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u8FDB\u884C\u8DF3\u8F6C\u9875\u9762\u3002</p></blockquote><p><img src="`+a+'" alt=""></p><blockquote><p><code>History</code>\u6A21\u5F0F\u662F\xA0<code>HTML5</code>\xA0\u65B0\u63A8\u51FA\u7684\u529F\u80FD\uFF0C\u6BD4\u4E4B\xA0<code>Hash URL</code>\xA0\u66F4\u52A0\u7F8E\u89C2</p></blockquote><p><img src="'+t+`" alt=""></p><h2 id="_3-virtual-dom" tabindex="-1"><a class="header-anchor" href="#_3-virtual-dom" aria-hidden="true">#</a> 3 Virtual Dom</h2><p>\u4E3A\u4EC0\u4E48\u9700\u8981 Virtual Dom</p><blockquote><p>\u4F17\u6240\u5468\u77E5\uFF0C\u64CD\u4F5C\xA0<code>DOM</code>\xA0\u662F\u5F88\u8017\u8D39\u6027\u80FD\u7684\u4E00\u4EF6\u4E8B\u60C5\uFF0C\u65E2\u7136\u5982\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u901A\u8FC7\xA0<code>JS</code>\xA0\u5BF9\u8C61\u6765\u6A21\u62DF\xA0<code>DOM</code>\xA0\u5BF9\u8C61\uFF0C\u6BD5\u7ADF\u64CD\u4F5C\xA0<code>JS</code>\xA0\u5BF9\u8C61\u6BD4\u64CD\u4F5C\xA0<code>DOM</code>\xA0\u7701\u65F6\u7684\u591A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5047\u8BBE\u8FD9\u91CC\u6A21\u62DF\u4E00\u4E2A ul\uFF0C\u5176\u4E2D\u5305\u542B\u4E86 5 \u4E2A li
[1, 2, 3, 4, 5]
// \u8FD9\u91CC\u66FF\u6362\u4E0A\u9762\u7684 li
[1, 2, 5, 4]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4ECE\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4E00\u773C\u5C31\u53EF\u4EE5\u770B\u51FA\u5148\u524D\u7684\xA0<code>ul</code>\xA0\u4E2D\u7684\u7B2C\u4E09\u4E2A\xA0<code>li</code>\xA0\u88AB\u79FB\u9664\u4E86\uFF0C\u56DB\u4E94\u66FF\u6362\u4E86\u4F4D\u7F6E\u3002</p></blockquote><ul><li>\u5982\u679C\u4EE5\u4E0A\u64CD\u4F5C\u5BF9\u5E94\u5230\xA0<code>DOM</code>\xA0\u4E2D\uFF0C\u90A3\u4E48\u5C31\u662F\u4EE5\u4E0B\u4EE3\u7801</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5220\u9664\u7B2C\u4E09\u4E2A li
ul.childNodes[2].remove()
// \u5C06\u7B2C\u56DB\u4E2A li \u548C\u7B2C\u4E94\u4E2A\u4EA4\u6362\u4F4D\u7F6E
let fromNode = ul.childNodes[4]
let toNode = node.childNodes[3]
let cloneFromNode = fromNode.cloneNode(true)
let cloenToNode = toNode.cloneNode(true)
ul.replaceChild(cloneFromNode, toNode)
ul.replaceChild(cloenToNode, fromNode)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5F53\u7136\u5728\u5B9E\u9645\u64CD\u4F5C\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u7ED9\u6BCF\u4E2A\u8282\u70B9\u4E00\u4E2A\u6807\u8BC6\uFF0C\u4F5C\u4E3A\u5224\u65AD\u662F\u540C\u4E00\u4E2A\u8282\u70B9\u7684\u4F9D\u636E\u3002\u6240\u4EE5\u8FD9\u4E5F\u662F\xA0<code>Vue</code>\xA0\u548C\xA0<code>React</code>\xA0\u4E2D\u5B98\u65B9\u63A8\u8350\u5217\u8868\u91CC\u7684\u8282\u70B9\u4F7F\u7528\u552F\u4E00\u7684\xA0<code>key</code>\xA0\u6765\u4FDD\u8BC1\u6027\u80FD\u3002</p></blockquote><ul><li>\u90A3\u4E48\u65E2\u7136\xA0<code>DOM</code>\xA0\u5BF9\u8C61\u53EF\u4EE5\u901A\u8FC7\xA0<code>JS</code>\xA0\u5BF9\u8C61\u6765\u6A21\u62DF\uFF0C\u53CD\u4E4B\u4E5F\u53EF\u4EE5\u901A\u8FC7\xA0<code>JS</code>\xA0\u5BF9\u8C61\u6765\u6E32\u67D3\u51FA\u5BF9\u5E94\u7684\xA0<code>DOM</code></li><li>\u4EE5\u4E0B\u662F\u4E00\u4E2A\xA0<code>JS</code>\xA0\u5BF9\u8C61\u6A21\u62DF\xA0<code>DOM</code>\xA0\u5BF9\u8C61\u7684\u7B80\u5355\u5B9E\u73B0</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default class Element {
  /**
   * @param {String} tag &#39;div&#39;
   * @param {Object} props { class: &#39;item&#39; }
   * @param {Array} children [ Element1, &#39;text&#39;]
   * @param {String} key option
   */
  constructor(tag, props, children, key) {
    this.tag = tag
    this.props = props
    if (Array.isArray(children)) {
      this.children = children
    } else if (isString(children)) {
      this.key = children
      this.children = null
    }
    if (key) this.key = key
  }
  // \u6E32\u67D3
  render() {
    let root = this._createElement(
      this.tag,
      this.props,
      this.children,
      this.key
    )
    document.body.appendChild(root)
    return root
  }
  create() {
    return this._createElement(this.tag, this.props, this.children, this.key)
  }
  // \u521B\u5EFA\u8282\u70B9
  _createElement(tag, props, child, key) {
    // \u901A\u8FC7 tag \u521B\u5EFA\u8282\u70B9
    let el = document.createElement(tag)
    // \u8BBE\u7F6E\u8282\u70B9\u5C5E\u6027
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        const value = props[key]
        el.setAttribute(key, value)
      }
    }
    if (key) {
      el.setAttribute(&#39;key&#39;, key)
    }
    // \u9012\u5F52\u6DFB\u52A0\u5B50\u8282\u70B9
    if (child) {
      child.forEach(element =&gt; {
        let child
        if (element instanceof Element) {
          child = this._createElement(
            element.tag,
            element.props,
            element.children,
            element.key
          )
        } else {
          child = document.createTextNode(element)
        }
        el.appendChild(child)
      })
    }
    return el
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Virtual Dom \u7B97\u6CD5\u7B80\u8FF0</p><ul><li>\u65E2\u7136\u6211\u4EEC\u5DF2\u7ECF\u901A\u8FC7\xA0<code>JS</code>\xA0\u6765\u6A21\u62DF\u5B9E\u73B0\u4E86\xA0<code>DOM</code>\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u7684\u96BE\u70B9\u5C31\u5728\u4E8E\u5982\u4F55\u5224\u65AD\u65E7\u7684\u5BF9\u8C61\u548C\u65B0\u7684\u5BF9\u8C61\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002</li><li><code>DOM</code>\xA0\u662F\u591A\u53C9\u6811\u7684\u7ED3\u6784\uFF0C\u5982\u679C\u9700\u8981\u5B8C\u6574\u7684\u5BF9\u6BD4\u4E24\u9897\u6811\u7684\u5DEE\u5F02\uFF0C\u90A3\u4E48\u9700\u8981\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4F1A\u662F\xA0<code>O(n ^ 3)</code>\uFF0C\u8FD9\u4E2A\u590D\u6742\u5EA6\u80AF\u5B9A\u662F\u4E0D\u80FD\u63A5\u53D7\u7684\u3002\u4E8E\u662F\xA0<code>React</code>\u56E2\u961F\u4F18\u5316\u4E86\u7B97\u6CD5\uFF0C\u5B9E\u73B0\u4E86\xA0<code>O(n)</code>\xA0\u7684\u590D\u6742\u5EA6\u6765\u5BF9\u6BD4\u5DEE\u5F02\u3002</li><li>\u5B9E\u73B0<code>O(n)</code>\xA0\u590D\u6742\u5EA6\u7684\u5173\u952E\u5C31\u662F\u53EA\u5BF9\u6BD4\u540C\u5C42\u7684\u8282\u70B9\uFF0C\u800C\u4E0D\u662F\u8DE8\u5C42\u5BF9\u6BD4\uFF0C\u8FD9\u4E5F\u662F\u8003\u8651\u5230\u5728\u5B9E\u9645\u4E1A\u52A1\u4E2D\u5F88\u5C11\u4F1A\u53BB\u8DE8\u5C42\u7684\u79FB\u52A8\xA0<code>DOM</code>\xA0\u5143\u7D20</li></ul><blockquote><p>\u6240\u4EE5\u5224\u65AD\u5DEE\u5F02\u7684\u7B97\u6CD5\u5C31\u5206\u4E3A\u4E86\u4E24\u6B65</p></blockquote><ul><li>\u9996\u5148\u4ECE\u4E0A\u81F3\u4E0B\uFF0C\u4ECE\u5DE6\u5F80\u53F3\u904D\u5386\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u6811\u7684\u6DF1\u5EA6\u904D\u5386\uFF0C\u8FD9\u4E00\u6B65\u4E2D\u4F1A\u7ED9\u6BCF\u4E2A\u8282\u70B9\u6DFB\u52A0\u7D22\u5F15\uFF0C\u4FBF\u4E8E\u6700\u540E\u6E32\u67D3\u5DEE\u5F02</li><li>\u4E00\u65E6\u8282\u70B9\u6709\u5B50\u5143\u7D20\uFF0C\u5C31\u53BB\u5224\u65AD\u5B50\u5143\u7D20\u662F\u5426\u6709\u4E0D\u540C</li></ul><p>Virtual Dom \u7B97\u6CD5\u5B9E\u73B0</p><p>\u6811\u7684\u9012\u5F52</p><ul><li>\u9996\u5148\u6211\u4EEC\u6765\u5B9E\u73B0\u6811\u7684\u9012\u5F52\u7B97\u6CD5\uFF0C\u5728\u5B9E\u73B0\u8BE5\u7B97\u6CD5\u524D\uFF0C\u5148\u6765\u8003\u8651\u4E0B\u4E24\u4E2A\u8282\u70B9\u5BF9\u6BD4\u4F1A\u6709\u51E0\u79CD\u60C5\u51B5</li><li>\u65B0\u7684\u8282\u70B9\u7684\xA0<code>tagName</code>\xA0\u6216\u8005\xA0<code>key</code>\xA0\u548C\u65E7\u7684\u4E0D\u540C\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4EE3\u8868\u9700\u8981\u66FF\u6362\u65E7\u7684\u8282\u70B9\uFF0C\u5E76\u4E14\u4E5F\u4E0D\u518D\u9700\u8981\u904D\u5386\u65B0\u65E7\u8282\u70B9\u7684\u5B50\u5143\u7D20\u4E86\uFF0C\u56E0\u4E3A\u6574\u4E2A\u65E7\u8282\u70B9\u90FD\u88AB\u5220\u6389\u4E86</li><li>\u65B0\u7684\u8282\u70B9\u7684\xA0<code>tagName</code>\xA0\u548C\xA0<code>key</code>\uFF08\u53EF\u80FD\u90FD\u6CA1\u6709\uFF09\u548C\u65E7\u7684\u76F8\u540C\uFF0C\u5F00\u59CB\u904D\u5386\u5B50\u6811</li><li>\u6CA1\u6709\u65B0\u7684\u8282\u70B9\uFF0C\u90A3\u4E48\u4EC0\u4E48\u90FD\u4E0D\u7528\u505A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { StateEnums, isString, move } from &#39;./util&#39;
import Element from &#39;./element&#39;

export default function diff(oldDomTree, newDomTree) {
  // \u7528\u4E8E\u8BB0\u5F55\u5DEE\u5F02
  let pathchs = {}
  // \u4E00\u5F00\u59CB\u7684\u7D22\u5F15\u4E3A 0
  dfs(oldDomTree, newDomTree, 0, pathchs)
  return pathchs
}

function dfs(oldNode, newNode, index, patches) {
  // \u7528\u4E8E\u4FDD\u5B58\u5B50\u6811\u7684\u66F4\u6539
  let curPatches = []
  // \u9700\u8981\u5224\u65AD\u4E09\u79CD\u60C5\u51B5
  // 1.\u6CA1\u6709\u65B0\u7684\u8282\u70B9\uFF0C\u90A3\u4E48\u4EC0\u4E48\u90FD\u4E0D\u7528\u505A
  // 2.\u65B0\u7684\u8282\u70B9\u7684 tagName \u548C \`key\` \u548C\u65E7\u7684\u4E0D\u540C\uFF0C\u5C31\u66FF\u6362
  // 3.\u65B0\u7684\u8282\u70B9\u7684 tagName \u548C key\uFF08\u53EF\u80FD\u90FD\u6CA1\u6709\uFF09 \u548C\u65E7\u7684\u76F8\u540C\uFF0C\u5F00\u59CB\u904D\u5386\u5B50\u6811
  if (!newNode) {
  } else if (newNode.tag === oldNode.tag &amp;&amp; newNode.key === oldNode.key) {
    // \u5224\u65AD\u5C5E\u6027\u662F\u5426\u53D8\u66F4
    let props = diffProps(oldNode.props, newNode.props)
    if (props.length) curPatches.push({ type: StateEnums.ChangeProps, props })
    // \u904D\u5386\u5B50\u6811
    diffChildren(oldNode.children, newNode.children, index, patches)
  } else {
    // \u8282\u70B9\u4E0D\u540C\uFF0C\u9700\u8981\u66FF\u6362
    curPatches.push({ type: StateEnums.Replace, node: newNode })
  }

  if (curPatches.length) {
    if (patches[index]) {
      patches[index] = patches[index].concat(curPatches)
    } else {
      patches[index] = curPatches
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5224\u65AD\u5C5E\u6027\u7684\u66F4\u6539</p><blockquote><p>\u5224\u65AD\u5C5E\u6027\u7684\u66F4\u6539\u4E5F\u5206\u4E09\u4E2A\u6B65\u9AA4</p></blockquote><ul><li>\u904D\u5386\u65E7\u7684\u5C5E\u6027\u5217\u8868\uFF0C\u67E5\u770B\u6BCF\u4E2A\u5C5E\u6027\u662F\u5426\u8FD8\u5B58\u5728\u4E8E\u65B0\u7684\u5C5E\u6027\u5217\u8868\u4E2D</li><li>\u904D\u5386\u65B0\u7684\u5C5E\u6027\u5217\u8868\uFF0C\u5224\u65AD\u4E24\u4E2A\u5217\u8868\u4E2D\u90FD\u5B58\u5728\u7684\u5C5E\u6027\u7684\u503C\u662F\u5426\u6709\u53D8\u5316</li><li>\u5728\u7B2C\u4E8C\u6B65\u4E2D\u540C\u65F6\u67E5\u770B\u662F\u5426\u6709\u5C5E\u6027\u4E0D\u5B58\u5728\u4E0E\u65E7\u7684\u5C5E\u6027\u5217\u5217\u8868\u4E2D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function diffProps(oldProps, newProps) {
  // \u5224\u65AD Props \u5206\u4EE5\u4E0B\u4E09\u6B65\u9AA4
  // \u5148\u904D\u5386 oldProps \u67E5\u770B\u662F\u5426\u5B58\u5728\u5220\u9664\u7684\u5C5E\u6027
  // \u7136\u540E\u904D\u5386 newProps \u67E5\u770B\u662F\u5426\u6709\u5C5E\u6027\u503C\u88AB\u4FEE\u6539
  // \u6700\u540E\u67E5\u770B\u662F\u5426\u6709\u5C5E\u6027\u65B0\u589E
  let change = []
  for (const key in oldProps) {
    if (oldProps.hasOwnProperty(key) &amp;&amp; !newProps[key]) {
      change.push({
        prop: key
      })
    }
  }
  for (const key in newProps) {
    if (newProps.hasOwnProperty(key)) {
      const prop = newProps[key]
      if (oldProps[key] &amp;&amp; oldProps[key] !== newProps[key]) {
        change.push({
          prop: key,
          value: newProps[key]
        })
      } else if (!oldProps[key]) {
        change.push({
          prop: key,
          value: newProps[key]
        })
      }
    }
  }
  return change
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5224\u65AD\u5217\u8868\u5DEE\u5F02\u7B97\u6CD5\u5B9E\u73B0</p><blockquote><p>\u8FD9\u4E2A\u7B97\u6CD5\u662F\u6574\u4E2A\xA0<code>Virtual Dom</code>\xA0\u4E2D\u6700\u6838\u5FC3\u7684\u7B97\u6CD5\uFF0C\u4E14\u8BA9\u6211\u4E00\u4E00\u4E3A\u4F60\u9053\u6765\u3002 \u8FD9\u91CC\u7684\u4E3B\u8981\u6B65\u9AA4\u5176\u5B9E\u548C\u5224\u65AD\u5C5E\u6027\u5DEE\u5F02\u662F\u7C7B\u4F3C\u7684\uFF0C\u4E5F\u662F\u5206\u4E3A\u4E09\u6B65</p></blockquote><ul><li>\u904D\u5386\u65E7\u7684\u8282\u70B9\u5217\u8868\uFF0C\u67E5\u770B\u6BCF\u4E2A\u8282\u70B9\u662F\u5426\u8FD8\u5B58\u5728\u4E8E\u65B0\u7684\u8282\u70B9\u5217\u8868\u4E2D</li><li>\u904D\u5386\u65B0\u7684\u8282\u70B9\u5217\u8868\uFF0C\u5224\u65AD\u662F\u5426\u6709\u65B0\u7684\u8282\u70B9</li><li>\u5728\u7B2C\u4E8C\u6B65\u4E2D\u540C\u65F6\u5224\u65AD\u8282\u70B9\u662F\u5426\u6709\u79FB\u52A8</li></ul><blockquote><p>PS\uFF1A\u8BE5\u7B97\u6CD5\u53EA\u5BF9\u6709\xA0<code>key</code>\xA0\u7684\u8282\u70B9\u505A\u5904\u7406</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function listDiff(oldList, newList, index, patches) {
  // \u4E3A\u4E86\u904D\u5386\u65B9\u4FBF\uFF0C\u5148\u53D6\u51FA\u4E24\u4E2A list \u7684\u6240\u6709 keys
  let oldKeys = getKeys(oldList)
  let newKeys = getKeys(newList)
  let changes = []

  // \u7528\u4E8E\u4FDD\u5B58\u53D8\u66F4\u540E\u7684\u8282\u70B9\u6570\u636E
  // \u4F7F\u7528\u8BE5\u6570\u7EC4\u4FDD\u5B58\u6709\u4EE5\u4E0B\u597D\u5904
  // 1.\u53EF\u4EE5\u6B63\u786E\u83B7\u5F97\u88AB\u5220\u9664\u8282\u70B9\u7D22\u5F15
  // 2.\u4EA4\u6362\u8282\u70B9\u4F4D\u7F6E\u53EA\u9700\u8981\u64CD\u4F5C\u4E00\u904D DOM
  // 3.\u7528\u4E8E \`diffChildren\` \u51FD\u6570\u4E2D\u7684\u5224\u65AD\uFF0C\u53EA\u9700\u8981\u904D\u5386
  // \u4E24\u4E2A\u6811\u4E2D\u90FD\u5B58\u5728\u7684\u8282\u70B9\uFF0C\u800C\u5BF9\u4E8E\u65B0\u589E\u6216\u8005\u5220\u9664\u7684\u8282\u70B9\u6765\u8BF4\uFF0C\u5B8C\u5168\u6CA1\u5FC5\u8981
  // \u518D\u53BB\u5224\u65AD\u4E00\u904D
  let list = []
  oldList &amp;&amp;
    oldList.forEach(item =&gt; {
      let key = item.key
      if (isString(item)) {
        key = item
      }
      // \u5BFB\u627E\u65B0\u7684 children \u4E2D\u662F\u5426\u542B\u6709\u5F53\u524D\u8282\u70B9
      // \u6CA1\u6709\u7684\u8BDD\u9700\u8981\u5220\u9664
      let index = newKeys.indexOf(key)
      if (index === -1) {
        list.push(null)
      } else list.push(key)
    })
  // \u904D\u5386\u53D8\u66F4\u540E\u7684\u6570\u7EC4
  let length = list.length
  // \u56E0\u4E3A\u5220\u9664\u6570\u7EC4\u5143\u7D20\u662F\u4F1A\u66F4\u6539\u7D22\u5F15\u7684
  // \u6240\u6709\u4ECE\u540E\u5F80\u524D\u5220\u53EF\u4EE5\u4FDD\u8BC1\u7D22\u5F15\u4E0D\u53D8
  for (let i = length - 1; i &gt;= 0; i--) {
    // \u5224\u65AD\u5F53\u524D\u5143\u7D20\u662F\u5426\u4E3A\u7A7A\uFF0C\u4E3A\u7A7A\u8868\u793A\u9700\u8981\u5220\u9664
    if (!list[i]) {
      list.splice(i, 1)
      changes.push({
        type: StateEnums.Remove,
        index: i
      })
    }
  }
  // \u904D\u5386\u65B0\u7684 list\uFF0C\u5224\u65AD\u662F\u5426\u6709\u8282\u70B9\u65B0\u589E\u6216\u79FB\u52A8
  // \u540C\u65F6\u4E5F\u5BF9 \`list\` \u505A\u8282\u70B9\u65B0\u589E\u548C\u79FB\u52A8\u8282\u70B9\u7684\u64CD\u4F5C
  newList &amp;&amp;
    newList.forEach((item, i) =&gt; {
      let key = item.key
      if (isString(item)) {
        key = item
      }
      // \u5BFB\u627E\u65E7\u7684 children \u4E2D\u662F\u5426\u542B\u6709\u5F53\u524D\u8282\u70B9
      let index = list.indexOf(key)
      // \u6CA1\u627E\u5230\u4EE3\u8868\u65B0\u8282\u70B9\uFF0C\u9700\u8981\u63D2\u5165
      if (index === -1 || key == null) {
        changes.push({
          type: StateEnums.Insert,
          node: item,
          index: i
        })
        list.splice(i, 0, key)
      } else {
        // \u627E\u5230\u4E86\uFF0C\u9700\u8981\u5224\u65AD\u662F\u5426\u9700\u8981\u79FB\u52A8
        if (index !== i) {
          changes.push({
            type: StateEnums.Move,
            from: index,
            to: i
          })
          move(list, index, i)
        }
      }
    })
  return { changes, list }
}

function getKeys(list) {
  let keys = []
  let text
  list &amp;&amp;
    list.forEach(item =&gt; {
      let key
      if (isString(item)) {
        key = [item]
      } else if (item instanceof Element) {
        key = item.key
      }
      keys.push(key)
    })
  return keys
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u904D\u5386\u5B50\u5143\u7D20\u6253\u6807\u8BC6</p><blockquote><p>\u5BF9\u4E8E\u8FD9\u4E2A\u51FD\u6570\u6765\u8BF4\uFF0C\u4E3B\u8981\u529F\u80FD\u5C31\u4E24\u4E2A</p></blockquote><ul><li>\u5224\u65AD\u4E24\u4E2A\u5217\u8868\u5DEE\u5F02 <ul><li>\u7ED9\u8282\u70B9\u6253\u4E0A\u6807\u8BB0</li><li>\u603B\u4F53\u6765\u8BF4\uFF0C\u8BE5\u51FD\u6570\u5B9E\u73B0\u7684\u529F\u80FD\u5F88\u7B80\u5355</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function diffChildren(oldChild, newChild, index, patches) {
  let { changes, list } = listDiff(oldChild, newChild, index, patches)
  if (changes.length) {
    if (patches[index]) {
      patches[index] = patches[index].concat(changes)
    } else {
      patches[index] = changes
    }
  }
  // \u8BB0\u5F55\u4E0A\u4E00\u4E2A\u904D\u5386\u8FC7\u7684\u8282\u70B9
  let last = null
  oldChild &amp;&amp;
    oldChild.forEach((item, i) =&gt; {
      let child = item &amp;&amp; item.children
      if (child) {
        index =
          last &amp;&amp; last.children ? index + last.children.length + 1 : index + 1
        let keyIndex = list.indexOf(item.key)
        let node = newChild[keyIndex]
        // \u53EA\u904D\u5386\u65B0\u65E7\u4E2D\u90FD\u5B58\u5728\u7684\u8282\u70B9\uFF0C\u5176\u4ED6\u65B0\u589E\u6216\u8005\u5220\u9664\u7684\u6CA1\u5FC5\u8981\u904D\u5386
        if (node) {
          dfs(item, node, index, patches)
        }
      } else index += 1
      last = item
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6E32\u67D3\u5DEE\u5F02</p><blockquote><p>\u901A\u8FC7\u4E4B\u524D\u7684\u7B97\u6CD5\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u5F97\u51FA\u4E24\u4E2A\u6811\u7684\u5DEE\u5F02\u4E86\u3002\u65E2\u7136\u77E5\u9053\u4E86\u5DEE\u5F02\uFF0C\u5C31\u9700\u8981\u5C40\u90E8\u53BB\u66F4\u65B0\xA0<code>DOM</code>\xA0\u4E86\uFF0C\u4E0B\u9762\u5C31\u8BA9\u6211\u4EEC\u6765\u770B\u770B\xA0<code>Virtual Dom</code>\xA0\u7B97\u6CD5\u7684\u6700\u540E\u4E00\u6B65\u9AA4</p></blockquote><p>\u8FD9\u4E2A\u51FD\u6570\u4E3B\u8981\u4E24\u4E2A\u529F\u80FD</p><ul><li>\u6DF1\u5EA6\u904D\u5386\u6811\uFF0C\u5C06\u9700\u8981\u505A\u53D8\u66F4\u64CD\u4F5C\u7684\u53D6\u51FA\u6765</li><li>\u5C40\u90E8\u66F4\u65B0\xA0<code>DOM</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let index = 0
export default function patch(node, patchs) {
  let changes = patchs[index]
  let childNodes = node &amp;&amp; node.childNodes
  // \u8FD9\u91CC\u7684\u6DF1\u5EA6\u904D\u5386\u548C diff \u4E2D\u662F\u4E00\u6837\u7684
  if (!childNodes) index += 1
  if (changes &amp;&amp; changes.length &amp;&amp; patchs[index]) {
    changeDom(node, changes)
  }
  let last = null
  if (childNodes &amp;&amp; childNodes.length) {
    childNodes.forEach((item, i) =&gt; {
      index =
        last &amp;&amp; last.children ? index + last.children.length + 1 : index + 1
      patch(item, patchs)
      last = item
    })
  }
}

function changeDom(node, changes, noChild) {
  changes &amp;&amp;
    changes.forEach(change =&gt; {
      let { type } = change
      switch (type) {
        case StateEnums.ChangeProps:
          let { props } = change
          props.forEach(item =&gt; {
            if (item.value) {
              node.setAttribute(item.prop, item.value)
            } else {
              node.removeAttribute(item.prop)
            }
          })
          break
        case StateEnums.Remove:
          node.childNodes[change.index].remove()
          break
        case StateEnums.Insert:
          let dom
          if (isString(change.node)) {
            dom = document.createTextNode(change.node)
          } else if (change.node instanceof Element) {
            dom = change.node.create()
          }
          node.insertBefore(dom, node.childNodes[change.index])
          break
        case StateEnums.Replace:
          node.parentNode.replaceChild(change.node.create(), node)
          break
        case StateEnums.Move:
          let fromNode = node.childNodes[change.from]
          let toNode = node.childNodes[change.to]
          let cloneFromNode = fromNode.cloneNode(true)
          let cloenToNode = toNode.cloneNode(true)
          node.replaceChild(cloneFromNode, toNode)
          node.replaceChild(cloenToNode, fromNode)
          break
        default:
          break
      }
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Virtual Dom \u7B97\u6CD5\u7684\u5B9E\u73B0\u4E5F\u5C31\u662F\u4EE5\u4E0B\u4E09\u6B65</p><ul><li>\u901A\u8FC7\xA0<code>JS</code>\xA0\u6765\u6A21\u62DF\u521B\u5EFA\xA0<code>DOM</code>\xA0\u5BF9\u8C61</li><li>\u5224\u65AD\u4E24\u4E2A\u5BF9\u8C61\u7684\u5DEE\u5F02</li><li>\u6E32\u67D3\u5DEE\u5F02</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let test4 = new Element(&#39;div&#39;, { class: &#39;my-div&#39; }, [&#39;test4&#39;])
let test5 = new Element(&#39;ul&#39;, { class: &#39;my-div&#39; }, [&#39;test5&#39;])

let test1 = new Element(&#39;div&#39;, { class: &#39;my-div&#39; }, [test4])

let test2 = new Element(&#39;div&#39;, { id: &#39;11&#39; }, [test5, test4])

let root = test1.render()

let pathchs = diff(test1, test2)
console.log(pathchs)

setTimeout(() =&gt; {
  console.log(&#39;\u5F00\u59CB\u66F4\u65B0&#39;)
  patch(root, pathchs)
  console.log(&#39;\u7ED3\u675F\u66F4\u65B0&#39;)
}, 1000)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-diff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-diff\u7B97\u6CD5" aria-hidden="true">#</a> 4 Diff\u7B97\u6CD5</h2><h3 id="_4-1-react-diff" tabindex="-1"><a class="header-anchor" href="#_4-1-react-diff" aria-hidden="true">#</a> 4.1 React-Diff</h3><p>React\u7684\u601D\u8DEF\u662F\u9012\u589E\u6CD5\u3002\u901A\u8FC7\u5BF9\u6BD4\u65B0\u7684\u5217\u8868\u4E2D\u7684\u8282\u70B9\uFF0C\u5728\u539F\u672C\u7684\u5217\u8868\u4E2D\u7684\u4F4D\u7F6E\u662F\u5426\u662F\u9012\u589E\uFF0C\u6765\u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u5426\u9700\u8981\u79FB\u52A8\u3002</p><p>1. \u5B9E\u73B0\u539F\u7406</p><p>\u6765\u770B\u8FD9\u6837\u4E00\u4E2A\u4F8B\u5B50\u3002</p><p><img src="`+o+`" alt=""></p><p><code>nextList</code>\u4E3A\u65B0\u7684\u5217\u8868\uFF0C<code>prevList</code>\u4E3A\u65E7\u5217\u8868\u3002\u8FD9\u4E2A\u4F8B\u5B50\u6211\u4EEC\u4E00\u773C\u80FD\u770B\u51FA\u6765\uFF0C\u65B0\u5217\u8868\u662F\u4E0D\u9700\u8981\u8FDB\u884C\u79FB\u52A8\u7684\u3002\u4E0B\u9762\u6211\u7528<code>react</code>\u7684\u9012\u589E\u601D\u60F3\uFF0C\u89E3\u91CA\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u65B0\u5217\u8868\u4E2D\u7684\u8282\u70B9\u4E0D\u9700\u8981\u79FB\u52A8\u3002</p><p>\u6211\u4EEC\u9996\u5148\u904D\u5386<code>nextList</code>\uFF0C\u5E76\u4E14\u627E\u5230\u6BCF\u4E00\u4E2A\u8282\u70B9\uFF0C\u5728<code>prevList</code>\u4E2D\u7684\u4F4D\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo(prevList, nextList) {
    for (let i = 0; i &lt; nextList.length; i++) {
        let nextItem = nextList[i];
        for (let j = 0; j &lt; prevList.length; j++) {
            let prevItem = prevList[j]
            if (nextItem === prevItem) {

            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u627E\u5230\u4F4D\u7F6E\u4EE5\u540E\uFF0C\u4E0E\u4E0A\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u5982\u679C\u5F53\u524D\u7684\u4F4D\u7F6E\u5927\u4E8E\u4E0A\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u8BF4\u660E\u5F53\u524D\u8282\u70B9\u4E0D\u9700\u8981\u79FB\u52A8\u3002\u56E0\u6B64\u6211\u4EEC\u8981\u5B9A\u4E49\u4E00\u4E2A<code>lastIndex</code>\u6765\u8BB0\u5F55\u4E0A\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo(prevList, nextList) {
    let lastIndex = 0
    for (let i = 0; i &lt; nextList.length; i++) {
        let nextItem = nextList[i];
        for (let j = 0; j &lt; prevList.length; j++) {
            let prevItem = prevList[j]
            if (nextItem === prevItem) {
                if (j &lt; lastIndex) {
                    // \u9700\u8981\u79FB\u52A8\u8282\u70B9
                } else {
                    // \u4E0D\u9700\u8981\u79FB\u52A8\u8282\u70B9\uFF0C\u8BB0\u5F55\u5F53\u524D\u4F4D\u7F6E\uFF0C\u4E0E\u4E4B\u540E\u7684\u8282\u70B9\u8FDB\u884C\u5BF9\u6BD4
                    lastIndex = j
                }
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>nextList</code>\u6BCF\u4E2A\u8282\u70B9\u5728<code>prevList</code>\u7684\u4F4D\u7F6E\u4E3A<code>0 1 2 3</code>\u3002\u6BCF\u4E00\u9879\u90FD\u8981\u6BD4\u524D\u4E00\u9879\u8981\u5927\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u79FB\u52A8\uFF0C\u8FD9\u5C31\u662F<code>react</code>\u7684<code>diff</code>\u7B97\u6CD5\u7684\u539F\u7406\u3002</p><p>2. \u627E\u5230\u9700\u8981\u79FB\u52A8\u7684\u8282\u70B9</p><p>\u5728\u4E0A\u4E00\u5C0F\u8282\u4E2D\uFF0C\u6211\u4EEC\u662F\u901A\u8FC7\u5BF9\u6BD4\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u67E5\u627E\u7684\u5BF9\u5E94\u4F4D\u7F6E\u3002\u4F46\u662F\u5728vdom\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8282\u70B9\u90FD\u662F\u4E00\u4E2AvNode\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5982\u4F55\u8FDB\u884C\u5224\u65AD\u5462\uFF1F</p><p>\u7B54\u6848\u5C31\u662F<code>key</code>\uFF0C\u6211\u4EEC\u901A\u8FC7\u5BF9\u6BCF\u4E2A\u8282\u70B9\u7684<code>key</code>\u8FDB\u884C\u8D4B\u503C\uFF0C\u5E76\u4E14\u8BA9\u5904\u4E8E\u540C\u4E00<code>children</code>\u6570\u7EC4\u4E0B\u7684<code>vnode</code>\u7684<code>key</code>\u90FD\u4E0D\u76F8\u540C\uFF0C\u4EE5\u6B64\u6765\u786E\u5B9A\u6BCF\u4E2A\u8282\u70B9\u7684\u552F\u4E00\u6027\uFF0C\u5E76\u8FDB\u884C\u65B0\u65E7\u5217\u8868\u7684\u5BF9\u6BD4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function reactDiff(prevChildren, nextChildren, parent) {
    let lastIndex = 0
    for (let i = 0; i &lt; nextChildren.length; i++) {
        let nextChild = nextChildren[i];
        for (let j = 0; j &lt; prevChildren.length; j++) {
            let prevChild = prevChildren[j]
            if (nextChild.key === prevChild.key) {
                patch(prevChild, nextChild, parent)
                if (j &lt; lastIndex) {
                    // \u9700\u8981\u79FB\u52A8\u8282\u70B9
                } else {
                    // \u4E0D\u9700\u8981\u79FB\u52A8\u8282\u70B9\uFF0C\u8BB0\u5F55\u5F53\u524D\u4F4D\u7F6E\uFF0C\u4E0E\u4E4B\u540E\u7684\u8282\u70B9\u8FDB\u884C\u5BF9\u6BD4
                    lastIndex = j
                }
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3. \u79FB\u52A8\u8282\u70B9</p><p>\u9996\u5148\u6211\u4EEC\u5148\u660E\u786E\u4E00\u70B9\uFF0C\u79FB\u52A8\u8282\u70B9\u6240\u6307\u7684\u8282\u70B9\u662F<code>DOM</code>\u8282\u70B9\u3002<code>vnode.el</code>\u6307\u5411\u8BE5\u8282\u70B9\u5BF9\u5E94\u7684\u771F\u5B9E<code>DOM</code>\u8282\u70B9\u3002<code>patch</code>\u65B9\u6CD5\u4F1A\u5C06\u66F4\u65B0\u8FC7\u540E\u7684<code>DOM</code>\u8282\u70B9\uFF0C\u8D4B\u503C\u7ED9\u65B0\u7684<code>vnode</code>\u7684<code>el</code>\u5C5E\u6027\u3002</p><blockquote><p>\u4E3A\u4E86\u753B\u56FE\u65B9\u4FBF\uFF0C\u6211\u4EEC\u7528<code>key</code>\u7684\u503C\u6765\u8868\u793A<code>vnode</code>\u8282\u70B9\u3002\u4E3A\u4E86\u884C\u6587\u65B9\u4FBF\uFF0C\u6211\u4EEC\u628A<code>key</code>\u503C\u4E3A<code>a</code>\u7684<code>vnode</code>\u7B80\u5199\u4E3A<code>vnode-a</code>\uFF0C<code>vnode-a</code>\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u8282\u70B9\u4E3A<code>DOM-A</code></p></blockquote><p><img src="`+u+'" alt=""></p><p>\u6211\u4EEC\u6765\u5C06\u4E0A\u56FE\u7684\u4F8B\u5B50\u4EE3\u5165<code>reactDiff</code>\u4E2D\u6267\u884C\u3002\u6211\u4EEC\u904D\u5386\u65B0\u5217\u8868\uFF0C\u5E76\u67E5\u627E<code>vnode</code>\u5728\u65E7\u5217\u8868\u4E2D\u7684\u4F4D\u7F6E\u3002\u5F53\u904D\u5386\u5230<code>vnode-d</code>\u65F6\uFF0C\u4E4B\u524D\u904D\u5386\u5728\u65E7\u5217\u8868\u7684\u4F4D\u7F6E\u4E3A<code>0 &lt; 2 &lt; 3</code>\uFF0C\u8BF4\u660E<code>A C D</code>\u8FD9\u4E09\u4E2A\u8282\u70B9\u90FD\u662F\u4E0D\u9700\u8981\u79FB\u52A8\u7684\u3002\u6B64\u65F6<code>lastIndex = 3</code>, \u5E76\u8FDB\u5165\u4E0B\u4E00\u6B21\u5FAA\u73AF\uFF0C\u53D1\u73B0<code>vnode-b</code>\u5728\u65E7\u5217\u8868\u7684<code>index</code>\u4E3A<code>1</code>\uFF0C<code>1 &lt; 3</code>\uFF0C\u8BF4\u660E<code>DOM-B</code>\u8981\u79FB\u52A8\u3002</p><p>\u901A\u8FC7\u89C2\u5BDF\u6211\u4EEC\u80FD\u53D1\u73B0\uFF0C\u53EA\u9700\u8981\u628A<code>DOM-B</code>\u79FB\u52A8\u5230<code>DOM-D</code>\u4E4B\u540E\u5C31\u53EF\u4EE5\u4E86\u3002\u4E5F\u5C31\u662F\u627E\u5230\u9700\u8981\u79FB\u52A8\u7684VNode\uFF0C\u6211\u4EEC\u79F0\u8BE5VNode\u4E3A\u03B1\uFF0C\u5C06\u03B1\u5BF9\u5E94\u7684\u771F\u5B9E\u7684DOM\u8282\u70B9\u79FB\u52A8\u5230\uFF0C\u03B1\u5728<code>\u65B0\u5217\u8868</code>\u4E2D\u7684\u524D\u4E00\u4E2AVNode\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u7684\u540E\u9762\u3002</p><p><img src="'+m+`" alt=""></p><p>\u5728\u4E0A\u8FF0\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5C31\u662F\u5C06<code>vnode-b</code>\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u8282\u70B9<code>DOM-B</code>, \u79FB\u52A8\u5230<code>vnode-b</code>\u5728\u65B0\u5217\u8868\u4E2D\u7684\u524D\u4E00\u4E2A<code>VNode</code>------<code>vnode-d</code>\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u8282\u70B9<code>DOM-D</code>\u7684\u540E\u9762</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function reactDiff(prevChildren, nextChildren, parent) {
    let lastIndex = 0
    for (let i = 0; i &lt; nextChildren.length; i++) {
        let nextChild = nextChildren[i];
        for (let j = 0; j &lt; prevChildren.length; j++) {
            let prevChild = prevChildren[j]
            if (nextChild.key === prevChild.key) {
                patch(prevChild, nextChild, parent)
                if (j &lt; lastIndex) {
                    // \u79FB\u52A8\u5230\u524D\u4E00\u4E2A\u8282\u70B9\u7684\u540E\u9762
                    let refNode = nextChildren[i - 1].el.nextSibling;
                    parent.insertBefore(nextChild.el, refNode)
                } else {
                    // \u4E0D\u9700\u8981\u79FB\u52A8\u8282\u70B9\uFF0C\u8BB0\u5F55\u5F53\u524D\u4F4D\u7F6E\uFF0C\u4E0E\u4E4B\u540E\u7684\u8282\u70B9\u8FDB\u884C\u5BF9\u6BD4
                    lastIndex = j
                }
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u662F\u8FD9\u6837\u79FB\u52A8\u7684\u5462\uFF1F\u9996\u5148\u6211\u4EEC\u5217\u8868\u662F<code>\u4ECE\u5934\u5230\u5C3E</code>\u904D\u5386\u7684\u3002\u8FD9\u5C31\u610F\u5473\u7740\u5BF9\u4E8E\u5F53\u524D<code>VNode</code>\u8282\u70B9\u6765\u8BF4\uFF0C\u8BE5\u8282\u70B9\u4E4B\u524D\u7684\u6240\u6709\u8282\u70B9\u90FD\u662F\u6392\u597D\u5E8F\u7684\uFF0C\u5982\u679C\u8BE5\u8282\u70B9\u9700\u8981\u79FB\u52A8\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u5C06DOM\u8282\u70B9\u79FB\u52A8\u5230\u524D\u4E00\u4E2A<code>vnode</code>\u8282\u70B9\u4E4B\u540E\u5C31\u53EF\u4EE5\uFF0C\u56E0\u4E3A\u5728\u65B0\u5217\u8868\u4E2D<code>vnode</code>\u7684\u987A\u5E8F\u5C31\u662F\u8FD9\u6837\u7684\u3002</p><p>4. \u6DFB\u52A0\u8282\u70B9</p><p>\u4E0A\u4E00\u5C0F\u8282\u6211\u4EEC\u53EA\u8BB2\u4E86\u5982\u4F55\u79FB\u52A8\u8282\u70B9\uFF0C\u4F46\u662F\u5FFD\u7565\u4E86\u53E6\u5916\u4E00\u79CD\u60C5\u51B5\uFF0C\u5C31\u662F\u5728\u65B0\u5217\u8868\u4E2D\u6709\u5168\u65B0\u7684<code>VNode</code>\u8282\u70B9\uFF0C\u5728\u65E7\u5217\u8868\u4E2D\u627E\u4E0D\u5230\u3002\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u9700\u8981\u6839\u636E\u65B0\u7684<code>VNode</code>\u8282\u70B9\u751F\u6210<code>DOM</code>\u8282\u70B9\uFF0C\u5E76\u63D2\u5165<code>DOM</code>\u6811\u4E2D\u3002</p><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u9762\u4E34\u4E24\u4E2A\u95EE\u9898\uFF1A1.\u5982\u4F55\u53D1\u73B0\u5168\u65B0\u7684\u8282\u70B9\u30012. \u751F\u6210\u7684<code>DOM</code>\u8282\u70B9\u63D2\u5165\u5230\u54EA\u91CC</p><p><img src="`+b+`" alt=""></p><p>\u6211\u4EEC\u5148\u6765\u89E3\u51B3\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF0C\u627E\u8282\u70B9\u8FD8\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A<code>find</code>\u53D8\u91CF\u503C\u4E3A<code>false</code>\u3002\u5982\u679C\u5728\u65E7\u5217\u8868\u627E\u5230\u4E86<code>key</code>\xA0\u76F8\u540C\u7684<code>vnode</code>\uFF0C\u5C31\u5C06<code>find</code>\u7684\u503C\u6539\u4E3A<code>true</code>\u3002\u5F53\u904D\u5386\u7ED3\u675F\u540E\u5224\u65AD<code>find</code>\u503C\uFF0C\u5982\u679C\u4E3A<code>false</code>\uFF0C\u8BF4\u660E\u5F53\u524D\u8282\u70B9\u4E3A\u65B0\u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function reactDiff(prevChildren, nextChildren, parent) {
    let lastIndex = 0
    for (let i = 0; i &lt; nextChildren.length; i++) {
        let nextChild = nextChildren[i],
            find = false;
        for (let j = 0; j &lt; prevChildren.length; j++) {
            let prevChild = prevChildren[j]
            if (nextChild.key === prevChild.key) {
                find = true
                patch(prevChild, nextChild, parent)
                if (j &lt; lastIndex) {
                    // \u79FB\u52A8\u5230\u524D\u4E00\u4E2A\u8282\u70B9\u7684\u540E\u9762
                    let refNode = nextChildren[i - 1].el.nextSibling;
                    parent.insertBefore(nextChild.el, refNode)
                } else {
                    // \u4E0D\u9700\u8981\u79FB\u52A8\u8282\u70B9\uFF0C\u8BB0\u5F55\u5F53\u524D\u4F4D\u7F6E\uFF0C\u4E0E\u4E4B\u540E\u7684\u8282\u70B9\u8FDB\u884C\u5BF9\u6BD4
                    lastIndex = j
                }
                break
            }
        }
        if (!find) {
            // \u63D2\u5165\u65B0\u8282\u70B9
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u627E\u5230\u65B0\u8282\u70B9\u540E\uFF0C\u4E0B\u4E00\u6B65\u5C31\u662F\u63D2\u5165\u5230\u54EA\u91CC\u4E86\uFF0C\u8FD9\u91CC\u7684\u903B\u8F91\u5176\u5B9E\u662F\u548C\u79FB\u52A8\u8282\u70B9\u7684\u903B\u8F91\u662F\u4E00\u6837\u7684\u3002\u6211\u4EEC\u89C2\u5BDF\u4E0A\u56FE\u53EF\u4EE5\u53D1\u73B0\uFF0C\u65B0\u7684<code>vnode-c</code>\u662F\u7D27\u8DDF\u5728<code>vnode-b</code>\u540E\u9762\u7684\uFF0C\u5E76\u4E14<code>vnode-b</code>\u7684DOM\u8282\u70B9------<code>DOM-B</code>\u662F\u5DF2\u7ECF\u6392\u597D\u5E8F\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u5C06<code>vnode-c</code>\u751F\u6210\u7684DOM\u8282\u70B9\u63D2\u5165\u5230<code>DOM-B</code>\u4E4B\u540E\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u4F46\u662F\u8FD9\u91CC\u6709\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\u9700\u8981\u6CE8\u610F\uFF0C\u5C31\u662F\u65B0\u7684\u8282\u70B9\u4F4D\u4E8E\u65B0\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u9700\u8981\u627E\u5230\u65E7\u5217\u8868\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C\u5C06\u65B0\u8282\u70B9\u63D2\u5165\u5230\u539F\u6765\u7B2C\u4E00\u4E2A\u8282\u70B9\u4E4B\u524D\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function reactDiff(prevChildren, nextChildren, parent) {
    let lastIndex = 0
    for (let i = 0; i &lt; nextChildren.length; i++) {
        let nextChild = nextChildren[i],
            find = false;
        for (let j = 0; j &lt; prevChildren.length; j++) {
            let prevChild = prevChildren[j]
            if (nextChild.key === prevChild.key) {
                find = true
                patch(prevChild, nextChild, parent)
                if (j &lt; lastIndex) {
                    // \u79FB\u52A8\u5230\u524D\u4E00\u4E2A\u8282\u70B9\u7684\u540E\u9762
                    let refNode = nextChildren[i - 1].el.nextSibling;
                    parent.insertBefore(nextChild.el, refNode)
                } else {
                    // \u4E0D\u9700\u8981\u79FB\u52A8\u8282\u70B9\uFF0C\u8BB0\u5F55\u5F53\u524D\u4F4D\u7F6E\uFF0C\u4E0E\u4E4B\u540E\u7684\u8282\u70B9\u8FDB\u884C\u5BF9\u6BD4
                    lastIndex = j
                }
                break
            }
        }
        if (!find) {
            // \u63D2\u5165\u65B0\u8282\u70B9
            let refNode = i &lt;= 0
                            ? prevChildren[0].el
                            : nextChildren[i - 1].el.nextSibling
            mount(nextChild, parent, refNode);
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5. \u79FB\u9664\u8282\u70B9</p><p>\u6709\u589E\u5C31\u6709\u51CF\uFF0C\u5F53\u65E7\u7684\u8282\u70B9\u4E0D\u5728\u65B0\u5217\u8868\u4E2D\u65F6\uFF0C\u6211\u4EEC\u5C31\u5C06\u5176\u5BF9\u5E94\u7684DOM\u8282\u70B9\u79FB\u9664\u3002</p><p><img src="`+p+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function reactDiff(prevChildren, nextChildren, parent) {
    let lastIndex = 0
    for (let i = 0; i &lt; nextChildren.length; i++) {
        let nextChild = nextChildren[i],
            find = false;
        for (let j = 0; j &lt; prevChildren.length; j++) {
            let prevChild = prevChildren[j]
            if (nextChild.key === prevChild.key) {
                find = true
                patch(prevChild, nextChild, parent)
                if (j &lt; lastIndex) {
                    // \u79FB\u52A8\u5230\u524D\u4E00\u4E2A\u8282\u70B9\u7684\u540E\u9762
                    let refNode = nextChildren[i - 1].el.nextSibling;
                    parent.insertBefore(nextChild.el, refNode)
                } else {
                    // \u4E0D\u9700\u8981\u79FB\u52A8\u8282\u70B9\uFF0C\u8BB0\u5F55\u5F53\u524D\u4F4D\u7F6E\uFF0C\u4E0E\u4E4B\u540E\u7684\u8282\u70B9\u8FDB\u884C\u5BF9\u6BD4
                    lastIndex = j
                }
                break
            }
        }
        if (!find) {
            // \u63D2\u5165\u65B0\u8282\u70B9
            let refNode = i &lt;= 0
                            ? prevChildren[0].el
                            : nextChildren[i - 1].el.nextSibling
            mount(nextChild, parent, refNode);
        }
    }
    for (let i = 0; i &lt; prevChildren.length; i++) {
        let prevChild = prevChildren[i],
            key = prevChild.key,
            has = nextChildren.find(item =&gt; item.key === key);
        if (!has) parent.removeChild(prevChild.el)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6. \u4F18\u5316\u4E0E\u4E0D\u8DB3</p><p>\u4EE5\u4E0A\u5C31\u662FReact\u7684diff\u7B97\u6CD5\u7684\u601D\u8DEF\u3002</p>`,115),R=e("\u76EE\u524D\u7684"),K=n("code",null,"reactDiff",-1),T=e("\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A"),U=n("code",null,"O(m*n)",-1),W=e("\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u7A7A\u95F4\u6362\u65F6\u95F4\uFF0C\u628A"),J=n("code",null,"key",-1),H=e("\u4E0E"),$=n("code",null,"index",-1),F=e("\u7684\u5173\u7CFB\u7EF4\u62A4\u6210\u4E00\u4E2A"),G=n("code",null,"Map",-1),z=e("\uFF0C\u4ECE\u800C\u5C06\u65F6\u95F4\u590D\u6742\u5EA6\u964D\u4F4E\u4E3A"),Q=n("code",null,"O(n)",-1),X=e("\uFF0C\u5177\u4F53\u7684\u4EE3\u7801\u53EF\u4EE5"),Y={href:"https://github.com/sunyanzhe/virtual-dom/blob/master/src/diff/react-diff.js",target:"_blank",rel:"noopener noreferrer"},Z=e("\u67E5\u770B\u6B64\u9879\u76EE\xA0(opens new window)"),ee=e("\u3002"),ne=i('<p>\u6211\u4EEC\u63A5\u4E0B\u6765\u770B\u8FD9\u6837\u4E00\u4E2A\u4F8B\u5B50</p><p><img src="'+x+`" alt=""></p><p>\u6839\u636E<code>reactDiff</code>\u7684\u601D\u8DEF\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u5C06<code>DOM-A</code>\u79FB\u52A8\u5230<code>DOM-C</code>\u4E4B\u540E\uFF0C\u7136\u540E\u518D\u5C06<code>DOM-B</code>\u79FB\u52A8\u5230<code>DOM-A</code>\u4E4B\u540E\uFF0C\u5B8C\u6210<code>Diff</code>\u3002\u4F46\u662F\u6211\u4EEC\u901A\u8FC7\u89C2\u5BDF\u53EF\u4EE5\u53D1\u73B0\uFF0C\u53EA\u8981\u5C06<code>DOM-C</code>\u79FB\u52A8\u5230<code>DOM-A</code>\u4E4B\u524D\u5C31\u53EF\u4EE5\u5B8C\u6210<code>Diff</code>\u3002</p><p>\u8FD9\u91CC\u662F\u6709\u53EF\u4F18\u5316\u7684\u7A7A\u95F4\u7684\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u4ECB\u7ECD<code>vue2.x</code>\u4E2D\u7684<code>diff</code>\u7B97\u6CD5------<code>\u53CC\u7AEF\u6BD4\u8F83</code>\uFF0C\u8BE5\u7B97\u6CD5\u89E3\u51B3\u4E86\u4E0A\u8FF0\u7684\u95EE\u9898</p><h3 id="_4-2-vue2-x-diff-\u53CC\u7AEF\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_4-2-vue2-x-diff-\u53CC\u7AEF\u6BD4\u8F83" aria-hidden="true">#</a> 4.2 Vue2.X Diff ------ \u53CC\u7AEF\u6BD4\u8F83</h3><p>\u6240\u8C13<code>\u53CC\u7AEF\u6BD4\u8F83</code>\u5C31\u662F\u65B0\u5217\u8868\u548C\u65E7\u5217\u8868\u4E24\u4E2A\u5217\u8868\u7684\u5934\u4E0E\u5C3E\u4E92\u76F8\u5BF9\u6BD4\uFF0C\uFF0C\u5728\u5BF9\u6BD4\u7684\u8FC7\u7A0B\u4E2D\u6307\u9488\u4F1A\u9010\u6E10\u5411\u5185\u9760\u62E2\uFF0C\u76F4\u5230\u67D0\u4E00\u4E2A\u5217\u8868\u7684\u8282\u70B9\u5168\u90E8\u904D\u5386\u8FC7\uFF0C\u5BF9\u6BD4\u505C\u6B62\u3002</p><p>1. \u5B9E\u73B0\u539F\u7406</p><p>\u6211\u4EEC\u5148\u7528\u56DB\u4E2A\u6307\u9488\u6307\u5411\u4E24\u4E2A\u5217\u8868\u7684\u5934\u5C3E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  let oldStartIndex = 0,
    oldEndIndex = prevChildren.length - 1
    newStartIndex = 0,
    newEndIndex = nextChildren.length - 1;
  let oldStartNode = prevChildren[oldStartIndex],
    oldEndNode = prevChildren[oldEndIndex],
    newStartNode = nextChildren[nextStartIndex],
    newEndNode = nextChildren[nextEndIndex];
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u6839\u636E\u56DB\u4E2A\u6307\u9488\u627E\u5230\u56DB\u4E2A\u8282\u70B9\uFF0C\u7136\u540E\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u90A3\u4E48\u5982\u4F55\u5BF9\u6BD4\u5462\uFF1F\u6211\u4EEC\u6309\u7167\u4EE5\u4E0B\u56DB\u4E2A\u6B65\u9AA4\u8FDB\u884C\u5BF9\u6BD4</p><ol><li>\u4F7F\u7528\u65E7\u5217\u8868\u7684\u5934\u4E00\u4E2A\u8282\u70B9<code>oldStartNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u5934\u4E00\u4E2A\u8282\u70B9<code>newStartNode</code>\u5BF9\u6BD4</li><li>\u4F7F\u7528\u65E7\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9<code>oldEndNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9<code>newEndNode</code>\u5BF9\u6BD4</li><li>\u4F7F\u7528\u65E7\u5217\u8868\u7684\u5934\u4E00\u4E2A\u8282\u70B9<code>oldStartNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9<code>newEndNode</code>\u5BF9\u6BD4</li><li>\u4F7F\u7528\u65E7\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9<code>oldEndNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u5934\u4E00\u4E2A\u8282\u70B9<code>newStartNode</code>\u5BF9\u6BD4</li></ol><p>\u4F7F\u7528\u4EE5\u4E0A\u56DB\u6B65\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u53BB\u5BFB\u627E<code>key</code>\u76F8\u540C\u7684\u53EF\u590D\u7528\u7684\u8282\u70B9\uFF0C\u5F53\u5728\u67D0\u4E00\u6B65\u4E2D\u627E\u5230\u4E86\u5219\u505C\u6B62\u540E\u9762\u7684\u5BFB\u627E\u3002\u5177\u4F53\u5BF9\u6BD4\u987A\u5E8F\u5982\u4E0B\u56FE</p><p><img src="`+h+`" alt=""></p><p>\u5BF9\u6BD4\u987A\u5E8F\u4EE3\u7801\u7ED3\u6784\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  let oldStartIndex = 0,
    oldEndIndex = prevChildren.length - 1
    newStartIndex = 0,
    newEndIndex = nextChildren.length - 1;
  let oldStartNode = prevChildren[oldStartIndex],
    oldEndNode = prevChildren[oldEndIndex],
    newStartNode = nextChildren[newStartIndex],
    newEndNode = nextChildren[newEndIndex];

  if (oldStartNode.key === newStartNode.key) {

  } else if (oldEndNode.key === newEndNode.key) {

  } else if (oldStartNode.key === newEndNode.key) {

  } else if (oldEndNode.key === newStartNode.key) {

  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u5BF9\u6BD4\u65F6\u627E\u5230\u4E86\u53EF\u590D\u7528\u7684\u8282\u70B9\uFF0C\u6211\u4EEC\u8FD8\u662F\u5148<code>patch</code>\u7ED9\u5143\u7D20\u6253\u8865\u4E01\uFF0C\u7136\u540E\u5C06\u6307\u9488\u8FDB\u884C<code>\u524D/\u540E\u79FB</code>\u4E00\u4F4D\u6307\u9488\u3002\u6839\u636E\u5BF9\u6BD4\u8282\u70B9\u7684\u4E0D\u540C\uFF0C\u6211\u4EEC\u79FB\u52A8\u7684\u6307\u9488\u548C\u65B9\u5411\u4E5F\u4E0D\u540C\uFF0C\u5177\u4F53\u89C4\u5219\u5982\u4E0B\uFF1A</p><ol><li>\u5F53\u65E7\u5217\u8868\u7684\u5934\u4E00\u4E2A\u8282\u70B9<code>oldStartNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u5934\u4E00\u4E2A\u8282\u70B9<code>newStartNode</code>\u5BF9\u6BD4\u65F6<code>key</code>\u76F8\u540C\u3002\u90A3\u4E48\u65E7\u5217\u8868\u7684\u5934\u6307\u9488<code>oldStartIndex</code>\u4E0E\u65B0\u5217\u8868\u7684\u5934\u6307\u9488<code>newStartIndex</code>\u540C\u65F6\u5411\u540E\u79FB\u52A8\u4E00\u4F4D\u3002</li><li>\u5F53\u65E7\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9<code>oldEndNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9<code>newEndNode</code>\u5BF9\u6BD4\u65F6<code>key</code>\u76F8\u540C\u3002\u90A3\u4E48\u65E7\u5217\u8868\u7684\u5C3E\u6307\u9488<code>oldEndIndex</code>\u4E0E\u65B0\u5217\u8868\u7684\u5C3E\u6307\u9488<code>newEndIndex</code>\u540C\u65F6\u5411\u524D\u79FB\u52A8\u4E00\u4F4D\u3002</li><li>\u5F53\u65E7\u5217\u8868\u7684\u5934\u4E00\u4E2A\u8282\u70B9<code>oldStartNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9<code>newEndNode</code>\u5BF9\u6BD4\u65F6<code>key</code>\u76F8\u540C\u3002\u90A3\u4E48\u65E7\u5217\u8868\u7684\u5934\u6307\u9488<code>oldStartIndex</code>\u5411\u540E\u79FB\u52A8\u4E00\u4F4D\uFF1B\u65B0\u5217\u8868\u7684\u5C3E\u6307\u9488<code>newEndIndex</code>\u5411\u524D\u79FB\u52A8\u4E00\u4F4D\u3002</li><li>\u5F53\u65E7\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9<code>oldEndNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u5934\u4E00\u4E2A\u8282\u70B9<code>newStartNode</code>\u5BF9\u6BD4\u65F6<code>key</code>\u76F8\u540C\u3002\u90A3\u4E48\u65E7\u5217\u8868\u7684\u5C3E\u6307\u9488<code>oldEndIndex</code>\u5411\u524D\u79FB\u52A8\u4E00\u4F4D\uFF1B\u65B0\u5217\u8868\u7684\u5934\u6307\u9488<code>newStartIndex</code>\u5411\u540E\u79FB\u52A8\u4E00\u4F4D\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  let oldStartIndex = 0,
    oldEndIndex = prevChildren.length - 1,
    newStartIndex = 0,
    newEndIndex = nextChildren.length - 1;
  let oldStartNode = prevChildren[oldStartIndex],
    oldEndNode = prevChildren[oldEndIndex],
    newStartNode = nextChildren[newStartIndex],
    newEndNode = nextChildren[newEndIndex];

  if (oldStartNode.key === newStartNode.key) {
    patch(oldvStartNode, newStartNode, parent)

    oldStartIndex++
    newStartIndex++
    oldStartNode = prevChildren[oldStartIndex]
    newStartNode = nextChildren[newStartIndex]
  } else if (oldEndNode.key === newEndNode.key) {
    patch(oldEndNode, newEndNode, parent)

    oldEndIndex--
    newEndIndex--
    oldEndNode = prevChildren[oldEndIndex]
    newEndNode = nextChildren[newEndIndex]
  } else if (oldStartNode.key === newEndNode.key) {
    patch(oldStartNode, newEndNode, parent)

    oldStartIndex++
    newEndIndex--
    oldStartNode = prevChildren[oldStartIndex]
    newEndNode = nextChildren[newEndIndex]
  } else if (oldEndNode.key === newStartNode.key) {
    patch(oldEndNode, newStartNode, parent)

    oldEndIndex--
    nextStartIndex++
    oldEndNode = prevChildren[oldEndIndex]
    newStartNode = nextChildren[newStartIndex]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5C0F\u8282\u7684\u5F00\u5934\uFF0C\u63D0\u5230\u4E86\u8981\u8BA9\u6307\u9488\u5411\u5185\u9760\u62E2\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5FAA\u73AF\u3002\u5FAA\u73AF\u505C\u6B62\u7684\u6761\u4EF6\u662F\u5F53\u5176\u4E2D\u4E00\u4E2A\u5217\u8868\u7684\u8282\u70B9\u5168\u90E8\u904D\u5386\u5B8C\u6210\uFF0C\u4EE3\u7801\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  let oldStartIndex = 0,
    oldEndIndex = prevChildren.length - 1,
    newStartIndex = 0,
    newEndIndex = nextChildren.length - 1;
  let oldStartNode = prevChildren[oldStartIndex],
    oldEndNode = prevChildren[oldEndIndex],
    newStartNode = nextChildren[newStartIndex],
    newEndNode = nextChildren[newEndIndex];
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
    if (oldStartNode.key === newStartNode.key) {
      patch(oldStartNode, newStartNode, parent)

      oldStartIndex++
      newStartIndex++
      oldStartNode = prevChildren[oldStartIndex]
      newStartNode = nextChildren[newStartIndex]
    } else if (oldEndNode.key === newEndNode.key) {
      patch(oldEndNode, newEndNode, parent)

      oldEndIndex--
      newndIndex--
      oldEndNode = prevChildren[oldEndIndex]
      newEndNode = nextChildren[newEndIndex]
    } else if (oldStartNode.key === newEndNode.key) {
      patch(oldvStartNode, newEndNode, parent)

      oldStartIndex++
      newEndIndex--
      oldStartNode = prevChildren[oldStartIndex]
      newEndNode = nextChildren[newEndIndex]
    } else if (oldEndNode.key === newStartNode.key) {
      patch(oldEndNode, newStartNode, parent)

      oldEndIndex--
      newStartIndex++
      oldEndNode = prevChildren[oldEndIndex]
      newStartNode = nextChildren[newStartIndex]
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\u6574\u4F53\u7684\u5FAA\u73AF\u6211\u4EEC\u5C31\u5168\u90E8\u5B8C\u6210\u4E86\uFF0C\u4E0B\u9762\u6211\u4EEC\u9700\u8981\u8003\u8651\u8FD9\u6837\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u4EC0\u4E48\u60C5\u51B5\u4E0B<code>DOM</code>\u8282\u70B9\u9700\u8981\u79FB\u52A8</li><li><code>DOM</code>\u8282\u70B9\u5982\u4F55\u79FB\u52A8</li></ul><p>\u6211\u4EEC\u6765\u89E3\u51B3\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF1A\u4EC0\u4E48\u60C5\u51B5\u4E0B\u9700\u8981\u79FB\u52A8\uFF0C\u6211\u4EEC\u8FD8\u662F\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\u3002</p><p><img src="`+f+`" alt=""></p><p>\u5F53\u6211\u4EEC\u5728\u7B2C\u4E00\u4E2A\u5FAA\u73AF\u65F6\uFF0C\u5728<code>\u7B2C\u56DB\u6B65</code>\u53D1\u73B0\u65E7\u5217\u8868\u7684\u5C3E\u8282\u70B9<code>oldEndNode</code>\u4E0E\u65B0\u5217\u8868\u7684\u5934\u8282\u70B9<code>newStartNode</code>\u7684<code>key</code>\u76F8\u540C\uFF0C\u662F\u53EF\u590D\u7528\u7684<code>DOM</code>\u8282\u70B9\u3002\u901A\u8FC7\u89C2\u5BDF\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u539F\u672C\u5728\u65E7\u5217\u8868\u672B\u5C3E\u7684\u8282\u70B9\uFF0C\u5374\u662F\u65B0\u5217\u8868\u4E2D\u7684\u5F00\u5934\u8282\u70B9\uFF0C\u6CA1\u6709\u4EBA\u6BD4\u4ED6\u66F4\u9760\u524D\uFF0C\u56E0\u4E3A\u4ED6\u662F\u7B2C\u4E00\u4E2A\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u628A\u5F53\u524D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u539F\u672C\u65E7\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u4E4B\u524D\uFF0C\u8BA9\u5B83\u6210\u4E3A\u7B2C\u4E00\u4E2A\u8282\u70B9\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
 // ...
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
    if (oldStartNode.key === newStartNode.key) {
       // ...
    } else if (oldEndNode.key === newEndNode.key) {
      // ...
    } else if (oldStartNode.key === newEndNode.key) {
      // ...
    } else if (oldEndNode.key === newStartNode.key) {
      patch(oldEndNode, newStartNode, parent)
      // \u79FB\u52A8\u5230\u65E7\u5217\u8868\u5934\u8282\u70B9\u4E4B\u524D
      parent.insertBefore(oldEndNode.el, oldStartNode.el)

      oldEndIndex--
      newStartIndex++
      oldEndNode = prevChildren[oldEndIndex]
      newStartNode = nextChildren[newStartIndex]
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+'" alt=""></p><p>\u7136\u540E\u6211\u4EEC\u8FDB\u5165\u7B2C\u4E8C\u6B21\u5FAA\u73AF\uFF0C\u6211\u4EEC\u5728<code>\u7B2C\u4E8C\u6B65</code>\u53D1\u73B0\uFF0C\u65E7\u5217\u8868\u7684\u5C3E\u8282\u70B9<code>oldEndNode</code>\u548C\u65B0\u5217\u8868\u7684\u5C3E\u8282\u70B9<code>newEndNode</code>\u4E3A\u590D\u7528\u8282\u70B9\u3002\u539F\u672C\u5728\u65E7\u5217\u8868\u4E2D\u5C31\u662F\u5C3E\u8282\u70B9\uFF0C\u5728\u65B0\u5217\u8868\u4E2D\u4E5F\u662F\u5C3E\u8282\u70B9\uFF0C\u8BF4\u660E\u8BE5\u8282\u70B9\u4E0D\u9700\u8981\u79FB\u52A8\uFF0C\u6240\u4EE5\u6211\u4EEC\u4EC0\u4E48\u90FD\u4E0D\u9700\u8981\u505A\u3002</p><p>\u540C\u7406\uFF0C\u5982\u679C\u662F\u65E7\u5217\u8868\u7684\u5934\u8282\u70B9<code>oldStartNode</code>\u548C\u65B0\u5217\u8868\u7684\u5934\u8282\u70B9<code>newStartNode</code>\u4E3A\u590D\u7528\u8282\u70B9\uFF0C\u6211\u4EEC\u4E5F\u4EC0\u4E48\u90FD\u4E0D\u9700\u8981\u505A\u3002</p><p><img src="'+N+`" alt=""></p><p>\u8FDB\u5165\u7B2C\u4E09\u6B21\u5FAA\u73AF\uFF0C\u6211\u4EEC\u5728<code>\u7B2C\u4E09\u90E8</code>\u53D1\u73B0\uFF0C\u65E7\u5217\u8868\u7684\u5934\u8282\u70B9<code>oldStartNode</code>\u548C\u65B0\u5217\u8868\u7684\u5C3E\u8282\u70B9<code>newEndNode</code>\u4E3A\u590D\u7528\u8282\u70B9\u3002\u5230\u8FD9\u4E00\u6B65\u806A\u660E\u5982\u4F60\u80AF\u5B9A\u5C31\u4E00\u773C\u53EF\u4EE5\u770B\u51FA\u6765\u4E86\uFF0C\u6211\u4EEC\u53EA\u8981\u5C06<code>DOM-A</code>\u79FB\u52A8\u5230<code>DOM-B</code>\u540E\u9762\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u4F9D\u7167\u60EF\u4F8B\u6211\u4EEC\u8FD8\u662F\u89E3\u91CA\u4E00\u4E0B\uFF0C\u539F\u672C\u65E7\u5217\u8868\u4E2D\u662F\u5934\u8282\u70B9\uFF0C\u7136\u540E\u5728\u65B0\u5217\u8868\u4E2D\u662F\u5C3E\u8282\u70B9\u3002\u90A3\u4E48\u53EA\u8981\u5728\u65E7\u5217\u8868\u4E2D\u628A\u5F53\u524D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u539F\u672C\u5C3E\u8282\u70B9\u7684\u540E\u9762\uFF0C\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  // ...
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
    if (oldStartNode.key === newStartNode.key) {
      // ...
    } else if (oldEndNode.key === newEndNode.key) {
      // ...
    } else if (oldStartNode.key === newEndNode.key) {
      patch(oldStartNode, newEndNode, parent)
      parent.insertBefore(oldStartNode.el, oldEndNode.el.nextSibling)

      oldStartIndex++
      newEndIndex--
      oldStartNode = prevChildren[oldStartIndex]
      newEndNode = nextChildren[newEndIndex]
    } else if (oldEndNode.key === newStartNode.key) {
     //...
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+'" alt=""></p><p>OK\uFF0C\u8FDB\u5165\u6700\u540E\u4E00\u4E2A\u5FAA\u73AF\u3002\u5728<code>\u7B2C\u4E00\u6B65</code>\u65E7\u5217\u8868\u5934\u8282\u70B9<code>oldStartNode</code>\u4E0E\u65B0\u5217\u8868\u5934\u8282\u70B9<code>newStartNode</code>\u4F4D\u7F6E\u76F8\u540C\uFF0C\u6240\u4EE5\u5565\u4E5F\u4E0D\u7528\u505A\u3002\u7136\u540E\u7ED3\u675F\u5FAA\u73AF\uFF0C\u8FD9\u5C31\u662F<code>Vue2 \u53CC\u7AEF\u6BD4\u8F83</code>\u7684\u539F\u7406\u3002</p><p>2. \u975E\u7406\u60F3\u60C5\u51B5</p><p>\u4E0A\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u8BB2\u4E86<code>\u53CC\u7AEF\u6BD4\u8F83</code>\u7684\u539F\u7406\uFF0C\u4F46\u662F\u6709\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\uFF0C\u5F53\u56DB\u6B21\u5BF9\u6BD4\u90FD\u6CA1\u627E\u5230\u590D\u7528\u8282\u70B9\u65F6\uFF0C\u6211\u4EEC\u53EA\u80FD\u62FF\u65B0\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u53BB\u65E7\u5217\u8868\u4E2D\u627E\u4E0E\u5176<code>key</code>\u76F8\u540C\u7684\u8282\u70B9\u3002</p><p><img src="'+y+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  //...
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
    if (oldStartNode.key === newStartNode.key) {
    //...
    } else if (oldEndNode.key === newEndNode.key) {
    //...
    } else if (oldStartNode.key === newEndNode.key) {
    //...
    } else if (oldEndNode.key === newStartNode.key) {
    //...
    } else {
      // \u5728\u65E7\u5217\u8868\u4E2D\u627E\u5230 \u548C\u65B0\u5217\u8868\u5934\u8282\u70B9key \u76F8\u540C\u7684\u8282\u70B9
      let newKey = newStartNode.key,
        oldIndex = prevChildren.findIndex(child =&gt; child.key === newKey);

    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u627E\u8282\u70B9\u7684\u65F6\u5019\u5176\u5B9E\u4F1A\u6709\u4E24\u79CD\u60C5\u51B5\uFF1A\u4E00\u79CD\u5728\u65E7\u5217\u8868\u4E2D\u627E\u5230\u4E86\uFF0C\u53E6\u4E00\u79CD\u60C5\u51B5\u662F\u6CA1\u627E\u5230\u3002\u6211\u4EEC\u5148\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF0C\u8BF4\u4E00\u4E0B\u627E\u5230\u7684\u60C5\u51B5\u3002</p><p><img src="`+w+`" alt=""></p><p>\u5F53\u6211\u4EEC\u5728\u65E7\u5217\u8868\u4E2D\u627E\u5230\u5BF9\u5E94\u7684<code>VNode</code>\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u627E\u5230\u7684\u8282\u70B9\u7684<code>DOM</code>\u5143\u7D20\uFF0C\u79FB\u52A8\u5230\u5F00\u5934\u5C31\u53EF\u4EE5\u4E86\u3002\u8FD9\u91CC\u7684\u903B\u8F91\u5176\u5B9E\u548C<code>\u7B2C\u56DB\u6B65</code>\u7684\u903B\u8F91\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u4E0D\u8FC7<code>\u7B2C\u56DB\u6B65</code>\u662F\u79FB\u52A8\u7684\u5C3E\u8282\u70B9\uFF0C\u8FD9\u91CC\u662F\u79FB\u52A8\u627E\u5230\u7684\u8282\u70B9\u3002<code>DOM</code>\u79FB\u52A8\u540E\uFF0C\u7531\u6211\u4EEC\u5C06\u65E7\u5217\u8868\u4E2D\u7684\u8282\u70B9\u6539\u4E3A<code>undefined</code>\uFF0C\u8FD9\u662F\u81F3\u5173\u91CD\u8981\u7684\u4E00\u6B65\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5DF2\u7ECF\u505A\u4E86\u8282\u70B9\u7684\u79FB\u52A8\u4E86\u6240\u4EE5\u6211\u4EEC\u4E0D\u9700\u8981\u8FDB\u884C\u518D\u6B21\u7684\u5BF9\u6BD4\u4E86\u3002\u6700\u540E\u6211\u4EEC\u5C06\u5934\u6307\u9488<code>newStartIndex</code>\u5411\u540E\u79FB\u4E00\u4F4D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  //...
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
    if (oldStartNode.key === newStartNode.key) {
    //...
    } else if (oldEndNode.key === newEndNode.key) {
    //...
    } else if (oldStartNode.key === newEndNode.key) {
    //...
    } else if (oldEndNode.key === newStartNode.key) {
    //...
    } else {
      // \u5728\u65E7\u5217\u8868\u4E2D\u627E\u5230 \u548C\u65B0\u5217\u8868\u5934\u8282\u70B9key \u76F8\u540C\u7684\u8282\u70B9
      let newtKey = newStartNode.key,
        oldIndex = prevChildren.findIndex(child =&gt; child.key === newKey);

      if (oldIndex &gt; -1) {
        let oldNode = prevChildren[oldIndex];
        patch(oldNode, newStartNode, parent)
        parent.insertBefore(oldNode.el, oldStartNode.el)
        prevChildren[oldIndex] = undefined
      }
      newStartNode = nextChildren[++newStartIndex]
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5728\u65E7\u5217\u8868\u4E2D\u6CA1\u6709\u627E\u5230\u590D\u7528\u8282\u70B9\u5462\uFF1F\u5F88\u7B80\u5355\uFF0C\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9\u653E\u5230\u6700\u524D\u9762\u5C31\u53EF\u4EE5\u4E86\uFF0C\u7136\u540E\u540E\u79FB\u5934\u6307\u9488<code>newStartIndex</code>\u3002</p><p><img src="`+k+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  //...
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
    if (oldStartNode.key === newStartNode.key) {
    //...
    } else if (oldEndNode.key === newEndNode.key) {
    //...
    } else if (oldStartNode.key === newEndNode.key) {
    //...
    } else if (oldEndNode.key === newStartNode.key) {
    //...
    } else {
      // \u5728\u65E7\u5217\u8868\u4E2D\u627E\u5230 \u548C\u65B0\u5217\u8868\u5934\u8282\u70B9key \u76F8\u540C\u7684\u8282\u70B9
      let newtKey = newStartNode.key,
        oldIndex = prevChildren.findIndex(child =&gt; child.key === newKey);

      if (oldIndex &gt; -1) {
        let oldNode = prevChildren[oldIndex];
        patch(oldNode, newStartNode, parent)
        parent.insertBefore(oldNode.el, oldStartNode.el)
        prevChildren[oldIndex] = undefined
      } else {
      	mount(newStartNode, parent, oldStartNode.el)
      }
      newStartNode = nextChildren[++newStartIndex]
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u5F53\u65E7\u5217\u8868\u904D\u5386\u5230<code>undefind</code>\u65F6\u5C31\u8DF3\u8FC7\u5F53\u524D\u8282\u70B9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  //...
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
    if (oldStartNode === undefind) {
    	oldStartNode = prevChildren[++oldStartIndex]
    } else if (oldEndNode === undefind) {
    	oldEndNode = prevChildren[--oldEndIndex]
    } else if (oldStartNode.key === newStartNode.key) {
    //...
    } else if (oldEndNode.key === newEndNode.key) {
    //...
    } else if (oldStartNode.key === newEndNode.key) {
    //...
    } else if (oldEndNode.key === newStartNode.key) {
    //...
    } else {
    // ...
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3. \u6DFB\u52A0\u8282\u70B9</p><p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50</p><p><img src="`+C+'" alt=""></p><p>\u8FD9\u4E2A\u4F8B\u5B50\u975E\u5E38\u7B80\u5355\uFF0C\u51E0\u6B21\u5FAA\u73AF\u90FD\u662F\u5C3E\u8282\u70B9\u76F8\u540C\uFF0C\u5C3E\u6307\u9488\u4E00\u76F4\u5411\u524D\u79FB\u52A8\uFF0C\u76F4\u5230\u5FAA\u73AF\u7ED3\u675F\uFF0C\u5982\u4E0B\u56FE</p><p><img src="'+E+`" alt=""></p><p>\u6B64\u65F6<code>oldEndIndex</code>\u4EE5\u53CA\u5C0F\u4E8E\u4E86<code>oldStartIndex</code>\uFF0C\u4F46\u662F\u65B0\u5217\u8868\u4E2D\u8FD8\u6709\u5269\u4F59\u7684\u8282\u70B9\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u5269\u4F59\u7684\u8282\u70B9\u4F9D\u6B21\u63D2\u5165\u5230<code>oldStartNode</code>\u7684<code>DOM</code>\u4E4B\u524D\u5C31\u53EF\u4EE5\u4E86\u3002\u4E3A\u4EC0\u4E48\u662F\u63D2\u5165<code>oldStartNode</code>\u4E4B\u524D\u5462\uFF1F\u539F\u56E0\u662F\u5269\u4F59\u7684\u8282\u70B9\u5728\u65B0\u5217\u8868\u7684\u4F4D\u7F6E\u662F\u4F4D\u4E8E<code>oldStartNode</code>\u4E4B\u524D\u7684\uFF0C\u5982\u679C\u5269\u4F59\u8282\u70B9\u662F\u5728<code>oldStartNode</code>\u4E4B\u540E\uFF0C<code>oldStartNode</code>\u5C31\u4F1A\u5148\u884C\u5BF9\u6BD4\uFF0C\u8FD9\u4E2A\u9700\u8981\u601D\u8003\u4E00\u4E0B\uFF0C\u5176\u5B9E\u8FD8\u662F\u4E0E<code>\u7B2C\u56DB\u6B65</code>\u7684\u601D\u8DEF\u4E00\u6837\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  //...
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
  // ...
  }
  if (oldEndIndex &lt; oldStartIndex) {
    for (let i = newStartIndex; i &lt;= newEndIndex; i++) {
      mount(nextChildren[i], parent, prevStartNode.el)
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4. \u79FB\u9664\u8282\u70B9</p><p>\u4E0E\u4E0A\u4E00\u5C0F\u8282\u7684\u60C5\u51B5\u76F8\u53CD\uFF0C\u5F53\u65B0\u5217\u8868\u7684<code>newEndIndex</code>\u5C0F\u4E8E<code>newStartIndex</code>\u65F6\uFF0C\u6211\u4EEC\u5C06\u65E7\u5217\u8868\u5269\u4F59\u7684\u8282\u70B9\u5220\u9664\u5373\u53EF\u3002\u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u6CE8\u610F\uFF0C\u65E7\u5217\u8868\u7684<code>undefind</code>\u3002\u5728\u7B2C\u4E8C\u5C0F\u8282\u4E2D\u6211\u4EEC\u63D0\u5230\u8FC7\uFF0C\u5F53\u5934\u5C3E\u8282\u70B9\u90FD\u4E0D\u76F8\u540C\u65F6\uFF0C\u6211\u4EEC\u4F1A\u53BB\u65E7\u5217\u8868\u4E2D\u627E\u65B0\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C\u79FB\u52A8\u5B8CDOM\u8282\u70B9\u540E\uFF0C\u5C06\u65E7\u5217\u8868\u7684\u90A3\u4E2A\u8282\u70B9\u6539\u4E3A<code>undefind</code>\u3002\u6240\u4EE5\u6211\u4EEC\u5728\u6700\u540E\u7684\u5220\u9664\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u8FD9\u4E9B<code>undefind</code>\uFF0C\u9047\u5230\u7684\u8BDD\u8DF3\u8FC7\u5F53\u524D\u5FAA\u73AF\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2Diff(prevChildren, nextChildren, parent) {
  //...
  while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {
  // ...
  }
  if (oldEndIndex &lt; oldStartIndex) {
    for (let i = newStartIndex; i &lt;= newEndIndex; i++) {
      mount(nextChildren[i], parent, prevStartNode.el)
    }
  } else if (newEndIndex &lt; newStartIndex) {
    for (let i = oldStartIndex; i &lt;= oldEndIndex; i++) {
      if (prevChildren[i]) {
        partent.removeChild(prevChildren[i].el)
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5. \u5C0F\u7ED3</p><p>\u81F3\u6B64<code>\u53CC\u7AEF\u6BD4\u8F83</code>\u5168\u90E8\u5B8C\u6210\uFF0C\u4EE5\u4E0B\u662F\u5168\u90E8\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue2diff(prevChildren, nextChildren, parent) {
  let oldStartIndex = 0,
    newStartIndex = 0,
    oldStartIndex = prevChildren.length - 1,
    newStartIndex = nextChildren.length - 1,
    oldStartNode = prevChildren[oldStartIndex],
    oldEndNode = prevChildren[oldStartIndex],
    newStartNode = nextChildren[newStartIndex],
    newEndNode = nextChildren[newStartIndex];
  while (oldStartIndex &lt;= oldStartIndex &amp;&amp; newStartIndex &lt;= newStartIndex) {
    if (oldStartNode === undefined) {
      oldStartNode = prevChildren[++oldStartIndex]
    } else if (oldEndNode === undefined) {
      oldEndNode = prevChildren[--oldStartIndex]
    } else if (oldStartNode.key === newStartNode.key) {
      patch(oldStartNode, newStartNode, parent)

      oldStartIndex++
      newStartIndex++
      oldStartNode = prevChildren[oldStartIndex]
      newStartNode = nextChildren[newStartIndex]
    } else if (oldEndNode.key === newEndNode.key) {
      patch(oldEndNode, newEndNode, parent)

      oldStartIndex--
      newStartIndex--
      oldEndNode = prevChildren[oldStartIndex]
      newEndNode = nextChildren[newStartIndex]
    } else if (oldStartNode.key === newEndNode.key) {
      patch(oldStartNode, newEndNode, parent)
      parent.insertBefore(oldStartNode.el, oldEndNode.el.nextSibling)
      oldStartIndex++
      newStartIndex--
      oldStartNode = prevChildren[oldStartIndex]
      newEndNode = nextChildren[newStartIndex]
    } else if (oldEndNode.key === newStartNode.key) {
      patch(oldEndNode, newStartNode, parent)
      parent.insertBefore(oldEndNode.el, oldStartNode.el)
      oldStartIndex--
      newStartIndex++
      oldEndNode = prevChildren[oldStartIndex]
      newStartNode = nextChildren[newStartIndex]
    } else {
      let newKey = newStartNode.key,
        oldIndex = prevChildren.findIndex(child =&gt; child &amp;&amp; (child.key === newKey));
      if (oldIndex === -1) {
        mount(newStartNode, parent, oldStartNode.el)
      } else {
        let prevNode = prevChildren[oldIndex]
        patch(prevNode, newStartNode, parent)
        parent.insertBefore(prevNode.el, oldStartNode.el)
        prevChildren[oldIndex] = undefined
      }
      newStartIndex++
      newStartNode = nextChildren[newStartIndex]
    }
  }
  if (newStartIndex &gt; newStartIndex) {
    while (oldStartIndex &lt;= oldStartIndex) {
      if (!prevChildren[oldStartIndex]) {
        oldStartIndex++
        continue
      }
      parent.removeChild(prevChildren[oldStartIndex++].el)
    }
  } else if (oldStartIndex &gt; oldStartIndex) {
    while (newStartIndex &lt;= newStartIndex) {
      mount(nextChildren[newStartIndex++], parent, oldStartNode.el)
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-vue3-diff-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" tabindex="-1"><a class="header-anchor" href="#_4-3-vue3-diff-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" aria-hidden="true">#</a> 4.3 Vue3 Diff ------ \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217</h3>`,62),ie=n("code",null,"vue3",-1),de=e("\u7684"),le=n("code",null,"diff",-1),se=e("\u501F\u9274\u4E8E"),ve={href:"https://github.com/infernojs/inferno",target:"_blank",rel:"noopener noreferrer"},re=e("inferno\xA0(opens new window)"),ce=e("\uFF0C\u8BE5\u7B97\u6CD5\u5176\u4E2D\u6709\u4E24\u4E2A\u7406\u5FF5\u3002\u7B2C\u4E00\u4E2A\u662F\u76F8\u540C\u7684\u524D\u7F6E\u4E0E\u540E\u7F6E\u5143\u7D20\u7684\u9884\u5904\u7406\uFF1B\u7B2C\u4E8C\u4E2A\u5219\u662F\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\uFF0C\u6B64\u601D\u60F3\u4E0E"),ae=n("code",null,"React",-1),te=e("\u7684"),oe=n("code",null,"diff",-1),ue=e("\u7C7B\u4F3C\u53C8\u4E0D\u5C3D\u76F8\u540C\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u4E00\u4E00\u4ECB\u7ECD\u3002"),me=i(`<p>1. \u524D\u7F6E\u4E0E\u540E\u7F6E\u7684\u9884\u5904\u7406</p><p>\u6211\u4EEC\u770B\u8FD9\u4E24\u6BB5\u6587\u5B57</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Hello World
Hey World

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u5C31\u7B80\u5355\u7684\u770B\u4E00\u773C\u6211\u4EEC\u5C31\u80FD\u53D1\u73B0\uFF0C\u8FD9\u4E24\u6BB5\u6587\u5B57\u662F\u6709\u4E00\u90E8\u5206\u662F\u76F8\u540C\u7684\uFF0C\u8FD9\u4E9B\u6587\u5B57\u662F\u4E0D\u9700\u8981\u4FEE\u6539\u4E5F\u4E0D\u9700\u8981\u79FB\u52A8\u7684\uFF0C\u771F\u6B63\u9700\u8981\u8FDB\u884C\u4FEE\u6539\u4E2D\u95F4\u7684\u51E0\u4E2A\u5B57\u6BCD\uFF0C\u6240\u4EE5<code>diff</code>\u5C31\u53D8\u6210\u4EE5\u4E0B\u90E8\u5206</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>text1: &#39;llo&#39;
text2: &#39;y&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u6362\u6210<code>vnode</code>\uFF0C\u6211\u4EEC\u4EE5\u4E0B\u56FE\u4E3A\u4F8B\u3002</p><p><img src="`+I+`" alt=""></p><p>\u56FE\u4E2D\u7684\u88AB\u7EFF\u8272\u6846\u8D77\u6765\u7684\u8282\u70B9\uFF0C\u4ED6\u4EEC\u662F\u4E0D\u9700\u8981\u79FB\u52A8\u7684\uFF0C\u53EA\u9700\u8981\u8FDB\u884C\u6253\u8865\u4E01<code>patch</code>\u5C31\u53EF\u4EE5\u4E86\u3002\u6211\u4EEC\u628A\u8BE5\u903B\u8F91\u5199\u6210\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  let j = 0,
    prevEnd = prevChildren.length - 1,
    nextEnd = nextChildren.length - 1,
    prevNode = prevChildren[j],
    nextNode = nextChildren[j];
  while (prevNode.key === nextNode.key) {
    patch(prevNode, nextNode, parent)
    j++
    prevNode = prevChildren[j]
    nextNode = nextChildren[j]
  }

  prevNode = prevChildren[prevEnd]
  nextNode = prevChildren[nextEnd]

  while (prevNode.key === nextNode.key) {
    patch(prevNode, nextNode, parent)
    prevEnd--
    nextEnd--
    prevNode = prevChildren[prevEnd]
    nextNode = prevChildren[nextEnd]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u8003\u8651\u8FB9\u754C\u60C5\u51B5\u4E86\uFF0C\u8FD9\u91CC\u6709\u4E24\u79CD\u60C5\u51B5\u3002\u4E00\u79CD\u662F<code>j &gt; prevEnd</code>\uFF1B\u53E6\u4E00\u79CD\u662F<code>j &gt; nextEnd</code>\u3002</p><p><img src="`+_+`" alt=""></p><p>\u6211\u4EEC\u4EE5\u8FD9\u5F20\u56FE\u4E3A\u4F8B\uFF0C\u6B64\u65F6<code>j &gt; prevEnd</code>\u4E14<code>j &lt;= nextEnd</code>\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u628A\u65B0\u5217\u8868\u4E2D<code>j</code>\u5230<code>nextEnd</code>\u4E4B\u95F4\u5269\u4E0B\u7684\u8282\u70B9\u63D2\u5165\u8FDB\u53BB\u5C31\u53EF\u4EE5\u4E86\u3002\u76F8\u53CD\uFF0C \u5982\u679C<code>j &gt; nextEnd</code>\u65F6\uFF0C\u6211\u4EEC\u628A\u65E7\u5217\u8868\u4E2D<code>j</code>\u5230<code>prevEnd</code>\u4E4B\u95F4\u7684\u8282\u70B9\u5220\u9664\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  // ...
  if (j &gt; prevEnd &amp;&amp; j &lt;= nextEnd) {
    let nextpos = nextEnd + 1,
      refNode = nextpos &gt;= nextChildren.length
                ? null
                : nextChildren[nextpos].el;
    while(j &lt;= nextEnd) mount(nextChildren[j++], parent, refNode)

  } else if (j &gt; nextEnd &amp;&amp; j &lt;= prevEnd) {
    while(j &lt;= prevEnd) parent.removeChild(prevChildren[j++].el)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u518D\u7EE7\u7EED\u601D\u8003\uFF0C\u5728\u6211\u4EEC<code>while</code>\u5FAA\u73AF\u65F6\uFF0C\u6307\u9488\u662F\u4ECE\u4E24\u7AEF\u5411\u5185\u9010\u6E10\u9760\u62E2\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5E94\u8BE5\u5728\u5FAA\u73AF\u4E2D\u5C31\u5E94\u8BE5\u53BB\u5224\u65AD\u8FB9\u754C\u60C5\u51B5\uFF0C\u6211\u4EEC\u4F7F\u7528<code>label</code>\u8BED\u6CD5\uFF0C\u5F53\u6211\u4EEC\u89E6\u53D1\u8FB9\u754C\u60C5\u51B5\u65F6\uFF0C\u9000\u51FA\u5168\u90E8\u7684\u5FAA\u73AF\uFF0C\u76F4\u63A5\u8FDB\u5165\u5224\u65AD\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  let j = 0,
    prevEnd = prevChildren.length - 1,
    nextEnd = nextChildren.length - 1,
    prevNode = prevChildren[j],
    nextNode = nextChildren[j];
  // label\u8BED\u6CD5
  outer: {
    while (prevNode.key === nextNode.key) {
      patch(prevNode, nextNode, parent)
      j++
      // \u5FAA\u73AF\u4E2D\u5982\u679C\u89E6\u53D1\u8FB9\u754C\u60C5\u51B5\uFF0C\u76F4\u63A5break\uFF0C\u6267\u884Couter\u4E4B\u540E\u7684\u5224\u65AD
      if (j &gt; prevEnd || j &gt; nextEnd) break outer
      prevNode = prevChildren[j]
      nextNode = nextChildren[j]
    }

    prevNode = prevChildren[prevEnd]
    nextNode = prevChildren[nextEnd]

    while (prevNode.key === nextNode.key) {
      patch(prevNode, nextNode, parent)
      prevEnd--
      nextEnd--
      // \u5FAA\u73AF\u4E2D\u5982\u679C\u89E6\u53D1\u8FB9\u754C\u60C5\u51B5\uFF0C\u76F4\u63A5break\uFF0C\u6267\u884Couter\u4E4B\u540E\u7684\u5224\u65AD
      if (j &gt; prevEnd || j &gt; nextEnd) break outer
      prevNode = prevChildren[prevEnd]
      nextNode = prevChildren[nextEnd]
    }
  }

  // \u8FB9\u754C\u60C5\u51B5\u7684\u5224\u65AD
  if (j &gt; prevEnd &amp;&amp; j &lt;= nextEnd) {
    let nextpos = nextEnd + 1,
      refNode = nextpos &gt;= nextChildren.length
                ? null
                : nextChildren[nextpos].el;
    while(j &lt;= nextEnd) mount(nextChildren[j++], parent, refNode)

  } else if (j &gt; nextEnd &amp;&amp; j &lt;= prevEnd) {
    while(j &lt;= prevEnd) parent.removeChild(prevChildren[j++].el)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2. \u5224\u65AD\u662F\u5426\u9700\u8981\u79FB\u52A8</p><p>\u5176\u5B9E\u51E0\u4E2A\u7B97\u6CD5\u770B\u4E0B\u6765\uFF0C\u5957\u8DEF\u5DF2\u7ECF\u5F88\u660E\u663E\u4E86\uFF0C\u5C31\u662F\u627E\u5230\u79FB\u52A8\u7684\u8282\u70B9\uFF0C\u7136\u540E\u7ED9\u4ED6\u79FB\u52A8\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\u3002\u628A\u8BE5\u52A0\u7684\u65B0\u8282\u70B9\u6DFB\u52A0\u597D\uFF0C\u628A\u8BE5\u5220\u7684\u65E7\u8282\u70B9\u5220\u4E86\uFF0C\u6574\u4E2A\u7B97\u6CD5\u5C31\u7ED3\u675F\u4E86\u3002\u8FD9\u4E2A\u7B97\u6CD5\u4E5F\u4E0D\u4F8B\u5916\uFF0C\u6211\u4EEC\u63A5\u4E0B\u6765\u770B\u4E00\u4E0B\u5B83\u662F\u5982\u4F55\u505A\u7684\u3002</p><p>\u5F53<code>\u524D/\u540E\u7F6E</code>\u7684\u9884\u5904\u7406\u7ED3\u675F\u540E\uFF0C\u6211\u4EEC\u8FDB\u5165\u771F\u6B63\u7684<code>diff</code>\u73AF\u8282\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u6839\u636E\u65B0\u5217\u8868\u5269\u4F59\u7684\u8282\u70B9\u6570\u91CF\uFF0C\u521B\u5EFA\u4E00\u4E2A<code>source</code>\u6570\u7EC4\uFF0C\u5E76\u5C06\u6570\u7EC4\u586B\u6EE1<code>-1</code>\u3002</p><p><img src="`+j+`" alt=""></p><p>\u6211\u4EEC\u5148\u5199\u8FD9\u5757\u903B\u8F91\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  //...
  outer: {
  // ...
  }

  // \u8FB9\u754C\u60C5\u51B5\u7684\u5224\u65AD
  if (j &gt; prevEnd &amp;&amp; j &lt;= nextEnd) {
    // ...
  } else if (j &gt; nextEnd &amp;&amp; j &lt;= prevEnd) {
    // ...
  } else {
    let prevStart = j,
      nextStart = j,
      nextLeft = nextEnd - nextStart + 1,     // \u65B0\u5217\u8868\u4E2D\u5269\u4F59\u7684\u8282\u70B9\u957F\u5EA6
      source = new Array(nextLeft).fill(-1);  // \u521B\u5EFA\u6570\u7EC4\uFF0C\u586B\u6EE1-1

  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u8FD9\u4E2A<code>source</code>\u6570\u7EC4\uFF0C\u662F\u8981\u505A\u4EC0\u4E48\u7684\u5462\uFF1F\u4ED6\u5C31\u662F\u6765\u505A\u65B0\u65E7\u8282\u70B9\u7684\u5BF9\u5E94\u5173\u7CFB\u7684\uFF0C\u6211\u4EEC\u5C06\u65B0\u8282\u70B9\u5728\u65E7\u5217\u8868\u7684\u4F4D\u7F6E\u5B58\u50A8\u5728\u8BE5\u6570\u7EC4\u4E2D\uFF0C\u6211\u4EEC\u5728\u6839\u636E<code>source</code>\u8BA1\u7B97\u51FA\u5B83\u7684<code>\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217</code>\u7528\u4E8E\u79FB\u52A8DOM\u8282\u70B9\u3002\u4E3A\u6B64\uFF0C\u6211\u4EEC\u5148\u5EFA\u7ACB\u4E00\u4E2A\u5BF9\u8C61\u5B58\u50A8\u5F53\u524D\u65B0\u5217\u8868\u4E2D\u7684<code>\u8282\u70B9</code>\u4E0E<code>index</code>\u7684\u5173\u7CFB\uFF0C\u518D\u53BB\u65E7\u5217\u8868\u4E2D\u53BB\u627E\u4F4D\u7F6E\u3002</p><p>\u5728\u627E\u8282\u70B9\u65F6\u8981\u6CE8\u610F\uFF0C\u5982\u679C\u65E7\u8282\u70B9\u5728\u65B0\u5217\u8868\u4E2D\u6CA1\u6709\u7684\u8BDD\uFF0C\u76F4\u63A5\u5220\u9664\u5C31\u597D\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2A\u6570\u91CF\u8868\u793A\u8BB0\u5F55\u6211\u4EEC\u5DF2\u7ECF<code>patch</code>\u8FC7\u7684\u8282\u70B9\uFF0C\u5982\u679C\u6570\u91CF\u5DF2\u7ECF\u4E0E\u65B0\u5217\u8868\u5269\u4F59\u7684\u8282\u70B9\u6570\u91CF\u4E00\u6837\uFF0C\u90A3\u4E48\u5269\u4E0B\u7684<code>\u65E7\u8282\u70B9</code>\u6211\u4EEC\u5C31\u76F4\u63A5\u5220\u9664\u4E86\u5C31\u53EF\u4EE5\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  //...
  outer: {
  // ...
  }

  // \u8FB9\u754C\u60C5\u51B5\u7684\u5224\u65AD
  if (j &gt; prevEnd &amp;&amp; j &lt;= nextEnd) {
    // ...
  } else if (j &gt; nextEnd &amp;&amp; j &lt;= prevEnd) {
    // ...
  } else {
    let prevStart = j,
      nextStart = j,
      nextLeft = nextEnd - nextStart + 1,     // \u65B0\u5217\u8868\u4E2D\u5269\u4F59\u7684\u8282\u70B9\u957F\u5EA6
      source = new Array(nextLeft).fill(-1),  // \u521B\u5EFA\u6570\u7EC4\uFF0C\u586B\u6EE1-1
      nextIndexMap = {},                      // \u65B0\u5217\u8868\u8282\u70B9\u4E0Eindex\u7684\u6620\u5C04
      patched = 0;                            // \u5DF2\u66F4\u65B0\u8FC7\u7684\u8282\u70B9\u7684\u6570\u91CF

    // \u4FDD\u5B58\u6620\u5C04\u5173\u7CFB
    for (let i = nextStart; i &lt;= nextEnd; i++) {
      let key = nextChildren[i].key
      nextIndexMap[key] = i
    }

    // \u53BB\u65E7\u5217\u8868\u627E\u4F4D\u7F6E
    for (let i = prevStart; i &lt;= prevEnd; i++) {
      let prevNode = prevChildren[i],
      	prevKey = prevNode.key,
        nextIndex = nextIndexMap[prevKey];
      // \u65B0\u5217\u8868\u4E2D\u6CA1\u6709\u8BE5\u8282\u70B9 \u6216\u8005 \u5DF2\u7ECF\u66F4\u65B0\u4E86\u5168\u90E8\u7684\u65B0\u8282\u70B9\uFF0C\u76F4\u63A5\u5220\u9664\u65E7\u8282\u70B9
      if (nextIndex === undefind || patched &gt;= nextLeft) {
        parent.removeChild(prevNode.el)
        continue
      }
      // \u627E\u5230\u5BF9\u5E94\u7684\u8282\u70B9
      let nextNode = nextChildren[nextIndex];
      patch(prevNode, nextNode, parent);
      // \u7ED9source\u8D4B\u503C
      source[nextIndex - nextStart] = i
      patched++
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+D+`" alt=""></p><p>\u627E\u5230\u4F4D\u7F6E\u540E\uFF0C\u6211\u4EEC\u89C2\u5BDF\u8FD9\u4E2A\u91CD\u65B0\u8D4B\u503C\u540E\u7684<code>source</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C\u5982\u679C\u662F\u5168\u65B0\u7684\u8282\u70B9\u7684\u8BDD\uFF0C\u5176\u5728<code>source</code>\u6570\u7EC4\u4E2D\u5BF9\u5E94\u7684\u503C\u5C31\u662F\u521D\u59CB\u7684<code>-1</code>\uFF0C\u901A\u8FC7\u8FD9\u4E00\u6B65\u6211\u4EEC\u53EF\u4EE5\u533A\u5206\u51FA\u6765\u54EA\u4E2A\u4E3A\u5168\u65B0\u7684\u8282\u70B9\uFF0C\u54EA\u4E2A\u662F\u53EF\u590D\u7528\u7684\u3002</p><p>\u5176\u6B21\uFF0C\u6211\u4EEC\u8981\u5224\u65AD\u662F\u5426\u9700\u8981\u79FB\u52A8\u3002\u90A3\u4E48\u5982\u4F55\u5224\u65AD\u79FB\u52A8\u5462\uFF1F\u5F88\u7B80\u5355\uFF0C\u548C<code>React</code>\u4E00\u6837\u6211\u4EEC\u7528\u9012\u589E\u6CD5\uFF0C\u5982\u679C\u6211\u4EEC\u627E\u5230\u7684<code>index</code>\u662F\u4E00\u76F4\u9012\u589E\u7684\uFF0C\u8BF4\u660E\u4E0D\u9700\u8981\u79FB\u52A8\u4EFB\u4F55\u8282\u70B9\u3002\u6211\u4EEC\u901A\u8FC7\u8BBE\u7F6E\u4E00\u4E2A\u53D8\u91CF\u6765\u4FDD\u5B58\u662F\u5426\u9700\u8981\u79FB\u52A8\u7684\u72B6\u6001\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  //...
  outer: {
  // ...
  }

  // \u8FB9\u754C\u60C5\u51B5\u7684\u5224\u65AD
  if (j &gt; prevEnd &amp;&amp; j &lt;= nextEnd) {
    // ...
  } else if (j &gt; nextEnd &amp;&amp; j &lt;= prevEnd) {
    // ...
  } else {
    let prevStart = j,
      nextStart = j,
      nextLeft = nextEnd - nextStart + 1,     // \u65B0\u5217\u8868\u4E2D\u5269\u4F59\u7684\u8282\u70B9\u957F\u5EA6
      source = new Array(nextLeft).fill(-1),  // \u521B\u5EFA\u6570\u7EC4\uFF0C\u586B\u6EE1-1
      nextIndexMap = {},                      // \u65B0\u5217\u8868\u8282\u70B9\u4E0Eindex\u7684\u6620\u5C04
      patched = 0,
      move = false,                           // \u662F\u5426\u79FB\u52A8
      lastIndex = 0;                          // \u8BB0\u5F55\u4E0A\u4E00\u6B21\u7684\u4F4D\u7F6E

    // \u4FDD\u5B58\u6620\u5C04\u5173\u7CFB
    for (let i = nextStart; i &lt;= nextEnd; i++) {
      let key = nextChildren[i].key
      nextIndexMap[key] = i
    }

    // \u53BB\u65E7\u5217\u8868\u627E\u4F4D\u7F6E
    for (let i = prevStart; i &lt;= prevEnd; i++) {
      let prevNode = prevChildren[i],
      	prevKey = prevNode.key,
        nextIndex = nextIndexMap[prevKey];
      // \u65B0\u5217\u8868\u4E2D\u6CA1\u6709\u8BE5\u8282\u70B9 \u6216\u8005 \u5DF2\u7ECF\u66F4\u65B0\u4E86\u5168\u90E8\u7684\u65B0\u8282\u70B9\uFF0C\u76F4\u63A5\u5220\u9664\u65E7\u8282\u70B9
      if (nextIndex === undefind || patched &gt;= nextLeft) {
        parent.removeChild(prevNode.el)
        continue
      }
      // \u627E\u5230\u5BF9\u5E94\u7684\u8282\u70B9
      let nextNode = nextChildren[nextIndex];
      patch(prevNode, nextNode, parent);
      // \u7ED9source\u8D4B\u503C
      source[nextIndex - nextStart] = i
      patched++

      // \u9012\u589E\u65B9\u6CD5\uFF0C\u5224\u65AD\u662F\u5426\u9700\u8981\u79FB\u52A8
      if (nextIndex &lt; lastIndex) {
      	move = false
      } else {
      	lastIndex = nextIndex
      }
    }

    if (move) {

    // \u9700\u8981\u79FB\u52A8
    } else {

    //\u4E0D\u9700\u8981\u79FB\u52A8
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3. DOM\u5982\u4F55\u79FB\u52A8</p><p>\u5224\u65AD\u5B8C\u662F\u5426\u9700\u8981\u79FB\u52A8\u540E\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u8003\u8651\u5982\u4F55\u79FB\u52A8\u4E86\u3002\u4E00\u65E6\u9700\u8981\u8FDB\u884CDOM\u79FB\u52A8\uFF0C\u6211\u4EEC\u9996\u5148\u8981\u505A\u7684\u5C31\u662F\u627E\u5230<code>source</code>\u7684\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  //...
  if (move) {
	const seq = lis(source); // [0, 1]
  // \u9700\u8981\u79FB\u52A8
  } else {

  //\u4E0D\u9700\u8981\u79FB\u52A8
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4EC0\u4E48\u662F\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\uFF1A\u7ED9\u5B9A\u4E00\u4E2A\u6570\u503C\u5E8F\u5217\uFF0C\u627E\u5230\u5B83\u7684\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u5E76\u4E14\u5B50\u5E8F\u5217\u4E2D\u7684\u503C\u662F\u9012\u589E\u7684\uFF0C\u5B50\u5E8F\u5217\u4E2D\u7684\u5143\u7D20\u5728\u539F\u5E8F\u5217\u4E2D\u4E0D\u4E00\u5B9A\u8FDE\u7EED\u3002</p><p>\u4F8B\u5982\u7ED9\u5B9A\u6570\u503C\u5E8F\u5217\u4E3A\uFF1A[ 0, 8, 4, 12 ]\u3002</p><p>\u90A3\u4E48\u5B83\u7684\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u5C31\u662F\uFF1A[0, 8, 12]\u3002</p><p>\u5F53\u7136\u7B54\u6848\u53EF\u80FD\u6709\u591A\u79CD\u60C5\u51B5\uFF0C\u4F8B\u5982\uFF1A[0, 4, 12] \u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p></blockquote><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u8C03\u7528<code>lis</code>\xA0\u51FD\u6570\u6C42\u51FA\u6570\u7EC4<code>source</code>\u7684\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u4E3A<code>[ 0, 1 ]</code>\u3002\u6211\u4EEC\u77E5\u9053 source \u6570\u7EC4\u7684\u503C\u4E3A\xA0<code>[2, 3, 1, -1]</code>\uFF0C\u5F88\u663E\u7136\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u5E94\u8BE5\u662F<code>[ 2, 3 ]</code>\uFF0C\u4F46\u4E3A\u4EC0\u4E48\u8BA1\u7B97\u51FA\u7684\u7ED3\u679C\u662F<code>[ 0, 1 ]</code>\u5462\uFF1F\u5176\u5B9E<code>[ 0, 1 ]</code>\u4EE3\u8868\u7684\u662F\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u4E2D\u7684\u5404\u4E2A\u5143\u7D20\u5728<code>source</code>\u6570\u7EC4\u4E2D\u7684\u4F4D\u7F6E\u7D22\u5F15\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="`+M+`" alt=""></p><p>\u6211\u4EEC\u6839\u636E<code>source</code>\uFF0C\u5BF9\u65B0\u5217\u8868\u8FDB\u884C\u91CD\u65B0\u7F16\u53F7\uFF0C\u5E76\u627E\u51FA\u4E86<code>\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217</code>\u3002</p><p>\u6211\u4EEC\u4ECE\u540E\u5411\u524D\u8FDB\u884C\u904D\u5386<code>source</code>\u6BCF\u4E00\u9879\u3002\u6B64\u65F6\u4F1A\u51FA\u73B0\u4E09\u79CD\u60C5\u51B5\uFF1A</p><ol><li>\u5F53\u524D\u7684\u503C\u4E3A<code>-1</code>\uFF0C\u8FD9\u8BF4\u660E\u8BE5\u8282\u70B9\u662F\u5168\u65B0\u7684\u8282\u70B9\uFF0C\u53C8\u7531\u4E8E\u6211\u4EEC\u662F\u4ECE\u540E\u5411\u524D\u904D\u5386\uFF0C\u6211\u4EEC\u76F4\u63A5\u521B\u5EFA\u597DDOM\u8282\u70B9\u63D2\u5165\u5230\u961F\u5C3E\u5C31\u53EF\u4EE5\u4E86\u3002</li><li>\u5F53\u524D\u7684\u7D22\u5F15\u4E3A<code>\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217</code>\u4E2D\u7684\u503C\uFF0C\u4E5F\u5C31\u662F<code>i === seq[j]</code>\uFF0C\u8FD9\u8BF4\u8BF4\u660E\u8BE5\u8282\u70B9\u4E0D\u9700\u8981\u79FB\u52A8</li><li>\u5F53\u524D\u7684\u7D22\u5F15\u4E0D\u662F<code>\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217</code>\u4E2D\u7684\u503C\uFF0C\u90A3\u4E48\u8BF4\u660E\u8BE5DOM\u8282\u70B9\u9700\u8981\u79FB\u52A8\uFF0C\u8FD9\u91CC\u4E5F\u5F88\u597D\u7406\u89E3\uFF0C\u6211\u4EEC\u4E5F\u662F\u76F4\u63A5\u5C06DOM\u8282\u70B9\u63D2\u5165\u5230\u961F\u5C3E\u5C31\u53EF\u4EE5\u4E86\uFF0C\u56E0\u4E3A\u961F\u5C3E\u662F\u6392\u597D\u5E8F\u7684</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  //...
  if (move) {
   // \u9700\u8981\u79FB\u52A8
	const seq = lis(source); // [0, 1]
    let j = seq.length - 1;  // \u6700\u957F\u5B50\u5E8F\u5217\u7684\u6307\u9488
    // \u4ECE\u540E\u5411\u524D\u904D\u5386
    for (let i = nextLeft - 1\uFF1B i &gt;= 0; i--) {
      let pos = nextStart + i, // \u5BF9\u5E94\u65B0\u5217\u8868\u7684index
        nextNode = nextChildren[pos],	// \u627E\u5230vnode
      	nextPos = pos + 1\uFF0C    // \u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E\uFF0C\u7528\u4E8E\u79FB\u52A8DOM
        refNode = nextPos &gt;= nextChildren.length ? null : nextChildren[nextPos].el, //DOM\u8282\u70B9
        cur = source[i];  // \u5F53\u524Dsource\u7684\u503C\uFF0C\u7528\u6765\u5224\u65AD\u8282\u70B9\u662F\u5426\u9700\u8981\u79FB\u52A8

      if (cur === -1) {
        // \u60C5\u51B51\uFF0C\u8BE5\u8282\u70B9\u662F\u5168\u65B0\u8282\u70B9
      	mount(nextNode, parent, refNode)
      } else if (cur === seq[j]) {
        // \u60C5\u51B52\uFF0C\u662F\u9012\u589E\u5B50\u5E8F\u5217\uFF0C\u8BE5\u8282\u70B9\u4E0D\u9700\u8981\u79FB\u52A8
        // \u8BA9j\u6307\u5411\u4E0B\u4E00\u4E2A
        j--
      } else {
        // \u60C5\u51B53\uFF0C\u4E0D\u662F\u9012\u589E\u5B50\u5E8F\u5217\uFF0C\u8BE5\u8282\u70B9\u9700\u8981\u79FB\u52A8
        parent.insetBefore(nextNode.el, refNode)
      }
    }

  } else {
  //\u4E0D\u9700\u8981\u79FB\u52A8

  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u5B8C\u4E86\u9700\u8981\u79FB\u52A8\u7684\u60C5\u51B5\uFF0C\u518D\u8BF4\u8BF4\u4E0D\u9700\u8981\u79FB\u52A8\u7684\u60C5\u51B5\u3002\u5982\u679C\u4E0D\u9700\u8981\u79FB\u52A8\u7684\u8BDD\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5224\u65AD\u662F\u5426\u6709\u5168\u65B0\u7684\u8282\u70B9\u7ED9\u4ED6\u6DFB\u52A0\u8FDB\u53BB\u5C31\u53EF\u4EE5\u4E86\u3002\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function vue3Diff(prevChildren, nextChildren, parent) {
  //...
  if (move) {
	const seq = lis(source); // [0, 1]
    let j = seq.length - 1;  // \u6700\u957F\u5B50\u5E8F\u5217\u7684\u6307\u9488
    // \u4ECE\u540E\u5411\u524D\u904D\u5386
    for (let i = nextLeft - 1\uFF1B i &gt;= 0; i--) {
      let pos = nextStart + i, // \u5BF9\u5E94\u65B0\u5217\u8868\u7684index
        nextNode = nextChildren[pos],	// \u627E\u5230vnode
      	nextPos = pos + 1\uFF0C    // \u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E\uFF0C\u7528\u4E8E\u79FB\u52A8DOM
        refNode = nextPos &gt;= nextChildren.length ? null : nextChildren[nextPos].el, //DOM\u8282\u70B9
        cur = source[i];  // \u5F53\u524Dsource\u7684\u503C\uFF0C\u7528\u6765\u5224\u65AD\u8282\u70B9\u662F\u5426\u9700\u8981\u79FB\u52A8

      if (cur === -1) {
        // \u60C5\u51B51\uFF0C\u8BE5\u8282\u70B9\u662F\u5168\u65B0\u8282\u70B9
      	mount(nextNode, parent, refNode)
      } else if (cur === seq[j]) {
        // \u60C5\u51B52\uFF0C\u662F\u9012\u589E\u5B50\u5E8F\u5217\uFF0C\u8BE5\u8282\u70B9\u4E0D\u9700\u8981\u79FB\u52A8
        // \u8BA9j\u6307\u5411\u4E0B\u4E00\u4E2A
        j--
      } else {
        // \u60C5\u51B53\uFF0C\u4E0D\u662F\u9012\u589E\u5B50\u5E8F\u5217\uFF0C\u8BE5\u8282\u70B9\u9700\u8981\u79FB\u52A8
        parent.insetBefore(nextNode.el, refNode)
      }
    }
  } else {
    //\u4E0D\u9700\u8981\u79FB\u52A8
    for (let i = nextLeft - 1\uFF1B i &gt;= 0; i--) {
      let cur = source[i];  // \u5F53\u524Dsource\u7684\u503C\uFF0C\u7528\u6765\u5224\u65AD\u8282\u70B9\u662F\u5426\u9700\u8981\u79FB\u52A8

      if (cur === -1) {
       let pos = nextStart + i, // \u5BF9\u5E94\u65B0\u5217\u8868\u7684index
          nextNode = nextChildren[pos],	// \u627E\u5230vnode
          nextPos = pos + 1\uFF0C    // \u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E\uFF0C\u7528\u4E8E\u79FB\u52A8DOM
          refNode = nextPos &gt;= nextChildren.length ? null : nextChildren[nextPos].el, //DOM\u8282\u70B9
      	mount(nextNode, parent, refNode)
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64<code>vue3.0</code>\u7684diff\u5B8C\u6210\u3002</p><p>4. \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217</p><p>\u6211\u4EEC\u4EE5\u8BE5\u6570\u7EC4\u4E3A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[10,9,2,5,3,8,7,13]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u52A8\u6001\u89C4\u5212\u7684\u601D\u60F3\u8003\u8651\u8FD9\u4E2A\u95EE\u9898\u3002\u52A8\u6001\u89C4\u5212\u7684\u601D\u60F3\u662F\u5C06\u4E00\u4E2A\u5927\u7684\u95EE\u9898\u5206\u89E3\u6210\u591A\u4E2A\u5C0F\u7684\u5B50\u95EE\u9898\uFF0C\u5E76\u5C1D\u8BD5\u5F97\u5230\u8FD9\u4E9B\u5B50\u95EE\u9898\u7684\u6700\u4F18\u89E3\uFF0C\u5B50\u95EE\u9898\u7684\u6700\u4F18\u89E3\u6709\u53EF\u80FD\u4F1A\u5728\u66F4\u5927\u7684\u95EE\u9898\u4E2D\u88AB\u5229\u7528\uFF0C\u8FD9\u6837\u901A\u8FC7\u5C0F\u95EE\u9898\u7684\u6700\u4F18\u89E3\u6700\u7EC8\u6C42\u5F97\u5927\u95EE\u9898\u7684\u6700\u4F18\u89E3\u3002</p><p>\u6211\u4EEC\u5148\u5047\u8BBE\u53EA\u6709\u4E00\u4E2A\u503C\u7684\u6570\u7EC4<code>[13]</code>\uFF0C\u90A3\u4E48\u8BE5\u6570\u7EC4\u7684\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u5C31\u662F<code>[13]</code>\u81EA\u5DF1\u672C\u8EAB\uFF0C\u5176\u957F\u5EA6\u4E3A<code>1</code>\u3002\u90A3\u4E48\u6211\u4EEC\u8BA4\u4E3A\u6BCF\u4E00\u9879\u7684\u9012\u589E\u5E8F\u5217\u7684\u957F\u5EA6\u503C\u5747\u4E3A1</p><p>\u90A3\u4E48\u6211\u4EEC\u8FD9\u6B21\u7ED9\u6570\u7EC4\u589E\u52A0\u4E00\u4E2A\u503C<code>[7, 13]</code>, \u7531\u4E8E<code>7 &lt; 13</code>\uFF0C\u6240\u4EE5\u8BE5\u6570\u7EC4\u7684\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u662F<code>[7, 13]</code>\uFF0C\u90A3\u4E48\u8BE5\u957F\u5EA6\u4E3A<code>2</code>\u3002\u90A3\u4E48\u6211\u4EEC\u662F\u5426\u53EF\u4EE5\u8BA4\u4E3A\uFF0C\u5F53<code>[7]</code>\u5C0F\u4E8E<code>[13]</code>\u65F6\uFF0C\u4EE5<code>[7]</code>\u4E3A\u5934\u7684\u9012\u589E\u5E8F\u5217\u7684\u957F\u5EA6\u662F\uFF0C<code>[7]</code>\u7684\u957F\u5EA6\u548C<code>[13]</code>\u7684\u957F\u5EA6\u7684\u548C\uFF0C\u5373<code>1 + 1 = 2</code>\u3002</p><p>ok\uFF0C\u6211\u4EEC\u57FA\u4E8E\u8FD9\u79CD\u601D\u60F3\u6765\u7ED9\u8BA1\u7B97\u4E00\u4E0B\u8BE5\u6570\u7EC4\u3002\u6211\u4EEC\u5148\u5C06\u6BCF\u4E2A\u503C\u7684\u521D\u59CB\u8D4B\u503C\u4E3A<code>1</code></p><p><img src="`+O+'" alt=""></p><p>\u9996\u5148\xA0<code>7 &lt; 13</code>\xA0\u90A3\u4E48<code>7</code>\u5BF9\u5E94\u7684\u957F\u5EA6\u5C31\u662F<code>13</code>\u7684\u957F\u5EA6\u518D\u52A01\uFF0C<code>1 + 1 = 2</code></p><p><img src="'+q+'" alt=""></p><p>\u7EE7\u7EED\uFF0C\u6211\u4EEC\u5BF9\u6BD4<code>8</code>\u3002\u6211\u4EEC\u9996\u5148\u548C<code>7</code>\u6BD4\uFF0C\u53D1\u73B0\u4E0D\u6EE1\u8DB3\u9012\u589E\uFF0C\u4F46\u662F\u6CA1\u5173\u7CFB\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u548C<code>13</code>\u6BD4\uFF0C<code>8 &lt; 13</code>\u6EE1\u8DB3\u9012\u589E\uFF0C\u90A3\u4E48<code>8</code>\u7684\u957F\u5EA6\u4E5F\u662F<code>13</code>\u7684\u957F\u5EA6\u5728\u52A0\u4E00\uFF0C\u957F\u5EA6\u4E3A<code>2</code></p><p><img src="'+P+'" alt=""></p><p>\u6211\u4EEC\u518D\u5BF9\u6BD4<code>3</code>\uFF0C\u6211\u4EEC\u5148\u8BA9\u5176\u4E0E<code>8</code>\u8FDB\u884C\u5BF9\u6BD4\uFF0C<code>3 &lt; 8</code>\uFF0C\u90A3\u4E48<code>3</code>\u7684\u957F\u5EA6\u662F<code>8</code>\u7684\u957F\u5EA6\u52A0\u4E00\uFF0C\u6B64\u65F6<code>3</code>\u7684\u957F\u5EA6\u4E3A<code>3</code>\u3002\u4F46\u662F\u8FD8\u6CA1\u7ED3\u675F\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u8BA9<code>3</code>\u4E0E<code>7</code>\u5BF9\u6BD4\u3002\u540C\u6837<code>3 &lt; 7</code>\uFF0C\u6B64\u65F6\u6211\u4EEC\u9700\u8981\u5728\u8BA1\u7B97\u51FA\u4E00\u4E2A\u957F\u5EA6\u662F<code>7</code>\u7684\u957F\u5EA6\u52A0\u4E00\u540C\u6837\u662F<code>3</code>\uFF0C\u6211\u4EEC\u5BF9\u6BD4\u4E24\u4E2A\u957F\u5EA6\uFF0C\u5982\u679C\u539F\u672C\u7684\u957F\u5EA6\u6CA1\u6709\u672C\u6B21\u8BA1\u7B97\u51FA\u7684\u957F\u5EA6\u503C\u5927\u7684\u8BDD\uFF0C\u6211\u4EEC\u8FDB\u884C\u66FF\u6362\uFF0C\u53CD\u4E4B\u5219\u6211\u4EEC\u4FDD\u7559\u539F\u672C\u7684\u503C\u3002\u7531\u4E8E<code>3 === 3</code>\uFF0C\u6211\u4EEC\u9009\u62E9\u4E0D\u66FF\u6362\u3002\u6700\u540E\uFF0C\u6211\u4EEC\u8BA9<code>3</code>\u4E0E<code>13</code>\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u540C\u6837\u7684<code>3 &lt; 13</code>\uFF0C\u6B64\u65F6\u8BA1\u7B97\u51FA\u7684\u957F\u5EA6\u4E3A<code>2</code>\uFF0C\u6BD4\u539F\u672C\u7684\u957F\u5EA6<code>3</code>\u8981\u5C0F\uFF0C\u6211\u4EEC\u9009\u62E9\u4FDD\u7559\u539F\u672C\u7684\u503C\u3002</p><p><img src="'+V+'" alt=""></p><p>\u4E4B\u540E\u7684\u8BA1\u7B97\u4F9D\u6B21\u7C7B\u63A8\uFF0C\u6700\u540E\u7684\u7ED3\u679C\u662F\u8FD9\u6837\u7684</p><p><img src="'+L+`" alt=""></p><p>\u6211\u4EEC\u4ECE\u4E2D\u53D6\u6700\u5927\u7684\u503C<code>4</code>\uFF0C\u8BE5\u503C\u4EE3\u8868\u7684\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u7684\u4E2A\u6570\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function lis(arr) {
  let len = arr.length,
    dp = new Array(len).fill(1); // \u7528\u4E8E\u4FDD\u5B58\u957F\u5EA6
  for (let i = len - 1; i &gt;= 0; i--) {
    let cur = arr[i]
    for(let j = i + 1; j &lt; len; j++) {
      let next = arr[j]
      // \u5982\u679C\u662F\u9012\u589E \u53D6\u66F4\u5927\u7684\u957F\u5EA6\u503C
      if (cur &lt; next) dp[i] = Math.max(dp[j]+1, dp[i])
    }
  }
  return Math.max(...dp)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\u4E3A\u6B62\uFF0C\u6211\u4EEC\u8BB2\u5B8C\u4E86\u57FA\u7840\u7684\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u3002\u7136\u800C\u5728<code>vue3.0</code>\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u7684\u662F\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u5728\u539F\u672C\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15\u3002\u6240\u4EE5\u6211\u4EEC\u8FD8\u9700\u8981\u5728\u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4\u7528\u4E8E\u4FDD\u5B58\u6BCF\u4E2A\u503C\u7684\u6700\u957F\u5B50\u5E8F\u5217\u6240\u5BF9\u5E94\u5728\u6570\u7EC4\u4E2D\u7684<code>index</code>\u3002\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function lis(arr) {
  let len = arr.length,
    res = [],
    dp = new Array(len).fill(1);
  // \u5B58\u9ED8\u8BA4index
  for (let i = 0; i &lt; len; i++) {
    res.push([i])
  }
  for (let i = len - 1; i &gt;= 0; i--) {
    let cur = arr[i],
      nextIndex = undefined;
    // \u5982\u679C\u4E3A-1 \u76F4\u63A5\u8DF3\u8FC7\uFF0C\u56E0\u4E3A-1\u4EE3\u8868\u7684\u662F\u65B0\u8282\u70B9\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u6392\u5E8F
    if (cur === -1) continue
    for (let j = i + 1; j &lt; len; j++) {
      let next = arr[j]
      // \u6EE1\u8DB3\u9012\u589E\u6761\u4EF6
      if (cur &lt; next) {
        let max = dp[j] + 1
        // \u5F53\u524D\u957F\u5EA6\u662F\u5426\u6BD4\u539F\u672C\u7684\u957F\u5EA6\u8981\u5927
        if (max &gt; dp[i]) {
          dp[i] = max
          nextIndex = j
        }
      }
    }
    // \u8BB0\u5F55\u6EE1\u8DB3\u6761\u4EF6\u7684\u503C\uFF0C\u5BF9\u5E94\u5728\u6570\u7EC4\u4E2D\u7684index
    if (nextIndex !== undefined) res[i].push(...res[nextIndex])
  }
  let index = dp.reduce((prev, cur, i, arr) =&gt; cur &gt; arr[prev] ? i : prev, dp.length - 1)
  // \u8FD4\u56DE\u6700\u957F\u7684\u9012\u589E\u5B50\u5E8F\u5217\u7684index
  return result[index]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61);function be(pe,xe){const d=c("ExternalLinkIcon");return v(),r("div",null,[A,n("p",null,[R,K,T,U,W,J,H,$,F,G,z,Q,X,n("a",Y,[Z,l(d)]),ee]),ne,n("p",null,[ie,de,le,se,n("a",ve,[re,l(d)]),ce,ae,te,oe,ue]),me])}var fe=s(B,[["render",be],["__file","\u6846\u67B6\u901A\u8BC6.html.vue"]]);export{fe as default};
