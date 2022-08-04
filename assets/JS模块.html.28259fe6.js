import{_ as n,o as d,c as l,a as e,d as s,b as a,e as c,r}from"./app.12353158.js";var o="/assets/20210309092826.3747f8b0.png",t="/assets/20220804152909.48b24c06.png",u="/assets/20220307225112.c8cd19da.png",v="/assets/20210309102015.2d473253.png",b="/assets/20210309102100.b3db44d1.png",m="/assets/20210309103243.772341e2.png",p="/assets/20210309103312.eb7d3aa8.png",h="/assets/20210309103358.817e73a0.png",g="/assets/20220307225252.e5d5971d.png",x="/assets/20210309114827.ba0ff833.png",f="/assets/v2-9540801abdfb378ae5120b0df9a96059_1440w.35202a02.jpg",y="/assets/20210320103701.aeebc87c.png";const q={},_=a(`<h1 id="js\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#js\u6A21\u5757" aria-hidden="true">#</a> JS\u6A21\u5757</h1><hr><h2 id="_1-\u6570\u636E\u7C7B\u578B\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u7C7B\u578B\u57FA\u7840" aria-hidden="true">#</a> 1 \u6570\u636E\u7C7B\u578B\u57FA\u7840</h2><h3 id="_1-1-js\u5185\u7F6E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-js\u5185\u7F6E\u7C7B\u578B" aria-hidden="true">#</a> 1.1 JS\u5185\u7F6E\u7C7B\u578B</h3><ul><li><code>JS</code>\xA0\u4E2D\u5206\u4E3A\u4E03\u79CD\u5185\u7F6E\u7C7B\u578B\uFF0C\u4E03\u79CD\u5185\u7F6E\u7C7B\u578B\u53C8\u5206\u4E3A\u4E24\u5927\u7C7B\u578B\uFF1A\u57FA\u672C\u7C7B\u578B\u548C\u5BF9\u8C61\uFF08<code>Object</code>\uFF09\u3002</li><li>\u57FA\u672C\u7C7B\u578B\u6709\u4E03\u79CD\uFF1A\xA0<code>null</code>\uFF0C<code>undefined</code>\uFF0C<code>boolean</code>\uFF0C<code>number</code>\uFF0C<code>string</code>\uFF0C<code>symbol</code>,\xA0<code>bigint</code>\u3002</li><li>\u5176\u4E2D\xA0<code>JS</code>\xA0\u7684\u6570\u5B57\u7C7B\u578B\u662F\u6D6E\u70B9\u7C7B\u578B\u7684\uFF0C\u6CA1\u6709\u6574\u578B\u3002\u5E76\u4E14\u6D6E\u70B9\u7C7B\u578B\u57FA\u4E8E\xA0<code>IEEE 754</code>\u6807\u51C6\u5B9E\u73B0\uFF0C\u5728\u4F7F\u7528\u4E2D\u4F1A\u9047\u5230\u67D0\u4E9B Bug\u3002<code>NaN</code>\xA0\u4E5F\u5C5E\u4E8E\xA0<code>number</code>\xA0\u7C7B\u578B\uFF0C\u5E76\u4E14\xA0<code>NaN</code>\xA0\u4E0D\u7B49\u4E8E\u81EA\u8EAB\u3002</li><li>\u5BF9\u4E8E\u57FA\u672C\u7C7B\u578B\u6765\u8BF4\uFF0C\u5982\u679C\u4F7F\u7528\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u53D8\u91CF\u53EA\u662F\u4E2A\u5B57\u9762\u91CF\uFF0C\u53EA\u6709\u5728\u5FC5\u8981\u7684\u65F6\u5019\u624D\u4F1A\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u7C7B\u578B\u3002</li></ul><p>\u5F15\u7528\u6570\u636E\u7C7B\u578B:</p><ul><li>\u5BF9\u8C61<code>Object</code>\uFF08\u5305\u542B\u666E\u901A\u5BF9\u8C61-<code>Object</code>\uFF0C\u6570\u7EC4\u5BF9\u8C61-<code>Array</code>\uFF0C\u6B63\u5219\u5BF9\u8C61-<code>RegExp</code>\uFF0C\u65E5\u671F\u5BF9\u8C61-<code>Date</code>\uFF0C\u6570\u5B66\u51FD\u6570-<code>Math</code>\uFF0C\u51FD\u6570\u5BF9\u8C61-<code>Function</code>\uFF09</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let a = 111 // \u8FD9\u53EA\u662F\u5B57\u9762\u91CF\uFF0C\u4E0D\u662F number \u7C7B\u578B
a.toString() // \u4F7F\u7528\u65F6\u5019\u624D\u4F1A\u8F6C\u6362\u4E3A\u5BF9\u8C61\u7C7B\u578B

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u8C61\uFF08<code>Object</code>\uFF09\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4F1A\u9047\u5230\u6D45\u62F7\u8D1D\u548C\u6DF1\u62F7\u8D1D\u7684\u95EE\u9898\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let a = { name: &#39;FE&#39; }
let b = a
b.name = &#39;EF&#39;
console.log(a.name) // EF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u51FA\u4E0B\u9762\u8FD0\u884C\u7684\u7ED3\u679C\uFF0C\u89E3\u91CA\u539F\u56E0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function test(person) {
  person.age = 26
  person = {
    name: &#39;hzj&#39;,
    age: 18
  }
  return person
}
const p1 = {
  name: &#39;fyq&#39;,
  age: 19
}
const p2 = test(p1)
console.log(p1) // -&gt; ?
console.log(p2) // -&gt; ?

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7ED3\u679C:
p1\uFF1A{name: &quot;fyq&quot;, age: 26}
p2\uFF1A{name: &quot;hzj&quot;, age: 18}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u539F\u56E0: \u5728\u51FD\u6570\u4F20\u53C2\u7684\u65F6\u5019\u4F20\u9012\u7684\u662F\u5BF9\u8C61\u5728\u5806\u4E2D\u7684\u5185\u5B58\u5730\u5740\u503C\uFF0Ctest\u51FD\u6570\u4E2D\u7684\u5B9E\u53C2person\u662Fp1\u5BF9\u8C61\u7684\u5185\u5B58\u5730\u5740\uFF0C\u901A\u8FC7\u8C03\u7528<code>person.age = 26</code>\u786E\u5B9E\u6539\u53D8\u4E86p1\u7684\u503C\uFF0C\u4F46\u968F\u540E<code>person</code>\u53D8\u6210\u4E86\u53E6\u4E00\u5757\u5185\u5B58\u7A7A\u95F4\u7684\u5730\u5740\uFF0C\u5E76\u4E14\u5728\u6700\u540E\u5C06\u8FD9\u53E6\u5916\u4E00\u4EFD\u5185\u5B58\u7A7A\u95F4\u7684\u5730\u5740\u8FD4\u56DE\uFF0C\u8D4B\u7ED9\u4E86p2\u3002</p></blockquote><h3 id="_1-2-null\u548Cundefined\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-2-null\u548Cundefined\u533A\u522B" aria-hidden="true">#</a> 1.2 null\u548Cundefined\u533A\u522B</h3><blockquote><p><code>Undefined</code>\u7C7B\u578B\u53EA\u6709\u4E00\u4E2A\u503C\uFF0C\u5373<code>undefined</code>\u3002\u5F53\u58F0\u660E\u7684\u53D8\u91CF\u8FD8\u672A\u88AB\u521D\u59CB\u5316\u65F6\uFF0C\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u4E3A<code>undefined</code>\u3002\u7528\u6CD5</p></blockquote><ul><li>\u53D8\u91CF\u88AB\u58F0\u660E\u4E86\uFF0C\u4F46\u6CA1\u6709\u8D4B\u503C\u65F6\uFF0C\u5C31\u7B49\u4E8E<code>undefined</code>\u3002</li><li>\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5E94\u8BE5\u63D0\u4F9B\u7684\u53C2\u6570\u6CA1\u6709\u63D0\u4F9B\uFF0C\u8BE5\u53C2\u6570\u7B49\u4E8E<code>undefined</code>\u3002</li><li>\u5BF9\u8C61\u6CA1\u6709\u8D4B\u503C\u7684\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u4E3A<code>undefined</code>\u3002</li><li>\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u8FD4\u56DE<code>undefined</code></li></ul><blockquote><p><code>Null</code>\u7C7B\u578B\u4E5F\u53EA\u6709\u4E00\u4E2A\u503C\uFF0C\u5373<code>null</code>\u3002<code>null</code>\u7528\u6765\u8868\u793A\u5C1A\u672A\u5B58\u5728\u7684\u5BF9\u8C61\uFF0C\u5E38\u7528\u6765\u8868\u793A\u51FD\u6570\u4F01\u56FE\u8FD4\u56DE\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u5BF9\u8C61\u3002\u7528\u6CD5</p></blockquote><ul><li>\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u8868\u793A\u8BE5\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u3002</li><li>\u4F5C\u4E3A\u5BF9\u8C61\u539F\u578B\u94FE\u7684\u7EC8\u70B9</li></ul><h3 id="_1-3-null\u662F\u5BF9\u8C61\u5417-\u4E3A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-3-null\u662F\u5BF9\u8C61\u5417-\u4E3A\u4EC0\u4E48" aria-hidden="true">#</a> 1.3 null\u662F\u5BF9\u8C61\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F</h3><p>\u7ED3\u8BBA:\xA0<code>null</code>\u4E0D\u662F\u5BF9\u8C61\u3002</p><blockquote><p>\u89E3\u91CA: \u867D\u7136\xA0<code>typeof null</code>\xA0\u4F1A\u8F93\u51FA object\uFF0C\u4F46\u662F\u8FD9\u53EA\u662F JS \u5B58\u5728\u7684\u4E00\u4E2A\u60A0\u4E45 Bug\u3002\u5728 JS \u7684\u6700\u521D\u7248\u672C\u4E2D\u4F7F\u7528\u7684\u662F 32 \u4F4D\u7CFB\u7EDF\uFF0C\u4E3A\u4E86\u6027\u80FD\u8003\u8651\u4F7F\u7528\u4F4E\u4F4D\u5B58\u50A8\u53D8\u91CF\u7684\u7C7B\u578B\u4FE1\u606F\uFF0C000 \u5F00\u5934\u4EE3\u8868\u662F\u5BF9\u8C61\u7136\u800C null \u8868\u793A\u4E3A\u5168\u96F6\uFF0C\u6240\u4EE5\u5C06\u5B83\u9519\u8BEF\u7684\u5224\u65AD\u4E3A object \u3002</p></blockquote><h3 id="_1-4-1-tostring-\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_1-4-1-tostring-\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u8C03\u7528" aria-hidden="true">#</a> 1.4 &#39;1&#39;.toString()\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u8C03\u7528\uFF1F</h3><p>\u5176\u5B9E\u5728\u8FD9\u4E2A\u8BED\u53E5\u8FD0\u884C\u7684\u8FC7\u7A0B\u4E2D\u505A\u4E86\u8FD9\u6837\u51E0\u4EF6\u4E8B\u60C5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var s = new Object(&#39;1&#39;);
s.toString();
s = null;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E00\u6B65: \u521B\u5EFAObject\u7C7B\u5B9E\u4F8B\u3002\u6CE8\u610F\u4E3A\u4EC0\u4E48\u4E0D\u662FString \uFF1F \u7531\u4E8ESymbol\u548CBigInt\u7684\u51FA\u73B0\uFF0C\u5BF9\u5B83\u4EEC\u8C03\u7528new\u90FD\u4F1A\u62A5\u9519\uFF0C\u76EE\u524DES6\u89C4\u8303\u4E5F\u4E0D\u5EFA\u8BAE\u7528new\u6765\u521B\u5EFA\u57FA\u672C\u7C7B\u578B\u7684\u5305\u88C5\u7C7B\u3002</li><li>\u7B2C\u4E8C\u6B65: \u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002</li><li>\u7B2C\u4E09\u6B65: \u6267\u884C\u5B8C\u65B9\u6CD5\u7ACB\u5373\u9500\u6BC1\u8FD9\u4E2A\u5B9E\u4F8B\u3002</li></ul><blockquote><p>\u6574\u4E2A\u8FC7\u7A0B\u4F53\u73B0\u4E86<code>\u57FA\u672C\u5305\u88C5\u7C7B\u578B</code>\u7684\u6027\u8D28\uFF0C\u800C\u57FA\u672C\u5305\u88C5\u7C7B\u578B\u6070\u6070\u5C5E\u4E8E<code>\u57FA\u672C\u6570\u636E\u7C7B\u578B</code>\uFF0C\u5305\u62ECBoolean, Number\u548CString\u3002</p></blockquote><h3 id="_1-5-0-1-0-2\u4E3A\u4EC0\u4E48\u4E0D\u7B49\u4E8E0-3" tabindex="-1"><a class="header-anchor" href="#_1-5-0-1-0-2\u4E3A\u4EC0\u4E48\u4E0D\u7B49\u4E8E0-3" aria-hidden="true">#</a> 1.5 0.1+0.2\u4E3A\u4EC0\u4E48\u4E0D\u7B49\u4E8E0.3\uFF1F</h3><blockquote><p>0.1\u548C0.2\u5728\u8F6C\u6362\u6210\u4E8C\u8FDB\u5236\u540E\u4F1A\u65E0\u9650\u5FAA\u73AF\uFF0C\u7531\u4E8E\u6807\u51C6\u4F4D\u6570\u7684\u9650\u5236\u540E\u9762\u591A\u4F59\u7684\u4F4D\u6570\u4F1A\u88AB\u622A\u6389\uFF0C\u6B64\u65F6\u5C31\u5DF2\u7ECF\u51FA\u73B0\u4E86\u7CBE\u5EA6\u7684\u635F\u5931\uFF0C\u76F8\u52A0\u540E\u56E0\u6D6E\u70B9\u6570\u5C0F\u6570\u4F4D\u7684\u9650\u5236\u800C\u622A\u65AD\u7684\u4E8C\u8FDB\u5236\u6570\u5B57\u5728\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u5C31\u4F1A\u53D8\u6210<code>0.30000000000000004</code></p></blockquote><h3 id="_1-6-\u5982\u4F55\u7406\u89E3bigint" tabindex="-1"><a class="header-anchor" href="#_1-6-\u5982\u4F55\u7406\u89E3bigint" aria-hidden="true">#</a> 1.6 \u5982\u4F55\u7406\u89E3BigInt</h3><p>\u4EC0\u4E48\u662FBigInt?</p><blockquote><p><code>BigInt</code>\u662F\u4E00\u79CD\u65B0\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u7528\u4E8E\u5F53\u6574\u6570\u503C\u5927\u4E8ENumber\u6570\u636E\u7C7B\u578B\u652F\u6301\u7684\u8303\u56F4\u65F6\u3002\u8FD9\u79CD\u6570\u636E\u7C7B\u578B\u5141\u8BB8\u6211\u4EEC\u5B89\u5168\u5730\u5BF9\u5927\u6574\u6570\u6267\u884C\u7B97\u672F\u64CD\u4F5C\uFF0C\u8868\u793A\u9AD8\u5206\u8FA8\u7387\u7684\u65F6\u95F4\u6233\uFF0C\u4F7F\u7528\u5927\u6574\u6570id\uFF0C\u7B49\u7B49\uFF0C\u800C\u4E0D\u9700\u8981\u4F7F\u7528\u5E93\u3002</p></blockquote><p>\u4E3A\u4EC0\u4E48\u9700\u8981BigInt?</p><p>\u5728JS\u4E2D\uFF0C\u6240\u6709\u7684\u6570\u5B57\u90FD\u4EE5\u53CC\u7CBE\u5EA664\u4F4D\u6D6E\u70B9\u683C\u5F0F\u8868\u793A\uFF0C\u90A3\u8FD9\u4F1A\u5E26\u6765\u4EC0\u4E48\u95EE\u9898\u5462\uFF1F</p><blockquote><p>\u8FD9\u5BFC\u81F4JS\u4E2D\u7684Number\u65E0\u6CD5\u7CBE\u786E\u8868\u793A\u975E\u5E38\u5927\u7684\u6574\u6570\uFF0C\u5B83\u4F1A\u5C06\u975E\u5E38\u5927\u7684\u6574\u6570\u56DB\u820D\u4E94\u5165\uFF0C\u786E\u5207\u5730\u8BF4\uFF0CJS\u4E2D\u7684<code>Number</code>\u7C7B\u578B\u53EA\u80FD\u5B89\u5168\u5730\u8868\u793A<code>-9007199254740991(-(2^53-1))\u548C9007199254740991\uFF08(2^53-1)\uFF09</code>\uFF0C\u4EFB\u4F55\u8D85\u51FA\u6B64\u8303\u56F4\u7684\u6574\u6570\u503C\u90FD\u53EF\u80FD\u5931\u53BB\u7CBE\u5EA6\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(999999999999999);  //=&gt;10000000000000000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\u4E5F\u4F1A\u6709\u4E00\u5B9A\u7684\u5B89\u5168\u6027\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>9007199254740992 === 9007199254740993;    // \u2192 true \u5C45\u7136\u662Ftrue!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4F55\u521B\u5EFA\u5E76\u4F7F\u7528BigInt\uFF1F</p><p>\u8981\u521B\u5EFA<code>BigInt</code>\uFF0C\u53EA\u9700\u8981\u5728\u6570\u5B57\u672B\u5C3E\u8FFD\u52A0<code>n</code>\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log( 9007199254740995n );    // \u2192 9007199254740995n	
console.log( 9007199254740995 );     // \u2192 9007199254740996

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u4E00\u79CD\u521B\u5EFA<code>BigInt</code>\u7684\u65B9\u6CD5\u662F\u7528<code>BigInt()</code>\u6784\u9020\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BigInt(&quot;9007199254740995&quot;);    // \u2192 9007199254740995n

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B80\u5355\u4F7F\u7528\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>10n + 20n;    // \u2192 30n	
10n - 20n;    // \u2192 -10n	
+10n;         // \u2192 TypeError: Cannot convert a BigInt value to a number	
-10n;         // \u2192 -10n	
10n * 20n;    // \u2192 200n	
20n / 10n;    // \u2192 2n	
23n % 10n;    // \u2192 3n	
10n ** 3n;    // \u2192 1000n	

const x = 10n;	
++x;          // \u2192 11n	
--x;          // \u2192 9n
console.log(typeof x);   //&quot;bigint&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u503C\u5F97\u8B66\u60D5\u7684\u70B9</p><blockquote><p><code>BigInt</code>\u4E0D\u652F\u6301\u4E00\u5143\u52A0\u53F7\u8FD0\u7B97\u7B26, \u8FD9\u53EF\u80FD\u662F\u67D0\u4E9B\u7A0B\u5E8F\u53EF\u80FD\u4F9D\u8D56\u4E8E + \u59CB\u7EC8\u751F\u6210\xA0<code>Number</code>\xA0\u7684\u4E0D\u53D8\u91CF\uFF0C\u6216\u8005\u629B\u51FA\u5F02\u5E38\u3002\u53E6\u5916\uFF0C\u66F4\u6539\xA0<code>+</code>\xA0\u7684\u884C\u4E3A\u4E5F\u4F1A\u7834\u574F\xA0<code>asm.js</code>\xA0\u4EE3\u7801\u3002</p></blockquote><p>\u56E0\u4E3A\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u53EF\u80FD\u4E22\u5931\u4FE1\u606F\uFF0C\u6240\u4EE5\u4E0D\u5141\u8BB8\u5728<code>bigint</code>\u548C\xA0<code>Number</code>\xA0\u4E4B\u95F4\u8FDB\u884C\u6DF7\u5408\u64CD\u4F5C\u3002\u5F53\u6DF7\u5408\u4F7F\u7528\u5927\u6574\u6570\u548C\u6D6E\u70B9\u6570\u65F6\uFF0C\u7ED3\u679C\u503C\u53EF\u80FD\u65E0\u6CD5\u7531<code>BigInt</code>\u6216<code>Number</code>\u7CBE\u786E\u8868\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>10 + 10n;    // \u2192 TypeError

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0D\u80FD\u5C06<code>BigInt</code>\u4F20\u9012\u7ED9<code>Web api</code>\u548C\u5185\u7F6E\u7684 JS \u51FD\u6570\uFF0C\u8FD9\u4E9B\u51FD\u6570\u9700\u8981\u4E00\u4E2A Number \u7C7B\u578B\u7684\u6570\u5B57\u3002\u5C1D\u8BD5\u8FD9\u6837\u505A\u4F1A\u62A5TypeError\u9519\u8BEF\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.max(2n, 4n, 6n);    // \u2192 TypeError

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5F53\xA0<code>Boolean</code>\xA0\u7C7B\u578B\u4E0E\xA0<code>BigInt</code>\xA0\u7C7B\u578B\u76F8\u9047\u65F6\uFF0C<code>BigInt</code>\xA0\u7684\u5904\u7406\u65B9\u5F0F\u4E0E<code>Number</code>\u7C7B\u4F3C\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0C\u53EA\u8981\u4E0D\u662F<code>0n</code>\uFF0C<code>BigInt</code>\u5C31\u88AB\u89C6\u4E3A<code>truthy</code>\u7684\u503C\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if(0n){//\u6761\u4EF6\u5224\u65AD\u4E3Afalse

}
if(3n){//\u6761\u4EF6\u4E3Atrue

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5143\u7D20\u90FD\u4E3ABigInt\u7684\u6570\u7EC4\u53EF\u4EE5\u8FDB\u884Csort\u3002</li><li><code>BigInt</code>\u53EF\u4EE5\u6B63\u5E38\u5730\u8FDB\u884C\u4F4D\u8FD0\u7B97\uFF0C\u5982<code>|</code>\u3001<code>&amp;</code>\u3001<code>&lt;&lt;</code>\u3001<code>&gt;&gt;</code>\u548C<code>^</code></li></ul><p>\u6D4F\u89C8\u5668\u517C\u5BB9\u6027</p><p>caniuse\u7684\u7ED3\u679C:</p><p><img src="`+o+`" alt=""></p><p>\u5176\u5B9E\u73B0\u5728\u7684\u517C\u5BB9\u6027\u5E76\u4E0D\u600E\u4E48\u597D\uFF0C\u53EA\u6709chrome67\u3001firefox\u3001Opera\u8FD9\u4E9B\u4E3B\u6D41\u5B9E\u73B0\uFF0C\u8981\u6B63\u5F0F\u6210\u4E3A\u89C4\u8303\uFF0C\u5176\u5B9E\u8FD8\u6709\u5F88\u957F\u7684\u8DEF\u8981\u8D70\u3002</p><h2 id="_2-\u6570\u636E\u7C7B\u578B\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u636E\u7C7B\u578B\u68C0\u6D4B" aria-hidden="true">#</a> 2 \u6570\u636E\u7C7B\u578B\u68C0\u6D4B</h2><h3 id="_2-1-typeof\u7C7B\u578B\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_2-1-typeof\u7C7B\u578B\u5224\u65AD" aria-hidden="true">#</a> 2.1 typeof\u7C7B\u578B\u5224\u65AD</h3><blockquote><p>\u5728\u5199\u4E1A\u52A1\u903B\u8F91\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u8981\u7528\u5230JS\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\uFF0C\u9762\u8BD5\u5E38\u89C1\u7684\u6848\u4F8B\u6DF1\u6D45\u62F7\u8D1D\u4E5F\u8981\u7528\u5230\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\u3002</p></blockquote><p>typeof</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof &#39;str&#39;);           // string
console.log(typeof undefined);       // undefined
console.log(typeof []);              // object
console.log(typeof {});              // object
console.log(typeof function(){});    // function
console.log(typeof null);            // object

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F18\u70B9\uFF1A\u80FD\u591F\u5FEB\u901F\u533A\u5206\u57FA\u672C\u6570\u636E\u7C7B\u578B \u7F3A\u70B9\uFF1A\u4E0D\u80FD\u5C06<code>Object</code>\u3001<code>Array</code>\u548C<code>Null</code>\u533A\u5206\uFF0C\u90FD\u8FD4\u56DE<code>object</code></p></blockquote><p>instanceof</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false
console.log(&#39;str&#39; instanceof String);                // false
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F18\u70B9\uFF1A\u80FD\u591F\u533A\u5206<code>Array</code>\u3001<code>Object</code>\u548C<code>Function</code>\uFF0C\u9002\u5408\u7528\u4E8E\u5224\u65AD\u81EA\u5B9A\u4E49\u7684\u7C7B\u5B9E\u4F8B\u5BF9\u8C61</li><li>\u7F3A\u70B9\uFF1A<code>Number</code>\uFF0C<code>Boolean</code>\uFF0C<code>String</code>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0D\u80FD\u5224\u65AD</li></ul><p>Object.prototype.toString.call()</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var toString = Object.prototype.toString;

console.log(toString.call(2));                      //[object Number]
console.log(toString.call(true));                   //[object Boolean]
console.log(toString.call(&#39;str&#39;));                  //[object String]
console.log(toString.call([]));                     //[object Array]
console.log(toString.call(function(){}));           //[object Function]
console.log(toString.call({}));                     //[object Object]
console.log(toString.call(undefined));              //[object Undefined]
console.log(toString.call(null));                   //[object Null]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F18\u70B9\uFF1A\u7CBE\u51C6\u5224\u65AD\u6570\u636E\u7C7B\u578B</li><li>\u7F3A\u70B9\uFF1A\u5199\u6CD5\u7E41\u7410\u4E0D\u5BB9\u6613\u8BB0\uFF0C\u63A8\u8350\u8FDB\u884C\u5C01\u88C5\u540E\u4F7F\u7528</li></ul><p>\u5224\u65AD\u662F\u5426\u662Fpromise\u5BF9\u8C61</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isPromise (val) {
    return (
      typeof val.then === &#39;function&#39; &amp;&amp;
      typeof val.catch === &#39;function&#39;
    )
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-typeof-\u4E8E-instanceof-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-2-typeof-\u4E8E-instanceof-\u533A\u522B" aria-hidden="true">#</a> 2.2 typeof \u4E8E instanceof \u533A\u522B</h3><blockquote><p><code>typeof</code>\xA0\u5BF9\u4E8E\u57FA\u672C\u7C7B\u578B\uFF0C\u9664\u4E86\xA0<code>null</code>\u90FD\u53EF\u4EE5\u663E\u793A\u6B63\u786E\u7684\u7C7B\u578B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>typeof 1 // &#39;number&#39;
typeof &#39;1&#39; // &#39;string&#39;
typeof undefined // &#39;undefined&#39;
typeof true // &#39;boolean&#39;
typeof Symbol() // &#39;symbol&#39;
typeof b // b \u6CA1\u6709\u58F0\u660E\uFF0C\u4F46\u662F\u8FD8\u4F1A\u663E\u793A undefined

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>typeof</code>\xA0\u5BF9\u4E8E\u5BF9\u8C61\uFF0C\u9664\u4E86\u51FD\u6570\u90FD\u4F1A\u663E\u793A\xA0<code>object</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>typeof [] // &#39;object&#39;
typeof {} // &#39;object&#39;
typeof console.log // &#39;function&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u4E8E\xA0<code>null</code>\xA0\u6765\u8BF4\uFF0C\u867D\u7136\u5B83\u662F\u57FA\u672C\u7C7B\u578B\uFF0C\u4F46\u662F\u4F1A\u663E\u793A\xA0<code>object</code>\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5B58\u5728\u5F88\u4E45\u4E86\u7684\xA0<code>Bug</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>typeof null // &#39;object&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>instanceof</code>\xA0\u53EF\u4EE5\u6B63\u786E\u7684\u5224\u65AD\u5BF9\u8C61\u7684\u7C7B\u578B\uFF0C\u56E0\u4E3A\u5185\u90E8\u673A\u5236\u662F\u901A\u8FC7\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E2D\u662F\u4E0D\u662F\u80FD\u627E\u5230\u7C7B\u578B\u7684\xA0<code>iprototype</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6211\u4EEC\u4E5F\u53EF\u4EE5\u8BD5\u7740\u5B9E\u73B0\u4E00\u4E0B instanceof
function _instanceof(left, right) {
    // \u7531\u4E8Einstance\u8981\u68C0\u6D4B\u7684\u662F\u67D0\u5BF9\u8C61\uFF0C\u9700\u8981\u6709\u4E00\u4E2A\u524D\u7F6E\u5224\u65AD\u6761\u4EF6
    //\u57FA\u672C\u6570\u636E\u7C7B\u578B\u76F4\u63A5\u8FD4\u56DEfalse
    if(typeof left !== &#39;object&#39; || left === null) return false;

    // \u83B7\u5F97\u7C7B\u578B\u7684\u539F\u578B
    let prototype = right.prototype
    // \u83B7\u5F97\u5BF9\u8C61\u7684\u539F\u578B
    left = left.__proto__
    // \u5224\u65AD\u5BF9\u8C61\u7684\u7C7B\u578B\u662F\u5426\u7B49\u4E8E\u7C7B\u578B\u7684\u539F\u578B
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}

console.log(&#39;test&#39;, _instanceof(null, Array)) // false
console.log(&#39;test&#39;, _instanceof([], Array)) // true
console.log(&#39;test&#39;, _instanceof(&#39;&#39;, Array)) // false
console.log(&#39;test&#39;, _instanceof({}, Object)) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-object-is\u548C-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-3-object-is\u548C-\u7684\u533A\u522B" aria-hidden="true">#</a> 2.3 Object.is\u548C===\u7684\u533A\u522B</h3><blockquote><p><code>Object</code>\u5728\u4E25\u683C\u7B49\u4E8E\u7684\u57FA\u7840\u4E0A\u4FEE\u590D\u4E86\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\u7684\u5931\u8BEF\uFF0C\u5177\u4F53\u6765\u8BF4\u5C31\u662F<code>+0</code>\u548C<code>-0</code>\uFF0C<code>NaN</code>\u548C<code>NaN</code>\u3002 \u6E90\u7801\u5982\u4E0B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function is(x, y) {
  if (x === y) {
    //\u8FD0\u884C\u52301/x === 1/y\u7684\u65F6\u5019x\u548Cy\u90FD\u4E3A0\uFF0C\u4F46\u662F1/+0 = +Infinity\uFF0C 1/-0 = -Infinity, \u662F\u4E0D\u4E00\u6837\u7684
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //NaN===NaN\u662Ffalse,\u8FD9\u662F\u4E0D\u5BF9\u7684\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u505A\u4E00\u4E2A\u62E6\u622A\uFF0Cx !== x\uFF0C\u90A3\u4E48\u4E00\u5B9A\u662F NaN, y \u540C\u7406
    //\u4E24\u4E2A\u90FD\u662FNaN\u7684\u65F6\u5019\u8FD4\u56DEtrue
    return x !== x &amp;&amp; y !== y;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_2-4-\u603B\u7ED3" aria-hidden="true">#</a> 2.4 \u603B\u7ED3</h3><ul><li><code>typeof</code><ul><li>\u76F4\u63A5\u5728\u8BA1\u7B97\u673A\u5E95\u5C42\u57FA\u4E8E\u6570\u636E\u7C7B\u578B\u7684\u503C\uFF08\u4E8C\u8FDB\u5236\uFF09\u8FDB\u884C\u68C0\u6D4B</li><li><code>typeof null</code>\u4E3A<code>object</code>\xA0\u539F\u56E0\u662F\u5BF9\u8C61\u5B58\u5728\u5728\u8BA1\u7B97\u673A\u4E2D\uFF0C\u90FD\u662F\u4EE5<code>000</code>\u5F00\u59CB\u7684\u4E8C\u8FDB\u5236\u5B58\u50A8\uFF0C\u6240\u4EE5\u68C0\u6D4B\u51FA\u6765\u7684\u7ED3\u679C\u662F\u5BF9\u8C61</li><li><code>typeof</code>\xA0\u666E\u901A\u5BF9\u8C61/\u6570\u7EC4\u5BF9\u8C61/\u6B63\u5219\u5BF9\u8C61/\u65E5\u671F\u5BF9\u8C61 \u90FD\u662F<code>object</code></li><li><code>typeof NaN === &#39;number&#39;</code></li></ul></li><li><code>instanceof</code><ul><li>\u68C0\u6D4B\u5F53\u524D\u5B9E\u4F8B\u662F\u5426\u5C5E\u4E8E\u8FD9\u4E2A\u7C7B\u7684</li><li>\u5E95\u5C42\u673A\u5236\uFF1A\u53EA\u8981\u5F53\u524D\u7C7B\u51FA\u73B0\u5728\u5B9E\u4F8B\u7684\u539F\u578B\u4E0A\uFF0C\u7ED3\u679C\u90FD\u662Ftrue</li><li>\u4E0D\u80FD\u68C0\u6D4B\u57FA\u672C\u6570\u636E\u7C7B\u578B</li></ul></li><li><code>constructor</code><ul><li>\u652F\u6301\u57FA\u672C\u7C7B\u578B</li><li>constructor\u53EF\u4EE5\u968F\u4FBF\u6539\uFF0C\u4E5F\u4E0D\u51C6</li></ul></li><li><code>Object.prototype.toString.call([val])</code><ul><li>\u8FD4\u56DE\u5F53\u524D\u5B9E\u4F8B\u6240\u5C5E\u7C7B\u4FE1\u606F</li></ul></li></ul><blockquote><p>\u5224\u65AD\xA0<code>Target</code>\xA0\u7684\u7C7B\u578B\uFF0C\u5355\u5355\u7528\xA0<code>typeof</code>\xA0\u5E76\u65E0\u6CD5\u5B8C\u5168\u6EE1\u8DB3\uFF0C\u8FD9\u5176\u5B9E\u5E76\u4E0D\u662F\xA0<code>bug</code>\uFF0C\u672C\u8D28\u539F\u56E0\u662F\xA0<code>JS</code>\xA0\u7684\u4E07\u7269\u7686\u5BF9\u8C61\u7684\u7406\u8BBA\u3002\u56E0\u6B64\u8981\u771F\u6B63\u5B8C\u7F8E\u5224\u65AD\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u533A\u5206\u5BF9\u5F85:</p></blockquote><ul><li>\u57FA\u672C\u7C7B\u578B(<code>null</code>): \u4F7F\u7528\xA0<code>String(null)</code></li><li>\u57FA\u672C\u7C7B\u578B(<code>string / number / boolean / undefined</code>) +\xA0<code>function</code>: - \u76F4\u63A5\u4F7F\u7528\xA0<code>typeof</code>\u5373\u53EF</li><li>\u5176\u4F59\u5F15\u7528\u7C7B\u578B(<code>Array / Date / RegExp Error</code>): \u8C03\u7528<code>toString</code>\u540E\u6839\u636E<code>[object XXX]</code>\u8FDB\u884C\u5224\u65AD</li></ul><p>\u5F88\u7A33\u7684\u5224\u65AD\u5C01\u88C5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let class2type = {}
&#39;Array Date RegExp Object Error&#39;.split(&#39; &#39;).forEach(e =&gt; class2type[ &#39;[object &#39; + e + &#39;]&#39; ] = e.toLowerCase())

function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === &#39;object&#39; ? class2type[ Object.prototype.toString.call(obj) ] || &#39;object&#39; : typeof obj
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6570\u636E\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 3 \u6570\u636E\u7C7B\u578B\u8F6C\u6362</h2><blockquote><p>\u5927\u5BB6\u90FD\u77E5\u9053 JS \u4E2D\u5728\u4F7F\u7528\u8FD0\u7B97\u7B26\u53F7\u6216\u8005\u5BF9\u6BD4\u7B26\u65F6\uFF0C\u4F1A\u81EA\u5E26\u9690\u5F0F\u8F6C\u6362\uFF0C\u89C4\u5219\u5982\u4E0B:</p></blockquote><h3 id="_3-1-\u8F6C\u5316\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8F6C\u5316\u89C4\u5219" aria-hidden="true">#</a> 3.1 \u8F6C\u5316\u89C4\u5219</h3><ul><li><code>-\u3001*\u3001/\u3001%</code>\uFF1A\u4E00\u5F8B\u8F6C\u6362\u6210\u6570\u503C\u540E\u8BA1\u7B97</li><li>+\uFF1A <ul><li>\u6570\u5B57 + \u5B57\u7B26\u4E32 = \u5B57\u7B26\u4E32\uFF0C \u8FD0\u7B97\u987A\u5E8F\u662F\u4ECE\u5DE6\u5230\u53F3</li><li>\u6570\u5B57 + \u5BF9\u8C61\uFF0C \u4F18\u5148\u8C03\u7528\u5BF9\u8C61\u7684<code>valueOf -&gt; toString</code></li><li>\u6570\u5B57 +\xA0<code>boolean/null</code>\xA0-&gt; \u6570\u5B57</li><li>\u6570\u5B57 +\xA0<code>undefined</code>\xA0-&gt;\xA0<code>NaN</code></li></ul></li><li><code>[1].toString() === &#39;1&#39;</code></li><li><code>{}.toString() === &#39;[object object]&#39;</code></li><li><code>NaN !== NaN</code>\xA0\u3001+<code>undefined</code>\xA0\u4E3A\xA0<code>NaN</code></li></ul><blockquote><p>\u9996\u5148\u6211\u4EEC\u8981\u77E5\u9053\uFF0C\u5728\xA0<code>JS</code>\xA0\u4E2D\u7C7B\u578B\u8F6C\u6362\u53EA\u6709\u4E09\u79CD\u60C5\u51B5\uFF0C\u5206\u522B\u662F\uFF1A</p></blockquote><ul><li>\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C</li><li>\u8F6C\u6362\u4E3A\u6570\u5B57</li><li>\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li></ul><p><img src="`+t+`" alt=""></p><h3 id="_3-2-\u8F6Cboolean" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8F6Cboolean" aria-hidden="true">#</a> 3.2 \u8F6CBoolean</h3><blockquote><p>\u5728\u6761\u4EF6\u5224\u65AD\u65F6\uFF0C\u9664\u4E86\xA0<code>undefined</code>\uFF0C<code>null</code>\uFF0C\xA0<code>false</code>\uFF0C\xA0<code>NaN</code>\uFF0C\xA0<code>&#39;&#39;</code>\uFF0C\xA0<code>0</code>\uFF0C\xA0<code>-0</code>\uFF0C\u5176\u4ED6\u6240\u6709\u503C\u90FD\u8F6C\u4E3A\xA0<code>true</code>\uFF0C\u5305\u62EC\u6240\u6709\u5BF9\u8C61</p></blockquote><h3 id="_3-3-\u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B\u662F\u6839\u636E\u4EC0\u4E48\u6D41\u7A0B\u8FD0\u884C\u7684" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B\u662F\u6839\u636E\u4EC0\u4E48\u6D41\u7A0B\u8FD0\u884C\u7684" aria-hidden="true">#</a> 3.3 \u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B\u662F\u6839\u636E\u4EC0\u4E48\u6D41\u7A0B\u8FD0\u884C\u7684</h3><blockquote><p>\u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B\uFF0C\u4F1A\u8C03\u7528\u5185\u7F6E\u7684<code>[ToPrimitive]</code>\u51FD\u6570\uFF0C\u5BF9\u4E8E\u8BE5\u51FD\u6570\u800C\u8A00\uFF0C\u5176\u903B\u8F91\u5982\u4E0B\uFF1A</p></blockquote><ul><li>\u5982\u679C\u6709<code>Symbol.toPrimitive()</code>\u65B9\u6CD5\uFF0C\u4F18\u5148\u8C03\u7528\u518D\u8FD4\u56DE</li><li>\u8C03\u7528<code>valueOf()</code>\uFF0C\u5982\u679C\u8F6C\u6362\u4E3A\u539F\u59CB\u7C7B\u578B\uFF0C\u5219\u8FD4\u56DE</li><li>\u8C03\u7528<code>toString()</code>\uFF0C\u5982\u679C\u8F6C\u6362\u4E3A\u539F\u59CB\u7C7B\u578B\uFF0C\u5219\u8FD4\u56DE</li><li>\u5982\u679C\u90FD\u6CA1\u6709\u8FD4\u56DE\u539F\u59CB\u7C7B\u578B\uFF0C\u4F1A\u62A5\u9519</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj = {
  value: 3,
  valueOf() {
    return 4;
  },
  toString() {
    return &#39;5&#39;
  },
  [Symbol.toPrimitive]() {
    return 6
  }
}
console.log(obj + 1); // \u8F93\u51FA7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u5982\u4F55\u8BA9if-a-1-a-2-\u6761\u4EF6\u6210\u7ACB" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5982\u4F55\u8BA9if-a-1-a-2-\u6761\u4EF6\u6210\u7ACB" aria-hidden="true">#</a> 3.4 \u5982\u4F55\u8BA9if(a == 1 &amp;&amp; a == 2)\u6761\u4EF6\u6210\u7ACB</h3><p>\u5176\u5B9E\u5C31\u662F\u4E0A\u4E00\u4E2A\u95EE\u9898\u7684\u5E94\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = {
  value: 0,
  valueOf: function() {
    this.value++;
    return this.value;
  }
};
console.log(a == 1 &amp;&amp; a == 2);//true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-\u56DB\u5219\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_3-5-\u56DB\u5219\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 3.5 \u56DB\u5219\u8FD0\u7B97\u7B26</h3><blockquote><p>\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9\uFF1A</p></blockquote><ul><li>\u8FD0\u7B97\u4E2D\u5176\u4E2D\u4E00\u65B9\u4E3A\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u5C31\u4F1A\u628A\u53E6\u4E00\u65B9\u4E5F\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li><li>\u5982\u679C\u4E00\u65B9\u4E0D\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57\uFF0C\u90A3\u4E48\u4F1A\u5C06\u5B83\u8F6C\u6362\u4E3A\u6570\u5B57\u6216\u8005\u5B57\u7B26\u4E32</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1 + &#39;1&#39; // &#39;11&#39;
true + true // 2
4 + [1,2,3] // &quot;41,2,3&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u4E8E\u7B2C\u4E00\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E00\uFF0C\u6240\u4EE5\u5C06\u6570\u5B57\xA0<code>1</code>\xA0\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5F97\u5230\u7ED3\u679C\xA0<code>&#39;11&#39;</code></li><li>\u5BF9\u4E8E\u7B2C\u4E8C\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E8C\uFF0C\u6240\u4EE5\u5C06\xA0<code>true</code>\xA0\u8F6C\u4E3A\u6570\u5B57\xA0<code>1</code></li><li>\u5BF9\u4E8E\u7B2C\u4E09\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E8C\uFF0C\u6240\u4EE5\u5C06\u6570\u7EC4\u901A\u8FC7\xA0<code>toString</code>\u8F6C\u4E3A\u5B57\u7B26\u4E32\xA0<code>1,2,3</code>\uFF0C\u5F97\u5230\u7ED3\u679C\xA0<code>41,2,3</code></li></ul><blockquote><p>\u53E6\u5916\u5BF9\u4E8E\u52A0\u6CD5\u8FD8\u9700\u8981\u6CE8\u610F\u8FD9\u4E2A\u8868\u8FBE\u5F0F\xA0<code>&#39;a&#39; + + &#39;b&#39;</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;a&#39; + + &#39;b&#39; // -&gt; &quot;aNaN&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u56E0\u4E3A\xA0<code>+ &#39;b&#39;</code>\xA0\u7B49\u4E8E\xA0<code>NaN</code>\uFF0C\u6240\u4EE5\u7ED3\u679C\u4E3A\xA0<code>&quot;aNaN&quot;</code>\uFF0C\u4F60\u53EF\u80FD\u4E5F\u4F1A\u5728\u4E00\u4E9B\u4EE3\u7801\u4E2D\u770B\u5230\u8FC7\xA0<code>+ &#39;1&#39;</code>\u7684\u5F62\u5F0F\u6765\u5FEB\u901F\u83B7\u53D6\xA0<code>number</code>\xA0\u7C7B\u578B\u3002</li><li>\u90A3\u4E48\u5BF9\u4E8E\u9664\u4E86\u52A0\u6CD5\u7684\u8FD0\u7B97\u7B26\u6765\u8BF4\uFF0C\u53EA\u8981\u5176\u4E2D\u4E00\u65B9\u662F\u6570\u5B57\uFF0C\u90A3\u4E48\u53E6\u4E00\u65B9\u5C31\u4F1A\u88AB\u8F6C\u4E3A\u6570\u5B57</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>4 * &#39;3&#39; // 12
4 * [] // 0
4 * [1, 2] // NaN

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-\u6BD4\u8F83\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_3-6-\u6BD4\u8F83\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 3.6 \u6BD4\u8F83\u8FD0\u7B97\u7B26</h3><ul><li>\u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u5C31\u901A\u8FC7\xA0<code>toPrimitive</code>\xA0\u8F6C\u6362\u5BF9\u8C61</li><li>\u5982\u679C\u662F\u5B57\u7B26\u4E32\uFF0C\u5C31\u901A\u8FC7\xA0<code>unicode</code>\xA0\u5B57\u7B26\u7D22\u5F15\u6765\u6BD4\u8F83</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let a = {
  valueOf() {
    return 0
  },
  toString() {
    return &#39;1&#39;
  }
}
a &gt; -1 // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728\u4EE5\u4E0A\u4EE3\u7801\u4E2D\uFF0C\u56E0\u4E3A\xA0<code>a</code>\xA0\u662F\u5BF9\u8C61\uFF0C\u6240\u4EE5\u4F1A\u901A\u8FC7\xA0<code>valueOf</code>\xA0\u8F6C\u6362\u4E3A\u539F\u59CB\u7C7B\u578B\u518D\u6BD4\u8F83\u503C\u3002</p></blockquote><h3 id="_3-7-\u7ED3\u679C\u662F\u4EC0\u4E48-\u4E3A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_3-7-\u7ED3\u679C\u662F\u4EC0\u4E48-\u4E3A\u4EC0\u4E48" aria-hidden="true">#</a> 3.7 [] == ![]\u7ED3\u679C\u662F\u4EC0\u4E48\uFF1F\u4E3A\u4EC0\u4E48\uFF1F</h3><ul><li><code>==</code>\xA0\u4E2D\uFF0C\u5DE6\u53F3\u4E24\u8FB9\u90FD\u9700\u8981\u8F6C\u6362\u4E3A\u6570\u5B57\u7136\u540E\u8FDB\u884C\u6BD4\u8F83</li><li><code>[]</code>\u8F6C\u6362\u4E3A\u6570\u5B57\u4E3A<code>0</code></li><li><code>![]</code>\xA0\u9996\u5148\u662F\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\uFF0C\u7531\u4E8E<code>[]</code>\u4F5C\u4E3A\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\u4E3A<code>true</code></li><li>\u56E0\u6B64<code>![]</code>\u4E3A<code>false</code>\uFF0C\u8FDB\u800C\u5728\u8F6C\u6362\u6210\u6570\u5B57\uFF0C\u53D8\u4E3A<code>0</code></li><li><code>0 == 0</code>\xA0\uFF0C \u7ED3\u679C\u4E3A<code>true</code></li></ul><h3 id="_3-8-\u548C-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-8-\u548C-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 3.8 == \u548C ===\u6709\u4EC0\u4E48\u533A\u522B</h3><blockquote><p><code>===</code>\u53EB\u505A\u4E25\u683C\u76F8\u7B49\uFF0C\u662F\u6307\uFF1A\u5DE6\u53F3\u4E24\u8FB9\u4E0D\u4EC5\u503C\u8981\u76F8\u7B49\uFF0C\u7C7B\u578B\u4E5F\u8981\u76F8\u7B49\uFF0C\u4F8B\u5982<code>&#39;1&#39;===1</code>\u7684\u7ED3\u679C\u662F<code>false</code>\uFF0C\u56E0\u4E3A\u4E00\u8FB9\u662F<code>string</code>\uFF0C\u53E6\u4E00\u8FB9\u662F<code>number</code></p></blockquote><p>==\u4E0D\u50CF===\u90A3\u6837\u4E25\u683C\uFF0C\u5BF9\u4E8E\u4E00\u822C\u60C5\u51B5\uFF0C\u53EA\u8981\u503C\u76F8\u7B49\uFF0C\u5C31\u8FD4\u56DEtrue\uFF0C\u4F46==\u8FD8\u6D89\u53CA\u4E00\u4E9B\u7C7B\u578B\u8F6C\u6362\uFF0C\u5B83\u7684\u8F6C\u6362\u89C4\u5219\u5982\u4E0B</p><ul><li>\u4E24\u8FB9\u7684\u7C7B\u578B\u662F\u5426\u76F8\u540C\uFF0C\u76F8\u540C\u7684\u8BDD\u5C31\u6BD4\u8F83\u503C\u7684\u5927\u5C0F\uFF0C\u4F8B\u5982<code>1==2</code>\uFF0C\u8FD4\u56DE<code>false</code></li><li>\u5224\u65AD\u7684\u662F\u5426\u662F<code>null</code>\u548C<code>undefined</code>\uFF0C\u662F\u7684\u8BDD\u5C31\u8FD4\u56DEtrue</li><li>\u5224\u65AD\u7684\u7C7B\u578B\u662F\u5426\u662F<code>String</code>\u548C<code>Number</code>\uFF0C\u662F\u7684\u8BDD\uFF0C\u628A<code>String</code>\u7C7B\u578B\u8F6C\u6362\u6210<code>Number</code>\uFF0C\u518D\u8FDB\u884C\u6BD4\u8F83</li><li>\u5224\u65AD\u5176\u4E2D\u4E00\u65B9\u662F\u5426\u662F<code>Boolean</code>\uFF0C\u662F\u7684\u8BDD\u5C31\u628A<code>Boolean</code>\u8F6C\u6362\u6210<code>N</code>umber\`\uFF0C\u518D\u8FDB\u884C\u6BD4\u8F83</li><li>\u5982\u679C\u5176\u4E2D\u4E00\u65B9\u4E3A<code>Object</code>\uFF0C\u4E14\u53E6\u4E00\u65B9\u4E3A<code>String</code>\u3001<code>Number</code>\u6216\u8005<code>Symbol</code>\uFF0C\u4F1A\u5C06<code>Object</code>\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u518D\u8FDB\u884C\u6BD4\u8F83</li></ul><h2 id="_4-\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#_4-\u95ED\u5305" aria-hidden="true">#</a> 4 \u95ED\u5305</h2><blockquote><p>\u7EA2\u5B9D\u4E66(p178)\u4E0A\u5BF9\u4E8E\u95ED\u5305\u7684\u5B9A\u4E49\uFF1A\u95ED\u5305\u662F\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u7684\u51FD\u6570\uFF0C</p></blockquote><blockquote><p>MDN \u5BF9\u95ED\u5305\u7684\u5B9A\u4E49\u4E3A\uFF1A\u95ED\u5305\u662F\u6307\u90A3\u4E9B\u80FD\u591F\u8BBF\u95EE\u81EA\u7531\u53D8\u91CF\u7684\u51FD\u6570\u3002</p><ul><li>\uFF08\u5176\u4E2D\u81EA\u7531\u53D8\u91CF\uFF0C\u6307\u5728\u51FD\u6570\u4E2D\u4F7F\u7528\u7684\uFF0C\u4F46\u65E2\u4E0D\u662F\u51FD\u6570\u53C2\u6570arguments\u4E5F\u4E0D\u662F\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF\u7684\u53D8\u91CF\uFF0C\u5176\u5B9E\u5C31\u662F\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u3002\uFF09</li></ul></blockquote><h3 id="_4-1-\u95ED\u5305\u4EA7\u751F\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_4-1-\u95ED\u5305\u4EA7\u751F\u7684\u539F\u56E0" aria-hidden="true">#</a> 4.1 \u95ED\u5305\u4EA7\u751F\u7684\u539F\u56E0</h3><blockquote><p>\u9996\u5148\u8981\u660E\u767D\u4F5C\u7528\u57DF\u94FE\u7684\u6982\u5FF5\uFF0C\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u5728ES5\u4E2D\u53EA\u5B58\u5728\u4E24\u79CD\u4F5C\u7528\u57DF------------<code>\u5168\u5C40\u4F5C\u7528\u57DF</code>\u548C<code>\u51FD\u6570\u4F5C\u7528\u57DF</code>\uFF0C\u5F53\u8BBF\u95EE\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u89E3\u91CA\u5668\u4F1A\u9996\u5148\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u67E5\u627E\u6807\u793A\u7B26\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5C31\u53BB\u7236\u4F5C\u7528\u57DF\u627E\uFF0C\u76F4\u5230\u627E\u5230\u8BE5\u53D8\u91CF\u7684\u6807\u793A\u7B26\u6216\u8005\u4E0D\u5728\u7236\u4F5C\u7528\u57DF\u4E2D\uFF0C\u8FD9\u5C31\u662F\u4F5C\u7528\u57DF\u94FE\uFF0C\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u6BCF\u4E00\u4E2A\u5B50\u51FD\u6570\u90FD\u4F1A\u62F7\u8D1D\u4E0A\u7EA7\u7684\u4F5C\u7528\u57DF\uFF0C\u5F62\u6210\u4E00\u4E2A\u4F5C\u7528\u57DF\u7684\u94FE\u6761\u3002 \u6BD4\u5982:</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1;
function f1() {
  var a = 2
  function f2() {
    var a = 3;
    console.log(a);//3
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C<code>f1</code>\u7684\u4F5C\u7528\u57DF\u6307\u5411\u6709\u5168\u5C40\u4F5C\u7528\u57DF(<code>window</code>)\u548C\u5B83\u672C\u8EAB\uFF0C\u800C<code>f2</code>\u7684\u4F5C\u7528\u57DF\u6307\u5411\u5168\u5C40\u4F5C\u7528\u57DF(<code>window</code>)\u3001<code>f1</code>\u548C\u5B83\u672C\u8EAB\u3002\u800C\u4E14\u4F5C\u7528\u57DF\u662F\u4ECE\u6700\u5E95\u5C42\u5411\u4E0A\u627E\uFF0C\u76F4\u5230\u627E\u5230\u5168\u5C40\u4F5C\u7528\u57DF<code>window</code>\u4E3A\u6B62\uFF0C\u5982\u679C\u5168\u5C40\u8FD8\u6CA1\u6709\u7684\u8BDD\u5C31\u4F1A\u62A5\u9519\u3002\u5C31\u8FD9\u4E48\u7B80\u5355\u4E00\u4EF6\u4E8B\u60C5</p></blockquote><p>\u95ED\u5305\u4EA7\u751F\u7684\u672C\u8D28\u5C31\u662F\uFF0C\u5F53\u524D\u73AF\u5883\u4E2D\u5B58\u5728\u6307\u5411\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u5F15\u7528\u3002\u8FD8\u662F\u4E3E\u4E0A\u9762\u7684\u4F8B\u5B50:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function f1() {
  var a = 2
  function f2() {
    console.log(a);//2
  }
  return f2;
}
var x = f1();
x();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u91CCx\u4F1A\u62FF\u5230\u7236\u7EA7\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\uFF0C\u8F93\u51FA2\u3002\u56E0\u4E3A\u5728\u5F53\u524D\u73AF\u5883\u4E2D\uFF0C\u542B\u6709\u5BF9f2\u7684\u5F15\u7528\uFF0Cf2\u6070\u6070\u5F15\u7528\u4E86window\u3001f1\u548Cf2\u7684\u4F5C\u7528\u57DF\u3002\u56E0\u6B64f2\u53EF\u4EE5\u8BBF\u95EE\u5230f1\u7684\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u3002</p></blockquote><ul><li>\u90A3\u662F\u4E0D\u662F\u53EA\u6709\u8FD4\u56DE\u51FD\u6570\u624D\u7B97\u662F\u4EA7\u751F\u4E86\u95ED\u5305\u5462\uFF1F</li><li>\u56DE\u5230\u95ED\u5305\u7684\u672C\u8D28\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u8BA9\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u5F15\u7528\u5B58\u5728\u5373\u53EF\uFF0C\u56E0\u6B64\u6211\u4EEC\u8FD8\u53EF\u4EE5\u8FD9\u4E48\u505A\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var f3;
function f1() {
  var a = 2
  f3 = function() {
    console.log(a);
  }
}
f1();
f3();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BA9<code>f1</code>\u6267\u884C\uFF0C\u7ED9<code>f3</code>\u8D4B\u503C\u540E\uFF0C\u7B49\u4E8E\u8BF4\u73B0\u5728<code>f3</code>\u62E5\u6709\u4E86<code>window\u3001f1\u548Cf3\u672C\u8EAB\u8FD9\u51E0\u4E2A\u4F5C\u7528\u57DF\u7684\u8BBF\u95EE\u6743\u9650</code>\uFF0C\u8FD8\u662F\u81EA\u5E95\u5411\u4E0A\u67E5\u627E\uFF0C\u6700\u8FD1\u662F\u5728<code>f1</code>\u4E2D\u627E\u5230\u4E86<code>a</code>,\u56E0\u6B64\u8F93\u51FA2\u3002</li><li>\u5728\u8FD9\u91CC\u662F\u5916\u9762\u7684\u53D8\u91CF<code>f3</code>\u5B58\u5728\u7740\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u5F15\u7528\uFF0C\u56E0\u6B64\u4EA7\u751F\u4E86\u95ED\u5305\uFF0C\u5F62\u5F0F\u53D8\u4E86\uFF0C\u672C\u8D28\u6CA1\u6709\u6539\u53D8</li></ul><h3 id="_4-2-\u95ED\u5305\u6709\u54EA\u4E9B\u8868\u73B0\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-2-\u95ED\u5305\u6709\u54EA\u4E9B\u8868\u73B0\u5F62\u5F0F" aria-hidden="true">#</a> 4.2 \u95ED\u5305\u6709\u54EA\u4E9B\u8868\u73B0\u5F62\u5F0F</h3><p>\u660E\u767D\u4E86\u672C\u8D28\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u6765\u770B\u770B\uFF0C\u5728\u771F\u5B9E\u7684\u573A\u666F\u4E2D\uFF0C\u7A76\u7ADF\u5728\u54EA\u4E9B\u5730\u65B9\u80FD\u4F53\u73B0\u95ED\u5305\u7684\u5B58\u5728\uFF1F</p><ol><li>\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u3002\u521A\u521A\u5DF2\u7ECF\u4E3E\u4F8B\u3002</li><li>\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u4F20\u9012</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1;
function foo(){
  var a = 2;
  function baz(){
    console.log(a);
  }
  bar(baz);
}
function bar(fn){
  // \u8FD9\u5C31\u662F\u95ED\u5305
  fn();
}
// \u8F93\u51FA2\uFF0C\u800C\u4E0D\u662F1
foo();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u5728\u5B9A\u65F6\u5668\u3001\u4E8B\u4EF6\u76D1\u542C\u3001Ajax\u8BF7\u6C42\u3001\u8DE8\u7A97\u53E3\u901A\u4FE1\u3001<code>Web Workers</code>\u6216\u8005\u4EFB\u4F55\u5F02\u6B65\u4E2D\uFF0C\u53EA\u8981\u4F7F\u7528\u4E86\u56DE\u8C03\u51FD\u6570\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5728\u4F7F\u7528\u95ED\u5305</li></ol><p>\u4EE5\u4E0B\u7684\u95ED\u5305\u4FDD\u5B58\u7684\u4EC5\u4EC5\u662Fwindow\u548C\u5F53\u524D\u4F5C\u7528\u57DF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u65F6\u5668
setTimeout(function timeHandler(){
  console.log(&#39;111&#39;);
}\uFF0C100)

// \u4E8B\u4EF6\u76D1\u542C
$(&#39;#app&#39;).click(function(){
  console.log(&#39;DOM Listener&#39;);
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>IIFE</code>(\u7ACB\u5373\u6267\u884C\u51FD\u6570\u8868\u8FBE\u5F0F)\u521B\u5EFA\u95ED\u5305, \u4FDD\u5B58\u4E86\u5168\u5C40\u4F5C\u7528\u57DF<code>window</code>\u548C\u5F53\u524D\u51FD\u6570\u7684\u4F5C\u7528\u57DF\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8BBF\u95EE\u5168\u5C40\u7684\u53D8\u91CF</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 2;
(function IIFE(){
  // \u8F93\u51FA2
  console.log(a);
})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u5982\u4F55\u89E3\u51B3\u4E0B\u9762\u7684\u5FAA\u73AF\u8F93\u51FA\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5982\u4F55\u89E3\u51B3\u4E0B\u9762\u7684\u5FAA\u73AF\u8F93\u51FA\u95EE\u9898" aria-hidden="true">#</a> 4.3 \u5982\u4F55\u89E3\u51B3\u4E0B\u9762\u7684\u5FAA\u73AF\u8F93\u51FA\u95EE\u9898</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(var i = 1; i &lt;= 5; i ++){
  setTimeout(function timer(){
    console.log(i)
  }, 0)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u4F1A\u5168\u90E8\u8F93\u51FA6\uFF1F\u5982\u4F55\u6539\u8FDB\uFF0C\u8BA9\u5B83\u8F93\u51FA1\uFF0C2\uFF0C3\uFF0C4\uFF0C5\uFF1F(\u65B9\u6CD5\u8D8A\u591A\u8D8A\u597D) \u56E0\u4E3AsetTimeout\u4E3A\u5B8F\u4EFB\u52A1\uFF0C\u7531\u4E8EJS\u4E2D\u5355\u7EBF\u7A0BeventLoop\u673A\u5236\uFF0C\u5728\u4E3B\u7EBF\u7A0B\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\u624D\u53BB\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u56E0\u6B64\u5FAA\u73AF\u7ED3\u675F\u540EsetTimeout\u4E2D\u7684\u56DE\u8C03\u624D\u4F9D\u6B21\u6267\u884C\uFF0C\u4F46\u8F93\u51FAi\u7684\u65F6\u5019\u5F53\u524D\u4F5C\u7528\u57DF\u6CA1\u6709\uFF0C\u5F80\u4E0A\u4E00\u7EA7\u518D\u627E\uFF0C\u53D1\u73B0\u4E86i,\u6B64\u65F6\u5FAA\u73AF\u5DF2\u7ECF\u7ED3\u675F\uFF0Ci\u53D8\u6210\u4E866\u3002\u56E0\u6B64\u4F1A\u5168\u90E8\u8F93\u51FA6\u3002</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><ol><li>\u5229\u7528IIFE(\u7ACB\u5373\u6267\u884C\u51FD\u6570\u8868\u8FBE\u5F0F)\u5F53\u6BCF\u6B21for\u5FAA\u73AF\u65F6\uFF0C\u628A\u6B64\u65F6\u7684i\u53D8\u91CF\u4F20\u9012\u5230\u5B9A\u65F6\u5668\u4E2D</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(var i = 1;i &lt;= 5;i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    }, 0)
  })(i)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u7ED9\u5B9A\u65F6\u5668\u4F20\u5165\u7B2C\u4E09\u4E2A\u53C2\u6570, \u4F5C\u4E3A<code>timer</code>\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u51FD\u6570\u53C2\u6570</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(var i=1;i&lt;=5;i++){
  setTimeout(function timer(j){
    console.log(j)
  }, 0, i)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u4F7F\u7528ES6\u4E2D\u7684let</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(let i = 1; i &lt;= 5; i++){
  setTimeout(function timer(){
    console.log(i)
  },0)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>let\u4F7FJS\u53D1\u751F\u9769\u547D\u6027\u7684\u53D8\u5316\uFF0C\u8BA9JS\u6709\u51FD\u6570\u4F5C\u7528\u57DF\u53D8\u4E3A\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u7528let\u540E\u4F5C\u7528\u57DF\u94FE\u4E0D\u590D\u5B58\u5728\u3002\u4EE3\u7801\u7684\u4F5C\u7528\u57DF\u4EE5\u5757\u7EA7\u4E3A\u5355\u4F4D\uFF0C\u4EE5\u4E0A\u9762\u4EE3\u7801\u4E3A\u4F8B:</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// i = 1
{
  setTimeout(function timer(){
    console.log(1)
  },0)
}
// i = 2
{
  setTimeout(function timer(){
    console.log(2)
  },0)
}
// i = 3
...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#_5-\u539F\u578B\u94FE" aria-hidden="true">#</a> 5 \u539F\u578B\u94FE</h2><h3 id="_5-1-\u539F\u578B-\u6784\u9020\u51FD\u6570-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_5-1-\u539F\u578B-\u6784\u9020\u51FD\u6570-\u5B9E\u4F8B" aria-hidden="true">#</a> 5.1 \u539F\u578B/\u6784\u9020\u51FD\u6570/\u5B9E\u4F8B</h3><ul><li>\u539F\u578B(<code>prototype</code>): \u4E00\u4E2A\u7B80\u5355\u7684\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5B9E\u73B0\u5BF9\u8C61\u7684 \u5C5E\u6027\u7EE7\u627F\u3002\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u6210\u5BF9\u8C61\u7684\u7239\u3002\u5728\xA0<code>Firefox</code>\xA0\u548C\xA0<code>Chrome</code>\xA0\u4E2D\uFF0C\u6BCF\u4E2A<code>JavaScript</code>\u5BF9\u8C61\u4E2D\u90FD\u5305\u542B\u4E00\u4E2A<code>__proto__</code>(\u975E\u6807\u51C6)\u7684\u5C5E\u6027\u6307\u5411\u5B83\u7239(\u8BE5\u5BF9\u8C61\u7684\u539F\u578B)\uFF0C\u53EF<code>obj.__proto__</code>\u8FDB\u884C\u8BBF\u95EE\u3002</li><li>\u6784\u9020\u51FD\u6570: \u53EF\u4EE5\u901A\u8FC7<code>new</code>\u6765 \u65B0\u5EFA\u4E00\u4E2A\u5BF9\u8C61 \u7684\u51FD\u6570\u3002</li><li>\u5B9E\u4F8B: \u901A\u8FC7\u6784\u9020\u51FD\u6570\u548C<code>new</code>\u521B\u5EFA\u51FA\u6765\u7684\u5BF9\u8C61\uFF0C\u4FBF\u662F\u5B9E\u4F8B\u3002 \u5B9E\u4F8B\u901A\u8FC7<code>__proto__</code>\u6307\u5411\u539F\u578B\uFF0C\u901A\u8FC7<code>constructor</code>\u6307\u5411\u6784\u9020\u51FD\u6570\u3002</li></ul><blockquote><p>\u4EE5<code>Object</code>\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u5E38\u7528\u7684<code>Object</code>\u4FBF\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B83\u6784\u5EFA\u5B9E\u4F8B\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9E\u4F8B
const instance = new Object()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5219\u6B64\u65F6\uFF0C \u5B9E\u4F8B\u4E3A<code>instance</code>, \u6784\u9020\u51FD\u6570\u4E3A<code>Object</code>\uFF0C\u6211\u4EEC\u77E5\u9053\uFF0C\u6784\u9020\u51FD\u6570\u62E5\u6709\u4E00\u4E2A<code>prototype</code>\u7684\u5C5E\u6027\u6307\u5411\u539F\u578B\uFF0C\u56E0\u6B64\u539F\u578B\u4E3A:</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u539F\u578B
const prototype = Object.prototype

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u6765\u770B\u51FA\u4E09\u8005\u7684\u5173\u7CFB:</p><ul><li><code>\u5B9E\u4F8B.__proto__ === \u539F\u578B</code></li><li><code>\u539F\u578B.constructor === \u6784\u9020\u51FD\u6570</code></li><li><code>\u6784\u9020\u51FD\u6570.prototype === \u539F\u578B</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u6761\u7EBF\u5176\u5B9E\u662F\u662F\u57FA\u4E8E\u539F\u578B\u8FDB\u884C\u83B7\u53D6\u7684\uFF0C\u53EF\u4EE5\u7406\u89E3\u6210\u4E00\u6761\u57FA\u4E8E\u539F\u578B\u7684\u6620\u5C04\u7EBF
// \u4F8B\u5982:
// const o = new Object()
// o.constructor === Object   --&gt; true
// o.__proto__ = null;
// o.constructor === Object   --&gt; false
\u5B9E\u4F8B.constructor === \u6784\u9020\u51FD\u6570

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt=""></p><h3 id="_5-2-\u539F\u578B\u5BF9\u8C61\u548C\u6784\u9020\u51FD\u6570\u6709\u4F55\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_5-2-\u539F\u578B\u5BF9\u8C61\u548C\u6784\u9020\u51FD\u6570\u6709\u4F55\u5173\u7CFB" aria-hidden="true">#</a> 5.2 \u539F\u578B\u5BF9\u8C61\u548C\u6784\u9020\u51FD\u6570\u6709\u4F55\u5173\u7CFB</h3><ul><li>\u5728JavaScript\u4E2D\uFF0C\u6BCF\u5F53\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u6570\u636E\u7C7B\u578B(\u666E\u901A\u51FD\u6570\u3001\u7C7B)\u65F6\u5019\uFF0C\u90FD\u4F1A\u5929\u751F\u81EA\u5E26\u4E00\u4E2A<code>prototype</code>\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u6307\u5411\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3002</li><li>\u5F53\u51FD\u6570\u7ECF\u8FC7<code>new</code>\u8C03\u7528\u65F6\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5C31\u6210\u4E3A\u4E86\u6784\u9020\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5168\u65B0\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u6709\u4E00\u4E2A<code>__proto__</code>\u5C5E\u6027\uFF0C\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3002</li></ul><p><img src="'+v+'" alt=""></p><h3 id="_5-3-\u80FD\u4E0D\u80FD\u63CF\u8FF0\u4E00\u4E0B\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#_5-3-\u80FD\u4E0D\u80FD\u63CF\u8FF0\u4E00\u4E0B\u539F\u578B\u94FE" aria-hidden="true">#</a> 5.3 \u80FD\u4E0D\u80FD\u63CF\u8FF0\u4E00\u4E0B\u539F\u578B\u94FE</h3><blockquote><p>JavaScript\u5BF9\u8C61\u901A\u8FC7<code>__proto__</code>\xA0\u6307\u5411\u7236\u7C7B\u5BF9\u8C61\uFF0C\u76F4\u5230\u6307\u5411<code>Object</code>\u5BF9\u8C61\u4E3A\u6B62\uFF0C\u8FD9\u6837\u5C31\u5F62\u6210\u4E86\u4E00\u4E2A\u539F\u578B\u6307\u5411\u7684\u94FE\u6761, \u5373\u539F\u578B\u94FE</p></blockquote><p><img src="'+b+`" alt=""></p><ul><li>\u5BF9\u8C61\u7684\xA0<code>hasOwnProperty()</code>\xA0\u6765\u68C0\u67E5\u5BF9\u8C61\u81EA\u8EAB\u4E2D\u662F\u5426\u542B\u6709\u8BE5\u5C5E\u6027</li><li>\u4F7F\u7528\xA0<code>in</code>\xA0\u68C0\u67E5\u5BF9\u8C61\u4E2D\u662F\u5426\u542B\u6709\u67D0\u4E2A\u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u5BF9\u8C61\u4E2D\u6CA1\u6709\u4F46\u662F\u539F\u578B\u94FE\u4E2D\u6709\uFF0C\u4E5F\u4F1A\u8FD4\u56DE\xA0<code>true</code></li></ul><h2 id="_6-\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_6-\u7EE7\u627F" aria-hidden="true">#</a> 6 \u7EE7\u627F</h2><h3 id="_6-1-\u65B9\u5F0F1-\u501F\u52A9call" tabindex="-1"><a class="header-anchor" href="#_6-1-\u65B9\u5F0F1-\u501F\u52A9call" aria-hidden="true">#</a> 6.1 \u65B9\u5F0F1: \u501F\u52A9call</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> function Parent1(){
    this.name = &#39;parent1&#39;;
  }
  function Child1(){
    Parent1.call(this);
    this.type = &#39;child1&#39;
  }
  console.log(new Child1);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u6837\u5199\u7684\u65F6\u5019\u5B50\u7C7B\u867D\u7136\u80FD\u591F\u62FF\u5230\u7236\u7C7B\u7684\u5C5E\u6027\u503C\uFF0C\u4F46\u662F\u95EE\u9898\u662F\u7236\u7C7B\u539F\u578B\u5BF9\u8C61\u4E2D\u4E00\u65E6\u5B58\u5728\u65B9\u6CD5\u90A3\u4E48\u5B50\u7C7B\u65E0\u6CD5\u7EE7\u627F\u3002\u90A3\u4E48\u5F15\u51FA\u4E0B\u9762\u7684\u65B9\u6CD5\u3002</p></blockquote><h3 id="_6-2-\u65B9\u5F0F2-\u501F\u52A9\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#_6-2-\u65B9\u5F0F2-\u501F\u52A9\u539F\u578B\u94FE" aria-hidden="true">#</a> 6.2 \u65B9\u5F0F2: \u501F\u52A9\u539F\u578B\u94FE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> function Parent2() {
    this.name = &#39;parent2&#39;;
    this.play = [1, 2, 3]
  }
  function Child2() {
    this.type = &#39;child2&#39;;
  }
  Child2.prototype = new Parent2();

  console.log(new Child2());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u4F3C\u6CA1\u6709\u95EE\u9898\uFF0C\u7236\u7C7B\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u90FD\u80FD\u591F\u8BBF\u95EE\uFF0C\u4F46\u5B9E\u9645\u4E0A\u6709\u4E00\u4E2A\u6F5C\u5728\u7684\u4E0D\u8DB3\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var s1 = new Child2();
