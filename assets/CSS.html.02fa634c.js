import{_ as i,o as e,c as n,b as d}from"./app.12353158.js";var l="/assets/20220307225111.4b0a6646.png";const s={},c=d('<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><hr><h3 id="_1-\u76D2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u76D2\u6A21\u578B" aria-hidden="true">#</a> 1 \u76D2\u6A21\u578B</h3><blockquote><p>content\uFF08\u5143\u7D20\u5185\u5BB9\uFF09 + padding\uFF08\u5185\u8FB9\u8DDD\uFF09 + border\uFF08\u8FB9\u6846\uFF09 + margin\uFF08\u5916\u8FB9\u8DDD\uFF09</p></blockquote><p>\u5EF6\u4F38\uFF1A<code>box-sizing</code></p><ul><li><code>content-box</code>\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u603B\u5BBD\u5EA6 =\xA0<code>margin</code>\xA0+\xA0<code>border</code>\xA0+\xA0<code>padding</code>\xA0+\xA0<code>width</code></li><li><code>border-box</code>\uFF1A\u76D2\u5B50\u5BBD\u5EA6\u5305\u542B\xA0<code>padding</code>\xA0\u548C\xA0<code>border</code>\uFF0C<code>\u603B\u5BBD\u5EA6 = margin + width</code></li><li><code>inherit</code>\uFF1A\u4ECE\u7236\u5143\u7D20\u7EE7\u627F\xA0<code>box-sizing</code>\xA0\u5C5E\u6027</li></ul><h3 id="_2-bfc" tabindex="-1"><a class="header-anchor" href="#_2-bfc" aria-hidden="true">#</a> 2 BFC</h3><blockquote><p>\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6E32\u67D3\u533A\u57DF\uFF0C\u8BA9\u5904\u4E8E\xA0<code>BFC</code>\xA0\u5185\u90E8\u7684\u5143\u7D20\u4E0E\u5916\u90E8\u7684\u5143\u7D20\u76F8\u4E92\u9694\u79BB\uFF0C\u4F7F\u5185\u5916\u5143\u7D20\u7684\u5B9A\u4F4D\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD\u3002</p></blockquote><blockquote><p>IE\u4E0B\u4E3A\xA0<code>Layout</code>\uFF0C\u53EF\u901A\u8FC7\xA0<code>zoom:1</code>\xA0\u89E6\u53D1</p></blockquote><p>\u89E6\u53D1\u6761\u4EF6:</p><ul><li>\u6839\u5143\u7D20</li><li><code>position: absolute/fixed</code></li><li><code>display: inline-block / table</code></li><li><code>float</code>\xA0\u5143\u7D20</li><li><code>ovevflow !== visible</code></li></ul><p>\u89C4\u5219:</p><ul><li>\u5C5E\u4E8E\u540C\u4E00\u4E2A\xA0<code>BFC</code>\xA0\u7684\u4E24\u4E2A\u76F8\u90BB\xA0<code>Box</code>\xA0\u5782\u76F4\u6392\u5217</li><li>\u5C5E\u4E8E\u540C\u4E00\u4E2A\xA0<code>BFC</code>\xA0\u7684\u4E24\u4E2A\u76F8\u90BB\xA0<code>Box</code>\xA0\u7684\xA0<code>margin</code>\xA0\u4F1A\u53D1\u751F\u91CD\u53E0</li><li><code>BFC</code>\xA0\u4E2D\u5B50\u5143\u7D20\u7684\xA0<code>margin box</code>\xA0\u7684\u5DE6\u8FB9\uFF0C \u4E0E\u5305\u542B\u5757 (BFC)\xA0<code>border box</code>\u7684\u5DE6\u8FB9\u76F8\u63A5\u89E6 (\u5B50\u5143\u7D20\xA0<code>absolute</code>\xA0\u9664\u5916)</li><li><code>BFC</code>\xA0\u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E\xA0<code>float</code>\xA0\u7684\u5143\u7D20\u533A\u57DF\u91CD\u53E0</li><li>\u8BA1\u7B97\xA0<code>BFC</code>\xA0\u7684\u9AD8\u5EA6\u65F6\uFF0C\u6D6E\u52A8\u5B50\u5143\u7D20\u4E5F\u53C2\u4E0E\u8BA1\u7B97</li><li>\u6587\u5B57\u5C42\u4E0D\u4F1A\u88AB\u6D6E\u52A8\u5C42\u8986\u76D6\uFF0C\u73AF\u7ED5\u4E8E\u5468\u56F4</li></ul><p>\u5E94\u7528:</p><ul><li>\u963B\u6B62<code>margin</code>\u91CD\u53E0</li><li>\u53EF\u4EE5\u5305\u542B\u6D6E\u52A8\u5143\u7D20 ------ \u6E05\u9664\u5185\u90E8\u6D6E\u52A8(\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406\u662F\u4E24\u4E2A<code>div</code>\u90FD\u4F4D\u4E8E\u540C\u4E00\u4E2A\xA0<code>BFC</code>\xA0\u533A\u57DF\u4E4B\u4E2D)</li><li>\u81EA\u9002\u5E94\u4E24\u680F\u5E03\u5C40</li><li>\u53EF\u4EE5\u963B\u6B62\u5143\u7D20\u88AB\u6D6E\u52A8\u5143\u7D20\u8986\u76D6</li></ul><h3 id="_3-\u5C42\u53E0\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#_3-\u5C42\u53E0\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> 3 \u5C42\u53E0\u4E0A\u4E0B\u6587</h3><blockquote><p>\u5143\u7D20\u63D0\u5347\u4E3A\u4E00\u4E2A\u6BD4\u8F83\u7279\u6B8A\u7684\u56FE\u5C42\uFF0C\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D (z\u8F74) \u9AD8\u51FA\u666E\u901A\u5143\u7D20\u4E00\u7B49\u3002</p></blockquote><p>\u89E6\u53D1\u6761\u4EF6</p><ul><li>\u6839\u5C42\u53E0\u4E0A\u4E0B\u6587(<code>html</code>)</li><li><code>position</code></li><li><code>css3</code>\u5C5E\u6027 <ul><li><code>flex</code></li><li><code>transform</code></li><li><code>opacity</code></li><li><code>filter</code></li><li><code>will-change</code></li><li><code>webkit-overflow-scrolling</code></li></ul></li></ul><p>\u5C42\u53E0\u7B49\u7EA7\uFF1A\u5C42\u53E0\u4E0A\u4E0B\u6587\u5728z\u8F74\u4E0A\u7684\u6392\u5E8F</p><ul><li>\u5728\u540C\u4E00\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5C42\u53E0\u7B49\u7EA7\u624D\u6709\u610F\u4E49</li><li><code>z-index</code>\u7684\u4F18\u5148\u7EA7\u6700\u9AD8</li></ul><p><img src="'+l+`" alt=""></p><h3 id="_4-\u5DE6\u53F3\u5C45\u4E2D\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-\u5DE6\u53F3\u5C45\u4E2D\u65B9\u6848" aria-hidden="true">#</a> 4 \u5DE6\u53F3\u5C45\u4E2D\u65B9\u6848</h3><ul><li>\u884C\u5185\u5143\u7D20:\xA0<code>text-align: center</code></li><li>\u5B9A\u5BBD\u5757\u72B6\u5143\u7D20: \u5DE6\u53F3\xA0<code>margin</code>\xA0\u503C\u4E3A\xA0<code>auto</code></li><li>\u4E0D\u5B9A\u5BBD\u5757\u72B6\u5143\u7D20:\xA0<code>table</code>\u5E03\u5C40\uFF0C<code>position + transform</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u65B9\u68481 */
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u4E0A\u4E0B\u5782\u76F4\u5C45\u4E2D\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_5-\u4E0A\u4E0B\u5782\u76F4\u5C45\u4E2D\u65B9\u6848" aria-hidden="true">#</a> 5 \u4E0A\u4E0B\u5782\u76F4\u5C45\u4E2D\u65B9\u6848</h3><ul><li>\u5B9A\u9AD8\uFF1A<code>margin</code>\uFF0C<code>position + margin</code>(\u8D1F\u503C)</li><li>\u4E0D\u5B9A\u9AD8\uFF1A<code>position</code>\xA0+\xA0<code>transform</code>\uFF0C<code>flex</code>\uFF0C<code>IFC + vertical-align:middle</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u5B9A\u9AD8\u65B9\u68481 */
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u9009\u62E9\u5668\u6743\u91CD\u8BA1\u7B97\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_6-\u9009\u62E9\u5668\u6743\u91CD\u8BA1\u7B97\u65B9\u5F0F" aria-hidden="true">#</a> 6 \u9009\u62E9\u5668\u6743\u91CD\u8BA1\u7B97\u65B9\u5F0F</h3><blockquote><p>!important &gt; \u5185\u8054\u6837\u5F0F = \u5916\u8054\u6837\u5F0F &gt; ID\u9009\u62E9\u5668 &gt; \u7C7B\u9009\u62E9\u5668 = \u4F2A\u7C7B\u9009\u62E9\u5668 = \u5C5E\u6027\u9009\u62E9\u5668 &gt; \u5143\u7D20\u9009\u62E9\u5668 = \u4F2A\u5143\u7D20\u9009\u62E9\u5668 &gt; \u901A\u914D\u9009\u62E9\u5668 = \u540E\u4EE3\u9009\u62E9\u5668 = \u5144\u5F1F\u9009\u62E9\u5668</p></blockquote><ol><li>\u5C5E\u6027\u540E\u9762\u52A0<code>!import</code>\u4F1A\u8986\u76D6\u9875\u9762\u5185\u4EFB\u4F55\u4F4D\u7F6E\u5B9A\u4E49\u7684\u5143\u7D20\u6837\u5F0F</li><li>\u4F5C\u4E3A<code>style</code>\u5C5E\u6027\u5199\u5728\u5143\u7D20\u5185\u7684\u6837\u5F0F</li><li><code>id</code>\u9009\u62E9\u5668</li><li>\u7C7B\u9009\u62E9\u5668</li><li>\u6807\u7B7E\u9009\u62E9\u5668</li><li>\u901A\u914D\u7B26\u9009\u62E9\u5668\uFF08<code>*</code>\uFF09</li><li>\u6D4F\u89C8\u5668\u81EA\u5B9A\u4E49\u6216\u7EE7\u627F</li></ol><p>\u540C\u4E00\u7EA7\u522B\uFF1A\u540E\u5199\u7684\u4F1A\u8986\u76D6\u5148\u5199\u7684</p><blockquote><p>css\u9009\u62E9\u5668\u7684\u89E3\u6790\u539F\u5219\uFF1A\u9009\u62E9\u5668\u5B9A\u4F4DDOM\u5143\u7D20\u662F\u4ECE\u53F3\u5F80\u5DE6\u7684\u65B9\u5411\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5C3D\u65E9\u7684\u8FC7\u6EE4\u6389\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u6837\u5F0F\u89C4\u5219\u548C\u5143\u7D20</p></blockquote><h3 id="_7-\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#_7-\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> 7 \u6E05\u9664\u6D6E\u52A8</h3><ol><li>\u5728\u6D6E\u52A8\u5143\u7D20\u540E\u9762\u6DFB\u52A0\xA0<code>clear:both</code>\u7684\u7A7A\xA0<code>div</code>\xA0\u5143\u7D20</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u63A8\u8350\u4F7F\u7528\u7B2C\u4E09\u79CD\u65B9\u6CD5\uFF0C\u4E0D\u4F1A\u5728\u9875\u9762\u65B0\u589Ediv\uFF0C\u6587\u6863\u7ED3\u6784\u66F4\u52A0\u6E05\u6670</p></blockquote><h3 id="_8-\u5DE6\u8FB9\u5B9A\u5BBD-\u53F3\u8FB9\u81EA\u9002\u5E94\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_8-\u5DE6\u8FB9\u5B9A\u5BBD-\u53F3\u8FB9\u81EA\u9002\u5E94\u65B9\u6848" aria-hidden="true">#</a> 8 \u5DE6\u8FB9\u5B9A\u5BBD\uFF0C\u53F3\u8FB9\u81EA\u9002\u5E94\u65B9\u6848</h3><blockquote><p>float + margin\uFF0Cfloat + calc</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u65B9\u68481 */
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-\u5DE6\u53F3\u4E24\u8FB9\u5B9A\u5BBD-\u4E2D\u95F4\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#_9-\u5DE6\u53F3\u4E24\u8FB9\u5B9A\u5BBD-\u4E2D\u95F4\u81EA\u9002\u5E94" aria-hidden="true">#</a> 9 \u5DE6\u53F3\u4E24\u8FB9\u5B9A\u5BBD\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94</h3><blockquote><p>float\uFF0C<code>float + calc</code>, \u5723\u676F\u5E03\u5C40\uFF08\u8BBE\u7F6EBFC\uFF0Cmargin\u8D1F\u503C\u6CD5\uFF09\uFF0Cflex</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-css\u52A8\u753B\u548C\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#_10-css\u52A8\u753B\u548C\u8FC7\u6E21" aria-hidden="true">#</a> 10 CSS\u52A8\u753B\u548C\u8FC7\u6E21</h3><p>animation / keyframes</p><ul><li><code>animation-name</code>: \u52A8\u753B\u540D\u79F0\uFF0C\u5BF9\u5E94<code>@keyframes</code></li><li><code>animation-duration</code>: \u95F4\u9694</li><li><code>animation-timing-function</code>: \u66F2\u7EBF</li><li><code>animation-delay</code>: \u5EF6\u8FDF</li><li><code>animation-iteration-count</code>: \u6B21\u6570 <ul><li><code>infinite</code>: \u5FAA\u73AF\u52A8\u753B</li></ul></li><li><code>animation-direction</code>: \u65B9\u5411 <ul><li><code>alternate</code>: \u53CD\u5411\u64AD\u653E</li></ul></li><li><code>animation-fill-mode</code>: \u9759\u6B62\u6A21\u5F0F <ul><li><code>forwards</code>: \u505C\u6B62\u65F6\uFF0C\u4FDD\u7559\u6700\u540E\u4E00\u5E27</li><li><code>backwards</code>: \u505C\u6B62\u65F6\uFF0C\u56DE\u5230\u7B2C\u4E00\u5E27</li><li><code>both</code>: \u540C\u65F6\u8FD0\u7528\xA0<code>forwards / backwards</code></li></ul></li><li>\u5E38\u7528\u94A9\u5B50:\xA0<code>animationend</code></li></ul><blockquote><p>\u52A8\u753B\u5C5E\u6027: \u5C3D\u91CF\u4F7F\u7528\u52A8\u753B\u5C5E\u6027\u8FDB\u884C\u52A8\u753B\uFF0C\u80FD\u62E5\u6709\u8F83\u597D\u7684\u6027\u80FD\u8868\u73B0</p></blockquote><ul><li><code>translate</code></li><li><code>scale</code></li><li><code>rotate</code></li><li><code>skew</code></li><li><code>opacity</code></li><li><code>color</code></li></ul><p>transform</p><ul><li>\u4F4D\u79FB\u5C5E\u6027\xA0<code>translate( x , y )</code></li><li>\u65CB\u8F6C\u5C5E\u6027\xA0<code>rotate()</code></li><li>\u7F29\u653E\u5C5E\u6027\xA0<code>scale()</code></li><li>\u503E\u659C\u5C5E\u6027\xA0<code>skew()</code></li></ul><p>transition</p><ul><li><code>transition-property</code>\uFF08\u8FC7\u6E21\u7684\u5C5E\u6027\u7684\u540D\u79F0\uFF09\u3002</li><li><code>transition-duration</code>\uFF08\u5B9A\u4E49\u8FC7\u6E21\u6548\u679C\u82B1\u8D39\u7684\u65F6\u95F4,\u9ED8\u8BA4\u662F\xA0<code>0</code>\uFF09\u3002</li><li><code>transition-timing-function:linear(\u5300\u901F) ease</code>(\u6162\u901F\u5F00\u59CB\uFF0C\u7136\u540E\u53D8\u5FEB\uFF0C\u7136\u540E\u6162\u901F\u7ED3\u675F)\uFF08\u89C4\u5B9A\u8FC7\u6E21\u6548\u679C\u7684\u65F6\u95F4\u66F2\u7EBF\uFF0C\u6700\u5E38\u7528\u7684\u662F\u8FD9\u4E24\u4E2A\uFF09\u3002</li><li><code>transition-delay</code>\uFF08\u89C4\u5B9A\u8FC7\u6E21\u6548\u679C\u4F55\u65F6\u5F00\u59CB\u3002\u9ED8\u8BA4\u662F 0\uFF09</li></ul><blockquote><p>\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u90FD\u662F\u5199\u4E00\u8D77\u7684\uFF0C\u6BD4\u5982\uFF1A<code>transition\uFF1A width 2s ease 1s</code></p></blockquote><p>\u5173\u952E\u5E27\u52A8\u753Banimation</p><blockquote><p>\u4E00\u4E2A\u5173\u952E\u5E27\u52A8\u753B\uFF0C\u6700\u5C11\u5305\u542B\u4E24\u90E8\u5206\uFF0Canimation \u5C5E\u6027\u53CA\u5C5E\u6027\u503C\uFF08\u52A8\u753B\u7684\u540D\u79F0\u548C\u8FD0\u884C\u65B9\u5F0F\u8FD0\u884C\u65F6\u95F4\u7B49\uFF09\u3002@keyframes\uFF08\u89C4\u5B9A\u52A8\u753B\u7684\u5177\u4F53\u5B9E\u73B0\u8FC7\u7A0B\uFF09</p></blockquote><p>animation \u5C5E\u6027\u53EF\u4EE5\u62C6\u5206\u4E3A</p><ul><li><code>animation-name</code>\xA0\u89C4\u5B9A@keyframes \u52A8\u753B\u7684\u540D\u79F0\u3002</li><li><code>animation-duration</code>\xA0\u89C4\u5B9A\u52A8\u753B\u5B8C\u6210\u4E00\u4E2A\u5468\u671F\u6240\u82B1\u8D39\u7684\u79D2\u6216\u6BEB\u79D2\u3002\u9ED8\u8BA4\u662F\xA0<code>0</code>\u3002</li><li><code>animation-timing-function</code>\xA0\u89C4\u5B9A\u52A8\u753B\u7684\u901F\u5EA6\u66F2\u7EBF\u3002\u9ED8\u8BA4\u662F &quot;ease&quot;\uFF0C\u5E38\u7528\u7684\u8FD8\u6709<code>linear</code>\uFF0C\u540C<code>transtion</code>\xA0\u3002</li><li><code>animation-delay</code>\xA0\u89C4\u5B9A\u52A8\u753B\u4F55\u65F6\u5F00\u59CB\u3002\u9ED8\u8BA4\u662F 0\u3002</li><li><code>animation-iteration-count</code>\xA0\u89C4\u5B9A\u52A8\u753B\u88AB\u64AD\u653E\u7684\u6B21\u6570\u3002\u9ED8\u8BA4\u662F 1\uFF0C\u4F46\u6211\u4EEC\u4E00\u822C\u7528<code>infinite</code>\uFF0C\u4E00\u76F4\u64AD\u653E</li></ul><blockquote><p>\u800C<code>@keyframes</code>\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u662F<code>from-&gt;to</code>\uFF08\u7B49\u540C\u4E8E0%\u548C100%\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4ECE<code>0%-&gt;100%</code>\u4E4B\u95F4\u4EFB\u610F\u4E2A\u7684\u5206\u5C42\u8BBE\u7F6E\u3002\u6211\u4EEC\u901A\u8FC7\u4E0B\u9762\u4E00\u4E2A\u7A0D\u5FAE\u590D\u6742\u70B9\u7684<code>demo</code>\u6765\u770B\u4E00\u4E0B\uFF0C\u57FA\u672C\u4E0A\u7528\u5230\u4E86\u4E0A\u9762\u8BF4\u5230\u7684\u5927\u90E8\u5206\u77E5\u8BC6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>eg:
   @keyframes mymove
  {
      from {top:0px;}
      to {top:200px;}
  }

/* \u7B49\u540C\u4E8E\uFF1A */

@keyframes mymove
{
 0%   {top:0px;}
 25%  {top:200px;}
 50%  {top:100px;}
 75%  {top:200px;}
 100% {top:0px;}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528css3\u52A8\u753B\u4F7F\u4E00\u4E2A\u56FE\u7247\u65CB\u8F6C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#loader {

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-css3\u7684\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_11-css3\u7684\u65B0\u7279\u6027" aria-hidden="true">#</a> 11 CSS3\u7684\u65B0\u7279\u6027</h3><ul><li><code>transition</code>\uFF1A\u8FC7\u6E21</li><li><code>transform</code>: \u65CB\u8F6C\u3001\u7F29\u653E\u3001\u79FB\u52A8\u6216\u503E\u659C</li><li><code>animation</code>: \u52A8\u753B</li><li><code>gradient</code>: \u6E10\u53D8</li><li><code>box-shadow</code>: \u9634\u5F71</li><li><code>border-radius</code>: \u5706\u89D2</li><li><code>word-break</code>:\xA0<code>normal|break-all|keep-all</code>; \u6587\u5B57\u6362\u884C(\u9ED8\u8BA4\u89C4\u5219|\u5355\u8BCD\u4E5F\u53EF\u4EE5\u6362\u884C|\u53EA\u5728\u534A\u89D2\u7A7A\u683C\u6216\u8FDE\u5B57\u7B26\u6362\u884C)</li><li><code>text-overflow</code>: \u6587\u5B57\u8D85\u51FA\u90E8\u5206\u5904\u7406</li><li><code>text-shadow</code>: \u6C34\u5E73\u9634\u5F71\uFF0C\u5782\u76F4\u9634\u5F71\uFF0C\u6A21\u7CCA\u7684\u8DDD\u79BB\uFF0C\u4EE5\u53CA\u9634\u5F71\u7684\u989C\u8272\u3002</li><li><code>box-sizing</code>:\xA0<code>content-box|border-box</code>\xA0\u76D2\u6A21\u578B</li><li>\u5A92\u4F53\u67E5\u8BE2\xA0<code>@media screen and (max-width: 960px) {}</code>\u8FD8\u6709\u6253\u5370<code>print</code></li></ul><h3 id="_12-\u5217\u4E3E\u51E0\u4E2Acss\u4E2D\u53EF\u7EE7\u627F\u548C\u4E0D\u53EF\u7EE7\u627F\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_12-\u5217\u4E3E\u51E0\u4E2Acss\u4E2D\u53EF\u7EE7\u627F\u548C\u4E0D\u53EF\u7EE7\u627F\u7684\u5143\u7D20" aria-hidden="true">#</a> 12 \u5217\u4E3E\u51E0\u4E2Acss\u4E2D\u53EF\u7EE7\u627F\u548C\u4E0D\u53EF\u7EE7\u627F\u7684\u5143\u7D20</h3><ul><li>\u4E0D\u53EF\u7EE7\u627F\u7684\uFF1A<code>display\u3001margin\u3001border\u3001padding\u3001background\u3001height\u3001min-height\u3001max-height\u3001width\u3001min-width\u3001max-width\u3001overflow\u3001position\u3001left\u3001right\u3001top\u3001bottom\u3001z-index\u3001float\u3001clear\u3001table-layout\u3001vertical-align</code></li><li>\u6240\u6709\u5143\u7D20\u53EF\u7EE7\u627F\uFF1A<code>visibility</code>\u548C<code>cursor</code>\u3002</li><li>\u5185\u8054\u5143\u7D20\u53EF\u7EE7\u627F\uFF1A<code>letter-spacing\u3001word-spacing\u3001white-space\u3001line-height\u3001color\u3001font\u3001font-family\u3001font-size\u3001font-style\u3001font-variant\u3001font-weight\u3001text-decoration\u3001text-transform\u3001direction</code>\u3002</li><li>\u7EC8\u7AEF\u5757\u72B6\u5143\u7D20\u53EF\u7EE7\u627F\uFF1A<code>text-indent\u548Ctext-align</code>\u3002</li><li>\u5217\u8868\u5143\u7D20\u53EF\u7EE7\u627F\uFF1A<code>list-style\u3001list-style-type\u3001list-style-position\u3001list-style-imag</code>e\`\u3002</li></ul><p>transition\u548Canimation\u7684\u533A\u522B</p><blockquote><p><code>Animation</code>\u548C<code>transition</code>\u5927\u90E8\u5206\u5C5E\u6027\u662F\u76F8\u540C\u7684\uFF0C\u4ED6\u4EEC\u90FD\u662F\u968F\u65F6\u95F4\u6539\u53D8\u5143\u7D20\u7684\u5C5E\u6027\u503C\uFF0C\u4ED6\u4EEC\u7684\u4E3B\u8981\u533A\u522B\u662F<code>transition</code>\u9700\u8981\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\u624D\u80FD\u6539\u53D8\u5C5E\u6027\uFF0C\u800C<code>animation</code>\u4E0D\u9700\u8981\u89E6\u53D1\u4EFB\u4F55\u4E8B\u4EF6\u7684\u60C5\u51B5\u4E0B\u624D\u4F1A\u968F\u65F6\u95F4\u6539\u53D8\u5C5E\u6027\u503C\uFF0C\u5E76\u4E14<code>transition</code>\u4E3A2\u5E27\uFF0C\u4ECE<code>from .... to</code>\uFF0C\u800C<code>animation</code>\u53EF\u4EE5\u4E00\u5E27\u4E00\u5E27\u7684</p></blockquote>`,73),a=[c];function o(r,t){return e(),n("div",null,a)}var u=i(s,[["render",o],["__file","CSS.html.vue"]]);export{u as default};
