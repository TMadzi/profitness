(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{329:function(t,e,r){"use strict";var n=r(18),o=r(7),l=r(88),c=r(23),f=r(16),m=r(148),N=r(115),v=r(215),x=r(6),d=r(73).f,_=r(34).f,h=r(21).f,I=r(330),A=r(216).trim,w="Number",E=o.Number,y=E.prototype,C=function(t){var e=v(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,r,n,o,l,c,f,code,m=v(t,"number");if(N(m))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(43===(e=(m=A(m)).charCodeAt(0))||45===e){if(88===(r=m.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(c=(l=m.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>o)return NaN;return parseInt(l,n)}return+m};if(l(w,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var T,j=function(t){var e=arguments.length<1?0:E(C(t)),r=this;return r instanceof j&&x((function(){I(r)}))?m(Object(e),r,j):e},k=n?d(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;k.length>B;B++)f(E,T=k[B])&&!f(j,T)&&h(j,T,_(E,T));j.prototype=y,y.constructor=j,c(o,w,j)}},330:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},337:function(t,e,r){"use strict";r.r(e);r(329);var n=r(3).default.extend({props:{feeAmount:Number,isJoining:Boolean,joinAmount:Number,rateName:String,isPurpleBg:Boolean}}),o=r(24),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:py-6",class:[1==t.isPurpleBg?"bg-primary text-white":"bg-white text-primary"]},[r("div",[r("h3",{staticClass:"text-lg font-semibold uppercase text-center tracking-wide"},[t._v(t._s(t.rateName))]),t._v(" "),r("div",{staticClass:"flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"},[r("div",{staticClass:"mt-3 flex items-center"},[r("p",{staticClass:"text-4xl font-extrabold tracking-tight"},[t._v("$"+t._s(t.feeAmount))]),t._v(" "),r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-md",class:[1==t.isPurpleBg?"text-white":"text-gray-600"]},[t._v("USD / mo")]),t._v(" "),1==t.isJoining?r("p",{class:[1==t.isPurpleBg?"text-gray-200":"text-gray-500"]},[t._v("$"+t._s(t.joinAmount)+" joining fee")]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);