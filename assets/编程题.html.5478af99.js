import{_ as e,o as n,c as i,b as l}from"./app.12353158.js";const d={},s=l(`<h1 id="\u7F16\u7A0B\u9898" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u9898" aria-hidden="true">#</a> \u7F16\u7A0B\u9898</h1><hr><h3 id="_1-\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\u51FD\u6570" aria-hidden="true">#</a> 1 \u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\u51FD\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> // event(\u4E8B\u4EF6)\u5DE5\u5177\u96C6\uFF0C\u6765\u6E90\uFF1Agithub.com/markyun
    markyun.Event = {

        // \u89C6\u80FD\u529B\u5206\u522B\u4F7F\u7528dom0||dom2||IE\u65B9\u5F0F \u6765\u7ED1\u5B9A\u4E8B\u4EF6
        // \u53C2\u6570\uFF1A \u64CD\u4F5C\u7684\u5143\u7D20,\u4E8B\u4EF6\u540D\u79F0 ,\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F
        addEvent : function(element, type, handler) {
            if (element.addEventListener) {
                //\u4E8B\u4EF6\u7C7B\u578B\u3001\u9700\u8981\u6267\u884C\u7684\u51FD\u6570\u3001\u662F\u5426\u6355\u6349
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent(&#39;on&#39; + type, function() {
                    handler.call(element);
                });
            } else {
                element[&#39;on&#39; + type] = handler;
            }
        },
        // \u79FB\u9664\u4E8B\u4EF6
        removeEvent : function(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.datachEvent) {
                element.detachEvent(&#39;on&#39; + type, handler);
            } else {
                element[&#39;on&#39; + type] = null;
            }
        },
        // \u963B\u6B62\u4E8B\u4EF6 (\u4E3B\u8981\u662F\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u56E0\u4E3AIE\u4E0D\u652F\u6301\u4E8B\u4EF6\u6355\u83B7)
        stopPropagation : function(ev) {
            if (ev.stopPropagation) {
                ev.stopPropagation();
            } else {
                ev.cancelBubble = true;
            }
        },
        // \u53D6\u6D88\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A
        preventDefault : function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        // \u83B7\u53D6\u4E8B\u4EF6\u76EE\u6807
        getTarget : function(event) {
            return event.target || event.srcElement;
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u4E3A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u4E3A\u6570\u7EC4" aria-hidden="true">#</a> 2 \u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u4E3A\u6570\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isArray(arg) {
    if (typeof arg === &#39;object&#39;) {
        return Object.prototype.toString.call(arg) === &#39;[object Array]&#39;;
    }
    return false;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_3-\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> 3 \u5192\u6CE1\u6392\u5E8F</h3><ul><li>\u6BCF\u6B21\u6BD4\u8F83\u76F8\u90BB\u7684\u4E24\u4E2A\u6570\uFF0C\u5982\u679C\u540E\u4E00\u4E2A\u6BD4\u524D\u4E00\u4E2A\u5C0F\uFF0C\u6362\u4F4D\u7F6E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [3, 1, 4, 6, 5, 7, 2];

function bubbleSort(arr) {
for (var i = 0; i &lt; arr.length - 1; i++) {
    for(var j = 0; j &lt; arr.length - i - 1; j++) {
        if(arr[j + 1] &lt; arr[j]) {
            var temp;
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
return arr;
}

console.log(bubbleSort(arr));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_4-\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> 4 \u5FEB\u901F\u6392\u5E8F</h3><blockquote><p>\u91C7\u7528\u4E8C\u5206\u6CD5\uFF0C\u53D6\u51FA\u4E2D\u95F4\u6570\uFF0C\u6570\u7EC4\u6BCF\u6B21\u548C\u4E2D\u95F4\u6570\u6BD4\u8F83\uFF0C\u5C0F\u7684\u653E\u5230\u5DE6\u8FB9\uFF0C\u5927\u7684\u653E\u5230\u53F3\u8FB9</p></blockquote><p>\u5FEB\u901F\u6392\u5E8F\u7684\u601D\u60F3\u5F88\u7B80\u5355\uFF0C\u6574\u4E2A\u6392\u5E8F\u8FC7\u7A0B\u53EA\u9700\u8981\u4E09\u6B65\uFF1A</p><ul><li>\uFF081\uFF09\u5728\u6570\u636E\u96C6\u4E4B\u4E2D\uFF0C\u627E\u4E00\u4E2A\u57FA\u51C6\u70B9</li><li>\uFF082\uFF09\u5EFA\u7ACB\u4E24\u4E2A\u6570\u7EC4\uFF0C\u5206\u522B\u5B58\u50A8\u5DE6\u8FB9\u548C\u53F3\u8FB9\u7684\u6570\u7EC4</li><li>\uFF083\uFF09\u5229\u7528\u9012\u5F52\u8FDB\u884C\u4E0B\u6B21\u6BD4\u8F83</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [3, 1, 4, 6, 5, 7, 2];

function quickSort(arr) {
    if(arr.length == 0) {
        return [];    // \u8FD4\u56DE\u7A7A\u6570\u7EC4
    }

    var cIndex = Math.floor(arr.length / 2);
    var c = arr.splice(cIndex, 1);
    var l = [];
    var r = [];

    for (var i = 0; i &lt; arr.length; i++) {
        if(arr[i] &lt; c) {
            l.push(arr[i]);
        } else {
            r.push(arr[i]);
        }
    }

    return quickSort(l).concat(c, quickSort(r));
}

console.log(quickSort(arr));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u7F16\u5199\u4E00\u4E2A\u65B9\u6CD5-\u6C42\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_5-\u7F16\u5199\u4E00\u4E2A\u65B9\u6CD5-\u6C42\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u957F\u5EA6" aria-hidden="true">#</a> 5 \u7F16\u5199\u4E00\u4E2A\u65B9\u6CD5 \u6C42\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u957F\u5EA6</h3><ul><li>\u5047\u8BBE\uFF1A\u4E00\u4E2A\u82F1\u6587\u5B57\u7B26\u5360\u7528\u4E00\u4E2A\u5B57\u8282\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B26\u5360\u7528\u4E24\u4E2A\u5B57\u8282</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function GetBytes(str){

        var len = str.length;

        var bytes = len;

        for(var i=0; i&lt;len; i++){

            if (str.charCodeAt(i) &gt; 255) bytes++;

        }

        return bytes;

    }

alert(GetBytes(&quot;\u4F60\u597D,as&quot;));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-bind\u7684\u7528\u6CD5-\u4EE5\u53CA\u5982\u4F55\u5B9E\u73B0bind\u7684\u51FD\u6570\u548C\u9700\u8981\u6CE8\u610F\u7684\u70B9" tabindex="-1"><a class="header-anchor" href="#_6-bind\u7684\u7528\u6CD5-\u4EE5\u53CA\u5982\u4F55\u5B9E\u73B0bind\u7684\u51FD\u6570\u548C\u9700\u8981\u6CE8\u610F\u7684\u70B9" aria-hidden="true">#</a> 6 bind\u7684\u7528\u6CD5\uFF0C\u4EE5\u53CA\u5982\u4F55\u5B9E\u73B0bind\u7684\u51FD\u6570\u548C\u9700\u8981\u6CE8\u610F\u7684\u70B9</h3><ul><li><code>bind</code>\u7684\u4F5C\u7528\u4E0E<code>call</code>\u548C<code>apply</code>\u76F8\u540C\uFF0C\u533A\u522B\u662F<code>call</code>\u548C<code>apply</code>\u662F\u7ACB\u5373\u8C03\u7528\u51FD\u6570\uFF0C\u800C<code>bind</code>\u662F\u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u9700\u8981\u8C03\u7528\u7684\u65F6\u5019\u518D\u6267\u884C\u3002 \u4E00\u4E2A\u7B80\u5355\u7684<code>bind</code>\u51FD\u6570\u5B9E\u73B0\u5982\u4E0B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Function.prototype.bind = function(ctx) {
    var fn = this;
    return function() {
        fn.apply(ctx, arguments);
    };
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570clone" tabindex="-1"><a class="header-anchor" href="#_7-\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570clone" aria-hidden="true">#</a> 7 \u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570clone</h3><blockquote><p>\u53EF\u4EE5\u5BF9<code>JavaScript</code>\u4E2D\u76845\u79CD\u4E3B\u8981\u7684\u6570\u636E\u7C7B\u578B,\u5305\u62EC<code>Number</code>\u3001<code>String</code>\u3001<code>Object</code>\u3001<code>Array</code>\u3001<code>Boolean</code>\uFF09\u8FDB\u884C\u503C\u590D</p></blockquote><ul><li>\u8003\u5BDF\u70B91\uFF1A\u5BF9\u4E8E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u5728\u5185\u5B58\u4E2D\u5B58\u653E\u7684\u662F\u503C\u8FD8\u662F\u6307\u9488\u8FD9\u4E00\u533A\u522B\u662F\u5426\u6E05\u695A</li><li>\u8003\u5BDF\u70B92\uFF1A\u662F\u5426\u77E5\u9053\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u53D8\u91CF\u662F\u4EC0\u4E48\u7C7B\u578B\u7684</li><li>\u8003\u5BDF\u70B93\uFF1A\u9012\u5F52\u7B97\u6CD5\u7684\u8BBE\u8BA1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u65B9\u6CD5\u4E00\uFF1A
  Object.prototype.clone = function(){
          var o = this.constructor === Array ? [] : {};
          for(var e in this){
                  o[e] = typeof this[e] === &quot;object&quot; ? this[e].clone() : this[e];
          }
          return o;
  }

 //\u65B9\u6CD5\u4E8C\uFF1A
   /**
      * \u514B\u9686\u4E00\u4E2A\u5BF9\u8C61
      * @param Obj
      * @returns
      */
     function clone(Obj) {
         var buf;
         if (Obj instanceof Array) {
             buf = [];                    //\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u6570\u7EC4
             var i = Obj.length;
             while (i--) {
                 buf[i] = clone(Obj[i]);
             }
             return buf;
         }else if (Obj instanceof Object){
             buf = {};                   //\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61
             for (var k in Obj) {           //\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027
                 buf[k] = clone(Obj[k]);
             }
             return buf;
         }else{                         //\u666E\u901A\u53D8\u91CF\u76F4\u63A5\u8D4B\u503C
             return Obj;
         }
     }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u4E0B\u9762\u8FD9\u4E2Aul-\u5982\u4F55\u70B9\u51FB\u6BCF\u4E00\u5217\u7684\u65F6\u5019alert\u5176index" tabindex="-1"><a class="header-anchor" href="#_8-\u4E0B\u9762\u8FD9\u4E2Aul-\u5982\u4F55\u70B9\u51FB\u6BCF\u4E00\u5217\u7684\u65F6\u5019alert\u5176index" aria-hidden="true">#</a> 8 \u4E0B\u9762\u8FD9\u4E2Aul\uFF0C\u5982\u4F55\u70B9\u51FB\u6BCF\u4E00\u5217\u7684\u65F6\u5019alert\u5176index</h3><blockquote><p>\b\u8003\u5BDF\u95ED\u5305</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;ul id=&quot;test&quot;&gt;
     &lt;li&gt;\u8FD9\u662F\u7B2C\u4E00\u6761&lt;/li&gt;
     &lt;li&gt;\u8FD9\u662F\u7B2C\u4E8C\u6761&lt;/li&gt;
     &lt;li&gt;\u8FD9\u662F\u7B2C\u4E09\u6761&lt;/li&gt;
 &lt;/ul&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // \u65B9\u6CD5\u4E00\uFF1A
  var lis=document.getElementById(&#39;2223&#39;).getElementsByTagName(&#39;li&#39;);
  for(var i=0;i&lt;3;i++)
  {
      lis[i].index=i;
      lis[i].onclick=function(){
          alert(this.index);
  }

 //\u65B9\u6CD5\u4E8C\uFF1A
 var lis=document.getElementById(&#39;2223&#39;).getElementsByTagName(&#39;li&#39;);
 for(var i=0;i&lt;3;i++)
 {
     lis[i].index=i;
     lis[i].onclick=(function(a){
         return function() {
             alert(a);
         }
     })(i);
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-\u5B9A\u4E49\u4E00\u4E2Alog\u65B9\u6CD5-\u8BA9\u5B83\u53EF\u4EE5\u4EE3\u7406console-log\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_9-\u5B9A\u4E49\u4E00\u4E2Alog\u65B9\u6CD5-\u8BA9\u5B83\u53EF\u4EE5\u4EE3\u7406console-log\u7684\u65B9\u6CD5" aria-hidden="true">#</a> 9 \u5B9A\u4E49\u4E00\u4E2Alog\u65B9\u6CD5\uFF0C\u8BA9\u5B83\u53EF\u4EE5\u4EE3\u7406console.log\u7684\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53EF\u884C\u7684\u65B9\u6CD5\u4E00\uFF1A

 function log(msg)\u3000{
     console.log(msg);
 }

 log(&quot;hello world!&quot;) // hello world!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u8981\u4F20\u5165\u591A\u4E2A\u53C2\u6570\u5462\uFF1F\u663E\u7136\u4E0A\u9762\u7684\u65B9\u6CD5\u4E0D\u80FD\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6240\u4EE5\u66F4\u597D\u7684\u65B9\u6CD5\u662F\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> function log(){
     console.log.apply(console, arguments);
 };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-\u8F93\u51FA\u4ECA\u5929\u7684\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#_10-\u8F93\u51FA\u4ECA\u5929\u7684\u65E5\u671F" aria-hidden="true">#</a> 10 \u8F93\u51FA\u4ECA\u5929\u7684\u65E5\u671F</h3><blockquote><p>\u4EE5<code>YYYY-MM-DD</code>\u7684\u65B9\u5F0F\uFF0C\u6BD4\u5982\u4ECA\u5929\u662F2014\u5E749\u670826\u65E5\uFF0C\u5219\u8F93\u51FA2014-09-26</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date();
  // \u83B7\u53D6\u5E74\uFF0CgetFullYear()\u8FD4\u56DE4\u4F4D\u7684\u6570\u5B57
  var year = d.getFullYear();
  // \u83B7\u53D6\u6708\uFF0C\u6708\u4EFD\u6BD4\u8F83\u7279\u6B8A\uFF0C0\u662F1\u6708\uFF0C11\u662F12\u6708
  var month = d.getMonth() + 1;
  // \u53D8\u6210\u4E24\u4F4D
  month = month &lt; 10 ? &#39;0&#39; + month : month;
  // \u83B7\u53D6\u65E5
  var day = d.getDate();
 day = day &lt; 10 ? &#39;0&#39; + day : day;
 alert(year + &#39;-&#39; + month + &#39;-&#39; + day);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-\u7528js\u5B9E\u73B0\u968F\u673A\u9009\u53D610-100\u4E4B\u95F4\u768410\u4E2A\u6570\u5B57-\u5B58\u5165\u4E00\u4E2A\u6570\u7EC4-\u5E76\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_11-\u7528js\u5B9E\u73B0\u968F\u673A\u9009\u53D610-100\u4E4B\u95F4\u768410\u4E2A\u6570\u5B57-\u5B58\u5165\u4E00\u4E2A\u6570\u7EC4-\u5E76\u6392\u5E8F" aria-hidden="true">#</a> 11 \u7528js\u5B9E\u73B0\u968F\u673A\u9009\u53D610--100\u4E4B\u95F4\u768410\u4E2A\u6570\u5B57\uFF0C\u5B58\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5E76\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var iArray = [];
 funtion getRandom(istart, iend){
         var iChoice = istart - iend +1;
         return Math.floor(Math.random() * iChoice + istart;
 }
 for(var i=0; i&lt;10; i++){
         iArray.push(getRandom(10,100));
 }
 iArray.sort();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-\u5199\u4E00\u6BB5js\u7A0B\u5E8F\u63D0\u53D6url\u4E2D\u7684\u5404\u4E2Aget\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_12-\u5199\u4E00\u6BB5js\u7A0B\u5E8F\u63D0\u53D6url\u4E2D\u7684\u5404\u4E2Aget\u53C2\u6570" aria-hidden="true">#</a> 12 \u5199\u4E00\u6BB5JS\u7A0B\u5E8F\u63D0\u53D6URL\u4E2D\u7684\u5404\u4E2AGET\u53C2\u6570</h3><blockquote><p>\u6709\u8FD9\u6837\u4E00\u4E2A<code>URL</code>\uFF1A<code>http://item.taobao.com/item.htm?a=1&amp;b=2&amp;c=&amp;d=xxx&amp;e</code>\uFF0C\u8BF7\u5199\u4E00\u6BB5JS\u7A0B\u5E8F\u63D0\u53D6URL\u4E2D\u7684\u5404\u4E2AGET\u53C2\u6570(\u53C2\u6570\u540D\u548C\u53C2\u6570\u4E2A\u6570\u4E0D\u786E\u5B9A)\uFF0C\u5C06\u5176\u6309<code>key-value</code>\u5F62\u5F0F\u8FD4\u56DE\u5230\u4E00\u4E2A<code>json</code>\u7ED3\u6784\u4E2D\uFF0C\u5982<code>{a:&#39;1&#39;, b:&#39;2&#39;, c:&#39;&#39;, d:&#39;xxx&#39;, e:undefined}</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function serilizeUrl(url) {
     var result = {};
     url = url.split(&quot;?&quot;)[1];
     var map = url.split(&quot;&amp;&quot;);
     for(var i = 0, len = map.length; i &lt; len; i++) {
         result[map[i].split(&quot;=&quot;)[0]] = map[i].split(&quot;=&quot;)[1];
     }
     return result;
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-\u5199\u4E00\u4E2Afunction-\u6E05\u9664\u5B57\u7B26\u4E32\u524D\u540E\u7684\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#_13-\u5199\u4E00\u4E2Afunction-\u6E05\u9664\u5B57\u7B26\u4E32\u524D\u540E\u7684\u7A7A\u683C" aria-hidden="true">#</a> 13 \u5199\u4E00\u4E2A<code>function</code>\uFF0C\u6E05\u9664\u5B57\u7B26\u4E32\u524D\u540E\u7684\u7A7A\u683C</h3><blockquote><p>\u4F7F\u7528\u81EA\u5E26\u63A5\u53E3<code>trim()</code>\uFF0C\u8003\u8651\u517C\u5BB9\u6027\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\\s+/, &quot;&quot;).replace(/\\s+$/,&quot;&quot;);
    }
}

 // test the function
 var str = &quot; \\t\\n test string &quot;.trim();
 alert(str == &quot;test string&quot;); // alerts &quot;true&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-\u5B9E\u73B0\u6BCF\u9694\u4E00\u79D2\u949F\u8F93\u51FA1-2-3-\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_14-\u5B9E\u73B0\u6BCF\u9694\u4E00\u79D2\u949F\u8F93\u51FA1-2-3-\u6570\u5B57" aria-hidden="true">#</a> 14 \u5B9E\u73B0\u6BCF\u9694\u4E00\u79D2\u949F\u8F93\u51FA1,2,3...\u6570\u5B57</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(var i=0;i&lt;10;i++){
  (function(j){
     setTimeout(function(){
       console.log(j+1)
     },j*1000)
   })(i)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570-\u5224\u65AD\u8F93\u5165\u662F\u4E0D\u662F\u56DE\u6587\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_15-\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570-\u5224\u65AD\u8F93\u5165\u662F\u4E0D\u662F\u56DE\u6587\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 15 \u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u5224\u65AD\u8F93\u5165\u662F\u4E0D\u662F\u56DE\u6587\u5B57\u7B26\u4E32</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function run(input) {
  if (typeof input !== &#39;string&#39;) return false;
  return input.split(&#39;&#39;).reverse().join(&#39;&#39;) === input;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16\u3001\u6570\u7EC4\u6241\u5E73\u5316\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_16\u3001\u6570\u7EC4\u6241\u5E73\u5316\u5904\u7406" aria-hidden="true">#</a> 16\u3001\u6570\u7EC4\u6241\u5E73\u5316\u5904\u7406</h3><blockquote><p>\u5B9E\u73B0\u4E00\u4E2A<code>flatten</code>\u65B9\u6CD5\uFF0C\u4F7F\u5F97\u8F93\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8BE5\u6570\u7EC4\u91CC\u9762\u7684\u5143\u7D20\u4E5F\u53EF\u4EE5\u662F\u6570\u7EC4\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u8F93\u51FA\u4E00\u4E2A\u6241\u5E73\u5316\u7684\u6570\u7EC4</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function flatten(arr){
    return arr.reduce(function(prev,item){
        return prev.concat(Array.isArray(item)?flatten(item):item);
    },[]);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17\u3001\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570clone-\u53EF\u4EE5\u5BF9javascript\u4E2D\u76845\u79CD\u4E3B\u8981\u7684\u6570\u636E\u7C7B\u578B-\u5305\u62ECnumber\u3001string\u3001object\u3001array\u3001boolean-\u8FDB\u884C\u503C\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#_17\u3001\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570clone-\u53EF\u4EE5\u5BF9javascript\u4E2D\u76845\u79CD\u4E3B\u8981\u7684\u6570\u636E\u7C7B\u578B-\u5305\u62ECnumber\u3001string\u3001object\u3001array\u3001boolean-\u8FDB\u884C\u503C\u590D\u5236" aria-hidden="true">#</a> 17\u3001\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570clone\uFF0C\u53EF\u4EE5\u5BF9JavaScript\u4E2D\u76845\u79CD\u4E3B\u8981\u7684\u6570\u636E\u7C7B\u578B\uFF08\u5305\u62ECNumber\u3001String\u3001Object\u3001Array\u3001Boolean\uFF09\u8FDB\u884C\u503C\u590D\u5236</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Object.prototype.clone = function(){
    var o = this.constructor === Array ? [] : {};
    for(var e in this){
      o[e] = typeof this[e] === &quot;object&quot; ? this[e].clone() : this[e];
    }
    return o;
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),a=[s];function r(v,t){return n(),i("div",null,a)}var u=e(d,[["render",r],["__file","\u7F16\u7A0B\u9898.html.vue"]]);export{u as default};