var s2 = new Child2();
s1.play.push(4);
console.log(s1.play, s2.play);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u63A7\u5236\u53F0\uFF1A</p><p><img src="`+m+`" alt=""></p><blockquote><p>\u660E\u660E\u6211\u53EA\u6539\u53D8\u4E86s1\u7684play\u5C5E\u6027\uFF0C\u4E3A\u4EC0\u4E48s2\u4E5F\u8DDF\u7740\u53D8\u4E86\u5462\uFF1F\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u4E24\u4E2A\u5B9E\u4F8B\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61\u3002</p></blockquote><p>\u90A3\u4E48\u8FD8\u6709\u66F4\u597D\u7684\u65B9\u5F0F\u4E48\uFF1F</p><h3 id="_6-3-\u65B9\u5F0F3-\u5C06\u524D\u4E24\u79CD\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#_6-3-\u65B9\u5F0F3-\u5C06\u524D\u4E24\u79CD\u7EC4\u5408" aria-hidden="true">#</a> 6.3 \u65B9\u5F0F3\uFF1A\u5C06\u524D\u4E24\u79CD\u7EC4\u5408</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  function Parent3 () {
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
  console.log(s3.play, s4.play);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u63A7\u5236\u53F0\uFF1A</p><p><img src="`+p+`" alt=""></p><blockquote><p>\u4E4B\u524D\u7684\u95EE\u9898\u90FD\u5F97\u4EE5\u89E3\u51B3\u3002\u4F46\u662F\u8FD9\u91CC\u53C8\u5F92\u589E\u4E86\u4E00\u4E2A\u65B0\u95EE\u9898\uFF0C\u90A3\u5C31\u662F<code>Parent3</code>\u7684\u6784\u9020\u51FD\u6570\u4F1A\u591A\u6267\u884C\u4E86\u4E00\u6B21\uFF08<code>Child3.prototype = new Parent3();</code>\uFF09\u3002\u8FD9\u662F\u6211\u4EEC\u4E0D\u613F\u770B\u5230\u7684\u3002\u90A3\u4E48\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1F</p></blockquote><h3 id="_6-4-\u65B9\u5F0F4-\u7EC4\u5408\u7EE7\u627F\u7684\u4F18\u53161" tabindex="-1"><a class="header-anchor" href="#_6-4-\u65B9\u5F0F4-\u7EC4\u5408\u7EE7\u627F\u7684\u4F18\u53161" aria-hidden="true">#</a> 6.4 \u65B9\u5F0F4: \u7EC4\u5408\u7EE7\u627F\u7684\u4F18\u53161</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  function Parent4 () {
    this.name = &#39;parent4&#39;;
    this.play = [1, 2, 3];
  }
  function Child4() {
    Parent4.call(this);
    this.type = &#39;child4&#39;;
  }
  Child4.prototype = Parent4.prototype;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u8BA9\u5C06\u7236\u7C7B\u539F\u578B\u5BF9\u8C61\u76F4\u63A5\u7ED9\u5230\u5B50\u7C7B\uFF0C\u7236\u7C7B\u6784\u9020\u51FD\u6570\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u800C\u4E14\u7236\u7C7B\u5C5E\u6027\u548C\u65B9\u6CD5\u5747\u80FD\u8BBF\u95EE\uFF0C\u4F46\u662F\u6211\u4EEC\u6765\u6D4B\u8BD5\u4E00\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var s3 = new Child4();
