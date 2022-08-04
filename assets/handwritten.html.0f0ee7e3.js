import{_ as d,o as r,c as a,a as n,d as l,b as i,e,r as v}from"./app.12353158.js";var c="data:image/png;base64,",t="data:image/png;base64,",u="data:image/png;base64,",m="data:image/png;base64,",b="data:image/png;base64,",o="data:image/png;base64,",p="data:image/png;base64,",g="data:image/png;base64,",h="data:image/png;base64,",x="data:image/png;base64,";const f={},y=i(`<h1 id="handwritten" tabindex="-1"><a class="header-anchor" href="#handwritten" aria-hidden="true">#</a> Handwritten</h1><blockquote><p>\u9762\u8BD5\u9AD8\u9891\u624B\u5199\u9898\u76EE</p></blockquote><p>\u5EFA\u8BAE\u4F18\u5148\u638C\u63E1\uFF1A</p><ul><li><code>instanceof</code>\xA0- \u8003\u5BDF\u5BF9\u539F\u578B\u94FE\u7684\u7406\u89E3</li><li><code>new</code>\xA0- \u5BF9\u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u8FC7\u7A0B\u7684\u7406\u89E3</li><li><code>call/apply/bind</code>\xA0- \u5BF9<code>this</code>\u6307\u5411\u7684\u7406\u89E3</li><li>\u624B\u5199promise - \u5BF9\u5F02\u6B65\u7684\u7406\u89E3</li><li>\u624B\u5199\u539F\u751Fajax - \u5BF9ajax\u539F\u7406\u548Chttp\u8BF7\u6C42\u65B9\u5F0F\u7684\u7406\u89E3\uFF0C\u91CD\u70B9\u662Fget\u548Cpost\u8BF7\u6C42\u7684\u5B9E\u73B0</li></ul><h2 id="_1-\u5B9E\u73B0\u9632\u6296\u51FD\u6570-debounce" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9E\u73B0\u9632\u6296\u51FD\u6570-debounce" aria-hidden="true">#</a> 1 \u5B9E\u73B0\u9632\u6296\u51FD\u6570\uFF08debounce\uFF09</h2><blockquote><p>\u9632\u6296\u51FD\u6570\u539F\u7406\uFF1A\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1n\u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9n\u79D2\u5185\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6</p></blockquote><p>\u9632\u6296\u52A8\u548C\u8282\u6D41\u672C\u8D28\u662F\u4E0D\u4E00\u6837\u7684\u3002\u9632\u6296\u52A8\u662F\u5C06\u591A\u6B21\u6267\u884C\u53D8\u4E3A\u6700\u540E\u4E00\u6B21\u6267\u884C\uFF0C\u8282\u6D41\u662F\u5C06\u591A\u6B21\u6267\u884C\u53D8\u6210\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C</p><blockquote><p>eg. \u50CF\u4EFF\u767E\u5EA6\u641C\u7D22\uFF0C\u5C31\u5E94\u8BE5\u7528\u9632\u6296\uFF0C\u5F53\u6211\u8FDE\u7EED\u4E0D\u65AD\u8F93\u5165\u65F6\uFF0C\u4E0D\u4F1A\u53D1\u9001\u8BF7\u6C42\uFF1B\u5F53\u6211\u4E00\u6BB5\u65F6\u95F4\u5185\u4E0D\u8F93\u5165\u4E86\uFF0C\u624D\u4F1A\u53D1\u9001\u4E00\u6B21\u8BF7\u6C42\uFF1B\u5982\u679C\u5C0F\u4E8E\u8FD9\u6BB5\u65F6\u95F4\u7EE7\u7EED\u8F93\u5165\u7684\u8BDD\uFF0C\u65F6\u95F4\u4F1A\u91CD\u65B0\u8BA1\u7B97\uFF0C\u4E5F\u4E0D\u4F1A\u53D1\u9001\u8BF7\u6C42\u3002</p></blockquote><p>\u624B\u5199\u7B80\u5316\u7248:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// func\u662F\u7528\u6237\u4F20\u5165\u9700\u8981\u9632\u6296\u7684\u51FD\u6570
// wait\u662F\u7B49\u5F85\u65F6\u95F4
const debounce = (func, wait = 50) =&gt; {
  // \u7F13\u5B58\u4E00\u4E2A\u5B9A\u65F6\u5668id
  let timer = 0
  // \u8FD9\u91CC\u8FD4\u56DE\u7684\u51FD\u6570\u662F\u6BCF\u6B21\u7528\u6237\u5B9E\u9645\u8C03\u7528\u7684\u9632\u6296\u51FD\u6570
  // \u5982\u679C\u5DF2\u7ECF\u8BBE\u5B9A\u8FC7\u5B9A\u65F6\u5668\u4E86\u5C31\u6E05\u7A7A\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668
  // \u5F00\u59CB\u4E00\u4E2A\u65B0\u7684\u5B9A\u65F6\u5668\uFF0C\u5EF6\u8FDF\u6267\u884C\u7528\u6237\u4F20\u5165\u7684\u65B9\u6CD5
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() =&gt; {
      func.apply(this, args)
    }, wait)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9002\u7528\u573A\u666F\uFF1A</p><blockquote><p>\u6309\u94AE\u63D0\u4EA4\u573A\u666F\uFF1A\u9632\u6B62\u591A\u6B21\u63D0\u4EA4\u6309\u94AE\uFF0C\u53EA\u6267\u884C\u6700\u540E\u63D0\u4EA4\u7684\u4E00\u6B21 \u670D\u52A1\u7AEF\u9A8C\u8BC1\u573A\u666F\uFF1A\u8868\u5355\u9A8C\u8BC1\u9700\u8981\u670D\u52A1\u7AEF\u914D\u5408\uFF0C\u53EA\u6267\u884C\u4E00\u6BB5\u8FDE\u7EED\u7684\u8F93\u5165\u4E8B\u4EF6\u7684\u6700\u540E\u4E00\u6B21\uFF0C\u8FD8\u6709\u641C\u7D22\u8054\u60F3\u8BCD\u529F\u80FD\u7C7B\u4F3C</p></blockquote><h2 id="_2-\u5B9E\u73B0\u8282\u6D41\u51FD\u6570-throttle" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u8282\u6D41\u51FD\u6570-throttle" aria-hidden="true">#</a> 2 \u5B9E\u73B0\u8282\u6D41\u51FD\u6570\uFF08throttle\uFF09</h2><blockquote><p>\u8282\u6D41\u51FD\u6570\u539F\u7406:\u89C4\u5B9A\u5728\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\uFF0C\u53EA\u80FD\u89E6\u53D1\u4E00\u6B21\u51FD\u6570\u3002\u5982\u679C\u8FD9\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\u89E6\u53D1\u591A\u6B21\u51FD\u6570\uFF0C\u53EA\u6709\u4E00\u6B21\u751F\u6548</p></blockquote><blockquote><p>\u4F8B:\uFF08\u8FDE\u7EED\u4E0D\u65AD\u52A8\u90FD\u9700\u8981\u8C03\u7528\u65F6\u7528\uFF0C\u8BBE\u4E00\u65F6\u95F4\u95F4\u9694\uFF09\uFF0C\u50CFdom\u7684\u62D6\u62FD\uFF0C\u5982\u679C\u7528\u6D88\u6296\u7684\u8BDD\uFF0C\u5C31\u4F1A\u51FA\u73B0\u5361\u987F\u7684\u611F\u89C9\uFF0C\u56E0\u4E3A\u53EA\u5728\u505C\u6B62\u7684\u65F6\u5019\u6267\u884C\u4E86\u4E00\u6B21\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u5E94\u8BE5\u7528\u8282\u6D41\uFF0C\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\u591A\u6B21\u6267\u884C\uFF0C\u4F1A\u6D41\u7545\u5F88\u591A</p></blockquote><p>\u624B\u5199\u7B80\u7248</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// func\u662F\u7528\u6237\u4F20\u5165\u9700\u8981\u9632\u6296\u7684\u51FD\u6570
// wait\u662F\u7B49\u5F85\u65F6\u95F4
const throttle = (func, wait = 50) =&gt; {
  // \u4E0A\u4E00\u6B21\u6267\u884C\u8BE5\u51FD\u6570\u7684\u65F6\u95F4
  let lastTime = 0
  return function(...args) {
    // \u5F53\u524D\u65F6\u95F4
    let now = +new Date()
    // \u5C06\u5F53\u524D\u65F6\u95F4\u548C\u4E0A\u4E00\u6B21\u6267\u884C\u51FD\u6570\u65F6\u95F4\u5BF9\u6BD4
    // \u5982\u679C\u5DEE\u503C\u5927\u4E8E\u8BBE\u7F6E\u7684\u7B49\u5F85\u65F6\u95F4\u5C31\u6267\u884C\u51FD\u6570
    if (now - lastTime &gt; wait) {
      lastTime = now
      func.apply(this, args)
    }
  }
}

setInterval(
  throttle(() =&gt; {
    console.log(1)
  }, 500),
  1
)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9002\u7528\u573A\u666F\uFF1A</p><ul><li>\u62D6\u62FD\u573A\u666F\uFF1A\u56FA\u5B9A\u65F6\u95F4\u5185\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u9632\u6B62\u8D85\u9AD8\u9891\u6B21\u89E6\u53D1\u4F4D\u7F6E\u53D8\u52A8</li><li>\u7F29\u653E\u573A\u666F\uFF1A\u76D1\u63A7\u6D4F\u89C8\u5668<code>resize</code></li><li>\u52A8\u753B\u573A\u666F\uFF1A\u907F\u514D\u77ED\u65F6\u95F4\u5185\u591A\u6B21\u89E6\u53D1\u52A8\u753B\u5F15\u8D77\u6027\u80FD\u95EE\u9898</li></ul><h2 id="_3-\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> 3 \u5B9E\u73B0\u4E00\u4E2A\u6DF1\u62F7\u8D1D</h2><h3 id="\u7B80\u6D01\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6D01\u7248\u672C" aria-hidden="true">#</a> \u7B80\u6D01\u7248\u672C</h3><p>\u7B80\u5355\u7248\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const newObj = JSON.parse(JSON.stringify(oldObj));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C40\u9650\u6027\uFF1A</p><ul><li>\u4ED6\u65E0\u6CD5\u5B9E\u73B0\u5BF9\u51FD\u6570 \u3001RegExp\u7B49\u7279\u6B8A\u5BF9\u8C61\u7684\u514B\u9686</li><li>\u4F1A\u629B\u5F03\u5BF9\u8C61\u7684constructor,\u6240\u6709\u7684\u6784\u9020\u51FD\u6570\u4F1A\u6307\u5411Object</li><li>\u5BF9\u8C61\u6709\u5FAA\u73AF\u5F15\u7528,\u4F1A\u62A5\u9519</li></ul><p>\u9762\u8BD5\u591F\u7528\u7248</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function deepClone(obj) {
    // \u5982\u679C\u662F \u503C\u7C7B\u578B \u6216 null\uFF0C\u5219\u76F4\u63A5return
    if(typeof obj !== &#39;object&#39; || obj === null) {
        return obj
    }

    // \u5B9A\u4E49\u7ED3\u679C\u5BF9\u8C61
    let copy = {}

    // \u5982\u679C\u5BF9\u8C61\u662F\u6570\u7EC4\uFF0C\u5219\u5B9A\u4E49\u7ED3\u679C\u6570\u7EC4
    if(obj.constructor === Array) {
        copy = []
    }

    // \u904D\u5386\u5BF9\u8C61\u7684key
    for(let key in obj) {
        // \u5982\u679Ckey\u662F\u5BF9\u8C61\u7684\u81EA\u6709\u5C5E\u6027
        if(obj.hasOwnProperty(key)) {
            // \u9012\u5F52\u8C03\u7528\u6DF1\u62F7\u8D1D\u65B9\u6CD5
            copy[key] = deepClone(obj[key])
        }
    }

    return copy
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8C03\u7528\u6DF1\u62F7\u8D1D\u65B9\u6CD5\uFF0C\u82E5\u5C5E\u6027\u4E3A\u503C\u7C7B\u578B\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF1B\u82E5\u5C5E\u6027\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u5219\u9012\u5F52\u904D\u5386\u3002\u8FD9\u5C31\u662F\u6211\u4EEC\u5728\u89E3\u8FD9\u4E00\u7C7B\u9898\u65F6\u7684\u6838\u5FC3\u7684\u65B9\u6CD5\u3002</p></blockquote><p>\u8FDB\u9636\u7248</p><ul><li>\u89E3\u51B3\u62F7\u8D1D\u5FAA\u73AF\u5F15\u7528\u95EE\u9898</li><li>\u89E3\u51B3\u62F7\u8D1D\u5BF9\u5E94\u539F\u578B\u95EE\u9898</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D45\u62F7\u8D1D Object.assign ... \u5982\u679C\u662F\u591A\u5C42\u7684\u8BDD \u5C31\u662F\u6D45\u62F7\u8D1D \u4E00\u5C42\u5C31\u662F\u6DF1\u62F7\u8D1D

let obj = {name:&#39;zf&#39;,age:{n:100},a:undefined,a:function(){},reg:/\\d+/}
let obj1 = Object.assign(obj);
// obj1.age.n = 200;
// console.log(JSON.parse(JSON.stringify(obj)));

// \u9012\u5F52\u62F7\u8D1D (\u7C7B\u578B\u5224\u65AD)
function deepClone(value,hash = new WeakMap){ // \u5F31\u5F15\u7528\uFF0C\u4E0D\u7528map\uFF0CweakMap\u66F4\u5408\u9002\u4E00\u70B9
  // null \u548C undefiend \u662F\u4E0D\u9700\u8981\u62F7\u8D1D\u7684
  if(value == null){ return value;}
  if(value instanceof RegExp){ return new RegExp(value) }
  if(value instanceof Date){ return new Date(value) }
  // \u51FD\u6570\u662F\u4E0D\u9700\u8981\u62F7\u8D1D
  if(typeof value != &#39;object&#39;) return value;
  let obj = new value.constructor(); // [] {}
  // \u8BF4\u660E\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B
  if(hash.get(value)){
    return hash.get(value)
  }
  hash.set(value,obj);
  for(let key in value){ // in \u4F1A\u904D\u5386\u5F53\u524D\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027 \u548C __proto__\u6307\u4EE3\u7684\u5C5E\u6027
    // \u8865\u62F7\u8D1D \u5BF9\u8C61\u7684__proto__\u4E0A\u7684\u5C5E\u6027
    if(value.hasOwnProperty(key)){
      // \u5982\u679C\u503C\u8FD8\u6709\u53EF\u80FD\u662F\u5BF9\u8C61 \u5C31\u7EE7\u7EED\u62F7\u8D1D
      obj[key] = deepClone(value[key],hash);
    }
  }
  return obj
  // \u533A\u5206\u5BF9\u8C61\u548C\u6570\u7EC4 Object.prototype.toString.call
}

// test
let o = {};
o.x = o;
let o1 = deepClone(o); // \u5982\u679C\u8FD9\u4E2A\u5BF9\u8C61\u62F7\u8D1D\u8FC7\u4E86 \u5C31\u8FD4\u56DE\u90A3\u4E2A\u62F7\u8D1D\u7684\u7ED3\u679C\u5C31\u53EF\u4EE5\u4E86
console.log(o1);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5B8C\u6574\u7684\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5B8C\u6574\u7684\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u5B9E\u73B0\u5B8C\u6574\u7684\u6DF1\u62F7\u8D1D</h3><p>1. \u7B80\u6613\u7248\u53CA\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JSON.parse(JSON.stringify());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F30\u8BA1\u8FD9\u4E2Aapi\u80FD\u8986\u76D6\u5927\u591A\u6570\u7684\u5E94\u7528\u573A\u666F\uFF0C\u6CA1\u9519\uFF0C\u8C08\u5230\u6DF1\u62F7\u8D1D\uFF0C\u6211\u7B2C\u4E00\u4E2A\u60F3\u5230\u7684\u4E5F\u662F\u5B83\u3002\u4F46\u662F\u5B9E\u9645\u4E0A\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u4E25\u683C\u7684\u573A\u666F\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F\u6709\u5DE8\u5927\u7684\u5751\u7684\u3002\u95EE\u9898\u5982\u4E0B\uFF1A</p></blockquote><ol><li>\u65E0\u6CD5\u89E3\u51B3<code>\u5FAA\u73AF\u5F15\u7528</code>\u7684\u95EE\u9898\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const a = {val:2};
a.target = a;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u62F7\u8D1D<code>a</code>\u4F1A\u51FA\u73B0\u7CFB\u7EDF\u6808\u6EA2\u51FA\uFF0C\u56E0\u4E3A\u51FA\u73B0\u4E86\u65E0\u9650\u9012\u5F52\u7684\u60C5\u51B5\u3002</p></blockquote><ol><li>\u65E0\u6CD5\u62F7\u8D1D\u4E00\u4E9B\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u8BF8\u5982\xA0<code>RegExp, Date, Set, Map</code>\u7B49</li><li>\u65E0\u6CD5\u62F7\u8D1D<code>\u51FD\u6570</code>(\u5212\u91CD\u70B9)\u3002</li></ol><p>\u56E0\u6B64\u8FD9\u4E2Aapi\u5148pass\u6389\uFF0C\u6211\u4EEC\u91CD\u65B0\u5199\u4E00\u4E2A\u6DF1\u62F7\u8D1D\uFF0C\u7B80\u6613\u7248\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const deepClone = (target) =&gt; {
  if (typeof target === &#39;object&#39; &amp;&amp; target !== null) {
    const cloneTarget = Array.isArray(target) ? []: {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
          cloneTarget[prop] = deepClone(target[prop]);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u4EE5\u521A\u521A\u53D1\u73B0\u7684\u4E09\u4E2A\u95EE\u9898\u4E3A\u5BFC\u5411\uFF0C\u4E00\u6B65\u6B65\u6765\u5B8C\u5584\u3001\u4F18\u5316\u6211\u4EEC\u7684\u6DF1\u62F7\u8D1D\u4EE3\u7801\u3002</p><p>2. \u89E3\u51B3\u5FAA\u73AF\u5F15\u7528</p><p>\u73B0\u5728\u95EE\u9898\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj = {val : 100};
obj.target = obj;

deepClone(obj);//\u62A5\u9519: RangeError: Maximum call stack size exceeded

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C31\u662F\u5FAA\u73AF\u5F15\u7528\u3002\u6211\u4EEC\u600E\u4E48\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F</p><blockquote><p>\u521B\u5EFA\u4E00\u4E2AMap\u3002\u8BB0\u5F55\u4E0B\u5DF2\u7ECF\u62F7\u8D1D\u8FC7\u7684\u5BF9\u8C61\uFF0C\u5982\u679C\u8BF4\u5DF2\u7ECF\u62F7\u8D1D\u8FC7\uFF0C\u90A3\u76F4\u63A5\u8FD4\u56DE\u5B83\u884C\u4E86\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const isObject = (target) =&gt; (typeof target === &#39;object&#39; || typeof target === &#39;function&#39;) &amp;&amp; target !== null;

const deepClone = (target, map = new Map()) =&gt; {
  if(map.get(target))
    return target;

  if (isObject(target)) {
    map.set(target, true);
    const cloneTarget = Array.isArray(target) ? []: {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
          cloneTarget[prop] = deepClone(target[prop],map);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6765\u8BD5\u4E00\u8BD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const a = {val:2};
a.target = a;
let newA = deepClone(a);
console.log(newA)//{ val: 2, target: { val: 2, target: [Circular] } }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u597D\u50CF\u662F\u6CA1\u6709\u95EE\u9898\u4E86, \u62F7\u8D1D\u4E5F\u5B8C\u6210\u4E86\u3002\u4F46\u8FD8\u662F\u6709\u4E00\u4E2A\u6F5C\u5728\u7684\u5751, \u5C31\u662Fmap \u4E0A\u7684 key \u548C map \u6784\u6210\u4E86\u5F3A\u5F15\u7528\u5173\u7CFB\uFF0C\u8FD9\u662F\u76F8\u5F53\u5371\u9669\u7684\u3002\u6211\u7ED9\u4F60\u89E3\u91CA\u4E00\u4E0B\u4E0E\u4E4B\u76F8\u5BF9\u7684\u5F31\u5F15\u7528\u7684\u6982\u5FF5\u4F60\u5C31\u660E\u767D\u4E86</p></blockquote><p>\u5728\u8BA1\u7B97\u673A\u7A0B\u5E8F\u8BBE\u8BA1\u4E2D\uFF0C\u5F31\u5F15\u7528\u4E0E\u5F3A\u5F15\u7528\u76F8\u5BF9\uFF0C</p><blockquote><p>\u88AB\u5F31\u5F15\u7528\u7684\u5BF9\u8C61\u53EF\u4EE5\u5728\u4EFB\u4F55\u65F6\u5019\u88AB\u56DE\u6536\uFF0C\u800C\u5BF9\u4E8E\u5F3A\u5F15\u7528\u6765\u8BF4\uFF0C\u53EA\u8981\u8FD9\u4E2A\u5F3A\u5F15\u7528\u8FD8\u5728\uFF0C\u90A3\u4E48\u5BF9\u8C61\u65E0\u6CD5\u88AB\u56DE\u6536\u3002\u62FF\u4E0A\u9762\u7684\u4F8B\u5B50\u8BF4\uFF0Cmap \u548C a\u4E00\u76F4\u662F\u5F3A\u5F15\u7528\u7684\u5173\u7CFB\uFF0C \u5728\u7A0B\u5E8F\u7ED3\u675F\u4E4B\u524D\uFF0Ca \u6240\u5360\u7684\u5185\u5B58\u7A7A\u95F4\u4E00\u76F4\u4E0D\u4F1A\u88AB\u91CA\u653E\u3002</p></blockquote><p>\u600E\u4E48\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1F</p><blockquote><p>\u5F88\u7B80\u5355\uFF0C\u8BA9 map \u7684 key \u548C map \u6784\u6210\u5F31\u5F15\u7528\u5373\u53EF\u3002ES6\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u7684\u540D\u5B57\u53EBWeakMap\uFF0C\u5B83\u662F\u4E00\u79CD\u7279\u6B8A\u7684Map, \u5176\u4E2D\u7684\u952E\u662F\u5F31\u5F15\u7528\u7684\u3002\u5176\u952E\u5FC5\u987B\u662F\u5BF9\u8C61\uFF0C\u800C\u503C\u53EF\u4EE5\u662F\u4EFB\u610F\u7684</p></blockquote><p>\u7A0D\u5FAE\u6539\u9020\u4E00\u4E0B\u5373\u53EF:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const deepClone = (target, map = new WeakMap()) =&gt; {
  //...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3. \u62F7\u8D1D\u7279\u6B8A\u5BF9\u8C61</p><p>\u53EF\u7EE7\u7EED\u904D\u5386</p><p>\u5BF9\u4E8E\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u6211\u4EEC\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u6765\u9274\u522B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Object.prototype.toString.call(obj);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u68B3\u7406\u4E00\u4E0B\u5BF9\u4E8E\u53EF\u904D\u5386\u5BF9\u8C61\u4F1A\u6709\u4EC0\u4E48\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&quot;object Map&quot;]
[&quot;object Set&quot;]
[&quot;object Array&quot;]
[&quot;object Object&quot;]
[&quot;object Arguments&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u8FD9\u4E9B\u4E0D\u540C\u7684\u5B57\u7B26\u4E32\u4E3A\u4F9D\u636E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6210\u529F\u5730\u9274\u522B\u8FD9\u4E9B\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const getType = Object.prototype.toString.call(obj);

const canTraverse = {
  &#39;[object Map]&#39;: true,
  &#39;[object Set]&#39;: true,
  &#39;[object Array]&#39;: true,
  &#39;[object Object]&#39;: true,
  &#39;[object Arguments]&#39;: true,
};

const deepClone = (target, map = new Map()) =&gt; {
  if(!isObject(target))
    return target;
  let type = getType(target);
  let cloneTarget;
  if(!canTraverse[type]) {
    // \u5904\u7406\u4E0D\u80FD\u904D\u5386\u7684\u5BF9\u8C61
    return;
  }else {
    // \u8FD9\u6CE2\u64CD\u4F5C\u76F8\u5F53\u5173\u952E\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u5BF9\u8C61\u7684\u539F\u578B\u4E0D\u4E22\u5931\uFF01
    let ctor = target.prototype;
    cloneTarget = new ctor();
  }

  if(map.get(target))
    return target;
  map.put(target, true);

  if(type === mapTag) {
    //\u5904\u7406Map
    target.forEach((item, key) =&gt; {
      cloneTarget.set(deepClone(key), deepClone(item));
    })
  }

  if(type === setTag) {
    //\u5904\u7406Set
    target.forEach(item =&gt; {
      target.add(deepClone(item));
    })
  }

  // \u5904\u7406\u6570\u7EC4\u548C\u5BF9\u8C61
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop]);
    }
  }
  return cloneTarget;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u53EF\u904D\u5386\u7684\u5BF9\u8C61</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const boolTag = &#39;[object Boolean]&#39;;
const numberTag = &#39;[object Number]&#39;;
const stringTag = &#39;[object String]&#39;;
const dateTag = &#39;[object Date]&#39;;
const errorTag = &#39;[object Error]&#39;;
const regexpTag = &#39;[object RegExp]&#39;;
const funcTag = &#39;[object Function]&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u4E0D\u53EF\u904D\u5386\u7684\u5BF9\u8C61\uFF0C\u4E0D\u540C\u7684\u5BF9\u8C61\u6709\u4E0D\u540C\u7684\u5904\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const handleRegExp = (target) =&gt; {
  const { source, flags } = target;
  return new target.constructor(source, flags);
}

const handleFunc = (target) =&gt; {
  // \u5F85\u4F1A\u7684\u91CD\u70B9\u90E8\u5206
}

const handleNotTraverse = (target, tag) =&gt; {
  const Ctor = targe.constructor;
  switch(tag) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(target);
    case regexpTag:
      return handleRegExp(target);
    case funcTag:
      return handleFunc(target);
    default:
      return new Ctor(target);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4. \u62F7\u8D1D\u51FD\u6570</p><ul><li>\u867D\u7136\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\uFF0C\u4F46\u662F\u5B83\u8FC7\u4E8E\u7279\u6B8A\uFF0C\u6211\u4EEC\u5355\u72EC\u628A\u5B83\u62FF\u51FA\u6765\u62C6\u89E3\u3002</li><li>\u63D0\u5230\u51FD\u6570\uFF0C\u5728JS\u79CD\u6709\u4E24\u79CD\u51FD\u6570\uFF0C\u4E00\u79CD\u662F\u666E\u901A\u51FD\u6570\uFF0C\u53E6\u4E00\u79CD\u662F\u7BAD\u5934\u51FD\u6570\u3002\u6BCF\u4E2A\u666E\u901A\u51FD\u6570\u90FD\u662F</li><li>Function\u7684\u5B9E\u4F8B\uFF0C\u800C\u7BAD\u5934\u51FD\u6570\u4E0D\u662F\u4EFB\u4F55\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u6BCF\u6B21\u8C03\u7528\u90FD\u662F\u4E0D\u4E00\u6837\u7684\u5F15\u7528\u3002\u90A3\u6211\u4EEC\u53EA\u9700\u8981</li><li>\u5904\u7406\u666E\u901A\u51FD\u6570\u7684\u60C5\u51B5\uFF0C\u7BAD\u5934\u51FD\u6570\u76F4\u63A5\u8FD4\u56DE\u5B83\u672C\u8EAB\u5C31\u597D\u4E86\u3002</li></ul><p>\u90A3\u4E48\u5982\u4F55\u6765\u533A\u5206\u4E24\u8005\u5462\uFF1F</p><blockquote><p>\u7B54\u6848\u662F: \u5229\u7528\u539F\u578B\u3002\u7BAD\u5934\u51FD\u6570\u662F\u4E0D\u5B58\u5728\u539F\u578B\u7684\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const handleFunc = (func) =&gt; {
  // \u7BAD\u5934\u51FD\u6570\u76F4\u63A5\u8FD4\u56DE\u81EA\u8EAB
  if(!func.prototype) return func;
  const bodyReg = /(?&lt;={)(.|\\n)+(?=})/m;
  const paramReg = /(?&lt;=\\().+(?=\\)\\s+{)/;
  const funcString = func.toString();
  // \u5206\u522B\u5339\u914D \u51FD\u6570\u53C2\u6570 \u548C \u51FD\u6570\u4F53
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString);
  if(!body) return null;
  if (param) {
    const paramArr = param[0].split(&#39;,&#39;);
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5. \u5B8C\u6574\u4EE3\u7801\u5C55\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const getType = obj =&gt; Object.prototype.toString.call(obj);

const isObject = (target) =&gt; (typeof target === &#39;object&#39; || typeof target === &#39;function&#39;) &amp;&amp; target !== null;

const canTraverse = {
  &#39;[object Map]&#39;: true,
  &#39;[object Set]&#39;: true,
  &#39;[object Array]&#39;: true,
  &#39;[object Object]&#39;: true,
  &#39;[object Arguments]&#39;: true,
};
const mapTag = &#39;[object Map]&#39;;
const setTag = &#39;[object Set]&#39;;
const boolTag = &#39;[object Boolean]&#39;;
const numberTag = &#39;[object Number]&#39;;
const stringTag = &#39;[object String]&#39;;
const symbolTag = &#39;[object Symbol]&#39;;
const dateTag = &#39;[object Date]&#39;;
const errorTag = &#39;[object Error]&#39;;
const regexpTag = &#39;[object RegExp]&#39;;
const funcTag = &#39;[object Function]&#39;;

const handleRegExp = (target) =&gt; {
  const { source, flags } = target;
  return new target.constructor(source, flags);
}

const handleFunc = (func) =&gt; {
  // \u7BAD\u5934\u51FD\u6570\u76F4\u63A5\u8FD4\u56DE\u81EA\u8EAB
  if(!func.prototype) return func;
  const bodyReg = /(?&lt;={)(.|\\n)+(?=})/m;
  const paramReg = /(?&lt;=\\().+(?=\\)\\s+{)/;
  const funcString = func.toString();
  // \u5206\u522B\u5339\u914D \u51FD\u6570\u53C2\u6570 \u548C \u51FD\u6570\u4F53
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString);
  if(!body) return null;
  if (param) {
    const paramArr = param[0].split(&#39;,&#39;);
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

const handleNotTraverse = (target, tag) =&gt; {
  const Ctor = target.constructor;
  switch(tag) {
    case boolTag:
      return new Object(Boolean.prototype.valueOf.call(target));
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target));
    case stringTag:
      return new Object(String.prototype.valueOf.call(target));
    case symbolTag:
      return new Object(Symbol.prototype.valueOf.call(target));
    case errorTag:
    case dateTag:
      return new Ctor(target);
    case regexpTag:
      return handleRegExp(target);
    case funcTag:
      return handleFunc(target);
    default:
      return new Ctor(target);
  }
}

const deepClone = (target, map = new WeakMap()) =&gt; {
  if(!isObject(target))
    return target;
  let type = getType(target);
  let cloneTarget;
  if(!canTraverse[type]) {
    // \u5904\u7406\u4E0D\u80FD\u904D\u5386\u7684\u5BF9\u8C61
    return handleNotTraverse(target, type);
  }else {
    // \u8FD9\u6CE2\u64CD\u4F5C\u76F8\u5F53\u5173\u952E\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u5BF9\u8C61\u7684\u539F\u578B\u4E0D\u4E22\u5931\uFF01
    let ctor = target.constructor;
    cloneTarget = new ctor();
  }

  if(map.get(target))
    return target;
  map.set(target, true);

  if(type === mapTag) {
    //\u5904\u7406Map
    target.forEach((item, key) =&gt; {
      cloneTarget.set(deepClone(key, map), deepClone(item, map));
    })
  }

  if(type === setTag) {
    //\u5904\u7406Set
    target.forEach(item =&gt; {
      cloneTarget.add(deepClone(item, map));
    })
  }

  // \u5904\u7406\u6570\u7EC4\u548C\u5BF9\u8C61
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], map);
    }
  }
  return cloneTarget;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5B9E\u73B0event-event-bus" tabindex="-1"><a class="header-anchor" href="#_4-\u5B9E\u73B0event-event-bus" aria-hidden="true">#</a> 4 \u5B9E\u73B0Event(event bus)</h2><blockquote><p>event bus\u65E2\u662Fnode\u4E2D\u5404\u4E2A\u6A21\u5757\u7684\u57FA\u77F3\uFF0C\u53C8\u662F\u524D\u7AEF\u7EC4\u4EF6\u901A\u4FE1\u7684\u4F9D\u8D56\u624B\u6BB5\u4E4B\u4E00\uFF0C\u540C\u65F6\u6D89\u53CA\u4E86\u8BA2\u9605-\u53D1\u5E03\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u662F\u975E\u5E38\u91CD\u8981\u7684\u57FA\u7840</p></blockquote><p>\u7B80\u5355\u7248\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class EventEmeitter {
  constructor() {
    this._events = this._events || new Map(); // \u50A8\u5B58\u4E8B\u4EF6/\u56DE\u8C03\u952E\u503C\u5BF9
    this._maxListeners = this._maxListeners || 10; // \u8BBE\u7ACB\u76D1\u542C\u4E0A\u9650
  }
}

// \u89E6\u53D1\u540D\u4E3Atype\u7684\u4E8B\u4EF6
EventEmeitter.prototype.emit = function(type, ...args) {
  let handler;
  // \u4ECE\u50A8\u5B58\u4E8B\u4EF6\u952E\u503C\u5BF9\u7684this._events\u4E2D\u83B7\u53D6\u5BF9\u5E94\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570
  handler = this._events.get(type);
  if (args.length &gt; 0) {
    handler.apply(this, args);
  } else {
    handler.call(this);
  }
  return true;
};

// \u76D1\u542C\u540D\u4E3Atype\u7684\u4E8B\u4EF6
EventEmeitter.prototype.addListener = function(type, fn) {
  // \u5C06type\u4E8B\u4EF6\u4EE5\u53CA\u5BF9\u5E94\u7684fn\u51FD\u6570\u653E\u5165this._events\u4E2D\u50A8\u5B58
  if (!this._events.get(type)) {
    this._events.set(type, fn);
  }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9762\u8BD5\u7248\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class EventEmeitter {
  constructor() {
    this._events = this._events || new Map(); // \u50A8\u5B58\u4E8B\u4EF6/\u56DE\u8C03\u952E\u503C\u5BF9
    this._maxListeners = this._maxListeners || 10; // \u8BBE\u7ACB\u76D1\u542C\u4E0A\u9650
  }
}

// \u89E6\u53D1\u540D\u4E3Atype\u7684\u4E8B\u4EF6
EventEmeitter.prototype.emit = function(type, ...args) {
  let handler;
  // \u4ECE\u50A8\u5B58\u4E8B\u4EF6\u952E\u503C\u5BF9\u7684this._events\u4E2D\u83B7\u53D6\u5BF9\u5E94\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570
  handler = this._events.get(type);
  if (args.length &gt; 0) {
    handler.apply(this, args);
  } else {
    handler.call(this);
  }
  return true;
};

// \u76D1\u542C\u540D\u4E3Atype\u7684\u4E8B\u4EF6
EventEmeitter.prototype.addListener = function(type, fn) {
  // \u5C06type\u4E8B\u4EF6\u4EE5\u53CA\u5BF9\u5E94\u7684fn\u51FD\u6570\u653E\u5165this._events\u4E2D\u50A8\u5B58
  if (!this._events.get(type)) {
    this._events.set(type, fn);
  }
};

// \u89E6\u53D1\u540D\u4E3Atype\u7684\u4E8B\u4EF6
EventEmeitter.prototype.emit = function(type, ...args) {
  let handler;
  handler = this._events.get(type);
  if (Array.isArray(handler)) {
    // \u5982\u679C\u662F\u4E00\u4E2A\u6570\u7EC4\u8BF4\u660E\u6709\u591A\u4E2A\u76D1\u542C\u8005,\u9700\u8981\u4F9D\u6B21\u6B64\u89E6\u53D1\u91CC\u9762\u7684\u51FD\u6570
    for (let i = 0; i &lt; handler.length; i++) {
      if (args.length &gt; 0) {
        handler[i].apply(this, args);
      } else {
        handler[i].call(this);
      }
    }
  } else {
    // \u5355\u4E2A\u51FD\u6570\u7684\u60C5\u51B5\u6211\u4EEC\u76F4\u63A5\u89E6\u53D1\u5373\u53EF
    if (args.length &gt; 0) {
      handler.apply(this, args);
    } else {
      handler.call(this);
    }
  }

  return true;
};

// \u76D1\u542C\u540D\u4E3Atype\u7684\u4E8B\u4EF6
EventEmeitter.prototype.addListener = function(type, fn) {
  const handler = this._events.get(type); // \u83B7\u53D6\u5BF9\u5E94\u4E8B\u4EF6\u540D\u79F0\u7684\u51FD\u6570\u6E05\u5355
  if (!handler) {
    this._events.set(type, fn);
  } else if (handler &amp;&amp; typeof handler === &quot;function&quot;) {
    // \u5982\u679Chandler\u662F\u51FD\u6570\u8BF4\u660E\u53EA\u6709\u4E00\u4E2A\u76D1\u542C\u8005
    this._events.set(type, [handler, fn]); // \u591A\u4E2A\u76D1\u542C\u8005\u6211\u4EEC\u9700\u8981\u7528\u6570\u7EC4\u50A8\u5B58
  } else {
    handler.push(fn); // \u5DF2\u7ECF\u6709\u591A\u4E2A\u76D1\u542C\u8005,\u90A3\u4E48\u76F4\u63A5\u5F80\u6570\u7EC4\u91CCpush\u51FD\u6570\u5373\u53EF
  }
};

EventEmeitter.prototype.removeListener = function(type, fn) {
  const handler = this._events.get(type); // \u83B7\u53D6\u5BF9\u5E94\u4E8B\u4EF6\u540D\u79F0\u7684\u51FD\u6570\u6E05\u5355

  // \u5982\u679C\u662F\u51FD\u6570,\u8BF4\u660E\u53EA\u88AB\u76D1\u542C\u4E86\u4E00\u6B21
  if (handler &amp;&amp; typeof handler === &quot;function&quot;) {
    this._events.delete(type, fn);
  } else {
    let postion;
    // \u5982\u679Chandler\u662F\u6570\u7EC4,\u8BF4\u660E\u88AB\u76D1\u542C\u591A\u6B21\u8981\u627E\u5230\u5BF9\u5E94\u7684\u51FD\u6570
    for (let i = 0; i &lt; handler.length; i++) {
      if (handler[i] === fn) {
        postion = i;
      } else {
        postion = -1;
      }
    }
    // \u5982\u679C\u627E\u5230\u5339\u914D\u7684\u51FD\u6570,\u4ECE\u6570\u7EC4\u4E2D\u6E05\u9664
    if (postion !== -1) {
      // \u627E\u5230\u6570\u7EC4\u5BF9\u5E94\u7684\u4F4D\u7F6E,\u76F4\u63A5\u6E05\u9664\u6B64\u56DE\u8C03
      handler.splice(postion, 1);
      // \u5982\u679C\u6E05\u9664\u540E\u53EA\u6709\u4E00\u4E2A\u51FD\u6570,\u90A3\u4E48\u53D6\u6D88\u6570\u7EC4,\u4EE5\u51FD\u6570\u5F62\u5F0F\u4FDD\u5B58
      if (handler.length === 1) {
        this._events.set(type, handler[0]);
      }
    } else {
      return this;
    }
  }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u5B9E\u73B0instanceof" tabindex="-1"><a class="header-anchor" href="#_5-\u5B9E\u73B0instanceof" aria-hidden="true">#</a> 5 \u5B9E\u73B0instanceOf</h2><p>\u601D\u8DEF\uFF1A</p><ul><li>\u6B65\u9AA41\uFF1A\u5148\u53D6\u5F97\u5F53\u524D\u7C7B\u7684\u539F\u578B\uFF0C\u5F53\u524D\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE</li><li>\u200B\u6B65\u9AA42\uFF1A\u4E00\u76F4\u5FAA\u73AF\uFF08\u6267\u884C\u539F\u578B\u94FE\u7684\u67E5\u627E\u673A\u5236\uFF09 <ul><li>\u53D6\u5F97\u5F53\u524D\u5B9E\u4F8B\u5BF9\u8C61\u539F\u578B\u94FE\u7684\u539F\u578B\u94FE\uFF08<code>proto = proto.__proto__</code>\uFF0C\u6CBF\u7740\u539F\u578B\u94FE\u4E00\u76F4\u5411\u4E0A\u67E5\u627E\uFF09</li><li>\u5982\u679C \u5F53\u524D\u5B9E\u4F8B\u7684\u539F\u578B\u94FE<code>__proto__</code>\u4E0A\u627E\u5230\u4E86\u5F53\u524D\u7C7B\u7684\u539F\u578B<code>prototype</code>\uFF0C\u5219\u8FD4\u56DE\xA0<code>true</code></li><li>\u5982\u679C \u4E00\u76F4\u627E\u5230<code>Object.prototype.__proto__ == null</code>\uFF0C<code>Object</code>\u7684\u57FA\u7C7B(<code>null</code>)\u4E0A\u9762\u90FD\u6CA1\u627E\u5230\uFF0C\u5219\u8FD4\u56DE\xA0<code>false</code></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9E\u4F8B.__ptoto__ === \u7C7B.prototype
function _instanceof(example, classFunc) {
    // \u7531\u4E8Einstance\u8981\u68C0\u6D4B\u7684\u662F\u67D0\u5BF9\u8C61\uFF0C\u9700\u8981\u6709\u4E00\u4E2A\u524D\u7F6E\u5224\u65AD\u6761\u4EF6
    //\u57FA\u672C\u6570\u636E\u7C7B\u578B\u76F4\u63A5\u8FD4\u56DEfalse
    if(typeof example !== &#39;object&#39; || example === null) return false;

    let proto = Object.getPrototypeOf(example);
    while(true) {
        if(proto == null) return false;

        // \u5728\u5F53\u524D\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\uFF0C\u627E\u5230\u4E86\u5F53\u524D\u7C7B
        if(proto == classFunc.prototype) return true;
        // \u6CBF\u7740\u539F\u578B\u94FE__ptoto__\u4E00\u5C42\u4E00\u5C42\u5411\u4E0A\u67E5
        proto = Object.getPrototypeof(proto); // \u7B49\u4E8Eproto.__ptoto__
    }
}

console.log(&#39;test&#39;, _instanceof(null, Array)) // false
console.log(&#39;test&#39;, _instanceof([], Array)) // true
console.log(&#39;test&#39;, _instanceof(&#39;&#39;, Array)) // false
console.log(&#39;test&#39;, _instanceof({}, Object)) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u6A21\u62DFnew" tabindex="-1"><a class="header-anchor" href="#_6-\u6A21\u62DFnew" aria-hidden="true">#</a> 6 \u6A21\u62DFnew</h2><p>new\u64CD\u4F5C\u7B26\u505A\u4E86\u8FD9\u4E9B\u4E8B\uFF1A</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u5168\u65B0\u7684\u5BF9\u8C61</li><li>\u8FD9\u4E2A\u5BF9\u8C61\u7684<code>__proto__</code>\u8981\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u539F\u578Bprototype</li><li>\u6267\u884C\u6784\u9020\u51FD\u6570\uFF0C\u4F7F\u7528\xA0<code>call/apply</code>\xA0\u6539\u53D8 this \u7684\u6307\u5411</li><li>\u8FD4\u56DE\u503C\u4E3A<code>object</code>\u7C7B\u578B\u5219\u4F5C\u4E3A<code>new</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u8FD4\u56DE\uFF0C\u5426\u5219\u8FD4\u56DE\u4E0A\u8FF0\u5168\u65B0\u5BF9\u8C61</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function myNew(fn, ...args) {
    let instance = Object.create(fn.prototype);
    let res = fn.apply(instance, args); // \u6539\u53D8this\u6307\u5411

    // \u786E\u4FDD\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61(\u4E07\u4E00fn\u4E0D\u662F\u6784\u9020\u51FD\u6570)
    return typeof res === &#39;object&#39; ? res: instance;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u5B9E\u73B0\u4E00\u4E2Acall" tabindex="-1"><a class="header-anchor" href="#_7-\u5B9E\u73B0\u4E00\u4E2Acall" aria-hidden="true">#</a> 7 \u5B9E\u73B0\u4E00\u4E2Acall</h2><p>call\u505A\u4E86\u4EC0\u4E48:</p><ul><li>\u5C06\u51FD\u6570\u8BBE\u4E3A\u5BF9\u8C61\u7684\u5C5E\u6027</li><li>\u6267\u884C&amp;\u5220\u9664\u8FD9\u4E2A\u51FD\u6570</li><li>\u6307\u5B9A<code>this</code>\u5230\u51FD\u6570\u5E76\u4F20\u5165\u7ED9\u5B9A\u53C2\u6570\u6267\u884C\u51FD\u6570</li><li>\u5982\u679C\u4E0D\u4F20\u5165\u53C2\u6570\uFF0C\u9ED8\u8BA4\u6307\u5411\u4E3A\xA0<code>window</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6A21\u62DF call bar.mycall(null);
//\u5B9E\u73B0\u4E00\u4E2Acall\u65B9\u6CD5\uFF1A
// \u539F\u7406\uFF1A\u5229\u7528 context.xxx = self obj.xx = func--&gt;obj.xx()
Function.prototype.myCall = function(context = window, ...args) {
  // this--&gt;func  context--&gt; obj  args--&gt; \u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570

  // \u5728context\u4E0A\u52A0\u4E00\u4E2A\u552F\u4E00\u503C\u4E0D\u5F71\u54CDcontext\u4E0A\u7684\u5C5E\u6027
  let key = Symbol(&#39;key&#39;)
  context[key] = this; // context\u4E3A\u8C03\u7528\u7684\u4E0A\u4E0B\u6587,this\u6B64\u5904\u4E3A\u51FD\u6570\uFF0C\u5C06\u8FD9\u4E2A\u51FD\u6570\u4F5C\u4E3Acontext\u7684\u65B9\u6CD5
  // let args = [...arguments].slice(1)   //\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3Aobj\u6240\u4EE5\u5220\u9664,\u4F2A\u6570\u7EC4\u8F6C\u4E3A\u6570\u7EC4

  let result = context[key](...args);
  delete context[key]; // \u4E0D\u5220\u9664\u4F1A\u5BFC\u81F4context\u5C5E\u6027\u8D8A\u6765\u8D8A\u591A
  return result;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7528\u6CD5\uFF1Af.call(obj,arg1)
function f(a,b){
 console.log(a+b)
 console.log(this.name)
}
let obj={
 name:1
}
f.myCall(obj,1,2) //\u5426\u5219this\u6307\u5411window

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u5B9E\u73B0apply\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_8-\u5B9E\u73B0apply\u65B9\u6CD5" aria-hidden="true">#</a> 8 \u5B9E\u73B0apply\u65B9\u6CD5</h2><blockquote><p>\u601D\u8DEF: \u5229\u7528<code>this</code>\u7684\u4E0A\u4E0B\u6587\u7279\u6027\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Function.prototype.myApply = function(context = window, ...args) {
  // this--&gt;func  context--&gt; obj  args--&gt; \u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570

  // \u5728context\u4E0A\u52A0\u4E00\u4E2A\u552F\u4E00\u503C\u4E0D\u5F71\u54CDcontext\u4E0A\u7684\u5C5E\u6027
  let key = Symbol(&#39;key&#39;)
  context[key] = this; // context\u4E3A\u8C03\u7528\u7684\u4E0A\u4E0B\u6587,this\u6B64\u5904\u4E3A\u51FD\u6570\uFF0C\u5C06\u8FD9\u4E2A\u51FD\u6570\u4F5C\u4E3Acontext\u7684\u65B9\u6CD5
  // let args = [...arguments].slice(1)   //\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3Aobj\u6240\u4EE5\u5220\u9664,\u4F2A\u6570\u7EC4\u8F6C\u4E3A\u6570\u7EC4

  let result = context[key](args); // \u8FD9\u91CC\u548Ccall\u4F20\u53C2\u4E0D\u4E00\u6837
  delete context[key]; // \u4E0D\u5220\u9664\u4F1A\u5BFC\u81F4context\u5C5E\u6027\u8D8A\u6765\u8D8A\u591A
  return result;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F7F\u7528
function f(a,b){
 console.log(a,b)
 console.log(this.name)
}
let obj={
 name:&#39;\u5F20\u4E09&#39;
}
f.myApply(obj,[1,2])  //arguments[1]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-\u5B9E\u73B0bind" tabindex="-1"><a class="header-anchor" href="#_9-\u5B9E\u73B0bind" aria-hidden="true">#</a> 9 \u5B9E\u73B0bind</h2><blockquote><p>bind \u7684\u5B9E\u73B0\u5BF9\u6BD4\u5176\u4ED6\u4E24\u4E2A\u51FD\u6570\u7565\u5FAE\u5730\u590D\u6742\u4E86\u4E00\u70B9\uFF0C\u56E0\u4E3A bind \u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u9700\u8981\u5224\u65AD\u4E00\u4E9B\u8FB9\u754C\u95EE\u9898\uFF0C\u4EE5\u4E0B\u662F bind \u7684\u5B9E\u73B0</p></blockquote><ul><li><code>bind</code>\xA0\u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u5BF9\u4E8E\u51FD\u6570\u6765\u8BF4\u6709\u4E24\u79CD\u65B9\u5F0F\u8C03\u7528\uFF0C\u4E00\u79CD\u662F\u76F4\u63A5\u8C03\u7528\uFF0C\u4E00\u79CD\u662F\u901A\u8FC7\xA0<code>new</code>\xA0\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u5148\u6765\u8BF4\u76F4\u63A5\u8C03\u7528\u7684\u65B9\u5F0F</li><li>\u5BF9\u4E8E\u76F4\u63A5\u8C03\u7528\u6765\u8BF4\uFF0C\u8FD9\u91CC\u9009\u62E9\u4E86 apply \u7684\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4F46\u662F\u5BF9\u4E8E\u53C2\u6570\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u60C5\u51B5\uFF1A\u56E0\u4E3A\xA0<code>bind</code>\xA0\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C\u8FD9\u6837\u7684\u4EE3\u7801\xA0<code>f.bind(obj, 1)(2)</code>\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5C06\u4E24\u8FB9\u7684\u53C2\u6570\u62FC\u63A5\u8D77\u6765</li><li>\u6700\u540E\u6765\u8BF4\u901A\u8FC7 new \u7684\u65B9\u5F0F\uFF0C\u5BF9\u4E8E new \u7684\u60C5\u51B5\u6765\u8BF4\uFF0C\u4E0D\u4F1A\u88AB\u4EFB\u4F55\u65B9\u5F0F\u6539\u53D8\xA0<code>this</code>\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u6211\u4EEC\u9700\u8981\u5FFD\u7565\u4F20\u5165\u7684\xA0<code>this</code></li></ul><p>\u7B80\u6D01\u7248\u672C</p><ul><li>\u5BF9\u4E8E\u666E\u901A\u51FD\u6570\uFF0C\u7ED1\u5B9Athis\u6307\u5411</li><li>\u5BF9\u4E8E\u6784\u9020\u51FD\u6570\uFF0C\u8981\u4FDD\u8BC1\u539F\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u4E0D\u80FD\u4E22\u5931</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Function.prototype.myBind = function(context = window, ...args) {
  //\u8C28\u8BB0this\u8868\u793A\u8C03\u7528bind\u7684\u51FD\u6570
  let self = this;

  //\u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C...innerArgs\u4E3A\u5B9E\u9645\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570
  let fBound = function(...innerArgs) {
      //this instanceof fBound\u4E3Atrue\u8868\u793A\u6784\u9020\u51FD\u6570\u7684\u60C5\u51B5\u3002\u5982new func.bind(obj)
      // \u5F53\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u65F6\uFF0Cthis \u6307\u5411\u5B9E\u4F8B\uFF0C\u6B64\u65F6 this instanceof fBound \u7ED3\u679C\u4E3A true\uFF0C\u53EF\u4EE5\u8BA9\u5B9E\u4F8B\u83B7\u5F97\u6765\u81EA\u7ED1\u5B9A\u51FD\u6570\u7684\u503C
      // \u5F53\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u65F6\uFF0Cthis \u6307\u5411 window\uFF0C\u6B64\u65F6\u7ED3\u679C\u4E3A false\uFF0C\u5C06\u7ED1\u5B9A\u51FD\u6570\u7684 this \u6307\u5411 context
      return self.apply(
        this instanceof fBound ? this : context,
        args.concat(innerArgs)
      );
  }

  //\u4FDD\u8BC1\u539F\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u4E0D\u4E22\u5931
  fBound.prototype = Object.create(this.prototype);
  return fBound;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D4B\u8BD5\u7528\u4F8B
var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = &#39;shopping&#39;;
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = &#39;kevin&#39;;

var bindFoo = bar.bind2(foo, &#39;Jack&#39;); // bind2
var obj = new bindFoo(20); // \u8FD4\u56DE\u6B63\u786E
// undefined
// Jack
// 20

obj.habit; // \u8FD4\u56DE\u6B63\u786E
// shopping

obj.friend; // \u8FD4\u56DE\u6B63\u786E
// kevin

obj.__proto__.friend = &quot;Kitty&quot;; // \u4FEE\u6539\u539F\u578B

bar.prototype.friend;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A bind\u4E4B\u540E\u4E0D\u80FD\u518D\u6B21\u4FEE\u6539this\u7684\u6267\u884C\uFF0C<code>bind</code>\u591A\u6B21\u540E\u6267\u884C\uFF0C\u51FD\u6570this\u8FD8\u662F\u6307\u5411\u7B2C\u4E00\u6B21bind\u7684\u5BF9\u8C61</p></blockquote><h2 id="_10-\u6A21\u62DFobject-create" tabindex="-1"><a class="header-anchor" href="#_10-\u6A21\u62DFobject-create" aria-hidden="true">#</a> 10 \u6A21\u62DFObject.create</h2><blockquote><p><code>Object.create()</code>\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u4F7F\u7528\u73B0\u6709\u7684\u5BF9\u8C61\u6765\u63D0\u4F9B\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u7684\xA0<code>__proto__</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6A21\u62DF Object.create

function create(proto) {
  function F() {}
  F.prototype = proto;

  return new F();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-\u5B9E\u73B0\u7C7B\u7684\u7EE7\u627F-\u7B80\u7248" tabindex="-1"><a class="header-anchor" href="#_11-\u5B9E\u73B0\u7C7B\u7684\u7EE7\u627F-\u7B80\u7248" aria-hidden="true">#</a> 11 \u5B9E\u73B0\u7C7B\u7684\u7EE7\u627F-\u7B80\u7248</h2><blockquote><p>\u7C7B\u7684\u7EE7\u627F\u5728\u51E0\u5E74\u524D\u662F\u91CD\u70B9\u5185\u5BB9\uFF0C\u6709n\u79CD\u7EE7\u627F\u65B9\u5F0F\u5404\u6709\u4F18\u52A3\uFF0Ces6\u666E\u53CA\u540E\u8D8A\u6765\u8D8A\u4E0D\u91CD\u8981\uFF0C\u90A3\u4E48\u591A\u79CD\u5199\u6CD5\u6709\u70B9\u300E\u56DE\u5B57\u6709\u56DB\u6837\u5199\u6CD5\u300F\u7684\u610F\u601D\uFF0C\u5982\u679C\u8FD8\u60F3\u6DF1\u5165\u7406\u89E3\u7684\u53BB\u770B\u7EA2\u5B9D\u4E66\u5373\u53EF\uFF0C\u6211\u4EEC\u76EE\u524D\u53EA\u5B9E\u73B0\u4E00\u79CD\u6700\u7406\u60F3\u7684\u7EE7\u627F\u65B9\u5F0F\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Parent(name) {
    this.parent = name
}
Parent.prototype.say = function() {
    console.log(\`\${this.parent}: \u4F60\u6253\u7BEE\u7403\u7684\u6837\u5B50\u50CFkunkun\`)
}
function Child(name, parent) {
    // \u5C06\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u7ED1\u5B9A\u5728\u5B50\u7C7B\u4E0A
    Parent.call(this, parent)
    this.child = name
}

/**
 1. \u8FD9\u4E00\u6B65\u4E0D\u7528Child.prototype =Parent.prototype\u7684\u539F\u56E0\u662F\u6015\u5171\u4EAB\u5185\u5B58\uFF0C\u4FEE\u6539\u7236\u7C7B\u539F\u578B\u5BF9\u8C61\u5C31\u4F1A\u5F71\u54CD\u5B50\u7C7B
 2. \u4E0D\u7528Child.prototype = new Parent()\u7684\u539F\u56E0\u662F\u4F1A\u8C03\u75282\u6B21\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\uFF08\u53E6\u4E00\u6B21\u662Fcall\uFF09\uFF0C\u4F1A\u5B58\u5728\u4E00\u4EFD\u591A\u4F59\u7684\u7236\u7C7B\u5B9E\u4F8B\u5C5E\u6027
3. Object.create\u662F\u521B\u5EFA\u4E86\u7236\u7C7B\u539F\u578B\u7684\u526F\u672C\uFF0C\u4E0E\u7236\u7C7B\u539F\u578B\u5B8C\u5168\u9694\u79BB
*/
Child.prototype = Object.create(Parent.prototype);
Child.prototype.say = function() {
    console.log(\`\${this.parent}\u597D\uFF0C\u6211\u662F\u7EC3\u4E60\u65F6\u957F\u4E24\u5E74\u534A\u7684\${this.child}\`);
}

// \u6CE8\u610F\u8BB0\u5F97\u628A\u5B50\u7C7B\u7684\u6784\u9020\u6307\u5411\u5B50\u7C7B\u672C\u8EAB
Child.prototype.constructor = Child;

var parent = new Parent(&#39;father&#39;);
parent.say() // father: \u4F60\u6253\u7BEE\u7403\u7684\u6837\u5B50\u50CFkunkun

var child = new Child(&#39;cxk&#39;, &#39;father&#39;);
child.say() // father\u597D\uFF0C\u6211\u662F\u7EC3\u4E60\u65F6\u957F\u4E24\u5E74\u534A\u7684cxk

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-es5\u5B9E\u73B0\u7EE7\u627F\u7684\u90A3\u4E9B\u4E8B-\u8BE6\u7EC6" tabindex="-1"><a class="header-anchor" href="#_12-es5\u5B9E\u73B0\u7EE7\u627F\u7684\u90A3\u4E9B\u4E8B-\u8BE6\u7EC6" aria-hidden="true">#</a> 12 ES5\u5B9E\u73B0\u7EE7\u627F\u7684\u90A3\u4E9B\u4E8B-\u8BE6\u7EC6</h2><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F\u662F\u501F\u52A9call\u5B9E\u73B0\u7EE7\u627F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Parent1(){
    this.name = &#39;parent1&#39;;
}
function Child1(){
    Parent1.call(this);
    this.type = &#39;child1&#39;
}
console.log(new Child1);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u6837\u5199\u7684\u65F6\u5019\u5B50\u7C7B\u867D\u7136\u80FD\u591F\u62FF\u5230\u7236\u7C7B\u7684\u5C5E\u6027\u503C\uFF0C\u4F46\u662F\u95EE\u9898\u662F\u7236\u7C7B\u4E2D\u4E00\u65E6\u5B58\u5728\u65B9\u6CD5\u90A3\u4E48\u5B50\u7C7B\u65E0\u6CD5\u7EE7\u627F\u3002\u90A3\u4E48\u5F15\u51FA\u4E0B\u9762\u7684\u65B9\u6CD5</p></blockquote><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u501F\u52A9\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  function Parent2() {
    this.name = &#39;parent2&#39;;
    this.play = [1, 2, 3]
  }
  function Child2() {
    this.type = &#39;child2&#39;;
  }
  Child2.prototype = new Parent2();

  console.log(new Child2());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u4F3C\u6CA1\u6709\u95EE\u9898\uFF0C\u7236\u7C7B\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u90FD\u80FD\u591F\u8BBF\u95EE\uFF0C\u4F46\u5B9E\u9645\u4E0A\u6709\u4E00\u4E2A\u6F5C\u5728\u7684\u4E0D\u8DB3\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var s1 = new Child2();
  var s2 = new Child2();
  s1.play.push(4);
  console.log(s1.play, s2.play); // [1,2,3,4] [1,2,3,4]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u660E\u660E\u6211\u53EA\u6539\u53D8\u4E86s1\u7684play\u5C5E\u6027\uFF0C\u4E3A\u4EC0\u4E48s2\u4E5F\u8DDF\u7740\u53D8\u4E86\u5462\uFF1F\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u4E24\u4E2A\u5B9E\u4F8B\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61</p><p>\u7B2C\u4E09\u79CD\u65B9\u5F0F\uFF1A\u5C06\u524D\u4E24\u79CD\u7EC4\u5408\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Parent3 () {
    this.name = &#39;parent3&#39;;
    this.play = [1, 2, 3];
  }
  function Child3() {
    Parent3.call(this);
    this.type = &#39;child3&#39;;
  }
  Child3.prototype = new Parent3();
  var s3 = new Child3();
  var s4 = new Child3();
  s3.play.push(4);
  console.log(s3.play, s4.play); // [1,2,3,4] [1,2,3]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E4B\u524D\u7684\u95EE\u9898\u90FD\u5F97\u4EE5\u89E3\u51B3\u3002\u4F46\u662F\u8FD9\u91CC\u53C8\u5F92\u589E\u4E86\u4E00\u4E2A\u65B0\u95EE\u9898\uFF0C\u90A3\u5C31\u662FParent3\u7684\u6784\u9020\u51FD\u6570\u4F1A\u591A\u6267\u884C\u4E86\u4E00\u6B21\uFF08<code>Child3.prototype = new Parent3()</code>;\uFF09\u3002\u8FD9\u662F\u6211\u4EEC\u4E0D\u613F\u770B\u5230\u7684\u3002\u90A3\u4E48\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1F</p></blockquote><p>\u7B2C\u56DB\u79CD\u65B9\u5F0F: \u7EC4\u5408\u7EE7\u627F\u7684\u4F18\u53161</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  function Parent4 () {
    this.name = &#39;parent4&#39;;
    this.play = [1, 2, 3];
  }
  function Child4() {
    Parent4.call(this);
    this.type = &#39;child4&#39;;
  }
  Child4.prototype = Parent4.prototype;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u91CC\u8BA9\u5C06\u7236\u7C7B\u539F\u578B\u5BF9\u8C61\u76F4\u63A5\u7ED9\u5230\u5B50\u7C7B\uFF0C\u7236\u7C7B\u6784\u9020\u51FD\u6570\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u800C\u4E14\u7236\u7C7B\u5C5E\u6027\u548C\u65B9\u6CD5\u5747\u80FD\u8BBF\u95EE\uFF0C\u4F46\u662F\u6211\u4EEC\u6765\u6D4B\u8BD5\u4E00\u4E0B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var s3 = new Child4();
  var s4 = new Child4();
  console.log(s3)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5B50\u7C7B\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570\u662FParent4\uFF0C\u663E\u7136\u8FD9\u662F\u4E0D\u5BF9\u7684\uFF0C\u5E94\u8BE5\u662FChild4\u3002</p></blockquote><p>\u7B2C\u4E94\u79CD\u65B9\u5F0F(\u6700\u63A8\u8350\u4F7F\u7528)\uFF1A\u4F18\u53162</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  function Parent5 () {
    this.name = &#39;parent5&#39;;
    this.play = [1, 2, 3];
  }
  function Child5() {
    Parent5.call(this);
    this.type = &#39;child5&#39;;
  }
  Child5.prototype = Object.create(Parent5.prototype);
  Child5.prototype.constructor = Child5;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u662F\u6700\u63A8\u8350\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u63A5\u8FD1\u5B8C\u7F8E\u7684\u7EE7\u627F\u3002</p></blockquote><h2 id="_13-\u5B9E\u73B0\u4E00\u4E2Ajson-stringify" tabindex="-1"><a class="header-anchor" href="#_13-\u5B9E\u73B0\u4E00\u4E2Ajson-stringify" aria-hidden="true">#</a> 13 \u5B9E\u73B0\u4E00\u4E2AJSON.stringify</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JSON.stringify(value[, replacer [, space]])\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Boolean | Number| String</code>\u7C7B\u578B\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u539F\u59CB\u503C\u3002</li><li><code>undefined</code>\u3001\u4EFB\u610F\u51FD\u6570\u4EE5\u53CA<code>symbol</code>\uFF0C\u4F1A\u88AB\u5FFD\u7565\uFF08\u51FA\u73B0\u5728\u975E\u6570\u7EC4\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u4E2D\u65F6\uFF09\uFF0C\u6216\u8005\u88AB\u8F6C\u6362\u6210\xA0<code>null</code>\uFF08\u51FA\u73B0\u5728\u6570\u7EC4\u4E2D\u65F6\uFF09\u3002</li><li>\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u4F1A\u88AB\u5FFD\u7565\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u901A\u8FC7\u67D0\u79CD\u95F4\u63A5\u7684\u65B9\u5F0F\u6307\u56DE\u8BE5\u5BF9\u8C61\u672C\u8EAB\uFF0C\u5373\u5FAA\u73AF\u5F15\u7528\uFF0C\u5C5E\u6027\u4E5F\u4F1A\u88AB\u5FFD\u7565</li><li>\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u901A\u8FC7\u67D0\u79CD\u95F4\u63A5\u7684\u65B9\u5F0F\u6307\u56DE\u8BE5\u5BF9\u8C61\u672C\u8EAB\uFF0C\u5373\u5FAA\u73AF\u5F15\u7528\uFF0C\u5C5E\u6027\u4E5F\u4F1A\u88AB\u5FFD\u7565</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function jsonStringify(obj) {
    let type = typeof obj;
    if (type !== &quot;object&quot;) {
        if (/string|undefined|function/.test(type)) {
            obj = &#39;&quot;&#39; + obj + &#39;&quot;&#39;;
        }
        return String(obj);
    } else {
        let json = []
        let arr = Array.isArray(obj)
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (/string|undefined|function/.test(type)) {
                v = &#39;&quot;&#39; + v + &#39;&quot;&#39;;
            } else if (type === &quot;object&quot;) {
                v = jsonStringify(v);
            }
            json.push((arr ? &quot;&quot; : &#39;&quot;&#39; + k + &#39;&quot;:&#39;) + String(v));
        }
        return (arr ? &quot;[&quot; : &quot;{&quot;) + String(json) + (arr ? &quot;]&quot; : &quot;}&quot;)
    }
}
jsonStringify({x : 5}) // &quot;{&quot;x&quot;:5}&quot;
jsonStringify([1, &quot;false&quot;, false]) // &quot;[1,&quot;false&quot;,false]&quot;
jsonStringify({b: undefined}) // &quot;{&quot;b&quot;:&quot;undefined&quot;}&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-\u5B9E\u73B0\u4E00\u4E2Ajson-parse" tabindex="-1"><a class="header-anchor" href="#_14-\u5B9E\u73B0\u4E00\u4E2Ajson-parse" aria-hidden="true">#</a> 14 \u5B9E\u73B0\u4E00\u4E2AJSON.parse</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JSON.parse(text[, reviver])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7528\u6765\u89E3\u6790JSON\u5B57\u7B26\u4E32\uFF0C\u6784\u9020\u7531\u5B57\u7B26\u4E32\u63CF\u8FF0\u7684JavaScript\u503C\u6216\u5BF9\u8C61\u3002\u63D0\u4F9B\u53EF\u9009\u7684reviver\u51FD\u6570\u7528\u4EE5\u5728\u8FD4\u56DE\u4E4B\u524D\u5BF9\u6240\u5F97\u5230\u7684\u5BF9\u8C61\u6267\u884C\u53D8\u6362(\u64CD\u4F5C)</p></blockquote><p>\u7B2C\u4E00\u79CD\uFF1A\u76F4\u63A5\u8C03\u7528 eval</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function jsonParse(opt) {
    return eval(&#39;(&#39; + opt + &#39;)&#39;);
}
jsonParse(jsonStringify({x : 5}))
// Object { x: 5}
jsonParse(jsonStringify([1, &quot;false&quot;, false]))
// [1, &quot;false&quot;, falsr]
jsonParse(jsonStringify({b: undefined}))
// Object { b: &quot;undefined&quot;}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u907F\u514D\u5728\u4E0D\u5FC5\u8981\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\xA0<code>eval</code>\uFF0C<code>eval()</code>\xA0\u662F\u4E00\u4E2A\u5371\u9669\u7684\u51FD\u6570\uFF0C\u4ED6\u6267\u884C\u7684\u4EE3\u7801\u62E5\u6709\u7740\u6267\u884C\u8005\u7684\u6743\u5229\u3002\u5982\u679C\u4F60\u7528<code>eval()</code>\u8FD0\u884C\u7684\u5B57\u7B26\u4E32\u4EE3\u7801\u88AB\u6076\u610F\u65B9\uFF08\u4E0D\u6000\u597D\u610F\u7684\u4EBA\uFF09\u64CD\u63A7\u4FEE\u6539\uFF0C\u60A8\u6700\u7EC8\u53EF\u80FD\u4F1A\u5728\u60A8\u7684\u7F51\u9875/\u6269\u5C55\u7A0B\u5E8F\u7684\u6743\u9650\u4E0B\uFF0C\u5728\u7528\u6237\u8BA1\u7B97\u673A\u4E0A\u8FD0\u884C\u6076\u610F\u4EE3\u7801\u3002\u5B83\u4F1A\u6267\u884CJS\u4EE3\u7801\uFF0C\u6709XSS\u6F0F\u6D1E\u3002</p></blockquote><p>\u5982\u679C\u4F60\u53EA\u60F3\u8BB0\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5C31\u5F97\u5BF9\u53C2\u6570json\u505A\u6821\u9A8C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var rx_one = /^[\\],:{}\\s]*$/;
var rx_two = /\\\\(?:[&quot;\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rx_three = /&quot;[^&quot;\\\\\\n\\r]*&quot;|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g;
var rx_four = /(?:^|:|,)(?:\\s*\\[)+/g;
if (
    rx_one.test(
        json
            .replace(rx_two, &quot;@&quot;)
            .replace(rx_three, &quot;]&quot;)
            .replace(rx_four, &quot;&quot;)
    )
) {
    var obj = eval(&quot;(&quot; +json + &quot;)&quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u79CD\uFF1AFunction</p><blockquote><p>\u6838\u5FC3\uFF1AFunction\u4E0Eeval\u6709\u76F8\u540C\u7684\u5B57\u7B26\u4E32\u53C2\u6570\u7279\u6027</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var func = new Function(arg1, arg2, ..., functionBody);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8F6C\u6362JSON\u7684\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u53EA\u9700\u8981\u8FD9\u4E48\u505A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var jsonStr = &#39;{ &quot;age&quot;: 20, &quot;name&quot;: &quot;jack&quot; }&#39;
var json = (new Function(&#39;return &#39; + jsonStr))();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>eval</code>\xA0\u4E0E\xA0<code>Function</code>\u90FD\u6709\u7740\u52A8\u6001\u7F16\u8BD1js\u4EE3\u7801\u7684\u4F5C\u7528\uFF0C\u4F46\u662F\u5728\u5B9E\u9645\u7684\u7F16\u7A0B\u4E2D\u5E76\u4E0D\u63A8\u8350\u4F7F\u7528</p></blockquote><h2 id="_15-promise\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#_15-promise\u76F8\u5173" aria-hidden="true">#</a> 15 Promise\u76F8\u5173</h2><h3 id="_1-\u5B9E\u73B0promise\u7684-resolve" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9E\u73B0promise\u7684-resolve" aria-hidden="true">#</a> 1 \u5B9E\u73B0Promise\u7684 resolve</h3><blockquote><p>\u5B9E\u73B0 resolve \u9759\u6001\u65B9\u6CD5\u6709\u4E09\u4E2A\u8981\u70B9:</p></blockquote><ul><li>\u4F20\u53C2\u4E3A\u4E00\u4E2A\xA0<code>Promise</code>, \u5219\u76F4\u63A5\u8FD4\u56DE\u5B83\u3002</li><li>\u4F20\u53C2\u4E3A\u4E00\u4E2A\xA0<code>thenable</code>\xA0\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u7684\xA0<code>Promise</code>\xA0\u4F1A\u8DDF\u968F\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u91C7\u7528\u5B83\u7684\u6700\u7EC8\u72B6\u6001\u4F5C\u4E3A\u81EA\u5DF1\u7684\u72B6\u6001\u3002</li><li>\u5176\u4ED6\u60C5\u51B5\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4EE5\u8BE5\u503C\u4E3A\u6210\u529F\u72B6\u6001\u7684<code>promise</code>\u5BF9\u8C61\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.resolve = (param) =&gt; {
  if(param instanceof Promise) return param;
  return new Promise((resolve, reject) =&gt; {
    if(param &amp;&amp; param.then &amp;&amp; typeof param.then === &#39;function&#39;) {
      // param \u72B6\u6001\u53D8\u4E3A\u6210\u529F\u4F1A\u8C03\u7528resolve\uFF0C\u5C06\u65B0 Promise \u7684\u72B6\u6001\u53D8\u4E3A\u6210\u529F\uFF0C\u53CD\u4E4B\u4EA6\u7136
      param.then(resolve, reject);
    }else {
      resolve(param);
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5B9E\u73B0-promise-reject" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0-promise-reject" aria-hidden="true">#</a> 2 \u5B9E\u73B0 Promise.reject</h3><blockquote><p>Promise.reject \u4E2D\u4F20\u5165\u7684\u53C2\u6570\u4F1A\u4F5C\u4E3A\u4E00\u4E2A reason \u539F\u5C01\u4E0D\u52A8\u5730\u5F80\u4E0B\u4F20, \u5B9E\u73B0\u5982\u4E0B:</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.reject = function (reason) {
    return new Promise((resolve, reject) =&gt; {
        reject(reason);
    });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5B9E\u73B0-promise-prototype-finally" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9E\u73B0-promise-prototype-finally" aria-hidden="true">#</a> 3 \u5B9E\u73B0 Promise.prototype.finally</h3><blockquote><p>\u65E0\u8BBA\u5F53\u524D Promise \u662F\u6210\u529F\u8FD8\u662F\u5931\u8D25\uFF0C\u8C03\u7528finally\u4E4B\u540E\u90FD\u4F1A\u6267\u884C finally \u4E2D\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u5E76\u4E14\u5C06\u503C\u539F\u5C01\u4E0D\u52A8\u7684\u5F80\u4E0B\u4F20\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.prototype.finally = function(callback) {
  this.then(value =&gt; {
    return Promise.resolve(callback()).then(() =&gt; {
      return value;
    })
  }, error =&gt; {
    return Promise.resolve(callback()).then(() =&gt; {
      throw error;
    })
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u5B9E\u73B0-promise-all" tabindex="-1"><a class="header-anchor" href="#_4-\u5B9E\u73B0-promise-all" aria-hidden="true">#</a> 4 \u5B9E\u73B0 Promise.all</h3><blockquote><p>\u5BF9\u4E8E all \u65B9\u6CD5\u800C\u8A00\uFF0C\u9700\u8981\u5B8C\u6210\u4E0B\u9762\u7684\u6838\u5FC3\u529F\u80FD:</p></blockquote><ul><li>\u4F20\u5165\u53C2\u6570\u4E3A\u4E00\u4E2A\u7A7A\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u5219\u76F4\u63A5\u8FDB\u884C<code>resolve</code>\u3002</li><li>\u5982\u679C\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A<code>promise</code>\u5931\u8D25\uFF0C\u90A3\u4E48<code>Promise.all</code>\u8FD4\u56DE\u7684<code>promise</code>\u5BF9\u8C61\u5931\u8D25\u3002</li><li>\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C<code>Promise.all</code>\xA0\u8FD4\u56DE\u7684\xA0<code>promise</code>\xA0\u7684\u5B8C\u6210\u72B6\u6001\u7684\u7ED3\u679C\u90FD\u662F\u4E00\u4E2A\u6570\u7EC4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.all = function(promises) {
  return new Promise((resolve, reject) =&gt; {
    let result = [];
    let index = 0;
    let len = promises.length;
    if(len === 0) {
      resolve(result);
      return;
    }

    for(let i = 0; i &lt; len; i++) {
      // \u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5 promise[i].then, \u56E0\u4E3Apromise[i]\u53EF\u80FD\u4E0D\u662F\u4E00\u4E2Apromise
      Promise.resolve(promise[i]).then(data =&gt; {
        result[i] = data;
        index++;
        if(index === len) resolve(result);
      }).catch(err =&gt; {
        reject(err);
      })
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-promise-allsettle" tabindex="-1"><a class="header-anchor" href="#_5-promise-allsettle" aria-hidden="true">#</a> 5 promise.allsettle()</h3><blockquote><p>\u63A5\u53D7\u7684\u7ED3\u679C\u4E0E\u5165\u53C2\u65F6\u7684promise\u5B9E\u4F8B\u4E00\u4E00\u5BF9\u5E94\uFF0C\u4E14\u7ED3\u679C\u7684\u6BCF\u4E00\u9879\u90FD\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u544A\u8BC9\u4F60\u7ED3\u679C\u548C\u503C\uFF0C\u5BF9\u8C61\u5185\u90FD\u6709\u4E00\u4E2A\u5C5E\u6027\u53EB&quot;status&quot;\uFF0C\u7528\u6765\u660E\u786E\u77E5\u9053\u5BF9\u5E94\u7684\u8FD9\u4E2Apromise\u5B9E\u4F8B\u7684\u72B6\u6001\uFF08fulfilled\u6216rejected\uFF09\uFF0Cfulfilled\u65F6\uFF0C\u5BF9\u8C61\u6709value\u5C5E\u6027\uFF0Crejected\u65F6\u6709reason\u5C5E\u6027\uFF0C\u5BF9\u5E94\u4E24\u79CD\u72B6\u6001\u7684\u8FD4\u56DE\u503C\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: &#39;fulfilled&#39;, value: 42 },
//    { status: &#39;rejected&#39;, reason: -1 }
// ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u91CD\u8981\u7684\u4E00\u70B9\u662F\uFF0C\u4ED6\u4E0D\u8BBA\u63A5\u53D7\u5165\u53C2\u7684promise\u672C\u8EAB\u7684\u72B6\u6001\uFF0C\u4F1A\u8FD4\u56DE\u6240\u6709promise\u7684\u7ED3\u679C\uFF0C\u4F46\u8FD9\u4E00\u70B9<code>Promise.all</code>\u505A\u4E0D\u5230\uFF0C\u5982\u679C\u4F60\u9700\u8981\u77E5\u9053\u6240\u6709\u5165\u53C2\u7684\u5F02\u6B65\u64CD\u4F5C\u7684\u6240\u6709\u7ED3\u679C\uFF0C\u6216\u8005\u9700\u8981\u77E5\u9053\u8FD9\u4E9B\u5F02\u6B65\u64CD\u4F5C\u662F\u5426\u5168\u90E8\u7ED3\u675F\uFF0C\u5E94\u8BE5\u4F7F\u7528<code>promise.allSettled()</code></p></blockquote><p>\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function allSettled(iterable) {
  return new Promise((resolve, reject) =&gt; {
    function addElementToResult(i, elem) {
      result[i] = elem;
      elementCount++;
      if (elementCount === result.length) {
        resolve(result);
      }
    }

    let index = 0;
    for (const promise of iterable) {
      // Capture the current value of \`index\`
      const currentIndex = index;
      promise.then(
        (value) =&gt; addElementToResult(
          currentIndex, {
            status: &#39;fulfilled&#39;,
            value
          }),
        (reason) =&gt; addElementToResult(
          currentIndex, {
            status: &#39;rejected&#39;,
            reason
          }));
      index++;
    }
    if (index === 0) {
      resolve([]);
      return;
    }
    let elementCount = 0;
    const result = new Array(index);
  });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u5B9E\u73B0-promise-race" tabindex="-1"><a class="header-anchor" href="#_6-\u5B9E\u73B0-promise-race" aria-hidden="true">#</a> 6 \u5B9E\u73B0 Promise.race</h3><blockquote><p>race \u7684\u5B9E\u73B0\u76F8\u6BD4\u4E4B\u4E0B\u5C31\u7B80\u5355\u4E00\u4E9B\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A promise \u6267\u884C\u5B8C\uFF0C\u76F4\u63A5 resolve \u5E76\u505C\u6B62\u6267\u884C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.race = function(promises) {
  return new Promise((resolve, reject) =&gt; {
    let len = promises.length;
    if(len === 0) return;
    for(let i = 0; i &lt; len; i++) {
      Promise.resolve(promise[i]).then(data =&gt; {
        resolve(data);
        return;
      }).catch(err =&gt; {
        reject(err);
        return;
      })
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u5B9E\u73B0\u4E00\u4E2A\u7B80\u7248promise" tabindex="-1"><a class="header-anchor" href="#_7-\u5B9E\u73B0\u4E00\u4E2A\u7B80\u7248promise" aria-hidden="true">#</a> 7 \u5B9E\u73B0\u4E00\u4E2A\u7B80\u7248Promise</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F7F\u7528
var promise = new Promise((resolve,reject) =&gt; {
    if (\u64CD\u4F5C\u6210\u529F) {
        resolve(value)
    } else {
        reject(error)
    }
})
promise.then(function (value) {
    // success
},function (value) {
    // failure
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function myPromise(constructor) {
    let self = this;
    self.status = &quot;pending&quot;   // \u5B9A\u4E49\u72B6\u6001\u6539\u53D8\u524D\u7684\u521D\u59CB\u72B6\u6001
    self.value = undefined;   // \u5B9A\u4E49\u72B6\u6001\u4E3Aresolved\u7684\u65F6\u5019\u7684\u72B6\u6001
    self.reason = undefined;  // \u5B9A\u4E49\u72B6\u6001\u4E3Arejected\u7684\u65F6\u5019\u7684\u72B6\u6001
    function resolve(value) {
       if(self.status === &quot;pending&quot;) {
          self.value = value;
          self.status = &quot;resolved&quot;;
       }
    }
    function reject(reason) {
       if(self.status === &quot;pending&quot;) {
          self.reason = reason;
          self.status = &quot;rejected&quot;;
       }
    }
    // \u6355\u83B7\u6784\u9020\u5F02\u5E38
    try {
       constructor(resolve,reject);
    } catch(e) {
       reject(e);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6DFB\u52A0 then \u65B9\u6CD5
myPromise.prototype.then = function(onFullfilled,onRejected) {
   let self = this;
   switch(self.status) {
      case &quot;resolved&quot;:
        onFullfilled(self.value);
        break;
      case &quot;rejected&quot;:
        onRejected(self.reason);
        break;
      default:
   }
}

var p = new myPromise(function(resolve,reject) {
    resolve(1)
});
p.then(function(x) {
    console.log(x) // 1
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528class\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class MyPromise {
  constructor(fn) {
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    this.state = &#39;PENDING&#39;;
    this.value = &#39;&#39;;

    fn(this.resolve.bind(this), this.reject.bind(this));

  }

  resolve(value) {
    if (this.state === &#39;PENDING&#39;) {
      this.state = &#39;RESOLVED&#39;;
      this.value = value;

      this.resolvedCallbacks.map(cb =&gt; cb(value));
    }
  }

  reject(value) {
    if (this.state === &#39;PENDING&#39;) {
      this.state = &#39;REJECTED&#39;;
      this.value = value;

      this.rejectedCallbacks.map(cb =&gt; cb(value));
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === &#39;PENDING&#39;) {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);

    }

    if (this.state === &#39;RESOLVED&#39;) {
      onFulfilled(this.value);
    }

    if (this.state === &#39;REJECTED&#39;) {
      onRejected(this.value);
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-promise-\u5B9E\u73B0-\u8BE6\u7EC6" tabindex="-1"><a class="header-anchor" href="#_8-promise-\u5B9E\u73B0-\u8BE6\u7EC6" aria-hidden="true">#</a> 8 Promise \u5B9E\u73B0-\u8BE6\u7EC6</h3><ul><li>\u53EF\u4EE5\u628A\xA0<code>Promise</code>\xA0\u770B\u6210\u4E00\u4E2A\u72B6\u6001\u673A\u3002\u521D\u59CB\u662F\xA0<code>pending</code>\xA0\u72B6\u6001\uFF0C\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\xA0<code>resolve</code>\u548C\xA0<code>reject</code>\xA0\uFF0C\u5C06\u72B6\u6001\u8F6C\u53D8\u4E3A\xA0<code>resolved</code>\u6216\u8005\xA0<code>rejected</code>\xA0\u72B6\u6001\uFF0C\u72B6\u6001\u4E00\u65E6\u6539\u53D8\u5C31\u4E0D\u80FD\u518D\u6B21\u53D8\u5316\u3002</li><li><code>then</code>\xA0\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\xA0<code>Promise</code>\xA0\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u8BE5\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u65B0\u7684\u5B9E\u4F8B\u800C\u4E0D\u662F\u4E4B\u524D\u7684\u5B9E\u4F8B\u3002\u56E0\u4E3A\xA0<code>Promise</code>\xA0\u89C4\u8303\u89C4\u5B9A\u9664\u4E86\xA0<code>pending</code>\xA0\u72B6\u6001\uFF0C\u5176\u4ED6\u72B6\u6001\u662F\u4E0D\u53EF\u4EE5\u6539\u53D8\u7684\uFF0C\u5982\u679C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u76F8\u540C\u5B9E\u4F8B\u7684\u8BDD\uFF0C\u591A\u4E2A\xA0<code>then</code>\xA0\u8C03\u7528\u5C31\u5931\u53BB\u610F\u4E49\u4E86\u3002</li><li>\u5BF9\u4E8E\xA0<code>then</code>\u6765\u8BF4\uFF0C\u672C\u8D28\u4E0A\u53EF\u4EE5\u628A\u5B83\u770B\u6210\u662F\xA0<code>flatMap</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E09\u79CD\u72B6\u6001
const PENDING = &quot;pending&quot;;
const RESOLVED = &quot;resolved&quot;;
const REJECTED = &quot;rejected&quot;;
// promise \u63A5\u6536\u4E00\u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u8BE5\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C
function MyPromise(fn) {
  let _this = this;
  _this.currentState = PENDING;
  _this.value = undefined;
  // \u7528\u4E8E\u4FDD\u5B58 then \u4E2D\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 promise
  // \u72B6\u6001\u4E3A pending \u65F6\u624D\u4F1A\u7F13\u5B58\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u5B9E\u4F8B\u81F3\u591A\u7F13\u5B58\u4E00\u4E2A
  _this.resolvedCallbacks = [];
  _this.rejectedCallbacks = [];

  _this.resolve = function (value) {
    if (value instanceof MyPromise) {
      // \u5982\u679C value \u662F\u4E2A Promise\uFF0C\u9012\u5F52\u6267\u884C
      return value.then(_this.resolve, _this.reject)
    }
    setTimeout(() =&gt; { // \u5F02\u6B65\u6267\u884C\uFF0C\u4FDD\u8BC1\u6267\u884C\u987A\u5E8F
      if (_this.currentState === PENDING) {
        _this.currentState = RESOLVED;
        _this.value = value;
        _this.resolvedCallbacks.forEach(cb =&gt; cb());
      }
    })
  };

  _this.reject = function (reason) {
    setTimeout(() =&gt; { // \u5F02\u6B65\u6267\u884C\uFF0C\u4FDD\u8BC1\u6267\u884C\u987A\u5E8F
      if (_this.currentState === PENDING) {
        _this.currentState = REJECTED;
        _this.value = reason;
        _this.rejectedCallbacks.forEach(cb =&gt; cb());
      }
    })
  }
  // \u7528\u4E8E\u89E3\u51B3\u4EE5\u4E0B\u95EE\u9898
  // new Promise(() =&gt; throw Error(&#39;error))
  try {
    fn(_this.resolve, _this.reject);
  } catch (e) {
    _this.reject(e);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  var self = this;
  // \u89C4\u8303 2.2.7\uFF0Cthen \u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 promise
  var promise2;
  // \u89C4\u8303 2.2.onResolved \u548C onRejected \u90FD\u4E3A\u53EF\u9009\u53C2\u6570
  // \u5982\u679C\u7C7B\u578B\u4E0D\u662F\u51FD\u6570\u9700\u8981\u5FFD\u7565\uFF0C\u540C\u65F6\u4E5F\u5B9E\u73B0\u4E86\u900F\u4F20
  // Promise.resolve(4).then().then((value) =&gt; console.log(value))
  onResolved = typeof onResolved === &#39;function&#39; ? onResolved : v =&gt; v;
  onRejected = typeof onRejected === &#39;function&#39; ? onRejected : r =&gt; throw r;

  if (self.currentState === RESOLVED) {
    return (promise2 = new MyPromise(function (resolve, reject) {
      // \u89C4\u8303 2.2.4\uFF0C\u4FDD\u8BC1 onFulfilled\uFF0ConRjected \u5F02\u6B65\u6267\u884C
      // \u6240\u4EE5\u7528\u4E86 setTimeout \u5305\u88F9\u4E0B
      setTimeout(function () {
        try {
          var x = onResolved(self.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (reason) {
          reject(reason);
        }
      });
    }));
  }

  if (self.currentState === REJECTED) {
    return (promise2 = new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        // \u5F02\u6B65\u6267\u884ConRejected
        try {
          var x = onRejected(self.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (reason) {
          reject(reason);
        }
      });
    }));
  }

  if (self.currentState === PENDING) {
    return (promise2 = new MyPromise(function (resolve, reject) {
      self.resolvedCallbacks.push(function () {
        // \u8003\u8651\u5230\u53EF\u80FD\u4F1A\u6709\u62A5\u9519\uFF0C\u6240\u4EE5\u4F7F\u7528 try/catch \u5305\u88F9
        try {
          var x = onResolved(self.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });

      self.rejectedCallbacks.push(function () {
        try {
          var x = onRejected(self.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });
    }));
  }
};
// \u89C4\u8303 2.3
function resolutionProcedure(promise2, x, resolve, reject) {
  // \u89C4\u8303 2.3.1\uFF0Cx \u4E0D\u80FD\u548C promise2 \u76F8\u540C\uFF0C\u907F\u514D\u5FAA\u73AF\u5F15\u7528
  if (promise2 === x) {
    return reject(new TypeError(&quot;Error&quot;));
  }
  // \u89C4\u8303 2.3.2
  // \u5982\u679C x \u4E3A Promise\uFF0C\u72B6\u6001\u4E3A pending \u9700\u8981\u7EE7\u7EED\u7B49\u5F85\u5426\u5219\u6267\u884C
  if (x instanceof MyPromise) {
    if (x.currentState === PENDING) {
      x.then(function (value) {
        // \u518D\u6B21\u8C03\u7528\u8BE5\u51FD\u6570\u662F\u4E3A\u4E86\u786E\u8BA4 x resolve \u7684
        // \u53C2\u6570\u662F\u4EC0\u4E48\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u57FA\u672C\u7C7B\u578B\u5C31\u518D\u6B21 resolve
        // \u628A\u503C\u4F20\u7ED9\u4E0B\u4E2A then
        resolutionProcedure(promise2, value, resolve, reject);
      }, reject);
    } else {
      x.then(resolve, reject);
    }
    return;
  }
  // \u89C4\u8303 2.3.3.3.3
  // reject \u6216\u8005 resolve \u5176\u4E2D\u4E00\u4E2A\u6267\u884C\u8FC7\u5F97\u8BDD\uFF0C\u5FFD\u7565\u5176\u4ED6\u7684
  let called = false;
  // \u89C4\u8303 2.3.3\uFF0C\u5224\u65AD x \u662F\u5426\u4E3A\u5BF9\u8C61\u6216\u8005\u51FD\u6570
  if (x !== null &amp;&amp; (typeof x === &quot;object&quot; || typeof x === &quot;function&quot;)) {
    // \u89C4\u8303 2.3.3.2\uFF0C\u5982\u679C\u4E0D\u80FD\u53D6\u51FA then\uFF0C\u5C31 reject
    try {
      // \u89C4\u8303 2.3.3.1
      let then = x.then;
      // \u5982\u679C then \u662F\u51FD\u6570\uFF0C\u8C03\u7528 x.then
      if (typeof then === &quot;function&quot;) {
        // \u89C4\u8303 2.3.3.3
        then.call(
          x,
          y =&gt; {
            if (called) return;
            called = true;
            // \u89C4\u8303 2.3.3.3.1
            resolutionProcedure(promise2, y, resolve, reject);
          },
          e =&gt; {
            if (called) return;
            called = true;
            reject(e);
          }
        );
      } else {
        // \u89C4\u8303 2.3.3.4
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // \u89C4\u8303 2.3.4\uFF0Cx \u4E3A\u57FA\u672C\u7C7B\u578B
    resolve(x);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-\u5B8C\u6574\u5B9E\u73B0promises-a-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_9-\u5B8C\u6574\u5B9E\u73B0promises-a-\u89C4\u8303" aria-hidden="true">#</a> 9 \u5B8C\u6574\u5B9E\u73B0Promises/A+\u89C4\u8303</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * Promises/A+\u89C4\u8303 \u5B9E\u73B0\u4E00\u4E2Apromise
 * https://promisesaplus.com/
*/

const EMUM = {
  PENDING: &#39;PENDING&#39;,
  FULFILLED: &#39;FULFILLED&#39;,
  REJECTED: &#39;REJECTED&#39;
}

// x \u8FD4\u56DE\u503C
// promise2 then\u7684\u65F6\u5019new\u7684promise
// promise2\u7684resolve, reject
const resolvePromise = (x, promise2, resolve, reject)=&gt;{
  // \u89E3\u6790promise\u7684\u503C\u89E3\u6790promise2\u662F\u6210\u529F\u8FD8\u662F\u5931\u8D25 \u4F20\u9012\u5230\u4E0B\u5C42then
  if(x === promise2) {
    reject(new TypeError(&#39;\u7C7B\u578B\u9519\u8BEF&#39;))
  }
  // \u8FD9\u91CC\u7684x\u5982\u679C\u662F\u4E00\u4E2Apromise\u7684\u8BDD \u53EF\u80FD\u662F\u5176\u4ED6\u7684promise\uFF0C\u53EF\u80FD\u8C03\u7528\u4E86\u6210\u529F \u53C8\u8C03\u7528\u4E86\u5931\u8D25
  // \u9632\u6B62resolve\u7684\u65F6\u5019 \u53C8throw err\u629B\u51FA\u5F02\u5E38\u5230reject\u4E86
  let called
  // \u5982\u679Cx\u662Fpromise \u90A3\u4E48\u5C31\u91C7\u7528\u4ED6\u7684\u72B6\u6001
  // \u6709then\u65B9\u6CD5\u662Fpromise
  if(typeof x === &#39;object&#39; &amp;&amp; typeof x!== null || typeof x === &#39;function&#39;) {
    // x\u662F\u5BF9\u8C61\u6216\u51FD\u6570
    try {
      let then = x.then // \u7F13\u5B58\uFF0C\u4E0D\u7528\u591A\u6B21\u53D6\u503C
      if(typeof then === &#39;function&#39;) {
        // \u662Fpromise\uFF0C\u8C03\u7528then\u65B9\u6CD5\u91CC\u9762\u6709this\uFF0C\u9700\u8981\u4F20\u5165this\u4E3Ax\u624D\u80FD\u53D6\u5230then\u65B9\u6CD5\u91CC\u9762\u7684\u503Cthis.value
        then.call(x, y=&gt;{// \u6210\u529F
          // y\u503C\u53EF\u80FD\u4E5F\u662F\u4E00\u4E2Apromise \u5982resolve(new Promise()) \u6B64\u65F6\u7684y==new Promise()
          // \u9012\u5F52\u89E3\u6790y\uFF0C\u76F4\u5230\u62FF\u5230\u666E\u901A\u7684\u503Cresolve(x\u51FA\u53BB)
          if(called) return;
          called = true;

          resolvePromise(y, promise2, resolve, reject)
        },r=&gt;{// \u4E00\u65E6\u5931\u8D25\u76F4\u63A5\u5931\u8D25
          if(called) return;
          called = true;
          reject(r)
        })
      } else {
        // \u666E\u901A\u5BF9\u8C61\u4E0D\u662Fpromise
        resolve(x)
      }
    } catch (e) {
      // \u5BF9\u8C61\u53D6\u503C\u53EF\u80FD\u62A5\u9519\uFF0C\u7528defineProperty\u5B9A\u4E49get \u629B\u51FA\u5F02\u5E38
      if(called) return;
      called = true;
      reject(e)
    }
  } else {
    // x\u662F\u666E\u901A\u503C
    resolve(x) // \u76F4\u63A5\u6210\u529F
  }

}
class myPromise {
  constructor(executor) {
    this.status = EMUM.PENDING // \u5F53\u524D\u72B6\u6001
    this.value = undefined // resolve\u63A5\u6536\u503C
    this.reason = undefined // reject\u5931\u8D25\u8FD4\u56DE\u503C

    /**
     * \u540C\u4E00\u4E2Apromise\u53EF\u4EE5then\u591A\u6B21(\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F)
     * \u8C03\u7528then\u65F6 \u5F53\u524D\u72B6\u6001\u662F\u7B49\u5F85\u6001\uFF0C\u9700\u8981\u5C06\u5F53\u524D\u6210\u529F\u6216\u5931\u8D25\u7684\u56DE\u8C03\u5B58\u653E\u8D77\u6765\uFF08\u8BA2\u9605\uFF09
     * \u8C03\u7528resolve\u65F6 \u5C06\u8BA2\u9605\u51FD\u6570\u8FDB\u884C\u6267\u884C\uFF08\u53D1\u5E03\uFF09
    */
    // \u6210\u529F\u961F\u5217
    this.onResolvedCallbacks = []
    // \u5931\u8D25\u961F\u5217
    this.onRejectedCallbacks = []
    const resolve = value =&gt;{
      // \u5982\u679Cvalue\u662F\u4E00\u4E2Apromise\uFF0C\u9700\u8981\u9012\u5F52\u89E3\u6790
      // \u5982 myPromise.resolve(new myPromise()) \u9700\u8981\u89E3\u6790value
      if(value instanceof myPromise) {
        // \u4E0D\u505C\u7684\u89E3\u6790 \u76F4\u5230\u503C\u4E0D\u662Fpromise
        return value.then(resolve,reject)
      }

      if(this.status === EMUM.PENDING) {
        this.status = EMUM.FULFILLED
        this.value = value

        this.onResolvedCallbacks.forEach(fn=&gt;fn())
      }
    }
    const reject = reason =&gt;{
      if(this.status === EMUM.PENDING) {
        this.status = EMUM.REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach(fn=&gt;fn())
      }
    }
    try {
      executor(resolve,reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onFulFilled, onRejected) {
    // \u900F\u4F20 \u5904\u7406\u9ED8\u8BA4\u4E0D\u4F20\u7684\u60C5\u51B5
    // new Promise((resolve,reject)=&gt;{
    //   resolve(1)
    // }).then().then().then(d=&gt;{})
    // new Promise((resolve,reject)=&gt;{
    //   resolve(1)
    // }).then(v=&gt;v).then(v=&gt;v).then(d=&gt;{})
    // new Promise((resolve,reject)=&gt;{
    //   reject(1)
    // }).then().then().then(null, e=&gt;{console.log(e)})
    // new Promise((resolve,reject)=&gt;{
    //   reject(1)
    // }).then(null,e=&gt;{throw e}).then(null,e=&gt;{throw e}).then(null,e=&gt;{console.log(e)})
    onFulFilled = typeof onFulFilled === &#39;function&#39; ? onFulFilled : v =&gt; v
    onRejected = typeof onRejected === &#39;function&#39; ? onRejected : err =&gt; {throw err}

    // \u8C03\u7528then \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684promise
    let promise2 = new myPromise((resolve,reject)=&gt;{
      // \u6839\u636Evalue\u5224\u65AD\u662Fresolve \u8FD8\u662Freject value\u4E5F\u53EF\u80FD\u662Fpromise
      if(this.status === EMUM.FULFILLED) {
        setTimeout(() =&gt; {
          try {
            // \u6210\u529F\u56DE\u8C03\u7ED3\u679C
            let x = onFulFilled(this.value)
            // \u89E3\u6790promise
            resolvePromise(x, promise2,resolve,reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
      if(this.status === EMUM.REJECTED) {
        setTimeout(() =&gt; {
          try {
            let x = onRejected(this.reason)
            // \u89E3\u6790promise
            resolvePromise(x, promise2,resolve,reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
      // \u7528\u6237\u8FD8\u672A\u8C03\u7528resolve\u6216reject\u65B9\u6CD5
      if(this.status === EMUM.PENDING) {
        this.onResolvedCallbacks.push(()=&gt;{
          try {
            let x = onFulFilled(this.value)
            // \u89E3\u6790promise
            resolvePromise(x, promise2,resolve,reject)
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedCallbacks.push(()=&gt;{
          try {
            let x = onRejected(this.reason)
            // \u89E3\u6790promise
            resolvePromise(x, promise2,resolve,reject)
          } catch (error) {
            reject(error)
          }
        })
      }
    })

    return promise2
  }
  catch(errCallback) {
    // \u7B49\u540C\u4E8E\u6CA1\u6709\u6210\u529F\uFF0C\u628A\u5931\u8D25\u653E\u8FDB\u53BB\u800C\u5DF2
    return this.then(null, errCallback)
  }
  // myPromise.resolve \u5177\u5907\u7B49\u5F85\u529F\u80FD\u7684 \u5982\u679C\u53C2\u6570\u7684promise\u4F1A\u7B49\u5F85promise\u89E3\u6790\u5B8C\u6BD5\u5728\u5411\u4E0B\u6267\u884C
  static resolve(val) {
    return new myPromise((resolve,reject)=&gt;{
      resolve(val)
    })
  }
  // myPromise.reject \u76F4\u63A5\u5C06\u503C\u8FD4\u56DE
  static reject(reason) {
    return new myPromise((resolve,reject)=&gt;{
      reject(reason)
    })
  }
  // finally\u4F20\u5165\u7684\u51FD\u6570 \u65E0\u8BBA\u6210\u529F\u6216\u5931\u8D25\u90FD\u6267\u884C
  // Promise.reject(100).finally(()=&gt;{console.log(1)}).then(d=&gt;console.log(&#39;success&#39;,d)).catch(er=&gt;console.log(&#39;faild&#39;,er))
  // Promise.reject(100).finally(()=&gt;new Promise()).then(d=&gt;console.log(d)).catch(er=&gt;)
  finally(callback) {
    return this.then((val)=&gt;{
      return myPromise.resolve(callback()).then(()=&gt;val)
    },(err)=&gt;{
      return myPromise.resolve(callback()).then(()=&gt;{throw err})
    })
  }
  // Promise.all
  static all(values) {
    return new myPromise((resolve,reject)=&gt;{
      let resultArr = []
      let orderIndex = 0
      const processResultByKey = (value,index)=&gt;{
        resultArr[index] = value
        // \u5904\u7406\u5B8C\u5168\u90E8
        if(++orderIndex === values.length) {
          resolve(resultArr) // \u5904\u7406\u5B8C\u6210\u7684\u7ED3\u679C\u8FD4\u56DE\u53BB
        }
      }
      for (let i = 0; i &lt; values.length; i++) {
        const value = values[i];
        // \u662Fpromise
        if(value &amp;&amp; typeof value.then === &#39;function&#39;) {
          value.then((val)=&gt;{
            processResultByKey(val,i)
          },reject)
        } else {
          // \u4E0D\u662Fpromise\u60C5\u51B5
          processResultByKey(value,i)
        }
      }
    })
  }
  static race(promises) {
    // \u91C7\u7528\u6700\u65B0\u6210\u529F\u6216\u5931\u8D25\u7684\u4F5C\u4E3A\u7ED3\u679C
    return new myPromise((resolve,reject)=&gt;{
      for (let i = 0; i &lt; promises.length; i++) {
        let val = promises[i]
        if(val &amp;&amp; typeof val.then === &#39;function&#39;) {
          // \u4EFB\u4F55\u4E00\u4E2Apromise\u5148\u8C03\u7528resolve\u6216reject\u5C31\u8FD4\u56DE\u7ED3\u679C\u4E86 \u4E5F\u5C31\u662F\u8FD4\u56DE\u6267\u884C\u6700\u5FEB\u7684\u90A3\u4E2Apromise\u7684\u7ED3\u679C
          val.then(resolve,reject)
        }else{
          // \u666E\u901A\u503C
          resolve(val)
        }
      }
    })
  }
}

/**
 * =====\u6D4B\u8BD5\u7528\u4F8B-====
 */
// let promise1 = new myPromise((resolve,reject)=&gt;{
//   setTimeout(() =&gt; {
//     resolve(&#39;\u6210\u529F&#39;)
//   }, 900);
// })

// promise1.then(val=&gt;{
//   console.log(&#39;success&#39;, val)
// },reason=&gt;{
//   console.log(&#39;fail&#39;, reason)
// })

/**
 * then\u7684\u4F7F\u7528\u65B9\u5F0F \u666E\u901A\u503C\u610F\u5473\u4E0D\u662Fpromise
 *
 * 1\u3001then\u4E2D\u7684\u56DE\u8C03\u6709\u4E24\u4E2A\u65B9\u6CD5 \u6210\u529F\u6216\u5931\u8D25 \u4ED6\u4EEC\u7684\u7ED3\u679C\u8FD4\u56DE\uFF08\u666E\u901A\u503C\uFF09\u4F1A\u4F20\u9012\u7ED9\u5916\u5C42\u7684\u4E0B\u4E00\u4E2Athen\u4E2D
 * 2\u3001\u53EF\u4EE5\u5728\u6210\u529F\u6216\u5931\u8D25\u4E2D\u629B\u51FA\u5F02\u5E38\uFF0C\u8D70\u5230\u4E0B\u4E00\u6B21then\u7684\u5931\u8D25\u4E2D
 * 3\u3001\u8FD4\u56DE\u7684\u662F\u4E00\u4E2Apromsie\uFF0C\u90A3\u4E48\u4F1A\u7528\u8FD9\u4E2Apromise\u7684\u72B6\u6001\u4F5C\u4E3A\u7ED3\u679C\uFF0C\u4F1A\u7528promise\u7684\u7ED3\u679C\u5411\u4E0B\u4F20\u9012
 * 4\u3001\u9519\u8BEF\u5904\u7406\uFF0C\u4F1A\u9ED8\u8BA4\u5148\u627E\u79BB\u81EA\u5DF1\u6700\u65B0\u7684\u9519\u8BEF\u5904\u7406\uFF0C\u627E\u4E0D\u5230\u5C31\u5411\u4E0B\u67E5\u627E\uFF0C\u627E\u6253\u4E86\u5C31\u6267\u884C
 */

// read(&#39;./name.txt&#39;).then(data=&gt;{
//   return &#39;123&#39;
// }).then(data=&gt;{

// }).then(null,err=&gt;{

// })
// // .catch(err=&gt;{ // catch\u5C31\u662F\u6CA1\u6709\u6210\u529F\u7684promise

// // })

/**
 * promise.then\u5B9E\u73B0\u539F\u7406\uFF1A\u901A\u8FC7\u6BCF\u6B21\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684promise\u6765\u5B9E\u73B0\uFF08promise\u4E00\u65E6\u6210\u529F\u5C31\u4E0D\u80FD\u5931\u8D25\uFF0C\u5931\u8D25\u5C31\u4E0D\u80FD\u6210\u529F\uFF09
 *
 */

// function read(data) {
//   return new myPromise((resolve,reject)=&gt;{
//     setTimeout(() =&gt; {
//       resolve(new myPromise((resolve,reject)=&gt;resolve(data)))
//     }, 1000);
//   })
// }

// let promise2 = read({name: &#39;poetry&#39;}).then(data=&gt;{
//   return data
// }).then().then().then(data=&gt;{
//   console.log(data,&#39;-data-&#39;)
// },(err)=&gt;{
//   console.log(err,&#39;-err-&#39;)
// })

// finally\u6D4B\u8BD5
// myPromise
//   .resolve(100)
//   .finally(()=&gt;{
//     return new myPromise((resolve,reject)=&gt;setTimeout(() =&gt; {
//       resolve(100)
//     }, 100))
//   })
//   .then(d=&gt;console.log(&#39;finally success&#39;,d))
//   .catch(er=&gt;console.log(er, &#39;finally err&#39;))

/**
 * promise.all \u6D4B\u8BD5
 *
 * myPromise.all \u89E3\u51B3\u5E76\u53D1\u95EE\u9898 \u591A\u4E2A\u5F02\u6B65\u5E76\u53D1\u83B7\u53D6\u6700\u7EC8\u7684\u7ED3\u679C
*/

// myPromise.all([1,2,3,4,new myPromise((resolve,reject)=&gt;{
//   setTimeout(() =&gt; {
//     resolve(&#39;ok1&#39;)
//   }, 1000);
// }),new myPromise((resolve,reject)=&gt;{
//   setTimeout(() =&gt; {
//     resolve(&#39;ok2&#39;)
//   }, 1000);
// })]).then(d=&gt;{
//   console.log(d,&#39;myPromise.all.resolve&#39;)
// }).catch(err=&gt;{
//   console.log(err,&#39;myPromise.all.reject&#39;)
// })

// \u5B9E\u73B0promise\u4E2D\u65AD\u8BF7\u6C42
let promise = new Promise((resolve,reject)=&gt;{
  setTimeout(() =&gt; {
    // \u6A21\u62DF\u63A5\u53E3\u8C03\u7528 ajax\u8C03\u7528\u8D85\u65F6
    resolve(&#39;\u6210\u529F&#39;)
  }, 10000);
})

function promiseWrap(promise) {
  // \u5305\u88C5\u4E00\u4E2Apromise \u53EF\u4EE5\u63A7\u5236\u539F\u6765\u7684promise\u662F\u6210\u529F \u8FD8\u662F\u5931\u8D25
  let abort
  let newPromsie = new myPromise((resolve,reject)=&gt;{
    abort = reject
  })
  // \u53EA\u8981\u63A7\u5236newPromsie\u5931\u8D25\uFF0C\u5C31\u53EF\u4EE5\u63A7\u5236\u88AB\u5305\u88C5\u7684promise\u8D70\u5411\u5931\u8D25
  // Promise.race \u4EFB\u4F55\u4E00\u4E2A\u5148\u6210\u529F\u6216\u8005\u5931\u8D25 \u5C31\u53EF\u4EE5\u83B7\u5F97\u7ED3\u679C
  let p = myPromise.race([promise, newPromsie])
  p.abort = abort

  return p
}

let newPromise = promiseWrap(promise)

setTimeout(() =&gt; {
  // \u8D85\u8FC73\u79D2\u8D85\u65F6
  newPromise.abort(&#39;\u8BF7\u6C42\u8D85\u65F6&#39;)
}, 3000);

newPromise.then(d=&gt;{
  console.log(&#39;d&#39;,d)
}).catch(err=&gt;{
  console.log(&#39;err&#39;,err)
})

// \u4F7F\u7528promises-aplus-tests \u6D4B\u8BD5\u5199\u7684promise\u662F\u5426\u89C4\u8303
// \u5168\u5C40\u5B89\u88C5 cnpm i -g promises-aplus-tests
// \u547D\u4EE4\u884C\u6267\u884C promises-aplus-tests promise.js
// \u6D4B\u8BD5\u5165\u53E3 \u4EA7\u751F\u5EF6\u8FDF\u5BF9\u8C61
myPromise.defer = myPromise.deferred = function () {
  let dfd = {}
  dfd.promise = new myPromise((resolve,reject)=&gt;{
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}

// \u5EF6\u8FDF\u5BF9\u8C61\u7528\u6237
// ![](./assets/handwritten/20210509172817.png)
// promise\u89E3\u51B3\u5D4C\u5957\u95EE\u9898
// function readData(url) {
//   let dfd = myPromise.defer()
//   fs.readFile(url, &#39;utf8&#39;, function (err,data) {
//     if(err) {
//       dfd.reject()
//     }
//     dfd.resolve(data)
//   })
//   return dfd.promise
// }
// readData().then(d=&gt;{
//   return d
// })

module.exports = myPromise

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-\u5B9E\u73B0promisify" tabindex="-1"><a class="header-anchor" href="#_10-\u5B9E\u73B0promisify" aria-hidden="true">#</a> 10 \u5B9E\u73B0Promisify</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const fs = require(&#39;fs&#39;)
const path = require(&#39;path&#39;)

// node\u4E2D\u4F7F\u7528
// const fs = require(&#39;fs&#39;).promises 12.18\u7248
// const promisify = require(&#39;util&#39;).promisify

// \u5305\u88C5node api promise\u5316 \u5178\u578B\u7684\u9AD8\u7EA7\u51FD\u6570
const promisify = fn=&gt;{
  return (...args)=&gt;{
    return new Promise((resolve,reject)=&gt;{
      fn(...args, (err,data)=&gt;{
        if(err) {
          reject(err)
        }
        resolve(data)
      })
    })
  }
}

// const read = promisify(fs.readFile)

// read(path.join(__dirname, &#39;./promise.js&#39;), &#39;utf8&#39;).then(d=&gt;{
//   console.log(d)
// })

// promise\u5316node\u6240\u6709api
const promisifyAll = target=&gt;{
  Reflect.ownKeys(target).forEach(key=&gt;{
    if(typeof target[key] === &#39;function&#39;) {
      target[key+&#39;Async&#39;] = promisify(target[key])
    }
  })
  return target
}

// promise\u5316fs\u4E0B\u7684\u51FD\u6570
const promisifyNew = promisifyAll(fs)

promisifyNew.readFileAsync(path.join(__dirname, &#39;./promise.js&#39;), &#39;utf8&#39;).then(d=&gt;{
  console.log(d)
})

module.exports = {
  promisify,
  promisifyAll
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-\u89E3\u6790-url-params-\u4E3A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_16-\u89E3\u6790-url-params-\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a> 16 \u89E3\u6790 URL Params \u4E3A\u5BF9\u8C61</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let url = &#39;http://www.domain.com/?user=anonymous&amp;id=123&amp;id=456&amp;city=%E5%8C%97%E4%BA%AC&amp;enabled&#39;;
parseParam(url)
/* \u7ED3\u679C
{ user: &#39;anonymous&#39;,
  id: [ 123, 456 ], // \u91CD\u590D\u51FA\u73B0\u7684 key \u8981\u7EC4\u88C5\u6210\u6570\u7EC4\uFF0C\u80FD\u88AB\u8F6C\u6210\u6570\u5B57\u7684\u5C31\u8F6C\u6210\u6570\u5B57\u7C7B\u578B
  city: &#39;\u5317\u4EAC&#39;, // \u4E2D\u6587\u9700\u89E3\u7801
  enabled: true, // \u672A\u6307\u5B9A\u503C\u5F97 key \u7EA6\u5B9A\u4E3A true
}
*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function parseParam(url) {
  const paramsStr = /.+\\?(.+)$/.exec(url)[1]; // \u5C06 ? \u540E\u9762\u7684\u5B57\u7B26\u4E32\u53D6\u51FA\u6765
  const paramsArr = paramsStr.split(&#39;&amp;&#39;); // \u5C06\u5B57\u7B26\u4E32\u4EE5 &amp; \u5206\u5272\u540E\u5B58\u5230\u6570\u7EC4\u4E2D
  let paramsObj = {};
  // \u5C06 params \u5B58\u5230\u5BF9\u8C61\u4E2D
  paramsArr.forEach(param =&gt; {
    if (/=/.test(param)) { // \u5904\u7406\u6709 value \u7684\u53C2\u6570
      let [key, val] = param.split(&#39;=&#39;); // \u5206\u5272 key \u548C value
      val = decodeURIComponent(val); // \u89E3\u7801
      val = /^\\d+$/.test(val) ? parseFloat(val) : val; // \u5224\u65AD\u662F\u5426\u8F6C\u4E3A\u6570\u5B57

      if (paramsObj.hasOwnProperty(key)) { // \u5982\u679C\u5BF9\u8C61\u6709 key\uFF0C\u5219\u6DFB\u52A0\u4E00\u4E2A\u503C
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // \u5982\u679C\u5BF9\u8C61\u6CA1\u6709\u8FD9\u4E2A key\uFF0C\u521B\u5EFA key \u5E76\u8BBE\u7F6E\u503C
        paramsObj[key] = val;
      }
    } else { // \u5904\u7406\u6CA1\u6709 value \u7684\u53C2\u6570
      paramsObj[param] = true;
    }
  })

  return paramsObj;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-\u6A21\u677F\u5F15\u64CE\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_17-\u6A21\u677F\u5F15\u64CE\u5B9E\u73B0" aria-hidden="true">#</a> 17 \u6A21\u677F\u5F15\u64CE\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let template = &#39;\u6211\u662F{{name}}\uFF0C\u5E74\u9F84{{age}}\uFF0C\u6027\u522B{{sex}}&#39;;
let data = {
  name: &#39;\u59D3\u540D&#39;,
  age: 18
}
render(template, data); // \u6211\u662F\u59D3\u540D\uFF0C\u5E74\u9F8418\uFF0C\u6027\u522Bundefined

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function render(template, data) {
  const reg = /\\{\\{(\\w+)\\}\\}/; // \u6A21\u677F\u5B57\u7B26\u4E32\u6B63\u5219
  if (reg.test(template)) { // \u5224\u65AD\u6A21\u677F\u91CC\u662F\u5426\u6709\u6A21\u677F\u5B57\u7B26\u4E32
    const name = reg.exec(template)[1]; // \u67E5\u627E\u5F53\u524D\u6A21\u677F\u91CC\u7B2C\u4E00\u4E2A\u6A21\u677F\u5B57\u7B26\u4E32\u7684\u5B57\u6BB5
    template = template.replace(reg, data[name]); // \u5C06\u7B2C\u4E00\u4E2A\u6A21\u677F\u5B57\u7B26\u4E32\u6E32\u67D3
    return render(template, data); // \u9012\u5F52\u7684\u6E32\u67D3\u5E76\u8FD4\u56DE\u6E32\u67D3\u540E\u7684\u7ED3\u6784
  }
  return template; // \u5982\u679C\u6A21\u677F\u6CA1\u6709\u6A21\u677F\u5B57\u7B26\u4E32\u76F4\u63A5\u8FD4\u56DE
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-\u8F6C\u5316\u4E3A\u9A7C\u5CF0\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#_18-\u8F6C\u5316\u4E3A\u9A7C\u5CF0\u547D\u540D" aria-hidden="true">#</a> 18 \u8F6C\u5316\u4E3A\u9A7C\u5CF0\u547D\u540D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var s1 = &quot;get-element-by-id&quot;

// \u8F6C\u5316\u4E3A getElementById

var f = function(s) {
    return s.replace(/-\\w/g, function(x) {
        return x.slice(1).toUpperCase();
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-\u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26\u548C\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#_19-\u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26\u548C\u4E2A\u6570" aria-hidden="true">#</a> 19 \u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26\u548C\u4E2A\u6570</h2><blockquote><p>\u4F8B: abbcccddddd -&gt; \u5B57\u7B26\u6700\u591A\u7684\u662Fd\uFF0C\u51FA\u73B0\u4E865\u6B21</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let str = &quot;abcabcabcbbccccc&quot;;
let num = 0;
let char = &#39;&#39;;

 // \u4F7F\u5176\u6309\u7167\u4E00\u5B9A\u7684\u6B21\u5E8F\u6392\u5217
str = str.split(&#39;&#39;).sort().join(&#39;&#39;);
// &quot;aaabbbbbcccccccc&quot;

// \u5B9A\u4E49\u6B63\u5219\u8868\u8FBE\u5F0F
let re = /(\\w)\\1+/g;
str.replace(re,($0,$1) =&gt; {
    if(num &lt; $0.length){
        num = $0.length;
        char = $1;
    }
});
console.log(\`\u5B57\u7B26\u6700\u591A\u7684\u662F\${char}\uFF0C\u51FA\u73B0\u4E86\${num}\u6B21\`);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-\u5B57\u7B26\u4E32\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_20-\u5B57\u7B26\u4E32\u67E5\u627E" aria-hidden="true">#</a> 20 \u5B57\u7B26\u4E32\u67E5\u627E</h2><blockquote><p>\u8BF7\u4F7F\u7528\u6700\u57FA\u672C\u7684\u904D\u5386\u6765\u5B9E\u73B0\u5224\u65AD\u5B57\u7B26\u4E32 a \u662F\u5426\u88AB\u5305\u542B\u5728\u5B57\u7B26\u4E32 b \u4E2D\uFF0C\u5E76\u8FD4\u56DE\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF08\u627E\u4E0D\u5230\u8FD4\u56DE -1\uFF09\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a=&#39;34&#39;;b=&#39;1234567&#39;; // \u8FD4\u56DE 2
a=&#39;35&#39;;b=&#39;1234567&#39;; // \u8FD4\u56DE -1
a=&#39;355&#39;;b=&#39;12354355&#39;; // \u8FD4\u56DE 5
isContain(a,b);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isContain(a, b) {
  for (let i in b) {
    if (a[0] === b[i]) {
      let tmp = true;
      for (let j in a) {
        if (a[j] !== b[~~i + ~~j]) {
          tmp = false;
        }
      }
      if (tmp) {
        return i;
      }
    }
  }
  return -1;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-\u5B9E\u73B0\u5343\u4F4D\u5206\u9694\u7B26" tabindex="-1"><a class="header-anchor" href="#_21-\u5B9E\u73B0\u5343\u4F4D\u5206\u9694\u7B26" aria-hidden="true">#</a> 21 \u5B9E\u73B0\u5343\u4F4D\u5206\u9694\u7B26</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4FDD\u7559\u4E09\u4F4D\u5C0F\u6570
parseToMoney(1234.56); // return &#39;1,234.56&#39;
parseToMoney(123456789); // return &#39;123,456,789&#39;
parseToMoney(1087654.321); // return &#39;1,087,654.321&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function parseToMoney(num) {
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, &#39;.&#39;);
  integer = integer.replace(/\\d(?=(\\d{3})+$)/g, &#39;$&amp;,&#39;);
  return integer + &#39;.&#39; + (decimal ? decimal : &#39;&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-\u5224\u65AD\u662F\u5426\u662F\u7535\u8BDD\u53F7\u7801" tabindex="-1"><a class="header-anchor" href="#_22-\u5224\u65AD\u662F\u5426\u662F\u7535\u8BDD\u53F7\u7801" aria-hidden="true">#</a> 22 \u5224\u65AD\u662F\u5426\u662F\u7535\u8BDD\u53F7\u7801</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isPhone(tel) {
    var regx = /^1[34578]\\d{9}$/;
    return regx.test(tel);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-\u9A8C\u8BC1\u662F\u5426\u662F\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#_23-\u9A8C\u8BC1\u662F\u5426\u662F\u90AE\u7BB1" aria-hidden="true">#</a> 23 \u9A8C\u8BC1\u662F\u5426\u662F\u90AE\u7BB1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isEmail(email) {
    var regx = /^([a-zA-Z0-9_\\-])+@([a-zA-Z0-9_\\-])+(\\.[a-zA-Z0-9_\\-])+$/;
    return regx.test(email);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-\u9A8C\u8BC1\u662F\u5426\u662F\u8EAB\u4EFD\u8BC1" tabindex="-1"><a class="header-anchor" href="#_24-\u9A8C\u8BC1\u662F\u5426\u662F\u8EAB\u4EFD\u8BC1" aria-hidden="true">#</a> 24 \u9A8C\u8BC1\u662F\u5426\u662F\u8EAB\u4EFD\u8BC1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isCardNo(number) {
    var regx = /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/;
    return regx.test(number);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-\u7528es5\u5B9E\u73B0\u6570\u7EC4\u7684map\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_25-\u7528es5\u5B9E\u73B0\u6570\u7EC4\u7684map\u65B9\u6CD5" aria-hidden="true">#</a> 25 \u7528ES5\u5B9E\u73B0\u6570\u7EC4\u7684map\u65B9\u6CD5</h2><ul><li>\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u6709\u54EA\u4E9B\uFF0C\u8FD4\u56DE\u503C\u5982\u4F55\u5904\u7406</li><li>\u4E0D\u4FEE\u6539\u539F\u6765\u7684\u6570\u7EC4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.MyMap = function(fn, context){
  // \u8F6C\u6362\u7C7B\u6570\u7EC4
  var arr = Array.prototype.slice.call(this);//\u7531\u4E8E\u662FES5\u6240\u4EE5\u5C31\u4E0D\u7528...\u5C55\u5F00\u7B26\u4E86
  var mappedArr = [];
  for (var i = 0; i &lt; arr.length; i++ ){
    // \u628A\u5F53\u524D\u503C\u3001\u7D22\u5F15\u3001\u5F53\u524D\u6570\u7EC4\u8FD4\u56DE\u53BB\u3002\u8C03\u7528\u7684\u65F6\u5019\u4F20\u5230\u51FD\u6570\u53C2\u6570\u4E2D [1,2,3,4].map((curr,index,arr))
    mappedArr.push(fn.call(context, arr[i], i, this));
  }
  return mappedArr;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_26-\u7528es5\u5B9E\u73B0\u6570\u7EC4\u7684reduce\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_26-\u7528es5\u5B9E\u73B0\u6570\u7EC4\u7684reduce\u65B9\u6CD5" aria-hidden="true">#</a> 26 \u7528ES5\u5B9E\u73B0\u6570\u7EC4\u7684reduce\u65B9\u6CD5</h2><ul><li>\u521D\u59CB\u503C\u4E0D\u4F20\u600E\u4E48\u5904\u7406</li><li>\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u6709\u54EA\u4E9B\uFF0C\u8FD4\u56DE\u503C\u5982\u4F55\u5904\u7406\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.myReduce = function(fn, initialValue) {
  var arr = Array.prototype.slice.call(this);
  var res, startIndex;
  res = initialValue ? initialValue : arr[0]; // \u4E0D\u4F20\u9ED8\u8BA4\u53D6\u6570\u7EC4\u7B2C\u4E00\u9879
  startIndex = initialValue ? 0 : 1;
  for(var i = startIndex; i &lt; arr.length; i++) {
    // \u628A\u521D\u59CB\u503C\u3001\u5F53\u524D\u503C\u3001\u7D22\u5F15\u3001\u5F53\u524D\u6570\u7EC4\u8FD4\u56DE\u53BB\u3002\u8C03\u7528\u7684\u65F6\u5019\u4F20\u5230\u51FD\u6570\u53C2\u6570\u4E2D [1,2,3,4].reduce((initVal,curr,index,arr))
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u4E8E\u666E\u901A\u51FD\u6570\uFF0C\u7ED1\u5B9Athis\u6307\u5411</li><li>\u5BF9\u4E8E\u6784\u9020\u51FD\u6570\uFF0C\u8981\u4FDD\u8BC1\u539F\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u4E0D\u80FD\u4E22\u5931</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Function.prototype.bind = function(context, ...args) {
    let self = this;//\u8C28\u8BB0this\u8868\u793A\u8C03\u7528bind\u7684\u51FD\u6570
    let fBound = function() {
        //this instanceof fBound\u4E3Atrue\u8868\u793A\u6784\u9020\u51FD\u6570\u7684\u60C5\u51B5\u3002\u5982new func.bind(obj)
        return self.apply(this instanceof fBound ? this : context || window, args.concat(Array.prototype.slice.call(arguments)));
    }
    fBound.prototype = Object.create(this.prototype);//\u4FDD\u8BC1\u539F\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u4E0D\u4E22\u5931
    return fBound;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5927\u5BB6\u5E73\u65F6\u8BF4\u7684\u624B\u5199bind\uFF0C\u5176\u5B9E\u5C31\u8FD9\u4E48\u7B80\u5355</p><h2 id="_27-\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_27-\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> 27 \u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F</h2><blockquote><p>\u6838\u5FC3\u8981\u70B9: \u7528\u95ED\u5305\u548CProxy\u5C5E\u6027\u62E6\u622A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function proxy(func) {
    let instance;
    let handler = {
        constructor(target, args) {
            if(!instance) {
                instance = Reflect.constructor(fun, args);
            }
            return instance;
        }
    }
    return new Proxy(func, handler);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_28-\u5B9E\u73B0\u6570\u7EC4\u7684flat" tabindex="-1"><a class="header-anchor" href="#_28-\u5B9E\u73B0\u6570\u7EC4\u7684flat" aria-hidden="true">#</a> 28 \u5B9E\u73B0\u6570\u7EC4\u7684flat</h2><p>\u9700\u6C42:\u591A\u7EF4\u6570\u7EC4=&gt;\u4E00\u7EF4\u6570\u7EC4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let ary = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7B2C0\u79CD\u5904\u7406:\u76F4\u63A5\u7684\u8C03\u7528
arr_flat = arr.flat(Infinity);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7B2C\u4E00\u79CD\u5904\u7406
ary = str.replace(/(\\[|\\])/g, &#39;&#39;).split(&#39;,&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7B2C\u4E8C\u79CD\u5904\u7406
str = str.replace(/(\\[\\]))/g, &#39;&#39;);
str = &#39;[&#39; + str + &#39;]&#39;;
ary = JSON.parse(str);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7B2C\u4E09\u79CD\u5904\u7406\uFF1A\u9012\u5F52\u5904\u7406
let result = [];
let fn = function(ary) {
  for(let i = 0; i &lt; ary.length; i++) }{
    let item = ary[i];
    if (Array.isArray(ary[i])){
      fn(item);
    } else {
      result.push(item);
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7B2C\u56DB\u79CD\u5904\u7406\uFF1A\u7528 reduce \u5B9E\u73B0\u6570\u7EC4\u7684 flat \u65B9\u6CD5
function flatten(ary) {
    return ary.reduce((pre, cur) =&gt; {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}
let ary = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flatten(ary))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7B2C\u4E94\u79CD\u5904\u7406\uFF1A\u6269\u5C55\u8FD0\u7B97\u7B26
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u6241\u5E73\u5316</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function objectFlat(obj = {}) {
  const res = {}
  function flat(item, preKey = &#39;&#39;) {
    Object.entries(item).forEach(([key, val]) =&gt; {
      const newKey = preKey ? \`\${preKey}.\${key}\` : key
      if (val &amp;&amp; typeof val === &#39;object&#39;) {
        flat(val, newKey)
      } else {
        res[newKey] = val
      }
    })
  }
  flat(obj)
  return res
}

// \u6D4B\u8BD5
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_29-\u8BF7\u5B9E\u73B0\u4E00\u4E2A-add-\u51FD\u6570-\u6EE1\u8DB3\u4EE5\u4E0B\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_29-\u8BF7\u5B9E\u73B0\u4E00\u4E2A-add-\u51FD\u6570-\u6EE1\u8DB3\u4EE5\u4E0B\u529F\u80FD" aria-hidden="true">#</a> 29 \u8BF7\u5B9E\u73B0\u4E00\u4E2A add \u51FD\u6570\uFF0C\u6EE1\u8DB3\u4EE5\u4E0B\u529F\u80FD</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3)\uFF1B// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function add() {
  let args = [].slice.call(arguments);

  let fn = function(){
   let fn_args = [].slice.call(arguments)
   return add.apply(null,args.concat(fn_args))
  }

  fn.toString = function(){
    return args.reduce((a,b)=&gt;a+b)
  }

  return fn
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_30-\u5B9E\u73B0\u4E00\u4E2A-sleep-\u51FD\u6570-\u6BD4\u5982-sleep-1000-\u610F\u5473\u7740\u7B49\u5F851000\u6BEB\u79D2" tabindex="-1"><a class="header-anchor" href="#_30-\u5B9E\u73B0\u4E00\u4E2A-sleep-\u51FD\u6570-\u6BD4\u5982-sleep-1000-\u610F\u5473\u7740\u7B49\u5F851000\u6BEB\u79D2" aria-hidden="true">#</a> 30 \u5B9E\u73B0\u4E00\u4E2A sleep \u51FD\u6570\uFF0C\u6BD4\u5982 sleep(1000) \u610F\u5473\u7740\u7B49\u5F851000\u6BEB\u79D2</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const sleep = (time) =&gt; {
  return new Promise(resolve =&gt; setTimeout(resolve, time))
}

sleep(1000).then(() =&gt; {
    // \u8FD9\u91CC\u5199\u4F60\u7684\u9A9A\u64CD\u4F5C
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31-\u5B9E\u73B0-5-add-3-minus-2-\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_31-\u5B9E\u73B0-5-add-3-minus-2-\u529F\u80FD" aria-hidden="true">#</a> 31 \u5B9E\u73B0 (5).add(3).minus(2) \u529F\u80FD</h2><blockquote><p>\u4F8B\uFF1A 5 + 3 - 2\uFF0C\u7ED3\u679C\u4E3A 6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Number.prototype.add = function(n) {
  return this.valueOf() + n;
};
Number.prototype.minus = function(n) {
  return this.valueOf() - n;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_32-\u7ED9\u5B9A\u4E24\u4E2A\u6570\u7EC4-\u5199\u4E00\u4E2A\u65B9\u6CD5\u6765\u8BA1\u7B97\u5B83\u4EEC\u7684\u4EA4\u96C6" tabindex="-1"><a class="header-anchor" href="#_32-\u7ED9\u5B9A\u4E24\u4E2A\u6570\u7EC4-\u5199\u4E00\u4E2A\u65B9\u6CD5\u6765\u8BA1\u7B97\u5B83\u4EEC\u7684\u4EA4\u96C6" aria-hidden="true">#</a> 32 \u7ED9\u5B9A\u4E24\u4E2A\u6570\u7EC4\uFF0C\u5199\u4E00\u4E2A\u65B9\u6CD5\u6765\u8BA1\u7B97\u5B83\u4EEC\u7684\u4EA4\u96C6</h2><blockquote><p>\u4F8B\u5982\uFF1A\u7ED9\u5B9A nums1 = [1, 2, 2, 1]\uFF0Cnums2 = [2, 2]\uFF0C\u8FD4\u56DE [2, 2]\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function union (arr1, arr2) {
  return arr1.filter(item =&gt; {
  	return arr2.indexOf(item) &gt; - 1;
  })
}
 const a = [1, 2, 2, 1];
 const b = [2, 3, 2];
 console.log(union(a, b)); // [2, 2]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_33-\u5B9E\u73B0\u4E00\u4E2Ajs\u51FD\u6570\u67EF\u91CC\u5316" tabindex="-1"><a class="header-anchor" href="#_33-\u5B9E\u73B0\u4E00\u4E2Ajs\u51FD\u6570\u67EF\u91CC\u5316" aria-hidden="true">#</a> 33 \u5B9E\u73B0\u4E00\u4E2AJS\u51FD\u6570\u67EF\u91CC\u5316</h2><blockquote><p>\u67EF\u91CC\u5316\u7684\u5B9A\u4E49\uFF1A\u63A5\u6536\u4E00\u90E8\u5206\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u63A5\u6536\u5269\u4F59\u53C2\u6570\uFF0C\u63A5\u6536\u8DB3\u591F\u53C2\u6570\u540E\uFF0C\u6267\u884C\u539F\u51FD\u6570\u3002</p></blockquote><p>\u5F53\u67EF\u91CC\u5316\u51FD\u6570\u63A5\u6536\u5230\u8DB3\u591F\u53C2\u6570\u540E\uFF0C\u5C31\u4F1A\u6267\u884C\u539F\u51FD\u6570\uFF0C\u5982\u4F55\u53BB\u786E\u5B9A\u4F55\u65F6\u8FBE\u5230\u8DB3\u591F\u7684\u53C2\u6570\u5462\uFF1F</p><p>\u6709\u4E24\u79CD\u601D\u8DEF\uFF1A</p><ul><li>\u901A\u8FC7\u51FD\u6570\u7684\xA0<code>length</code>\xA0\u5C5E\u6027\uFF0C\u83B7\u53D6\u51FD\u6570\u7684\u5F62\u53C2\u4E2A\u6570\uFF0C\u5F62\u53C2\u7684\u4E2A\u6570\u5C31\u662F\u6240\u9700\u7684\u53C2\u6570\u4E2A\u6570</li><li>\u5728\u8C03\u7528\u67EF\u91CC\u5316\u5DE5\u5177\u51FD\u6570\u65F6\uFF0C\u624B\u52A8\u6307\u5B9A\u6240\u9700\u7684\u53C2\u6570\u4E2A\u6570</li></ul><p>\u5C06\u8FD9\u4E24\u70B9\u7ED3\u5408\u4E00\u4E0B\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355 curry \u51FD\u6570</p><p>\u901A\u7528\u7248</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length &lt; length) {
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6\u5199\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const curry = (fn, arr = []) =&gt; (...args) =&gt; (
  arg =&gt; arg.length === fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])

let curryTest=curry((a,b,c,d)=&gt;a+b+c+d)
curryTest(1,2,3)(4) //\u8FD4\u56DE10
curryTest(1,2)(4)(3) //\u8FD4\u56DE10
curryTest(1,2)(3,4) //\u8FD4\u56DE10

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_34-\u5B9E\u73B0\u4E00\u4E2A\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#_34-\u5B9E\u73B0\u4E00\u4E2A\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> 34 \u5B9E\u73B0\u4E00\u4E2A\u53CC\u5411\u7ED1\u5B9A</h2><p>defineProperty \u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6570\u636E
const data = {
  text: &#39;default&#39;
};
const input = document.getElementById(&#39;input&#39;);
const span = document.getElementById(&#39;span&#39;);
// \u6570\u636E\u52AB\u6301
Object.defineProperty(data, &#39;text&#39;, {
  // \u6570\u636E\u53D8\u5316 --&gt; \u4FEE\u6539\u89C6\u56FE
  set(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  }
});
// \u89C6\u56FE\u66F4\u6539 --&gt; \u6570\u636E\u53D8\u5316
input.addEventListener(&#39;keyup&#39;, function(e) {
  data.text = e.target.value;
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>proxy \u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6570\u636E
const data = {
  text: &#39;default&#39;
};
const input = document.getElementById(&#39;input&#39;);
const span = document.getElementById(&#39;span&#39;);
// \u6570\u636E\u52AB\u6301
const handler = {
  set(target, key, value) {
    target[key] = value;
    // \u6570\u636E\u53D8\u5316 --&gt; \u4FEE\u6539\u89C6\u56FE
    input.value = value;
    span.innerHTML = value;
    return value;
  }
};
const proxy = new Proxy(data, handler);

// \u89C6\u56FE\u66F4\u6539 --&gt; \u6570\u636E\u53D8\u5316
input.addEventListener(&#39;keyup&#39;, function(e) {
  proxy.text = e.target.value;
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_35-array-isarray-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_35-array-isarray-\u5B9E\u73B0" aria-hidden="true">#</a> 35 Array.isArray \u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.myIsArray = function(o) {
  return Object.prototype.toString.call(Object(o)) === &#39;[object Array]&#39;;
};

console.log(Array.myIsArray([])); // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_36-\u5BF9\u8C61\u6570\u7EC4\u5982\u4F55\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#_36-\u5BF9\u8C61\u6570\u7EC4\u5982\u4F55\u53BB\u91CD" aria-hidden="true">#</a> 36 \u5BF9\u8C61\u6570\u7EC4\u5982\u4F55\u53BB\u91CD</h2><blockquote><p>\u6839\u636E\u6BCF\u4E2A\u5BF9\u8C61\u7684\u67D0\u4E00\u4E2A\u5177\u4F53\u5C5E\u6027\u6765\u8FDB\u884C\u53BB\u91CD</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];
const result = responseList.reduce((acc, cur) =&gt; {
    const ids = acc.map(item =&gt; item.id);
    return ids.includes(cur.id) ? acc : [...acc, cur];
}, []);
console.log(result); // -&gt; [ { id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3} ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_37-\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u5224\u65AD\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_37-\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u5224\u65AD\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 37 \u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u5224\u65AD\u6570\u636E\u7C7B\u578B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function getType(obj) {
   if (obj === null) return String(obj);
   return typeof obj === &#39;object&#39;
   ? Object.prototype.toString.call(obj).replace(&#39;[object &#39;, &#39;&#39;).replace(&#39;]&#39;, &#39;&#39;).toLowerCase()
   : typeof obj;
}

// \u8C03\u7528
getType(null); // -&gt; null
getType(undefined); // -&gt; undefined
getType({}); // -&gt; object
getType([]); // -&gt; array
getType(123); // -&gt; number
getType(true); // -&gt; boolean
getType(&#39;123&#39;); // -&gt; string
getType(/123/); // -&gt; regexp
getType(new Date()); // -&gt; date

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_38-\u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26\u548C\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#_38-\u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26\u548C\u4E2A\u6570" aria-hidden="true">#</a> 38 \u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u5B57\u7B26\u548C\u4E2A\u6570</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F8B: abbcccddddd -&gt; \u5B57\u7B26\u6700\u591A\u7684\u662Fd\uFF0C\u51FA\u73B0\u4E865\u6B21

let str = &quot;abcabcabcbbccccc&quot;;
let num = 0;
let char = &#39;&#39;;

 // \u4F7F\u5176\u6309\u7167\u4E00\u5B9A\u7684\u6B21\u5E8F\u6392\u5217
str = str.split(&#39;&#39;).sort().join(&#39;&#39;);
// &quot;aaabbbbbcccccccc&quot;

// \u5B9A\u4E49\u6B63\u5219\u8868\u8FBE\u5F0F
let re = /(\\w)\\1+/g;
str.replace(re,($0,$1) =&gt; {
    if(num &lt; $0.length){
        num = $0.length;
        char = $1;
    }
});
console.log(\`\u5B57\u7B26\u6700\u591A\u7684\u662F\${char}\uFF0C\u51FA\u73B0\u4E86\${num}\u6B21\`);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_39-\u6570\u7EC4\u53BB\u91CD\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_39-\u6570\u7EC4\u53BB\u91CD\u95EE\u9898" aria-hidden="true">#</a> 39 \u6570\u7EC4\u53BB\u91CD\u95EE\u9898</h2><blockquote><p>\u9996\u5148:\u6211\u77E5\u9053\u591A\u5C11\u79CD\u53BB\u91CD\u65B9\u5F0F</p></blockquote><h3 id="\u53CC\u5C42-for-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5C42-for-\u5FAA\u73AF" aria-hidden="true">#</a> \u53CC\u5C42 for \u5FAA\u73AF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function distinct(arr) {
    for (let i=0, len=arr.length; i&lt;len; i++) {
        for (let j=i+1; j&lt;len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                // splice \u4F1A\u6539\u53D8\u6570\u7EC4\u957F\u5EA6\uFF0C\u6240\u4EE5\u8981\u5C06\u6570\u7EC4\u957F\u5EA6 len \u548C\u4E0B\u6807 j \u51CF\u4E00
                len--;
                j--;
            }
        }
    }
    return arr;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u601D\u60F3: \u53CC\u91CD\xA0<code>for</code>\xA0\u5FAA\u73AF\u662F\u6BD4\u8F83\u7B28\u62D9\u7684\u65B9\u6CD5\uFF0C\u5B83\u5B9E\u73B0\u7684\u539F\u7406\u5F88\u7B80\u5355\uFF1A\u5148\u5B9A\u4E49\u4E00\u4E2A\u5305\u542B\u539F\u59CB\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7136\u540E\u904D\u5386\u539F\u59CB\u6570\u7EC4\uFF0C\u5C06\u539F\u59CB\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u4E0E\u65B0\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u5982\u679C\u4E0D\u91CD\u590D\u5219\u6DFB\u52A0\u5230\u65B0\u6570\u7EC4\u4E2D\uFF0C\u6700\u540E\u8FD4\u56DE\u65B0\u6570\u7EC4\uFF1B\u56E0\u4E3A\u5B83\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F<code>O(n^2)</code>\uFF0C\u5982\u679C\u6570\u7EC4\u957F\u5EA6\u5F88\u5927\uFF0C\u6548\u7387\u4F1A\u5F88\u4F4E</p></blockquote><h3 id="array-filter-\u52A0-indexof-includes" tabindex="-1"><a class="header-anchor" href="#array-filter-\u52A0-indexof-includes" aria-hidden="true">#</a> Array.filter() \u52A0 indexOf/includes</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function distinct(a, b) {
    let arr = a.concat(b);
    return arr.filter((item, index)=&gt; {
        //return arr.indexOf(item) === index
        return arr.includes(item)
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u601D\u60F3: \u5229\u7528<code>indexOf</code>\u68C0\u6D4B\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\u662F\u5426\u548C\u5143\u7D20\u73B0\u5728\u7684\u4F4D\u7F6E\u76F8\u7B49\uFF0C\u5982\u679C\u4E0D\u7B49\u5219\u8BF4\u660E\u8BE5\u5143\u7D20\u662F\u91CD\u590D\u5143\u7D20</p></blockquote><h3 id="es6-\u4E2D\u7684-set-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#es6-\u4E2D\u7684-set-\u53BB\u91CD" aria-hidden="true">#</a> ES6 \u4E2D\u7684 Set \u53BB\u91CD</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function distinct(array) {
   return Array.from(new Set(array));
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u601D\u60F3: ES6 \u63D0\u4F9B\u4E86\u65B0\u7684\u6570\u636E\u7ED3\u6784 Set\uFF0CSet \u7ED3\u6784\u7684\u4E00\u4E2A\u7279\u6027\u5C31\u662F\u6210\u5458\u503C\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u6CA1\u6709\u91CD\u590D\u7684\u503C\u3002</p></blockquote><h3 id="reduce-\u5B9E\u73B0\u5BF9\u8C61\u6570\u7EC4\u53BB\u91CD\u590D" tabindex="-1"><a class="header-anchor" href="#reduce-\u5B9E\u73B0\u5BF9\u8C61\u6570\u7EC4\u53BB\u91CD\u590D" aria-hidden="true">#</a> reduce \u5B9E\u73B0\u5BF9\u8C61\u6570\u7EC4\u53BB\u91CD\u590D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var resources = [
    { name: &quot;\u5F20\u4E09&quot;, age: &quot;18&quot; },
    { name: &quot;\u5F20\u4E09&quot;, age: &quot;19&quot; },
    { name: &quot;\u5F20\u4E09&quot;, age: &quot;20&quot; },
    { name: &quot;\u674E\u56DB&quot;, age: &quot;19&quot; },
    { name: &quot;\u738B\u4E94&quot;, age: &quot;20&quot; },
    { name: &quot;\u8D75\u516D&quot;, age: &quot;21&quot; }
]
var temp = {};
resources = resources.reduce((prev, curv) =&gt; {
 // \u5982\u679C\u4E34\u65F6\u5BF9\u8C61\u4E2D\u6709\u8FD9\u4E2A\u540D\u5B57\uFF0C\u4EC0\u4E48\u90FD\u4E0D\u505A
 if (temp[curv.name]) {

 }else {
    // \u5982\u679C\u4E34\u65F6\u5BF9\u8C61\u6CA1\u6709\u5C31\u628A\u8FD9\u4E2A\u540D\u5B57\u52A0\u8FDB\u53BB\uFF0C\u540C\u65F6\u628A\u5F53\u524D\u7684\u8FD9\u4E2A\u5BF9\u8C61\u52A0\u5165\u5230prev\u4E2D
    temp[curv.name] = true;
    prev.push(curv);
 }
 return prev
}, []);
console.log(&quot;\u7ED3\u679C&quot;, resources);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u79CD\u65B9\u6CD5\u662F\u5229\u7528\u9AD8\u9636\u51FD\u6570\xA0<code>reduce</code>\xA0\u8FDB\u884C\u53BB\u91CD\uFF0C \u8FD9\u91CC\u53EA\u9700\u8981\u6CE8\u610F<code>initialValue</code>\u5F97\u653E\u4E00\u4E2A\u7A7A\u6570\u7EC4[]\uFF0C\u4E0D\u7136\u6CA1\u6CD5<code>push</code></p></blockquote><h2 id="_40-\u57FA\u4E8Egenerator\u51FD\u6570\u5B9E\u73B0async-await\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_40-\u57FA\u4E8Egenerator\u51FD\u6570\u5B9E\u73B0async-await\u539F\u7406" aria-hidden="true">#</a> 40 \u57FA\u4E8EGenerator\u51FD\u6570\u5B9E\u73B0async/await\u539F\u7406</h2><blockquote><p>\u6838\u5FC3\uFF1A\u4F20\u9012\u7ED9\u6211\u4E00\u4E2A<code>Generator</code>\u51FD\u6570\uFF0C\u628A\u51FD\u6570\u4E2D\u7684\u5185\u5BB9\u57FA\u4E8E<code>Iterator</code>\u8FED\u4EE3\u5668\u7684\u7279\u70B9\u4E00\u6B65\u6B65\u7684\u6267\u884C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function readFile(file) {
    return new Promise(resolve =&gt; {
        setTimeout(() =&gt; {
            resolve(file);
    }, 1000);
    })
};

function asyncFunc(generator) {
    const iterator = generator(); // \u63A5\u4E0B\u6765\u8981\u6267\u884Cnext
  // data\u4E3A\u7B2C\u4E00\u6B21\u6267\u884C\u4E4B\u540E\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u7528\u4E8E\u4F20\u7ED9\u7B2C\u4E8C\u6B21\u6267\u884C
  const next = (data) =&gt; {
        let { value, done } = iterator.next(data); // \u7B2C\u4E8C\u6B21\u6267\u884C\uFF0C\u5E76\u63A5\u6536\u7B2C\u4E00\u6B21\u7684\u8BF7\u6C42\u7ED3\u679C data

    if (done) return; // \u6267\u884C\u5B8C\u6BD5(\u5230\u7B2C\u4E09\u6B21)\u76F4\u63A5\u8FD4\u56DE
    // \u7B2C\u4E00\u6B21\u6267\u884Cnext\u65F6\uFF0Cyield\u8FD4\u56DE\u7684 promise\u5B9E\u4F8B \u8D4B\u503C\u7ED9\u4E86 value
    value.then(data =&gt; {
      next(data); // \u5F53\u7B2C\u4E00\u6B21value \u6267\u884C\u5B8C\u6BD5\u4E14\u6210\u529F\u65F6\uFF0C\u6267\u884C\u4E0B\u4E00\u6B65(\u5E76\u628A\u7B2C\u4E00\u6B21\u7684\u7ED3\u679C\u4F20\u9012\u4E0B\u4E00\u6B65)
    });
  }
  next();
};

asyncFunc(function* () {
    // \u751F\u6210\u5668\u51FD\u6570\uFF1A\u63A7\u5236\u4EE3\u7801\u4E00\u6B65\u6B65\u6267\u884C
  let data = yield readFile(&#39;a.js&#39;); // \u7B49\u8FD9\u4E00\u6B65\u9AA4\u6267\u884C\u6267\u884C\u6210\u529F\u4E4B\u540E\uFF0C\u518D\u5F80\u4E0B\u8D70\uFF0C\u6CA1\u6267\u884C\u5B8C\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u8FD4\u56DE
  data = yield readFile(data + &#39;b.js&#39;);
  return data;
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_41-\u57FA\u4E8Epromise\u5C01\u88C5ajax" tabindex="-1"><a class="header-anchor" href="#_41-\u57FA\u4E8Epromise\u5C01\u88C5ajax" aria-hidden="true">#</a> 41 \u57FA\u4E8EPromise\u5C01\u88C5Ajax</h2><ul><li>\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684Promise\u5B9E\u4F8B</li><li>\u521B\u5EFAHMLHttpRequest\u5F02\u6B65\u5BF9\u8C61</li><li>\u8C03\u7528open\u65B9\u6CD5\uFF0C\u6253\u5F00url\uFF0C\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u94FE\u63A5\uFF08\u53D1\u9001\u524D\u7684\u4E00\u4E9B\u5904\u7406\uFF09</li><li>\u76D1\u542CAjax\u72B6\u6001\u4FE1\u606F</li><li>\u5982\u679C<code>xhr.readyState == 4</code>\uFF08\u8868\u793A\u670D\u52A1\u5668\u54CD\u5E94\u5B8C\u6210\uFF0C\u53EF\u4EE5\u83B7\u53D6\u4F7F\u7528\u670D\u52A1\u5668\u7684\u54CD\u5E94\u4E86\uFF09 <ul><li><code>xhr.status == 200</code>\uFF0C\u8FD4\u56DEresolve\u72B6\u6001</li><li><code>xhr.status == 404</code>\uFF0C\u8FD4\u56DEreject\u72B6\u6001</li></ul></li><li><code>xhr.readyState !== 4</code>\uFF0C\u628A\u8BF7\u6C42\u4E3B\u4F53\u7684\u4FE1\u606F\u57FA\u4E8Esend\u53D1\u9001\u7ED9\u670D\u52A1\u5668</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function ajax(url, method) {
  return new Promise((resolve, reject) =&gt; {
    const xhr = new XMLHttpRequest()
    xhr.open(url, method, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else if (xhr.status === 404) {
          reject(new Error(&#39;404&#39;))
        }
      } else {
        reject(&#39;\u8BF7\u6C42\u6570\u636E\u5931\u8D25&#39;)
      }
    }
    xhr.send(null)
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_42-\u624B\u52A8\u5B9E\u73B0jsonp\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#_42-\u624B\u52A8\u5B9E\u73B0jsonp\u8DE8\u57DF" aria-hidden="true">#</a> 42 \u624B\u52A8\u5B9E\u73B0JSONP\u8DE8\u57DF</h2><blockquote><p>\u5229\u7528<code>&lt;script&gt;</code>\u6807\u7B7E\u4E0D\u53D7\u8DE8\u57DF\u9650\u5236\u7684\u7279\u70B9\uFF0C\u7F3A\u70B9\u662F\u53EA\u80FD\u652F\u6301\xA0<code>get</code>\xA0\u8BF7\u6C42</p></blockquote><ul><li>\u521B\u5EFA<code>script</code>\u6807\u7B7E</li><li>\u8BBE\u7F6E<code>script</code>\u6807\u7B7E\u7684<code>src</code>\u5C5E\u6027\uFF0C\u4EE5\u95EE\u53F7\u4F20\u9012\u53C2\u6570\uFF0C\u8BBE\u7F6E\u597D\u56DE\u8C03\u51FD\u6570<code>callback</code>\u540D\u79F0</li><li>\u63D2\u5165\u5230<code>html</code>\u6587\u672C\u4E2D</li><li>\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C<code>res</code>\u53C2\u6570\u5C31\u662F\u83B7\u53D6\u7684\u6570\u636E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function jsonp({url,params,callback}) {
  return new Promise((resolve,reject)=&gt;{
  let script = document.createElement(&#39;script&#39;)

    window[callback] = function (data) {
      resolve(data)
      document.body.removeChild(script)
    }
    var arr = []
    for(var key in params) {
      arr.push(\`\${key}=\${params[key]}\`)
    }
    script.type = &#39;text/javascript&#39;
    script.src = \`\${url}?callback=\${callback}&amp;\${arr.join(&#39;&amp;&#39;)}\`
    document.body.appendChild(script)
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D4B\u8BD5\u7528\u4F8B
jsonp({
  url: &#39;http://suggest.taobao.com/sug&#39;,
  callback: &#39;getData&#39;,
  params: {
    q: &#39;iphone\u624B\u673A&#39;,
    code: &#39;utf-8&#39;
  },
}).then(data=&gt;{console.log(data)})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BBE\u7F6E\xA0<code>CORS: Access-Control-Allow-Origin\uFF1A*</code></li><li><code>postMessage</code></li></ul><h2 id="_43-\u624B\u52A8\u5B9E\u73B0\u53D1\u5E03\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#_43-\u624B\u52A8\u5B9E\u73B0\u53D1\u5E03\u8BA2\u9605" aria-hidden="true">#</a> 43 \u624B\u52A8\u5B9E\u73B0\u53D1\u5E03\u8BA2\u9605</h2><blockquote><p>\u53D1\u5E03\u8BA2\u9605\u7684\u6838\u5FC3:\uFF1A \u6BCF\u6B21<code>event. emit</code>\uFF08\u53D1\u5E03\uFF09\uFF0C\u5C31\u4F1A\u89E6\u53D1\u4E00\u6B21<code>event.on</code>\uFF08\u6CE8\u518C\uFF09</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class EventEmiter {
  constructor() {
    // \u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u5B58\u653E\u8BA2\u9605\u7684\u540D\u5B57\u548C\u4E8B\u4EF6
    this._events = {}
  }
  // \u8BA2\u9605\u4E8B\u4EF6\u7684\u65B9\u6CD5
  on(eventName,callback) {
    if(!this._events) {
      this._events = {}
    }
    // \u5408\u5E76\u4E4B\u524D\u8BA2\u9605\u7684cb
    this._events[eventName] = [...(this._events[eventName] || []),callback]
  }
  // \u89E6\u53D1\u4E8B\u4EF6\u7684\u65B9\u6CD5
  emit(eventName, ...args) {
    if(!this._events[eventName]) {
      return
    }
    // \u904D\u5386\u6267\u884C\u6240\u6709\u8BA2\u9605\u7684\u4E8B\u4EF6
    this._events[eventName].forEach(fn=&gt;fn(...args))
  }
  off(eventName,cb) {
    if(!this._events[eventName]) {
      return
    }
    // \u5220\u9664\u8BA2\u9605\u7684\u4E8B\u4EF6
    this._events[eventName] = this._events[eventName].filter(fn=&gt;fn != cb &amp;&amp; fn.l != cb)
  }
  // \u7ED1\u5B9A\u4E00\u6B21 \u89E6\u53D1\u540E\u5C06\u7ED1\u5B9A\u7684\u79FB\u9664\u6389 \u518D\u6B21\u89E6\u53D1\u6389
  once(eventName,callback) {
    const one = (...args)=&gt;{
      // \u7B49callback\u6267\u884C\u5B8C\u6BD5\u5728\u5220\u9664
      callback(args)
      this.off(eventName,one)
    }
    one.l = callback // \u81EA\u5B9A\u4E49\u5C5E\u6027
    this.on(eventName,one)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u7528\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let event = new EventEmiter()

let login1 = function(...args) {
  console.log(&#39;login success1&#39;, args)
}
let login2 = function(...args) {
  console.log(&#39;login success2&#39;, args)
}
// event.on(&#39;login&#39;,login1)
event.once(&#39;login&#39;,login2)
event.off(&#39;login&#39;,login1) // \u89E3\u9664\u8BA2\u9605
event.emit(&#39;login&#39;, 1,2,3,4,5)
event.emit(&#39;login&#39;, 6,7,8,9)
event.emit(&#39;login&#39;, 10,11,12)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_44-\u624B\u52A8\u5B9E\u73B0\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_44-\u624B\u52A8\u5B9E\u73B0\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 44 \u624B\u52A8\u5B9E\u73B0\u89C2\u5BDF\u8005\u6A21\u5F0F</h2><blockquote><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF08\u57FA\u4E8E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF09 \u6709\u89C2\u5BDF\u8005\uFF0C\u4E5F\u6709\u88AB\u89C2\u5BDF\u8005</p></blockquote><p>\u89C2\u5BDF\u8005\u9700\u8981\u653E\u5230\u88AB\u89C2\u5BDF\u8005\u4E2D\uFF0C\u88AB\u89C2\u5BDF\u8005\u7684\u72B6\u6001\u53D8\u5316\u9700\u8981\u901A\u77E5\u89C2\u5BDF\u8005\xA0\u6211\u53D8\u5316\u4E86 \u5185\u90E8\u4E5F\u662F\u57FA\u4E8E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u6536\u96C6\u89C2\u5BDF\u8005\uFF0C\u72B6\u6001\u53D8\u5316\u540E\u8981\u4E3B\u52A8\u901A\u77E5\u89C2\u5BDF\u8005</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Subject { // \u88AB\u89C2\u5BDF\u8005 \u5B66\u751F
  constructor(name) {
    this.state = &#39;\u5F00\u5FC3\u7684&#39;
    this.observers = []; // \u5B58\u50A8\u6240\u6709\u7684\u89C2\u5BDF\u8005
  }
  // \u6536\u96C6\u6240\u6709\u7684\u89C2\u5BDF\u8005
  attach(o){ // Subject. prototype. attch
    this.observers.push(o)
  }
  // \u66F4\u65B0\u88AB\u89C2\u5BDF\u8005 \u72B6\u6001\u7684\u65B9\u6CD5
  setState(newState) {
    this.state = newState; // \u66F4\u65B0\u72B6\u6001
    // this \u6307\u88AB\u89C2\u5BDF\u8005 \u5B66\u751F
    this.observers.forEach(o =&gt; o.update(this)) // \u901A\u77E5\u89C2\u5BDF\u8005 \u66F4\u65B0\u5B83\u4EEC\u7684\u72B6\u6001
  }
}

class Observer{ // \u89C2\u5BDF\u8005 \u7236\u6BCD\u548C\u8001\u5E08
  constructor(name) {
    this.name = name
  }
  update(student) {
    console.log(&#39;\u5F53\u524D&#39; + this.name + &#39;\u88AB\u901A\u77E5\u4E86&#39;, &#39;\u5F53\u524D\u5B66\u751F\u7684\u72B6\u6001\u662F&#39; + student.state)
  }
}

let student = new Subject(&#39;\u5B66\u751F&#39;);

let parent = new Observer(&#39;\u7236\u6BCD&#39;);
let teacher = new Observer(&#39;\u8001\u5E08&#39;);

// \u88AB\u89C2\u5BDF\u8005\u5B58\u50A8\u89C2\u5BDF\u8005\u7684\u524D\u63D0\uFF0C\u9700\u8981\u5148\u63A5\u7EB3\u89C2\u5BDF\u8005
student. attach(parent);
student. attach(teacher);
student. setState(&#39;\u88AB\u6B3A\u8D1F\u4E86&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_45-\u624B\u52A8\u5B9E\u73B0object-freeze" tabindex="-1"><a class="header-anchor" href="#_45-\u624B\u52A8\u5B9E\u73B0object-freeze" aria-hidden="true">#</a> 45 \u624B\u52A8\u5B9E\u73B0Object.freeze</h2><blockquote><p><code>Object.freeze</code>\u51BB\u7ED3\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8BA9\u5176\u4E0D\u80FD\u518D\u6DFB\u52A0/\u5220\u9664\u5C5E\u6027\uFF0C\u4E5F\u4E0D\u80FD\u4FEE\u6539\u8BE5\u5BF9\u8C61\u5DF2\u6709\u5C5E\u6027\u7684\u53EF\u679A\u4E3E\u6027\u3001\u53EF\u914D\u7F6E\u53EF\u5199\u6027\uFF0C\u4E5F\u4E0D\u80FD\u4FEE\u6539\u5DF2\u6709\u5C5E\u6027\u7684\u503C\u548C\u5B83\u7684\u539F\u578B\u5C5E\u6027\uFF0C\u6700\u540E\u8FD4\u56DE\u4E00\u4E2A\u548C\u4F20\u5165\u53C2\u6570\u76F8\u540C\u7684\u5BF9\u8C61</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function myFreeze(obj){
  // \u5224\u65AD\u53C2\u6570\u662F\u5426\u4E3AObject\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u5C31\u5C01\u95ED\u5BF9\u8C61\uFF0C\u5FAA\u73AF\u904D\u5386\u5BF9\u8C61\u3002\u53BB\u6389\u539F\u578B\u5C5E\u6027\uFF0C\u5C06\u5176writable\u7279\u6027\u8BBE\u7F6E\u4E3Afalse
  if(obj instanceof Object){
    Object.seal(obj);  // \u5C01\u95ED\u5BF9\u8C61
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        Object.defineProperty(obj,key,{
          writable:false   // \u8BBE\u7F6E\u53EA\u8BFB
        })
        // \u5982\u679C\u5C5E\u6027\u503C\u4F9D\u7136\u4E3A\u5BF9\u8C61\uFF0C\u8981\u901A\u8FC7\u9012\u5F52\u6765\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u51BB\u7ED3
        myFreeze(obj[key]);
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_46-\u624B\u52A8\u5B9E\u73B0promise-all" tabindex="-1"><a class="header-anchor" href="#_46-\u624B\u52A8\u5B9E\u73B0promise-all" aria-hidden="true">#</a> 46 \u624B\u52A8\u5B9E\u73B0Promise.all</h2><ul><li><code>Promise.all</code>\uFF1A\u6709\u4E00\u4E2A<code>promise</code>\u4EFB\u52A1\u5931\u8D25\u5C31\u5168\u90E8\u5931\u8D25</li><li><code>Promise.all</code>\xA0\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A<code>promise</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isPromise (val) {
  return typeof val.then === &#39;function&#39;; // (123).then =&gt; undefined
}

Promise.all = function(promises) {
  return new Promise((resolve, reject) =&gt; {
    let arr = []; // \u5B58\u653E promise\u6267\u884C\u540E\u7684\u7ED3\u679C
    let index = 0; // \u8BA1\u6570\u5668\uFF0C\u7528\u6765\u7D2F\u8BA1promise\u7684\u5DF2\u6267\u884C\u6B21\u6570
    const processData = (key, data) =&gt; {
      arr[key] = data; // \u4E0D\u80FD\u4F7F\u7528\u6570\u7EC4\u7684\u957F\u5EA6\u6765\u8BA1\u7B97
      /*
        if (arr.length == promises.length) {
          resolve(arr);  // [null, null , 1, 2] \u7531\u4E8EPromise\u5F02\u6B65\u6BD4\u8F83\u6162\uFF0C\u6240\u4EE5\u8FD8\u672A\u8FD4\u56DE
        }
      */
     if (++index === promises.length) {
      // \u5FC5\u987B\u4FDD\u8BC1\u6570\u7EC4\u91CC\u7684\u6BCF\u4E00\u4E2A
       resolve(arr);
     }
    }
    // \u904D\u5386\u6570\u7EC4\u4F9D\u6B21\u62FF\u5230\u6267\u884C\u7ED3\u679C
    for (let i = 0; i &lt; promises.length; i++) {
      let result = promises[i];
      if(isPromise(result)) {
        // \u8BA9\u91CC\u9762\u7684promise\u6267\u884C\uFF0C\u53D6\u5F97\u6210\u529F\u540E\u7684\u7ED3\u679C
        // data promise\u6267\u884C\u540E\u7684\u8FD4\u56DE\u7ED3\u679C
        result.then((data) =&gt; {
          // \u5904\u7406\u6570\u636E\uFF0C\u6309\u7167\u539F\u6570\u7EC4\u7684\u987A\u5E8F\u4F9D\u6B21\u8F93\u51FA
          processData(i ,data)
        }, reject)  // reject\u672C\u4E8B\u5C31\u662F\u4E2A\u51FD\u6570 \u6240\u4EE5\u7B80\u5199\u4E86
      } else {
        // 1 , 2
        processData(i ,result)
      }
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u7528\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let fs = require(&#39;fs&#39;).promises;

let getName = fs.readFile(&#39;./name.txt&#39;, &#39;utf8&#39;);
let getAge = fs.readFile(&#39;./age.txt&#39;, &#39;utf8&#39;);

Promise.all([1, getName, getAge, 2]).then(data =&gt; {
    console.log(data); // [ 1, &#39;name&#39;, &#39;11&#39;, 2 ]
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_47-\u624B\u52A8\u5B9E\u73B0promise-allsettled" tabindex="-1"><a class="header-anchor" href="#_47-\u624B\u52A8\u5B9E\u73B0promise-allsettled" aria-hidden="true">#</a> 47 \u624B\u52A8\u5B9E\u73B0Promise.allSettled</h2><blockquote><p>MDN:\xA0<code>Promise.allSettled()</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5728\u6240\u6709\u7ED9\u5B9A\u7684<code>promise</code>\u90FD<code>\u5DF2\u7ECF</code>fulfilled<code>\u6216</code>rejected<code>\u540E\u7684</code>promise<code>\uFF0C\u5E76\u5E26\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u8868\u793A\u5BF9\u5E94\u7684</code>promise\`\u7ED3\u679C</p></blockquote><p>\u5F53\u60A8\u6709\u591A\u4E2A\u5F7C\u6B64\u4E0D\u4F9D\u8D56\u7684\u5F02\u6B65\u4EFB\u52A1\u6210\u529F\u5B8C\u6210\u65F6\uFF0C\u6216\u8005\u60A8\u603B\u662F\u60F3\u77E5\u9053\u6BCF\u4E2Apromise\u7684\u7ED3\u679C\u65F6\uFF0C\u901A\u5E38\u4F7F\u7528\u5B83\u3002</p><blockquote><p>\u3010\u8BD1\u3011<code>Promise.allSettled</code>\xA0\u8DDF\xA0<code>Promise.all</code>\xA0\u7C7B\u4F3C, \u5176\u53C2\u6570\u63A5\u53D7\u4E00\u4E2A<code>Promise</code>\u7684\u6570\u7EC4, \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684<code>Promise</code>, \u552F\u4E00\u7684\u4E0D\u540C\u5728\u4E8E, \u5176\u4E0D\u4F1A\u8FDB\u884C\u77ED\u8DEF, \u4E5F\u5C31\u662F\u8BF4\u5F53Promise\u5168\u90E8\u5904\u7406\u5B8C\u6210\u540E\u6211\u4EEC\u53EF\u4EE5\u62FF\u5230\u6BCF\u4E2A<code>Promise</code>\u7684\u72B6\u6001, \u800C\u4E0D\u7BA1\u5176\u662F\u5426\u5904\u7406\u6210\u529F\u3002</p></blockquote><p>\u7528\u6CD5 | \u6D4B\u8BD5\u7528\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let fs = require(&#39;fs&#39;).promises;

let getName = fs.readFile(&#39;./name.txt&#39;, &#39;utf8&#39;); // \u8BFB\u53D6\u6587\u4EF6\u6210\u529F
let getAge = fs.readFile(&#39;./age.txt&#39;, &#39;utf8&#39;);

Promise.allSettled([1, getName, getAge, 2]).then(data =&gt; {
    console.log(data);
});
// \u8F93\u51FA\u7ED3\u679C
/*
    [
    { status: &#39;fulfilled&#39;, value: 1 },
    { status: &#39;fulfilled&#39;, value: &#39;zf&#39; },
    { status: &#39;fulfilled&#39;, value: &#39;11&#39; },
    { status: &#39;fulfilled&#39;, value: 2 }
    ]
*/

let getName = fs.readFile(&#39;./name123.txt&#39;, &#39;utf8&#39;); // \u8BFB\u53D6\u6587\u4EF6\u5931\u8D25
let getAge = fs.readFile(&#39;./age.txt&#39;, &#39;utf8&#39;);
// \u8F93\u51FA\u7ED3\u679C
/*
    [
    { status: &#39;fulfilled&#39;, value: 1 },
    {
      status: &#39;rejected&#39;,
      value: [Error: ENOENT: no such file or directory, open &#39;./name123.txt&#39;] {
        errno: -2,
        code: &#39;ENOENT&#39;,
        syscall: &#39;open&#39;,
        path: &#39;./name123.txt&#39;
      }
    },
    { status: &#39;fulfilled&#39;, value: &#39;11&#39; },
    { status: &#39;fulfilled&#39;, value: 2 }
  ]
*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isPromise (val) {
  return typeof val.then === &#39;function&#39;; // (123).then =&gt; undefined
}

Promise.allSettled = function(promises) {
  return new Promise((resolve, reject) =&gt; {
    let arr = [];
    let times = 0;
    const setData = (index, data) =&gt; {
      arr[index] = data;
      if (++times === promises.length) {
        resolve(arr);
      }
      console.log(&#39;times&#39;, times)
    }

    for (let i = 0; i &lt; promises.length; i++) {
      let current = promises[i];
      if (isPromise(current)) {
        current.then((data) =&gt; {
          setData(i, { status: &#39;fulfilled&#39;, value: data });
        }, err =&gt; {
          setData(i, { status: &#39;rejected&#39;, value: err })
        })
      } else {
        setData(i, { status: &#39;fulfilled&#39;, value: current })
      }
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_48-\u624B\u52A8\u5B9E\u73B0promise-prototype-finally" tabindex="-1"><a class="header-anchor" href="#_48-\u624B\u52A8\u5B9E\u73B0promise-prototype-finally" aria-hidden="true">#</a> 48 \u624B\u52A8\u5B9E\u73B0Promise.prototype.finally</h2><blockquote><p>\u524D\u9762\u7684<code>promise</code>\u4E0D\u7BA1\u6210\u529F\u8FD8\u662F\u5931\u8D25\uFF0C\u90FD\u4F1A\u8D70\u5230<code>finally</code>\u4E2D\uFF0C\u5E76\u4E14<code>finally</code>\u4E4B\u540E\uFF0C\u8FD8\u53EF\u4EE5\u7EE7\u7EED<code>then</code>\uFF08\u8BF4\u660E\u5B83\u8FD8\u662F\u4E00\u4E2Athen\u65B9\u6CD5\u662F\u5173\u952E\uFF09\uFF0C\u5E76\u4E14\u4F1A\u5C06\u521D\u59CB\u7684<code>promise</code>\u503C\u539F\u5C01\u4E0D\u52A8\u7684\u4F20\u9012\u7ED9\u540E\u9762\u7684<code>then</code>.</p></blockquote><p>Promise.prototype.finally\u6700\u5927\u7684\u4F5C\u7528</p><ul><li><code>finally</code>\u91CC\u7684\u51FD\u6570\uFF0C\u65E0\u8BBA\u5982\u4F55\u90FD\u4F1A\u6267\u884C\uFF0C\u5E76\u4F1A\u628A\u524D\u9762\u7684\u503C\u539F\u5C01\u4E0D\u52A8\u4F20\u9012\u7ED9\u4E0B\u4E00\u4E2A<code>then</code>\u65B9\u6CD5\u4E2D</li><li>\u5982\u679C<code>finally</code>\u51FD\u6570\u4E2D\u6709<code>promise</code>\u7B49\u5F02\u6B65\u4EFB\u52A1\uFF0C\u4F1A\u7B49\u5B83\u4EEC\u5168\u90E8\u6267\u884C\u5B8C\u6BD5\uFF0C\u518D\u7ED3\u5408\u4E4B\u524D\u7684\u6210\u529F\u4E0E\u5426\u72B6\u6001\uFF0C\u8FD4\u56DE\u503C</li></ul><p>Promise.prototype.finally\u516D\u5927\u60C5\u51B5\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u60C5\u51B51
Promise.resolve(123).finally((data) =&gt; { // \u8FD9\u91CC\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u65E0\u8BBA\u5982\u4F55\u90FD\u4F1A\u6267\u884C
  console.log(data); // undefined
})

// \u60C5\u51B52 (\u8FD9\u91CC\uFF0Cfinally\u65B9\u6CD5\u76F8\u5F53\u4E8E\u505A\u4E86\u4E2D\u95F4\u5904\u7406\uFF0C\u8D77\u4E00\u4E2A\u8FC7\u6E21\u7684\u4F5C\u7528)
Promise.resolve(123).finally((data) =&gt; {
  console.log(data); // undefined
}).then(data =&gt; {
  console.log(data); // 123
})

// \u60C5\u51B53 (\u8FD9\u91CC\u53EA\u8981reject\uFF0C\u90FD\u4F1A\u8D70\u5230\u4E0B\u4E00\u4E2Athen\u7684err\u4E2D)
Promise.reject(123).finally((data) =&gt; {
  console.log(data); // undefined
}).then(data =&gt; {
  console.log(data);
}, err =&gt; {
  console.log(err, &#39;err&#39;); // 123 err
})

// \u60C5\u51B54 (\u4E00\u5F00\u59CB\u5C31\u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u7B49\u5F85finally\u91CC\u7684promise\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u518D\u628A\u524D\u9762\u7684data\u4F20\u9012\u5230\u4E0B\u4E00\u4E2Athen\u4E2D)
Promise.resolve(123).finally((data) =&gt; {
  console.log(data); // undefined
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&#39;ok&#39;);
    }, 3000)
  })
}).then(data =&gt; {
  console.log(data, &#39;success&#39;); // 123 success
}, err =&gt; {
  console.log(err, &#39;err&#39;);
})

// \u60C5\u51B55 (\u867D\u7136\u4E00\u5F00\u59CB\u6210\u529F\uFF0C\u4F46\u662F\u53EA\u8981finally\u51FD\u6570\u4E2D\u7684promise\u5931\u8D25\u4E86\uFF0C\u5C31\u4F1A\u628A\u5176\u5931\u8D25\u7684\u503C\u4F20\u9012\u5230\u4E0B\u4E00\u4E2Athen\u7684err\u4E2D)
Promise.resolve(123).finally((data) =&gt; {
  console.log(data); // undefined
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      reject(&#39;rejected&#39;);
    }, 3000)
  })
}).then(data =&gt; {
  console.log(data, &#39;success&#39;);
}, err =&gt; {
  console.log(err, &#39;err&#39;); // rejected err
})

// \u60C5\u51B56 (\u867D\u7136\u4E00\u5F00\u59CB\u5931\u8D25\uFF0C\u4F46\u662F\u4E5F\u8981\u7B49finally\u4E2D\u7684promise\u6267\u884C\u5B8C\uFF0C\u624D\u80FD\u628A\u4E00\u5F00\u59CB\u7684err\u4F20\u9012\u5230err\u7684\u56DE\u8C03\u4E2D)
Promise.reject(123).finally((data) =&gt; {
  console.log(data); // undefined
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&#39;resolve&#39;);
    }, 3000)
  })
}).then(data =&gt; {
  console.log(data, &#39;success&#39;);
}, err =&gt; {
  console.log(err, &#39;err&#39;); // 123 err
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6E90\u7801\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.prototype.finally = function (callback) {
  return this.then((data) =&gt; {
    // \u8BA9\u51FD\u6570\u6267\u884C \u5185\u90E8\u4F1A\u8C03\u7528\u65B9\u6CD5\uFF0C\u5982\u679C\u65B9\u6CD5\u662Fpromise\uFF0C\u9700\u8981\u7B49\u5F85\u5B83\u5B8C\u6210
    // \u5982\u679C\u5F53\u524Dpromise\u6267\u884C\u65F6\u5931\u8D25\u4E86\uFF0C\u4F1A\u628Aerr\u4F20\u9012\u5230\uFF0Cerr\u7684\u56DE\u8C03\u51FD\u6570\u4E2D
    return Promise.resolve(callback()).then(() =&gt; data); // data \u4E0A\u4E00\u4E2Apromise\u7684\u6210\u529F\u6001
  }, err =&gt; {
    return Promise.resolve(callback()).then(() =&gt; {
      throw err; // \u628A\u4E4B\u524D\u7684\u5931\u8D25\u7684err\uFF0C\u629B\u51FA\u53BB
    });
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_49-\u5F02\u6B65\u5E76\u53D1\u6570\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_49-\u5F02\u6B65\u5E76\u53D1\u6570\u9650\u5236" aria-hidden="true">#</a> 49 \u5F02\u6B65\u5E76\u53D1\u6570\u9650\u5236</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u5173\u952E\u70B9
 * 1. new promise \u4E00\u7ECF\u521B\u5EFA\uFF0C\u7ACB\u5373\u6267\u884C
 * 2. \u4F7F\u7528 Promise.resolve().then \u53EF\u4EE5\u628A\u4EFB\u52A1\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u9632\u6B62\u7ACB\u5373\u6267\u884C\u8FED\u4EE3\u65B9\u6CD5
 * 3. \u5FAE\u4EFB\u52A1\u5904\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u4EA7\u751F\u7684\u65B0\u7684\u5FAE\u4EFB\u52A1\uFF0C\u4F1A\u5728\u540C\u4E00\u4E8B\u4EF6\u5FAA\u73AF\u5185\uFF0C\u8FFD\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u91CC
 * 4. \u4F7F\u7528 race \u5728\u67D0\u4E2A\u4EFB\u52A1\u5B8C\u6210\u65F6\uFF0C\u7EE7\u7EED\u6DFB\u52A0\u4EFB\u52A1\uFF0C\u4FDD\u6301\u4EFB\u52A1\u6309\u7167\u6700\u5927\u5E76\u53D1\u6570\u8FDB\u884C\u6267\u884C
 * 5. \u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u9700\u8981\u4ECE doingTasks \u4E2D\u79FB\u51FA
 */
function limit(count, array, iterateFunc) {
  const tasks = []
  const doingTasks = []
  let i = 0
  const enqueue = () =&gt; {
    if (i === array.length) {
      return Promise.resolve()
    }
    const task = Promise.resolve().then(() =&gt; iterateFunc(array[i++]))
    tasks.push(task)
    const doing = task.then(() =&gt; doingTasks.splice(doingTasks.indexOf(doing), 1))
    doingTasks.push(doing)
    const res = doingTasks.length &gt;= count ? Promise.race(doingTasks) : Promise.resolve()
    return res.then(enqueue)
  };
  return enqueue().then(() =&gt; Promise.all(tasks))
}

// test
const timeout = i =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(i), i))
limit(2, [1000, 1000, 1000, 1000], timeout).then((res) =&gt; {
  console.log(res)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_50-\u5F02\u6B65\u4E32\u884C-\u5F02\u6B65\u5E76\u884C" tabindex="-1"><a class="header-anchor" href="#_50-\u5F02\u6B65\u4E32\u884C-\u5F02\u6B65\u5E76\u884C" aria-hidden="true">#</a> 50 \u5F02\u6B65\u4E32\u884C | \u5F02\u6B65\u5E76\u884C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B57\u8282\u9762\u8BD5\u9898\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u5F02\u6B65\u52A0\u6CD5
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 500);
}

// \u89E3\u51B3\u65B9\u6848
// 1. promisify
const promiseAdd = (a, b) =&gt; new Promise((resolve, reject) =&gt; {
  asyncAdd(a, b, (err, res) =&gt; {
    if (err) {
      reject(err)
    } else {
      resolve(res)
    }
  })
})

// 2. \u4E32\u884C\u5904\u7406
async function serialSum(...args) {
  return args.reduce((task, now) =&gt; task.then(res =&gt; promiseAdd(res, now)), Promise.resolve(0))
}

// 3. \u5E76\u884C\u5904\u7406
async function parallelSum(...args) {
  if (args.length === 1) return args[0]
  const tasks = []
  for (let i = 0; i &lt; args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0))
  }
  const results = await Promise.all(tasks)
  return parallelSum(...results)
}

// \u6D4B\u8BD5
(async () =&gt; {
  console.log(&#39;Running...&#39;);
  const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
  console.log(res1)
  const res2 = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
  console.log(res2)
  console.log(&#39;Done&#39;);
})()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_51-vue-reactive" tabindex="-1"><a class="header-anchor" href="#_51-vue-reactive" aria-hidden="true">#</a> 51 vue reactive</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Dep module
class Dep {
  static stack = []
  static target = null
  deps = null

  constructor() {
    this.deps = new Set()
  }

  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target)
    }
  }

  notify() {
    this.deps.forEach(w =&gt; w.update())
  }

  static pushTarget(t) {
    if (this.target) {
      this.stack.push(this.target)
    }
    this.target = t
  }

  static popTarget() {
    this.target = this.stack.pop()
  }
}

// reactive
function reactive(o) {
  if (o &amp;&amp; typeof o === &#39;object&#39;) {
    Object.keys(o).forEach(k =&gt; {
      defineReactive(o, k, o[k])
    })
  }
  return o
}

function defineReactive(obj, k, val) {
  let dep = new Dep()
  Object.defineProperty(obj, k, {
    get() {
      dep.depend()
      return val
    },
    set(newVal) {
      val = newVal
      dep.notify()
    }
  })
  if (val &amp;&amp; typeof val === &#39;object&#39;) {
    reactive(val)
  }
}

// watcher
class Watcher {
  constructor(effect) {
    this.effect = effect
    this.update()
  }

  update() {
    Dep.pushTarget(this)
    this.value = this.effect()
    Dep.popTarget()
    return this.value
  }
}

// \u6D4B\u8BD5\u4EE3\u7801
const data = reactive({
  msg: &#39;aaa&#39;
})

new Watcher(() =&gt; {
  console.log(&#39;===&gt; effect&#39;, data.msg);
})

setTimeout(() =&gt; {
  data.msg = &#39;hello&#39;
}, 1000)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_52-\u56FE\u7247\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#_52-\u56FE\u7247\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> 52 \u56FE\u7247\u61D2\u52A0\u8F7D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// &lt;img src=&quot;default.png&quot; data-src=&quot;https://xxxx/real.png&quot;&gt;
function isVisible(el) {
  const position = el.getBoundingClientRect()
  const windowHeight = document.documentElement.clientHeight
  // \u9876\u90E8\u8FB9\u7F18\u53EF\u89C1
  const topVisible = position.top &gt; 0 &amp;&amp; position.top &lt; windowHeight;
  // \u5E95\u90E8\u8FB9\u7F18\u53EF\u89C1
  const bottomVisible = position.bottom &lt; windowHeight &amp;&amp; position.bottom &gt; 0;
  return topVisible || bottomVisible;
}

function imageLazyLoad() {
  const images = document.querySelectorAll(&#39;img&#39;)
  for (let img of images) {
    const realSrc = img.dataset.src
    if (!realSrc) continue
    if (isVisible(img)) {
      img.src = realSrc
      img.dataset.src = &#39;&#39;
    }
  }
}

// \u6D4B\u8BD5
window.addEventListener(&#39;load&#39;, imageLazyLoad)
window.addEventListener(&#39;scroll&#39;, imageLazyLoad)
// or
window.addEventListener(&#39;scroll&#39;, throttle(imageLazyLoad, 1000))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_53-\u624B\u5199\u6DF1\u5EA6\u6BD4\u8F83isequal" tabindex="-1"><a class="header-anchor" href="#_53-\u624B\u5199\u6DF1\u5EA6\u6BD4\u8F83isequal" aria-hidden="true">#</a> 53 \u624B\u5199\u6DF1\u5EA6\u6BD4\u8F83isEqual</h2><blockquote><p>\u601D\u8DEF\uFF1A\u6DF1\u5EA6\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u662F\u8981\u6DF1\u5EA6\u6BD4\u8F83\u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u3002=&gt; \u9012\u5F52</p></blockquote><ul><li>\u9012\u5F52\u9000\u51FA\u6761\u4EF6\uFF1A <ul><li>\u88AB\u6BD4\u8F83\u7684\u662F\u4E24\u4E2A\u503C\u7C7B\u578B\u53D8\u91CF\uFF0C\u76F4\u63A5\u7528&quot;===&quot;\u5224\u65AD</li><li>\u88AB\u6BD4\u8F83\u7684\u4E24\u4E2A\u53D8\u91CF\u4E4B\u4E00\u4E3Anull\uFF0C\u76F4\u63A5\u5224\u65AD\u53E6\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u4E5F\u4E3Anull</li></ul></li><li>\u63D0\u524D\u7ED3\u675F\u9012\u63A8\uFF1A <ul><li>\u4E24\u4E2A\u53D8\u91CFkeys\u6570\u91CF\u4E0D\u540C</li><li>\u4F20\u5165\u7684\u4E24\u4E2A\u53C2\u6570\u662F\u540C\u4E00\u4E2A\u53D8\u91CF</li></ul></li><li>\u9012\u63A8\u5DE5\u4F5C\uFF1A \u3000- \u6DF1\u5EA6\u6BD4\u8F83\u6BCF\u4E00\u4E2Akey</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isEqual(obj1, obj2){
    //\u5176\u4E2D\u4E00\u4E2A\u4E3A\u503C\u7C7B\u578B\u6216null
    if(!isObject(obj1) || !isObject(obj2)){
        return obj1 === obj2;
    }

    //\u5224\u65AD\u662F\u5426\u4E24\u4E2A\u53C2\u6570\u662F\u540C\u4E00\u4E2A\u53D8\u91CF
    if(obj1 === obj2){
        return true;
    }

    //\u5224\u65ADkeys\u6570\u662F\u5426\u76F8\u7B49
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if(obj1Keys.length !== obj2Keys.length){
        return false;
    }

    //\u6DF1\u5EA6\u6BD4\u8F83\u6BCF\u4E00\u4E2Akey
    for(let key in obj1){
        if(!isEqual(obj1[key], obj2[key])){
            return false;
        }
    }

    return true;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_54-\u5B9E\u73B0-getvalue-setvalue-\u51FD\u6570\u6765\u83B7\u53D6path\u5BF9\u5E94\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#_54-\u5B9E\u73B0-getvalue-setvalue-\u51FD\u6570\u6765\u83B7\u53D6path\u5BF9\u5E94\u7684\u503C" aria-hidden="true">#</a> 54 \u5B9E\u73B0 getValue/setValue \u51FD\u6570\u6765\u83B7\u53D6path\u5BF9\u5E94\u7684\u503C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u793A\u4F8B
var object = { a: [{ b: { c: 3 } }] }; // path: &#39;a[0].b.c&#39;
var array = [{ a: { b: [1] } }]; // path: &#39;[0].a.b[0]&#39;

function getValue(target, valuePath, defaultValue) {}

console.log(getValue(object, &quot;a[0].b.c&quot;, 0)); // \u8F93\u51FA3
console.log(getValue(array, &quot;[0].a.b[0]&quot;, 12)); // \u8F93\u51FA 1
console.log(getValue(array, &quot;[0].a.b[0].c&quot;, 12)); // \u8F93\u51FA 12

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u6D4B\u8BD5\u5C5E\u6027\u662F\u5426\u5339\u914D
 */
export function testPropTypes(value, type, dev) {
  const sEnums = [&#39;number&#39;, &#39;string&#39;, &#39;boolean&#39;, &#39;undefined&#39;, &#39;function&#39;]; // NaN
  const oEnums = [&#39;Null&#39;, &#39;Object&#39;, &#39;Array&#39;, &#39;Date&#39;, &#39;RegExp&#39;, &#39;Error&#39;];
  const nEnums = [
    &#39;[object Number]&#39;,
    &#39;[object String]&#39;,
    &#39;[object Boolean]&#39;,
    &#39;[object Undefined]&#39;,
    &#39;[object Function]&#39;,
    &#39;[object Null]&#39;,
    &#39;[object Object]&#39;,
    &#39;[object Array]&#39;,
    &#39;[object Date]&#39;,
    &#39;[object RegExp]&#39;,
    &#39;[object Error]&#39;,
  ];
  const reg = new RegExp(&#39;\\\\[object (.*?)\\\\]&#39;);

  // \u5B8C\u5168\u5339\u914D\u6A21\u5F0F\uFF0Ctype\u5E94\u8BE5\u4F20\u9012\u7C7B\u4F3C\u683C\u5F0F[object Window] [object HTMLDocument] ...
  if (reg.test(type)) {
    // \u6392\u9664nEnums\u768412\u79CD
    if (~nEnums.indexOf(type)) {
      if (dev === true) {
        console.warn(value, &#39;The parameter type belongs to one of 12 types\uFF1Anumber string boolean undefined Null Object Array Date RegExp function Error NaN&#39;);
      }
    }

    if (Object.prototype.toString.call(value) === type) {
      return true;
    }

    return false;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const syncVarIterator = {
  getter: function (obj, key, defaultValue) {
    // \u7ED3\u679C\u53D8\u91CF
    const defaultResult = defaultValue === undefined ? undefined : defaultValue;

    if (testPropTypes(obj, &#39;Object&#39;) === false &amp;&amp; testPropTypes(obj, &#39;Array&#39;) === false) {
      return defaultResult;
    }

    // \u7ED3\u679C\u53D8\u91CF\uFF0C\u6682\u65F6\u6307\u5411obj\u6301\u6709\u7684\u5F15\u7528\uFF0C\u540E\u7EED\u5C06\u53EF\u80FD\u88AB\u4E0D\u65AD\u7684\u4FEE\u6539
    let result = obj;

    // \u5F97\u5230\u77E5\u9053\u503C
    try {
      // \u89E3\u6790\u5C5E\u6027\u5C42\u6B21\u5E8F\u5217
      const keyArr = key.split(&#39;.&#39;);

      // \u8FED\u4EE3obj\u5BF9\u8C61\u5C5E\u6027
      for (let i = 0; i &lt; keyArr.length; i++) {
        // \u5982\u679C\u7B2C i \u5C42\u5C5E\u6027\u5B58\u5728\u5BF9\u5E94\u7684\u503C\u5219\u8FED\u4EE3\u8BE5\u5C5E\u6027\u503C
        if (result[keyArr[i]] !== undefined) {
          result = result[keyArr[i]];

          // \u5982\u679C\u4E0D\u5B58\u5728\u5219\u8FD4\u56DE\u672A\u5B9A\u4E49
        } else {
          return defaultResult;
        }
      }
    } catch (e) {
      return defaultResult;
    }

    // \u8FD4\u56DE\u83B7\u53D6\u7684\u7ED3\u679C
    return result;
  },
  setter: function (obj, key, val) {
    // \u5982\u679C\u4E0D\u5B58\u5728obj\u5219\u8FD4\u56DE\u672A\u5B9A\u4E49
    if (testPropTypes(obj, &#39;Object&#39;) === false) {
      return false;
    }

    // \u7ED3\u679C\u53D8\u91CF\uFF0C\u6682\u65F6\u6307\u5411obj\u6301\u6709\u7684\u5F15\u7528\uFF0C\u540E\u7EED\u5C06\u53EF\u80FD\u88AB\u4E0D\u65AD\u7684\u4FEE\u6539
    let result = obj;

    try {
      // \u89E3\u6790\u5C5E\u6027\u5C42\u6B21\u5E8F\u5217
      const keyArr = key.split(&#39;.&#39;);

      let i = 0;

      // \u8FED\u4EE3obj\u5BF9\u8C61\u5C5E\u6027
      for (; i &lt; keyArr.length - 1; i++) {
        // \u5982\u679C\u7B2C i \u5C42\u5C5E\u6027\u5BF9\u5E94\u7684\u503C\u4E0D\u5B58\u5728\uFF0C\u5219\u5B9A\u4E49\u4E3A\u5BF9\u8C61
        if (result[keyArr[i]] === undefined) {
          result[keyArr[i]] = {};
        }

        // \u5982\u679C\u7B2C i \u5C42\u5C5E\u6027\u5BF9\u5E94\u7684\u503C\u4E0D\u662F\u5BF9\u8C61\uFF08Object\uFF09\u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5219\u629B\u51FA\u9519\u8BEF
        if (!(result[keyArr[i]] instanceof Object)) {
          throw new Error(&#39;obj.&#39; + keyArr.splice(0, i + 1).join(&#39;.&#39;) + &#39;is not Object&#39;);
        }

        // \u8FED\u4EE3\u8BE5\u5C42\u5C5E\u6027\u503C
        result = result[keyArr[i]];
      }

      // \u8BBE\u7F6E\u5C5E\u6027\u503C
      result[keyArr[i]] = val;

      return true;
    } catch (e) {
      return false;
    }
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528promise\u6765\u5B9E\u73B0</p><p>\u521B\u5EFA\xA0<code>enhancedObject</code>\xA0\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const enhancedObject = (target) =&gt;
  new Proxy(target, {
    get(target, property) {
      if (property in target) {
        return target[property];
      } else {
        return searchFor(property, target); //\u5B9E\u9645\u4F7F\u7528\u65F6\u8981\u5BF9value\u503C\u8FDB\u884C\u590D\u4F4D
      }
    },
  });

let value = null;
function searchFor(property, target) {
  for (const key of Object.keys(target)) {
    if (typeof target[key] === &quot;object&quot;) {
      searchFor(property, target[key]);
    } else if (typeof target[property] !== &quot;undefined&quot;) {
      value = target[property];
      break;
    }
  }
  return value;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\xA0<code>enhancedObject</code>\xA0\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const data = enhancedObject({
  user: {
    name: &quot;test&quot;,
    settings: {
      theme: &quot;dark&quot;,
    },
  },
});

console.log(data.user.settings.theme); // dark
console.log(data.theme); // dark

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u8FD0\u884C\u540E\uFF0C\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dark
dark

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u901A\u8FC7\u89C2\u5BDF\u4EE5\u4E0A\u7684\u8F93\u51FA\u7ED3\u679C\u53EF\u77E5\uFF0C\u4F7F\u7528\xA0<code>enhancedObject</code>\xA0\u51FD\u6570\u5904\u7406\u8FC7\u7684\u5BF9\u8C61\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u666E\u901A\u5BF9\u8C61\u5185\u90E8\u7684\u6DF1\u5C42\u5C5E\u6027\u3002</p></blockquote><h2 id="_55-\u5B9E\u73B0lodash\u7684chunk\u65B9\u6CD5-\u6570\u7EC4\u6309\u6307\u5B9A\u957F\u5EA6\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#_55-\u5B9E\u73B0lodash\u7684chunk\u65B9\u6CD5-\u6570\u7EC4\u6309\u6307\u5B9A\u957F\u5EA6\u62C6\u5206" aria-hidden="true">#</a> 55 \u5B9E\u73B0lodash\u7684chunk\u65B9\u6CD5--\u6570\u7EC4\u6309\u6307\u5B9A\u957F\u5EA6\u62C6\u5206</h2><p>\u9898\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * @param input
 * @param size
 * @returns {Array}
 */
_.chunk([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;], 2)
// =&gt; [[&#39;a&#39;, &#39;b&#39;], [&#39;c&#39;, &#39;d&#39;]]

_.chunk([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;], 3)
// =&gt; [[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [&#39;d&#39;]]

_.chunk([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;], 5)
// =&gt; [[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]]

_.chunk([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;], 0)
// =&gt; []

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function chunk(arr, length) {
  let newArr = [];
  for (let i = 0; i &lt; arr.length; i += length) {
    newArr.push(arr.slice(i, i + length));
  }
  return newArr;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_56-\u5199\u4E00\u4E2Acompose\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_56-\u5199\u4E00\u4E2Acompose\u51FD\u6570" aria-hidden="true">#</a> 56 \u5199\u4E00\u4E2Acompose\u51FD\u6570</h2><blockquote><p>\u7EC4\u5408\u591A\u4E2A\u51FD\u6570\uFF0C\u4ECE\u53F3\u5230\u5DE6\uFF0C\u6BD4\u5982\uFF1A<code>compose(f, g, h)</code>\xA0\u6700\u7EC8\u5F97\u5230\u8FD9\u4E2A\u7ED3\u679C\xA0<code>(...args) =&gt; f(g(h(...args))).</code></p></blockquote><p>\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function compose(...funcs) {

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) =&gt; (...args) =&gt; a(b(...args)))
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>compose\u521B\u5EFA\u4E86\u4E00\u4E2A\u4ECE\u53F3\u5411\u5DE6\u6267\u884C\u7684\u6570\u636E\u6D41\u3002\u5982\u679C\u8981\u5B9E\u73B0\u4ECE\u5DE6\u5230\u53F3\u7684\u6570\u636E\u6D41\uFF0C\u53EF\u4EE5\u76F4\u63A5\u66F4\u6539compose\u7684\u90E8\u5206\u4EE3\u7801\u5373\u53EF\u5B9E\u73B0</p></blockquote><ul><li>\u66F4\u6362Api\u63A5\u53E3\uFF1A\u628A<code>reduce</code>\u6539\u4E3A<code>reduceRight</code></li><li>\u4EA4\u4E92\u5305\u88F9\u4F4D\u7F6E\uFF1A\u628A<code>a(b(...args))</code>\u6539\u4E3A<code>b(a(...args))</code></li></ul><p>compose \u51FD\u6570\u6F14\u5316</p><p>\u4F20\u5165\u4E00\u4E2A\u6570\u503C\uFF0C\u8BA1\u7B97\u6570\u503C\u4E58\u4EE510\u518D\u52A0\u4E0A10\uFF0C\u518D\u51CF\u53BB2</p><p>\u5B9E\u73B0\u8D77\u6765\u5F88\u7B80\u5355\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const calc = (num) =&gt; num * 10 + 10 - 2;
calc(10); // 108

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u8FD9\u6837\u5199\u6709\u4E2A\u95EE\u9898\uFF0C\u4E0D\u597D\u6269\u5C55\uFF0C\u6BD4\u5982\u6211\u60F3\u4E58\u4EE510\u65F6\u5C31\u6253\u5370\u51FA\u7ED3\u679C\u3002 \u4E3A\u4E86\u4FBF\u4E8E\u6269\u5C55\uFF0C\u6211\u4EEC\u5206\u5F00\u5199\u6210\u4E09\u4E2A\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const multiply = (x) =&gt; {
   const result = x * 10;
   console.log(result);
   return result;
};
const add = (y) =&gt; y + 10;
const minus = (z) =&gt; z - 2;

// \u8BA1\u7B97\u7ED3\u679C
console.log(minus(add(multiply(10))));
// 100
// 108
// \u8FD9\u6837\u6211\u4EEC\u5C31\u628A\u4E09\u4E2A\u51FD\u6570\u8BA1\u7B97\u7ED3\u679C\u51FA\u6765\u4E86\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6765\u5B9E\u73B0\u4E00\u4E2A\u76F8\u5BF9\u901A\u7528\u7684\u51FD\u6570\uFF0C\u8BA1\u7B97\u8FD9\u4E09\u4E2A\u51FD\u6570\u7684\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const compose = (f, g, h) =&gt; {
  return function(x){
    return f(g(h(x)));
  }
}
const calc = compose(minus, add, multiply);
console.log(calc(10));
// 100
// 108

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u6837\u8FD8\u662F\u6709\u95EE\u9898\uFF0C\u53EA\u652F\u6301\u4E09\u4E2A\u51FD\u6570\u3002\u6211\u60F3\u652F\u6301\u591A\u4E2A\u51FD\u6570\u3002 \u6211\u4EEC\u4E86\u89E3\u5230\u6570\u7EC4\u7684<code>reduce</code>\u65B9\u6CD5\u5C31\u80FD\u5B9E\u73B0\u8FD9\u6837\u7684\u529F\u80FD\u3002 \u524D\u4E00\u4E2A\u51FD\u6570</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const compose = (...funcs) =&gt; {
  return funcs.reduce((a, b) =&gt; {
    return function(x){
      return a(b(x));
    }
  })
}
const calc = compose(minus, add, multiply);
console.log(calc(10));
// 100
// 108

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_57-redux\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_57-redux\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 57 redux\u4E2D\u95F4\u4EF6</h2><h3 id="\u7B80\u5355\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5B9E\u73B0" aria-hidden="true">#</a> \u7B80\u5355\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createStore(reducer) {
  let currentState
  let listeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    listeners.map(listener =&gt; {
      listener()
    })
    return action
  }

  function subscribe(cb) {
    listeners.push(cb)
    return () =&gt; {}
  }

  dispatch({type: &#39;ZZZZZZZZZZ&#39;})

  return {
    getState,
    dispatch,
    subscribe
  }
}

// \u5E94\u7528\u5B9E\u4F8B\u5982\u4E0B\uFF1A
function reducer(state = 0, action) {
  switch (action.type) {
    case &#39;ADD&#39;:
      return state + 1
    case &#39;MINUS&#39;:
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)

console.log(store);
store.subscribe(() =&gt; {
  console.log(&#39;change&#39;);
})
console.log(store.getState());
console.log(store.dispatch({type: &#39;ADD&#39;}));
console.log(store.getState());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FF7\u4F60\u7248" tabindex="-1"><a class="header-anchor" href="#\u8FF7\u4F60\u7248" aria-hidden="true">#</a> \u8FF7\u4F60\u7248</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export const createStore = (reducer,enhancer)=&gt;{
	if(enhancer) {
		return enhancer(createStore)(reducer)
	}
	let currentState = {}
	let currentListeners = []

	const getState = ()=&gt;currentState
	const subscribe = (listener)=&gt;{
		currentListeners.push(listener)
	}
	const dispatch = action=&gt;{
		currentState = reducer(currentState, action)
		currentListeners.forEach(v=&gt;v())
		return action
	}
	dispatch({type:&#39;@@INIT&#39;})
	return {getState,subscribe,dispatch}
}

//\u4E2D\u95F4\u4EF6\u5B9E\u73B0
export applyMiddleWare(...middlewares){
	return createStore=&gt;...args=&gt;{
		const store = createStore(...args)
		let dispatch = store.dispatch

		const midApi = {
			getState:store.getState,
			dispatch:...args=&gt;dispatch(...args)
		}
		const middlewaresChain = middlewares.map(middleware=&gt;middleware(midApi))
		dispatch = compose(...middlewaresChain)(store.dispatch)
		return {
			...store,
			dispatch
		}
	}

// fn1(fn2(fn3())) \u628A\u51FD\u6570\u5D4C\u5957\u4F9D\u6B21\u8C03\u7528
export function compose(...funcs){
	if(funcs.length===0){
		return arg=&gt;arg
	}
	if(funs.length===1){
		return funs[0]
	}
	return funcs.reduce((ret,item)=&gt;(...args)=&gt;ret(item(...args)))
}

//bindActionCreator\u5B9E\u73B0

function bindActionCreator(creator,dispatch){
    return ...args=&gt;dispatch(creator(...args))
}
function bindActionCreators(creators,didpatch){
    //let bound = {}
    //Object.keys(creators).forEach(v=&gt;{
   //     let creator = creator[v]
     //   bound[v] = bindActionCreator(creator,dispatch)
    //})
    //return bound

    return Object.keys(creators).reduce((ret,item)=&gt;{
	    ret[item] = bindActionCreator(creators[item],dispatch)
    	return ret
    },{})
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_58-\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u6839\u636E-key\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#_58-\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u6839\u636E-key\u53BB\u91CD" aria-hidden="true">#</a> 58 \u6570\u7EC4\u4E2D\u7684\u6570\u636E\u6839\u636E key\u53BB\u91CD</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u4EFB\u610F\u6570\u7EC4\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u901A\u7528\u51FD\u6570\uFF0C\u8BA9\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u6839\u636E key \u6392\u91CD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const dedup = (data, getKey = () =&gt; {} ) =&gt; {
  // todo
}
let data = [
  { id: 1, v: 1 },
  { id: 2, v: 2 },
  { id: 1, v: 1 },
];

// \u4EE5 id \u4F5C\u4E3A\u6392\u91CD key\uFF0C\u6267\u884C\u51FD\u6570\u5F97\u5230\u7ED3\u679C
// data = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const dedup = (data, getKey = () =&gt; { }) =&gt; {
    const dateMap = data.reduce((pre, cur) =&gt; {
        const key = getKey(cur)
        if (!pre[key]) {
            pre[key] = cur
        }
        return pre
    }, {})
    return Object.values(dateMap)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let data = [
    { id: 1, v: 1 },
    { id: 2, v: 2 },
    { id: 1, v: 1 },
];
console.log(dedup(data, (item) =&gt; item.id))

// \u4EE5 id \u4F5C\u4E3A\u6392\u91CD key\uFF0C\u6267\u884C\u51FD\u6570\u5F97\u5230\u7ED3\u679C
// data = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_59-reduce\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_59-reduce\u7528\u6CD5" aria-hidden="true">#</a> 59 reduce\u7528\u6CD5</h2><p>\u8BED\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>array.reduce(function(total, currentValue, currentIndex, arr), initialValue);
/*
  total: \u5FC5\u9700\u3002\u521D\u59CB\u503C, \u6216\u8005\u8BA1\u7B97\u7ED3\u675F\u540E\u7684\u8FD4\u56DE\u503C\u3002
  currentValue\uFF1A \u5FC5\u9700\u3002\u5F53\u524D\u5143\u7D20\u3002
  currentIndex\uFF1A \u53EF\u9009\u3002\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15\uFF1B
  arr\uFF1A \u53EF\u9009\u3002\u5F53\u524D\u5143\u7D20\u6240\u5C5E\u7684\u6570\u7EC4\u5BF9\u8C61\u3002
  initialValue: \u53EF\u9009\u3002\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u521D\u59CB\u503C\uFF0C\u76F8\u5F53\u4E8Etotal\u7684\u521D\u59CB\u503C\u3002
*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>reduceRight()</code>\xA0\u8BE5\u65B9\u6CD5\u7528\u6CD5\u4E0E<code>reduce()</code>\u5176\u5B9E\u662F\u76F8\u540C\u7684\uFF0C\u53EA\u662F\u904D\u5386\u7684\u987A\u5E8F\u76F8\u53CD\uFF0C\u5B83\u662F\u4ECE\u6570\u7EC4\u7684\u6700\u540E\u4E00\u9879\u5F00\u59CB\uFF0C\u5411\u524D\u904D\u5386\u5230\u7B2C\u4E00\u9879</p></blockquote><h3 id="\u6570\u7EC4\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u6C42\u548C" aria-hidden="true">#</a> \u6570\u7EC4\u6C42\u548C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [12, 34, 23];
const sum = arr.reduce((total, num) =&gt; total + num);

// \u8BBE\u5B9A\u521D\u59CB\u503C\u6C42\u548C
const arr = [12, 34, 23];
const sum = arr.reduce((total, num) =&gt; total + num, 10);  // \u4EE510\u4E3A\u521D\u59CB\u503C\u6C42\u548C

// \u5BF9\u8C61\u6570\u7EC4\u6C42\u548C
var result = [
  { subject: &#39;math&#39;, score: 88 },
  { subject: &#39;chinese&#39;, score: 95 },
  { subject: &#39;english&#39;, score: 80 }
];
const sum = result.reduce((accumulator, cur) =&gt; accumulator + cur.score, 0);
const sum = result.reduce((accumulator, cur) =&gt; accumulator + cur.score, -10);  // \u603B\u5206\u6263\u966410\u5206

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4\u6700\u5927\u503C" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u6700\u5927\u503C" aria-hidden="true">#</a> \u6570\u7EC4\u6700\u5927\u503C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const a = [23,123,342,12];
const max = a.reduce((pre,next)=&gt;pre&gt;cur?pre:cur,0); // 342

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4\u8F6C\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8F6C\u5BF9\u8C61" aria-hidden="true">#</a> \u6570\u7EC4\u8F6C\u5BF9\u8C61</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var streams = [{name: &#39;\u6280\u672F&#39;, id: 1}, {name: &#39;\u8BBE\u8BA1&#39;, id: 2}];
var obj = streams.reduce((accumulator, cur) =&gt; {accumulator[cur.id] = cur; return accumulator;}, {});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6241\u5E73\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6241\u5E73\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u6241\u5E73\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [[1, 2, 8], [3, 4, 9], [5, 6, 10]];
var res = arr.reduce((x, y) =&gt; x.concat(y), []);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u6570\u7EC4\u53BB\u91CD</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B9E\u73B0\u7684\u57FA\u672C\u539F\u7406\u5982\u4E0B\uFF1A

\u2460 \u521D\u59CB\u5316\u4E00\u4E2A\u7A7A\u6570\u7EC4
\u2461 \u5C06\u9700\u8981\u53BB\u91CD\u5904\u7406\u7684\u6570\u7EC4\u4E2D\u7684\u7B2C1\u9879\u5728\u521D\u59CB\u5316\u6570\u7EC4\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF08\u7A7A\u6570\u7EC4\u4E2D\u80AF\u5B9A\u627E\u4E0D\u5230\uFF09\uFF0C\u5C31\u5C06\u8BE5\u9879\u6DFB\u52A0\u5230\u521D\u59CB\u5316\u6570\u7EC4\u4E2D
\u2462 \u5C06\u9700\u8981\u53BB\u91CD\u5904\u7406\u7684\u6570\u7EC4\u4E2D\u7684\u7B2C2\u9879\u5728\u521D\u59CB\u5316\u6570\u7EC4\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5C31\u5C06\u8BE5\u9879\u7EE7\u7EED\u6DFB\u52A0\u5230\u521D\u59CB\u5316\u6570\u7EC4\u4E2D
\u2463 ......
\u2464 \u5C06\u9700\u8981\u53BB\u91CD\u5904\u7406\u7684\u6570\u7EC4\u4E2D\u7684\u7B2Cn\u9879\u5728\u521D\u59CB\u5316\u6570\u7EC4\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5C31\u5C06\u8BE5\u9879\u7EE7\u7EED\u6DFB\u52A0\u5230\u521D\u59CB\u5316\u6570\u7EC4\u4E2D
\u2465 \u5C06\u8FD9\u4E2A\u521D\u59CB\u5316\u6570\u7EC4\u8FD4\u56DE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var newArr = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 &amp;&amp; prev.push(cur);
    return prev;
},[]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u8C61\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u5BF9\u8C61\u6570\u7EC4\u53BB\u91CD</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const dedup = (data, getKey = () =&gt; { }) =&gt; {
    const dateMap = data.reduce((pre, cur) =&gt; {
        const key = getKey(cur)
        if (!pre[key]) {
            pre[key] = cur
        }
        return pre
    }, {})
    return Object.values(dateMap)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6C42\u5B57\u7B26\u4E32\u4E2D\u5B57\u6BCD\u51FA\u73B0\u7684\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#\u6C42\u5B57\u7B26\u4E32\u4E2D\u5B57\u6BCD\u51FA\u73B0\u7684\u6B21\u6570" aria-hidden="true">#</a> \u6C42\u5B57\u7B26\u4E32\u4E2D\u5B57\u6BCD\u51FA\u73B0\u7684\u6B21\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const str = &#39;sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha&#39;;

const res = str.split(&#39;&#39;).reduce((pre,next)=&gt;{
 pre[next] ? pre[next]++ : pre[next] = 1
 return pre
},{})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7ED3\u679C
-: 1
a: 8
c: 1
d: 4
e: 1
f: 4
g: 1
h: 2
i: 2
j: 4
k: 1
l: 3
m: 2
n: 1
q: 5
r: 1
s: 6
u: 1
w: 2
x: 1
z: 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="compose\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#compose\u51FD\u6570" aria-hidden="true">#</a> compose\u51FD\u6570</h3><blockquote><p><code>redux compose</code>\xA0\u6E90\u7801\u5B9E\u73B0</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function compose(...funs) {
    if (funs.length === 0) {
        return arg =&gt; arg;
    }
    if (funs.length === 1) {
       return funs[0];
    }
    return funs.reduce((a, b) =&gt; (...arg) =&gt; a(b(...arg)))
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_60-\u624B\u5199\u539F\u751Fajax" tabindex="-1"><a class="header-anchor" href="#_60-\u624B\u5199\u539F\u751Fajax" aria-hidden="true">#</a> 60 \u624B\u5199\u539F\u751FAJAX</h2><p>\u6B65\u9AA4</p><ul><li>\u521B\u5EFA\xA0<code>XMLHttpRequest</code>\xA0\u5B9E\u4F8B</li><li>\u53D1\u51FA HTTP \u8BF7\u6C42</li><li>\u670D\u52A1\u5668\u8FD4\u56DE XML \u683C\u5F0F\u7684\u5B57\u7B26\u4E32</li><li>JS \u89E3\u6790 XML\uFF0C\u5E76\u66F4\u65B0\u5C40\u90E8\u9875\u9762</li><li>\u4E0D\u8FC7\u968F\u7740\u5386\u53F2\u8FDB\u7A0B\u7684\u63A8\u8FDB\uFF0CXML \u5DF2\u7ECF\u88AB\u6DD8\u6C70\uFF0C\u53D6\u800C\u4EE3\u4E4B\u7684\u662F JSON\u3002</li></ul><p>\u4E86\u89E3\u4E86\u5C5E\u6027\u548C\u65B9\u6CD5\u4E4B\u540E\uFF0C\u6839\u636E AJAX \u7684\u6B65\u9AA4\uFF0C\u624B\u5199\u6700\u7B80\u5355\u7684 GET \u8BF7\u6C42\u3002</p><h3 id="\u7248\u672C1" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C1" aria-hidden="true">#</a> \u7248\u672C1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function ajax() {
  let xhr = new XMLHttpRequest() //\u5B9E\u4F8B\u5316\uFF0C\u4EE5\u8C03\u7528\u65B9\u6CD5
  xhr.open(&#39;get&#39;, &#39;https://www.google.com&#39;)  //\u53C2\u65702\uFF0Curl\u3002\u53C2\u6570\u4E09\uFF1A\u5F02\u6B65
  xhr.onreadystatechange = () =&gt; {  //\u6BCF\u5F53 readyState \u5C5E\u6027\u6539\u53D8\u65F6\uFF0C\u5C31\u4F1A\u8C03\u7528\u8BE5\u51FD\u6570\u3002
    if (xhr.readyState === 4) {  //XMLHttpRequest \u4EE3\u7406\u5F53\u524D\u6240\u5904\u72B6\u6001\u3002
      if (xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300) {  //200-300\u8BF7\u6C42\u6210\u529F
        let string = request.responseText
        //JSON.parse() \u65B9\u6CD5\u7528\u6765\u89E3\u6790JSON\u5B57\u7B26\u4E32\uFF0C\u6784\u9020\u7531\u5B57\u7B26\u4E32\u63CF\u8FF0\u7684JavaScript\u503C\u6216\u5BF9\u8C61
        let object = JSON.parse(string)
      }
    }
  }
  request.send() //\u7528\u4E8E\u5B9E\u9645\u53D1\u51FA HTTP \u8BF7\u6C42\u3002\u4E0D\u5E26\u53C2\u6570\u4E3AGET\u8BF7\u6C42
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#promise\u5B9E\u73B0" aria-hidden="true">#</a> promise\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function ajax(url) {
  const p = new Promise((resolve, reject) =&gt; {
    let xhr = new XMLHttpRequest()
    xhr.open(&#39;get&#39;, url)
    xhr.onreadystatechange = () =&gt; {
      if (xhr.readyState == 4) {
        if (xhr.status &gt;= 200 &amp;&amp; xhr.status &lt;= 300) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(&#39;\u8BF7\u6C42\u51FA\u9519&#39;)
        }
      }
    }
    xhr.send()  //\u53D1\u9001hppt\u8BF7\u6C42
  })
  return p
}

let url = &#39;/data.json&#39;
ajax(url).then(res =&gt; console.log(res))
  .catch(reason =&gt; console.log(reason))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_61-\u521B\u5EFA10\u4E2A\u6807\u7B7E-\u70B9\u51FB\u7684\u65F6\u5019\u5F39\u51FA\u6765\u5BF9\u5E94\u7684\u5E8F\u53F7" tabindex="-1"><a class="header-anchor" href="#_61-\u521B\u5EFA10\u4E2A\u6807\u7B7E-\u70B9\u51FB\u7684\u65F6\u5019\u5F39\u51FA\u6765\u5BF9\u5E94\u7684\u5E8F\u53F7" aria-hidden="true">#</a> 61 \u521B\u5EFA10\u4E2A\u6807\u7B7E\uFF0C\u70B9\u51FB\u7684\u65F6\u5019\u5F39\u51FA\u6765\u5BF9\u5E94\u7684\u5E8F\u53F7</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a
for(let i=0;i&lt;10;i++){
 a=document.createElement(&#39;a&#39;)
 a.innerHTML=i+&#39;&lt;br&gt;&#39;
 a.addEventListener(&#39;click&#39;,function(e){
     console.log(this)  //this\u4E3A\u5F53\u524D\u70B9\u51FB\u7684&lt;a&gt;
     e.preventDefault()  //\u5982\u679C\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u4E8B\u4EF6\u884C\u4E3A\u5C06\u4E0D\u518D\u89E6\u53D1\u3002
     //\u4F8B\u5982\uFF0C\u5728\u6267\u884C\u8FD9\u4E2A\u65B9\u6CD5\u540E\uFF0C\u5982\u679C\u70B9\u51FB\u4E00\u4E2A\u94FE\u63A5\uFF08a\u6807\u7B7E\uFF09\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u8DF3\u8F6C\u5230\u65B0\u7684 URL \u53BB\u4E86\u3002\u6211\u4EEC\u53EF\u4EE5\u7528 event.isDefaultPrevented() \u6765\u786E\u5B9A\u8FD9\u4E2A\u65B9\u6CD5\u662F\u5426(\u5728\u90A3\u4E2A\u4E8B\u4EF6\u5BF9\u8C61\u4E0A)\u88AB\u8C03\u7528\u8FC7\u4E86\u3002
     alert(i)
 })
 const d=document.querySelector(&#39;div&#39;)
 d.appendChild(a)  //append\u5411\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u5143\u7D20\u8FFD\u52A0\u8BE5\u5143\u7D20\u3002
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_62-const-\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_62-const-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 62 const \u5B9E\u73B0\u539F\u7406</h2><blockquote><p>\u7531\u4E8EES5\u73AF\u5883\u6CA1\u6709<code>block</code>\u7684\u6982\u5FF5\uFF0C\u6240\u4EE5\u662F\u65E0\u6CD5\u767E\u5206\u767E\u5B9E\u73B0<code>const</code>\uFF0C\u53EA\u80FD\u662F\u6302\u8F7D\u5230\u67D0\u4E2A\u5BF9\u8C61\u4E0B\uFF0C\u8981\u4E48\u662F\u5168\u5C40\u7684<code>windo</code>w\uFF0C\u8981\u4E48\u5C31\u662F\u81EA\u5B9A\u4E49\u4E00\u4E2A<code>object</code>\u6765\u5F53\u5BB9\u5668</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var __const = function __const (data, value) {
    window.data = value // \u628A\u8981\u5B9A\u4E49\u7684data\u6302\u8F7D\u5230window\u4E0B\uFF0C\u5E76\u8D4B\u503Cvalue
    Object.defineProperty(window, data, { // \u5229\u7528Object.defineProperty\u7684\u80FD\u529B\u52AB\u6301\u5F53\u524D\u5BF9\u8C61\uFF0C\u5E76\u4FEE\u6539\u5176\u5C5E\u6027\u63CF\u8FF0\u7B26
      enumerable: false,
      configurable: false,
      get: function () {
        return value
      },
      set: function (data) {
        if (data !== value) { // \u5F53\u8981\u5BF9\u5F53\u524D\u5C5E\u6027\u8FDB\u884C\u8D4B\u503C\u65F6\uFF0C\u5219\u629B\u51FA\u9519\u8BEF\uFF01
          throw new TypeError(&#39;Assignment to constant variable.&#39;)
        } else {
          return value
        }
      }
    })
  }
  __const(&#39;a&#39;, 10)
  console.log(a)
  delete a
  console.log(a)
  for (let item in window) { // \u56E0\u4E3Aconst\u5B9A\u4E49\u7684\u5C5E\u6027\u5728global\u4E0B\u4E5F\u662F\u4E0D\u5B58\u5728\u7684\uFF0C\u6240\u4EE5\u7528\u5230\u4E86enumerable: false\u6765\u6A21\u62DF\u8FD9\u4E00\u529F\u80FD
    if (item === &#39;a&#39;) { // \u56E0\u4E3A\u4E0D\u53EF\u679A\u4E3E\uFF0C\u6240\u4EE5\u4E0D\u6267\u884C
      console.log(window[item])
    }
  }
  a = 20 // \u62A5\u9519

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Vue\u76EE\u524D\u53CC\u5411\u7ED1\u5B9A\u7684\u6838\u5FC3\u5B9E\u73B0\u601D\u8DEF\u5C31\u662F\u5229\u7528<code>Object.defineProperty</code>\u5BF9<code>get</code>\u8DDF<code>set</code>\u8FDB\u884C\u52AB\u6301\uFF0C\u76D1\u542C\u7528\u6237\u5BF9\u5C5E\u6027\u8FDB\u884C\u8C03\u7528\u4EE5\u53CA\u8D4B\u503C\u65F6\u7684\u5177\u4F53\u60C5\u51B5\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7684\u53CC\u5411\u7ED1\u5B9A</p></blockquote><h2 id="_63-\u624B\u52A8\u5B9E\u73B0async-await" tabindex="-1"><a class="header-anchor" href="#_63-\u624B\u52A8\u5B9E\u73B0async-await" aria-hidden="true">#</a> 63 \u624B\u52A8\u5B9E\u73B0async await</h2><p>\u5206\u6790</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// generator\u751F\u6210\u5668  \u751F\u6210\u8FED\u4EE3\u5668iterator

// \u9ED8\u8BA4\u8FD9\u6837\u5199\u7684\u7C7B\u6570\u7EC4\u662F\u4E0D\u80FD\u88AB\u8FED\u4EE3\u7684\uFF0C\u7F3A\u5C11\u8FED\u4EE3\u65B9\u6CD5
let likeArray = {&#39;0&#39;: 1, &#39;1&#39;: 2, &#39;2&#39;: 3, &#39;3&#39;: 4, length: 4}

// // \u4F7F\u7528\u8FED\u4EE3\u5668\u4F7F\u5F97\u53EF\u4EE5\u5C55\u5F00\u6570\u7EC4
// // Symbol\u6709\u5F88\u591A\u5143\u7F16\u7A0B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6539js\u672C\u8EAB\u529F\u80FD
// likeArray[Symbol.iterator] = function () {
//   // \u8FED\u4EE3\u5668\u662F\u4E00\u4E2A\u5BF9\u8C61 \u5BF9\u8C61\u4E2D\u6709next\u65B9\u6CD5 \u6BCF\u6B21\u8C03\u7528next \u90FD\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61 {value,done}
//   let index = 0
//   return {
//     next: ()=&gt;{
//       // \u4F1A\u81EA\u52A8\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5
//       console.log(&#39;index&#39;,index)
//       return {
//         // this \u6307\u5411likeArray
//         value: this[index],
//         done: index++ === this.length
//       }
//     }
//   }
// }
// let arr = [...likeArray]

// console.log(&#39;arr&#39;, arr)

// \u4F7F\u7528\u751F\u6210\u5668\u8FD4\u56DE\u8FED\u4EE3\u5668
// likeArray[Symbol.iterator] = function *() {
//   let index = 0
//   while (index != this.length) {
//     yield this[index++]
//   }
// }
// let arr = [...likeArray]

// console.log(&#39;arr&#39;, arr)

// \u751F\u6210\u5668 \u78B0\u5230yield\u5C31\u4F1A\u6682\u505C
// function *read(params) {
//   yield 1;
//   yield 2;
// }
// \u751F\u6210\u5668\u8FD4\u56DE\u7684\u662F\u8FED\u4EE3\u5668
// let it = read()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// \u901A\u8FC7generator\u6765\u4F18\u5316promise\uFF08promise\u7684\u7F3A\u70B9\u662F\u4E0D\u505C\u7684\u94FE\u5F0F\u8C03\u7528\uFF09
const fs = require(&#39;fs&#39;)
const path = require(&#39;path&#39;)
// const co = require(&#39;co&#39;) // \u5E2E\u6211\u4EEC\u6267\u884Cgenerator

const promisify = fn=&gt;{
  return (...args)=&gt;{
    return new Promise((resolve,reject)=&gt;{
      fn(...args, (err,data)=&gt;{
        if(err) {
          reject(err)
        }
        resolve(data)
      })
    })
  }
}

// promise\u5316
let asyncReadFile = promisify(fs.readFile)

function * read() {
  let content1 = yield asyncReadFile(path.join(__dirname,&#39;./data/name.txt&#39;),&#39;utf8&#39;)
  let content2 = yield asyncReadFile(path.join(__dirname,&#39;./data/&#39; + content1),&#39;utf8&#39;)
  return content2
}

// \u8FD9\u6837\u5199\u592A\u7E41\u7410 \u9700\u8981\u501F\u52A9co\u6765\u5B9E\u73B0
// let re = read()
// let {value,done} = re.next()
// value.then(data=&gt;{
//   // \u9664\u4E86\u7B2C\u4E00\u6B21\u4F20\u53C2\u6CA1\u6709\u610F\u4E49\u5916 \u5269\u4E0B\u7684\u4F20\u53C2\u90FD\u8D4B\u4E88\u4E86\u4E0A\u4E00\u6B21\u7684\u8FD4\u56DE\u503C
//   let {value,done} = re.next(data)
//   value.then(d=&gt;{
//     let {value,done} = re.next(d)
//     console.log(value,done)
//   })
// }).catch(err=&gt;{
//   re.throw(err) // \u624B\u52A8\u629B\u51FA\u9519\u8BEF \u53EF\u4EE5\u88ABtry catch\u6355\u83B7
// })

// \u5B9E\u73B0co\u539F\u7406
function co(it) {// it \u8FED\u4EE3\u5668
  return new Promise((resolve,reject)=&gt;{
    // \u5F02\u6B65\u8FED\u4EE3 \u9700\u8981\u6839\u636E\u51FD\u6570\u6765\u5B9E\u73B0
    function next(data) {
      // \u9012\u5F52\u5F97\u6709\u4E2D\u6B62\u6761\u4EF6
      let {value,done} = it.next(data)
      if(done) {
        resolve(value) // \u76F4\u63A5\u8BA9promise\u53D8\u6210\u6210\u529F \u7528\u5F53\u524D\u8FD4\u56DE\u7684\u7ED3\u679C
      } else {
        // Promise.resolve(value).then(data=&gt;{
        //   next(data)
        // }).catch(err=&gt;{
        //   reject(err)
        // })
        // \u7B80\u5199
        Promise.resolve(value).then(next,reject)
      }
    }
    // \u9996\u6B21\u8C03\u7528
    next()
  })
}

co(read()).then(d=&gt;{
  console.log(d)
}).catch(err=&gt;{
  console.log(err,&#39;--&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6574\u4F53\u770B\u4E00\u4E0B\u7ED3\u6784</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function asyncToGenerator(generatorFunc) {
    return function() {
      const gen = generatorFunc.apply(this, arguments)
      return new Promise((resolve, reject) =&gt; {
        function step(key, arg) {
          let generatorResult
          try {
            generatorResult = gen[key](arg)
          } catch (error) {
            return reject(error)
          }
          const { value, done } = generatorResult
          if (done) {
            return resolve(value)
          } else {
            return Promise.resolve(value).then(val =&gt; step(&#39;next&#39;, val), err =&gt; step(&#39;throw&#39;, err))
          }
        }
        step(&quot;next&quot;)
      })
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5206\u6790</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function asyncToGenerator(generatorFunc) {
  // \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u51FD\u6570
  return function() {

    // \u5148\u8C03\u7528generator\u51FD\u6570 \u751F\u6210\u8FED\u4EE3\u5668
    // \u5BF9\u5E94 var gen = testG()
    const gen = generatorFunc.apply(this, arguments)

    // \u8FD4\u56DE\u4E00\u4E2Apromise \u56E0\u4E3A\u5916\u90E8\u662F\u7528.then\u7684\u65B9\u5F0F \u6216\u8005await\u7684\u65B9\u5F0F\u53BB\u4F7F\u7528\u8FD9\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7684
    // var test = asyncToGenerator(testG)
    // test().then(res =&gt; console.log(res))
    return new Promise((resolve, reject) =&gt; {

      // \u5185\u90E8\u5B9A\u4E49\u4E00\u4E2Astep\u51FD\u6570 \u7528\u6765\u4E00\u6B65\u4E00\u6B65\u7684\u8DE8\u8FC7yield\u7684\u963B\u788D
      // key\u6709next\u548Cthrow\u4E24\u79CD\u53D6\u503C\uFF0C\u5206\u522B\u5BF9\u5E94\u4E86gen\u7684next\u548Cthrow\u65B9\u6CD5
      // arg\u53C2\u6570\u5219\u662F\u7528\u6765\u628Apromise resolve\u51FA\u6765\u7684\u503C\u4EA4\u7ED9\u4E0B\u4E00\u4E2Ayield
      function step(key, arg) {
        let generatorResult

        // \u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u5305\u88F9\u5728try catch\u4E2D
        // \u5982\u679C\u62A5\u9519\u4E86 \u5C31\u628Apromise\u7ED9reject\u6389 \u5916\u90E8\u901A\u8FC7.catch\u53EF\u4EE5\u83B7\u53D6\u5230\u9519\u8BEF
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }

        // gen.next() \u5F97\u5230\u7684\u7ED3\u679C\u662F\u4E00\u4E2A { value, done } \u7684\u7ED3\u6784
        const { value, done } = generatorResult

        if (done) {
          // \u5982\u679C\u5DF2\u7ECF\u5B8C\u6210\u4E86 \u5C31\u76F4\u63A5resolve\u8FD9\u4E2Apromise
          // \u8FD9\u4E2Adone\u662F\u5728\u6700\u540E\u4E00\u6B21\u8C03\u7528next\u540E\u624D\u4F1A\u4E3Atrue
          // \u4EE5\u672C\u6587\u7684\u4F8B\u5B50\u6765\u8BF4 \u6B64\u65F6\u7684\u7ED3\u679C\u662F { done: true, value: &#39;success&#39; }
          // \u8FD9\u4E2Avalue\u4E5F\u5C31\u662Fgenerator\u51FD\u6570\u6700\u540E\u7684\u8FD4\u56DE\u503C
          return resolve(value)
        } else {
          // \u9664\u4E86\u6700\u540E\u7ED3\u675F\u7684\u65F6\u5019\u5916\uFF0C\u6BCF\u6B21\u8C03\u7528gen.next()
          // \u5176\u5B9E\u662F\u8FD4\u56DE { value: Promise, done: false } \u7684\u7ED3\u6784\uFF0C
          // \u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662FPromise.resolve\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2Apromise\u4E3A\u53C2\u6570
          // \u5E76\u4E14\u8FD9\u4E2Apromise\u53C2\u6570\u88ABresolve\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2Athen\u624D\u4F1A\u88AB\u8C03\u7528
          return Promise.resolve(
            // \u8FD9\u4E2Avalue\u5BF9\u5E94\u7684\u662Fyield\u540E\u9762\u7684promise
            value
          ).then(
            // value\u8FD9\u4E2Apromise\u88ABresove\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u6267\u884Cnext
            // \u5E76\u4E14\u53EA\u8981done\u4E0D\u662Ftrue\u7684\u65F6\u5019 \u5C31\u4F1A\u9012\u5F52\u7684\u5F80\u4E0B\u89E3\u5F00promise
            // \u5BF9\u5E94gen.next().value.then(value =&gt; {
            //    gen.next(value).value.then(value2 =&gt; {
            //       gen.next()
            //
            //      // \u6B64\u65F6done\u4E3Atrue\u4E86 \u6574\u4E2Apromise\u88ABresolve\u4E86
            //      // \u6700\u5916\u90E8\u7684test().then(res =&gt; console.log(res))\u7684then\u5C31\u5F00\u59CB\u6267\u884C\u4E86
            //    })
            // })
            function onResolve(val) {
              step(&quot;next&quot;, val)
            },
            // \u5982\u679Cpromise\u88ABreject\u4E86 \u5C31\u518D\u6B21\u8FDB\u5165step\u51FD\u6570
            // \u4E0D\u540C\u7684\u662F\uFF0C\u8FD9\u6B21\u7684try catch\u4E2D\u8C03\u7528\u7684\u662Fgen.throw(err)
            // \u90A3\u4E48\u81EA\u7136\u5C31\u88ABcatch\u5230 \u7136\u540E\u628Apromise\u7ED9reject\u6389\u5566
            function onReject(err) {
              step(&quot;throw&quot;, err)
            },
          )
        }
      }
      step(&quot;next&quot;)
    })
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_64-find\u548Cfindindex\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_64-find\u548Cfindindex\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 64 find\u548CfindIndex\u7684\u5B9E\u73B0\u539F\u7406</h2><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3><ul><li><code>find</code>\xA0\u63A5\u6536\u4E00\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u53C2\u6570\uFF0C\u65B9\u6CD5\u5185\u90E8\u8FD4\u56DE\u4E00\u4E2A\u6761\u4EF6</li><li><code>find</code>\xA0\u4F1A\u904D\u5386\u6240\u6709\u7684\u5143\u7D20\uFF0C\u6267\u884C\u4F60\u7ED9\u5B9A\u7684\u5E26\u6709\u6761\u4EF6\u8FD4\u56DE\u503C\u7684\u51FD\u6570</li><li>\u7B26\u5408\u8BE5\u6761\u4EF6\u7684\u5143\u7D20\u4F1A\u4F5C\u4E3A find \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</li><li>\u5982\u679C\u904D\u5386\u7ED3\u675F\u8FD8\u6CA1\u6709\u7B26\u5408\u8BE5\u6761\u4EF6\u7684\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE\xA0<code>undefined</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var users = [
  {id: 1, name: &#39;\u5F20\u4E09&#39;},
  {id: 2, name: &#39;\u5F20\u4E09&#39;},
  {id: 3, name: &#39;\u5F20\u4E09&#39;},
  {id: 4, name: &#39;\u5F20\u4E09&#39;}
]

Array.prototype.myFind = function (callback) {
  // var callback = function (item, index) { return item.id === 4 }
  for (var i = 0; i &lt; this.length; i++) {
    if (callback(this[i], i)) {
      return this[i]
    }
  }
}

var ret = users.myFind(function (item, index) {
  return item.id === 2
})

console.log(ret)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findindex" tabindex="-1"><a class="header-anchor" href="#findindex" aria-hidden="true">#</a> findIndex</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var users = [
  {id: 1, name: &#39;\u5F20\u4E09&#39;},
  {id: 2, name: &#39;\u5F20\u4E09&#39;},
  {id: 3, name: &#39;\u5F20\u4E09&#39;},
  {id: 4, name: &#39;\u5F20\u4E09&#39;}
]

Array.prototype.myFindIndex = function (callback) {
  // var callback = function (item, index) { return item.id === 4 }
  for (var i = 0; i &lt; this.length; i++) {
    if (callback(this[i], i)) {
      // \u8FD9\u91CC\u8FD4\u56DE
      return i
    }
  }
}

var ret = users.myFind(function (item, index) {
  return item.id === 2
})

console.log(ret)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_65-\u5B9E\u73B0\u4E00\u4E2Aforeach\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_65-\u5B9E\u73B0\u4E00\u4E2Aforeach\u51FD\u6570" aria-hidden="true">#</a> 65 \u5B9E\u73B0\u4E00\u4E2AforEach\u51FD\u6570</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.forEach = function(callback, context=window) {
  // this=&gt;arr
  let self = this,
      i = 0,
      len = self.length;

  for(;i&lt;len;i++) {
    typeof callback == &#39;function&#39; &amp;&amp; callback.call(context,self[i], i)
   }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_66-\u5199\u4E00\u4E2A\u7BA1\u7406\u672C\u5730\u7F13\u5B58\u8FC7\u671F\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_66-\u5199\u4E00\u4E2A\u7BA1\u7406\u672C\u5730\u7F13\u5B58\u8FC7\u671F\u7684\u51FD\u6570" aria-hidden="true">#</a> 66 \u5199\u4E00\u4E2A\u7BA1\u7406\u672C\u5730\u7F13\u5B58\u8FC7\u671F\u7684\u51FD\u6570</h2><blockquote><p>\u5C01\u88C5\u4E00\u4E2A\u53EF\u4EE5\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\u7684<code>localStorage</code>\u5B58\u50A8\u51FD\u6570</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Storage{
  constructor(name){
      this.name = &#39;storage&#39;;
  }
  //\u8BBE\u7F6E\u7F13\u5B58
  setItem(params){
      let obj = {
          name:&#39;&#39;, // \u5B58\u5165\u6570\u636E  \u5C5E\u6027
          value:&#39;&#39;,// \u5C5E\u6027\u503C
          expires:&quot;&quot;, // \u8FC7\u671F\u65F6\u95F4
          startTime:new Date().getTime()//\u8BB0\u5F55\u4F55\u65F6\u5C06\u503C\u5B58\u5165\u7F13\u5B58\uFF0C\u6BEB\u79D2\u7EA7
      }
      let options = {};
      //\u5C06obj\u548C\u4F20\u8FDB\u6765\u7684params\u5408\u5E76
      Object.assign(options,obj,params);
      if(options.expires){
      //\u5982\u679Coptions.expires\u8BBE\u7F6E\u4E86\u7684\u8BDD
      //\u4EE5options.name\u4E3Akey\uFF0Coptions\u4E3A\u503C\u653E\u8FDB\u53BB
          localStorage.setItem(options.name,JSON.stringify(options));
      }else{
      //\u5982\u679Coptions.expires\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5C31\u5224\u65AD\u4E00\u4E0Bvalue\u7684\u7C7B\u578B
          let type = Object.prototype.toString.call(options.value);
          //\u5982\u679Cvalue\u662F\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u5BF9\u8C61\u7684\u7C7B\u578B\uFF0C\u5C31\u5148\u7528JSON.stringify\u8F6C\u4E00\u4E0B\uFF0C\u518D\u5B58\u8FDB\u53BB
          if(Object.prototype.toString.call(options.value) == &#39;[object Object]&#39;){
              options.value = JSON.stringify(options.value);
          }
          if(Object.prototype.toString.call(options.value) == &#39;[object Array]&#39;){
              options.value = JSON.stringify(options.value);
          }
          localStorage.setItem(options.name,options.value);
      }
  }
  //\u62FF\u5230\u7F13\u5B58
  getItem(name){
      let item = localStorage.getItem(name);
      //\u5148\u5C06\u62FF\u5230\u7684\u8BD5\u7740\u8FDB\u884Cjson\u8F6C\u4E3A\u5BF9\u8C61\u7684\u5F62\u5F0F
      try{
          item = JSON.parse(item);
      }catch(error){
      //\u5982\u679C\u4E0D\u884C\u5C31\u4E0D\u662Fjson\u7684\u5B57\u7B26\u4E32\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE
          item = item;
      }
      //\u5982\u679C\u6709startTime\u7684\u503C\uFF0C\u8BF4\u660E\u8BBE\u7F6E\u4E86\u5931\u6548\u65F6\u95F4
      if(item.startTime){
          let date = new Date().getTime();
          //\u4F55\u65F6\u5C06\u503C\u53D6\u51FA\u51CF\u53BB\u521A\u5B58\u5165\u7684\u65F6\u95F4\uFF0C\u4E0Eitem.expires\u6BD4\u8F83\uFF0C\u5982\u679C\u5927\u4E8E\u5C31\u662F\u8FC7\u671F\u4E86\uFF0C\u5982\u679C\u5C0F\u4E8E\u6216\u7B49\u4E8E\u5C31\u8FD8\u6CA1\u8FC7\u671F
          if(date - item.startTime &gt; item.expires){
          //\u7F13\u5B58\u8FC7\u671F\uFF0C\u6E05\u9664\u7F13\u5B58\uFF0C\u8FD4\u56DEfalse
              localStorage.removeItem(name);
              return false;
          }else{
          //\u7F13\u5B58\u672A\u8FC7\u671F\uFF0C\u8FD4\u56DE\u503C
              return item.value;
          }
      }else{
      //\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u5931\u6548\u65F6\u95F4\uFF0C\u76F4\u63A5\u8FD4\u56DE\u503C
          return item;
      }
  }
  //\u79FB\u51FA\u7F13\u5B58
  removeItem(name){
      localStorage.removeItem(name);
  }
  //\u79FB\u51FA\u5168\u90E8\u7F13\u5B58
  clear(){
      localStorage.clear();
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let storage = new Storage();
storage.setItem({
  name:&quot;name&quot;,
  value:&quot;ppp&quot;
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u6211\u628A\u503C\u53D6\u51FA\u6765</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let value = storage.getItem(&#39;name&#39;);
console.log(&#39;\u6211\u662Fvalue&#39;,value);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8BBE\u7F6E5\u79D2\u8FC7\u671F</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let storage = new Storage();
storage.setItem({
  name:&quot;name&quot;,
  value:&quot;ppp&quot;,
  expires: 5000
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FC7\u671F\u540E\u518D\u53D6\u51FA\u6765\u4F1A\u53D8\u4E3A false
let value = storage.getItem(&#39;name&#39;);
console.log(&#39;\u6211\u662Fvalue&#39;,value);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_67-\u624B\u5199-redux-thunk\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_67-\u624B\u5199-redux-thunk\u6E90\u7801" aria-hidden="true">#</a> 67 \u624B\u5199 redux-thunk\u6E90\u7801</h2><blockquote><p><code>redux-thunk</code>\xA0\u53EF\u4EE5\u5229\u7528\xA0<code>redux</code>\xA0\u4E2D\u95F4\u4EF6\u8BA9\xA0<code>redux</code>\xA0\u652F\u6301\u5F02\u6B65\u7684\xA0<code>action</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5982\u679C action \u662F\u4E2A\u51FD\u6570\uFF0C\u5C31\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570
// \u5982\u679C action \u4E0D\u662F\u51FD\u6570\uFF0C\u5C31\u4F20\u7ED9\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
// \u53D1\u73B0 action \u662F\u51FD\u6570\u5C31\u8C03\u7528
const thunk = ({ dispatch, getState }) =&gt; (next) =&gt; (action) =&gt; {
  if (typeof action === &#39;function&#39;) {
    return action(dispatch, getState);
  }

  return next(action);
};
export default thunk

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_68-\u624B\u5199es5\u6570\u7EC4\u5E38\u89C1\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_68-\u624B\u5199es5\u6570\u7EC4\u5E38\u89C1\u65B9\u6CD5" aria-hidden="true">#</a> 68 \u624B\u5199ES5\u6570\u7EC4\u5E38\u89C1\u65B9\u6CD5</h2><h3 id="\u5B9E\u73B0foreach\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0foreach\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u73B0forEach\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.myForEach = function(callback, context=window) {
  // this=&gt;arr
  let self = this,
      i = 0,
      len = self.length;

  for(;i&lt;len;i++) {
    typeof callback == &#39;function&#39; &amp;&amp; callback.call(context,self[i], i)
   }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0filter\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0filter\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u73B0filter\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.myFilter=function(callback, context=window){

  let len = this.length
      newArr = [],
      i=0

  for(; i &lt; len; i++){
    if(callback.apply(context, [this[i], i , this])){
      newArr.push(this[i]);
    }
  }
  return newArr;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0map\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0map\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u73B0map\u65B9\u6CD5</h3><ul><li>\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u6709\u54EA\u4E9B\uFF0C\u8FD4\u56DE\u503C\u5982\u4F55\u5904\u7406</li><li>\u4E0D\u4FEE\u6539\u539F\u6765\u7684\u6570\u7EC4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.myMap = function(callback, context){
  // \u8F6C\u6362\u7C7B\u6570\u7EC4
  var arr = Array.prototype.slice.call(this),//\u7531\u4E8E\u662FES5\u6240\u4EE5\u5C31\u4E0D\u7528...\u5C55\u5F00\u7B26\u4E86
      mappedArr = [],
      i = 0;

  for (; i &lt; arr.length; i++ ){
    // \u628A\u5F53\u524D\u503C\u3001\u7D22\u5F15\u3001\u5F53\u524D\u6570\u7EC4\u8FD4\u56DE\u53BB\u3002\u8C03\u7528\u7684\u65F6\u5019\u4F20\u5230\u51FD\u6570\u53C2\u6570\u4E2D [1,2,3,4].map((curr,index,arr))
    mappedArr.push(callback.call(context, arr[i], i, this));
  }
  return mappedArr;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0reduce\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0reduce\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u73B0reduce\u65B9\u6CD5</h3><ul><li>\u521D\u59CB\u503C\u4E0D\u4F20\u600E\u4E48\u5904\u7406</li><li>\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u6709\u54EA\u4E9B\uFF0C\u8FD4\u56DE\u503C\u5982\u4F55\u5904\u7406\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.myReduce = function(fn, initialValue) {
  var arr = Array.prototype.slice.call(this);
  var res, startIndex;

  res = initialValue ? initialValue : arr[0]; // \u4E0D\u4F20\u9ED8\u8BA4\u53D6\u6570\u7EC4\u7B2C\u4E00\u9879
  startIndex = initialValue ? 0 : 1;

  for(var i = startIndex; i &lt; arr.length; i++) {
    // \u628A\u521D\u59CB\u503C\u3001\u5F53\u524D\u503C\u3001\u7D22\u5F15\u3001\u5F53\u524D\u6570\u7EC4\u8FD4\u56DE\u53BB\u3002\u8C03\u7528\u7684\u65F6\u5019\u4F20\u5230\u51FD\u6570\u53C2\u6570\u4E2D [1,2,3,4].reduce((initVal,curr,index,arr))
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-isarray-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#array-isarray-\u5B9E\u73B0" aria-hidden="true">#</a> Array.isArray \u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.myIsArray = function(o) {
  return Object.prototype.toString.call(Object(o)) === &#39;[object Array]&#39;;
};

console.log(Array.myIsArray([])); // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-of-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#array-of-\u5B9E\u73B0" aria-hidden="true">#</a> Array.of \u5B9E\u73B0</h3><blockquote><p><code>Array.of()</code>\u65B9\u6CD5\u7528\u4E8E\u5C06\u4E00\u7EC4\u503C\uFF0C\u8F6C\u6362\u4E3A\u6570\u7EC4</p></blockquote><ul><li>\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4E3B\u8981\u76EE\u7684\uFF0C\u662F\u5F25\u8865\u6570\u7EC4\u6784\u9020\u51FD\u6570<code>Array()</code>\u7684\u4E0D\u8DB3\u3002\u56E0\u4E3A\u53C2\u6570\u4E2A\u6570\u7684\u4E0D\u540C\uFF0C\u4F1A\u5BFC\u81F4<code>Array()</code>\u7684\u884C\u4E3A\u6709\u5DEE\u5F02\u3002</li><li><code>Array.of()</code>\u57FA\u672C\u4E0A\u53EF\u4EE5\u7528\u6765\u66FF\u4EE3<code>Array()</code>\u6216<code>new Array()</code>\uFF0C\u5E76\u4E14\u4E0D\u5B58\u5728\u7531\u4E8E\u53C2\u6570\u4E0D\u540C\u800C\u5BFC\u81F4\u7684\u91CD\u8F7D\u3002\u5B83\u7684\u884C\u4E3A\u975E\u5E38\u7EDF\u4E00</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function ArrayOf(){
  return [].slice.call(arguments);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#find\u5B9E\u73B0" aria-hidden="true">#</a> find\u5B9E\u73B0</h3><ul><li><code>find</code>\xA0\u63A5\u6536\u4E00\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u53C2\u6570\uFF0C\u65B9\u6CD5\u5185\u90E8\u8FD4\u56DE\u4E00\u4E2A\u6761\u4EF6</li><li><code>find</code>\xA0\u4F1A\u904D\u5386\u6240\u6709\u7684\u5143\u7D20\uFF0C\u6267\u884C\u4F60\u7ED9\u5B9A\u7684\u5E26\u6709\u6761\u4EF6\u8FD4\u56DE\u503C\u7684\u51FD\u6570</li><li>\u7B26\u5408\u8BE5\u6761\u4EF6\u7684\u5143\u7D20\u4F1A\u4F5C\u4E3A find \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</li><li>\u5982\u679C\u904D\u5386\u7ED3\u675F\u8FD8\u6CA1\u6709\u7B26\u5408\u8BE5\u6761\u4EF6\u7684\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE\xA0<code>undefined</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var users = [
  {id: 1, name: &#39;\u5F20\u4E09&#39;},
  {id: 2, name: &#39;\u5F20\u4E09&#39;},
  {id: 3, name: &#39;\u5F20\u4E09&#39;},
  {id: 4, name: &#39;\u5F20\u4E09&#39;}
]

Array.prototype.myFind = function (callback) {
  // var callback = function (item, index) { return item.id === 4 }
  for (var i = 0; i &lt; this.length; i++) {
    if (callback(this[i], i)) {
      return this[i]
    }
  }
}

var ret = users.myFind(function (item, index) {
  return item.id === 2
})

console.log(ret)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findindex\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#findindex\u5B9E\u73B0" aria-hidden="true">#</a> findIndex\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var users = [
  {id: 1, name: &#39;\u5F20\u4E09&#39;},
  {id: 2, name: &#39;\u5F20\u4E09&#39;},
  {id: 3, name: &#39;\u5F20\u4E09&#39;},
  {id: 4, name: &#39;\u5F20\u4E09&#39;}
]

Array.prototype.myFindIndex = function (callback) {
  // var callback = function (item, index) { return item.id === 4 }
  for (var i = 0; i &lt; this.length; i++) {
    if (callback(this[i], i)) {
      // \u8FD9\u91CC\u8FD4\u56DE
      return i
    }
  }
}

var ret = users.myFind(function (item, index) {
  return item.id === 2
})

console.log(ret)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0every\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0every\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u73B0every\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.myEvery=function(callback, context = window){
    var len=this.length,
        flag=true,
        i = 0;

    for(;i &lt; len; i++){
      if(!callback.apply(context,[this[i], i , this])){
        flag=false;
        break;
      }
    }
    return flag;
  }

  // var obj = {num: 1}
  // var aa=arr.myEvery(function(v,index,arr){
  // 	return v.num&gt;=12;
  // },obj)
  // console.log(aa)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0some\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0some\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u73B0some\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.mySome=function(callback, context = window){
 			var len = this.length,
 			    flag=false,
           i = 0;

 			for(;i &lt; len; i++){
				if(callback.apply(context, [this[i], i , this])){
					flag=true;
					break;
				}
 			}
 			return flag;
		}

		// var flag=arr.mySome((v,index,arr)=&gt;v.num&gt;=10,obj)
		// console.log(flag);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_69-\u4E8B\u4EF6\u603B\u7EBF-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_69-\u4E8B\u4EF6\u603B\u7EBF-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> 69 \u4E8B\u4EF6\u603B\u7EBF | \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class EventEmitter {
  constructor() {
    this.cache = {}
  }

  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name, fn) {
    const tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex((f) =&gt; f === fn || f.callback === fn)
      if (index &gt;= 0) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name) {
    if (this.cache[name]) {
      // \u521B\u5EFA\u526F\u672C\uFF0C\u5982\u679C\u56DE\u8C03\u51FD\u6570\u5185\u7EE7\u7EED\u6CE8\u518C\u76F8\u540C\u4E8B\u4EF6\uFF0C\u4F1A\u9020\u6210\u6B7B\u5FAA\u73AF
      const tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn();
      }
    }
  }

  emit(name, once = false) {
    if (this.cache[name]) {
      // \u521B\u5EFA\u526F\u672C\uFF0C\u5982\u679C\u56DE\u8C03\u51FD\u6570\u5185\u7EE7\u7EED\u6CE8\u518C\u76F8\u540C\u4E8B\u4EF6\uFF0C\u4F1A\u9020\u6210\u6B7B\u5FAA\u73AF
      const tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn();
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

// \u6D4B\u8BD5
const eventBus = new EventEmitter()
const task1 = () =&gt; { console.log(&#39;task1&#39;); }
const task2 = () =&gt; { console.log(&#39;task2&#39;); }
eventBus.on(&#39;task&#39;, task1)
eventBus.on(&#39;task&#39;, task2)

setTimeout(() =&gt; {
  eventBus.emit(&#39;task&#39;)
}, 1000)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_70-es5-\u5B9E\u73B0\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_70-es5-\u5B9E\u73B0\u7EE7\u627F" aria-hidden="true">#</a> 70 es5 \u5B9E\u73B0\u7EE7\u627F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6A21\u62DFObject.create
function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

// Parent
function Parent(name) {
  this.name = name
}

Parent.prototype.sayName = function () {
  console.log(this.name)
};

// Child
function Child(age, name) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = create(Parent.prototype) // \u6216\u8005Object.create
Child.prototype.constructor = Child

Child.prototype.sayAge = function () {
  console.log(this.age)
}

// \u6D4B\u8BD5
const child = new Child(18, &#39;Jack&#39;)
child.sayName()
child.sayAge()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_71-\u5F02\u6B65\u5E76\u53D1\u6570\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_71-\u5F02\u6B65\u5E76\u53D1\u6570\u9650\u5236" aria-hidden="true">#</a> 71 \u5F02\u6B65\u5E76\u53D1\u6570\u9650\u5236</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u5173\u952E\u70B9
 * 1. new promise \u4E00\u7ECF\u521B\u5EFA\uFF0C\u7ACB\u5373\u6267\u884C
 * 2. \u4F7F\u7528 Promise.resolve().then \u53EF\u4EE5\u628A\u4EFB\u52A1\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u9632\u6B62\u7ACB\u5373\u6267\u884C\u8FED\u4EE3\u65B9\u6CD5
 * 3. \u5FAE\u4EFB\u52A1\u5904\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u4EA7\u751F\u7684\u65B0\u7684\u5FAE\u4EFB\u52A1\uFF0C\u4F1A\u5728\u540C\u4E00\u4E8B\u4EF6\u5FAA\u73AF\u5185\uFF0C\u8FFD\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u91CC
 * 4. \u4F7F\u7528 race \u5728\u67D0\u4E2A\u4EFB\u52A1\u5B8C\u6210\u65F6\uFF0C\u7EE7\u7EED\u6DFB\u52A0\u4EFB\u52A1\uFF0C\u4FDD\u6301\u4EFB\u52A1\u6309\u7167\u6700\u5927\u5E76\u53D1\u6570\u8FDB\u884C\u6267\u884C
 * 5. \u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u9700\u8981\u4ECE doingTasks \u4E2D\u79FB\u51FA
 */
function limit(count, array, iterateFunc) {
  const tasks = []
  const doingTasks = []
  let i = 0
  const enqueue = () =&gt; {
    if (i === array.length) {
      return Promise.resolve()
    }
    const task = Promise.resolve().then(() =&gt; iterateFunc(array[i++]))
    tasks.push(task)
    const doing = task.then(() =&gt; doingTasks.splice(doingTasks.indexOf(doing), 1))
    doingTasks.push(doing)
    const res = doingTasks.length &gt;= count ? Promise.race(doingTasks) : Promise.resolve()
    return res.then(enqueue)
  };
  return enqueue().then(() =&gt; Promise.all(tasks))
}

// test
const timeout = i =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(i), i))
limit(2, [1000, 1000, 1000, 1000], timeout).then((res) =&gt; {
  console.log(res)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_72-\u5BF9\u8C61\u6241\u5E73\u5316" tabindex="-1"><a class="header-anchor" href="#_72-\u5BF9\u8C61\u6241\u5E73\u5316" aria-hidden="true">#</a> 72 \u5BF9\u8C61\u6241\u5E73\u5316</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function objectFlat(obj = {}) {
  const res = {}
  function flat(item, preKey = &#39;&#39;) {
    Object.entries(item).forEach(([key, val]) =&gt; {
      const newKey = preKey ? \`\${preKey}.\${key}\` : key
      if (val &amp;&amp; typeof val === &#39;object&#39;) {
        flat(val, newKey)
      } else {
        res[newKey] = val
      }
    })
  }
  flat(obj)
  return res
}

// \u6D4B\u8BD5
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_73-\u5B9E\u73B0\u4E00\u4E2Aevent-bus-event-emitter" tabindex="-1"><a class="header-anchor" href="#_73-\u5B9E\u73B0\u4E00\u4E2Aevent-bus-event-emitter" aria-hidden="true">#</a> 73 \u5B9E\u73B0\u4E00\u4E2AEvent Bus / Event Emitter</h2><blockquote><p><code>Event Bus</code>\uFF08Vue\u3001Flutter \u7B49\u524D\u7AEF\u6846\u67B6\u4E2D\u6709\u51FA\u955C\uFF09\u548C\xA0<code>Event Emitter</code>\uFF08Node\u4E2D\u6709\u51FA\u955C\uFF09\u51FA\u573A\u7684&quot;\u5267\u7EC4&quot;\u4E0D\u540C\uFF0C\u4F46\u662F\u5B83\u4EEC\u90FD\u5BF9\u5E94\u4E00\u4E2A\u5171\u540C\u7684\u89D2\u8272------\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\u3002</p></blockquote><p>\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u4E25\u683C\u6765\u8BF4\u4E0D\u80FD\u8BF4\u662F\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF0C\u800C\u662F\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u3002\u5B83\u5728\u6211\u4EEC\u65E5\u5E38\u7684\u4E1A\u52A1\u5F00\u53D1\u4E2D\u5E94\u7528\u975E\u5E38\u5E7F\u3002</p><blockquote><p>\u5982\u679C\u53EA\u80FD\u9009\u4E00\u9053\u9898\uFF0C\u90A3\u8FD9\u9053\u9898\u4E00\u5B9A\u662F\xA0<code>Event Bus/Event Emitter</code>\xA0\u7684\u4EE3\u7801\u5B9E\u73B0------\u6211\u90FD\u8BF4\u8FD9\u4E48\u6E05\u695A\u4E86\uFF0C\u8FD9\u4E2A\u77E5\u8BC6\u70B9\u5230\u5E95\u8981\u4E0D\u8981\u638C\u63E1\u3001\u9700\u8981\u638C\u63E1\u5230\u4EC0\u4E48\u7A0B\u5EA6\uFF0C\u5C31\u770B\u5404\u4F4D\u81EA\u5DF1\u7684\u4E86\u3002</p></blockquote><p>\u5728Vue\u4E2D\u4F7F\u7528Event Bus\u6765\u5B9E\u73B0\u7EC4\u4EF6\u95F4\u7684\u901A\u8BAF</p><blockquote><p><code>Event Bus/Event Emitter</code>\xA0\u4F5C\u4E3A\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u5B83\u8D77\u5230\u7684\u662F\u4E00\u4E2A\u6C9F\u901A\u6865\u6881\u7684\u4F5C\u7528\u3002\u6211\u4EEC\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u4E3A\u4E00\u4E2A\u4E8B\u4EF6\u4E2D\u5FC3\uFF0C\u6211\u4EEC\u6240\u6709\u4E8B\u4EF6\u7684\u8BA2\u9605/\u53D1\u5E03\u90FD\u4E0D\u80FD\u7531\u8BA2\u9605\u65B9\u548C\u53D1\u5E03\u65B9&quot;\u79C1\u4E0B\u6C9F\u901A&quot;\uFF0C\u5FC5\u987B\u8981\u59D4\u6258\u8FD9\u4E2A\u4E8B\u4EF6\u4E2D\u5FC3\u5E2E\u6211\u4EEC\u5B9E\u73B0\u3002</p></blockquote><p>\u5728Vue\u4E2D\uFF0C\u6709\u65F6\u5019 A \u7EC4\u4EF6\u548C B \u7EC4\u4EF6\u4E2D\u95F4\u9694\u4E86\u5F88\u8FDC\uFF0C\u770B\u4F3C\u6CA1\u4EC0\u4E48\u5173\u7CFB\uFF0C\u4F46\u6211\u4EEC\u5E0C\u671B\u5B83\u4EEC\u4E4B\u95F4\u80FD\u591F\u901A\u4FE1\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9664\u4E86\u6C42\u52A9\u4E8E\xA0<code>Vuex</code>\xA0\u4E4B\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\xA0<code>Event Bus</code>\xA0\u6765\u5B9E\u73B0\u6211\u4EEC\u7684\u9700\u6C42\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\xA0<code>Event Bus</code>\uFF08\u672C\u8D28\u4E0A\u4E5F\u662F Vue \u5B9E\u4F8B\uFF09\u5E76\u5BFC\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const EventBus = new Vue()
export default EventBus

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E3B\u6587\u4EF6\u91CC\u5F15\u5165<code>EventBus</code>\uFF0C\u5E76\u6302\u8F7D\u5230\u5168\u5C40\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import bus from &#39;EventBus\u7684\u6587\u4EF6\u8DEF\u5F84&#39;
Vue.prototype.bus = bus

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA2\u9605\u4E8B\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u91CCfunc\u6307someEvent\u8FD9\u4E2A\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570
this.bus.$on(&#39;someEvent&#39;, func)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D1\u5E03\uFF08\u89E6\u53D1\uFF09\u4E8B\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u91CCparams\u6307someEvent\u8FD9\u4E2A\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u7684\u5165\u53C2
this.bus.$emit(&#39;someEvent&#39;, params)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5927\u5BB6\u4F1A\u53D1\u73B0\uFF0C\u6574\u4E2A\u8C03\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u6CA1\u6709\u51FA\u73B0\u5177\u4F53\u7684\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\uFF08\u6BD4\u5982\u4E0A\u9762\u7684<code>PrdPublisher</code>\u548C<code>DeveloperObserver</code>\uFF09\uFF0C\u5168\u7A0B\u53EA\u6709<code>bus</code>\u8FD9\u4E2A\u4E1C\u897F\u4E00\u4E2A\u4EBA\u5728\u75AF\u72C2\u5237\u5B58\u5728\u611F\u3002\u8FD9\u5C31\u662F\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\u7684\u7279\u70B9------\u6240\u6709\u4E8B\u4EF6\u7684\u53D1\u5E03/\u8BA2\u9605\u64CD\u4F5C\uFF0C\u5FC5\u987B\u7ECF\u7531\u4E8B\u4EF6\u4E2D\u5FC3\uFF0C\u7981\u6B62\u4E00\u5207&quot;\u79C1\u4E0B\u4EA4\u6613&quot;\uFF01</p></blockquote><p>\u4E0B\u9762\uFF0C\u6211\u4EEC\u5C31\u4E00\u8D77\u6765\u5B9E\u73B0\u4E00\u4E2A<code>Event Bus</code>\uFF08\u6CE8\u610F\u770B\u6CE8\u91CA\u91CC\u7684\u89E3\u6790\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class EventEmitter {
  constructor() {
    // handlers\u662F\u4E00\u4E2Amap\uFF0C\u7528\u4E8E\u5B58\u50A8\u4E8B\u4EF6\u4E0E\u56DE\u8C03\u4E4B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB
    this.handlers = {}
  }

  // on\u65B9\u6CD5\u7528\u4E8E\u5B89\u88C5\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5B83\u63A5\u53D7\u76EE\u6807\u4E8B\u4EF6\u540D\u548C\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570
  on(eventName, cb) {
    // \u5148\u68C0\u67E5\u4E00\u4E0B\u76EE\u6807\u4E8B\u4EF6\u540D\u6709\u6CA1\u6709\u5BF9\u5E94\u7684\u76D1\u542C\u51FD\u6570\u961F\u5217
    if (!this.handlers[eventName]) {
      // \u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48\u9996\u5148\u521D\u59CB\u5316\u4E00\u4E2A\u76D1\u542C\u51FD\u6570\u961F\u5217
      this.handlers[eventName] = []
    }

    // \u628A\u56DE\u8C03\u51FD\u6570\u63A8\u5165\u76EE\u6807\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\u961F\u5217\u91CC\u53BB
    this.handlers[eventName].push(cb)
  }

  // emit\u65B9\u6CD5\u7528\u4E8E\u89E6\u53D1\u76EE\u6807\u4E8B\u4EF6\uFF0C\u5B83\u63A5\u53D7\u4E8B\u4EF6\u540D\u548C\u76D1\u542C\u51FD\u6570\u5165\u53C2\u4F5C\u4E3A\u53C2\u6570
  emit(eventName, ...args) {
    // \u68C0\u67E5\u76EE\u6807\u4E8B\u4EF6\u662F\u5426\u6709\u76D1\u542C\u51FD\u6570\u961F\u5217
    if (this.handlers[eventName]) {
      // \u5982\u679C\u6709\uFF0C\u5219\u9010\u4E2A\u8C03\u7528\u961F\u5217\u91CC\u7684\u56DE\u8C03\u51FD\u6570
      this.handlers[eventName].forEach((callback) =&gt; {
        callback(...args)
      })
    }
  }

  // \u79FB\u9664\u67D0\u4E2A\u4E8B\u4EF6\u56DE\u8C03\u961F\u5217\u91CC\u7684\u6307\u5B9A\u56DE\u8C03\u51FD\u6570
  off(eventName, cb) {
    const callbacks = this.handlers[eventName]
    const index = callbacks.indexOf(cb)
    if (index !== -1) {
      callbacks.splice(index, 1)
    }
  }

  // \u4E3A\u4E8B\u4EF6\u6CE8\u518C\u5355\u6B21\u76D1\u542C\u5668
  once(eventName, cb) {
    // \u5BF9\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u5305\u88C5\uFF0C\u4F7F\u5176\u6267\u884C\u5B8C\u6BD5\u81EA\u52A8\u88AB\u79FB\u9664
    const wrapper = (...args) =&gt; {
      cb.apply(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,506),j=e("\u5728\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D\uFF0C\u5927\u5BB6\u7528\u5230"),k=n("code",null,"EventBus/EventEmitter",-1),q=e("\u5F80\u5F80\u63D0\u4F9B\u6BD4\u8FD9\u4E94\u4E2A\u65B9\u6CD5\u591A\u7684\u591A\u7684\u591A\u7684\u65B9\u6CD5\u3002\u4F46\u5728\u9762\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u5927\u5BB6\u80FD\u591F\u5B8C\u6574\u5730\u5B9E\u73B0\u51FA\u8FD9\u4E94\u4E2A\u65B9\u6CD5\uFF0C\u5DF2\u7ECF\u975E\u5E38\u53EF\u4EE5\u8BF4\u660E\u95EE\u9898\u4E86\uFF0C\u56E0\u6B64\u697C\u4E0A\u8FD9\u4E2A"),w=n("code",null,"EventBus",-1),_=e("\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u719F\u7EC3\u638C\u63E1\u3002\u5B66\u6709\u4F59\u529B\u7684\u540C\u5B66\uFF0C\u63A8\u8350\u9605\u8BFB"),P={href:"https://github.com/facebook/emitter",target:"_blank",rel:"noopener noreferrer"},E=e("FaceBook\u63A8\u51FA\u7684\u901A\u7528EventEmiiter\u5E93\u7684\u6E90\u7801\xA0(opens new window)"),S=e("\uFF0C\u76F8\u4FE1\u4F60\u4F1A\u6709\u66F4\u591A\u6536\u83B7\u3002"),N=i(`<h2 id="_74-\u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_74-\u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570" aria-hidden="true">#</a> 74 \u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570</h2><h3 id="es6\u5BF9\u8FED\u4EE3\u5668\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#es6\u5BF9\u8FED\u4EE3\u5668\u7684\u5B9E\u73B0" aria-hidden="true">#</a> ES6\u5BF9\u8FED\u4EE3\u5668\u7684\u5B9E\u73B0</h3><p>JS\u539F\u751F\u7684\u96C6\u5408\u7C7B\u578B\u6570\u636E\u7ED3\u6784\uFF0C\u53EA\u6709<code>Array</code>\uFF08\u6570\u7EC4\uFF09\u548C<code>Object</code>\uFF08\u5BF9\u8C61\uFF09\uFF1B\u800C<code>ES6</code>\u4E2D\uFF0C\u53C8\u65B0\u589E\u4E86<code>Map</code>\u548C<code>Set</code>\u3002\u56DB\u79CD\u6570\u636E\u7ED3\u6784\u5404\u81EA\u6709\u7740\u81EA\u5DF1\u7279\u522B\u7684\u5185\u90E8\u5B9E\u73B0\uFF0C\u4F46\u6211\u4EEC\u4ECD\u671F\u5F85\u4EE5\u540C\u6837\u7684\u4E00\u5957\u89C4\u5219\u53BB\u904D\u5386\u5B83\u4EEC\uFF0C\u6240\u4EE5<code>ES6</code>\u5728\u63A8\u51FA\u65B0\u6570\u636E\u7ED3\u6784\u7684\u540C\u65F6\u4E5F\u63A8\u51FA\u4E86\u4E00\u5957\u7EDF\u4E00\u7684\u63A5\u53E3\u673A\u5236------\u8FED\u4EE3\u5668\uFF08<code>Iterator</code>\uFF09\u3002</p><blockquote><p><code>ES6</code>\u7EA6\u5B9A\uFF0C\u4EFB\u4F55\u6570\u636E\u7ED3\u6784\u53EA\u8981\u5177\u5907<code>Symbol.iterator</code>\u5C5E\u6027\uFF08\u8FD9\u4E2A\u5C5E\u6027\u5C31\u662F<code>Iterator</code>\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u5B83\u672C\u8D28\u4E0A\u662F\u5F53\u524D\u6570\u636E\u7ED3\u6784\u9ED8\u8BA4\u7684\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570\uFF09\uFF0C\u5C31\u53EF\u4EE5\u88AB\u904D\u5386------\u51C6\u786E\u5730\u8BF4\uFF0C\u662F\u88AB<code>for...of...</code>\u5FAA\u73AF\u548C\u8FED\u4EE3\u5668\u7684next\u65B9\u6CD5\u904D\u5386\u3002 \u4E8B\u5B9E\u4E0A\uFF0C<code>for...of...</code>\u7684\u80CC\u540E\u6B63\u662F\u5BF9<code>next</code>\u65B9\u6CD5\u7684\u53CD\u590D\u8C03\u7528\u3002</p></blockquote><p>\u5728ES6\u4E2D\uFF0C\u9488\u5BF9<code>Array</code>\u3001<code>Map</code>\u3001<code>Set</code>\u3001<code>String</code>\u3001<code>TypedArray</code>\u3001\u51FD\u6570\u7684\xA0<code>arguments</code>\xA0\u5BF9\u8C61\u3001<code>NodeList</code>\xA0\u5BF9\u8C61\u8FD9\u4E9B\u539F\u751F\u7684\u6570\u636E\u7ED3\u6784\u90FD\u53EF\u4EE5\u901A\u8FC7<code>for...of...</code>\u8FDB\u884C\u904D\u5386\u3002\u539F\u7406\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u6B64\u5904\u6211\u4EEC\u62FF\u6700\u7B80\u5355\u7684\u6570\u7EC4\u8FDB\u884C\u4E3E\u4F8B\uFF0C\u5F53\u6211\u4EEC\u7528<code>for...of...</code>\u904D\u5386\u6570\u7EC4\u65F6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [1, 2, 3]
const len = arr.length
for(item of arr) {
   console.log(\`\u5F53\u524D\u5143\u7D20\u662F\${item}\`)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E4B\u6240\u4EE5\u80FD\u591F\u6309\u987A\u5E8F\u4E00\u6B21\u4E00\u6B21\u5730\u62FF\u5230\u6570\u7EC4\u91CC\u7684\u6BCF\u4E00\u4E2A\u6210\u5458\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u501F\u52A9\u6570\u7EC4\u7684<code>Symbol.iterator</code>\u751F\u6210\u4E86\u5B83\u5BF9\u5E94\u7684\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C\u901A\u8FC7\u53CD\u590D\u8C03\u7528\u8FED\u4EE3\u5668\u5BF9\u8C61\u7684<code>next</code>\u65B9\u6CD5\u8BBF\u95EE\u4E86\u6570\u7EC4\u6210\u5458\uFF0C\u50CF\u8FD9\u6837\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [1, 2, 3]
// \u901A\u8FC7\u8C03\u7528iterator\uFF0C\u62FF\u5230\u8FED\u4EE3\u5668\u5BF9\u8C61
const iterator = arr[Symbol.iterator]()

// \u5BF9\u8FED\u4EE3\u5668\u5BF9\u8C61\u6267\u884Cnext\uFF0C\u5C31\u80FD\u9010\u4E2A\u8BBF\u95EE\u96C6\u5408\u7684\u6210\u5458
iterator.next()
iterator.next()
iterator.next()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E22\u8FDB\u63A7\u5236\u53F0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230<code>next</code>\u6BCF\u6B21\u4F1A\u6309\u987A\u5E8F\u5E2E\u6211\u4EEC\u8BBF\u95EE\u4E00\u4E2A\u96C6\u5408\u6210\u5458\uFF1A</p><p><img src="`+c+`" alt=""></p><blockquote><p>\u800C<code>for...of...</code>\u505A\u7684\u4E8B\u60C5\uFF0C\u57FA\u672C\u7B49\u4EF7\u4E8E\u4E0B\u9762\u8FD9\u901A\u64CD\u4F5C\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u901A\u8FC7\u8C03\u7528iterator\uFF0C\u62FF\u5230\u8FED\u4EE3\u5668\u5BF9\u8C61
const iterator = arr[Symbol.iterator]()

// \u521D\u59CB\u5316\u4E00\u4E2A\u8FED\u4EE3\u7ED3\u679C
let now = { done: false }

// \u5FAA\u73AF\u5F80\u5916\u8FED\u4EE3\u6210\u5458
while(!now.done) {
    now = iterator.next()
    if(!now.done) {
        console.log(\`\u73B0\u5728\u904D\u5386\u5230\u4E86\${now.value}\`)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53EF\u4EE5\u770B\u51FA\uFF0C<code>for...of...</code>\u5176\u5B9E\u5C31\u662F<code>iterator</code>\u5FAA\u73AF\u8C03\u7528\u6362\u4E86\u79CD\u5199\u6CD5\u3002\u5728ES6\u4E2D\u6211\u4EEC\u4E4B\u6240\u4EE5\u80FD\u591F\u5F00\u5FC3\u5730\u7528<code>for...of...</code>\u904D\u5386\u5404\u79CD\u5404\u79CD\u7684\u96C6\u5408\uFF0C\u5168\u9760\u8FED\u4EE3\u5668\u6A21\u5F0F\u5728\u80CC\u540E\u7ED9\u529B\u3002</p></blockquote>`,13),T=e("ps\uFF1A\u6B64\u5904\u63A8\u8350\u9605\u8BFB"),A={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",target:"_blank",rel:"noopener noreferrer"},O=e("\u8FED\u4EE3\u534F\u8BAE\xA0(opens new window)"),C=e("\uFF0C\u76F8\u4FE1\u5927\u5BB6\u8BFB\u8FC7\u540E\u4F1A\u5BF9\u8FED\u4EE3\u5668\u5728ES6\u4E2D\u7684\u5B9E\u73B0\u6709\u66F4\u6DF1\u7684\u7406\u89E3\u3002"),R=i(`<h3 id="\u5B9E\u73B0\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570" aria-hidden="true">#</a> \u5B9E\u73B0\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570</h3><p>\u6211\u4EEC\u8BF4\u8FED\u4EE3\u5668\u5BF9\u8C61\u5168\u51ED\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570\u5E2E\u6211\u4EEC\u751F\u6210\u3002\u5728<code>ES6</code>\u4E2D\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570\u5E76\u4E0D\u662F\u4EC0\u4E48\u96BE\u4E8B\u513F\uFF0C\u56E0\u4E3AES6\u65E9\u5E2E\u6211\u4EEC\u8003\u8651\u597D\u4E86\u5168\u5957\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5185\u7F6E\u4E86\u8D34\u5FC3\u7684\u751F\u6210\u5668\uFF08<code>Generator</code>\uFF09\u4F9B\u6211\u4EEC\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7F16\u5199\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570
function *iteratorGenerator() {
    yield &#39;1\u53F7\u9009\u624B&#39;
    yield &#39;2\u53F7\u9009\u624B&#39;
    yield &#39;3\u53F7\u9009\u624B&#39;
}

const iterator = iteratorGenerator()

iterator.next()
iterator.next()
iterator.next()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E22\u8FDB\u63A7\u5236\u53F0\uFF0C\u4E0D\u8D1F\u4F17\u671B\uFF1A</p><p><img src="`+t+`" alt=""></p><p>\u5199\u4E00\u4E2A\u751F\u6210\u5668\u51FD\u6570\u5E76\u6CA1\u6709\u4EC0\u4E48\u96BE\u5EA6\uFF0C\u4F46\u5728\u9762\u8BD5\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u9762\u8BD5\u5B98\u5F80\u5F80\u5BF9\u751F\u6210\u5668\u8FD9\u79CD\u8BED\u6CD5\u7CD6\u80CC\u540E\u7684\u5B9E\u73B0\u903B\u8F91\u66F4\u611F\u5174\u8DA3\u3002\u4E0B\u9762\u6211\u4EEC\u8981\u505A\u7684\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u5199\u4E00\u4E2A\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C\u800C\u662F\u7528<code>ES5</code>\u53BB\u5199\u4E00\u4E2A\u80FD\u591F\u751F\u6210\u8FED\u4EE3\u5668\u5BF9\u8C61\u7684\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570\uFF08\u89E3\u6790\u5728\u6CE8\u91CA\u91CC\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u751F\u6210\u5668\u51FD\u6570\uFF0C\u5165\u53C2\u662F\u4EFB\u610F\u96C6\u5408
function iteratorGenerator(list) {
    // idx\u8BB0\u5F55\u5F53\u524D\u8BBF\u95EE\u7684\u7D22\u5F15
    var idx = 0
    // len\u8BB0\u5F55\u4F20\u5165\u96C6\u5408\u7684\u957F\u5EA6
    var len = list.length
    return {
        // \u81EA\u5B9A\u4E49next\u65B9\u6CD5
        next: function() {
            // \u5982\u679C\u7D22\u5F15\u8FD8\u6CA1\u6709\u8D85\u51FA\u96C6\u5408\u957F\u5EA6\uFF0Cdone\u4E3Afalse
            var done = idx &gt;= len
            // \u5982\u679Cdone\u4E3Afalse\uFF0C\u5219\u53EF\u4EE5\u7EE7\u7EED\u53D6\u503C
            var value = !done ? list[idx++] : undefined

            // \u5C06\u5F53\u524D\u503C\u4E0E\u904D\u5386\u662F\u5426\u5B8C\u6BD5\uFF08done\uFF09\u8FD4\u56DE
            return {
                done: done,
                value: value
            }
        }
    }
}

var iterator = iteratorGenerator([&#39;1\u53F7\u9009\u624B&#39;, &#39;2\u53F7\u9009\u624B&#39;, &#39;3\u53F7\u9009\u624B&#39;])
iterator.next()
iterator.next()
iterator.next()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5904\u4E3A\u4E86\u8BB0\u5F55\u6BCF\u6B21\u904D\u5386\u7684\u4F4D\u7F6E\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u4E2A\u95ED\u5305\uFF0C\u501F\u52A9\u81EA\u7531\u53D8\u91CF\u6765\u505A\u6211\u4EEC\u7684\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u7684&quot;\u6E38\u6807&quot;\u3002</p><p>\u8FD0\u884C\u4E00\u4E0B\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u8FED\u4EE3\u5668\uFF0C\u7ED3\u679C\u7B26\u5408\u9884\u671F\uFF1A</p><p><img src="`+u+`" alt=""></p><h2 id="_75-\u5B9E\u73B0es6\u7684extends" tabindex="-1"><a class="header-anchor" href="#_75-\u5B9E\u73B0es6\u7684extends" aria-hidden="true">#</a> 75 \u5B9E\u73B0ES6\u7684extends</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function B(name){
  this.name = name;
};
function A(name,age){
  //1.\u5C06A\u7684\u539F\u578B\u6307\u5411B
  Object.setPrototypeOf(A,B);
  //2.\u7528A\u7684\u5B9E\u4F8B\u4F5C\u4E3Athis\u8C03\u7528B,\u5F97\u5230\u7EE7\u627FB\u4E4B\u540E\u7684\u5B9E\u4F8B\uFF0C\u8FD9\u4E00\u6B65\u76F8\u5F53\u4E8E\u8C03\u7528super
  Object.getPrototypeOf(A).call(this, name)
  //3.\u5C06A\u539F\u6709\u7684\u5C5E\u6027\u6DFB\u52A0\u5230\u65B0\u5B9E\u4F8B\u4E0A
  this.age = age;
  //4.\u8FD4\u56DE\u65B0\u5B9E\u4F8B\u5BF9\u8C61
  return this;
};
var a = new A(&#39;poetry&#39;,22);
console.log(a);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_76-\u624B\u5199\u5E38\u89C1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_76-\u624B\u5199\u5E38\u89C1\u6392\u5E8F" aria-hidden="true">#</a> 76 \u624B\u5199\u5E38\u89C1\u6392\u5E8F</h2><p><img src="`+m+`" alt=""></p><h3 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> \u5192\u6CE1\u6392\u5E8F</h3><blockquote><p>\u5192\u6CE1\u6392\u5E8F\u7684\u539F\u7406\u5982\u4E0B\uFF0C\u4ECE\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\uFF0C\u628A\u5F53\u524D\u5143\u7D20\u548C\u4E0B\u4E00\u4E2A\u7D22\u5F15\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\u3002\u5982\u679C\u5F53\u524D\u5143\u7D20\u5927\uFF0C\u90A3\u4E48\u5C31\u4EA4\u6362\u4F4D\u7F6E\uFF0C\u91CD\u590D\u64CD\u4F5C\u76F4\u5230\u6BD4\u8F83\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u6B64\u65F6\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5C31\u662F\u8BE5\u6570\u7EC4\u4E2D\u6700\u5927\u7684\u6570\u3002\u4E0B\u4E00\u8F6E\u91CD\u590D\u4EE5\u4E0A\u64CD\u4F5C\uFF0C\u4F46\u662F\u6B64\u65F6\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5DF2\u7ECF\u662F\u6700\u5927\u6570\u4E86\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u518D\u6BD4\u8F83\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u53EA\u9700\u8981\u6BD4\u8F83\u5230\xA0<code>length - 1</code>\xA0\u7684\u4F4D\u7F6E\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function bubbleSort(list) {
  var n = list.length;
  if (!n) return [];

  for (var i = 0; i &lt; n; i++) {
    // \u6CE8\u610F\u8FD9\u91CC\u9700\u8981 n - i - 1
    for (var j = 0; j &lt; n - i - 1; j++) {
      if (list[j] &gt; list[j + 1]) {
        var temp = list[j + 1];
        list[j + 1] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h3><blockquote><p>\u5FEB\u6392\u7684\u539F\u7406\u5982\u4E0B\u3002\u968F\u673A\u9009\u53D6\u4E00\u4E2A\u6570\u7EC4\u4E2D\u7684\u503C\u4F5C\u4E3A\u57FA\u51C6\u503C\uFF0C\u4ECE\u5DE6\u81F3\u53F3\u53D6\u503C\u4E0E\u57FA\u51C6\u503C\u5BF9\u6BD4\u5927\u5C0F\u3002\u6BD4\u57FA\u51C6\u503C\u5C0F\u7684\u653E\u6570\u7EC4\u5DE6\u8FB9\uFF0C\u5927\u7684\u653E\u53F3\u8FB9\uFF0C\u5BF9\u6BD4\u5B8C\u6210\u540E\u5C06\u57FA\u51C6\u503C\u548C\u7B2C\u4E00\u4E2A\u6BD4\u57FA\u51C6\u503C\u5927\u7684\u503C\u4EA4\u6362\u4F4D\u7F6E\u3002\u7136\u540E\u5C06\u6570\u7EC4\u4EE5\u57FA\u51C6\u503C\u7684\u4F4D\u7F6E\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u7EE7\u7EED\u9012\u5F52\u4EE5\u4E0A\u64CD\u4F5C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ffunction quickSort(arr) {
  if (arr.length&lt;=1){
    return arr;
  }
  var baseIndex = Math.floor(arr.length/2);//\u5411\u4E0B\u53D6\u6574\uFF0C\u9009\u53D6\u57FA\u51C6\u70B9
  var base = arr.splice(baseIndex,1)[0];//\u53D6\u51FA\u57FA\u51C6\u70B9\u7684\u503C\uFF0C
  // splice \u901A\u8FC7\u5220\u9664\u6216\u66FF\u6362\u73B0\u6709\u5143\u7D20\u6216\u8005\u539F\u5730\u6DFB\u52A0\u65B0\u7684\u5143\u7D20\u6765\u4FEE\u6539\u6570\u7EC4,\u5E76\u4EE5\u6570\u7EC4\u5F62\u5F0F\u8FD4\u56DE\u88AB\u4FEE\u6539\u7684\u5185\u5BB9\u3002\u6B64\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002
  // slice\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u5BF9\u8C61,\u4E0D\u4F1A\u66F4\u6539\u539F\u6570\u7EC4
  //\u8FD9\u91CC\u4E0D\u80FD\u76F4\u63A5base=arr[baseIndex],\u56E0\u4E3Abase\u4EE3\u8868\u7684\u6BCF\u6B21\u90FD\u5220\u9664\u7684\u90A3\u4E2A\u6570
  var left=[];
  var right=[];
  for (var i = 0; i&lt;arr.length; i++){
    // \u8FD9\u91CC\u7684length\u662F\u53D8\u5316\u7684\uFF0C\u56E0\u4E3Asplice\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002
    if (arr[i] &lt; base){
      left.push(arr[i]);//\u6BD4\u57FA\u51C6\u70B9\u5C0F\u7684\u653E\u5728\u5DE6\u8FB9\u6570\u7EC4\uFF0C
    }
  }else{
    right.push(arr[i]);//\u6BD4\u57FA\u51C6\u70B9\u5927\u7684\u653E\u5728\u53F3\u8FB9\u6570\u7EC4\uFF0C
  }
  return quickSort(left).concat([base],quickSort(right));
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_77-\u624B\u5199require\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_77-\u624B\u5199require\u539F\u7406" aria-hidden="true">#</a> 77 \u624B\u5199require\u539F\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9760\u540C\u6B65\u7684\u65B9\u5F0F
let fs = require(&#39;fs&#39;);
let path = require(&#39;path&#39;);
let vm = require(&#39;vm&#39;);
function Module(id){
  this.id = id;
  this.exports = {}
}
Module._cache = {};
Module._extensions = {
  &#39;.js&#39;(){},
  &#39;.json&#39;(module){
      let content = fs.readFileSync(module.id,&#39;utf8&#39;);
      content = JSON.parse(content);
      module.exports = content;
  }
}
Module.prototype.load  = function(){
  let ext = path.extname(this.id); // \u8981\u52A0\u8F7D\u7684\u6587\u4EF6
  Module._extensions[ext](this);
}

// .js .json\u6587\u4EF6
function myrequire(filePath){
  let absPath = path.resolve(__dirname,filePath);
  let p = &#39;&#39;;
  try{
    // \u5224\u65AD\u5F53\u524D\u8DEF\u5F84\u662F\u5426\u5B58\u5728
    fs.accessSync(absPath)
    p = absPath;
  }catch(e){
    // \u589E\u52A0\u903B\u8F91 \u770B\u662F\u5426\u5B58\u5728
    let extensions = Object.keys(Module._extensions);
    extensions.some(ext=&gt;{
      let url = absPath + ext;
      try{
        fs.accessSync(url);p = url;
        return true;
      }catch(e){
        return false;
      }
    });
  }
  if(p){
    // \u5355\u4F8B\u6A21\u5F0F
    if( Module._cache[p]){ // \u5982\u679C\u7F13\u5B58\u4E2D\u6709\u76F4\u63A5\u5C06\u7F13\u5B58\u4E2D\u7684exports\u5C5E\u6027\u8FD4\u56DE\u56DE\u53BB\u5373\u53EF
        return  Module._cache[p].exports;
    }
    let module = new Module(p); // \u521B\u5EFA\u4E00\u4E2A\u6A21\u5757\u5BF9\u8C61
    Module._cache[p] = module
    // \u52A0\u8F7D\u6A21\u5757
    module.load(); // \u52A0\u8F7D\u8FD9\u4E2A\u6A21\u5757
    return module.exports; // \u53EA\u9700\u8981\u8FD4\u56DEmodule.exports \u5C5E\u6027
  }else{
    throw new Error(&#39;file not access&#39;)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D4B\u8BD5
let json = myrequire(&#39;./1.json&#39;);
json = myrequire(&#39;./1.json&#39;);
console.log(json);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_78-\u5B9E\u73B0mvvm\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_78-\u5B9E\u73B0mvvm\u539F\u7406" aria-hidden="true">#</a> 78 \u5B9E\u73B0MVVM\u539F\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function update(){
  console.log(&#39;\u6570\u636E\u53D8\u5316~~~ mock update view&#39;)
}
let obj = [1,2,3]
// \u53D8\u5F02\u65B9\u6CD5 push shift unshfit reverse sort splice pop
// Object.defineProperty
let oldProto = Array.prototype;
let proto = Object.create(oldProto); // \u514B\u9686\u4E86\u4E00\u5206
[&#39;push&#39;,&#39;shift&#39;].forEach(item=&gt;{
  proto[item] = function(){
    update();
    oldProto[item].apply(this,arguments);
  }
})
function observer(value){ // proxy reflect
  if(Array.isArray(value)){
    // AOP
    return value.__proto__ = proto;
    // \u91CD\u5199 \u8FD9\u4E2A\u6570\u7EC4\u91CC\u7684push shift unshfit reverse sort splice pop
  }
  if(typeof value !== &#39;object&#39;){
    return value;
  }
  for(let key in value){
    defineReactive(value,key,value[key]);
  }
}
function defineReactive(obj,key,value){
  observer(value); // \u5982\u679C\u662F\u5BF9\u8C61 \u7EE7\u7EED\u589E\u52A0getter\u548Csetter
  Object.defineProperty(obj,key,{
    get(){
        return value;
    },
    set(newValue){
        if(newValue !== value){
            observer(newValue);
            value = newValue;
            update();
        }
    }
  })
}
observer(obj);
// AOP
// obj.name = {n:200}; // \u6570\u636E\u53D8\u4E86 \u9700\u8981\u66F4\u65B0\u89C6\u56FE \u6DF1\u5EA6\u76D1\u63A7
// obj.name.n = 100;
obj.push(123);
obj.push(456);
console.log(obj);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_79-\u7B97\u6CD5\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_79-\u7B97\u6CD5\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 79 \u7B97\u6CD5\u6570\u636E\u7ED3\u6784</h2><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u94FE\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u94FE\u8868\u7ED3\u6784" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u94FE\u8868\u7ED3\u6784</h3><p>\u94FE\u8868\u7ED3\u6784</p><p><img src="`+b+'" alt=""></p><p>\u770B\u56FE\u7406\u89E3next\u5C42\u7EA7</p><p><img src="'+o+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u94FE\u8868 \u4ECE\u5934\u5C3E\u5220\u9664\u3001\u589E\u52A0 \u6027\u80FD\u6BD4\u8F83\u597D
// \u5206\u4E3A\u5F88\u591A\u7C7B \u5E38\u7528\u5355\u5411\u94FE\u8868\u3001\u53CC\u5411\u94FE\u8868

// js\u6A21\u62DF\u94FE\u8868\u7ED3\u6784\uFF1A\u589E\u5220\u6539\u67E5

// node\u8282\u70B9
class Node {
  constructor(element,next) {
    this.element = element
    this.next = next
  }
}

class LinkedList {
 constructor() {
   this.head = null // \u9ED8\u8BA4\u5E94\u8BE5\u6307\u5411\u7B2C\u4E00\u4E2A\u8282\u70B9
   this.size = 0 // \u901A\u8FC7\u8FD9\u4E2A\u957F\u5EA6\u53EF\u4EE5\u904D\u5386\u8FD9\u4E2A\u94FE\u8868
 }
 // \u589E\u52A0O(n)
 add(index,element) {
   if(arguments.length === 1) {
     // \u5411\u672B\u5C3E\u6DFB\u52A0
     element = index // \u5F53\u524D\u5143\u7D20\u7B49\u4E8E\u4F20\u9012\u7684\u7B2C\u4E00\u9879
     index = this.size // \u7D22\u5F15\u6307\u5411\u6700\u540E\u4E00\u4E2A\u5143\u7D20
   }
  if(index &lt; 0 || index &gt; this.size) {
    throw new Error(&#39;\u6DFB\u52A0\u7684\u7D22\u5F15\u4E0D\u6B63\u5E38&#39;)
  }
  if(index === 0) {
    // \u76F4\u63A5\u627E\u5230\u5934\u90E8 \u628A\u5934\u90E8\u6539\u6389 \u6027\u80FD\u66F4\u597D
    let head = this.head
    this.head = new Node(element,head)
  } else {
    // \u83B7\u53D6\u5F53\u524D\u5934\u6307\u9488
    let current = this.head
    // \u4E0D\u505C\u904D\u5386 \u76F4\u5230\u627E\u5230\u6700\u540E\u4E00\u9879 \u6DFB\u52A0\u7684\u7D22\u5F15\u662F1\u5C31\u627E\u5230\u7B2C0\u4E2A\u7684next\u8D4B\u503C
    for (let i = 0; i &lt; index-1; i++) { // \u627E\u5230\u5B83\u7684\u524D\u4E00\u4E2A
      current = current.next
    }
    // \u8BA9\u521B\u5EFA\u7684\u5143\u7D20\u6307\u5411\u4E0A\u4E00\u4E2A\u5143\u7D20\u7684\u4E0B\u4E00\u4E2A
    // \u770B\u56FE\u7406\u89E3next\u5C42\u7EA7
    current.next = new Node(element,current.next) // \u8BA9\u5F53\u524D\u5143\u7D20\u6307\u5411\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684next
  }

  this.size++;
 }
 // \u5220\u9664O(n)
 remove(index) {
  if(index &lt; 0 || index &gt;= this.size) {
    throw new Error(&#39;\u5220\u9664\u7684\u7D22\u5F15\u4E0D\u6B63\u5E38&#39;)
  }
  this.size--
  if(index === 0) {
    let head = this.head
    this.head = this.head.next // \u79FB\u52A8\u6307\u9488\u4F4D\u7F6E

    return head // \u8FD4\u56DE\u5220\u9664\u7684\u5143\u7D20
  }else {
    let current = this.head
    for (let i = 0; i &lt; index-1; i++) { // index-1\u627E\u5230\u5B83\u7684\u524D\u4E00\u4E2A
      current = current.next
    }
    let returnVal = current.next // \u8FD4\u56DE\u5220\u9664\u7684\u5143\u7D20
    // \u627E\u5230\u5F85\u5220\u9664\u7684\u6307\u9488\u7684\u4E0A\u4E00\u4E2A current.next.next
    // \u5982\u5220\u9664200\uFF0C 100=&gt;200=&gt;300 \u627E\u5230200\u7684\u4E0A\u4E00\u4E2A100\u7684next\u7684next\u4E3A300\uFF0C\u628A300\u8D4B\u503C\u7ED9100\u7684next\u5373\u53EF
    current.next = current.next.next

    return returnVal
  }
 }
 // \u67E5\u627EO(n)
 get(index) {
  if(index &lt; 0 || index &gt;= this.size) {
    throw new Error(&#39;\u67E5\u627E\u7684\u7D22\u5F15\u4E0D\u6B63\u5E38&#39;)
  }
  let current = this.head
  for (let i = 0; i &lt; index; i++) {
    current = current.next
  }
  return current
 }
}

var ll = new LinkedList()

ll.add(0,100) // Node { ellement: 100, next: null }
ll.add(0,200) // Node { element: 200, next: Node { element: 100, next: null } }
ll.add(1,500) // Node {element: 200,next: Node { element: 100, next: Node { element: 500, next: null } } }
ll.add(300)
ll.remove(0)

console.log(ll.get(2),&#39;get&#39;)
console.log(ll.head)

module.exports = LinkedList

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u961F\u5217</h3><blockquote><p>\u57FA\u4E8E\u94FE\u8868\u7ED3\u6784\u5B9E\u73B0\u961F\u5217</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const LinkedList = require(&#39;./\u5B9E\u73B0\u4E00\u4E2A\u94FE\u8868\u7ED3\u6784&#39;)

// \u7528\u94FE\u8868\u9ED8\u8BA4\u4F7F\u7528\u6570\u7EC4\u6765\u6A21\u62DF\u961F\u5217\uFF0C\u6027\u80FD\u66F4\u4F73
class Queue {
  constructor() {
    this.ll = new LinkedList()
  }
  // \u5411\u961F\u5217\u4E2D\u6DFB\u52A0
  offer(elem) {
    this.ll.add(elem)
  }
  // \u67E5\u770B\u7B2C\u4E00\u4E2A
  peek() {
    return this.ll.get(0)
  }
  // \u961F\u5217\u53EA\u80FD\u4ECE\u5934\u90E8\u5220\u9664
  remove() {
    return this.ll.remove(0)
  }
}

var queue = new Queue()

queue.offer(1)
queue.offer(2)
queue.offer(3)
var removeVal = queue.remove(3)

console.log(queue.ll,&#39;queue.ll&#39;)
console.log(removeVal,&#39;queue.remove&#39;)
console.log(queue.peek(),&#39;queue.peek&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u5F52\u53CD\u8F6C\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u53CD\u8F6C\u94FE\u8868" aria-hidden="true">#</a> \u9012\u5F52\u53CD\u8F6C\u94FE\u8868</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// node\u8282\u70B9
class Node {
  constructor(element,next) {
    this.element = element
    this.next = next
  }
}

class LinkedList {
 constructor() {
   this.head = null // \u9ED8\u8BA4\u5E94\u8BE5\u6307\u5411\u7B2C\u4E00\u4E2A\u8282\u70B9
   this.size = 0 // \u901A\u8FC7\u8FD9\u4E2A\u957F\u5EA6\u53EF\u4EE5\u904D\u5386\u8FD9\u4E2A\u94FE\u8868
 }
 // \u589E\u52A0O(n)
 add(index,element) {
   if(arguments.length === 1) {
     // \u5411\u672B\u5C3E\u6DFB\u52A0
     element = index // \u5F53\u524D\u5143\u7D20\u7B49\u4E8E\u4F20\u9012\u7684\u7B2C\u4E00\u9879
     index = this.size // \u7D22\u5F15\u6307\u5411\u6700\u540E\u4E00\u4E2A\u5143\u7D20
   }
  if(index &lt; 0 || index &gt; this.size) {
    throw new Error(&#39;\u6DFB\u52A0\u7684\u7D22\u5F15\u4E0D\u6B63\u5E38&#39;)
  }
  if(index === 0) {
    // \u76F4\u63A5\u627E\u5230\u5934\u90E8 \u628A\u5934\u90E8\u6539\u6389 \u6027\u80FD\u66F4\u597D
    let head = this.head
    this.head = new Node(element,head)
  } else {
    // \u83B7\u53D6\u5F53\u524D\u5934\u6307\u9488
    let current = this.head
    // \u4E0D\u505C\u904D\u5386 \u76F4\u5230\u627E\u5230\u6700\u540E\u4E00\u9879 \u6DFB\u52A0\u7684\u7D22\u5F15\u662F1\u5C31\u627E\u5230\u7B2C0\u4E2A\u7684next\u8D4B\u503C
    for (let i = 0; i &lt; index-1; i++) { // \u627E\u5230\u5B83\u7684\u524D\u4E00\u4E2A
      current = current.next
    }
    // \u8BA9\u521B\u5EFA\u7684\u5143\u7D20\u6307\u5411\u4E0A\u4E00\u4E2A\u5143\u7D20\u7684\u4E0B\u4E00\u4E2A
    // \u770B\u56FE\u7406\u89E3next\u5C42\u7EA7 ![](./assets/handwritten/20210522115056.png)
    current.next = new Node(element,current.next) // \u8BA9\u5F53\u524D\u5143\u7D20\u6307\u5411\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684next
  }

  this.size++;
 }
 // \u5220\u9664O(n)
 remove(index) {
  if(index &lt; 0 || index &gt;= this.size) {
    throw new Error(&#39;\u5220\u9664\u7684\u7D22\u5F15\u4E0D\u6B63\u5E38&#39;)
  }
  this.size--
  if(index === 0) {
    let head = this.head
    this.head = this.head.next // \u79FB\u52A8\u6307\u9488\u4F4D\u7F6E

    return head // \u8FD4\u56DE\u5220\u9664\u7684\u5143\u7D20
  }else {
    let current = this.head
    for (let i = 0; i &lt; index-1; i++) { // index-1\u627E\u5230\u5B83\u7684\u524D\u4E00\u4E2A
      current = current.next
    }
    let returnVal = current.next // \u8FD4\u56DE\u5220\u9664\u7684\u5143\u7D20
    // \u627E\u5230\u5F85\u5220\u9664\u7684\u6307\u9488\u7684\u4E0A\u4E00\u4E2A current.next.next
    // \u5982\u5220\u9664200\uFF0C 100=&gt;200=&gt;300 \u627E\u5230200\u7684\u4E0A\u4E00\u4E2A100\u7684next\u7684next\u4E3A300\uFF0C\u628A300\u8D4B\u503C\u7ED9100\u7684next\u5373\u53EF
    current.next = current.next.next

    return returnVal
  }
 }
 // \u67E5\u627EO(n)
 get(index) {
  if(index &lt; 0 || index &gt;= this.size) {
    throw new Error(&#39;\u67E5\u627E\u7684\u7D22\u5F15\u4E0D\u6B63\u5E38&#39;)
  }
  let current = this.head
  for (let i = 0; i &lt; index; i++) {
    current = current.next
  }
  return current
 }
 reverse() {
  const reverse = head=&gt;{
    if(head == null || head.next == null) {
      return head
    }
    let newHead = reverse(head.next)
    // \u4ECE\u8FD9\u4E2A\u94FE\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5F00\u59CB\u53CD\u8F6C\uFF0C\u8BA9\u5F53\u524D\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684next\u6307\u5411\u81EA\u5DF1\uFF0C\u81EA\u5DF1\u6307\u5411null
    // ![](./assets/handwritten/20210522161710.png)
    // \u521A\u5F00\u59CB\u53CD\u8F6C\u7684\u662F\u6700\u540E\u4E24\u4E2A
    head.next.next = head
    head.next = null

    return newHead
  }
  return reverse(this.head)
 }
}

let ll = new LinkedList()

ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)

// console.dir(ll,{depth: 1000})

console.log(ll.reverse())

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u53C9\u6811\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u641C\u7D22" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u641C\u7D22</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E8C\u53C9\u641C\u7D22\u6811

class Node {
  constructor(element, parent) {
    this.parent = parent // \u7236\u8282\u70B9
    this.element = element // \u5F53\u524D\u5B58\u50A8\u5185\u5BB9
    this.left = null // \u5DE6\u5B50\u6811
    this.right = null // \u53F3\u5B50\u6811
  }
}

class BST {
  constructor(compare) {
    this.root = null // \u6811\u6839
    this.size = 0 // \u6811\u4E2D\u7684\u8282\u70B9\u4E2A\u6570

    this.compare = compare || this.compare
  }
  compare(a,b) {
    return a - b
  }
  add(element) {
    if(this.root === null) {
      this.root = new Node(element, null)
      this.size++
      return
    }
    // \u83B7\u53D6\u6839\u8282\u70B9 \u7528\u5F53\u524D\u6DFB\u52A0\u7684\u8FDB\u884C\u5224\u65AD \u653E\u5DE6\u8FB9\u8FD8\u662F\u653E\u53F3\u8FB9
    let currentNode = this.root
    let compare
    let parent = null
    while (currentNode) {
      compare = this.compare(element, currentNode.element)
      parent = currentNode // \u5148\u5C06\u7236\u4EB2\u4FDD\u5B58\u8D77\u6765
      // currentNode\u8981\u4E0D\u505C\u7684\u53D8\u5316
      if(compare &gt; 0) {
        currentNode = currentNode.right
      } else if(compare &lt; 0) {
        currentNode = currentNode.left
      } else {
        currentNode.element = element // \u76F8\u7B49\u65F6 \u5148\u8986\u76D6\u540E\u7EED\u5904\u7406
      }
    }

    let newNode = new Node(element, parent)
    if(compare &gt; 0) {
      parent.right = newNode
    } else if(compare &lt; 0) {
      parent.left = newNode
    }

    this.size++
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="">\xA0 <img src="'+g+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D4B\u8BD5
var bst = new BST((a,b)=&gt;b.age-a.age) // \u6A21\u62DFsort\u65B9\u6CD5

bst.add({age: 10})
bst.add({age: 8})
bst.add({age:19})
bst.add({age:20})
bst.add({age: 5})

console.log(bst)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u53C9\u6811\u5C42\u6B21\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u5C42\u6B21\u904D\u5386" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u5C42\u6B21\u904D\u5386</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E8C\u53C9\u6811\u5C42\u6B21\u904D\u5386

class Node {
  constructor(element, parent) {
    this.parent = parent // \u7236\u8282\u70B9
    this.element = element // \u5F53\u524D\u5B58\u50A8\u5185\u5BB9
    this.left = null // \u5DE6\u5B50\u6811
    this.right = null // \u53F3\u5B50\u6811
  }
}

class BST {
  constructor(compare) {
    this.root = null // \u6811\u6839
    this.size = 0 // \u6811\u4E2D\u7684\u8282\u70B9\u4E2A\u6570

    this.compare = compare || this.compare
  }
  compare(a,b) {
    return a - b
  }
  add(element) {
    if(this.root === null) {
      this.root = new Node(element, null)
      this.size++
      return
    }
    // \u83B7\u53D6\u6839\u8282\u70B9 \u7528\u5F53\u524D\u6DFB\u52A0\u7684\u8FDB\u884C\u5224\u65AD \u653E\u5DE6\u8FB9\u8FD8\u662F\u653E\u53F3\u8FB9
    let currentNode = this.root
    let compare
    let parent = null
    while (currentNode) {
      compare = this.compare(element, currentNode.element)
      parent = currentNode // \u5148\u5C06\u7236\u4EB2\u4FDD\u5B58\u8D77\u6765
      // currentNode\u8981\u4E0D\u505C\u7684\u53D8\u5316
      if(compare &gt; 0) {
        currentNode = currentNode.right
      } else if(compare &lt; 0) {
        currentNode = currentNode.left
      } else {
        currentNode.element = element // \u76F8\u7B49\u65F6 \u5148\u8986\u76D6\u540E\u7EED\u5904\u7406
      }
    }

    let newNode = new Node(element, parent)
    if(compare &gt; 0) {
      parent.right = newNode
    } else if(compare &lt; 0) {
      parent.left = newNode
    }

    this.size++
  }
  // \u5C42\u6B21\u904D\u5386 \u961F\u5217
  levelOrderTraversal(visitor) {
    if(this.root == null) {
      return
    }
    let stack = [this.root]
    let index = 0 // \u6307\u9488 \u6307\u54110
    let currentNode
    while (currentNode = stack[index++]) {
      // \u53CD\u8F6C\u4E8C\u53C9\u6811
      let tmp = currentNode.left
      currentNode.left = currentNode.right
      currentNode.right = tmp
      visitor.visit(currentNode.element)
      if(currentNode.left) {
        stack.push(currentNode.left)
      }
      if(currentNode.right) {
        stack.push(currentNode.right)
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D4B\u8BD5
var bst = new BST((a,b)=&gt;a.age-b.age) // \u6A21\u62DFsort\u65B9\u6CD5

// ![](./assets/handwritten/20210522203619.png)
// ![](./assets/handwritten/20210522211809.png)
bst.add({age: 10})
bst.add({age: 8})
bst.add({age:19})
bst.add({age:6})
bst.add({age: 15})
bst.add({age: 22})
bst.add({age: 20})

// \u4F7F\u7528\u8BBF\u95EE\u8005\u6A21\u5F0F
class Visitor {
  constructor() {
    this.visit = function (elem) {
      elem.age = elem.age*2
    }
  }
}

// ![](./assets/handwritten/20210523095515.png)
console.log(bst.levelOrderTraversal(new Visitor()))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u53C9\u6811\u6DF1\u5EA6\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u6DF1\u5EA6\u904D\u5386" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u6DF1\u5EA6\u904D\u5386</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E8C\u53C9\u6811\u6DF1\u5EA6\u904D\u5386

class Node {
  constructor(element, parent) {
    this.parent = parent // \u7236\u8282\u70B9
    this.element = element // \u5F53\u524D\u5B58\u50A8\u5185\u5BB9
    this.left = null // \u5DE6\u5B50\u6811
    this.right = null // \u53F3\u5B50\u6811
  }
}

class BST {
  constructor(compare) {
    this.root = null // \u6811\u6839
    this.size = 0 // \u6811\u4E2D\u7684\u8282\u70B9\u4E2A\u6570

    this.compare = compare || this.compare
  }
  compare(a,b) {
    return a - b
  }
  add(element) {
    if(this.root === null) {
      this.root = new Node(element, null)
      this.size++
      return
    }
    // \u83B7\u53D6\u6839\u8282\u70B9 \u7528\u5F53\u524D\u6DFB\u52A0\u7684\u8FDB\u884C\u5224\u65AD \u653E\u5DE6\u8FB9\u8FD8\u662F\u653E\u53F3\u8FB9
    let currentNode = this.root
    let compare
    let parent = null
    while (currentNode) {
      compare = this.compare(element, currentNode.element)
      parent = currentNode // \u5148\u5C06\u7236\u4EB2\u4FDD\u5B58\u8D77\u6765
      // currentNode\u8981\u4E0D\u505C\u7684\u53D8\u5316
      if(compare &gt; 0) {
        currentNode = currentNode.right
      } else if(compare &lt; 0) {
        currentNode = currentNode.left
      } else {
        currentNode.element = element // \u76F8\u7B49\u65F6 \u5148\u8986\u76D6\u540E\u7EED\u5904\u7406
      }
    }

    let newNode = new Node(element, parent)
    if(compare &gt; 0) {
      parent.right = newNode
    } else if(compare &lt; 0) {
      parent.left = newNode
    }

    this.size++
  }
  // \u524D\u5E8F\u904D\u5386
  preorderTraversal(visitor) {
    const traversal = node=&gt;{
      if(node === null) return
      visitor.visit(node.element)
      traversal(node.left)
      traversal(node.right)
    }
    traversal(this.root)
  }
  // \u4E2D\u5E8F\u904D\u5386
  inorderTraversal(visitor) {
    const traversal = node=&gt;{
      if(node === null) return
      traversal(node.left)
      visitor.visit(node.element)
      traversal(node.right)
    }
    traversal(this.root)
  }
  // \u540E\u5E8F\u904D\u5386
  posterorderTraversal(visitor) {
    const traversal = node=&gt;{
      if(node === null) return
      traversal(node.left)
      traversal(node.right)
      visitor.visit(node.element)
    }
    traversal(this.root)
  }
  // \u53CD\u8F6C\u4E8C\u53C9\u6811\uFF1A\u65E0\u8BBA\u5148\u5E8F\u3001\u4E2D\u5E8F\u3001\u540E\u5E8F\u3001\u5C42\u7EA7\u90FD\u53EF\u4EE5\u53CD\u8F6C
  invertTree() {
    const traversal = node=&gt;{
      if(node === null) return
      let temp = node.left
      node.left = node.right
      node.right = temp
      traversal(node.left)
      traversal(node.right)
    }
    traversal(this.root)
    return this.root
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5148\u5E8F\u904D\u5386</p><p><img src="`+h+'" alt=""></p><p>\u4E8C\u53C9\u6811\u7684\u904D\u5386\u65B9\u5F0F</p><p><img src="'+x+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D4B\u8BD5
var bst = new BST((a,b)=&gt;a.age-b.age) // \u6A21\u62DFsort\u65B9\u6CD5

bst.add({age: 10})
bst.add({age: 8})
bst.add({age:19})
bst.add({age:6})
bst.add({age: 15})
bst.add({age: 22})
bst.add({age: 20})

// \u5148\u5E8F\u904D\u5386
// console.log(bst.preorderTraversal(),&#39;\u5148\u5E8F\u904D\u5386&#39;)
// console.log(bst.inorderTraversal(),&#39;\u4E2D\u5E8F\u904D\u5386&#39;)
// ![](./assets/handwritten/20210522214837.png)
// console.log(bst.posterorderTraversal(),&#39;\u540E\u5E8F\u904D\u5386&#39;)

// \u6DF1\u5EA6\u904D\u5386\uFF1A\u5148\u5E8F\u904D\u5386\u3001\u4E2D\u5E8F\u904D\u5386\u3001\u540E\u7EED\u904D\u5386
// \u5E7F\u5EA6\u904D\u5386\uFF1A\u5C42\u6B21\u904D\u5386\uFF08\u540C\u5C42\u7EA7\u904D\u5386\uFF09
// \u90FD\u53EF\u62FF\u5230\u6811\u4E2D\u7684\u8282\u70B9

// \u4F7F\u7528\u8BBF\u95EE\u8005\u6A21\u5F0F
class Visitor {
  constructor() {
    this.visit = function (elem) {
      elem.age = elem.age*2
    }
  }
}

// bst.posterorderTraversal({
//   visit(elem) {
//     elem.age = elem.age*10
//   }
// })

// \u4E0D\u80FD\u901A\u8FC7\u7D22\u5F15\u64CD\u4F5C \u62FF\u5230\u8282\u70B9\u53BB\u64CD\u4F5C
// bst.posterorderTraversal(new Visitor())

console.log(bst.invertTree(),&#39;\u53CD\u8F6C\u4E8C\u53C9\u6811&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51);function F(M,L){const s=v("ExternalLinkIcon");return r(),a("div",null,[y,n("blockquote",null,[n("p",null,[j,k,q,w,_,n("a",P,[E,l(s)]),S])]),N,n("p",null,[T,n("a",A,[O,l(s)]),C]),R])}var D=d(f,[["render",F],["__file","handwritten.html.vue"]]);export{D as default};
