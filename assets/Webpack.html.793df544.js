import{_ as e,o as n,c as i,b as d}from"./app.12353158.js";const l={},s=d(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><hr><blockquote><p><code>webpack</code>\u662F\u4E00\u4E2A\u6253\u5305\u6A21\u5757\u5316\xA0<code>JavaScript</code>\xA0\u7684\u5DE5\u5177\uFF0C\u5728\xA0<code>webpack</code>\u91CC\u4E00\u5207\u6587\u4EF6\u7686\u6A21\u5757\uFF0C\u901A\u8FC7\xA0<code>Loader</code>\xA0\u8F6C\u6362\u6587\u4EF6\uFF0C\u901A\u8FC7\xA0<code>Plugin</code>\xA0\u6CE8\u5165\u94A9\u5B50\uFF0C\u6700\u540E\u8F93\u51FA\u7531\u591A\u4E2A\u6A21\u5757\u7EC4\u5408\u6210\u7684\u6587\u4EF6\u3002<code>webpack</code>\u4E13\u6CE8\u4E8E\u6784\u5EFA\u6A21\u5757\u5316\u9879\u76EE\u3002</p></blockquote><h3 id="\u7B80\u5355\u7248\u6253\u5305\u6A21\u578B\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7248\u6253\u5305\u6A21\u578B\u6B65\u9AA4" aria-hidden="true">#</a> \u7B80\u5355\u7248\u6253\u5305\u6A21\u578B\u6B65\u9AA4</h3><blockquote><p>\u6211\u4EEC\u5148\u4ECE\u7B80\u5355\u7684\u5165\u624B\u770B\uFF0C\u5F53 webpack \u7684\u914D\u7F6E\u53EA\u6709\u4E00\u4E2A\u51FA\u53E3\u65F6\uFF0C\u4E0D\u8003\u8651\u5206\u5305\u7684\u60C5\u51B5\uFF0C\u5176\u5B9E\u6211\u4EEC\u53EA\u5F97\u5230\u4E86\u4E00\u4E2Abundle.js\u7684\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u91CC\u5305\u542B\u4E86\u6211\u4EEC\u6240\u6709\u7528\u5230\u7684js\u6A21\u5757\uFF0C\u53EF\u4EE5\u76F4\u63A5\u88AB\u52A0\u8F7D\u6267\u884C\u3002\u90A3\u4E48\uFF0C\u6211\u53EF\u4EE5\u5206\u6790\u4E00\u4E0B\u5B83\u7684\u6253\u5305\u601D\u8DEF\uFF0C\u5927\u6982\u6709\u4EE5\u4E0B4\u6B65\uFF1A</p></blockquote><ul><li>\u5229\u7528<code>babel</code>\u5B8C\u6210\u4EE3\u7801\u8F6C\u6362\u53CA\u89E3\u6790,\u5E76\u751F\u6210\u5355\u4E2A\u6587\u4EF6\u7684\u4F9D\u8D56\u6A21\u5757<code>Map</code></li><li>\u4ECE\u5165\u53E3\u5F00\u59CB\u9012\u5F52\u5206\u6790\uFF0C\u5E76\u751F\u6210\u6574\u4E2A\u9879\u76EE\u7684\u4F9D\u8D56\u56FE\u8C31</li><li>\u5C06\u5404\u4E2A\u5F15\u7528\u6A21\u5757\u6253\u5305\u4E3A\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u51FD\u6570</li><li>\u5C06\u6700\u7EC8\u7684<code>bundle</code>\u6587\u4EF6\u5199\u5165<code>bundle.js</code>\u4E2D</li></ul><h3 id="\u5355\u4E2A\u6587\u4EF6\u7684\u4F9D\u8D56\u6A21\u5757map" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E2A\u6587\u4EF6\u7684\u4F9D\u8D56\u6A21\u5757map" aria-hidden="true">#</a> \u5355\u4E2A\u6587\u4EF6\u7684\u4F9D\u8D56\u6A21\u5757Map</h3><ul><li>\u6211\u4EEC\u4F1A\u53EF\u4EE5\u4F7F\u7528\u8FD9\u51E0\u4E2A\u5305\uFF1A <ul><li><code>@babel/parser</code>\uFF1A\u8D1F\u8D23\u5C06\u4EE3\u7801\u89E3\u6790\u4E3A\u62BD\u8C61\u8BED\u6CD5\u6811</li><li><code>@babel/traverse</code>\uFF1A\u904D\u5386\u62BD\u8C61\u8BED\u6CD5\u6811\u7684\u5DE5\u5177\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8BED\u6CD5\u6811\u4E2D\u89E3\u6790\u7279\u5B9A\u7684\u8282\u70B9\uFF0C\u7136\u540E\u505A\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u5982<code>ImportDeclaratio</code>n\u83B7\u53D6\u901A\u8FC7<code>import</code>\u5F15\u5165\u7684\u6A21\u5757,<code>FunctionDeclaration</code>\u83B7\u53D6\u51FD\u6570</li><li><code>@babel/core</code>\uFF1A\u4EE3\u7801\u8F6C\u6362\uFF0C\u5982ES6\u7684\u4EE3\u7801\u8F6C\u4E3AES5\u7684\u6A21\u5F0F</li></ul></li></ul><blockquote><p>\u7531\u8FD9\u51E0\u4E2A\u6A21\u5757\u7684\u4F5C\u7528\uFF0C\u5176\u5B9E\u5DF2\u7ECF\u53EF\u4EE5\u63A8\u65AD\u51FA\u5E94\u8BE5\u600E\u6837\u83B7\u53D6\u5355\u4E2A\u6587\u4EF6\u7684\u4F9D\u8D56\u6A21\u5757\u4E86\uFF0C\u8F6C\u4E3A<code>Ast</code>-&gt;\u904D\u5386<code>Ast</code>-&gt;\u8C03\u7528<code>ImportDeclaration</code>\u3002\u4EE3\u7801\u5982\u4E0B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// exportDependencies.js
const fs = require(&#39;fs&#39;)
const path = require(&#39;path&#39;)
const parser = require(&#39;@babel/parser&#39;)
const traverse = require(&#39;@babel/traverse&#39;).default
const babel = require(&#39;@babel/core&#39;)

 const exportDependencies = (filename)=&gt;{
    const content = fs.readFileSync(filename,&#39;utf-8&#39;)
    // \u8F6C\u4E3AAst
    const ast = parser.parse(content, {
        sourceType : &#39;module&#39;//babel\u5B98\u65B9\u89C4\u5B9A\u5FC5\u987B\u52A0\u8FD9\u4E2A\u53C2\u6570\uFF0C\u4E0D\u7136\u65E0\u6CD5\u8BC6\u522BES Module
    })

    const dependencies = {}
    //\u904D\u5386AST\u62BD\u8C61\u8BED\u6CD5\u6811
    traverse(ast, {
        //\u8C03\u7528ImportDeclaration\u83B7\u53D6\u901A\u8FC7import\u5F15\u5165\u7684\u6A21\u5757
        ImportDeclaration({node}){
            const dirname = path.dirname(filename)
            const newFile = &#39;./&#39; + path.join(dirname, node.source.value)
            //\u4FDD\u5B58\u6240\u4F9D\u8D56\u7684\u6A21\u5757
            dependencies[node.source.value] = newFile
        }
    })
    //\u901A\u8FC7@babel/core\u548C@babel/preset-env\u8FDB\u884C\u4EE3\u7801\u7684\u8F6C\u6362
    const {code} = babel.transformFromAst(ast, null, {
        presets: [&quot;@babel/preset-env&quot;]
    })
    return{
        filename,//\u8BE5\u6587\u4EF6\u540D
        dependencies,//\u8BE5\u6587\u4EF6\u6240\u4F9D\u8D56\u7684\u6A21\u5757\u96C6\u5408(\u952E\u503C\u5BF9\u5B58\u50A8)
        code//\u8F6C\u6362\u540E\u7684\u4EE3\u7801
    }
}
module.exports = exportDependencies

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u8DD1\u4E00\u4E2A\u4F8B\u5B50:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//info.js
const a = 1
export a
// index.js
import info from&#39;./info.js&#39;
console.log(info)

//testExport.js
const exportDependencies = require(&#39;./exportDependencies&#39;)
console.log(exportDependencies(&#39;./src/index.js&#39;))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5355\u4E2A\u6587\u4EF6\u7684\u4F9D\u8D56\u6A21\u5757Map</p><blockquote><p>\u6709\u4E86\u83B7\u53D6\u5355\u4E2A\u6587\u4EF6\u4F9D\u8D56\u7684\u57FA\u7840\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u8FD9\u57FA\u7840\u4E0A\uFF0C\u8FDB\u4E00\u6B65\u5F97\u51FA\u6574\u4E2A\u9879\u76EE\u7684\u6A21\u5757\u4F9D\u8D56\u56FE\u8C31\u4E86\u3002\u9996\u5148\uFF0C\u4ECE\u5165\u53E3\u5F00\u59CB\u8BA1\u7B97\uFF0C\u5F97\u5230<code>entryMap</code>\uFF0C\u7136\u540E\u904D\u5386<code>entryMap.dependencies</code>,\u53D6\u51FA\u5176<code>value</code>(\u5373\u4F9D\u8D56\u7684\u6A21\u5757\u7684\u8DEF\u5F84)\uFF0C\u7136\u540E\u518D\u83B7\u53D6\u8FD9\u4E2A\u4F9D\u8D56\u6A21\u5757\u7684\u4F9D\u8D56\u56FE\u8C31\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u9012\u5F52\u4E0B\u53BB\u5373\u53EF\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const exportDependencies = require(&#39;./exportDependencies&#39;)

//entry\u4E3A\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84
const exportGraph = (entry)=&gt;{
    const entryModule = exportDependencies(entry)
    const graphArray = [entryModule]
    for(let i = 0; i &lt; graphArray.length; i++){
        const item = graphArray[i];
        //\u62FF\u5230\u6587\u4EF6\u6240\u4F9D\u8D56\u7684\u6A21\u5757\u96C6\u5408,dependencies\u7684\u503C\u53C2\u8003exportDependencies
        const { dependencies } = item;
        for(let j in dependencies){
            graphArray.push(
                exportDependencies(dependencies[j])
            )//\u5173\u952E\u4EE3\u7801\uFF0C\u76EE\u7684\u662F\u5C06\u5165\u53E3\u6A21\u5757\u53CA\u5176\u6240\u6709\u76F8\u5173\u7684\u6A21\u5757\u653E\u5165\u6570\u7EC4
        }
    }
    //\u63A5\u4E0B\u6765\u751F\u6210\u56FE\u8C31
    const graph = {}
    graphArray.forEach(item =&gt; {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })
    //\u53EF\u4EE5\u770B\u51FA\uFF0Cgraph\u5176\u5B9E\u662F \u6587\u4EF6\u8DEF\u5F84\u540D\uFF1A\u6587\u4EF6\u5185\u5BB9 \u7684\u96C6\u5408
    return graph
}
module.exports = exportGraph

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8F93\u51FA\u7ACB\u5373\u6267\u884C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u7ACB\u5373\u6267\u884C\u51FD\u6570" aria-hidden="true">#</a> \u8F93\u51FA\u7ACB\u5373\u6267\u884C\u51FD\u6570</h3><blockquote><p>\u9996\u5148\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u88AB\u52A0\u8F7D\u5230\u9875\u9762\u4E2D\u7684\u65F6\u5019\uFF0C\u662F\u9700\u8981\u7ACB\u5373\u6267\u884C\u7684\u3002\u6240\u4EE5\u8F93\u51FA\u7684<code>bundle.js</code>\u5B9E\u8D28\u4E0A\u8981\u662F\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u51FD\u6570\u3002\u6211\u4EEC\u4E3B\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p></blockquote><ul><li>\u6211\u4EEC\u5199\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u7528\u7684\u662F\xA0<code>import/export</code>.\u7ECF\u8F6C\u6362\u540E,\u53D8\u6210\u4E86<code>require/exports</code></li><li>\u6211\u4EEC\u8981\u8BA9<code>require/exports</code>\u80FD\u6B63\u5E38\u8FD0\u884C\uFF0C\u90A3\u4E48\u6211\u4EEC\u5F97\u5B9A\u4E49\u8FD9\u4E24\u4E2A\u4E1C\u897F\uFF0C\u5E76\u52A0\u5230<code>bundle.js</code>\u91CC</li><li>\u5728\u4F9D\u8D56\u56FE\u8C31\u91CC\uFF0C\u4EE3\u7801\u90FD\u6210\u4E86\u5B57\u7B26\u4E32\u3002\u8981\u6267\u884C\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>eval</code></li></ul><blockquote><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u8981\u505A\u8FD9\u4E9B\u5DE5\u4F5C\uFF1A</p></blockquote><ul><li>\u5B9A\u4E49\u4E00\u4E2A<code>require</code>\u51FD\u6570\uFF0C<code>require</code>\u51FD\u6570\u7684\u672C\u8D28\u662F\u6267\u884C\u4E00\u4E2A\u6A21\u5757\u7684\u4EE3\u7801\uFF0C\u7136\u540E\u5C06\u76F8\u5E94\u53D8\u91CF\u6302\u8F7D\u5230<code>exports</code>\u5BF9\u8C61\u4E0A</li><li>\u83B7\u53D6\u6574\u4E2A\u9879\u76EE\u7684\u4F9D\u8D56\u56FE\u8C31\uFF0C\u4ECE\u5165\u53E3\u5F00\u59CB\uFF0C\u8C03\u7528<code>require</code>\u65B9\u6CD5\u3002\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const exportGraph = require(&#39;./exportGraph&#39;)
// \u5199\u5165\u6587\u4EF6\uFF0C\u53EF\u4EE5\u7528fs.writeFileSync\u7B49\u65B9\u6CD5\uFF0C\u5199\u5165\u5230output.path\u4E2D
const exportBundle = require(&#39;./exportBundle&#39;)

const exportCode = (entry)=&gt;{
    //\u8981\u5148\u628A\u5BF9\u8C61\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4E0D\u7136\u5728\u4E0B\u9762\u7684\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u4F1A\u9ED8\u8BA4\u8C03\u53D6\u5BF9\u8C61\u7684toString\u65B9\u6CD5\uFF0C\u53C2\u6570\u53D8\u6210[Object object]
    const graph = JSON.stringify(exportGraph(entry))
    exportBundle(\`
        (function(graph) {
            //require\u51FD\u6570\u7684\u672C\u8D28\u662F\u6267\u884C\u4E00\u4E2A\u6A21\u5757\u7684\u4EE3\u7801\uFF0C\u7136\u540E\u5C06\u76F8\u5E94\u53D8\u91CF\u6302\u8F7D\u5230exports\u5BF9\u8C61\u4E0A
            function require(module) {
                //localRequire\u7684\u672C\u8D28\u662F\u62FF\u5230\u4F9D\u8D56\u5305\u7684exports\u53D8\u91CF
                function localRequire(relativePath) {
                    return require(graph[module].dependencies[relativePath]);
                }
                var exports = {};
                (function(require, exports, code) {
                    eval(code);
                })(localRequire, exports, graph[module].code);
                return exports;
                //\u51FD\u6570\u8FD4\u56DE\u6307\u5411\u5C40\u90E8\u53D8\u91CF\uFF0C\u5F62\u6210\u95ED\u5305\uFF0Cexports\u53D8\u91CF\u5728\u51FD\u6570\u6267\u884C\u540E\u4E0D\u4F1A\u88AB\u6467\u6BC1
            }
            require(&#39;\${entry}&#39;)
        })(\${graph})\`)
}
module.exports = exportCode

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u81F3\u6B64\uFF0C\u7B80\u5355\u6253\u5305\u5B8C\u6210\u3002\u8D34\u4E00\u4E0B\u6211\u8DD1\u7684demo\u7684\u7ED3\u679C\u3002<code>bundle.js</code>\u7684\u6587\u4EF6\u5185\u5BB9\u4E3A\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> (function(graph) {
  //require\u51FD\u6570\u7684\u672C\u8D28\u662F\u6267\u884C\u4E00\u4E2A\u6A21\u5757\u7684\u4EE3\u7801\uFF0C\u7136\u540E\u5C06\u76F8\u5E94\u53D8\u91CF\u6302\u8F7D\u5230exports\u5BF9\u8C61\u4E0A
  function require(module) {
      //localRequire\u7684\u672C\u8D28\u662F\u62FF\u5230\u4F9D\u8D56\u5305\u7684exports\u53D8\u91CF
      function localRequire(relativePath) {
          returnrequire(graph[module].dependencies[relativePath]);
      }
      var exports = {};
      (function(require, exports, code) {
          eval(code);
      })(localRequire, exports, graph[module].code);
      return exports;//\u51FD\u6570\u8FD4\u56DE\u6307\u5411\u5C40\u90E8\u53D8\u91CF\uFF0C\u5F62\u6210\u95ED\u5305\uFF0Cexports\u53D8\u91CF\u5728\u51FD\u6570\u6267\u884C\u540E\u4E0D\u4F1A\u88AB\u6467\u6BC1
  }
  require(&#39;./src/index.js&#39;)
})({&quot;./src/index.js&quot;:{&quot;dependencies&quot;:{&quot;./info.js&quot;:&quot;./src/info.js&quot;},&quot;code&quot;:&quot;\\&quot;use strict\\&quot;;\\n\\nvar _info = _interopRequireDefault(require(\\&quot;./info.js\\&quot;));\\n\\nfunction _interopRequireDefault(obj) { return obj &amp;&amp; obj.__esModule ? obj : { \\&quot;default\\&quot;: obj }; }\\n\\nconsole.log(_info[\\&quot;default\\&quot;]);&quot;},&quot;./src/info.js&quot;:{&quot;dependencies&quot;:{&quot;./name.js&quot;:&quot;./src/name.js&quot;},&quot;code&quot;:&quot;\\&quot;use strict\\&quot;;\\n\\nObject.defineProperty(exports, \\&quot;__esModule\\&quot;, {\\n  value: true\\n});\\nexports[\\&quot;default\\&quot;] = void 0;\\n\\nvar _name = require(\\&quot;./name.js\\&quot;);\\n\\nvar info = \\&quot;\\&quot;.concat(_name.name, \\&quot; is beautiful\\&quot;);\\nvar _default = info;\\nexports[\\&quot;default\\&quot;] = _default;&quot;},&quot;./src/name.js&quot;:{&quot;dependencies&quot;:{},&quot;code&quot;:&quot;\\&quot;use strict\\&quot;;\\n\\nObject.defineProperty(exports, \\&quot;__esModule\\&quot;, {\\n  value: true\\n});\\nexports.name = void 0;\\nvar name = &#39;winty&#39;;\\nexports.name = name;&quot;}})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack\u6253\u5305\u6D41\u7A0B\u6982\u62EC" tabindex="-1"><a class="header-anchor" href="#webpack\u6253\u5305\u6D41\u7A0B\u6982\u62EC" aria-hidden="true">#</a> webpack\u6253\u5305\u6D41\u7A0B\u6982\u62EC</h3><blockquote><p><code>webpack</code>\u7684\u8FD0\u884C\u6D41\u7A0B\u662F\u4E00\u4E2A\u4E32\u884C\u7684\u8FC7\u7A0B\uFF0C\u4ECE\u542F\u52A8\u5230\u7ED3\u675F\u4F1A\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B\u6D41\u7A0B\uFF1A</p></blockquote><ul><li>\u521D\u59CB\u5316\u53C2</li><li>\u5F00\u59CB\u7F16\u8BD1\xA0\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CBCompiler\u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u901A \u8FC7\u6267\u884C\u5BF9\u8C61\u7684run\u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u7F16\u8BD1</li><li>\u786E\u5B9A\u5165\u53E3\xA0\u6839\u636E\u914D\u7F6E\u4E2D\u7684 Entry \u627E\u51FA\u6240\u6709\u5165\u53E3\u6587\u4EF6</li><li>\u7F16\u8BD1\u6A21\u5757\xA0\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u884C\u7F16\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6587\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406</li><li>\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1\xA0\u5728\u7ECF\u8FC7\u7B2C4\u6B65\u4F7F\u7528 Loader \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C \u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7F16\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB</li><li>\u8F93\u51FA\u8D44\u6E90\xA0\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk,\u518D\u5C06\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u8F93\u51FA\u5217\u8868\u4E2D\uFF0C\u8FD9\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A</li><li>\u8F93\u51FA\u5B8C\u6210\xA0\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u5C06\u6587\u4EF6\u7684\u5185\u5BB9\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u3002</li></ul><blockquote><p>\u5728\u4EE5\u4E0A\u8FC7\u7A0B\u4E2D\uFF0C\xA0<code>Webpack</code>\xA0\u4F1A\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u70B9\u5E7F\u64AD\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u5728\u76D1\u542C\u5230\u611F\u5174\u8DA3\u7684\u4E8B\u4EF6\u540E\u4F1A\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\uFF0C\u4E95\u4E14\u63D2\u4EF6\u53EF\u4EE5\u8C03\u7528\xA0<code>Webpack</code>\xA0\u63D0\u4F9B\u7684\xA0<code>API</code>\xA0\u6539\u53D8\xA0<code>Webpack</code>\xA0\u7684\u8FD0\u884C\u7ED3\u679C\u3002\u5176\u5B9E\u4EE5\u4E0A7\u4E2A\u6B65\u9AA4\uFF0C\u53EF\u4EE5\u7B80\u5355\u5F52\u7EB3\u4E3A\u521D\u59CB\u5316\u3001\u7F16\u8BD1\u3001\u8F93\u51FA\uFF0C\u4E09\u4E2A\u8FC7\u7A0B\uFF0C\u800C\u8FD9\u4E2A\u8FC7\u7A0B\u5176\u5B9E\u5C31\u662F\u524D\u9762\u8BF4\u7684\u57FA\u672C\u6A21\u578B\u7684\u6269\u5C55\u3002</p></blockquote>`,27),r=[s];function o(c,a){return n(),i("div",null,r)}var t=e(l,[["render",o],["__file","Webpack.html.vue"]]);export{t as default};
