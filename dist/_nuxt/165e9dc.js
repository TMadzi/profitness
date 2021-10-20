(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11,12],{318:function(t,e,r){"use strict";r.r(e);var n=r(3).default.extend({props:{text1:String,text2:String,size:String,color1:String,color2:String}}),l=r(24),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"px-4 uppercase font-black pt-4 pb-2 text-5xl lg:px-32 lg:text-6xl lg:pt-16 lg:pb-8",class:t.color2},[t._v("\n    "+t._s(t.text1)+" "),r("span",{class:t.color1},[t._v(t._s(t.text2))])])}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,r){"use strict";var n=r(18),l=r(7),o=r(89),c=r(23),m=r(16),f=r(145),d=r(114),x=r(209),v=r(6),_=r(74).f,N=r(34).f,h=r(21).f,A=r(324),C=r(210).trim,y="Number",I=l.Number,w=I.prototype,S=function(t){var e=x(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,r,n,l,o,c,m,code,f=x(t,"number");if(d(f))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+f}for(c=(o=f.slice(2)).length,m=0;m<c;m++)if((code=o.charCodeAt(m))<48||code>l)return NaN;return parseInt(o,n)}return+f};if(o(y,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var j,P=function(t){var e=arguments.length<1?0:I(S(t)),r=this;return r instanceof P&&v((function(){A(r)}))?f(Object(e),r,P):e},k=n?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;k.length>B;B++)m(I,j=k[B])&&!m(P,j)&&h(P,j,N(I,j));P.prototype=w,w.constructor=P,c(l,y,P)}},324:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},327:function(t,e,r){"use strict";r.r(e);r(323);var n=r(3).default.extend({props:{feeAmount:Number,isJoining:Boolean,joinAmount:Number,rateName:String,isPurpleBg:Boolean}}),l=r(24),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-primary  pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:py-6",class:[1==t.isPurpleBg?"bg-primary text-white":"bg-white text-primary"]},[r("div",[r("h3",{staticClass:"text-sm font-semibold uppercase text-center tracking-wide"},[t._v(t._s(t.rateName))]),t._v(" "),r("div",{staticClass:"flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"},[r("div",{staticClass:"mt-3 flex items-center"},[r("p",{staticClass:"text-4xl font-extrabold tracking-tight"},[t._v("$"+t._s(t.feeAmount))]),t._v(" "),r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-sm",class:[1==t.isPurpleBg?"text-white":"text-gray-500"]},[t._v("USD / mo")]),t._v(" "),1==t.isJoining?r("p",{staticClass:"text-gray-200 text-sm",class:[1==t.isPurpleBg?"text-gray-200":"text-gray-500"]},[t._v("$"+t._s(t.joinAmount)+" joining fee")]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,r){"use strict";r.r(e);var n=r(3).default.extend({data:function(){return{rates:[{feeAmount:80,isJoining:!0,joinAmount:20,rateName:"Adult",isPurpleBg:!1},{feeAmount:60,isJoining:!0,joinAmount:20,rateName:"Student",isPurpleBg:!0},{feeAmount:60,isJoining:!1,joinAmount:0,rateName:"Pensioner",isPurpleBg:!1}]}}}),l=r(24),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-coming-bg bg-cover bg-fixed"},[r("div",{staticClass:"h-full bg-black bg-opacity-50"},[r("div",{staticClass:"hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block",attrs:{"aria-hidden":"true"}}),t._v(" "),r("SectionTitle",{staticClass:"mt-16",attrs:{text1:"Rate",text2:"Card",size:"text-4xl",color2:"text-primary",color1:"text-gray-100"}}),t._v(" "),r("h2",{staticClass:"sr-only"},[t._v("Rates")]),t._v(" "),r("div",{staticClass:"relative mt-8 max-w-2xl mx-auto px-4 pb-24 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8"},[r("div",{staticClass:"hidden absolute top-4 bottom-6 left-8 right-8 inset-0 rounded-tl-lg rounded-tr-lg lg:block",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"relative space-y-6 gap-y-4 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3"},t._l(t.rates,(function(t){return r("RateCardItem",{key:t.rateName,attrs:{feeAmount:t.feeAmount,joinAmount:t.joinAmount,rateName:t.rateName,isJoining:t.isJoining,isPurpleBg:t.isPurpleBg}})})),1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:r(318).default,RateCardItem:r(327).default})}}]);