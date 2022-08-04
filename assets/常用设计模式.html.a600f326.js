import{_ as l,o as a,c as r,a as n,d as s,b as d,e,r as v}from"./app.12353158.js";var c="/assets/20210327190950.efb581e9.png",t="/assets/20210327204351.278e2048.png",u="/assets/20210327204920.7d17f26a.png",o="/assets/20210327211020.c31dd69f.png",m="/assets/20210327211122.8440d3f3.png",b="/assets/20210327212411.c49b2bba.png",p="/assets/20210327212836.35b16bbe.png",g="/assets/20210327213037.ea85fcd8.png",h="/assets/20210327213223.cf0d84a1.png",x="/assets/20210327213700.0cf6c76d.png";const f={},q=d(`<h1 id="\u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> \u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F</h1><hr><h2 id="_1-\u521B\u5EFA\u578B-\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u578B-\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 1 \u521B\u5EFA\u578B-\u5DE5\u5382\u6A21\u5F0F</h2><h3 id="_1-1-\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 1.1 \u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</h3><blockquote><p>\u5176\u5B9E\u5C31\u662F\u5C06\u521B\u5EFA\u5BF9\u8C61\u7684\u8FC7\u7A0B\u5355\u72EC\u5C01\u88C5\uFF0C\u540C\u65F6\u5B83\u7684\u5E94\u7528\u573A\u666F\u4E5F\u975E\u5E38\u5BB9\u6613\u8BC6\u522B\uFF1A\u6709\u6784\u9020\u51FD\u6570\u7684\u5730\u65B9\uFF0C\u6211\u4EEC\u5C31\u5E94\u8BE5\u60F3\u5230\u7B80\u5355\u5DE5\u5382\uFF1B\u5728\u5199\u4E86\u5927\u91CF\u6784\u9020\u51FD\u6570\u3001\u8C03\u7528\u4E86\u5927\u91CF\u7684 new\u3001\u81EA\u89C9\u975E\u5E38\u4E0D\u723D\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C31\u5E94\u8BE5\u601D\u8003\u662F\u4E0D\u662F\u53EF\u4EE5\u638F\u51FA\u5DE5\u5382\u6A21\u5F0F\u91CD\u6784\u6211\u4EEC\u7684\u4EE3\u7801\u4E86</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7ED9\u4E0D\u540C\u5DE5\u79CD\u5206\u914D\u804C\u8D23\u8BF4\u660E
function User(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
}

function Factory(name, age, career) {
    let work;
    switch (career) {
        case &#39;coder&#39;: {
            work = [&#39;\u5199\u4EE3\u7801&#39;, &#39;\u5199\u7CFB\u5206&#39;, &#39;\u4FEEbug&#39;]
            break;
        }
        case &#39;product-manager&#39;: {
            work = [&#39;\u8BA2\u4F1A\u8BAE\u5BA4&#39;, &#39;\u5199PRD&#39;, &#39;\u50AC\u66F4&#39;]
            break;
        }
        case &#39;boss&#39;: {
            work = [&#39;\u559D\u8336&#39;, &#39;\u770B\u62A5&#39;, &#39;\u89C1\u5BA2\u6237&#39;]
            break;
        }
    }
    return new User(name, age, career, work)
}

const wang = new Factory(&#39;wang&#39;, 50, &#39;boss&#39;);
const sun = new Factory(&#39;sun&#39;, 25, &#39;coder&#39;);
const li = new Factory(&#39;li&#39;, 30, &#39;product-manager&#39;);

console.log(wang)
console.log(sun)
console.log(li)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-2-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 1.2 \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u64CD\u4F5C\u7CFB\u7EDF\u8FD9\u7C7B\u4EA7\u54C1\u7684\u62BD\u8C61\u4EA7\u54C1\u7C7B
class OS {
    constructor() {
        if (new.target === OS) {
            throw new Error(&#39;\u4E0D\u80FD\u5B9E\u4F8B\u5316\u62BD\u8C61\u7C7B&#39;);
        }
    }
}

// \u5B9A\u4E49\u5177\u4F53\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5177\u4F53\u4EA7\u54C1\u7C7B
class AndroidOS extends OS {
    constructor() {
        super();
    }

    controlHardware() {
        console.log(&#39;\u6211\u4F1A\u7528\u5B89\u5353\u7684\u65B9\u5F0F\u53BB\u64CD\u4F5C\u786C\u4EF6&#39;);
    }
}

class AppleOS extends OS {
    constructor() {
        super();
    }

    controlHardware() {
        console.log(&#39;\u6211\u4F1A\u7528\u82F9\u679C\u7684\u65B9\u5F0F\u53BB\u64CD\u4F5C\u786C\u4EF6&#39;);
    }
}

// \u5B9A\u4E49\u624B\u673A\u786C\u4EF6\u8FD9\u7C7B\u4EA7\u54C1\u7684\u62BD\u8C61\u4EA7\u54C1\u7C7B
class Hardware {
    constructor() {
        if (new.target === Hardware) {
            throw new Error(&#39;\u4E0D\u80FD\u5B9E\u4F8B\u5316\u62BD\u8C61\u7C7B&#39;);
        }
    }

    // \u624B\u673A\u786C\u4EF6\u7684\u5171\u6027\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u63D0\u53D6\u4E86&quot;\u6839\u636E\u547D\u4EE4\u8FD0\u8F6C&quot;\u8FD9\u4E2A\u5171\u6027
    operateByOrder() {
        throw new Error(&#39;\u62BD\u8C61\u4EA7\u54C1\u65B9\u6CD5\u4E0D\u5141\u8BB8\u76F4\u63A5\u8C03\u7528\uFF0C\u4F60\u9700\u8981\u5C06\u6211\u91CD\u5199\uFF01&#39;);
    }
}

// \u5B9A\u4E49\u5177\u4F53\u786C\u4EF6\u7684\u5177\u4F53\u4EA7\u54C1\u7C7B
class QualcommHardware extends Hardware {
    constructor() {
        super();
    }

    operateByOrder() {
        console.log(&#39;\u6211\u4F1A\u7528\u9AD8\u901A\u7684\u65B9\u5F0F\u53BB\u8FD0\u8F6C&#39;)
    }
}

class MiWare extends Hardware {
    constructor() {
        super();
    }

    operateByOrder() {
        console.log(&#39;\u6211\u4F1A\u7528\u5C0F\u7C73\u7684\u65B9\u5F0F\u53BB\u8FD0\u8F6C&#39;)
    }
}

class MobilePhoneFactory {
    // \u63D0\u4F9B\u64CD\u4F5C\u7CFB\u7EDF\u7684\u63A5\u53E3
    createOS() {
        throw new Error(&quot;\u62BD\u8C61\u5DE5\u5382\u65B9\u6CD5\u4E0D\u5141\u8BB8\u76F4\u63A5\u8C03\u7528\uFF0C\u4F60\u9700\u8981\u5C06\u6211\u91CD\u5199\uFF01&quot;);
    }

    // \u63D0\u4F9B\u786C\u4EF6\u7684\u63A5\u53E3
    createHardware() {
        throw new Error(&quot;\u62BD\u8C61\u5DE5\u5382\u65B9\u6CD5\u4E0D\u5141\u8BB8\u76F4\u63A5\u8C03\u7528\uFF0C\u4F60\u9700\u8981\u5C06\u6211\u91CD\u5199\uFF01&quot;);
    }
}

// \u5177\u4F53\u5DE5\u5382\u7EE7\u627F\u81EA\u62BD\u8C61\u5DE5\u5382
class FakeStarFactory extends MobilePhoneFactory {
    constructor() {
        super()
    }

    createOS() {
        // \u63D0\u4F9B\u5B89\u5353\u7CFB\u7EDF\u5B9E\u4F8B
        return new AndroidOS()
    }

    createHardware() {
        // \u63D0\u4F9B\u9AD8\u901A\u786C\u4EF6\u5B9E\u4F8B
        return new QualcommHardware()
    }
}

// \u8FD9\u662F\u6211\u7684\u624B\u673A
const myPhone = new FakeStarFactory()
// \u8BA9\u5B83\u62E5\u6709\u64CD\u4F5C\u7CFB\u7EDF
const myOS = myPhone.createOS()
// \u8BA9\u5B83\u62E5\u6709\u786C\u4EF6
const myHardWare = myPhone.createHardware()
// \u542F\u52A8\u64CD\u4F5C\u7CFB\u7EDF(\u8F93\u51FA&#39;\u6211\u4F1A\u7528\u5B89\u5353\u7684\u65B9\u5F0F\u53BB\u64CD\u4F5C\u786C\u4EF6&#39;)
myOS.controlHardware()
// \u5524\u9192\u786C\u4EF6(\u8F93\u51FA&#39;\u6211\u4F1A\u7528\u9AD8\u901A\u7684\u65B9\u5F0F\u53BB\u8FD0\u8F6C&#39;)
myHardWare.operateByOrder()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62BD\u8C61\u5DE5\u5382\u548C\u7B80\u5355\u5DE5\u5382\u7684\u601D\u8DEF\uFF0C\u601D\u8003\u4E00\u4E0B\uFF1A\u5B83\u4EEC\u4E4B\u95F4\u6709\u54EA\u4E9B\u5F02\u540C\uFF1F</p><ul><li>\u5B83\u4EEC\u7684\u5171\u540C\u70B9\uFF0C\u5728\u4E8E\u90FD\u5C1D\u8BD5\u53BB\u5206\u79BB\u4E00\u4E2A\u7CFB\u7EDF\u4E2D\u53D8\u4E0E\u4E0D\u53D8\u7684\u90E8\u5206\u3002</li><li>\u5B83\u4EEC\u7684\u4E0D\u540C\u5728\u4E8E\u573A\u666F\u7684\u590D\u6742\u5EA6\u3002</li></ul><blockquote><p>\u5728\u7B80\u5355\u5DE5\u5382\u7684\u4F7F\u7528\u573A\u666F\u91CC\uFF0C\u5904\u7406\u7684\u5BF9\u8C61\u662F\u7C7B\uFF0C\u5E76\u4E14\u662F\u4E00\u4E9B\u975E\u5E38\u597D\u5BF9\u4ED8\u7684\u7C7B------\u5B83\u4EEC\u7684\u5171\u6027\u5BB9\u6613\u62BD\u79BB\uFF0C\u540C\u65F6\u56E0\u4E3A\u903B\u8F91\u672C\u8EAB\u6BD4\u8F83\u7B80\u5355\uFF0C\u6545\u800C\u4E0D\u82DB\u6C42\u4EE3\u7801\u53EF\u6269\u5C55\u6027\u3002\u62BD\u8C61\u5DE5\u5382\u672C\u8D28\u4E0A\u5904\u7406\u7684\u5176\u5B9E\u4E5F\u662F\u7C7B\uFF0C\u4F46\u662F\u662F\u4E00\u5E2E\u975E\u5E38\u68D8\u624B\u3001\u7E41\u6742\u7684\u7C7B\uFF0C\u8FD9\u4E9B\u7C7B\u4E2D\u4E0D\u4EC5\u80FD\u5212\u5206\u51FA\u95E8\u6D3E\uFF0C\u8FD8\u80FD\u5212\u5206\u51FA\u7B49\u7EA7\uFF0C\u540C\u65F6\u5B58\u5728\u7740\u5343\u53D8\u4E07\u5316\u7684\u6269\u5C55\u53EF\u80FD\u6027------\u8FD9\u4F7F\u5F97\u6211\u4EEC\u5FC5\u987B\u5BF9\u5171\u6027\u4F5C\u66F4\u7279\u522B\u7684\u5904\u7406\u3001\u4F7F\u7528\u62BD\u8C61\u7C7B\u53BB\u964D\u4F4E\u6269\u5C55\u7684\u6210\u672C\uFF0C\u540C\u65F6\u9700\u8981\u5BF9\u7C7B\u7684\u6027\u8D28\u4F5C\u5212\u5206</p></blockquote><h2 id="_2-\u521B\u5EFA\u578B-\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u578B-\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> 2 \u521B\u5EFA\u578B-\u5355\u4F8B\u6A21\u5F0F</h2><blockquote><p>\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\uFF0C\u8FD9\u6837\u7684\u6A21\u5F0F\u5C31\u53EB\u505A\u5355\u4F8B\u6A21\u5F0F\u3002</p></blockquote><h3 id="_2-1-\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> 2.1 \u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0\u601D\u8DEF</h3><ul><li>\u5355\u4F8B\u6A21\u5F0F\u60F3\u8981\u505A\u5230\u7684\u662F\uFF0C\u4E0D\u7BA1\u6211\u4EEC\u5C1D\u8BD5\u53BB\u521B\u5EFA\u591A\u5C11\u6B21\uFF0C\u5B83\u90FD\u53EA\u7ED9\u4F60\u8FD4\u56DE\u7B2C\u4E00\u6B21\u6240\u521B\u5EFA\u7684\u90A3\u552F\u4E00\u7684\u4E00\u4E2A\u5B9E\u4F8B\u3002</li><li>\u8981\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u5C31\u9700\u8981\u6784\u9020\u51FD\u6570\u5177\u5907\u5224\u65AD\u81EA\u5DF1\u662F\u5426\u5DF2\u7ECF\u521B\u5EFA\u8FC7\u4E00\u4E2A\u5B9E\u4F8B\u7684\u80FD\u529B\u3002\u6211\u4EEC\u73B0\u5728\u628A\u8FD9\u6BB5\u5224\u65AD\u903B\u8F91\u5199\u6210\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5(\u5176\u5B9E\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199\u5165\u6784\u9020\u51FD\u6570\u7684\u51FD\u6570\u4F53\u91CC\uFF09\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\uFF1A\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\u3002
class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }

    getName(){
        console.log(this.name);
    }

    getInstance(name){
        if(!this.instance){
            this.instance = new Singleton(name);
        }

        return this.instance;
    }
}

const singleton = new Singleton();

const a = singleton.getInstance(&#39;a&#39;);
const b = singleton.getInstance(&#39;b&#39;);

console.log(a);
console.log(b);
console.log(a === b);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class SingleDog {
    show() {
        console.log(&#39;\u6211\u662F\u4E00\u4E2A\u5355\u4F8B\u5BF9\u8C61&#39;)
    }
    static getInstance() {
        // \u5224\u65AD\u662F\u5426\u5DF2\u7ECFnew\u8FC71\u4E2A\u5B9E\u4F8B
        if (!SingleDog.instance) {
            // \u82E5\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5148\u521B\u5EFA\u5B83
            SingleDog.instance = new SingleDog()
        }
        // \u5982\u679C\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE
        return SingleDog.instance
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

// true
s1 === s2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u697C\u4E0A\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4E4B\u5916\uFF0C<code>getInstance</code>\u7684\u903B\u8F91\u8FD8\u53EF\u4EE5\u7528\u95ED\u5305\u6765\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SingleDog.getInstance = (function() {
    // \u5B9A\u4E49\u81EA\u7531\u53D8\u91CFinstance\uFF0C\u6A21\u62DF\u79C1\u6709\u53D8\u91CF
    let instance = null
    return function() {
        // \u5224\u65AD\u81EA\u7531\u53D8\u91CF\u662F\u5426\u4E3Anull
        if(!instance) {
            // \u5982\u679C\u4E3Anull\u5219new\u51FA\u552F\u4E00\u5B9E\u4F8B
            instance = new SingleDog()
        }
        return instance
    }
})()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u5728<code>getInstance</code>\u65B9\u6CD5\u7684\u5224\u65AD\u548C\u62E6\u622A\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u7BA1\u8C03\u7528\u591A\u5C11\u6B21\uFF0C<code>SingleDog</code>\u90FD\u53EA\u4F1A\u7ED9\u6211\u4EEC\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u4F8B\uFF0C<code>s1</code>\u548C<code>s2</code>\u73B0\u5728\u90FD\u6307\u5411\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B</p></blockquote><h3 id="_2-2-\u751F\u4EA7\u5B9E\u8DF5-vuex\u4E2D\u7684\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-2-\u751F\u4EA7\u5B9E\u8DF5-vuex\u4E2D\u7684\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> 2.2 \u751F\u4EA7\u5B9E\u8DF5\uFF1AVuex\u4E2D\u7684\u5355\u4F8B\u6A21\u5F0F</h3><blockquote><p><code>Redux</code>\xA0\u548C\xA0<code>Vuex</code>\uFF0C\u5B83\u4EEC\u90FD\u5B9E\u73B0\u4E86\u4E00\u4E2A\u5168\u5C40\u7684\xA0<code>Store</code>\xA0\u7528\u4E8E\u5B58\u50A8\u5E94\u7528\u7684\u6240\u6709\u72B6\u6001\u3002\u8FD9\u4E2A\xA0<code>Store</code>\xA0\u7684\u5B9E\u73B0\uFF0C\u6B63\u662F\u5355\u4F8B\u6A21\u5F0F\u7684\u5178\u578B\u5E94\u7528</p></blockquote><p>1. \u7406\u89E3 Vuex \u4E2D\u7684 Store</p><blockquote><p><code>Vuex</code>\xA0\u4F7F\u7528\u5355\u4E00\u72B6\u6001\u6811\uFF0C\u7528\u4E00\u4E2A\u5BF9\u8C61\u5C31\u5305\u542B\u4E86\u5168\u90E8\u7684\u5E94\u7528\u5C42\u7EA7\u72B6\u6001\u3002\u81F3\u6B64\u5B83\u4FBF\u4F5C\u4E3A\u4E00\u4E2A&quot;\u552F\u4E00\u6570\u636E\u6E90 (SSOT)&quot;\u800C\u5B58\u5728\u3002\u8FD9\u4E5F\u610F\u5473\u7740\uFF0C\u6BCF\u4E2A\u5E94\u7528\u5C06\u4EC5\u4EC5\u5305\u542B\u4E00\u4E2A store \u5B9E\u4F8B\u3002\u5355\u4E00\u72B6\u6001\u6811\u8BA9\u6211\u4EEC\u80FD\u591F\u76F4\u63A5\u5730\u5B9A\u4F4D\u4EFB\u4E00\u7279\u5B9A\u7684\u72B6\u6001\u7247\u6BB5\uFF0C\u5728\u8C03\u8BD5\u7684\u8FC7\u7A0B\u4E2D\u4E5F\u80FD\u8F7B\u6613\u5730\u53D6\u5F97\u6574\u4E2A\u5F53\u524D\u5E94\u7528\u72B6\u6001\u7684\u5FEB\u7167\u3002 ------Vuex\u5B98\u65B9\u6587\u6863</p></blockquote><p>\u5F53\u7EC4\u4EF6\u975E\u5E38\u591A\u3001\u7EC4\u4EF6\u95F4\u5173\u7CFB\u590D\u6742\u3001\u4E14\u5D4C\u5957\u5C42\u7EA7\u5F88\u6DF1\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u539F\u59CB\u7684\u901A\u4FE1\u65B9\u5F0F\u4F1A\u4F7F\u6211\u4EEC\u7684\u903B\u8F91\u53D8\u5F97\u590D\u6742\u96BE\u4EE5\u7EF4\u62A4\u3002\u8FD9\u65F6\u6700\u597D\u7684\u505A\u6CD5\u662F\u5C06\u5171\u4EAB\u7684\u6570\u636E\u62BD\u51FA\u6765\u3001\u653E\u5728\u5168\u5C40\uFF0C\u4F9B\u7EC4\u4EF6\u4EEC\u6309\u7167\u4E00\u5B9A\u7684\u7684\u89C4\u5219\u53BB\u5B58\u53D6\u6570\u636E\uFF0C\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002\u4E8E\u662F\u4FBF\u6709\u4E86 Vuex\uFF0C\u8FD9\u4E2A\u7528\u6765\u5B58\u653E\u5171\u4EAB\u6570\u636E\u7684\u552F\u4E00\u6570\u636E\u6E90\uFF0C\u5C31\u662F Store\u3002</p><p>2. Vuex\u5982\u4F55\u786E\u4FDDStore\u7684\u552F\u4E00\u6027</p><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u5F15\u5165\xA0<code>Vuex</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B89\u88C5vuex\u63D2\u4EF6
Vue.use(Vuex)

// \u5C06store\u6CE8\u5165\u5230Vue\u5B9E\u4F8B\u4E2D
new Vue({
    el: &#39;#app&#39;,
    store
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u901A\u8FC7\u8C03\u7528<code>Vue.use()</code>\u65B9\u6CD5\uFF0C\u6211\u4EEC\u5B89\u88C5\u4E86\xA0<code>Vuex</code>\xA0\u63D2\u4EF6\u3002<code>Vuex</code>\xA0\u63D2\u4EF6\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u5728\u5185\u90E8\u5B9E\u73B0\u4E86\u4E00\u4E2A\xA0<code>install</code>\xA0\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u5728\u63D2\u4EF6\u5B89\u88C5\u65F6\u88AB\u8C03\u7528\uFF0C\u4ECE\u800C\u628A\xA0<code>Store</code>\xA0\u6CE8\u5165\u5230<code>Vue</code>\u5B9E\u4F8B\u91CC\u53BB\u3002\u4E5F\u5C31\u662F\u8BF4\u6BCF\xA0<code>install</code>\xA0\u4E00\u6B21\uFF0C\u90FD\u4F1A\u5C1D\u8BD5\u7ED9\xA0<code>Vue</code>\xA0\u5B9E\u4F8B\u6CE8\u5165\u4E00\u4E2A\xA0<code>Store</code></p></blockquote><p>\u5728<code>install</code>\u65B9\u6CD5\u91CC\uFF0C\u6709\u4E00\u6BB5\u903B\u8F91\u548C\u6211\u4EEC\u697C\u4E0A\u7684\xA0<code>getInstance</code>\xA0\u975E\u5E38\u76F8\u4F3C\u7684\u903B\u8F91\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let Vue // \u8FD9\u4E2AVue\u7684\u4F5C\u7528\u548C\u697C\u4E0A\u7684instance\u4F5C\u7528\u4E00\u6837
...

export function install (_Vue) {
  // \u5224\u65AD\u4F20\u5165\u7684Vue\u5B9E\u4F8B\u5BF9\u8C61\u662F\u5426\u5DF2\u7ECF\u88ABinstall\u8FC7Vuex\u63D2\u4EF6\uFF08\u662F\u5426\u6709\u4E86\u552F\u4E00\u7684state\uFF09
  if (Vue &amp;&amp; _Vue === Vue) {
    if (p<wbr>rocess.env.NODE_ENV !== &#39;production&#39;) {
      console.error(
        &#39;[vuex] already installed. Vue.use(Vuex) should be called only once.&#39;
      )
    }
    return
  }
  // \u82E5\u6CA1\u6709\uFF0C\u5219\u4E3A\u8FD9\u4E2AVue\u5B9E\u4F8B\u5BF9\u8C61install\u4E00\u4E2A\u552F\u4E00\u7684Vuex
  Vue = _Vue
  // \u5C06Vuex\u7684\u521D\u59CB\u5316\u903B\u8F91\u5199\u8FDBVue\u7684\u94A9\u5B50\u51FD\u6570\u91CC
  applyMixin(Vue)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u697C\u4E0A\u4FBF\u662F\xA0<code>Vuex</code>\xA0\u6E90\u7801\u4E2D\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0\u529E\u6CD5\u4E86\uFF0C\u5957\u8DEF\u53EF\u4EE5\u8BF4\u548C\u6211\u4EEC\u7684<code>getInstance</code>\u5982\u51FA\u4E00\u8F99\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u4E00\u4E2A\xA0<code>Vue</code>\xA0\u5B9E\u4F8B\uFF08\u5373\u4E00\u4E2A Vue \u5E94\u7528\uFF09\u53EA\u4F1A\u88AB\xA0<code>install</code>\xA0\u4E00\u6B21\xA0<code>Vuex</code>\xA0\u63D2\u4EF6\uFF0C\u6240\u4EE5\u6BCF\u4E2A Vue \u5B9E\u4F8B\u53EA\u4F1A\u62E5\u6709\u4E00\u4E2A\u5168\u5C40\u7684\xA0<code>Store</code></p></blockquote><p>3. \u601D\u8003\u65F6\u95F4</p><blockquote><p>\u601D\u8003\u4E00\u4E0B\uFF1A\u5982\u679C\u6211\u5728\xA0<code>install</code>\xA0\u91CC\u6CA1\u6709\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4F1A\u5E26\u6765\u4EC0\u4E48\u6837\u7684\u9EBB\u70E6\uFF1F</p></blockquote><p>\u6211\u4EEC\u901A\u8FC7\u4E0A\u9762\u7684\u6E90\u7801\u89E3\u6790\u53EF\u4EE5\u770B\u51FA\uFF0C\u6BCF\u6B21\xA0<code>install</code>\xA0\u90FD\u4F1A\u4E3AVue\u5B9E\u4F8B\u521D\u59CB\u5316\u4E00\u4E2A\xA0<code>Store</code>\u3002\u5047\u5982\xA0<code>install</code>\xA0\u91CC\u6CA1\u6709\u5355\u4F8B\u6A21\u5F0F\u7684\u903B\u8F91\uFF0C\u90A3\u6211\u4EEC\u5982\u679C\u5728\u4E00\u4E2A\u5E94\u7528\u91CC\u4E0D\u5C0F\u5FC3\u591A\u6B21\u5B89\u88C5\u4E86\u63D2\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5728\u4E3B\u6587\u4EF6\u91CC\u5B89\u88C5Vuex
Vue.use(Vuex)

...(\u4E2D\u95F4\u6DFB\u52A0/\u4FEE\u6539\u4E86\u4E00\u4E9Bstore\u7684\u6570\u636E)

// \u5728\u540E\u7EED\u7684\u903B\u8F91\u91CC\u4E0D\u5C0F\u5FC3\u53C8\u5B89\u88C5\u4E86\u4E00\u6B21
Vue.use(Vuex)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5931\u53BB\u4E86\u5355\u4F8B\u5224\u65AD\u80FD\u529B\u7684\xA0<code>install</code>\xA0\u65B9\u6CD5\uFF0C\u4F1A\u4E3A\u5F53\u524D\u7684Vue\u5B9E\u4F8B\u91CD\u65B0\u6CE8\u5165\u4E00\u4E2A\u65B0\u7684\xA0<code>Store</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u4E2D\u95F4\u7684\u90A3\u4E9B\u6570\u636E\u64CD\u4F5C\u5168\u90FD\u6CA1\u4E86\uFF0C\u4E00\u5207\u5F52 0\u3002\u56E0\u6B64\uFF0C\u5355\u4F8B\u6A21\u5F0F\u5728\u6B64\u5904\u662F\u975E\u5E38\u5FC5\u8981\u7684\u3002</p><p>\u9664\u4E86\u8BF4\u5728\xA0<code>Vuex</code>\xA0\u4E2D\u5927\u5C55\u8EAB\u624B\uFF0C\u6211\u4EEC\u5728\xA0<code>Redux</code>\u3001<code>jQuery</code>\xA0\u7B49\u8BB8\u591A\u4F18\u79C0\u7684\u524D\u7AEF\u5E93\u91CC\u4E5F\u90FD\u80FD\u770B\u5230\u5355\u4F8B\u6A21\u5F0F\u7684\u8EAB\u5F71</p><h3 id="_2-3-\u5355\u4F8B\u6A21\u5F0F-\u9762\u8BD5\u771F\u9898" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5355\u4F8B\u6A21\u5F0F-\u9762\u8BD5\u771F\u9898" aria-hidden="true">#</a> 2.3 \u5355\u4F8B\u6A21\u5F0F------\u9762\u8BD5\u771F\u9898</h3><blockquote><p>\u5B9E\u73B0\u4E00\u4E2A\xA0<code>Storage</code></p></blockquote><p>1. \u63CF\u8FF0</p><blockquote><p>\u5B9E\u73B0<code>Storage</code>\uFF0C\u4F7F\u5F97\u8BE5\u5BF9\u8C61\u4E3A\u5355\u4F8B\uFF0C\u57FA\u4E8E\xA0<code>localStorage</code>\xA0\u8FDB\u884C\u5C01\u88C5\u3002\u5B9E\u73B0\u65B9\u6CD5\xA0<code>setItem(key,value)</code>\xA0\u548C\xA0<code>getItem(key)</code></p></blockquote><p>2. \u601D\u8DEF</p><blockquote><p>\u5177\u4F53\u5B9E\u73B0\u4E0A\uFF0C\u628A\u5224\u65AD\u903B\u8F91\u5199\u5165\u9759\u6001\u65B9\u6CD5\u6216\u8005\u6784\u9020\u51FD\u6570\u91CC\u90FD\u6CA1\u5173\u7CFB\uFF0C\u6700\u597D\u80FD\u628A\u95ED\u5305\u7684\u7248\u672C\u4E5F\u5199\u51FA\u6765</p></blockquote><p>3. \u5B9E\u73B0\uFF1A\u9759\u6001\u65B9\u6CD5\u7248</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49Storage
class Storage {
    static getInstance() {
        // \u5224\u65AD\u662F\u5426\u5DF2\u7ECFnew\u8FC71\u4E2A\u5B9E\u4F8B
        if (!Storage.instance) {
            // \u82E5\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5148\u521B\u5EFA\u5B83
            Storage.instance = new Storage()
        }
        // \u5982\u679C\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE
        return Storage.instance
    }
    getItem (key) {
        return localStorage.getItem(key)
    }
    setItem (key, value) {
        return localStorage.setItem(key, value)
    }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()

storage1.setItem(&#39;name&#39;, &#39;\u674E\u96F7&#39;)
// \u674E\u96F7
storage1.getItem(&#39;name&#39;)
// \u4E5F\u662F\u674E\u96F7
storage2.getItem(&#39;name&#39;)

// \u8FD4\u56DEtrue
storage1 === storage2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4. \u5B9E\u73B0\uFF1A \u95ED\u5305\u7248</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5148\u5B9E\u73B0\u4E00\u4E2A\u57FA\u7840\u7684StorageBase\u7C7B\uFF0C\u628AgetItem\u548CsetItem\u65B9\u6CD5\u653E\u5728\u5B83\u7684\u539F\u578B\u94FE\u4E0A
function StorageBase () {}
StorageBase.prototype.getItem = function (key){
    return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value)
}

// \u4EE5\u95ED\u5305\u7684\u5F62\u5F0F\u521B\u5EFA\u4E00\u4E2A\u5F15\u7528\u81EA\u7531\u53D8\u91CF\u7684\u6784\u9020\u51FD\u6570
const Storage = (function(){
    let instance = null
    return function(){
        // \u5224\u65AD\u81EA\u7531\u53D8\u91CF\u662F\u5426\u4E3Anull
        if(!instance) {
            // \u5982\u679C\u4E3Anull\u5219new\u51FA\u552F\u4E00\u5B9E\u4F8B
            instance = new StorageBase()
        }
        return instance
    }
})()

// \u8FD9\u91CC\u5176\u5B9E\u4E0D\u7528 new Storage \u7684\u5F62\u5F0F\u8C03\u7528\uFF0C\u76F4\u63A5 Storage() \u4E5F\u4F1A\u6709\u4E00\u6837\u7684\u6548\u679C
const storage1 = new Storage()
const storage2 = new Storage()

storage1.setItem(&#39;name&#39;, &#39;\u674E\u96F7&#39;)
// \u674E\u96F7
storage1.getItem(&#39;name&#39;)
// \u4E5F\u662F\u674E\u96F7
storage2.getItem(&#39;name&#39;)

// \u8FD4\u56DEtrue
storage1 === storage2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u7684\u6A21\u6001\u6846" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u7684\u6A21\u6001\u6846" aria-hidden="true">#</a> 2.4 \u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u7684\u6A21\u6001\u6846</h3><blockquote><p>\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u552F\u4E00\u7684Modal\u5F39\u6846</p></blockquote><p>\u601D\u8DEF</p><p>\u8FD9\u9053\u9898\u6BD4\u8F83\u7ECF\u5178\uFF0C\u57FA\u672C\u4E0A\u6240\u6709\u8BB2\u5355\u4F8B\u6A21\u5F0F\u7684\u6587\u7AE0\u90FD\u4F1A\u4EE5\u6B64\u4E3A\u4F8B\uFF0C\u540C\u65F6\u5B83\u4E5F\u662F\u65E9\u671F\u5355\u4F8B\u6A21\u5F0F\u5728\u524D\u7AEF\u9886\u57DF\u7684\u6700\u96C6\u4E2D\u4F53\u73B0\u3002</p><blockquote><p>\u4E07\u53D8\u4E0D\u79BB\u5176\u8E2A\uFF0C\u8BB0\u4F4F<code>getInstance</code>\u65B9\u6CD5\u3001\u8BB0\u4F4F<code>instance</code>\u53D8\u91CF\u3001\u8BB0\u4F4F\u95ED\u5305\u548C\u9759\u6001\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u9898\u9664\u4E86\u8981\u591A\u5199\u70B9 HTML \u548C\xA0<code>CSS</code>\xA0\u4E4B\u5916\uFF0C\u5BF9\u5927\u5BB6\u6765\u8BF4\u5B8C\u5168\u4E0D\u6210\u95EE\u9898\u3002</p></blockquote><p>\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;\u5355\u4F8B\u6A21\u5F0F\u5F39\u6846&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
    #modal {
        height: 200px;
        width: 200px;
        line-height: 200px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid black;
        text-align: center;
    }
&lt;/style&gt;
&lt;body&gt;
	&lt;button id=&#39;open&#39;&gt;\u6253\u5F00\u5F39\u6846&lt;/button&gt;
	&lt;button id=&#39;close&#39;&gt;\u5173\u95ED\u5F39\u6846&lt;/button&gt;
&lt;/body&gt;
&lt;script&gt;
    // \u6838\u5FC3\u903B\u8F91\uFF0C\u8FD9\u91CC\u91C7\u7528\u4E86\u95ED\u5305\u601D\u8DEF\u6765\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F
    const Modal = (function() {
    	let modal = null
    	return function() {
            if(!modal) {
            	modal = document.createElement(&#39;div&#39;)
            	modal.innerHTML = &#39;\u6211\u662F\u4E00\u4E2A\u5168\u5C40\u552F\u4E00\u7684Modal&#39;
            	modal.id = &#39;modal&#39;
            	modal.style.display = &#39;none&#39;
            	document.body.appendChild(modal)
            }
            return modal
    	}
    })()

    // \u70B9\u51FB\u6253\u5F00\u6309\u94AE\u5C55\u793A\u6A21\u6001\u6846
    document.getElementById(&#39;open&#39;).addEventListener(&#39;click&#39;, function() {
        // \u672A\u70B9\u51FB\u5219\u4E0D\u521B\u5EFAmodal\u5B9E\u4F8B\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5185\u5B58\u5360\u7528;\u6B64\u5904\u4E0D\u7528 new Modal \u7684\u5F62\u5F0F\u8C03\u7528\u4E5F\u53EF\u4EE5\uFF0C\u548C Storage \u540C\u7406
    	const modal = new Modal()
    	modal.style.display = &#39;block&#39;
    })

    // \u70B9\u51FB\u5173\u95ED\u6309\u94AE\u9690\u85CF\u6A21\u6001\u6846
    document.getElementById(&#39;close&#39;).addEventListener(&#39;click&#39;, function() {
    	const modal = new Modal()
    	if(modal) {
    	    modal.style.display = &#39;none&#39;
    	}
    })
&lt;/script&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u662F\u4E0D\u662F\u53D1\u73B0\u53C8\u662F\u719F\u6089\u7684\u5957\u8DEF\uFF1F\u53C8\u53EF\u4EE5\u9ED8\u5199\u4E86\uFF1F\uFF08ES6 \u7248\u672C\u7684\u5B9E\u73B0\u5927\u5BB6\u81EA\u5DF1\u5C1D\u8BD5\u9ED8\u5199\u4E00\u4E0B\uFF0C\u76F8\u4FE1\u5BF9\u73B0\u5728\u7684\u4F60\u6765\u8BF4\u5DF2\u7ECF\u975E\u5E38\u7B80\u5355\u4E86\uFF09\u3002</p><p>\u8FD9\u5C31\u662F\u5355\u4F8B\u6A21\u5F0F\u9762\u8BD5\u9898\u7684\u7279\u70B9\uFF0C\u51C6\u786E\u5730\u8BF4\uFF0C\u662F\u6240\u6709\u8BBE\u8BA1\u6A21\u5F0F\u76F8\u5173\u9762\u8BD5\u9898\u7684\u7279\u70B9------\u7262\u8BB0\u6838\u5FC3\u601D\u8DEF\uFF0C\u5C31\u80FD\u4E3E\u4E00\u53CD\u4E09\u3002\u6240\u4EE5\u8BF4\u8BBE\u8BA1\u6A21\u5F0F\u7684\u5B66\u4E60\u662F\u5178\u578B\u7684\u4E00\u5206\u8015\u8018\u4E00\u5206\u6536\u83B7\uFF0C\u6027\u4EF7\u6BD4\u6781\u9AD8\u3002</p><h2 id="_3-\u7ED3\u6784\u578B-\u88C5\u9970\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u7ED3\u6784\u578B-\u88C5\u9970\u5668\u6A21\u5F0F" aria-hidden="true">#</a> 3 \u7ED3\u6784\u578B-\u88C5\u9970\u5668\u6A21\u5F0F</h2><blockquote><p>\u88C5\u9970\u5668\u6A21\u5F0F\uFF0C\u53C8\u540D\u88C5\u9970\u8005\u6A21\u5F0F\u3002\u5B83\u7684\u5B9A\u4E49\u662F&quot;\u5728\u4E0D\u6539\u53D8\u539F\u5BF9\u8C61\u7684\u57FA\u7840\u4E0A\uFF0C\u901A\u8FC7\u5BF9\u5176\u8FDB\u884C\u5305\u88C5\u62D3\u5C55\uFF0C\u4F7F\u539F\u6709\u5BF9\u8C61\u53EF\u4EE5\u6EE1\u8DB3\u7528\u6237\u7684\u66F4\u590D\u6742\u9700\u6C42&quot;\u3002</p></blockquote><h3 id="_3-1-\u88C5\u9970\u5668\u6A21\u5F0F\u521D\u76F8\u89C1" tabindex="-1"><a class="header-anchor" href="#_3-1-\u88C5\u9970\u5668\u6A21\u5F0F\u521D\u76F8\u89C1" aria-hidden="true">#</a> 3.1 \u88C5\u9970\u5668\u6A21\u5F0F\u521D\u76F8\u89C1</h3><blockquote><p>\u4E3A\u4E86\u4E0D\u88AB\u5DF2\u6709\u7684\u4E1A\u52A1\u903B\u8F91\u5E72\u6270\uFF0C\u5F53\u52A1\u4E4B\u6025\u5C31\u662F\u5C06\u65E7\u903B\u8F91\u4E0E\u65B0\u903B\u8F91\u5206\u79BB\uFF0C\u628A\u65E7\u903B\u8F91\u62BD\u51FA\u53BB\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5C06\u5C55\u793AModal\u7684\u903B\u8F91\u5355\u72EC\u5C01\u88C5
function openModal() {
    const modal = new Modal()
    modal.style.display = &#39;block&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u65B0\u903B\u8F91\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6309\u94AE\u6587\u6848\u4FEE\u6539\u903B\u8F91
function changeButtonText() {
    const btn = document.getElementById(&#39;open&#39;)
    btn.innerText = &#39;\u5FEB\u53BB\u767B\u5F55&#39;
}

// \u6309\u94AE\u7F6E\u7070\u903B\u8F91
function disableButton() {
    const btn =  document.getElementById(&#39;open&#39;)
    btn.setAttribute(&quot;disabled&quot;, true)
}

// \u65B0\u7248\u672C\u529F\u80FD\u903B\u8F91\u6574\u5408
function changeButtonStatus() {
    changeButtonText()
    disableButton()
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u628A\u4E09\u4E2A\u64CD\u4F5C\u9010\u4E2A\u6DFB\u52A0open\u6309\u94AE\u7684\u76D1\u542C\u51FD\u6570\u91CC\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>document.getElementById(&#39;open&#39;).addEventListener(&#39;click&#39;, function() {
    openModal()
    changeButtonStatus()
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u6B64\u4E00\u6765\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86&quot;\u53EA\u6DFB\u52A0\uFF0C\u4E0D\u4FEE\u6539&quot;\u7684\u88C5\u9970\u5668\u6A21\u5F0F\uFF0C\u4F7F\u7528changeButtonStatus\u7684\u903B\u8F91\u88C5\u9970\u4E86\u65E7\u7684\u6309\u94AE\u70B9\u51FB\u903B\u8F91\u3002\u4EE5\u4E0A\u662FES5\u4E2D\u7684\u5B9E\u73B0\uFF0CES6\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4EE5\u4E00\u79CD\u66F4\u52A0\u9762\u5411\u5BF9\u8C61\u5316\u7684\u65B9\u5F0F\u53BB\u5199\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u6253\u5F00\u6309\u94AE
class OpenButton {
    // \u70B9\u51FB\u540E\u5C55\u793A\u5F39\u6846\uFF08\u65E7\u903B\u8F91\uFF09
    onClick() {
        const modal = new Modal()
    	modal.style.display = &#39;block&#39;
    }
}

// \u5B9A\u4E49\u6309\u94AE\u5BF9\u5E94\u7684\u88C5\u9970\u5668
class Decorator {
    // \u5C06\u6309\u94AE\u5B9E\u4F8B\u4F20\u5165
    constructor(open_button) {
        this.open_button = open_button
    }

    onClick() {
        this.open_button.onClick()
        // &quot;\u5305\u88C5&quot;\u4E86\u4E00\u5C42\u65B0\u903B\u8F91
        this.changeButtonStatus()
    }

    changeButtonStatus() {
        this.changeButtonText()
        this.disableButton()
    }

    disableButton() {
        const btn =  document.getElementById(&#39;open&#39;)
        btn.setAttribute(&quot;disabled&quot;, true)
    }

    changeButtonText() {
        const btn = document.getElementById(&#39;open&#39;)
        btn.innerText = &#39;\u5FEB\u53BB\u767B\u5F55&#39;
    }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById(&#39;open&#39;).addEventListener(&#39;click&#39;, function() {
    // openButton.onClick()
    // \u6B64\u5904\u53EF\u4EE5\u5206\u522B\u5C1D\u8BD5\u4E24\u4E2A\u5B9E\u4F8B\u7684onClick\u65B9\u6CD5\uFF0C\u9A8C\u8BC1\u88C5\u9970\u5668\u662F\u5426\u751F\u6548
    decorator.onClick()
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5927\u5BB6\u8FD9\u91CC\u9700\u8981\u7279\u522B\u5173\u6CE8\u4E00\u4E0B ES6 \u8FD9\u4E2A\u7248\u672C\u7684\u5B9E\u73B0\uFF0C\u8FD9\u91CC\u6211\u4EEC\u628A\u6309\u94AE\u5B9E\u4F8B\u4F20\u7ED9\u4E86 Decorator\uFF0C\u4EE5\u4FBF\u4E8E\u540E\u7EED Decorator \u53EF\u4EE5\u5BF9\u5B83\u4E3A\u6240\u6B32\u4E3A\u8FDB\u884C\u903B\u8F91\u7684\u62D3\u5C55\u3002\u5728 ES7 \u4E2D\uFF0C<code>Decorator</code>\xA0\u4F5C\u4E3A\u4E00\u79CD\u8BED\u6CD5\u88AB\u76F4\u63A5\u652F\u6301\u4E86\uFF0C\u5B83\u7684\u4E66\u5199\u4F1A\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\uFF0C\u4F46\u80CC\u540E\u7684\u539F\u7406\u5176\u5B9E\u4E0E\u6B64\u5927\u540C\u5C0F\u5F02</p></blockquote><h3 id="_3-2-\u6DF1\u5165\u88C5\u9970\u5668\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6DF1\u5165\u88C5\u9970\u5668\u539F\u7406" aria-hidden="true">#</a> 3.2 \u6DF1\u5165\u88C5\u9970\u5668\u539F\u7406</h3><p>\u5728 ES7 \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u5199 python \u4E00\u6837\u901A\u8FC7\u4E00\u4E2A<code>@</code>\u8BED\u6CD5\u7CD6\u8F7B\u677E\u5730\u7ED9\u4E00\u4E2A\u7C7B\u88C5\u4E0A\u88C5\u9970\u5668\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u88C5\u9970\u5668\u51FD\u6570\uFF0C\u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u7C7B
function classDecorator(target) {
    target.hasDecorator = true
  	return target
}

// \u5C06\u88C5\u9970\u5668&quot;\u5B89\u88C5&quot;\u5230Button\u7C7B\u4E0A
@classDecorator
class Button {
    // Button\u7C7B\u7684\u76F8\u5173\u903B\u8F91
}

// \u9A8C\u8BC1\u88C5\u9970\u5668\u662F\u5426\u751F\u6548
console.log(&#39;Button \u662F\u5426\u88AB\u88C5\u9970\u4E86\uFF1A&#39;, Button.hasDecorator)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u7528\u540C\u6837\u7684\u8BED\u6CD5\u7CD6\u53BB\u88C5\u9970\u7C7B\u91CC\u9762\u7684\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5177\u4F53\u7684\u53C2\u6570\u610F\u4E49\uFF0C\u5728\u4E0B\u4E2A\u5C0F\u8282\uFF0C\u8FD9\u91CC\u5927\u5BB6\u5148\u611F\u77E5\u4E00\u4E0B\u64CD\u4F5C
function funcDecorator(target, name, descriptor) {
  let originalMethod = descriptor.value
  descriptor.value = function() {
    console.log(&#39;\u6211\u662FFunc\u7684\u88C5\u9970\u5668\u903B\u8F91&#39;)
    return originalMethod.apply(this, arguments)
  }
  return descriptor
}

class Button {
    @funcDecorator
    onClick() {
        console.log(&#39;\u6211\u662FFunc\u7684\u539F\u6709\u903B\u8F91&#39;)
    }
}

// \u9A8C\u8BC1\u88C5\u9970\u5668\u662F\u5426\u751F\u6548
const button = new Button()
button.onClick()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u88C5\u9970\u5668\u8BED\u6CD5\u7CD6\u80CC\u540E\u7684\u6545\u4E8B" tabindex="-1"><a class="header-anchor" href="#_3-3-\u88C5\u9970\u5668\u8BED\u6CD5\u7CD6\u80CC\u540E\u7684\u6545\u4E8B" aria-hidden="true">#</a> 3.3 \u88C5\u9970\u5668\u8BED\u6CD5\u7CD6\u80CC\u540E\u7684\u6545\u4E8B</h3><blockquote><p>\u6240\u8C13\u8BED\u6CD5\u7CD6\uFF0C\u5F80\u5F80\u610F\u5473\u7740&quot;\u7F8E\u597D\u7684\u8868\u8C61&quot;\u3002\u6B63\u5982\xA0<code>class</code>\xA0\u8BED\u6CD5\u7CD6\u80CC\u540E\u662F\u5927\u5BB6\u65E9\u5DF2\u5341\u5206\u719F\u6089\u7684 ES5 \u6784\u9020\u51FD\u6570\u4E00\u6837\uFF0C\u88C5\u9970\u5668\u8BED\u6CD5\u7CD6\u80CC\u540E\u4E5F\u662F\u6211\u4EEC\u7684\u8001\u670B\u53CB\uFF0C\u4E0D\u4FE1\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B<code>@decorator</code>\u90FD\u5E2E\u6211\u4EEC\u505A\u4E86\u4E9B\u4EC0\u4E48\uFF1A</p></blockquote><blockquote><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u4F7F\u7528\xA0<code>ES6</code>\xA0\u5B9E\u73B0\u88C5\u9970\u5668\u6A21\u5F0F\u65F6\u66FE\u7ECF\u5C06\u6309\u94AE\u5B9E\u4F8B\u4F20\u7ED9\u4E86\xA0<code>Decorator</code>\uFF0C\u4EE5\u4FBF\u4E8E\u540E\u7EED\xA0<code>Decorator</code>\xA0\u53EF\u4EE5\u5BF9\u5B83\u8FDB\u884C\u903B\u8F91\u7684\u62D3\u5C55\u3002\u8FD9\u4E5F\u6B63\u662F\u88C5\u9970\u5668\u7684\u6700\u6700\u57FA\u672C\u64CD\u4F5C------\u5B9A\u4E49\u88C5\u9970\u5668\u51FD\u6570\uFF0C\u5C06\u88AB\u88C5\u9970\u8005&quot;\u4EA4\u7ED9&quot;\u88C5\u9970\u5668\u3002\u8FD9\u4E5F\u6B63\u662F\u88C5\u9970\u5668\u8BED\u6CD5\u7CD6\u9996\u5148\u5E2E\u6211\u4EEC\u505A\u6389\u7684\u5DE5\u4F5C ------ \u51FD\u6570\u4F20\u53C2&amp;\u8C03\u7528\u3002</p></blockquote><p>1. \u7C7B\u88C5\u9970\u5668\u7684\u53C2\u6570</p><p>\u5F53\u6211\u4EEC\u7ED9\u4E00\u4E2A\u7C7B\u6DFB\u52A0\u88C5\u9970\u5668\u65F6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function classDecorator(target) {
    target.hasDecorator = true
  	return target
}

// \u5C06\u88C5\u9970\u5668&quot;\u5B89\u88C5&quot;\u5230Button\u7C7B\u4E0A
@classDecorator
class Button {
    // Button\u7C7B\u7684\u76F8\u5173\u903B\u8F91
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5904\u7684\xA0<code>target</code>\xA0\u5C31\u662F\u88AB\u88C5\u9970\u7684\u7C7B\u672C\u8EAB\u3002</p><p>2. \u65B9\u6CD5\u88C5\u9970\u5668\u7684\u53C2\u6570</p><p>\u800C\u5F53\u6211\u4EEC\u7ED9\u4E00\u4E2A\u65B9\u6CD5\u6DFB\u52A0\u88C5\u9970\u5668\u65F6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function funcDecorator(target, name, descriptor) {
    let originalMethod = descriptor.value
    descriptor.value = function() {
    console.log(&#39;\u6211\u662FFunc\u7684\u88C5\u9970\u5668\u903B\u8F91&#39;)
    return originalMethod.apply(this, arguments)
  }
  return descriptor
}

class Button {
    @funcDecorator
    onClick() {
        console.log(&#39;\u6211\u662FFunc\u7684\u539F\u6709\u903B\u8F91&#39;)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5904\u7684\xA0<code>target</code>\xA0\u53D8\u6210\u4E86<code>Button.prototype</code>\uFF0C\u5373\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u3002\u8FD9\u662F\u56E0\u4E3A\xA0<code>onClick</code>\xA0\u65B9\u6CD5\u603B\u662F\u8981\u4F9D\u9644\u5176\u5B9E\u4F8B\u5B58\u5728\u7684\uFF0C\u4FEE\u9970\xA0<code>onClik</code>\xA0\u5176\u5B9E\u662F\u4FEE\u9970\u5B83\u7684\u5B9E\u4F8B\u3002\u4F46\u6211\u4EEC\u7684\u88C5\u9970\u5668\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0C<code>Button</code>\xA0\u5B9E\u4F8B\u8FD8\u5E76\u4E0D\u5B58\u5728\u3002\u4E3A\u4E86\u786E\u4FDD\u5B9E\u4F8B\u751F\u6210\u540E\u53EF\u4EE5\u987A\u5229\u8C03\u7528\u88AB\u88C5\u9970\u597D\u7684\u65B9\u6CD5\uFF0C\u88C5\u9970\u5668\u53EA\u80FD\u53BB\u4FEE\u9970\xA0<code>Button</code>\xA0\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u3002</p><p>3. \u88C5\u9970\u5668\u51FD\u6570\u8C03\u7528\u7684\u65F6\u673A</p><blockquote><p>\u88C5\u9970\u5668\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0C<code>Button</code>\xA0\u5B9E\u4F8B\u8FD8\u5E76\u4E0D\u5B58\u5728\u3002\u8FD9\u662F\u56E0\u4E3A\u5B9E\u4F8B\u662F\u5728\u6211\u4EEC\u7684\u4EE3\u7801\u8FD0\u884C\u65F6\u52A8\u6001\u751F\u6210\u7684\uFF0C\u800C\u88C5\u9970\u5668\u51FD\u6570\u5219\u662F\u5728\u7F16\u8BD1\u9636\u6BB5\u5C31\u6267\u884C\u4E86\u3002\u6240\u4EE5\u8BF4\u88C5\u9970\u5668\u51FD\u6570\u771F\u6B63\u80FD\u89E6\u53CA\u5230\u7684\uFF0C\u5C31\u53EA\u6709\u7C7B\u8FD9\u4E2A\u5C42\u9762\u4E0A\u7684\u5BF9\u8C61</p></blockquote><h3 id="_3-4-\u5C06-\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61-\u4EA4\u5230\u4F60\u624B\u91CC" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5C06-\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61-\u4EA4\u5230\u4F60\u624B\u91CC" aria-hidden="true">#</a> 3.4 \u5C06&quot;\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61&quot;\u4EA4\u5230\u4F60\u624B\u91CC</h3><blockquote><p>\u5728\u7F16\u5199\u7C7B\u88C5\u9970\u5668\u65F6\uFF0C\u6211\u4EEC\u4E00\u822C\u83B7\u53D6\u4E00\u4E2A<code>target</code>\u53C2\u6570\u5C31\u8DB3\u591F\u4E86\u3002\u4F46\u5728\u7F16\u5199\u65B9\u6CD5\u88C5\u9970\u5668\u65F6\uFF0C\u6211\u4EEC\u5F80\u5F80\u9700\u8981\u81F3\u5C11\u4E09\u4E2A\u53C2\u6570\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function funcDecorator(target, name, descriptor) {
  let originalMethod = descriptor.value
  descriptor.value = function() {
    console.log(&#39;\u6211\u662FFunc\u7684\u88C5\u9970\u5668\u903B\u8F91&#39;)
    return originalMethod.apply(this, arguments)
  }
  return descriptor
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u610F\u4E49\uFF0C\u524D\u6587\u5DF2\u7ECF\u89E3\u91CA\u8FC7\u3002\u7B2C\u4E8C\u4E2A\u53C2 \u6570name\uFF0C\u662F\u6211\u4EEC\u4FEE\u9970\u7684\u76EE\u6807\u5C5E\u6027\u5C5E\u6027\u540D\uFF0C\u4E5F\u6CA1\u5565\u597D\u8BB2\u7684\u3002\u5173\u952E\u5C31\u5728\u8FD9\u4E2A d<code>escriptor</code>\xA0\u8EAB\u4E0A\uFF0C\u5B83\u4E5F\u662F\u6211\u4EEC\u4F7F\u7528\u9891\u7387\u6700\u9AD8\u7684\u4E00\u4E2A\u53C2\u6570\uFF0C\u5B83\u7684\u771F\u9762\u76EE\u5C31\u662F&quot;\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61&quot;\uFF08<code>attributes object</code>\uFF09\u3002\u8FD9\u4E2A\u540D\u5B57\u5927\u5BB6\u53EF\u80FD\u4E0D\u719F\u6089\uFF0C\u4F46<code>Object.defineProperty</code>\u65B9\u6CD5\u6211\u60F3\u5927\u5BB6\u591A\u5C11\u90FD\u7528\u8FC7\uFF0C\u5B83\u7684\u8C03\u7528\u65B9\u5F0F\u662F\u8FD9\u6837\u7684\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Object.defineProperty(obj, prop, descriptor)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6B64\u5904\u7684<code>descriptor</code>\u548C\u88C5\u9970\u5668\u51FD\u6570\u91CC\u7684\xA0<code>descriptor</code>\xA0\u662F\u4E00\u4E2A\u4E1C\u897F\uFF0C\u5B83\u662F\xA0<code>JavaScript</code>\xA0\u63D0\u4F9B\u7684\u4E00\u4E2A\u5185\u90E8\u6570\u636E\u7ED3\u6784\u3001\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E13\u95E8\u7528\u6765\u63CF\u8FF0\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u5B83\u7531\u5404\u79CD\u5404\u6837\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u63CF\u8FF0\u7B26\u53C8\u5206\u4E3A\u6570\u636E\u63CF\u8FF0\u7B26\u548C\u5B58\u53D6\u63CF\u8FF0\u7B26\uFF1A</p></blockquote><ul><li>\u6570\u636E\u63CF\u8FF0\u7B26\uFF1A <ul><li>\u5305\u62EC\xA0<code>value</code>\uFF08\u5B58\u653E\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u4E3A\u9ED8\u8BA4\u4E3A\xA0<code>undefined</code>\uFF09</li><li><code>writable</code>\uFF08\u8868\u793A\u5C5E\u6027\u503C\u662F\u5426\u53EF\u6539\u53D8\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF09</li><li><code>enumerable</code>\uFF08\u8868\u793A\u5C5E\u6027\u662F\u5426\u53EF\u679A\u4E3E\uFF0C\u9ED8\u8BA4\u4E3A\xA0<code>true</code>\uFF09</li><li><code>configurable</code>\uFF08\u5C5E\u6027\u662F\u5426\u53EF\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A<code>true</code>\uFF09\u3002</li></ul></li><li>\u5B58\u53D6\u63CF\u8FF0\u7B26\uFF1A <ul><li>\u5305\u62EC\xA0<code>get</code>\xA0\u65B9\u6CD5\uFF08\u8BBF\u95EE\u5C5E\u6027\u65F6\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A\xA0<code>undefined</code>\uFF09</li><li><code>set</code>\uFF08\u8BBE\u7F6E\u5C5E\u6027\u65F6\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A\xA0<code>undefined</code>\xA0\uFF09</li></ul></li></ul><blockquote><p>\u5F88\u660E\u663E\uFF0C\u62FF\u5230\u4E86\xA0<code>descriptor</code>\uFF0C\u5C31\u76F8\u5F53\u4E8E\u62FF\u5230\u4E86\u76EE\u6807\u65B9\u6CD5\u7684\u63A7\u5236\u6743\u3002\u901A\u8FC7\u4FEE\u6539\xA0<code>descriptor</code>\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5BF9\u76EE\u6807\u65B9\u6CD5\u4E3A\u6240\u6B32\u4E3A\u7684\u903B\u8F91\u8FDB\u884C\u62D3\u5C55\u4E86~</p></blockquote><blockquote><p>\u5728\u4E0A\u6587\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\xA0<code>descriptor</code>\xA0\u83B7\u53D6\u5230\u4E86\u539F\u51FD\u6570\u7684\u51FD\u6570\u4F53\uFF08<code>originalMethod</code>\uFF09\uFF0C\u628A\u539F\u51FD\u6570\u63A8\u8FDF\u5230\u4E86\u65B0\u903B\u8F91\uFF08console\uFF09\u7684\u540E\u9762\u53BB\u6267\u884C\u3002\u8FD9\u79CD\u505A\u6CD5\u548C\u6211\u4EEC\u4E0A\u4E00\u8282\u5728ES5\u4E2D\u5B9E\u73B0\u88C5\u9970\u5668\u6A21\u5F0F\u65F6\u505A\u7684\u4E8B\u60C5\u4E00\u6A21\u4E00\u6837\uFF0C\u6240\u4EE5\u8BF4\u88C5\u9970\u5668\u5C31\u662F\u8FD9\u4E48\u56DE\u4E8B\u513F\uFF0C\u6362\u6C64\u4E0D\u6362\u836F~</p></blockquote><h3 id="_3-5-react\u4E2D\u7684\u88C5\u9970\u5668-hoc" tabindex="-1"><a class="header-anchor" href="#_3-5-react\u4E2D\u7684\u88C5\u9970\u5668-hoc" aria-hidden="true">#</a> 3.5 React\u4E2D\u7684\u88C5\u9970\u5668\uFF1AHOC</h3><blockquote><p>\u9AD8\u9636\u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E14\u8BE5\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\u3002</p></blockquote><p>HOC (Higher Order Component) \u5373\u9AD8\u9636\u7EC4\u4EF6\u3002\u5B83\u662F\u88C5\u9970\u5668\u6A21\u5F0F\u5728 React \u4E2D\u7684\u5B9E\u8DF5\uFF0C\u540C\u65F6\u4E5F\u662F React \u5E94\u7528\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u90E8\u5206\u3002\u901A\u8FC7\u7F16\u5199\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5145\u5206\u590D\u7528\u73B0\u6709\u903B\u8F91\uFF0C\u63D0\u9AD8\u7F16\u7801\u6548\u7387\u548C\u4EE3\u7801\u7684\u5065\u58EE\u6027\u3002</p><p>\u6211\u4EEC\u73B0\u5728\u7F16\u5199\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u628A\u4F20\u5165\u7684\u7EC4\u4EF6\u4E22\u8FDB\u4E00\u4E2A\u6709\u7EA2\u8272\u8FB9\u6846\u7684\u5BB9\u5668\u91CC\uFF08\u62D3\u5C55\u5176\u6837\u5F0F\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import React, { Component } from &#39;react&#39;

const BorderHoc = WrappedComponent =&gt; class extends Component {
  render() {
    return &lt;div style={{ border: &#39;solid 1px red&#39; }}&gt;
      &lt;WrappedComponent /&gt;
    &lt;/div&gt;
  }
}
export default borderHoc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u5B83\u6765\u88C5\u9970\u76EE\u6807\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import React, { Component } from &#39;react&#39;
import BorderHoc from &#39;./BorderHoc&#39;

// \u7528BorderHoc\u88C5\u9970\u76EE\u6807\u7EC4\u4EF6
@BorderHoc
class TargetComponent extends React.Component {
  render() {
    // \u76EE\u6807\u7EC4\u4EF6\u5177\u4F53\u7684\u4E1A\u52A1\u903B\u8F91
  }
}

// export\u51FA\u53BB\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u88AB\u5305\u88F9\u540E\u7684\u7EC4\u4EF6
export default TargetComponent

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u9AD8\u9636\u7EC4\u4EF6\u4ECE\u5B9E\u73B0\u5C42\u9762\u6765\u770B\u5176\u5B9E\u5C31\u662F\u4E0A\u6587\u6211\u4EEC\u63D0\u5230\u7684\u7C7B\u88C5\u9970\u5668\u3002\u5728\u9AD8\u9636\u7EC4\u4EF6\u7684\u8F85\u52A9\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u5FC5\u56E0\u4E3A\u4E00\u4E2A\u5C0F\u5C0F\u7684\u62D3\u5C55\u800C\u5927\u8D39\u5468\u6298\u5730\u7F16\u5199\u65B0\u7EC4\u4EF6\u6216\u8005\u628A\u4E00\u4E2A\u65B0\u903B\u8F91\u91CD\u5199\xA0<code>N</code>\xA0\u591A\u6B21\uFF0C\u53EA\u9700\u8981\u8F7B\u8F7B\xA0<code>@</code>\xA0\u4E00\u4E0B\u88C5\u9970\u5668\u5373\u53EF\u3002</p></blockquote><h3 id="_3-6-\u4F7F\u7528\u88C5\u9970\u5668\u6539\u5199-redux-connect" tabindex="-1"><a class="header-anchor" href="#_3-6-\u4F7F\u7528\u88C5\u9970\u5668\u6539\u5199-redux-connect" aria-hidden="true">#</a> 3.6 \u4F7F\u7528\u88C5\u9970\u5668\u6539\u5199 Redux connect</h3><blockquote><p>Redux \u662F\u70ED\u95E8\u7684\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\u3002\u5728 React \u4E2D\uFF0C\u5F53\u6211\u4EEC\u60F3\u8981\u5F15\u5165 Redux \u65F6\uFF0C\u901A\u5E38\u9700\u8981\u8C03\u7528 connect \u65B9\u6CD5\u6765\u628A\u72B6\u6001\u548C\u7EC4\u4EF6\u7ED1\u5728\u4E00\u8D77\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import React, { Component } from &#39;react&#39;
import { connect } from &#39;react-redux&#39;
import { bindActionCreators } from &#39;redux&#39;
import action from &#39;./action.js&#39;

class App extends Component {
  render() {
    // App\u7684\u4E1A\u52A1\u903B\u8F91
  }
}

function mapStateToProps(state) {
  // \u5047\u8BBEApp\u7684\u72B6\u6001\u5BF9\u5E94\u72B6\u6001\u6811\u4E0A\u7684app\u8282\u70B9
  return state.app
}

function mapDispatchToProps(dispatch) {
  // \u8FD9\u6BB5\u770B\u4E0D\u61C2\u4E5F\u6CA1\u5173\u7CFB\uFF0C\u4E0B\u9762\u4F1A\u6709\u89E3\u91CA\u3002\u91CD\u70B9\u7406\u89E3connect\u7684\u8C03\u7528\u5373\u53EF
  return bindActionCreators(action, dispatch)
}

// \u628AApp\u7EC4\u4EF6\u4E0ERedux\u7ED1\u5728\u4E00\u8D77
export default connect(mapStateToProps, mapDispatchToProps)(App)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7ED9\u6CA1\u7528\u8FC7 redux \u7684\u540C\u5B66\u89E3\u91CA\u4E00\u4E0B connect \u7684\u4E24\u4E2A\u5165\u53C2\uFF1A<code>mapStateToProps</code>\xA0\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u53EF\u4EE5\u5EFA\u7ACB\u7EC4\u4EF6\u548C\u72B6\u6001\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\uFF1B<code>mapDispatchToProps</code>\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u7528\u4E8E\u5EFA\u7ACB\u7EC4\u4EF6\u548C<code>store.dispatch</code>\u7684\u5173\u7CFB\uFF0C\u4F7F\u7EC4\u4EF6\u5177\u5907\u901A\u8FC7 dispatch \u6765\u6D3E\u53D1\u72B6\u6001\u7684\u80FD\u529B\u3002</p><blockquote><p>\u603B\u800C\u8A00\u4E4B\uFF0C\u6211\u4EEC\u8C03\u7528 connect \u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5177\u6709\u88C5\u9970\u4F5C\u7528\u7684\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u63A5\u6536\u4E00 \u4E2AReact \u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F7F\u8FD9\u4E2A\u76EE\u6807\u7EC4\u4EF6\u548C Redux \u7ED3\u5408\u3001\u5177\u5907 Redux \u63D0\u4F9B\u7684\u6570\u636E\u548C\u80FD\u529B\u3002\u65E2\u7136\u6709\u88C5\u9970\u4F5C\u7528\uFF0C\u65E2\u7136\u662F\u80FD\u529B\u7684\u62D3\u5C55\uFF0C\u90A3\u4E48\u5C31\u4E00\u5B9A\u80FD\u7528\u88C5\u9970\u5668\u6765\u6539\u5199\uFF1A</p></blockquote><p>\u628A\xA0<code>connect</code>\xA0\u62BD\u51FA\u6765\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { connect } from &#39;react-redux&#39;
import { bindActionCreators } from &#39;redux&#39;
import action from &#39;./action.js&#39;

function mapStateToProps(state) {
  return state.app
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch)
}

// \u5C06connect\u8C03\u7528\u540E\u7684\u7ED3\u679C\u4F5C\u4E3A\u4E00\u4E2A\u88C5\u9970\u5668\u5BFC\u51FA
export default connect(mapStateToProps, mapDispatchToProps)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u7EC4\u4EF6\u6587\u4EF6\u91CC\u5F15\u5165<code>connect</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import React, { Component } from &#39;react&#39;
import connect from &#39;./connect.js&#39;

@connect
export default class App extends Component {
  render() {
    // App\u7684\u4E1A\u52A1\u903B\u8F91
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u7ED3\u6784\u662F\u4E0D\u662F\u6E05\u6670\u4E86\u5F88\u591A</p>`,114),k=e("\u63A8\u8350\u4E00\u4E2A\u975E\u5E38\u8D5E\u7684\u88C5\u9970\u6A21\u5F0F\u5E93 ------\xA0"),_={href:"https://github.com/jayphelps/core-decorators",target:"_blank",rel:"noopener noreferrer"},P=e("core-decorators\xA0(opens new window)"),y=e("\u3002core-decorators \u5E2E\u6211\u4EEC\u5B9E\u73B0\u597D\u4E86\u4E00\u4E9B\u4F7F\u7528\u9891\u7387\u8F83\u9AD8\u7684\u88C5\u9970\u5668\uFF0C\u6BD4\u5982"),w=n("code",null,"@readonly",-1),S=e("(\u4F7F\u76EE\u6807\u5C5E\u6027\u53EA\u8BFB)\u3001"),I=n("code",null,"@deprecate",-1),E=e("(\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u8B66\u544A\uFF0C\u63D0\u793A\u7528\u6237\u67D0\u4E2A\u6307\u5B9A\u7684\u65B9\u6CD5\u5DF2\u88AB\u5E9F\u9664)\u7B49"),V=d(`<h2 id="_4-\u7ED3\u6784\u578B-\u9002\u914D\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u7ED3\u6784\u578B-\u9002\u914D\u5668\u6A21\u5F0F" aria-hidden="true">#</a> 4 \u7ED3\u6784\u578B-\u9002\u914D\u5668\u6A21\u5F0F</h2><h3 id="_4-1-\u517C\u5BB9\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_4-1-\u517C\u5BB9\u63A5\u53E3" aria-hidden="true">#</a> 4.1 \u517C\u5BB9\u63A5\u53E3</h3><blockquote><p>\u5927\u5BB6\u77E5\u9053\u6211\u4EEC\u73B0\u5728\u6709\u4E00\u4E2A\u975E\u5E38\u597D\u7528\u5F02\u6B65\u65B9\u6848\u53EB<code>fetch</code>\uFF0C\u5B83\u7684\u5199\u6CD5\u6BD4<code>ajax</code>\u4F18\u96C5\u5F88\u591A\u3002\u56E0\u6B64\u5728\u4E0D\u8003\u8651\u517C\u5BB9\u6027\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u66F4\u613F\u610F\u4F7F\u7528<code>fetch</code>\u3001\u800C\u4E0D\u662F\u4F7F\u7528ajax\u6765\u53D1\u8D77\u5F02\u6B65\u8BF7\u6C42\u3002\u674E\u96F7\u662F\u62DC<code>fetch</code>\u6559\u7684\u5FE0\u5B9E\u4FE1\u5F92\uFF0C\u4E3A\u4E86\u80FD\u66F4\u597D\u5730\u4F7F\u7528<code>fetch</code>\uFF0C\u4ED6\u5C01\u88C5\u4E86\u4E00\u4E2A\u57FA\u4E8E<code>fetch</code>\u7684<code>http</code>\u65B9\u6CD5\u5E93\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default class HttpUtils {
  // get\u65B9\u6CD5
  static get(url) {
    return new Promise((resolve, reject) =&gt; {
      // \u8C03\u7528fetch
      fetch(url)
        .then(response =&gt; response.json())
        .then(result =&gt; {
          resolve(result)
        })
        .catch(error =&gt; {
          reject(error)
        })
    })
  }

  // post\u65B9\u6CD5\uFF0Cdata\u4EE5object\u5F62\u5F0F\u4F20\u5165
  static post(url, data) {
    return new Promise((resolve, reject) =&gt; {
      // \u8C03\u7528fetch
      fetch(url, {
        method: &#39;POST&#39;,
        headers: {
          Accept: &#39;application/json&#39;,
          &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;
        },
        // \u5C06object\u7C7B\u578B\u7684\u6570\u636E\u683C\u5F0F\u5316\u4E3A\u5408\u6CD5\u7684body\u53C2\u6570
        body: this.changeData(data)
      })
        .then(response =&gt; response.json())
        .then(result =&gt; {
          resolve(result)
        })
        .catch(error =&gt; {
          reject(error)
        })
    })
  }

  // body\u8BF7\u6C42\u4F53\u7684\u683C\u5F0F\u5316\u65B9\u6CD5
  static changeData(obj) {
    var prop,
      str = &#39;&#39;
    var i = 0
    for (prop in obj) {
      if (!prop) {
        return
      }
      if (i == 0) {
        str += prop + &#39;=&#39; + obj[prop]
      } else {
        str += &#39;&amp;&#39; + prop + &#39;=&#39; + obj[prop]
      }
      i++
    }
    return str
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u60F3\u4F7F\u7528\xA0<code>fetch</code>\xA0\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u53EA\u9700\u8981\u8FD9\u6837\u8F7B\u677E\u5730\u8C03\u7528\uFF0C\u800C\u4E0D\u5FC5\u518D\u64CD\u5FC3\u7E41\u7410\u7684\u6570\u636E\u914D\u7F6E\u548C\u6570\u636E\u683C\u5F0F\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u76EE\u6807url\u5730\u5740
const URL = &quot;xxxxx&quot;
// \u5B9A\u4E49post\u5165\u53C2
const params = {
    ...
}

// \u53D1\u8D77post\u8BF7\u6C42
 const postResponse = await HttpUtils.post(URL,params) || {}

 // \u53D1\u8D77get\u8BF7\u6C42
 const getResponse = await HttpUtils.get(URL)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u771F\u662F\u4E2A\u597D\u7528\u7684\u65B9\u6CD5\u5E93\uFF01\u8001\u677F\u770B\u4E86\u674E\u96F7\u7684\xA0<code>HttpUtils</code>\xA0\u5E93\uFF0C\u559C\u4E0A\u7709\u68A2------\u539F\u6765\u8001\u677F\u4E5F\u662F\u4E2A\u62DC fetch \u6559\u3002\u8001\u677F\u8BF4\u674E\u96F7\uFF0C\u54B1\u4EEC\u516C\u53F8\u4EE5\u540E\u8981\u505A\u6F6E\u6D41\u516C\u53F8\u4E86\uFF0C\u5199\u4EE3\u7801\u4E0D\u518D\u8003\u8651\u517C\u5BB9\u6027\uFF0C\u6211\u5E0C\u671B\u4F60\u80FD\u628A\u516C\u53F8\u6240\u6709\u7684\u4E1A\u52A1\u7684\u7F51\u7EDC\u8BF7\u6C42\u90FD\u8FC1\u79FB\u5230\u4F60\u8FD9\u4E2A HttpUtils \u4E0A\u6765\uFF0C\u8FD9\u6837\u4EE5\u540E\u4F60\u53EA\u7528\u7EF4\u62A4\u8FD9\u4E00\u4E2A\u5E93\u4E86\uFF0C\u4E5F\u65B9\u4FBF\u3002\u674E\u96F7\u4E00\u542C\uFF0C\u60B2\u4ECE\u4E2D\u6765------\u4ED6\u662F\u8BE5\u516C\u53F8\u7684\u7B2C 99 \u4EE3\u5458\u5DE5\uFF0C\u5BF9\u8FDC\u53E4\u65F6\u671F\u7684\u4E1A\u52A1\u4E00\u65E0\u6240\u77E5\u3002\u800C\u8BE5\u516C\u53F8\u7B2C1\u4EE3\u5458\u5DE5\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42\u5E93\uFF0C\u662F\u57FA\u4E8E\xA0<code>XMLHttpRequest</code>\xA0\u7684\uFF0C\u5DEE\u4E0D\u591A\u957F\u8FD9\u6837\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Ajax(type, url, data, success, failed){
    // \u521B\u5EFAajax\u5BF9\u8C61
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject(&#39;Microsoft.XMLHTTP&#39;)
    }

   ...(\u6B64\u5904\u7701\u7565\u4E00\u7CFB\u5217\u7684\u4E1A\u52A1\u903B\u8F91\u7EC6\u8282)

   var type = type.toUpperCase();

    // \u8BC6\u522B\u8BF7\u6C42\u7C7B\u578B
    if(type == &#39;GET&#39;){
        if(data){
          xhr.open(&#39;GET&#39;, url + &#39;?&#39; + data, true); //\u5982\u679C\u6709\u6570\u636E\u5C31\u62FC\u63A5
        }
        // \u53D1\u9001get\u8BF7\u6C42
        xhr.send();

    } else if(type == &#39;POST&#39;){
        xhr.open(&#39;POST&#39;, url, true);
        // \u5982\u679C\u9700\u8981\u50CF html \u8868\u5355\u90A3\u6837 POST \u6570\u636E\uFF0C\u4F7F\u7528 setRequestHeader() \u6765\u6DFB\u52A0 http \u5934\u3002
        xhr.setRequestHeader(&quot;Content-type&quot;, &quot;application/x-www-form-urlencoded&quot;);
        // \u53D1\u9001post\u8BF7\u6C42
        xhr.send(data);
    }

    // \u5904\u7406\u8FD4\u56DE\u6570\u636E
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else {
                if(failed){
                    failed(xhr.status);
                }
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u903B\u8F91\u6211\u4EEC\u7B80\u5355\u63CF\u8FF0\u4E86\u4E00\u4E0B\uFF0C\u8FD9\u4E2A\u4E0D\u662F\u91CD\u70B9\uFF0C\u91CD\u70B9\u662F\u5B83\u662F\u8FD9\u6837\u8C03\u7528\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53D1\u9001get\u8BF7\u6C42
Ajax(&#39;get&#39;, url\u5730\u5740, post\u5165\u53C2, function(data){
    // \u6210\u529F\u7684\u56DE\u8C03\u903B\u8F91
}, function(error){
    // \u5931\u8D25\u7684\u56DE\u8C03\u903B\u8F91
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u674E\u96F7\u4F5B\u4E86 ------ \u4E0D\u4EC5\u63A5\u53E3\u540D\u4E0D\u540C\uFF0C\u5165\u53C2\u65B9\u5F0F\u4E5F\u4E0D\u4E00\u6837\uFF0C\u8FD9\u624B\u52A8\u6539\u8981\u6539\u5230\u4F55\u5E74\u4F55\u65E5\u5462\uFF1F</p><blockquote><p>\u8FD8\u597D\u674E\u96F7\u5B66\u8FC7\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u4ED6\u7ACB\u523B\u8054\u60F3\u5230\u4E86\u4E13\u95E8\u4E3A\u6211\u4EEC\u62B9\u5E73\u5DEE\u5F02\u7684\u9002\u914D\u5668\u6A21\u5F0F\u3002\u8981\u628A\u8001\u4EE3\u7801\u8FC1\u79FB\u5230\u65B0\u63A5\u53E3\uFF0C\u4E0D\u4E00\u5B9A\u8981\u6328\u4E2A\u513F\u53BB\u4FEE\u6539\u6BCF\u4E00\u6B21\u7684\u63A5\u53E3\u8C03\u7528------\u6B63\u5982\u6211\u4EEC\u60F3\u7528 iPhoneX + \u65E7\u8033\u673A\u542C\u6B4C\uFF0C\u4E0D\u5FC5\u6328\u4E2A\u513F\u53BB\u6539\u9020\u8033\u673A\u4E00\u6837\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u5F15\u5165\u63A5\u53E3\u65F6\u8FDB\u884C\u4E00\u6B21\u9002\u914D\uFF0C\u4FBF\u53EF\u8F7B\u677E\u5730 cover \u6389\u4E1A\u52A1\u91CC\u53EF\u80FD\u4F1A\u6709\u7684\u591A\u6B21\u8C03\u7528\uFF08\u5177\u4F53\u7684\u89E3\u6790\u5728\u6CE8\u91CA\u91CC\uFF09\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Ajax\u9002\u914D\u5668\u51FD\u6570\uFF0C\u5165\u53C2\u4E0E\u65E7\u63A5\u53E3\u4FDD\u6301\u4E00\u81F4
async function AjaxAdapter(type, url, data, success, failed) {
    const type = type.toUpperCase()
    let result
    try {
         // \u5B9E\u9645\u7684\u8BF7\u6C42\u5168\u90E8\u7531\u65B0\u63A5\u53E3\u53D1\u8D77
         if(type === &#39;GET&#39;) {
            result = await HttpUtils.get(url) || {}
        } else if(type === &#39;POST&#39;) {
            result = await HttpUtils.post(url, data) || {}
        }
        // \u5047\u8BBE\u8BF7\u6C42\u6210\u529F\u5BF9\u5E94\u7684\u72B6\u6001\u7801\u662F1
        result.statusCode === 1 &amp;&amp; success ? success(result) : failed(result.statusCode)
    } catch(error) {
        // \u6355\u6349\u7F51\u7EDC\u9519\u8BEF
        if(failed){
            failed(error.statusCode);
        }
    }
}

// \u7528\u9002\u914D\u5668\u9002\u914D\u65E7\u7684Ajax\u65B9\u6CD5
async function Ajax(type, url, data, success, failed) {
    await AjaxAdapter(type, url, data, success, failed)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u6B64\u4E00\u6765\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7F16\u5199\u4E00\u4E2A\u9002\u914D\u5668\u51FD\u6570<code>AjaxAdapter</code>\uFF0C\u5E76\u7528\u9002\u914D\u5668\u53BB\u627F\u63A5\u65E7\u63A5\u53E3\u7684\u53C2\u6570\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u65B0\u65E7\u63A5\u53E3\u7684\u65E0\u7F1D\u8854\u63A5\u4E86~</p></blockquote><h3 id="_4-2-\u751F\u4EA7\u5B9E\u8DF5-axios\u4E2D\u7684\u9002\u914D\u5668" tabindex="-1"><a class="header-anchor" href="#_4-2-\u751F\u4EA7\u5B9E\u8DF5-axios\u4E2D\u7684\u9002\u914D\u5668" aria-hidden="true">#</a> 4.2 \u751F\u4EA7\u5B9E\u8DF5\uFF1Aaxios\u4E2D\u7684\u9002\u914D\u5668</h3>`,15),B=e("\u6570\u6708\u4E4B\u540E\uFF0C\u674E\u96F7\u7684\u8001\u677F\u53D1\u73B0\u4E86\u7F51\u7EDC\u8BF7\u6C42\u795E\u5E93axios\uFF0C\u4E8E\u662F\u56E2\u961F\u7684\u65B9\u6848\u53C8\u6574\u4E2A\u8FC1\u79FB\u5230\u4E86"),M=n("code",null,"axios",-1),A=e('------\u5BF9\u4E8E\u5FC3\u4E2D\u6709\u9002\u914D\u5668\u7684\u674E\u96F7\u6765\u8BF4\uFF0C\u8FD9\u73B0\u5728\u5DF2\u7ECF\u6839\u672C\u4E0D\u662F\u4E2A\u4E8B\u513F\u3002\u4E0D\u8FC7\u672C\u5C0F\u8282\u6211\u4EEC\u8981\u804A\u7684\u53EF\u4E0D\u518D\u662F"\u5982\u4F55\u4F7F\u73B0\u6709\u63A5\u53E3\u517C\u5BB9axios"\u4E86\u3002\u6B64\u5904\u5F15\u51FAaxios\uFF0C\u4E00\u662F\u56E0\u4E3A\u5927\u5BB6\u5BF9\u5B83\u8DB3\u591F\u719F\u6089\uFF08\u4E0D\u719F\u6089\u7684\u540C\u5B66\uFF0C\u70B9'),j={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},D=e("\u8FD9\u91CC\xA0(opens new window)"),O=e("\u53EF\u4EE5\u5FEB\u901F\u719F\u6089\u4E00\u4E0B~\uFF09\uFF0C\u4E8C\u662F\u56E0\u4E3Aaxios\u672C\u8EAB\u5C31\u7528\u5230\u4E86\u6211\u4EEC\u7684\u9002\u914D\u5668\u6A21\u5F0F\uFF0C\u5B83\u7684\u517C\u5BB9\u65B9\u6848\u503C\u5F97\u6211\u4EEC\u5B66\u4E60\u548C\u501F\u9274\u3002"),N=d(`<p>\u5728\u4F7F\u7528<code>axios</code>\u65F6\uFF0C\u4F5C\u4E3A\u7528\u6237\u6211\u4EEC\u53EA\u9700\u8981\u638C\u63E1\u4EE5\u4E0B\u9762\u4E09\u4E2A\u6700\u5E38\u7528\u7684\u63A5\u53E3\u4E3A\u4EE3\u8868\u7684\u4E00\u5957<code>api</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Make a request for a user with a given ID
axios.get(&#39;/user?ID=12345&#39;)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  })

axios.post(&#39;/user&#39;, {
    firstName: &#39;Fred&#39;,
    lastName: &#39;Flintstone&#39;
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios({
  method: &#39;post&#39;,
  url: &#39;/user/12345&#39;,
  data: {
    firstName: &#39;Fred&#39;,
    lastName: &#39;Flintstone&#39;
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4FBF\u53EF\u8F7B\u677E\u5730\u53D1\u8D77\u5404\u79CD\u59FF\u52BF\u7684\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u800C\u4E0D\u7528\u53BB\u5173\u5FC3\u5E95\u5C42\u7684\u5B9E\u73B0\u7EC6\u8282\u3002</li><li>\u9664\u4E86\u7B80\u660E\u4F18\u96C5\u7684api\u4E4B\u5916\uFF0Caxios \u5F3A\u5927\u7684\u5730\u65B9\u8FD8\u5728\u4E8E\uFF0C\u5B83\u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E2A\u5C40\u9650\u4E8E\u6D4F\u89C8\u5668\u7AEF\u7684\u5E93\u3002\u5728Node\u73AF\u5883\u4E0B\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u8C03\u7528\u4E0A\u9762\u7684 api\uFF0C\u4F1A\u53D1\u73B0\u5B83\u7167\u6837\u597D\u4F7F ------ axios \u5B8C\u7F8E\u5730\u62B9\u5E73\u4E86\u4E24\u79CD\u73AF\u5883\u4E0Bapi\u7684\u8C03\u7528\u5DEE\u5F02\uFF0C\u9760\u7684\u6B63\u662F\u5BF9\u9002\u914D\u5668\u6A21\u5F0F\u7684\u7075\u6D3B\u8FD0\u7528\u3002</li></ul>`,3),C=e("\u5728\xA0"),T={href:"https://github.com/axios/axios/blob/master/lib/core/Axios.js",target:"_blank",rel:"noopener noreferrer"},R=e("axios \u7684\u6838\u5FC3\u903B\u8F91\xA0(opens new window)"),L=e("\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6CE8\u610F\u5230\u5B9E\u9645\u4E0A\u6D3E\u53D1\u8BF7\u6C42\u7684\u662F\xA0"),H={href:"https://github.com/axios/axios/blob/master/lib/core/dispatchRequest.js",target:"_blank",rel:"noopener noreferrer"},U=e("dispatchRequest \u65B9\u6CD5\xA0(opens new window)"),$=e("\u3002\u8BE5\u65B9\u6CD5\u5185\u90E8\u5176\u5B9E\u4E3B\u8981\u505A\u4E86\u4E24\u4EF6\u4E8B\uFF1A"),F=d(`<ol><li>\u6570\u636E\u8F6C\u6362\uFF0C\u8F6C\u6362\u8BF7\u6C42\u4F53/\u54CD\u5E94\u4F53\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u6570\u636E\u5C42\u9762\u7684\u9002\u914D\uFF1B</li><li>\u8C03\u7528\u9002\u914D\u5668\u3002</li></ol><blockquote><p>\u8C03\u7528\u9002\u914D\u5668\u7684\u903B\u8F91\u5982\u4E0B\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u82E5\u7528\u6237\u672A\u624B\u52A8\u914D\u7F6E\u9002\u914D\u5668\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u9002\u914D\u5668
var adapter = config.adapter || defaults.adapter;

  // dispatchRequest\u65B9\u6CD5\u7684\u672B\u5C3E\u8C03\u7528\u7684\u662F\u9002\u914D\u5668\u65B9\u6CD5
  return adapter(config).then(function onAdapterResolution(response) {
    // \u8BF7\u6C42\u6210\u529F\u7684\u56DE\u8C03
    throwIfCancellationRequested(config);

    // \u8F6C\u6362\u54CD\u5E94\u4F53
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    // \u8BF7\u6C42\u5931\u8D25\u7684\u56DE\u8C03
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // \u8F6C\u6362\u54CD\u5E94\u4F53
      if (reason &amp;&amp; reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5927\u5BB6\u6CE8\u610F\u6CE8\u91CA\u7684\u7B2C\u4E00\u884C\uFF0C&quot;\u82E5\u7528\u6237\u672A\u624B\u52A8\u914D\u7F6E\u9002\u914D\u5668\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u9002\u914D\u5668&quot;\u3002\u624B\u52A8\u914D\u7F6E\u9002\u914D\u5668\u5141\u8BB8\u6211\u4EEC\u81EA\u5B9A\u4E49\u5904\u7406\u8BF7\u6C42\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u4E3A\u4E86\u4F7F\u6D4B\u8BD5\u66F4\u8F7B\u677E\u3002</p>`,4),Q=e("\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u9ED8\u8BA4\u9002\u914D\u5668\u7684\u9891\u7387\u66F4\u9AD8\u3002\u9ED8\u8BA4\u9002\u914D\u5668\u5728"),G={href:"https://github.com/axios/axios/blob/master/lib/defaults.js",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"axios/lib/default.js",-1),J=e("\xA0(opens new window)"),W=e("\u91CC\u662F\u901A\u8FC7"),K=n("code",null,"getDefaultAdapter",-1),z=e("\u65B9\u6CD5\u6765\u83B7\u53D6\u7684\uFF1A"),Y=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function getDefaultAdapter() {
  var adapter;
  // \u5224\u65AD\u5F53\u524D\u662F\u5426\u662Fnode\u73AF\u5883
  if (typeof process !== &#39;undefined&#39; &amp;&amp; Object.prototype.toString.call(process) === &#39;[object process]&#39;) {
    // \u5982\u679C\u662Fnode\u73AF\u5883\uFF0C\u8C03\u7528node\u4E13\u5C5E\u7684http\u9002\u914D\u5668
    adapter = require(&#39;./adapters/http&#39;);
  } else if (typeof XMLHttpRequest !== &#39;undefined&#39;) {
    // \u5982\u679C\u662F\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u8C03\u7528\u57FA\u4E8Exhr\u7684\u9002\u914D\u5668
    adapter = require(&#39;./adapters/xhr&#39;);
  }
  return adapter;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u518D\u6765\u770B\u770B\xA0<code>Node</code>\xA0\u7684\xA0<code>http</code>\xA0\u9002\u914D\u5668\u548C\xA0<code>xhr</code>\xA0\u9002\u914D\u5668\u5927\u6982\u957F\u5565\u6837\uFF1A</p><blockquote><p><code>http</code>\xA0\u9002\u914D\u5668\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    // \u5177\u4F53\u903B\u8F91
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>xhr \u9002\u914D\u5668\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    // \u5177\u4F53\u903B\u8F91
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),Z=e("\u5177\u4F53\u903B\u8F91\u5565\u6837\uFF0C\u54B1\u4EEC\u76EE\u524D\u5148\u4E0D\u5173\u5FC3\uFF0C\u6709\u5174\u8DA3\u7684\u540C\u5B66\uFF0C\u53EF\u4EE5\u72E0\u72E0\u5730\u70B9"),ee={href:"https://github.com/axios/axios/tree/master/lib/adapters",target:"_blank",rel:"noopener noreferrer"},ne=e("\u8FD9\u91CC\xA0(opens new window)"),ie=e("\u9605\u8BFB\u6E90\u7801\u3002\u54B1\u4EEC\u73B0\u5728\u5C31\u6CE8\u610F\u4E24\u4E2A\u4E8B\u513F\uFF1A"),se=d(`<ul><li>\u4E24\u4E2A\u9002\u914D\u5668\u7684\u5165\u53C2\u90FD\u662F\xA0<code>config</code>\uFF1B</li><li>\u4E24\u4E2A\u9002\u914D\u5668\u7684\u51FA\u53C2\u90FD\u662F\u4E00\u4E2A\xA0<code>Promise</code>\u3002</li></ul><blockquote><p>Tips\uFF1A\u8981\u662F\u4ED4\u7EC6\u8BFB\u4E86\u6E90\u7801\uFF0C\u4F1A\u53D1\u73B0\u4E24\u4E2A\u9002\u914D\u5668\u4E2D\u7684 P<code>romise</code>\xA0\u7684\u5185\u90E8\u7ED3\u6784\u4E5F\u662F\u5982\u51FA\u4E00\u8F99\u3002</p></blockquote><p>\u8FD9\u4E48\u4E00\u6765\uFF0C\u901A\u8FC7\xA0<code>axios</code>\xA0\u53D1\u8D77\u8DE8\u5E73\u53F0\u7684\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u4E0D\u4EC5\u8C03\u7528\u7684\u63A5\u53E3\u540D\u662F\u540C\u4E00\u4E2A\uFF0C\u8FDE\u5165\u53C2\u3001\u51FA\u53C2\u7684\u683C\u5F0F\u90FD\u53EA\u9700\u8981\u638C\u63E1\u540C\u4E00\u5957\u3002\u8FD9\u5BFC\u81F4\u5B83\u7684\u5B66\u4E60\u6210\u672C\u975E\u5E38\u4F4E\uFF0C\u5F00\u53D1\u8005\u770B\u4E86\u6587\u6863\u5C31\u80FD\u4E0A\u624B\uFF1B\u540C\u65F6\u56E0\u4E3A\u8DB3\u591F\u7B80\u5355\uFF0C\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u4E5F\u4E0D\u5BB9\u6613\u51FA\u9519\uFF0C\u5E26\u6765\u4E86\u6781\u4F73\u7684\u7528\u6237\u4F53\u9A8C\uFF0C<code>axios</code>\xA0\u4E5F\u56E0\u6B64\u8D8A\u6765\u8D8A\u6D41\u884C\u3002</p><p>\u8FD9\u6B63\u662F\u4E00\u4E2A\u597D\u7684\u9002\u914D\u5668\u7684\u81EA\u6211\u4FEE\u517B------\u628A\u53D8\u5316\u7559\u7ED9\u81EA\u5DF1\uFF0C\u628A\u7EDF\u4E00\u7559\u7ED9\u7528\u6237\u3002\u5728\u6B64\u5904\uFF0C\u6240\u6709\u5173\u4E8E\xA0<code>http</code>\xA0\u6A21\u5757\u3001\u5173\u4E8E\xA0<code>xhr</code>\xA0\u7684\u5B9E\u73B0\u7EC6\u8282\uFF0C\u5168\u90E8\u88AB\xA0<code>Adapter</code>\xA0\u5C01\u88C5\u8FDB\u4E86\u81EA\u5DF1\u590D\u6742\u7684\u5E95\u5C42\u903B\u8F91\u91CC\uFF0C\u66B4\u9732\u7ED9\u7528\u6237\u7684\u90FD\u662F\u5341\u5206\u7B80\u5355\u7684\u7EDF\u4E00\u7684\u4E1C\u897F------\u7EDF\u4E00\u7684\u63A5\u53E3\uFF0C\u7EDF\u4E00\u7684\u5165\u53C2\uFF0C\u7EDF\u4E00\u7684\u51FA\u53C2\uFF0C\u7EDF\u4E00\u7684\u89C4\u5219\u3002\u7528\u8D77\u6765\u5C31\u662F\u4E00\u4E2A\u5B57 ------ \u723D\uFF01</p><h2 id="_5-\u7ED3\u6784\u578B-\u4EE3\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u7ED3\u6784\u578B-\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a> 5 \u7ED3\u6784\u578B-\u4EE3\u7406\u6A21\u5F0F</h2><blockquote><p>\u4EE3\u7406\u6A21\u5F0F\uFF0C\u5F0F\u5982\u5176\u540D------\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u51FA\u4E8E\u79CD\u79CD\u8003\u8651/\u9650\u5236\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u9700\u8981\u4E00\u4E2A\u7B2C\u4E09\u8005\uFF08\u4EE3\u7406\uFF09\u7275\u7EBF\u642D\u6865\u4ECE\u800C\u95F4\u63A5\u8FBE\u5230\u8BBF\u95EE\u76EE\u7684\uFF0C\u8FD9\u6837\u7684\u6A21\u5F0F\u5C31\u662F\u4EE3\u7406\u6A21\u5F0F\u3002</p></blockquote><p>\u4EE3\u7406\u6A21\u5F0F\u975E\u5E38\u597D\u7406\u89E3\uFF0C\u56E0\u4E3A\u4F60\u53EF\u80FD\u5929\u5929\u90FD\u5728\u7528\uFF0C\u53EA\u662F\u6CA1\u6709\u523B\u610F\u6316\u6398\u8FC7\u5B83\u80CC\u540E\u7684\u7384\u673A------\u6BD4\u5982\u5927\u5BB6\u8033\u719F\u80FD\u8BE6\u7684\u79D1\u5B66\u4E0A\u7F51\uFF0C\u5C31\u662F\u4EE3\u7406\u6A21\u5F0F\u7684\u5178\u578B\u6848\u4F8B\u3002</p><h3 id="_5-1-es6\u4E2D\u7684proxy" tabindex="-1"><a class="header-anchor" href="#_5-1-es6\u4E2D\u7684proxy" aria-hidden="true">#</a> 5.1 ES6\u4E2D\u7684Proxy</h3><p>\u5728 ES6 \u4E2D\uFF0C\u63D0\u4F9B\u4E86\u4E13\u95E8\u4EE5\u4EE3\u7406\u89D2\u8272\u51FA\u73B0\u7684\u4EE3\u7406\u5668 ------\xA0<code>Proxy</code>\u3002\u5B83\u7684\u57FA\u672C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const proxy = new Proxy(obj, handler)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6211\u4EEC\u7684\u76EE\u6807\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u4E0A\u6587\u4E2D\u7684&quot;\u672A\u77E5\u59B9\u5B50&quot;\u3002<code>handler</code>\xA0\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u6765\u5B9A\u4E49\u4EE3\u7406\u7684\u884C\u4E3A\uFF0C\u76F8\u5F53\u4E8E\u4E0A\u6587\u4E2D\u7684&quot;\u5A5A\u4ECB\u6240&quot;\u3002\u5F53\u6211\u4EEC\u901A\u8FC7\xA0<code>proxy</code>\xA0\u53BB\u8BBF\u95EE\u76EE\u6807\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C<code>handler</code>\u4F1A\u5BF9\u6211\u4EEC\u7684\u884C\u4E3A\u4F5C\u4E00\u5C42\u62E6\u622A\uFF0C\u6211\u4EEC\u7684\u6BCF\u6B21\u8BBF\u95EE\u90FD\u9700\u8981\u7ECF\u8FC7\xA0<code>handler</code>\xA0\u8FD9\u4E2A\u7B2C\u4E09\u65B9\u3002</p><h3 id="_5-2-\u5A5A\u4ECB\u6240-\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_5-2-\u5A5A\u4ECB\u6240-\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 5.2 &quot;\u5A5A\u4ECB\u6240&quot;\u7684\u5B9E\u73B0</h3><p>\u672A\u77E5\u59B9\u5B50\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u521A\u95EE\u4E86\u4E0B\u6211\u4EEC\u5DF2\u7ECF\u6CE8\u518C\u4E86 VIP \u7684\u540C\u4E8B\u54E5\uFF0C\u5927\u81F4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u672A\u77E5\u59B9\u5B50
const girl = {
  // \u59D3\u540D
  name: &#39;\u5C0F\u7F8E&#39;,
  // \u81EA\u6211\u4ECB\u7ECD
  aboutMe: &#39;...&#39;\uFF08\u5927\u5BB6\u81EA\u884C\u8111\u8865\u5427\uFF09
  // \u5E74\u9F84
  age: 24,
  // \u804C\u4E1A
  career: &#39;teacher&#39;,
  // \u5047\u5934\u50CF
  fakeAvatar: &#39;xxxx&#39;(\u65B0\u57A3\u7ED3\u8863\u7684\u56FE\u7247\u5730\u5740\uFF09
  // \u771F\u5B9E\u5934\u50CF
  avatar: &#39;xxxx&#39;(\u81EA\u5DF1\u7684\u7167\u7247\u5730\u5740),
  // \u624B\u673A\u53F7
  phone: 123456,
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5A5A\u4ECB\u6240\u6536\u5230\u4E86\u5C0F\u7F8E\u7684\u4FE1\u606F\uFF0C\u5F00\u59CB\u8425\u4E1A\u3002\u5927\u5BB6\u60F3\uFF0C\u8FD9\u4E2A\u59D3\u540D\u3001\u81EA\u6211\u4ECB\u7ECD\u3001\u5047\u5934\u50CF\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u5927\u5DEE\u4E0D\u5DEE\uFF0C\u66DD\u5149\u4E00\u4E0B\u6CA1\u95EE\u9898\u3002\u4F46\u662F\u4EBA\u5BB6\u59B9\u5B50\u7684\u5E74\u9F84\u3001\u804C\u4E1A\u3001\u771F\u5B9E\u5934\u50CF\u3001\u624B\u673A\u53F7\u7801\uFF0C\u662F\u4E0D\u662F\u5C5E\u4E8E\u975E\u5E38\u79C1\u5BC6\u7684\u4FE1\u606F\u4E86\uFF1F\u8981\u60F3 get \u8FD9\u4E9B\u4FE1\u606F\uFF0C\u5E73\u53F0\u8981\u8003\u9A8C\u4E00\u4E0B\u4F60\u7684\u8BDA\u610F\u4E86 ------ \u9996\u5148\uFF0C\u4F60\u662F\u4E0D\u662F\u5DF2\u7ECF\u901A\u8FC7\u4E86\u5B9E\u540D\u5BA1\u6838\uFF1F\u5982\u679C\u901A\u8FC7\u5B9E\u540D\u5BA1\u6838\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u67E5\u770B\u4E00\u4E9B\u76F8\u5BF9\u79C1\u5BC6\u7684\u4FE1\u606F\uFF08\u5E74\u9F84\u3001\u804C\u4E1A\uFF09\u3002\u7136\u540E\uFF0C\u4F60\u662F\u4E0D\u662F VIP \uFF1F\u53EA\u6709 VIP \u53EF\u4EE5\u67E5\u770B\u771F\u5B9E\u7167\u7247\u548C\u8054\u7CFB\u65B9\u5F0F\u3002\u6EE1\u8DB3\u4E86\u8FD9\u4E24\u4E2A\u5224\u5B9A\u6761\u4EF6\uFF0C\u4F60\u624D\u53EF\u4EE5\u987A\u5229\u8BBF\u95EE\u5230\u522B\u4EBA\u7684\u5168\u90E8\u79C1\u4EBA\u4FE1\u606F\uFF0C\u4E0D\u7136\uFF0C\u5C31\u529D\u9000\u4F60\u63D0\u9192\u4F60\u53BB\u5B8C\u6210\u8BA4\u8BC1\u548CVIP\u8D2D\u4E70\u518D\u6765\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u666E\u901A\u79C1\u5BC6\u4FE1\u606F
const baseInfo = [&#39;age&#39;, &#39;career&#39;]
// \u6700\u79C1\u5BC6\u4FE1\u606F
const privateInfo = [&#39;avatar&#39;, &#39;phone&#39;]

// \u7528\u6237\uFF08\u540C\u4E8BA\uFF09\u5BF9\u8C61\u5B9E\u4F8B
const user = {
  ...(\u4E00\u4E9B\u5FC5\u8981\u7684\u4E2A\u4EBA\u4FE1\u606F)
  isValidated: true,
  isVIP: false,
}

// \u5A5A\u4ECB\u6240\u767B\u573A\u4E86
const lovers = new Proxy(girl, {
  get: function(girl, key) {
      if(baseInfo.indexOf(key)!==-1 &amp;&amp; !user.isValidated) {
          alert(&#39;\u60A8\u8FD8\u6CA1\u6709\u5B8C\u6210\u9A8C\u8BC1\u54E6&#39;)
          return
      }

      //...(\u6B64\u5904\u7701\u7565\u5176\u5B83\u6709\u7684\u6CA1\u7684\u5404\u79CD\u6821\u9A8C\u903B\u8F91)

      // \u6B64\u5904\u6211\u4EEC\u8BA4\u4E3A\u53EA\u6709\u9A8C\u8BC1\u8FC7\u7684\u7528\u6237\u624D\u53EF\u4EE5\u8D2D\u4E70VIP
      if(user.isValidated &amp;&amp; privateInfo.indexOf(key) &amp;&amp; !user.isVIP) {
          alert(&#39;\u53EA\u6709VIP\u624D\u53EF\u4EE5\u67E5\u770B\u8BE5\u4FE1\u606F\u54E6&#39;)
          return
      }
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4EE5\u4E0A\u4E3B\u8981\u662F\xA0<code>getter</code>\xA0\u5C42\u9762\u7684\u62E6\u622A\u3002\u5047\u8BBE\u6211\u4EEC\u8FD8\u5141\u8BB8\u4F1A\u5458\u95F4\u4E92\u9001\u793C\u7269\uFF0C\u6BCF\u4E2A\u4F1A\u5458\u53EF\u4EE5\u544A\u77E5\u5A5A\u4ECB\u6240\u81EA\u5DF1\u613F\u610F\u63A5\u53D7\u7684\u793C\u7269\u7684\u4EF7\u683C\u4E0B\u9650\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F5C\xA0<code>setter</code>\xA0\u5C42\u9762\u7684\u62E6\u622A\u3002\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u89C4\u5B9A\u793C\u7269\u7684\u6570\u636E\u7ED3\u6784\u7531type\u548Cvalue\u7EC4\u6210
const present = {
    type: &#39;\u5DE7\u514B\u529B&#39;,
    value: 60,
}

// \u4E3A\u7528\u6237\u589E\u5F00presents\u5B57\u6BB5\u5B58\u50A8\u793C\u7269
const girl = {
  // \u59D3\u540D
  name: &#39;\u5C0F\u7F8E&#39;,
  // \u81EA\u6211\u4ECB\u7ECD
  aboutMe: &#39;...&#39;\uFF08\u5927\u5BB6\u81EA\u884C\u8111\u8865\u5427\uFF09
  // \u5E74\u9F84
  age: 24,
  // \u804C\u4E1A
  career: &#39;teacher&#39;,
  // \u5047\u5934\u50CF
  fakeAvatar: &#39;xxxx&#39;(\u65B0\u57A3\u7ED3\u8863\u7684\u56FE\u7247\u5730\u5740\uFF09
  // \u771F\u5B9E\u5934\u50CF
  avatar: &#39;xxxx&#39;(\u81EA\u5DF1\u7684\u7167\u7247\u5730\u5740),
  // \u624B\u673A\u53F7
  phone: 123456,
  // \u793C\u7269\u6570\u7EC4
  presents: [],
  // \u62D2\u653650\u5757\u4EE5\u4E0B\u7684\u793C\u7269
  bottomValue: 50,
  // \u8BB0\u5F55\u6700\u8FD1\u4E00\u6B21\u6536\u5230\u7684\u793C\u7269
  lastPresent: present,
}

// \u5A5A\u4ECB\u6240\u63A8\u51FA\u4E86\u5C0F\u793C\u7269\u529F\u80FD
const lovers = new Proxy(girl, {
  get: function(girl, key) {
    if(baseInfo.indexOf(key)!==-1 &amp;&amp; !user.isValidated) {
        alert(&#39;\u60A8\u8FD8\u6CA1\u6709\u5B8C\u6210\u9A8C\u8BC1\u54E6&#39;)
        return
    }

    //...(\u6B64\u5904\u7701\u7565\u5176\u5B83\u6709\u7684\u6CA1\u7684\u5404\u79CD\u6821\u9A8C\u903B\u8F91)

    // \u6B64\u5904\u6211\u4EEC\u8BA4\u4E3A\u53EA\u6709\u9A8C\u8BC1\u8FC7\u7684\u7528\u6237\u624D\u53EF\u4EE5\u8D2D\u4E70VIP
    if(user.isValidated &amp;&amp; privateInfo.indexOf(key) &amp;&amp; !user.isVIP) {
        alert(&#39;\u53EA\u6709VIP\u624D\u53EF\u4EE5\u67E5\u770B\u8BE5\u4FE1\u606F\u54E6&#39;)
        return
    }
  }

  set: function(girl, key, val) {
    // \u6700\u8FD1\u4E00\u6B21\u9001\u6765\u7684\u793C\u7269\u4F1A\u5C1D\u8BD5\u8D4B\u503C\u7ED9lastPresent\u5B57\u6BB5
    if(key === &#39;lastPresent&#39;) {
      if(val.value &lt; girl.bottomValue) {
          alert(&#39;sorry\uFF0C\u60A8\u7684\u793C\u7269\u88AB\u62D2\u6536\u4E86&#39;)
          return
      }

      // \u5982\u679C\u6CA1\u6709\u62D2\u6536\uFF0C\u5219\u8D4B\u503C\u6210\u529F\uFF0C\u540C\u65F6\u5E76\u5165presents\u6570\u7EC4
      girl[lastPresent] = val
      girl[presents] = [...presents, val]
    }
  }

})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-\u4E8B\u4EF6\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_5-3-\u4E8B\u4EF6\u4EE3\u7406" aria-hidden="true">#</a> 5.3 \u4E8B\u4EF6\u4EE3\u7406</h3><blockquote><p>\u4E8B\u4EF6\u4EE3\u7406\uFF0C\u53EF\u80FD\u662F\u4EE3\u7406\u6A21\u5F0F\u6700\u5E38\u89C1\u7684\u4E00\u79CD\u5E94\u7528\u65B9\u5F0F\uFF0C\u4E5F\u662F\u4E00\u9053\u5B9E\u6253\u5B9E\u7684\u9AD8\u9891\u9762\u8BD5\u9898\u3002\u5B83\u7684\u573A\u666F\u662F\u4E00\u4E2A\u7236\u5143\u7D20\u4E0B\u6709\u591A\u4E2A\u5B50\u5143\u7D20\uFF0C\u50CF\u8FD9\u6837\uFF1A</p></blockquote><p>\u4E8B\u4EF6\u4EE3\u7406\uFF0C\u53EF\u80FD\u662F\u4EE3\u7406\u6A21\u5F0F\u6700\u5E38\u89C1\u7684\u4E00\u79CD\u5E94\u7528\u65B9\u5F0F\uFF0C\u4E5F\u662F\u4E00\u9053\u5B9E\u6253\u5B9E\u7684\u9AD8\u9891\u9762\u8BD5\u9898\u3002\u5B83\u7684\u573A\u666F\u662F\u4E00\u4E2A\u7236\u5143\u7D20\u4E0B\u6709\u591A\u4E2A\u5B50\u5143\u7D20\uFF0C\u50CF\u8FD9\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
  &lt;title&gt;\u4E8B\u4EF6\u4EE3\u7406&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id=&quot;father&quot;&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A51\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A52\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A53\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A54\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A55\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A56\u53F7&lt;/a&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u73B0\u5728\u7684\u9700\u6C42\u662F\uFF0C\u5E0C\u671B\u9F20\u6807\u70B9\u51FB\u6BCF\u4E2A a \u6807\u7B7E\uFF0C\u90FD\u53EF\u4EE5\u5F39\u51FA&quot;\u6211\u662Fxxx&quot;\u8FD9\u6837\u7684\u63D0\u793A\u3002\u6BD4\u5982\u70B9\u51FB\u7B2C\u4E00\u4E2A a \u6807\u7B7E\uFF0C\u5F39\u51FA&quot;\u6211\u662F\u94FE\u63A51\u53F7&quot;\u8FD9\u6837\u7684\u63D0\u793A\u3002\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u81F3\u5C11\u8981\u5B89\u88C5\xA0<code>6</code>\xA0\u4E2A\u76D1\u542C\u51FD\u6570\u7ED9\xA0<code>6</code>\xA0\u4E2A\u4E0D\u540C\u7684\u7684\u5143\u7D20(\u4E00\u822C\u6211\u4EEC\u4F1A\u7528\u5FAA\u73AF\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF09\uFF0C\u5982\u679C\u6211\u4EEC\u7684\xA0<code>a</code>\xA0\u6807\u7B7E\u8FDB\u4E00\u6B65\u589E\u591A\uFF0C\u90A3\u4E48\u6027\u80FD\u7684\u5F00\u9500\u4F1A\u66F4\u5927\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5047\u5982\u4E0D\u7528\u4EE3\u7406\u6A21\u5F0F\uFF0C\u6211\u4EEC\u5C06\u5FAA\u73AF\u5B89\u88C5\u76D1\u542C\u51FD\u6570
const aNodes = document.getElementById(&#39;father&#39;).getElementsByTagName(&#39;a&#39;)

const aLength = aNodes.length

for(let i=0;i&lt;aLength;i++) {
    aNodes[i].addEventListener(&#39;click&#39;, function(e) {
        e.preventDefault()
        alert(\`\u6211\u662F\${aNodes[i].innerText}\`)
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8003\u8651\u5230\u4E8B\u4EF6\u672C\u8EAB\u5177\u6709&quot;\u5192\u6CE1&quot;\u7684\u7279\u6027\uFF0C\u5F53\u6211\u4EEC\u70B9\u51FB a \u5143\u7D20\u65F6\uFF0C\u70B9\u51FB\u4E8B\u4EF6\u4F1A&quot;\u5192\u6CE1&quot;\u5230\u7236\u5143\u7D20 div \u4E0A\uFF0C\u4ECE\u800C\u88AB\u76D1\u542C\u5230\u3002\u5982\u6B64\u4E00\u6765\uFF0C\u70B9\u51FB\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\u53EA\u9700\u8981\u5728 div \u5143\u7D20\u4E0A\u88AB\u7ED1\u5B9A\u4E00\u6B21\u5373\u53EF\uFF0C\u800C\u4E0D\u9700\u8981\u5728\u5B50\u5143\u7D20\u4E0A\u88AB\u7ED1\u5B9A N \u6B21------\u8FD9\u79CD\u505A\u6CD5\u5C31\u662F\u4E8B\u4EF6\u4EE3\u7406\uFF0C\u5B83\u53EF\u4EE5\u5F88\u5927\u7A0B\u5EA6\u4E0A\u63D0\u9AD8\u6211\u4EEC\u4EE3\u7801\u7684\u6027\u80FD\u3002</p></blockquote><p>\u4E8B\u4EF6\u4EE3\u7406\u7684\u5B9E\u73B0</p><p>\u7528\u4EE3\u7406\u6A21\u5F0F\u5B9E\u73B0\u591A\u4E2A\u5B50\u5143\u7D20\u7684\u4E8B\u4EF6\u76D1\u542C\uFF0C\u4EE3\u7801\u4F1A\u7B80\u5355\u5F88\u591A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u83B7\u53D6\u7236\u5143\u7D20
const father = document.getElementById(&#39;father&#39;)

// \u7ED9\u7236\u5143\u7D20\u5B89\u88C5\u4E00\u6B21\u76D1\u542C\u51FD\u6570
father.addEventListener(&#39;click&#39;, function(e) {
    // \u8BC6\u522B\u662F\u5426\u662F\u76EE\u6807\u5B50\u5143\u7D20
    if(e.target.tagName === &#39;A&#39;) {
        // \u4EE5\u4E0B\u662F\u76D1\u542C\u51FD\u6570\u7684\u51FD\u6570\u4F53
        e.preventDefault()
        alert(\`\u6211\u662F\${e.target.innerText}\`)
    }
} )

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u79CD\u505A\u6CD5\u4E0B\uFF0C\u6211\u4EEC\u7684\u70B9\u51FB\u64CD\u4F5C\u5E76\u4E0D\u4F1A\u76F4\u63A5\u89E6\u53CA\u76EE\u6807\u5B50\u5143\u7D20\uFF0C\u800C\u662F\u7531\u7236\u5143\u7D20\u5BF9\u4E8B\u4EF6\u8FDB\u884C\u5904\u7406\u548C\u5206\u53D1\u3001\u95F4\u63A5\u5730\u5C06\u5176\u4F5C\u7528\u4E8E\u5B50\u5143\u7D20\uFF0C\u56E0\u6B64\u8FD9\u79CD\u64CD\u4F5C\u4ECE\u6A21\u5F0F\u4E0A\u5212\u5206\u5C5E\u4E8E\u4EE3\u7406\u6A21\u5F0F\u3002</p><h3 id="_5-4-\u865A\u62DF\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_5-4-\u865A\u62DF\u4EE3\u7406" aria-hidden="true">#</a> 5.4 \u865A\u62DF\u4EE3\u7406</h3><p>\u7B80\u5355\u5730\u7ED9\u5927\u5BB6\u63CF\u8FF0\u4E00\u4E0B\u61D2\u52A0\u8F7D\u662F\u4E2A\u4EC0\u4E48\u4E1C\u897F\uFF1A\u5B83\u662F\u9488\u5BF9\u56FE\u7247\u52A0\u8F7D\u65F6\u673A\u7684\u4F18\u5316\uFF1A\u5728\u4E00\u4E9B\u56FE\u7247\u91CF\u6BD4\u8F83\u5927\u7684\u7F51\u7AD9\uFF0C\u6BD4\u5982\u7535\u5546\u7F51\u7AD9\u9996\u9875\uFF0C\u6216\u8005\u56E2\u8D2D\u7F51\u7AD9\u3001\u5C0F\u6E38\u620F\u9996\u9875\u7B49\u3002\u5982\u679C\u6211\u4EEC\u5C1D\u8BD5\u5728\u7528\u6237\u6253\u5F00\u9875\u9762\u7684\u65F6\u5019\uFF0C\u5C31\u628A\u6240\u6709\u7684\u56FE\u7247\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u90A3\u4E48\u5F88\u53EF\u80FD\u4F1A\u9020\u6210\u767D\u5C4F\u3001\u5361\u987F\u7B49\u73B0\u8C61\u3002</p><p>\u6B64\u65F6\u6211\u4EEC\u4F1A\u91C7\u53D6&quot;\u5148\u5360\u4F4D\u3001\u540E\u52A0\u8F7D&quot;\u7684\u65B9\u5F0F\u6765\u5C55\u793A\u56FE\u7247 ------ \u5728\u5143\u7D20\u9732\u51FA\u4E4B\u524D\uFF0C\u6211\u4EEC\u7ED9\u5B83\u4E00\u4E2A div \u4F5C\u5360\u4F4D\uFF0C\u5F53\u5B83\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\u5185\u65F6\uFF0C\u518D\u5373\u65F6\u5730\u53BB\u52A0\u8F7D\u771F\u5B9E\u7684\u56FE\u7247\u8D44\u6E90\uFF0C\u8FD9\u6837\u505A\u65E2\u51CF\u8F7B\u4E86\u6027\u80FD\u538B\u529B\u3001\u53C8\u4FDD\u4F4F\u4E86\u7528\u6237\u4F53\u9A8C\u3002</p><p>\u9664\u4E86\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u8FD8\u6709\u4E00\u79CD\u64CD\u4F5C\u53EB\u56FE\u7247\u9884\u52A0\u8F7D\u3002\u9884\u52A0\u8F7D\u4E3B\u8981\u662F\u4E3A\u4E86\u907F\u514D\u7F51\u7EDC\u4E0D\u597D\u3001\u6216\u8005\u56FE\u7247\u592A\u5927\u65F6\uFF0C\u9875\u9762\u957F\u65F6\u95F4\u7ED9\u7528\u6237\u7559\u767D\u7684\u5C34\u5C2C\u3002\u5E38\u89C1\u7684\u64CD\u4F5C\u662F\u5148\u8BA9\u8FD9\u4E2A img \u6807\u7B7E\u5C55\u793A\u4E00\u4E2A\u5360\u4F4D\u56FE\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2A Image \u5B9E\u4F8B\uFF0C\u8BA9\u8FD9\u4E2A Image \u5B9E\u4F8B\u7684 src \u6307\u5411\u771F\u5B9E\u7684\u76EE\u6807\u56FE\u7247\u5730\u5740\u3001\u89C2\u5BDF\u8BE5 Image \u5B9E\u4F8B\u7684\u52A0\u8F7D\u60C5\u51B5 ------ \u5F53\u5176\u5BF9\u5E94\u7684\u771F\u5B9E\u56FE\u7247\u52A0\u8F7D\u5B8C\u6BD5\u540E\uFF0C\u5373\u5DF2\u7ECF\u6709\u4E86\u8BE5\u56FE\u7247\u7684\u7F13\u5B58\u5185\u5BB9\uFF0C\u518D\u5C06 DOM \u4E0A\u7684 img \u5143\u7D20\u7684 src \u6307\u5411\u771F\u5B9E\u7684\u76EE\u6807\u56FE\u7247\u5730\u5740\u3002\u6B64\u65F6\u6211\u4EEC\u76F4\u63A5\u53BB\u53D6\u4E86\u76EE\u6807\u56FE\u7247\u7684\u7F13\u5B58\uFF0C\u6240\u4EE5\u5C55\u793A\u901F\u5EA6\u4F1A\u975E\u5E38\u5FEB\uFF0C\u4ECE\u5360\u4F4D\u56FE\u5230\u76EE\u6807\u56FE\u7247\u7684\u65F6\u95F4\u5DEE\u4F1A\u975E\u5E38\u5C0F\u3001\u5C0F\u5230\u7528\u6237\u6CE8\u610F\u4E0D\u5230\uFF0C\u8FD9\u6837\u4F53\u9A8C\u5C31\u4F1A\u975E\u5E38\u597D\u4E86\u3002</p><p>\u4E0A\u9762\u7684\u601D\u8DEF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E0D\u5047\u601D\u7D22\u5730\u5B9E\u73B0\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class PreLoadImage {
    // \u5360\u4F4D\u56FE\u7684url\u5730\u5740
    static LOADING_URL = &#39;xxxxxx&#39;

    constructor(imgNode) {
        // \u83B7\u53D6\u8BE5\u5B9E\u4F8B\u5BF9\u5E94\u7684DOM\u8282\u70B9
        this.imgNode = imgNode
    }

    // \u8BE5\u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E\u771F\u5B9E\u7684\u56FE\u7247\u5730\u5740
    setSrc(targetUrl) {
        // img\u8282\u70B9\u521D\u59CB\u5316\u65F6\u5C55\u793A\u7684\u662F\u4E00\u4E2A\u5360\u4F4D\u56FE
        this.imgNode.src = PreLoadImage.LOADING_URL
        // \u521B\u5EFA\u4E00\u4E2A\u5E2E\u6211\u4EEC\u52A0\u8F7D\u56FE\u7247\u7684Image\u5B9E\u4F8B
        const image = new Image()
        // \u76D1\u542C\u76EE\u6807\u56FE\u7247\u52A0\u8F7D\u7684\u60C5\u51B5\uFF0C\u5B8C\u6210\u65F6\u518D\u5C06DOM\u4E0A\u7684img\u8282\u70B9\u7684src\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u76EE\u6807\u56FE\u7247\u7684url
        image.onload = () =&gt; {
            this.imgNode.src = targetUrl
        }
        // \u8BBE\u7F6Esrc\u5C5E\u6027\uFF0CImage\u5B9E\u4F8B\u5F00\u59CB\u52A0\u8F7D\u56FE\u7247
        image.src = srcUrl
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\xA0<code>PreLoadImage</code>\xA0\u4E4D\u4E00\u770B\u6CA1\u95EE\u9898\uFF0C\u4F46\u5176\u5B9E\u8FDD\u53CD\u4E86\u6211\u4EEC\u8BBE\u8BA1\u539F\u5219\u4E2D\u7684\u5355\u4E00\u804C\u8D23\u539F\u5219\u3002<code>PreLoadImage</code>\xA0\u4E0D\u4EC5\u8981\u8D1F\u8D23\u56FE\u7247\u7684\u52A0\u8F7D\uFF0C\u8FD8\u8981\u8D1F\u8D23\xA0<code>DOM</code>\xA0\u5C42\u9762\u7684\u64CD\u4F5C\uFF08img \u8282\u70B9\u7684\u521D\u59CB\u5316\u548C\u540E\u7EED\u7684\u6539\u53D8\uFF09\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u5C31\u51FA\u73B0\u4E86\u4E24\u4E2A\u53EF\u80FD\u5BFC\u81F4\u8FD9\u4E2A\u7C7B\u53D1\u751F\u53D8\u5316\u7684\u539F\u56E0\u3002</p><blockquote><p>\u597D\u7684\u505A\u6CD5\u662F\u5C06\u4E24\u4E2A\u903B\u8F91\u5206\u79BB\uFF0C\u8BA9\xA0<code>PreLoadImage</code>\xA0\u4E13\u5FC3\u53BB\u505A DOM \u5C42\u9762\u7684\u4E8B\u60C5\uFF08\u771F\u5B9E DOM \u8282\u70B9\u7684\u83B7\u53D6\u3001img \u8282\u70B9\u7684\u94FE\u63A5\u8BBE\u7F6E\uFF09\uFF0C\u518D\u627E\u4E00\u4E2A\u5BF9\u8C61\u6765\u4E13\u95E8\u6765\u5E2E\u6211\u4EEC\u641E\u52A0\u8F7D------\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u7F3A\u4E2A\u5A92\u5A46\uFF0C\u8FD9\u5A92\u5A46\u975E\u4EE3\u7406\u5668\u4E0D\u53EF\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class PreLoadImage {
    constructor(imgNode) {
        // \u83B7\u53D6\u771F\u5B9E\u7684DOM\u8282\u70B9
        this.imgNode = imgNode
    }

    // \u64CD\u4F5Cimg\u8282\u70B9\u7684src\u5C5E\u6027
    setSrc(imgUrl) {
        this.imgNode.src = imgUrl
    }
}

class ProxyImage {
    // \u5360\u4F4D\u56FE\u7684url\u5730\u5740
    static LOADING_URL = &#39;xxxxxx&#39;

    constructor(targetImage) {
        // \u76EE\u6807Image\uFF0C\u5373PreLoadImage\u5B9E\u4F8B
        this.targetImage = targetImage
    }

    // \u8BE5\u65B9\u6CD5\u4E3B\u8981\u64CD\u4F5C\u865A\u62DFImage\uFF0C\u5B8C\u6210\u52A0\u8F7D
    setSrc(targetUrl) {
       // \u771F\u5B9Eimg\u8282\u70B9\u521D\u59CB\u5316\u65F6\u5C55\u793A\u7684\u662F\u4E00\u4E2A\u5360\u4F4D\u56FE
        this.targetImage.setSrc(ProxyImage.LOADING_URL)
        // \u521B\u5EFA\u4E00\u4E2A\u5E2E\u6211\u4EEC\u52A0\u8F7D\u56FE\u7247\u7684\u865A\u62DFImage\u5B9E\u4F8B
        const virtualImage = new Image()
        // \u76D1\u542C\u76EE\u6807\u56FE\u7247\u52A0\u8F7D\u7684\u60C5\u51B5\uFF0C\u5B8C\u6210\u65F6\u518D\u5C06DOM\u4E0A\u7684\u771F\u5B9Eimg\u8282\u70B9\u7684src\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u76EE\u6807\u56FE\u7247\u7684url
        virtualImage.onload = () =&gt; {
            this.targetImage.setSrc(targetUrl)
        }
        // \u8BBE\u7F6Esrc\u5C5E\u6027\uFF0C\u865A\u62DFImage\u5B9E\u4F8B\u5F00\u59CB\u52A0\u8F7D\u56FE\u7247
        virtualImage.src = targetUrl
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>ProxyImage</code>\xA0\u5E2E\u6211\u4EEC\u8C03\u5EA6\u4E86\u9884\u52A0\u8F7D\u76F8\u5173\u7684\u5DE5\u4F5C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\xA0<code>ProxyImage</code>\xA0\u8FD9\u4E2A\u4EE3\u7406\uFF0C\u5B9E\u73B0\u5BF9\u771F\u5B9E img \u8282\u70B9\u7684\u95F4\u63A5\u8BBF\u95EE\uFF0C\u5E76\u5F97\u5230\u6211\u4EEC\u60F3\u8981\u7684\u6548\u679C\u3002</p></blockquote><p>\u5728\u8FD9\u4E2A\u5B9E\u4F8B\u4E2D\uFF0C<code>virtualImage</code>\xA0\u8FD9\u4E2A\u5BF9\u8C61\u662F\u4E00\u4E2A&quot;\u5E55\u540E\u82F1\u96C4&quot;\uFF0C\u5B83\u59CB\u7EC8\u5B58\u5728\u4E8E JavaScript \u4E16\u754C\u4E2D\u3001\u4EE3\u66FF\u771F\u5B9E DOM \u53D1\u8D77\u4E86\u56FE\u7247\u52A0\u8F7D\u8BF7\u6C42\u3001\u5B8C\u6210\u4E86\u56FE\u7247\u52A0\u8F7D\u5DE5\u4F5C\uFF0C\u5374\u4ECE\u672A\u5728\u6E32\u67D3\u5C42\u9762\u629B\u5934\u9732\u9762\u3002\u56E0\u6B64\u8FD9\u79CD\u6A21\u5F0F\u88AB\u79F0\u4E3A&quot;\u865A\u62DF\u4EE3\u7406&quot;\u6A21\u5F0F\u3002</p><h3 id="_5-5-\u7F13\u5B58\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_5-5-\u7F13\u5B58\u4EE3\u7406" aria-hidden="true">#</a> 5.5 \u7F13\u5B58\u4EE3\u7406</h3><blockquote><p>\u7F13\u5B58\u4EE3\u7406\u6BD4\u8F83\u597D\u7406\u89E3\uFF0C\u5B83\u5E94\u7528\u4E8E\u4E00\u4E9B\u8BA1\u7B97\u91CF\u8F83\u5927\u7684\u573A\u666F\u91CC\u3002\u5728\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981&quot;\u7528\u7A7A\u95F4\u6362\u65F6\u95F4&quot;------\u5F53\u6211\u4EEC\u9700\u8981\u7528\u5230\u67D0\u4E2A\u5DF2\u7ECF\u8BA1\u7B97\u8FC7\u7684\u503C\u7684\u65F6\u5019\uFF0C\u4E0D\u60F3\u518D\u8017\u65F6\u8FDB\u884C\u4E8C\u6B21\u8BA1\u7B97\uFF0C\u800C\u662F\u5E0C\u671B\u80FD\u4ECE\u5185\u5B58\u91CC\u53BB\u53D6\u51FA\u73B0\u6210\u7684\u8BA1\u7B97\u7ED3\u679C\u3002\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C\u5C31\u9700\u8981\u4E00\u4E2A\u4EE3\u7406\u6765\u5E2E\u6211\u4EEC\u5728\u8FDB\u884C\u8BA1\u7B97\u7684\u540C\u65F6\uFF0C\u8FDB\u884C\u8BA1\u7B97\u7ED3\u679C\u7684\u7F13\u5B58\u4E86\u3002</p></blockquote><p>\u4E00\u4E2A\u6BD4\u8F83\u5178\u578B\u7684\u4F8B\u5B50\uFF0C\u662F\u5BF9\u4F20\u5165\u7684\u53C2\u6570\u8FDB\u884C\u6C42\u548C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// addAll\u65B9\u6CD5\u4F1A\u5BF9\u4F60\u4F20\u5165\u7684\u6240\u6709\u53C2\u6570\u505A\u6C42\u548C\u64CD\u4F5C
const addAll = function() {
    console.log(&#39;\u8FDB\u884C\u4E86\u4E00\u6B21\u65B0\u8BA1\u7B97&#39;)
    let result = 0
    const len = arguments.length
    for(let i = 0; i &lt; len; i++) {
        result += arguments[i]
    }
    return result
}

// \u4E3A\u6C42\u548C\u65B9\u6CD5\u521B\u5EFA\u4EE3\u7406
const proxyAddAll = (function(){
    // \u6C42\u548C\u7ED3\u679C\u7684\u7F13\u5B58\u6C60
    const resultCache = {}
    return function() {
        // \u5C06\u5165\u53C2\u8F6C\u5316\u4E3A\u4E00\u4E2A\u552F\u4E00\u7684\u5165\u53C2\u5B57\u7B26\u4E32
        const args = Array.prototype.join.call(arguments, &#39;,&#39;)

        // \u68C0\u67E5\u672C\u6B21\u5165\u53C2\u662F\u5426\u6709\u5BF9\u5E94\u7684\u8BA1\u7B97\u7ED3\u679C
        if(args in resultCache) {
            // \u5982\u679C\u6709\uFF0C\u5219\u8FD4\u56DE\u7F13\u5B58\u6C60\u91CC\u73B0\u6210\u7684\u7ED3\u679C
            return resultCache[args]
        }
        return resultCache[args] = addAll(...arguments)
    }
})()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u628A\u8FD9\u4E2A\u65B9\u6CD5\u4E22\u8FDB\u63A7\u5236\u53F0\uFF0C\u5C1D\u8BD5\u540C\u4E00\u5957\u5165\u53C2\u4E24\u6B21\uFF0C\u7ED3\u679C\u559C\u4EBA\uFF1A</p><p><img src="`+c+`" alt=""></p><blockquote><p>\u6211\u4EEC\u53D1\u73B0\xA0<code>proxyAddAll</code>\xA0\u9488\u5BF9\u91CD\u590D\u7684\u5165\u53C2\u53EA\u4F1A\u8BA1\u7B97\u4E00\u6B21\uFF0C\u8FD9\u5C06\u5927\u5927\u8282\u7701\u8BA1\u7B97\u8FC7\u7A0B\u4E2D\u7684\u65F6\u95F4\u5F00\u9500\u3002\u73B0\u5728\u6211\u4EEC\u6709 6 \u4E2A\u5165\u53C2\uFF0C\u53EF\u80FD\u8FD8\u770B\u4E0D\u51FA\u6765\uFF0C\u5F53\u6211\u4EEC\u9488\u5BF9\u5927\u91CF\u5165\u53C2\u3001\u505A\u53CD\u590D\u8BA1\u7B97\u65F6\uFF0C\u7F13\u5B58\u4EE3\u7406\u7684\u4F18\u52BF\u5C06\u5F97\u5230\u66F4\u5145\u5206\u7684\u51F8\u663E\u3002</p></blockquote><h2 id="_6-\u884C\u4E3A\u578B-\u7B56\u7565\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_6-\u884C\u4E3A\u578B-\u7B56\u7565\u6A21\u5F0F" aria-hidden="true">#</a> 6 \u884C\u4E3A\u578B-\u7B56\u7565\u6A21\u5F0F</h2><blockquote><p>\u5B9A\u4E49\u4E00\u7CFB\u5217\u7684\u7B97\u6CD5,\u628A\u5B83\u4EEC\u4E00\u4E2A\u4E2A\u5C01\u88C5\u8D77\u6765, \u5E76\u4E14\u4F7F\u5B83\u4EEC\u53EF\u76F8\u4E92\u66FF\u6362\u3002</p></blockquote><p>\u4F8B\u5B50</p><blockquote><p>\u5B9A\u4E49\uFF1A\u6839\u636E\u4E0D\u540C\u53C2\u6570\u53EF\u4EE5\u547D\u4E2D\u4E0D\u540C\u7684\u7B56\u7565</p></blockquote><ul><li><p>\u4F18\u70B9\uFF1A</p></li><li><p>\u80FD\u51CF\u5C11\u5927\u91CF\u7684if\u8BED\u53E5</p></li><li><p>\u590D\u7528\u6027\u597D</p></li><li><p>\u4F18\u5316\u4F7F\u7528\uFF1A</p><ul><li>\u5C01\u88C5\u4EE3\u7801\uFF0C\u66B4\u9732\u65B9\u6CD5</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default {
    xxx
}

import xxx from &#39;x.js&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const strategy = {
    &#39;A&#39;: (salary) =&gt; {
        return salary * 2;
    },

    &#39;B&#39;: (salary) =&gt; {
        return salary * 3;
    },

    &#39;C&#39;: (salary) =&gt; {
        return salary * 4;
    }
}

const calculateBonus = (level, salary) =&gt; {
    return strategy[level](salary)
}

const A = calculateBonus(&#39;A&#39;, 10000);
console.log(A); // 20000

// \u66B4\u9732\u65B9\u6CD5
export default {
    calculateBonus
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-\u5148\u6765\u770B\u4E00\u4E2A\u771F\u5B9E\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_6-1-\u5148\u6765\u770B\u4E00\u4E2A\u771F\u5B9E\u573A\u666F" aria-hidden="true">#</a> 6.1 \u5148\u6765\u770B\u4E00\u4E2A\u771F\u5B9E\u573A\u666F</h3><p>\u6709\u4E00\u5929\uFF0C\u4EA7\u54C1\u7ECF\u7406\u97E9\u6885\u6885\u627E\u5230\u674E\u96F7\uFF0C\u7ED9\u674E\u96F7\u63D0\u4E86\u8FD9\u4E48\u4E2A\u9700\u6C42\uFF1A</p><p>\u9A6C\u4E0A\u5927\u4FC3\u8981\u6765\u4E86\uFF0C\u6211\u4EEC\u672C\u6B21\u5927\u4FC3\u8981\u505A\u5DEE\u5F02\u5316\u8BE2\u4EF7\u3002\u5565\u662F\u5DEE\u5F02\u5316\u8BE2\u4EF7\uFF1F\u5C31\u662F\u8BF4\u540C\u4E00\u4E2A\u5546\u54C1\uFF0C\u6211\u901A\u8FC7\u5728\u540E\u53F0\u7ED9\u5B83\u8BBE\u7F6E\u4E0D\u540C\u7684\u4EF7\u683C\u7C7B\u578B\uFF0C\u53EF\u4EE5\u8BA9\u5B83\u5C55\u793A\u4E0D\u540C\u7684\u4EF7\u683C\u3002\u5177\u4F53\u7684\u903B\u8F91\u5982\u4E0B\uFF1A</p><ul><li>\u5F53\u4EF7\u683C\u7C7B\u578B\u4E3A&quot;\u9884\u552E\u4EF7&quot;\u65F6\uFF0C\u6EE1 100 - 20\uFF0C\u4E0D\u6EE1 100 \u6253 9 \u6298</li><li>\u5F53\u4EF7\u683C\u7C7B\u578B\u4E3A&quot;\u5927\u4FC3\u4EF7&quot;\u65F6\uFF0C\u6EE1 100 - 30\uFF0C\u4E0D\u6EE1 100 \u6253 8 \u6298</li><li>\u5F53\u4EF7\u683C\u7C7B\u578B\u4E3A&quot;\u8FD4\u573A\u4EF7&quot;\u65F6\uFF0C\u6EE1 200 - 50\uFF0C\u4E0D\u53E0\u52A0</li><li>\u5F53\u4EF7\u683C\u7C7B\u578B\u4E3A&quot;\u5C1D\u9C9C\u4EF7&quot;\u65F6\uFF0C\u76F4\u63A5\u6253 5 \u6298</li></ul><p>\u674E\u96F7\u626B\u4E86\u4E00\u773C prd\uFF0C\u7ACB\u523B\u6765\u4E86\u4E3B\u610F\u3002\u4ED6\u9996\u5148\u5C06\u56DB\u79CD\u4EF7\u683C\u505A\u4E86\u6807\u7B7E\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9884\u552E\u4EF7 - pre
\u5927\u4FC3\u4EF7 - onSale
\u8FD4\u573A\u4EF7 - back
\u5C1D\u9C9C\u4EF7 - fresh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u674E\u96F7\u4ED4\u7EC6\u7814\u8BFB\u4E86 prd \u7684\u5185\u5BB9\uFF0C\u4F5C\u4E3A\u8D44\u6DF1 if-else \u4FA0\uFF0C\u4ED6\u4E09\u4E0B\u4E94\u9664\u4E8C\u5C31\u5199\u51FA\u4E00\u5957\u529F\u80FD\u5B8C\u5907\u7684\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BE2\u4EF7\u65B9\u6CD5\uFF0C\u63A5\u53D7\u4EF7\u683C\u6807\u7B7E\u548C\u539F\u4EF7\u4E3A\u5165\u53C2
function askPrice(tag, originPrice) {

  // \u5904\u7406\u9884\u70ED\u4EF7
  if(tag === &#39;pre&#39;) {
    if(originPrice &gt;= 100) {
      return originPrice - 20
    }
    return originPrice * 0.9
  }

  // \u5904\u7406\u5927\u4FC3\u4EF7
  if(tag === &#39;onSale&#39;) {
    if(originPrice &gt;= 100) {
      return originPrice - 30
    }
    return originPrice * 0.8
  }

  // \u5904\u7406\u8FD4\u573A\u4EF7
  if(tag === &#39;back&#39;) {
    if(originPrice &gt;= 200) {
      return originPrice - 50
    }
    return originPrice
  }

  // \u5904\u7406\u5C1D\u9C9C\u4EF7
  if(tag === &#39;fresh&#39;) {
     return originPrice * 0.5
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-if-else-\u4FA0-\u4EBA\u4EBA\u558A\u6253" tabindex="-1"><a class="header-anchor" href="#_6-2-if-else-\u4FA0-\u4EBA\u4EBA\u558A\u6253" aria-hidden="true">#</a> 6.2 if-else \u4FA0\uFF0C\u4EBA\u4EBA\u558A\u6253</h3><p>\u968F\u4FBF\u8DD1\u4E00\u4E0B\uFF0C\u4E0A\u8FF0\u4EE3\u7801\u8FD0\u884C\u8D77\u6765\u786E\u5B9E\u6CA1\u5565\u6BDB\u75C5\u3002\u4F46\u4E5F\u53EA\u662F&quot;\u8FD0\u884C\u8D77\u6765&quot;\u6CA1\u6BDB\u75C5\u800C\u5DF2\u3002\u4F5C\u4E3A\u4EBA\u4EBA\u558A\u6253\u7684 if-else \u4FA0\uFF0C\u674E\u96F7\u5FC5\u987B\u4E3A\u4ED6\u7684\u884C\u4E3A\u4ED8\u51FA\u4EE3\u4EF7\u3002\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B\u8FD9\u4E48\u5199\u4EE3\u7801\u4F1A\u5E26\u6765\u4EC0\u4E48\u540E\u679C\uFF1A</p><ul><li>\u9996\u5148\uFF0C\u5B83\u8FDD\u80CC\u4E86&quot;\u5355\u4E00\u529F\u80FD&quot;\u539F\u5219\u3002\u4E00\u4E2A function \u91CC\u9762\uFF0C\u5B83\u7ADF\u7136\u5904\u7406\u4E86\u56DB\u5768\u903B\u8F91------\u8FD9\u4E2A\u51FD\u6570\u7684\u903B\u8F91\u592A\u80D6\u4E86\uFF01\u8FD9\u6837\u4F1A\u5E26\u6765\u4EC0\u4E48\u6837\u7684\u7CDF\u7CD5\u540E\u679C\uFF0C\u7B14\u8005\u5728\u524D\u9762\u7684\u5C0F\u8282\u4E2D\u5DF2\u7ECF BB \u8FC7\u5F88\u591A\u6B21\u4E86\uFF1A\u6BD4\u5982\u8BF4\u4E07\u4E00\u5176\u4E2D\u4E00\u884C\u4EE3\u7801\u51FA\u4E86 Bug\uFF0C\u90A3\u4E48\u6574\u4E2A\u8BE2\u4EF7\u903B\u8F91\u90FD\u4F1A\u5D29\u574F\uFF1B\u4E0E\u6B64\u540C\u65F6\u51FA\u4E86 Bug \u4F60\u5F88\u96BE\u5B9A\u4F4D\u5230\u5E95\u662F\u54EA\u4E2A\u4EE3\u7801\u5757\u574F\u4E86\u4E8B\uFF1B\u518D\u6BD4\u5982\u8BF4\u5355\u4E2A\u80FD\u529B\u5F88\u96BE\u88AB\u62BD\u79BB\u590D\u7528\u7B49\u7B49\u7B49\u7B49\u3002\u76F8\u4FE1\u8DDF\u7740\u6211\u4E00\u8DEF\u5B66\u4E0B\u6765\u7684\u5404\u4F4D\uFF0C\u4E5F\u5DF2\u7ECF\u5728\u91CD\u91CD\u5B9E\u6218\u4E2D\u5BF9\u80D6\u903B\u8F91\u7684\u6076\u52A3\u5F71\u54CD\u6709\u4E86\u5207\u8EAB\u7684\u4F53\u4F1A\u3002\u603B\u4E4B\uFF0C\u89C1\u5230\u80D6\u903B\u8F91\uFF0C\u6211\u4EEC\u7684\u7B2C\u4E00\u53CD\u5E94\uFF0C\u5C31\u662F\u4E00\u4E2A\u5B57------\u62C6\uFF01</li><li>\u4E0D\u4EC5\u5982\u6B64\uFF0C\u5B83\u8FD8\u8FDD\u80CC\u4E86&quot;\u5F00\u653E\u5C01\u95ED&quot;\u539F\u5219\u3002\u5047\u5982\u6709\u4E00\u5929\u97E9\u6885\u6885\u518D\u6B21\u627E\u5230\u674E\u96F7\uFF0C\u8981\u4ED6\u52A0\u4E00\u4E2A\u6EE1 100 - 50 \u7684&quot;\u65B0\u4EBA\u4EF7&quot;\u600E\u4E48\u529E\uFF1F\u4ED6\u53EA\u80FD\u7EE7\u7EED if-else\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function askPrice(tag, originPrice) {

  // \u5904\u7406\u9884\u70ED\u4EF7
  if(tag === &#39;pre&#39;) {
    if(originPrice &gt;= 100) {
      return originPrice - 20
    }
    return originPrice * 0.9
  }
  // \u5904\u7406\u5927\u4FC3\u4EF7
  if(tag === &#39;onSale&#39;) {
    if(originPrice &gt;= 100) {
      return originPrice - 30
    }
    return originPrice * 0.8
  }

  // \u5904\u7406\u8FD4\u573A\u4EF7
  if(tag === &#39;back&#39;) {
    if(originPrice &gt;= 200) {
      return originPrice - 50
    }
    return originPrice
  }

  // \u5904\u7406\u5C1D\u9C9C\u4EF7
  if(tag === &#39;fresh&#39;) {
      return originPrice * 0.5
  }

  // \u5904\u7406\u65B0\u4EBA\u4EF7
  if(tag === &#39;newUser&#39;) {
    if(originPrice &gt;= 100) {
      return originPrice - 50
    }
    return originPrice
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CA1\u9519\uFF0C\u674E\u96F7\u7070\u6E9C\u6E9C\u5730\u8DD1\u53BB\u6539\u4E86\xA0<code>askPrice</code>\xA0\u51FD\u6570\uFF01\u968F\u540E\u4ED6\u606C\u4E0D\u77E5\u803B\u5730\u5F90\u5F90\u8F6C\u5934\uFF0C\u5BF9\u80CC\u540E\u7684\u6D4B\u8BD5\u540C\u5B66\u8BF4\uFF1A\u54E5\uFF0C\u6211\u6539\u4E86\u8BE2\u4EF7\u51FD\u6570\uFF0C\u9EBB\u70E6\u4F60\u5E2E\u6211\u628A\u6574\u4E2A\u8BE2\u4EF7\u903B\u8F91\u56DE\u5F52\u4E00\u4E0B\u3002\u6D4B\u8BD5\u540C\u5B66\u839E\u5C14\u4E00\u7B11\uFF0C \u5FC3\u4E2D\u65E9\u5DF2\u6709\u65E0\u6570\u5934\u7F8A\u9A7C\u5728\u72C2\u5954\u3002\u4ED6\u5F3A\u5FCD\u7740\u5468\u672B\u52A0\u73ED\u7684\u60B2\u75DB\uFF0C\u505A\u5B8C\u4E86\u8FD9\u6F2B\u957F\u800C\u4E0D\u5FC5\u8981\u7684\u56DE\u5F52\u6D4B\u8BD5\uFF0C\u968F\u540E\u9ED8\u9ED8\u70B9\u51FB\u4E86\u540C\u4E8B\u7CFB\u7EDF\u91CC\u7684\u4E3E\u62A5\u6309\u94AE\u5BF9\u674E\u96F7\u8BF4\uFF1A\u54E5\uFF0C\u6C42\u4F60\u5B66\u5B66\u8BBE\u8BA1\u6A21\u5F0F\u5427\uFF01\uFF01</p></blockquote><h3 id="_6-3-\u91CD\u6784\u8BE2\u4EF7\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#_6-3-\u91CD\u6784\u8BE2\u4EF7\u903B\u8F91" aria-hidden="true">#</a> 6.3 \u91CD\u6784\u8BE2\u4EF7\u903B\u8F91</h3><p>\u73B0\u5728\u6211\u4EEC\u57FA\u4E8E\u6211\u4EEC\u5DF2\u7ECF\u5B66\u8FC7\u7684\u8BBE\u8BA1\u6A21\u5F0F\u601D\u60F3\uFF0C\u4E00\u70B9\u4E00\u70B9\u6539\u9020\u6389\u8FD9\u4E2A\u81C3\u80BF\u7684 askPrice\u3002</p><p>1. \u5355\u4E00\u529F\u80FD\u6539\u9020</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u8D76\u7D27\u628A\u56DB\u79CD\u8BE2\u4EF7\u903B\u8F91\u63D0\u51FA\u6765\uFF0C\u8BA9\u5B83\u4EEC\u5404\u81EA\u4E3A\u653F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5904\u7406\u9884\u70ED\u4EF7
function prePrice(originPrice) {
  if(originPrice &gt;= 100) {
    return originPrice - 20
  }
  return originPrice * 0.9
}

// \u5904\u7406\u5927\u4FC3\u4EF7
function onSalePrice(originPrice) {
  if(originPrice &gt;= 100) {
    return originPrice - 30
  }
  return originPrice * 0.8
}

// \u5904\u7406\u8FD4\u573A\u4EF7
function backPrice(originPrice) {
  if(originPrice &gt;= 200) {
    return originPrice - 50
  }
  return originPrice
}

// \u5904\u7406\u5C1D\u9C9C\u4EF7
function freshPrice(originPrice) {
  return originPrice * 0.5
}

function askPrice(tag, originPrice) {
  // \u5904\u7406\u9884\u70ED\u4EF7
  if(tag === &#39;pre&#39;) {
    return prePrice(originPrice)
  }
  // \u5904\u7406\u5927\u4FC3\u4EF7
  if(tag === &#39;onSale&#39;) {
    return onSalePrice(originPrice)
  }

  // \u5904\u7406\u8FD4\u573A\u4EF7
  if(tag === &#39;back&#39;) {
    return backPrice(originPrice)
  }

  // \u5904\u7406\u5C1D\u9C9C\u4EF7
  if(tag === &#39;fresh&#39;) {
     return freshPrice(originPrice)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK\uFF0C\u6211\u4EEC\u73B0\u5728\u81F3\u5C11\u505A\u5230\u4E86\u4E00\u4E2A\u51FD\u6570\u53EA\u505A\u4E00\u4EF6\u4E8B\u3002\u73B0\u5728\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E86\u81EA\u5DF1\u660E\u786E\u7684\u3001\u5355\u4E00\u7684\u5206\u5DE5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>prePrice - \u5904\u7406\u9884\u70ED\u4EF7
onSalePrice - \u5904\u7406\u5927\u4FC3\u4EF7
backPrice - \u5904\u7406\u8FD4\u573A\u4EF7
freshPrice - \u5904\u7406\u5C1D\u9C9C\u4EF7
askPrice - \u5206\u53D1\u8BE2\u4EF7\u903B\u8F91

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u6B64\u4E00\u6765\uFF0C\u6211\u4EEC\u5728\u9047\u5230 Bug \u65F6\uFF0C\u5C31\u53EF\u4EE5\u505A\u5230&quot;\u5934\u75DB\u533B\u5934\uFF0C\u811A\u75DB\u533B\u811A&quot;\uFF0C\u800C\u4E0D\u5FC5\u5728\u5E9E\u5927\u7684\u903B\u8F91\u6D77\u6D0B\u91CC\u8D39\u529B\u53BB\u5B9A\u4F4D\u5230\u5E95\u662F\u54EA\u5757\u4E0D\u5BF9\u3002</p><p>\u540C\u65F6\uFF0C\u5982\u679C\u6211\u5728\u53E6\u4E00\u4E2A\u51FD\u6570\u91CC\u4E5F\u60F3\u4F7F\u7528\u67D0\u4E2A\u8BE2\u4EF7\u80FD\u529B\uFF0C\u6BD4\u5982\u8BF4\u6211\u60F3\u8BE2\u9884\u70ED\u4EF7\uFF0C\u90A3\u6211\u76F4\u63A5\u628A prePrice \u8FD9\u4E2A\u51FD\u6570\u62FF\u53BB\u8C03\u7528\u5C31\u662F\u4E86\uFF0C\u800C\u4E0D\u5FC5\u5728 askPrice \u80A5\u80D6\u7684\u8EAB\u8EAF\u91CC\u82E6\u82E6\u5BFB\u89C5\u3001\u7136\u540E\u638F\u51FA\u8FD9\u5757\u903B\u8F91\u3001\u6700\u540E\u518D\u590D\u5236\u7C98\u8D34\u5230\u53E6\u4E00\u4E2A\u51FD\u6570\u53BB------\u66F4\u4F55\u51B5\u4E07\u4E00\u54EA\u5929 askPrice \u91CC\u7684\u9884\u70ED\u4EF7\u903B\u8F91\u6539\u4E86\uFF0C\u4F60\u8FD8\u5F97\u518D\u590D\u5236\u7C98\u8D34\u4E00\u6B21\uFF0C\u624E\u5FC3\u554A\u8001\u94C1\uFF01</p><p>\u5230\u8FD9\u91CC\uFF0C\u5728\u5355\u4E00\u529F\u80FD\u539F\u5219\u7684\u6307\u5F15\u4E0B\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u89E3\u51B3\u4E86\u4E00\u534A\u7684\u95EE\u9898\u3002</p><p>\u6211\u4EEC\u73B0\u5728\u6765\u634B\u4E00\u4E0B\uFF0C\u5176\u5B9E\u8FD9\u4E2A\u8BE2\u4EF7\u903B\u8F91\u6574\u4F53\u4E0A\u6765\u770B\u53EA\u6709\u4E24\u4E2A\u5173\u952E\u52A8\u4F5C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BE2\u4EF7\u903B\u8F91\u7684\u5206\u53D1 ------&gt; \u8BE2\u4EF7\u903B\u8F91\u7684\u6267\u884C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6539\u9020\u7684\u7B2C\u4E00\u6B65\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u628A&quot;\u8BE2\u4EF7\u903B\u8F91\u7684\u6267\u884C&quot;\u7ED9\u6458\u4E86\u51FA\u53BB\uFF0C\u5E76\u4E14\u5B9E\u73B0\u4E86\u4E0D\u540C\u8BE2\u4EF7\u903B\u8F91\u4E4B\u95F4\u7684\u89E3\u8026\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u8981\u62FF&quot;\u5206\u53D1&quot;\u8FD9\u4E2A\u52A8\u4F5C\u5F00\u5200\u3002</p><p>2. \u5F00\u653E\u5C01\u95ED\u6539\u9020</p><p>\u5269\u4E0B\u4E00\u534A\u7684\u95EE\u9898\u662F\u5565\u5462\uFF1F\u5C31\u662F\u54B1\u4EEC\u4E0A\u9762\u8BF4\u7684\u90A3\u4E2A\u65B0\u4EBA\u4EF7\u7684\u95EE\u9898------\u8FD9\u4F1A\u513F\u6211\u8981\u60F3\u7ED9 askPrice \u589E\u52A0\u65B0\u4EBA\u8BE2\u4EF7\u903B\u8F91\uFF0C\u6211\u8BE5\u548B\u6574\uFF1F\u6211\u53EA\u80FD\u8FD9\u4E48\u6765\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5904\u7406\u9884\u70ED\u4EF7
function prePrice(originPrice) {
  if(originPrice &gt;= 100) {
    return originPrice - 20
  }
  return originPrice * 0.9
}

// \u5904\u7406\u5927\u4FC3\u4EF7
function onSalePrice(originPrice) {
  if(originPrice &gt;= 100) {
    return originPrice - 30
  }
  return originPrice * 0.8
}

// \u5904\u7406\u8FD4\u573A\u4EF7
function backPrice(originPrice) {
  if(originPrice &gt;= 200) {
    return originPrice - 50
  }
  return originPrice
}

// \u5904\u7406\u5C1D\u9C9C\u4EF7
function freshPrice(originPrice) {
  return originPrice * 0.5
}

// \u5904\u7406\u65B0\u4EBA\u4EF7
function newUserPrice(originPrice) {
  if(originPrice &gt;= 100) {
    return originPrice - 50
  }
  return originPrice
}

function askPrice(tag, originPrice) {
  // \u5904\u7406\u9884\u70ED\u4EF7
  if(tag === &#39;pre&#39;) {
    return prePrice(originPrice)
  }
  // \u5904\u7406\u5927\u4FC3\u4EF7
  if(tag === &#39;onSale&#39;) {
    return onSalePrice(originPrice)
  }

  // \u5904\u7406\u8FD4\u573A\u4EF7
  if(tag === &#39;back&#39;) {
    return backPrice(originPrice)
  }

  // \u5904\u7406\u5C1D\u9C9C\u4EF7
  if(tag === &#39;fresh&#39;) {
     return freshPrice(originPrice)
  }

  // \u5904\u7406\u65B0\u4EBA\u4EF7
  if(tag === &#39;newUser&#39;) {
     return newUserPrice(originPrice)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5916\u5C42\uFF0C\u6211\u4EEC\u7F16\u5199\u4E00\u4E2A newUser \u51FD\u6570\u7528\u4E8E\u5904\u7406\u65B0\u4EBA\u4EF7\u903B\u8F91\uFF1B\u5728 askPrice \u91CC\u9762\uFF0C\u6211\u4EEC\u65B0\u589E\u4E86\u4E00\u4E2A if-else \u5224\u65AD\u3002\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD9\u6837\u5176\u5B9E\u8FD8\u662F\u5728\u4FEE\u6539 askPrice \u7684\u51FD\u6570\u4F53\uFF0C\u6CA1\u6709\u5B9E\u73B0&quot;\u5BF9\u6269\u5C55\u5F00\u653E\uFF0C\u5BF9\u4FEE\u6539\u5C01\u95ED&quot;\u7684\u6548\u679C\u3002</p><blockquote><p>\u90A3\u4E48\u6211\u4EEC\u5E94\u8BE5\u600E\u4E48\u505A\uFF1F\u6211\u4EEC\u4ED4\u7EC6\u60F3\u60F3\uFF0C\u697C\u4E0A\u7528\u4E86\u8FD9\u4E48\u591A if-else\uFF0C\u6211\u4EEC\u7684\u76EE\u7684\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u662F\u4E0D\u662F\u5C31\u662F\u4E3A\u4E86\u628A \u8BE2\u4EF7\u6807\u7B7E-\u8BE2\u4EF7\u51FD\u6570 \u8FD9\u4E2A\u6620\u5C04\u5173\u7CFB\u7ED9\u660E\u786E\u4E0B\u6765\uFF1F\u90A3\u4E48\u5728 JS \u4E2D\uFF0C\u6709\u6CA1\u6709\u4EC0\u4E48\u65E2\u80FD\u591F\u65E2\u5E2E\u6211\u4EEC\u660E\u786E\u6620\u5C04\u5173\u7CFB\uFF0C\u540C\u65F6\u4E0D\u7834\u574F\u4EE3\u7801\u7684\u7075\u6D3B\u6027\u7684\u65B9\u6CD5\u5462\uFF1F\u7B54\u6848\u5C31\u662F\u5BF9\u8C61\u6620\u5C04\uFF01</p></blockquote><p>\u54B1\u4EEC\u5B8C\u5168\u53EF\u4EE5\u628A\u8BE2\u4EF7\u7B97\u6CD5\u5168\u90FD\u6536\u655B\u5230\u4E00\u4E2A\u5BF9\u8C61\u91CC\u53BB\u561B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u4E00\u4E2A\u8BE2\u4EF7\u5904\u7406\u5668\u5BF9\u8C61
const priceProcessor = {
  pre(originPrice) {
    if (originPrice &gt;= 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  },
  onSale(originPrice) {
    if (originPrice &gt;= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  },
  back(originPrice) {
    if (originPrice &gt;= 200) {
      return originPrice - 50;
    }
    return originPrice;
  },
  fresh(originPrice) {
    return originPrice * 0.5;
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u60F3\u4F7F\u7528\u5176\u4E2D\u67D0\u4E2A\u8BE2\u4EF7\u7B97\u6CD5\u7684\u65F6\u5019\uFF1A\u901A\u8FC7\u6807\u7B7E\u540D\u53BB\u5B9A\u4F4D\u5C31\u597D\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BE2\u4EF7\u51FD\u6570
function askPrice(tag, originPrice) {
  return priceProcessor[tag](originPrice)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u6B64\u4E00\u6765\uFF0CaskPrice \u51FD\u6570\u91CC\u7684 if-else \u5927\u519B\u5F7B\u5E95\u88AB\u54B1\u4EEC\u6D88\u706D\u4E86\u3002\u8FD9\u65F6\u5019\u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u65B0\u4EBA\u4EF7\uFF0C\u53EA\u9700\u8981\u7ED9 priceProcessor \u65B0\u589E\u4E00\u4E2A\u6620\u5C04\u5173\u7CFB\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>priceProcessor.newUser = function (originPrice) {
  if (originPrice &gt;= 100) {
    return originPrice - 50;
  }
  return originPrice;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u8BE2\u4EF7\u903B\u8F91\u7684\u5206\u53D1\u4E5F\u53D8\u6210\u4E86\u4E00\u4E2A\u6E05\u6E05\u723D\u723D\u7684\u8FC7\u7A0B\u3002\u5F53\u674E\u96F7\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u65B0\u589E\u4E00\u4E2A\u65B0\u4EBA\u4EF7\u7684\u8BE2\u4EF7\u903B\u8F91\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u5E95\u6C14\u5341\u8DB3\u5730\u5BF9\u6D4B\u8BD5\u540C\u5B66\u8BF4\uFF1A\u8001\u54E5\uFF0C\u6211\u6539\u4E86\u8BE2\u4EF7\u903B\u8F91\uFF0C\u4F46\u662F\u6539\u52A8\u8303\u56F4\u4EC5\u4EC5\u6D89\u53CA\u5230\u65B0\u4EBA\u4EF7\uFF0C\u662F\u4E00\u4E2A\u5355\u7EAF\u7684\u529F\u80FD\u589E\u52A0\u3002\u6240\u4EE5\u4F60\u53EA\u6D4B\u8FD9\u4E2A\u65B0\u529F\u80FD\u70B9\u5C31 OK\uFF0C\u8001\u903B\u8F91\u4E0D\u7528\u7BA1\uFF01</p><p>\u4ECE\u6B64\uFF0C\u674E\u96F7\u5C31\u4ECE\u4EBA\u4EBA\u558A\u6253\u7684 if-else \u4FA0\uFF0C\u6447\u8EAB\u4E00\u53D8\u6210\u4E3A\u4E86\u6D4B\u8BD5\u4E4B\u53CB\u3001\u4E2D\u56FD\u597D\u5F00\u53D1\u3002\u4E1A\u52A1\u4EE3\u7801\u91CC\u7684\u8BE2\u4EF7\u903B\u8F91\uFF0C\u4E5F\u56E0\u4E3A\u674E\u96F7\u575A\u5B88\u8BBE\u8BA1\u539F\u5219100\u5E74\u4E0D\u52A8\u6447\uFF0C\u800C\u53D8\u5F97\u6613\u8BFB\u3001\u6613\u7EF4\u62A4\u3002</p><h3 id="_6-4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_6-4-\u603B\u7ED3" aria-hidden="true">#</a> 6.4 \u603B\u7ED3</h3><p>\u8BF4\u8D77\u6765\u4F60\u53EF\u80FD\u4E0D\u76F8\u4FE1\uFF0C\u54B1\u4EEC\u4E0A\u9762\u7684\u6574\u4E2A\u91CD\u6784\u7684\u8FC7\u7A0B\uFF0C\u5C31\u662F\u5BF9\u7B56\u7565\u6A21\u5F0F\u7684\u5E94\u7528\u3002</p><p>\u73B0\u5728\u5927\u5BB6\u6765\u54C1\u54C1\u7B56\u7565\u6A21\u5F0F\u7684\u5B9A\u4E49\uFF1A</p><blockquote><p>\u5B9A\u4E49\u4E00\u7CFB\u5217\u7684\u7B97\u6CD5,\u628A\u5B83\u4EEC\u4E00\u4E2A\u4E2A\u5C01\u88C5\u8D77\u6765, \u5E76\u4E14\u4F7F\u5B83\u4EEC\u53EF\u76F8\u4E92\u66FF\u6362\u3002</p></blockquote><p>\u56DE\u5934\u770B\u770B\uFF0C\u54B1\u4EEC\u5FD9\u6D3B\u5230\u73B0\u5728\uFF0C\u662F\u4E0D\u662F\u5C31\u5E72\u4E86\u8FD9\u4E8B\u513F\uFF1F</p><p>\u4F46\u4F60\u8981\u76F4\u63A5\u8BFB\u8FD9\u53E5\u8BDD\uFF0C\u53EF\u80FD\u786E\u5B9E\u4F1A\u61F5\u5708------\u5565\u662F\u7B97\u6CD5\uFF1F\u5982\u4F55\u5C01\u88C5\uFF1F\u53EF\u66FF\u6362\u53C8\u662F\u548B\u505A\u5230\u7684\uFF1F</p><p>\u5982\u4ECA\u4F60\u4F60\u5DF2\u7ECF\u81EA\u5DF1\u52A8\u624B\u5B9E\u73B0\u4E86\u7B97\u6CD5\u63D0\u53D6\u3001\u7B97\u6CD5\u5C01\u88C5\u3001\u5206\u53D1\u4F18\u5316\u7684\u6574\u4E2A\u4E00\u6761\u9F99\u7684\u64CD\u4F5C\u6D41\uFF0C\u76F8\u4FE1\u9762\u5BF9\u8FD9\u6761\u5B9A\u4E49\uFF0C\u4F60\u53EF\u4EE5\u4F1A\u5FC3\u4E00\u7B11------\u7B97\u6CD5\uFF0C\u5C31\u662F\u6211\u4EEC\u8FD9\u4E2A\u573A\u666F\u4E2D\u7684\u8BE2\u4EF7\u903B\u8F91\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u662F\u4F60\u4EFB\u4F55\u4E00\u4E2A\u529F\u80FD\u51FD\u6570\u7684\u903B\u8F91\uFF1B&quot;\u5C01\u88C5&quot;\u5C31\u662F\u628A\u67D0\u4E00\u529F\u80FD\u70B9\u5BF9\u5E94\u7684\u903B\u8F91\u7ED9\u63D0\u51FA\u6765\uFF1B&quot;\u53EF\u66FF\u6362&quot;\u5EFA\u7ACB\u5728\u5C01\u88C5\u7684\u57FA\u7840\u4E0A\uFF0C\u53EA\u662F\u8BF4\u8FD9\u4E2A&quot;\u66FF\u6362&quot;\u7684\u5224\u65AD\u8FC7\u7A0B\uFF0C\u54B1\u4EEC\u4E0D\u80FD\u76F4\u63A5\u603C if-else\uFF0C\u800C\u8981\u8003\u8651\u66F4\u4F18\u7684\u6620\u5C04\u65B9\u6848\u3002</p><h2 id="_7-\u884C\u4E3A\u578B-\u72B6\u6001\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-\u884C\u4E3A\u578B-\u72B6\u6001\u6A21\u5F0F" aria-hidden="true">#</a> 7 \u884C\u4E3A\u578B-\u72B6\u6001\u6A21\u5F0F</h2><h3 id="_7-1-\u4E00\u53F0\u5496\u5561\u673A\u7684\u8BDE\u751F" tabindex="-1"><a class="header-anchor" href="#_7-1-\u4E00\u53F0\u5496\u5561\u673A\u7684\u8BDE\u751F" aria-hidden="true">#</a> 7.1 \u4E00\u53F0\u5496\u5561\u673A\u7684\u8BDE\u751F</h3><p>\u4F5C\u4E3A\u4E00\u4E2A\u5177\u5907\u5F3A\u5927\u62BD\u8C61\u601D\u7EF4\u80FD\u529B\u7684\u7A0B\u5E8F\u5458\uFF0C\u674E\u96F7\u6CA1\u6709\u8F9C\u8D1F\u81EA\u5DF1\u8FD9\u4E48\u591A\u5E74\u6765\u5B66\u8FC7\u7684\u73B0\u4EE3\u524D\u7AEF\u6846\u67B6\u3002\u4ED6\u654F\u9510\u5730\u611F\u77E5\u5230\uFF0C\u97E9\u6885\u6885\u6240\u8BF4\u7684\u8FD9\u4E9B\u4E0D\u540C\u7684&quot;\u9009\u62E9&quot;\u95F4\u7684\u5207\u6362\uFF0C\u672C\u8D28\u5C31\u662F\u72B6\u6001\u7684\u5207\u6362\u3002\u5728\u8FD9\u4E2A\u80FD\u505A\u56DB\u79CD\u5496\u5561\u7684\u5496\u5561\u673A\u4F53\u5185\uFF0C\u8574\u542B\u7740\u56DB\u79CD\u72B6\u6001\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- \u7F8E\u5F0F\u5496\u5561\u6001\uFF08american)\uFF1A\u53EA\u5410\u9ED1\u5496\u5561
- \u666E\u901A\u62FF\u94C1\u6001(latte)\uFF1A\u9ED1\u5496\u5561\u52A0\u70B9\u5976
- \u9999\u8349\u62FF\u94C1\u6001\uFF08vanillaLatte\uFF09\uFF1A\u9ED1\u5496\u5561\u52A0\u70B9\u5976\u518D\u52A0\u9999\u8349\u7CD6\u6D46
- \u6469\u5361\u5496\u5561\u6001(mocha)\uFF1A\u9ED1\u5496\u5561\u52A0\u70B9\u5976\u518D\u52A0\u70B9\u5DE7\u514B\u529B

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u563F\u563F\uFF0C\u8FD9\u4E48\u4E00\u68B3\u7406\uFF0C\u674E\u96F7\u7684\u601D\u8DEF\u4E00\u4E0B\u5B50\u6E05\u6670\u4E86\u8D77\u6765\u3002\u4F5C\u4E3A\u6B7B\u6027\u4E0D\u6539\u7684 if-else \u4FA0\uFF0C\u4ED6\u518D\u6B21\u4E09\u4E0B\u4E94\u9664\u4E8C\u5199\u51FA\u4E86\u4E00\u5957\u529F\u80FD\u5B8C\u5907\u7684\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class CoffeeMaker {
  constructor() {
    /**
     *\u8FD9\u91CC\u7565\u53BB\u5496\u5561\u673A\u4E2D\u4E0E\u5496\u5561\u72B6\u6001\u5207\u6362\u65E0\u5173\u7684\u4E00\u4E9B\u521D\u59CB\u5316\u903B\u8F91
    **/
    // \u521D\u59CB\u5316\u72B6\u6001\uFF0C\u6CA1\u6709\u5207\u6362\u4EFB\u4F55\u5496\u5561\u6A21\u5F0F
    this.state = &#39;init&#39;;
  }
  // \u5173\u6CE8\u5496\u5561\u673A\u72B6\u6001\u5207\u6362\u51FD\u6570
  changeState(state) {
    // \u8BB0\u5F55\u5F53\u524D\u72B6\u6001
    this.state = state;
    if(state === &#39;american&#39;) {
      // \u8FD9\u91CC\u7528 console \u4EE3\u6307\u5496\u5561\u5236\u4F5C\u6D41\u7A0B\u7684\u4E1A\u52A1\u903B\u8F91
      console.log(&#39;\u6211\u53EA\u5410\u9ED1\u5496\u5561&#39;);
    } else if(state === &#39;latte&#39;) {
      console.log(\`\u7ED9\u9ED1\u5496\u5561\u52A0\u70B9\u5976\`);
    } else if(state === &#39;vanillaLatte&#39;) {
      console.log(&#39;\u9ED1\u5496\u5561\u52A0\u70B9\u5976\u518D\u52A0\u9999\u8349\u7CD6\u6D46&#39;);
    } else if(state === &#39;mocha&#39;) {
      console.log(&#39;\u9ED1\u5496\u5561\u52A0\u70B9\u5976\u518D\u52A0\u70B9\u5DE7\u514B\u529B&#39;);
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u5B8C\u7F8E\u65E0\u7F3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const mk = new CoffeeMaker();
mk.changeState(&#39;latte&#39;); // \u8F93\u51FA &#39;\u7ED9\u9ED1\u5496\u5561\u52A0\u70B9\u5976&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u9274\u4E8E if-else \u4F7F\u4E0D\u5F97\uFF0C\u674E\u96F7\u8D76\u7D27\u7FFB\u51FA\u4E86\u4ED6\u5728\u7B56\u7565\u6A21\u5F0F\u4E2D\u5B66\u5230\u7684&quot;\u5355\u4E00\u804C\u8D23&quot;\u548C&quot;\u5F00\u653E\u5C01\u95ED&quot;\u539F\u5219\uFF0C\u6BD4\u732B\u753B\u864E\u5730\u6539\u9020\u8D77\u4E86\u81EA\u5DF1\u7684\u5496\u5561\u673A\uFF1A</p></blockquote><h3 id="_7-2-\u6539\u9020\u5496\u5561\u673A\u7684\u72B6\u6001\u5207\u6362\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_7-2-\u6539\u9020\u5496\u5561\u673A\u7684\u72B6\u6001\u5207\u6362\u673A\u5236" aria-hidden="true">#</a> 7.2 \u6539\u9020\u5496\u5561\u673A\u7684\u72B6\u6001\u5207\u6362\u673A\u5236</h3><p>1. \u804C\u8D23\u5206\u79BB</p><p>\u9996\u5148\uFF0C\u6620\u5165\u674E\u96F7\u773C\u5E18\u6700\u5927\u7684\u95EE\u9898\uFF0C\u5C31\u662F\u5496\u5561\u5236\u4F5C\u8FC7\u7A0B\u4E0D\u53EF\u590D\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>changeState(state) {
    // \u8BB0\u5F55\u5F53\u524D\u72B6\u6001
    this.state = state;
    if(state === &#39;american&#39;) {
      // \u8FD9\u91CC\u7528 console \u4EE3\u6307\u5496\u5561\u5236\u4F5C\u6D41\u7A0B\u7684\u4E1A\u52A1\u903B\u8F91
      console.log(&#39;\u6211\u53EA\u5410\u9ED1\u5496\u5561&#39;);
    } else if(state === &#39;latte&#39;) {
      console.log(\`\u7ED9\u9ED1\u5496\u5561\u52A0\u70B9\u5976\`);
    } else if(state === &#39;vanillaLatte&#39;) {
      console.log(&#39;\u9ED1\u5496\u5561\u52A0\u70B9\u5976\u518D\u52A0\u9999\u8349\u7CD6\u6D46&#39;);
    } else if(state === &#39;mocha&#39;) {
      console.log(&#39;\u9ED1\u5496\u5561\u52A0\u70B9\u5976\u518D\u52A0\u70B9\u5DE7\u514B\u529B&#39;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u674E\u96F7\u53D1\u73B0\uFF0C\u8FD9\u4E2A changeState \u51FD\u6570\uFF0C\u5B83\u597D\u597D\u7BA1\u597D\u81EA\u5DF1\u7684\u4E8B\uFF08\u72B6\u6001\u5207\u6362\uFF09\u4E0D\u884C\u5417\uFF1F\u600E\u4E48\u8FDE\u505A\u5496\u5561\u7684\u8FC7\u7A0B\u4E5F\u5199\u5728\u8FD9\u91CC\u9762\uFF1F\u8FD9\u4E0D\u5408\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class CoffeeMaker {
  constructor() {
    /**
    \u8FD9\u91CC\u7565\u53BB\u5496\u5561\u673A\u4E2D\u4E0E\u5496\u5561\u72B6\u6001\u5207\u6362\u65E0\u5173\u7684\u4E00\u4E9B\u521D\u59CB\u5316\u903B\u8F91
  **/
    // \u521D\u59CB\u5316\u72B6\u6001\uFF0C\u6CA1\u6709\u5207\u6362\u4EFB\u4F55\u5496\u5561\u6A21\u5F0F
    this.state = &#39;init&#39;;
  }
  changeState(state) {
    // \u8BB0\u5F55\u5F53\u524D\u72B6\u6001
    this.state = state;
    if(state === &#39;american&#39;) {
      // \u8FD9\u91CC\u7528 console \u4EE3\u6307\u5496\u5561\u5236\u4F5C\u6D41\u7A0B\u7684\u4E1A\u52A1\u903B\u8F91
      this.americanProcess();
    } else if(state === &#39;latte&#39;) {
      this.latteProcress();
    } else if(state === &#39;vanillaLatte&#39;) {
      this.vanillaLatteProcress();
    } else if(state === &#39;mocha&#39;) {
      this.mochaProcress();
    }
  }

  americanProcess() {
    console.log(&#39;\u6211\u53EA\u5410\u9ED1\u5496\u5561&#39;);
  }

  latteProcress() {
    this.americanProcess();
    console.log(&#39;\u52A0\u70B9\u5976&#39;);
  }

  vanillaLatteProcress() {
    this.latteProcress();
    console.log(&#39;\u518D\u52A0\u9999\u8349\u7CD6\u6D46&#39;);
  }

  mochaProcress() {
    this.latteProcress();
    console.log(&#39;\u518D\u52A0\u5DE7\u514B\u529B&#39;);
  }
}

const mk = new CoffeeMaker();
mk.changeState(&#39;latte&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u7B26\u5408\u9884\u671F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6211\u53EA\u5410\u9ED1\u5496\u5561
\u52A0\u70B9\u5976

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-\u5F00\u653E\u5C01\u95ED" tabindex="-1"><a class="header-anchor" href="#_7-3-\u5F00\u653E\u5C01\u95ED" aria-hidden="true">#</a> 7.3 \u5F00\u653E\u5C01\u95ED</h3><p>\u590D\u7528\u7684\u95EE\u9898\u89E3\u51B3\u4E86\uFF0Cif-else \u5374\u4ECD\u7136\u6D3B\u5F97\u597D\u597D\u7684\u3002</p><p>\u73B0\u5728\u54B1\u4EEC\u5047\u5982\u8981\u589E\u52A0&quot;\u6C14\u6CE1\u7F8E\u5F0F&quot;\u8FD9\u4E2A\u5496\u5561\u54C1\u79CD\uFF0C\u5C31\u4E0D\u5F97\u4E0D\u53BB\u4FEE\u6539 changeState \u7684\u51FD\u6570\u903B\u8F91\uFF0C\u8FD9\u8FDD\u53CD\u4E86\u5F00\u653E\u5C01\u95ED\u7684\u539F\u5219\u3002</p><p>\u540C\u65F6\uFF0C\u4E00\u4E2A\u51FD\u6570\u91CC\u6536\u655B\u8FD9\u4E48\u591A\u5224\u65AD\uFF0C\u4E5F\u7740\u5B9E\u4E0D\u591F\u4F53\u9762\u3002\u54B1\u4EEC\u73B0\u5728\u8981\u50CF\u7B56\u7565\u6A21\u5F0F\u4E00\u6837\uFF0C\u60F3\u529E\u6CD5\u628A\u5496\u5561\u673A\u72B6\u6001\u548C\u5496\u5561\u5236\u4F5C\u5DE5\u5E8F\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\uFF08\u4E5F\u5C31\u662F\u54B1\u4EEC\u4E0A\u8282\u8C08\u5230\u7684\u5206\u53D1\u8FC7\u7A0B\uFF09\u7528\u4E00\u4E2A\u66F4\u4F18\u96C5\u5730\u65B9\u5F0F\u505A\u6389\u3002\u5982\u679C\u4F60\u7B56\u7565\u6A21\u5F0F\u638C\u63E1\u5F97\u8DB3\u591F\u597D\uFF0C\u4F60\u4F1A\u7B2C\u4E00\u65F6\u95F4\u53CD\u6620\u51FA\u5BF9\u8C61\u6620\u5C04\u7684\u65B9\u6848\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const stateToProcessor = {
  american() {
    console.log(&#39;\u6211\u53EA\u5410\u9ED1\u5496\u5561&#39;);
  },
  latte() {
    this.american();
    console.log(&#39;\u52A0\u70B9\u5976&#39;);
  },
  vanillaLatte() {
    this.latte();
    console.log(&#39;\u518D\u52A0\u9999\u8349\u7CD6\u6D46&#39;);
  },
  mocha() {
    this.latte();
    console.log(&#39;\u518D\u52A0\u5DE7\u514B\u529B&#39;);
  }
}

class CoffeeMaker {
  constructor() {
    /**
    \u8FD9\u91CC\u7565\u53BB\u5496\u5561\u673A\u4E2D\u4E0E\u5496\u5561\u72B6\u6001\u5207\u6362\u65E0\u5173\u7684\u4E00\u4E9B\u521D\u59CB\u5316\u903B\u8F91
  **/
    // \u521D\u59CB\u5316\u72B6\u6001\uFF0C\u6CA1\u6709\u5207\u6362\u4EFB\u4F55\u5496\u5561\u6A21\u5F0F
    this.state = &#39;init&#39;;
  }

  // \u5173\u6CE8\u5496\u5561\u673A\u72B6\u6001\u5207\u6362\u51FD\u6570
  changeState(state) {
    // \u8BB0\u5F55\u5F53\u524D\u72B6\u6001
    this.state = state;
    // \u82E5\u72B6\u6001\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE
    if(!stateToProcessor[state]) {
      return ;
    }
    stateToProcessor[state]();
  }
}

const mk = new CoffeeMaker();
mk.changeState(&#39;latte&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u7B26\u5408\u9884\u671F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6211\u53EA\u5410\u9ED1\u5496\u5561
\u52A0\u70B9\u5976

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u8FD9\u4E48\u505A\u65F6\uFF0C\u5176\u5B9E\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u4E00\u4E2A js \u7248\u672C\u7684\u72B6\u6001\u6A21\u5F0F\u3002</p><p>\u4F46\u8FD9\u91CC\u6709\u4E00\u70B9\u5927\u5BB6\u9700\u8981\u5F15\u8D77\u6CE8\u610F\uFF1A\u8FD9\u79CD\u65B9\u6CD5\u4EC5\u4EC5\u662F\u770B\u4E0A\u53BB\u5B8C\u7F8E\u65E0\u7F3A\uFF0C\u5176\u4E2D\u5374\u6697\u542B\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u9690\u60A3------stateToProcessor \u91CC\u7684\u5DE5\u5E8F\u51FD\u6570\uFF0C\u611F\u77E5\u4E0D\u5230\u5496\u5561\u673A\u7684\u5185\u90E8\u72B6\u51B5\u3002</p><h3 id="_7-4-\u8FDB\u4E00\u6B65\u6539\u9020" tabindex="-1"><a class="header-anchor" href="#_7-4-\u8FDB\u4E00\u6B65\u6539\u9020" aria-hidden="true">#</a> 7.4 \u8FDB\u4E00\u6B65\u6539\u9020</h3><p>\u6309\u7167\u6211\u4EEC\u8FD9\u4E00\u901A\u63CF\u8FF0\uFF0C\u5F53\u52A1\u4E4B\u6025\u662F\u8981\u628A\u5496\u5561\u673A\u548C\u5B83\u7684\u72B6\u6001\u5904\u7406\u51FD\u6570\u5EFA\u7ACB\u5173\u8054\u3002</p><p>\u5982\u679C\u4F60\u8BFB\u8FC7\u4E00\u4E9B\u65E9\u671F\u7684\u8BBE\u8BA1\u6A21\u5F0F\u6559\u5B66\u8D44\u6599\uFF0C\u6709\u4E00\u79CD\u601D\u8DEF\u662F\u5C06\u6BCF\u4E00\u4E2A\u72B6\u6001\u6240\u5BF9\u5E94\u7684\u7684\u4E00\u4E9B\u884C\u4E3A\u62BD\u8C61\u6210\u7C7B\uFF0C\u7136\u540E\u901A\u8FC7\u4F20\u9012 this \u7684\u65B9\u5F0F\u6765\u5173\u8054\u72B6\u6001\u548C\u72B6\u6001\u4E3B\u4F53\u3002</p><p>\u8FD9\u79CD\u601D\u8DEF\u4E5F\u53EF\u4EE5\uFF0C\u4E0D\u8FC7\u5B83\u4E00\u822C\u8FD8\u9700\u8981\u4F60\u5B9E\u73B0\u62BD\u8C61\u5DE5\u5382\uFF0C\u6BD4\u8F83\u9EBB\u70E6\u3002\u5B9E\u9645\u4E1A\u52A1\u4E2D\u8FD9\u79CD\u505A\u6CD5\u6781\u4E3A\u5C11\u89C1\u3002\u6211\u8FD9\u91CC\u8981\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u7684\u662F\u4E00\u79CD\u66F4\u65B9\u4FBF\u4E5F\u66F4\u5E38\u7528\u7684\u89E3\u51B3\u65B9\u6848------\u975E\u5E38\u7B80\u5355\uFF0C\u628A\u72B6\u6001-\u884C\u4E3A\u6620\u5C04\u5BF9\u8C61\u4F5C\u4E3A\u4E3B\u4F53\u7C7B\u5BF9\u5E94\u5B9E\u4F8B\u7684\u4E00\u4E2A\u5C5E\u6027\u6DFB\u52A0\u8FDB\u53BB\u5C31\u884C\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class CoffeeMaker {
  constructor() {
    /**
     *\u8FD9\u91CC\u7565\u53BB\u5496\u5561\u673A\u4E2D\u4E0E\u5496\u5561\u72B6\u6001\u5207\u6362\u65E0\u5173\u7684\u4E00\u4E9B\u521D\u59CB\u5316\u903B\u8F91
    **/
    // \u521D\u59CB\u5316\u72B6\u6001\uFF0C\u6CA1\u6709\u5207\u6362\u4EFB\u4F55\u5496\u5561\u6A21\u5F0F
    this.state = &#39;init&#39;;
    // \u521D\u59CB\u5316\u725B\u5976\u7684\u5B58\u50A8\u91CF
    this.leftMilk = &#39;500ml&#39;;
  }
  stateToProcessor = {
    that: this,
    american() {
      // \u5C1D\u8BD5\u5728\u884C\u4E3A\u51FD\u6570\u91CC\u62FF\u5230\u5496\u5561\u673A\u5B9E\u4F8B\u7684\u4FE1\u606F\u5E76\u8F93\u51FA
      console.log(&#39;\u5496\u5561\u673A\u73B0\u5728\u7684\u725B\u5976\u5B58\u50A8\u91CF\u662F:&#39;, this.that.leftMilk)
      console.log(&#39;\u6211\u53EA\u5410\u9ED1\u5496\u5561&#39;);
    },
    latte() {
      this.american()
      console.log(&#39;\u52A0\u70B9\u5976&#39;);
    },
    vanillaLatte() {
      this.latte();
      console.log(&#39;\u518D\u52A0\u9999\u8349\u7CD6\u6D46&#39;);
    },
    mocha() {
      this.latte();
      console.log(&#39;\u518D\u52A0\u5DE7\u514B\u529B&#39;);
    }
  }

  // \u5173\u6CE8\u5496\u5561\u673A\u72B6\u6001\u5207\u6362\u51FD\u6570
  changeState(state) {
    this.state = state;
    if (!this.stateToProcessor[state]) {
      return;
    }
    this.stateToProcessor[state]();
  }
}

const mk = new CoffeeMaker();
mk.changeState(&#39;latte&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5496\u5561\u673A\u73B0\u5728\u7684\u725B\u5976\u5B58\u50A8\u91CF\u662F: 500ml
\u6211\u53EA\u5410\u9ED1\u5496\u5561
\u52A0\u70B9\u5976

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u6B64\u4E00\u6765\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 stateToProcessor \u8F7B\u677E\u62FF\u5230\u5496\u5561\u673A\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8FDB\u800C\u611F\u77E5\u5496\u5561\u673A\u8FD9\u4E2A\u4E3B\u4F53\u4E86\u3002</p><h3 id="_7-5-\u72B6\u6001\u6A21\u5F0F\u590D\u76D8" tabindex="-1"><a class="header-anchor" href="#_7-5-\u72B6\u6001\u6A21\u5F0F\u590D\u76D8" aria-hidden="true">#</a> 7.5 \u72B6\u6001\u6A21\u5F0F\u590D\u76D8</h3><p>\u548C\u7B56\u7565\u6A21\u5F0F\u4E00\u6837\uFF0C\u54B1\u4EEC\u4ECD\u7136\u662F\u6572\u5B8C\u4EE3\u7801\u4E4B\u540E\uFF0C\u4E00\u8D77\u6765\u590D\u76D8\u4E00\u4E0B\u72B6\u6001\u6A21\u5F0F\u7684\u5B9A\u4E49\uFF1A</p><blockquote><p>\u72B6\u6001\u6A21\u5F0F(State Pattern) \uFF1A\u5141\u8BB8\u4E00\u4E2A\u5BF9\u8C61\u5728\u5176\u5185\u90E8\u72B6\u6001\u6539\u53D8\u65F6\u6539\u53D8\u5B83\u7684\u884C\u4E3A\uFF0C\u5BF9\u8C61\u770B\u8D77\u6765\u4F3C\u4E4E\u4FEE\u6539\u4E86\u5B83\u7684\u7C7B\u3002</p></blockquote><p>\u8FD9\u4E2A\u5B9A\u4E49\u6BD4\u8F83\u7C97\u7CD9\uFF0C\u53EF\u80FD\u4F60\u8BFB\u5B8C\u4ECD\u7136 get \u4E0D\u5230\u5B83\u60F3\u8BA9\u4F60\u5E72\u5565\u3002\u8FD9\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u5E94\u8BE5\u628A\u76EE\u5149\u8F6C\u79FB\u5230\u5B83\u89E3\u51B3\u7684\u95EE\u9898\u4E0A\u6765\uFF1A</p><blockquote><p>\u72B6\u6001\u6A21\u5F0F\u4E3B\u8981\u89E3\u51B3\u7684\u662F\u5F53\u63A7\u5236\u4E00\u4E2A\u5BF9\u8C61\u72B6\u6001\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u4E8E\u590D\u6742\u65F6\u7684\u60C5\u51B5\u3002\u628A\u72B6\u6001\u7684\u5224\u65AD\u903B\u8F91\u8F6C\u79FB\u5230\u8868\u793A\u4E0D\u540C\u72B6\u6001\u7684\u4E00\u7CFB\u5217\u7C7B\u4E2D\uFF0C\u53EF\u4EE5\u628A\u590D\u6742\u7684\u5224\u65AD\u903B\u8F91\u7B80\u5316\u3002</p></blockquote><p>\u4ED4\u7EC6\u56DE\u5FC6\u4E00\u4E0B\u6211\u4EEC\u8FD9\u8282\u505A\u7684\u4E8B\u60C5\uFF0C\u4E5F\u786E\u5B9E\u5C31\u662F\u8FD9\u4E48\u56DE\u4E8B\u513F\u3002</p><blockquote><p>\u552F\u4E00\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5B9A\u4E49\u91CC\u5F3A\u8C03\u4E86&quot;\u7C7B&quot;\u7684\u6982\u5FF5\u3002\u4F46\u6211\u4EEC\u7684\u793A\u4F8B\u4E2D\uFF0C\u5305\u62EC\u5927\u5BB6\u4ECA\u540E\u7684\u5B9E\u8DF5\u4E2D\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u7684\u72B6\u6001\u5982\u679C\u590D\u6742\u5230\u4E86\u4F60\u4E0D\u5F97\u4E0D\u7ED9\u5B83\u7684\u6BCF N \u79CD\u72B6\u6001\u5212\u5206\u4E3A\u4E00\u7C7B\u3001\u4E00\u53E3\u6C14\u5212\u5206\u5F88\u591A\u7C7B\u8FD9\u79CD\u7A0B\u5EA6\uFF0C\u6211\u66F4\u503E\u5411\u4E8E\u4F60\u53BB\u53CD\u601D\u4E00\u4E2A\u8FD9\u4E2A\u5BF9\u8C61\u662F\u4E0D\u662F\u505A\u592A\u591A\u4E8B\u60C5\u4E86\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u5728\u5927\u591A\u6570\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u7684\u884C\u4E3A\u5212\u5206\uFF0C\u90FD\u662F\u53EF\u4EE5\u50CF\u672C\u8282\u4E00\u6837\uFF0C\u63A7\u5236\u5728&quot;\u51FD\u6570&quot;\u8FD9\u4E2A\u7C92\u5EA6\u7684\u3002</p></blockquote><h2 id="_8-\u884C\u4E3A\u578B-\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_8-\u884C\u4E3A\u578B-\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 8 \u884C\u4E3A\u578B-\u89C2\u5BDF\u8005\u6A21\u5F0F</h2><blockquote><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\u5B9A\u4E49\u4E86\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u8BA9\u591A\u4E2A\u89C2\u5BDF\u8005\u5BF9\u8C61\u540C\u65F6\u76D1\u542C\u67D0\u4E00\u4E2A\u76EE\u6807\u5BF9\u8C61\uFF0C\u5F53\u8FD9\u4E2A\u76EE\u6807\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u901A\u77E5\u6240\u6709\u89C2\u5BDF\u8005\u5BF9\u8C61\uFF0C\u4F7F\u5B83\u4EEC\u80FD\u591F\u81EA\u52A8\u66F4\u65B0\u3002 ------ Graphic Design Patterns</p></blockquote><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF0C\u662F\u6240\u6709 JavaScript \u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u4F7F\u7528\u9891\u7387\u6700\u9AD8\uFF0C\u9762\u8BD5\u9891\u7387\u4E5F\u6700\u9AD8\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u6240\u4EE5\u8BF4\u5B83\u5341\u5206\u91CD\u8981------\u5982\u679C\u6211\u662F\u9762\u8BD5\u5B98\uFF0C\u8003\u8651\u5230\u9762\u8BD5\u65F6\u95F4\u6709\u9650\u3001\u8BBE\u8BA1\u6A21\u5F0F\u8FD9\u5757\u4E0D\u80FD\u591A\u95EE\uFF0C\u6211\u53EF\u80FD\u5728\u8003\u67E5\u4F60\u8BBE\u8BA1\u6A21\u5F0F\u7684\u65F6\u5019\u53EA\u4F1A\u95EE\u89C2\u5BDF\u8005\u6A21\u5F0F\u8FD9\u4E00\u4E2A\u6A21\u5F0F\u3002\u8BE5\u6A21\u5F0F\u7684\u6743\u91CD\u6781\u9AD8</p><p>\u91CD\u70B9\u4E0D\u4E00\u5B9A\u662F\u96BE\u70B9\u3002\u89C2\u5BDF\u8005\u6A21\u5F0F\u5341\u5206\u91CD\u8981\uFF0C\u4F46\u5B83\u5E76\u4E0D\u62BD\u8C61\uFF0C\u7406\u89E3\u96BE\u5EA6\u4E0D\u5927\u3002\u8FD9\u79CD\u6A21\u5F0F\u4E0D\u4EC5\u5728\u4E1A\u52A1\u5F00\u53D1\u4E2D\u904D\u5730\u5F00\u82B1\uFF0C\u5728\u65E5\u5E38\u751F\u6D3B\u4E2D\u4E5F\u662F\u975E\u5E38\u5E38\u89C1\u7684\u3002\u4E3A\u4E86\u5E2E\u52A9\u5927\u5BB6\u5F62\u6210\u521D\u6B65\u7684\u7406\u89E3\uFF0C\u5728\u8FDB\u5165\u4EE3\u7801\u4E16\u754C\u4E4B\u524D\uFF0C\u6211\u4EEC\u7167\u4F8B\u6765\u770B\u4E00\u6BB5\u65E5\u5E38\uFF1A</p><h3 id="_8-1-\u751F\u6D3B\u4E2D\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_8-1-\u751F\u6D3B\u4E2D\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 8.1 \u751F\u6D3B\u4E2D\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F</h3><p>\u5468\u4E00\u521A\u4E0A\u73ED\uFF0C\u524D\u7AEF\u5F00\u53D1\u674E\u96F7\u5C31\u88AB\u4EA7\u54C1\u7ECF\u7406\u97E9\u6885\u6885\u62C9\u8FDB\u4E86\u4E00\u4E2A\u9489\u9489\u7FA4------&quot;\u5458\u5DE5\u7BA1\u7406\u7CFB\u7EDF\u9700\u6C42\u7B2C99\u6B21\u53D8\u66F4\u7FA4&quot;\u3002\u8FD9\u4E2A\u7FA4\u91CC\u4E0D\u4EC5\u6709\u674E\u96F7\uFF0C\u8FD8\u6709\u540E\u7AEF\u5F00\u53D1 A\uFF0C\u6D4B\u8BD5\u540C\u5B66 B\u3002\u4E09\u4F4D\u6280\u672F\u540C\u5B66\u770B\u5230\u8FD9\u7B80\u5355\u76F4\u767D\u7684\u7FA4\u540D\u4FBF\u7ACB\u523B\u505A\u597D\u4E86\u63A5\u53D7\u53D8\u66F4\u7684\u51C6\u5907\u3001\u6253\u7B97\u64B8\u8D77\u8896\u5B50\u5F00\u59CB\u5E72\u4E86\u3002\u6B64\u65F6\u97E9\u6885\u6885\u5374\u8BF4\uFF1A&quot;\u522B\u6025\uFF0C\u8FD9\u4E2A\u9700\u6C42\u6709\u95EE\u9898\uFF0C\u6211\u9700\u8981\u548C\u4E1A\u52A1\u65B9\u518D\u786E\u8BA4\u4E00\u4E0B\uFF0C\u5927\u5BB6\u5148\u5404\u5FD9\u5404\u7684\u5427&quot;\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4E09\u4F4D\u6280\u672F\u540C\u5B66\u4E0D\u5FC5\u7ACB\u523B\u6295\u5165\u5DE5\u4F5C\uFF0C\u4F46\u4ED6\u4EEC\u90FD\u5DF2\u7ECF\u505A\u597D\u4E86\u672C\u5468\u9700\u8981\u505A\u4E00\u4E2A\u65B0\u9700\u6C42\u7684\u51C6\u5907\uFF0C\u65F6\u523B\u7B49\u5F85\u7740\u4EA7\u54C1\u7ECF\u7406\u7684\u53F7\u53EC\u3002</p><p>\u4E00\u5929\u8FC7\u53BB\u4E86\uFF0C\u4E24\u5929\u8FC7\u53BB\u4E86\u3002\u5468\u4E09\u4E0B\u5348\uFF0C\u97E9\u6885\u6885\u7EC8\u4E8E\u548C\u4E1A\u52A1\u65B9\u786E\u8BA4\u4E86\u6240\u6709\u7684\u9700\u6C42\u7EC6\u8282\uFF0C\u4E8E\u662F\u5728&quot;\u5458\u5DE5\u7BA1\u7406\u7CFB\u7EDF\u9700\u6C42\u7B2C99\u6B21\u53D8\u66F4\u7FA4&quot;\u91CC\u5927\u543C\u4E00\u58F0\uFF1A&quot;\u9700\u6C42\u6587\u6863\u6765\u4E86\uFF01&quot;\uFF0C\u968F\u540E\u7529\u51FA\u4E86&quot;\u9700\u6C42\u6587\u6863.zip&quot;\u6587\u4EF6\uFF0C\u540C\u65F6@\u6240\u6709\u4EBA\u3002\u4E09\u4F4D\u6280\u672F\u540C\u5B66\u542C\u5230\u719F\u6089\u7684&quot;\u6709\u4EBA@\u6211&quot;\u63D0\u793A\u97F3\uFF0C\u7ACB\u523B\u70B9\u5F00\u7FA4\u8FDB\u884C\u7FA4\u6D88\u606F\u548C\u7FA4\u6587\u4EF6\u67E5\u6536\uFF0C\u968F\u540E\u6839\u636E\u7FA4\u6D88\u606F\u548C\u7FA4\u6587\u4EF6\u63D0\u4F9B\u7684\u9700\u6C42\u4FE1\u606F\uFF0C\u6295\u5165\u5230\u4E86\u5404\u81EA\u7684\u5F00\u53D1\u91CC\u3002\u4E0A\u8FF0\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5C31\u662F\u4E00\u4E2A\u5178\u578B\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F\u3002</p><p>\u91CD\u70B9\u89D2\u8272\u5BF9\u53F7\u5165\u5EA7</p><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\u6709\u4E00\u4E2A&quot;\u522B\u540D&quot;\uFF0C\u53EB<code>\u53D1\u5E03 - \u8BA2\u9605\u6A21\u5F0F</code>\uFF08\u4E4B\u6240\u4EE5\u522B\u540D\u52A0\u4E86\u5F15\u53F7\uFF0C\u662F\u56E0\u4E3A\u4E24\u8005\u4E4B\u95F4\u5B58\u5728\u7740\u7EC6\u5FAE\u7684\u5DEE\u5F02\uFF0C\u4E0B\u4E2A\u5C0F\u8282\u91CC\u6211\u4EEC\u4F1A\u8BB2\u5230\u8FD9\u70B9\uFF09\u3002\u8FD9\u4E2A\u522B\u540D\u975E\u5E38\u5F62\u8C61\u5730\u8BE0\u91CA\u4E86\u89C2\u5BDF\u8005\u6A21\u5F0F\u91CC\u4E24\u4E2A\u6838\u5FC3\u7684\u89D2\u8272\u8981\u7D20------&quot;\u53D1\u5E03\u8005&quot;\u4E0E&quot;\u8BA2\u9605\u8005&quot;\u3002</p><p>\u5728\u4E0A\u8FF0\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u6C42\u6587\u6863\uFF08\u76EE\u6807\u5BF9\u8C61\uFF09\u7684\u53D1\u5E03\u8005\u53EA\u6709\u4E00\u4E2A------\u4EA7\u54C1\u7ECF\u7406\u97E9\u6885\u6885\u3002\u800C\u9700\u6C42\u4FE1\u606F\u7684\u63A5\u53D7\u8005\u5374\u6709\u591A\u4E2A------\u524D\u7AEF\u3001\u540E\u7AEF\u3001\u6D4B\u8BD5\u540C\u5B66\uFF0C\u8FD9\u4E9B\u540C\u5B66\u7684\u5171\u6027\u5C31\u662F\u4ED6\u4EEC\u9700\u8981\u6839\u636E\u9700\u6C42\u4FE1\u606F\u5F00\u5C55\u81EA\u5DF1\u540E\u7EED\u7684\u5DE5\u4F5C\u3001\u56E0\u6B64\u90FD\u975E\u5E38\u5173\u5FC3\u8FD9\u4E2A\u9700\u6C42\u4FE1\u606F\uFF0C\u4E8E\u662F\u4E0D\u5F97\u4E0D\u65F6\u523B\u5173\u6CE8\u7740\u8FD9\u4E2A\u7FA4\u7684\u7FA4\u6D88\u606F\u63D0\u9192\uFF0C\u4ED6\u4EEC\u662F\u5B9E\u6253\u5B9E\u7684\u8BA2\u9605\u8005\uFF0C\u5373\u89C2\u5BDF\u8005\u5BF9\u8C61\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u518D\u56DE\u8FC7\u5934\u6765\u770B\u4E00\u904D\u5F00\u5934\u6211\u4EEC\u63D0\u5230\u7684\u7565\u663E\u62BD\u8C61\u7684\u5B9A\u4E49\uFF1A</p><blockquote><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\u5B9A\u4E49\u4E86\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u8BA9\u591A\u4E2A\u89C2\u5BDF\u8005\u5BF9\u8C61\u540C\u65F6\u76D1\u542C\u67D0\u4E00\u4E2A\u76EE\u6807\u5BF9\u8C61\uFF0C\u5F53\u8FD9\u4E2A\u76EE\u6807\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u901A\u77E5\u6240\u6709\u89C2\u5BDF\u8005\u5BF9\u8C61\uFF0C\u4F7F\u5B83\u4EEC\u80FD\u591F\u81EA\u52A8\u66F4\u65B0\u3002</p></blockquote><p>\u5728\u6211\u4EEC\u4E0A\u6587\u8FD9\u4E2A\u9489\u9489\u7FA4\u91CC\uFF0C\u4E00\u4E2A\u9700\u6C42\u4FE1\u606F\u5BF9\u8C61\u5BF9\u5E94\u4E86\u591A\u4E2A\u89C2\u5BDF\u8005\uFF08\u6280\u672F\u540C\u5B66\uFF09\uFF0C\u5F53\u9700\u6C42\u4FE1\u606F\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF08\u4ECE\u65E0\u5230\u6709\uFF09\u65F6\uFF0C\u4EA7\u54C1\u7ECF\u7406\u901A\u77E5\u4E86\u7FA4\u91CC\u7684\u6240\u6709\u540C\u5B66\uFF0C\u4EE5\u4FBF\u8FD9\u4E9B\u540C\u5B66\u63A5\u6536\u4FE1\u606F\u8FDB\u800C\u5F00\u5C55\u5DE5\u4F5C\uFF1A\u89D2\u8272\u5212\u5206 --&gt; \u72B6\u6001\u53D8\u5316 --&gt; \u53D1\u5E03\u8005\u901A\u77E5\u5230\u8BA2\u9605\u8005\uFF0C\u8FD9\u5C31\u662F\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684&quot;\u5957\u8DEF&quot;\u3002</p><h3 id="_8-2-\u5728\u5B9E\u8DF5\u4E2D\u7406\u89E3\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_8-2-\u5728\u5B9E\u8DF5\u4E2D\u7406\u89E3\u5B9A\u4E49" aria-hidden="true">#</a> 8.2 \u5728\u5B9E\u8DF5\u4E2D\u7406\u89E3\u5B9A\u4E49</h3><blockquote><p>\u7ED3\u5408\u6211\u4EEC\u4E0A\u9762\u7684\u5206\u6790\uFF0C\u73B0\u5728\u5927\u5BB6\u77E5\u9053\uFF0C\u5728\u89C2\u5BDF\u8005\u6A21\u5F0F\u91CC\uFF0C\u81F3\u5C11\u5E94\u8BE5\u6709\u4E24\u4E2A\u5173\u952E\u89D2\u8272\u662F\u4E00\u5B9A\u8981\u51FA\u73B0\u7684------\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u3002\u7528\u9762\u5411\u5BF9\u8C61\u7684\u65B9\u5F0F\u8868\u8FBE\u7684\u8BDD\uFF0C\u90A3\u5C31\u662F\u8981\u6709\u4E24\u4E2A\u7C7B\u3002</p></blockquote><p>\u9996\u5148\u6211\u4EEC\u6765\u770B\u8FD9\u4E2A\u4EE3\u8868\u53D1\u5E03\u8005\u7684\u7C7B\uFF0C\u6211\u4EEC\u7ED9\u5B83\u8D77\u540D\u53EB<code>Publisher</code>\u3002\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u5177\u5907\u54EA\u4E9B&quot;\u57FA\u672C\u6280\u80FD&quot;\u5462\uFF1F\u5927\u5BB6\u56DE\u5FC6\u4E00\u4E0B\u4E0A\u6587\u4E2D\u7684\u97E9\u6885\u6885\uFF0C\u97E9\u6885\u6885\u7684\u57FA\u672C\u64CD\u4F5C\u662F\u4EC0\u4E48\uFF1F\u9996\u5148\u662F\u62C9\u7FA4\uFF08\u589E\u52A0\u8BA2\u9605\u8005\uFF09\uFF0C\u7136\u540E\u662F<code>@</code>\u6240\u6709\u4EBA\uFF08\u901A\u77E5\u8BA2\u9605\u8005\uFF09\uFF0C\u8FD9\u4FE9\u662F\u6700\u660E\u663E\u7684\u4E86\u3002\u6B64\u5916\u4F5C\u4E3A\u7FA4\u4E3B&amp;\u4EA7\u54C1\u7ECF\u7406\uFF0C\u97E9\u6885\u6885\u8FD8\u5177\u6709\u8E22\u8D70\u9879\u76EE\u7EC4\u6210\u5458\uFF08\u79FB\u9664\u8BA2\u9605\u8005\uFF09\u7684\u80FD\u529B\u3002OK\uFF0C\u4EA7\u54C1\u7ECF\u7406\u53D1\u5E03\u8005\u7C7B\u7684\u4E09\u4E2A\u57FA\u672C\u80FD\u529B\u9F50\u4E86\uFF0C\u4E0B\u9762\u6211\u4EEC\u5F00\u59CB\u5199\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u53D1\u5E03\u8005\u7C7B
class Publisher {
  constructor() {
    this.observers = []
    console.log(&#39;Publisher created&#39;)
  }
  // \u589E\u52A0\u8BA2\u9605\u8005
  add(observer) {
    console.log(&#39;Publisher.add invoked&#39;)
    this.observers.push(observer)
  }
  // \u79FB\u9664\u8BA2\u9605\u8005
  remove(observer) {
    console.log(&#39;Publisher.remove invoked&#39;)
    this.observers.forEach((item, i) =&gt; {
      if (item === observer) {
        this.observers.splice(i, 1)
      }
    })
  }
  // \u901A\u77E5\u6240\u6709\u8BA2\u9605\u8005
  notify() {
    console.log(&#39;Publisher.notify invoked&#39;)
    this.observers.forEach((observer) =&gt; {
      observer.update(this)
    })
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok\uFF0C\u641E\u5B9A\u4E86\u53D1\u5E03\u8005\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u60F3\u60F3\u8BA2\u9605\u8005\u80FD\u5E72\u5565------\u5176\u5B9E\u8BA2\u9605\u8005\u7684\u80FD\u529B\u975E\u5E38\u7B80\u5355\uFF0C\u4F5C\u4E3A\u88AB\u52A8\u7684\u4E00\u65B9\uFF0C\u5B83\u7684\u884C\u4E3A\u53EA\u6709\u4E24\u4E2A------\u88AB\u901A\u77E5\u3001\u53BB\u6267\u884C\uFF08\u672C\u8D28\u4E0A\u662F\u63A5\u53D7\u53D1\u5E03\u8005\u7684\u8C03\u7528\uFF0C\u8FD9\u6B65\u6211\u4EEC\u5728<code>Publisher</code>\u4E2D\u5DF2\u7ECF\u505A\u6389\u4E86\uFF09\u3002\u65E2\u7136\u6211\u4EEC\u5728Publisher\u4E2D\u505A\u7684\u662F\u65B9\u6CD5\u8C03\u7528\uFF0C\u90A3\u4E48\u6211\u4EEC\u5728\u8BA2\u9605\u8005\u7C7B\u91CC\u8981\u505A\u7684\u5C31\u662F\u65B9\u6CD5\u7684\u5B9A\u4E49\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u8BA2\u9605\u8005\u7C7B
class Observer {
    constructor() {
        console.log(&#39;Observer created&#39;)
    }
    update() {
        console.log(&#39;Observer.update invoked&#39;)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\uFF0C\u6211\u4EEC\u5C31\u5B8C\u6210\u4E86\u6700\u57FA\u672C\u7684\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u7C7B\u7684\u8BBE\u8BA1\u548C\u7F16\u5199\u3002\u5728\u5B9E\u9645\u7684\u4E1A\u52A1\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u6240\u6709\u7684\u5B9A\u5236\u5316\u7684\u53D1\u5E03\u8005/\u8BA2\u9605\u8005\u903B\u8F91\u90FD\u53EF\u4EE5\u57FA\u4E8E\u8FD9\u4E24\u4E2A\u57FA\u672C\u7C7B\u6765\u6539\u5199\u3002\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u62D3\u5C55\u53D1\u5E03\u8005\u7C7B\uFF0C\u6765\u4F7F\u6240\u6709\u7684\u8BA2\u9605\u8005\u6765\u76D1\u542C\u67D0\u4E2A\u7279\u5B9A\u72B6\u6001\u7684\u53D8\u5316\u3002</p><p>\u4ECD\u7136\u4EE5\u5F00\u7BC7\u7684\u4F8B\u5B50\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u8BA9\u5F00\u53D1\u8005\u4EEC\u6765\u76D1\u542C\u9700\u6C42\u6587\u6863\uFF08prd\uFF09\u7684\u53D8\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u4E00\u4E2A\u5177\u4F53\u7684\u9700\u6C42\u6587\u6863\uFF08prd\uFF09\u53D1\u5E03\u7C7B
class PrdPublisher extends Publisher {
    constructor() {
        super()
        // \u521D\u59CB\u5316\u9700\u6C42\u6587\u6863
        this.prdState = null
        // \u97E9\u6885\u6885\u8FD8\u6CA1\u6709\u62C9\u7FA4\uFF0C\u5F00\u53D1\u7FA4\u76EE\u524D\u4E3A\u7A7A
        this.observers = []
        console.log(&#39;PrdPublisher created&#39;)
    }

    // \u8BE5\u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u7684prdState
    getState() {
        console.log(&#39;PrdPublisher.getState invoked&#39;)
        return this.prdState
    }

    // \u8BE5\u65B9\u6CD5\u7528\u4E8E\u6539\u53D8prdState\u7684\u503C
    setState(state) {
        console.log(&#39;PrdPublisher.setState invoked&#39;)
        // prd\u7684\u503C\u53D1\u751F\u6539\u53D8
        this.prdState = state
        // \u9700\u6C42\u6587\u6863\u53D8\u66F4\uFF0C\u7ACB\u523B\u901A\u77E5\u6240\u6709\u5F00\u53D1\u8005
        this.notify()
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F5C\u4E3A\u8BA2\u9605\u65B9\uFF0C\u5F00\u53D1\u8005\u7684\u4EFB\u52A1\u4E5F\u53D8\u5F97\u5177\u4F53\u8D77\u6765\uFF1A\u63A5\u6536\u9700\u6C42\u6587\u6863\u3001\u5E76\u5F00\u59CB\u5E72\u6D3B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class DeveloperObserver extends Observer {
    constructor() {
        super()
        // \u9700\u6C42\u6587\u6863\u4E00\u5F00\u59CB\u8FD8\u4E0D\u5B58\u5728\uFF0Cprd\u521D\u59CB\u4E3A\u7A7A\u5BF9\u8C61
        this.prdState = {}
        console.log(&#39;DeveloperObserver created&#39;)
    }

    // \u91CD\u5199\u4E00\u4E2A\u5177\u4F53\u7684update\u65B9\u6CD5
    update(publisher) {
        console.log(&#39;DeveloperObserver.update invoked&#39;)
        // \u66F4\u65B0\u9700\u6C42\u6587\u6863
        this.prdState = publisher.getState()
        // \u8C03\u7528\u5DE5\u4F5C\u51FD\u6570
        this.work()
    }

    // work\u65B9\u6CD5\uFF0C\u4E00\u4E2A\u4E13\u95E8\u642C\u7816\u7684\u65B9\u6CD5
    work() {
        // \u83B7\u53D6\u9700\u6C42\u6587\u6863
        const prd = this.prdState
        // \u5F00\u59CB\u57FA\u4E8E\u9700\u6C42\u6587\u6863\u63D0\u4F9B\u7684\u4FE1\u606F\u642C\u7816\u3002\u3002\u3002
        ...
        console.log(&#39;996 begins...&#39;)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\uFF0C\u6211\u4EEC\u53EF\u4EE5\xA0<code>new</code>\xA0\u4E00\u4E2A\xA0<code>PrdPublisher</code>\xA0\u5BF9\u8C61\uFF08\u4EA7\u54C1\u7ECF\u7406\uFF09\uFF0C\u5979\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528\xA0<code>setState</code>\xA0\u65B9\u6CD5\u6765\u66F4\u65B0\u9700\u6C42\u6587\u6863\u3002\u9700\u6C42\u6587\u6863\u6BCF\u6B21\u66F4\u65B0\uFF0C\u90FD\u4F1A\u7D27\u63A5\u7740\u8C03\u7528\xA0<code>notify</code>\xA0\u65B9\u6CD5\u6765\u901A\u77E5\u6240\u6709\u5F00\u53D1\u8005\uFF1A</p><blockquote><p>\u76EE\u6807\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u901A\u77E5\u6240\u6709\u89C2\u5BDF\u8005\u5BF9\u8C61\uFF0C\u4F7F\u5B83\u4EEC\u80FD\u591F\u81EA\u52A8\u66F4\u65B0\u3002</p></blockquote><p>OK\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u770B\u97E9\u6885\u6885\u548C\u5979\u7684\u5C0F\u4F19\u4F34\u4EEC\u662F\u5982\u4F55\u641E\u4E8B\u60C5\u7684\u5427\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u521B\u5EFA\u8BA2\u9605\u8005\uFF1A\u524D\u7AEF\u5F00\u53D1\u674E\u96F7
const liLei = new DeveloperObserver()
// \u521B\u5EFA\u8BA2\u9605\u8005\uFF1A\u670D\u52A1\u7AEF\u5F00\u53D1\u5C0FA\uFF08sorry\u3002\u3002\u3002\u8D77\u540D\u5B57\u771F\u7684\u592A\u96BE\u4E86\uFF09
const A = new DeveloperObserver()
// \u521B\u5EFA\u8BA2\u9605\u8005\uFF1A\u6D4B\u8BD5\u540C\u5B66\u5C0FB
const B = new DeveloperObserver()
// \u97E9\u6885\u6885\u51FA\u73B0\u4E86
const hanMeiMei = new PrdPublisher()
// \u9700\u6C42\u6587\u6863\u51FA\u73B0\u4E86
const prd = {
    // \u5177\u4F53\u7684\u9700\u6C42\u5185\u5BB9
    ...
}
// \u97E9\u6885\u6885\u5F00\u59CB\u62C9\u7FA4
hanMeiMei.add(liLei)
hanMeiMei.add(A)
hanMeiMei.add(B)
// \u97E9\u6885\u6885\u53D1\u9001\u4E86\u9700\u6C42\u6587\u6863\uFF0C\u5E76@\u4E86\u6240\u6709\u4EBA
hanMeiMei.setState(prd)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\uFF0C\u5C31\u662F\u89C2\u5BDF\u8005\u6A21\u5F0F\u5728\u4EE3\u7801\u4E16\u754C\u91CC\u7684\u5B8C\u6574\u5B9E\u73B0\u6D41\u7A0B\u4E86\u3002</p><p>\u76F8\u4FE1\u8D70\u5230\u8FD9\u4E00\u6B65\uFF0C\u5927\u5BB6\u5BF9\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u6838\u5FC3\u601D\u60F3\u3001\u57FA\u672C\u5B9E\u73B0\u6A21\u5F0F\u90FD\u6709\u4E86\u4E0D\u9519\u7684\u638C\u63E1\u3002\u4E0B\u9762\u6211\u4EEC\u8D81\u70ED\u6253\u94C1\uFF0C\u4E00\u8D77\u6765\u770B\u770B\u5982\u4F55\u51ED\u501F\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF0C\u5728\u9762\u8BD5\u4E2D\u8868\u6F14\u771F\u6B63\u7684\u6280\u672F~</p><h3 id="_8-3-vue\u6570\u636E\u53CC\u5411\u7ED1\u5B9A-\u54CD\u5E94\u5F0F\u7CFB\u7EDF-\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_8-3-vue\u6570\u636E\u53CC\u5411\u7ED1\u5B9A-\u54CD\u5E94\u5F0F\u7CFB\u7EDF-\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 8.3 Vue\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\uFF08\u54CD\u5E94\u5F0F\u7CFB\u7EDF\uFF09\u7684\u5B9E\u73B0\u539F\u7406</h3><p>1. \u89E3\u6790</p>`,173),de=e("Vue \u6846\u67B6\u662F\u70ED\u95E8\u7684\u6E10\u8FDB\u5F0F JavaScript\u6846\u67B6\u3002\u5728 Vue \u4E2D\uFF0C\u5F53\u6211\u4EEC\u4FEE\u6539\u72B6\u6001\u65F6\uFF0C\u89C6\u56FE\u4F1A\u968F\u4E4B\u66F4\u65B0\uFF0C\u8FD9\u5C31\u662FVue\u7684\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\uFF08\u53C8\u79F0\u54CD\u5E94\u5F0F\u539F\u7406\uFF09\u3002\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u662FVue \u6700\u72EC\u7279\u7684\u7279\u6027\u4E4B\u4E00\u3002\u5982\u679C\u8BFB\u8005\u6CA1\u6709\u63A5\u89E6\u8FC7 Vue\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u9605\u8BFB"),le={href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"},ae=e("Vue\u5B98\u65B9\u5BF9\u54CD\u5E94\u5F0F\u539F\u7406\u7684\u4ECB\u7ECD\xA0(opens new window)"),re=e("\u3002\u6B64\u5904\u6211\u4EEC\u7528\u5B98\u65B9\u7684\u4E00\u5F20\u6D41\u7A0B\u56FE\u6765\u7B80\u8981\u5730\u8BF4\u660E\u4E00\u4E0BVue\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u6574\u4E2A\u6D41\u7A0B\uFF1A"),ve=n("p",null,[n("img",{src:t,alt:""})],-1),ce=n("p",null,[e("\u5728\xA0"),n("code",null,"Vue"),e("\xA0\u4E2D\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u90FD\u6709\u76F8\u5E94\u7684\xA0"),n("code",null,"watcher"),e("\xA0\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5B83\u4F1A\u5728\u7EC4\u4EF6\u6E32\u67D3\u7684\u8FC7\u7A0B\u4E2D\u628A\u5C5E\u6027\u8BB0\u5F55\u4E3A\u4F9D\u8D56\uFF0C\u4E4B\u540E\u5F53\u4F9D\u8D56\u9879\u7684\xA0"),n("code",null,"setter"),e("\xA0\u88AB\u8C03\u7528\u65F6\uFF0C\u4F1A\u901A\u77E5\xA0"),n("code",null,"watcher"),e("\xA0\u91CD\u65B0\u8BA1\u7B97\uFF0C\u4ECE\u800C\u81F4\u4F7F\u5B83\u5173\u8054\u7684\u7EC4\u4EF6\u5F97\u4EE5\u66F4\u65B0------\u8FD9\u662F\u4E00\u4E2A\u5178\u578B\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F\u3002\u8FD9\u9053\u9762\u8BD5\u9898\u8003\u5BDF\u4E86\u53D7\u8BD5\u8005\u5BF9Vue\u5E95\u5C42\u539F\u7406\u7684\u7406\u89E3\u3001\u5BF9\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u5B9E\u73B0\u80FD\u529B\u4EE5\u53CA\u4E00\u7CFB\u5217\u91CD\u8981\u7684JS\u77E5\u8BC6\u70B9\uFF0C\u5177\u6709\u8F83\u5F3A\u7684\u7EFC\u5408\u6027\u548C\u4EE3\u8868\u6027\u3002")],-1),te=e('\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u9762\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u9762\u8BD5\u5B98\u591A\u6570\u60C5\u51B5\u4E0B\u4E0D\u4F1A\u8981\u6C42\u5927\u5BB6\u5199\u51FA\u5B8C\u6574\u7684\u54CD\u5E94\u5F0F\u539F\u7406\u5B9E\u73B0\u4EE3\u7801\uFF0C\u800C\u662F\u8981\u6C42\u4F60"\u8BF4\u8BF4\u81EA\u5DF1\u7684\u7406\u89E3"\u3002\u5728\u672C\u8282\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u5E26\u5927\u5BB6\u4E00\u884C\u4E00\u884C\u5199\u4EE3\u7801\uFF08\u5177\u4F53\u6DF1\u5165Vue\u6846\u67B6\u7684\u76F8\u5173\u77E5\u8BC6\uFF0C\u5EFA\u8BAE\u5927\u5BB6\u9605\u8BFB'),ue={href:"https://github.com/vuejs/vue",target:"_blank",rel:"noopener noreferrer"},oe=e("Vue\u6E90\u7801\xA0(opens new window)"),me=e("\u53CA\u8FD9\u672C"),be={href:"https://juejin.im/book/5a36661851882538e2259c0f",target:"_blank",rel:"noopener noreferrer"},pe=e("\u4E13\u95E8\u5199Vue\u7684\u5C0F\u518C\xA0(opens new window)"),ge=e("\u3002\uFF09\uFF0C\u800C\u662F\u9488\u5BF9Vue\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u4E2D\u4E0E\u89C2\u5BDF\u8005\u6A21\u5F0F\u7D27\u5BC6\u5173\u8054\u7684\u8FD9\u90E8\u5206\u77E5\u8BC6\u4F5C\u8BB2\u89E3\uFF0C\u5E2E\u52A9\u5927\u5BB6\u634B\u6E05\u695A\u6574\u5957\u6D41\u7A0B\u91CC\u7684\u6765\u9F99\u53BB\u8109\u3001\u52A0\u6DF1\u5BF9\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u7406\u89E3\u3002"),he=d('<p>\u5728Vue\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u7684\u5B9E\u73B0\u903B\u8F91\u91CC\uFF0C\u6709\u8FD9\u6837\u4E09\u4E2A\u5173\u952E\u89D2\u8272\uFF1A</p><ul><li><code>observer</code>\uFF08\u76D1\u542C\u5668\uFF09\uFF1A\u6CE8\u610F\uFF0C\u6B64\xA0<code>observer</code>\xA0\u975E\u5F7C\xA0<code>observer</code>\u3002\u5728\u6211\u4EEC\u4E0A\u9762\u7684\u89E3\u6790\u4E2D\uFF0C<code>observer</code>\xA0\u4F5C\u4E3A\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u7684\u4E00\u4E2A\u89D2\u8272\uFF0C\u4EE3\u8868&quot;\u8BA2\u9605\u8005&quot;\u3002\u4F46\u5728<code>Vue</code>\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u7684\u89D2\u8272\u7ED3\u6784\u91CC\uFF0C\u6240\u8C13\u7684\xA0<code>observer</code>\xA0\u4E0D\u4EC5\u662F\u4E00\u4E2A\u6570\u636E\u76D1\u542C\u5668\uFF0C\u5B83\u8FD8\u9700\u8981\u5BF9\u76D1\u542C\u5230\u7684\u6570\u636E\u8FDB\u884C\u8F6C\u53D1------\u4E5F\u5C31\u662F\u8BF4\u5B83\u540C\u65F6\u8FD8\u662F\u4E00\u4E2A\u53D1\u5E03\u8005\u3002</li><li><code>watcher</code>\uFF08\u8BA2\u9605\u8005\uFF09\uFF1A<code>observer</code>\xA0\u628A\u6570\u636E\u8F6C\u53D1\u7ED9\u4E86\u771F\u6B63\u7684\u8BA2\u9605\u8005------<code>watcher</code>\u5BF9\u8C61\u3002<code>watcher</code>\xA0\u63A5\u6536\u5230\u65B0\u7684\u6570\u636E\u540E\uFF0C\u4F1A\u53BB\u66F4\u65B0\u89C6\u56FE\u3002</li><li><code>compile</code>\uFF08\u7F16\u8BD1\u5668\uFF09\uFF1A<code>MVVM</code>\xA0\u6846\u67B6\u7279\u6709\u7684\u89D2\u8272\uFF0C\u8D1F\u8D23\u5BF9\u6BCF\u4E2A\u8282\u70B9\u5143\u7D20\u6307\u4EE4\u8FDB\u884C\u626B\u63CF\u548C\u89E3\u6790\uFF0C\u6307\u4EE4\u7684\u6570\u636E\u521D\u59CB\u5316\u3001\u8BA2\u9605\u8005\u7684\u521B\u5EFA\u8FD9\u4E9B&quot;\u6742\u6D3B&quot;\u4E5F\u5F52\u5B83\u7BA1~</li></ul><p>\u8FD9\u4E09\u8005\u7684\u914D\u5408\u8FC7\u7A0B\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="'+u+`" alt=""></p><p>OK\uFF0C\u5B9E\u73B0\u65B9\u6848\u641E\u6E05\u695A\u4E86\uFF0C\u4E0B\u9762\u6211\u4EEC\u7ED9\u6574\u4E2A\u6D41\u7A0B\u4E2D\u6D89\u53CA\u5230\u53D1\u5E03-\u8BA2\u9605\u8FD9\u4E00\u6A21\u5F0F\u7684\u4EE3\u7801\u6765\u4E2A\u7279\u5199\uFF1A</p><p>2. \u6838\u5FC3\u4EE3\u7801</p><p>\u5B9E\u73B0observer</p><blockquote><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u5BF9\u9700\u8981\u76D1\u542C\u7684\u6570\u636E\u5BF9\u8C61\u8FDB\u884C\u904D\u5386\u3001\u7ED9\u5B83\u7684\u5C5E\u6027\u52A0\u4E0A\u5B9A\u5236\u7684\xA0<code>getter</code>\xA0\u548C\xA0<code>setter</code>\xA0\u51FD\u6570\u3002\u8FD9\u6837\u4F46\u51E1\u8FD9\u4E2A\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u5C31\u4F1A\u89E6\u53D1\xA0<code>setter</code>\xA0\u51FD\u6570\uFF0C\u8FDB\u800C\u901A\u77E5\u5230\u8BA2\u9605\u8005\u3002\u8FD9\u4E2A\xA0<code>setter</code>\xA0\u51FD\u6570\uFF0C\u5C31\u662F\u6211\u4EEC\u7684\u76D1\u542C\u5668\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// observe\u65B9\u6CD5\u904D\u5386\u5E76\u5305\u88C5\u5BF9\u8C61\u5C5E\u6027
function observe(target) {
    // \u82E5target\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u904D\u5386\u5B83
    if(target &amp;&amp; typeof target === &#39;object&#39;) {
        Object.keys(target).forEach((key)=&gt; {
            // defineReactive\u65B9\u6CD5\u4F1A\u7ED9\u76EE\u6807\u5C5E\u6027\u88C5\u4E0A&quot;\u76D1\u542C\u5668&quot;
            defineReactive(target, key, target[key])
        })
    }
}

// \u5B9A\u4E49defineReactive\u65B9\u6CD5
function defineReactive(target, key, val) {
    // \u5C5E\u6027\u503C\u4E5F\u53EF\u80FD\u662Fobject\u7C7B\u578B\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9700\u8981\u8C03\u7528observe\u8FDB\u884C\u9012\u5F52\u904D\u5386
    observe(val)
    // \u4E3A\u5F53\u524D\u5C5E\u6027\u5B89\u88C5\u76D1\u542C\u5668
    Object.defineProperty(target, key, {
         // \u53EF\u679A\u4E3E
        enumerable: true,
        // \u4E0D\u53EF\u914D\u7F6E
        configurable: false,
        get: function () {
            return val;
        },
        // \u76D1\u542C\u5668\u51FD\u6570
        set: function (value) {
            console.log(\`\${target}\u5C5E\u6027\u7684\${key}\u5C5E\u6027\u4ECE\${val}\u503C\u53D8\u6210\u4E86\u4E86\${value}\`)
            val = value
        }
    });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0B\u9762\u5B9E\u73B0\u8BA2\u9605\u8005\xA0<code>Dep</code>\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u8BA2\u9605\u8005\u7C7BDep
class Dep {
    constructor() {
        // \u521D\u59CB\u5316\u8BA2\u9605\u961F\u5217
        this.subs = []
    }

    // \u589E\u52A0\u8BA2\u9605\u8005
    addSub(sub) {
        this.subs.push(sub)
    }

    // \u901A\u77E5\u8BA2\u9605\u8005\uFF08\u662F\u4E0D\u662F\u6240\u6709\u7684\u4EE3\u7801\u90FD\u4F3C\u66FE\u76F8\u8BC6\uFF1F\uFF09
    notify() {
        this.subs.forEach((sub)=&gt;{
            sub.update()
        })
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u6539\u5199\xA0<code>defineReactive</code>\xA0\u4E2D\u7684\xA0<code>setter</code>\xA0\u65B9\u6CD5\uFF0C\u5728\u76D1\u542C\u5668\u91CC\u53BB\u901A\u77E5\u8BA2\u9605\u8005\u4E86\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function defineReactive(target, key, val) {
    const dep = new Dep()
    // \u76D1\u542C\u5F53\u524D\u5C5E\u6027
    observe(val)
    Object.defineProperty(target, key, {
        set: (value) =&gt; {
            // \u901A\u77E5\u6240\u6709\u8BA2\u9605\u8005
            dep.notify()
        }
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-\u5B9E\u73B0\u4E00\u4E2Aevent-bus-event-emitter" tabindex="-1"><a class="header-anchor" href="#_8-4-\u5B9E\u73B0\u4E00\u4E2Aevent-bus-event-emitter" aria-hidden="true">#</a> 8.4 \u5B9E\u73B0\u4E00\u4E2AEvent Bus / Event Emitter</h3><blockquote><p><code>Event Bus</code>\uFF08Vue\u3001Flutter \u7B49\u524D\u7AEF\u6846\u67B6\u4E2D\u6709\u51FA\u955C\uFF09\u548C\xA0<code>Event Emitter</code>\uFF08Node\u4E2D\u6709\u51FA\u955C\uFF09\u51FA\u573A\u7684&quot;\u5267\u7EC4&quot;\u4E0D\u540C\uFF0C\u4F46\u662F\u5B83\u4EEC\u90FD\u5BF9\u5E94\u4E00\u4E2A\u5171\u540C\u7684\u89D2\u8272------\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\u3002</p></blockquote><p>\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u4E25\u683C\u6765\u8BF4\u4E0D\u80FD\u8BF4\u662F\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF0C\u800C\u662F\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u3002\u5B83\u5728\u6211\u4EEC\u65E5\u5E38\u7684\u4E1A\u52A1\u5F00\u53D1\u4E2D\u5E94\u7528\u975E\u5E38\u5E7F\u3002</p><blockquote><p>\u5982\u679C\u53EA\u80FD\u9009\u4E00\u9053\u9898\uFF0C\u90A3\u8FD9\u9053\u9898\u4E00\u5B9A\u662F\xA0<code>Event Bus/Event Emitter</code>\xA0\u7684\u4EE3\u7801\u5B9E\u73B0------\u6211\u90FD\u8BF4\u8FD9\u4E48\u6E05\u695A\u4E86\uFF0C\u8FD9\u4E2A\u77E5\u8BC6\u70B9\u5230\u5E95\u8981\u4E0D\u8981\u638C\u63E1\u3001\u9700\u8981\u638C\u63E1\u5230\u4EC0\u4E48\u7A0B\u5EA6\uFF0C\u5C31\u770B\u5404\u4F4D\u81EA\u5DF1\u7684\u4E86\u3002</p></blockquote><p>\u5728Vue\u4E2D\u4F7F\u7528Event Bus\u6765\u5B9E\u73B0\u7EC4\u4EF6\u95F4\u7684\u901A\u8BAF</p><blockquote><p><code>Event Bus/Event Emitter</code>\xA0\u4F5C\u4E3A\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u5B83\u8D77\u5230\u7684\u662F\u4E00\u4E2A\u6C9F\u901A\u6865\u6881\u7684\u4F5C\u7528\u3002\u6211\u4EEC\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u4E3A\u4E00\u4E2A\u4E8B\u4EF6\u4E2D\u5FC3\uFF0C\u6211\u4EEC\u6240\u6709\u4E8B\u4EF6\u7684\u8BA2\u9605/\u53D1\u5E03\u90FD\u4E0D\u80FD\u7531\u8BA2\u9605\u65B9\u548C\u53D1\u5E03\u65B9&quot;\u79C1\u4E0B\u6C9F\u901A&quot;\uFF0C\u5FC5\u987B\u8981\u59D4\u6258\u8FD9\u4E2A\u4E8B\u4EF6\u4E2D\u5FC3\u5E2E\u6211\u4EEC\u5B9E\u73B0\u3002</p></blockquote><p>\u5728Vue\u4E2D\uFF0C\u6709\u65F6\u5019 A \u7EC4\u4EF6\u548C B \u7EC4\u4EF6\u4E2D\u95F4\u9694\u4E86\u5F88\u8FDC\uFF0C\u770B\u4F3C\u6CA1\u4EC0\u4E48\u5173\u7CFB\uFF0C\u4F46\u6211\u4EEC\u5E0C\u671B\u5B83\u4EEC\u4E4B\u95F4\u80FD\u591F\u901A\u4FE1\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9664\u4E86\u6C42\u52A9\u4E8E\xA0<code>Vuex</code>\xA0\u4E4B\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\xA0<code>Event Bus</code>\xA0\u6765\u5B9E\u73B0\u6211\u4EEC\u7684\u9700\u6C42\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\xA0<code>Event Bus</code>\uFF08\u672C\u8D28\u4E0A\u4E5F\u662F Vue \u5B9E\u4F8B\uFF09\u5E76\u5BFC\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const EventBus = new Vue()
export default EventBus

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E3B\u6587\u4EF6\u91CC\u5F15\u5165<code>EventBus</code>\uFF0C\u5E76\u6302\u8F7D\u5230\u5168\u5C40\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import bus from &#39;EventBus\u7684\u6587\u4EF6\u8DEF\u5F84&#39;
Vue.prototype.bus = bus

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA2\u9605\u4E8B\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u91CCfunc\u6307someEvent\u8FD9\u4E2A\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570
this.bus.$on(&#39;someEvent&#39;, func)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D1\u5E03\uFF08\u89E6\u53D1\uFF09\u4E8B\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u91CCparams\u6307someEvent\u8FD9\u4E2A\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u7684\u5165\u53C2
this.bus.$emit(&#39;someEvent&#39;, params)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5927\u5BB6\u4F1A\u53D1\u73B0\uFF0C\u6574\u4E2A\u8C03\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u6CA1\u6709\u51FA\u73B0\u5177\u4F53\u7684\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\uFF08\u6BD4\u5982\u4E0A\u9762\u7684<code>PrdPublisher</code>\u548C<code>DeveloperObserver</code>\uFF09\uFF0C\u5168\u7A0B\u53EA\u6709<code>bus</code>\u8FD9\u4E2A\u4E1C\u897F\u4E00\u4E2A\u4EBA\u5728\u75AF\u72C2\u5237\u5B58\u5728\u611F\u3002\u8FD9\u5C31\u662F\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\u7684\u7279\u70B9------\u6240\u6709\u4E8B\u4EF6\u7684\u53D1\u5E03/\u8BA2\u9605\u64CD\u4F5C\uFF0C\u5FC5\u987B\u7ECF\u7531\u4E8B\u4EF6\u4E2D\u5FC3\uFF0C\u7981\u6B62\u4E00\u5207&quot;\u79C1\u4E0B\u4EA4\u6613&quot;\uFF01</p></blockquote><p>\u4E0B\u9762\uFF0C\u6211\u4EEC\u5C31\u4E00\u8D77\u6765\u5B9E\u73B0\u4E00\u4E2A<code>Event Bus</code>\uFF08\u6CE8\u610F\u770B\u6CE8\u91CA\u91CC\u7684\u89E3\u6790\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class EventEmitter {
  constructor() {
    // handlers\u662F\u4E00\u4E2Amap\uFF0C\u7528\u4E8E\u5B58\u50A8\u4E8B\u4EF6\u4E0E\u56DE\u8C03\u4E4B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB
    this.handlers = {}
  }

  // on\u65B9\u6CD5\u7528\u4E8E\u5B89\u88C5\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5B83\u63A5\u53D7\u76EE\u6807\u4E8B\u4EF6\u540D\u548C\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570
  on(eventName, cb) {
    // \u5148\u68C0\u67E5\u4E00\u4E0B\u76EE\u6807\u4E8B\u4EF6\u540D\u6709\u6CA1\u6709\u5BF9\u5E94\u7684\u76D1\u542C\u51FD\u6570\u961F\u5217
    if (!this.handlers[eventName]) {
      // \u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48\u9996\u5148\u521D\u59CB\u5316\u4E00\u4E2A\u76D1\u542C\u51FD\u6570\u961F\u5217
      this.handlers[eventName] = []
    }

    // \u628A\u56DE\u8C03\u51FD\u6570\u63A8\u5165\u76EE\u6807\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\u961F\u5217\u91CC\u53BB
    this.handlers[eventName].push(cb)
  }

  // emit\u65B9\u6CD5\u7528\u4E8E\u89E6\u53D1\u76EE\u6807\u4E8B\u4EF6\uFF0C\u5B83\u63A5\u53D7\u4E8B\u4EF6\u540D\u548C\u76D1\u542C\u51FD\u6570\u5165\u53C2\u4F5C\u4E3A\u53C2\u6570
  emit(eventName, ...args) {
    // \u68C0\u67E5\u76EE\u6807\u4E8B\u4EF6\u662F\u5426\u6709\u76D1\u542C\u51FD\u6570\u961F\u5217
    if (this.handlers[eventName]) {
      // \u5982\u679C\u6709\uFF0C\u5219\u9010\u4E2A\u8C03\u7528\u961F\u5217\u91CC\u7684\u56DE\u8C03\u51FD\u6570
      this.handlers[eventName].forEach((callback) =&gt; {
        callback(...args)
      })
    }
  }

  // \u79FB\u9664\u67D0\u4E2A\u4E8B\u4EF6\u56DE\u8C03\u961F\u5217\u91CC\u7684\u6307\u5B9A\u56DE\u8C03\u51FD\u6570
  off(eventName, cb) {
    const callbacks = this.handlers[eventName]
    const index = callbacks.indexOf(cb)
    if (index !== -1) {
      callbacks.splice(index, 1)
    }
  }

  // \u4E3A\u4E8B\u4EF6\u6CE8\u518C\u5355\u6B21\u76D1\u542C\u5668
  once(eventName, cb) {
    // \u5BF9\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u5305\u88C5\uFF0C\u4F7F\u5176\u6267\u884C\u5B8C\u6BD5\u81EA\u52A8\u88AB\u79FB\u9664
    const wrapper = (...args) =&gt; {
      cb.apply(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),xe=e("\u5728\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D\uFF0C\u5927\u5BB6\u7528\u5230"),fe=n("code",null,"EventBus/EventEmitter",-1),qe=e("\u5F80\u5F80\u63D0\u4F9B\u6BD4\u8FD9\u4E94\u4E2A\u65B9\u6CD5\u591A\u7684\u591A\u7684\u591A\u7684\u65B9\u6CD5\u3002\u4F46\u5728\u9762\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u5927\u5BB6\u80FD\u591F\u5B8C\u6574\u5730\u5B9E\u73B0\u51FA\u8FD9\u4E94\u4E2A\u65B9\u6CD5\uFF0C\u5DF2\u7ECF\u975E\u5E38\u53EF\u4EE5\u8BF4\u660E\u95EE\u9898\u4E86\uFF0C\u56E0\u6B64\u697C\u4E0A\u8FD9\u4E2A"),ke=n("code",null,"EventBus",-1),_e=e("\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u719F\u7EC3\u638C\u63E1\u3002\u5B66\u6709\u4F59\u529B\u7684\u540C\u5B66\uFF0C\u63A8\u8350\u9605\u8BFB"),Pe={href:"https://github.com/facebook/emitter",target:"_blank",rel:"noopener noreferrer"},ye=e("FaceBook\u63A8\u51FA\u7684\u901A\u7528EventEmiiter\u5E93\u7684\u6E90\u7801\xA0(opens new window)"),we=e("\uFF0C\u76F8\u4FE1\u4F60\u4F1A\u6709\u66F4\u591A\u6536\u83B7\u3002"),Se=d('<h3 id="_8-5-\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E0E\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u7684\u533A\u522B\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_8-5-\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E0E\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u7684\u533A\u522B\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 8.5 \u89C2\u5BDF\u8005\u6A21\u5F0F\u4E0E\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F</h3><blockquote><p>\u5728\u9762\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u4E00\u4E9B\u5BF9\u7EC6\u8282\u6BD4\u8F83\u5728\u610F\u7684\u9762\u8BD5\u5B98\u53EF\u80FD\u4F1A\u8FFD\u95EE\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E0E\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u7684\u533A\u522B\u3002\u8FD9\u4E2A\u95EE\u9898\u53EF\u80FD\u4F1A\u5F15\u53D1\u4E00\u4E9B\u540C\u5B66\u7684\u4E0D\u9002\uFF0C\u56E0\u4E3A\u5728\u5927\u91CF\u53C2\u8003\u8D44\u6599\u4EE5\u53CA\u5DF2\u51FA\u7248\u7684\u7EB8\u8D28\u4E66\u7C4D\u4E2D\uFF0C\u90FD\u4F1A\u544A\u8BC9\u5927\u5BB6&quot;\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u662F\u540C\u4E00\u4E2A\u4E1C\u897F\u7684\u4E24\u4E2A\u540D\u5B57&quot;\u3002\u672C\u4E66\u5728\u524D\u6587\u7684\u53D9\u8FF0\u4E2D\uFF0C\u4E5F\u6CA1\u6709\u7A81\u51FA\u5F3A\u8C03\u4E24\u8005\u7684\u533A\u522B\u3002\u5176\u5B9E\u8FD9\u4E24\u4E2A\u6A21\u5F0F\uFF0C\u8981\u8F83\u8D77\u771F\u6765\uFF0C\u786E\u5B9E\u4E0D\u80FD\u7ED9\u5B83\u4EEC\u5212\u4E25\u683C\u7684\u7B49\u53F7\u3002</p></blockquote><p>\u4E3A\u4EC0\u4E48\u5927\u5BB6\u90FD\u559C\u6B22\u7ED9\u5B83\u4EEC\u5F3A\u884C\u5212\u7B49\u53F7\u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u5C31\u7B97\u5212\u4E86\u7B49\u53F7\uFF0C\u4E5F\u4E0D\u5F71\u54CD\u6211\u4EEC\u6B63\u5E38\u4F7F\u7528\uFF0C\u6BD5\u7ADF\u4E24\u8005\u5728\u6838\u5FC3\u601D\u60F3\u3001\u8FD0\u4F5C\u673A\u5236\u4E0A\u6CA1\u6709\u672C\u8D28\u7684\u5DEE\u522B\u3002\u4F46\u8003\u8651\u5230\u8FD9\u4E2A\u95EE\u9898\u786E\u5B9E\u53EF\u4EE5\u6210\u4E3A\u9762\u8BD5\u9898\u7684\u4E00\u4E2A\u65B9\u5411\uFF0C\u6B64\u5904\u6211\u4EEC\u8FD8\u662F\u5355\u72EC\u62FF\u51FA\u6765\u8BB2\u4E00\u4E0B\u3002</p><p>\u56DE\u5230\u6211\u4EEC\u4E0A\u6587\u7684\u4F8B\u5B50\u91CC\u3002\u97E9\u6885\u6885\u628A\u6240\u6709\u7684\u5F00\u53D1\u8005\u62C9\u4E86\u4E00\u4E2A\u7FA4\uFF0C\u76F4\u63A5\u628A\u9700\u6C42\u6587\u6863\u4E22\u7ED9\u6BCF\u4E00\u4F4D\u7FA4\u6210\u5458\uFF0C\u8FD9\u79CD\u53D1\u5E03\u8005\u76F4\u63A5\u89E6\u53CA\u5230\u8BA2\u9605\u8005\u7684\u64CD\u4F5C\uFF0C\u53EB\u89C2\u5BDF\u8005\u6A21\u5F0F\u3002\u4F46\u5982\u679C\u97E9\u6885\u6885\u6CA1\u6709\u62C9\u7FA4\uFF0C\u800C\u662F\u628A\u9700\u6C42\u6587\u6863\u4E0A\u4F20\u5230\u4E86\u516C\u53F8\u7EDF\u4E00\u7684\u9700\u6C42\u5E73\u53F0\u4E0A\uFF0C\u9700\u6C42\u5E73\u53F0\u611F\u77E5\u5230\u6587\u4EF6\u7684\u53D8\u5316\u3001\u81EA\u52A8\u901A\u77E5\u4E86\u6BCF\u4E00\u4F4D\u8BA2\u9605\u4E86\u8BE5\u6587\u4EF6\u7684\u5F00\u53D1\u8005\uFF0C\u8FD9\u79CD\u53D1\u5E03\u8005\u4E0D\u76F4\u63A5\u89E6\u53CA\u5230\u8BA2\u9605\u8005\u3001\u800C\u662F\u7531\u7EDF\u4E00\u7684\u7B2C\u4E09\u65B9\u6765\u5B8C\u6210\u5B9E\u9645\u7684\u901A\u4FE1\u7684\u64CD\u4F5C\uFF0C\u53EB\u505A\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u3002</p><p>\u76F8\u4FE1\u5927\u5BB6\u4E5F\u5DF2\u7ECF\u770B\u51FA\u6765\u4E86\uFF0C\u89C2\u5BDF\u8005\u6A21\u5F0F\u548C\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E4B\u95F4\u7684\u533A\u522B\uFF0C\u5728\u4E8E\u662F\u5426\u5B58\u5728\u7B2C\u4E09\u65B9\u3001\u53D1\u5E03\u8005\u80FD\u5426\u76F4\u63A5\u611F\u77E5\u8BA2\u9605\u8005\uFF08\u5982\u56FE\u6240\u793A\uFF09\u3002</p><p><img src="'+o+'" alt=""></p><p>\u89C2\u5BDF\u8005\u6A21\u5F0F</p><p><img src="'+m+`" alt=""></p><p>\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</p><blockquote><p>\u5728\u6211\u4EEC\u89C1\u8FC7\u7684\u8FD9\u4E9B\u4F8B\u5B50\u91CC\uFF0C\u97E9\u6885\u6885\u62C9\u9489\u9489\u7FA4\u7684\u64CD\u4F5C\uFF0C\u5C31\u662F\u5178\u578B\u7684<code>\u89C2\u5BDF\u8005\u6A21\u5F0F</code>\uFF1B\u800C\u901A\u8FC7<code>EventBus</code>\u53BB\u5B9E\u73B0\u4E8B\u4EF6<code>\u76D1\u542C/\u53D1\u5E03</code>\uFF0C\u5219\u5C5E\u4E8E<code>\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</code>\u3002</p></blockquote><p>\u65E2\u751F\u745C\uFF0C\u4F55\u751F\u4EAE\uFF1F\u65E2\u7136\u6709\u4E86\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u9700\u8981\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u5462\uFF1F</p><blockquote><p>\u5927\u5BB6\u601D\u8003\u4E00\u4E0B\uFF1A\u4E3A\u4EC0\u4E48\u8981\u6709\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF1F<code>\u89C2\u5BDF\u8005\u6A21\u5F0F</code>\uFF0C\u89E3\u51B3\u7684\u5176\u5B9E\u662F\u6A21\u5757\u95F4\u7684\u8026\u5408\u95EE\u9898\uFF0C\u6709\u5B83\u5728\uFF0C\u5373\u4FBF\u662F\u4E24\u4E2A\u5206\u79BB\u7684\u3001\u6BEB\u4E0D\u76F8\u5173\u7684\u6A21\u5757\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u6570\u636E\u901A\u4FE1\u3002\u4F46\u89C2\u5BDF\u8005\u6A21\u5F0F\u4EC5\u4EC5\u662F\u51CF\u5C11\u4E86\u8026\u5408\uFF0C\u5E76\u6CA1\u6709\u5B8C\u5168\u5730\u89E3\u51B3\u8026\u5408\u95EE\u9898------\u88AB\u89C2\u5BDF\u8005\u5FC5\u987B\u53BB\u7EF4\u62A4\u4E00\u5957\u89C2\u5BDF\u8005\u7684\u96C6\u5408\uFF0C\u8FD9\u4E9B\u89C2\u5BDF\u8005\u5FC5\u987B\u5B9E\u73B0\u7EDF\u4E00\u7684\u65B9\u6CD5\u4F9B\u88AB\u89C2\u5BDF\u8005\u8C03\u7528\uFF0C\u4E24\u8005\u4E4B\u95F4\u8FD8\u662F\u6709\u7740\u8BF4\u4E0D\u6E05\u3001\u9053\u4E0D\u660E\u7684\u5173\u7CFB\u3002</p></blockquote><p>\u800C<code>\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</code>\uFF0C\u5219\u662F\u5FEB\u5200\u65A9\u4E71\u9EBB\u4E86------<code>\u53D1\u5E03\u8005\u5B8C\u5168\u4E0D\u7528\u611F\u77E5\u8BA2\u9605\u8005</code>\uFF0C\u4E0D\u7528\u5173\u5FC3\u5B83\u600E\u4E48\u5B9E\u73B0\u56DE\u8C03\u65B9\u6CD5\uFF0C<code>\u4E8B\u4EF6\u7684\u6CE8\u518C\u548C\u89E6\u53D1\u90FD\u53D1\u751F\u5728\u72EC\u7ACB\u4E8E\u53CC\u65B9\u7684\u7B2C\u4E09\u65B9\u5E73\u53F0\uFF08\u4E8B\u4EF6\u603B\u7EBF\uFF09\u4E0A</code>\u3002<code>\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</code>\u4E0B\uFF0C\u5B9E\u73B0\u4E86\u5B8C\u5168\u5730\u89E3\u8026\u3002</p><blockquote><p>\u4F46\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\uFF0C<code>\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u5C31\u6BD4\u89C2\u5BDF\u8005\u6A21\u5F0F&quot;\u9AD8\u7EA7&quot;</code>\u3002\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u7684\u6A21\u5757\u89E3\u8026\u8BC9\u6C42\u5E76\u975E\u603B\u662F\u9700\u8981\u5B83\u4EEC\u5B8C\u5168\u89E3\u8026\u3002\u5982\u679C\u4E24\u4E2A\u6A21\u5757\u4E4B\u95F4\u672C\u8EAB\u5B58\u5728\u5173\u8054\uFF0C\u4E14\u8FD9\u79CD\u5173\u8054\u662F\u7A33\u5B9A\u7684\u3001\u5FC5\u8981\u7684\uFF0C\u90A3\u4E48\u6211\u4EEC\u4F7F\u7528\u89C2\u5BDF\u8005\u6A21\u5F0F\u5C31\u8DB3\u591F\u4E86\u3002\u800C\u5728\u6A21\u5757\u4E0E\u6A21\u5757\u4E4B\u95F4\u72EC\u7ACB\u6027\u8F83\u5F3A\u3001\u4E14\u6CA1\u6709\u5FC5\u8981\u5355\u7EAF\u4E3A\u4E86\u6570\u636E\u901A\u4FE1\u800C\u5F3A\u884C\u4E3A\u4E24\u8005\u5236\u9020\u4F9D\u8D56\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5F80\u5F80\u4F1A\u503E\u5411\u4E8E\u4F7F\u7528<code>\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</code>\u3002</p></blockquote><h2 id="_9-\u884C\u4E3A\u578B-\u8FED\u4EE3\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_9-\u884C\u4E3A\u578B-\u8FED\u4EE3\u5668\u6A21\u5F0F" aria-hidden="true">#</a> 9 \u884C\u4E3A\u578B-\u8FED\u4EE3\u5668\u6A21\u5F0F</h2><blockquote><p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u63D0\u4F9B\u4E00\u79CD\u65B9\u6CD5\u987A\u5E8F\u8BBF\u95EE\u4E00\u4E2A\u805A\u5408\u5BF9\u8C61\u4E2D\u7684\u5404\u4E2A\u5143\u7D20\uFF0C\u800C\u53C8\u4E0D\u66B4\u9732\u8BE5\u5BF9\u8C61\u7684\u5185\u90E8\u8868\u793A\u3002 ------\u300A\u8BBE\u8BA1\u6A21\u5F0F\uFF1A\u53EF\u590D\u7528\u9762\u5411\u5BF9\u8C61\u8F6F\u4EF6\u7684\u57FA\u7840\u300B</p></blockquote><p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u662F\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u5C11\u6709\u7684\u76EE\u7684\u6027\u6781\u5F3A\u7684\u6A21\u5F0F\u3002\u6240\u8C13&quot;\u76EE\u7684\u6027\u6781\u5F3A&quot;\u5C31\u662F\u8BF4\u5B83\u4E0D\u64CD\u5FC3\u522B\u7684\uFF0C\u5B83\u5C31\u89E3\u51B3\u8FD9\u4E00\u4E2A\u95EE\u9898------\u904D\u5386\u3002</p><h3 id="_9-1-\u516C\u5143\u524D-\u7684\u8FED\u4EE3\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_9-1-\u516C\u5143\u524D-\u7684\u8FED\u4EE3\u5668\u6A21\u5F0F" aria-hidden="true">#</a> 9.1 &quot;\u516C\u5143\u524D&quot;\u7684\u8FED\u4EE3\u5668\u6A21\u5F0F</h3><blockquote><p>\u904D\u5386\u4F5C\u4E3A\u4E00\u79CD\u5408\u7406\u3001\u9AD8\u9891\u7684\u4F7F\u7528\u9700\u6C42\uFF0C\u51E0\u4E4E\u6CA1\u6709\u8BED\u8A00\u4F1A\u8981\u6C42\u5B83\u7684\u5F00\u53D1\u8005\u624B\u52A8\u53BB\u5B9E\u73B0\u3002\u5728JS\u4E2D\uFF0C\u672C\u8EAB\u4E5F\u5185\u7F6E\u4E86\u4E00\u4E2A\u6BD4\u8F83\u7B80\u964B\u7684\u6570\u7EC4\u8FED\u4EE3\u5668\u7684\u5B9E\u73B0------\xA0<code>Array.prototype.forEach</code></p></blockquote><p>\u901A\u8FC7\u8C03\u7528<code>forEach</code>\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5730\u904D\u5386\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [1, 2, 3]
arr.forEach((item, index)=&gt;{
    console.log(\`\u7D22\u5F15\u4E3A\${index}\u7684\u5143\u7D20\u662F\${item}\`)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46<code>forEach</code>\u65B9\u6CD5\u5E76\u4E0D\u662F\u4E07\u80FD\u7684\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u79CD\u573A\u666F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
  &lt;title&gt;\u4E8B\u4EF6\u4EE3\u7406&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A51\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A52\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A53\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A54\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A55\u53F7&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;\u94FE\u63A56\u53F7&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u60F3\u62FF\u5230\u6240\u6709\u7684a\u6807\u7B7E\uFF0C\u6211\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const aNodes = document.getElementsByTagName(&#39;a&#39;)
console.log(&#39;aNodes are&#39;, aNodes)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u60F3\u53D6\u5176\u4E2D\u4E00\u4E2A<code>a</code>\u6807\u7B7E\uFF0C\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const aNode = aNodes[i]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u64CD\u4F5C\u7684\u6620\u886C\u4E0B\uFF0C<code>aNodes</code>\u770B\u4E0A\u53BB\u591A\u4E48\u50CF\u4E00\u4E2A\u6570\u7EC4\u554A\uFF01\u4F46\u5F53\u4F60\u5C1D\u8BD5\u7528\u6570\u7EC4\u7684\u539F\u578B\u65B9\u6CD5\u53BB\u904D\u5386\u5B83\u65F6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>aNodes.forEach((aNode, index){
    console.log(aNode, index)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u53D1\u73B0\u62A5\u9519\u4E86\uFF1A</p><p><img src="`+b+`" alt=""></p><p>\u539F\u6765\u8FD9\u4E2A<code>aNodes</code>\u662F\u4E2A\u5047\u6570\u7EC4\uFF01\u51C6\u786E\u5730\u8BF4\uFF0C\u5B83\u662F\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61\uFF0C\u5E76\u6CA1\u6709\u4E3A\u4F60\u5B9E\u73B0\u597D\u7528\u7684<code>forEach</code>\u65B9\u6CD5\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8981\u60F3\u5B9E\u73B0\u7C7B\u6570\u7EC4\u7684\u904D\u5386\uFF0C\u4F60\u5F97\u53E6\u8BF7\u9AD8\u660E\u3002</p><p>\u73B0\u5728\u95EE\u9898\u5C31\u51FA\u73B0\u4E86\uFF1A\u666E\u901A\u6570\u7EC4\u662F\u4E0D\u662F\u96C6\u5408\uFF1F\u662F\uFF01<code>aNodes</code>\u662F\u4E0D\u662F\u96C6\u5408\uFF1F\u662F\uFF01\u540C\u6837\u662F\u96C6\u5408\uFF0C\u540C\u6837\u6709\u904D\u5386\u9700\u6C42\uFF0C\u6211\u4EEC\u5374\u8981\u9488\u5BF9\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u6267\u884C\u4E0D\u540C\u7684\u904D\u5386\u624B\u6BB5\uFF0C\u597D\u7D2F\uFF01\u518D\u56DE\u5934\u770B\u770B\u8FED\u4EE3\u5668\u7684\u5B9A\u4E49\u662F\u4EC0\u4E48------\u904D\u5386\u96C6\u5408\u7684\u540C\u65F6\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5173\u5FC3\u96C6\u5408\u7684\u5185\u90E8\u7ED3\u6784\u3002\u800C<code>forEach</code>\u53EA\u80FD\u505A\u5230\u5141\u8BB8\u6211\u4EEC\u4E0D\u5173\u5FC3\u6570\u7EC4\u8FD9\u4E00\u79CD\u96C6\u5408\u7684\u5185\u90E8\u7ED3\u6784\uFF0C\u770B\u6765\u60F3\u8981\u4E00\u5957\u7EDF\u4E00\u7684\u904D\u5386\u65B9\u6848\uFF0C\u6211\u4EEC\u975E\u5F97\u8BF7\u51FA\u4E00\u4E2A\u66F4\u5F3A\u7684\u901A\u7528\u8FED\u4EE3\u5668\u4E0D\u53EF\u4E86\u3002</p><p>\u8FD9\u4E2A\u5C0F\u8282\u7684\u6807\u9898\u5B9A\u8BED\u91CC\u6709\u4E09\u4E2A\u5B57&quot;\u516C\u5143\u524D&quot;\uFF0C\u8FD9\u4E2A&quot;\u516C\u5143\u524D&quot;\u600E\u4E48\u5B9A\u4E49\u5462\uFF1F\u5176\u5B9E\u5B83\u8BF4\u7684\u5C31\u662FES\u6807\u51C6\u5185\u7F6E\u8FED\u4EE3\u5668\u4E4B\u524D\u7684\u90A3\u4E9B\u65E5\u5B50------\u5DEE\u4E0D\u591A\u56DB\u4E94\u5E74\u4E4B\u524D\uFF0C\u5F7C\u65F6\u8FD8\u6CA1\u6709\u8FD9\u4E48\u591A\u8F6E\u5B50\uFF0C<code>jQuery</code>\u98CE\u5934\u6B63\u76DB\u3002\u5F53\u65F6\u9762\u8BD5\u53EF\u4E0D\u95EE\u4EC0\u4E48<code>Vue</code>\u539F\u7406\u3001<code>React</code>\u539F\u7406\u3001<code>Webpack</code>\u8FD9\u4E9B\uFF0C\u5F53\u65F6\u95EE\u7684\u6700\u591A\u7684\u662F\u4F60\u8BFB\u8FC7jQuery\u6E90\u7801\u5417\uFF1F\u7B54\u8BFB\u8FC7\uFF0C\u597D\uFF0C\u90A3\u54B1\u4EEC\u5C31\u6709\u7684\u804A\u4E86\u3002\u7B54\u6CA1\u6709\uFF1Ffine\uFF0C\u770B\u6765\u4F60\u53EA\u662F\u4E2A\u8C03\u5305\u4FA0\uFF0C\u56DE\u89C1\u5427------\u56E0\u4E3A\u524D\u7AEF\u7684\u6280\u672F\u70B9\u5728\u90A3\u65F6\u8FD8\u5F88\u6709\u9650\uFF0C\u6240\u4EE5\u53EF\u8003\u5BDF\u7684\u4E1C\u897F\u4E5F\u5C31\u8FD9\u4E48\u70B9\uFF0C\u8BFBjQuery\u6E90\u7801\u7684\u7A0B\u5E8F\u5458\u548C\u4E0D\u8BFBjQuery\u6E90\u7801\u7684\u7A0B\u5E8F\u5458\u5728\u9762\u8BD5\u5B98\u773C\u91CC\u6709\u7740\u8D28\u7684\u533A\u522B\u3002\u4F46\u8FD9\u4E5F\u4ECE\u4E00\u4E2A\u4FA7\u9762\u53CD\u6620\u51FA\u6765\uFF0CjQuery\u8FD9\u4E2A\u5E93\u5176\u5B9E\u662F\u975E\u5E38\u4F18\u79C0\u7684\uFF0C\u81F3\u5C11jQuery\u91CC\u6709\u592A\u591A\u4F18\u79C0\u7684\u8BBE\u8BA1\u6A21\u5F0F\u53EF\u4EE5\u62FF\u6765\u8003\u8003\u4F60\u3002\u5C31\u5305\u62EC\u54B1\u4EEC\u5F53\u5E74\u60F3\u7528\u4E00\u4E2A\u771F-\u8FED\u4EE3\u5668\u53C8\u4E0D\u60F3\u81EA\u5DF1\u641E\u7684\u65F6\u5019\uFF0C\u4E5F\u662F\u8BF7jQuery\u5B9E\u73B0\u7684\u8FED\u4EE3\u5668\u6765\u5E2E\u5FD9\uFF1A</p><p>\u9996\u5148\u6211\u4EEC\u8981\u5728\u9875\u9762\u91CC\u5F15\u5165jQuery\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;script src=&quot;https://cdn.bootcss.com/jquery/3.3.0/jquery.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u501F\u52A9<code>jQuery</code>\u7684<code>each</code>\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u540C\u4E00\u5957\u904D\u5386\u89C4\u5219\u904D\u5386\u4E0D\u540C\u7684\u96C6\u5408\u5BF9\u8C61\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [1, 2, 3]
const aNodes = document.getElementsByTagName(&#39;a&#39;)

$.each(arr, function (index, item) {
    console.log(\`\u6570\u7EC4\u7684\u7B2C\${index}\u4E2A\u5143\u7D20\u662F\${item}\`)
})

$.each(aNodes, function (index, aNode) {
    console.log(\`DOM\u7C7B\u6570\u7EC4\u7684\u7B2C\${index}\u4E2A\u5143\u7D20\u662F\${aNode.innerText}\`)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u5B8C\u5168\u6CA1\u95EE\u9898</p><p>\u5F53\u7136\u5566\uFF0C\u904D\u5386<code>jQuery</code>\u81EA\u5DF1\u7684\u96C6\u5408\u5BF9\u8C61\u4E5F\u4E0D\u5728\u8BDD\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const jQNodes = $(&#39;a&#39;)
$.each(jQNodes, function (index, aNode) {
   console.log(\`jQuery\u96C6\u5408\u7684\u7B2C\${index}\u4E2A\u5143\u7D20\u662F\${aNode.innerText}\`)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4ECD\u7136\u6CA1\u95EE\u9898\uFF1A</p><p><img src="`+p+`" alt=""></p><blockquote><p>\u53EF\u4EE5\u770B\u51FA\uFF0C<code>jQuery</code>\u7684\u8FED\u4EE3\u5668\u4E3A\u6211\u4EEC\u7EDF\u4E00\u4E86\u4E0D\u540C\u7C7B\u578B\u96C6\u5408\u7684\u904D\u5386\u65B9\u5F0F\uFF0C\u4F7F\u6211\u4EEC\u5728\u8BBF\u95EE\u96C6\u5408\u5185\u6BCF\u4E00\u4E2A\u6210\u5458\u65F6\u4E0D\u7528\u53BB\u5173\u5FC3\u96C6\u5408\u672C\u8EAB\u7684\u5185\u90E8\u7ED3\u6784\u4EE5\u53CA\u96C6\u5408\u4E0E\u96C6\u5408\u95F4\u7684\u5DEE\u5F02\uFF0C\u8FD9\u5C31\u662F\u8FED\u4EE3\u5668\u5B58\u5728\u7684\u4EF7\u503C~</p></blockquote><h3 id="_9-2-es6\u5BF9\u8FED\u4EE3\u5668\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_9-2-es6\u5BF9\u8FED\u4EE3\u5668\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 9.2 ES6\u5BF9\u8FED\u4EE3\u5668\u7684\u5B9E\u73B0</h3><p>\u5728&quot;\u516C\u5143\u524D&quot;\uFF0CJS\u539F\u751F\u7684\u96C6\u5408\u7C7B\u578B\u6570\u636E\u7ED3\u6784\uFF0C\u53EA\u6709<code>Array</code>\uFF08\u6570\u7EC4\uFF09\u548C<code>Object</code>\uFF08\u5BF9\u8C61\uFF09\uFF1B\u800C<code>ES6</code>\u4E2D\uFF0C\u53C8\u65B0\u589E\u4E86<code>Map</code>\u548C<code>Set</code>\u3002\u56DB\u79CD\u6570\u636E\u7ED3\u6784\u5404\u81EA\u6709\u7740\u81EA\u5DF1\u7279\u522B\u7684\u5185\u90E8\u5B9E\u73B0\uFF0C\u4F46\u6211\u4EEC\u4ECD\u671F\u5F85\u4EE5\u540C\u6837\u7684\u4E00\u5957\u89C4\u5219\u53BB\u904D\u5386\u5B83\u4EEC\uFF0C\u6240\u4EE5<code>ES6</code>\u5728\u63A8\u51FA\u65B0\u6570\u636E\u7ED3\u6784\u7684\u540C\u65F6\u4E5F\u63A8\u51FA\u4E86\u4E00\u5957\u7EDF\u4E00\u7684\u63A5\u53E3\u673A\u5236------\u8FED\u4EE3\u5668\uFF08<code>Iterator</code>\uFF09\u3002</p><blockquote><p><code>ES6</code>\u7EA6\u5B9A\uFF0C\u4EFB\u4F55\u6570\u636E\u7ED3\u6784\u53EA\u8981\u5177\u5907<code>Symbol.iterator</code>\u5C5E\u6027\uFF08\u8FD9\u4E2A\u5C5E\u6027\u5C31\u662F<code>Iterator</code>\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u5B83\u672C\u8D28\u4E0A\u662F\u5F53\u524D\u6570\u636E\u7ED3\u6784\u9ED8\u8BA4\u7684\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570\uFF09\uFF0C\u5C31\u53EF\u4EE5\u88AB\u904D\u5386------\u51C6\u786E\u5730\u8BF4\uFF0C\u662F\u88AB<code>for...of...</code>\u5FAA\u73AF\u548C\u8FED\u4EE3\u5668\u7684next\u65B9\u6CD5\u904D\u5386\u3002 \u4E8B\u5B9E\u4E0A\uFF0C<code>for...of...</code>\u7684\u80CC\u540E\u6B63\u662F\u5BF9<code>next</code>\u65B9\u6CD5\u7684\u53CD\u590D\u8C03\u7528\u3002</p></blockquote><p>\u5728ES6\u4E2D\uFF0C\u9488\u5BF9<code>Array</code>\u3001<code>Map</code>\u3001<code>Set</code>\u3001<code>String</code>\u3001<code>TypedArray</code>\u3001\u51FD\u6570\u7684\xA0<code>arguments</code>\xA0\u5BF9\u8C61\u3001<code>NodeList</code>\xA0\u5BF9\u8C61\u8FD9\u4E9B\u539F\u751F\u7684\u6570\u636E\u7ED3\u6784\u90FD\u53EF\u4EE5\u901A\u8FC7<code>for...of...</code>\u8FDB\u884C\u904D\u5386\u3002\u539F\u7406\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u6B64\u5904\u6211\u4EEC\u62FF\u6700\u7B80\u5355\u7684\u6570\u7EC4\u8FDB\u884C\u4E3E\u4F8B\uFF0C\u5F53\u6211\u4EEC\u7528<code>for...of...</code>\u904D\u5386\u6570\u7EC4\u65F6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [1, 2, 3]
const len = arr.length
for(item of arr) {
   console.log(\`\u5F53\u524D\u5143\u7D20\u662F\${item}\`)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E4B\u6240\u4EE5\u80FD\u591F\u6309\u987A\u5E8F\u4E00\u6B21\u4E00\u6B21\u5730\u62FF\u5230\u6570\u7EC4\u91CC\u7684\u6BCF\u4E00\u4E2A\u6210\u5458\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u501F\u52A9\u6570\u7EC4\u7684<code>Symbol.iterator</code>\u751F\u6210\u4E86\u5B83\u5BF9\u5E94\u7684\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C\u901A\u8FC7\u53CD\u590D\u8C03\u7528\u8FED\u4EE3\u5668\u5BF9\u8C61\u7684<code>next</code>\u65B9\u6CD5\u8BBF\u95EE\u4E86\u6570\u7EC4\u6210\u5458\uFF0C\u50CF\u8FD9\u6837\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [1, 2, 3]
// \u901A\u8FC7\u8C03\u7528iterator\uFF0C\u62FF\u5230\u8FED\u4EE3\u5668\u5BF9\u8C61
const iterator = arr[Symbol.iterator]()

// \u5BF9\u8FED\u4EE3\u5668\u5BF9\u8C61\u6267\u884Cnext\uFF0C\u5C31\u80FD\u9010\u4E2A\u8BBF\u95EE\u96C6\u5408\u7684\u6210\u5458
iterator.next()
iterator.next()
iterator.next()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E22\u8FDB\u63A7\u5236\u53F0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230<code>next</code>\u6BCF\u6B21\u4F1A\u6309\u987A\u5E8F\u5E2E\u6211\u4EEC\u8BBF\u95EE\u4E00\u4E2A\u96C6\u5408\u6210\u5458\uFF1A</p><p><img src="`+g+`" alt=""></p><blockquote><p>\u800C<code>for...of...</code>\u505A\u7684\u4E8B\u60C5\uFF0C\u57FA\u672C\u7B49\u4EF7\u4E8E\u4E0B\u9762\u8FD9\u901A\u64CD\u4F5C\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u901A\u8FC7\u8C03\u7528iterator\uFF0C\u62FF\u5230\u8FED\u4EE3\u5668\u5BF9\u8C61
const iterator = arr[Symbol.iterator]()

// \u521D\u59CB\u5316\u4E00\u4E2A\u8FED\u4EE3\u7ED3\u679C
let now = { done: false }

// \u5FAA\u73AF\u5F80\u5916\u8FED\u4EE3\u6210\u5458
while(!now.done) {
    now = iterator.next()
    if(!now.done) {
        console.log(\`\u73B0\u5728\u904D\u5386\u5230\u4E86\${now.value}\`)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53EF\u4EE5\u770B\u51FA\uFF0C<code>for...of...</code>\u5176\u5B9E\u5C31\u662F<code>iterator</code>\u5FAA\u73AF\u8C03\u7528\u6362\u4E86\u79CD\u5199\u6CD5\u3002\u5728ES6\u4E2D\u6211\u4EEC\u4E4B\u6240\u4EE5\u80FD\u591F\u5F00\u5FC3\u5730\u7528<code>for...of...</code>\u904D\u5386\u5404\u79CD\u5404\u79CD\u7684\u96C6\u5408\uFF0C\u5168\u9760\u8FED\u4EE3\u5668\u6A21\u5F0F\u5728\u80CC\u540E\u7ED9\u529B\u3002</p></blockquote>`,56),Ie=e("ps\uFF1A\u6B64\u5904\u63A8\u8350\u9605\u8BFB"),Ee={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",target:"_blank",rel:"noopener noreferrer"},Ve=e("\u8FED\u4EE3\u534F\u8BAE\xA0(opens new window)"),Be=e("\uFF0C\u76F8\u4FE1\u5927\u5BB6\u8BFB\u8FC7\u540E\u4F1A\u5BF9\u8FED\u4EE3\u5668\u5728ES6\u4E2D\u7684\u5B9E\u73B0\u6709\u66F4\u6DF1\u7684\u7406\u89E3\u3002"),Me=d(`<h3 id="_9-3-\u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_9-3-\u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570" aria-hidden="true">#</a> 9.3 \u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570</h3><p>ok\uFF0C\u770B\u8FC7\u4E86\u8FED\u4EE3\u5668\u4ECE\u53E4\u81F3\u4ECA\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u8FED\u4EE3\u5668\u3002</p><p>\u697C\u4E0A\u6211\u4EEC\u8BF4\u8FED\u4EE3\u5668\u5BF9\u8C61\u5168\u51ED\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570\u5E2E\u6211\u4EEC\u751F\u6210\u3002\u5728<code>ES6</code>\u4E2D\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570\u5E76\u4E0D\u662F\u4EC0\u4E48\u96BE\u4E8B\u513F\uFF0C\u56E0\u4E3AES6\u65E9\u5E2E\u6211\u4EEC\u8003\u8651\u597D\u4E86\u5168\u5957\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5185\u7F6E\u4E86\u8D34\u5FC3\u7684\u751F\u6210\u5668\uFF08<code>Generator</code>\uFF09\u4F9B\u6211\u4EEC\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7F16\u5199\u4E00\u4E2A\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570
function *iteratorGenerator() {
    yield &#39;1\u53F7\u9009\u624B&#39;
    yield &#39;2\u53F7\u9009\u624B&#39;
    yield &#39;3\u53F7\u9009\u624B&#39;
}

const iterator = iteratorGenerator()

iterator.next()
iterator.next()
iterator.next()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E22\u8FDB\u63A7\u5236\u53F0\uFF0C\u4E0D\u8D1F\u4F17\u671B\uFF1A</p><p><img src="`+h+`" alt=""></p><p>\u5199\u4E00\u4E2A\u751F\u6210\u5668\u51FD\u6570\u5E76\u6CA1\u6709\u4EC0\u4E48\u96BE\u5EA6\uFF0C\u4F46\u5728\u9762\u8BD5\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u9762\u8BD5\u5B98\u5F80\u5F80\u5BF9\u751F\u6210\u5668\u8FD9\u79CD\u8BED\u6CD5\u7CD6\u80CC\u540E\u7684\u5B9E\u73B0\u903B\u8F91\u66F4\u611F\u5174\u8DA3\u3002\u4E0B\u9762\u6211\u4EEC\u8981\u505A\u7684\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u5199\u4E00\u4E2A\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C\u800C\u662F\u7528<code>ES5</code>\u53BB\u5199\u4E00\u4E2A\u80FD\u591F\u751F\u6210\u8FED\u4EE3\u5668\u5BF9\u8C61\u7684\u8FED\u4EE3\u5668\u751F\u6210\u51FD\u6570\uFF08\u89E3\u6790\u5728\u6CE8\u91CA\u91CC\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49\u751F\u6210\u5668\u51FD\u6570\uFF0C\u5165\u53C2\u662F\u4EFB\u610F\u96C6\u5408
function iteratorGenerator(list) {
    // idx\u8BB0\u5F55\u5F53\u524D\u8BBF\u95EE\u7684\u7D22\u5F15
    var idx = 0
    // len\u8BB0\u5F55\u4F20\u5165\u96C6\u5408\u7684\u957F\u5EA6
    var len = list.length
    return {
        // \u81EA\u5B9A\u4E49next\u65B9\u6CD5
        next: function() {
            // \u5982\u679C\u7D22\u5F15\u8FD8\u6CA1\u6709\u8D85\u51FA\u96C6\u5408\u957F\u5EA6\uFF0Cdone\u4E3Afalse
            var done = idx &gt;= len
            // \u5982\u679Cdone\u4E3Afalse\uFF0C\u5219\u53EF\u4EE5\u7EE7\u7EED\u53D6\u503C
            var value = !done ? list[idx++] : undefined

            // \u5C06\u5F53\u524D\u503C\u4E0E\u904D\u5386\u662F\u5426\u5B8C\u6BD5\uFF08done\uFF09\u8FD4\u56DE
            return {
                done: done,
                value: value
            }
        }
    }
}

var iterator = iteratorGenerator([&#39;1\u53F7\u9009\u624B&#39;, &#39;2\u53F7\u9009\u624B&#39;, &#39;3\u53F7\u9009\u624B&#39;])
iterator.next()
iterator.next()
iterator.next()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5904\u4E3A\u4E86\u8BB0\u5F55\u6BCF\u6B21\u904D\u5386\u7684\u4F4D\u7F6E\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u4E2A\u95ED\u5305\uFF0C\u501F\u52A9\u81EA\u7531\u53D8\u91CF\u6765\u505A\u6211\u4EEC\u7684\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u7684&quot;\u6E38\u6807&quot;\u3002</p><p>\u8FD0\u884C\u4E00\u4E0B\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u8FED\u4EE3\u5668\uFF0C\u7ED3\u679C\u7B26\u5408\u9884\u671F\uFF1A</p><p><img src="`+x+`" alt=""></p><p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u6BD4\u8F83\u7279\u522B\uFF0C\u5B83\u975E\u5E38\u91CD\u8981\uFF0C\u91CD\u8981\u5230\u8BED\u8A00\u548C\u6846\u67B6\u90FD\u4E89\u7740\u62A2\u7740\u5E2E\u6211\u4EEC\u5B9E\u73B0\u3002\u4F46\u4E5F\u6B63\u56E0\u4E3A\u5982\u6B64\uFF0C\u5927\u5BB6\u4E1A\u52A1\u5F00\u53D1\u4E2D\u9700\u8981\u624B\u52A8\u5199\u8FED\u4EE3\u5668\u7684\u573A\u666F\u51E0\u4E4E\u6CA1\u6709\uFF0C\u6240\u4EE5\u5F88\u5C11\u6709\u540C\u5B66\u4F1A\u53BB\u523B\u610F\u7559\u610F\u8FED\u4EE3\u5668\u6A21\u5F0F\u3001\u601D\u8003\u5B83\u80CC\u540E\u7684\u5B9E\u73B0\u673A\u5236\u3002\u901A\u8FC7\u9605\u8BFB\u672C\u8282\uFF0C\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u9886\u7565\u8FED\u4EE3\u5668\u6A21\u5F0F\u7684\u5999\u5904\uFF08\u4E3A\u4EC0\u4E48\u4F1A\u6709\uFF0C\u4E3A\u4EC0\u4E48\u8981\u7528\uFF09\u548C\u8FED\u4EE3\u5668\u6A21\u5F0F\u7684\u5B9E\u73B0\u601D\u8DEF\uFF08\u65B9\u4FBF\u9762\u8BD5\uFF09\u3002</p><h2 id="_10-\u4E2D\u4ECB\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_10-\u4E2D\u4ECB\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 10 \u4E2D\u4ECB\u8005\u6A21\u5F0F</h2><blockquote><p>\u5B9A\u4E49\uFF1A\u5BF9\u8C61\u4E0E\u5BF9\u8C61\u4E4B\u95F4\u501F\u52A9\u7B2C\u4E09\u65B9\u4E2D\u4ECB\u8005\u901A\u4FE1</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Player {
    constructor(name) {
        this.name = name;

        this.playerMiddle = new PlayerMiddle();
        this.playerMiddle.add(name);
    }

    win() {
        this.playerMiddle.win(this.name);
    }

    lose() {
        this.playerMiddle.lose(this.name);
    }
}

// \u4E2D\u4ECB\u8005
class PlayerMiddle {
    constructor() {
        this.players = [];
        this.winArr = [];
        this.loseArr = [];
    }

    add(name) {
        this.players.push(name)
    }

    win(name) {
        this.winArr.push(name)
        if (this.winArr.length + this.loseArr.length === this.players.length) {
            this.show()
        }
    }

    lose(name) {
        this.loseArr.push(name)
        if (this.winArr.length + this.loseArr.length === this.players.length) {
            this.show()
        }
    }

    show() {
        for (let winner of this.winArr) {
            console.log(winner + &#39;\u6311\u6218\u6210\u529F;&#39;)
        }

        for (let loser of this.loseArr) {
            console.log(loser + &#39;\u6311\u6218\u5931\u8D25;&#39;)
        }
    }
}

const a = new Player(&#39;A \u9009\u624B&#39;)
const b = new Player(&#39;B \u9009\u624B&#39;)
const c = new Player(&#39;C \u9009\u624B&#39;)

a.win()
b.win()
c.lose()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-\u4EAB\u5143\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_11-\u4EAB\u5143\u6A21\u5F0F" aria-hidden="true">#</a> 11 \u4EAB\u5143\u6A21\u5F0F</h2><blockquote><p>\u5B9A\u4E49\uFF1A\u4E00\u79CD\u4F18\u5316\u7A0B\u5E8F\u6027\u80FD\u7684\u6A21\u5F0F, \u672C\u8D28\u4E3A\u51CF\u5C11\u5BF9\u8C61\u521B\u5EFA\u7684\u4E2A\u6570\u3002</p></blockquote><p>\u4EE5\u4E0B\u60C5\u51B5\u53EF\u4EE5\u4F7F\u7528\u4EAB\u5143\u6A21\u5F0F</p><ol><li>\u6709\u5927\u91CF\u76F8\u4F3C\u7684\u5BF9\u8C61\uFF0C\u5360\u7528\u4E86\u5927\u91CF\u5185\u5B58</li><li>\u5BF9\u8C61\u4E2D\u5927\u90E8\u5206\u72B6\u6001\u53EF\u4EE5\u62BD\u79BB\u4E3A\u5916\u90E8\u72B6\u6001</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9898\u76EE\uFF1A\u67D0\u5546\u5BB6\u6709 50 \u79CD\u7537\u6B3E\u5185\u8863\u548C 50 \u79CD\u6B3E\u5973\u6B3E\u5185\u8863, \u8981\u5C55\u793A\u5B83\u4EEC\uFF01

class Model {
    constructor(gender) {
        this.gender = gender
        // this.underwear = &#39;&#39;
    }

    /* \u65B9\u6CD5\u4E00 */
    // takePhoto() {
    //     console.log(\`\${this.gender}\u7A7F\u7740\${this.underwear}\`)
    // }

   /* \u65B9\u6CD5\u4E8C */
    takePhoto(i) {
        console.log(\`\${this.gender}\u7A7F\u7740\${i}\u6B3E\u8863\u670D\`)
    }

}

const maleModel = new Model(&#39;male&#39;)
const femaleModel = new Model(&#39;female&#39;)

for (let i = 1; i &lt; 51; i++) {
    // maleModel.underwear = \`\u7B2C\${i}\u6B3E\u8863\u670D\`
    // maleModel.takePhoto()

    maleModel.takePhoto(i)
}

for (let i = 1; i &lt; 51; i++) {
    // femaleModel.underwear = \`\u7B2C\${i}\u6B3E\u8863\u670D\`
    // femaleModel.takePhoto()

    maleModel.takePhoto(i)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function Ae(je,De){const i=v("ExternalLinkIcon");return a(),r("div",null,[q,n("blockquote",null,[n("p",null,[k,n("a",_,[P,s(i)]),y,w,S,I,E])]),V,n("blockquote",null,[n("p",null,[B,M,A,n("a",j,[D,s(i)]),O])]),N,n("blockquote",null,[n("p",null,[C,n("a",T,[R,s(i)]),L,n("a",H,[U,s(i)]),$])]),F,n("blockquote",null,[n("p",null,[Q,n("a",G,[X,J,s(i)]),W,K,z])]),Y,n("blockquote",null,[n("p",null,[Z,n("a",ee,[ne,s(i)]),ie])]),se,n("p",null,[de,n("a",le,[ae,s(i)]),re]),ve,ce,n("p",null,[te,n("a",ue,[oe,s(i)]),me,n("a",be,[pe,s(i)]),ge]),he,n("blockquote",null,[n("p",null,[xe,fe,qe,ke,_e,n("a",Pe,[ye,s(i)]),we])]),Se,n("p",null,[Ie,n("a",Ee,[Ve,s(i)]),Be]),Me])}var Ne=l(f,[["render",Ae],["__file","\u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F.html.vue"]]);export{Ne as default};