var s4 = new Child4();
console.log(s3)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><blockquote><p>\u5B50\u7C7B\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570\u662FParent4\uFF0C\u663E\u7136\u8FD9\u662F\u4E0D\u5BF9\u7684\uFF0C\u5E94\u8BE5\u662FChild4\u3002</p></blockquote><h3 id="_6-5-\u65B9\u5F0F5-\u6700\u63A8\u8350\u4F7F\u7528-\u7EC4\u5408\u7EE7\u627F\u7684\u4F18\u53162" tabindex="-1"><a class="header-anchor" href="#_6-5-\u65B9\u5F0F5-\u6700\u63A8\u8350\u4F7F\u7528-\u7EC4\u5408\u7EE7\u627F\u7684\u4F18\u53162" aria-hidden="true">#</a> 6.5 \u65B9\u5F0F5(\u6700\u63A8\u8350\u4F7F\u7528): \u7EC4\u5408\u7EE7\u627F\u7684\u4F18\u53162</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> function Parent5 () {
    this.name = &#39;parent5&#39;;
    this.play = [1, 2, 3];
  }
  function Child5() {
    Parent5.call(this);
    this.type = &#39;child5&#39;;
  }
  Child5.prototype = Object.create(Parent5.prototype);
  Child5.prototype.constructor = Child5;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u6700\u63A8\u8350\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u63A5\u8FD1\u5B8C\u7F8E\u7684\u7EE7\u627F\uFF0C\u5B83\u7684\u540D\u5B57\u4E5F\u53EB\u505A\u5BC4\u751F\u7EC4\u5408\u7EE7\u627F\u3002</p><h3 id="_6-6-es6\u7684extends\u88AB\u7F16\u8BD1\u540E\u7684javascript\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_6-6-es6\u7684extends\u88AB\u7F16\u8BD1\u540E\u7684javascript\u4EE3\u7801" aria-hidden="true">#</a> 6.6 ES6\u7684extends\u88AB\u7F16\u8BD1\u540E\u7684JavaScript\u4EE3\u7801</h3><blockquote><p>ES6\u7684\u4EE3\u7801\u6700\u540E\u90FD\u662F\u8981\u5728\u6D4F\u89C8\u5668\u4E0A\u80FD\u591F\u8DD1\u8D77\u6765\u7684\uFF0C\u8FD9\u4E2D\u95F4\u5C31\u5229\u7528\u4E86babel\u8FD9\u4E2A\u7F16\u8BD1\u5DE5\u5177\uFF0C\u5C06ES6\u7684\u4EE3\u7801\u7F16\u8BD1\u6210ES5\u8BA9\u4E00\u4E9B\u4E0D\u652F\u6301\u65B0\u8BED\u6CD5\u7684\u6D4F\u89C8\u5668\u4E5F\u80FD\u8FD0\u884C\u3002</p></blockquote><p>\u90A3\u6700\u540E\u7F16\u8BD1\u6210\u4E86\u4EC0\u4E48\u6837\u5B50\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function _possibleConstructorReturn(self, call) {
    // ...
    return call &amp;&amp; (typeof call === &#39;object&#39; || typeof call === &#39;function&#39;) ? call : self;
}

