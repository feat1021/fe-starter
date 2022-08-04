import{_ as i,o as n,c as e,b as l}from"./app.12353158.js";var s="/assets/20210330120838.9aae2001.png";const d={},v=l('<h1 id="\u6392\u5E8F\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F\u7B97\u6CD5" aria-hidden="true">#</a> \u6392\u5E8F\u7B97\u6CD5</h1><hr><p><img src="'+s+`" alt=""></p><p>\u5192\u6CE1\u6392\u5E8F</p><hr><blockquote><p>\u901A\u8FC7\u76F8\u90BB\u5143\u7D20\u6BD4\u8F83\u548C\u4EA4\u6362\uFF0C\u4F7F\u5F97\u6BCF\u4E00\u8D9F\u5FAA\u73AF\u90FD\u80FD\u627E\u5230\u672A\u6392\u5E8F\u7684\u5B50\u6570\u7EC4\u3002</p></blockquote><h3 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function bubbleSort(list) {

  var n = list.length

  if(!n) return []

  for(var i = 0; i &lt; n; i++) {

    for(var j = 0; j &lt; n - i - 1; j++) {

      if(list[j] &gt; list[j + 1]) {

        var temp = list[j + 1]

        list[j + 1] = list[j]

        list[j] = temp

      }

    }

  }

  return list

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a> \u4F18\u5316</h3><h4 id="\u5355\u5411\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u5355\u5411\u5192\u6CE1" aria-hidden="true">#</a> \u5355\u5411\u5192\u6CE1</h4><blockquote><p>\u6807\u8BB0\u5728\u4E00\u8F6E\u6BD4\u8F83\u6C47\u603B\u4E2D\uFF0C\u5982\u679C\u6CA1\u6709\u9700\u8981\u4EA4\u6362\u7684\u6570\u636E\uFF0C\u8BF4\u660E\u6570\u7EC4\u5DF2\u7ECF\u662F\u6709\u5E8F\u7684\uFF0C\u53EF\u4EE5\u51CF\u5C11\u6392\u5E8F\u5FAA\u73AF\u7684\u6B21\u6570\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function bubbleSort(list) {

  var n = list.length

  if(!n) return []

  for(var i = 0; i &lt; n; i++) {

    let mark = true // \u5982\u679C\u5728\u4E00\u8F6E\u6BD4\u8F83\u4E2D\u6CA1\u6709\u51FA\u73B0\u9700\u8981\u4EA4\u6362\u7684\u6570\u636E\uFF0C\u8BF4\u660E\u6570\u7EC4\u5DF2\u7ECF\u662F\u6709\u5E8F\u7684

    for(let j = 0; j &lt; n - i - 1; j++) {

      if(list[j] &gt; list[j + 1]) {

        var temp = list[j + 1]

        list[j + 1] = list[j]

        list[j] = temp

        mark = false

      }

    }

    if(mark) break

  }

  return list

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53CC\u5411\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u5192\u6CE1" aria-hidden="true">#</a> \u53CC\u5411\u5192\u6CE1</h4><blockquote><p>\u666E\u901A\u5192\u6CE1\u6392\u5E8F\u4E00\u8F6E\u53EA\u627E\u5230\u6700\u5927\u503C\u6216\u6700\u5C0F\u503C\u5176\u4E2D\u4E4B\u4E00\uFF0C\u53CC\u5411\u5192\u6CE1\u5219\u591A\u4E00\u8F6E\u7B5B\u9009\uFF0C\u65E2\u53EF\u4EE5\u627E\u5230\u6700\u5927\u503C\uFF0C\u4E5F\u53EF\u4EE5\u627E\u5230\u6700\u5C0F\u503C\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function bubbleSort(list) {

  var low = 0

  var high = list.length - 1

  while(low &lt; high) {

    var mark = true

    // \u627E\u5230\u6700\u5927\u503C\u653E\u5728\u53F3\u8FB9

    for(var i = low; i &lt; high; i++) {

      if(list[i] &gt; list[i + 1]) {

        var temp = list[i + 1]

        list[i + 1] = list[i]

        list[i] = temp

        mark = false

      }

    }

    high--

    // \u627E\u5230\u6700\u5C0F\u503C\u653E\u5728\u5DE6\u8FB9

    for(var j = high; j &gt; low; j--) {

      if(list[j] &lt; list[j - 1]) {

        var temp = list[j - 1]

        list[j - 1] = list[j]

        list[j] = temp

        mark = false

      }

    }

    low++

    if(mark) break

  }

  return list

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9009\u62E9\u6392\u5E8F</p><hr><blockquote><p>\u4F9D\u6B21\u627E\u5230\u5269\u4F59\u5143\u7D20\u7684\u6700\u5C0F\u503C\u6216\u8005\u6700\u5927\u503C\uFF0C\u653E\u7F6E\u672B\u5C3E\u6216\u8005\u5F00\u5934\u3002</p></blockquote><h3 id="\u5B9E\u73B0-1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-1" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function selectSort(list) {

  var n = list.length

  var minIndex

  for(var i = 0; i &lt; n - 1; i++) {

    minIndex = i

    for(var j = i + 1; j &lt; n; j++) {

      if(list[j] &lt; list[minIndex]) {

        minIndex = j

      }

    }

    var temp = list[i]

list[i] = list[minIndex]

    list[minIndex] = temp

  }

  return list

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u5165\u6392\u5E8F</p><hr><blockquote><p>\u4EE5\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u6709\u5E8F\u6570\u7EC4\uFF0C\u5176\u540E\u7684\u5143\u7D20\u901A\u8FC7\u5728\u8FD9\u4E2A\u5DF2\u6709\u5E8F\u7684\u6570\u7EC4\u4E2D\u627E\u5230\u5408\u9002\u7684\u5143\u7D20\u5E76\u63D2\u5165\u3002</p></blockquote><h3 id="\u5B9E\u73B0-2" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-2" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function insertSort(list) {

  var n = list.length

  var preIndex

  var current

  for(var i = 1; i &lt; n; i++) {

    preIndex = i - 1

    current = list[i]

    while(preIndex &gt;=0 &amp;&amp; list[preIndex] &gt; current) {

      list[preIndex + 1] = list[preIndex]

      preIndex--

    }

    list[preIndex + 1] = current

  }

  return list

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F18\u5316-1" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316-1" aria-hidden="true">#</a> \u4F18\u5316</h3><h4 id="\u62C6\u534A\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u62C6\u534A\u63D2\u5165" aria-hidden="true">#</a> \u62C6\u534A\u63D2\u5165</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function insertSort(list) {

  var low

  var high

  var j

  var temp

  for (var i = 1; i &lt; list.length; i++) {

    if (list[i] &lt; list[i - 1]) {

      temp = list[i]

      low = 0

      high = i - 1

      while (low &lt;= high) {

        let mid = Math.floor((low + high) / 2)

        if (temp &gt; list[mid]) {

          low = mid + 1

        } else {

          high = mid - 1

        }

      }

      for (j = i; j &gt; low; --j) {

        list[j] = list[j - 1]

      }

      list[j] = temp

    }

  }

  return list

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E0C\u5C14\u6392\u5E8F</p><hr><blockquote><p>\u901A\u8FC7\u67D0\u4E2A\u589E\u91CF gap\uFF0C\u5C06\u6574\u4E2A\u5E8F\u5217\u5206\u7ED9\u82E5\u5E72\u7EC4\uFF0C\u4ECE\u540E\u5F80\u524D\u8FDB\u884C\u7EC4\u5185\u6210\u5458\u7684\u6BD4\u8F83\u548C\u4EA4\u6362\uFF0C\u968F\u540E\u9010\u6B65\u7F29\u5C0F\u589E\u91CF\u81F3 1\u3002\u5E0C\u5C14\u6392\u5E8F\u7C7B\u4F3C\u4E8E\u63D2\u5165\u6392\u5E8F\uFF0C\u53EA\u662F\u4E00\u5F00\u59CB\u5411\u524D\u79FB\u52A8\u7684\u6B65\u6570\u4ECE 1 \u53D8\u6210\u4E86 gap\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function shellSort(list) {

  var n = list.length

  var gap = parseInt(n / 2) // \u521D\u59CB\u5316\u6B65\u6570

  while(gap) { // \u9010\u6B65\u7F29\u5C0F\u6B65\u6570

    for(var i = gap; i &lt; n; i++) {

      // \u9010\u6B65\u548C\u524D\u9762\u5176\u4ED6\u6210\u5458\u6BD4\u8F83\u4EA4\u6362

      for(var j = i - gap; j &gt;=0; j -= gap) {

        if(list[j] &gt; list[j + gap]) {

          var temp = list[j + gap]

          list[j + gap] = list[j]

          list[j] = temp

        } else {

          break

        }

      }

    }

    gap = parseInt(gap / 2)

  }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F52\u5E76\u6392\u5E8F</p><hr><blockquote><p>\u9012\u5F52\u5C06\u6570\u7EC4\u5206\u6210\u4E24\u4E2A\u5E8F\u5217\uFF0C\u6709\u5E8F\u5408\u5E76\u8FD9\u4E24\u4E2A\u5E8F\u5217\u3002\u4F5C\u4E3A\u4E00\u79CD\u5178\u578B\u7684\u5206\u6CBB\u6CD5\u601D\u60F3\u7B97\u6CD5\u5E94\u7528\uFF0C\u5F52\u5E76\u6392\u5E8F\u7684\u5B9E\u73B0\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A</p></blockquote><blockquote></blockquote><blockquote><p>-\xA0 \xA0\u81EA\u4E0A\u800C\u4E0B\u7684\u9012\u5F52</p></blockquote><blockquote><p>-\xA0 \xA0\u81EA\u4E0B\u800C\u4E0A\u7684\u8FED\u4EE3</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function mergeSort(list) {

  var n = list.length

  if(n &lt; 2) return list

  var mid = Math.floor(n / 2)

  var left = list.slice(0, mid)

  var right = list.slice(mid)

  return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {

  var result = []

  while(left.length &amp;&amp; right.length) {

    if(left[0] &lt;= right[0]) {

      result.push(left.shift())

    } else {

      result.push(right.shift())

    }

  }

  while(left.length) {

    result.push(left.shift())

  }

  while(right.length) {

    result.push(right.shift())

  }

  return result

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5FEB\u901F\u6392\u5E8F</p><hr><blockquote><p>\u9009\u62E9\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A\u57FA\u6570\uFF0C\u628A\u6BD4\u57FA\u6570\u5C0F\u7684\u5143\u7D20\u653E\u5728\u5B83\u5DE6\u8FB9\uFF0C\u6BD4\u5B83\u5927\u7684\u653E\u5728\u53F3\u8FB9\uFF08\u76F8\u5F53\u4E8E\u4E8C\u5206\uFF09\uFF0C\u518D\u4E0D\u65AD\u9012\u5F52\u57FA\u6570\u5DE6\u53F3\u7684\u5E8F\u5217\u3002\u5FEB\u901F\u6392\u5E8F\u662F\u4E00\u79CD\u5206\u800C\u6CBB\u4E4B\u601D\u60F3\u5728\u6392\u5E8F\u7B97\u6CD5\u4E0A\u7684\u5178\u578B\u5E94\u7528\u3002\u672C\u8D28\u4E0A\u6765\u770B\uFF0C\u5FEB\u901F\u6392\u5E8F\u5E94\u8BE5\u7B97\u662F\u5728\u5192\u6CE1\u6392\u5E8F\u57FA\u7840\u4E0A\u9012\u5F52\u5206\u6CBB\u6CD5\u3002\u5FEB\u901F\u6392\u5E8F\u7684\u540D\u5B57\u8D77\u7684\u662F\u7B80\u5355\u7C97\u66B4\uFF0C\u56E0\u4E3A\u4E00\u542C\u5230\u8FD9\u4E2A\u540D\u5B57\u4F60\u5C31\u77E5\u9053\u5B83\u5B58\u5728\u7684\u610F\u4E49\uFF0C\u5B83\u662F\u5904\u7406\u5927\u6570\u636E\u6700\u5FEB\u7684\u6392\u5E8F\u7B97\u6CD5\u4E4B\u4E00\u3002</p></blockquote><h3 id="\u5B9E\u73B0\u4E00" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function quickSort(arr) {

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E8C" aria-hidden="true">#</a> \u5B9E\u73B0\u4E8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function quickSort(list, left = 0, right = list.length - 1) {

  var n = list.length

if(left &lt; right) {

    var index = left - 1

    for(var i = left; i &lt;= right; i++) {

      if(list[i] &lt;= list[right]) {

        index++

        var temp = list[index]

        list[index] = list[i]

        list[i] = temp

      }

    }

    quickSort(list, left, index - 1)

    quickSort(list, index + 1, right)

  }

  return list

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5806\u6392\u5E8F</p><hr><blockquote><p>\u8BF4\u5230\u5806\u6392\u5E8F\uFF0C\u9996\u5148\u9700\u8981\u4E86\u89E3\u4E00\u79CD\u6570\u636E\u7ED3\u6784--\u5806\u3002\u5806\u662F\u4E00\u79CD\u5B8C\u5168\u4E8C\u53C9\u6811\uFF0C\u8FD9\u79CD\u7ED3\u6784\u901A\u5E38\u53EF\u4EE5\u7528\u6570\u7EC4\u8868\u793A\u3002\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u5806\u53C8\u53EF\u4EE5\u5206\u4E3A\u6700\u5C0F\u5806\u548C\u6700\u5927\u5806\uFF0C\u4E24\u8005\u533A\u522B\u5982\u4E0B\uFF1A</p></blockquote><blockquote></blockquote><blockquote><p>-\xA0 \xA0-max-heap property\uFF1A\u5BF9\u4E8E\u6240\u6709\u9664\u4E86\u6839\u8282\u70B9\u7684\u8282\u70B9i\uFF0CA[Parent(i)] &gt;= A[i]</p></blockquote><blockquote><p>-\xA0 \xA0-min-heap property\uFF1A\u5BF9\u4E8E\u9664\u4E86\u6839\u8282\u70B9\u7684\u8282\u70B9i\uFF0CA[Parent(i)] &lt;= A[i]</p></blockquote><blockquote></blockquote><blockquote><p>\u5806\u6392\u5E8F\u53EF\u4EE5\u8BF4\u662F\u4E00\u79CD\u5229\u7528\u5806\u7684\u6982\u5FF5\u6765\u6392\u5E8F\u7684\u9009\u62E9\u6392\u5E8F\uFF0C\u5206\u4E3A\u4E24\u79CD\u65B9\u6CD5\uFF1A</p></blockquote><blockquote></blockquote><blockquote><p>-\xA0 \xA0\u5927\u9876\u5806\uFF1A\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u5927\u4E8E\u6216\u7B49\u4E8E\u5176\u5B50\u8282\u70B9\u7684\u503C\uFF0C\u5728\u5806\u6392\u5E8F\u7B97\u6CD5\u4E2D\u7528\u4E8E\u5347\u5E8F\u6392\u5E8F\uFF1B</p></blockquote><blockquote><p>-\xA0 \xA0\u5C0F\u9876\u5806\uFF1A\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u5C0F\u4E8E\u6216\u7B49\u4E8E\u5176\u5B50\u8282\u70B9\u7684\u503C\uFF0C\u5728\u5806\u6392\u5E8F\u7B97\u6CD5\u4E2D\u7528\u4E8E\u964D\u5E8F\u6392\u5E8F\u3002</p></blockquote><h3 id="\u5B9E\u73B0-3" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-3" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function heapSort(list) {

  buildHeap(list)

  // \u5FAA\u73AF n-1 \u6B21\uFF0C\u6BCF\u6B21\u5FAA\u73AF\u540E\u4EA4\u6362\u5806\u9876\u5143\u7D20\u548C\u5806\u5E95\u5143\u7D20\u5E76\u91CD\u65B0\u8C03\u6574\u5806\u7ED3\u6784

  for(var i = list.length - 1; i &gt; 0; i--) {

    [nums[i], nums[0]] = [nums[0], nums[i]]

    adjustHeap(nums, 0, i)

  }

  return list

}

function buildHeap(nums) {

  // \u6CE8\u610F\u8FD9\u91CC\u7684\u5934\u8282\u70B9\u662F\u4ECE0\u5F00\u59CB\u7684\uFF0C\u6240\u4EE5\u6700\u540E\u4E00\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\u7ED3\u679C\u662F parseInt(nums.length / 2) - 1

  var start = parseInt(nums.length / 2) - 1

  var size = nums.length

  // \u4ECE\u6700\u540E\u4E00\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\u5F00\u59CB\u8C03\u6574\uFF0C\u76F4\u81F3\u5806\u9876

  for(var i = start; i &gt;= 0; i--) {

    adjustHeap(nums, i, size)

  }

}

function adjustHeap(nums, index, size) {

  // \u4EA4\u6362\u540E\u53EF\u80FD\u4F1A\u7834\u574F\u5806\u7ED3\u6784\uFF0C\u9700\u8981\u5FAA\u73AF\u4F7F\u5F97\u6BCF\u4E00\u4E2A\u7236\u8282\u70B9\u90FD\u5927\u4E8E\u5DE6\u53F3\u8282\u70B9

  while(true) {

    var max = index

    var left = index * 2 + 1 // \u5DE6\u8282\u70B9

    var right = index * 2 + 2 // \u53F3\u8282\u70B9

    if(left &lt; size &amp;&amp; nums[max] &lt; nums[left]) max = left

    if(right &lt; size &amp;&amp; nums[max] &lt; nums[right]) max = right

    // \u5982\u679C\u5DE6\u53F3\u8282\u70B9\u5927\u96E8\u5F53\u524D\u8282\u70B9\u5219\u4EA4\u6362\uFF0C\u5E76\u5728\u5FAA\u73AF\u4E00\u904D\u5224\u65AD\u4EA4\u6362\u540E\u662F\u5426\u7834\u574F\u5806\u7ED3\u6784

    if(index !== max) {

      [nums[index], nums[max]] = [nums[max], nums[index]]

      index = max

    } else {

      break

    }

  }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA1\u6570\u6392\u5E8F</p><hr><blockquote><p>\u4EE5\u6570\u7EC4\u5143\u7D20\u503C\u4E3A\u952E\uFF0C\u51FA\u73B0\u6B21\u6570\u4E3A\u503C\u5B58\u8FDB\u4E00\u4E2A\u4E34\u65F6\u6570\u7EC4\uFF0C\u6700\u540E\u518D\u904D\u5386\u8FD9\u4E2A\u4E34\u65F6\u6570\u7EC4\u8FD8\u539F\u56DE\u539F\u6570\u7EC4\u3002\u56E0\u4E3A JS \u7684\u6570\u7EC4\u4E0B\u6807\u662F\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u5B58\u50A8\u7684\uFF0C\u6240\u4EE5\u8BA1\u6570\u6392\u5E8F\u53EF\u4EE5\u7528\u6765\u6392\u5217\u8D1F\u6570\uFF0C\u4F46\u662F\u4E0D\u53EF\u4EE5\u6392\u5217\u5C0F\u6570\u3002</p></blockquote><h3 id="\u5B9E\u73B0-4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-4" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function countingSort(nums) {

  var list = []

  var max = Math.max(...nums)

  var min = Math.min(...nums)

  for(var i = 0; i &lt; nums.length; i++) {

    var temp = nums[i]

    list[temp] = list[temp] + 1 || 1

  }

  var index = 0

  for(var i = min; i &lt;= max; i++) {

    while(list[i] &gt; 0) {

      nums[index++] = i

      list[i]--

    }

  }

  return list

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6876\u6392\u5E8F</p><hr><blockquote><p>\u53D6 n \u4E2A\u6876\uFF0C\u6839\u636E\u6570\u7EC4\u7684\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\u786E\u8BA4\u6BCF\u4E2A\u6876\u5B58\u653E\u7684\u6570\u7684\u533A\u95F4\uFF0C\u5C06\u5143\u7D20\u63D2\u5165\u5230\u76F8\u5E94\u7684\u6876\u91CC\uFF0C\u6700\u540E\u518D\u5408\u5E76\u5404\u4E2A\u6876\u3002</p></blockquote><blockquote></blockquote><blockquote><p>\u6876\u6392\u5E8F\u662F\u8BA1\u6570\u6392\u5E8F\u7684\u5347\u7EA7\u7248\u3002\u5B83\u5229\u7528\u4E86\u51FD\u6570\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u9AD8\u6548\u4E0E\u5426\u7684\u5173\u952E\u5C31\u5728\u4E8E\u8FD9\u4E2A\u6620\u5C04\u51FD\u6570\u7684\u786E\u5B9A\u3002 \u4E3A\u4E86\u4F7F\u6876\u6392\u5E8F\u66F4\u52A0\u9AD8\u6548\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u5230\u8FD9\u4E24\u70B9\uFF1A</p></blockquote><blockquote></blockquote><blockquote><p>-\xA0 \xA0\u5728\u989D\u5916\u7A7A\u95F4\u5145\u8DB3\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C3D\u91CF\u589E\u5927\u6876\u7684\u6570\u91CF\u3002</p></blockquote><blockquote><p>-\xA0 \xA0\u4F7F\u7528\u7684\u6620\u5C04\u51FD\u6570\u80FD\u591F\u5C06\u8F93\u5165\u7684N\u4E2A\u6570\u636E\u5747\u5300\u7684\u5206\u914D\u5230K\u4E2A\u6876\u4E2D\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function bucketSort(nums) {

  // \u6876\u7684\u4E2A\u6570\uFF0C\u53EA\u8981\u662F\u6B63\u6570\u90FD\u884C

  var num = 5

  var max = Math.max(...nums)

  var min = Math.min(...nums)

  // \u8BA1\u7B97\u6BCF\u4E2A\u6876\u5B58\u653E\u7684\u6570\u503C\u8303\u56F4\uFF0C\u81F3\u5C11\u4E3A 1

  var range = Math.ceil((max - min) / num) || 1

  // \u521B\u5EFA\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u7B2C\u4E00\u7EF4\u8868\u793A\u7B2C\u51E0\u4E2A\u6876\uFF0C\u7B2C\u4E8C\u7EF4\u8868\u793A\u6876\u91CC\u653E\u7684\u6570

var arr = Array.from(Array(num)).map(() =&gt; Array().fill(0))

  nums.forEach(val =&gt; {

  // \u8BA1\u7B97\u5143\u7D20\u5E94\u8BE5\u5206\u5E03\u5728\u54EA\u4E2A\u6876

     let index = parseInt((val - min) / range);

    // \u9632\u6B62index\u8D8A\u754C\uFF0C\u4F8B\u5982\u5F53[5,1,1,2,0,0]\u65F6index\u4F1A\u51FA\u73B05

    index = index &gt;= num ? num - 1 : index;

    let temp = arr[index];

    // \u63D2\u5165\u6392\u5E8F\uFF0C\u5C06\u5143\u7D20\u6709\u5E8F\u63D2\u5165\u5230\u6876\u4E2D

    let j = temp.length - 1;

    while (j &gt;= 0 &amp;&amp; val &lt; temp[j]) {

    temp[j + 1] = temp[j];

      j--;

    }

    temp[j + 1] = val;

});

  // \u4FEE\u6539\u56DE\u539F\u6570\u7EC4

  var res = [].concat.apply([], arr);

  nums.forEach((val, i) =&gt; {

  nums[i] = res[i];

  });

  return nums;

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u6570\u6392\u5E8F</p><hr><blockquote><p>\u4F7F\u7528\u5341\u4E2A\u6876 0-9\uFF0C\u628A\u6BCF\u4E2A\u6570\u4ECE\u4F4E\u4F4D\u5230\u9AD8\u4F4D\u6839\u636E\u4F4D\u6570\u653E\u5230\u76F8\u5E94\u7684\u6876\u91CC\uFF0C\u4EE5\u6B64\u5FAA\u73AF\u6700\u5927\u503C\u7684\u4F4D\u6570\u6B21\u3002\u4F46\u53EA\u80FD\u6392\u5217\u6B63\u6574\u6570\uFF0C\u56E0\u4E3A\u9047\u5230\u8D1F\u53F7\u548C\u5C0F\u6570\u70B9\u65E0\u6CD5\u8FDB\u884C\u6BD4\u8F83\u3002</p></blockquote><blockquote></blockquote><blockquote><p>\u57FA\u6570\u6392\u5E8F\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A</p></blockquote><blockquote></blockquote><blockquote><p>-\xA0 \xA0MSD \u4ECE\u9AD8\u4F4D\u5F00\u59CB\u8FDB\u884C\u6392\u5E8F</p></blockquote><blockquote><p>-\xA0 \xA0LSD \u4ECE\u4F4E\u4F4D\u5F00\u59CB\u8FDB\u884C\u6392\u5E8F</p></blockquote><blockquote></blockquote><blockquote><p>\u57FA\u6570\u6392\u5E8F vs \u8BA1\u6570\u6392\u5E8F vs \u6876\u6392\u5E8F\uFF1A</p></blockquote><blockquote></blockquote><blockquote><p>\u8FD9\u4E09\u79CD\u6392\u5E8F\u7B97\u6CD5\u90FD\u5229\u7528\u4E86\u6876\u7684\u6982\u5FF5\uFF0C\u4F46\u5BF9\u6876\u7684\u4F7F\u7528\u65B9\u6CD5\u4E0A\u6709\u660E\u663E\u5DEE\u5F02\uFF1A</p></blockquote><blockquote></blockquote><blockquote><p>-\xA0 \xA0\u57FA\u6570\u6392\u5E8F\uFF1A\u6839\u636E\u952E\u503C\u7684\u6BCF\u4F4D\u6570\u5B57\u6765\u5206\u914D\u6876</p></blockquote><blockquote><p>-\xA0 \xA0\u8BA1\u6570\u6392\u5E8F\uFF1A\u6BCF\u4E2A\u6876\u53EA\u5B58\u50A8\u5355\u4E00\u952E\u503C</p></blockquote><blockquote><p>-\xA0 \xA0\u6876\u6392\u5E8F\uFF1A\u6BCF\u4E2A\u6876\u5B58\u50A8\u4E00\u5B9A\u8303\u56F4\u7684\u6570\u503C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function radixSort(nums) {

  // \u8BA1\u7B97\u4F4D\u6570

  function getDigits(n) {

  var sum = 0;

    while (n) {

    sum++;

      n = parseInt(n / 10);

    }

    return sum;

  }

  // \u7B2C\u4E00\u7EF4\u8868\u793A\u4F4D\u6570\u53730-9\uFF0C\u7B2C\u4E8C\u7EF4\u8868\u793A\u91CC\u9762\u5B58\u653E\u7684\u503C

  var arr = Array.from(Array(10)).map(() =&gt; Array());

  var max = Math.max(...nums);

  var maxDigits = getDigits(max);

  for (var i = 0, len = nums.length; i &lt; len; i++) {

  // \u75280\u628A\u6BCF\u4E00\u4E2A\u6570\u90FD\u586B\u5145\u6210\u76F8\u540C\u7684\u4F4D\u6570

    nums[i] = (nums[i] + &#39;&#39;).padStart(maxDigits, 0);

    // \u5148\u6839\u636E\u4E2A\u4F4D\u6570\u628A\u6BCF\u4E00\u4E2A\u6570\u653E\u5230\u76F8\u5E94\u7684\u6876\u91CC

    var temp = nums[i][nums[i].length - 1];

    arr[temp].push(nums[i]);

  }

  // \u5FAA\u73AF\u5224\u65AD\u6BCF\u4E2A\u4F4D\u6570

  for (var i = maxDigits - 2; i &gt;= 0; i--) {

  // \u5FAA\u73AF\u6BCF\u4E00\u4E2A\u6876

    for (var j = 0; j &lt;= 9; j++) {

    var temp = arr[j]

      var len = temp.length;

      // \u6839\u636E\u5F53\u524D\u7684\u4F4D\u6570i\u628A\u6876\u91CC\u7684\u6570\u653E\u5230\u76F8\u5E94\u7684\u6876\u91CC

      while (len--) {

          var str = temp[0];

          temp.shift();

          arr[str[i]].push(str);

         }

      }

    }

    // \u4FEE\u6539\u56DE\u539F\u6570\u7EC4

    var res = [].concat.apply([], arr);

    nums.forEach((val, index) =&gt; {

    nums[index] = +res[index];

    });

    return nums;

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,90),r=[v];function a(u,c){return n(),e("div",null,r)}var b=i(d,[["render",a],["__file","\u6392\u5E8F\u7B97\u6CD5.html.vue"]]);export{b as default};
