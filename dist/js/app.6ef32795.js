(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],f=0,h=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=n("2877"),s={},c=Object(o["a"])(s,r,i,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"maru bg-primary text-white"},[n("span",{attrs:{id:"time"}},[t._v(t._s(t.get_time()))])])]),n("hr"),n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"row bg-light"},[n("div",{staticClass:"shikaku"},[n("span",{attrs:{id:"left"}},[t._v(t._s(t.get_left()))])]),n("div",{staticClass:"shikaku"},[n("span",{attrs:{id:"sign"}},[t._v(t._s(t.get_sign()))])]),n("div",{staticClass:"shikaku"},[n("span",{attrs:{id:"right"}},[t._v(t._s(t.get_right()))])])])]),n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"row"},[n("div",{staticStyle:{"font-size":"70px"}},[t._v("=")]),n("div",{staticClass:"maru bg-warning"},[n("span",{attrs:{id:"ans"}},[t._v(t._s(t.get_ans()))])])])]),n("hr"),n("div",{staticClass:"d-flex justify-content-center"},[n("button",{staticClass:"btn btn-success",attrs:{type:"button",id:"yes"},on:{click:function(e){t.yes(t.get_result())}}},[t._v(" YES ")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button",id:"no"},on:{click:function(e){t.no(t.get_result())}}},[t._v(" NO ")])])])},h=[],d=(n("4795"),n("d4ec")),_=n("bee2"),v=n("2caf"),p=n("262e"),b=n("9ab4"),m=n("6fc5"),S=n("2f62");a["a"].use(S["a"]);var g=new S["a"].Store({}),y=function(t){Object(p["a"])(n,t);var e=Object(v["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.time=0,t.left="",t.sign="",t.right="",t.ans="",t.result=!1,t}return Object(_["a"])(n,[{key:"SET_TIME",value:function(t){this.time=t}},{key:"SET_LEFT",value:function(t){this.left=t}},{key:"SET_SIGN",value:function(t){this.sign=t}},{key:"SET_RIGHT",value:function(t){this.right=t}},{key:"SET_ANS",value:function(t){this.ans=t}},{key:"SET_RESULT",value:function(t){this.result=t}}]),n}(m["c"]);Object(b["a"])([m["b"]],y.prototype,"SET_TIME",null),Object(b["a"])([m["b"]],y.prototype,"SET_LEFT",null),Object(b["a"])([m["b"]],y.prototype,"SET_SIGN",null),Object(b["a"])([m["b"]],y.prototype,"SET_RIGHT",null),Object(b["a"])([m["b"]],y.prototype,"SET_ANS",null),Object(b["a"])([m["b"]],y.prototype,"SET_RESULT",null),y=Object(b["a"])([Object(m["a"])({dynamic:!0,store:g,name:"calculation",namespaced:!0})],y);var M=Object(m["d"])(y),T=function(){function t(){Object(d["a"])(this,t)}return Object(_["a"])(t,[{key:"set_question",value:function(t,e,n){M.SET_LEFT(t),M.SET_SIGN(e),M.SET_RIGHT(n)}},{key:"set_answer",value:function(t){M.SET_ANS(t)}},{key:"sum",value:function(t){var e=Math.floor(100*Math.random())+1,n=Math.floor(100*Math.random())+1;if(this.set_question(String(e),"+",String(n)),t)return M.SET_RESULT(!0),void this.set_answer("".concat(e+n));M.SET_RESULT(!1),0===Math.floor(2*Math.random())?this.set_answer("".concat(e+n+(Math.floor(3*Math.random())+1))):this.set_answer("".concat(e+n-(Math.floor(3*Math.random())+1)))}},{key:"minus",value:function(t){var e=Math.floor(100*Math.random())+1,n=Math.floor(100*Math.random())+1;if(this.set_question(String(e),"-",String(n)),t)return M.SET_RESULT(!0),void this.set_answer("".concat(e-n));M.SET_RESULT(!1),0===Math.floor(2*Math.random())?this.set_answer("".concat(e-n+(Math.floor(3*Math.random())+1))):this.set_answer("".concat(e-n-(Math.floor(3*Math.random())+1)))}},{key:"multiplication",value:function(t){var e=Math.floor(10*Math.random())+1,n=Math.floor(10*Math.random())+1;if(this.set_question(String(e),"×",String(n)),t)return M.SET_RESULT(!0),void this.set_answer("".concat(e*n));M.SET_RESULT(!1),0===Math.floor(2*Math.random())?this.set_answer("".concat(e*n+(Math.floor(3*Math.random())+1))):this.set_answer("".concat(e*n-(Math.floor(3*Math.random())+1)))}},{key:"division",value:function(t){var e,n;while(1)if(e=Math.floor(100*Math.random())+1,n=Math.floor(10*Math.random())+1,e%n===0)break;if(this.set_question(String(e),"÷",String(n)),t)return M.SET_RESULT(!0),void this.set_answer("".concat(e/n));M.SET_RESULT(!1),0===Math.floor(2*Math.random())?this.set_answer("".concat(e/n+(Math.floor(3*Math.random())+1))):this.set_answer("".concat(e/n-(Math.floor(3*Math.random())+1)))}},{key:"reset",value:function(){var t=this,e=function e(){if(M.SET_TIME(M.time-1),0===M.time)return alert("タイムアップ"),void t.reset();t.time_id=setTimeout(e,1e3)};clearTimeout(this.time_id),M.SET_TIME(15),this.time_id=setTimeout(e,1e3);var n=0===Math.floor(2*Math.random()),a=Math.floor(4*Math.random());switch(a){case 0:this.sum(n);break;case 1:this.minus(n);break;case 2:this.multiplication(n);break;case 3:this.division(n);break;default:break}}},{key:"start",value:function(){this.reset()}}],[{key:"get_instance",value:function(){return this.instance||(this.instance=new t),this.instance}}]),t}(),E={data:function(){return{}},methods:{yes:function(t){t?alert("正解"):alert("不正解"),T.get_instance().start()},no:function(t){t?alert("不正解"):alert("正解"),T.get_instance().start()},get_time:function(){return M.time},get_left:function(){return M.left},get_sign:function(){return M.sign},get_right:function(){return M.right},get_ans:function(){return M.ans},get_result:function(){return M.result}},created:function(){T.get_instance().start()}},w=E,k=Object(o["a"])(w,f,h,!1,null,null,null),j=k.exports;a["a"].use(l["a"]);var O=new l["a"]({mode:"history",base:"/",routes:[{path:"/",component:j}]});n("f9e3"),n("2dd8");a["a"].config.productionTip=!1,new a["a"]({router:O,store:g,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.6ef32795.js.map