function _inherits(subClass, superClass) {
    // ...
    //\u770B\u5230\u6CA1\u6709
    subClass.prototype = Object.create(superClass &amp;&amp; superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Parent = function Parent() {
    // \u9A8C\u8BC1\u662F\u5426\u662F Parent \u6784\u9020\u51FA\u6765\u7684 this
    _classCallCheck(this, Parent);
};

var Child = (function (_Parent) {
    _inherits(Child, _Parent);

    function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
    }

    return Child;
}(Parent));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6838\u5FC3\u662F<code>_inherits</code>\u51FD\u6570\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u91C7\u7528\u7684\u4F9D\u7136\u4E5F\u662F\u7B2C\u4E94\u79CD\u65B9\u5F0F------------\u5BC4\u751F\u7EC4\u5408\u7EE7\u627F\u65B9\u5F0F\uFF0C\u540C\u65F6\u8BC1\u660E\u4E86\u8FD9\u79CD\u65B9\u5F0F\u7684\u6210\u529F\u3002\u4E0D\u8FC7\u8FD9\u91CC\u52A0\u4E86\u4E00\u4E2A<code>Object.setPrototypeOf(subClass, superClass)</code>\uFF0C\u8FD9\u662F\u7528\u6765\u5E72\u5565\u7684\u5462\uFF1F</p></blockquote><p>\u7B54\u6848\u662F\u7528\u6765\u7EE7\u627F\u7236\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\u3002\u8FD9\u4E5F\u662F\u539F\u6765\u7684\u7EE7\u627F\u65B9\u5F0F\u758F\u5FFD\u6389\u7684\u5730\u65B9\u3002</p><p>\u8FFD\u95EE: \u9762\u5411\u5BF9\u8C61\u7684\u8BBE\u8BA1\u4E00\u5B9A\u662F\u597D\u7684\u8BBE\u8BA1\u5417\uFF1F</p><blockquote><p>\u4E0D\u4E00\u5B9A\u3002\u4ECE\u7EE7\u627F\u7684\u89D2\u5EA6\u8BF4\uFF0C\u8FD9\u4E00\u8BBE\u8BA1\u662F\u5B58\u5728\u5DE8\u5927\u9690\u60A3\u7684\u3002</p></blockquote><h3 id="_6-7-\u4ECE\u8BBE\u8BA1\u601D\u60F3\u4E0A\u8C08\u8C08\u7EE7\u627F\u672C\u8EAB\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_6-7-\u4ECE\u8BBE\u8BA1\u601D\u60F3\u4E0A\u8C08\u8C08\u7EE7\u627F\u672C\u8EAB\u7684\u95EE\u9898" aria-hidden="true">#</a> 6.7 \u4ECE\u8BBE\u8BA1\u601D\u60F3\u4E0A\u8C08\u8C08\u7EE7\u627F\u672C\u8EAB\u7684\u95EE\u9898</h3><p>\u5047\u5982\u73B0\u5728\u6709\u4E0D\u540C\u54C1\u724C\u7684\u8F66\uFF0C\u6BCF\u8F86\u8F66\u90FD\u6709drive\u3001music\u3001addOil\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Car{
  constructor(id) {
    this.id = id;
  }
  drive(){
    console.log(&quot;wuwuwu!&quot;);
  }
  music(){
    console.log(&quot;lalala!&quot;)
  }
  addOil(){
    console.log(&quot;\u54E6\u54DF\uFF01&quot;)
  }
}
class otherCar extends Car{}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u53EF\u4EE5\u5B9E\u73B0\u8F66\u7684\u529F\u80FD\uFF0C\u5E76\u4E14\u4EE5\u6B64\u53BB\u6269\u5C55\u4E0D\u540C\u7684\u8F66\u3002</p><p>\u4F46\u662F\u95EE\u9898\u6765\u4E86\uFF0C\u65B0\u80FD\u6E90\u6C7D\u8F66\u4E5F\u662F\u8F66\uFF0C\u4F46\u662F\u5B83\u5E76\u4E0D\u9700\u8981addOil(\u52A0\u6CB9)\u3002</p><p>\u5982\u679C\u8BA9\u65B0\u80FD\u6E90\u6C7D\u8F66\u7684\u7C7B\u7EE7\u627FCar\u7684\u8BDD\uFF0C\u4E5F\u662F\u6709\u95EE\u9898\u7684\uFF0C\u4FD7\u79F0&quot;\u5927\u7329\u7329\u548C\u9999\u8549&quot;\u7684\u95EE\u9898\u3002\u5927\u7329\u7329\u624B\u91CC\u6709\u9999\u8549\uFF0C\u4F46\u662F\u6211\u73B0\u5728\u660E\u660E\u53EA\u9700\u8981\u9999\u8549\uFF0C\u5374\u62FF\u5230\u4E86\u4E00\u53EA\u5927\u7329\u7329\u3002\u4E5F\u5C31\u662F\u8BF4\u52A0\u6CB9\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u6211\u73B0\u5728\u662F\u4E0D\u9700\u8981\u7684\uFF0C\u4F46\u662F\u7531\u4E8E\u7EE7\u627F\u7684\u539F\u56E0\uFF0C\u4E5F\u7ED9\u5230\u5B50\u7C7B\u4E86\u3002</p><blockquote><p>\u7EE7\u627F\u7684\u6700\u5927\u95EE\u9898\u5728\u4E8E\uFF1A\u65E0\u6CD5\u51B3\u5B9A\u7EE7\u627F\u54EA\u4E9B\u5C5E\u6027\uFF0C\u6240\u6709\u5C5E\u6027\u90FD\u5F97\u7EE7\u627F\u3002</p></blockquote><p>\u5F53\u7136\u4F60\u53EF\u80FD\u4F1A\u8BF4\uFF0C\u53EF\u4EE5\u518D\u521B\u5EFA\u4E00\u4E2A\u7236\u7C7B\u554A\uFF0C\u628A\u52A0\u6CB9\u7684\u65B9\u6CD5\u7ED9\u53BB\u6389\uFF0C\u4F46\u662F\u8FD9\u4E5F\u662F\u6709\u95EE\u9898\u7684\uFF0C\u4E00\u65B9\u9762\u7236\u7C7B\u662F\u65E0\u6CD5\u63CF\u8FF0\u6240\u6709\u5B50\u7C7B\u7684\u7EC6\u8282\u60C5\u51B5\u7684\uFF0C\u4E3A\u4E86\u4E0D\u540C\u7684\u5B50\u7C7B\u7279\u6027\u53BB\u589E\u52A0\u4E0D\u540C\u7684\u7236\u7C7B\uFF0C\u4EE3\u7801\u52BF\u5FC5\u4F1A\u5927\u91CF\u91CD\u590D\uFF0C\u53E6\u4E00\u65B9\u9762\u4E00\u65E6\u5B50\u7C7B\u6709\u6240\u53D8\u52A8\uFF0C\u7236\u7C7B\u4E5F\u8981\u8FDB\u884C\u76F8\u5E94\u7684\u66F4\u65B0\uFF0C\u4EE3\u7801\u7684\u8026\u5408\u6027\u592A\u9AD8\uFF0C\u7EF4\u62A4\u6027\u4E0D\u597D\u3002</p><p>\u90A3\u5982\u4F55\u6765\u89E3\u51B3\u7EE7\u627F\u7684\u8BF8\u591A\u95EE\u9898\u5462\uFF1F</p><blockquote><p>\u7528\u7EC4\u5408\uFF0C\u8FD9\u4E5F\u662F\u5F53\u4ECA\u7F16\u7A0B\u8BED\u6CD5\u53D1\u5C55\u7684\u8D8B\u52BF\uFF0C\u6BD4\u5982golang\u5B8C\u5168\u91C7\u7528\u7684\u662F\u9762\u5411\u7EC4\u5408\u7684\u8BBE\u8BA1\u65B9\u5F0F\u3002</p></blockquote><p>\u987E\u540D\u601D\u4E49\uFF0C\u9762\u5411\u7EC4\u5408\u5C31\u662F\u5148\u8BBE\u8BA1\u4E00\u7CFB\u5217\u96F6\u4EF6\uFF0C\u7136\u540E\u5C06\u8FD9\u4E9B\u96F6\u4EF6\u8FDB\u884C\u62FC\u88C5\uFF0C\u6765\u5F62\u6210\u4E0D\u540C\u7684\u5B9E\u4F8B\u6216\u8005\u7C7B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function drive(){
  console.log(&quot;wuwuwu!&quot;);
}
function music(){
  console.log(&quot;lalala!&quot;)
}
function addOil(){
  console.log(&quot;\u54E6\u54DF\uFF01&quot;)
}

let car = compose(drive, music, addOil);
let newEnergyCar = compose(drive, music);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4EE3\u7801\u5E72\u51C0\uFF0C\u590D\u7528\u6027\u4E5F\u5F88\u597D\u3002\u8FD9\u5C31\u662F\u9762\u5411\u7EC4\u5408\u7684\u8BBE\u8BA1\u65B9\u5F0F\u3002</p></blockquote><h3 id="_6-8-\u7EE7\u627F-\u7B80\u7248" tabindex="-1"><a class="header-anchor" href="#_6-8-\u7EE7\u627F-\u7B80\u7248" aria-hidden="true">#</a> 6.8 \u7EE7\u627F-\u7B80\u7248</h3><blockquote><p>\u5728 ES5 \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u89E3\u51B3\u7EE7\u627F\u7684\u95EE\u9898</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Super() {}
Super.prototype.getNumber = function() {
  return 1
}

