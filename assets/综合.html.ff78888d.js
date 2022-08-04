import{_ as s,o,c,a as e,d,b as i,e as l,r as a}from"./app.12353158.js";const r={},t=i(`<h1 id="\u7EFC\u5408" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u5408" aria-hidden="true">#</a> \u7EFC\u5408</h1><hr><h2 id="\u4EC0\u4E48\u662F-virtual-dom" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-virtual-dom" aria-hidden="true">#</a> \u4EC0\u4E48\u662F Virtual DOM</h2><ol><li><code>Virtual DOM</code>(\u865A\u62DF DOM)\uFF0C\u662F\u7531\u666E\u901A\u7684\xA0<code>JS</code>\xA0\u5BF9\u8C61\u6765\u63CF\u8FF0\xA0<code>DOM</code>\xA0\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u4E0D\u662F\u771F\u5B9E\u7684\xA0<code>DOM</code>\xA0\u5BF9\u8C61\uFF0C\u6240\u4EE5\u53EB\xA0<code>Virtual DOM</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let element = document.querySelector(&#39;#app&#39;)
let s = &#39;&#39;
for (var key in element) {
  s += key + &#39;,&#39;
}
console.log(s)

// \u6253\u5370\u7ED3\u679C align,title,lang,translate,dir,hidden,accessKey,draggable,spellcheck,aut ocapitalize,contentEditable,isContentEditable,inputMode,offsetParent,off setTop,offsetLeft,offsetWidth,offsetHeight,style,innerText,outerText,onc opy,oncut,onpaste,onabort,onblur,oncancel,oncanplay,oncanplaythrough,onc hange,onclick,onclose,oncontextmenu,oncuechange,ondblclick,ondrag,ondrag end,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchan ge,onemptied,onended,onerror,onfocus,oninput,oninvalid,onkeydown,onkeypr ess,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown ,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup, onmousewheel,onpause,onplay,onplaying,onprogress,onratechange,onreset,on resize,onscroll,onseeked,onseeking,onselect,onstalled,onsubmit,onsuspend ,ontimeupdate,ontoggle,onvolumechange,onwaiting,onwheel,onauxclick,ongot pointercapture,onlostpointercapture,onpointerdown,onpointermove,onpointe rup,onpointercancel,onpointerover,onpointerout,onpointerenter,onpointerl eave,onselectstart,onselectionchange,onanimationend,onanimationiteration ,onanimationstart,ontransitionend,dataset,nonce,autofocus,tabIndex,click ,focus,blur,enterKeyHint,onformdata,onpointerrawupdate,attachInternals,n amespaceURI,prefix,localName,tagName,id,className,classList,slot,part,at tributes,shadowRoot,assignedSlot,innerHTML,outerHTML,scrollTop,scrollLef t,scrollWidth,scrollHeight,clientTop,clientLeft,clientWidth,clientHeight ,attributeStyleMap,onbeforecopy,onbeforecut,onbeforepaste,onsearch,eleme ntTiming,previousElementSibling,nextElementSibling,children,firstElement Child,lastElementChild,childElementCount,onfullscreenchange,onfullscreen error,onwebkitfullscreenchange,onwebkitfullscreenerror,setPointerCapture ,releasePointerCapture,hasPointerCapture,hasAttributes,getAttributeNames ,getAttribute,getAttributeNS,setAttribute,setAttributeNS,removeAttribute ,removeAttributeNS,hasAttribute,hasAttributeNS,toggleAttribute,getAttrib uteNode,getAttributeNodeNS,setAttributeNode,setAttributeNodeNS,removeAtt ributeNode,closest,matches,webkitMatchesSelector,attachShadow,getElement sByTagName,getElementsByTagNameNS,getElementsByClassName,insertAdjacentE lement,insertAdjacentText,insertAdjacentHTML,requestPointerLock,getClien tRects,getBoundingClientRect,scrollIntoView,scroll,scrollTo,scrollBy,scr ollIntoViewIfNeeded,animate,computedStyleMap,before,after,replaceWith,re move,prepend,append,querySelector,querySelectorAll,requestFullscreen,web kitRequestFullScreen,webkitRequestFullscreen,createShadowRoot,getDestina tionInsertionPoints,ELEMENT_NODE,ATTRIBUTE_NODE,TEXT_NODE,CDATA_SECTION_ NODE,ENTITY_REFERENCE_NODE,ENTITY_NODE,PROCESSING_INSTRUCTION_NODE,COMME NT_NODE,DOCUMENT_NODE,DOCUMENT_TYPE_NODE,DOCUMENT_FRAGMENT_NODE,NOTATION _NODE,DOCUMENT_POSITION_DISCONNECTED,DOCUMENT_POSITION_PRECEDING,DOCUMEN T_POSITION_FOLLOWING,DOCUMENT_POSITION_CONTAINS,DOCUMENT_POSITION_CONTAI NED_BY,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,nodeType,nodeName,baseU RI,isConnected,ownerDocument,parentNode,parentElement,childNodes,firstCh ild,lastChild,previousSibling,nextSibling,nodeValue,textContent,hasChild Nodes,getRootNode,normalize,cloneNode,isEqualNode,isSameNode,compareDocu mentPosition,contains,lookupPrefix,lookupNamespaceURI,isDefaultNamespace ,insertBefore,appendChild,replaceChild,removeChild,addEventListener,remo veEventListener,dispatchEvent

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u53EF\u4EE5\u4F7F\u7528\xA0<code>Virtual DOM</code>\xA0\u6765\u63CF\u8FF0\u771F\u5B9E\xA0<code>DOM</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  sel: &quot;div&quot;,
  data: {},
  children: undefined,
  text: &quot;Hello Virtual DOM&quot;,
  elm: undefined,
  key: undefined
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528-virtual-dom" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528-virtual-dom" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F7F\u7528 Virtual DOM</h2><ul><li>\u624B\u52A8\u64CD\u4F5C\xA0<code>DOM</code>\xA0\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u8FD8\u9700\u8981\u8003\u8651\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u867D\u7136\u6709\xA0<code>jQuery</code>\xA0\u7B49\u5E93\u7B80\u5316\xA0<code>DOM</code>\xA0\u64CD\u4F5C\uFF0C\u4F46\u662F\u968F\u7740\u9879\u76EE\u7684\u590D\u6742 DOM \u64CD\u4F5C\u590D\u6742\u63D0\u5347</li><li>\u4E3A\u4E86\u7B80\u5316\xA0<code>DOM</code>\xA0\u7684\u590D\u6742\u64CD\u4F5C\u4E8E\u662F\u51FA\u73B0\u4E86\u5404\u79CD\xA0<code>MVVM</code>\xA0\u6846\u67B6\uFF0C<code>MVVM</code>\xA0\u6846\u67B6\u89E3\u51B3\u4E86\u89C6\u56FE\u548C\u72B6\u6001\u7684\u540C\u6B65\u95EE\u9898</li><li>\u4E3A\u4E86\u7B80\u5316\u89C6\u56FE\u7684\u64CD\u4F5C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6A21\u677F\u5F15\u64CE\uFF0C\u4F46\u662F\u6A21\u677F\u5F15\u64CE\u6CA1\u6709\u89E3\u51B3\u8DDF\u8E2A\u72B6\u6001\u53D8\u5316\u7684\u95EE\u9898\uFF0C\u4E8E\u662F<code>Virtual DOM</code>\xA0\u51FA\u73B0\u4E86</li><li><code>Virtual DOM</code>\xA0\u7684\u597D\u5904\u662F\u5F53\u72B6\u6001\u6539\u53D8\u65F6\u4E0D\u9700\u8981\u7ACB\u5373\u66F4\u65B0 DOM\uFF0C\u53EA\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u6811\u6765\u63CF\u8FF0<code>DOM</code>\uFF0C<code>Virtual DOM</code>\xA0\u5185\u90E8\u5C06\u5F04\u6E05\u695A\u5982\u4F55\u6709\u6548(<code>diff</code>)\u7684\u66F4\u65B0\xA0<code>DOM</code></li><li>\u865A\u62DF\xA0<code>DOM</code>\xA0\u53EF\u4EE5\u7EF4\u62A4\u7A0B\u5E8F\u7684\u72B6\u6001\uFF0C\u8DDF\u8E2A\u4E0A\u4E00\u6B21\u7684\u72B6\u6001</li><li>\u901A\u8FC7\u6BD4\u8F83\u524D\u540E\u4E24\u6B21\u72B6\u6001\u7684\u5DEE\u5F02\u66F4\u65B0\u771F\u5B9E\xA0<code>DOM</code></li></ul><h2 id="\u865A\u62DF-dom-\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF-dom-\u7684\u4F5C\u7528" aria-hidden="true">#</a> \u865A\u62DF DOM \u7684\u4F5C\u7528</h2><ul><li>\u7EF4\u62A4\u89C6\u56FE\u548C\u72B6\u6001\u7684\u5173\u7CFB</li><li>\u590D\u6742\u89C6\u56FE\u60C5\u51B5\u4E0B\u63D0\u5347\u6E32\u67D3\u6027\u80FD</li><li>\u9664\u4E86\u6E32\u67D3\xA0<code>DOM</code>\xA0\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5B9E\u73B0\xA0<code>SSR(Nuxt.js/Next.js)</code>\u3001\u539F\u751F\u5E94\u7528(<code>Weex/React Native</code>)\u3001\u5C0F\u7A0B\u5E8F(<code>mpvue/uni-app</code>)\u7B49</li></ul><p><img src="https://s.poetries.work/images/20210328112610.png" alt=""></p><h2 id="virtual-dom-\u5E93" tabindex="-1"><a class="header-anchor" href="#virtual-dom-\u5E93" aria-hidden="true">#</a> Virtual DOM \u5E93</h2>`,13),v={href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"},u=l("Snabbdom(opens new window)"),m=i("<ul><li><code>Vue 2.x</code>\xA0\u5185\u90E8\u4F7F\u7528\u7684\xA0<code>Virtual DOM</code>\xA0\u5C31\u662F\u6539\u9020\u7684\xA0<code>Snabbdom</code></li><li>\u901A\u8FC7\u6A21\u5757\u53EF\u6269\u5C55</li><li>\u6E90\u7801\u4F7F\u7528\xA0<code>TypeScript</code>\xA0\u5F00\u53D1</li><li>\u6700\u5FEB\u7684\xA0<code>Virtual DOM</code>\xA0\u4E4B\u4E00</li></ul>",1),b={href:"https://github.com/Matt-Esch/virtual-dom",target:"_blank",rel:"noopener noreferrer"},p=l("virtual-dom(opens new window)"),h=i(`<h2 id="snabbdom-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#snabbdom-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> Snabbdom \u57FA\u672C\u4F7F\u7528</h2><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u521B\u5EFA\u9879\u76EE\u76EE\u5F55
md snabbdom-demo
# \u8FDB\u5165\u9879\u76EE\u76EE\u5F55
cd snabbdom-demo
# \u521B\u5EFA package.json yarn init -y
# \u672C\u5730\u5B89\u88C5 parcel
yarn add parcel-bundler

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\xA0<code>package.json</code>\xA0\u7684\xA0<code>scripts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;scripts&quot;: {
&quot;dev&quot;: &quot;parcel index.html --open&quot;, &quot;build&quot;: &quot;parcel build index.html&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u76EE\u5F55\u7ED3\u6784</p><p><img src="https://s.poetries.work/images/20210328123653.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add snabbdom

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import{init,h,thunk}from&#39;snabbdom&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>snabbdom</code>\xA0\u7684\u6838\u5FC3\u4EC5\u63D0\u4F9B\u6700\u57FA\u672C\u7684\u529F\u80FD\uFF0C\u53EA\u5BFC\u51FA\u4E86\u4E09\u4E2A\u51FD\u6570\xA0<code>init()</code>\u3001<code>h()</code>\u3001<code>thunk()</code></p></blockquote><ul><li><code>init()</code>\xA0\u662F\u4E00\u4E2A\u9AD8\u9636\u51FD\u6570\uFF0C\u8FD4\u56DE\xA0<code>patch()</code></li><li><code>h()</code>\xA0\u8FD4\u56DE\u865A\u62DF\u8282\u70B9\xA0<code>VNode</code>\uFF0C\u8FD9\u4E2A\u51FD\u6570\u6211\u4EEC\u5728\u4F7F\u7528\xA0<code>Vue.js</code>\xA0\u7684\u65F6\u5019\u89C1\u8FC7</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Vue({
  router,
  store,
  render: h =&gt; h(App)
}).$mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>thunk()</code>\xA0\u662F\u4E00\u79CD\u4F18\u5316\u7B56\u7565\uFF0C\u53EF\u4EE5\u5728\u5904\u7406\u4E0D\u53EF\u53D8\u6570\u636E\u65F6\u4F7F\u7528</li></ul><blockquote><p>\u6CE8\u610F:\u5BFC\u5165\u65F6\u5019\u4E0D\u80FD\u4F7F\u7528\xA0<code>import snabbdom from &#39;snabbdom&#39;</code>\u3002\u539F\u56E0:<code>node_modules/src/snabbdom.ts</code>\xA0\u672B\u5C3E\u5BFC\u51FA\u4F7F\u7528\u7684\u8BED\u6CD5\u662F\xA0<code>export</code>\xA0\u5BFC\u51FA\xA0<code>API</code>\uFF0C\u6CA1\u6709\u4F7F\u7528\xA0<code>export default</code>\xA0\u5BFC\u51FA\u9ED8\u8BA4\u8F93\u51FA</p></blockquote><p><img src="https://s.poetries.work/images/20210328124133.png" alt=""></p><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u4F8B\u5B501</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { h, init } from &#39;snabbdom&#39;

