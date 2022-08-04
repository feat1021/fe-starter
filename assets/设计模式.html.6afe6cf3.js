import{_ as e,o as i,c as n,b as l}from"./app.12353158.js";const s={},d=l(`<h1 id="\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F</h1><hr><h3 id="_1-\u5916\u89C2\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u5916\u89C2\u6A21\u5F0F" aria-hidden="true">#</a> 1. \u5916\u89C2\u6A21\u5F0F</h3><blockquote><p>\u5916\u89C2\u6A21\u5F0F\u662F\u6700\u5E38\u89C1\u7684\u8BBE\u8BA1\u6A21\u5F0F\u4E4B\u4E00\uFF0C\u5B83\u4E3A\u5B50\u7CFB\u7EDF\u4E2D\u7684\u4E00\u7EC4\u63A5\u53E3\u63D0\u4F9B\u4E00\u4E2A\u7EDF\u4E00\u7684\u9AD8\u5C42\u63A5\u53E3\uFF0C\u4F7F\u5B50\u7CFB\u7EDF\u66F4\u5BB9\u6613\u4F7F\u7528\u3002\u7B80\u800C\u8A00\u4E4B\u5916\u89C2\u8BBE\u8BA1\u6A21\u5F0F\u5C31\u662F\u628A\u591A\u4E2A\u5B50\u7CFB\u7EDF\u4E2D\u590D\u6742\u903B\u8F91\u8FDB\u884C\u62BD\u8C61\uFF0C\u4ECE\u800C\u63D0\u4F9B\u4E00\u4E2A\u66F4\u7EDF\u4E00\u3001\u66F4\u7B80\u6D01\u3001\u66F4\u6613\u7528\u7684API\u3002\u5F88\u591A\u6211\u4EEC\u5E38\u7528\u7684\u6846\u67B6\u548C\u5E93\u57FA\u672C\u90FD\u9075\u5FAA\u4E86\u5916\u89C2\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u6BD4\u5982JQuery\u5C31\u628A\u590D\u6742\u7684\u539F\u751FDOM\u64CD\u4F5C\u8FDB\u884C\u4E86\u62BD\u8C61\u548C\u5C01\u88C5\uFF0C\u5E76\u6D88\u9664\u4E86\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u517C\u5BB9\u95EE\u9898\uFF0C\u4ECE\u800C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u66F4\u9AD8\u7EA7\u66F4\u6613\u7528\u7684\u7248\u672C\u3002\u5176\u5B9E\u5728\u5E73\u65F6\u5DE5\u4F5C\u4E2D\u6211\u4EEC\u4E5F\u4F1A\u7ECF\u5E38\u7528\u5230\u5916\u89C2\u6A21\u5F0F\u8FDB\u884C\u5F00\u53D1\uFF0C\u53EA\u662F\u6211\u4EEC\u4E0D\u81EA\u77E5\u800C\u5DF2</p></blockquote><p>\u517C\u5BB9\u6D4F\u89C8\u5668\u4E8B\u4EF6\u7ED1\u5B9A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let addMyEvent = function (el, ev, fn) {
    if (el.addEventListener) {
        el.addEventListener(ev, fn, false)
    } else if (el.attachEvent) {
        el.attachEvent(&#39;on&#39; + ev, fn)
    } else {
        el[&#39;on&#39; + ev] = fn
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C01\u88C5\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let myEvent = {
    // ...
    stop: e =&gt; {
        e.stopPropagation();
        e.preventDefault();
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u573A\u666F</p><ul><li>\u8BBE\u8BA1\u521D\u671F\uFF0C\u5E94\u8BE5\u8981\u6709\u610F\u8BC6\u5730\u5C06\u4E0D\u540C\u7684\u4E24\u4E2A\u5C42\u5206\u79BB\uFF0C\u6BD4\u5982\u7ECF\u5178\u7684\u4E09\u5C42\u7ED3\u6784\uFF0C\u5728\u6570\u636E\u8BBF\u95EE\u5C42\u548C\u4E1A\u52A1\u903B\u8F91\u5C42\u3001\u4E1A\u52A1\u903B\u8F91\u5C42\u548C\u8868\u793A\u5C42\u4E4B\u95F4\u5EFA\u7ACB\u5916\u89C2Facade</li><li>\u5728\u5F00\u53D1\u9636\u6BB5\uFF0C\u5B50\u7CFB\u7EDF\u5F80\u5F80\u56E0\u4E3A\u4E0D\u65AD\u7684\u91CD\u6784\u6F14\u5316\u800C\u53D8\u5F97\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u589E\u52A0\u5916\u89C2Facade\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u7B80\u5355\u7684\u63A5\u53E3\uFF0C\u51CF\u5C11\u4ED6\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u3002</li><li>\u5728\u7EF4\u62A4\u4E00\u4E2A\u9057\u7559\u7684\u5927\u578B\u7CFB\u7EDF\u65F6\uFF0C\u53EF\u80FD\u8FD9\u4E2A\u7CFB\u7EDF\u5DF2\u7ECF\u5F88\u96BE\u7EF4\u62A4\u4E86\uFF0C\u8FD9\u65F6\u5019\u4F7F\u7528\u5916\u89C2Facade\u4E5F\u662F\u975E\u5E38\u5408\u9002\u7684\uFF0C\u4E3A\u7CFB\u7CFB\u7EDF\u5F00\u53D1\u4E00\u4E2A\u5916\u89C2Facade\u7C7B\uFF0C\u4E3A\u8BBE\u8BA1\u7C97\u7CD9\u548C\u9AD8\u5EA6\u590D\u6742\u7684\u9057\u7559\u4EE3\u7801\u63D0\u4F9B\u6BD4\u8F83\u6E05\u6670\u7684\u63A5\u53E3\uFF0C\u8BA9\u65B0\u7CFB\u7EDF\u548CFacade\u5BF9\u8C61\u4EA4\u4E92\uFF0CFacade\u4E0E\u9057\u7559\u4EE3\u7801\u4EA4\u4E92\u6240\u6709\u7684\u590D\u6742\u5DE5\u4F5C\u3002</li></ul><p>\u4F18\u70B9</p><ul><li>\u51CF\u5C11\u7CFB\u7EDF\u76F8\u4E92\u4F9D\u8D56\u3002</li><li>\u63D0\u9AD8\u7075\u6D3B\u6027\u3002</li><li>\u63D0\u9AD8\u4E86\u5B89\u5168\u6027</li></ul><p>\u7F3A\u70B9</p><blockquote><p>\u4E0D\u7B26\u5408\u5F00\u95ED\u539F\u5219\uFF0C\u5982\u679C\u8981\u6539\u4E1C\u897F\u5F88\u9EBB\u70E6\uFF0C\u7EE7\u627F\u91CD\u5199\u90FD\u4E0D\u5408\u9002\u3002</p></blockquote><h3 id="_2-\u4EE3\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a> 2. \u4EE3\u7406\u6A21\u5F0F</h3><blockquote><p>\u662F\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u63D0\u4F9B\u4E00\u4E2A\u4EE3\u7528\u54C1\u6216\u5360\u4F4D\u7B26\uFF0C\u4EE5\u4FBF\u63A7\u5236\u5BF9\u5B83\u7684\u8BBF\u95EE</p></blockquote><p>\u5047\u8BBE\u5F53A \u5728\u5FC3\u60C5\u597D\u7684\u65F6\u5019\u6536\u5230\u82B1\uFF0C\u5C0F\u660E\u8868\u767D\u6210\u529F\u7684\u51E0\u7387\u670960%\uFF0C\u800C\u5F53A \u5728\u5FC3\u60C5\u5DEE\u7684\u65F6\u5019\u6536\u5230\u82B1\uFF0C\u5C0F\u660E\u8868\u767D\u7684\u6210\u529F\u7387\u65E0\u9650\u8D8B\u8FD1\u4E8E0\u3002\u5C0F\u660E\u8DDFA \u521A\u521A\u8BA4\u8BC6\u4E24\u5929\uFF0C\u8FD8\u65E0\u6CD5\u8FA8\u522BA \u4EC0\u4E48\u65F6\u5019\u5FC3\u60C5\u597D\u3002\u5982\u679C\u4E0D\u5408\u65F6\u5B9C\u5730\u628A\u82B1\u9001\u7ED9A\uFF0C\u82B1\u88AB\u76F4\u63A5\u6254\u6389\u7684\u53EF\u80FD\u6027\u5F88\u5927\uFF0C\u8FD9\u675F\u82B1\u53EF\u662F\u5C0F\u660E\u5403\u4E867 \u5929\u6CE1\u9762\u6362\u6765\u7684\u3002\u4F46\u662FA \u7684\u670B\u53CBB \u5374\u5F88\u4E86\u89E3A\uFF0C\u6240\u4EE5\u5C0F\u660E\u53EA\u7BA1\u628A\u82B1\u4EA4\u7ED9B\uFF0CB \u4F1A\u76D1\u542CA \u7684\u5FC3\u60C5\u53D8\u5316\uFF0C\u7136\u540E\u9009\u62E9A \u5FC3\u60C5\u597D\u7684\u65F6\u5019\u628A\u82B1\u8F6C\u4EA4\u7ED9A\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let Flower = function() {}
let xiaoming = {
  sendFlower: function(target) {
    let flower = new Flower()
    target.receiveFlower(flower)
  }
}
let B = {
  receiveFlower: function(flower) {
    A.listenGoodMood(function() {
      A.receiveFlower(flower)
    })
  }
}
let A = {
  receiveFlower: function(flower) {
    console.log(&#39;\u6536\u5230\u82B1&#39;+ flower)
  },
  listenGoodMood: function(fn) {
    setTimeout(function() {
      fn()
    }, 1000)
  }
}
xiaoming.sendFlower(B)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u573A\u666F</p><p>HTML\u5143 \u7D20\u4E8B\u4EF6\u4EE3\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul id=&quot;ul&quot;&gt;
  &lt;li&gt;1&lt;/li&gt;
  &lt;li&gt;2&lt;/li&gt;
  &lt;li&gt;3&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
  let ul = document.querySelector(&#39;#ul&#39;);
  ul.addEventListener(&#39;click&#39;, event =&gt; {
    console.log(event.target);
  });
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9</p><ul><li>\u4EE3\u7406\u6A21\u5F0F\u80FD\u5C06\u4EE3\u7406\u5BF9\u8C61\u4E0E\u88AB\u8C03\u7528\u5BF9\u8C61\u5206\u79BB\uFF0C\u964D\u4F4E\u4E86\u7CFB\u7EDF\u7684\u8026\u5408\u5EA6\u3002\u4EE3\u7406\u6A21\u5F0F\u5728\u5BA2\u6237\u7AEF\u548C\u76EE\u6807\u5BF9\u8C61\u4E4B\u95F4\u8D77\u5230\u4E00\u4E2A\u4E2D\u4ECB\u4F5C\u7528\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8D77\u5230\u4FDD\u62A4\u76EE\u6807\u5BF9\u8C61\u7684\u4F5C\u7528</li><li>\u4EE3\u7406\u5BF9\u8C61\u53EF\u4EE5\u6269\u5C55\u76EE\u6807\u5BF9\u8C61\u7684\u529F\u80FD\uFF1B\u901A\u8FC7\u4FEE\u6539\u4EE3\u7406\u5BF9\u8C61\u5C31\u53EF\u4EE5\u4E86\uFF0C\u7B26\u5408\u5F00\u95ED\u539F\u5219\uFF1B</li></ul><p>\u7F3A\u70B9</p><p>\u5904\u7406\u8BF7\u6C42\u901F\u5EA6\u53EF\u80FD\u6709\u5DEE\u522B\uFF0C\u975E\u76F4\u63A5\u8BBF\u95EE\u5B58\u5728\u5F00\u9500</p><h3 id="_3-\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 3. \u5DE5\u5382\u6A21\u5F0F</h3><blockquote><p>\u5DE5\u5382\u6A21\u5F0F\u5B9A\u4E49\u4E00\u4E2A\u7528\u4E8E\u521B\u5EFA\u5BF9\u8C61\u7684\u63A5\u53E3\uFF0C\u8FD9\u4E2A\u63A5\u53E3\u7531\u5B50\u7C7B\u51B3\u5B9A\u5B9E\u4F8B\u5316\u54EA\u4E00\u4E2A\u7C7B\u3002\u8BE5\u6A21\u5F0F\u4F7F\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u5316\u5EF6\u8FDF\u5230\u4E86\u5B50\u7C7B\u3002\u800C\u5B50\u7C7B\u53EF\u4EE5\u91CD\u5199\u63A5\u53E3\u65B9\u6CD5\u4EE5\u4FBF\u521B\u5EFA\u7684\u65F6\u5019\u6307\u5B9A\u81EA\u5DF1\u7684\u5BF9\u8C61\u7C7B\u578B\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log(&#39;init&#39;)
    }
    fun() {
        console.log(&#39;fun&#39;)
    }
}

class Factory {
    create(name) {
        return new Product(name)
    }
}

// use
let factory = new Factory()
let p = factory.create(&#39;p1&#39;)
p.init()
p.fun()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u573A\u666F</p><ul><li>\u5982\u679C\u4F60\u4E0D\u60F3\u8BA9\u67D0\u4E2A\u5B50\u7CFB\u7EDF\u4E0E\u8F83\u5927\u7684\u90A3\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u5F62\u6210\u5F3A\u8026\u5408\uFF0C\u800C\u662F\u60F3\u8FD0\u884C\u65F6\u4ECE\u8BB8\u591A\u5B50\u7CFB\u7EDF\u4E2D\u8FDB\u884C\u6311\u9009\u7684\u8BDD\uFF0C\u90A3\u4E48\u5DE5\u5382\u6A21\u5F0F\u662F\u4E00\u4E2A\u7406\u60F3\u7684\u9009\u62E9</li><li>\u5C06new\u64CD\u4F5C\u7B80\u5355\u5C01\u88C5\uFF0C\u9047\u5230new\u7684\u65F6\u5019\u5C31\u5E94\u8BE5\u8003\u8651\u662F\u5426\u7528\u5DE5\u5382\u6A21\u5F0F\uFF1B</li><li>\u9700\u8981\u4F9D\u8D56\u5177\u4F53\u73AF\u5883\u521B\u5EFA\u4E0D\u540C\u5B9E\u4F8B\uFF0C\u8FD9\u4E9B\u5B9E\u4F8B\u90FD\u6709\u76F8\u540C\u7684\u884C\u4E3A,\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5DE5\u5382\u6A21\u5F0F\uFF0C\u7B80\u5316\u5B9E\u73B0\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u51CF\u5C11\u6BCF\u79CD\u5BF9\u8C61\u6240\u9700\u7684\u4EE3\u7801\u91CF\uFF0C\u6709\u5229\u4E8E\u6D88\u9664\u5BF9\u8C61\u95F4\u7684\u8026\u5408\uFF0C\u63D0\u4F9B\u66F4\u5927\u7684\u7075\u6D3B\u6027</li></ul><p>\u4F18\u70B9</p><ul><li>\u521B\u5EFA\u5BF9\u8C61\u7684\u8FC7\u7A0B\u53EF\u80FD\u5F88\u590D\u6742\uFF0C\u4F46\u6211\u4EEC\u53EA\u9700\u8981\u5173\u5FC3\u521B\u5EFA\u7ED3\u679C\u3002</li><li>\u6784\u9020\u51FD\u6570\u548C\u521B\u5EFA\u8005\u5206\u79BB, \u7B26\u5408&quot;\u5F00\u95ED\u539F\u5219&quot;</li><li>\u4E00\u4E2A\u8C03\u7528\u8005\u60F3\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EA\u8981\u77E5\u9053\u5176\u540D\u79F0\u5C31\u53EF\u4EE5\u4E86\u3002</li><li>\u6269\u5C55\u6027\u9AD8\uFF0C\u5982\u679C\u60F3\u589E\u52A0\u4E00\u4E2A\u4EA7\u54C1\uFF0C\u53EA\u8981\u6269\u5C55\u4E00\u4E2A\u5DE5\u5382\u7C7B\u5C31\u53EF\u4EE5\u3002</li></ul><p>\u7F3A\u70B9</p><ul><li>\u6DFB\u52A0\u65B0\u4EA7\u54C1\u65F6\uFF0C\u9700\u8981\u7F16\u5199\u65B0\u7684\u5177\u4F53\u4EA7\u54C1\u7C7B,\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u589E\u52A0\u4E86\u7CFB\u7EDF\u7684\u590D\u6742\u5EA6</li><li>\u8003\u8651\u5230\u7CFB\u7EDF\u7684\u53EF\u6269\u5C55\u6027\uFF0C\u9700\u8981\u5F15\u5165\u62BD\u8C61\u5C42\uFF0C\u5728\u5BA2\u6237\u7AEF\u4EE3\u7801\u4E2D\u5747\u4F7F\u7528\u62BD\u8C61\u5C42\u8FDB\u884C\u5B9A\u4E49\uFF0C\u589E\u52A0\u4E86\u7CFB\u7EDF\u7684\u62BD\u8C61\u6027\u548C\u7406\u89E3\u96BE\u5EA6</li></ul><p>\u4EC0\u4E48\u65F6\u5019\u4E0D\u7528</p><blockquote><p>\u5F53\u88AB\u5E94\u7528\u5230\u9519\u8BEF\u7684\u95EE\u9898\u7C7B\u578B\u4E0A\u65F6,\u8FD9\u4E00\u6A21\u5F0F\u4F1A\u7ED9\u5E94\u7528\u7A0B\u5E8F\u5F15\u5165\u5927\u91CF\u4E0D\u5FC5\u8981\u7684\u590D\u6742\u6027.\u9664\u975E\u4E3A\u521B\u5EFA\u5BF9\u8C61\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\u662F\u6211\u4EEC\u7F16\u5199\u7684\u5E93\u6216\u8005\u6846\u67B6\u7684\u4E00\u4E2A\u8BBE\u8BA1\u4E0A\u76EE\u6807,\u5426\u5219\u6211\u4F1A\u5EFA\u8BAE\u4F7F\u7528\u660E\u786E\u7684\u6784\u9020\u5668,\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5F00\u9500\u3002</p></blockquote><p>\u7531\u4E8E\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B\u88AB\u9AD8\u6548\u7684\u62BD\u8C61\u5728\u4E00\u4E2A\u63A5\u53E3\u540E\u9762\u7684\u4E8B\u5B9E,\u8FD9\u4E5F\u4F1A\u7ED9\u4F9D\u8D56\u4E8E\u8FD9\u4E2A\u8FC7\u7A0B\u53EF\u80FD\u4F1A\u6709\u591A\u590D\u6742\u7684\u5355\u5143\u6D4B\u8BD5\u5E26\u6765\u95EE\u9898\u3002</p><h3 id="_4-\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> 4. \u5355\u4F8B\u6A21\u5F0F</h3><blockquote><p>\u987E\u540D\u601D\u4E49\uFF0C\u5355\u4F8B\u6A21\u5F0F\u4E2DClass\u7684\u5B9E\u4F8B\u4E2A\u6570\u6700\u591A\u4E3A1\u3002\u5F53\u9700\u8981\u4E00\u4E2A\u5BF9\u8C61\u53BB\u8D2F\u7A7F\u6574\u4E2A\u7CFB\u7EDF\u6267\u884C\u67D0\u4E9B\u4EFB\u52A1\u65F6\uFF0C\u5355\u4F8B\u6A21\u5F0F\u5C31\u6D3E\u4E0A\u4E86\u7528\u573A\u3002\u800C\u9664\u6B64\u4E4B\u5916\u7684\u573A\u666F\u5C3D\u91CF\u907F\u514D\u5355\u4F8B\u6A21\u5F0F\u7684\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5355\u4F8B\u6A21\u5F0F\u4F1A\u5F15\u5165\u5168\u5C40\u72B6\u6001\uFF0C\u800C\u4E00\u4E2A\u5065\u5EB7\u7684\u7CFB\u7EDF\u5E94\u8BE5\u907F\u514D\u5F15\u5165\u8FC7\u591A\u7684\u5168\u5C40\u72B6\u6001\u3002</p></blockquote><p>\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u9700\u8981\u89E3\u51B3\u4EE5\u4E0B\u51E0\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u5982\u4F55\u786E\u5B9AClass\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF1F</li><li>\u5982\u4F55\u7B80\u4FBF\u7684\u8BBF\u95EEClass\u7684\u552F\u4E00\u5B9E\u4F8B\uFF1F</li><li>Class\u5982\u4F55\u63A7\u5236\u5B9E\u4F8B\u5316\u7684\u8FC7\u7A0B\uFF1F</li><li>\u5982\u4F55\u5C06Class\u7684\u5B9E\u4F8B\u4E2A\u6570\u9650\u5236\u4E3A1\uFF1F</li></ul><blockquote><p>\u6211\u4EEC\u4E00\u822C\u901A\u8FC7\u5B9E\u73B0\u4EE5\u4E0B\u4E24\u70B9\u6765\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF1A</p></blockquote><ul><li>\u9690\u85CFClass\u7684\u6784\u9020\u51FD\u6570\uFF0C\u907F\u514D\u591A\u6B21\u5B9E\u4F8B\u5316</li><li>\u901A\u8FC7\u66B4\u9732\u4E00\u4E2A\xA0<code>getInstance()</code>\xA0\u65B9\u6CD5\u6765\u521B\u5EFA/\u83B7\u53D6\u552F\u4E00\u5B9E\u4F8B</li></ul><p>Javascript\u4E2D\u5355\u4F8B\u6A21\u5F0F\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5355\u4F8B\u6784\u9020\u5668
const FooServiceSingleton = (function () {
  // \u9690\u85CF\u7684Class\u7684\u6784\u9020\u51FD\u6570
  function FooService() {}

  // \u672A\u521D\u59CB\u5316\u7684\u5355\u4F8B\u5BF9\u8C61
  let fooService;

  return {
    // \u521B\u5EFA/\u83B7\u53D6\u5355\u4F8B\u5BF9\u8C61\u7684\u51FD\u6570
    getInstance: function () {
      if (!fooService) {
        fooService = new FooService();
      }
      return fooService;
    }
  }
})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u7684\u5173\u952E\u70B9\u6709\uFF1A</p><ul><li>\u4F7F\u7528 IIFE\u521B\u5EFA\u5C40\u90E8\u4F5C\u7528\u57DF\u5E76\u5373\u65F6\u6267\u884C\uFF1B</li><li>getInstance() \u4E3A\u4E00\u4E2A \u95ED\u5305 \uFF0C\u4F7F\u7528\u95ED\u5305\u4FDD\u5B58\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u7684\u5355\u4F8B\u5BF9\u8C61\u5E76\u8FD4\u56DE\u3002</li></ul><p>\u6211\u4EEC\u53EF\u4EE5\u9A8C\u8BC1\u4E0B\u5355\u4F8B\u5BF9\u8C61\u662F\u5426\u521B\u5EFA\u6210\u529F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const fooService1 = FooServiceSingleton.getInstance();
const fooService2 = FooServiceSingleton.getInstance();

console.log(fooService1 === fooService2); // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u573A\u666F\u4F8B\u5B50</p><ul><li>\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4\u548C\u5B9E\u73B0\u5206\u652F\u578B\u65B9\u6CD5</li><li>\u767B\u5F55\u6846</li><li>vuex \u548C redux\u4E2D\u7684store</li></ul><p>\u4F18\u70B9</p><ul><li>\u5212\u5206\u547D\u540D\u7A7A\u95F4\uFF0C\u51CF\u5C11\u5168\u5C40\u53D8\u91CF</li><li>\u589E\u5F3A\u6A21\u5757\u6027\uFF0C\u628A\u81EA\u5DF1\u7684\u4EE3\u7801\u7EC4\u7EC7\u5728\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u540D\u4E0B\uFF0C\u653E\u5728\u5355\u4E00\u4F4D\u7F6E\uFF0C\u4FBF\u4E8E\u7EF4\u62A4</li><li>\u4E14\u53EA\u4F1A\u5B9E\u4F8B\u5316\u4E00\u6B21\u3002\u7B80\u5316\u4E86\u4EE3\u7801\u7684\u8C03\u8BD5\u548C\u7EF4\u62A4</li></ul><p>\u7F3A\u70B9</p><ul><li>\u7531\u4E8E\u5355\u4F8B\u6A21\u5F0F\u63D0\u4F9B\u7684\u662F\u4E00\u79CD\u5355\u70B9\u8BBF\u95EE\uFF0C\u6240\u4EE5\u5B83\u6709\u53EF\u80FD\u5BFC\u81F4\u6A21\u5757\u95F4\u7684\u5F3A\u8026\u5408</li><li>\u4ECE\u800C\u4E0D\u5229\u4E8E\u5355\u5143\u6D4B\u8BD5\u3002\u65E0\u6CD5\u5355\u72EC\u6D4B\u8BD5\u4E00\u4E2A\u8C03\u7528\u4E86\u6765\u81EA\u5355\u4F8B\u7684\u65B9\u6CD5\u7684\u7C7B\uFF0C\u800C\u53EA\u80FD\u628A\u5B83\u4E0E\u90A3\u4E2A\u5355\u4F8B\u4F5C\u4E3A\u4E00 \u4E2A\u5355\u5143\u4E00\u8D77\u6D4B\u8BD5\u3002</li></ul><h3 id="_5-\u7B56\u7565\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u7B56\u7565\u6A21\u5F0F" aria-hidden="true">#</a> 5. \u7B56\u7565\u6A21\u5F0F</h3><blockquote><p>\u7B56\u7565\u6A21\u5F0F\u7B80\u5355\u63CF\u8FF0\u5C31\u662F\uFF1A\u5BF9\u8C61\u6709\u67D0\u4E2A\u884C\u4E3A\uFF0C\u4F46\u662F\u5728\u4E0D\u540C\u7684\u573A\u666F\u4E2D\uFF0C\u8BE5\u884C\u4E3A\u6709\u4E0D\u540C\u7684\u5B9E\u73B0\u7B97\u6CD5\u3002\u628A\u5B83\u4EEC\u4E00\u4E2A\u4E2A\u5C01\u88C5\u8D77\u6765\uFF0C\u5E76\u4E14\u4F7F\u5B83\u4EEC\u53EF\u4EE5\u4E92\u76F8\u66FF\u6362</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;\u7B56\u7565\u6A21\u5F0F-\u6821\u9A8C\u8868\u5355&lt;/title&gt;
    &lt;meta content=&quot;text/html; charset=utf-8&quot; http-equiv=&quot;Content-Type&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;form id = &quot;registerForm&quot; method=&quot;post&quot; action=&quot;http://xxxx.com/api/register&quot;&gt;
        \u7528\u6237\u540D\uFF1A&lt;input type=&quot;text&quot; name=&quot;userName&quot;&gt;
        \u5BC6\u7801\uFF1A&lt;input type=&quot;text&quot; name=&quot;password&quot;&gt;
        \u624B\u673A\u53F7\u7801\uFF1A&lt;input type=&quot;text&quot; name=&quot;phoneNumber&quot;&gt;
        &lt;button type=&quot;submit&quot;&gt;\u63D0\u4EA4&lt;/button&gt;
    &lt;/form&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;
        // \u7B56\u7565\u5BF9\u8C61
        const strategies = {
          isNoEmpty: function (value, errorMsg) {
            if (value === &#39;&#39;) {
              return errorMsg;
            }
          },
          isNoSpace: function (value, errorMsg) {
            if (value.trim() === &#39;&#39;) {
              return errorMsg;
            }
          },
          minLength: function (value, length, errorMsg) {
            if (value.trim().length &lt; length) {
              return errorMsg;
            }
          },
          maxLength: function (value, length, errorMsg) {
            if (value.length &gt; length) {
              return errorMsg;
            }
          },
          isMobile: function (value, errorMsg) {
            if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/.test(value)) {
              return errorMsg;
            }
          }
        }

        // \u9A8C\u8BC1\u7C7B
        class Validator {
          constructor() {
            this.cache = []
          }
          add(dom, rules) {
            for(let i = 0, rule; rule = rules[i++];) {
              let strategyAry = rule.strategy.split(&#39;:&#39;)
              let errorMsg = rule.errorMsg
              this.cache.push(() =&gt; {
                let strategy = strategyAry.shift()
                strategyAry.unshift(dom.value)
                strategyAry.push(errorMsg)
                return strategies[strategy].apply(dom, strategyAry)
              })
            }
          }
          start() {
            for(let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
              let errorMsg = validatorFunc()
              if (errorMsg) {
                return errorMsg
              }
            }
          }
        }

        // \u8C03\u7528\u4EE3\u7801
        let registerForm = document.getElementById(&#39;registerForm&#39;)

        let validataFunc = function() {
          let validator = new Validator()
          validator.add(registerForm.userName, [{
            strategy: &#39;isNoEmpty&#39;,
            errorMsg: &#39;\u7528\u6237\u540D\u4E0D\u53EF\u4E3A\u7A7A&#39;
          }, {
            strategy: &#39;isNoSpace&#39;,
            errorMsg: &#39;\u4E0D\u5141\u8BB8\u4EE5\u7A7A\u767D\u5B57\u7B26\u547D\u540D&#39;
          }, {
            strategy: &#39;minLength:2&#39;,
            errorMsg: &#39;\u7528\u6237\u540D\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E2\u4F4D&#39;
          }])
          validator.add(registerForm.password, [ {
            strategy: &#39;minLength:6&#39;,
            errorMsg: &#39;\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&#39;
          }])
          validator.add(registerForm.phoneNumber, [{
            strategy: &#39;isMobile&#39;,
            errorMsg: &#39;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801\u683C\u5F0F&#39;
          }])
          return validator.start()
        }

        registerForm.onsubmit = function() {
          let errorMsg = validataFunc()
          if (errorMsg) {
            alert(errorMsg)
            return false
          }
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u573A\u666F\u4F8B\u5B50</p><ul><li>\u5982\u679C\u5728\u4E00\u4E2A\u7CFB\u7EDF\u91CC\u9762\u6709\u8BB8\u591A\u7C7B\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u4EC5\u5728\u4E8E\u5B83\u4EEC\u7684&#39;\u884C\u4E3A&#39;\uFF0C\u90A3\u4E48\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u53EF\u4EE5\u52A8\u6001\u5730\u8BA9\u4E00\u4E2A\u5BF9\u8C61\u5728\u8BB8\u591A\u884C\u4E3A\u4E2D\u9009\u62E9\u4E00\u79CD\u884C\u4E3A\u3002</li><li>\u4E00\u4E2A\u7CFB\u7EDF\u9700\u8981\u52A8\u6001\u5730\u5728\u51E0\u79CD\u7B97\u6CD5\u4E2D\u9009\u62E9\u4E00\u79CD\u3002</li><li>\u8868\u5355\u9A8C\u8BC1</li></ul><p>\u4F18\u70B9</p><ul><li>\u5229\u7528\u7EC4\u5408\u3001\u59D4\u6258\u3001\u591A\u6001\u7B49\u6280\u672F\u548C\u601D\u60F3\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u907F\u514D\u591A\u91CD\u6761\u4EF6\u9009\u62E9\u8BED\u53E5</li><li>\u63D0\u4F9B\u4E86\u5BF9\u5F00\u653E-\u5C01\u95ED\u539F\u5219\u7684\u5B8C\u7F8E\u652F\u6301\uFF0C\u5C06\u7B97\u6CD5\u5C01\u88C5\u5728\u72EC\u7ACB\u7684strategy\u4E2D\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u6613\u4E8E\u5207\u6362\uFF0C\u7406\u89E3\uFF0C\u6613\u4E8E\u6269\u5C55</li><li>\u5229\u7528\u7EC4\u5408\u548C\u59D4\u6258\u6765\u8BA9Context\u62E5\u6709\u6267\u884C\u7B97\u6CD5\u7684\u80FD\u529B\uFF0C\u8FD9\u4E5F\u662F\u7EE7\u627F\u7684\u4E00\u79CD\u66F4\u8F7B\u4FBF\u7684\u4EE3\u66FF\u65B9\u6848</li></ul><p>\u7F3A\u70B9</p><ul><li>\u4F1A\u5728\u7A0B\u5E8F\u4E2D\u589E\u52A0\u8BB8\u591A\u7B56\u7565\u7C7B\u6216\u8005\u7B56\u7565\u5BF9\u8C61</li><li>\u8981\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\uFF0C\u5FC5\u987B\u4E86\u89E3\u6240\u6709\u7684strategy\uFF0C\u5FC5\u987B\u4E86\u89E3\u5404\u4E2Astrategy\u4E4B\u95F4\u7684\u4E0D\u540C\u70B9\uFF0C\u8FD9\u6837\u624D\u80FD\u9009\u62E9\u4E00\u4E2A\u5408\u9002\u7684strategy</li></ul><h3 id="_6-\u8FED\u4EE3\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_6-\u8FED\u4EE3\u5668\u6A21\u5F0F" aria-hidden="true">#</a> 6. \u8FED\u4EE3\u5668\u6A21\u5F0F</h3><blockquote><p>\u5982\u679C\u4F60\u770B\u5230\u8FD9\uFF0CES6\u4E2D\u7684\u8FED\u4EE3\u5668 Iterator \u76F8\u4FE1\u4F60\u8FD8\u662F\u6709\u70B9\u5370\u8C61\u7684\uFF0C\u4E0A\u9762\u7B2C60\u6761\u5DF2\u7ECF\u505A\u8FC7\u7B80\u5355\u7684\u4ECB\u7ECD\u3002\u8FED\u4EE3\u5668\u6A21\u5F0F\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u63D0\u4F9B\u4E00\u79CD\u65B9\u6CD5\u987A\u5E8F\u4E00\u4E2A\u805A\u5408\u5BF9\u8C61\u4E2D\u5404\u4E2A\u5143\u7D20\uFF0C\u800C\u53C8\u4E0D\u66B4\u9732\u8BE5\u5BF9\u8C61\u7684\u5185\u90E8\u8868\u793A\u3002</p></blockquote><p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u89E3\u51B3\u4E86\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u63D0\u4F9B\u4E00\u81F4\u7684\u904D\u5386\u5404\u79CD\u6570\u636E\u7ED3\u6784\u7684\u65B9\u5F0F\uFF0C\u800C\u4E0D\u7528\u4E86\u89E3\u6570\u636E\u7684\u5185\u90E8\u7ED3\u6784</li><li>\u63D0\u4F9B\u904D\u5386\u5BB9\u5668\uFF08\u96C6\u5408\uFF09\u7684\u80FD\u529B\u800C\u65E0\u9700\u6539\u53D8\u5BB9\u5668\u7684\u63A5\u53E3</li></ul><p>\u4E00\u4E2A\u8FED\u4EE3\u5668\u901A\u5E38\u9700\u8981\u5B9E\u73B0\u4EE5\u4E0B\u63A5\u53E3\uFF1A</p><ul><li>hasNext()\uFF1A\u5224\u65AD\u8FED\u4EE3\u662F\u5426\u7ED3\u675F\uFF0C\u8FD4\u56DEBoolean</li><li>next()\uFF1A\u67E5\u627E\u5E76\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u5143\u7D20</li></ul><p>\u4E3AJavascript\u7684\u6570\u7EC4\u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u53EF\u4EE5\u8FD9\u4E48\u5199\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const item = [1, &#39;red&#39;, false, 3.14];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index &lt; this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9A8C\u8BC1\u4E00\u4E0B\u8FED\u4EE3\u5668\u662F\u5426\u5DE5\u4F5C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const iterator = new Iterator(item);

while(iterator.hasNext()){
  console.log(iterator.next());
}
//\u8F93\u51FA\uFF1A1, red, false, 3.14

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ES6\u63D0\u4F9B\u4E86\u66F4\u7B80\u5355\u7684\u8FED\u4EE3\u5FAA\u73AF\u8BED\u6CD5 for...of\uFF0C\u4F7F\u7528\u8BE5\u8BED\u6CD5\u7684\u524D\u63D0\u662F\u64CD\u4F5C\u5BF9\u8C61\u9700\u8981\u5B9E\u73B0 \u53EF\u8FED\u4EE3\u534F\u8BAE\uFF08The iterable protocol\uFF09\uFF0C\u7B80\u5355\u8BF4\u5C31\u662F\u8BE5\u5BF9\u8C61\u6709\u4E2AKey\u4E3A Symbol.iterator \u7684\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2Aiterator\u5BF9\u8C61\u3002</p></blockquote><p>\u6BD4\u5982\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A Range \u7C7B\u7528\u4E8E\u5728\u67D0\u4E2A\u6570\u5B57\u533A\u95F4\u8FDB\u884C\u8FED\u4EE3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Range(start, end) {
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          if (start &lt; end) {
            return { value: start++, done: false };
          }
          return { done: true, value: end };
        }
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9A8C\u8BC1\u4E00\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for (num of Range(1, 5)) {
  console.log(num);
}
// \u8F93\u51FA\uFF1A1, 2, 3, 4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 7. \u89C2\u5BDF\u8005\u6A21\u5F0F</h3><blockquote><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\u53C8\u79F0\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\uFF08Publish/Subscribe Pattern\uFF09\uFF0C\u662F\u6211\u4EEC\u7ECF\u5E38\u63A5\u89E6\u5230\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u65E5\u5E38\u751F\u6D3B\u4E2D\u7684\u5E94\u7528\u4E5F\u6BD4\u6BD4\u7686\u662F\uFF0C\u6BD4\u5982\u4F60\u8BA2\u9605\u4E86\u67D0\u4E2A\u535A\u4E3B\u7684\u9891\u9053\uFF0C\u5F53\u6709\u5185\u5BB9\u66F4\u65B0\u65F6\u4F1A\u6536\u5230\u63A8\u9001\uFF1B\u53C8\u6BD4\u5982JavaScript\u4E2D\u7684\u4E8B\u4EF6\u8BA2\u9605\u54CD\u5E94\u673A\u5236\u3002\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u601D\u60F3\u7528\u4E00\u53E5\u8BDD\u63CF\u8FF0\u5C31\u662F\uFF1A\u88AB\u89C2\u5BDF\u5BF9\u8C61\uFF08subject\uFF09\u7EF4\u62A4\u4E00\u7EC4\u89C2\u5BDF\u8005\uFF08observer\uFF09\uFF0C\u5F53\u88AB\u89C2\u5BDF\u5BF9\u8C61\u72B6\u6001\u6539\u53D8\u65F6\uFF0C\u901A\u8FC7\u8C03\u7528\u89C2\u5BDF\u8005\u7684\u67D0\u4E2A\u65B9\u6CD5\u5C06\u8FD9\u4E9B\u53D8\u5316\u901A\u77E5\u5230\u89C2\u5BDF\u8005\u3002</p></blockquote><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E2DSubject\u5BF9\u8C61\u4E00\u822C\u9700\u8981\u5B9E\u73B0\u4EE5\u4E0BAPI\uFF1A</p><ul><li>subscribe(): \u63A5\u6536\u4E00\u4E2A\u89C2\u5BDF\u8005observer\u5BF9\u8C61\uFF0C\u4F7F\u5176\u8BA2\u9605\u81EA\u5DF1</li><li>unsubscribe(): \u63A5\u6536\u4E00\u4E2A\u89C2\u5BDF\u8005observer\u5BF9\u8C61\uFF0C\u4F7F\u5176\u53D6\u6D88\u8BA2\u9605\u81EA\u5DF1</li><li>fire(): \u89E6\u53D1\u4E8B\u4EF6\uFF0C\u901A\u77E5\u5230\u6240\u6709\u89C2\u5BDF\u8005</li></ul><p>\u7528JavaScript\u624B\u52A8\u5B9E\u73B0\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u88AB\u89C2\u5BDF\u8005
function Subject() {
  this.observers = [];
}

Subject.prototype = {
  // \u8BA2\u9605
  subscribe: function (observer) {
    this.observers.push(observer);
  },
  // \u53D6\u6D88\u8BA2\u9605
  unsubscribe: function (observerToRemove) {
    this.observers = this.observers.filter(observer =&gt; {
      return observer !== observerToRemove;
    })
  },
  // \u4E8B\u4EF6\u89E6\u53D1
  fire: function () {
    this.observers.forEach(observer =&gt; {
      observer.call();
    });
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9A8C\u8BC1\u4E00\u4E0B\u8BA2\u9605\u662F\u5426\u6210\u529F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const subject = new Subject();

function observer1() {
  console.log(&#39;Observer 1 Firing!&#39;);
}

function observer2() {
  console.log(&#39;Observer 2 Firing!&#39;);
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.fire();

//\u8F93\u51FA\uFF1A
Observer 1 Firing!
Observer 2 Firing!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9A8C\u8BC1\u4E00\u4E0B\u53D6\u6D88\u8BA2\u9605\u662F\u5426\u6210\u529F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>subject.unsubscribe(observer2);
subject.fire();

//\u8F93\u51FA\uFF1A
Observer 1 Firing!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u573A\u666F</p><ul><li>DOM\u4E8B\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>document.body.addEventListener(&#39;click&#39;, function() {
    console.log(&#39;hello world!&#39;);
});
document.body.click()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>vue \u54CD\u5E94\u5F0F</li></ul><p>\u4F18\u70B9</p><ul><li>\u652F\u6301\u7B80\u5355\u7684\u5E7F\u64AD\u901A\u4FE1\uFF0C\u81EA\u52A8\u901A\u77E5\u6240\u6709\u5DF2\u7ECF\u8BA2\u9605\u8FC7\u7684\u5BF9\u8C61</li><li>\u76EE\u6807\u5BF9\u8C61\u4E0E\u89C2\u5BDF\u8005\u4E4B\u95F4\u7684\u62BD\u8C61\u8026\u5408\u5173\u7CFB\u80FD\u5355\u72EC\u6269\u5C55\u4EE5\u53CA\u91CD\u7528</li><li>\u589E\u52A0\u4E86\u7075\u6D3B\u6027</li><li>\u89C2\u5BDF\u8005\u6A21\u5F0F\u6240\u505A\u7684\u5DE5\u4F5C\u5C31\u662F\u5728\u89E3\u8026\uFF0C\u8BA9\u8026\u5408\u7684\u53CC\u65B9\u90FD\u4F9D\u8D56\u4E8E\u62BD\u8C61\uFF0C\u800C\u4E0D\u662F\u4F9D\u8D56\u4E8E\u5177\u4F53\u3002\u4ECE\u800C\u4F7F\u5F97\u5404\u81EA\u7684\u53D8\u5316\u90FD\u4E0D\u4F1A\u5F71\u54CD\u5230\u53E6\u4E00\u8FB9\u7684\u53D8\u5316\u3002</li></ul><p>\u7F3A\u70B9</p><blockquote><p>\u8FC7\u5EA6\u4F7F\u7528\u4F1A\u5BFC\u81F4\u5BF9\u8C61\u4E0E\u5BF9\u8C61\u4E4B\u95F4\u7684\u8054\u7CFB\u5F31\u5316\uFF0C\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u96BE\u4EE5\u8DDF\u8E2A\u7EF4\u62A4\u548C\u7406\u89E3</p></blockquote><h3 id="_8-\u4E2D\u4ECB\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_8-\u4E2D\u4ECB\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 8. \u4E2D\u4ECB\u8005\u6A21\u5F0F</h3><ul><li>\u5728\u4E2D\u4ECB\u8005\u6A21\u5F0F\u4E2D\uFF0C\u4E2D\u4ECB\u8005\uFF08Mediator\uFF09\u5305\u88C5\u4E86\u4E00\u7CFB\u5217\u5BF9\u8C61\u76F8\u4E92\u4F5C\u7528\u7684\u65B9\u5F0F\uFF0C\u4F7F\u5F97\u8FD9\u4E9B\u5BF9\u8C61\u4E0D\u5FC5\u76F4\u63A5\u76F8\u4E92\u4F5C\u7528\uFF0C\u800C\u662F\u7531\u4E2D\u4ECB\u8005\u534F\u8C03\u5B83\u4EEC\u4E4B\u95F4\u7684\u4EA4\u4E92\uFF0C\u4ECE\u800C\u4F7F\u5B83\u4EEC\u53EF\u4EE5\u677E\u6563\u5076\u5408\u3002\u5F53\u67D0\u4E9B\u5BF9\u8C61\u4E4B\u95F4\u7684\u4F5C\u7528\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4E0D\u4F1A\u7ACB\u5373\u5F71\u54CD\u5176\u4ED6\u7684\u4E00\u4E9B\u5BF9\u8C61\u4E4B\u95F4\u7684\u4F5C\u7528\uFF0C\u4FDD\u8BC1\u8FD9\u4E9B\u4F5C\u7528\u53EF\u4EE5\u5F7C\u6B64\u72EC\u7ACB\u7684\u53D8\u5316\u3002</li><li>\u4E2D\u4ECB\u8005\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u6709\u4E00\u5B9A\u7684\u76F8\u4F3C\u6027\uFF0C\u90FD\u662F\u4E00\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u4E5F\u90FD\u662F\u96C6\u4E2D\u5F0F\u901A\u4FE1\uFF0C\u4E0D\u540C\u7684\u662F\u4E2D\u4ECB\u8005\u6A21\u5F0F\u662F\u5904\u7406\u540C\u7EA7\u5BF9\u8C61\u4E4B\u95F4\u7684\u4EA4\u4E92\uFF0C\u800C\u89C2\u5BDF\u8005\u6A21\u5F0F\u662F\u5904\u7406Observer\u548CSubject\u4E4B\u95F4\u7684\u4EA4\u4E92\u3002\u4E2D\u4ECB\u8005\u6A21\u5F0F\u6709\u4E9B\u50CF\u5A5A\u604B\u4E2D\u4ECB\uFF0C\u76F8\u4EB2\u5BF9\u8C61\u521A\u5F00\u59CB\u5E76\u4E0D\u80FD\u76F4\u63A5\u4EA4\u6D41\uFF0C\u800C\u662F\u8981\u901A\u8FC7\u4E2D\u4ECB\u53BB\u7B5B\u9009\u5339\u914D\u518D\u51B3\u5B9A\u8C01\u548C\u8C01\u89C1\u9762\u3002</li></ul><p>\u573A\u666F</p><blockquote><p>\u4F8B\u5982\u8D2D\u7269\u8F66\u9700\u6C42\uFF0C\u5B58\u5728\u5546\u54C1\u9009\u62E9\u8868\u5355\u3001\u989C\u8272\u9009\u62E9\u8868\u5355\u3001\u8D2D\u4E70\u6570\u91CF\u8868\u5355\u7B49\u7B49\uFF0C\u90FD\u4F1A\u89E6\u53D1change\u4E8B\u4EF6\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u4E2D\u4ECB\u8005\u6765\u8F6C\u53D1\u5904\u7406\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5B9E\u73B0\u5404\u4E2A\u4E8B\u4EF6\u95F4\u7684\u89E3\u8026\uFF0C\u4EC5\u4EC5\u7EF4\u62A4\u4E2D\u4ECB\u8005\u5BF9\u8C61\u5373\u53EF\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var goods = {   //\u624B\u673A\u5E93\u5B58
    &#39;red|32G&#39;: 3,
    &#39;red|64G&#39;: 1,
    &#39;blue|32G&#39;: 7,
    &#39;blue|32G&#39;: 6,
};
//\u4E2D\u4ECB\u8005
var mediator = (function() {
    var colorSelect = document.getElementById(&#39;colorSelect&#39;);
    var memorySelect = document.getElementById(&#39;memorySelect&#39;);
    var numSelect = document.getElementById(&#39;numSelect&#39;);
    return {
        changed: function(obj) {
            switch(obj){
                case colorSelect:
                    //TODO
                    break;
                case memorySelect:
                    //TODO
                    break;
                case numSelect:
                    //TODO
                    break;
            }
        }
    }
})();
colorSelect.onchange = function() {
    mediator.changed(this);
};
memorySelect.onchange = function() {
    mediator.changed(this);
};
numSelect.onchange = function() {
    mediator.changed(this);
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u804A\u5929\u5BA4\u91CC</li></ul><p>\u804A\u5929\u5BA4\u6210\u5458\u7C7B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  // \u53D1\u9001\u6D88\u606F
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },
  // \u63A5\u6536\u6D88\u606F
  receive: function (message, fromMember) {
    console.log(\`\${fromMember.name} to \${this.name}: \${message}\`);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u804A\u5929\u5BA4\u7C7B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Chatroom() {
  this.members = {};
}

Chatroom.prototype = {
  // \u589E\u52A0\u6210\u5458
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  // \u53D1\u9001\u6D88\u606F
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u4E00\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const chatroom = new Chatroom();
const bruce = new Member(&#39;bruce&#39;);
const frank = new Member(&#39;frank&#39;);

chatroom.addMember(bruce);
chatroom.addMember(frank);

bruce.send(&#39;Hey frank&#39;, frank);

//\u8F93\u51FA\uFF1Abruce to frank: hello frank

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9</p><ul><li>\u4F7F\u5404\u5BF9\u8C61\u4E4B\u95F4\u8026\u5408\u677E\u6563\uFF0C\u800C\u4E14\u53EF\u4EE5\u72EC\u7ACB\u5730\u6539\u53D8\u5B83\u4EEC\u4E4B\u95F4\u7684\u4EA4\u4E92</li><li>\u4E2D\u4ECB\u8005\u548C\u5BF9\u8C61\u4E00\u5BF9\u591A\u7684\u5173\u7CFB\u53D6\u4EE3\u4E86\u5BF9\u8C61\u4E4B\u95F4\u7684\u7F51\u72B6\u591A\u5BF9\u591A\u7684\u5173\u7CFB</li><li>\u5982\u679C\u5BF9\u8C61\u4E4B\u95F4\u7684\u590D\u6742\u8026\u5408\u5EA6\u5BFC\u81F4\u7EF4\u62A4\u5F88\u56F0\u96BE\uFF0C\u800C\u4E14\u8026\u5408\u5EA6\u968F\u9879\u76EE\u53D8\u5316\u589E\u901F\u5F88\u5FEB\uFF0C\u5C31\u9700\u8981\u4E2D\u4ECB\u8005\u91CD\u6784\u4EE3\u7801</li></ul><p>\u7F3A\u70B9</p><blockquote><p>\u7CFB\u7EDF\u4E2D\u4F1A\u65B0\u589E\u4E00\u4E2A\u4E2D\u4ECB\u8005\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u5BF9\u8C61\u4E4B\u95F4\u4EA4\u4E92\u7684\u590D\u6742\u6027\uFF0C\u8F6C\u79FB\u6210\u4E86\u4E2D\u4ECB\u8005\u5BF9\u8C61\u7684\u590D\u6742\u6027\uFF0C\u4F7F\u5F97\u4E2D\u4ECB\u8005\u5BF9\u8C61\u7ECF\u5E38\u662F\u5DE8\u5927\u7684\u3002\u4E2D\u4ECB \u8005\u5BF9\u8C61\u81EA\u8EAB\u5F80\u5F80\u5C31\u662F\u4E00\u4E2A\u96BE\u4EE5\u7EF4\u62A4\u7684\u5BF9\u8C61\u3002</p></blockquote><h3 id="_9-\u8BBF\u95EE\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_9-\u8BBF\u95EE\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 9. \u8BBF\u95EE\u8005\u6A21\u5F0F</h3><blockquote><p>\u8BBF\u95EE\u8005\u6A21\u5F0F \u662F\u4E00\u79CD\u5C06\u7B97\u6CD5\u4E0E\u5BF9\u8C61\u7ED3\u6784\u5206\u79BB\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u901A\u4FD7\u70B9\u8BB2\u5C31\u662F\uFF1A\u8BBF\u95EE\u8005\u6A21\u5F0F\u8BA9\u6211\u4EEC\u80FD\u591F\u5728\u4E0D\u6539\u53D8\u4E00\u4E2A\u5BF9\u8C61\u7ED3\u6784\u7684\u524D\u63D0\u4E0B\u80FD\u591F\u7ED9\u8BE5\u5BF9\u8C61\u589E\u52A0\u65B0\u7684\u903B\u8F91\uFF0C\u65B0\u589E\u7684\u903B\u8F91\u4FDD\u5B58\u5728\u4E00\u4E2A\u72EC\u7ACB\u7684\u8BBF\u95EE\u8005\u5BF9\u8C61\u4E2D\u3002\u8BBF\u95EE\u8005\u6A21\u5F0F\u5E38\u7528\u4E8E\u62D3\u5C55\u4E00\u4E9B\u7B2C\u4E09\u65B9\u7684\u5E93\u548C\u5DE5\u5177\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BBF\u95EE\u8005
class Visitor {
    constructor() {}
    visitConcreteElement(ConcreteElement) {
        ConcreteElement.operation()
    }
}
// \u5143\u7D20\u7C7B
class ConcreteElement{
    constructor() {
    }
    operation() {
       console.log(&quot;ConcreteElement.operation invoked&quot;);
    }
    accept(visitor) {
        visitor.visitConcreteElement(this)
    }
}
// client
let visitor = new Visitor()
let element = new ConcreteElement()
elementA.accept(visitor)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u8005\u6A21\u5F0F\u7684\u5B9E\u73B0\u6709\u4EE5\u4E0B\u51E0\u4E2A\u8981\u7D20\uFF1A</p><ul><li>Visitor Object\uFF1A\u8BBF\u95EE\u8005\u5BF9\u8C61\uFF0C\u62E5\u6709\u4E00\u4E2Avisit()\u65B9\u6CD5</li><li>Receiving Object\uFF1A\u63A5\u6536\u5BF9\u8C61\uFF0C\u62E5\u6709\u4E00\u4E2A accept() \u65B9\u6CD5</li><li>visit(receivingObj)\uFF1A\u7528\u4E8EVisitor\u63A5\u6536\u4E00\u4E2AReceiving Object</li><li>accept(visitor)\uFF1A\u7528\u4E8EReceving Object\u63A5\u6536\u4E00\u4E2AVisitor\uFF0C\u5E76\u901A\u8FC7\u8C03\u7528Visitor\u7684 visit() \u4E3A\u5176\u63D0\u4F9B\u83B7\u53D6Receiving Object\u6570\u636E\u7684\u80FD\u529B</li></ul><p>\u7B80\u5355\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Receiving Object\uFF1A

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (salary) {
    this.salary = salary;
  },
  accept: function (visitor) {
    visitor.visit(this);
  }
}
Visitor Object\uFF1A

function Visitor() { }

Visitor.prototype = {
  visit: function (employee) {
    employee.setSalary(employee.getSalary() * 2);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9A8C\u8BC1\u4E00\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const employee = new Employee(&#39;bruce&#39;, 1000);
const visitor = new Visitor();
employee.accept(visitor);

console.log(employee.getSalary());//\u8F93\u51FA\uFF1A2000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u573A\u666F</p><p>\u5BF9\u8C61\u7ED3\u6784\u4E2D\u5BF9\u8C61\u5BF9\u5E94\u7684\u7C7B\u5F88\u5C11\u6539\u53D8\uFF0C\u4F46\u7ECF\u5E38\u9700\u8981\u5728\u6B64\u5BF9\u8C61\u7ED3\u6784\u4E0A\u5B9A\u4E49\u65B0\u7684\u64CD\u4F5C</p><p>\u9700\u8981\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u7ED3\u6784\u4E2D\u7684\u5BF9\u8C61\u8FDB\u884C\u5F88\u591A\u4E0D\u540C\u7684\u5E76\u4E14\u4E0D\u76F8\u5173\u7684\u64CD\u4F5C\uFF0C\u800C\u9700\u8981\u907F\u514D\u8BA9\u8FD9\u4E9B\u64CD\u4F5C&quot;\u6C61\u67D3&quot;\u8FD9\u4E9B\u5BF9\u8C61\u7684\u7C7B\uFF0C\u4E5F\u4E0D\u5E0C\u671B\u5728\u589E\u52A0\u65B0\u64CD\u4F5C\u65F6\u4FEE\u6539\u8FD9\u4E9B\u7C7B\u3002</p><p>\u4F18\u70B9</p><ul><li>\u7B26\u5408\u5355\u4E00\u804C\u8D23\u539F\u5219</li><li>\u4F18\u79C0\u7684\u6269\u5C55\u6027</li><li>\u7075\u6D3B\u6027</li></ul><p>\u7F3A\u70B9</p><ul><li>\u5177\u4F53\u5143\u7D20\u5BF9\u8BBF\u95EE\u8005\u516C\u5E03\u7EC6\u8282\uFF0C\u8FDD\u53CD\u4E86\u8FEA\u7C73\u7279\u539F\u5219</li><li>\u8FDD\u53CD\u4E86\u4F9D\u8D56\u5012\u7F6E\u539F\u5219\uFF0C\u4F9D\u8D56\u4E86\u5177\u4F53\u7C7B\uFF0C\u6CA1\u6709\u4F9D\u8D56\u62BD\u8C61\u3002</li><li>\u5177\u4F53\u5143\u7D20\u53D8\u66F4\u6BD4\u8F83\u56F0\u96BE</li></ul>`,129),r=[d];function v(a,c){return i(),n("div",null,r)}var u=e(s,[["render",v],["__file","\u8BBE\u8BA1\u6A21\u5F0F.html.vue"]]);export{u as default};
