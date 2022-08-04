import{_ as e,o as i,c as n,b as d}from"./app.12353158.js";const o={},c=d(`<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><hr><h2 id="\u4E00\u3001react-router\u57FA\u7840\u4E4Bhistory" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001react-router\u57FA\u7840\u4E4Bhistory" aria-hidden="true">#</a> \u4E00\u3001React Router\u57FA\u7840\u4E4Bhistory</h2><h3 id="_1-1-history\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-1-history\u4ECB\u7ECD" aria-hidden="true">#</a> 1.1 History\u4ECB\u7ECD</h3><blockquote><p><code>history</code>\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u7B2C\u4E09\u65B9js\u5E93\uFF0C\u53EF\u4EE5\u7528\u6765\u517C\u5BB9\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u3001\u4E0D\u540C\u73AF\u5883\u4E0B\u5BF9\u5386\u53F2\u8BB0\u5F55\u7684\u7BA1\u7406\uFF0C\u62E5\u6709\u7EDF\u4E00\u7684<code>API</code>\u3002\u5177\u4F53\u6765\u8BF4\u91CC\u9762\u7684<code>history</code>\u5206\u4E3A\u4E09\u7C7B</p></blockquote><ul><li>\u8001\u6D4F\u89C8\u5668\u7684<code>history</code>: \u4E3B\u8981\u901A\u8FC7<code>hash</code>\u6765\u5B9E\u73B0\uFF0C\u5BF9\u5E94<code>createHashHistory</code></li><li>\u9AD8\u7248\u672C\u6D4F\u89C8\u5668: \u901A\u8FC7<code>html5</code>\u91CC\u9762\u7684<code>history</code>\uFF0C\u5BF9\u5E94<code>createBrowserHistory</code></li><li><code>node</code>\u73AF\u5883\u4E0B: \u4E3B\u8981\u5B58\u50A8\u5728<code>memeory</code>\u91CC\u9762\uFF0C\u5BF9\u5E94<code>createMemoryHistory</code></li></ul><blockquote><p>\u4E0A\u9762\u9488\u5BF9\u4E0D\u540C\u7684\u73AF\u5883\u63D0\u4F9B\u4E86\u4E09\u4E2A<code>API</code>\uFF0C\u4F46\u662F\u4E09\u4E2A<code>API</code>\u6709\u4E00\u4E9B\u5171\u6027\u7684\u64CD\u4F5C\uFF0C\u5C06\u5176\u62BD\u8C61\u4E86\u4E00\u4E2A\u516C\u5171\u7684\u6587\u4EF6<code>createHistory</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5185\u90E8\u7684\u62BD\u8C61\u5B9E\u73B0
function createHistory(options={}) {
  ...
  return {
    listenBefore, // \u5185\u90E8\u7684hook\u673A\u5236\uFF0C\u53EF\u4EE5\u5728location\u53D1\u751F\u53D8\u5316\u524D\u6267\u884C\u67D0\u4E9B\u884C\u4E3A\uFF0CAOP\u7684\u5B9E\u73B0
    listen, // location\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u56DE\u8C03
    transitionTo, // \u6267\u884Clocation\u7684\u6539\u53D8
    push, // \u6539\u53D8location
    replace,
    go,
    goBack,
    goForward,
    createKey, // \u521B\u5EFAlocation\u7684key\uFF0C\u7528\u4E8E\u552F\u4E00\u6807\u793A\u8BE5location\uFF0C\u662F\u968F\u673A\u751F\u6210\u7684
    createPath,
    createHref,
    createLocation, // \u521B\u5EFAlocation
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0A\u8FF0\u8FD9\u4E9B\u65B9\u5F0F\u662F<code>history</code>\u5185\u90E8\u6700\u57FA\u7840\u7684\u65B9\u6CD5\uFF0C<code>createHashHistory</code>\u3001<code>createBrowserHistory</code>\u3001<code>createMemoryHistory</code>\u53EA\u662F\u8986\u76D6\u5176\u4E2D\u7684\u67D0\u4E9B\u65B9\u6CD5\u800C\u5DF2\u3002\u5176\u4E2D\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u7684<code>location</code>\u8DDF\u6D4F\u89C8\u5668\u539F\u751F\u7684<code>location</code>\u662F\u4E0D\u76F8\u540C\u7684\uFF0C\u6700\u5927\u7684\u533A\u522B\u5C31\u5728\u4E8E\u91CC\u9762\u591A\u4E86<code>key</code>\u5B57\u6BB5\uFF0C<code>history</code>\u5185\u90E8\u901A\u8FC7<code>key</code>\u6765\u8FDB\u884C<code>location</code>\u7684\u64CD\u4F5C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createLocation() {
  return {
    pathname, // url\u7684\u57FA\u672C\u8DEF\u5F84
    search, // \u67E5\u8BE2\u5B57\u6BB5
    hash, // url\u4E2D\u7684hash\u503C
    state, // url\u5BF9\u5E94\u7684state\u5B57\u6BB5
    action, // \u5206\u4E3A push\u3001replace\u3001pop\u4E09\u79CD
    key // \u751F\u6210\u65B9\u6CD5\u4E3A: Math.random().toString(36).substr(2, length)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u5185\u90E8\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5185\u90E8\u89E3\u6790" aria-hidden="true">#</a> 1.2 \u5185\u90E8\u89E3\u6790</h3><blockquote><p>\u4E09\u4E2A<code>API</code>\u7684\u5927\u81F4\u7684\u6280\u672F\u5B9E\u73B0\u5982\u4E0B</p></blockquote><ul><li><code>createBrowserHistory</code>: \u5229\u7528<code>HTML5</code>\u91CC\u9762\u7684<code>history</code></li><li><code>createHashHistory</code>: \u901A\u8FC7<code>hash</code>\u6765\u5B58\u50A8\u5728\u4E0D\u540C\u72B6\u6001\u4E0B\u7684<code>history</code>\u4FE1\u606F</li><li><code>createMemoryHistory</code>: \u5728\u5185\u5B58\u4E2D\u8FDB\u884C\u5386\u53F2\u8BB0\u5F55\u7684\u5B58\u50A8\`</li></ul><h4 id="_1-2-1-\u6267\u884Curl\u524D\u8FDB" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u6267\u884Curl\u524D\u8FDB" aria-hidden="true">#</a> 1.2.1 \u6267\u884CURL\u524D\u8FDB</h4><ul><li><code>createBrowserHistory</code>:\xA0<code>pushState</code>\u3001<code>replaceState</code></li><li><code>createHashHistory</code>:\xA0<code>location.hash=*** location.replace()</code></li><li><code>createMemoryHistory</code>: \u5728\u5185\u5B58\u4E2D\u8FDB\u884C\u5386\u53F2\u8BB0\u5F55\u7684\u5B58\u50A8</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F2A\u4EE3\u7801

// createBrowserHistory(HTML5)\u4E2D\u7684\u524D\u8FDB\u5B9E\u73B0
function finishTransition(location) {
  ...
  const historyState = { key };
  ...
  if (location.action === &#39;PUSH&#39;) ) {
    window.history.pushState(historyState, null, path);
  } else {
    window.history.replaceState(historyState, null, path)
  }
}
// createHashHistory\u7684\u5185\u90E8\u5B9E\u73B0
function finishTransition(location) {
  ...
  if (location.action === &#39;PUSH&#39;) ) {
    window.location.hash = path;
  } else {
    window.location.replace(
    window.location.pathname + window.location.search + &#39;#&#39; + path
  );
  }
}
// createMemoryHistory\u7684\u5185\u90E8\u5B9E\u73B0
entries = [];
function finishTransition(location) {
  ...
  switch (location.action) {
    case &#39;PUSH&#39;:
      entries.push(location);
      break;
    case &#39;REPLACE&#39;:
      entries[current] = location;
      break;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-\u68C0\u6D4Burl\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u68C0\u6D4Burl\u56DE\u9000" aria-hidden="true">#</a> 1.2.2 \u68C0\u6D4BURL\u56DE\u9000</h4><ul><li><code>createBrowserHistory</code>:\xA0<code>popstate</code></li><li><code>createHashHistory</code>:\xA0<code>hashchange</code></li><li><code>createMemoryHistory</code>:\u56E0\u4E3A\u662F\u5728\u5185\u5B58\u4E2D\u64CD\u4F5C\uFF0C\u8DDF\u6D4F\u89C8\u5668\u6CA1\u6709\u5173\u7CFB\uFF0C\u4E0D\u6D89\u53CA<code>UI</code>\u5C42\u9762\u7684\u4E8B\u60C5\uFF0C\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u5386\u53F2\u4FE1\u606F\u7684\u56DE\u9000</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F2A\u4EE3\u7801

// createBrowserHistory(HTML5)\u4E2D\u7684\u540E\u9000\u68C0\u6D4B
function startPopStateListener({ transitionTo }) {
  function popStateListener(event) {
    ...
    transitionTo( getCurrentLocation(event.state) );
  }
  addEventListener(window, &#39;popstate&#39;, popStateListener);
  ...
}

// createHashHistory\u7684\u540E\u9000\u68C0\u6D4B
function startPopStateListener({ transitionTo }) {
  function hashChangeListener(event) {
    ...
    transitionTo( getCurrentLocation(event.state) );
  }
  addEventListener(window, &#39;hashchange&#39;, hashChangeListener);
  ...
}
// createMemoryHistory\u7684\u5185\u90E8\u5B9E\u73B0
function go(n) {
  if (n) {
    ...
    current += n;
  const currentLocation = getCurrentLocation();
  // change action to POP
  history.transitionTo({ ...currentLocation, action: POP });
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-3-state\u7684\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#_1-2-3-state\u7684\u5B58\u50A8" aria-hidden="true">#</a> 1.2.3 state\u7684\u5B58\u50A8</h4><blockquote><p>\u4E3A\u4E86\u7EF4\u62A4<code>state</code>\u7684\u72B6\u6001\uFF0C\u5C06\u5176\u5B58\u50A8\u5728<code>sessionStorage</code>\u91CC\u9762:</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// createBrowserHistory/createHashHistory\u4E2Dstate\u7684\u5B58\u50A8
function saveState(key, state) {
  ...
  window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
}
function readState(key) {
  ...
  json = window.sessionStorage.getItem(createKey(key));
  return JSON.parse(json);
}
// createMemoryHistory\u4EC5\u4EC5\u5728\u5185\u5B58\u4E2D\uFF0C\u6240\u4EE5\u64CD\u4F5C\u6BD4\u8F83\u7B80\u5355
const storage = createStateStorage(entries); // storage = {entry.key: entry.state}

function saveState(key, state) {
  storage[key] = state
}
function readState(key) {
  return storage[key]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5C0F\u7ED3" aria-hidden="true">#</a> 1.3 \u5C0F\u7ED3</h3><p>\u8DEF\u7531\u539F\u7406</p><blockquote><p>\u524D\u7AEF\u8DEF\u7531\u5B9E\u73B0\u8D77\u6765\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u672C\u8D28\u5C31\u662F\u76D1\u542C\xA0<code>URL</code>\xA0\u7684\u53D8\u5316\uFF0C\u7136\u540E\u5339\u914D\u8DEF\u7531\u89C4\u5219\uFF0C\u663E\u793A\u76F8\u5E94\u7684\u9875\u9762\uFF0C\u5E76\u4E14\u65E0\u987B\u5237\u65B0\u3002\u76EE\u524D\u5355\u9875\u9762\u4F7F\u7528\u7684\u8DEF\u7531\u5C31\u53EA\u6709\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F</p></blockquote><ul><li><code>hash</code>\xA0\u6A21\u5F0F</li><li><code>history</code>\xA0\u6A21\u5F0F</li></ul><blockquote><p><code>www.test.com/##/</code>\xA0\u5C31\u662F\xA0<code>Hash URL</code>\uFF0C\u5F53\xA0<code>##</code>\xA0\u540E\u9762\u7684\u54C8\u5E0C\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4E0D\u4F1A\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E\uFF0C\u53EF\u4EE5\u901A\u8FC7\xA0<code>hashchange</code>\xA0\u4E8B\u4EF6\u6765\u76D1\u542C\u5230\xA0<code>URL</code>\xA0\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u8FDB\u884C\u8DF3\u8F6C\u9875\u9762\u3002</p></blockquote><blockquote><p><code>History</code>\u6A21\u5F0F\u662F\xA0<code>HTML5</code>\u65B0\u63A8\u51FA\u7684\u529F\u80FD\uFF0C\u6BD4\u4E4B\xA0<code>Hash URL</code>\xA0\u66F4\u52A0\u7F8E\u89C2</p></blockquote><h2 id="\u4E8C\u3001react-router\u7684\u57FA\u672C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001react-router\u7684\u57FA\u672C\u539F\u7406" aria-hidden="true">#</a> \u4E8C\u3001react-router\u7684\u57FA\u672C\u539F\u7406</h2><blockquote><p>\u5B9E\u73B0<code>URL</code>\u4E0E<code>UI</code>\u754C\u9762\u7684\u540C\u6B65\u3002\u5176\u4E2D\u5728<code>react-router</code>\u4E2D\uFF0C<code>URL</code>\u5BF9\u5E94<code>Location</code>\u5BF9\u8C61\uFF0C\u800C<code>UI</code>\u662F\u7531<code>react components</code>\u6765\u51B3\u5B9A\u7684\uFF0C\u8FD9\u6837\u5C31\u8F6C\u53D8\u6210<code>location</code>\u4E0E<code>components</code>\u4E4B\u95F4\u7684\u540C\u6B65\u95EE\u9898</p></blockquote><p><img src="http://zhenhua-lee.github.io/img/react-router/base.png" alt="img"></p><h3 id="_2-1-\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4F18\u70B9" aria-hidden="true">#</a> 2.1 \u4F18\u70B9</h3><ul><li>\u4E0E<code>React</code>\u878D\u4E3A\u4E00\u4F53,\u4E13\u4E3A<code>react</code>\u91CF\u8EAB\u6253\u9020\uFF0C\u7F16\u7801\u98CE\u683C\u4E0E<code>react</code>\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F8B\u5982\u8DEF\u7531\u7684\u914D\u7F6E\u53EF\u4EE5\u901A\u8FC7<code>component</code>\u6765\u5B9E\u73B0</li><li>\u4E0D\u9700\u8981\u624B\u5DE5\u7EF4\u62A4\u8DEF\u7531<code>state</code>\uFF0C\u4F7F\u4EE3\u7801\u53D8\u5F97\u7B80\u5355</li><li>\u5F3A\u5927\u7684\u8DEF\u7531\u7BA1\u7406\u673A\u5236\uFF0C\u4F53\u73B0\u5728\u5982\u4E0B\u65B9\u9762 <ul><li>\u8DEF\u7531\u914D\u7F6E: \u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u3001\u914D\u7F6E\u5BF9\u8C61\u6765\u8FDB\u884C\u8DEF\u7531\u7684\u914D\u7F6E</li><li>\u8DEF\u7531\u5207\u6362: \u53EF\u4EE5\u901A\u8FC7<code>&lt;Link&gt;</code>\xA0<code>Redirect</code>\u8FDB\u884C\u8DEF\u7531\u7684\u5207\u6362</li><li>\u8DEF\u7531\u52A0\u8F7D: \u53EF\u4EE5\u540C\u6B65\u8BB0\u8F7D\uFF0C\u4E5F\u53EF\u4EE5\u5F02\u6B65\u52A0\u8F7D\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D</li></ul></li><li>\u4F7F\u7528\u65B9\u5F0F: \u4E0D\u4EC5\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u7AEF\u7684\u4F7F\u7528\uFF0C\u800C\u4E14\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u7AEF\u7684\u4F7F\u7528</li></ul><h3 id="_2-2-react-router\u5177\u4F53\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-2-react-router\u5177\u4F53\u5B9E\u73B0" aria-hidden="true">#</a> 2.2 react-router\u5177\u4F53\u5B9E\u73B0</h3><blockquote><p><code>react-router</code>\u5728<code>history</code>\u5E93\u7684\u57FA\u7840\u4E0A\uFF0C\u5B9E\u73B0\u4E86<code>URL</code>\u4E0E<code>UI</code>\u7684\u540C\u6B65\uFF0C\u5206\u4E3A\u4E24\u4E2A\u5C42\u6B21\u6765\u63CF\u8FF0\u5177\u4F53\u7684\u5B9E\u73B0\u3002</p></blockquote><p>\u7EC4\u4EF6\u5C42\u9762\u63CF\u8FF0\u5B9E\u73B0\u8FC7\u7A0B</p><blockquote><p>\u5728<code>react-router</code>\u4E2D\u6700\u4E3B\u8981\u7684<code>component</code>\u662F<code>Router RouterContext Link</code>\uFF0C<code>history</code>\u5E93\u8D77\u5230\u4E86\u4E2D\u95F4\u6865\u6881\u7684\u4F5C\u7528</p></blockquote><p><img src="http://zhenhua-lee.github.io/img/react-router/base.png" alt="img"></p><blockquote><p>\u4EE5<code>browserHistory</code>(\u4E00\u79CD<code>history</code>\u7C7B\u578B:\u4E00\u4E2A\xA0<code>history</code>\xA0\u77E5\u9053\u5982\u4F55\u53BB\u76D1\u542C\u6D4F\u89C8\u5668\u5730\u5740\u680F\u7684\u53D8\u5316\uFF0C \u5E76\u89E3\u6790\u8FD9\u4E2A\xA0<code>URL</code>\xA0\u8F6C\u5316\u4E3A\xA0<code>location</code>\xA0\u5BF9\u8C61)\u4E3A\u4F8B :</p></blockquote><ul><li><code>browserHistory</code>\u8FDB\u884C\u8DEF\u7531<code>state</code>\u7BA1\u7406,\u4E3B\u8981\u901A\u8FC7<code>sessionStorage</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u4FDD\u5B58\u3000\u8DEF\u7531state(router state)
function saveState(key, state) {
  ...
  window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
}
//\u8BFB\u53D6\u8DEF\u7531state
function readState(key) {
  ...
  json = window.sessionStorage.getItem(createKey(key));
  return JSON.parse(json);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5176\u4E2D<code>saveState</code>\u51FD\u6570\u4F20\u8FDB\u6765\u7684<code>state</code>\u662F\u4E2A<code>json</code>\u5BF9\u8C61\uFF0C\u5982\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{route: &#39;/about&#39;} ///\u5047\u8BBE\u6B64\u65F6\u7684location\u4E3A&#39;/about&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FDB\u884C\u8DEF\u7531\u5339\u914D\uFF0C\u6700\u7EC8\u6E32\u67D3\u5BF9\u5E94\u7684\u7EC4\u4EF6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const About = React.createClass({/*...*/}) //About \u7EC4\u4EF6
const Inbox = React.createClass({/*...*/}) //Inbox \u7EC4\u4EF6
const Home = React.createClass({/*...*/}) //Home\u7EC4\u4EF6
 render() {
    let Child
    switch (this.state.route) {
      case &#39;/about&#39;: Child = About; break;
      case &#39;/inbox&#39;: Child = Inbox; break;
      default:      Child = Home;
    }

    return (
      &lt;div&gt;
        &lt;h1&gt;App&lt;/h1&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href=&quot;#/about&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#/inbox&quot;&gt;Inbox&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
        &lt;Child/&gt;
      &lt;/div&gt;
    )
  }
})

React.render(&lt;App /&gt;, document.body)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API\u5C42\u9762\u63CF\u8FF0\u5B9E\u73B0\u8FC7\u7A0B</p><blockquote><p>\u4E3A\u4E86\u7B80\u5355\u8BF4\u660E\uFF0C\u53EA\u63CF\u8FF0\u4F7F\u7528<code>browserHistory</code>\u7684\u5B9E\u73B0\uFF0C<code>hashHistory</code>\u7684\u5B9E\u73B0\u8FC7\u7A0B\u662F\u7C7B\u4F3C\u7684\uFF0C\u5C31\u4E0D\u5728\u8BF4\u660E</p></blockquote><p><img src="http://zhenhua-lee.github.io/img/react-router/internal.png" alt="img"></p><h3 id="_2-3-\u7528\u6237\u70B9\u51FB\u4E86link\u7EC4\u4EF6\u540E\u8DEF\u7531\u7CFB\u7EDF\u4E2D\u5230\u5E95\u53D1\u751F\u4E86\u54EA\u4E9B\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7528\u6237\u70B9\u51FB\u4E86link\u7EC4\u4EF6\u540E\u8DEF\u7531\u7CFB\u7EDF\u4E2D\u5230\u5E95\u53D1\u751F\u4E86\u54EA\u4E9B\u53D8\u5316" aria-hidden="true">#</a> 2.3 \u7528\u6237\u70B9\u51FB\u4E86Link\u7EC4\u4EF6\u540E\u8DEF\u7531\u7CFB\u7EDF\u4E2D\u5230\u5E95\u53D1\u751F\u4E86\u54EA\u4E9B\u53D8\u5316</h3><p><img src="https://s.poetries.work/gitee/2019/10/429.png" alt="img"></p><blockquote><p><code>Link</code>\xA0\u7EC4\u4EF6\u6700\u7EC8\u4F1A\u6E32\u67D3\u4E3A\xA0<code>HTML</code>\xA0\u6807\u7B7E\xA0<code>&lt;a&gt;</code>\uFF0C\u5B83\u7684\xA0<code>to</code>\u3001<code>query</code>\u3001<code>hash</code>\u5C5E\u6027\u4F1A\u88AB\u7EC4\u5408\u5728\u4E00\u8D77\u5E76\u6E32\u67D3\u4E3A\xA0<code>href</code>\xA0\u5C5E\u6027\u3002\u867D\u7136\xA0<code>Link</code>\xA0\u88AB\u6E32\u67D3\u4E3A\u8D85\u94FE\u63A5\uFF0C\u4F46\u5728\u5185\u90E8\u5B9E\u73B0\u4E0A\u4F7F\u7528\u811A\u672C\u62E6\u622A\u4E86\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u7136\u540E\u8C03\u7528\u4E86<code>history.pushState</code>\xA0\u65B9\u6CD5</p></blockquote><ul><li>\u7CFB\u7EDF\u4F1A\u5C06\u4E0A\u8FF0\xA0<code>location</code>\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u5230\xA0<code>TransitionTo</code>\u65B9\u6CD5\u4E2D\uFF0C\u7136\u540E\u8C03\u7528\xA0<code>window.location.hash</code>\xA0\u6216\u8005<code>window.history.pushState()</code>\xA0\u4FEE\u6539\u4E86\u5E94\u7528\u7684\xA0<code>URL</code>\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u4F60\u521B\u5EFA<code>history</code>\u5BF9\u8C61\u7684\u65B9\u5F0F\u3002\u540C\u65F6\u4F1A\u89E6\u53D1<code>history.listen</code>\xA0\u4E2D\u6CE8\u518C\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u3002</li><li>\u63A5\u4E0B\u6765\u8BF7\u770B\u8DEF\u7531\u7CFB\u7EDF\u5185\u90E8\u662F\u5982\u4F55\u4FEE\u6539<code>UI</code>\xA0\u7684\u3002\u5728\u5F97\u5230\u4E86\u65B0\u7684<code>location</code>\u5BF9\u8C61\u540E\uFF0C\u7CFB\u7EDF\u5185\u90E8\u7684\xA0<code>matchRoutes</code>\xA0\u65B9\u6CD5\u4F1A\u5339\u914D\u51FA<code>Route</code>\xA0\u7EC4\u4EF6\u6811\u4E2D\u4E0E\u5F53\u524D<code>location</code>\u5BF9\u8C61\u5339\u914D\u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C\u5E76\u4E14\u5F97\u5230\u4E86\xA0<code>nextState</code>\uFF0C\u5177\u4F53\u7684\u5339\u914D\u7B97\u6CD5\u4E0D\u5728\u8FD9\u91CC\u8BB2\u89E3\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u70B9\u51FB\u67E5\u770B\uFF0C<code>state</code>\xA0\u7684\u7ED3\u6784\u5982\u4E0B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nextState = {
  location, // \u5F53\u524D\u7684 location \u5BF9\u8C61
  routes, // \u4E0E location \u5BF9\u8C61\u5339\u914D\u7684 Route \u6811\u7684\u5B50\u96C6\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4
  params, // \u4F20\u5165\u7684 param\uFF0C\u5373 URL \u4E2D\u7684\u53C2\u6570
  components, // routes \u4E2D\u6BCF\u4E2A\u5143\u7D20\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u540C\u6837\u662F\u6570\u7EC4
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728\xA0<code>Router</code>\xA0\u7EC4\u4EF6\u7684\xA0<code>componentWillMount</code>\xA0\u751F\u547D\u5468\u671F\u65B9\u6CD5\u4E2D\u8C03\u7528\u4E86\xA0<code>history.listen(listener)</code>\xA0\u65B9\u6CD5\u3002<code>listener</code>\xA0\u4F1A\u5728\u4E0A\u8FF0\xA0<code>matchRoutes</code>\xA0\u65B9\u6CD5\u6267\u884C\u6210\u529F\u540E\u6267\u884C<code>listener(nextState)</code>\uFF0C<code>nextState</code>\u5BF9\u8C61\u6BCF\u4E2A\u5C5E\u6027\u7684\u5177\u4F53\u542B\u4E49\u5DF2\u7ECF\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u6CE8\u91CA\uFF0C\u63A5\u4E0B\u6765\u6267\u884C<code>this.setState(nextState)</code>\xA0\u5C31\u53EF\u4EE5\u5B9E\u73B0\u91CD\u65B0\u6E32\u67D3\xA0<code>Router</code>\u7EC4\u4EF6\u3002\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5F53 URL\uFF08\u51C6\u786E\u7684\u8BF4\u5E94\u8BE5\u662F\xA0<code>location.pathname</code>\uFF09 \u4E3A\xA0<code>/archives/posts</code>\xA0\u65F6\uFF0C\u5E94\u7528\u7684\u5339\u914D\u7ED3\u679C\u5982\u4E0B\u56FE\u6240\u793A</p></blockquote><p><img src="https://s.poetries.work/gitee/2019/10/430.png" alt="img"></p><blockquote><p>\u5230\u8FD9\u91CC\uFF0C\u7CFB\u7EDF\u5DF2\u7ECF\u5B8C\u6210\u4E86\u5F53\u7528\u6237\u70B9\u51FB\u4E00\u4E2A\u7531\xA0<code>Link</code>\xA0\u7EC4\u4EF6\u6E32\u67D3\u51FA\u7684\u8D85\u94FE\u63A5\u5230\u9875\u9762\u5237\u65B0\u7684\u5168\u8FC7\u7A0B</p></blockquote>`,56),s=[c];function t(a,l){return i(),n("div",null,s)}var v=e(o,[["render",t],["__file","React.html.vue"]]);export{v as default};
