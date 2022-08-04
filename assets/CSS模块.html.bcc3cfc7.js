import{_ as e,o as i,c as d,b as n}from"./app.12353158.js";var l="/assets/47b89e6c7852b4c4.49b40793.png",c="/assets/20220307225111.4b0a6646.png",s="/assets/24.c5362cd1.png",a="/assets/4.10b63242.png";const o={},r=n('<h1 id="css\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#css\u6A21\u5757" aria-hidden="true">#</a> CSS\u6A21\u5757</h1><hr><p><img src="'+l+'" alt=""></p><h2 id="_1-\u76D2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u76D2\u6A21\u578B" aria-hidden="true">#</a> 1 \u76D2\u6A21\u578B</h2><p><code>content</code>\uFF08\u5143\u7D20\u5185\u5BB9\uFF09 +\xA0<code>padding</code>\uFF08\u5185\u8FB9\u8DDD\uFF09 +\xA0<code>border</code>\uFF08\u8FB9\u6846\uFF09 +\xA0<code>margin</code>\uFF08\u5916\u8FB9\u8DDD\uFF09</p><blockquote><p>\u9875\u9762\u6E32\u67D3\u65F6\uFF0C<code>dom</code>\xA0\u5143\u7D20\u6240\u91C7\u7528\u7684 \u5E03\u5C40\u6A21\u578B\u3002\u53EF\u901A\u8FC7<code>box-sizing</code>\u8FDB\u884C\u8BBE\u7F6E\u3002\u6839\u636E\u8BA1\u7B97\u5BBD\u9AD8\u7684\u533A\u57DF\u53EF\u5206\u4E3A</p></blockquote><p>box-sizing</p><ul><li><code>content-box</code>\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u603B\u5BBD\u5EA6 =\xA0<code>margin</code>\xA0+\xA0<code>border</code>\xA0+\xA0<code>padding</code>\xA0+\xA0<code>width</code></li><li><code>border-box</code>\uFF1A\u76D2\u5B50\u5BBD\u5EA6\u5305\u542B\xA0<code>padding</code>\xA0\u548C\xA0<code>border</code>\uFF0C<code>\u603B\u5BBD\u5EA6 = margin + width</code></li><li><code>inherit</code>\uFF1A\u4ECE\u7236\u5143\u7D20\u7EE7\u627F\xA0<code>box-sizing</code>\xA0\u5C5E\u6027</li></ul><h2 id="_2-bfc" tabindex="-1"><a class="header-anchor" href="#_2-bfc" aria-hidden="true">#</a> 2 BFC</h2><blockquote><p>\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6E32\u67D3\u533A\u57DF\uFF0C\u8BA9\u5904\u4E8E\xA0<code>BFC</code>\xA0\u5185\u90E8\u7684\u5143\u7D20\u4E0E\u5916\u90E8\u7684\u5143\u7D20\u76F8\u4E92\u9694\u79BB\uFF0C\u4F7F\u5185\u5916\u5143\u7D20\u7684\u5B9A\u4F4D\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD\u3002</p></blockquote><blockquote><p>IE\u4E0B\u4E3A\xA0<code>Layout</code>\uFF0C\u53EF\u901A\u8FC7\xA0<code>zoom:1</code>\xA0\u89E6\u53D1</p></blockquote><p>\u89E6\u53D1\u6761\u4EF6:</p><ul><li>\u6839\u5143\u7D20</li><li><code>position: absolute/fixed</code></li><li><code>display: inline-block / table</code></li><li><code>float</code>\xA0\u5143\u7D20</li><li><code>ovevflow !== visible</code></li></ul><p>\u89C4\u5219:</p><ul><li>\u5C5E\u4E8E\u540C\u4E00\u4E2A\xA0<code>BFC</code>\xA0\u7684\u4E24\u4E2A\u76F8\u90BB\xA0<code>Box</code>\xA0\u5782\u76F4\u6392\u5217</li><li>\u5C5E\u4E8E\u540C\u4E00\u4E2A\xA0<code>BFC</code>\xA0\u7684\u4E24\u4E2A\u76F8\u90BB\xA0<code>Box</code>\xA0\u7684\xA0<code>margin</code>\xA0\u4F1A\u53D1\u751F\u91CD\u53E0</li><li><code>BFC</code>\xA0\u4E2D\u5B50\u5143\u7D20\u7684\xA0<code>margin box</code>\xA0\u7684\u5DE6\u8FB9\uFF0C \u4E0E\u5305\u542B\u5757 (BFC)\xA0<code>border box</code>\u7684\u5DE6\u8FB9\u76F8\u63A5\u89E6 (\u5B50\u5143\u7D20\xA0<code>absolute</code>\xA0\u9664\u5916)</li><li><code>BFC</code>\xA0\u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E\xA0<code>float</code>\xA0\u7684\u5143\u7D20\u533A\u57DF\u91CD\u53E0</li><li>\u8BA1\u7B97\xA0<code>BFC</code>\xA0\u7684\u9AD8\u5EA6\u65F6\uFF0C\u6D6E\u52A8\u5B50\u5143\u7D20\u4E5F\u53C2\u4E0E\u8BA1\u7B97</li><li>\u6587\u5B57\u5C42\u4E0D\u4F1A\u88AB\u6D6E\u52A8\u5C42\u8986\u76D6\uFF0C\u73AF\u7ED5\u4E8E\u5468\u56F4</li></ul><p>\u5E94\u7528:</p><ul><li>\u963B\u6B62<code>margin</code>\u91CD\u53E0</li><li>\u53EF\u4EE5\u5305\u542B\u6D6E\u52A8\u5143\u7D20 ------ \u6E05\u9664\u5185\u90E8\u6D6E\u52A8(\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406\u662F\u4E24\u4E2A<code>div</code>\u90FD\u4F4D\u4E8E\u540C\u4E00\u4E2A\xA0<code>BFC</code>\xA0\u533A\u57DF\u4E4B\u4E2D)</li><li>\u81EA\u9002\u5E94\u4E24\u680F\u5E03\u5C40</li><li>\u53EF\u4EE5\u963B\u6B62\u5143\u7D20\u88AB\u6D6E\u52A8\u5143\u7D20\u8986\u76D6</li></ul><h2 id="_3-\u5C42\u53E0\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#_3-\u5C42\u53E0\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> 3 \u5C42\u53E0\u4E0A\u4E0B\u6587</h2><blockquote><p>\u5143\u7D20\u63D0\u5347\u4E3A\u4E00\u4E2A\u6BD4\u8F83\u7279\u6B8A\u7684\u56FE\u5C42\uFF0C\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D (z\u8F74) \u9AD8\u51FA\u666E\u901A\u5143\u7D20\u4E00\u7B49\u3002</p></blockquote><p>\u89E6\u53D1\u6761\u4EF6</p><ul><li>\u6839\u5C42\u53E0\u4E0A\u4E0B\u6587(<code>html</code>)</li><li><code>position</code></li><li><code>css3</code>\u5C5E\u6027 <ul><li><code>flex</code></li><li><code>transform</code></li><li><code>opacity</code></li><li><code>filter</code></li><li><code>will-change</code></li><li><code>webkit-overflow-scrolling</code></li></ul></li></ul><p>\u5C42\u53E0\u7B49\u7EA7\uFF1A\u5C42\u53E0\u4E0A\u4E0B\u6587\u5728z\u8F74\u4E0A\u7684\u6392\u5E8F</p><ul><li>\u5728\u540C\u4E00\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5C42\u53E0\u7B49\u7EA7\u624D\u6709\u610F\u4E49</li><li><code>z-index</code>\u7684\u4F18\u5148\u7EA7\u6700\u9AD8</li></ul><p><img src="'+c+`" alt=""></p><h2 id="_4-\u5C45\u4E2D\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_4-\u5C45\u4E2D\u5E03\u5C40" aria-hidden="true">#</a> 4 \u5C45\u4E2D\u5E03\u5C40</h2><h3 id="\u5DE6\u53F3\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u53F3\u5C45\u4E2D" aria-hidden="true">#</a> \u5DE6\u53F3\u5C45\u4E2D</h3><ul><li>\u884C\u5185\u5143\u7D20:\xA0<code>text-align: center</code></li><li>\u5B9A\u5BBD\u5757\u72B6\u5143\u7D20: \u5DE6\u53F3\xA0<code>margin</code>\xA0\u503C\u4E3A\xA0<code>auto</code></li><li>\u4E0D\u5B9A\u5BBD\u5757\u72B6\u5143\u7D20:\xA0<code>table</code>\u5E03\u5C40\uFF0C<code>position + transform</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u65B9\u68481 */
.wrap {
  text-align: center
}
.center {
  display: inline;
  /* or */
  /* display: inline-block; */
}
/* \u65B9\u68482 */
.center {
  width: 100px;
  margin: 0 auto;
}
/* \u65B9\u68482 */
.wrap {
  position: relative;
}
.center {
  position: absulote;
  left: 50%;
  transform: translateX(-50%);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0A\u4E0B\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u4E0A\u4E0B\u5782\u76F4\u5C45\u4E2D</h3><ul><li>\u5B9A\u9AD8\uFF1A<code>margin</code>\uFF0C<code>position + margin</code>(\u8D1F\u503C)</li><li>\u4E0D\u5B9A\u9AD8\uFF1A<code>position</code>\xA0+\xA0<code>transform</code>\uFF0C<code>flex</code>\uFF0C<code>IFC + vertical-align:middle</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u5B9A\u9AD8\u65B9\u68481 */
.center {
  height: 100px;
  margin: 50px 0;
}
/* \u5B9A\u9AD8\u65B9\u68482 */
.center {
  height: 100px;
  position: absolute;
  top: 50%;
  margin-top: -25px;
}
/* \u4E0D\u5B9A\u9AD8\u65B9\u68481 */
.center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
/* \u4E0D\u5B9A\u9AD8\u65B9\u68482 */
.wrap {
  display: flex;
  align-items: center;
}
.center {
  width: 100%;
}
/* \u4E0D\u5B9A\u9AD8\u65B9\u68483 */
/* \u8BBE\u7F6E inline-block \u5219\u4F1A\u5728\u5916\u5C42\u4EA7\u751F IFC\uFF0C\u9AD8\u5EA6\u8BBE\u4E3A 100% \u6491\u5F00 wrap \u7684\u9AD8\u5EA6 */
.wrap::before {
  content: &#39;&#39;;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.wrap {
  text-align: center;
}
.center {
  display: inline-block;
  vertical-align: middle;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u9009\u62E9\u5668\u6743\u91CD\u8BA1\u7B97\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u9009\u62E9\u5668\u6743\u91CD\u8BA1\u7B97\u65B9\u5F0F" aria-hidden="true">#</a> 5 \u9009\u62E9\u5668\u6743\u91CD\u8BA1\u7B97\u65B9\u5F0F</h2><blockquote><p>!important &gt; \u5185\u8054\u6837\u5F0F = \u5916\u8054\u6837\u5F0F &gt; ID\u9009\u62E9\u5668 &gt; \u7C7B\u9009\u62E9\u5668 = \u4F2A\u7C7B\u9009\u62E9\u5668 = \u5C5E\u6027\u9009\u62E9\u5668 &gt; \u5143\u7D20\u9009\u62E9\u5668 = \u4F2A\u5143\u7D20\u9009\u62E9\u5668 &gt; \u901A\u914D\u9009\u62E9\u5668 = \u540E\u4EE3\u9009\u62E9\u5668 = \u5144\u5F1F\u9009\u62E9\u5668</p></blockquote><ol><li>\u5C5E\u6027\u540E\u9762\u52A0<code>!import</code>\u4F1A\u8986\u76D6\u9875\u9762\u5185\u4EFB\u4F55\u4F4D\u7F6E\u5B9A\u4E49\u7684\u5143\u7D20\u6837\u5F0F</li><li>\u4F5C\u4E3A<code>style</code>\u5C5E\u6027\u5199\u5728\u5143\u7D20\u5185\u7684\u6837\u5F0F</li><li><code>id</code>\u9009\u62E9\u5668</li><li>\u7C7B\u9009\u62E9\u5668</li><li>\u6807\u7B7E\u9009\u62E9\u5668</li><li>\u901A\u914D\u7B26\u9009\u62E9\u5668\uFF08<code>*</code>\uFF09</li><li>\u6D4F\u89C8\u5668\u81EA\u5B9A\u4E49\u6216\u7EE7\u627F</li></ol><p>\u540C\u4E00\u7EA7\u522B\uFF1A\u540E\u5199\u7684\u4F1A\u8986\u76D6\u5148\u5199\u7684</p><blockquote><p>css\u9009\u62E9\u5668\u7684\u89E3\u6790\u539F\u5219\uFF1A\u9009\u62E9\u5668\u5B9A\u4F4DDOM\u5143\u7D20\u662F\u4ECE\u53F3\u5F80\u5DE6\u7684\u65B9\u5411\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5C3D\u65E9\u7684\u8FC7\u6EE4\u6389\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u6837\u5F0F\u89C4\u5219\u548C\u5143\u7D20</p></blockquote><h2 id="_6-\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#_6-\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> 6 \u6E05\u9664\u6D6E\u52A8</h2><ol><li>\u5728\u6D6E\u52A8\u5143\u7D20\u540E\u9762\u6DFB\u52A0\xA0<code>clear:both</code>\u7684\u7A7A\xA0<code>div</code>\xA0\u5143\u7D20</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
    &lt;div style=&quot;clear:both&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u7ED9\u7236\u5143\u7D20\u6DFB\u52A0\xA0<code>overflow:hidden</code>\xA0\u6216\u8005\xA0<code>auto</code>\xA0\u6837\u5F0F\uFF0C\u89E6\u53D1<code>BFC</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.container{
    width: 300px;
    background-color: #aaa;
    overflow:hidden;
    zoom:1;   /*IE6*/
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u4F7F\u7528\u4F2A\u5143\u7D20\uFF0C\u4E5F\u662F\u5728\u5143\u7D20\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u70B9\u5E76\u5E26\u6709\xA0<code>clear: both</code>\xA0\u5C5E\u6027\u7684\u5143\u7D20\u5B9E\u73B0\u7684\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;container clearfix&quot;&gt;
    &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.clearfix{
    zoom: 1; /*IE6*/
}
.clearfix:after{
    content: &quot;.&quot;;
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u63A8\u8350\u4F7F\u7528\u7B2C\u4E09\u79CD\u65B9\u6CD5\uFF0C\u4E0D\u4F1A\u5728\u9875\u9762\u65B0\u589Ediv\uFF0C\u6587\u6863\u7ED3\u6784\u66F4\u52A0\u6E05\u6670</p></blockquote><h2 id="_7-link-\u4E0E-import-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_7-link-\u4E0E-import-\u7684\u533A\u522B" aria-hidden="true">#</a> 7 link \u4E0E @import \u7684\u533A\u522B</h2><ul><li><code>link</code>\u529F\u80FD\u8F83\u591A\uFF0C\u53EF\u4EE5\u5B9A\u4E49\xA0<code>RSS</code>\uFF0C\u5B9A\u4E49\xA0<code>Rel</code>\xA0\u7B49\u4F5C\u7528\uFF0C\u800C<code>@import</code>\u53EA\u80FD\u7528\u4E8E\u52A0\u8F7D\xA0<code>css</code></li><li>\u5F53\u89E3\u6790\u5230<code>link</code>\u65F6\uFF0C\u9875\u9762\u4F1A\u540C\u6B65\u52A0\u8F7D\u6240\u5F15\u7684\xA0<code>css</code>\uFF0C\u800C<code>@import</code>\u6240\u5F15\u7528\u7684\xA0<code>css</code>\xA0\u4F1A\u7B49\u5230\u9875\u9762\u52A0\u8F7D\u5B8C\u624D\u88AB\u52A0\u8F7D</li><li><code>@import</code>\u9700\u8981\xA0<code>IE5</code>\xA0\u4EE5\u4E0A\u624D\u80FD\u4F7F\u7528</li><li><code>link</code>\u53EF\u4EE5\u4F7F\u7528\xA0<code>js</code>\xA0\u52A8\u6001\u5F15\u5165\uFF0C<code>@import</code>\u4E0D\u884C</li></ul><h2 id="_8-css3\u7684\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_8-css3\u7684\u65B0\u7279\u6027" aria-hidden="true">#</a> 8 CSS3\u7684\u65B0\u7279\u6027</h2><ul><li><code>transition</code>\uFF1A\u8FC7\u6E21</li><li><code>transform</code>: \u65CB\u8F6C\u3001\u7F29\u653E\u3001\u79FB\u52A8\u6216\u503E\u659C</li><li><code>animation</code>: \u52A8\u753B</li><li><code>gradient</code>: \u6E10\u53D8</li><li><code>box-shadow</code>: \u9634\u5F71</li><li><code>border-radius</code>: \u5706\u89D2</li><li><code>word-break</code>:\xA0<code>normal|break-all|keep-all</code>; \u6587\u5B57\u6362\u884C(\u9ED8\u8BA4\u89C4\u5219|\u5355\u8BCD\u4E5F\u53EF\u4EE5\u6362\u884C|\u53EA\u5728\u534A\u89D2\u7A7A\u683C\u6216\u8FDE\u5B57\u7B26\u6362\u884C)</li><li><code>text-overflow</code>: \u6587\u5B57\u8D85\u51FA\u90E8\u5206\u5904\u7406</li><li><code>text-shadow</code>: \u6C34\u5E73\u9634\u5F71\uFF0C\u5782\u76F4\u9634\u5F71\uFF0C\u6A21\u7CCA\u7684\u8DDD\u79BB\uFF0C\u4EE5\u53CA\u9634\u5F71\u7684\u989C\u8272\u3002</li><li><code>box-sizing</code>:\xA0<code>content-box|border-box</code>\xA0\u76D2\u6A21\u578B</li><li>\u5A92\u4F53\u67E5\u8BE2\xA0<code>@media screen and (max-width: 960px) {}</code>\u8FD8\u6709\u6253\u5370<code>print</code></li></ul><p>transition\u548Canimation\u7684\u533A\u522B</p><blockquote><p><code>Animation</code>\u548C<code>transition</code>\u5927\u90E8\u5206\u5C5E\u6027\u662F\u76F8\u540C\u7684\uFF0C\u4ED6\u4EEC\u90FD\u662F\u968F\u65F6\u95F4\u6539\u53D8\u5143\u7D20\u7684\u5C5E\u6027\u503C\uFF0C\u4ED6\u4EEC\u7684\u4E3B\u8981\u533A\u522B\u662F<code>transition</code>\u9700\u8981\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\u624D\u80FD\u6539\u53D8\u5C5E\u6027\uFF0C\u800C<code>animation</code>\u4E0D\u9700\u8981\u89E6\u53D1\u4EFB\u4F55\u4E8B\u4EF6\u7684\u60C5\u51B5\u4E0B\u624D\u4F1A\u968F\u65F6\u95F4\u6539\u53D8\u5C5E\u6027\u503C\uFF0C\u5E76\u4E14<code>transition</code>\u4E3A2\u5E27\uFF0C\u4ECE<code>from .... to</code>\uFF0C\u800C<code>animation</code>\u53EF\u4EE5\u4E00\u5E27\u4E00\u5E27\u7684</p></blockquote><h2 id="_9-css\u52A8\u753B\u548C\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#_9-css\u52A8\u753B\u548C\u8FC7\u6E21" aria-hidden="true">#</a> 9 CSS\u52A8\u753B\u548C\u8FC7\u6E21</h2><h3 id="animation-keyframes" tabindex="-1"><a class="header-anchor" href="#animation-keyframes" aria-hidden="true">#</a> animation / keyframes</h3><ul><li><code>animation-name</code>: \u52A8\u753B\u540D\u79F0\uFF0C\u5BF9\u5E94<code>@keyframes</code></li><li><code>animation-duration</code>: \u95F4\u9694</li><li><code>animation-timing-function</code>: \u66F2\u7EBF</li><li><code>animation-delay</code>: \u5EF6\u8FDF</li><li><code>animation-iteration-count</code>: \u6B21\u6570 <ul><li><code>infinite</code>: \u5FAA\u73AF\u52A8\u753B</li></ul></li><li><code>animation-direction</code>: \u65B9\u5411 <ul><li><code>alternate</code>: \u53CD\u5411\u64AD\u653E</li></ul></li><li><code>animation-fill-mode</code>: \u9759\u6B62\u6A21\u5F0F <ul><li><code>forwards</code>: \u505C\u6B62\u65F6\uFF0C\u4FDD\u7559\u6700\u540E\u4E00\u5E27</li><li><code>backwards</code>: \u505C\u6B62\u65F6\uFF0C\u56DE\u5230\u7B2C\u4E00\u5E27</li><li><code>both</code>: \u540C\u65F6\u8FD0\u7528\xA0<code>forwards / backwards</code></li></ul></li><li>\u5E38\u7528\u94A9\u5B50:\xA0<code>animationend</code></li></ul><blockquote><p>\u52A8\u753B\u5C5E\u6027: \u5C3D\u91CF\u4F7F\u7528\u52A8\u753B\u5C5E\u6027\u8FDB\u884C\u52A8\u753B\uFF0C\u80FD\u62E5\u6709\u8F83\u597D\u7684\u6027\u80FD\u8868\u73B0</p></blockquote><ul><li><code>translate</code></li><li><code>scale</code></li><li><code>rotate</code></li><li><code>skew</code></li><li><code>opacity</code></li><li><code>color</code></li></ul><h3 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h3><ul><li>\u4F4D\u79FB\u5C5E\u6027 translate( x , y )</li><li>\u65CB\u8F6C\u5C5E\u6027 rotate()</li><li>\u7F29\u653E\u5C5E\u6027 scale()</li><li>\u503E\u659C\u5C5E\u6027 skew()</li></ul><h3 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h3><ul><li>transition-property\uFF08\u8FC7\u6E21\u7684\u5C5E\u6027\u7684\u540D\u79F0\uFF09\u3002</li><li>transition-duration\uFF08\u5B9A\u4E49\u8FC7\u6E21\u6548\u679C\u82B1\u8D39\u7684\u65F6\u95F4,\u9ED8\u8BA4\u662F 0\uFF09\u3002</li><li>transition-timing-function:linear(\u5300\u901F) ease(\u6162\u901F\u5F00\u59CB\uFF0C\u7136\u540E\u53D8\u5FEB\uFF0C\u7136\u540E\u6162\u901F\u7ED3\u675F)\uFF08\u89C4\u5B9A\u8FC7\u6E21\u6548\u679C\u7684\u65F6\u95F4\u66F2\u7EBF\uFF0C\u6700\u5E38\u7528\u7684\u662F\u8FD9\u4E24\u4E2A\uFF09\u3002</li><li>transition-delay\uFF08\u89C4\u5B9A\u8FC7\u6E21\u6548\u679C\u4F55\u65F6\u5F00\u59CB\u3002\u9ED8\u8BA4\u662F 0\uFF09</li></ul><blockquote><p>\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u90FD\u662F\u5199\u4E00\u8D77\u7684\uFF0C\u6BD4\u5982\uFF1Atransition\uFF1A width 2s ease 1s</p></blockquote><h3 id="\u5173\u952E\u5E27\u52A8\u753Banimation" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5E27\u52A8\u753Banimation" aria-hidden="true">#</a> \u5173\u952E\u5E27\u52A8\u753Banimation</h3><blockquote><p>\u4E00\u4E2A\u5173\u952E\u5E27\u52A8\u753B\uFF0C\u6700\u5C11\u5305\u542B\u4E24\u90E8\u5206\uFF0Canimation \u5C5E\u6027\u53CA\u5C5E\u6027\u503C\uFF08\u52A8\u753B\u7684\u540D\u79F0\u548C\u8FD0\u884C\u65B9\u5F0F\u8FD0\u884C\u65F6\u95F4\u7B49\uFF09\u3002@keyframes\uFF08\u89C4\u5B9A\u52A8\u753B\u7684\u5177\u4F53\u5B9E\u73B0\u8FC7\u7A0B\uFF09</p></blockquote><p>animation \u5C5E\u6027\u53EF\u4EE5\u62C6\u5206\u4E3A</p><ul><li>animation-name \u89C4\u5B9A@keyframes \u52A8\u753B\u7684\u540D\u79F0\u3002</li><li>animation-duration \u89C4\u5B9A\u52A8\u753B\u5B8C\u6210\u4E00\u4E2A\u5468\u671F\u6240\u82B1\u8D39\u7684\u79D2\u6216\u6BEB\u79D2\u3002\u9ED8\u8BA4\u662F 0\u3002</li><li>animation-timing-function \u89C4\u5B9A\u52A8\u753B\u7684\u901F\u5EA6\u66F2\u7EBF\u3002\u9ED8\u8BA4\u662F &quot;ease&quot;\uFF0C\u5E38\u7528\u7684\u8FD8\u6709linear\uFF0C\u540Ctranstion \u3002</li><li>animation-delay \u89C4\u5B9A\u52A8\u753B\u4F55\u65F6\u5F00\u59CB\u3002\u9ED8\u8BA4\u662F 0\u3002</li><li>animation-iteration-count \u89C4\u5B9A\u52A8\u753B\u88AB\u64AD\u653E\u7684\u6B21\u6570\u3002\u9ED8\u8BA4\u662F 1\uFF0C\u4F46\u6211\u4EEC\u4E00\u822C\u7528infinite\uFF0C\u4E00\u76F4\u64AD\u653E</li></ul><blockquote><p>\u800C@keyframes\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u662Ffrom-&gt;to\uFF08\u7B49\u540C\u4E8E0%\u548C100%\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4ECE0%-&gt;100%\u4E4B\u95F4\u4EFB\u610F\u4E2A\u7684\u5206\u5C42\u8BBE\u7F6E\u3002\u6211\u4EEC\u901A\u8FC7\u4E0B\u9762\u4E00\u4E2A\u7A0D\u5FAE\u590D\u6742\u70B9\u7684demo\u6765\u770B\u4E00\u4E0B\uFF0C\u57FA\u672C\u4E0A\u7528\u5230\u4E86\u4E0A\u9762\u8BF4\u5230\u7684\u5927\u90E8\u5206\u77E5\u8BC6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>eg:
   @keyframes mymove
  {
      from {top:0px;}
      to {top:200px;}
  }

\u7B49\u540C\u4E8E\uFF1A

@keyframes mymove
{
 0%   {top:0px;}
 25%  {top:200px;}
 50%  {top:100px;}
 75%  {top:200px;}
 100% {top:0px;}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7528css3\u52A8\u753B\u4F7F\u4E00\u4E2A\u56FE\u7247\u65CB\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u7528css3\u52A8\u753B\u4F7F\u4E00\u4E2A\u56FE\u7247\u65CB\u8F6C" aria-hidden="true">#</a> \u7528css3\u52A8\u753B\u4F7F\u4E00\u4E2A\u56FE\u7247\u65CB\u8F6C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#loader {

    display: block;

    position: relative;

    -webkit-animation: spin 2s linear infinite;

    animation: spin 2s linear infinite;

}

@-webkit-keyframes spin {

    0%   {

        -webkit-transform: rotate(0deg);

        -ms-transform: rotate(0deg);

        transform: rotate(0deg);

    }

    100% {

        -webkit-transform: rotate(360deg);

        -ms-transform: rotate(360deg);

        transform: rotate(360deg);

    }

}

@keyframes spin {

    0%   {

        -webkit-transform: rotate(0deg);

        -ms-transform: rotate(0deg);

        transform: rotate(0deg);

    }

    100% {

        -webkit-transform: rotate(360deg);

        -ms-transform: rotate(360deg);

        transform: rotate(360deg);

    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-\u6709\u54EA\u4E9B\u65B9\u5F0F-css-\u53EF\u4EE5\u9690\u85CF\u9875\u9762\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_10-\u6709\u54EA\u4E9B\u65B9\u5F0F-css-\u53EF\u4EE5\u9690\u85CF\u9875\u9762\u5143\u7D20" aria-hidden="true">#</a> 10 \u6709\u54EA\u4E9B\u65B9\u5F0F\uFF08CSS\uFF09\u53EF\u4EE5\u9690\u85CF\u9875\u9762\u5143\u7D20</h2><ul><li><code>opacity:0</code>\uFF1A\u672C\u8D28\u4E0A\u662F\u5C06\u5143\u7D20\u7684\u900F\u660E\u5EA6\u5C06\u4E3A0\uFF0C\u5C31\u770B\u8D77\u6765\u9690\u85CF\u4E86\uFF0C\u4F46\u662F\u4F9D\u7136\u5360\u636E\u7A7A\u95F4\u4E14\u53EF\u4EE5\u4EA4\u4E92</li><li><code>visibility:hidden</code>: \u4E0E\u4E0A\u4E00\u4E2A\u65B9\u6CD5\u7C7B\u4F3C\u7684\u6548\u679C\uFF0C\u5360\u636E\u7A7A\u95F4\uFF0C\u4F46\u662F\u4E0D\u53EF\u4EE5\u4EA4\u4E92\u4E86</li><li><code>overflow:hidden</code>: \u8FD9\u4E2A\u53EA\u9690\u85CF\u5143\u7D20\u6EA2\u51FA\u7684\u90E8\u5206\uFF0C\u4F46\u662F\u5360\u636E\u7A7A\u95F4\u4E14\u4E0D\u53EF\u4EA4\u4E92</li><li><code>display:none</code>: \u8FD9\u4E2A\u662F\u5F7B\u5E95\u9690\u85CF\u4E86\u5143\u7D20\uFF0C\u5143\u7D20\u4ECE\u6587\u6863\u6D41\u4E2D\u6D88\u5931\uFF0C\u65E2\u4E0D\u5360\u636E\u7A7A\u95F4\u4E5F\u4E0D\u4EA4\u4E92\uFF0C\u4E5F\u4E0D\u5F71\u54CD\u5E03\u5C40</li><li><code>z-index:-9999</code>: \u539F\u7406\u662F\u5C06\u5C42\u7EA7\u653E\u5230\u5E95\u90E8\uFF0C\u8FD9\u6837\u5C31\u88AB\u8986\u76D6\u4E86\uFF0C\u770B\u8D77\u6765\u9690\u85CF\u4E86</li><li><code>transform: scale(0,0)</code>: \u5E73\u9762\u53D8\u6362\uFF0C\u5C06\u5143\u7D20\u7F29\u653E\u4E3A0\uFF0C\u4F46\u662F\u4F9D\u7136\u5360\u636E\u7A7A\u95F4\uFF0C\u4F46\u4E0D\u53EF\u4EA4\u4E92</li></ul><h2 id="_11-em\u3001px\u3001rem\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_11-em\u3001px\u3001rem\u533A\u522B" aria-hidden="true">#</a> 11 em\u3001px\u3001rem\u533A\u522B</h2><ul><li><code>px</code>\uFF1A\u7EDD\u5BF9\u5355\u4F4D\uFF0C\u9875\u9762\u6309\u7CBE\u786E\u50CF\u7D20\u5C55\u793A\u3002</li><li><code>em</code>\uFF1A\u76F8\u5BF9\u5355\u4F4D\uFF0C\u57FA\u51C6\u70B9\u4E3A\u7236\u8282\u70B9\u5B57\u4F53\u7684\u5927\u5C0F\uFF0C\u5982\u679C\u81EA\u8EAB\u5B9A\u4E49\u4E86<code>font-size</code>\u6309\u81EA\u8EAB\u6765\u8BA1\u7B97\uFF08\u6D4F\u89C8\u5668\u9ED8\u8BA4\u5B57\u4F53\u662F<code>16px</code>\uFF09\uFF0C\u6574\u4E2A\u9875\u9762\u51851em\u4E0D\u662F\u4E00\u4E2A\u56FA\u5B9A\u7684\u503C\u3002</li><li><code>rem</code>\uFF1A\u76F8\u5BF9\u5355\u4F4D\uFF0C\u53EF\u7406\u89E3\u4E3A&quot;<code>root em</code>&quot;, \u76F8\u5BF9\u6839\u8282\u70B9html\u7684\u5B57\u4F53\u5927\u5C0F\u6765\u8BA1\u7B97\uFF0C<code>CSS3</code>\u65B0\u52A0\u5C5E\u6027\uFF0C<code>chrome/firefox/IE9+</code>\u652F\u6301</li></ul><h2 id="_12-flex" tabindex="-1"><a class="header-anchor" href="#_12-flex" aria-hidden="true">#</a> 12 flex</h2><h3 id="\u4F7F\u7528\u8FC7flex\u5E03\u5C40\u5417-flex-grow\u548Cflex-shrink\u5C5E\u6027\u6709\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8FC7flex\u5E03\u5C40\u5417-flex-grow\u548Cflex-shrink\u5C5E\u6027\u6709\u4EC0\u4E48\u7528" aria-hidden="true">#</a> \u4F7F\u7528\u8FC7flex\u5E03\u5C40\u5417\uFF1Fflex-grow\u548Cflex-shrink\u5C5E\u6027\u6709\u4EC0\u4E48\u7528\uFF1F</h3><ul><li><code>flex-grow</code>\uFF1A\u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u5373\u5982\u679C\u5B58\u5728\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E5F\u4E0D\u653E\u5927\u3002</li><li><code>flex-shrink</code>\uFF1A\u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A1\uFF0C\u5373\u5982\u679C\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BE5\u9879\u76EE\u5C06\u7F29\u5C0F</li></ul><h2 id="_13-\u5173\u4E8E\u4F2A\u7C7B-lvha-\u7684\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#_13-\u5173\u4E8E\u4F2A\u7C7B-lvha-\u7684\u89E3\u91CA" aria-hidden="true">#</a> 13 \u5173\u4E8E\u4F2A\u7C7B LVHA \u7684\u89E3\u91CA</h2><blockquote><p>a\u6807\u7B7E\u6709\u56DB\u79CD\u72B6\u6001\uFF1A\u94FE\u63A5\u8BBF\u95EE\u524D\u3001\u94FE\u63A5\u8BBF\u95EE\u540E\u3001\u9F20\u6807\u6ED1\u8FC7\u3001\u6FC0\u6D3B\uFF0C\u5206\u522B\u5BF9\u5E94\u56DB\u79CD\u4F2A\u7C7B:<code>link</code>\u3001<code>:visited</code>\u3001<code>:hover</code>\u3001<code>:active</code>\uFF1B</p></blockquote><p>\u5F53\u94FE\u63A5\u672A\u8BBF\u95EE\u8FC7\u65F6\uFF1A</p><ul><li>\u5F53\u9F20\u6807\u6ED1\u8FC7a\u94FE\u63A5\u65F6\uFF0C\u6EE1\u8DB3<code>:link</code>\u548C<code>:hover</code>\u4E24\u79CD\u72B6\u6001\uFF0C\u8981\u6539\u53D8a\u6807\u7B7E\u7684\u989C\u8272\uFF0C\u5C31\u5FC5\u987B\u5C06<code>:hover</code>\u4F2A\u7C7B\u5728<code>:link</code>\u4F2A \u7C7B\u540E\u9762\u58F0\u660E\uFF1B</li><li>\u5F53\u9F20\u6807\u70B9\u51FB\u6FC0\u6D3Ba\u94FE\u63A5\u65F6\uFF0C\u540C\u65F6\u6EE1\u8DB3<code>:link</code>\u3001<code>:hover</code>\u3001<code>:active</code>\u4E09\u79CD\u72B6\u6001\uFF0C\u8981\u663E\u793Aa\u6807\u7B7E\u6FC0\u6D3B\u65F6\u7684\u6837\u5F0F\uFF08<code>:active</code>\uFF09\uFF0C \u5FC5\u987B\u5C06<code>:active</code>\u58F0\u660E\u653E\u5230<code>:link</code>\u548C<code>:hover</code>\u4E4B\u540E\u3002\u56E0\u6B64\u5F97\u51FA<code>LVHA</code>\u8FD9\u4E2A\u987A\u5E8F\u3002</li><li>\u5F53\u94FE\u63A5\u8BBF\u95EE\u8FC7\u65F6\uFF0C\u60C5\u51B5\u57FA\u672C\u540C\u4E0A\uFF0C\u53EA\u4E0D\u8FC7\u9700\u8981\u5C06<code>:link</code>\u6362\u6210<code>:visited</code>\u3002</li></ul><blockquote><p>\u8FD9\u4E2A\u987A\u5E8F\u80FD\u4E0D\u80FD\u53D8\uFF1F\u53EF\u4EE5\uFF0C\u4F46\u4E5F\u53EA\u6709<code>:link</code>\u548C<code>:visited</code>\u53EF\u4EE5\u4EA4\u6362\u4F4D\u7F6E\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u94FE\u63A5\u8981\u4E48\u8BBF\u95EE\u8FC7\u8981\u4E48\u6CA1\u8BBF\u95EE\u8FC7\uFF0C\u4E0D\u53EF\u80FD\u540C\u65F6\u6EE1\u8DB3\uFF0C\u4E5F\u5C31\u4E0D\u5B58\u5728\u8986\u76D6\u7684\u95EE\u9898\u3002</p></blockquote><h2 id="_14-calc\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_14-calc\u51FD\u6570" aria-hidden="true">#</a> 14 calc\u51FD\u6570</h2><blockquote><p>calc\u51FD\u6570\u662Fcss3\u65B0\u589E\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>calc()</code>\u8BA1\u7B97<code>border\u3001margin\u3001pading\u3001font-size</code>\u548Cwidth\u7B49\u5C5E\u6027\u8BBE\u7F6E\u52A8\u6001\u503C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#div1 {
    position: absolute;
    left: 50px;
    width: calc( 100% / (100px * 2) );
    /* \u517C\u5BB9\u5199\u6CD5 */
    width: -moz-calc( 100% / (100px * 2) );
    width: -webkit-calc( 100% / (100px * 2) );
    border: 1px solid black;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u70B9\uFF1A</p><ul><li>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD0\u7B97\u7B26\u524D\u540E\u90FD\u9700\u8981\u4FDD\u7559\u4E00\u4E2A\u7A7A\u683C\uFF0C\u4F8B\u5982\uFF1A<code>width: calc(100% - 10px)</code>;</li><li><code>calc()</code>\u51FD\u6570\u652F\u6301\xA0<code>&quot;+&quot;</code>, &quot;<code>-&quot;</code>,\xA0<code>&quot;*&quot;</code>,\xA0<code>&quot;/&quot;</code>\xA0\u8FD0\u7B97;</li><li>\u5BF9\u4E8E\u4E0D\u652F\u6301\xA0<code>calc()</code>\u7684\u6D4F\u89C8\u5668\uFF0C\u6574\u4E2A\u5C5E\u6027\u503C\u8868\u8FBE\u5F0F\u5C06\u88AB\u5FFD\u7565\u3002\u4E0D\u8FC7\u6211\u4EEC\u53EF\u4EE5\u5BF9\u90A3\u4E9B\u4E0D\u652F\u6301<code>calc()</code>\u7684\u6D4F\u89C8\u5668\uFF0C\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u503C\u4F5C\u4E3A\u56DE\u9000\u3002</li></ul><h2 id="_15-\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_15-\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20" aria-hidden="true">#</a> 15 \u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20</h2><blockquote><p><code>css</code>\u5F15\u5165\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u6982\u5FF5\u662F\u4E3A\u4E86\u683C\u5F0F\u5316\u6587\u6863\u6811\u4EE5\u5916\u7684\u4FE1\u606F\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u90FD\u662F\u7528\u6765\u4FEE\u9970\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u7684\u90E8\u5206</p></blockquote><p>\u4F2A\u7C7B</p><blockquote><p>\u4F2A\u7C7B\u5B58\u5728\u7684\u610F\u4E49\u662F\u4E3A\u4E86\u901A\u8FC7\u9009\u62E9\u5668\u627E\u5230\u90A3\u4E9B\u4E0D\u5B58\u5728DOM\u6811\u4E2D\u7684\u4FE1\u606F\u4EE5\u53CA\u4E0D\u80FD\u88AB\u5E38\u89C4CSS\u9009\u62E9\u5668\u83B7\u53D6\u5230\u7684\u4FE1\u606F</p></blockquote><ol><li>\u83B7\u53D6\u4E0D\u5B58\u5728\u4E0EDOM\u6811\u4E2D\u7684\u4FE1\u606F\u3002\u6BD4\u5982a\u6807\u7B7E\u7684<code>:link</code>\u3001<code>visited</code>\u7B49\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u4E0D\u5B58\u5728\u4E0EDOM\u6811\u7ED3\u6784\u4E2D\uFF0C\u53EA\u80FD\u901A\u8FC7CSS\u9009\u62E9\u5668\u6765\u83B7\u53D6\uFF1B</li><li>\u83B7\u53D6\u4E0D\u80FD\u88AB\u5E38\u89C4CSS\u9009\u62E9\u5668\u83B7\u53D6\u7684\u4FE1\u606F\u3002\u6BD4\u5982\uFF1A\u8981\u83B7\u53D6\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\uFF0C\u6211\u4EEC\u65E0\u6CD5\u7528\u5E38\u89C4\u7684CSS\u9009\u62E9\u5668\u83B7\u53D6\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7\xA0<code>:first-child</code>\xA0\u6765\u83B7\u53D6\u5230\u3002</li></ol><p><img src="`+s+`" alt=""></p><p>\u4F2A\u5143\u7D20</p><blockquote><p>\u4F2A\u5143\u7D20\u7528\u4E8E\u521B\u5EFA\u4E00\u4E9B\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u7684\u5143\u7D20\uFF0C\u5E76\u4E3A\u5176\u6DFB\u52A0\u6837\u5F0F\u3002\u6BD4\u5982\u8BF4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>:before</code>\u6765\u5728\u4E00\u4E2A\u5143\u7D20\u524D\u589E\u52A0\u4E00\u4E9B\u6587\u672C\uFF0C\u5E76\u4E3A\u8FD9\u4E9B\u6587\u672C\u6DFB\u52A0\u6837\u5F0F\u3002\u867D\u7136\u7528\u6237\u53EF\u4EE5\u770B\u5230\u8FD9\u4E9B\u6587\u672C\uFF0C\u4F46\u662F\u8FD9\u4E9B\u6587\u672C\u5B9E\u9645\u4E0A\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u3002\u5E38\u89C1\u7684\u4F2A\u5143\u7D20\u6709\uFF1A<code>::before</code>\uFF0C<code>::after</code>\uFF0C<code>::first-line</code>\uFF0C<code>::first-letter</code>\uFF0C<code>::selection</code>\u3001<code>::placeholder</code>\u7B49</p></blockquote><blockquote><p>\u56E0\u6B64\uFF0C\u4F2A\u7C7B\u4E0E\u4F2A\u5143\u7D20\u7684\u533A\u522B\u5728\u4E8E\uFF1A\u6709\u6CA1\u6709\u521B\u5EFA\u4E00\u4E2A\u6587\u6863\u6811\u4E4B\u5916\u7684\u5143\u7D20</p></blockquote><p>::after\u548C:after\u7684\u533A\u522B</p><ul><li>\u5728\u5B9E\u9645\u7684\u5F00\u53D1\u5DE5\u4F5C\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u770B\u5230\u6709\u4EBA\u628A\u4F2A\u5143\u7D20\u5199\u6210<code>:after</code>\uFF0C\u8FD9\u5B9E\u9645\u662F\xA0<code>CSS2</code>\xA0\u4E0E<code>CSS3</code>\u65B0\u65E7\u6807\u51C6\u7684\u89C4\u5B9A\u4E0D\u540C\u800C\u5BFC\u81F4\u7684\u3002</li><li><code>CSS2</code>\xA0\u4E2D\u7684\u4F2A\u5143\u7D20\u4F7F\u75281\u4E2A\u5192\u53F7\uFF0C\u5728\xA0<code>CSS3</code>\xA0\u4E2D\uFF0C\u4E3A\u4E86\u533A\u5206\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\uFF0C\u89C4\u5B9A\u4F2A\u5143\u7D20\u4F7F\u75282\u4E2A\u5192\u53F7\u3002\u6240\u4EE5\uFF0C\u5BF9\u4E8E CSS2 \u6807\u51C6\u7684\u8001\u4F2A\u5143\u7D20\uFF0C\u6BD4\u5982<code>:first-line</code>\uFF0C<code>:first-letter</code>\uFF0C<code>:before</code>\uFF0C<code>:after</code>\uFF0C\u5199\u4E00\u4E2A\u5192\u53F7\u6D4F\u89C8\u5668\u4E5F\u80FD\u8BC6\u522B\uFF0C\u4F46\u5BF9\u4E8E CSS3 \u6807\u51C6\u7684\u65B0\u4F2A\u5143\u7D20\uFF0C\u6BD4\u5982<code>::selection</code>\uFF0C\u5C31\u5FC5\u987B\u51992\u4E2A\u5192\u53F7\u4E86</li></ul><p>CSS3\u65B0\u589E\u4F2A\u7C7B\u6709\u90A3\u4E9B\uFF1F</p><ul><li><code>p:first-of-type</code>\xA0\u9009\u62E9\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u7684\u9996\u4E2A<code>&lt;p&gt;</code>\u5143\u7D20\u7684\u6BCF\u4E2A<code>&lt;p&gt;</code>\xA0\u5143\u7D20\u3002</li><li><code>p:last-of-type</code>\xA0\u9009\u62E9\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u7684\u6700\u540E\xA0<code>&lt;p&gt;</code>\xA0\u5143\u7D20\u7684\u6BCF\u4E2A<code>&lt;p&gt;</code>\xA0\u5143\u7D20\u3002</li><li><code>p:only-of-type</code>\xA0\u9009\u62E9\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u552F\u4E00\u7684\xA0<code>&lt;p&gt;</code>\u5143\u7D20\u7684\u6BCF\u4E2A\xA0<code>&lt;p&gt;</code>\xA0\u5143\u7D20\u3002</li><li><code>p:only-child</code>\xA0\u9009\u62E9\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u7684\u552F\u4E00\u5B50\u5143\u7D20\u7684\u6BCF\u4E2A\xA0<code>&lt;p&gt;</code>\xA0\u5143\u7D20\u3002</li><li><code>p:nth-child(2)</code>\xA0\u9009\u62E9\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u7684\u7B2C\u4E8C\u4E2A\u5B50\u5143\u7D20\u7684\u6BCF\u4E2A\xA0<code>&lt;p&gt;</code>\xA0\u5143\u7D20\u3002</li><li><code>:after</code>\xA0\u5728\u5143\u7D20\u4E4B\u524D\u6DFB\u52A0\u5185\u5BB9,\u4E5F\u53EF\u4EE5\u7528\u6765\u505A\u6E05\u9664\u6D6E\u52A8\u3002</li><li><code>:before</code>\xA0\u5728\u5143\u7D20\u4E4B\u540E\u6DFB\u52A0\u5185\u5BB9</li><li><code>:enabled</code></li><li><code>:disabled</code>\xA0\u63A7\u5236\u8868\u5355\u63A7\u4EF6\u7684\u7981\u7528\u72B6\u6001\u3002</li><li><code>:checked</code>\xA0\u5355\u9009\u6846\u6216\u590D\u9009\u6846\u88AB\u9009\u4E2D</li></ul><h2 id="_16-\u6D4F\u89C8\u5668\u662F\u600E\u6837\u89E3\u6790-css-\u9009\u62E9\u5668\u7684" tabindex="-1"><a class="header-anchor" href="#_16-\u6D4F\u89C8\u5668\u662F\u600E\u6837\u89E3\u6790-css-\u9009\u62E9\u5668\u7684" aria-hidden="true">#</a> 16 \u6D4F\u89C8\u5668\u662F\u600E\u6837\u89E3\u6790 CSS \u9009\u62E9\u5668\u7684</h2><ul><li>\u6837\u5F0F\u7CFB\u7EDF\u4ECE\u5173\u952E\u9009\u62E9\u5668\u5F00\u59CB\u5339\u914D\uFF0C\u7136\u540E\u5DE6\u79FB\u67E5\u627E\u89C4\u5219\u9009\u62E9\u5668\u7684\u7956\u5148\u5143\u7D20\u3002\u53EA\u8981\u9009\u62E9\u5668\u7684\u5B50\u6811\u4E00\u76F4\u5728\u5DE5\u4F5C\uFF0C\u6837\u5F0F\u7CFB\u7EDF\u5C31\u4F1A\u6301\u7EED\u5DE6\u79FB\uFF0C\u76F4\u5230\u548C\u89C4\u5219\u5339\u914D\uFF0C\u6216\u8005\u662F\u56E0\u4E3A\u4E0D\u5339\u914D\u800C\u653E\u5F03\u8BE5\u89C4\u5219\u3002</li><li>\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u5982\u679C\u91C7\u7528\u4ECE\u5DE6\u81F3\u53F3\u7684\u65B9\u5F0F\u8BFB\u53D6CSS\u89C4\u5219\uFF0C\u90A3\u4E48\u5927\u591A\u6570\u89C4\u5219\u8BFB\u5230\u6700\u540E\uFF08\u6700\u53F3\uFF09\u624D\u4F1A\u53D1\u73B0\u662F\u4E0D\u5339\u914D\u7684\uFF0C\u8FD9\u6837\u505A\u4F1A\u8D39\u65F6\u8017\u80FD\uFF0C \u6700\u540E\u6709\u5F88\u591A\u90FD\u662F\u65E0\u7528\u7684\uFF1B\u800C\u5982\u679C\u91C7\u53D6\u4ECE\u53F3\u5411\u5DE6\u7684\u65B9\u5F0F\uFF0C\u90A3\u4E48\u53EA\u8981\u53D1\u73B0\u6700\u53F3\u8FB9\u9009\u62E9\u5668\u4E0D\u5339\u914D\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u820D\u5F03\u4E86\uFF0C\u907F\u514D\u4E86\u8BB8\u591A\u65E0\u6548\u5339\u914D\u3002</li></ul><h2 id="_17-\u6D4F\u89C8\u5668\u5982\u4F55\u5224\u65AD\u662F\u5426\u652F\u6301-webp-\u683C\u5F0F\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#_17-\u6D4F\u89C8\u5668\u5982\u4F55\u5224\u65AD\u662F\u5426\u652F\u6301-webp-\u683C\u5F0F\u56FE\u7247" aria-hidden="true">#</a> 17 \u6D4F\u89C8\u5668\u5982\u4F55\u5224\u65AD\u662F\u5426\u652F\u6301 webp \u683C\u5F0F\u56FE\u7247</h2><ul><li>\u5BBD\u9AD8\u5224\u65AD\u6CD5\u3002\u901A\u8FC7\u521B\u5EFA<code>image</code>\u5BF9\u8C61\uFF0C\u5C06\u5176<code>src</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3A<code>webp</code>\u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u7136\u540E\u5728<code>onload</code>\u4E8B\u4EF6\u4E2D\u83B7\u53D6\u56FE\u7247\u7684\u5BBD\u9AD8\uFF0C\u5982 \u679C\u80FD\u591F\u83B7\u53D6\uFF0C\u5219\u8BF4\u660E\u6D4F\u89C8\u5668\u652F\u6301<code>webp</code>\u683C\u5F0F\u56FE\u7247\u3002\u5982\u679C\u4E0D\u80FD\u83B7\u53D6\u6216\u8005\u89E6\u53D1\u4E86<code>onerror</code>\u51FD\u6570\uFF0C\u90A3\u4E48\u5C31\u8BF4\u660E\u6D4F\u89C8\u5668\u4E0D\u652F\u6301webp\u683C \u5F0F\u7684\u56FE\u7247</li><li>canvas\u5224\u65AD\u65B9\u6CD5\u3002\u6211\u4EEC\u53EF\u4EE5\u52A8\u6001\u7684\u521B\u5EFA\u4E00\u4E2A<code>canvas</code>\u5BF9\u8C61\uFF0C\u901A\u8FC7<code>canvas</code>\u7684<code>toDataURL</code>\u5C06\u8BBE\u7F6E\u4E3Awebp\u683C\u5F0F\uFF0C\u7136\u540E\u5224\u65AD \u8FD4\u56DE\u503C\u4E2D\u662F\u5426\u542B\u6709<code>image/webp</code>\u5B57\u6BB5\uFF0C\u5982\u679C\u5305\u542B\u5219\u8BF4\u660E\u652F\u6301<code>WebP</code>\uFF0C\u53CD\u4E4B\u5219\u4E0D\u652F\u6301</li></ul><h2 id="_18-css\u52A0\u8F7D\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_18-css\u52A0\u8F7D\u95EE\u9898" aria-hidden="true">#</a> 18 CSS\u52A0\u8F7D\u95EE\u9898</h2><p>\u6839\u636E\u9875\u9762\u6E32\u67D3\u6D41\u7A0B\u53EF\u5F97\u77E5\uFF1A</p><ul><li><code>css</code>\u52A0\u8F7D\u4E0D\u4F1A\u963B\u585EDOM\u6811\u7684\u89E3\u6790;</li><li><code>css</code>\u52A0\u8F7D\u4F1A\u963B\u585EDOM\u6811\u7684\u6E32\u67D3\uFF1B</li><li><code>css</code>\u52A0\u8F7D\u4F1A\u963B\u585E\u540E\u9762js\u8BED\u53E5\u7684\u6267\u884C</li></ul><h2 id="_19-\u6587\u5B57\u5355\u8D85\u51FA\u663E\u793A\u7701\u7565\u53F7" tabindex="-1"><a class="header-anchor" href="#_19-\u6587\u5B57\u5355\u8D85\u51FA\u663E\u793A\u7701\u7565\u53F7" aria-hidden="true">#</a> 19 \u6587\u5B57\u5355\u8D85\u51FA\u663E\u793A\u7701\u7565\u53F7</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div {
	width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u5B57\u591A\u884C\u8D85\u51FA\u663E\u793A\u7701\u7565\u53F7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div {
	width: 200px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u65B9\u6CD5\u9002\u7528\u4E8EWebKit\u6D4F\u89C8\u5668\u53CA\u79FB\u52A8\u7AEF\u3002</p><p>\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9\u65B9\u6848\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>p {
    position:relative;
    line-height:1.4em;
    /* 3 times the line-height to show 3 lines */
    height:4.2em;
    overflow:hidden;
}
p::after {
    content:&quot;...&quot;;
    font-weight:bold;
    position:absolute;
    bottom:0;
    right:0;
    padding:0 20px 1px 45px;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-\u9875\u9762\u53D8\u7070" tabindex="-1"><a class="header-anchor" href="#_20-\u9875\u9762\u53D8\u7070" aria-hidden="true">#</a> 20 \u9875\u9762\u53D8\u7070</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>body {
	filter: grayscale(100%); /* \u767E\u5206\u6BD4\u6216\u8005 0~1 */
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-css\u4E2D\u53EF\u7EE7\u627F\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_21-css\u4E2D\u53EF\u7EE7\u627F\u7684\u5C5E\u6027" aria-hidden="true">#</a> 21 CSS\u4E2D\u53EF\u7EE7\u627F\u7684\u5C5E\u6027</h2><blockquote><p>\u53EF\u7EE7\u627F\u7684\u53EA\u6709\uFF1A<code>\u989C\u8272</code>\u3001<code>\u6587\u5B57</code>\u3001<code>\u5B57\u4F53\u95F4\u8DDD</code>\u3001<code>\u884C\u9AD8\u5BF9\u9F50\u65B9\u5F0F</code>\uFF0C<code>\u5217\u8868\u6837\u5F0F</code>\u3002</p></blockquote><p>\u6240\u6709\u5143\u7D20\u53EF\u7EE7\u627F\uFF1A<code>visibility</code>\u548C<code>cursor</code>\u3002</p><ul><li>\u5185\u8054\u5143\u7D20\u53EF\u7EE7\u627F\uFF1A <ul><li>letter-spacing</li><li>word-spacing</li><li>white-space</li><li>line-height</li><li>color</li><li>font</li><li>font-family</li><li>font-size</li><li>font-style</li><li>font-variant</li><li>font-weight</li><li>text-decoration</li><li>text-transform</li><li>direction</li></ul></li><li>\u5757\u72B6\uFF1A<code>text-indent</code>\u548C<code>text-align</code>\u3002</li><li>\u5217\u8868\u5143\u7D20\u53EF\u7EE7\u627F\uFF1A<code>list-style</code>\u3001<code>list-style-type</code>\u3001<code>list-style-position</code>\u3001<code>list-style-image</code></li></ul><h2 id="_22-\u5E38\u89C4\u6D41-\u6587\u6863\u6D41-\u662F\u4E2A\u600E\u6837\u7684\u6392\u5217\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_22-\u5E38\u89C4\u6D41-\u6587\u6863\u6D41-\u662F\u4E2A\u600E\u6837\u7684\u6392\u5217\u5173\u7CFB" aria-hidden="true">#</a> 22 \u5E38\u89C4\u6D41(\u6587\u6863\u6D41)\u662F\u4E2A\u600E\u6837\u7684\u6392\u5217\u5173\u7CFB</h2><p>\u5C06\u7A97\u4F53\u81EA\u4E0A\u800C\u4E0B\u5206\u6210\u4E00\u884C\u4E00\u884C,\u5E76\u5728\u6BCF\u884C\u4E2D\u6309\u4ECE\u5DE6\u81F3\u53F3\u7684\u6328\u6B21\u6392\u653E\u5143\u7D20\u3002</p><h2 id="_23-inline-block\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_23-inline-block\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 23 inline-block\u7684\u4F7F\u7528\u573A\u666F</h2><ol><li>\u8981\u8BBE\u7F6E\u67D0\u4E9B\u5B50\u5143\u7D20\u5728\u4E00\u884C\u6216\u8005\u591A\u884C\u5185\u663E\u793A\uFF0C\u5C24\u5176\u662F\u6392\u5217\u65B9\u5411\u4E00\u81F4\u7684\u60C5\u51B5\u4E0B\uFF0C\u5E94\u5C3D\u91CF\u7528<code>inline-block</code>\u3002</li><li>\u5E0C\u671B\u82E5\u5E72\u4E2A\u5143\u7D20\u5E73\u884C\u6392\u5217\uFF0C\u4E14\u5728\u7236\u5143\u7D20\u4E2D\u5C45\u4E2D\u6392\u5217\uFF0C\u6B64\u65F6\u53EF\u4EE5\u7528<code>inline-block</code>\uFF0C\u4E14\u7ED9\u7236\u5143\u7D20\u8BBE<code>text-align: center</code>\u3002</li><li><code>inline-block</code>\u53EF\u4EE5\u7528\u4E00\u6392<code>a {display: inline-block}</code>\u5B9E\u73B0\u6A2A\u5411\u5BFC\u822A\u680F\uFF0C\u65E0\u8BBA\u662F\u5C45\u5DE6\u7684\u5BFC\u822A\u680F\u8FD8\u662F\u5C45\u53F3\u7684\u90FD\u9002\u7528\u3002</li></ol><p>\u5BF9\u4E8E\u7B2C\u4E00\u79CD\u548C\u7B2C\u4E09\u79CD\u60C5\u51B5\u867D\u7136\u90FD\u53EF\u4EE5\u4F7F\u7528<code>float</code>\u6765\u5B9E\u73B0\uFF0C\u4E0D\u8FC7<code>inline-block</code>\u4F1A\u6BD4\u5B83\u597D\u4E00\u4E9B\uFF0C\u539F\u56E0\u5982\u4E0B\uFF1A</p><ul><li>\u6D6E\u52A8\u4F1A\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u5BFC\u81F4\u7236\u5143\u7D20\u9AD8\u5EA6\u584C\u9677</li></ul><h2 id="_24-position-fixed\u4EC0\u4E48\u65F6\u5019\u4F1A\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#_24-position-fixed\u4EC0\u4E48\u65F6\u5019\u4F1A\u5931\u6548" aria-hidden="true">#</a> 24 position: fixed\u4EC0\u4E48\u65F6\u5019\u4F1A\u5931\u6548\uFF1F</h2><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u8BBE\u7F6E\u4E86<code>position: fixed</code>\u56FA\u5B9A\u5B9A\u4F4D\u5C5E\u6027\u7684\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u8FBE\u5230&quot;\u8D85\u7136\u8131\u4FD7&quot;\u7684\u5883\u754C\u3002</p><blockquote><p>\u4E5F\u5C31\u662F\u8BF4\u6B64\u65F6\u7ED9\u8FD9\u79CD\u5143\u7D20\u8BBE\u7F6E<code>top, left, right, bottom</code>\u7B49\u5C5E\u6027\u662F\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u53E3\u5B9A\u4F4D\u7684\uFF0C\u4E0E\u5176\u4E0A\u7EA7\u5143\u7D20\u7684\u4F4D\u7F6E\u65E0\u5173\u3002</p></blockquote><p>\u4F46\u662F\u6709\u4E00\u79CD\u60C5\u51B5\u4F8B\u5916\uFF1A</p><ul><li>\u82E5\u662F\u8BBE\u7F6E\u4E86<code>position: fixed</code>\u5C5E\u6027\u7684\u5143\u7D20\uFF0C\u5B83\u7684\u7956\u5148\u5143\u7D20\u8BBE\u7F6E\u4E86<code>transform</code>\u5C5E\u6027\u5219\u4F1A\u5BFC\u81F4\u56FA\u5B9A\u5B9A\u4F4D\u5C5E\u6027\u5931\u6548\u3002</li><li>\u53EA\u8981\u4F60\u7684<code>transform</code>\u8BBE\u7F6E\u7684\u4E0D\u662F<code>none</code>\uFF0C\u90FD\u4F1A\u5F71\u54CD\u5230<code>position: fixed</code>\uFF0C\u56E0\u4E3A\u6B64\u65F6\u5C31\u4F1A\u76F8\u5BF9\u4E8E\u7956\u5148\u5143\u7D20\u6307\u5B9A\u5750\u6807\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</li></ul><p>\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u7279\u6027\u8868\u73B0\uFF0C\u76EE\u524D\u53EA\u5728Chrome\u6D4F\u89C8\u5668/FireFox\u6D4F\u89C8\u5668\u4E0B\u6709\u3002IE\u6D4F\u89C8\u5668\uFF0C\u5305\u62ECIE11,\xA0<code>fixed</code>\u8FD8\u662F<code>fixed</code>\u7684\u8868\u73B0\u3002</p><h2 id="_25-\u8BF4\u4E00\u4E0B\u56DE\u6D41\u548C\u91CD\u7ED8" tabindex="-1"><a class="header-anchor" href="#_25-\u8BF4\u4E00\u4E0B\u56DE\u6D41\u548C\u91CD\u7ED8" aria-hidden="true">#</a> 25 \u8BF4\u4E00\u4E0B\u56DE\u6D41\u548C\u91CD\u7ED8</h2><p>\u56DE\u6D41\uFF1A</p><p>\u89E6\u53D1\u6761\u4EF6\uFF1A\u5F53\u6211\u4EEC\u5BF9 DOM \u7ED3\u6784\u7684\u4FEE\u6539\u5F15\u53D1 DOM \u51E0\u4F55\u5C3A\u5BF8\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u4F1A\u53D1\u751F<code>\u56DE\u6D41</code>\u7684\u8FC7\u7A0B\u3002</p><p>\u4F8B\u5982\u4EE5\u4E0B\u64CD\u4F5C\u4F1A\u89E6\u53D1\u56DE\u6D41\uFF1A</p><p>1.\u4E00\u4E2A DOM \u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027\u53D8\u5316\uFF0C\u5E38\u89C1\u7684\u51E0\u4F55\u5C5E\u6027\u6709<code>width</code>\u3001<code>height</code>\u3001<code>padding</code>\u3001<code>margin</code>\u3001<code>left</code>\u3001<code>top</code>\u3001<code>border</code>\xA0\u7B49\u7B49, \u8FD9\u4E2A\u5F88\u597D\u7406\u89E3\u3002 2. \u4F7F DOM \u8282\u70B9\u53D1\u751F<code>\u589E\u51CF</code>\u6216\u8005<code>\u79FB\u52A8</code>\u3002 3. \u8BFB\u5199\xA0<code>offset</code>\u65CF\u3001<code>scroll</code>\u65CF\u548C<code>client</code>\u65CF\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u4E3A\u4E86\u83B7\u53D6\u8FD9\u4E9B\u503C\uFF0C\u9700\u8981\u8FDB\u884C\u56DE\u6D41\u64CD\u4F5C\u3002 4. \u8C03\u7528\xA0<code>window.getComputedStyle</code>\xA0\u65B9\u6CD5\u3002</p><blockquote><p>\u56DE\u6D41\u8FC7\u7A0B\uFF1A\u7531\u4E8EDOM\u7684\u7ED3\u6784\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u6240\u4EE5\u9700\u8981\u4ECE\u751F\u6210DOM\u8FD9\u4E00\u6B65\u5F00\u59CB\uFF0C\u91CD\u65B0\u7ECF\u8FC7<code>\u6837\u5F0F\u8BA1\u7B97</code>\u3001<code>\u751F\u6210\u5E03\u5C40\u6811</code>\u3001<code>\u5EFA\u7ACB\u56FE\u5C42\u6811</code>\u3001\u518D\u5230<code>\u751F\u6210\u7ED8\u5236\u5217\u8868</code>\u4EE5\u53CA\u4E4B\u540E\u7684\u663E\u793A\u5668\u663E\u793A\u8FD9\u6574\u4E00\u4E2A\u6E32\u67D3\u8FC7\u7A0B\u8D70\u4E00\u904D\uFF0C\u5F00\u9500\u662F\u975E\u5E38\u5927\u7684\u3002</p></blockquote><p>\u91CD\u7ED8\uFF1A</p><p>\u89E6\u53D1\u6761\u4EF6\uFF1A</p><ul><li>\u5F53 DOM \u7684\u4FEE\u6539\u5BFC\u81F4\u4E86\u6837\u5F0F\u7684\u53D8\u5316\uFF0C\u5E76\u4E14\u6CA1\u6709\u5F71\u54CD\u51E0\u4F55\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u4F1A\u5BFC\u81F4<code>\u91CD\u7ED8</code>(<code>repaint</code>)\u3002</li><li>\u91CD\u7ED8\u8FC7\u7A0B\uFF1A\u7531\u4E8E\u6CA1\u6709\u5BFC\u81F4 DOM \u51E0\u4F55\u5C5E\u6027\u7684\u53D8\u5316\uFF0C\u56E0\u6B64\u5143\u7D20\u7684\u4F4D\u7F6E\u4FE1\u606F\u4E0D\u9700\u8981\u66F4\u65B0\uFF0C\u6240\u4EE5\u5F53\u53D1\u751F\u91CD\u7ED8\u7684\u65F6\u5019\uFF0C\u4F1A\u8DF3\u8FC7<code>\u751F\u5B58\u5E03\u5C40\u6811</code>\u548C<code>\u5EFA\u7ACB\u56FE\u5C42\u6811</code>\u7684\u9636\u6BB5\uFF0C\u76F4\u63A5\u5230<code>\u751F\u6210\u7ED8\u5236\u5217\u8868</code>\uFF0C\u7136\u540E\u7EE7\u7EED\u8FDB\u884C\u5206\u5757\u3001\u751F\u6210\u4F4D\u56FE\u7B49\u540E\u9762\u4E00\u7CFB\u5217\u64CD\u4F5C\u3002</li></ul><p>\u5982\u4F55\u907F\u514D\u89E6\u53D1\u56DE\u6D41\u548C\u91CD\u7ED8\uFF1A</p><ol><li>\u907F\u514D\u9891\u7E41\u4F7F\u7528 style\uFF0C\u800C\u662F\u91C7\u7528\u4FEE\u6539<code>class</code>\u7684\u65B9\u5F0F\u3002</li><li>\u5C06\u52A8\u753B\u6548\u679C\u5E94\u7528\u5230<code>position</code>\u5C5E\u6027\u4E3A<code>absolute</code>\u6216<code>fixed</code>\u7684\u5143\u7D20\u4E0A\u3002</li><li>\u4E5F\u53EF\u4EE5\u5148\u4E3A\u5143\u7D20\u8BBE\u7F6E<code>display: none</code>\uFF0C\u64CD\u4F5C\u7ED3\u675F\u540E\u518D\u628A\u5B83\u663E\u793A\u51FA\u6765\u3002\u56E0\u4E3A\u5728<code>display</code>\u5C5E\u6027\u4E3A<code>none</code>\u7684\u5143\u7D20\u4E0A\u8FDB\u884C\u7684DOM\u64CD\u4F5C\u4E0D\u4F1A\u5F15\u53D1\u56DE\u6D41\u548C\u91CD\u7ED8</li><li>\u4F7F\u7528<code>createDocumentFragment</code>\u8FDB\u884C\u6279\u91CF\u7684 DOM \u64CD\u4F5C\u3002</li><li>\u5BF9\u4E8E resize\u3001scroll \u7B49\u8FDB\u884C\u9632\u6296/\u8282\u6D41\u5904\u7406\u3002</li><li>\u907F\u514D\u9891\u7E41\u8BFB\u53D6\u4F1A\u5F15\u53D1\u56DE\u6D41/\u91CD\u7ED8\u7684\u5C5E\u6027\uFF0C\u5982\u679C\u786E\u5B9E\u9700\u8981\u591A\u6B21\u4F7F\u7528\uFF0C\u5C31\u7528\u4E00\u4E2A\u53D8\u91CF\u7F13\u5B58\u8D77\u6765\u3002</li><li>\u5229\u7528 CSS3 \u7684<code>transform</code>\u3001<code>opacity</code>\u3001<code>filter</code>\u8FD9\u4E9B\u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u5408\u6210\u7684\u6548\u679C\uFF0C\u4E5F\u5C31\u662F<code>CPU</code>\u52A0\u901F\u3002</li></ol><h2 id="_26-gpu\u52A0\u901F\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_26-gpu\u52A0\u901F\u7684\u539F\u56E0" aria-hidden="true">#</a> 26 GPU\u52A0\u901F\u7684\u539F\u56E0</h2><blockquote><p>\u5728\u5408\u6210\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u76F4\u63A5\u8DF3\u8FC7\u5E03\u5C40\u548C\u7ED8\u5236\u6D41\u7A0B\uFF0C\u76F4\u63A5\u8FDB\u5165<code>\u975E\u4E3B\u7EBF\u7A0B</code>\u5904\u7406\u7684\u90E8\u5206\uFF0C\u5373\u76F4\u63A5\u4EA4\u7ED9<code>\u5408\u6210\u7EBF\u7A0B</code>\u5904\u7406\u3002\u4EA4\u7ED9\u5B83\u5904\u7406\u6709\u4E24\u5927\u597D\u5904:</p></blockquote><ol><li>\u80FD\u591F\u5145\u5206\u53D1\u6325<code>GPU</code>\u7684\u4F18\u52BF\u3002\u5408\u6210\u7EBF\u7A0B\u751F\u6210\u4F4D\u56FE\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u8C03\u7528\u7EBF\u7A0B\u6C60\uFF0C\u5E76\u5728\u5176\u4E2D\u4F7F\u7528<code>GPU</code>\u8FDB\u884C\u52A0\u901F\u751F\u6210\uFF0C\u800C\xA0<code>GPU</code>\xA0\u662F\u64C5\u957F\u5904\u7406\u4F4D\u56FE\u6570\u636E\u7684\u3002</li><li>\u6CA1\u6709\u5360\u7528\u4E3B\u7EBF\u7A0B\u7684\u8D44\u6E90\uFF0C\u5373\u4F7F\u4E3B\u7EBF\u7A0B\u5361\u4F4F\u4E86\uFF0C\u6548\u679C\u4F9D\u7136\u80FD\u591F\u6D41\u7545\u5730\u5C55\u793A\u3002</li></ol><h2 id="_27-\u8BF4\u8BF4will-change" tabindex="-1"><a class="header-anchor" href="#_27-\u8BF4\u8BF4will-change" aria-hidden="true">#</a> 27 \u8BF4\u8BF4will-change</h2><blockquote><p><code>will-change</code>\u662F<code>CSS3</code>\u65B0\u589E\u7684\u6807\u51C6\u5C5E\u6027\uFF0C\u5B83\u7684\u4F5C\u7528\u5F88\u5355\u7EAF\uFF0C\u5C31\u662F<code>&quot;\u589E\u5F3A\u9875\u9762\u6E32\u67D3\u6027\u80FD&quot;</code>\uFF0C\u5F53\u6211\u4EEC\u5728\u901A\u8FC7\u67D0\u4E9B\u884C\u4E3A\u89E6\u53D1\u9875\u9762\u8FDB\u884C\u5927\u9762\u79EF\u7ED8\u5236\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u5F80\u5F80\u662F\u6CA1\u6709\u51C6\u5907\uFF0C\u53EA\u80FD\u88AB\u52A8\u7684\u4F7F\u7528CUP\u53BB\u8BA1\u7B97\u548C\u91CD\u7ED8\uFF0C\u7531\u4E8E\u4E8B\u5148\u6CA1\u6709\u51C6\u5907\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u590D\u6742\u7684\u6E32\u67D3\u53EF\u80FD\u4F1A\u51FA\u73B0\u6389\u5E27\u3001\u5361\u987F\u7B49\u60C5\u51B5\u3002\u800C<code>will-change</code>\u5219\u662F\u5728\u771F\u6B63\u7684\u884C\u4E3A\u89E6\u53D1\u4E4B\u524D\u544A\u8BC9\u6D4F\u89C8\u5668\u53EF\u80FD\u8981\u8FDB\u884C\u91CD\u7ED8\u4E86\uFF0C\u76F8\u5F53\u4E8E\u6D4F\u89C8\u5668\u628ACUP\u62C9\u4E0A\u4E86\uFF0C\u80FD\u4ECE\u5BB9\u7684\u9762\u5BF9\u63A5\u4E0B\u6765\u7684\u53D8\u5F62\u3002</p></blockquote><p>\u5E38\u7528\u7684\u8BED\u6CD5\u4E3B\u8981\u6709\uFF1A</p><ul><li><code>whil-change: scroll-position;</code>\xA0\u5373\u5C06\u5F00\u59CB\u6EDA\u52A8</li><li><code>will-change: contents;</code>\xA0\u5185\u5BB9\u8981\u52A8\u753B\u6216\u8005\u53D8\u5316\u4E86</li><li><code>will-transform;</code>\xA0transform\u76F8\u5173\u7684\u5C5E\u6027\u8981\u53D8\u5316\u4E86(\u5E38\u7528)</li></ul><p>\u6CE8\u610F\uFF1A</p><ul><li><code>will-change</code>\u867D\u7136\u53EF\u4EE5\u5F00\u542F\u52A0\u901F\uFF0C\u4F46\u662F\u4E00\u5B9A\u8981\u9002\u5EA6\u4F7F\u7528</li><li>\u5F00\u542F\u52A0\u901F\u7684\u4EE3\u4EF7\u4E3A\u624B\u673A\u7684\u8017\u7535\u91CF\u4F1A\u589E\u52A0</li><li>\u4F7F\u7528\u65F6\u9075\u5FAA\u6700\u5C0F\u5316\u5F71\u54CD\u539F\u5219\uFF0C\u53EF\u4EE5\u5BF9\u4F2A\u5143\u7D20\u5F00\u542F\u52A0\u901F\uFF0C\u72EC\u7ACB\u6E32\u67D3</li><li>\u53EF\u4EE5\u5199\u5728\u4F2A\u7C7B\u4E2D\uFF0C\u4F8B\u5982<code>hover</code>\u4E2D\uFF0C\u8FD9\u6837\u79FB\u51FA\u5143\u7D20\u7684\u65F6\u5019\u5C31\u4F1A\u81EA\u52A8<code>remove</code>\u6389<code>will-change</code>\u4E86</li><li>\u5982\u679C\u4F7F\u7528<code>JS</code>\u6DFB\u52A0\u4E86<code>will-change</code>\uFF0C\u6CE8\u610F\u8981\u53CA\u65F6<code>remove</code>\u6389\uFF0C\u65B9\u5F0F\u5C31\u662F<code>style.willChange = &#39;auto&#39;</code></li></ul><h2 id="_28-z-index\u548Cbackground\u7684\u8986\u76D6\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_28-z-index\u548Cbackground\u7684\u8986\u76D6\u5173\u7CFB" aria-hidden="true">#</a> 28 z-index\u548Cbackground\u7684\u8986\u76D6\u5173\u7CFB</h2><p><img src="`+a+`" alt=""></p><h2 id="_29-\u79FB\u52A8\u7AEF\u4E2Dcss\u4F60\u662F\u4F7F\u7528\u4EC0\u4E48\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#_29-\u79FB\u52A8\u7AEF\u4E2Dcss\u4F60\u662F\u4F7F\u7528\u4EC0\u4E48\u5355\u4F4D" aria-hidden="true">#</a> 29 \u79FB\u52A8\u7AEF\u4E2Dcss\u4F60\u662F\u4F7F\u7528\u4EC0\u4E48\u5355\u4F4D</h2><p>\u6BD4\u8F83\u5E38\u7528\u7684\uFF1A</p><ul><li><code>em</code>\uFF1A\u5B9A\u4E49\u5B57\u4F53\u5927\u5C0F\u65F6\u4EE5\u7236\u7EA7\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A\u57FA\u51C6\uFF1B\u5B9A\u4E49\u957F\u5EA6\u5355\u4F4D\u65F6\u4EE5\u5F53\u524D\u5B57\u4F53\u5927\u5C0F\u4E3A\u57FA\u51C6\u3002\u4F8B\u7236\u7EA7<code>font-size: 14px</code>\uFF0C\u5219\u5B50\u7EA7<code>font-size: 1em;</code>\u4E3A<code>font-size: 14px;</code>\uFF1B\u82E5\u5B9A\u4E49\u957F\u5EA6\u65F6\uFF0C\u5B50\u7EA7\u7684\u5B57\u4F53\u5927\u5C0F\u5982\u679C\u4E3A<code>14px</code>\uFF0C\u5219\u5B50\u7EA7<code>width: 2em;</code>\u4E3A<code>width: 24px</code>\u3002</li><li><code>rem</code>\uFF1A\u4EE5\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A\u57FA\u51C6\u3002\u4F8B\u5982<code>html</code>\u7684<code>font-size: 14px</code>\uFF0C\u5219\u5B50\u7EA7<code>1rem = 14px</code>\u3002</li><li><code>%</code>\uFF1A\u4EE5\u7236\u7EA7\u7684\u5BBD\u5EA6\u4E3A\u57FA\u51C6\u3002\u4F8B\u7236\u7EA7<code>width: 200px</code>\uFF0C\u5219\u5B50\u7EA7<code>width: 50%;height:50%;</code>\u4E3A<code>width: 100px;height: 100px;</code></li><li><code>vw\u548Cvh</code>\uFF1A\u57FA\u4E8E\u89C6\u53E3\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6(\u89C6\u53E3\u4E0D\u5305\u62EC\u6D4F\u89C8\u5668\u7684\u5730\u5740\u680F\u5DE5\u5177\u680F\u548C\u72B6\u6001\u680F)\u3002\u4F8B\u5982\u89C6\u53E3\u5BBD\u5EA6\u4E3A<code>1000px</code>\uFF0C\u5219<code>60vw = 600px;</code></li><li><code>vmin\u548Cvmax</code>\uFF1A<code>vmin</code>\u4E3A\u5F53\u524D<code>vw</code>\xA0\u548C<code>vh</code>\u4E2D\u8F83\u5C0F\u7684\u4E00\u4E2A\u503C\uFF1B<code>vmax</code>\u4E3A\u8F83\u5927\u7684\u4E00\u4E2A\u503C\u3002\u4F8B\u5982\u89C6\u53E3\u5BBD\u5EA6<code>375px</code>\uFF0C\u89C6\u53E3\u9AD8\u5EA6<code>812px</code>\uFF0C\u5219<code>100vmin = 375px;</code>\uFF0C<code>100vmax = 812px;</code></li></ul><p>\u4E0D\u5E38\u7528\u7684\uFF1A</p><ul><li><code>ex\u548Cch</code>\uFF1A<code>ex</code>\u4EE5\u5B57\u7B26<code>&quot;x&quot;</code>\u7684\u9AD8\u5EA6\u4E3A\u57FA\u51C6\uFF1B\u4F8B\u5982<code>1ex</code>\u8868\u793A\u548C\u5B57\u7B26<code>&quot;x&quot;</code>\u4E00\u6837\u957F\u3002<code>ch</code>\u4EE5\u6570\u5B57<code>&quot;0&quot;</code>\u7684\u5BBD\u5EA6\u4E3A\u57FA\u51C6\uFF1B\u4F8B\u5982<code>2ch</code>\u8868\u793A\u548C2\u4E2A\u6570\u5B57<code>&quot;0&quot;</code>\u4E00\u6837\u957F\u3002</li></ul><p>\u79FB\u52A8\u7AEF\u5E03\u5C40\u603B\u7ED3\uFF1A</p><ol><li>\u79FB\u52A8\u7AEF\u5E03\u5C40\u7684\u65B9\u5F0F\u4E3B\u8981\u4F7F\u7528rem\u548Cflex\uFF0C\u53EF\u4EE5\u7ED3\u5408\u5404\u81EA\u7684\u4F18\u70B9\uFF0C\u6BD4\u5982flex\u5E03\u5C40\u5F88\u7075\u6D3B\uFF0C\u4F46\u662F\u5B57\u4F53\u7684\u5927\u5C0F\u4E0D\u597D\u63A7\u5236\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528rem\u548C\u5A92\u4F53\u67E5\u8BE2\u63A7\u5236\u5B57\u4F53\u7684\u5927\u5C0F\uFF0C\u5A92\u4F53\u67E5\u8BE2\u89C6\u53E3\u7684\u5927\u5C0F\uFF0C\u7136\u540E\u4E0D\u540C\u7684\u4E0A\u89C6\u53E3\u5927\u5C0F\u4E0B\u8BBE\u7F6E\u8BBE\u7F6E<code>html</code>\u7684<code>font-size</code>\u3002</li><li>\u53EF\u5355\u72EC\u5236\u4F5C\u79FB\u52A8\u7AEF\u9875\u9762\u4E5F\u53EF\u54CD\u5E94\u5F0Fpc\u7AEF\u79FB\u52A8\u7AEF\u5171\u7528\u4E00\u4E2A\u9875\u9762\u3002\u6CA1\u6709\u597D\u574F\uFF0C\u89C6\u60C5\u51B5\u800C\u5B9A\uFF0C\u56E0\u52BF\u5229\u5BFC</li></ol><h2 id="_30-rem\u548Cem\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_30-rem\u548Cem\u7684\u533A\u522B" aria-hidden="true">#</a> 30 rem\u548Cem\u7684\u533A\u522B</h2><p>em:</p><blockquote><p>\u5B9A\u4E49\u5B57\u4F53\u5927\u5C0F\u65F6\u4EE5\u7236\u7EA7\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A\u57FA\u51C6\uFF1B\u5B9A\u4E49\u957F\u5EA6\u5355\u4F4D\u65F6\u4EE5\u5F53\u524D\u5B57\u4F53\u5927\u5C0F\u4E3A\u57FA\u51C6\u3002\u4F8B\u7236\u7EA7<code>font-size: 14px</code>\uFF0C\u5219\u5B50\u7EA7<code>font-size: 1em;</code>\u4E3A<code>font-size: 14px;</code>\uFF1B\u82E5\u5B9A\u4E49\u957F\u5EA6\u65F6\uFF0C\u5B50\u7EA7\u7684\u5B57\u4F53\u5927\u5C0F\u5982\u679C\u4E3A<code>14px</code>\uFF0C\u5219\u5B50\u7EA7<code>width: 2em;</code>\u4E3A<code>width: 24px</code>\u3002</p></blockquote><p>rem:</p><p>\u4EE5\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A\u57FA\u51C6\u3002\u4F8B\u5982<code>html</code>\u7684<code>font-size: 14px</code>\uFF0C\u5219\u5B50\u7EA7<code>1rem = 14px</code>\u3002</p><h2 id="_31-\u5728\u79FB\u52A8\u7AEF\u4E2D\u600E\u6837\u521D\u59CB\u5316\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_31-\u5728\u79FB\u52A8\u7AEF\u4E2D\u600E\u6837\u521D\u59CB\u5316\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F" aria-hidden="true">#</a> 31 \u5728\u79FB\u52A8\u7AEF\u4E2D\u600E\u6837\u521D\u59CB\u5316\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F</h2><p>\u4E00\u4E2A\u7B80\u6613\u7248\u7684\u521D\u59CB\u5316\u6839\u5143\u7D20\u5B57\u4F53\u5927\u5C0F\u3002</p><p>\u9875\u9762\u5F00\u5934\u5904\u5F15\u5165\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u7528\u4E8E\u52A8\u6001\u8BA1\u7B97<code>font-size</code>\uFF1A</p><p>(\u5047\u8BBE\u4F60\u9700\u8981\u7684<code>1rem = 20px</code>)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function () {
  var html = document.documentElement;
  function onWindowResize() {
    html.style.fontSize = html.getBoundingClientRect().width / 20 + &#39;px&#39;;
  }
  window.addEventListener(&#39;resize&#39;, onWindowResize);
  onWindowResize();
})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>document.documentElement</code>\uFF1A\u83B7\u53D6<code>document</code>\u7684\u6839\u5143\u7D20</li><li><code>html.getBoundingClientRect().width</code>\uFF1A\u83B7\u53D6<code>html</code>\u7684\u5BBD\u5EA6(\u7A97\u53E3\u7684\u5BBD\u5EA6)</li><li>\u76D1\u542C<code>window</code>\u7684<code>resize</code>\u4E8B\u4EF6</li></ul><p>\u4E00\u822C\u8FD8\u9700\u8981\u914D\u5408\u4E00\u4E2A<code>meta</code>\u5934\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, minimum-sacle=1.0, maximum-scale=1.0, user-scalable=no&quot; /&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_32-\u79FB\u52A8\u7AEF\u4E2D\u4E0D\u540C\u624B\u673Ahtml\u9ED8\u8BA4\u7684\u5B57\u4F53\u5927\u5C0F\u90FD\u662F\u4E00\u6837\u7684\u5417" tabindex="-1"><a class="header-anchor" href="#_32-\u79FB\u52A8\u7AEF\u4E2D\u4E0D\u540C\u624B\u673Ahtml\u9ED8\u8BA4\u7684\u5B57\u4F53\u5927\u5C0F\u90FD\u662F\u4E00\u6837\u7684\u5417" aria-hidden="true">#</a> 32 \u79FB\u52A8\u7AEF\u4E2D\u4E0D\u540C\u624B\u673Ahtml\u9ED8\u8BA4\u7684\u5B57\u4F53\u5927\u5C0F\u90FD\u662F\u4E00\u6837\u7684\u5417</h2><blockquote><p>\u5982\u679C\u6CA1\u6709\u4EBA\u4E3A\u53D6\u6539\u53D8\u6839\u5143\u7D20\u5B57\u4F53\u5927\u5C0F\u7684\u8BDD\uFF0C\u9ED8\u8BA4\u662F<code>1rem = 16px</code>\uFF1B\u6839\u5143\u7D20\u9ED8\u8BA4\u7684\u5B57\u4F53\u5927\u5C0F\u662F<code>16px</code>\u3002</p></blockquote><h2 id="_33-\u7F16\u7A0B\u9898" tabindex="-1"><a class="header-anchor" href="#_33-\u7F16\u7A0B\u9898" aria-hidden="true">#</a> 33 \u7F16\u7A0B\u9898</h2><h3 id="\u753B\u4E00\u6761-0-5px-\u7684\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u753B\u4E00\u6761-0-5px-\u7684\u7EBF" aria-hidden="true">#</a> \u753B\u4E00\u6761 0.5px \u7684\u7EBF</h3><ul><li>\u91C7\u7528 meta viewport \u7684\u65B9\u5F0F\xA0<code>&lt;meta name=&quot;viewport&quot; content=&quot;initial-scale=1.0, maximum-scale=1.0, user-scalable=no&quot; /&gt;</code></li><li>\u91C7\u7528\xA0<code>border-image</code>\xA0\u7684\u65B9\u5F0F</li><li>\u91C7\u7528\xA0<code>transform: scale()</code>\xA0\u7684\u65B9\u5F0F</li></ul><h3 id="\u5982\u4F55\u753B\u4E00\u4E2A\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u753B\u4E00\u4E2A\u4E09\u89D2\u5F62" aria-hidden="true">#</a> \u5982\u4F55\u753B\u4E00\u4E2A\u4E09\u89D2\u5F62</h3><p>\u4E09\u89D2\u5F62\u539F\u7406:\u8FB9\u6846\u7684\u5747\u5206\u539F\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div {
  width:0px;
  height:0px;
  border-top:10px solid red;
  border-right:10px solid transparent;
  border-bottom:10px solid transparent;
  border-left:10px solid transparent;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5706-\u534A\u5706-\u692D\u5706" tabindex="-1"><a class="header-anchor" href="#\u5706-\u534A\u5706-\u692D\u5706" aria-hidden="true">#</a> \u5706\uFF1F\u534A\u5706\uFF1F\u692D\u5706\uFF1F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div {
  width: 100px;
  height: 100px;
  background-color: red;
  margin-top: 20px;
}
.box1 { /* \u5706 */
  /* border-radius: 50%; */
  border-radius: 50px;
}
.box2 { /* \u534A\u5706 */
  height: 50px;
  border-radius: 50px 50px 0 0;
}
.box3 { /* \u692D\u5706 */
  height: 50px;
  border-radius: 50px/25px; /* x\u8F74/y\u8F74 */
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5DE6\u8FB9\u5B9A\u5BBD-\u53F3\u8FB9\u81EA\u9002\u5E94\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u8FB9\u5B9A\u5BBD-\u53F3\u8FB9\u81EA\u9002\u5E94\u65B9\u6848" aria-hidden="true">#</a> \u5DE6\u8FB9\u5B9A\u5BBD\uFF0C\u53F3\u8FB9\u81EA\u9002\u5E94\u65B9\u6848</h3><blockquote><p>float + margin\uFF0Cfloat + calc</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u65B9\u68481 */
.left {
  width: 120px;
  float: left;
}
.right {
  margin-left: 120px;
}
/* \u65B9\u68482 */
.left {
  width: 120px;
  float: left;
}
.right {
  width: calc(100% - 120px);
  float: left;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5DE6\u53F3\u4E24\u8FB9\u5B9A\u5BBD-\u4E2D\u95F4\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u53F3\u4E24\u8FB9\u5B9A\u5BBD-\u4E2D\u95F4\u81EA\u9002\u5E94" aria-hidden="true">#</a> \u5DE6\u53F3\u4E24\u8FB9\u5B9A\u5BBD\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94</h3><blockquote><p>float\uFF0Cfloat + calc, \u5723\u676F\u5E03\u5C40\uFF08\u8BBE\u7F6EBFC\uFF0Cmargin\u8D1F\u503C\u6CD5\uFF09\uFF0Cflex</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
  width: 100%;
  height: 200px;
}
.wrap &gt; div {
  height: 100%;
}
/* \u65B9\u68481 */
.left {
  width: 120px;
  float: left;
}
.right {
  float: right;
  width: 120px;
}
.center {
  margin: 0 120px;
}
/* \u65B9\u68482 */
.left {
  width: 120px;
  float: left;
}
.right {
  float: right;
  width: 120px;
}
.center {
  width: calc(100% - 240px);
  margin-left: 120px;
}
/* \u65B9\u68483 */
.wrap {
  display: flex;
}
.left {
  width: 120px;
}
.right {
  width: 120px;
}
.center {
  flex: 1;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5982\u4F55\u5B9E\u73B0\u5DE6\u4FA7\u5BBD\u5EA6\u56FA\u5B9A-\u53F3\u4FA7\u5BBD\u5EA6\u81EA\u9002\u5E94\u7684\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0\u5DE6\u4FA7\u5BBD\u5EA6\u56FA\u5B9A-\u53F3\u4FA7\u5BBD\u5EA6\u81EA\u9002\u5E94\u7684\u5E03\u5C40" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0\u5DE6\u4FA7\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u5BBD\u5EA6\u81EA\u9002\u5E94\u7684\u5E03\u5C40</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;box-left&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;box-right&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528float + margin\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.box {
 height: 200px;
}

.box &gt; div {
  height: 100%;
}

.box-left {
  width: 200px;
  float: left;
  background-color: blue;
}

.box-right {
  margin-left: 200px;
  background-color: red;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528calc\u8BA1\u7B97\u5BBD\u5EA6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.box {
 height: 200px;
}

.box &gt; div {
  height: 100%;
}

.box-left {
  width: 200px;
  float: left;
  background-color: blue;
}

.box-right {
  width: calc(100% - 200px);
  float: right;
  background-color: red;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528float + overflow\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.box {
 height: 200px;
}

.box &gt; div {
  height: 100%;
}

.box-left {
  width: 200px;
  float: left;
  background-color: blue;
}

.box-right {
  overflow: hidden;
  background-color: red;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528flex\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.box {
  height: 200px;
  display: flex;
}

.box &gt; div {
  height: 100%;
}

.box-left {
  width: 200px;
  background-color: blue;
}

.box-right {
  flex: 1; // \u8BBE\u7F6Eflex-grow\u5C5E\u6027\u4E3A1\uFF0C\u9ED8\u8BA4\u4E3A0
  overflow: hidden;
  background-color: red;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E24\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94\u7684\u4E09\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E24\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94\u7684\u4E09\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E24\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94\u7684\u4E09\u680F\u5E03\u5C40</h3><blockquote><p>\u5723\u676F\u5E03\u5C40\u548C\u53CC\u98DE\u7FFC\u5E03\u5C40\u662F\u524D\u7AEF\u5DE5\u7A0B\u5E08\u9700\u8981\u65E5\u5E38\u638C\u63E1\u7684\u91CD\u8981\u5E03\u5C40\u65B9\u5F0F\u3002\u4E24\u8005\u7684\u529F\u80FD\u76F8\u540C\uFF0C\u90FD\u662F\u4E3A\u4E86\u5B9E\u73B0\u4E00\u4E2A\u4E24\u4FA7\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u5BBD\u5EA6\u81EA\u9002\u5E94\u7684\u4E09\u680F\u5E03\u5C40\u3002</p></blockquote><p>\u5723\u676F\u5E03\u5C40</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;style&gt;
body{
    min-width: 550px;
}
#container{
    padding-left: 200px;
    padding-right: 150px;
}
#container .column{
    float: left;
}
#center{
    width: 100%;
}
#left{
    width: 200px;
    margin-left: -100%;
    position: relative;
    right: 200px;
}
#right{
    width: 150px;
    margin-right: -150px;
}
&lt;/style&gt;
&lt;div id=&quot;container&quot;&gt;
    &lt;div id=&quot;center&quot; class=&quot;column&quot;&gt;center&lt;/div&gt;
    &lt;div id=&quot;left&quot; class=&quot;column&quot;&gt;left&lt;/div&gt;
    &lt;div id=&quot;right&quot; class=&quot;column&quot;&gt;right&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53CC\u98DE\u7FFC\u5E03\u5C40</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;style&gt;
body {
    min-width: 500px;
}
#container {
    width: 100%;
}
.column {
    float: left;
}
#center {
    margin-left: 200px;
    margin-right: 150px;
}
#left {
    width: 200px;
    margin-left: -100%;
}
#right {
    width: 150px;
    margin-left: -150px;
}
&lt;/style&gt;
&lt;div id=&quot;container&quot; class=&quot;column&quot;&gt;
    &lt;div id=&quot;center&quot;&gt;center&lt;/div&gt;
&lt;/div&gt;
&lt;div id=&quot;left&quot; class=&quot;column&quot;&gt;left&lt;/div&gt;
&lt;div id=&quot;right&quot; class=&quot;column&quot;&gt;right&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css\u753B\u5706\u534A\u5706\u6247\u5F62\u4E09\u89D2\u68AF\u5F62" tabindex="-1"><a class="header-anchor" href="#css\u753B\u5706\u534A\u5706\u6247\u5F62\u4E09\u89D2\u68AF\u5F62" aria-hidden="true">#</a> CSS\u753B\u5706\u534A\u5706\u6247\u5F62\u4E09\u89D2\u68AF\u5F62</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div{
    margin: 50px;
    width: 100px;
    height: 100px;
    background: red;
}
/* \u534A\u5706 */
.half-circle{
    height: 50px;
    border-radius: 50px 50px 0 0;
}
/* \u6247\u5F62 */
.sector{
    border-radius: 100px 0 0;
}
/* \u4E09\u89D2 */
.triangle{
    width: 0px;
    height: 0px;
    background: none;
    border: 50px solid red;
    border-color: red transparent transparent transparent;
}
/* \u68AF\u5F62 */
.ladder{
    width: 50px;
    height: 0px;
    background: none;
    border: 50px solid red;
    border-color: red transparent transparent transparent;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,208),t=[r];function v(u,m){return i(),d("div",null,t)}var h=e(o,[["render",v],["__file","CSS\u6A21\u5757.html.vue"]]);export{h as default};