function Sub() {}
let s = new Sub()
Sub.prototype = Object.create(Super.prototype, {
  constructor: {
    value: Sub,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EE5\u4E0A\u7EE7\u627F\u5B9E\u73B0\u601D\u8DEF\u5C31\u662F\u5C06\u5B50\u7C7B\u7684\u539F\u578B\u8BBE\u7F6E\u4E3A\u7236\u7C7B\u7684\u539F\u578B</li><li>\u5728\xA0<code>ES6</code>\xA0\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\xA0<code>class</code>\xA0\u8BED\u6CD5\u8F7B\u677E\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class MyDate extends Date {
  test() {
    return this.getTime()
  }
}
let myDate = new MyDate()
myDate.test()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F46\u662F\xA0<code>ES6</code>\xA0\u4E0D\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u517C\u5BB9\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4F7F\u7528\xA0<code>Babel</code>\xA0\u6765\u7F16\u8BD1\u8FD9\u6BB5\u4EE3\u7801\u3002</li><li>\u5982\u679C\u4F60\u4F7F\u7528\u7F16\u8BD1\u8FC7\u5F97\u4EE3\u7801\u8C03\u7528\xA0<code>myDate.test()</code>\u4F60\u4F1A\u60CA\u5947\u5730\u53D1\u73B0\u51FA\u73B0\u4E86\u62A5\u9519</li></ul><blockquote><p>\u56E0\u4E3A\u5728\xA0<code>JS</code>\xA0\u5E95\u5C42\u6709\u9650\u5236\uFF0C\u5982\u679C\u4E0D\u662F\u7531\xA0<code>Date</code>\u6784\u9020\u51FA\u6765\u7684\u5B9E\u4F8B\u7684\u8BDD\uFF0C\u662F\u4E0D\u80FD\u8C03\u7528\xA0<code>Date</code>\xA0\u91CC\u7684\u51FD\u6570\u7684\u3002\u6240\u4EE5\u8FD9\u4E5F\u4FA7\u9762\u7684\u8BF4\u660E\u4E86\uFF1A<code>ES6</code>\xA0\u4E2D\u7684\xA0<code>class</code>\xA0\u7EE7\u627F\u4E0E\xA0<code>ES5</code>\xA0\u4E2D\u7684\u4E00\u822C\u7EE7\u627F\u5199\u6CD5\u662F\u4E0D\u540C\u7684\u3002</p></blockquote><ul><li>\u65E2\u7136\u5E95\u5C42\u9650\u5236\u4E86\u5B9E\u4F8B\u5FC5\u987B\u7531\xA0<code>Date</code>\xA0\u6784\u9020\u51FA\u6765\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u6539\u53D8\u4E0B\u601D\u8DEF\u5B9E\u73B0\u7EE7\u627F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function MyData() {

}
MyData.prototype.test = function () {
  return this.getTime()
}
let d = new Date()
Object.setPrototypeOf(d, MyData.prototype)
Object.setPrototypeOf(MyData.prototype, Date.prototype)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EE5\u4E0A\u7EE7\u627F\u5B9E\u73B0\u601D\u8DEF\uFF1A\u5148\u521B\u5EFA\u7236\u7C7B\u5B9E\u4F8B =&gt; \u6539\u53D8\u5B9E\u4F8B\u539F\u5148\u7684\xA0<code>_proto__</code>\u8F6C\u800C\u8FDE\u63A5\u5230\u5B50\u7C7B\u7684\xA0<code>prototype</code>=&gt; \u5B50\u7C7B\u7684\xA0<code>prototype</code>\xA0\u7684\xA0<code>__proto__</code>\xA0\u6539\u4E3A\u7236\u7C7B\u7684\xA0<code>prototype</code>\u3002</li><li>\u901A\u8FC7\u4EE5\u4E0A\u65B9\u6CD5\u5B9E\u73B0\u7684\u7EE7\u627F\u5C31\u53EF\u4EE5\u5B8C\u7F8E\u89E3\u51B3\xA0<code>JS</code>\xA0\u5E95\u5C42\u7684\u8FD9\u4E2A\u9650\u5236</li></ul><h2 id="_7-this" tabindex="-1"><a class="header-anchor" href="#_7-this" aria-hidden="true">#</a> 7 this</h2><blockquote><p>\u6211\u4EEC\u5148\u6765\u770B\u51E0\u4E2A\u51FD\u6570\u8C03\u7528\u7684\u573A\u666F</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u4E8E\u76F4\u63A5\u8C03\u7528\xA0<code>foo</code>\xA0\u6765\u8BF4\uFF0C\u4E0D\u7BA1\xA0<code>foo</code>\xA0\u51FD\u6570\u88AB\u653E\u5728\u4E86\u4EC0\u4E48\u5730\u65B9\uFF0C<code>this</code>\xA0\u4E00\u5B9A\u662F<code>window</code></li><li>\u5BF9\u4E8E\xA0<code>obj.foo()</code>\xA0\u6765\u8BF4\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u8BB0\u4F4F\uFF0C\u8C01\u8C03\u7528\u4E86\u51FD\u6570\uFF0C\u8C01\u5C31\u662F\xA0<code>this</code>\uFF0C\u6240\u4EE5\u5728\u8FD9\u4E2A\u573A\u666F\u4E0B\xA0<code>foo</code>\xA0\u51FD\u6570\u4E2D\u7684\xA0<code>this</code>\xA0\u5C31\u662F\xA0<code>obj</code>\xA0\u5BF9\u8C61</li><li>\u5BF9\u4E8E\xA0<code>new</code>\xA0\u7684\u65B9\u5F0F\u6765\u8BF4\uFF0C<code>this</code>\xA0\u88AB\u6C38\u8FDC\u7ED1\u5B9A\u5728\u4E86\xA0<code>c</code>\xA0\u4E0A\u9762\uFF0C\u4E0D\u4F1A\u88AB\u4EFB\u4F55\u65B9\u5F0F\u6539\u53D8\xA0<code>this</code></li></ul><blockquote><p>\u8BF4\u5B8C\u4E86\u4EE5\u4E0A\u51E0\u79CD\u60C5\u51B5\uFF0C\u5176\u5B9E\u5F88\u591A\u4EE3\u7801\u4E2D\u7684\xA0<code>this</code>\xA0\u5E94\u8BE5\u5C31\u6CA1\u4EC0\u4E48\u95EE\u9898\u4E86\uFF0C\u4E0B\u9762\u8BA9\u6211\u4EEC\u770B\u770B\u7BAD\u5934\u51FD\u6570\u4E2D\u7684\xA0<code>this</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function a() {
  return () =&gt; {
    return () =&gt; {
      console.log(this)
    }
  }
}
console.log(a()()())

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9996\u5148\u7BAD\u5934\u51FD\u6570\u5176\u5B9E\u662F\u6CA1\u6709\xA0<code>this</code>\xA0\u7684\uFF0C\u7BAD\u5934\u51FD\u6570\u4E2D\u7684\xA0<code>this</code>\xA0\u53EA\u53D6\u51B3\u5305\u88F9\u7BAD\u5934\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u666E\u901A\u51FD\u6570\u7684\xA0<code>this</code>\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u56E0\u4E3A\u5305\u88F9\u7BAD\u5934\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u666E\u901A\u51FD\u6570\u662F\xA0<code>a</code>\uFF0C\u6240\u4EE5\u6B64\u65F6\u7684\xA0<code>this</code>\xA0\u662F\xA0<code>window</code>\u3002\u53E6\u5916\u5BF9\u7BAD\u5934\u51FD\u6570\u4F7F\u7528\xA0<code>bind</code>\u8FD9\u7C7B\u51FD\u6570\u662F\u65E0\u6548\u7684\u3002</li><li>\u6700\u540E\u79CD\u60C5\u51B5\u4E5F\u5C31\u662F\xA0<code>bind</code>\xA0\u8FD9\u4E9B\u6539\u53D8\u4E0A\u4E0B\u6587\u7684\xA0<code>API</code>\xA0\u4E86\uFF0C\u5BF9\u4E8E\u8FD9\u4E9B\u51FD\u6570\u6765\u8BF4\uFF0C<code>this</code>\xA0\u53D6\u51B3\u4E8E\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u7A7A\uFF0C\u90A3\u4E48\u5C31\u662F\xA0<code>window</code>\u3002</li><li>\u90A3\u4E48\u8BF4\u5230\xA0<code>bind</code>\uFF0C\u4E0D\u77E5\u9053\u5927\u5BB6\u662F\u5426\u8003\u8651\u8FC7\uFF0C\u5982\u679C\u5BF9\u4E00\u4E2A\u51FD\u6570\u8FDB\u884C\u591A\u6B21\xA0<code>bind</code>\uFF0C\u90A3\u4E48\u4E0A\u4E0B\u6587\u4F1A\u662F\u4EC0\u4E48\u5462\uFF1F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // =&gt; ?

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u4F60\u8BA4\u4E3A\u8F93\u51FA\u7ED3\u679C\u662F\xA0<code>a</code>\uFF0C\u90A3\u4E48\u4F60\u5C31\u9519\u4E86\uFF0C\u5176\u5B9E\u6211\u4EEC\u53EF\u4EE5\u628A\u4E0A\u8FF0\u4EE3\u7801\u8F6C\u6362\u6210\u53E6\u4E00\u79CD\u5F62\u5F0F</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// fn.bind().bind(a) \u7B49\u4E8E
let fn2 = function fn1() {
  return function() {
    return fn.apply()
  }.apply(a)
}
fn2()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53EF\u4EE5\u4ECE\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u53D1\u73B0\uFF0C\u4E0D\u7BA1\u6211\u4EEC\u7ED9\u51FD\u6570\xA0<code>bind</code>\xA0\u51E0\u6B21\uFF0C<code>fn</code>\xA0\u4E2D\u7684\xA0<code>this</code>\xA0\u6C38\u8FDC\u7531\u7B2C\u4E00\u6B21\xA0<code>bind</code>\xA0\u51B3\u5B9A\uFF0C\u6240\u4EE5\u7ED3\u679C\u6C38\u8FDC\u662F\xA0<code>window</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let a = { name: &#39;poetries&#39; }
function foo() {
  console.log(this.name)
}
foo.bind(a)() // =&gt; &#39;poetries&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4EE5\u4E0A\u5C31\u662F\xA0<code>this</code>\xA0\u7684\u89C4\u5219\u4E86\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u53D1\u751F\u591A\u4E2A\u89C4\u5219\u540C\u65F6\u51FA\u73B0\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6\u5019\u4E0D\u540C\u7684\u89C4\u5219\u4E4B\u95F4\u4F1A\u6839\u636E\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u6765\u51B3\u5B9A\xA0<code>this</code>\xA0\u6700\u7EC8\u6307\u5411\u54EA\u91CC\u3002</p></blockquote><blockquote><p>\u9996\u5148\uFF0C<code>new</code>\xA0\u7684\u65B9\u5F0F\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u63A5\u4E0B\u6765\u662F\xA0<code>bind</code>\xA0\u8FD9\u4E9B\u51FD\u6570\uFF0C\u7136\u540E\u662F\xA0<code>obj.foo()</code>\xA0\u8FD9\u79CD\u8C03\u7528\u65B9\u5F0F\uFF0C\u6700\u540E\u662F\xA0<code>foo</code>\xA0\u8FD9\u79CD\u8C03\u7528\u65B9\u5F0F\uFF0C\u540C\u65F6\uFF0C\u7BAD\u5934\u51FD\u6570\u7684\xA0<code>this</code>\xA0\u4E00\u65E6\u88AB\u7ED1\u5B9A\uFF0C\u5C31\u4E0D\u4F1A\u518D\u88AB\u4EFB\u4F55\u65B9\u5F0F\u6240\u6539\u53D8\u3002</p></blockquote><p><img src="`+g+`" alt=""></p><p>\u603B\u7ED3</p><blockquote><p><code>this</code>\u6267\u884C\u4E3B\u4F53\uFF0C\u8C01\u628A\u5B83\u6267\u884C\u7684\u548C\u5728\u54EA\u521B\u5EFA\u7684\u5728\u54EA\u6267\u884C\u7684\u90FD\u6CA1\u6709\u5FC5\u7136\u7684\u5173\u7CFB</p></blockquote><ul><li>\u51FD\u6570\u6267\u884C\uFF0C\u770B\u65B9\u6CD5\u524D\u9762\u662F\u5426\u6709\u70B9\uFF0C\u6CA1\u6709\u70B9<code>this</code>\u662F<code>window</code>(\u4E25\u683C\u6A21\u5F0F\u4E0B\u662F<code>undefined</code>)\uFF0C\u6709\u70B9\uFF0C\u70B9\u524D\u9762\u662F\u8C01-this-\u5C31\u662F\u8C01</li><li>\u7ED9\u5F53\u524D\u5143\u7D20\u7684\u67D0\u4E2A\u4E8B\u4EF6\u884C\u4E3A\u7ED1\u5B9A\u65B9\u6CD5\uFF0C\u5F53\u4E8B\u4EF6\u884C\u4E3A\u89E6\u53D1\uFF0C\u65B9\u6CD5\u4E2D\u7684this\u662F\u5F53\u524D\u5143\u7D20\u672C\u8EAB\uFF08\u6392\u9664<code>attachEvent</code>\uFF09</li><li>\u6784\u9020\u51FD\u6570\u4F53\u4E2D<code>this</code>\u662F\u5F53\u524D\u7C7B\u7684\u5B9E\u4F8B</li><li>\u7BAD\u5934\u51FD\u6570\u4E2D\u6CA1\u6709\u6267\u884C\u4E3B\u4F53\uFF0C\u6240\u7528\u5230\u7684this\u90FD\u662F\u6240\u5904\u4E0A\u4E0B\u6587\u4E2D\u7684<code>this</code></li><li>\u53EF\u4EE5\u57FA\u4E8E<code>Function.prototype</code>\u4E0A\u7684<code>call/apply/bind</code>\u6539\u53D8<code>this</code>\u6307\u5411</li></ul><h2 id="_8-\u5185\u5B58\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_8-\u5185\u5B58\u673A\u5236" aria-hidden="true">#</a> 8 \u5185\u5B58\u673A\u5236</h2><blockquote><p>\u7F51\u4E0A\u7684\u8D44\u6599\u57FA\u672C\u662F\u8FD9\u6837\u8BF4\u7684: \u57FA\u672C\u6570\u636E\u7C7B\u578B\u7528\u6808\u5B58\u50A8\uFF0C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7528\u5806\u5B58\u50A8\u3002</p></blockquote><p>\u770B\u8D77\u6765\u6CA1\u6709\u9519\u8BEF\uFF0C\u4F46\u5B9E\u9645\u4E0A\u662F\u6709\u95EE\u9898\u7684\u3002\u53EF\u4EE5\u8003\u8651\u4E00\u4E0B\u95ED\u5305\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u53D8\u91CF\u5B58\u5728\u6808\u4E2D\uFF0C\u90A3\u51FD\u6570\u8C03\u7528\u5B8C\u6808\u9876\u7A7A\u95F4\u9500\u6BC1\uFF0C\u95ED\u5305\u53D8\u91CF\u4E0D\u5C31\u6CA1\u4E86\u5417\uFF1F</p><p>\u5176\u5B9E\u8FD8\u662F\u9700\u8981\u8865\u5145\u4E00\u53E5:</p><blockquote><p>\u95ED\u5305\u53D8\u91CF\u662F\u5B58\u5728\u5806\u5185\u5B58\u4E2D\u7684\u3002</p></blockquote><p>\u5177\u4F53\u800C\u8A00\uFF0C\u4EE5\u4E0B\u6570\u636E\u7C7B\u578B\u5B58\u50A8\u5728\u6808\u4E2D:</p><ul><li><code>boolean</code></li><li><code>null</code></li><li><code>undefined</code></li><li><code>number</code></li><li><code>string</code></li><li><code>symbol</code></li><li><code>bigint</code></li></ul><p>\u800C\u6240\u6709\u7684\u5BF9\u8C61\u6570\u636E\u7C7B\u578B\u5B58\u653E\u5728\u5806\u4E2D\u3002</p><blockquote><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5BF9\u4E8E\u8D4B\u503C\u64CD\u4F5C\uFF0C\u539F\u59CB\u7C7B\u578B\u7684\u6570\u636E\u76F4\u63A5\u5B8C\u6574\u5730\u590D\u5236\u53D8\u91CF\u503C\uFF0C\u5BF9\u8C61\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\u5219\u662F\u590D\u5236\u5F15\u7528\u5730\u5740\u3002</p></blockquote><p>\u56E0\u6B64\u4F1A\u6709\u4E0B\u9762\u7684\u60C5\u51B5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj = { a: 1 };
let newObj = obj;
newObj.a = 2;
console.log(obj.a);//\u53D8\u6210\u4E862

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E4B\u6240\u4EE5\u4F1A\u8FD9\u6837\uFF0C\u662F\u56E0\u4E3A\xA0<code>obj</code>\xA0\u548C\xA0<code>newObj</code>\xA0\u662F\u540C\u4E00\u4EFD\u5806\u7A7A\u95F4\u7684\u5730\u5740\uFF0C\u6539\u53D8<code>newObj</code>\uFF0C\u7B49\u4E8E\u6539\u53D8\u4E86\u5171\u540C\u7684\u5806\u5185\u5B58\uFF0C\u8FD9\u65F6\u5019\u901A\u8FC7 obj \u6765\u83B7\u53D6\u8FD9\u5757\u5185\u5B58\u7684\u503C\u5F53\u7136\u4F1A\u6539\u53D8\u3002 \u5F53\u7136\uFF0C\u4F60\u53EF\u80FD\u4F1A\u95EE: \u4E3A\u4EC0\u4E48\u4E0D\u5168\u90E8\u7528\u6808\u6765\u4FDD\u5B58\u5462\uFF1F</li><li>\u9996\u5148\uFF0C\u5BF9\u4E8E\u7CFB\u7EDF\u6808\u6765\u8BF4\uFF0C\u5B83\u7684\u529F\u80FD\u9664\u4E86\u4FDD\u5B58\u53D8\u91CF\u4E4B\u5916\uFF0C\u8FD8\u6709\u521B\u5EFA\u5E76\u5207\u6362\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u529F\u80FD\u3002\u4E3E\u4E2A\u4F8B\u5B50:</li></ul><p>\u5F53\u7136\uFF0C\u4F60\u53EF\u80FD\u4F1A\u95EE: \u4E3A\u4EC0\u4E48\u4E0D\u5168\u90E8\u7528\u6808\u6765\u4FDD\u5B58\u5462\uFF1F</p><p>\u9996\u5148\uFF0C\u5BF9\u4E8E\u7CFB\u7EDF\u6808\u6765\u8BF4\uFF0C\u5B83\u7684\u529F\u80FD\u9664\u4E86\u4FDD\u5B58\u53D8\u91CF\u4E4B\u5916\uFF0C\u8FD8\u6709<code>\u521B\u5EFA\u5E76\u5207\u6362\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u529F\u80FD</code>\u3002\u4E3E\u4E2A\u4F8B\u5B50:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function f(a) {
  console.log(a);
}

function func(a) {
  f(a);
}

func(1);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5047\u8BBE\u7528ESP\u6307\u9488\u6765\u4FDD\u5B58\u5F53\u524D\u7684\u6267\u884C\u72B6\u6001\uFF0C\u5728\u7CFB\u7EDF\u6808\u4E2D\u4F1A\u4EA7\u751F\u5982\u4E0B\u7684\u8FC7\u7A0B\uFF1A</li><li>\u8C03\u7528func, \u5C06 func \u51FD\u6570\u7684\u4E0A\u4E0B\u6587\u538B\u6808\uFF0CESP\u6307\u5411\u6808\u9876\u3002</li><li>\u6267\u884Cfunc\uFF0C\u53C8\u8C03\u7528f\u51FD\u6570\uFF0C\u5C06 f \u51FD\u6570\u7684\u4E0A\u4E0B\u6587\u538B\u6808\uFF0CESP \u6307\u9488\u4E0A\u79FB\u3002</li><li>\u6267\u884C\u5B8C f \u51FD\u6570\uFF0C\u5C06ESP \u4E0B\u79FB\uFF0Cf\u51FD\u6570\u5BF9\u5E94\u7684\u6808\u9876\u7A7A\u95F4\u88AB\u56DE\u6536\u3002</li><li>\u6267\u884C\u5B8C func\uFF0CESP \u4E0B\u79FB\uFF0Cfunc\u5BF9\u5E94\u7684\u7A7A\u95F4\u88AB\u56DE\u6536\u3002</li></ul><p>\u56FE\u793A\u5982\u4E0B:</p><p><img src="`+x+`" alt=""></p><ul><li>\u56E0\u6B64\u4F60\u4E5F\u770B\u5230\u4E86\uFF0C\u5982\u679C\u91C7\u7528\u6808\u6765\u5B58\u50A8\u76F8\u5BF9\u57FA\u672C\u7C7B\u578B\u66F4\u52A0\u590D\u6742\u7684\u5BF9\u8C61\u6570\u636E\uFF0C\u90A3\u4E48\u5207\u6362\u4E0A\u4E0B\u6587\u7684\u5F00\u9500\u5C06\u53D8\u5F97\u5DE8\u5927\uFF01</li><li>\u4E0D\u8FC7\u5806\u5185\u5B58\u867D\u7136\u7A7A\u95F4\u5927\uFF0C\u80FD\u5B58\u653E\u5927\u91CF\u7684\u6570\u636E\uFF0C\u4F46\u4E0E\u6B64\u540C\u65F6\u5783\u573E\u5185\u5B58\u7684\u56DE\u6536\u4F1A\u5E26\u6765\u66F4\u5927\u7684\u5F00\u9500</li></ul><h2 id="_9-\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#_9-\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> 9 \u6267\u884C\u4E0A\u4E0B\u6587</h2><blockquote><p>\u5F53\u6267\u884C JS \u4EE3\u7801\u65F6\uFF0C\u4F1A\u4EA7\u751F\u4E09\u79CD\u6267\u884C\u4E0A\u4E0B\u6587</p></blockquote><ul><li>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</li><li>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</li><li><code>eval</code>\xA0\u6267\u884C\u4E0A\u4E0B\u6587</li></ul><blockquote><p>\u6BCF\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u90FD\u6709\u4E09\u4E2A\u91CD\u8981\u7684\u5C5E\u6027</p></blockquote><ul><li>\u53D8\u91CF\u5BF9\u8C61\uFF08<code>VO</code>\uFF09\uFF0C\u5305\u542B\u53D8\u91CF\u3001\u51FD\u6570\u58F0\u660E\u548C\u51FD\u6570\u7684\u5F62\u53C2\uFF0C\u8BE5\u5C5E\u6027\u53EA\u80FD\u5728\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D\u8BBF\u95EE</li><li>\u4F5C\u7528\u57DF\u94FE\uFF08<code>JS</code>\xA0\u91C7\u7528\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u662F\u5728\u5B9A\u4E49\u65F6\u5C31\u51B3\u5B9A\u4E86\uFF09</li><li><code>this</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 10
function foo(i) {
  var b = 20
}
foo()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u4E8E\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6267\u884C\u6808\u4E2D\u6709\u4E24\u4E2A\u4E0A\u4E0B\u6587\uFF1A\u5168\u5C40\u4E0A\u4E0B\u6587\u548C\u51FD\u6570 foo \u4E0A\u4E0B\u6587\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stack = [
    globalContext,
    fooContext
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u4E8E\u5168\u5C40\u4E0A\u4E0B\u6587\u6765\u8BF4\uFF0C<code>VO</code>\u5927\u6982\u662F\u8FD9\u6837\u7684</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>globalContext.VO === globe
globalContext.VO = {
    a: undefined,
	foo: &lt;Function&gt;,
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u4E8E\u51FD\u6570\xA0<code>foo</code>\xA0\u6765\u8BF4\uFF0C<code>VO</code>\xA0\u4E0D\u80FD\u8BBF\u95EE\uFF0C\u53EA\u80FD\u8BBF\u95EE\u5230\u6D3B\u52A8\u5BF9\u8C61\uFF08<code>AO</code>\uFF09</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fooContext.VO === foo.AO
fooContext.AO {
    i: undefined,
	b: undefined,
    arguments: &lt;&gt;
}
// arguments \u662F\u51FD\u6570\u72EC\u6709\u7684\u5BF9\u8C61(\u7BAD\u5934\u51FD\u6570\u6CA1\u6709)
// \u8BE5\u5BF9\u8C61\u662F\u4E00\u4E2A\u4F2A\u6570\u7EC4\uFF0C\u6709 \`length\` \u5C5E\u6027\u4E14\u53EF\u4EE5\u901A\u8FC7\u4E0B\u6807\u8BBF\u95EE\u5143\u7D20
// \u8BE5\u5BF9\u8C61\u4E2D\u7684 \`callee\` \u5C5E\u6027\u4EE3\u8868\u51FD\u6570\u672C\u8EAB
// \`caller\` \u5C5E\u6027\u4EE3\u8868\u51FD\u6570\u7684\u8C03\u7528\u8005

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u4E8E\u4F5C\u7528\u57DF\u94FE\uFF0C\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u6210\u5305\u542B\u81EA\u8EAB\u53D8\u91CF\u5BF9\u8C61\u548C\u4E0A\u7EA7\u53D8\u91CF\u5BF9\u8C61\u7684\u5217\u8868\uFF0C\u901A\u8FC7\xA0<code>[[Scope]]</code>\u5C5E\u6027\u67E5\u627E\u4E0A\u7EA7\u53D8\u91CF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fooContext.[[Scope]] = [
    globalContext.VO
]
fooContext.Scope = fooContext.[[Scope]] + fooContext.VO
fooContext.Scope = [
    fooContext.VO,
    globalContext.VO
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u770B\u4E00\u4E2A\u8001\u751F\u5E38\u8C08\u7684\u4F8B\u5B50\uFF0C<code>var</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>b() // call b
console.log(a) // undefined

var a = &#39;Hello world&#39;

function b() {
	console.log(&#39;call b&#39;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u60F3\u5FC5\u4EE5\u4E0A\u7684\u8F93\u51FA\u5927\u5BB6\u80AF\u5B9A\u90FD\u5DF2\u7ECF\u660E\u767D\u4E86\uFF0C\u8FD9\u662F\u56E0\u4E3A\u51FD\u6570\u548C\u53D8\u91CF\u63D0\u5347\u7684\u539F\u56E0\u3002\u901A\u5E38\u63D0\u5347\u7684\u89E3\u91CA\u662F\u8BF4\u5C06\u58F0\u660E\u7684\u4EE3\u7801\u79FB\u52A8\u5230\u4E86\u9876\u90E8\uFF0C\u8FD9\u5176\u5B9E\u6CA1\u6709\u4EC0\u4E48\u9519\u8BEF\uFF0C\u4FBF\u4E8E\u5927\u5BB6\u7406\u89E3\u3002\u4F46\u662F\u66F4\u51C6\u786E\u7684\u89E3\u91CA\u5E94\u8BE5\u662F\uFF1A\u5728\u751F\u6210\u6267\u884C\u4E0A\u4E0B\u6587\u65F6\uFF0C\u4F1A\u6709\u4E24\u4E2A\u9636\u6BB5\u3002\u7B2C\u4E00\u4E2A\u9636\u6BB5\u662F\u521B\u5EFA\u7684\u9636\u6BB5\uFF08\u5177\u4F53\u6B65\u9AA4\u662F\u521B\u5EFA\xA0<code>VO</code>\uFF09\uFF0C<code>JS</code>\xA0\u89E3\u91CA\u5668\u4F1A\u627E\u51FA\u9700\u8981\u63D0\u5347\u7684\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u5E76\u4E14\u7ED9\u4ED6\u4EEC\u63D0\u524D\u5728\u5185\u5B58\u4E2D\u5F00\u8F9F\u597D\u7A7A\u95F4\uFF0C\u51FD\u6570\u7684\u8BDD\u4F1A\u5C06\u6574\u4E2A\u51FD\u6570\u5B58\u5165\u5185\u5B58\u4E2D\uFF0C\u53D8\u91CF\u53EA\u58F0\u660E\u5E76\u4E14\u8D4B\u503C\u4E3A\xA0<code>undefined</code>\uFF0C\u6240\u4EE5\u5728\u7B2C\u4E8C\u4E2A\u9636\u6BB5\uFF0C\u4E5F\u5C31\u662F\u4EE3\u7801\u6267\u884C\u9636\u6BB5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u63D0\u524D\u4F7F\u7528\u3002</p></blockquote><ul><li>\u5728\u63D0\u5347\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u76F8\u540C\u7684\u51FD\u6570\u4F1A\u8986\u76D6\u4E0A\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u51FD\u6570\u4F18\u5148\u4E8E\u53D8\u91CF\u63D0\u5347</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>b() // call b second

function b() {
	console.log(&#39;call b fist&#39;)
}
function b() {
	console.log(&#39;call b second&#39;)
}
var b = &#39;Hello world&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>var</code>\u4F1A\u4EA7\u751F\u5F88\u591A\u9519\u8BEF\uFF0C\u6240\u4EE5\u5728\xA0<code>ES6</code>\u4E2D\u5F15\u5165\u4E86\xA0<code>let</code>\u3002<code>let</code>\u4E0D\u80FD\u5728\u58F0\u660E\u524D\u4F7F\u7528\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u662F\u5E38\u8BF4\u7684\xA0<code>let</code>\xA0\u4E0D\u4F1A\u63D0\u5347\uFF0C<code>let</code>\xA0\u63D0\u5347\u4E86\u58F0\u660E\u4F46\u6CA1\u6709\u8D4B\u503C\uFF0C\u56E0\u4E3A\u4E34\u65F6\u6B7B\u533A\u5BFC\u81F4\u4E86\u5E76\u4E0D\u80FD\u5728\u58F0\u660E\u524D\u4F7F\u7528\u3002</p></blockquote><ul><li>\u5BF9\u4E8E\u975E\u533F\u540D\u7684\u7ACB\u5373\u6267\u884C\u51FD\u6570\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u4E00\u70B9</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var foo = 1
(function foo() {
    foo = 10
    console.log(foo)
}()) // -&gt; \u0192 foo() { foo = 10 ; console.log(foo) }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u56E0\u4E3A\u5F53\xA0<code>JS</code>\xA0\u89E3\u91CA\u5668\u5728\u9047\u5230\u975E\u533F\u540D\u7684\u7ACB\u5373\u6267\u884C\u51FD\u6570\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u8F85\u52A9\u7684\u7279\u5B9A\u5BF9\u8C61\uFF0C\u7136\u540E\u5C06\u51FD\u6570\u540D\u79F0\u4F5C\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u56E0\u6B64\u51FD\u6570\u5185\u90E8\u624D\u53EF\u4EE5\u8BBF\u95EE\u5230\xA0<code>foo</code>\uFF0C\u4F46\u662F\u8FD9\u4E2A\u503C\u53C8\u662F\u53EA\u8BFB\u7684\uFF0C\u6240\u4EE5\u5BF9\u5B83\u7684\u8D4B\u503C\u5E76\u4E0D\u751F\u6548\uFF0C\u6240\u4EE5\u6253\u5370\u7684\u7ED3\u679C\u8FD8\u662F\u8FD9\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u5916\u90E8\u7684\u503C\u4E5F\u6CA1\u6709\u53D1\u751F\u66F4\u6539\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>specialObject = {};

Scope = specialObject + Scope;

foo = new FunctionExpression;
foo.[[Scope]] = Scope;
specialObject.foo = foo; // {DontDelete}, {ReadOnly}

delete Scope[0]; // remove specialObject from the front of scope chain

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><blockquote><p>\u6267\u884C\u4E0A\u4E0B\u6587\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\u4E00\u4E2A\u5BF9\u8C61:</p></blockquote><p>\u5B83\u5305\u542B\u4E09\u4E2A\u90E8\u5206:</p><ul><li>\u53D8\u91CF\u5BF9\u8C61(<code>VO</code>)</li><li>\u4F5C\u7528\u57DF\u94FE(\u8BCD\u6CD5\u4F5C\u7528\u57DF)</li><li><code>this</code>\u6307\u5411</li></ul><p>\u5B83\u7684\u7C7B\u578B:</p><ul><li>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</li><li>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</li><li><code>eval</code>\u6267\u884C\u4E0A\u4E0B\u6587</li></ul><p>\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B:</p><ul><li>\u521B\u5EFA \u5168\u5C40\u4E0A\u4E0B\u6587 (<code>global EC</code>)</li><li>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587 (<code>caller</code>) \u9010\u884C \u81EA\u4E0A\u800C\u4E0B \u6267\u884C\u3002\u9047\u5230\u51FD\u6570\u65F6\uFF0C\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587 (<code>callee</code>) \u88AB<code>push</code>\u5230\u6267\u884C\u6808\u9876\u5C42</li><li>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u6FC0\u6D3B\uFF0C\u6210\u4E3A\xA0<code>active EC</code>, \u5F00\u59CB\u6267\u884C\u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF0C<code>caller</code>\xA0\u88AB\u6302\u8D77</li><li>\u51FD\u6570\u6267\u884C\u5B8C\u540E\uFF0C<code>callee</code>\xA0\u88AB<code>pop</code>\u79FB\u9664\u51FA\u6267\u884C\u6808\uFF0C\u63A7\u5236\u6743\u4EA4\u8FD8\u5168\u5C40\u4E0A\u4E0B\u6587 (<code>caller</code>)\uFF0C\u7EE7\u7EED\u6267\u884C</li></ul><h2 id="_10-\u53D8\u91CF\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#_10-\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a> 10 \u53D8\u91CF\u63D0\u5347</h2><blockquote><p>\u5F53\u6267\u884C\xA0<code>JS</code>\xA0\u4EE3\u7801\u65F6\uFF0C\u4F1A\u751F\u6210\u6267\u884C\u73AF\u5883\uFF0C\u53EA\u8981\u4EE3\u7801\u4E0D\u662F\u5199\u5728\u51FD\u6570\u4E2D\u7684\uFF0C\u5C31\u662F\u5728\u5168\u5C40\u6267\u884C\u73AF\u5883\u4E2D\uFF0C\u51FD\u6570\u4E2D\u7684\u4EE3\u7801\u4F1A\u4EA7\u751F\u51FD\u6570\u6267\u884C\u73AF\u5883\uFF0C\u53EA\u6B64\u4E24\u79CD\u6267\u884C\u73AF\u5883\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>b() // call b
console.log(a) // undefined

var a = &#39;Hello world&#39;

function b() {
    console.log(&#39;call b&#39;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u60F3\u5FC5\u4EE5\u4E0A\u7684\u8F93\u51FA\u5927\u5BB6\u80AF\u5B9A\u90FD\u5DF2\u7ECF\u660E\u767D\u4E86\uFF0C\u8FD9\u662F\u56E0\u4E3A\u51FD\u6570\u548C\u53D8\u91CF\u63D0\u5347\u7684\u539F\u56E0\u3002\u901A\u5E38\u63D0\u5347\u7684\u89E3\u91CA\u662F\u8BF4\u5C06\u58F0\u660E\u7684\u4EE3\u7801\u79FB\u52A8\u5230\u4E86\u9876\u90E8\uFF0C\u8FD9\u5176\u5B9E\u6CA1\u6709\u4EC0\u4E48\u9519\u8BEF\uFF0C\u4FBF\u4E8E\u5927\u5BB6\u7406\u89E3\u3002\u4F46\u662F\u66F4\u51C6\u786E\u7684\u89E3\u91CA\u5E94\u8BE5\u662F\uFF1A\u5728\u751F\u6210\u6267\u884C\u73AF\u5883\u65F6\uFF0C\u4F1A\u6709\u4E24\u4E2A\u9636\u6BB5\u3002\u7B2C\u4E00\u4E2A\u9636\u6BB5\u662F\u521B\u5EFA\u7684\u9636\u6BB5\uFF0C<code>JS</code>\xA0\u89E3\u91CA\u5668\u4F1A\u627E\u51FA\u9700\u8981\u63D0\u5347\u7684\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u5E76\u4E14\u7ED9\u4ED6\u4EEC\u63D0\u524D\u5728\u5185\u5B58\u4E2D\u5F00\u8F9F\u597D\u7A7A\u95F4\uFF0C\u51FD\u6570\u7684\u8BDD\u4F1A\u5C06\u6574\u4E2A\u51FD\u6570\u5B58\u5165\u5185\u5B58\u4E2D\uFF0C\u53D8\u91CF\u53EA\u58F0\u660E\u5E76\u4E14\u8D4B\u503C\u4E3A\xA0<code>undefined</code>\uFF0C\u6240\u4EE5\u5728\u7B2C\u4E8C\u4E2A\u9636\u6BB5\uFF0C\u4E5F\u5C31\u662F\u4EE3\u7801\u6267\u884C\u9636\u6BB5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u63D0\u524D\u4F7F\u7528</p></blockquote><ul><li>\u5728\u63D0\u5347\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u76F8\u540C\u7684\u51FD\u6570\u4F1A\u8986\u76D6\u4E0A\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u51FD\u6570\u4F18\u5148\u4E8E\u53D8\u91CF\u63D0\u5347</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>b() // call b second

function b() {
    console.log(&#39;call b fist&#39;)
}
function b() {
    console.log(&#39;call b second&#39;)
}
var b = &#39;Hello world&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>var</code>\xA0\u4F1A\u4EA7\u751F\u5F88\u591A\u9519\u8BEF\uFF0C\u6240\u4EE5\u5728 ES6\u4E2D\u5F15\u5165\u4E86\xA0<code>let</code>\u3002<code>let</code>\u4E0D\u80FD\u5728\u58F0\u660E\u524D\u4F7F\u7528\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u662F\u5E38\u8BF4\u7684\xA0<code>let</code>\xA0\u4E0D\u4F1A\u63D0\u5347\uFF0C<code>let</code>\u63D0\u5347\u4E86\uFF0C\u5728\u7B2C\u4E00\u9636\u6BB5\u5185\u5B58\u4E5F\u5DF2\u7ECF\u4E3A\u4ED6\u5F00\u8F9F\u597D\u4E86\u7A7A\u95F4\uFF0C\u4F46\u662F\u56E0\u4E3A\u8FD9\u4E2A\u58F0\u660E\u7684\u7279\u6027\u5BFC\u81F4\u4E86\u5E76\u4E0D\u80FD\u5728\u58F0\u660E\u524D\u4F7F\u7528</p></blockquote><h2 id="_11-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#_11-\u6A21\u5757\u5316" aria-hidden="true">#</a> 11 \u6A21\u5757\u5316</h2><blockquote><p>\u6A21\u5757\u5316\u5F00\u53D1\u5728\u73B0\u4EE3\u5F00\u53D1\u4E2D\u5DF2\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u5927\u5927\u63D0\u9AD8\u4E86\u9879\u76EE\u7684\u53EF\u7EF4\u62A4\u3001\u53EF\u62D3\u5C55\u548C\u53EF\u534F\u4F5C\u6027\u3002\u901A\u5E38\uFF0C\u6211\u4EEC \u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\xA0<code>ES6</code>\xA0\u7684\u6A21\u5757\u5316\u652F\u6301\uFF0C\u5728\xA0<code>Node</code>\xA0\u4E2D\u4F7F\u7528\xA0<code>commonjs</code>\xA0\u7684\u6A21\u5757\u5316\u652F\u6301\u3002</p></blockquote><p>\u5206\u7C7B:</p><ul><li><code>es6: import / export</code></li><li><code>commonjs: require / module.exports / exports</code></li><li><code>amd: require / defined</code></li></ul><p>require\u4E0Eimport\u7684\u533A\u522B</p><ul><li><code>require</code>\u652F\u6301 \u52A8\u6001\u5BFC\u5165\uFF0C<code>import</code>\u4E0D\u652F\u6301\uFF0C\u6B63\u5728\u63D0\u6848 (<code>babel</code>\xA0\u4E0B\u53EF\u652F\u6301)</li><li><code>require</code>\u662F \u540C\u6B65 \u5BFC\u5165\uFF0C<code>impor</code>t\u5C5E\u4E8E \u5F02\u6B65 \u5BFC\u5165</li><li><code>require</code>\u662F \u503C\u62F7\u8D1D\uFF0C\u5BFC\u51FA\u503C\u53D8\u5316\u4E0D\u4F1A\u5F71\u54CD\u5BFC\u5165\u503C\uFF1B<code>import</code>\u6307\u5411 \u5185\u5B58\u5730\u5740\uFF0C\u5BFC\u5165\u503C\u4F1A\u968F\u5BFC\u51FA\u503C\u800C\u53D8\u5316</li></ul><h2 id="_12-settimeout\u3001promise\u3001async-await-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_12-settimeout\u3001promise\u3001async-await-\u7684\u533A\u522B" aria-hidden="true">#</a> 12 setTimeout\u3001Promise\u3001Async / Await \u7684\u533A\u522B</h2><ul><li>\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B\u57FA\u672C\u6982\u5FF5\uFF1A <ul><li>js EventLoop \u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236:</li><li>JavaScript\u7684\u4E8B\u4EF6\u5206\u4E24\u79CD\uFF0C\u5B8F\u4EFB\u52A1(macro-task)\u548C\u5FAE\u4EFB\u52A1(micro-task)</li></ul></li><li>\u5B8F\u4EFB\u52A1\uFF1A\u5305\u62EC\u6574\u4F53\u4EE3\u7801script\uFF0CsetTimeout\uFF0CsetInterval</li><li>\u5FAE\u4EFB\u52A1\uFF1APromise.then(\u975Enew Promise)\uFF0Cprocess.nextTick(node\u4E2D)</li><li>\u4E8B\u4EF6\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u662F\u5148\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u7136\u540E\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u8FD9\u4E2A\u662F\u57FA\u7840\uFF0C\u4EFB\u52A1\u53EF\u4EE5\u6709\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1\uFF0C\u540C\u6B65\u7684\u8FDB\u5165\u4E3B\u7EBF\u7A0B\uFF0C\u5F02\u6B65\u7684\u8FDB\u5165Event Table\u5E76\u6CE8\u518C\u51FD\u6570\uFF0C\u5F02\u6B65\u4E8B\u4EF6\u5B8C\u6210\u540E\uFF0C\u4F1A\u5C06\u56DE\u8C03\u51FD\u6570\u653E\u5165Event Queue\u4E2D(\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u662F\u4E0D\u540C\u7684Event Queue)\uFF0C\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F1A\u4ECEEvent Queue\u4E2D\u8BFB\u53D6\u4E8B\u4EF6\u653E\u5165\u4E3B\u7EBF\u7A0B\u6267\u884C\uFF0C\u56DE\u8C03\u51FD\u6570\u4E2D\u53EF\u80FD\u8FD8\u4F1A\u5305\u542B\u4E0D\u540C\u7684\u4EFB\u52A1\uFF0C\u56E0\u6B64\u4F1A\u5FAA\u73AF\u6267\u884C\u4E0A\u8FF0\u64CD\u4F5C\u3002</li><li>\u6CE8\u610F\uFF1A setTimeOut\u5E76\u4E0D\u662F\u76F4\u63A5\u7684\u628A\u4F60\u7684\u56DE\u6389\u51FD\u6570\u653E\u8FDB\u4E0A\u8FF0\u7684\u5F02\u6B65\u961F\u5217\u4E2D\u53BB\uFF0C\u800C\u662F\u5728\u5B9A\u65F6\u5668\u7684\u65F6\u95F4\u5230\u4E86\u4E4B\u540E\uFF0C\u628A\u56DE\u6389\u51FD\u6570\u653E\u5230\u6267\u884C\u5F02\u6B65\u961F\u5217\u4E2D\u53BB\u3002\u5982\u679C\u6B64\u65F6\u8FD9\u4E2A\u961F\u5217\u5DF2\u7ECF\u6709\u5F88\u591A\u4EFB\u52A1\u4E86\uFF0C\u90A3\u5C31\u6392\u5728\u4ED6\u4EEC\u7684\u540E\u9762\u3002\u8FD9\u4E5F\u5C31\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48setTimeOut\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u7CBE\u51C6\u7684\u6267\u884C\u7684\u95EE\u9898\u4E86\u3002</li><li>setTimeout\u6267\u884C\u9700\u8981\u6EE1\u8DB3\u4E24\u4E2A\u6761\u4EF6\uFF1A <ul><li>\u4E3B\u8FDB\u7A0B\u5FC5\u987B\u662F\u7A7A\u95F2\u7684\u72B6\u6001\uFF0C\u5982\u679C\u5230\u65F6\u95F4\u4E86\uFF0C\u4E3B\u8FDB\u7A0B\u4E0D\u7A7A\u95F2\u4E5F\u4E0D\u4F1A\u6267\u884C\u4F60\u7684\u56DE\u6389\u51FD\u6570</li><li>\u8FD9\u4E2A\u56DE\u6389\u51FD\u6570\u9700\u8981\u7B49\u5230\u63D2\u5165\u5F02\u6B65\u961F\u5217\u65F6\u524D\u9762\u7684\u5F02\u6B65\u51FD\u6570\u90FD\u6267\u884C\u5B8C\u4E86\uFF0C\u624D\u4F1A\u6267\u884C</li></ul></li><li>\u4E0A\u9762\u662F\u6BD4\u8F83\u5B98\u65B9\u7684\u89E3\u91CA\uFF0C\u8BF4\u4E00\u4E0B\u81EA\u5DF1\u7684\u7406\u89E3\u5427\uFF1A <ul><li>\u4E86\u89E3\u4E86\u4EC0\u4E48\u662F\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\uFF0C\u5C31\u597D\u7406\u89E3\u591A\u4E86\uFF0C\u9996\u5148\u6267\u884C \u5B8F\u4EFB\u52A1 =&gt; \u5FAE\u4EFB\u52A1\u7684Event Queue =&gt; \u5B8F\u4EFB\u52A1\u7684Event Queue</li></ul></li><li>promise\u3001async/await <ul><li>\u9996\u5148\uFF0Cnew Promise\u662F\u540C\u6B65\u7684\u4EFB\u52A1\uFF0C\u4F1A\u88AB\u653E\u5230\u4E3B\u8FDB\u7A0B\u4E2D\u53BB\u7ACB\u5373\u6267\u884C\u3002\u800C.then()\u51FD\u6570\u662F\u5F02\u6B65\u4EFB\u52A1\u4F1A\u653E\u5230\u5F02\u6B65\u961F\u5217\u4E2D\u53BB\uFF0C\u90A3\u4EC0\u4E48\u65F6\u5019\u653E\u5230\u5F02\u6B65\u961F\u5217\u4E2D\u53BB\u5462\uFF1F\u5F53\u4F60\u7684promise\u72B6\u6001\u7ED3\u675F\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u7ACB\u5373\u653E\u8FDB\u5F02\u6B65\u961F\u5217\u4E2D\u53BB\u4E86\u3002</li><li>\u5E26async\u5173\u952E\u5B57\u7684\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u5982\u679C\u91CC\u9762\u6CA1\u6709await\uFF0C\u6267\u884C\u8D77\u6765\u7B49\u540C\u4E8E\u666E\u901A\u51FD\u6570\uFF1B\u5982\u679C\u6CA1\u6709await\uFF0Casync\u51FD\u6570\u5E76\u6CA1\u6709\u5F88\u5389\u5BB3\u662F\u4E0D\u662F</li><li>await \u5173\u952E\u5B57\u8981\u5728 async \u5173\u952E\u5B57\u51FD\u6570\u7684\u5185\u90E8\uFF0Cawait \u5199\u5728\u5916\u9762\u4F1A\u62A5\u9519\uFF1Bawait\u5982\u540C\u4ED6\u7684\u8BED\u610F\uFF0C\u5C31\u662F\u5728\u7B49\u5F85\uFF0C\u7B49\u5F85\u53F3\u4FA7\u7684\u8868\u8FBE\u5F0F\u5B8C\u6210\u3002\u6B64\u65F6\u7684await\u4F1A\u8BA9\u51FA\u7EBF\u7A0B\uFF0C\u963B\u585Easync\u5185\u540E\u7EED\u7684\u4EE3\u7801\uFF0C\u5148\u53BB\u6267\u884Casync\u5916\u7684\u4EE3\u7801\u3002\u7B49\u5916\u9762\u7684\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\uFF0C\u624D\u4F1A\u6267\u884C\u91CC\u9762\u7684\u540E\u7EED\u4EE3\u7801\u3002\u5C31\u7B97await\u7684\u4E0D\u662Fpromise\u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2A\u540C\u6B65\u51FD\u6570\uFF0C\u4E5F\u4F1A\u7B49\u8FD9\u6837\u64CD\u4F5C</li></ul></li></ul><p><img src="`+f+`" alt=""></p><p>\u6839\u636E\u56FE\u7247\u663E\u793A\u6211\u4EEC\u6765\u6574\u7406\u4E00\u4E0B\u6D41\u7A0B\uFF1A</p><ul><li>\u6267\u884C<code>console.log(&#39;script start&#39;)</code>\uFF0C\u8F93\u51FA<code>script start</code>\uFF1B</li><li>\u6267\u884C<code>setTimeout</code>\uFF0C\u662F\u4E00\u4E2A\u5F02\u6B65\u52A8\u4F5C\uFF0C\u653E\u5165\u5B8F\u4EFB\u52A1\u5F02\u6B65\u961F\u5217\u4E2D\uFF1B</li><li>\u6267\u884C<code>async1()</code>\uFF0C\u8F93\u51FA<code>async1 start</code>\uFF0C\u7EE7\u7EED\u5411\u4E0B\u6267\u884C\uFF1B</li><li>\u6267\u884C<code>async2()</code>\uFF0C\u8F93\u51FA<code>async2</code>\uFF0C\u5E76\u8FD4\u56DE\u4E86\u4E00\u4E2A<code>promise</code>\u5BF9\u8C61\uFF0C<code>await</code>\u8BA9\u51FA\u4E86\u7EBF\u7A0B\uFF0C\u628A\u8FD4\u56DE\u7684promise\u52A0\u5165\u4E86\u5FAE\u4EFB\u52A1\u5F02\u6B65\u961F\u5217\uFF0C\u6240\u4EE5<code>async1()</code>\u4E0B\u9762\u7684\u4EE3\u7801\u4E5F\u8981\u7B49\u5F85\u4E0A\u9762\u5B8C\u6210\u540E\u7EE7\u7EED\u6267\u884C;</li><li>\u6267\u884C\xA0<code>new Promise</code>\uFF0C\u8F93\u51FA<code>promise1</code>\uFF0C\u7136\u540E\u5C06<code>resolve</code>\u653E\u5165\u5FAE\u4EFB\u52A1\u5F02\u6B65\u961F\u5217\uFF1B</li><li>\u6267\u884C<code>console.log(&#39;script end&#39;)</code>\uFF0C\u8F93\u51FA<code>script end</code>\uFF1B</li><li>\u5230\u6B64\u540C\u6B65\u7684\u4EE3\u7801\u5C31\u90FD\u6267\u884C\u5B8C\u6210\u4E86\uFF0C\u7136\u540E\u53BB\u5FAE\u4EFB\u52A1\u5F02\u6B65\u961F\u5217\u91CC\u53BB\u83B7\u53D6\u4EFB\u52A1</li><li>\u63A5\u4E0B\u6765\u6267\u884C<code>resolve</code>\uFF08<code>async2</code>\u8FD4\u56DE\u7684<code>promise</code>\u8FD4\u56DE\u7684\uFF09\uFF0C\u8F93\u51FA\u4E86<code>async1 end</code>\u3002</li><li>\u7136\u540E\u6267\u884C<code>resolve</code>\uFF08<code>new Promise</code>\u7684\uFF09\uFF0C\u8F93\u51FA\u4E86<code>promise2</code></li><li>\u6700\u540E\u6267\u884C<code>setTimeout</code>\uFF0C\u8F93\u51FA\u4E86<code>settimeout</code></li></ul><h2 id="_13-async\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_13-async\u539F\u7406" aria-hidden="true">#</a> 13 async\u539F\u7406</h2><blockquote><p><code>async/await</code>\u8BED\u6CD5\u7CD6\u5C31\u662F\u4F7F\u7528<code>Generator</code>\u51FD\u6570+\u81EA\u52A8\u6267\u884C\u5668\u6765\u8FD0\u4F5C\u7684</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u4E86\u4E00\u4E2Apromise\uFF0C\u7528\u6765\u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42\uFF0C\u4F5C\u7528\u662F\u4F20\u5165\u53C2\u6570++
function getNum(num){
    return new Promise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
            resolve(num+1)
        }, 1000)
    })
}

//\u81EA\u52A8\u6267\u884C\u5668\uFF0C\u5982\u679C\u4E00\u4E2AGenerator\u51FD\u6570\u6CA1\u6709\u6267\u884C\u5B8C\uFF0C\u5219\u9012\u5F52\u8C03\u7528
function asyncFun(func){
  var gen = func();

  function next(data){
    var result = gen.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    });
  }

  next();
}

// \u6240\u9700\u8981\u6267\u884C\u7684Generator\u51FD\u6570\uFF0C\u5185\u90E8\u7684\u6570\u636E\u5728\u6267\u884C\u5B8C\u6210\u4E00\u6B65\u7684promise\u4E4B\u540E\uFF0C\u518D\u8C03\u7528\u4E0B\u4E00\u6B65
var func = function* (){
  var f1 = yield getNum(1);
  var f2 = yield getNum(f1);
  console.log(f2) ;
};
asyncFun(func);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5224\u65AD\u4E00\u4E2A\u51FD\u6570\u7684<code>promise</code>\u662F\u5426\u5B8C\u6210\uFF0C\u5982\u679C\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u5C06\u7ED3\u679C\u4F20\u5165\u4E0B\u4E00\u4E2A\u51FD\u6570\uFF0C\u7EE7\u7EED\u91CD\u590D\u6B64\u6B65\u9AA4</li><li>\u6BCF\u4E00\u4E2A\xA0<code>next()</code>\xA0\u65B9\u6CD5\u8FD4\u56DE\u503C\u7684\xA0<code>value</code>\xA0\u5C5E\u6027\u4E3A\u4E00\u4E2A\xA0<code>Promise</code>\xA0\u5BF9\u8C61\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E3A\u5176\u6DFB\u52A0\xA0<code>then</code>\xA0\u65B9\u6CD5\uFF0C \u5728\xA0<code>then</code>\xA0\u65B9\u6CD5\u91CC\u9762\u63A5\u7740\u8FD0\u884C\xA0<code>next</code>\xA0\u65B9\u6CD5\u632A\u79FB\u904D\u5386\u5668\u6307\u9488\uFF0C\u76F4\u5230\xA0<code>Generator</code>\u51FD\u6570\u8FD0\u884C\u5B8C\u6210</li></ul><h2 id="_14-js-\u6574\u6570\u662F\u600E\u4E48\u8868\u793A\u7684" tabindex="-1"><a class="header-anchor" href="#_14-js-\u6574\u6570\u662F\u600E\u4E48\u8868\u793A\u7684" aria-hidden="true">#</a> 14 JS \u6574\u6570\u662F\u600E\u4E48\u8868\u793A\u7684</h2><blockquote><p>\u901A\u8FC7 Number \u7C7B\u578B\u6765\u8868\u793A\uFF0C\u9075\u5FAA IEEE754 \u6807\u51C6\uFF0C\u901A\u8FC7 64 \u4F4D\u6765\u8868\u793A\u4E00\u4E2A\u6570\u5B57\uFF0C\uFF081 + 11 + 52\uFF09\uFF0C\u6700\u5927\u5B89\u5168\u6570\u5B57\u662F Math.pow(2, 53) - 1\uFF0C\u5BF9\u4E8E 16 \u4F4D\u5341\u8FDB\u5236\u3002\uFF08\u7B26\u53F7\u4F4D + \u6307\u6570\u4F4D + \u5C0F\u6570\u90E8\u5206\u6709\u6548\u4F4D\uFF09</p></blockquote><h2 id="_15-number-\u7684\u5B58\u50A8\u7A7A\u95F4\u662F\u591A\u5927-\u5982\u679C\u540E\u53F0\u53D1\u9001\u4E86\u4E00\u4E2A\u8D85\u8FC7\u6700\u5927\u81EA\u5DF1\u7684\u6570\u5B57\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#_15-number-\u7684\u5B58\u50A8\u7A7A\u95F4\u662F\u591A\u5927-\u5982\u679C\u540E\u53F0\u53D1\u9001\u4E86\u4E00\u4E2A\u8D85\u8FC7\u6700\u5927\u81EA\u5DF1\u7684\u6570\u5B57\u600E\u4E48\u529E" aria-hidden="true">#</a> 15 Number() \u7684\u5B58\u50A8\u7A7A\u95F4\u662F\u591A\u5927\uFF1F\u5982\u679C\u540E\u53F0\u53D1\u9001\u4E86\u4E00\u4E2A\u8D85\u8FC7\u6700\u5927\u81EA\u5DF1\u7684\u6570\u5B57\u600E\u4E48\u529E</h2><blockquote><p>Math.pow(2, 53) \uFF0C53 \u4E3A\u6709\u6548\u6570\u5B57\uFF0C\u4F1A\u53D1\u751F\u622A\u65AD\uFF0C\u7B49\u4E8E JS \u80FD\u652F\u6301\u7684\u6700\u5927\u6570\u5B57\u3002</p></blockquote><h2 id="_16-settimeout-fn-0-\u591A\u4E45\u624D\u6267\u884C-event-loop" tabindex="-1"><a class="header-anchor" href="#_16-settimeout-fn-0-\u591A\u4E45\u624D\u6267\u884C-event-loop" aria-hidden="true">#</a> 16 setTimeout(fn, 0)\u591A\u4E45\u624D\u6267\u884C\uFF0CEvent Loop</h2><blockquote><p>setTimeout \u6309\u7167\u987A\u5E8F\u653E\u5230\u961F\u5217\u91CC\u9762\uFF0C\u7136\u540E\u7B49\u5F85\u51FD\u6570\u8C03\u7528\u6808\u6E05\u7A7A\u4E4B\u540E\u624D\u5F00\u59CB\u6267\u884C\uFF0C\u800C\u8FD9\u4E9B\u64CD\u4F5C\u8FDB\u5165\u961F\u5217\u7684\u987A\u5E8F\uFF0C\u5219\u7531\u8BBE\u5B9A\u7684\u5EF6\u8FDF\u65F6\u95F4\u6765\u51B3\u5B9A</p></blockquote><h2 id="_17-js\u811A\u672C\u52A0\u8F7D\u95EE\u9898-async\u3001defer\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_17-js\u811A\u672C\u52A0\u8F7D\u95EE\u9898-async\u3001defer\u95EE\u9898" aria-hidden="true">#</a> 17 js\u811A\u672C\u52A0\u8F7D\u95EE\u9898\uFF0Casync\u3001defer\u95EE\u9898</h2><ul><li>\u5982\u679C\u4F9D\u8D56\u5176\u4ED6\u811A\u672C\u548C DOM \u7ED3\u679C\uFF0C\u4F7F\u7528 defer</li><li>\u5982\u679C\u4E0E DOM \u548C\u5176\u4ED6\u811A\u672C\u4F9D\u8D56\u4E0D\u5F3A\u65F6\uFF0C\u4F7F\u7528 async</li></ul><p>script \u5F15\u5165\u65B9\u5F0F</p><ul><li><code>html</code>\xA0\u9759\u6001<code>&lt;script&gt;</code>\u5F15\u5165</li><li><code>js</code>\xA0\u52A8\u6001\u63D2\u5165<code>&lt;script&gt;</code></li><li><code>&lt;script defer&gt;</code>: \u5F02\u6B65\u52A0\u8F7D\uFF0C\u5143\u7D20\u89E3\u6790\u5B8C\u6210\u540E\u6267\u884C</li><li><code>&lt;script async&gt;</code>: \u5F02\u6B65\u52A0\u8F7D\uFF0C\u4F46\u6267\u884C\u65F6\u4F1A\u963B\u585E\u5143\u7D20\u6E32\u67D3</li></ul><h2 id="_18-javascript\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#_18-javascript\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u4E86\u89E3" aria-hidden="true">#</a> 18 JavaScript\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u4E86\u89E3</h2><ul><li>\u5BF9\u4E8E\u5728JavaScript\u4E2D\u7684\u5B57\u7B26\u4E32\uFF0C\u5BF9\u8C61\uFF0C\u6570\u7EC4\u662F\u6CA1\u6709\u56FA\u5B9A\u5927\u5C0F\u7684\uFF0C\u53EA\u6709\u5F53\u5BF9\u4ED6\u4EEC\u8FDB\u884C\u52A8\u6001\u5206\u914D\u5B58\u50A8\u65F6\uFF0C\u89E3\u91CA\u5668\u5C31\u4F1A\u5206\u914D\u5185\u5B58\u6765\u5B58\u50A8\u8FD9\u4E9B\u6570\u636E\uFF0C\u5F53JavaScript\u7684\u89E3\u91CA\u5668\u6D88\u8017\u5B8C\u7CFB\u7EDF\u4E2D\u6240\u6709\u53EF\u7528\u7684\u5185\u5B58\u65F6\uFF0C\u5C31\u4F1A\u9020\u6210\u7CFB\u7EDF\u5D29\u6E83\u3002</li><li>\u5185\u5B58\u6CC4\u6F0F\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u518D\u4F7F\u7528\u5230\u7684\u53D8\u91CF\u6240\u5360\u7528\u5185\u5B58\u6CA1\u6709\u53CA\u65F6\u91CA\u653E\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u8FD0\u884C\u4E2D\uFF0C\u5185\u5B58\u8D8A\u5360\u8D8A\u5927\uFF0C\u6781\u7AEF\u60C5\u51B5\u4E0B\u53EF\u4EE5\u5BFC\u81F4\u7CFB\u7EDF\u5D29\u6E83\uFF0C\u670D\u52A1\u5668\u5B95\u673A\u3002</li><li>JavaScript\u6709\u81EA\u5DF1\u7684\u4E00\u5957\u5783\u573E\u56DE\u6536\u673A\u5236\uFF0CJavaScript\u7684\u89E3\u91CA\u5668\u53EF\u4EE5\u68C0\u6D4B\u5230\u4EC0\u4E48\u65F6\u5019\u7A0B\u5E8F\u4E0D\u518D\u4F7F\u7528\u8FD9\u4E2A\u5BF9\u8C61\u4E86\uFF08\u6570\u636E\uFF09\uFF0C\u5C31\u4F1A\u628A\u5B83\u6240\u5360\u7528\u7684\u5185\u5B58\u91CA\u653E\u6389\u3002</li><li>\u9488\u5BF9JavaScript\u7684\u6765\u53CA\u56DE\u6536\u673A\u5236\u6709\u4EE5\u4E0B\u4E24\u79CD\u65B9\u6CD5\uFF08\u5E38\u7528\uFF09\uFF1A\u6807\u8BB0\u6E05\u9664\uFF0C\u5F15\u7528\u8BA1\u6570</li><li>\u6807\u8BB0\u6E05\u9664</li></ul><h2 id="_19-\u8BF4\u8BF4\u6709\u51E0\u79CD\u7C7B\u578B\u7684dom\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_19-\u8BF4\u8BF4\u6709\u51E0\u79CD\u7C7B\u578B\u7684dom\u8282\u70B9" aria-hidden="true">#</a> 19 \u8BF4\u8BF4\u6709\u51E0\u79CD\u7C7B\u578B\u7684DOM\u8282\u70B9</h2><ul><li>Document\u8282\u70B9\uFF0C\u6574\u4E2A\u6587\u6863\u662F\u4E00\u4E2A\u6587\u6863\u8282\u70B9\uFF1B</li><li>Element\u8282\u70B9\uFF0C\u6BCF\u4E2AHTML\u6807\u7B7E\u662F\u4E00\u4E2A\u5143\u7D20\u8282\u70B9\uFF1B</li><li>Attribute\u8282\u70B9\uFF0C\u6BCF\u4E00\u4E2AHTML\u5C5E\u6027\u662F\u4E00\u4E2A\u5C5E\u6027\u8282\u70B9\uFF1B</li><li>Text\u8282\u70B9\uFF0C\u5305\u542B\u5728HTML\u5143\u7D20\u4E2D\u7684\u6587\u672C\u662F\u6587\u672C\u8282\u70B9</li></ul><h2 id="_20-\u8BF4\u8BF4javascript\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_20-\u8BF4\u8BF4javascript\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F" aria-hidden="true">#</a> 20 \u8BF4\u8BF4JavaScript\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F</h2><h3 id="\u5DE5\u5382\u6A21\u5F0F-\u521B\u5EFA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u6A21\u5F0F-\u521B\u5EFA\u65B9\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u6A21\u5F0F,\u521B\u5EFA\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createPerson(name,age,job){
    var o = new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName = function(){
        alert(this.name);
    }
}
var person1 = createPerson(&quot;da&quot;,1,&quot;it&quot;);
var person2 = createPerson(&quot;dada&quot;,2,&quot;it&quot;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6784\u9020\u51FD\u6570\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u6A21\u5F0F" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u6A21\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person(name,age,ob){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName = function(){
        alert(this.name);
    }
var person1 = new Person(&quot;dada&quot;,1,&quot;web&quot;);
var person2 = new Person(&quot;dada&quot;,2,&quot;web&quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u539F\u578B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u539F\u578B\u6A21\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u539F\u578B\u6A21\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person(){
}
Person.prototype.name = &quot;da&quot;;
Person.prototype.age = 1;
Person.prototype.job = &quot;web&quot;;
Person.prototype.sayName = function(){
    alert(this.name);
}

var person1 = new Person();
person1.sayName();    //&quot;dada&quot;

var person2 = new Person();
person2.sayName();    //&quot;dada&quot;

alert(person1.sayName == person2.sayName);   //true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u5408\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6A21\u5F0F\u548C\u539F\u578B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6A21\u5F0F\u548C\u539F\u578B\u6A21\u5F0F" aria-hidden="true">#</a> \u7EC4\u5408\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6A21\u5F0F\u548C\u539F\u578B\u6A21\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person(name,age){
    this.name = name;
    this.age = age;
    this.friends = [&quot;da&quot;,&quot;dada&quot;];
}
Person.prototype = {
    constructor:Person,
    sayName:function(){
        alert(this.name);
    }
}
var person1 = new Person(&quot;da1&quot;,1);
var person2 = new Person(&quot;da2&quot;,2);
person1.friends.push(&quot;dadada&quot;);
console.log(person1.friends);    //[&quot;da&quot;,&quot;dada&quot;,&quot;dadada&quot;]
console.log(person2.friends);    //[&quot;da&quot;,&quot;dada&quot;]
console.log(person1.friends === person2.friends);    //false
console.log(person1.sayName === person2.sayName);   //true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u6001\u539F\u578B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u539F\u578B\u6A21\u5F0F" aria-hidden="true">#</a> \u52A8\u6001\u539F\u578B\u6A21\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;

    if(typeof this.sayName!=&quot;function&quot;){
        Person.prototype.sayName=function(){
            alert(this.name);
        };
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-\u5982\u4F55\u8F6C\u5316\u7C7B\u6570\u7EC4\u6210\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_21-\u5982\u4F55\u8F6C\u5316\u7C7B\u6570\u7EC4\u6210\u6570\u7EC4" aria-hidden="true">#</a> 21 \u5982\u4F55\u8F6C\u5316\u7C7B\u6570\u7EC4\u6210\u6570\u7EC4</h2><blockquote><p>\u56E0\u4E3A<code>arguments</code>\u672C\u8EAB\u5E76\u4E0D\u80FD\u8C03\u7528\u6570\u7EC4\u65B9\u6CD5\uFF0C\u5B83\u662F\u4E00\u4E2A\u53E6\u5916\u4E00\u79CD\u5BF9\u8C61\u7C7B\u578B\uFF0C\u53EA\u4E0D\u8FC7\u5C5E\u6027\u4ECE<code>0</code>\u5F00\u59CB\u6392\uFF0C\u4F9D\u6B21\u4E3A<code>0\uFF0C1\uFF0C2...</code>\u6700\u540E\u8FD8\u6709<code>callee</code>\u548C<code>length</code>\u5C5E\u6027\u3002\u6211\u4EEC\u4E5F\u628A\u8FD9\u6837\u7684\u5BF9\u8C61\u79F0\u4E3A\u7C7B\u6570\u7EC4</p></blockquote><p>\u5E38\u89C1\u7684\u7C7B\u6570\u7EC4\u8FD8\u6709\uFF1A</p><ul><li>\u7528<code>getElementsByTagName/ClassName()</code>\u83B7\u5F97\u7684<code>HTMLCollection</code></li><li>\u7528<code>querySelector</code>\u83B7\u5F97\u7684<code>nodeList</code></li></ul><blockquote><p>\u90A3\u8FD9\u5BFC\u81F4\u5F88\u591A\u6570\u7EC4\u7684\u65B9\u6CD5\u5C31\u4E0D\u80FD\u7528\u4E86\uFF0C\u5FC5\u8981\u65F6\u9700\u8981\u6211\u4EEC\u5C06\u5B83\u4EEC\u8F6C\u6362\u6210\u6570\u7EC4\uFF0C\u6709\u54EA\u4E9B\u65B9\u6CD5\u5462\uFF1F</p></blockquote><h3 id="array-prototype-slice-call" tabindex="-1"><a class="header-anchor" href="#array-prototype-slice-call" aria-hidden="true">#</a> Array.prototype.slice.call()</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function sum(a, b) {
  let args = Array.prototype.slice.call(arguments);
  console.log(args.reduce((sum, cur) =&gt; sum + cur));//args\u53EF\u4EE5\u8C03\u7528\u6570\u7EC4\u539F\u751F\u7684\u65B9\u6CD5\u5566
}
sum(1, 2);//3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function sum(a, b) {
  let args = Array.from(arguments);
  console.log(args.reduce((sum, cur) =&gt; sum + cur));//args\u53EF\u4EE5\u8C03\u7528\u6570\u7EC4\u539F\u751F\u7684\u65B9\u6CD5\u5566
}
sum(1, 2);//3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u7528\u6765\u8F6C\u6362<code>Set</code>\u548C<code>Map</code>\u54E6\uFF01</p><h3 id="es6\u5C55\u5F00\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#es6\u5C55\u5F00\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> ES6\u5C55\u5F00\u8FD0\u7B97\u7B26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function sum(a, b) {
  let args = [...arguments];
  console.log(args.reduce((sum, cur) =&gt; sum + cur));//args\u53EF\u4EE5\u8C03\u7528\u6570\u7EC4\u539F\u751F\u7684\u65B9\u6CD5\u5566
}
sum(1, 2);//3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5229\u7528concat-apply" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528concat-apply" aria-hidden="true">#</a> \u5229\u7528concat+apply</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function sum(a, b) {
  let args = Array.prototype.concat.apply([], arguments);//apply\u65B9\u6CD5\u4F1A\u628A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5C55\u5F00
  console.log(args.reduce((sum, cur) =&gt; sum + cur));//args\u53EF\u4EE5\u8C03\u7528\u6570\u7EC4\u539F\u751F\u7684\u65B9\u6CD5\u5566
}
sum(1, 2);//3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-foreach\u4E2Dreturn\u6709\u6548\u679C\u5417-\u5982\u4F55\u4E2D\u65ADforeach\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_22-foreach\u4E2Dreturn\u6709\u6548\u679C\u5417-\u5982\u4F55\u4E2D\u65ADforeach\u5FAA\u73AF" aria-hidden="true">#</a> 22 forEach\u4E2Dreturn\u6709\u6548\u679C\u5417\uFF1F\u5982\u4F55\u4E2D\u65ADforEach\u5FAA\u73AF\uFF1F</h2><blockquote><p>\u5728<code>forEach</code>\u4E2D\u7528<code>return</code>\u4E0D\u4F1A\u8FD4\u56DE\uFF0C\u51FD\u6570\u4F1A\u7EE7\u7EED\u6267\u884C\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let nums = [1, 2, 3];
nums.forEach((item, index) =&gt; {
  return;//\u65E0\u6548
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E2D\u65AD\u65B9\u6CD5\uFF1A</p><ul><li>\u4F7F\u7528<code>try</code>\u76D1\u89C6\u4EE3\u7801\u5757\uFF0C\u5728\u9700\u8981\u4E2D\u65AD\u7684\u5730\u65B9\u629B\u51FA\u5F02\u5E38\u3002</li><li>\u5B98\u65B9\u63A8\u8350\u65B9\u6CD5\uFF08\u66FF\u6362\u65B9\u6CD5\uFF09\uFF1A\u7528<code>every</code>\u548C<code>some</code>\u66FF\u4EE3<code>forEach</code>\u51FD\u6570\u3002<code>every</code>\u5728\u78B0\u5230<code>return false</code>\u7684\u65F6\u5019\uFF0C\u4E2D\u6B62\u5FAA\u73AF\u3002<code>some</code>\u5728\u78B0\u5230<code>return true</code>\u7684\u65F6\u5019\uFF0C\u4E2D\u6B62\u5FAA\u73AF</li></ul><h2 id="_23-js\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E2A\u503C" tabindex="-1"><a class="header-anchor" href="#_23-js\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E2A\u503C" aria-hidden="true">#</a> 23 JS\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E2A\u503C</h2><h3 id="\u65B9\u6CD5\u4E00-array-indexof" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-array-indexof" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1Aarray.indexOf</h3><blockquote><p>\u6B64\u65B9\u6CD5\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u67D0\u4E2A\u503C\uFF0C\u5982\u679C\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE\u6570\u7EC4\u5143\u7D20\u7684\u4E0B\u6807\uFF0C\u5426\u5219\u8FD4\u56DE<code>-1</code>\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr=[1,2,3,4];
var index=arr.indexOf(3);
console.log(index);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u4E8C-array-includes-searcelement-fromindex" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-array-includes-searcelement-fromindex" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\uFF1Aarray.includes(searcElement[,fromIndex])</h3><blockquote><p>\u6B64\u65B9\u6CD5\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u67D0\u4E2A\u503C\uFF0C\u5982\u679C\u5B58\u5728\u8FD4\u56DE<code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE<code>false</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr=[1,2,3,4];
if(arr.includes(3))
    console.log(&quot;\u5B58\u5728&quot;);
else
    console.log(&quot;\u4E0D\u5B58\u5728&quot;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u4E09-array-find-callback-thisarg" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09-array-find-callback-thisarg" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09\uFF1Aarray.find(callback[,thisArg])</h3><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6EE1\u8DB3\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u503C\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u8FD4\u56DE<code>undefined</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr=[1,2,3,4];
var result = arr.find(item =&gt;{
    return item &gt; 3
});
console.log(result);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u56DB-array-findeindex-callback-thisarg" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u56DB-array-findeindex-callback-thisarg" aria-hidden="true">#</a> \u65B9\u6CD5\u56DB\uFF1Aarray.findeIndex(callback[,thisArg])</h3><blockquote><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6EE1\u8DB3\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u4E0B\u6807\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u8FD4\u56DE<code>-1</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr=[1,2,3,4];
var result = arr.findIndex(item =&gt;{
    return item &gt; 3
});
console.log(result);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-js\u4E2Dflat-\u6570\u7EC4\u6241\u5E73\u5316" tabindex="-1"><a class="header-anchor" href="#_24-js\u4E2Dflat-\u6570\u7EC4\u6241\u5E73\u5316" aria-hidden="true">#</a> 24 JS\u4E2Dflat---\u6570\u7EC4\u6241\u5E73\u5316</h2><blockquote><p>\u5BF9\u4E8E\u524D\u7AEF\u9879\u76EE\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u5076\u5C14\u4F1A\u51FA\u73B0\u5C42\u53E0\u6570\u636E\u7ED3\u6784\u7684\u6570\u7EC4\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u591A\u5C42\u7EA7\u6570\u7EC4\u8F6C\u5316\u4E3A\u4E00\u7EA7\u6570\u7EC4\uFF08\u5373\u63D0\u53D6\u5D4C\u5957\u6570\u7EC4\u5143\u7D20\u6700\u7EC8\u5408\u5E76\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF09\uFF0C\u4F7F\u5176\u5185\u5BB9\u5408\u5E76\u4E14\u5C55\u5F00\u3002\u90A3\u4E48\u8BE5\u5982\u4F55\u53BB\u5B9E\u73B0\u5462\uFF1F</p></blockquote><p>\u9700\u6C42:\u591A\u7EF4\u6570\u7EC4=&gt;\u4E00\u7EF4\u6570\u7EC4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let ary = [1, [2, [3, [4, 5]]], 6];// -&gt; [1, 2, 3, 4, 5, 6]
let str = JSON.stringify(ary);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8C03\u7528es6\u4E2D\u7684flat\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528es6\u4E2D\u7684flat\u65B9\u6CD5" aria-hidden="true">#</a> \u8C03\u7528ES6\u4E2D\u7684flat\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ary = ary.flat(Infinity);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace-split" tabindex="-1"><a class="header-anchor" href="#replace-split" aria-hidden="true">#</a> replace + split</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ary = str.replace(/(\\[|\\])/g, &#39;&#39;).split(&#39;,&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace-json-parse" tabindex="-1"><a class="header-anchor" href="#replace-json-parse" aria-hidden="true">#</a> replace + JSON.parse</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>str = str.replace(/(\\[|\\])/g, &#39;&#39;);
str = &#39;[&#39; + str + &#39;]&#39;;
ary = JSON.parse(str);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u666E\u901A\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u9012\u5F52" aria-hidden="true">#</a> \u666E\u901A\u9012\u5F52</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let result = [];
let fn = function(ary) {
  for(let i = 0; i &lt; ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])){
      fn(item);
    } else {
      result.push(item);
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5229\u7528reduce\u51FD\u6570\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528reduce\u51FD\u6570\u8FED\u4EE3" aria-hidden="true">#</a> \u5229\u7528reduce\u51FD\u6570\u8FED\u4EE3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function flatten(ary) {
    return ary.reduce((pre, cur) =&gt; {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}
let ary = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flatten(ary))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6269\u5C55\u8FD0\u7B97\u7B26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u53EA\u8981\u6709\u4E00\u4E2A\u5143\u7D20\u6709\u6570\u7EC4\uFF0C\u90A3\u4E48\u5FAA\u73AF\u7EE7\u7EED
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-js\u4E2D\u6D45\u62F7\u8D1D\u7684\u624B\u6BB5\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_25-js\u4E2D\u6D45\u62F7\u8D1D\u7684\u624B\u6BB5\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 25 JS\u4E2D\u6D45\u62F7\u8D1D\u7684\u624B\u6BB5\u6709\u54EA\u4E9B</h2><h3 id="\u91CD\u8981-\u4EC0\u4E48\u662F\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981-\u4EC0\u4E48\u662F\u62F7\u8D1D" aria-hidden="true">#</a> \u91CD\u8981: \u4EC0\u4E48\u662F\u62F7\u8D1D\uFF1F</h3><p>\u9996\u5148\u6765\u76F4\u89C2\u7684\u611F\u53D7\u4E00\u4E0B\u4EC0\u4E48\u662F\u62F7\u8D1D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, 2, 3];
let newArr = arr;
newArr[0] = 100;

console.log(arr);//[100, 2, 3]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u662F\u76F4\u63A5\u8D4B\u503C\u7684\u60C5\u51B5\uFF0C\u4E0D\u6D89\u53CA\u4EFB\u4F55\u62F7\u8D1D\u3002\u5F53\u6539\u53D8<code>newArr</code>\u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u662F\u540C\u4E00\u4E2A\u5F15\u7528\uFF0Carr\u6307\u5411\u7684\u503C\u4E5F\u8DDF\u7740\u6539\u53D8\u3002</p></blockquote><p>\u73B0\u5728\u8FDB\u884C\u6D45\u62F7\u8D1D:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, 2, 3];
let newArr = arr.slice();
newArr[0] = 100;

console.log(arr);//[1, 2, 3]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5F53\u4FEE\u6539newArr\u7684\u65F6\u5019\uFF0Carr\u7684\u503C\u5E76\u4E0D\u6539\u53D8\u3002\u4EC0\u4E48\u539F\u56E0?\u56E0\u4E3A\u8FD9\u91CCnewArr\u662Farr\u6D45\u62F7\u8D1D\u540E\u7684\u7ED3\u679C\uFF0CnewArr\u548Carr\u73B0\u5728\u5F15\u7528\u7684\u5DF2\u7ECF\u4E0D\u662F\u540C\u4E00\u5757\u7A7A\u95F4\u5566\uFF01</p></blockquote><p>\u8FD9\u5C31\u662F\u6D45\u62F7\u8D1D\uFF01</p><p>\u4F46\u662F\u8FD9\u53C8\u4F1A\u5E26\u6765\u4E00\u4E2A\u6F5C\u5728\u7684\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, 2, {val: 4}];
let newArr = arr.slice();
newArr[2].val = 1000;

console.log(arr);//[ 1, 2, { val: 1000 } ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u662F\u5DF2\u7ECF\u4E0D\u662F\u540C\u4E00\u5757\u7A7A\u95F4\u7684\u5F15\u7528\u4E86\u5417\uFF1F\u4E3A\u4EC0\u4E48\u6539\u53D8\u4E86newArr\u6539\u53D8\u4E86\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684val\u503C\uFF0Carr\u4E5F\u8DDF\u7740\u53D8\u4E86\u3002</p><blockquote><p>\u8FD9\u5C31\u662F\u6D45\u62F7\u8D1D\u7684\u9650\u5236\u6240\u5728\u4E86\u3002\u5B83\u53EA\u80FD\u62F7\u8D1D\u4E00\u5C42\u5BF9\u8C61\u3002\u5982\u679C\u6709\u5BF9\u8C61\u7684\u5D4C\u5957\uFF0C\u90A3\u4E48\u6D45\u62F7\u8D1D\u5C06\u65E0\u80FD\u4E3A\u529B\u3002\u4F46\u5E78\u8FD0\u7684\u662F\uFF0C\u6DF1\u62F7\u8D1D\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u800C\u751F\u7684\uFF0C\u5B83\u80FD</p></blockquote><p>\u89E3\u51B3\u65E0\u9650\u6781\u7684\u5BF9\u8C61\u5D4C\u5957\u95EE\u9898\uFF0C\u5B9E\u73B0\u5F7B\u5E95\u7684\u62F7\u8D1D\u3002\u5F53\u7136\uFF0C\u8FD9\u662F\u6211\u4EEC\u4E0B\u4E00\u7BC7\u7684\u91CD\u70B9\u3002 \u73B0\u5728\u5148\u8BA9\u5927\u5BB6\u6709\u4E00\u4E2A\u57FA\u672C\u7684\u6982\u5FF5\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u6765\u7814\u7A76\u4E00\u4E0BJS\u4E2D\u5B9E\u73B0\u6D45\u62F7\u8D1D\u5230\u5E95\u6709\u591A\u5C11\u79CD\u65B9\u5F0F\uFF1F</p><h3 id="_1-\u624B\u52A8\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-\u624B\u52A8\u5B9E\u73B0" aria-hidden="true">#</a> 1. \u624B\u52A8\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const shallowClone = (target) =&gt; {
  if (typeof target === &#39;object&#39; &amp;&amp; target !== null) {
    const cloneTarget = Array.isArray(target) ? []: {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
          cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-object-assign" tabindex="-1"><a class="header-anchor" href="#_2-object-assign" aria-hidden="true">#</a> 2. Object.assign</h3><blockquote><p>\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<code>Object.assgin()</code>\xA0\u62F7\u8D1D\u7684\u662F\u5BF9\u8C61\u7684\u5C5E\u6027\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u5BF9\u8C61\u672C\u8EAB\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj = { name: &#39;sy&#39;, age: 18 };
const obj2 = Object.assign({}, obj, {name: &#39;sss&#39;});
console.log(obj2);//{ name: &#39;sss&#39;, age: 18 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-concat\u6D45\u62F7\u8D1D\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_3-concat\u6D45\u62F7\u8D1D\u6570\u7EC4" aria-hidden="true">#</a> 3. concat\u6D45\u62F7\u8D1D\u6570\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[1] = 100;
console.log(arr);//[ 1, 2, 3 ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-slice\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_4-slice\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> 4. slice\u6D45\u62F7\u8D1D</h3><p>\u5F00\u5934\u7684\u4F8B\u5B50</p><h3 id="_5-\u5C55\u5F00\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_5-\u5C55\u5F00\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 5. ...\u5C55\u5F00\u8FD0\u7B97\u7B26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, 2, 3];
let newArr = [...arr];//\u8DDFarr.slice()\u662F\u4E00\u6837\u7684\u6548\u679C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_26-\u6570\u7EC4-array" tabindex="-1"><a class="header-anchor" href="#_26-\u6570\u7EC4-array" aria-hidden="true">#</a> 26 \u6570\u7EC4(array)</h2><ul><li><code>map</code>: \u904D\u5386\u6570\u7EC4\uFF0C\u8FD4\u56DE\u56DE\u8C03\u8FD4\u56DE\u503C\u7EC4\u6210\u7684\u65B0\u6570\u7EC4</li><li><code>forEach</code>: \u65E0\u6CD5<code>break</code>\uFF0C\u53EF\u4EE5\u7528<code>try/catch</code>\u4E2D<code>throw new Error</code>\u6765\u505C\u6B62</li><li><code>filter</code>: \u8FC7\u6EE4</li><li><code>some</code>: \u6709\u4E00\u9879\u8FD4\u56DE<code>true</code>\uFF0C\u5219\u6574\u4F53\u4E3A<code>true</code></li><li><code>every</code>: \u6709\u4E00\u9879\u8FD4\u56DE<code>false</code>\uFF0C\u5219\u6574\u4F53\u4E3A<code>false</code></li><li><code>join</code>: \u901A\u8FC7\u6307\u5B9A\u8FDE\u63A5\u7B26\u751F\u6210\u5B57\u7B26\u4E32</li><li><code>push / pop</code>: \u672B\u5C3E\u63A8\u5165\u548C\u5F39\u51FA\uFF0C\u6539\u53D8\u539F\u6570\u7EC4\uFF0C \u8FD4\u56DE\u63A8\u5165/\u5F39\u51FA\u9879</li><li><code>unshift / shift</code>: \u5934\u90E8\u63A8\u5165\u548C\u5F39\u51FA\uFF0C\u6539\u53D8\u539F\u6570\u7EC4\uFF0C\u8FD4\u56DE\u64CD\u4F5C\u9879</li><li><code>sort(fn) / reverse</code>: \u6392\u5E8F\u4E0E\u53CD\u8F6C\uFF0C\u6539\u53D8\u539F\u6570\u7EC4</li><li><code>concat</code>: \u8FDE\u63A5\u6570\u7EC4\uFF0C\u4E0D\u5F71\u54CD\u539F\u6570\u7EC4\uFF0C \u6D45\u62F7\u8D1D</li><li><code>slice(start, end)</code>: \u8FD4\u56DE\u622A\u65AD\u540E\u7684\u65B0\u6570\u7EC4\uFF0C\u4E0D\u6539\u53D8\u539F\u6570\u7EC4</li><li><code>splice(start, number, value...)</code>: \u8FD4\u56DE\u5220\u9664\u5143\u7D20\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C<code>value</code>\u4E3A\u63D2\u5165\u9879\uFF0C\u6539\u53D8\u539F\u6570\u7EC4</li><li><code>indexOf / lastIndexOf(value, fromIndex)</code>: \u67E5\u627E\u6570\u7EC4\u9879\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7684\u4E0B\u6807</li><li><code>reduce / reduceRight(fn(prev, cur)</code>\uFF0C\xA0<code>defaultPrev)</code>: \u4E24\u4E24\u6267\u884C\uFF0C<code>prev</code>\xA0\u4E3A\u4E0A\u6B21\u5316\u7B80\u51FD\u6570\u7684<code>return</code>\u503C\uFF0C<code>cur</code>\u4E3A\u5F53\u524D\u503C(\u4ECE\u7B2C\u4E8C\u9879\u5F00\u59CB)</li></ul><p>\u6570\u7EC4\u4E71\u5E8F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
    return Math.random() - 0.5;
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6570\u7EC4\u62C6\u89E3: flat: [1,[2,3]] --&gt; [1, 2, 3]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.flat = function() {
    this.toString().split(&#39;,&#39;).map(item =&gt; +item )
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_27-\u4EE3\u7801\u7684\u590D\u7528" tabindex="-1"><a class="header-anchor" href="#_27-\u4EE3\u7801\u7684\u590D\u7528" aria-hidden="true">#</a> 27 \u4EE3\u7801\u7684\u590D\u7528</h2><blockquote><p>\u5F53\u4F60\u53D1\u73B0\u4EFB\u4F55\u4EE3\u7801\u5F00\u59CB\u5199\u7B2C\u4E8C\u904D\u65F6\uFF0C\u5C31\u8981\u5F00\u59CB\u8003\u8651\u5982\u4F55\u590D\u7528\u3002\u4E00\u822C\u6709\u4EE5\u4E0B\u7684\u65B9\u5F0F:</p></blockquote><ul><li>\u51FD\u6570\u5C01\u88C5</li><li>\u7EE7\u627F</li><li>\u590D\u5236<code>extend</code></li><li>\u6DF7\u5165<code>mixin</code></li><li>\u501F\u7528<code>apply/call</code></li></ul><h2 id="_28-\u64CD\u4F5Cdom\u8282\u70B9\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_28-\u64CD\u4F5Cdom\u8282\u70B9\u65B9\u6CD5" aria-hidden="true">#</a> 28 \u64CD\u4F5CDOM\u8282\u70B9\u65B9\u6CD5</h2><p>\u521B\u5EFA\u65B0\u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>createDocumentFragment()    //\u521B\u5EFA\u4E00\u4E2ADOM\u7247\u6BB5
createElement()   //\u521B\u5EFA\u4E00\u4E2A\u5177\u4F53\u7684\u5143\u7D20
createTextNode()   //\u521B\u5EFA\u4E00\u4E2A\u6587\u672C\u8282\u70B9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u3001\u79FB\u9664\u3001\u66FF\u6362\u3001\u63D2\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>appendChild()      //\u6DFB\u52A0
removeChild()      //\u79FB\u9664
replaceChild()      //\u66FF\u6362
insertBefore()      //\u63D2\u5165

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u627E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>getElementsByTagName()    //\u901A\u8FC7\u6807\u7B7E\u540D\u79F0
getElementsByName()     //\u901A\u8FC7\u5143\u7D20\u7684Name\u5C5E\u6027\u7684\u503C
getElementById()        //\u901A\u8FC7\u5143\u7D20Id\uFF0C\u552F\u4E00\u6027

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_29-ajax\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_29-ajax\u603B\u7ED3" aria-hidden="true">#</a> 29 Ajax\u603B\u7ED3</h2><ul><li><code>Ajax</code>\u7684\u539F\u7406\u7B80\u5355\u6765\u8BF4\u662F\u5728\u7528\u6237\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u52A0\u4E86---\u4E2A\u4E2D\u95F4\u5C42(<code>AJAX</code>\u5F15\u64CE)\uFF0C\u901A\u8FC7<code>XmlHttpRequest</code>\u5BF9\u8C61\u6765\u5411\u670D\u52A1\u5668\u53D1\u5F02\u6B65\u8BF7\u6C42\uFF0C\u4ECE\u670D\u52A1\u5668\u83B7\u5F97\u6570\u636E\uFF0C\u7136\u540E\u7528<code>javascript</code>\u6765\u64CD\u4F5CDOM\u800C\u66F4\u65B0\u9875\u9762\u3002\u4F7F\u7528\u6237\u64CD\u4F5C\u4E0E\u670D\u52A1\u5668\u54CD\u5E94\u5F02\u6B65\u5316\u3002\u8FD9\u5176\u4E2D\u6700\u5173\u952E\u7684\u4E00\u6B65\u5C31\u662F\u4ECE\u670D\u52A1\u5668\u83B7\u5F97\u8BF7\u6C42\u6570\u636E</li><li><code>Ajax</code>\u7684\u8FC7\u7A0B\u53EA\u6D89\u53CA<code>JavaScript</code>\u3001<code>XMLHttpRequest</code>\u548C<code>DOM</code>\u3002<code>XMLHttpRequest</code>\u662F<code>ajax</code>\u7684\u6838\u5FC3\u673A\u5236</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 1. \u521B\u5EFA\u8FDE\u63A5
var xhr = null;
xhr = new XMLHttpRequest()
// 2. \u8FDE\u63A5\u670D\u52A1\u5668
xhr.open(&#39;get&#39;, url, true)
// 3. \u53D1\u9001\u8BF7\u6C42
xhr.send(null);
// 4. \u63A5\u53D7\u8BF7\u6C42
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            success(xhr.responseText);
        } else { // fail
            fail &amp;&amp; fail(xhr.status);
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ajax \u6709\u90A3\u4E9B\u4F18\u7F3A\u70B9?</p><p>\u4F18\u70B9\uFF1A</p><ul><li>\u901A\u8FC7\u5F02\u6B65\u6A21\u5F0F\uFF0C\u63D0\u5347\u4E86\u7528\u6237\u4F53\u9A8C.</li><li>\u4F18\u5316\u4E86\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u4F20\u8F93\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u5F80\u8FD4\uFF0C\u51CF\u5C11\u4E86\u5E26\u5BBD\u5360\u7528.</li><li><code>Ajax</code>\u5728\u5BA2\u6237\u7AEF\u8FD0\u884C\uFF0C\u627F\u62C5\u4E86\u4E00\u90E8\u5206\u672C\u6765\u7531\u670D\u52A1\u5668\u627F\u62C5\u7684\u5DE5\u4F5C\uFF0C\u51CF\u5C11\u4E86\u5927\u7528\u6237\u91CF\u4E0B\u7684\u670D\u52A1\u5668\u8D1F\u8F7D\u3002</li><li><code>Ajax</code>\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u4E0D\u5237\u65B0\uFF08\u5C40\u90E8\u5237\u65B0\uFF09</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u5B89\u5168\u95EE\u9898\xA0<code>AJAX</code>\u66B4\u9732\u4E86\u4E0E\u670D\u52A1\u5668\u4EA4\u4E92\u7684\u7EC6\u8282\u3002</li><li>\u5BF9\u641C\u7D22\u5F15\u64CE\u7684\u652F\u6301\u6BD4\u8F83\u5F31\u3002</li><li>\u4E0D\u5BB9\u6613\u8C03\u8BD5\u3002</li></ul><h2 id="_30-\u8C08\u8C08\u4F60\u5BF9for-in-for-of\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_30-\u8C08\u8C08\u4F60\u5BF9for-in-for-of\u7684\u7406\u89E3" aria-hidden="true">#</a> 30 \u8C08\u8C08\u4F60\u5BF9for in/for of\u7684\u7406\u89E3</h2><blockquote><p><code>for in</code>\u6027\u80FD\u5F88\u5DEE\uFF0C\u8FED\u4EE3\u5F53\u524D\u5BF9\u8C61\u4E2D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF0C\u5E76\u4E14\u4E00\u76F4\u67E5\u627E\u5230\u539F\u578B\u4E0A\u53BB\u3002</p></blockquote><ul><li>\u95EE\u98981\uFF1A\u904D\u5386\u987A\u5E8F\u6570\u5B57\u4F18\u5148</li><li>\u95EE\u98982\uFF1A\u65E0\u6CD5\u904D\u5386<code>symbol</code>\u5C5E\u6027</li><li>\u95EE\u98983\uFF1A\u53EF\u4EE5\u904D\u5386\u5230\u539F\u578B\u5C5E\u6027\u4E2D\u53EF\u679A\u4E3E\u7684</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj = {
  name: &#39;poetry&#39;,
  age: 22,
  [Symbol(&#39;aa&#39;)]: 100,
  0: 200,
  1: 300
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(let key in obj) {
  // \u4E0D\u904D\u5386\u539F\u578B\u4E0A\u7684\u5C5E\u6027
  if(!obj.hasOwnProperty(key)) {
    break;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u904D\u5386obj\u7684\u79C1\u6709\u5C5E\u6027\u62FC\u63A5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let keys = Object.keys(obj)
keys = keys.concat(Object.getOwnPropertySymbols(obj1))
keys.forEach(v=&gt;{
  console.log(v)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for of</p><ul><li>\u90E8\u5206\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u4E86\u8FED\u4EE3\u5668\u89C4\u8303 <ul><li><code>Symbol.itertor</code></li><li><code>\u6570\u7EC4/set/map</code></li><li>\u5BF9\u8C61\u6CA1\u6709\u5B9E\u73B0\uFF0C<code>for of</code>\u4E0D\u80FD\u904D\u5386\u5BF9\u8C61</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6570\u7EC4\u5177\u5907\u8FED\u4EE3\u5668\u89C4\u8303\uFF0C\u6A21\u62DF\u5B9E\u73B0
var arr = [1,2,3,4,5]

arr[Symbol.iterator] = function() {
  let self = this, index = 0;

  return {
    next() {
      if(index &gt; self.length - 1) {
        return {
          done: true,
          value: undefined
        }
      }
      return {
        done: false,
        value: self[index++]
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F7F\u5BF9\u8C61\u5177\u5907\u53EF\u8FED\u4EE3\u7279\u6027
let obj = {
  0: 100,
  1: 200,
  length: 2
}

obj[Symbol.iterator] = Array.prototype[Symbol.iterator]

for(var val of obj) {
  console.log(val)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31-\u6570\u7EC4\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#_31-\u6570\u7EC4\u76F8\u5173" aria-hidden="true">#</a> 31 \u6570\u7EC4\u76F8\u5173</h2><h3 id="array-3-\u548Carray-3-4-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#array-3-\u548Carray-3-4-\u7684\u533A\u522B" aria-hidden="true">#</a> Array(3)\u548CArray(3, 4)\u7684\u533A\u522B\uFF1F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(Array(3)) // [empty x 3]
console.log(Array(3, 4)) // [3, 4]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BF7\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A100-\u503C\u90FD\u4E3A1\u7684\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A100-\u503C\u90FD\u4E3A1\u7684\u6570\u7EC4" aria-hidden="true">#</a> \u8BF7\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A100\uFF0C\u503C\u90FD\u4E3A1\u7684\u6570\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Array(100).fill(1)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BF7\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A100-\u503C\u4E3A\u5BF9\u5E94\u4E0B\u6807\u7684\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A100-\u503C\u4E3A\u5BF9\u5E94\u4E0B\u6807\u7684\u6570\u7EC4" aria-hidden="true">#</a> \u8BF7\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A100\uFF0C\u503C\u4E3A\u5BF9\u5E94\u4E0B\u6807\u7684\u6570\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// cool\u7684\u5199\u6CD5\uFF1A
[...Array(100).keys()]

// \u5176\u4ED6\u65B9\u6CD5\uFF1A
Array(100).join(&quot;,&quot;).split(&quot;,&quot;).map((v, i) =&gt; i)
Array(100).fill().map((v, i) =&gt; i)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_32-setinterval\u5B58\u5728\u54EA\u4E9B\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_32-setinterval\u5B58\u5728\u54EA\u4E9B\u95EE\u9898" aria-hidden="true">#</a> 32 setInterval\u5B58\u5728\u54EA\u4E9B\u95EE\u9898\uFF1F</h2><blockquote><p><code>JavaScript</code>\u4E2D\u4F7F\u7528\xA0<code>setInterval</code>\xA0\u5F00\u542F\u8F6E\u8BE2\u3002\u5B9A\u65F6\u5668\u4EE3\u7801\u53EF\u80FD\u5728\u4EE3\u7801\u518D\u6B21\u88AB\u6DFB\u52A0\u5230\u961F\u5217\u4E4B\u524D\u8FD8\u6CA1\u6709\u5B8C\u6210\u6267\u884C\uFF0C\u7ED3\u679C\u5BFC\u81F4\u5B9A\u65F6\u5668\u4EE3\u7801\u8FDE\u7EED\u8FD0\u884C\u597D\u51E0\u6B21\uFF0C\u800C\u4E4B\u95F4\u6CA1\u6709\u4EFB\u4F55\u505C\u987F\u3002\u800Cjavascript\u5F15\u64CE\u5BF9\u8FD9\u4E2A\u95EE\u9898\u7684\u89E3\u51B3\u662F\uFF1A\u5F53\u4F7F\u7528<code>setInterval()</code>\u65F6\uFF0C\u4EC5\u5F53\u6CA1\u6709\u8BE5\u5B9A\u65F6\u5668\u7684\u4EFB\u4F55\u5176\u4ED6\u4EE3\u7801\u5B9E\u4F8B\u65F6\uFF0C\u624D\u5C06\u5B9A\u65F6\u5668\u4EE3\u7801\u6DFB\u52A0\u5230\u961F\u5217\u4E2D\u3002\u8FD9\u786E\u4FDD\u4E86\u5B9A\u65F6\u5668\u4EE3\u7801\u52A0\u5165\u5230\u961F\u5217\u4E2D\u7684\u6700\u5C0F\u65F6\u95F4\u95F4\u9694\u4E3A\u6307\u5B9A\u95F4\u9694\u3002</p></blockquote><p>\u4F46\u662F\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u67D0\u4E9B\u95F4\u9694\u88AB\u8DF3\u8FC7\uFF1B</li><li>\u591A\u4E2A\u5B9A\u65F6\u5668\u7684\u4EE3\u7801\u6267\u884C\u4E4B\u95F4\u7684\u95F4\u9694\u53EF\u80FD\u6BD4\u9884\u671F\u7684\u5C0F</li></ul><h2 id="_33-\u94FE\u5F0F\u8C03\u7528settimeout\u5BF9\u6BD4setinterval" tabindex="-1"><a class="header-anchor" href="#_33-\u94FE\u5F0F\u8C03\u7528settimeout\u5BF9\u6BD4setinterval" aria-hidden="true">#</a> 33 \u94FE\u5F0F\u8C03\u7528setTimeout\u5BF9\u6BD4setInterval</h2><p>\u5728\u4E0A\u4E00\u9898\u4E2D\u4E5F\u8BF4\u5230\u4E86<code>setInterval</code>\u672C\u8EAB\u662F\u4F1A\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\u7684\u3002\u800C\u4F7F\u7528\u94FE\u5F0F\u8C03\u7528<code>setTimeout</code>\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u6BD4\u5B83\u597D\u4E00\u4E9B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setTimeout(function fn(){
    console.log(&#39;\u6211\u662FsetTimeout&#39;);
    setTimeout(fn, 1000);
},1000);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u6A21\u5F0F\u94FE\u5F0F\u8C03\u7528\u4E86<code>setTimeout()</code>\uFF0C\u6BCF\u6B21\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B9A\u65F6\u5668\u3002\u7B2C\u4E8C\u4E2A<code>setTimeout()</code>\u8C03\u7528\u5F53\u524D\u6267\u884C\u7684\u51FD\u6570\uFF0C\u5E76\u4E3A\u5176\u8BBE\u7F6E\u53E6\u5916\u4E00\u4E2A\u5B9A\u65F6\u5668\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\uFF1A</p><ul><li>\u5728\u524D\u4E00\u4E2A\u5B9A\u65F6\u5668\u4EE3\u7801\u6267\u884C\u5B8C\u4E4B\u524D\uFF0C\u4E0D\u4F1A\u5411\u961F\u5217\u63D2\u5165\u65B0\u7684\u5B9A\u65F6\u5668\u4EE3\u7801\uFF0C\u786E\u4FDD\u4E0D\u4F1A\u6709\u4EFB\u4F55\u7F3A\u5931\u7684\u95F4\u9694\u3002</li><li>\u800C\u4E14\uFF0C\u5B83\u53EF\u4EE5\u4FDD\u8BC1\u5728\u4E0B\u4E00\u6B21\u5B9A\u65F6\u5668\u4EE3\u7801\u6267\u884C\u4E4B\u524D\uFF0C\u81F3\u5C11\u8981\u7B49\u5F85\u6307\u5B9A\u7684\u95F4\u9694\uFF0C\u907F\u514D\u4E86\u8FDE\u7EED\u7684\u8FD0\u884C\u3002</li></ul><h2 id="_34-\u8BF4\u4E00\u4E0Brequestanimationframe" tabindex="-1"><a class="header-anchor" href="#_34-\u8BF4\u4E00\u4E0Brequestanimationframe" aria-hidden="true">#</a> 34 \u8BF4\u4E00\u4E0BrequestAnimationFrame</h2><p>\u7B80\u4ECB\uFF1A</p><p>\u663E\u793A\u5668\u90FD\u6709\u81EA\u5DF1\u56FA\u6709\u7684\u5237\u65B0\u9891\u7387(60HZ\u6216\u800575HZ)\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6BCF\u79D2\u6700\u591A\u91CD\u7ED860\u6B21\u6216\u800575\u6B21\u3002\u800C<code>requestAnimationFrame</code>\u7684\u57FA\u672C\u601D\u60F3\u5C31\u662F\u4E0E\u8FD9\u4E2A\u5237\u65B0\u9891\u7387\u4FDD\u6301\u540C\u6B65\uFF0C\u5229\u7528\u8FD9\u4E2A\u5237\u65B0\u9891\u7387\u8FDB\u884C\u91CD\u7ED8\u3002</p><p>\u7279\u70B9\uFF1A</p><ul><li>\u4F7F\u7528\u8FD9\u4E2AAPI\u65F6\uFF0C\u4E00\u65E6\u9875\u9762\u4E0D\u5904\u4E8E\u6D4F\u89C8\u5668\u7684\u5F53\u524D\u6807\u7B7E\uFF0C\u5C31\u4F1A\u81EA\u52A8\u505C\u6B62\u5237\u65B0\uFF0C\u8FD9\u6837\u5C31\u8282\u7701\u4E86CPU\u3001GPU\u3001\u7535\u529B\u3002</li><li>\u7531\u4E8E\u5B83\u65F6\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u5B8C\u6210\u7684\uFF0C\u6240\u4EE5\u82E5\u662F\u4E3B\u7EBF\u7A0B\u975E\u5E38\u5FD9\u65F6\u5B83\u7684\u52A8\u753B\u4E5F\u4F1A\u6536\u5230\u5F71\u54CD</li><li>\u5B83\u4F7F\u7528\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6D4F\u89C8\u5668\u91CD\u7ED8\u4E4B\u524D\u8C03\u7528\u3002</li></ul><p>\u4F7F\u7528\uFF1A</p><p>\u6B63\u5E38\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const requestID = window.requestAnimationFrame(callback);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u517C\u5BB9\u7248\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7ED9 window \u4E0B\u6302\u8F7D\u4E00\u4E2A\u517C\u5BB9\u7248\u672C\u7684 requestAniFrame
window.requestAniFrame = (function () {
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_35-requestanimationframe\u5BF9\u6BD4settimeout" tabindex="-1"><a class="header-anchor" href="#_35-requestanimationframe\u5BF9\u6BD4settimeout" aria-hidden="true">#</a> 35 requestAnimationFrame\u5BF9\u6BD4setTimeout</h2><ul><li>**\u5C4F\u5E55\u5237\u65B0\u9891\u7387\uFF1A**\u5C4F\u5E55\u6BCF\u79D2\u51FA\u73B0\u56FE\u50CF\u7684\u6B21\u6570\u3002\u666E\u901A\u7B14\u8BB0\u672C\u4E3A<code>60Hz</code></li><li>**\u52A8\u753B\u539F\u7406\uFF1A**\u8BA1\u7B97\u673A\u6BCF<code>16.7ms</code>\u5237\u65B0\u4E00\u6B21\uFF0C\u7531\u4E8E\u4EBA\u773C\u7684\u89C6\u89C9\u505C\u7559\uFF0C\u6240\u4EE5\u770B\u8D77\u6765\u662F\u6D41\u7545\u7684\u79FB\u52A8\u3002</li><li>**setTimeout\uFF1A**\u901A\u8FC7\u8BBE\u5B9A\u95F4\u9694\u65F6\u95F4\u6765\u4E0D\u65AD\u6539\u53D8\u56FE\u50CF\u4F4D\u7F6E\uFF0C\u8FBE\u5230\u52A8\u753B\u6548\u679C\u3002\u4F46\u662F\u5BB9\u6613\u51FA\u73B0\u5361\u987F\u6296\u52A8\u7684\u73B0\u8C61\uFF1B\u539F\u56E0\u662F\uFF1A</li></ul><ol><li><code>settimeout</code>\u4EFB\u52A1\u88AB\u653E\u5165\u5F02\u6B65\u961F\u5217\uFF0C\u53EA\u6709\u5F53\u4E3B\u7EBF\u7A0B\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\u624D\u4F1A\u6267\u884C\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\uFF0C\u56E0\u6B64\u5B9E\u9645\u6267\u884C\u65F6\u95F4\u603B\u662F\u6BD4\u8BBE\u5B9A\u65F6\u95F4\u8981\u665A\uFF1B</li><li><code>settimeout</code>\u7684\u56FA\u5B9A\u65F6\u95F4\u95F4\u9694\u4E0D\u4E00\u5B9A\u4E0E\u5C4F\u5E55\u5237\u65B0\u65F6\u95F4\u76F8\u540C\uFF0C\u4F1A\u5F15\u8D77\u4E22\u5E27\u3002</li></ol><blockquote><p>**requestAnimationFrame\uFF1A**\u4F18\u52BF\uFF1A\u7531\u7CFB\u7EDF\u51B3\u5B9A\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A\u300260Hz\u7684\u5237\u65B0\u9891\u7387\uFF0C\u90A3\u4E48\u6BCF\u6B21\u5237\u65B0\u7684\u95F4\u9694\u4E2D\u4F1A\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u51FD\u6570\uFF0C\u4E0D\u4F1A\u5F15\u8D77\u4E22\u5E27\uFF0C\u4E0D\u4F1A\u5361\u987F\u3002\u4E14\u7531\u4E8E\u4E00\u65E6\u9875\u9762\u4E0D\u5904\u4E8E\u6D4F\u89C8\u5668\u7684\u5F53\u524D\u6807\u7B7E\uFF0C\u5C31\u4F1A\u81EA\u52A8\u505C\u6B62\u5237\u65B0\uFF0C\u8FD9\u6837\u5C31\u8282\u7701\u4E86CPU\u3001GPU\u3001\u7535\u529B\u3002</p></blockquote><h2 id="_36-xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#_36-xmlhttprequest" aria-hidden="true">#</a> 36 XMLHttpRequest</h2><h3 id="\u5173\u4E8Ehttp-xmlhttprequest-ajax\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Ehttp-xmlhttprequest-ajax\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u5173\u4E8Ehttp,XMLHttpRequest,Ajax\u7684\u5173\u7CFB</h3><ul><li><code>http</code>\u662F\u6D4F\u89C8\u5668\u548Cweb\u670D\u52A1\u5668\u4EA4\u6362\u6570\u636E\u7684\u534F\u8BAE,\u89C4\u8303</li><li><code>XMLHttpRequest</code>\u662F\u4E00\u4E2A<code>JS</code>\u5BF9\u8C61\uFF0C\u662F\u6D4F\u89C8\u5668\u5B9E\u73B0\u7684\u4E00\u7EC4<code>api</code>\u51FD\u6570\uFF0C\u4F7F\u7528\u8FD9\u4E9B\u51FD\u6570\uFF0C\u6D4F\u89C8\u5668\u518D\u901A\u8FC7<code>http</code>\u534F\u8BAE\u8BF7\u6C42\u548C\u53D1\u9001\u6570\u636E\u3002</li><li><code>Ajax</code>\u662F\u4E00\u79CD\u6280\u672F\u65B9\u6848\uFF0C\u4F46\u5E76\u4E0D\u662F\u4E00\u79CD\u65B0\u6280\u672F\uFF0C\u5B83\u6700\u6838\u5FC3\u7684\u5C31\u662F\u4F9D\u8D56\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684<code>XMLHttpRequest</code>\u5BF9\u8C61\u3002\u7528\u4E00\u53E5\u8BDD\u6765\u6982\u62EC\u5C31\u662F<code>\u6211\u4EEC\u4F7F\u7528XMLHttpRequest\u5BF9\u8C61\u6765\u53D1\u9001\u4E00\u4E2AAjax\u8BF7\u6C42</code>\u3002</li></ul><h3 id="xmlhttprequest\u7684\u53D1\u5C55\u5386\u7A0B\u662F\u600E\u6837\u7684" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest\u7684\u53D1\u5C55\u5386\u7A0B\u662F\u600E\u6837\u7684" aria-hidden="true">#</a> XMLHttpRequest\u7684\u53D1\u5C55\u5386\u7A0B\u662F\u600E\u6837\u7684\uFF1F</h3><p>\u5B83\u6700\u5F00\u59CB\u53EA\u662F\u5FAE\u8F6F\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u4E00\u4E2A\u63A5\u53E3\uFF0C\u540E\u6765\u5404\u5927\u6D4F\u89C8\u5668\u7EB7\u7EB7\u6548\u4EFF\u4E5F\u63D0\u4F9B\u4E86\u8FD9\u4E2A\u63A5\u53E3\uFF0C\u518D\u540E\u6765W3C\u5BF9\u5B83\u8FDB\u884C\u4E86\u6807\u51C6\u5316\uFF0C\u63D0\u51FA\u4E86<code>XMLHttpRequest</code>\u6807\u51C6\u3002\u6807\u51C6\u53C8\u5206\u4E3A<code>Level 1</code>\u548C<code>Level 2</code>\u3002</p><p><code>Level 2</code>\u76F8\u5BF9\u4E8E<code>Level 1</code>\u505A\u4E86\u5F88\u5927\u7684\u6539\u8FDB\uFF0C\u5177\u4F53\u6765\u8BF4\u662F\uFF1A</p><ul><li>\u53EF\u4EE5\u8BBE\u7F6EHTTP\u8BF7\u6C42\u7684\u8D85\u65F6\u65F6\u95F4\u3002</li><li>\u53EF\u4EE5\u4F7F\u7528FormData\u5BF9\u8C61\u7BA1\u7406\u8868\u5355\u6570\u636E\u3002</li><li>\u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\u3002</li><li>\u53EF\u4EE5\u8BF7\u6C42\u4E0D\u540C\u57DF\u540D\u4E0B\u7684\u6570\u636E\uFF08\u8DE8\u57DF\u8BF7\u6C42\uFF09\u3002</li><li>\u53EF\u4EE5\u83B7\u53D6\u670D\u52A1\u5668\u7AEF\u7684\u4E8C\u8FDB\u5236\u6570\u636E\u3002</li><li>\u53EF\u4EE5\u83B7\u5F97\u6570\u636E\u4F20\u8F93\u7684\u8FDB\u5EA6\u4FE1\u606F\u3002</li></ul><h3 id="\u4F7F\u7528xmlhttprequest\u5C01\u88C5\u4E00\u4E2Aget\u548Cpost\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528xmlhttprequest\u5C01\u88C5\u4E00\u4E2Aget\u548Cpost\u8BF7\u6C42" aria-hidden="true">#</a> \u4F7F\u7528XMLHttpRequest\u5C01\u88C5\u4E00\u4E2Aget\u548Cpost\u8BF7\u6C42</h3><p>get\u8BF7\u6C42\uFF1A</p><p>\u6838\u5FC3\u5C31\u56DB\u6B65\uFF1A</p><ol><li><code>var xhr = new XMLHttpRequest()</code></li><li><code>xhr.open(&#39;GET&#39;, &#39;http://www.example.com/api/getname&#39;, true)</code></li><li><code>xhr.onreadystatechange = function () {}</code></li><li><code>xhr.send()</code></li></ol><p>\u8BA9\u6211\u4EEC\u6765\u5C01\u88C5\u4E00\u4E2A\u7B80\u6613\u7248\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/*
* xhr\u7684get\u8BF7\u6C42
* @param url: \u8BF7\u6C42\u5730\u5740
* @param params: \u8BF7\u6C42\u53C2\u6570
* @param onSuccess: \u6210\u529F\u56DE\u8C03\u51FD\u6570
* @param onError: \u5931\u8D25\u56DE\u8C03\u51FD\u6570
*/
function xhrGet (url, params = {}, onSuccess, onError) {
  // \u517C\u5BB9IE6
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject(&#39;Microsoft.XMLHTTP&#39;);
  let paramString = formatParams(params);
  // xhr.open\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570isAsync\uFF1A\u662F\u5426\u5F02\u6B65
  xhr.open(&#39;GET&#39;, \`\${url}\${paramString}\`, true);
  xhr.onreadystatechange = function () {
    // console.log(e);
    console.log(this);
    if (this.readyState === 4) {
      if (this.status &gt;= 200 &amp;&amp; this.status &lt; 300) {
        onSuccess(this.response);
      } else {
        onError(this.response)
      }
    }
  }
  xhr.send();
}
// \u5904\u7406\u53C2\u6570\uFF1A\u5982\u5C06{name: &#39;lindaidai&#39;}\u8F6C\u4E3A&#39;?name=lindaidai&#39;
function formatParams (params) {
  var paramString = Object.keys(params).map(key =&gt; {
    return \`\${key}=\${encodeURIComponent(params[key])}\`
  }).join(&#39;&amp;&#39;);
  return paramString ? \`?\${paramString}\` : &#39;&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF08\u5F53\u7136\u4E0A\u9762\u7684\u517C\u5BB9<code>IE6</code>\u4F30\u8BA1\u73B0\u5728\u8003\u7684\u4E0D\u591A\u4E86\uFF0C\u800C\u4E14\u6211\u8FD9\u79CD\u5199\u6CD5\u5176\u5B9E\u4E5F\u6CA1\u5565\u7528\uFF0C\u56E0\u4E3A\u5982\u679C\u771F\u662F\u5728<code>IE6</code>\u4E0B\u7684\u8BDD\uFF0C\u540E\u9762\u7684<code>Object.keys()</code>\u7B49\u65B9\u6CD5\u4E5F\u7528\u4E0D\u4E86\u4E86\uFF09</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u4E24\u79CD\u72B6\u6001\uFF0C\u4E00\u4E2A\u662F<code>readyState</code>\uFF0C\u4E00\u4E2A\u662F<code>status</code>\u3002</p><blockquote><p><code>readyState</code>\u8BF7\u6C42\u72B6\u6001\uFF1A</p></blockquote><ul><li>0\uFF08\u672A\u521D\u59CB\u5316\uFF09\uFF1A\u8FD8\u6CA1\u6709\u8C03\u7528 open() \u65B9\u6CD5\u3002</li><li>1\uFF08\u8F7D\u5165\uFF09\uFF1A\u5DF2\u8C03\u7528 send() \u65B9\u6CD5\uFF0C\u6B63\u5728\u53D1\u9001\u8BF7\u6C42\u3002</li><li>2\uFF08\u8F7D\u5165\u5B8C\u6210\uFF09\uFF1Asend() \u65B9\u6CD5\u5B8C\u6210\uFF0C\u5DF2\u6536\u5230\u5168\u90E8\u54CD\u5E94\u5185\u5BB9\u3002</li><li>3\uFF08\u89E3\u6790\uFF09\uFF1A\u6B63\u5728\u89E3\u6790\u54CD\u5E94\u5185\u5BB9\u3002</li><li>4\uFF08\u5B8C\u6210\uFF09\uFF1A\u54CD\u5E94\u5185\u5BB9\u89E3\u6790\u5B8C\u6210\uFF0C\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u8C03\u7528\u3002</li></ul><blockquote><p><code>status</code>\u7ED3\u679C\u72B6\u6001\u7801\uFF1A</p></blockquote><ul><li>0 \uFF1A\u5982\u679C\u72B6\u6001\u662F UNSENT \u6216 OPENED\uFF1B\u6216\u8005\u5982\u679C\u9519\u8BEF\u6807\u7B7E\u88AB\u8BBE\u7F6E(\u4F8B\u5982\u8DE8\u57DF\u65F6)</li><li>200 \u6210\u529F</li><li>\u5176\u5B83HTTP\u72B6\u6001\u7801</li></ul><p>post\u8BF7\u6C42\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function xhrPost (url, params, onSuccess, onError) {
  var xhr = new XMLHttpRequest();
  xhr.open(&#39;POST&#39;, url, true);
  // ajax\u7684\u9ED8\u8BA4\u8BF7\u6C42ContentType:text/plain(\u7EAF\u6587\u672C)
  xhr.setRequestHeader(&quot;Content-Type&quot;, &quot;application-x-www-form-urlencode&quot;);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status &gt;= 200 &amp;&amp; this.status &lt; 300) {
        onSuccess(this.response);
      } else {
        onError(this.response);
      }
    }
  }
  xhr.send(params);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_37-javascript-\u5B9E\u73B0\u5BF9\u4E0A\u4F20\u56FE\u7247\u7684\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#_37-javascript-\u5B9E\u73B0\u5BF9\u4E0A\u4F20\u56FE\u7247\u7684\u538B\u7F29" aria-hidden="true">#</a> 37 JavaScript \u5B9E\u73B0\u5BF9\u4E0A\u4F20\u56FE\u7247\u7684\u538B\u7F29\uFF1F</h2><blockquote><p>\u7B54\uFF1A\u8BFB\u53D6\u7528\u6237\u4E0A\u4F20\u7684 File \u5BF9\u8C61\uFF0C\u8BFB\u5199\u5230\u753B\u5E03\uFF08canvas\uFF09\u4E0A\uFF0C\u5229\u7528 Canvas \u7684 API \u8FDB\u884C\u538B\u7F29\uFF0C\u5B8C\u6210\u538B\u7F29\u4E4B\u540E\u518D\u8F6C\u6210\xA0<code>File\uFF08Blob\uFF09</code>\xA0\u5BF9\u8C61\uFF0C\u4E0A\u4F20\u5230\u8FDC\u7A0B\u56FE\u7247\u670D\u52A1\u5668\uFF1B\u4E0D\u8FC7\u6709\u65F6\u5019\u6211\u4EEC\u4E5F\u9700\u8981\u5C06\u4E00\u4E2A\xA0<code>base64</code>\xA0\u5B57\u7B26\u4E32\u538B\u7F29\u4E4B\u540E\u518D\u53D8\u4E3A\xA0<code>base64</code>\xA0\u5B57\u7B26\u4E32\u4F20\u5165\u5230\u8FDC\u7A0B\u6570\u636E\u5E93\u6216\u8005\u518D\u8F6C\u6210\xA0<code>File\uFF08Blob\uFF09</code>\xA0\u5BF9\u8C61\u3002</p></blockquote><p>\u601D\u8DEF\u5C31\u662F\xA0<code>File + Canvas</code>\xA0\u7684\xA0<code>drawImage</code></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,515),k={href:"https://juejin.cn/post/6844903974378668039",target:"_blank",rel:"noopener noreferrer"},j=c("JS\u7075\u9B42\u4E4B\u95EE(opens new window)");function w(S,O){const i=r("ExternalLinkIcon");return d(),l("div",null,[_,e("ul",null,[e("li",null,[e("a",k,[j,s(i)])])])])}var E=n(q,[["render",w],["__file","JS\u6A21\u5757.html.vue"]]);export{E as default};
