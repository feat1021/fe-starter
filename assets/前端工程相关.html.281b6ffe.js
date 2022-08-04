import{_ as l,o as d,c as s,a as e,d as c,b as i,e as a,r}from"./app.12353158.js";var o="/assets/20210319101659.2a00eb94.png",u="/assets/20210409165913.23642088.png",v="/assets/20210409170227.f8d373c9.png",t="/assets/20210409170237.968bd899.png",b="/assets/20210409170414.cfca6833.png",m="/assets/20210409170424.a161892e.png",p="/assets/20210315165345.79d73408.png";const h={},g=i(`<h1 id="\u524D\u7AEF\u5DE5\u7A0B\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5DE5\u7A0B\u76F8\u5173" aria-hidden="true">#</a> \u524D\u7AEF\u5DE5\u7A0B\u76F8\u5173</h1><hr><h2 id="_1-webpack\u539F\u7406\u7B80\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-webpack\u539F\u7406\u7B80\u8FF0" aria-hidden="true">#</a> 1 webpack\u539F\u7406\u7B80\u8FF0</h2><h3 id="_1-1-\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> 1.1 \u6838\u5FC3\u6982\u5FF5</h3><blockquote><p>JavaScript \u7684 \u6A21\u5757\u6253\u5305\u5DE5\u5177 (module bundler)\u3002\u901A\u8FC7\u5206\u6790\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\uFF0C\u6700\u7EC8\u5C06\u6240\u6709\u6A21\u5757\u6253\u5305\u6210\u4E00\u4EFD\u6216\u8005\u591A\u4EFD\u4EE3\u7801\u5305 (bundler)\uFF0C\u4F9B HTML \u76F4\u63A5\u5F15\u7528\u3002\u5B9E\u8D28\u4E0A\uFF0CWebpack \u4EC5\u4EC5\u63D0\u4F9B\u4E86 \u6253\u5305\u529F\u80FD \u548C\u4E00\u5957 \u6587\u4EF6\u5904\u7406\u673A\u5236\uFF0C\u7136\u540E\u901A\u8FC7\u751F\u6001\u4E2D\u7684\u5404\u79CD Loader \u548C Plugin \u5BF9\u4EE3\u7801\u8FDB\u884C\u9884\u7F16\u8BD1\u548C\u6253\u5305\u3002\u56E0\u6B64 Webpack \u5177\u6709\u9AD8\u5EA6\u7684\u53EF\u62D3\u5C55\u6027\uFF0C\u80FD\u66F4\u597D\u7684\u53D1\u6325\u793E\u533A\u751F\u6001\u7684\u529B\u91CF\u3002</p></blockquote><ul><li>Entry: \u5165\u53E3\u6587\u4EF6\uFF0CWebpack\u4F1A\u4ECE\u8BE5\u6587\u4EF6\u5F00\u59CB\u8FDB\u884C\u5206\u6790\u4E0E\u7F16\u8BD1\uFF1B</li><li>Output: \u51FA\u53E3\u8DEF\u5F84\uFF0C\u6253\u5305\u540E\u521B\u5EFA bundler\u7684\u6587\u4EF6\u8DEF\u5F84\u4EE5\u53CA\u6587\u4EF6\u540D\uFF1B</li><li>Module: \u6A21\u5757\uFF0C\u5728 Webpack \u4E2D\u4EFB\u4F55\u6587\u4EF6\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u6A21\u5757\uFF0C\u4F1A\u6839\u636E\u914D\u7F6E\u7684\u4E0D\u540C\u7684 Loader \u8FDB\u884C\u52A0\u8F7D\u548C\u6253\u5305\uFF1B</li><li>Chunk: \u4EE3\u7801\u5757\uFF0C\u53EF\u4EE5\u6839\u636E\u914D\u7F6E\uFF0C\u5C06\u6240\u6709\u6A21\u5757\u4EE3\u7801\u5408\u5E76\u6210\u4E00\u4E2A\u6216\u591A\u4E2A\u4EE3\u7801\u5757\uFF0C\u4EE5\u4FBF\u6309\u9700\u52A0\u8F7D\uFF0C\u63D0\u9AD8\u6027\u80FD\uFF1B</li><li>Loader: \u6A21\u5757\u52A0\u8F7D\u5668\uFF0C\u8FDB\u884C\u5404\u79CD\u6587\u4EF6\u7C7B\u578B\u7684\u52A0\u8F7D\u4E0E\u8F6C\u6362\uFF1B</li><li>Plugin: \u62D3\u5C55\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7 Webpack \u76F8\u5E94\u7684\u4E8B\u4EF6\u94A9\u5B50\uFF0C\u4ECB\u5165\u5230\u6253\u5305\u8FC7\u7A0B\u4E2D\u7684\u4EFB\u610F\u73AF\u8282\uFF0C\u4ECE\u800C\u5BF9\u4EE3\u7801\u6309\u9700\u4FEE\u6539\uFF1B</li></ul><h3 id="_1-2-\u5DE5\u4F5C\u6D41\u7A0B-\u52A0\u8F7D-\u7F16\u8BD1-\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5DE5\u4F5C\u6D41\u7A0B-\u52A0\u8F7D-\u7F16\u8BD1-\u8F93\u51FA" aria-hidden="true">#</a> 1.2 \u5DE5\u4F5C\u6D41\u7A0B (\u52A0\u8F7D - \u7F16\u8BD1 - \u8F93\u51FA)</h3><ol><li>\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\uFF0C\u6309\u547D\u4EE4 \u521D\u59CB\u5316 \u914D\u7F6E\u53C2\u6570\uFF0C\u521B\u5EFA Compiler \u5BF9\u8C61\uFF1B</li><li>\u8C03\u7528\u63D2\u4EF6\u7684 apply \u65B9\u6CD5 \u6302\u8F7D\u63D2\u4EF6 \u76D1\u542C\uFF0C\u7136\u540E\u4ECE\u5165\u53E3\u6587\u4EF6\u5F00\u59CB\u6267\u884C\u7F16\u8BD1\uFF1B</li><li>\u6309\u6587\u4EF6\u7C7B\u578B\uFF0C\u8C03\u7528\u76F8\u5E94\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u884C \u7F16\u8BD1\uFF0C\u5E76\u5728\u5408\u9002\u7684\u65F6\u673A\u70B9\u89E6\u53D1\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u8C03\u7528 Plugin \u6267\u884C\uFF0C\u6700\u540E\u518D\u6839\u636E\u6A21\u5757 \u4F9D\u8D56\u67E5\u627E \u5230\u6240\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u9012\u5F52\u6267\u884C\u7B2C\u4E09\u6B65\uFF1B</li><li>\u5C06\u7F16\u8BD1\u540E\u7684\u6240\u6709\u4EE3\u7801\u5305\u88C5\u6210\u4E00\u4E2A\u4E2A\u4EE3\u7801\u5757 (Chuck)\uFF0C \u5E76\u6309\u4F9D\u8D56\u548C\u914D\u7F6E\u786E\u5B9A \u8F93\u51FA\u5185\u5BB9\u3002\u8FD9\u4E2A\u6B65\u9AA4\uFF0C\u4ECD\u7136\u53EF\u4EE5\u901A\u8FC7 Plugin \u8FDB\u884C\u6587\u4EF6\u7684\u4FEE\u6539;</li><li>\u6700\u540E\uFF0C\u6839\u636E Output \u628A\u6587\u4EF6\u5185\u5BB9\u4E00\u4E00\u5199\u5165\u5230\u6307\u5B9A\u7684\u6587\u4EF6\u5939\u4E2D\uFF0C\u5B8C\u6210\u6574\u4E2A\u8FC7\u7A0B\uFF1B</li></ol><h3 id="_1-3-\u6A21\u5757\u5305\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6A21\u5757\u5305\u88C5" aria-hidden="true">#</a> 1.3 \u6A21\u5757\u5305\u88C5:</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function(modules) {
	// \u6A21\u62DF require \u51FD\u6570\uFF0C\u4ECE\u5185\u5B58\u4E2D\u52A0\u8F7D\u6A21\u5757\uFF1B
	function __webpack_require__(moduleId) {
		// \u7F13\u5B58\u6A21\u5757
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}

		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};

		// \u6267\u884C\u4EE3\u7801\uFF1B
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		// Flag: \u6807\u8BB0\u662F\u5426\u52A0\u8F7D\u5B8C\u6210\uFF1B
		module.l = true;

		return module.exports;
	}

	// ...

	// \u5F00\u59CB\u6267\u884C\u52A0\u8F7D\u5165\u53E3\u6587\u4EF6\uFF1B
	return __webpack_require__(__webpack_require__.s = &quot;./src/index.js&quot;);
 })({
 	&quot;./src/index.js&quot;: function (module, __webpack_exports__, __webpack_require__) {
		// \u4F7F\u7528 eval \u6267\u884C\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\uFF1B
		// \u7EE7\u7EED\u9012\u5F52\u5F15\u7528\u6A21\u5757\u5185\u90E8\u4F9D\u8D56\uFF1B
		// \u5B9E\u9645\u60C5\u51B5\u5E76\u4E0D\u662F\u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u8FD9\u91CC\u662F\u4E3A\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF1B
		eval(\`
			__webpack_require__.r(__webpack_exports__);
			//
			var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(&quot;test&quot;, ./src/test.js&quot;);
		\`);
	},
	&quot;./src/test.js&quot;: function (module, __webpack_exports__, __webpack_require__) {
		// ...
	},
 })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3:</p><ul><li>\u6A21\u5757\u673A\u5236: webpack\u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u5957\u6A21\u62DF\u6A21\u5757\u7684\u673A\u5236\uFF0C\u5C06\u5176\u5305\u88F9\u4E8E\u4E1A\u52A1\u4EE3\u7801\u7684\u5916\u90E8\uFF0C\u4ECE\u800C\u63D0\u4F9B\u4E86\u4E00\u5957\u6A21\u5757\u673A\u5236\uFF1B</li><li>\u6587\u4EF6\u7F16\u8BD1: webpack \u89C4\u5B9A\u4E86\u4E00\u5957\u7F16\u8BD1\u89C4\u5219\uFF0C\u901A\u8FC7 Loader \u548C Plugin\uFF0C\u4EE5\u7BA1\u9053\u7684\u5F62\u5F0F\u5BF9\u6587\u4EF6\u5B57\u7B26\u4E32\u8FDB\u884C\u5904\u7406\uFF1B</li></ul><h3 id="_1-4-webpack\u7684\u6253\u5305\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-4-webpack\u7684\u6253\u5305\u539F\u7406" aria-hidden="true">#</a> 1.4 webpack\u7684\u6253\u5305\u539F\u7406</h3><ul><li><code>\u521D\u59CB\u5316\u53C2\u6570</code>\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570</li><li><code>\u5F00\u59CB\u7F16\u8BD1</code>\uFF1A\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316 Compiler \u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u6267\u884C\u5BF9\u8C61\u7684 run \u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u7F16\u8BD1</li><li><code>\u786E\u5B9A\u5165\u53E3</code>\uFF1A\u6839\u636E\u914D\u7F6E\u4E2D\u7684 entry \u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6</li><li><code>\u7F16\u8BD1\u6A21\u5757</code>\uFF1A\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6587\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406</li><li><code>\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1</code>\uFF1A\u5728\u7ECF\u8FC7\u7B2C4\u6B65\u4F7F\u7528 Loader \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7FFB\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB</li><li><code>\u8F93\u51FA\u8D44\u6E90</code>\uFF1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk\uFF0C\u518D\u628A\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868\uFF0C\u8FD9\u6B65\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A</li><li><code>\u8F93\u51FA\u5B8C\u6210</code>\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF</li></ul><h3 id="_1-5-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_1-5-\u603B\u7ED3" aria-hidden="true">#</a> 1.5 \u603B\u7ED3</h3><ol><li>\u521D\u59CB\u5316\u53C2\u6570\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u5E76\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u914D\u7F6E\u53C2\u6570\u3002</li><li>\u5F00\u59CB\u7F16\u8BD1\uFF1A\u4ECE\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316\xA0<code>Compiler</code>\xA0\u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u6267\u884C\u5BF9\u8C61\u7684\xA0<code>run</code>\xA0\u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u7F16\u8BD1\u3002</li><li>\u786E\u5B9A\u5165\u53E3\uFF1A\u6839scope\u636E\u914D\u7F6E\u4E2D\u7684\xA0<code>entry</code>\xA0\u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6\u3002</li><li>\u7F16\u8BD1\u6A21\u5757\uFF1A\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684\xA0<code>loader</code>\xA0\u5BF9\u6A21\u5757\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u8FD9\u4E2A\u6B65\u9AA4\u662F\u9012\u5F52\u6267\u884C\u7684\uFF0C\u76F4\u81F3\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6A21\u5757\u6587\u4EF6\u90FD\u7ECF\u8FC7\u672C\u6B65\u9AA4\u7684\u5904\u7406\u3002</li><li>\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1\uFF1A\u7ECF\u8FC7\u7B2C 4 \u6B65\u4F7F\u7528 loader \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7FFB\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u3002</li><li>\u8F93\u51FA\u8D44\u6E90\uFF1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684\xA0<code>chunk</code>\uFF0C\u518D\u628A\u6BCF\u4E2A\xA0<code>chunk</code>\xA0\u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868\uFF0C\u8FD9\u4E00\u6B65\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A\u3002</li><li>\u8F93\u51FA\u5B8C\u6210\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u3002</li></ol><h2 id="_2-webpack\u70ED\u66F4\u65B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-webpack\u70ED\u66F4\u65B0\u539F\u7406" aria-hidden="true">#</a> 2 webpack\u70ED\u66F4\u65B0\u539F\u7406</h2><p><img src="`+o+`" alt=""></p><ul><li>\u5F53\u4FEE\u6539\u4E86\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\uFF1B</li><li>\u6587\u4EF6\u7CFB\u7EDF\u63A5\u6536\u66F4\u6539\u5E76\u901A\u77E5\xA0<code>webpack</code>\uFF1B</li><li><code>webpack</code>\xA0\u91CD\u65B0\u7F16\u8BD1\u6784\u5EFA\u4E00\u4E2A\u6216\u591A\u4E2A\u6A21\u5757\uFF0C\u5E76\u901A\u77E5 HMR \u670D\u52A1\u5668\u8FDB\u884C\u66F4\u65B0\uFF1B</li><li><code>HMR Server</code>\xA0\u4F7F\u7528\xA0<code>webSocket</code>\xA0\u901A\u77E5\xA0<code>HMR runtime</code>\xA0\u9700\u8981\u66F4\u65B0\uFF0C<code>HMR</code>\xA0\u8FD0\u884C\u65F6\u901A\u8FC7\xA0<code>HTTP</code>\xA0\u8BF7\u6C42\u66F4\u65B0\xA0<code>jsonp</code></li><li><code>HMR</code>\xA0\u8FD0\u884C\u65F6\u66FF\u6362\u66F4\u65B0\u4E2D\u7684\u6A21\u5757\uFF0C\u5982\u679C\u786E\u5B9A\u8FD9\u4E9B\u6A21\u5757\u65E0\u6CD5\u66F4\u65B0\uFF0C\u5219\u89E6\u53D1\u6574\u4E2A\u9875\u9762\u5237\u65B0</li></ul><h2 id="_3-webpack-loader" tabindex="-1"><a class="header-anchor" href="#_3-webpack-loader" aria-hidden="true">#</a> 3 webpack Loader</h2><blockquote><p>\u7531\u4E8E Webpack \u662F\u57FA\u4E8E Node\uFF0C\u56E0\u6B64 Webpack \u5176\u5B9E\u662F\u53EA\u80FD\u8BC6\u522B js \u6A21\u5757\uFF0C\u6BD4\u5982 css / html / \u56FE\u7247\u7B49\u7C7B\u578B\u7684\u6587\u4EF6\u5E76\u65E0\u6CD5\u52A0\u8F7D\uFF0C\u56E0\u6B64\u5C31\u9700\u8981\u4E00\u4E2A\u5BF9 \u4E0D\u540C\u683C\u5F0F\u6587\u4EF6\u8F6C\u6362\u5668\u3002\u5176\u5B9E Loader \u505A\u7684\u4E8B\uFF0C\u4E5F\u5E76\u4E0D\u96BE\u7406\u89E3: \u5BF9 Webpack \u4F20\u5165\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u6309\u9700\u4FEE\u6539\u3002\u4F8B\u5982\u4E00\u4E2A\u6700\u7B80\u5355\u7684 Loader:</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// html-loader/index.js
module.exports = function(htmlSource) {
	// \u8FD4\u56DE\u5904\u7406\u540E\u7684\u4EE3\u7801\u5B57\u7B26\u4E32
	// \u5220\u9664 html \u6587\u4EF6\u4E2D\u7684\u6240\u6709\u6CE8\u91CA
	return htmlSource.replace(/&lt;!--[\\w\\W]*?--&gt;/g, &#39;&#39;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5F53\u7136\uFF0C\u5B9E\u9645\u7684 Loader \u4E0D\u4F1A\u8FD9\u4E48\u7B80\u5355\uFF0C\u901A\u5E38\u662F\u9700\u8981\u5C06\u4EE3\u7801\u8FDB\u884C\u5206\u6790\uFF0C\u6784\u5EFA AST (\u62BD\u8C61\u8BED\u6CD5\u6811)\uFF0C \u904D\u5386\u8FDB\u884C\u5B9A\u5411\u7684\u4FEE\u6539\u540E\uFF0C\u518D\u91CD\u65B0\u751F\u6210\u65B0\u7684\u4EE3\u7801\u5B57\u7B26\u4E32\u3002\u5982\u6211\u4EEC\u5E38\u7528\u7684 Babel-loader \u4F1A\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4:</p></blockquote><ul><li><code>babylon</code>\xA0\u5C06\xA0<code>ES6/ES7</code>\xA0\u4EE3\u7801\u89E3\u6790\u6210\xA0<code>AST</code></li><li><code>babel-traverse</code>\xA0\u5BF9\xA0<code>AST</code>\xA0\u8FDB\u884C\u904D\u5386\u8F6C\u8BD1\uFF0C\u5F97\u5230\u65B0\u7684 AST</li><li>\u65B0\xA0<code>AST</code>\xA0\u901A\u8FC7\xA0<code>babel-generator</code>\xA0\u8F6C\u6362\u6210\xA0<code>ES5</code></li></ul><p>Loader \u7279\u6027:</p><ul><li>\u94FE\u5F0F\u4F20\u9012\uFF0C\u6309\u7167\u914D\u7F6E\u65F6\u76F8\u53CD\u7684\u987A\u5E8F\u94FE\u5F0F\u6267\u884C\uFF1B</li><li>\u57FA\u4E8E Node \u73AF\u5883\uFF0C\u62E5\u6709 \u8F83\u9AD8\u6743\u9650\uFF0C\u6BD4\u5982\u6587\u4EF6\u7684\u589E\u5220\u67E5\u6539\uFF1B</li><li>\u53EF\u540C\u6B65\u4E5F\u53EF\u5F02\u6B65\uFF1B</li></ul><p>\u5E38\u7528 Loader:</p><ul><li><code>file-loader</code>: \u52A0\u8F7D\u6587\u4EF6\u8D44\u6E90\uFF0C\u5982 \u5B57\u4F53 / \u56FE\u7247 \u7B49\uFF0C\u5177\u6709\u79FB\u52A8/\u590D\u5236/\u547D\u540D\u7B49\u529F\u80FD\uFF1B</li><li><code>url-loader</code>: \u901A\u5E38\u7528\u4E8E\u52A0\u8F7D\u56FE\u7247\uFF0C\u53EF\u4EE5\u5C06\u5C0F\u56FE\u7247\u76F4\u63A5\u8F6C\u6362\u4E3A Date Url\uFF0C\u51CF\u5C11\u8BF7\u6C42\uFF1B</li><li><code>babel-loader</code>: \u52A0\u8F7D js / jsx \u6587\u4EF6\uFF0C \u5C06 ES6 / ES7 \u4EE3\u7801\u8F6C\u6362\u6210 ES5\uFF0C\u62B9\u5E73\u517C\u5BB9\u6027\u95EE\u9898\uFF1B</li><li><code>ts-loader</code>: \u52A0\u8F7D ts / tsx \u6587\u4EF6\uFF0C\u7F16\u8BD1 TypeScript\uFF1B</li><li><code>style-loader</code>: \u5C06 css \u4EE3\u7801\u4EE5<code>&lt;style&gt;</code>\u6807\u7B7E\u7684\u5F62\u5F0F\u63D2\u5165\u5230 html \u4E2D\uFF1B</li><li><code>css-loader</code>: \u5206\u6790@import\u548Curl()\uFF0C\u5F15\u7528 css \u6587\u4EF6\u4E0E\u5BF9\u5E94\u7684\u8D44\u6E90\uFF1B</li><li><code>postcss-loader</code>: \u7528\u4E8E css \u7684\u517C\u5BB9\u6027\u5904\u7406\uFF0C\u5177\u6709\u4F17\u591A\u529F\u80FD\uFF0C\u4F8B\u5982 \u6DFB\u52A0\u524D\u7F00\uFF0C\u5355\u4F4D\u8F6C\u6362 \u7B49\uFF1B</li><li><code>less-loader / sass-loader</code>: css\u9884\u5904\u7406\u5668\uFF0C\u5728 css \u4E2D\u65B0\u589E\u4E86\u8BB8\u591A\u8BED\u6CD5\uFF0C\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\uFF1B</li></ul><p>\u7F16\u5199\u539F\u5219:</p><ul><li>\u5355\u4E00\u539F\u5219: \u6BCF\u4E2A Loader \u53EA\u505A\u4E00\u4EF6\u4E8B\uFF1B</li><li>\u94FE\u5F0F\u8C03\u7528: Webpack \u4F1A\u6309\u987A\u5E8F\u94FE\u5F0F\u8C03\u7528\u6BCF\u4E2A Loader\uFF1B</li><li>\u7EDF\u4E00\u539F\u5219: \u9075\u5FAA Webpack\u5236\u5B9A\u7684\u8BBE\u8BA1\u89C4\u5219\u548C\u7ED3\u6784\uFF0C\u8F93\u5165\u4E0E\u8F93\u51FA\u5747\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5404\u4E2A Loader \u5B8C\u5168\u72EC\u7ACB\uFF0C\u5373\u63D2\u5373\u7528\uFF1B</li></ul><h2 id="_4-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#_4-webpack-plugin" aria-hidden="true">#</a> 4 webpack Plugin</h2><blockquote><p>\u63D2\u4EF6\u7CFB\u7EDF\u662F Webpack \u6210\u529F\u7684\u4E00\u4E2A\u5173\u952E\u6027\u56E0\u7D20\u3002\u5728\u7F16\u8BD1\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u4E2D\uFF0CWebpack \u4F1A\u89E6\u53D1\u8BB8\u591A\u4E8B\u4EF6\u94A9\u5B50\uFF0CPlugin \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u6839\u636E\u9700\u6C42\u5728\u76F8\u5E94\u7684\u65F6\u95F4\u70B9\u5BF9\u6253\u5305\u5185\u5BB9\u8FDB\u884C\u5B9A\u5411\u7684\u4FEE\u6539\u3002</p></blockquote><p>\u4E00\u4E2A\u6700\u7B80\u5355\u7684 plugin \u662F\u8FD9\u6837\u7684:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Plugin{
  	// \u6CE8\u518C\u63D2\u4EF6\u65F6\uFF0C\u4F1A\u8C03\u7528 apply \u65B9\u6CD5
  	// apply \u65B9\u6CD5\u63A5\u6536 compiler \u5BF9\u8C61
  	// \u901A\u8FC7 compiler \u4E0A\u63D0\u4F9B\u7684 Api\uFF0C\u53EF\u4EE5\u5BF9\u4E8B\u4EF6\u8FDB\u884C\u76D1\u542C\uFF0C\u6267\u884C\u76F8\u5E94\u7684\u64CD\u4F5C
  	apply(compiler){
  		// compilation \u662F\u76D1\u542C\u6BCF\u6B21\u7F16\u8BD1\u5FAA\u73AF
  		// \u6BCF\u6B21\u6587\u4EF6\u53D8\u5316\uFF0C\u90FD\u4F1A\u751F\u6210\u65B0\u7684 compilation \u5BF9\u8C61\u5E76\u89E6\u53D1\u8BE5\u4E8B\u4EF6
    	compiler.plugin(&#39;compilation&#39;,function(compilation) {})
  	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u518C\u63D2\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// webpack.config.js
module.export = {
	plugins:[
		new Plugin(options),
	]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8B\u4EF6\u6D41\u673A\u5236:</p><blockquote><p>Webpack \u5C31\u50CF\u5DE5\u5382\u4E2D\u7684\u4E00\u6761\u4EA7\u54C1\u6D41\u6C34\u7EBF\u3002\u539F\u6750\u6599\u7ECF\u8FC7 Loader \u4E0E Plugin \u7684\u4E00\u9053\u9053\u5904\u7406\uFF0C\u6700\u540E\u8F93\u51FA\u7ED3\u679C\u3002</p></blockquote><ul><li>\u901A\u8FC7\u94FE\u5F0F\u8C03\u7528\uFF0C\u6309\u987A\u5E8F\u4E32\u8D77\u4E00\u4E2A\u4E2A Loader\uFF1B</li><li>\u901A\u8FC7\u4E8B\u4EF6\u6D41\u673A\u5236\uFF0C\u8BA9 Plugin \u53EF\u4EE5\u63D2\u5165\u5230\u6574\u4E2A\u751F\u4EA7\u8FC7\u7A0B\u4E2D\u7684\u6BCF\u4E2A\u6B65\u9AA4\u4E2D\uFF1B</li></ul><blockquote><p>Webpack \u4E8B\u4EF6\u6D41\u7F16\u7A0B\u8303\u5F0F\u7684\u6838\u5FC3\u662F\u57FA\u7840\u7C7B Tapable\uFF0C\u662F\u4E00\u79CD \u89C2\u5BDF\u8005\u6A21\u5F0F \u7684\u5B9E\u73B0\u4E8B\u4EF6\u7684\u8BA2\u9605\u4E0E\u5E7F\u64AD\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const { SyncHook } = require(&quot;tapable&quot;)

const hook = new SyncHook([&#39;arg&#39;])

// \u8BA2\u9605
hook.tap(&#39;event&#39;, (arg) =&gt; {
	// &#39;event-hook&#39;
	console.log(arg)
})

// \u5E7F\u64AD
hook.call(&#39;event-hook&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>Webpack</code>\xA0\u4E2D\u4E24\u4E2A\u6700\u91CD\u8981\u7684\u7C7B\xA0<code>Compiler</code>\xA0\u4E0E\xA0<code>Compilation</code>\xA0\u4FBF\u662F\u7EE7\u627F\u4E8E\xA0<code>Tapable</code>\uFF0C\u4E5F\u62E5\u6709\u8FD9\u6837\u7684\u4E8B\u4EF6\u6D41\u673A\u5236\u3002</p></blockquote><ul><li><p>Compiler: \u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3A Webpack \u5B9E\u4F8B\uFF0C\u5B83\u5305\u542B\u4E86\u5F53\u524D Webpack \u4E2D\u7684\u6240\u6709\u914D\u7F6E\u4FE1\u606F\uFF0C\u5982 options\uFF0C loaders, plugins \u7B49\u4FE1\u606F\uFF0C\u5168\u5C40\u552F\u4E00\uFF0C\u53EA\u5728\u542F\u52A8\u65F6\u5B8C\u6210\u521D\u59CB\u5316\u521B\u5EFA\uFF0C\u968F\u7740\u751F\u547D\u5468\u671F\u9010\u4E00\u4F20\u9012\uFF1B</p></li><li><p><code>Compilation</code>: \u53EF\u4EE5\u79F0\u4E3A \u7F16\u8BD1\u5B9E\u4F8B\u3002\u5F53\u76D1\u542C\u5230\u6587\u4EF6\u53D1\u751F\u6539\u53D8\u65F6\uFF0CWebpack \u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Compilation \u5BF9\u8C61\uFF0C\u5F00\u59CB\u4E00\u6B21\u65B0\u7684\u7F16\u8BD1\u3002\u5B83\u5305\u542B\u4E86\u5F53\u524D\u7684\u8F93\u5165\u8D44\u6E90\uFF0C\u8F93\u51FA\u8D44\u6E90\uFF0C\u53D8\u5316\u7684\u6587\u4EF6\u7B49\uFF0C\u540C\u65F6\u901A\u8FC7\u5B83\u63D0\u4F9B\u7684 api\uFF0C\u53EF\u4EE5\u76D1\u542C\u6BCF\u6B21\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u89E6\u53D1\u7684\u4E8B\u4EF6\u94A9\u5B50\uFF1B</p></li><li><p>\u533A\u522B:</p><ul><li><code>Compiler</code>\xA0\u5168\u5C40\u552F\u4E00\uFF0C\u4E14\u4ECE\u542F\u52A8\u751F\u5B58\u5230\u7ED3\u675F\uFF1B</li><li><code>Compilation</code>\u5BF9\u5E94\u6BCF\u6B21\u7F16\u8BD1\uFF0C\u6BCF\u8F6E\u7F16\u8BD1\u5FAA\u73AF\u5747\u4F1A\u91CD\u65B0\u521B\u5EFA\uFF1B</li></ul></li><li><p>\u5E38\u7528 Plugin:</p><ul><li>UglifyJsPlugin: \u538B\u7F29\u3001\u6DF7\u6DC6\u4EE3\u7801\uFF1B</li><li>CommonsChunkPlugin: \u4EE3\u7801\u5206\u5272\uFF1B</li><li>ProvidePlugin: \u81EA\u52A8\u52A0\u8F7D\u6A21\u5757\uFF1B</li><li>html-webpack-plugin: \u52A0\u8F7D html \u6587\u4EF6\uFF0C\u5E76\u5F15\u5165 css / js \u6587\u4EF6\uFF1B</li><li>extract-text-webpack-plugin / mini-css-extract-plugin: \u62BD\u79BB\u6837\u5F0F\uFF0C\u751F\u6210 css \u6587\u4EF6\uFF1B DefinePlugin: \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\uFF1B</li><li>optimize-css-assets-webpack-plugin: CSS \u4EE3\u7801\u53BB\u91CD\uFF1B</li><li>webpack-bundle-analyzer: \u4EE3\u7801\u5206\u6790\uFF1B</li><li>compression-webpack-plugin: \u4F7F\u7528 gzip \u538B\u7F29 js \u548C css\uFF1B</li><li>happypack: \u4F7F\u7528\u591A\u8FDB\u7A0B\uFF0C\u52A0\u901F\u4EE3\u7801\u6784\u5EFA\uFF1B</li><li>EnvironmentPlugin: \u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\uFF1B</li></ul></li><li><p>\u8C03\u7528\u63D2\u4EF6\xA0<code>apply</code>\xA0\u51FD\u6570\u4F20\u5165\xA0<code>compiler</code>\xA0\u5BF9\u8C61</p></li><li><p>\u901A\u8FC7\xA0<code>compiler</code>\xA0\u5BF9\u8C61\u76D1\u542C\u4E8B\u4EF6</p></li></ul><p>loader\u548Cplugin\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</p><blockquote><p>webapck\u9ED8\u8BA4\u53EA\u80FD\u6253\u5305JS\u548CJOSN\u6A21\u5757\uFF0C\u8981\u6253\u5305\u5176\u5B83\u6A21\u5757\uFF0C\u9700\u8981\u501F\u52A9loader\uFF0Cloader\u5C31\u53EF\u4EE5\u8BA9\u6A21\u5757\u4E2D\u7684\u5185\u5BB9\u8F6C\u5316\u6210webpack\u6216\u5176\u5B83laoder\u53EF\u4EE5\u8BC6\u522B\u7684\u5185\u5BB9\u3002</p></blockquote><ul><li><code>loader</code>\u5C31\u662F\u6A21\u5757\u8F6C\u6362\u5316\uFF0C\u6216\u53EB\u52A0\u8F7D\u5668\u3002\u4E0D\u540C\u7684\u6587\u4EF6\uFF0C\u9700\u8981\u4E0D\u540C\u7684<code>loader</code>\u6765\u5904\u7406\u3002</li><li><code>plugin</code>\u662F\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u53C2\u4E0E\u5230\u6574\u4E2Awebpack\u6253\u5305\u7684\u6D41\u7A0B\u4E2D\uFF0C\u4E0D\u540C\u7684\u63D2\u4EF6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\uFF0C\u53EF\u4EE5\u505A\u4E0D\u540C\u7684\u4E8B\u4EF6\u3002</li></ul><p>webpack\u4E2D\u90FD\u6709\u54EA\u4E9B\u63D2\u4EF6\uFF0C\u8FD9\u4E9B\u63D2\u4EF6\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</p><ul><li><code>html-webpack-plugin</code>\xA0\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2AHTML\u6587\u4EF6\uFF0C\u5E76\u628A\u6253\u5305\u597D\u7684JS\u63D2\u5165\u5230HTML\u6587\u4EF6\u4E2D</li><li><code>clean-webpack-plugin</code>\xA0\u5728\u6BCF\u4E00\u6B21\u6253\u5305\u4E4B\u524D\uFF0C\u5220\u9664\u6574\u4E2A\u8F93\u51FA\u6587\u4EF6\u5939\u4E0B\u6240\u6709\u7684\u5185\u5BB9</li><li><code>mini-css-extrcat-plugin</code>\xA0\u62BD\u79BBCSS\u4EE3\u7801\uFF0C\u653E\u5230\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u4E2D</li><li><code>optimize-css-assets-plugin</code>\xA0\u538B\u7F29css</li></ul><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u7F16\u8BD1\u7ED3\u675F\u9000\u51FA\u547D\u4EE4\u7684\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u7F16\u8BD1\u7ED3\u675F\u9000\u51FA\u547D\u4EE4\u7684\u63D2\u4EF6" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u7F16\u8BD1\u7ED3\u675F\u9000\u51FA\u547D\u4EE4\u7684\u63D2\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apply (compiler) {
  const afterEmit = (compilation, cb) =&gt; {
    cb()
    setTimeout(function () {
      process.exit(0)
    }, 1000)
  }

  compiler.plugin(&#39;after-emit&#39;, afterEmit)
}
}

module.exports = BuildEndPlugin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
export default {
  mounted () {
    var isGithub = location.href.indexOf(&#39;FE-Interview-Questions&#39;)!==-1
    var sId = isGithub ? &#39;59154049&#39; : &#39;66575297&#39;
    var script = document.createElement(&quot;script&quot;);
    script.type = &quot;text/javascript&quot;
    script.charset=&quot;UTF-8&quot;
    script.src = \`http://tajs.qq.com/stats?sId=\${sId}\`
    document.body.appendChild(script);
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-webpack\u7F16\u8BD1\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_5-webpack\u7F16\u8BD1\u4F18\u5316" aria-hidden="true">#</a> 5 webpack\u7F16\u8BD1\u4F18\u5316</h2><p>\u4EE3\u7801\u4F18\u5316:</p><blockquote><p>\u65E0\u7528\u4EE3\u7801\u6D88\u9664\uFF0C\u662F\u8BB8\u591A\u7F16\u7A0B\u8BED\u8A00\u90FD\u5177\u6709\u7684\u4F18\u5316\u624B\u6BB5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A DCE (dead code elimination)\uFF0C\u5373 \u5220\u9664\u4E0D\u53EF\u80FD\u6267\u884C\u7684\u4EE3\u7801\uFF1B</p></blockquote><p>\u4F8B\u5982\u6211\u4EEC\u7684\xA0<code>UglifyJs</code>\uFF0C\u5B83\u5C31\u4F1A\u5E2E\u6211\u4EEC\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u5220\u9664\u4E0D\u53EF\u80FD\u88AB\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var fn = function() {
	return 1;
	// \u4E0B\u9762\u4EE3\u7801\u4FBF\u5C5E\u4E8E \u4E0D\u53EF\u80FD\u6267\u884C\u7684\u4EE3\u7801\uFF1B
	// \u901A\u8FC7 UglifyJs (Webpack4+ \u5DF2\u5185\u7F6E) \u4FBF\u4F1A\u8FDB\u884C DCE\uFF1B
	var a = 1;
	return a;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6447\u6811\u4F18\u5316 (Tree-shaking)\uFF0C\u8FD9\u662F\u4E00\u79CD\u5F62\u8C61\u6BD4\u55BB\u3002\u6211\u4EEC\u628A\u6253\u5305\u540E\u7684\u4EE3\u7801\u6BD4\u55BB\u6210\u4E00\u68F5\u6811\uFF0C\u8FD9\u91CC\u5176\u5B9E\u8868\u793A\u7684\u5C31\u662F\uFF0C\u901A\u8FC7\u5DE5\u5177 &quot;\u6447&quot; \u6211\u4EEC\u6253\u5305\u540E\u7684 js \u4EE3\u7801\uFF0C\u5C06\u6CA1\u6709\u4F7F\u7528\u5230\u7684\u65E0\u7528\u4EE3\u7801 &quot;\u6447&quot; \u4E0B\u6765 (\u5220\u9664)\u3002\u5373 \u6D88\u9664\u90A3\u4E9B\u88AB \u5F15\u7528\u4E86\u4F46\u672A\u88AB\u4F7F\u7528 \u7684\u6A21\u5757\u4EE3\u7801\u3002</p></blockquote><ul><li>\u539F\u7406: \u7531\u4E8E\u662F\u5728\u7F16\u8BD1\u65F6\u4F18\u5316\uFF0C\u56E0\u6B64\u6700\u57FA\u672C\u7684\u524D\u63D0\u5C31\u662F\u8BED\u6CD5\u7684\u9759\u6001\u5206\u6790\uFF0CES6\u7684\u6A21\u5757\u673A\u5236 \u63D0\u4F9B\u4E86\u8FD9\u79CD\u53EF\u80FD\u6027\u3002\u4E0D\u9700\u8981\u8FD0\u884C\u65F6\uFF0C\u4FBF\u53EF\u8FDB\u884C\u4EE3\u7801\u5B57\u9762\u4E0A\u7684\u9759\u6001\u5206\u6790\uFF0C\u786E\u5B9A\u76F8\u5E94\u7684\u4F9D\u8D56\u5173\u7CFB\u3002</li><li>\u95EE\u9898: \u5177\u6709 \u526F\u4F5C\u7528 \u7684\u51FD\u6570\u65E0\u6CD5\u88AB\xA0<code>tree-shaking</code><ul><li>\u5728\u5F15\u7528\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\uFF0C\u9700\u8981\u53BB\u89C2\u5BDF\u5176\u5F15\u5165\u7684\u4EE3\u7801\u91CF\u662F\u4E0D\u662F\u7B26\u5408\u9884\u671F\uFF1B</li><li>\u5C3D\u91CF\u5199\u7EAF\u51FD\u6570\uFF0C\u51CF\u5C11\u51FD\u6570\u7684\u526F\u4F5C\u7528\uFF1B</li><li>\u53EF\u4F7F\u7528\xA0<code>webpack-deep-scope-plugin</code>\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4F5C\u7528\u57DF\u5206\u6790\uFF0C\u51CF\u5C11\u6B64\u7C7B\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u4F46\u4ECD\u9700\u8981\u6CE8\u610F\uFF1B</li></ul></li></ul><p>code-spliting: \u4EE3\u7801\u5206\u5272\u6280\u672F\uFF0C\u5C06\u4EE3\u7801\u5206\u5272\u6210\u591A\u4EFD\u8FDB\u884C \u61D2\u52A0\u8F7D \u6216 \u5F02\u6B65\u52A0\u8F7D\uFF0C\u907F\u514D\u6253\u5305\u6210\u4E00\u4EFD\u540E\u5BFC\u81F4\u4F53\u79EF\u8FC7\u5927\uFF0C\u5F71\u54CD\u9875\u9762\u7684\u9996\u5C4F\u52A0\u8F7D\uFF1B</p><ul><li><code>Webpack</code>\xA0\u4E2D\u4F7F\u7528\xA0<code>SplitChunksPlugin</code>\xA0\u8FDB\u884C\u62C6\u5206\uFF1B</li><li>\u6309 \u9875\u9762 \u62C6\u5206: \u4E0D\u540C\u9875\u9762\u6253\u5305\u6210\u4E0D\u540C\u7684\u6587\u4EF6\uFF1B</li><li>\u6309 \u529F\u80FD \u62C6\u5206: <ul><li>\u5C06\u7C7B\u4F3C\u4E8E\u64AD\u653E\u5668\uFF0C\u8BA1\u7B97\u5E93\u7B49\u5927\u6A21\u5757\u8FDB\u884C\u62C6\u5206\u540E\u518D\u61D2\u52A0\u8F7D\u5F15\u5165\uFF1B</li><li>\u63D0\u53D6\u590D\u7528\u7684\u4E1A\u52A1\u4EE3\u7801\uFF0C\u51CF\u5C11\u5197\u4F59\u4EE3\u7801\uFF1B</li></ul></li><li>\u6309 \u6587\u4EF6\u4FEE\u6539\u9891\u7387 \u62C6\u5206: \u5C06\u7B2C\u4E09\u65B9\u5E93\u7B49\u4E0D\u5E38\u4FEE\u6539\u7684\u4EE3\u7801\u5355\u72EC\u6253\u5305\uFF0C\u800C\u4E14\u4E0D\u6539\u53D8\u5176\u6587\u4EF6 hash \u503C\uFF0C\u80FD\u6700\u5927\u5316\u8FD0\u7528\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\uFF1B</li></ul><p>scope hoisting: \u4F5C\u7528\u57DF\u63D0\u5347\uFF0C\u5C06\u5206\u6563\u7684\u6A21\u5757\u5212\u5206\u5230\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u4E2D\uFF0C\u907F\u514D\u4E86\u4EE3\u7801\u7684\u91CD\u590D\u5F15\u5165\uFF0C\u6709\u6548\u51CF\u5C11\u6253\u5305\u540E\u7684\u4EE3\u7801\u4F53\u79EF\u548C\u8FD0\u884C\u65F6\u7684\u5185\u5B58\u635F\u8017\uFF1B</p><p>\u7F16\u8BD1\u6027\u80FD\u4F18\u5316:</p><ul><li>\u5347\u7EA7\u81F3 \u6700\u65B0 \u7248\u672C\u7684\xA0<code>webpack</code>\uFF0C\u80FD\u6709\u6548\u63D0\u5347\u7F16\u8BD1\u6027\u80FD\uFF1B</li><li>\u4F7F\u7528\xA0<code>dev-server</code>\xA0/ \u6A21\u5757\u70ED\u66FF\u6362 (<code>HMR</code>) \u63D0\u5347\u5F00\u53D1\u4F53\u9A8C\uFF1B <ul><li>\u76D1\u542C\u6587\u4EF6\u53D8\u52A8 \u5FFD\u7565 node_modules \u76EE\u5F55\u80FD\u6709\u6548\u63D0\u9AD8\u76D1\u542C\u65F6\u7684\u7F16\u8BD1\u6548\u7387\uFF1B</li></ul></li><li>\u7F29\u5C0F\u7F16\u8BD1\u8303\u56F4 <ul><li><code>modules</code>: \u6307\u5B9A\u6A21\u5757\u8DEF\u5F84\uFF0C\u51CF\u5C11\u9012\u5F52\u641C\u7D22\uFF1B</li><li><code>mainFields</code>: \u6307\u5B9A\u5165\u53E3\u6587\u4EF6\u63CF\u8FF0\u5B57\u6BB5\uFF0C\u51CF\u5C11\u641C\u7D22\uFF1B</li><li><code>noParse</code>: \u907F\u514D\u5BF9\u975E\u6A21\u5757\u5316\u6587\u4EF6\u7684\u52A0\u8F7D\uFF1B</li><li><code>includes/exclude</code>: \u6307\u5B9A\u641C\u7D22\u8303\u56F4/\u6392\u9664\u4E0D\u5FC5\u8981\u7684\u641C\u7D22\u8303\u56F4\uFF1B</li><li><code>alias</code>: \u7F13\u5B58\u76EE\u5F55\uFF0C\u907F\u514D\u91CD\u590D\u5BFB\u5740\uFF1B</li></ul></li><li><code>babel-loader</code><ul><li>\u5FFD\u7565<code>node_moudles</code>\uFF0C\u907F\u514D\u7F16\u8BD1\u7B2C\u4E09\u65B9\u5E93\u4E2D\u5DF2\u7ECF\u88AB\u7F16\u8BD1\u8FC7\u7684\u4EE3\u7801</li><li>\u4F7F\u7528<code>cacheDirectory</code>\uFF0C\u53EF\u4EE5\u7F13\u5B58\u7F16\u8BD1\u7ED3\u679C\uFF0C\u907F\u514D\u591A\u6B21\u91CD\u590D\u7F16\u8BD1</li></ul></li><li>\u591A\u8FDB\u7A0B\u5E76\u53D1 <ul><li><code>webpack-parallel-uglify-plugin</code>: \u53EF\u591A\u8FDB\u7A0B\u5E76\u53D1\u538B\u7F29 js \u6587\u4EF6\uFF0C\u63D0\u9AD8\u538B\u7F29\u901F\u5EA6\uFF1B</li><li><code>HappyPack</code>: \u591A\u8FDB\u7A0B\u5E76\u53D1\u6587\u4EF6\u7684\xA0<code>Loader</code>\xA0\u89E3\u6790\uFF1B</li></ul></li><li>\u7B2C\u4E09\u65B9\u5E93\u6A21\u5757\u7F13\u5B58: <ul><li><code>DLLPlugin</code>\xA0\u548C\xA0<code>DLLReferencePlugin</code>\xA0\u53EF\u4EE5\u63D0\u524D\u8FDB\u884C\u6253\u5305\u5E76\u7F13\u5B58\uFF0C\u907F\u514D\u6BCF\u6B21\u90FD\u91CD\u65B0\u7F16\u8BD1\uFF1B</li></ul></li><li>\u4F7F\u7528\u5206\u6790 <ul><li><code>Webpack Analyse / webpack-bundle-analyzer</code>\xA0\u5BF9\u6253\u5305\u540E\u7684\u6587\u4EF6\u8FDB\u884C\u5206\u6790\uFF0C\u5BFB\u627E\u53EF\u4F18\u5316\u7684\u5730\u65B9</li><li>\u914D\u7F6Eprofile\uFF1Atrue\uFF0C\u5BF9\u5404\u4E2A\u7F16\u8BD1\u9636\u6BB5\u8017\u65F6\u8FDB\u884C\u76D1\u63A7\uFF0C\u5BFB\u627E\u8017\u65F6\u6700\u591A\u7684\u5730\u65B9</li></ul></li><li><code>source-map</code>: <ul><li>\u5F00\u53D1:\xA0<code>cheap-module-eval-source-map</code></li><li>\u751F\u4EA7:\xA0<code>hidden-source-map</code>\uFF1B</li></ul></li></ul><h3 id="\u4F18\u5316webpack\u6253\u5305\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316webpack\u6253\u5305\u901F\u5EA6" aria-hidden="true">#</a> \u4F18\u5316webpack\u6253\u5305\u901F\u5EA6</h3><ul><li>\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4 <ul><li>\u6BD4\u5982\u901A\u8FC7\u522B\u540D</li><li><code>loader</code>\xA0\u7684\xA0<code>test</code>\uFF0C<code>include &amp; exclude</code></li></ul></li><li><code>Webpack4</code>\xA0\u9ED8\u8BA4\u538B\u7F29\u5E76\u884C</li><li><code>Happypack</code>\xA0\u5E76\u53D1\u8C03\u7528</li><li><code>babel</code>\xA0\u4E5F\u53EF\u4EE5\u7F13\u5B58\u7F16\u8BD1</li></ul><h2 id="_6-webpack-import-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_6-webpack-import-\u539F\u7406" aria-hidden="true">#</a> 6 webpack import()\u539F\u7406</h2><h3 id="\u52A8\u6001\u5BFC\u5165\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5BFC\u5165\u539F\u7406" aria-hidden="true">#</a> \u52A8\u6001\u5BFC\u5165\u539F\u7406</h3><blockquote><p>\u7528\u4E8E\u52A8\u6001\u52A0\u8F7D\u7684<code>import()</code>\u65B9\u6CD5</p></blockquote><ul><li>\u8FD9\u4E2A\u529F\u80FD\u53EF\u4EE5\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86<code>promise</code>\u5F0F\u7684\u56DE\u8C03\uFF0C\u83B7\u53D6\u52A0\u8F7D\u7684\u5305</li><li>\u5728\u4EE3\u7801\u4E2D\u6240\u6709\u88AB<code>import()</code>\u7684\u6A21\u5757\uFF0C\u90FD\u5C06\u6253\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u5305\uFF0C\u653E\u5728<code>chunk</code>\u5B58\u50A8\u7684\u76EE\u5F55\u4E0B\u3002\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u5230\u8FD9\u4E00\u884C\u4EE3\u7801\u65F6\uFF0C\u5C31\u4F1A\u81EA\u52A8\u8BF7\u6C42\u8FD9\u4E2A\u8D44\u6E90\uFF0C\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u91CC\u662F\u4E00\u4E2A\u7B80\u5355\u7684demo\u3002
// \u53EF\u4EE5\u770B\u5230\uFF0Cimport()\u7684\u8BED\u6CD5\u5341\u5206\u7B80\u5355\u3002\u8BE5\u51FD\u6570\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u5C31\u662F\u5F15\u7528\u5305\u7684\u5730\u5740
import(&#39;lodash&#39;).then(_ =&gt; {
  // Do something with lodash (a.k.a &#39;_&#39;)...
 })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack\u4E2D\u5982\u4F55\u5B9E\u73B0\u52A8\u6001\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#webpack\u4E2D\u5982\u4F55\u5B9E\u73B0\u52A8\u6001\u5BFC\u5165" aria-hidden="true">#</a> webpack\u4E2D\u5982\u4F55\u5B9E\u73B0\u52A8\u6001\u5BFC\u5165\uFF1F</h3><ol><li>\u4F7F\u7528<code>import(/** webpackChunkName: &quot;lodash&quot; **/ &#39;lodash&#39;).then(_ =&gt; {})</code>\uFF0C\u540C\u65F6\u53EF\u4EE5\u5728<code>webpack.config.js</code>\u4E2D\u914D\u7F6E\u4E00\u4E0B<code>output\u7684chunkFilename</code>\u4E3A<code>[name].bunld.js</code>\u5C06\u8981\u5BFC\u5165\u7684\u6A21\u5757\u5355\u72EC\u62BD\u79BB\u5230\u4E00\u4E2A<code>bundle</code>\u4E2D\uFF0C\u4EE5\u6B64\u5B9E\u73B0\u4EE3\u7801\u5206\u79BB\u3002</li><li>\u4F7F\u7528<code>async</code>\uFF0C\u7531\u4E8E<code>import()</code>\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A<code>promise</code>, \u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>async</code>\u51FD\u6570\u6765\u7B80\u5316\u5B83\uFF0C\u4E0D\u8FC7\u9700\u8981<code>babel</code>\u8FD9\u6837\u7684\u9884\u5904\u7406\u5668\u53CA\u5904\u7406\u8F6C\u6362<code>async</code>\u7684\u63D2\u4EF6\u3002<code>const _ = await import(/* webpackChunkName: &quot;lodash&quot; */ &#39;lodash&#39;);</code></li></ol><h2 id="_7-webpack\u6709\u54EA\u51E0\u79CD\u6587\u4EF6\u6307\u7EB9" tabindex="-1"><a class="header-anchor" href="#_7-webpack\u6709\u54EA\u51E0\u79CD\u6587\u4EF6\u6307\u7EB9" aria-hidden="true">#</a> 7 webpack\u6709\u54EA\u51E0\u79CD\u6587\u4EF6\u6307\u7EB9\uFF1F</h2><ul><li><code>hash</code>\u662F\u8DDF\u6574\u4E2A\u9879\u76EE\u7684\u6784\u5EFA\u76F8\u5173\uFF0C\u53EA\u8981\u9879\u76EE\u91CC\u6709\u6587\u4EF6\u66F4\u6539\uFF0C\u6574\u4E2A\u9879\u76EE\u6784\u5EFA\u7684<code>hash</code>\u503C\u90FD\u4F1A\u66F4\u6539\uFF0C\u5E76\u4E14\u5168\u90E8\u6587\u4EF6\u90FD\u5171\u7528\u76F8\u540C\u7684<code>hash</code>\u503C\u3002(\u7C92\u5EA6\u6574\u4E2A\u9879\u76EE)</li><li><code>chunkhash</code>\u662F\u6839\u636E\u4E0D\u540C\u7684\u5165\u53E3\u8FDB\u884C\u4F9D\u8D56\u6587\u4EF6\u89E3\u6790\uFF0C\u6784\u5EFA\u5BF9\u5E94\u7684<code>chunk</code>(\u6A21\u5757)\uFF0C\u751F\u6210\u5BF9\u5E94\u7684<code>hash</code>\u503C\u3002\u53EA\u6709\u88AB\u4FEE\u6539\u7684<code>chunk</code>(\u6A21\u5757)\u5728\u91CD\u65B0\u6784\u5EFA\u4E4B\u540E\u624D\u4F1A\u751F\u6210\u65B0\u7684<code>hash</code>\u503C\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5176\u5B83\u7684<code>chunk</code>\u3002(\u7C92\u5EA6<code>entry</code>\u7684\u6BCF\u4E2A\u5165\u53E3\u6587\u4EF6)</li><li><code>contenthash</code>\u662F\u8DDF\u6BCF\u4E2A\u751F\u6210\u7684\u6587\u4EF6\u6709\u5173\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684<code>hash</code>\u503C\u3002\u5F53\u8981\u6784\u5EFA\u7684\u6587\u4EF6\u5185\u5BB9\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u5C31\u4F1A\u751F\u6210\u65B0\u7684<code>hash</code>\u503C\uFF0C\u4E14\u8BE5\u6587\u4EF6\u7684\u6539\u53D8\u5E76\u4E0D\u4F1A\u5F71\u54CD\u548C\u5B83\u540C\u4E00\u4E2A\u6A21\u5757\u4E0B\u7684\u5176\u5B83\u6587\u4EF6\u3002(\u7C92\u5EA6\u6BCF\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9)</li></ul><h3 id="webpack\u5982\u679C\u4F7F\u7528\u4E86hash\u547D\u540D-\u90A3\u662F\u6BCF\u6B21\u90FD\u4F1A\u91CD\u5199\u751F\u6210hash\u5417" tabindex="-1"><a class="header-anchor" href="#webpack\u5982\u679C\u4F7F\u7528\u4E86hash\u547D\u540D-\u90A3\u662F\u6BCF\u6B21\u90FD\u4F1A\u91CD\u5199\u751F\u6210hash\u5417" aria-hidden="true">#</a> webpack\u5982\u679C\u4F7F\u7528\u4E86hash\u547D\u540D\uFF0C\u90A3\u662F\u6BCF\u6B21\u90FD\u4F1A\u91CD\u5199\u751F\u6210hash\u5417</h3><p>\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u5982\u679C\u662F<code>hash</code>\u7684\u8BDD\uFF0C\u662F\u548C\u6574\u4E2A\u9879\u76EE\u6709\u5173\u7684\uFF0C\u6709\u4E00\u5904\u6587\u4EF6\u53D1\u751F\u66F4\u6539\u5219\u6240\u6709\u6587\u4EF6\u7684<code>hash</code>\u503C\u90FD\u4F1A\u53D1\u751F\u6539\u53D8\u4E14\u5B83\u4EEC\u5171\u7528\u4E00\u4E2A<code>hash</code>\u503C\uFF1B</li><li>\u5982\u679C\u662F<code>chunkhash</code>\u7684\u8BDD\uFF0C\u53EA\u548C<code>entry</code>\u7684\u6BCF\u4E2A\u5165\u53E3\u6587\u4EF6\u6709\u5173\uFF0C\u4E5F\u5C31\u662F\u540C\u4E00\u4E2A<code>chunk</code>\u4E0B\u7684\u6587\u4EF6\u6709\u6240\u6539\u52A8\u8BE5<code>chunk</code>\u4E0B\u7684\u6587\u4EF6\u7684<code>hash</code>\u503C\u5C31\u4F1A\u53D1\u751F\u6539\u53D8</li><li>\u5982\u679C\u662F<code>contenthash</code>\u7684\u8BDD\uFF0C\u548C\u6BCF\u4E2A\u751F\u6210\u7684\u6587\u4EF6\u6709\u5173\uFF0C\u53EA\u6709\u5F53\u8981\u6784\u5EFA\u7684\u6587\u4EF6\u5185\u5BB9\u53D1\u751F\u6539\u53D8\u65F6\u624D\u4F1A\u7ED9\u8BE5\u6587\u4EF6\u751F\u6210\u65B0\u7684<code>hash</code>\u503C\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5176\u5B83\u6587\u4EF6\u3002</li></ul><h2 id="_8-webpack\u4E2D\u5982\u4F55\u5904\u7406\u56FE\u7247\u7684" tabindex="-1"><a class="header-anchor" href="#_8-webpack\u4E2D\u5982\u4F55\u5904\u7406\u56FE\u7247\u7684" aria-hidden="true">#</a> 8 webpack\u4E2D\u5982\u4F55\u5904\u7406\u56FE\u7247\u7684\uFF1F</h2><p>\u5728<code>webpack</code>\u4E2D\u6709\u4E24\u79CD\u5904\u7406\u56FE\u7247\u7684<code>loader</code>\uFF1A</p><ul><li><code>file-loader</code>\uFF1A\u89E3\u51B3<code>CSS</code>\u7B49\u4E2D\u5F15\u5165\u56FE\u7247\u7684\u8DEF\u5F84\u95EE\u9898\uFF1B(\u89E3\u51B3\u901A\u8FC7<code>url</code>,<code>import/require()</code>\u7B49\u5F15\u5165\u56FE\u7247\u7684\u95EE\u9898)</li><li><code>url-loader</code>\uFF1A\u5F53\u56FE\u7247\u5C0F\u4E8E\u8BBE\u7F6E\u7684<code>limit</code>\u53C2\u6570\u503C\u65F6\uFF0C<code>url-loader</code>\u5C06\u56FE\u7247\u8FDB\u884C<code>base64</code>\u7F16\u7801(\u5F53\u9879\u76EE\u4E2D\u6709\u5F88\u591A\u56FE\u7247\uFF0C\u901A\u8FC7<code>url-loader</code>\u8FDB\u884C<code>base64</code>\u7F16\u7801\u540E\u4F1A\u51CF\u5C11<code>http</code>\u8BF7\u6C42\u6570\u91CF\uFF0C\u63D0\u9AD8\u6027\u80FD)\uFF0C\u5927\u4E8Elimit\u53C2\u6570\u503C\uFF0C\u5219\u4F7F\u7528<code>file-loader</code>\u62F7\u8D1D\u56FE\u7247\u5E76\u8F93\u51FA\u5230\u7F16\u8BD1\u76EE\u5F55\u4E2D\uFF1B</li></ul><h3 id="_9-webpack\u5E38\u7528\u63D2\u4EF6\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_9-webpack\u5E38\u7528\u63D2\u4EF6\u603B\u7ED3" aria-hidden="true">#</a> 9 webpack\u5E38\u7528\u63D2\u4EF6\u603B\u7ED3</h3><p>1. \u529F\u80FD\u7C7B</p><p>1.1 html-webpack-plugin</p><blockquote><p>\u81EA\u52A8\u751F\u6210<code>html</code>\uFF0C\u57FA\u672C\u7528\u6CD5\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new HtmlWebpackPlugin({
  filename: &#39;index.html&#39;, // \u751F\u6210\u6587\u4EF6\u540D
  template: path.join(process.cwd(), &#39;./index.html&#39;) // \u6A21\u73ED\u6587\u4EF6
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 copy-webpack-plugin</p><blockquote><p>\u62F7\u8D1D\u8D44\u6E90\u63D2\u4EF6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new CopyWebpackPlugin([
  {
    from: path.join(process.cwd(), &#39;./vendor/&#39;),
    to: path.join(process.cwd(), &#39;./dist/&#39;),
    ignore: [&#39;*.json&#39;]
  }
])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3 webpack-manifest-plugin &amp;&amp; assets-webpack-plugin</p><blockquote><p>\u4FE9\u4E2A\u63D2\u4EF6\u6548\u679C\u4E00\u81F4\uFF0C\u90FD\u662F\u751F\u6210\u7F16\u8BD1\u7ED3\u679C\u7684\u8D44\u6E90\u5355\uFF0C\u53EA\u662F\u8D44\u6E90\u5355\u7684\u6570\u636E\u7ED3\u6784\u4E0D\u4E00\u81F4\u800C\u5DF2</p></blockquote><p>webpack-manifest-plugin \u57FA\u672C\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  plugins: [
    new ManifestPlugin()
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>assets-webpack-plugin \u57FA\u672C\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  plugins: [
    new AssetsPlugin()
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4 clean-webpack-plugin</p><blockquote><p>\u5728\u7F16\u8BD1\u4E4B\u524D\u6E05\u7406\u6307\u5B9A\u76EE\u5F55\u6307\u5B9A\u5185\u5BB9</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6E05\u7406\u76EE\u5F55
const pathsToClean = [
  &#39;dist&#39;,
  &#39;build&#39;
]

// \u6E05\u7406\u53C2\u6570
const cleanOptions = {
  exclude:  [&#39;shared.js&#39;], // \u8DF3\u8FC7\u6587\u4EF6
}
module.exports = {
  // ...
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.5 compression-webpack-plugin</p><blockquote><p>\u63D0\u4F9B\u5E26\xA0<code>Content-Encoding</code>\xA0\u7F16\u7801\u7684\u538B\u7F29\u7248\u7684\u8D44\u6E90</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  plugins: [
    new CompressionPlugin()
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.6 progress-bar-webpack-plugin</p><blockquote><p>\u7F16\u8BD1\u8FDB\u5EA6\u6761\u63D2\u4EF6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  //...
  plugins: [
    new ProgressBarPlugin()
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2. \u4EE3\u7801\u76F8\u5173\u7C7B</p><p>2.1 webpack.ProvidePlugin</p><blockquote><p>\u81EA\u52A8\u52A0\u8F7D\u6A21\u5757\uFF0C\u5982\xA0<code>$</code>\xA0\u51FA\u73B0\uFF0C\u5C31\u4F1A\u81EA\u52A8\u52A0\u8F7D\u6A21\u5757\uFF1B<code>$</code>\xA0\u9ED8\u8BA4\u4E3A<code>&#39;jquery&#39;</code>\u7684<code>exports</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new webpack.ProvidePlugin({
  $: &#39;jquery&#39;,
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2 webpack.DefinePlugin</p><blockquote><p>\u5B9A\u4E49\u5168\u5C40\u5E38\u91CF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new webpack.DefinePlugin({
  &#39;p<wbr>rocess.env&#39;: {
    NODE_ENV: JSON.stringify(p<wbr>rocess.env.NODE_ENV)
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3 mini-css-extract-plugin &amp;&amp; extract-text-webpack-plugin</p><blockquote><p>\u63D0\u53D6css\u6837\u5F0F\uFF0C\u5BF9\u6BD4</p></blockquote><ul><li><code>mini-css-extract-plugin</code>\xA0\u4E3A<code>webpack4</code>\u53CA\u4EE5\u4E0A\u63D0\u4F9B\u7684<code>plugin</code>\uFF0C\u652F\u6301<code>css chunk</code></li><li><code>extract-text-webpack-plugin</code>\xA0\u53EA\u80FD\u5728<code>webpack3</code>\xA0\u53CA\u4E00\u4E0B\u7684\u7248\u672C\u4F7F\u7528\uFF0C\u4E0D\u652F\u6301<code>css chunk</code></li></ul><p>\u57FA\u672C\u7528\u6CD5 extract-text-webpack-plugin</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const ExtractTextPlugin = require(&quot;extract-text-webpack-plugin&quot;);

module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: &quot;style-loader&quot;,
          use: &quot;css-loader&quot;
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(&quot;styles.css&quot;),
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u672C\u7528\u6CD5 mini-css-extract-plugin</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);
module.exports = {
    module: {
    rules: [
      {
        test: /\\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: &#39;/&#39;  // chunk publicPath
            }
          },
          &quot;css-loader&quot;
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: &quot;[name].css&quot;, // \u4E3B\u6587\u4EF6\u540D
      chunkFilename: &quot;[id].css&quot;  // chunk\u6587\u4EF6\u540D
    })
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3. \u7F16\u8BD1\u7ED3\u679C\u4F18\u5316\u7C7B</p><p>3.1 wbepack.IgnorePlugin</p><blockquote><p>\u5FFD\u7565<code>regExp</code>\u5339\u914D\u7684\u6A21\u5757</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new webpack.IgnorePlugin(/^\\.\\/locale$/, /moment$/)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.2 uglifyjs-webpack-plugin</p><blockquote><p>\u4EE3\u7801\u4E11\u5316\uFF0C\u7528\u4E8Ejs\u538B\u7F29</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  //...
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,   // \u5F00\u542F\u7F13\u5B58
      parallel: true, // \u5F00\u542F\u591A\u7EBF\u7A0B\u7F16\u8BD1
      sourceMap: true,  // \u662F\u5426sourceMap
      uglifyOptions: {  // \u4E11\u5316\u53C2\u6570
        comments: false,
        warnings: false,
        compress: {
          unused: true,
          dead_code: true,
          collapse_vars: true,
          reduce_vars: true
        },
        output: {
          comments: false
        }
      }
    }]
  }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.3 optimize-css-assets-webpack-plugin</p><blockquote><p>css\u538B\u7F29\uFF0C\u4E3B\u8981\u4F7F\u7528\xA0<code>cssnano</code>\xA0\u538B\u7F29\u5668 https://github.com/cssnano/cssnano</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  //...
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({
      cssProcessor: require(&#39;cssnano&#39;),   // css \u538B\u7F29\u4F18\u5316\u5668
      cssProcessorOptions: { discardComments: { removeAll: true } } // \u53BB\u9664\u6240\u6709\u6CE8\u91CA
    })]
  }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4 webpack-md5-hash</p><blockquote><p>\u4F7F\u4F60\u7684<code>chunk</code>\u6839\u636E\u5185\u5BB9\u751F\u6210<code>md5</code>\uFF0C\u7528\u8FD9\u4E2A<code>md5</code>\u53D6\u4EE3\xA0<code>webpack chunkhash</code>\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var WebpackMd5Hash = require(&#39;webpack-md5-hash&#39;);

module.exports = {
  // ...
  output: {
    //...
    chunkFilename: &quot;[chunkhash].[id].chunk.js&quot;
  },
  plugins: [
    new WebpackMd5Hash()
  ]
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.5 SplitChunksPlugin</p><ul><li><code>CommonChunkPlugin</code>\xA0\u7684\u540E\u4E16\uFF0C\u7528\u4E8E<code>chunk</code>\u5207\u5272\u3002</li></ul><blockquote><p><code>webpack</code>\xA0\u628A\xA0<code>chunk</code>\xA0\u5206\u4E3A\u4E24\u79CD\u7C7B\u578B\uFF0C\u4E00\u79CD\u662F\u521D\u59CB\u52A0\u8F7D<code>initial chunk</code>\uFF0C\u53E6\u5916\u4E00\u79CD\u662F\u5F02\u6B65\u52A0\u8F7D\xA0<code>async chunk</code>\uFF0C\u5982\u679C\u4E0D\u914D\u7F6E<code>SplitChunksPlugin</code>\uFF0C<code>webpack</code>\u4F1A\u5728<code>production</code>\u7684\u6A21\u5F0F\u4E0B\u81EA\u52A8\u5F00\u542F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>webpack</code>\u4F1A\u5C06\xA0<code>node_modules</code>\xA0\u4E0B\u7684\u6240\u6709\u6A21\u5757\u5B9A\u4E49\u4E3A\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757\uFF0C\u5E76\u5206\u6790\u4F60\u7684\xA0<code>entry</code>\u3001\u52A8\u6001\u52A0\u8F7D\uFF08<code>import()</code>\u3001<code>require.ensure</code>\uFF09\u6A21\u5757\uFF0C\u627E\u51FA\u8FD9\u4E9B\u6A21\u5757\u4E4B\u95F4\u5171\u7528\u7684<code>node_modules</code>\u4E0B\u7684\u6A21\u5757\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u6A21\u5757\u63D0\u53D6\u5230\u5355\u72EC\u7684<code>chunk</code>\u4E2D\uFF0C\u5728\u9700\u8981\u7684\u65F6\u5019\u5F02\u6B65\u52A0\u8F7D\u5230\u9875\u9762\u5F53\u4E2D\uFF0C\u5176\u4E2D\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: &#39;async&#39;, // \u5F02\u6B65\u52A0\u8F7Dchunk
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: &#39;~&#39;, // \u6587\u4EF6\u540D\u4E2Dchunk\u5206\u9694\u7B26
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\\\/]node_modules[\\\\/]/,  //
          priority: -10
        },
        default: {
          minChunks: 2,  // \u6700\u5C0F\u7684\u5171\u4EABchunk\u6570
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4. \u7F16\u8BD1\u4F18\u5316\u7C7B</p><p>4.1 DllPlugin &amp;&amp; DllReferencePlugin &amp;&amp; autodll-webpack-plugin</p><ul><li><code>dllPlugin</code>\u5C06\u6A21\u5757\u9884\u5148\u7F16\u8BD1\uFF0C<code>DllReferencePlugin</code>\xA0\u5C06\u9884\u5148\u7F16\u8BD1\u597D\u7684\u6A21\u5757\u5173\u8054\u5230\u5F53\u524D\u7F16\u8BD1\u4E2D\uFF0C\u5F53\xA0<code>webpack</code>\xA0\u89E3\u6790\u5230\u8FD9\u4E9B\u6A21\u5757\u65F6\uFF0C\u4F1A\u76F4\u63A5\u4F7F\u7528\u9884\u5148\u7F16\u8BD1\u597D\u7684\u6A21\u5757\u3002</li><li><code>autodll-webpack-plugin</code>\xA0\u76F8\u5F53\u4E8E\xA0<code>dllPlugin</code>\xA0\u548C\xA0<code>DllReferencePlugin</code>\xA0\u7684\u7B80\u5316\u7248\uFF0C\u5176\u5B9E\u672C\u8D28\u4E5F\u662F\u4F7F\u7528\xA0<code>dllPlugin &amp;&amp; DllReferencePlugin</code>\uFF0C\u5B83\u4F1A\u5728\u7B2C\u4E00\u6B21\u7F16\u8BD1\u7684\u65F6\u5019\u5C06\u914D\u7F6E\u597D\u7684\u9700\u8981\u9884\u5148\u7F16\u8BD1\u7684\u6A21\u5757\u7F16\u8BD1\u5728\u7F13\u5B58\u4E2D\uFF0C\u7B2C\u4E8C\u6B21\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u89E3\u6790\u5230\u8FD9\u4E9B\u6A21\u5757\u5C31\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\uFF0C\u800C\u4E0D\u662F\u53BB\u7F16\u8BD1\u8FD9\u4E9B\u6A21\u5757</li></ul><p>dllPlugin \u57FA\u672C\u7528\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const output = {
  filename: &#39;[name].js&#39;,
  library: &#39;[name]_library&#39;,
  path: &#39;./vendor/&#39;
}

module.exports = {
  entry: {
    vendor: [&#39;react&#39;, &#39;react-dom&#39;]  // \u6211\u4EEC\u9700\u8981\u4E8B\u5148\u7F16\u8BD1\u7684\u6A21\u5757\uFF0C\u7528entry\u8868\u793A
  },
  output: output,
  plugins: [
    new webpack.DllPlugin({  // \u4F7F\u7528dllPlugin
      path: path.join(output.path, \`\${output.filename}.json\`),
      name: output.library // \u5168\u5C40\u53D8\u91CF\u540D\uFF0C \u4E5F\u5C31\u662F window \u4E0B \u7684 [output.library]
    })
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DllReferencePlugin \u57FA\u672C\u7528\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const manifest = path.resolve(process.cwd(), &#39;vendor&#39;, &#39;vendor.js.json&#39;)

module.exports = {
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(manifest), // \u5F15\u8FDBdllPlugin\u7F16\u8BD1\u7684json\u6587\u4EF6
      name: &#39;vendor_library&#39; // \u5168\u5C40\u53D8\u91CF\u540D\uFF0C\u4E0EdllPlugin\u58F0\u660E\u7684\u4E00\u81F4
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>autodll-webpack-plugin \u57FA\u672C\u7528\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  plugins: [
    new AutoDllPlugin({
      inject: true, // \u4E0E html-webpack-plugin \u7ED3\u5408\u4F7F\u7528\uFF0C\u6CE8\u5165html\u4E2D
      filename: &#39;[name].js&#39;,
      entry: {
        vendor: [
          &#39;react&#39;,
          &#39;react-dom&#39;
        ]
      }
    })
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.2 happypack &amp;&amp; thread-loader</p><blockquote><p>\u591A\u7EBF\u7A0B\u7F16\u8BD1\uFF0C\u52A0\u5FEB\u7F16\u8BD1\u901F\u5EA6\uFF0C<code>thread-loader</code>\u4E0D\u53EF\u4EE5\u548C\xA0<code>mini-css-extract-plugin</code>\xA0\u7ED3\u5408\u4F7F\u7528</p></blockquote><p>happypack \u57FA\u672C\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const HappyPack = require(&#39;happypack&#39;);
const os = require(&#39;os&#39;);
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const happyLoaderId = &#39;happypack-for-react-babel-loader&#39;;

module.exports = {
  module: {
    rules: [{
      test: /\\.jsx?$/,
      loader: &#39;happypack/loader&#39;,
      query: {
        id: happyLoaderId
      },
      include: [path.resolve(process.cwd(), &#39;src&#39;)]
    }]
  },
  plugins: [new HappyPack({
    id: happyLoaderId,
    threadPool: happyThreadPool,
    loaders: [&#39;babel-loader&#39;]
  })]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>thread-loader \u57FA\u672C\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  module: {
    rules: [
      {
        test: /\\.js$/,
        include: path.resolve(&quot;src&quot;),
        use: [
          &quot;thread-loader&quot;,
          // your expensive loader (e.g babel-loader)
          &quot;babel-loader&quot;
        ]
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.3 hard-source-webpack-plugin &amp;&amp; cache-loader</p><blockquote><p>\u4F7F\u7528\u6A21\u5757\u7F16\u8BD1\u7F13\u5B58\uFF0C\u52A0\u5FEB\u7F16\u8BD1\u901F\u5EA6</p></blockquote><p>hard-source-webpack-plugin \u57FA\u672C\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  plugins: [
    new HardSourceWebpackPlugin()
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cache-loader \u57FA\u672C\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  module: {
    rules: [
      {
        test: /\\.ext$/,
        use: [
          &#39;cache-loader&#39;,
          ...loaders
        ],
        include: path.resolve(&#39;src&#39;)
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5. \u7F16\u8BD1\u5206\u6790\u7C7B</p><p>5.1 webpack-bundle-analyzer</p><blockquote><p>\u7F16\u8BD1\u6A21\u5757\u5206\u6790\u63D2\u4EF6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new BundleAnalyzerPlugin({
  analyzerMode: &#39;server&#39;,
  analyzerHost: &#39;127.0.0.1&#39;,
  analyzerPort: 8889,
  reportFilename: &#39;report.html&#39;,
  defaultSizes: &#39;parsed&#39;,
  generateStatsFile: false,
  statsFilename: &#39;stats.json&#39;,
  statsOptions: null,
  logLevel: &#39;info&#39;
}),

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.2 stats-webpack-plugin &amp;&amp; PrefetchPlugin</p><blockquote><p><code>stats-webpack-plugin</code>\xA0\u5C06\u6784\u5EFA\u7684\u7EDF\u8BA1\u4FE1\u606F\u5199\u5165\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u53EF\u5728 http://webpack.github.io/analyse\u4E2D\u4E0A\u4F20\u8FDB\u884C\u7F16\u8BD1\u5206\u6790\uFF0C\u5E76\u6839\u636E\u5206\u6790\u7ED3\u679C\uFF0C\u53EF\u4F7F\u7528\xA0<code>PrefetchPlugin</code>\xA0\u5BF9\u90E8\u5206\u6A21\u5757\u8FDB\u884C\u9884\u89E3\u6790\u7F16\u8BD1</p></blockquote><p>stats-webpack-plugin \u57FA\u672C\u7528\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  plugins: [
    new StatsPlugin(&#39;stats.json&#39;, {
      chunkModules: true,
      exclude: [/node_modules[\\\\\\/]react/]
    })
  ]
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PrefetchPlugin \u57FA\u672C\u7528\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  plugins: [
    new webpack.PrefetchPlugin(&#39;/web/&#39;, &#39;app/modules/HeaderNav.jsx&#39;),
    new webpack.PrefetchPlugin(&#39;/web/&#39;, &#39;app/pages/FrontPage.jsx&#39;)
];
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.3 speed-measure-webpack-plugin</p><blockquote><p>\u7EDF\u8BA1\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\uFF0C\u5404<code>loader</code>\u548C<code>plugin</code>\u4F7F\u7528\u7684\u65F6\u95F4</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const SpeedMeasurePlugin = require(&quot;speed-measure-webpack-plugin&quot;);

const smp = new SpeedMeasurePlugin();

const webpackConfig = {
  plugins: [
    new MyPlugin(),
    new MyOtherPlugin()
  ]
}
module.exports = smp.wrap(webpackConfig);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-\u62BD\u8C61\u8BED\u6CD5\u6811ast" tabindex="-1"><a class="header-anchor" href="#_10-\u62BD\u8C61\u8BED\u6CD5\u6811ast" aria-hidden="true">#</a> 10 \u62BD\u8C61\u8BED\u6CD5\u6811AST</h2><blockquote><p>\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08<code>Abstract Syntax Tree</code>\uFF09\uFF0C\u662F\u5C06\u4EE3\u7801\u9010\u5B57\u6BCD\u89E3\u6790\u6210\xA0\u6811\u72B6\u5BF9\u8C61\xA0\u7684\u5F62\u5F0F\u3002\u8FD9\u662F\u8BED\u8A00\u4E4B\u95F4\u7684\u8F6C\u6362\u3001\u4EE3\u7801\u8BED\u6CD5\u68C0\u67E5\u3001\u4EE3\u7801\u98CE\u683C\u68C0\u67E5\u3001\u4EE3\u7801\u683C\u5F0F\u5316\u3001\u4EE3\u7801\u9AD8\u4EAE\u3001\u4EE3\u7801\u9519\u8BEF\u63D0\u793A\u3001\u4EE3\u7801\u81EA\u52A8\u8865\u5168\u7B49\u7B49\u7684\u57FA\u7840</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8F6C\u6362\u524D
function square(n) {
  return n * n
}

// \u8F6C\u6362\u540E
const element = {
  type: &quot;FunctionDeclaration&quot;,
  start: 0,
  end: 35,
  id: Identifier,
  expression: false,
  generator: false,
  params: [1, element],
  body: BlockStatement
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-\u4F7F\u7528babel-loader\u4F1A\u6709\u54EA\u4E9B\u95EE\u9898-\u53EF\u4EE5\u600E\u6837\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_11-\u4F7F\u7528babel-loader\u4F1A\u6709\u54EA\u4E9B\u95EE\u9898-\u53EF\u4EE5\u600E\u6837\u4F18\u5316" aria-hidden="true">#</a> 11 \u4F7F\u7528babel-loader\u4F1A\u6709\u54EA\u4E9B\u95EE\u9898\uFF1F\u53EF\u4EE5\u600E\u6837\u4F18\u5316\uFF1F</h2><ol><li>\u4F1A\u4F7F\u5F97\u7F16\u8BD1\u5F88\u6162\u3002\u89E3\u51B3\u529E\u6CD5\u662F\u53EF\u4EE5\u5728<code>webpack</code>\u7684<code>babel-loader</code>\u914D\u7F6E\u4E2D\u4F7F\u7528<code>exclude</code>\u8FD9\u4E2A\u53EF\u9009\u9879\u6765\u53BB\u9664\u4E00\u4E9B\u4E0D\u9700\u8981\u7F16\u8BD1\u7684\u6587\u4EF6\u5939(\u4F8B\u5982<code>node_modules</code>\u548C<code>bower_components</code>)\uFF0C\u53E6\u4E00\u79CD\u53EF\u4EE5\u8BBE\u7F6E<code>cacheDirectory</code>\u9009\u9879\u4E3A<code>true</code>, \u5F00\u542F\u7F13\u5B58, \u8F6C\u8BD1\u7684\u7ED3\u679C\u5C06\u4F1A\u7F13\u5B58\u5230\u6587\u4EF6\u7CFB\u7EDF\u4E2D, \u8FD9\u6837\u4F7F<code>babel-loader</code>\u81F3\u5C11\u63D0\u901F\u4E24\u500D(\u4EE3\u7801\u91CF\u8D8A\u591A\u6548\u679C\u5E94\u8BE5\u8D8A\u660E\u663E)\u3002</li><li><code>babel-loader</code>\u4F7F\u5F97\u6253\u5305\u6587\u4EF6\u4F53\u79EF\u8FC7\u5927\u3002Babel \u5BF9\u4E00\u4E9B\u516C\u5171\u65B9\u6CD5\u4F7F\u7528\u4E86\u975E\u5E38\u5C0F\u7684\u8F85\u52A9\u4EE3\u7801, \u6BD4\u5982\xA0<code>_extend</code>.\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u88AB\u6DFB\u52A0\u5230\u6BCF\u4E00\u4E2A\u9700\u8981\u5B83\u7684\u6587\u4EF6\u4E2D, \u6240\u4EE5\u4F1A\u5BFC\u81F4\u6253\u5305\u6587\u4EF6\u4F53\u79EF\u8FC7\u5927.\u89E3\u51B3\u529E\u6CD5: \u5F15\u5165<code>babel runtime</code>\u4F5C\u4E3A\u4E00\u4E2A\u5355\u72EC\u7684\u6A21\u5757, \u6765\u907F\u514D\u91CD\u590D\u3002\u4E5F\u5C31\u662F\u53EF\u4EE5\u4F7F\u7528<code>@babel/plugin-transform-runtime</code>\u548C<code>babel-runtime</code>\u3002</li></ol><h2 id="_12-babel-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_12-babel-\u539F\u7406" aria-hidden="true">#</a> 12 Babel \u539F\u7406</h2><blockquote><p><code>babel</code>\xA0\u7684\u7F16\u8BD1\u8FC7\u7A0B\u5206\u4E3A\u4E09\u4E2A\u9636\u6BB5\uFF1Aparsing\u3001transforming\u3001generating\uFF0C\u4EE5 ES6 \u7F16\u8BD1\u4E3A ES5 \u4F5C\u4E3A\u4F8B\u5B50\uFF1A</p></blockquote><ol><li><code>ES6</code>\xA0\u4EE3\u7801\u8F93\u5165\uFF1B</li><li><code>babylon</code>\xA0\u8FDB\u884C\u89E3\u6790\u5F97\u5230 AST\uFF1B</li><li><code>plugin</code>\xA0\u7528\xA0<code>babel-traverse</code>\xA0\u5BF9\xA0<code>AST</code>\u6811\u8FDB\u884C\u904D\u5386\u7F16\u8BD1\uFF0C\u5F97\u5230\u65B0\u7684\xA0<code>AST</code>\u6811\uFF1B</li><li>\u7528\xA0<code>babel-generator</code>\xA0\u901A\u8FC7\xA0<code>AST</code>\u6811\u751F\u6210\xA0<code>ES5</code>\xA0\u4EE3\u7801\u3002</li></ol>`,176),x={href:"http://interview.poetries.top/principle-docs/webpack/05-Babel%E5%8E%9F%E7%90%86%E5%8F%8A%E5%85%B6%E4%BD%BF%E7%94%A8.html",target:"_blank",rel:"noopener noreferrer"},k=a("Babel\u539F\u7406\u53CA\u5176\u4F7F\u7528(opens new window)"),_=i(`<h2 id="_13-babel\u662F\u5982\u4F55\u7F16\u8BD1class\u7684" tabindex="-1"><a class="header-anchor" href="#_13-babel\u662F\u5982\u4F55\u7F16\u8BD1class\u7684" aria-hidden="true">#</a> 13 Babel\u662F\u5982\u4F55\u7F16\u8BD1Class\u7684\uFF1F</h2><p>\u5C31\u62FF\u4E0B\u9762\u7684\u7C7B\u6765\u8BF4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Person {
  constructor ({ name }) {
    this.name = name
    this.getSex = function () {
      return &#39;boy&#39;
    }
  }
  getName () {
    return this.name
  }
  static getLook () {
    return &#39;sunshine&#39;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u5728\u4F7F\u7528<code>babel</code>\u7684\u8FD9\u4E9B<code>plugin</code>\u6216\u8005\u4F7F\u7528<code>preset</code>\u7684\u65F6\u5019\uFF0C\u6709\u4E00\u4E2A\u914D\u7F6E\u5C5E\u6027<code>loose</code>\u5B83\u9ED8\u8BA4\u662F\u4E3A<code>false</code>\uFF0C\u5728\u8FD9\u6837\u7684\u6761\u4EF6\u4E0B\uFF1A</p><p><code>Class</code>\u7F16\u8BD1\u540E\uFF1A</p><ul><li>\u603B\u4F53\u6765\u8BF4<code>Class</code>\u4F1A\u88AB\u5C01\u88C5\u6210\u4E00\u4E2A<code>IIFE</code>\u7ACB\u5373\u6267\u884C\u51FD\u6570</li><li>\u7ACB\u5373\u6267\u884C\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u4E0E\u7C7B\u540C\u540D\u7684\u6784\u9020\u51FD\u6570</li><li>\u5B9E\u4F8B\u5C5E\u6027\u548C\u65B9\u6CD5\u5B9A\u4E49\u5728\u6784\u9020\u51FD\u6570\u5185(\u5982<code>name</code>\u548C<code>getSex()</code>)</li><li>\u7C7B\u5185\u90E8\u58F0\u660E\u7684\u5C5E\u6027\u65B9\u6CD5(<code>getName</code>)\u548C\u9759\u6001\u5C5E\u6027\u65B9\u6CD5(<code>getLook</code>)\u662F\u4F1A\u88AB<code>Object.defineProperty</code>\u6240\u5904\u7406\uFF0C\u5C06\u5176\u53EF\u679A\u4E3E\u5C5E\u6027\u8BBE\u7F6E\u4E3A<code>false</code></li></ul><p>\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;use strict&quot;;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError(&quot;Cannot call a class as a function&quot;);
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i &lt; props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (&quot;value&quot; in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Person = /*#__PURE__*/ (function () {
  function Person(_ref) {
    var name = _ref.name;

    _classCallCheck(this, Person);

    this.name = name;

    this.getSex = function () {
      return &quot;boy&quot;;
    };
  }

  _createClass(
    Person,
    [
      {
        key: &quot;getName&quot;,
        value: function getName() {
          return this.name;
        },
      },
    ],
    [
      {
        key: &quot;getLook&quot;,
        value: function getLook() {
          return &quot;sunshine&quot;;
        },
      },
    ]
  );

  return Person;
})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48<code>Babel</code>\u5BF9\u4E8E\u7C7B\u7684\u5904\u7406\u4F1A\u4F7F\u7528<code>Object.defineProperty</code>\u8FD9\u79CD\u5F62\u5F0F\u5462\uFF1F\u5B83\u548C\u76F4\u63A5\u4F7F\u7528\u539F\u578B\u94FE\u6709\u4EC0\u4E48\u4E0D\u540C\u5417\uFF1F</p><ul><li>\u901A\u8FC7\u539F\u578B\u94FE\u58F0\u660E\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u662F\u53EF\u679A\u4E3E\u7684\uFF0C\u4E5F\u5C31\u662F\u53EF\u4EE5\u88AB<code>for...of...</code>\u641C\u5BFB\u5230</li><li>\u800C\u7C7B\u5185\u90E8\u58F0\u660E\u7684\u65B9\u6CD5\u662F\u4E0D\u53EF\u679A\u4E3E\u7684</li></ul><p>\u6240\u4EE5\uFF0Cbabel\u4E3A\u4E86\u7B26\u5408ES6\u771F\u6B63\u7684\u8BED\u4E49\uFF0C\u7F16\u8BD1\u7C7B\u65F6\u91C7\u53D6\u4E86<code>Object.defineProperty</code>\u6765\u5B9A\u4E49\u539F\u578B\u65B9\u6CD5\u3002</p><p>\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E<code>babel</code>\u7684<code>loose</code>\u6A21\u5F0F(\u5BBD\u677E\u6A21\u5F0F)\u4E3A<code>true</code>\uFF0C\u5B83\u4F1A\u4E0D\u4E25\u683C\u9075\u5FAAES6\u7684\u8BED\u4E49\uFF0C\u800C\u91C7\u53D6\u66F4\u7B26\u5408\u6211\u4EEC\u5E73\u5E38\u7F16\u5199\u4EE3\u7801\u65F6\u7684\u4E60\u60EF\u53BB\u7F16\u8BD1\u4EE3\u7801\uFF0C\u5728<code>.babelrc</code>\u4E2D\u53EF\u4EE5\u5982\u4E0B\u8BBE\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;presets&quot;: [[&quot;env&quot;, { &quot;loose&quot;: true }]]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u5982\u4E0A\u8FF0\u7684<code>Person</code>\u7C7B\u7684\u5C5E\u6027\u65B9\u6CD5\u5C06\u4F1A\u7F16\u8BD1\u6210\u76F4\u63A5\u5728\u539F\u578B\u94FE\u4E0A\u58F0\u660E\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;use strict&quot;;

var Person = /*#__PURE__*/function () {
  function Person(_ref) {
    var name = _ref.name;
    this.name = name;

    this.getSex = function () {
      return &#39;boy&#39;;
    };
  }

  var _proto = Person.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  Person.getLook = function getLook() {
    return &#39;sunshine&#39;;
  };

  return Person;
}();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3</p><ul><li><p>\u5F53\u4F7F\u7528<code>Babel</code>\u7F16\u8BD1\u65F6\u9ED8\u8BA4\u7684<code>loose</code>\u4E3A<code>false</code>\uFF0C\u5373\u975E\u5BBD\u677E\u6A21\u5F0F</p></li><li><p>\u65E0\u8BBA\u54EA\u79CD\u6A21\u5F0F\uFF0C\u8F6C\u6362\u540E\u7684\u5B9A\u4E49\u5728\u7C7B\u5185\u90E8\u7684\u5C5E\u6027\u65B9\u6CD5\u662F\u88AB\u5B9A\u4E49\u5728\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\uFF1B\u9759\u6001\u5C5E\u6027\u88AB\u5B9A\u4E49\u5230\u6784\u9020\u51FD\u6570\u4E0A</p></li><li><p>\u53EA\u4E0D\u8FC7\u975E\u5BBD\u677E\u6A21\u5F0F\u65F6\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u65B9\u6CD5\u4F1A\u88AB<code>_createClass</code>\u51FD\u6570\u5904\u7406\uFF0C\u51FD\u6570\u5185\u901A\u8FC7<code>Object.defineProperty()</code>\u8BBE\u7F6E\u5C5E\u6027\u7684\u53EF\u679A\u4E3E\u503C<code>enumerable</code>\u4E3A<code>false</code></p></li><li><p>\u7531\u4E8E\u5728<code>_createClass</code>\u51FD\u6570\u5185\u4F7F\u7528\u4E86<code>Object</code>\uFF0C\u6240\u4EE5\u975E\u5BBD\u677E\u6A21\u5F0F\u4E0B\u662F\u4F1A\u4EA7\u751F\u526F\u4F5C\u7528\u7684\uFF0C\u800C\u5BBD\u677E\u6A21\u5F0F\u4E0B\u4E0D\u4F1A\u3002</p></li><li><p><code>webpack</code>\u4E2D\u7684<code>UglifyJS</code>\u4F9D\u65E7\u8FD8\u662F\u4F1A\u5C06\u5BBD\u677E\u6A21\u5F0F\u8BA4\u4E3A\u662F\u6709\u526F\u4F5C\u7528\u7684\uFF0C\u800C<code>rollup</code>\u6709\u7A0B\u5E8F\u6D41\u7A0B\u5206\u6790\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u5224\u65AD\u4EE3\u7801\u662F\u5426\u771F\u6B63\u4EA7\u751F\u526F\u4F5C\u7528\uFF0C\u6240\u4EE5\u5B83\u4F1A\u8BA4\u4E3A\u5BBD\u677E\u6A21\u5F0F\u6CA1\u6709\u526F\u4F5C\u7528\u3002</p><p>(\u526F\u4F5C\u7528\u5927\u81F4\u7406\u89E3\u4E3A\uFF1A\u4E00\u4E2A\u51FD\u6570\u4F1A\u3001\u6216\u8005\u53EF\u80FD\u4F1A\u5BF9\u51FD\u6570\u5916\u90E8\u53D8\u91CF\u4EA7\u751F\u5F71\u54CD\u7684\u884C\u4E3A\u3002)</p></li></ul><h2 id="_14-babel-polyfill\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_14-babel-polyfill\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 14 babel-polyfill\u662F\u4EC0\u4E48</h2><p>ployfill\u662F\u8865\u4E01</p><p><img src="`+u+'" alt=""></p><p><code>babel-polyfill</code>\u73B0\u5728\u5DF2\u7ECF\u88AB\u5F03\u7528</p><ul><li><code>babel 7.4</code>\u4E4B\u540E\u5F03\u7528<code>babel-polyfill</code></li><li>\u76F4\u63A5\u63A8\u8350\u4F7F\u7528<code>core-js</code>\u548C<code>regenerator</code></li></ul><p>babel-polyfill\u6309\u9700\u5F15\u5165</p><ul><li>\u6587\u4EF6\u8F83\u5927</li><li>\u53EA\u7528\u4E00\u90E8\u5206\u529F\u80FD\uFF0C\u65E0\u9700\u5168\u90E8\u5F15\u5165</li><li>\u914D\u7F6E\u6309\u9700\u5F15\u5165</li></ul><p><img src="'+v+'" alt=""><img src="'+t+'" alt=""></p><p>babel-polyfill\u7684\u95EE\u9898</p><ul><li>\u4F1A\u6C61\u67D3\u5168\u5C40\u73AF\u5883</li><li>\u5982\u679C\u505A\u4E00\u4E2A\u72EC\u7ACB\u7684web\u7CFB\u7EDF\uFF0C\u65E0\u788D</li><li>\u5982\u679C\u505A\u4E00\u4E2A\u7B2C\u4E09\u4E2A\u7684lib\uFF0C\u4F1A\u6709\u95EE\u9898</li></ul><p><img src="'+b+'" alt=""><img src="'+m+`" alt=""></p><h2 id="_15-tree-shaking\u539F\u7406\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_15-tree-shaking\u539F\u7406\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 15 Tree Shaking\u539F\u7406\u662F\u4EC0\u4E48</h2><h3 id="\u5BF9tree-shaking\u7684\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#\u5BF9tree-shaking\u7684\u4E86\u89E3" aria-hidden="true">#</a> \u5BF9tree-shaking\u7684\u4E86\u89E3</h3><p>\u4F5C\u7528\uFF1A</p><p>\u5B83\u8868\u793A\u5728\u6253\u5305\u7684\u65F6\u5019\u4F1A\u53BB\u9664\u4E00\u4E9B\u65E0\u7528\u7684\u4EE3\u7801</p><p>\u539F\u7406\uFF1A</p><ul><li><code>ES6</code>\u7684\u6A21\u5757\u5F15\u5165\u662F\u9759\u6001\u5206\u6790\u7684\uFF0C\u6240\u4EE5\u5728\u7F16\u8BD1\u65F6\u80FD\u6B63\u786E\u5224\u65AD\u5230\u5E95\u52A0\u8F7D\u4E86\u54EA\u4E9B\u6A21\u5757</li><li>\u5206\u6790\u7A0B\u5E8F\u6D41\uFF0C\u5224\u65AD\u54EA\u4E9B\u53D8\u91CF\u672A\u88AB\u4F7F\u7528\u3001\u5F15\u7528\uFF0C\u8FDB\u800C\u5220\u9664\u6B64\u4EE3\u7801</li></ul><p>\u7279\u70B9\uFF1A</p><ul><li>\u5728\u751F\u4EA7\u6A21\u5F0F\u4E0B\u5B83\u662F\u9ED8\u8BA4\u5F00\u542F\u7684\uFF0C\u4F46\u662F\u7531\u4E8E\u7ECF\u8FC7<code>babel</code>\u7F16\u8BD1\u5168\u90E8\u6A21\u5757\u88AB\u5C01\u88C5\u6210<code>IIFE</code>\uFF0C\u5B83\u5B58\u5728\u526F\u4F5C\u7528\u65E0\u6CD5\u88AB<code>tree-shaking</code>\u6389</li><li>\u53EF\u4EE5\u5728<code>package.json</code>\u4E2D\u914D\u7F6E<code>sideEffects</code>\u6765\u6307\u5B9A\u54EA\u4E9B\u6587\u4EF6\u662F\u6709\u526F\u4F5C\u7528\u7684\u3002\u5B83\u6709\u4E24\u79CD\u503C\uFF0C\u4E00\u4E2A\u662F\u5E03\u5C14\u7C7B\u578B\uFF0C\u5982\u679C\u662F<code>false</code>\u5219\u8868\u793A\u6240\u6709\u6587\u4EF6\u90FD\u6CA1\u6709\u526F\u4F5C\u7528\uFF1B\u5982\u679C\u662F\u4E00\u4E2A\u6570\u7EC4\u7684\u8BDD\uFF0C\u6570\u7EC4\u91CC\u7684\u6587\u4EF6\u8DEF\u5F84\u8868\u793A\u6539\u6587\u4EF6\u6709\u526F\u4F5C\u7528</li><li><code>rollup</code>\u548C<code>webpack</code>\u4E2D\u5BF9<code>tree-shaking</code>\u7684\u5C42\u5EA6\u4E0D\u540C\uFF0C\u4F8B\u5982\u5BF9<code>babel</code>\u8F6C\u8BD1\u540E\u7684<code>class</code>\uFF0C\u5982\u679C<code>babel</code>\u7684\u8F6C\u8BD1\u662F\u5BBD\u677E\u6A21\u5F0F\u4E0B\u7684\u8BDD(\u4E5F\u5C31\u662F<code>loose</code>\u4E3A<code>true</code>)\uFF0C<code>webpack</code>\u4F9D\u65E7\u4F1A\u8BA4\u4E3A\u5B83\u6709\u526F\u4F5C\u7528\u4E0D\u4F1A<code>tree-shaking</code>\u6389\uFF0C\u800C<code>rollup</code>\u4F1A\u3002\u8FD9\u662F\u56E0\u4E3A<code>rollup</code>\u6709\u7A0B\u5E8F\u6D41\u5206\u6790\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u5224\u65AD\u4EE3\u7801\u662F\u5426\u771F\u6B63\u4F1A\u4EA7\u751F\u526F\u4F5C\u7528\u3002</li></ul><h3 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h3><ul><li><code>ES6 Module</code>\xA0\u5F15\u5165\u8FDB\u884C\u9759\u6001\u5206\u6790\uFF0C\u6545\u800C\u7F16\u8BD1\u7684\u65F6\u5019\u6B63\u786E\u5224\u65AD\u5230\u5E95\u52A0\u8F7D\u4E86\u90A3\u4E9B\u6A21\u5757</li><li>\u9759\u6001\u5206\u6790\u7A0B\u5E8F\u6D41\uFF0C\u5224\u65AD\u90A3\u4E9B\u6A21\u5757\u548C\u53D8\u91CF\u672A\u88AB\u4F7F\u7528\u6216\u8005\u5F15\u7528\uFF0C\u8FDB\u800C\u5220\u9664\u5BF9\u5E94\u4EE3\u7801</li></ul><blockquote><p>\u4F9D\u8D56\u4E8E<code>import/export</code></p></blockquote><p>\u901A\u8FC7\u5BFC\u5165\u6240\u6709\u7684\u5305\u540E\u518D\u8FDB\u884C\u6761\u4EF6\u83B7\u53D6\u3002\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import foo from &quot;foo&quot;;
import bar from &quot;bar&quot;;

if(condition) {
    // foo.xxxx
} else {
    // bar.xxx
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ES6\u7684import\u8BED\u6CD5\u5B8C\u7F8E\u53EF\u4EE5\u4F7F\u7528tree shaking\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u5728\u4EE3\u7801\u4E0D\u8FD0\u884C\u7684\u60C5\u51B5\u4E0B\u5C31\u80FD\u5206\u6790\u51FA\u4E0D\u9700\u8981\u7684\u4EE3\u7801</p></blockquote><p>CommonJS\u7684\u52A8\u6001\u7279\u6027\u6A21\u5757\u610F\u5473\u7740tree shaking\u4E0D\u9002\u7528\u3002\u56E0\u4E3A\u5B83\u662F\u4E0D\u53EF\u80FD\u786E\u5B9A\u54EA\u4E9B\u6A21\u5757\u5B9E\u9645\u8FD0\u884C\u4E4B\u524D\u662F\u9700\u8981\u7684\u6216\u8005\u662F\u4E0D\u9700\u8981\u7684\u3002\u5728ES6\u4E2D\uFF0C\u8FDB\u5165\u4E86\u5B8C\u5168\u9759\u6001\u7684\u5BFC\u5165\u8BED\u6CD5\uFF1Aimport\u3002\u8FD9\u4E5F\u610F\u5473\u7740\u4E0B\u9762\u7684\u5BFC\u5165\u662F\u4E0D\u53EF\u884C\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E0D\u53EF\u884C\uFF0CES6 \u7684import\u662F\u5B8C\u5168\u9759\u6001\u7684
if(condition) {
    myDynamicModule = require(&quot;foo&quot;);
} else {
    myDynamicModule = require(&quot;bar&quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-vite\u4E86\u89E3\u5417" tabindex="-1"><a class="header-anchor" href="#_16-vite\u4E86\u89E3\u5417" aria-hidden="true">#</a> 16 Vite\u4E86\u89E3\u5417</h2><blockquote><p>\u662F\u4E00\u4E2A\u57FA\u4E8E\u6D4F\u89C8\u5668\u539F\u751FES\u6A21\u5757\u5BFC\u5165\u7684\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\uFF0C\u5229\u7528\u6D4F\u89C8\u5668\u53BB\u89E3\u6790import\uFF0C\u5728\u670D\u52A1\u5668\u7AEF\u6309\u9700\u7F16\u8BD1\u8FD4\u56DE\uFF0C\u5B8C\u5168\u8DF3\u8FC7\u4E86\u6253\u5305\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u670D\u52A1\u5668\u968F\u542F\u968F\u7528\u3002\u540C\u65F6\u4E0D\u4EC5\u5BF9Vue\u6587\u4EF6\u63D0\u4F9B\u4E86\u652F\u6301\uFF0C\u8FD8\u652F\u6301\u70ED\u66F4\u65B0\uFF0C\u800C\u4E14\u70ED\u66F4\u65B0\u7684\u901F\u5EA6\u4E0D\u4F1A\u968F\u7740\u6A21\u5757\u589E\u591A\u800C\u53D8\u6162\u3002\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528Rollup\u6253\u5305</p></blockquote><p>Vite \u7279\u70B9</p><ul><li>Dev Server \u65E0\u9700\u7B49\u5F85\uFF0C\u5373\u65F6\u542F\u52A8\uFF1B</li><li>\u51E0\u4E4E\u5B9E\u65F6\u7684\u6A21\u5757\u70ED\u66F4\u65B0\uFF1B</li><li>\u6240\u9700\u6587\u4EF6\u6309\u9700\u7F16\u8BD1\uFF0C\u907F\u514D\u7F16\u8BD1\u7528\u4E0D\u5230\u7684\u6587\u4EF6\uFF1B</li><li>\u5F00\u7BB1\u5373\u7528\uFF0C\u907F\u514D\u5404\u79CD Loader \u548C Plugin \u7684\u914D\u7F6E\uFF1B</li></ul><p>\u5F00\u7BB1\u5373\u7528</p><ul><li><code>TypeScript</code>\xA0- \u5185\u7F6E\u652F\u6301</li><li><code>less/sass/stylus/postcss</code>\xA0- \u5185\u7F6E\u652F\u6301\uFF08\u9700\u8981\u5355\u72EC\u5B89\u88C5\u6240\u5BF9\u5E94\u7684\u7F16\u8BD1\u5668\uFF09</li></ul><p>\u751F\u4EA7\u73AF\u5883\u9700\u8981\u6253\u5305\u5417</p><blockquote><p>\u53EF\u4EE5\u4E0D\u6253\u5305\uFF0C\u9700\u8981\u542F\u52A8server\uFF0C\u9700\u8981\u6D4F\u89C8\u5668\u652F\u6301</p></blockquote><p><img src="`+p+`" alt=""></p><p>\u624B\u5199\u5B9E\u73B0</p><blockquote><p>Vite \u7684\u6838\u5FC3\u529F\u80FD\uFF1A<code>Static Server + Compile + HMR</code></p></blockquote><p>\u6838\u5FC3\u601D\u8DEF\uFF1A</p><ul><li>\u5C06\u5F53\u524D\u9879\u76EE\u76EE\u5F55\u4F5C\u4E3A\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668\u7684\u6839\u76EE\u5F55</li><li>\u62E6\u622A\u90E8\u5206\u6587\u4EF6\u8BF7\u6C42 <ul><li>\u5904\u7406\u4EE3\u7801\u4E2D\xA0<code>import node_modules</code>\xA0\u4E2D\u7684\u6A21\u5757</li><li>\u5904\u7406\xA0<code>vue</code>\xA0\u5355\u6587\u4EF6\u7EC4\u4EF6\uFF08<code>SFC</code>\uFF09\u7684\u7F16\u8BD1</li></ul></li><li>\u901A\u8FC7\xA0<code>WebSocket</code>\xA0\u5B9E\u73B0\xA0<code>HMR</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/env node

const path = require(&#39;path&#39;)
const { Readable } = require(&#39;stream&#39;)
const Koa = require(&#39;koa&#39;)
const send = require(&#39;koa-send&#39;)
const compilerSfc = require(&#39;@vue/compiler-sfc&#39;)

const cwd = process.cwd()

const streamToString = stream =&gt;
  new Promise((resolve, reject) =&gt; {
    const chunks = []
    stream.on(&#39;data&#39;, chunk =&gt; chunks.push(chunk))
    stream.on(&#39;end&#39;, () =&gt; resolve(Buffer.concat(chunks).toString(&#39;utf8&#39;)))
    stream.on(&#39;error&#39;, reject)
  })

const app = new Koa()

// \u91CD\u5199\u8BF7\u6C42\u8DEF\u5F84\uFF0C/@modules/xxx =&gt; /node_modules/
app.use(async (ctx, next) =&gt; {
  if (ctx.path.startsWith(&#39;/@modules/&#39;)) {
    const moduleName = ctx.path.substr(10) // =&gt; vue
    const modulePkg = require(path.join(cwd, &#39;node_modules&#39;, moduleName, &#39;package.json&#39;))
    ctx.path = path.join(&#39;/node_modules&#39;, moduleName, modulePkg.module)
  }
  await next()
})

// \u6839\u636E\u8BF7\u6C42\u8DEF\u5F84\u5F97\u5230\u76F8\u5E94\u6587\u4EF6 /index.html
app.use(async (ctx, next) =&gt; {
  // ctx.path // http://localhost:3080/
  // ctx.body = &#39;my-vite&#39;
  await send(ctx, ctx.path, { root: cwd, index: &#39;index.html&#39; }) // \u6709\u53EF\u80FD\u8FD8\u9700\u8981\u989D\u5916\u5904\u7406\u76F8\u5E94\u7ED3\u679C
  await next()
})

// .vue \u6587\u4EF6\u8BF7\u6C42\u7684\u5904\u7406\uFF0C\u5373\u65F6\u7F16\u8BD1
app.use(async (ctx, next) =&gt; {
  if (ctx.path.endsWith(&#39;.vue&#39;)) {
    const contents = await streamToString(ctx.body)
    const { descriptor } = compilerSfc.parse(contents)
    let code

    if (ctx.query.type === undefined) {
      code = descriptor.script.content
      code = code.replace(/export\\s+default\\s+/, &#39;const __script = &#39;)
      code += \`
  import { render as __render } from &quot;\${ctx.path}?type=template&quot;
  __script.render = __render
  export default __script\`
      // console.log(code)
      ctx.type = &#39;application/javascript&#39;
      ctx.body = Readable.from(Buffer.from(code))
    } else if (ctx.query.type === &#39;template&#39;) {
      const templateRender = compilerSfc.compileTemplate({
        source: descriptor.template.content
      })
      code = templateRender.code
    }

    ctx.type = &#39;application/javascript&#39;
    ctx.body = Readable.from(Buffer.from(code))
  }
  await next()
})

// \u66FF\u6362\u4EE3\u7801\u4E2D\u7279\u6B8A\u4F4D\u7F6E
app.use(async (ctx, next) =&gt; {
  if (ctx.type === &#39;application/javascript&#39;) {
    const contents = await streamToString(ctx.body)
    ctx.body = contents
      .replace(/(from\\s+[&#39;&quot;])(?![\\.\\/])/g, &#39;$1/@modules/&#39;)
      .replace(/process\\.env\\.NODE_ENV/g, &#39;&quot;production&quot;&#39;)
  }
})

app.listen(3080)

console.log(&#39;Server running @ http://localhost:3080&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function f(q,w){const n=r("ExternalLinkIcon");return d(),s("div",null,[g,e("p",null,[e("a",x,[k,c(n)])]),_])}var P=l(h,[["render",f],["__file","\u524D\u7AEF\u5DE5\u7A0B\u76F8\u5173.html.vue"]]);export{P as default};
