(window.webpackJsonp=window.webpackJsonp||[]).push([[14,13],{362:function(e,t,n){"use strict";var r=n(18),o=n(7),l=n(94),m=n(24),c=n(17),f=n(157),d=n(122),A=n(232),x=n(6),N=n(75).f,v=n(37).f,y=n(21).f,_=n(363),P=n(233).trim,S="Number",C=o.Number,j=C.prototype,h=function(e){var t=A(e,"number");return"bigint"==typeof t?t:B(t)},B=function(e){var t,n,r,o,l,m,c,code,f=A(e,"number");if(d(f))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(43===(t=(f=P(f)).charCodeAt(0))||45===t){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(m=(l=f.slice(2)).length,c=0;c<m;c++)if((code=l.charCodeAt(c))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(S,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var J,I=function(e){var t=arguments.length<1?0:C(h(e)),n=this;return n instanceof I&&x((function(){_(n)}))?f(Object(t),n,I):t},E=r?N(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),w=0;E.length>w;w++)c(C,J=E[w])&&!c(I,J)&&y(I,J,v(C,J));I.prototype=j,j.constructor=I,m(o,S,I)}},363:function(e,t){var n=1..valueOf;e.exports=function(e){return n.call(e)}},366:function(e,t,n){"use strict";n.r(t);n(362);var r=n(2).default.extend({props:{feeAmount:Number,isJoining:Boolean,joinAmount:Number,rateName:String,isPurpleBg:Boolean,periodString:String}}),o=n(27),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:py-6",class:[1==e.isPurpleBg?"bg-primary text-white":"bg-white text-primary"]},[n("div",[n("h3",{staticClass:"text-lg font-semibold uppercase text-center tracking-wide"},[e._v(e._s(e.rateName))]),e._v(" "),n("div",{staticClass:"flex flex-col items-center sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"},[n("div",{staticClass:"mt-3 flex items-center"},[n("p",{staticClass:"text-4xl font-extrabold tracking-tight"},[e._v("$"+e._s(e.feeAmount))]),e._v(" "),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-md",class:[1==e.isPurpleBg?"text-white":"text-gray-600"]},[e._v("USD / "+e._s(e.periodString))]),e._v(" "),1==e.isJoining?n("p",{class:[1==e.isPurpleBg?"text-gray-200":"text-gray-500"]},[e._v("$"+e._s(e.joinAmount)+" joining fee")]):e._e()])])])])])}),[],!1,null,null,null);t.default=component.exports},382:function(e,t,n){"use strict";n.r(t);var r=n(2).default.extend({data:function(){return{rates:[{feeAmount:80,isJoining:!0,joinAmount:20,rateName:"Adult",isPurpleBg:!1,periodString:"mo"},{feeAmount:60,isJoining:!0,joinAmount:20,rateName:"Student",isPurpleBg:!0,periodString:"mo"},{feeAmount:60,isJoining:!1,joinAmount:0,rateName:"Pensioner",isPurpleBg:!1,periodString:"mo"}],famRates:[{feeAmount:75,isJoining:!1,joinAmount:0,rateName:"Couples",isPurpleBg:!0,periodString:"mo"},{feeAmount:75,isJoining:!1,joinAmount:0,rateName:"Family Adult",isPurpleBg:!1,periodString:"mo"},{feeAmount:60,isJoining:!1,joinAmount:0,rateName:"Teen(16-21)",isPurpleBg:!0,periodString:"mo"}],groupRates:[{feeAmount:75,isJoining:!1,joinAmount:0,rateName:"5-10 PEOPLE",isPurpleBg:!1,periodString:"mo"},{feeAmount:70,isJoining:!1,joinAmount:0,rateName:"11-20 PEOPLE",isPurpleBg:!0,periodString:"mo"},{feeAmount:60,isJoining:!1,joinAmount:0,rateName:"20+ PEOPLE",isPurpleBg:!1,periodString:"mo"}],casualRates:[{feeAmount:10,isJoining:!1,joinAmount:0,rateName:"Daily",isPurpleBg:!0,periodString:"day"},{feeAmount:40,isJoining:!1,joinAmount:0,rateName:"Weekly",isPurpleBg:!1,periodString:"week"},{feeAmount:75,isJoining:!1,joinAmount:0,rateName:"10 Sessions",isPurpleBg:!0},{feeAmount:90,isJoining:!1,joinAmount:0,rateName:"15 Sessions",isPurpleBg:!1}]}}}),o=n(27),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-4 lg:px-32"},[n("h3",{staticClass:"font-bold text-2xl text-center uppercase text-primary my-8"},[e._v("General")]),e._v(" "),n("div",{staticClass:"relative space-y-6 gap-y-12 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3"},e._l(e.rates,(function(e){return n("RateCardItem",{key:e.rateName,staticClass:"shadow-2xl",attrs:{feeAmount:e.feeAmount,joinAmount:e.joinAmount,rateName:e.rateName,isJoining:e.isJoining,isPurpleBg:e.isPurpleBg,periodString:e.periodString}})})),1),e._v(" "),n("h3",{staticClass:"font-bold text-2xl text-center uppercase text-gray-700 my-8"},[e._v("Family")]),e._v(" "),n("div",{staticClass:"relative space-y-6 gap-y-12 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3"},e._l(e.famRates,(function(e){return n("RateCardItem",{key:e.rateName,staticClass:"shadow-2xl",attrs:{feeAmount:e.feeAmount,joinAmount:e.joinAmount,rateName:e.rateName,isJoining:e.isJoining,isPurpleBg:e.isPurpleBg,periodString:e.periodString}})})),1),e._v(" "),n("h3",{staticClass:"font-bold text-2xl text-center uppercase text-primary my-8"},[e._v("Group")]),e._v(" "),n("div",{staticClass:"relative space-y-6 gap-y-12 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3"},e._l(e.groupRates,(function(e){return n("RateCardItem",{key:e.rateName,staticClass:"shadow-2xl",attrs:{feeAmount:e.feeAmount,joinAmount:e.joinAmount,rateName:e.rateName,isJoining:e.isJoining,isPurpleBg:e.isPurpleBg,periodString:e.periodString}})})),1),e._v(" "),n("h3",{staticClass:"font-bold text-2xl text-center uppercase text-primary my-8"},[e._v("Casual")]),e._v(" "),n("div",{staticClass:"relative space-y-6 gap-y-12 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3"},e._l(e.casualRates,(function(e){return n("RateCardItem",{key:e.rateName,staticClass:"shadow-2xl",attrs:{feeAmount:e.feeAmount,joinAmount:e.joinAmount,rateName:e.rateName,isJoining:e.isJoining,isPurpleBg:e.isPurpleBg,periodString:e.periodString}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RateCardItem:n(366).default})}}]);