// 1. hello world
// \u53C2\u6570\uFF1A\u6570\u7EC4\uFF0C\u6A21\u5757
// \u8FD4\u56DE\u503C\uFF1Apatch\u51FD\u6570\uFF0C\u4F5C\u7528\u5BF9\u6BD4\u4E24\u4E2Avnode\u7684\u5DEE\u5F02\u66F4\u65B0\u5230\u771F\u5B9EDOM
let patch = init([])
// \u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u6807\u7B7E+\u9009\u62E9\u5668
// \u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1A\u5982\u679C\u662F\u5B57\u7B26\u4E32\u7684\u8BDD\u5C31\u662F\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9
let vnode = h(&#39;div#container.cls&#39;, {
  hook: {
    init (vnode) {
      console.log(vnode.elm)
    },
    create (emptyVnode, vnode) {
      console.log(vnode.elm)
    }
  }
}, &#39;Hello World&#39;)

let app = document.querySelector(&#39;#app&#39;)
// \u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u53EF\u4EE5\u662FDOM\u5143\u7D20\uFF0C\u5185\u90E8\u4F1A\u628ADOM\u5143\u7D20\u8F6C\u6362\u6210VNode
// \u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1AVNode
// \u8FD4\u56DE\u503C\uFF1AVNde
let oldVnode = patch(app, vnode)

// \u5047\u8BBE\u7684\u65F6\u523B
vnode = h(&#39;div&#39;, &#39;Hello Snabbdom&#39;)

patch(oldVnode, vnode)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B502</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 2. div\u4E2D\u653E\u7F6E\u5B50\u5143\u7D20 h1,p
import { h, init } from &#39;snabbdom&#39;

let patch = init([])

let vnode = h(&#39;div#container&#39;, [
  h(&#39;h1&#39;, &#39;Hello Snabbdom&#39;),
  h(&#39;p&#39;, &#39;\u8FD9\u662F\u4E00\u4E2Ap\u6807\u7B7E&#39;)
])

let app = document.querySelector(&#39;#app&#39;)

let oldVnode = patch(app, vnode)

setTimeout(() =&gt; {
  vnode = h(&#39;div#container&#39;, [
    h(&#39;h1&#39;, &#39;Hello World&#39;),
    h(&#39;p&#39;, &#39;Hello P&#39;)
  ])
  patch(oldVnode, vnode)

  // \u6E05\u7A7A\u9875\u9762\u5143\u7D20 -- \u9519\u8BEF
  // patch(oldVnode, null)
  patch(oldVnode, h(&#39;!&#39;))
}, 2000);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B503 debug-patchVnode</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { h, init } from &#39;snabbdom&#39;

let patch = init([])

// \u9996\u6B21\u6E32\u67D3
let vnode = h(&#39;div&#39;, &#39;Hello World&#39;)
let app = document.querySelector(&#39;#app&#39;)
let oldVnode = patch(app, vnode)

// patchVnode \u7684\u6267\u884C\u8FC7\u7A0B
vnode = h(&#39;div&#39;, &#39;Hello Snabbdom&#39;)
patch(oldVnode, vnode)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B504 debug-updateChildren</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { h, init } from &#39;snabbdom&#39;

let patch = init([])

// \u9996\u6B21\u6E32\u67D3
let vnode = h(&#39;ul&#39;, [
  h(&#39;li&#39;, &#39;\u9996\u9875&#39;),
  h(&#39;li&#39;, &#39;\u89C6\u9891&#39;),
  h(&#39;li&#39;, &#39;\u5FAE\u535A&#39;)
])
let app = document.querySelector(&#39;#app&#39;)
let oldVnode = patch(app, vnode)

// updateChildren \u7684\u6267\u884C\u8FC7\u7A0B
vnode = h(&#39;ul&#39;, [
  h(&#39;li&#39;, &#39;\u9996\u9875&#39;),
  h(&#39;li&#39;, &#39;\u5FAE\u535A&#39;),
  h(&#39;li&#39;, &#39;\u89C6\u9891&#39;)
])
patch(oldVnode, vnode)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B505 debug-updateChildren-key</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { h, init } from &#39;snabbdom&#39;

let patch = init([])

// \u9996\u6B21\u6E32\u67D3
let vnode = h(&#39;ul&#39;, [
  h(&#39;li&#39;, { key: &#39;a&#39; }, &#39;\u9996\u9875&#39;),
  h(&#39;li&#39;, { key: &#39;b&#39; }, &#39;\u89C6\u9891&#39;),
  h(&#39;li&#39;, { key: &#39;c&#39; }, &#39;\u5FAE\u535A&#39;)
])
let app = document.querySelector(&#39;#app&#39;)
let oldVnode = patch(app, vnode)

// updateChildren \u7684\u6267\u884C\u8FC7\u7A0B
vnode = h(&#39;ul&#39;, [
  h(&#39;li&#39;, { key: &#39;a&#39; }, &#39;\u9996\u9875&#39;),
  h(&#39;li&#39;, { key: &#39;c&#39; }, &#39;\u5FAE\u535A&#39;),
  h(&#39;li&#39;, { key: &#39;b&#39; }, &#39;\u89C6\u9891&#39;)
])
patch(oldVnode, vnode)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h3><blockquote><p><code>Snabbdom</code>\xA0\u7684\u6838\u5FC3\u5E93\u5E76\u4E0D\u80FD\u5904\u7406\u5143\u7D20\u7684<code>\u5C5E\u6027/\u6837\u5F0F/\u4E8B\u4EF6</code>\u7B49\uFF0C\u5982\u679C\u9700\u8981\u5904\u7406\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6A21\u5757</p></blockquote><p>\u5E38\u7528\u6A21\u5757</p><p>\u5B98\u65B9\u63D0\u4F9B\u4E86 6 \u4E2A\u6A21\u5757</p><ul><li><code>attributes</code><ul><li>\u8BBE\u7F6E\xA0<code>DOM</code>\xA0\u5143\u7D20\u7684\u5C5E\u6027\uFF0C\u4F7F\u7528\xA0<code>setAttribute ()</code></li><li>\u5904\u7406\u5E03\u5C14\u7C7B\u578B\u7684\u5C5E\u6027</li></ul></li><li><code>props</code><ul><li>\u548C\xA0<code>attributes</code>\xA0\u6A21\u5757\u76F8\u4F3C\uFF0C\u8BBE\u7F6E\xA0<code>DOM</code>\xA0\u5143\u7D20\u7684\u5C5E\u6027\xA0<code>element[attr] = value</code></li><li>\u4E0D\u5904\u7406\u5E03\u5C14\u7C7B\u578B\u7684\u5C5E\u6027</li></ul></li><li><code>class</code><ul><li>\u5207\u6362\u7C7B\u6837\u5F0F</li><li>\u6CE8\u610F:\u7ED9\u5143\u7D20\u8BBE\u7F6E\u7C7B\u6837\u5F0F\u662F\u901A\u8FC7\xA0<code>sel</code>\xA0\u9009\u62E9\u5668</li></ul></li><li><code>dataset</code><ul><li>\u8BBE\u7F6E\xA0<code>data-*</code>\xA0\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\xA0<code>eventlisteners</code></li><li>\u6CE8\u518C\u548C\u79FB\u9664\u4E8B\u4EF6</li></ul></li><li><code>style</code><ul><li>\u8BBE\u7F6E\u884C\u5185\u6837\u5F0F\uFF0C\u652F\u6301\u52A8\u753B</li><li><code>delayed/remove/destroy</code></li></ul></li></ul><p>\u6A21\u5757\u4F7F\u7528</p><blockquote><p>\u6A21\u5757\u4F7F\u7528\u6B65\u9AA4:</p></blockquote><ul><li>\u5BFC\u5165\u9700\u8981\u7684\u6A21\u5757</li><li><code>init()</code>\xA0\u4E2D\u6CE8\u518C\u6A21\u5757</li><li>\u4F7F\u7528\xA0<code>h()</code>\xA0\u51FD\u6570\u521B\u5EFA\xA0<code>VNode</code>\xA0\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u628A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8BBE\u7F6E\u4E3A\u5BF9\u8C61\uFF0C\u5176\u4ED6\u53C2\u6570\u5F80\u540E\u79FB</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { init, h } from &#39;snabbdom&#39;
// 1. \u5BFC\u5165\u6A21\u5757
import style from &#39;snabbdom/modules/style&#39;
import eventlisteners from &#39;snabbdom/modules/eventlisteners&#39;
// 2. \u6CE8\u518C\u6A21\u5757
let patch = init([
  style,
  eventlisteners
])
// 3. \u4F7F\u7528 h() \u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u5165\u6A21\u5757\u9700\u8981\u7684\u6570\u636E\uFF08\u5BF9\u8C61\uFF09
let vnode = h(&#39;div&#39;, {
  style: {
    backgroundColor: &#39;red&#39;
  },
  on: {
    click: eventHandler
  }
}, [
  h(&#39;h1&#39;, &#39;Hello Snabbdom&#39;),
  h(&#39;p&#39;, &#39;\u8FD9\u662Fp\u6807\u7B7E&#39;)
])

function eventHandler () {
  console.log(&#39;\u70B9\u51FB\u6211\u4E86&#39;)
}

let app = document.querySelector(&#39;#app&#39;)

let oldVnode = patch(app, vnode)

vnode = h(&#39;div&#39;, &#39;hello&#39;)
patch(oldVnode, vnode)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="snabbdom-\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#snabbdom-\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> Snabbdom \u6E90\u7801\u89E3\u6790</h2><h3 id="snabbdom-\u7684\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#snabbdom-\u7684\u6838\u5FC3" aria-hidden="true">#</a> Snabbdom \u7684\u6838\u5FC3</h3><ul><li>\u4F7F\u7528\xA0<code>h()</code>\xA0\u51FD\u6570\u521B\u5EFA JavaScript \u5BF9\u8C61(<code>VNode</code>)\u63CF\u8FF0\u771F\u5B9E DOM</li><li><code>init()</code>\xA0\u8BBE\u7F6E\u6A21\u5757\uFF0C\u521B\u5EFA\xA0<code>patch()</code></li><li><code>patch()</code>\xA0\u6BD4\u8F83\u65B0\u65E7\u4E24\u4E2A\xA0<code>VNode</code></li><li>\u628A\u53D8\u5316\u7684\u5185\u5BB9\u66F4\u65B0\u5230\u771F\u5B9E\xA0<code>DOM</code>\xA0\u6811\u4E0A</li></ul><p>Snabbdom \u6E90\u7801</p><blockquote><p>\u6E90\u7801\u5730\u5740: https://github.com/snabbdom/snabbdom</p></blockquote><p>src \u76EE\u5F55\u7ED3\u6784</p><p><img src="https://s.poetries.work/images/20210328125857.png" alt=""></p><h3 id="h-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#h-\u51FD\u6570" aria-hidden="true">#</a> h \u51FD\u6570</h3><ul><li><code>h()</code>\xA0\u51FD\u6570\u4ECB\u7ECD: \u5728\u4F7F\u7528\xA0<code>Vue</code>\xA0\u7684\u65F6\u5019\u89C1\u8FC7\xA0<code>h()</code>\xA0\u51FD\u6570</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Vue({
  router,
  store,
  render: h =&gt; h(App)
}).$mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>h()</code>\xA0\u51FD\u6570\u6700\u65E9\u89C1\u4E8E\xA0<code>hyperscript</code>\uFF0C\u4F7F\u7528 JavaScript \u521B\u5EFA\u8D85\u6587\u672C</li><li>Snabbdom \u4E2D\u7684\xA0<code>h()</code>\xA0\u51FD\u6570\u4E0D\u662F\u7528\u6765\u521B\u5EFA\u8D85\u6587\u672C\uFF0C\u800C\u662F\u521B\u5EFA\xA0<code>VNode</code></li></ul><p>\u51FD\u6570\u91CD\u8F7D</p><ul><li>\u6982\u5FF5</li><li>\u53C2\u6570\u4E2A\u6570\u6216\u7C7B\u578B\u4E0D\u540C\u7684\u51FD\u6570</li><li><code>JavaScript</code>\xA0\u4E2D\u6CA1\u6709\u91CD\u8F7D\u7684\u6982\u5FF5</li><li><code>TypeScript</code>\xA0\u4E2D\u6709\u91CD\u8F7D\uFF0C\u4E0D\u8FC7\u91CD\u8F7D\u7684\u5B9E\u73B0\u8FD8\u662F\u901A\u8FC7\u4EE3\u7801\u8C03\u6574\u53C2\u6570</li><li>\u91CD\u8F7D\u7684\u793A\u610F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function add (a, b) {
  console.log(a + b)
}
function add (a, b, c) {
  console.log(a + b + c)
}
add(1, 2)
add(1, 2, 3)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6E90\u7801\u4F4D\u7F6E:<code>src/h.ts</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// h\u51FD\u6570\u7684\u91CD\u8F7D
export function h (sel: string): VNode
export function h (sel: string, data: VNodeData | null): VNode
export function h (sel: string, children: VNodeChildren): VNode
export function h (sel: string, data: VNodeData | null, children: VNodeChildren): VNode
export function h (sel: any, b?: any, c?: any): VNode {
  let data: VNodeData = {}
  let children: any
  let text: any
  let i: number
  // \u5904\u7406\u53C2\u6570\uFF0C\u5B9E\u73B0\u91CD\u8F7D\u7684\u673A\u5236
  if (c !== undefined) {
    // \u5904\u7406\u4E09\u4E2A\u53C2\u6570\u7684\u60C5\u51B5
    // sel\u3001data\u3001children/text
    if (b !== null) {
      data = b
    }
    if (is.array(c)) {
      children = c
      // \u5982\u679C c \u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57
    } else if (is.primitive(c)) {
      text = c
    } else if (c &amp;&amp; c.sel) {
      children = [c]
    }
  } else if (b !== undefined &amp;&amp; b !== null) {
    // \u5904\u7406\u4E24\u4E2A\u53C2\u6570\u7684\u60C5\u51B5
    if (is.array(b)) {
      children = b
      // \u5982\u679C b \u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57
    } else if (is.primitive(b)) {
      text = b
      // \u5982\u679C b \u662F VNode
    } else if (b &amp;&amp; b.sel) {
      children = [b]
    } else { data = b }
  }
  if (children !== undefined) {
    // \u5904\u7406 children \u4E2D\u7684\u539F\u59CB\u503C(string/number)
    for (i = 0; i &lt; children.length; ++i) {
      // \u5982\u679C child \u662F string/number\uFF0C\u521B\u5EFA\u6587\u672C\u8282\u70B9
      if (is.primitive(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i], undefined)
    }
  }
  if (
    sel[0] === &#39;s&#39; &amp;&amp; sel[1] === &#39;v&#39; &amp;&amp; sel[2] === &#39;g&#39; &amp;&amp;
    (sel.length === 3 || sel[3] === &#39;.&#39; || sel[3] === &#39;#&#39;)
  ) {
    // \u5982\u679C\u662F svg\uFF0C\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4
    addNS(data, children, sel)
  }
  // \u8FD4\u56DE VNode
  return vnode(sel, data, children, text, undefined)
};

// \u5BFC\u51FA\u6A21\u5757
export default h;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vnode" tabindex="-1"><a class="header-anchor" href="#vnode" aria-hidden="true">#</a> VNode</h3><blockquote><p>\u4E00\u4E2A\xA0<code>VNode</code>\xA0\u5C31\u662F\u4E00\u4E2A\u865A\u62DF\u8282\u70B9\u7528\u6765\u63CF\u8FF0\u4E00\u4E2A\xA0<code>DOM</code>\xA0\u5143\u7D20\uFF0C\u5982\u679C\u8FD9\u4E2A\xA0<code>VNode</code>\xA0\u6709\xA0<code>children</code>\xA0\u5C31\u662F\xA0<code>Virtual DOM</code></p></blockquote><p>\u6E90\u7801\u4F4D\u7F6E:\xA0<code>src/vnode.ts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export interface VNodeData {
  props?: Props
  attrs?: Attrs
  class?: Classes
  style?: VNodeStyle
  dataset?: Dataset
  on?: On
  hero?: Hero
  attachData?: AttachData
  hook?: Hooks
  key?: Key
  ns?: string // for SVGs
  fn?: () =&gt; VNode // for thunks
  args?: any[] // for thunks
  is?: string // for custom elements v1
  [key: string]: any // for any other 3rd party module
}

export interface VNode {
  // \u9009\u62E9\u5668
  sel: string | undefined
  // \u8282\u70B9\u6570\u636E:\u5C5E\u6027/\u6837\u5F0F/\u4E8B\u4EF6\u7B49
  data: VNodeData | undefined
  // \u5B50\u8282\u70B9\uFF0C\u548C text \u53EA\u80FD\u4E92\u65A5
  children: Array&lt;VNode | string&gt; | undefined
  // \u8BB0\u5F55 vnode \u5BF9\u5E94\u7684\u771F\u5B9E DOM
  elm: Node | undefined
  // \u8282\u70B9\u4E2D\u7684\u5185\u5BB9\uFF0C\u548C children \u53EA\u80FD\u4E92\u65A5
  text: string | undefined
  // \u4F18\u5316\u7528
  key: Key | undefined
}

export function vnode (sel: string | undefined,
  data: any | undefined,
  children: Array&lt;VNode | string&gt; | undefined,
  text: string | undefined,
  elm: Element | Text | undefined): VNode {
  const key = data === undefined ? undefined : data.key
  return { sel, data, children, text, elm, key }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="snabbdom" tabindex="-1"><a class="header-anchor" href="#snabbdom" aria-hidden="true">#</a> snabbdom</h3><ul><li><code>patch(oldVnode, newVnode)</code></li><li>\u6253\u8865\u4E01\uFF0C\u628A\u65B0\u8282\u70B9\u4E2D\u53D8\u5316\u7684\u5185\u5BB9\u6E32\u67D3\u5230\u771F\u5B9E\xA0<code>DOM</code>\uFF0C\u6700\u540E\u8FD4\u56DE\u65B0\u8282\u70B9\u4F5C\u4E3A\u4E0B\u4E00\u6B21\u5904\u7406\u7684\u65E7\u8282\u70B9</li><li>\u5BF9\u6BD4\u65B0\u65E7\xA0<code>VNode</code>\xA0\u662F\u5426\u76F8\u540C\u8282\u70B9(\u8282\u70B9\u7684\xA0<code>key</code>\xA0\u548C\xA0<code>sel</code>\xA0\u76F8\u540C)</li><li>\u5982\u679C\u4E0D\u662F\u76F8\u540C\u8282\u70B9\uFF0C\u5220\u9664\u4E4B\u524D\u7684\u5185\u5BB9\uFF0C\u91CD\u65B0\u6E32\u67D3</li><li>\u5982\u679C\u662F\u76F8\u540C\u8282\u70B9\uFF0C\u518D\u5224\u65AD\u65B0\u7684\xA0<code>VNode</code>\xA0\u662F\u5426\u6709\xA0<code>text</code>\uFF0C\u5982\u679C\u6709\u5E76\u4E14\u548C\xA0<code>oldVnode</code>\xA0\u7684\xA0<code>text</code>\xA0\u4E0D\u540C\uFF0C\u76F4\u63A5\u66F4 \u65B0\u6587\u672C\u5185\u5BB9</li><li>\u5982\u679C\u65B0\u7684\xA0<code>VNode</code>\xA0\u6709\xA0<code>children</code>\uFF0C\u5224\u65AD\u5B50\u8282\u70B9\u662F\u5426\u6709\u53D8\u5316\uFF0C\u5224\u65AD\u5B50\u8282\u70B9\u7684\u8FC7\u7A0B\u4F7F\u7528\u7684\u5C31\u662F\xA0<code>diff</code>\xA0\u7B97\u6CD5</li><li><code>diff</code>\xA0\u8FC7\u7A0B\u53EA\u8FDB\u884C\u540C\u5C42\u7EA7\u6BD4\u8F83</li></ul><p><img src="https://s.poetries.work/images/20210329091820.png" alt=""></p><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3><ul><li>\u529F\u80FD:\xA0<code>init(modules, domApi)</code>\uFF0C\u8FD4\u56DE\xA0<code>patch()</code>\u51FD\u6570(\u9AD8\u9636\u51FD\u6570)</li><li>\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u9AD8\u9636\u51FD\u6570? <ul><li>\u56E0\u4E3A\xA0<code>patch()</code>\xA0\u51FD\u6570\u518D\u5916\u90E8\u4F1A\u8C03\u7528\u591A\u6B21\uFF0C\u6BCF\u6B21\u8C03\u7528\u4F9D\u8D56\u4E00\u4E9B\u53C2\u6570\uFF0C\u6BD4\u5982:\xA0<code>modules/domApi/cbs</code></li><li>\u901A\u8FC7\u9AD8\u9636\u51FD\u6570\u8BA9\xA0<code>init()</code>\xA0\u5185\u90E8\u5F62\u6210\u95ED\u5305\uFF0C\u8FD4\u56DE\u7684\xA0<code>patch()</code>\xA0\u53EF\u4EE5\u8BBF\u95EE\u5230\xA0<code>modules/domApi/cbs</code>\uFF0C\u800C \u4E0D\u9700\u8981\u91CD\u65B0\u521B\u5EFA</li></ul></li><li><code>init()</code>\xA0\u5728\u8FD4\u56DE\xA0<code>patch()</code>\xA0\u4E4B\u524D\uFF0C\u9996\u5148\u6536\u96C6\u4E86\u6240\u6709\u6A21\u5757\u4E2D\u7684\u94A9\u5B50\u51FD\u6570\u5B58\u50A8\u5230\xA0<code>cbs</code>\xA0\u5BF9\u8C61\u4E2D</li></ul><blockquote><p>\u6E90\u7801\u4F4D\u7F6E:<code>src/init.ts</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export function init (modules: Array&lt;Partial&lt;Module&gt;&gt;, domApi?: DOMAPI) {
  let i: number
  let j: number
  const cbs: ModuleHooks = {
    create: [],
    update: [],
    remove: [],
    destroy: [],
    pre: [],
    post: []
  }

  const api: DOMAPI = domApi !== undefined ? domApi : htmlDomApi

  for (i = 0; i &lt; hooks.length; ++i) {
    cbs[hooks[i]] = []
    for (j = 0; j &lt; modules.length; ++j) {
      const hook = modules[j][hooks[i]]
      if (hook !== undefined) {
        (cbs[hooks[i]] as any[]).push(hook)
      }
    }
  }
  ...

  return function patch (oldVnode: VNode | Element, vnode: VNode): VNode {
    let i: number, elm: Node, parent: Node
    const insertedVnodeQueue: VNodeQueue = []
    for (i = 0; i &lt; cbs.pre.length; ++i) cbs.pre[i]()

    if (!isVnode(oldVnode)) {
      oldVnode = emptyNodeAt(oldVnode)
    }

    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue)
    } else {
      elm = oldVnode.elm!
      parent = api.parentNode(elm) as Node

      createElm(vnode, insertedVnodeQueue)

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm!, api.nextSibling(elm))
        removeVnodes(parent, [oldVnode], 0, 0)
      }
    }

    for (i = 0; i &lt; insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data!.hook!.insert!(insertedVnodeQueue[i])
    }
    for (i = 0; i &lt; cbs.post.length; ++i) cbs.post[i]()
    return vnode
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="patch" tabindex="-1"><a class="header-anchor" href="#patch" aria-hidden="true">#</a> patch</h3><ul><li>\u529F\u80FD: <ul><li>\u4F20\u5165\u65B0\u65E7\xA0<code>VNode</code>\uFF0C\u5BF9\u6BD4\u5DEE\u5F02\uFF0C\u628A\u5DEE\u5F02\u6E32\u67D3\u5230\xA0<code>DOM</code></li><li>\u8FD4\u56DE\u65B0\u7684\xA0<code>VNode</code>\uFF0C\u4F5C\u4E3A\u4E0B\u4E00\u6B21\xA0<code>patch()</code>\xA0\u7684\xA0<code>oldVnode</code></li></ul></li><li>\u6267\u884C\u8FC7\u7A0B: <ul><li>\u9996\u5148\u6267\u884C\u6A21\u5757\u4E2D\u7684\u94A9\u5B50\u51FD\u6570\xA0<code>pre</code></li><li>\u5982\u679C\xA0<code>oldVnode</code>\xA0\u548C\xA0<code>vnode</code>\xA0\u76F8\u540C(<code>key</code>\xA0\u548C\xA0<code>sel</code>\xA0\u76F8\u540C) <ul><li>\u8C03\u7528\xA0<code>patchVnode()</code>\uFF0C\u627E\u8282\u70B9\u7684\u5DEE\u5F02\u5E76\u66F4\u65B0\xA0<code>DOM</code></li></ul></li><li>\u5982\u679C\xA0<code>oldVnode</code>\xA0\u662F\xA0<code>DOM</code>\xA0\u5143\u7D20 <ul><li>\u628A\xA0<code>DOM</code>\xA0\u5143\u7D20\u8F6C\u6362\u6210\xA0<code>oldVnode</code></li><li>\u8C03\u7528\xA0<code>createElm()</code>\xA0\u628A\xA0<code>vnode</code>\xA0\u8F6C\u6362\u4E3A\u771F\u5B9E\xA0<code>DOM</code>\uFF0C\u8BB0\u5F55\u5230\xA0<code>vnode.elm</code></li><li>\u628A\u521A\u521B\u5EFA\u7684\xA0<code>DOM</code>\xA0\u5143\u7D20\u63D2\u5165\u5230\xA0<code>parent</code>\xA0\u4E2D</li><li>\u79FB\u9664\u8001\u8282\u70B9</li><li>\u89E6\u53D1\u7528\u6237\u8BBE\u7F6E\u7684\xA0<code>create</code>\xA0\u94A9\u5B50\u51FD\u6570</li></ul></li></ul></li></ul><p>\u6E90\u7801\u4F4D\u7F6E:<code>src/snabbdom.ts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>return function patch (oldVnode: VNode | Element, vnode: VNode): VNode {
  let i: number, elm: Node, parent: Node
  // \u4FDD\u5B58\u65B0\u63D2\u5165\u8282\u70B9\u7684\u961F\u5217\uFF0C\u4E3A\u4E86\u89E6\u53D1\u94A9\u5B50\u51FD\u6570
  const insertedVnodeQueue: VNodeQueue = []
  // \u6267\u884C\u6A21\u5757\u7684 pre \u94A9\u5B50\u51FD\u6570
  for (i = 0; i &lt; cbs.pre.length; ++i) cbs.pre[i]()

  // \u5982\u679C oldVnode \u4E0D\u662F VNode\uFF0C\u521B\u5EFA VNode \u5E76\u8BBE\u7F6E elm
  if (!isVnode(oldVnode)) {
    // \u628A DOM \u5143\u7D20\u8F6C\u6362\u6210\u7A7A\u7684 VNode
    oldVnode = emptyNodeAt(oldVnode)
  }
  // \u5982\u679C\u65B0\u65E7\u8282\u70B9\u662F\u76F8\u540C\u8282\u70B9(key \u548C sel \u76F8\u540C)
  if (sameVnode(oldVnode, vnode)) {
    // \u627E\u8282\u70B9\u7684\u5DEE\u5F02\u5E76\u66F4\u65B0 DOM
    patchVnode(oldVnode, vnode, insertedVnodeQueue)
  } else {
    // \u5982\u679C\u65B0\u65E7\u8282\u70B9\u4E0D\u540C\uFF0Cvnode \u521B\u5EFA\u5BF9\u5E94\u7684 DOM
    // \u83B7\u53D6\u5F53\u524D\u7684 DOM \u5143\u7D20
    elm = oldVnode.elm!
    parent = api.parentNode(elm) as Node
    // \u89E6\u53D1 init/create \u94A9\u5B50\u51FD\u6570,\u521B\u5EFA DOM
    createElm(vnode, insertedVnodeQueue)

    if (parent !== null) {
      // \u5982\u679C\u7236\u8282\u70B9\u4E0D\u4E3A\u7A7A\uFF0C\u628A vnode \u5BF9\u5E94\u7684 DOM \u63D2\u5165\u5230\u6587\u6863\u4E2D
      api.insertBefore(parent, vnode.elm!, api.nextSibling(elm))
      // \u79FB\u9664\u8001\u8282\u70B9
      removeVnodes(parent, [oldVnode], 0, 0)
    }
  }
  // \u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684 insert \u94A9\u5B50\u51FD\u6570
  for (i = 0; i &lt; insertedVnodeQueue.length; ++i) {
    insertedVnodeQueue[i].data!.hook!.insert!(insertedVnodeQueue[i])
  }
  // \u6267\u884C\u6A21\u5757\u7684 post \u94A9\u5B50\u51FD\u6570
  for (i = 0; i &lt; cbs.post.length; ++i) cbs.post[i]()
  // \u8FD4\u56DE vnode
  return vnode
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createelm" tabindex="-1"><a class="header-anchor" href="#createelm" aria-hidden="true">#</a> createElm</h3><ul><li><p>\u529F\u80FD:</p><ul><li><code>createElm(vnode, insertedVnodeQueue)</code>\uFF0C\u8FD4\u56DE\u521B\u5EFA\u7684\xA0<code>DOM</code>\xA0\u5143\u7D20</li><li>\u521B\u5EFA\xA0<code>vnode</code>\xA0\u5BF9\u5E94\u7684\xA0<code>DOM</code>\xA0\u5143\u7D20</li></ul></li><li><p>\u6267\u884C\u8FC7\u7A0B:</p></li><li><p>\u9996\u5148\u89E6\u53D1\u7528\u6237\u8BBE\u7F6E\u7684\xA0<code>init</code>\xA0\u94A9\u5B50\u51FD\u6570</p></li><li><p>\u5982\u679C\u9009\u62E9\u5668\u662F<code>!</code>\uFF0C\u521B\u5EFA\u8BC4\u8BBA\u8282\u70B9</p></li><li><p>\u5982\u679C\u9009\u62E9\u5668\u4E3A\u7A7A\uFF0C\u521B\u5EFA\u6587\u672C\u8282\u70B9</p></li><li><p>\u5982\u679C\u9009\u62E9\u5668\u4E0D\u4E3A\u7A7A</p><ul><li>\u89E3\u6790\u9009\u62E9\u5668\uFF0C\u8BBE\u7F6E\u6807\u7B7E\u7684\xA0<code>id</code>\xA0\u548C\xA0<code>class</code>\xA0\u5C5E\u6027</li><li>\u6267\u884C\u6A21\u5757\u7684\xA0<code>create</code>\xA0\u94A9\u5B50\u51FD\u6570</li><li>\u5982\u679C\xA0<code>vnode</code>\xA0\u6709\xA0<code>children</code>\uFF0C\u521B\u5EFA\u5B50\xA0<code>vnode</code>\xA0\u5BF9\u5E94\u7684\xA0<code>DOM</code>\uFF0C\u8FFD\u52A0\u5230\xA0<code>DOM</code>\xA0\u6811</li><li>\u5982\u679C\xA0<code>vnode</code>\xA0\u7684\xA0<code>text</code>\xA0\u503C\u662F\xA0<code>string/number</code>\uFF0C\u521B\u5EFA\u6587\u672C\u8282\u70B9\u5E76\u8FFD\u51FB\u5230\xA0<code>DOM</code>\xA0\u6811</li><li>\u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684\xA0<code>create</code>\xA0\u94A9\u5B50\u51FD\u6570</li><li>\u5982\u679C\u6709\u7528\u6237\u8BBE\u7F6E\u7684\xA0<code>insert</code>\xA0\u94A9\u5B50\u51FD\u6570\uFF0C\u628A\xA0<code>vnode</code>\xA0\u6DFB\u52A0\u5230\u961F\u5217\u4E2D</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createElm (vnode: VNode, insertedVnodeQueue: VNodeQueue): Node {
  let i: any
  let data = vnode.data
  if (data !== undefined) {
    // \u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684 init \u94A9\u5B50\u51FD\u6570
    const init = data.hook?.init
    if (isDef(init)) {
      init(vnode)
      data = vnode.data
    }
  }
  const children = vnode.children
  const sel = vnode.sel
  if (sel === &#39;!&#39;) {
    // \u5982\u679C\u9009\u62E9\u5668\u662F!\uFF0C\u521B\u5EFA\u8BC4\u8BBA\u8282\u70B9
    if (isUndef(vnode.text)) {
      vnode.text = &#39;&#39;
    }
    vnode.elm = api.createComment(vnode.text!)
  } else if (sel !== undefined) {
    // Parse selector
    // \u5982\u679C\u9009\u62E9\u5668\u4E0D\u4E3A\u7A7A
    // \u89E3\u6790\u9009\u62E9\u5668
    // Parse selector
    const hashIdx = sel.indexOf(&#39;#&#39;)
    const dotIdx = sel.indexOf(&#39;.&#39;, hashIdx)
    const hash = hashIdx &gt; 0 ? hashIdx : sel.length
    const dot = dotIdx &gt; 0 ? dotIdx : sel.length
    const tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel
    const elm = vnode.elm = isDef(data) &amp;&amp; isDef(i = data.ns)
      ? api.createElementNS(i, tag, data)
      : api.createElement(tag, data)
    if (hash &lt; dot) elm.setAttribute(&#39;id&#39;, sel.slice(hash + 1, dot))
    if (dotIdx &gt; 0) elm.setAttribute(&#39;class&#39;, sel.slice(dot + 1).replace(/\\./g, &#39; &#39;))
    // \u6267\u884C\u6A21\u5757\u7684 create \u94A9\u5B50\u51FD\u6570
    for (i = 0; i &lt; cbs.create.length; ++i) cbs.create[i](emptyNode, vnode)
    // \u5982\u679C vnode \u4E2D\u6709\u5B50\u8282\u70B9\uFF0C\u521B\u5EFA\u5B50 vnode \u5BF9\u5E94\u7684 DOM \u5143\u7D20\u5E76\u8FFD\u52A0\u5230 DOM \u6811\u4E0A
    if (is.array(children)) {
      for (i = 0; i &lt; children.length; ++i) {
        const ch = children[i]
        if (ch != null) {
          api.appendChild(elm, createElm(ch as VNode, insertedVnodeQueue))
        }
      }
    } else if (is.primitive(vnode.text)) {
      // \u5982\u679C vnode \u7684 text \u503C\u662F string/number\uFF0C\u521B\u5EFA\u6587\u672C\u8282\u70B9\u5E76\u8FFD\u52A0\u5230 DOM \u6811
      api.appendChild(elm, api.createTextNode(vnode.text))
    }
    const hook = vnode.data!.hook
    if (isDef(hook)) {
      // \u6267\u884C\u7528\u6237\u4F20\u5165\u7684\u94A9\u5B50 create
      hook.create?.(emptyNode, vnode)
      if (hook.insert) {
        // \u628A vnode \u6DFB\u52A0\u5230\u961F\u5217\u4E2D\uFF0C\u4E3A\u540E\u7EED\u6267\u884C insert \u94A9\u5B50\u505A\u51C6\u5907
        insertedVnodeQueue.push(vnode)
      }
    }
  } else {
    // \u5982\u679C\u9009\u62E9\u5668\u4E3A\u7A7A\uFF0C\u521B\u5EFA\u6587\u672C\u8282\u70B9
    vnode.elm = api.createTextNode(vnode.text!)
  }
  // \u8FD4\u56DE\u65B0\u521B\u5EFA\u7684 DOM
  return vnode.elm
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="patchvnode" tabindex="-1"><a class="header-anchor" href="#patchvnode" aria-hidden="true">#</a> patchVnode</h3><ul><li>\u529F\u80FD: <ul><li><code>patchVnode(oldVnode, vnode, insertedVnodeQueue)</code></li><li>\u5BF9\u6BD4\xA0<code>oldVnode</code>\xA0\u548C\xA0<code>vnode</code>\xA0\u7684\u5DEE\u5F02\uFF0C\u628A\u5DEE\u5F02\u6E32\u67D3\u5230\xA0<code>DOM</code></li></ul></li><li>\u6267\u884C\u8FC7\u7A0B: <ul><li>\u9996\u5148\u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684\xA0<code>prepatch</code>\xA0\u94A9\u5B50\u51FD\u6570</li><li>\u6267\u884C\xA0<code>create</code>\xA0\u94A9\u5B50\u51FD\u6570 <ul><li>\u9996\u5148\u6267\u884C\u6A21\u5757\u7684\xA0<code>create</code>\u94A9\u5B50\u51FD\u6570</li><li>\u7136\u540E\u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684\xA0<code>create</code>\xA0\u94A9\u5B50\u51FD\u6570</li></ul></li><li>\u5982\u679C\xA0<code>vnode.text</code>\xA0\u672A\u5B9A\u4E49 <ul><li>\u5982\u679C\xA0<code>oldVnode.children</code>\xA0\u548C\xA0<code>vnode.children</code>\xA0\u90FD\u6709\u503C <ul><li>\u8C03\u7528\xA0<code>updateChildren()</code></li><li>\u4F7F\u7528\xA0<code>diff</code>\xA0\u7B97\u6CD5\u5BF9\u6BD4\u5B50\u8282\u70B9\uFF0C\u66F4\u65B0\u5B50\u8282\u70B9</li></ul></li><li>\u5982\u679C\xA0<code>vnode.children</code>\xA0\u6709\u503C\uFF0C\xA0<code>oldVnode.children</code>\xA0\u65E0\u503C <ul><li>\u6E05\u7A7A\xA0<code>DOM</code>\xA0\u5143\u7D20</li><li>\u8C03\u7528\xA0<code>addVnodes()</code>\xA0\uFF0C\u6279\u91CF\u6DFB\u52A0\u5B50\u8282\u70B9</li></ul></li><li>\u5982\u679C\xA0<code>oldVnode.children</code>\xA0\u6709\u503C\uFF0C\xA0<code>vnode.children</code>\xA0\u65E0\u503C <ul><li>\u8C03\u7528\xA0<code>removeVnodes()</code>\xA0\uFF0C\u6279\u91CF\u79FB\u9664\u5B50\u8282\u70B9</li></ul></li><li>\u5982\u679C\xA0<code>oldVnode.text</code>\xA0\u6709\u503C <ul><li>\u6E05\u7A7A\xA0<code>DOM</code>\xA0\u5143\u7D20\u7684\u5185\u5BB9</li></ul></li></ul></li><li>\u5982\u679C\u8BBE\u7F6E\u4E86\xA0<code>vnode.text</code>\xA0\u5E76\u4E14\u548C\u548C\xA0<code>oldVnode.text</code>\xA0\u4E0D\u7B49 <ul><li>\u5982\u679C\u8001\u8282\u70B9\u6709\u5B50\u8282\u70B9\uFF0C\u5168\u90E8\u79FB\u9664</li><li>\u8BBE\u7F6E\xA0<code>DOM</code>\xA0\u5143\u7D20\u7684\xA0<code>textContent</code>\xA0\u4E3A\xA0<code>vnode.text</code></li></ul></li><li>\u6700\u540E\u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684\xA0<code>postpatch</code>\xA0\u94A9\u5B50\u51FD\u6570</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function patchVnode (oldVnode: VNode, vnode: VNode, insertedVnodeQueue: VNodeQueue) {
  const hook = vnode.data?.hook
  // \u9996\u5148\u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684 prepatch \u94A9\u5B50\u51FD\u6570
  hook?.prepatch?.(oldVnode, vnode)
  const elm = vnode.elm = oldVnode.elm!
  const oldCh = oldVnode.children as VNode[]
  const ch = vnode.children as VNode[]
  // \u5982\u679C\u65B0\u8001 vnode \u76F8\u540C\u8FD4\u56DE
  if (oldVnode === vnode) return
  if (vnode.data !== undefined) {
    // \u6267\u884C\u6A21\u5757\u7684 update \u94A9\u5B50\u51FD\u6570
    for (let i = 0; i &lt; cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
    // \u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684 update \u94A9\u5B50\u51FD\u6570
    vnode.data.hook?.update?.(oldVnode, vnode)
  }
  // \u5982\u679C vnode.text \u672A\u5B9A\u4E49
  if (isUndef(vnode.text)) {
    // \u5982\u679C\u65B0\u8001\u8282\u70B9\u90FD\u6709 children
    if (isDef(oldCh) &amp;&amp; isDef(ch)) {
      // \u4F7F\u7528 diff \u7B97\u6CD5\u5BF9\u6BD4\u5B50\u8282\u70B9\uFF0C\u66F4\u65B0\u5B50\u8282\u70B9
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
    } else if (isDef(ch)) {
      // \u5982\u679C\u65B0\u8282\u70B9\u6709 children\uFF0C\u8001\u8282\u70B9\u6CA1\u6709 children
      // \u5982\u679C\u8001\u8282\u70B9\u6709text\uFF0C\u6E05\u7A7Adom \u5143\u7D20\u7684\u5185\u5BB9
      if (isDef(oldVnode.text)) api.setTextContent(elm, &#39;&#39;)
      // \u6279\u91CF\u6DFB\u52A0\u5B50\u8282\u70B9
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
    } else if (isDef(oldCh)) {
      // \u5982\u679C\u8001\u8282\u70B9\u6709children\uFF0C\u65B0\u8282\u70B9\u6CA1\u6709children
      // \u6279\u91CF\u79FB\u9664\u5B50\u8282\u70B9
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    } else if (isDef(oldVnode.text)) {
      // \u5982\u679C\u8001\u8282\u70B9\u6709 text\uFF0C\u6E05\u7A7A DOM \u5143\u7D20
      api.setTextContent(elm, &#39;&#39;)
    }
  } else if (oldVnode.text !== vnode.text) {
    // \u5982\u679C\u6CA1\u6709\u8BBE\u7F6E vnode.text
    if (isDef(oldCh)) {
      // \u5982\u679C\u8001\u8282\u70B9\u6709 children\uFF0C\u79FB\u9664
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    }
    // \u8BBE\u7F6E DOM \u5143\u7D20\u7684 textContent \u4E3A vnode.text
    api.setTextContent(elm, vnode.text!)
  }
  // \u6700\u540E\u6267\u884C\u7528\u6237\u8BBE\u7F6E\u7684 postpatch \u94A9\u5B50\u51FD\u6570
  hook?.postpatch?.(oldVnode, vnode)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="updatechildren" tabindex="-1"><a class="header-anchor" href="#updatechildren" aria-hidden="true">#</a> updateChildren</h3><ul><li>\u529F\u80FD: <ul><li><code>diff</code>\xA0\u7B97\u6CD5\u7684\u6838\u5FC3\uFF0C\u5BF9\u6BD4\u65B0\u65E7\u8282\u70B9\u7684\xA0<code>children</code>\uFF0C\u66F4\u65B0\xA0<code>DOM</code></li></ul></li><li>\u6267\u884C\u8FC7\u7A0B:</li><li>\u8981\u5BF9\u6BD4\u4E24\u68F5\u6811\u7684\u5DEE\u5F02\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D6\u7B2C\u4E00\u68F5\u6811\u7684\u6BCF\u4E00\u4E2A\u8282\u70B9\u4F9D\u6B21\u548C\u7B2C\u4E8C\u8BFE\u6811\u7684\u6BCF\u4E00\u4E2A\u8282\u70B9\u6BD4 \u8F83\uFF0C\u4F46\u662F\u8FD9\u6837\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A\xA0<code>O(n^3)</code></li><li>\u5728\xA0<code>DOM</code>\xA0\u64CD\u4F5C\u7684\u65F6\u5019\u6211\u4EEC\u5F88\u5C11\u5F88\u5C11\u4F1A\u628A\u4E00\u4E2A\u7236\u8282\u70B9\u79FB\u52A8/\u66F4\u65B0\u5230\u67D0\u4E00\u4E2A\u5B50\u8282\u70B9</li><li>\u56E0\u6B64\u53EA\u9700\u8981\u627E\u540C\u7EA7\u522B\u7684\u5B50\u8282\u70B9\u4F9D\u6B21\u6BD4\u8F83\uFF0C\u7136\u540E\u518D\u627E\u4E0B\u4E00\u7EA7\u522B\u7684\u8282\u70B9\u6BD4\u8F83\uFF0C\u8FD9\u6837\u7B97\u6CD5\u7684\u65F6\u95F4\u590D \u6742\u5EA6\u4E3A\xA0<code>O(n)</code></li></ul><p><img src="https://s.poetries.work/images/20210329092027.png" alt=""></p><ul><li>\u5728\u8FDB\u884C\u540C\u7EA7\u522B\u8282\u70B9\u6BD4\u8F83\u7684\u65F6\u5019\uFF0C\u9996\u5148\u4F1A\u5BF9\u65B0\u8001\u8282\u70B9\u6570\u7EC4\u7684\u5F00\u59CB\u548C\u7ED3\u5C3E\u8282\u70B9\u8BBE\u7F6E\u6807\u8BB0\u7D22\u5F15\uFF0C\u904D \u5386\u7684\u8FC7\u7A0B\u4E2D\u79FB\u52A8\u7D22\u5F15</li><li>\u5728\u5BF9\u5F00\u59CB\u548C\u7ED3\u675F\u8282\u70B9\u6BD4\u8F83\u7684\u65F6\u5019\uFF0C\u603B\u5171\u6709\u56DB\u79CD\u60C5\u51B5 <ul><li><code>oldStartVnode / newStartVnode</code>\xA0(\u65E7\u5F00\u59CB\u8282\u70B9 / \u65B0\u5F00\u59CB\u8282\u70B9)</li><li><code>oldEndVnode / newEndVnode</code>\xA0(\u65E7\u7ED3\u675F\u8282\u70B9 / \u65B0\u7ED3\u675F\u8282\u70B9)</li><li><code>oldStartVnode / oldEndVnode</code>\xA0(\u65E7\u5F00\u59CB\u8282\u70B9 / \u65B0\u7ED3\u675F\u8282\u70B9)</li><li><code>oldEndVnode / newStartVnode</code>\xA0(\u65E7\u7ED3\u675F\u8282\u70B9 / \u65B0\u5F00\u59CB\u8282\u70B9)</li></ul></li></ul><p><img src="https://s.poetries.work/images/20210329092301.png" alt=""></p><ul><li>\u5F00\u59CB\u8282\u70B9\u548C\u7ED3\u675F\u8282\u70B9\u6BD4\u8F83\uFF0C\u8FD9\u4E24\u79CD\u60C5\u51B5\u7C7B\u4F3C <ul><li><code>oldStartVnode / newStartVnode</code>\xA0(\u65E7\u5F00\u59CB\u8282\u70B9 / \u65B0\u5F00\u59CB\u8282\u70B9)</li><li><code>oldEndVnode / newEndVnode</code>\xA0(\u65E7\u7ED3\u675F\u8282\u70B9 / \u65B0\u7ED3\u675F\u8282\u70B9)</li></ul></li><li>\u5982\u679C\xA0<code>oldStartVnode</code>\xA0\u548C\xA0<code>newStartVnode</code>\xA0\u662F\xA0<code>sameVnode</code>\xA0(<code>key</code>\xA0\u548C\xA0<code>sel</code>\xA0\u76F8\u540C) <ul><li>\u8C03\u7528\xA0<code>patchVnode()</code>\xA0\u5BF9\u6BD4\u548C\u66F4\u65B0\u8282\u70B9</li><li>\u628A\u65E7\u5F00\u59CB\u548C\u65B0\u5F00\u59CB\u7D22\u5F15\u5F80\u540E\u79FB\u52A8\xA0<code>oldStartIdx++ / oldEndIdx++</code></li></ul></li></ul><p><img src="https://s.poetries.work/images/20210329092430.png" alt=""></p><ul><li><code>oldStartVnode / newEndVnode</code>\xA0(\u65E7\u5F00\u59CB\u8282\u70B9 / \u65B0\u7ED3\u675F\u8282\u70B9) \u76F8\u540C <ul><li>\u8C03\u7528\xA0<code>patchVnode()</code>\xA0\u5BF9\u6BD4\u548C\u66F4\u65B0\u8282\u70B9</li><li>\u628A\xA0<code>oldStartVnode</code>\xA0\u5BF9\u5E94\u7684\xA0<code>DOM</code>\xA0\u5143\u7D20\uFF0C\u79FB\u52A8\u5230\u53F3\u8FB9 <ul><li>\u66F4\u65B0\u7D22\u5F15</li></ul></li></ul></li></ul><p><img src="https://s.poetries.work/images/20210329092820.png" alt=""></p><ul><li><code>oldEndVnode / newStartVnode</code>\xA0(\u65E7\u7ED3\u675F\u8282\u70B9 / \u65B0\u5F00\u59CB\u8282\u70B9) \u76F8\u540C <ul><li>\u8C03\u7528\xA0<code>patchVnode()</code>\xA0\u5BF9\u6BD4\u548C\u66F4\u65B0\u8282\u70B9</li><li>\u628A\xA0<code>oldEndVnode</code>\xA0\u5BF9\u5E94\u7684\xA0<code>DOM</code>\xA0\u5143\u7D20\uFF0C\u79FB\u52A8\u5230\u5DE6\u8FB9</li><li>\u66F4\u65B0\u7D22\u5F15</li></ul></li></ul><p><img src="https://s.poetries.work/images/20210329093025.png" alt=""></p><ul><li>\u5982\u679C\u4E0D\u662F\u4EE5\u4E0A\u56DB\u79CD\u60C5\u51B5 <ul><li>\u904D\u5386\u65B0\u8282\u70B9\uFF0C\u4F7F\u7528\xA0<code>newStartNode</code>\xA0\u7684\xA0<code>key</code>\xA0\u5728\u8001\u8282\u70B9\u6570\u7EC4\u4E2D\u627E\u76F8\u540C\u8282\u70B9</li><li>\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u8BF4\u660E\xA0<code>newStartNode</code>\xA0\u662F\u65B0\u8282\u70B9 <ul><li>\u521B\u5EFA\u65B0\u8282\u70B9\u5BF9\u5E94\u7684 DOM \u5143\u7D20\uFF0C\u63D2\u5165\u5230 DOM \u6811\u4E2D</li></ul></li><li>\u5982\u679C\u627E\u5230\u4E86 <ul><li>\u5224\u65AD\u65B0\u8282\u70B9\u548C\u627E\u5230\u7684\u8001\u8282\u70B9\u7684\xA0<code>sel</code>\xA0\u9009\u62E9\u5668\u662F\u5426\u76F8\u540C</li><li>\u5982\u679C\u4E0D\u76F8\u540C\uFF0C\u8BF4\u660E\u8282\u70B9\u88AB\u4FEE\u6539\u4E86 <ul><li>\u91CD\u65B0\u521B\u5EFA\u5BF9\u5E94\u7684\xA0<code>DOM</code>\xA0\u5143\u7D20\uFF0C\u63D2\u5165\u5230 DOM \u6811\u4E2D</li></ul></li><li>\u5982\u679C\u76F8\u540C\uFF0C\u628A\xA0<code>elmToMove</code>\xA0\u5BF9\u5E94\u7684 DOM \u5143\u7D20\uFF0C\u79FB\u52A8\u5230\u5DE6\u8FB9</li></ul></li></ul></li></ul><p><img src="https://s.poetries.work/images/20210329093137.png" alt=""></p><ul><li>\u5FAA\u73AF\u7ED3\u675F <ul><li>\u5F53\u8001\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u5148\u904D\u5386\u5B8C (<code>oldStartIdx &gt; oldEndIdx</code>)\uFF0C\u5FAA\u73AF\u7ED3\u675F</li><li>\u65B0\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u5148\u904D\u5386\u5B8C (<code>newStartIdx &gt; newEndIdx</code>)\uFF0C\u5FAA\u73AF\u7ED3\u675F</li></ul></li><li>\u5982\u679C\u8001\u8282\u70B9\u7684\u6570\u7EC4\u5148\u904D\u5386\u5B8C(<code>oldStartIdx &gt; oldEndIdx</code>)\uFF0C\u8BF4\u660E\u65B0\u8282\u70B9\u6709\u5269\u4F59\uFF0C\u628A\u5269\u4F59\u8282\u70B9\u6279\u91CF\u63D2\u5165\u5230\u53F3\u8FB9</li></ul><p><img src="https://s.poetries.work/images/20210329093302.png" alt=""></p><ul><li>\u5982\u679C\u65B0\u8282\u70B9\u7684\u6570\u7EC4\u5148\u904D\u5386\u5B8C(<code>newStartIdx &gt; newEndIdx</code>)\uFF0C\u8BF4\u660E\u8001\u8282\u70B9\u6709\u5269\u4F59\uFF0C\u628A\u5269\u4F59\u8282\u70B9\u6279 \u91CF\u5220\u9664</li></ul><p><img src="https://s.poetries.work/images/20210329093414.png" alt=""></p>`,89);function g(f,x){const n=a("ExternalLinkIcon");return o(),c("div",null,[t,e("ul",null,[e("li",null,[e("a",v,[u,d(n)]),m]),e("li",null,[e("a",b,[p,d(n)])])]),h])}var N=s(r,[["render",g],["__file","\u7EFC\u5408.html.vue"]]);export{N as default};
