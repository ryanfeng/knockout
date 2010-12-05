// Knockout JavaScript library v1.1.2pre
// (c) 2010 Steven Sanderson - http://knockoutjs.com/
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

function a(f){throw f;}var m=true,o=null,p=false,r=window.ko={};r.b=function(f,b){for(var c=f.split("."),d=window,e=0;e<c.length-1;e++)d=d[c[e]];d[c[c.length-1]]=b};r.g=function(f,b,c){f[b]=c};
r.a=new function(){var f=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;return{ca:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],h:function(b,c){for(var d=0,e=b.length;d<e;d++)c(b[d])},i:function(b,c){if(typeof b.indexOf=="function")return b.indexOf(c);for(var d=0,e=b.length;d<e;d++)if(b[d]==c)return d;return-1},wa:function(b,c,d){for(var e=0,h=b.length;e<h;e++)if(c.call(d,b[e]))return b[e];return o},Z:function(b,c){var d=r.a.i(b,c);d>=0&&b.splice(d,1)},Y:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<
e;d++)r.a.i(c,b[d])<0&&c.push(b[d]);return c},L:function(b,c){b=b||[];for(var d=[],e=0,h=b.length;e<h;e++)d.push(c(b[e]));return d},K:function(b,c){b=b||[];for(var d=[],e=0,h=b.length;e<h;e++)c(b[e])&&d.push(b[e]);return d},M:function(b,c){for(var d=0,e=c.length;d<e;d++)b.push(c[d])},ba:function(b){for(;b.firstChild;){r.a.e.N(b.firstChild);b.removeChild(b.firstChild)}},Sa:function(b,c){r.a.ba(b);c&&r.a.h(c,function(d){b.appendChild(d)})},ka:function(b,c){var d=b.nodeType?[b]:b;if(d.length>0){for(var e=
d[0],h=e.parentNode,g=0,i=c.length;g<i;g++)h.insertBefore(c[g],e);g=0;for(i=d.length;g<i;g++){r.a.e.N(d[g]);h.removeChild(d[g])}}},na:function(b,c){if(navigator.userAgent.indexOf("MSIE 6")>=0)b.setAttribute("selected",c);else b.selected=c},Ha:function(b,c){if(!b||b.nodeType!=1)return[];var d=[];b.getAttribute(c)!==o&&d.push(b);for(var e=b.getElementsByTagName("*"),h=0,g=e.length;h<g;h++)e[h].getAttribute(c)!==o&&d.push(e[h]);return d},k:function(b){return(b||"").replace(f,"")},Za:function(b,c){for(var d=
[],e=(b||"").split(c),h=0,g=e.length;h<g;h++){var i=r.a.k(e[h]);i!==""&&d.push(i)}return d},Ta:function(b,c){b=b||"";if(c.length>b.length)return p;return b.substring(0,c.length)===c},Fa:function(b,c){if(c===undefined)return(new Function("return "+b))();with(c)return eval("("+b+")")},Da:function(b,c){if(c.compareDocumentPosition)return(c.compareDocumentPosition(b)&16)==16;for(;b!=o;){if(b==c)return m;b=b.parentNode}return p},A:function(b){return r.a.Da(b,document)},q:function(b,c,d){if(typeof jQuery!=
"undefined")jQuery(b).bind(c,d);else if(typeof b.addEventListener=="function")b.addEventListener(c,d,p);else if(typeof b.attachEvent!="undefined")b.attachEvent("on"+c,function(e){d.call(b,e)});else a(Error("Browser doesn't support addEventListener or attachEvent"))},Wa:function(b,c){if(!(b&&b.nodeType))a(Error("element must be a DOM node when calling triggerEvent"));if(typeof document.createEvent=="function")if(typeof b.dispatchEvent=="function"){var d=document.createEvent(c=="click"?"MouseEvents":
"HTMLEvents");d.initEvent(c,m,m,window,0,0,0,0,0,p,p,p,p,0,b);b.dispatchEvent(d)}else a(Error("The supplied element doesn't support dispatchEvent"));else if(typeof b.fireEvent!="undefined"){if(c=="click")if(b.tagName=="INPUT"&&(b.type.toLowerCase()=="checkbox"||b.type.toLowerCase()=="radio"))b.checked=b.checked!==m;b.fireEvent("on"+c)}else a(Error("Browser doesn't support triggering events"))},d:function(b){return r.C(b)?b():b},Ca:function(b,c){return r.a.i((b.className||"").split(/\s+/),c)>=0},Va:function(b,
c,d){var e=r.a.Ca(b,c);if(d&&!e)b.className=(b.className||"")+" "+c;else if(e&&!d){d=(b.className||"").split(/\s+/);e="";for(var h=0;h<d.length;h++)if(d[h]!=c)e+=d[h]+" ";b.className=r.a.k(e)}},Pa:function(b,c){b=r.a.d(b);c=r.a.d(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},ha:function(b){for(var c=[],d=b.length-1;d>=0;d--)c.push(b[d]);return c},P:/MSIE 6/i.test(navigator.userAgent),ea:function(b,c){for(var d=r.a.ha(b.getElementsByTagName("INPUT")).concat(r.a.ha(b.getElementsByTagName("TEXTAREA"))),
e=typeof c=="string"?function(i){return i.name===c}:function(i){return c.test(i.name)},h=[],g=d.length-1;g>=0;g--)e(d[g])&&h.push(d[g]);return h},G:function(b){if(typeof b=="string")if(b=r.a.k(b)){if(window.JSON&&window.JSON.parse)return window.JSON.parse(b);return(new Function("return "+b))()}return o},T:function(b){if(typeof JSON=="undefined"||typeof JSON.stringify=="undefined")a(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));
return JSON.stringify(r.a.d(b))},Oa:function(b,c,d){d=d||{};var e=d.params||{},h=d.includeFields||this.ca,g=b;if(typeof b=="object"&&b.tagName=="FORM"){g=b.action;for(var i=h.length-1;i>=0;i--)for(var j=r.a.ea(b,h[i]),k=j.length-1;k>=0;k--)e[j[k].name]=j[k].value}c=r.a.d(c);var l=document.createElement("FORM");l.style.display="none";l.action=g;l.method="post";for(var n in c){b=document.createElement("INPUT");b.name=n;b.value=r.a.T(r.a.d(c[n]));l.appendChild(b)}for(n in e){b=document.createElement("INPUT");
b.name=n;b.value=e[n];l.appendChild(b)}document.body.appendChild(l);d.submitter?d.submitter(l):l.submit();setTimeout(function(){l.parentNode.removeChild(l)},0)},e:{Xa:0,w:"__ko__"+(new Date).getTime(),Ya:{},t:function(b,c){var d=r.a.e.da(b,p);return d===undefined?undefined:d[c]},la:function(b,c,d){r.a.e.da(b,m)[c]=d},da:function(b,c){var d=b[r.a.e.w];if(!d){if(!c)return;d=b[r.a.e.w]="ko"+r.a.e.Xa++;r.a.e[d]={}}return r.a.e[d]},$:function(b){var c=b[r.a.e.w];if(c){delete r.a.e[c];b[r.a.e.w]=o}},N:function(b){if(!(b.nodeType!=
1&&b.nodeType!=9)){r.a.e.$(b);b=b.getElementsByTagName("*");for(var c=0,d=b.length;c<d;c++)r.a.e.$(b[c])}}}}};r.b("ko.utils",r.a);r.b("ko.utils.arrayForEach",r.a.h);r.b("ko.utils.arrayFirst",r.a.wa);r.b("ko.utils.arrayFilter",r.a.K);r.b("ko.utils.arrayGetDistinctValues",r.a.Y);r.b("ko.utils.arrayIndexOf",r.a.i);r.b("ko.utils.arrayMap",r.a.L);r.b("ko.utils.arrayPushAll",r.a.M);r.b("ko.utils.arrayRemoveItem",r.a.Z);r.b("ko.utils.fieldsIncludedWithJsonPost",r.a.ca);r.b("ko.utils.getFormFields",r.a.ea);
r.b("ko.utils.postJson",r.a.Oa);r.b("ko.utils.parseJson",r.a.G);r.b("ko.utils.stringifyJson",r.a.T);r.b("ko.utils.range",r.a.Pa);r.b("ko.utils.triggerEvent",r.a.Wa);r.b("ko.utils.unwrapObservable",r.a.d);Function.prototype.bind||(Function.prototype.bind=function(f){var b=this,c=Array.prototype.slice.call(arguments);f=c.shift();return function(){return b.apply(f,c.concat(Array.prototype.slice.call(arguments)))}});
r.j=function(){function f(){return((1+Math.random())*4294967296|0).toString(16).substring(1)}function b(d,e){if(d)if(d.nodeType==8){var h=r.j.ia(d.nodeValue);h!=o&&e.push({Ba:d,La:h})}else if(d.nodeType==1){h=0;for(var g=d.childNodes,i=g.length;h<i;h++)b(g[h],e)}}var c={};return{R:function(d){if(typeof d!="function")a(Error("You can only pass a function to ko.memoization.memoize()"));var e=f()+f();c[e]=d;return"<!--[ko_memo:"+e+"]--\>"},qa:function(d,e){var h=c[d];if(h===undefined)a(Error("Couldn't find any memo with ID "+
d+". Perhaps it's already been unmemoized."));try{h.apply(o,e||[]);return m}finally{delete c[d]}},ra:function(d,e){var h=[];b(d,h);for(var g=0,i=h.length;g<i;g++){var j=h[g].Ba,k=[j];e&&r.a.M(k,e);r.j.qa(h[g].La,k);j.nodeValue="";j.parentNode&&j.parentNode.removeChild(j)}},ia:function(d){return(d=d.match(/^\[ko_memo\:(.*?)\]$/))?d[1]:o}}}();r.b("ko.memoization",r.j);r.b("ko.memoization.memoize",r.j.R);r.b("ko.memoization.unmemoize",r.j.qa);r.b("ko.memoization.parseMemoText",r.j.ia);
r.b("ko.memoization.unmemoizeDomNodeAndDescendants",r.j.ra);r.Ua=function(f,b){this.ya=f;this.s=b;r.g(this,"dispose",this.s)};r.U=function(){var f=[];this.V=function(b,c){var d=new r.Ua(c?function(){b.call(c)}:b,function(){r.a.Z(f,d)});f.push(d);return d};this.v=function(b){r.a.h(f.slice(0),function(c){c&&c.ya(b)})};this.Ia=function(){return f.length};r.g(this,"subscribe",this.V);r.g(this,"notifySubscribers",this.v);r.g(this,"getSubscriptionsCount",this.Ia)};
r.ga=function(f){return typeof f.V=="function"&&typeof f.v=="function"};r.b("ko.subscribable",r.U);r.b("ko.isSubscribable",r.ga);r.z=function(){var f=[];return{xa:function(){f.push([])},end:function(){return f.pop()},ja:function(b){if(!r.ga(b))a("Only subscribable things can act as dependencies");f.length>0&&f[f.length-1].push(b)}}}();
r.p=function(f){function b(){if(arguments.length>0){c=arguments[0];b.v(c);return this}else{r.z.ja(b);return c}}var c=f;b.n=r.p;b.I=function(){b.v(c)};r.U.call(b);r.g(b,"valueHasMutated",b.I);return b};r.C=function(f){if(f===o||f===undefined||f.n===undefined)return p;if(f.n===r.p)return m;return r.C(f.n)};r.D=function(f){if(typeof f=="function"&&f.n===r.p)return m;if(typeof f=="function"&&f.n===r.m&&f.Ja)return m;return p};r.b("ko.observable",r.p);r.b("ko.isObservable",r.C);
r.b("ko.isWriteableObservable",r.D);
r.Na=function(f){var b=new r.p(f);r.a.h(["pop","push","reverse","shift","sort","splice","unshift"],function(c){b[c]=function(){var d=b();d=d[c].apply(d,arguments);b.I();return d}});r.a.h(["slice"],function(c){b[c]=function(){var d=b();return d[c].apply(d,arguments)}});b.remove=function(c){for(var d=b(),e=[],h=[],g=typeof c=="function"?c:function(l){return l===c},i=0,j=d.length;i<j;i++){var k=d[i];g(k)?h.push(k):e.push(k)}b(e);return h};b.Qa=function(c){if(!c)return[];return b.remove(function(d){return r.a.i(c,
d)>=0})};b.aa=function(c){for(var d=b(),e=typeof c=="function"?c:function(g){return g===c},h=d.length-1;h>=0;h--)if(e(d[h]))d[h]._destroy=m;b.I()};b.Aa=function(c){if(!c)return[];return b.aa(function(d){return r.a.i(c,d)>=0})};b.indexOf=function(c){var d=b();return r.a.i(d,c)};b.replace=function(c,d){var e=b.indexOf(c);if(e>=0){b()[e]=d;b.I()}};r.g(b,"remove",b.remove);r.g(b,"removeAll",b.Qa);r.g(b,"destroy",b.aa);r.g(b,"destroyAll",b.Aa);r.g(b,"indexOf",b.indexOf);return b};
r.b("ko.observableArray",r.Na);
r.m=function(f,b,c){function d(){r.a.h(i,function(l){l.s()});i=[]}function e(l){d();r.a.h(l,function(n){i.push(n.V(h))})}function h(){if(!k&&typeof c.disposeWhen=="function")if(c.disposeWhen()){g.s();return}try{r.z.xa();j=c.owner?c.read.call(c.owner):c.read()}finally{var l=r.a.Y(r.z.end());e(l)}g.v(j);k=p}function g(){if(arguments.length>0)if(typeof c.write==="function"){var l=arguments[0];c.owner?c.write.call(c.owner,l):c.write(l)}else a("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");else{r.z.ja(g);
return j}}if(f&&typeof f=="object")c=f;else{c=c||{};c.read=f||c.read;c.owner=b||c.owner}if(typeof c.read!="function")a("Pass a function that returns the value of the dependentObservable");var i=[],j,k=m;g.n=r.m;g.Ga=function(){return i.length};g.Ja=typeof c.write==="function";g.s=function(){d()};r.U.call(g);h();r.g(g,"dispose",g.s);r.g(g,"getDependenciesCount",g.Ga);return g};r.m.n=r.p;r.b("ko.dependentObservable",r.m);
(function(){function f(d,e,h){h=h||new c;d=e(d);if(!(typeof d=="object"&&d!==o&&d!==undefined))return d;var g=d instanceof Array?[]:{};h.save(d,g);b(d,function(i){var j=e(d[i]);switch(typeof j){case "boolean":case "number":case "string":case "function":g[i]=j;break;case "object":case "undefined":var k=h.t(j);g[i]=k!==undefined?k:f(j,e,h)}});return g}function b(d,e){if(d instanceof Array)for(var h=0;h<d.length;h++)e(h);else for(h in d)e(h)}function c(){var d=[],e=[];this.save=function(h,g){var i=r.a.i(d,
h);if(i>=0)e[i]=g;else{d.push(h);e.push(g)}};this.t=function(h){h=r.a.i(d,h);return h>=0?e[h]:undefined}}r.pa=function(d){if(arguments.length==0)a(Error("When calling ko.toJS, pass the object you want to convert."));return f(d,function(e){for(var h=0;r.C(e)&&h<10;h++)e=e();return e})};r.toJSON=function(d){d=r.pa(d);return r.a.T(d)}})();r.b("ko.toJS",r.pa);r.b("ko.toJSON",r.toJSON);
r.f={l:function(f){if(f.tagName=="OPTION"){var b=f.getAttribute("value");if(b!==r.c.options.F)return b;return r.a.e.t(f,r.c.options.F)}else return f.tagName=="SELECT"?f.selectedIndex>=0?r.f.l(f.options[f.selectedIndex]):undefined:f.value},J:function(f,b){if(f.tagName=="OPTION"){r.a.e.la(f,r.c.options.F,b);f.value=r.c.options.F}else if(f.tagName=="SELECT")for(var c=f.options.length-1;c>=0;c--){if(r.f.l(f.options[c])==b){f.selectedIndex=c;break}}else f.value=b}};r.b("ko.selectExtensions",r.f);
r.b("ko.selectExtensions.readValue",r.f.l);r.b("ko.selectExtensions.writeValue",r.f.J);
r.o=function(){function f(e,h){return e.replace(b,function(g,i){return h[i]})}var b=/\[ko_token_(\d+)\]/g,c=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,d=["true","false"];return{G:function(e){e=r.a.k(e);if(e.length<3)return{};for(var h=[],g=o,i,j=e.charAt(0)=="{"?1:0;j<e.length;j++){var k=e.charAt(j);if(g===o)switch(k){case '"':case "'":case "/":g=j;i=k;break;case "{":g=j;i="}";break;case "[":g=j;i="]"}else if(k==i){k=e.substring(g,j+1);h.push(k);var l="[ko_token_"+(h.length-
1)+"]";e=e.substring(0,g)+l+e.substring(j+1);j-=k.length-l.length;g=o}}g={};e=e.split(",");i=0;for(j=e.length;i<j;i++){l=e[i];var n=l.indexOf(":");if(n>0&&n<l.length-1){k=r.a.k(l.substring(0,n));l=r.a.k(l.substring(n+1));if(k.charAt(0)=="{")k=k.substring(1);if(l.charAt(l.length-1)=="}")l=l.substring(0,l.length-1);k=r.a.k(f(k,h));l=r.a.k(f(l,h));g[k]=l}}return g},O:function(e){var h=r.o.G(e),g=[],i;for(i in h){var j=h[i],k;k=j;k=r.a.i(d,r.a.k(k).toLowerCase())>=0?p:k.match(c)!==o;if(k){g.length>0&&
g.push(", ");g.push(i+" : function(__ko_value) { "+j+" = __ko_value; }")}}if(g.length>0)e=e+", '_ko_property_writers' : { "+g.join("")+" } ";return e}}}();r.b("ko.jsonExpressionRewriting",r.o);r.b("ko.jsonExpressionRewriting.parseJson",r.o.G);r.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson",r.o.O);r.c={};
r.X=function(f,b,c){function d(i){return function(){return g[i]}}function e(){return g}var h=m,g;new r.m(function(){var i;if(!(i=typeof b=="function"?b():b)){var j=f.getAttribute("data-bind");try{var k=" { "+r.o.O(j)+" } ";i=r.a.Fa(k,c===o?window:c)}catch(l){a(Error("Unable to parse binding attribute.\nMessage: "+l+";\nAttribute value: "+j))}}g=i;if(h)for(var n in g)r.c[n]&&typeof r.c[n].init=="function"&&(0,r.c[n].init)(f,d(n),e,c);for(n in g)r.c[n]&&typeof r.c[n].update=="function"&&(0,r.c[n].update)(f,
d(n),e,c)},o,{disposeWhen:function(){return!r.a.A(f)}});h=p};r.ta=function(f,b){if(b&&b.nodeType==undefined)a(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node (note: this is a breaking change since KO version 1.05)"));b=b||window.document.body;var c=r.a.Ha(b,"data-bind");r.a.h(c,function(d){r.X(d,o,f)})};r.b("ko.bindingHandlers",r.c);r.b("ko.applyBindings",r.ta);
r.c.click={init:function(f,b,c,d){r.a.q(f,"click",function(e){var h,g=b();try{h=g.call(d)}finally{if(h!==m)if(e.preventDefault)e.preventDefault();else e.returnValue=p}})}};r.c.submit={init:function(f,b,c,d){if(typeof b()!="function")a(Error("The value for a submit binding must be a function to invoke on submit"));r.a.q(f,"submit",function(e){var h,g=b();try{h=g.call(d,f)}finally{if(h!==m)if(e.preventDefault)e.preventDefault();else e.returnValue=p}})}};
r.c.visible={update:function(f,b){var c=r.a.d(b()),d=f.style.display!="none";if(c&&!d)f.style.display="";else if(!c&&d)f.style.display="none"}};r.c.enable={update:function(f,b){var c=r.a.d(b());if(c&&f.disabled)f.removeAttribute("disabled");else if(!c&&!f.disabled)f.disabled=m}};r.c.disable={update:function(f,b){r.c.enable.update(f,function(){return!r.a.d(b())})}};
r.c.value={init:function(f,b,c){var d=c().valueUpdate||"change",e=p;if(r.a.Ta(d,"after")){e=m;d=d.substring(5)}var h=e?function(g){setTimeout(g,0)}:function(g){g()};r.a.q(f,d,function(){h(function(){var g=b(),i=r.f.l(f);if(r.D(g))g(i);else{g=c();g._ko_property_writers&&g._ko_property_writers.value&&g._ko_property_writers.value(i)}})})},update:function(f,b){var c=r.a.d(b());if(c!=r.f.l(f)){var d=function(){r.f.J(f,c)};d();f.tagName=="SELECT"&&setTimeout(d,0)}}};
r.c.options={update:function(f,b,c){if(f.tagName!="SELECT")a(Error("options binding applies only to SELECT elements"));var d=r.a.L(r.a.K(f.childNodes,function(k){return k.tagName&&k.tagName=="OPTION"&&k.selected}),function(k){return r.f.l(k)||k.innerText||k.textContent}),e=r.a.d(b());r.a.ba(f);if(e){var h=c();if(typeof e.length!="number")e=[e];if(h.optionsCaption){var g=document.createElement("OPTION");g.innerHTML=h.optionsCaption;r.f.J(g,undefined);f.appendChild(g)}c=0;for(b=e.length;c<b;c++){g=
document.createElement("OPTION");var i=typeof h.optionsValue=="string"?e[c][h.optionsValue]:e[c],j=typeof h.optionsText=="string"?e[c][h.optionsText]:i;i=r.a.d(i);j=r.a.d(j);if(typeof i=="object")r.f.J(g,i);else g.value=i.toString();g.innerHTML=j.toString();f.appendChild(g)}f=f.getElementsByTagName("OPTION");c=e=0;for(b=f.length;c<b;c++)if(r.a.i(d,r.f.l(f[c]))>=0){r.a.na(f[c],m);e++}}}};r.c.options.F="__ko.bindingHandlers.options.optionValueDomData__";
r.c.selectedOptions={fa:function(f){var b=[];f=f.childNodes;for(var c=0,d=f.length;c<d;c++){var e=f[c];e.tagName=="OPTION"&&e.selected&&b.push(r.f.l(e))}return b},init:function(f,b,c){r.a.q(f,"change",function(){var d=b();if(r.D(d))d(r.c.selectedOptions.fa(this));else{d=c();d._ko_property_writers&&d._ko_property_writers.value&&d._ko_property_writers.value(r.c.selectedOptions.fa(this))}})},update:function(f,b){if(f.tagName!="SELECT")a(Error("values binding applies only to SELECT elements"));var c=
r.a.d(b());if(c&&typeof c.length=="number")for(var d=f.childNodes,e=0,h=d.length;e<h;e++){var g=d[e];g.tagName=="OPTION"&&r.a.na(g,r.a.i(c,r.f.l(g))>=0)}}};r.c.text={update:function(f,b){var c=r.a.d(b());typeof f.innerText=="string"?f.innerText=c:f.textContent=c}};r.c.css={update:function(f,b){var c=r.a.d(b()||{}),d;for(d in c)if(typeof d=="string"){var e=r.a.d(c[d]);r.a.Va(f,d,e)}}};
r.c.style={update:function(f,b){var c=r.a.d(b()||{}),d;for(d in c)if(typeof d=="string"){var e=r.a.d(c[d]);f.style[d]=e||""}}};r.c.uniqueName={init:function(f,b){if(b()){f.name="ko_unique_"+ ++r.c.uniqueName.za;r.a.P&&f.mergeAttributes(document.createElement("<INPUT name='"+f.name+"'/>"),p)}}};r.c.uniqueName.za=0;
r.c.checked={init:function(f,b,c){function d(){var e=b();if(r.D(e))if(f.type=="checkbox")e(f.checked);else f.type=="radio"&&f.checked&&e(f.value);else{e=c();if(e._ko_property_writers&&e._ko_property_writers.checked)if(f.type=="checkbox")e._ko_property_writers.checked(f.checked);else f.type=="radio"&&f.checked&&e._ko_property_writers.checked(f.value)}}r.a.q(f,"change",d);r.a.q(f,"click",d);f.type=="radio"&&!f.name&&r.c.uniqueName.init(f,function(){return m})},update:function(f,b){var c=r.a.d(b());
if(f.type=="checkbox")(f.checked=c)&&r.a.P&&f.mergeAttributes(document.createElement("<INPUT type='checkbox' checked='checked' />"),p);else if(f.type=="radio"){f.checked=f.value==c;f.value==c&&r.a.P&&f.mergeAttributes(document.createElement("<INPUT type='radio' checked='checked' />"),p)}}};
r.W=function(){this.renderTemplate=function(){a("Override renderTemplate in your ko.templateEngine subclass")};this.isTemplateRewritten=function(){a("Override isTemplateRewritten in your ko.templateEngine subclass")};this.rewriteTemplate=function(){a("Override rewriteTemplate in your ko.templateEngine subclass")};this.createJavaScriptEvaluatorBlock=function(){a("Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass")}};r.b("ko.templateEngine",r.W);
r.H=function(){var f=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/g;return{Ea:function(b,c){c.isTemplateRewritten(b)||c.rewriteTemplate(b,function(d){return r.H.Ma(d,c)})},Ma:function(b,c){return b.replace(f,function(d,e,h,g,i,j,k){d=k;d=r.o.O(d);return c.createJavaScriptEvaluatorBlock("ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {                     return (function() { return { "+d+" } })()                 })")+e})},
ua:function(b){return r.j.R(function(c,d){c.nextSibling&&r.X(c.nextSibling,b,d)})}}}();r.b("ko.templateRewriting",r.H);r.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling",r.H.ua);
(function(){function f(c,d,e,h,g){var i=r.a.d(h);g=g||{};var j=g.templateEngine||b;r.H.Ea(e,j);e=j.renderTemplate(e,i,g);if(typeof e.length!="number"||e.length>0&&typeof e[0].nodeType!="number")a("Template engine must return an array of DOM nodes");e&&r.a.h(e,function(k){r.j.ra(k,[h])});switch(d){case "replaceChildren":r.a.Sa(c,e);break;case "replaceNode":r.a.ka(c,e);break;case "ignoreTargetNode":break;default:a(Error("Unknown renderMode: "+d))}return e}var b;r.oa=function(c){if(c!=undefined&&!(c instanceof
r.W))a("templateEngine must inherit from ko.templateEngine");b=c};r.S=function(c,d,e,h,g){e=e||{};if((e.templateEngine||b)==undefined)a("Set a template engine before calling renderTemplate");g=g||"replaceChildren";if(h){var i=h.nodeType?h:h.length>0?h[0]:o;return new r.m(function(){var j=f(h,g,c,d,e);if(g=="replaceNode"){h=j;i=h.nodeType?h:h.length>0?h[0]:o}},o,{disposeWhen:function(){return!i||!r.a.A(i)}})}else return r.j.R(function(j){r.S(c,d,e,j,"replaceNode")})};r.Ra=function(c,d,e,h){new r.m(function(){var g=
r.a.d(d)||[];if(typeof g.length=="undefined")g=[g];g=r.a.K(g,function(i){return e.includeDestroyed||!i._destroy});r.a.ma(h,g,function(i){return f(o,"ignoreTargetNode",c,i,e)},e)},o,{disposeWhen:function(){return!r.a.A(h)}})};r.c.template={update:function(c,d,e,h){e=r.a.d(d());d=typeof e=="string"?e:e.name;if(typeof e.foreach!="undefined")r.Ra(d,e.foreach||[],{afterAdd:e.afterAdd,beforeRemove:e.beforeRemove,includeDestroyed:e.includeDestroyed},c);else{e=e.data;r.S(d,typeof e=="undefined"?h:e,o,c)}}}})();
r.b("ko.setTemplateEngine",r.oa);r.b("ko.renderTemplate",r.S);
r.a.r=function(f,b,c){if(c===undefined)return r.a.r(f,b,1)||r.a.r(f,b,10)||r.a.r(f,b,Number.MAX_VALUE);else{f=f||[];b=b||[];for(var d=f,e=b,h=[],g=0;g<=e.length;g++)h[g]=[];g=0;for(var i=Math.min(d.length,c);g<=i;g++)h[0][g]=g;g=1;for(i=Math.min(e.length,c);g<=i;g++)h[g][0]=g;i=d.length;var j,k=e.length;for(g=1;g<=i;g++){var l=Math.min(k,g+c);for(j=Math.max(1,g-c);j<=l;j++)h[j][g]=d[g-1]===e[j-1]?h[j-1][g-1]:Math.min(h[j-1][g]===undefined?Number.MAX_VALUE:h[j-1][g]+1,h[j][g-1]===undefined?Number.MAX_VALUE:
h[j][g-1]+1)}f=f;b=b;c=f.length;d=b.length;e=[];g=h[d][c];if(g===undefined)h=o;else{for(;c>0||d>0;){i=h[d][c];j=d>0?h[d-1][c]:g+1;k=c>0?h[d][c-1]:g+1;l=d>0&&c>0?h[d-1][c-1]:g+1;if(j===undefined||j<i-1)j=g+1;if(k===undefined||k<i-1)k=g+1;if(l<i-1)l=g+1;if(j<=k&&j<l){e.push({status:"added",value:b[d-1]});d--}else{if(k<j&&k<l)e.push({status:"deleted",value:f[c-1]});else{e.push({status:"retained",value:f[c-1]});d--}c--}}h=e.reverse()}return h}};r.b("ko.utils.compareArrays",r.a.r);
(function(){function f(b,c){var d=[];r.m(function(){var e=b(c)||[];d.length>0&&r.a.ka(d,e);d.splice(0,d.length);r.a.M(d,e)},o,{disposeWhen:function(){return d.length==0||!r.a.A(d[0])}});return d}r.a.ma=function(b,c,d,e){c=c||[];e=e||{};var h=r.a.e.t(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===undefined,g=r.a.e.t(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=r.a.L(g,function(s){return s.va}),j=r.a.r(i,c);c=[];var k=0,l=[];i=[];for(var n=o,q=0,w=j.length;q<w;q++)switch(j[q].status){case "retained":var t=
g[k];c.push(t);if(t.B.length>0)n=t.B[t.B.length-1];k++;break;case "deleted":r.a.h(g[k].B,function(s){l.push({element:s,index:q,value:j[q].value});n=s});k++;break;case "added":t=f(d,j[q].value);c.push({va:j[q].value,B:t});for(var v=0,x=t.length;v<x;v++){var u=t[v];i.push({element:u,index:q,value:j[q].value});if(n==o)b.firstChild?b.insertBefore(u,b.firstChild):b.appendChild(u);else n.nextSibling?b.insertBefore(u,n.nextSibling):b.appendChild(u);n=u}}r.a.h(l,function(s){r.a.e.N(s.element)});d=p;if(!h){if(e.afterAdd)for(q=
0;q<i.length;q++)e.afterAdd(i[q].element,i[q].index,i[q].value);if(e.beforeRemove){for(q=0;q<l.length;q++)e.beforeRemove(l[q].element,l[q].index,l[q].value);d=m}}d||r.a.h(l,function(s){s.element.parentNode&&s.element.parentNode.removeChild(s.element)});r.a.e.la(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult",c)}})();r.b("ko.utils.setDomNodeChildrenFromArrayMapping",r.a.ma);
r.Q=function(){function f(c){var d=document.getElementById(c);if(d==o)a(Error("Cannot find template with ID="+c));return d}this.u=function(){if(typeof jQuery=="undefined"||!jQuery.tmpl)return 0;if(jQuery.tmpl.tag)return 2;return 1}();var b=RegExp("__ko_apos__","g");this.renderTemplate=function(c,d){if(this.u==0)a(Error("jquery.tmpl not detected.\nTo use KO's default template engine, reference jQuery and jquery.tmpl. See Knockout installation documentation for more details."));if(this.u==1){var e=
'<script type="text/html">'+f(c).text+"<\/script>";e=jQuery.tmpl(e,d)[0].text.replace(b,"'");return jQuery.clean([e],document)}d=[d];e=f(c).text;return jQuery.tmpl(e,d)};this.isTemplateRewritten=function(c){return f(c).Ka===m};this.rewriteTemplate=function(c,d){var e=f(c),h=d(e.text);if(this.u==1){h=r.a.k(h);h=h.replace(/([\s\S]*?)(\${[\s\S]*?}|{{[\=a-z][\s\S]*?}}|$)/g,function(g,i,j){return i.replace(/\'/g,"__ko_apos__")+j})}e.text=h;e.Ka=m};this.createJavaScriptEvaluatorBlock=function(c){if(this.u==
1)return"{{= "+c+"}}";return"{{ko_code ((function() { return "+c+" })()) }}"};this.sa=function(c,d){document.write("<script type='text/html' id='"+c+"'>"+d+"<\/script>")};r.g(this,"addTemplate",this.sa);if(this.u>1)jQuery.tmpl.tag.ko_code={open:"_.push($1 || '');"}};r.Q.prototype=new r.W;r.oa(new r.Q);r.b("ko.jqueryTmplTemplateEngine",r.Q);
