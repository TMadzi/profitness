(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8,10,12,13,15,18,19],{361:function(t,e,r){"use strict";r.r(e);var l=r(2).default.extend({props:{img:String,height:String,isHome:Boolean}}),n=r(27),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"bg-cover relative bg-no-repeat bg-fixed md:bg-cover",class:t.height,style:{backgroundImage:"url("+t.img+")"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isHome,expression:"isHome"}],staticClass:"hidden lg:block lg:bg-white lg:h-96 lg:w-72 lg:absolute lg:left-8 lg:bottom-16 lg:p-6"},[t._m(0),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"uppercase text-primary font-bold text-6xl"},[t._v("MAKE"),r("span",{staticClass:"text-gray-600"},[t._v(". ")]),r("span",{staticClass:"text-gray-600"},[t._v("IT")]),t._v(". HAPPEN"),r("span",{staticClass:"text-gray-600"},[t._v("!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-md text-gray-700 mt-6"},[t._v("\r\n               Goals are meant to be achieved, and ours is to help our members reach theirs'.\r\n                "),r("br"),r("br"),t._v("Leave the excuses at the door\r\n                "),r("br"),r("br"),t._v("Let's "),r("span",{staticClass:"text-accent font-bold text-lg"},[t._v("MAKE IT HAPPEN!")])])}],!1,null,null,null);e.default=component.exports},362:function(t,e,r){"use strict";var l=r(18),n=r(7),o=r(94),c=r(24),m=r(17),d=r(157),x=r(122),f=r(232),v=r(6),_=r(75).f,h=r(37).f,y=r(21).f,C=r(363),w=r(233).trim,T="Number",S=n.Number,k=S.prototype,N=function(t){var e=f(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,l,n,o,c,m,code,d=f(t,"number");if(x(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(e=(d=w(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+d}for(c=(o=d.slice(2)).length,m=0;m<c;m++)if((code=o.charCodeAt(m))<48||code>n)return NaN;return parseInt(o,l)}return+d};if(o(T,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var E,P=function(t){var e=arguments.length<1?0:S(N(t)),r=this;return r instanceof P&&v((function(){C(r)}))?d(Object(e),r,P):e},j=l?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),I=0;j.length>I;I++)m(S,E=j[I])&&!m(P,E)&&y(P,E,h(S,E));P.prototype=k,k.constructor=P,c(n,T,P)}},363:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},364:function(t,e,r){"use strict";r.r(e);var l=r(2).default.extend({props:{text1:String,text2:String}}),n=r(27),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col gap-y-2 px-4 text-center py-8"},[r("p",{staticClass:" text-gray-700 text-md tracking-wider leading-loose"},[t._v(t._s(t.text1))]),t._v(" "),r("p",{staticClass:"text-gray-700 text-md tracking-wider leading-loose"},[t._v(t._s(t.text2))])])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,r){"use strict";r.r(e);var l=r(2).default.extend({props:{text1:String,text2:String,size:String,color1:String,color2:String}}),n=r(27),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"px-8 uppercase text-5xl text-center font-black pt-4 md:text-6xl md:px-10 lg:px-32 lg:text-7xl lg:pt-16 lg:pb-8",class:t.color2},[t._v("\n    "+t._s(t.text1)+" "),r("span",{class:t.color1},[t._v(t._s(t.text2))])])}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,r){"use strict";r.r(e);r(362);var l=r(2).default.extend({props:{feeAmount:Number,isJoining:Boolean,joinAmount:Number,rateName:String,isPurpleBg:Boolean,periodString:String}}),n=r(27),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:py-6",class:[1==t.isPurpleBg?"bg-primary text-white":"bg-white text-primary"]},[r("div",[r("h3",{staticClass:"text-lg font-semibold uppercase text-center tracking-wide"},[t._v(t._s(t.rateName))]),t._v(" "),r("div",{staticClass:"flex flex-col items-center sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"},[r("div",{staticClass:"mt-3 flex items-center"},[r("p",{staticClass:"text-4xl font-extrabold tracking-tight"},[t._v("$"+t._s(t.feeAmount))]),t._v(" "),r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-md",class:[1==t.isPurpleBg?"text-white":"text-gray-600"]},[t._v("USD / "+t._s(t.periodString))]),t._v(" "),1==t.isJoining?r("p",{class:[1==t.isPurpleBg?"text-gray-200":"text-gray-500"]},[t._v("$"+t._s(t.joinAmount)+" joining fee")]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,r){"use strict";r.r(e);var l=r(2).default.extend({props:{className:String,day:String,startTime:String,endTime:String,link:String}}),n=r(27),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-span-4 px-4 py-2 flex flex-col place-content-center bg-gray-100 h-32 group hover:cursor-pointer hover:bg-primary lg:col-span-3"},[r("h4",{staticClass:"font-medium text-2xl uppercase text-gray-600 transition duration-300 ease group-hover:text-white group-hover: md:text-2xl"},[t._v(t._s(t.className))]),t._v(" "),r("h6",{staticClass:"text-sm text-gray-500 group-hover:text-white group-hover:opacity-80 md:text-lg"},[t._v(t._s(t.startTime)+" - "+t._s(t.endTime)+", "+t._s(t.day))])])}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,r){var content=r(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("902a7de4",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";r.r(e);r(38);var l=r(2).default.extend({data:function(){var t=[{id:1,className:"Annihilate",day:"Wednesday",startTime:"09:00",endTime:"10:00",link:"/classes/#annihilate"},{id:2,className:"Storo",day:"Friday",startTime:"17:00",endTime:"18:00",link:"/classes/#annihilate"},{id:3,className:"Powers Run",day:"Saturday",startTime:"09:00",endTime:"10:00",link:"/classes/#annihilate"},{id:4,className:"Annihilate",day:"Wednesday",startTime:"09:00",endTime:"10:00",link:"/classes/#annihilate"},{id:5,className:"Storo",day:"Saturday",startTime:"17:00",endTime:"18:00",link:"/classes/#annihilate"},{id:6,className:"Power Runs",day:"Saturday",startTime:"09:00",endTime:"10:00",link:"/classes/#annihilate"}],e=new Date,r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=e.getDay(),time=e.getHours();return{shownClasses:t.filter((function(t){return r.indexOf(t.day)>=l})),upcomingClasses:t,today:l,time:time}}}),n=r(27),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"grid grid-cols-12"},[t._m(0),t._v(" "),t._l(t.shownClasses,(function(t){return r("UpcomingClass",{key:t.id,attrs:{className:t.className,day:t.day,startTime:t.startTime,endTime:t.endTime,link:t.link}})}))],2)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-span-12  text-center px-4 flex place-items-center py-2 bg-primary h-16 md: lg:col-span-3 lg:text-left lg:h-32"},[r("h4",{staticClass:"w-full text-white text-xl uppercase font-medium md:text-3xl"},[t._v("Upcoming classes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UpcomingClass:r(372).default})},385:function(t,e,r){"use strict";r.r(e);var l=r(2).default.extend({data:function(){return{rates:[{feeAmount:80,isJoining:!0,joinAmount:20,rateName:"Adult",isPurpleBg:!1},{feeAmount:60,isJoining:!0,joinAmount:20,rateName:"Student",isPurpleBg:!0},{feeAmount:60,isJoining:!1,joinAmount:0,rateName:"Pensioner",isPurpleBg:!1}]}}}),n=r(27),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-coming-bg bg-cover bg-fixed"},[r("div",{staticClass:"h-full bg-black bg-opacity-50"},[r("SectionTitle",{staticClass:"mt-16",attrs:{text1:"Rate",text2:"Card",size:"text-4xl",color2:"text-primary",color1:"text-gray-100"}}),t._v(" "),r("h2",{staticClass:"sr-only"},[t._v("Rates")]),t._v(" "),r("div",{staticClass:"relative mt-8 max-w-2xl mx-auto px-4 pb-16 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8"},[r("div",{staticClass:"hidden absolute top-4 bottom-6 left-8 right-8 inset-0 rounded-tl-lg rounded-tr-lg lg:block",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"relative space-y-6 gap-y-4 gap-x-2 lg:space-y-0 lg:grid lg:grid-cols-3"},t._l(t.rates,(function(t){return r("RateCardItem",{key:t.rateName,attrs:{feeAmount:t.feeAmount,joinAmount:t.joinAmount,rateName:t.rateName,isJoining:t.isJoining,isPurpleBg:t.isPurpleBg}})})),1)]),t._v(" "),r("section",{staticClass:"text-center pb-16"},[r("nuxt-link",{staticClass:"py-2 w-24 mt-8 px-4 text-md bg-white  uppercase text-primary font-bold border-primary ",attrs:{to:"/rates"}},[t._v("All rates")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:r(365).default,RateCardItem:r(366).default})},395:function(t,e,r){"use strict";r(379)},396:function(t,e,r){var l=r(48)(!1);l.push([t.i,"body[data-v-5c556e64]{background:#f8f8f8}.feature-img[data-v-5c556e64]{width:450px}.feature-img-l[data-v-5c556e64]{width:500px}.feature-img-right[data-v-5c556e64]{padding:10px;width:300px;background:#fff;top:-120px;right:20px}.fac-img[data-v-5c556e64],.full-btn[data-v-5c556e64]{width:100%}.fac-img[data-v-5c556e64]{height:400px;margin:0;background-repeat:no-repeat}.weights[data-v-5c556e64]{background-image:url(https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633427113/Pro%20Fitness/_SAM2513_cmdywx.jpg)}.weight-text[data-v-5c556e64]{opacity:0}.cardio[data-v-5c556e64]{background-image:url(https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633426709/Pro%20Fitness/292323_10150972309757226_650913718_n_nijuy5.jpg)}.functional[data-v-5c556e64]{background-image:url(https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633427001/Pro%20Fitness/_SAM2415_jiencj.jpg)}.sauna[data-v-5c556e64]{background-image:url(https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_629/v1633426845/Pro%20Fitness/_SAM2462_em1x7l.jpg)}@media only screen and (min-width:600px){.left-fac-img[data-v-5c556e64]{transform:perspective(200px) rotateX(-3deg) translateX(-300px);overflow:hidden;transform-origin:left center}.right-fac-img[data-v-5c556e64]{transform:perspective(200px) rotateX(-3deg) translateX(300px);overflow:hidden;transform-origin:right center}}",""]),t.exports=l},410:function(t,e,r){"use strict";r.r(e);var l=r(2).default.extend({mounted:function(){gsap.registerPlugin(ScrollTrigger),gsap.fromTo(".header-img",{opacity:0,y:-200},{opacity:1,y:0,duration:2}),gsap.to(".weight-text",{scrollTrigger:{trigger:".weight-text",start:"top center",toggleActions:"play pause pause pause"},opacity:1,duration:1}),gsap.to(".weights",{scrollTrigger:{trigger:".weights",start:"top center",toggleActions:"restart pause pause pause"},opacity:1,x:0}),gsap.to(".functional",{scrollTrigger:{trigger:".functional",start:"top center",toggleActions:"restart pause pause pause"},opacity:1,x:0}),gsap.to(".cardio",{scrollTrigger:{trigger:".cardio",start:"top center",toggleActions:"restart pause pause pause"},opacity:1,x:0}),gsap.to(".sauna",{scrollTrigger:{trigger:".sauna",start:"top center",toggleActions:"restart pause pause pause"},opacity:1,x:0})}}),n=(r(395),r(27)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("PageHeader",{staticClass:"header-img",attrs:{height:"h-64 lg:h-home-img",isHome:"",img:"https://www.samlevysvillage.com/wp-content/uploads/2015/09/Pro-fitness-Health-Club-1.jpg"}}),t._v(" "),r("UpcomingClasses"),t._v(" "),r("SectionTitle",{staticClass:"mt-4 px-8",attrs:{text1:"Our",text2:"Facilities",size:"text-7xl",color1:"text-primary",color2:"text-gray-700"}}),t._v(" "),r("MainText",{staticClass:"px-8 pb-4 lg:px-32 lg:py-12",attrs:{text1:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!",text2:""}}),t._v(" "),r("section",{staticClass:"grid grid-cols-12 mb-4"},[t._m(0),t._v(" "),r("div",{staticClass:"col-span-12 px-8 order-1 pb-12 text-center  md:col-span- md:text-left md:6 md:py-16 md:pl-20 md:order-2  weight-text"},[t._m(1),t._v(" "),r("p",{staticClass:"mb-12 text-gray-500 text-md tracking-wide leading-loose"},[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate ipsa error illum hic tempora labore quae nihil eum quia atque aperiam explicabo, rerum qui odit suscipit.")]),t._v(" "),r("nuxt-link",{staticClass:"py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ",attrs:{to:"/facilities/weights"}},[t._v("Learn more")])],1)]),t._v(" "),r("section",{staticClass:"grid grid-cols-12 mb-4"},[r("div",{staticClass:"col-span-12 px-8 order-1 pb-12 text-center md:col-span-6 md:text-left md: md:pl-8 md:py-16 md:pr-12 md:order-1 "},[t._m(2),t._v(" "),r("p",{staticClass:"mb-12 text-gray-500 text-md tracking-wide leading-loose"},[t._v("Burn off those excess calories with our state of the art cardio equipment.\n      \n    ")]),t._v(" "),r("nuxt-link",{staticClass:"py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ",attrs:{to:"/facilities/cardio"}},[t._v("Learn more")])],1),t._v(" "),t._m(3)]),t._v(" "),r("section",{staticClass:"grid grid-cols-12 mb-4"},[t._m(4),t._v(" "),r("div",{staticClass:"col-span-12 px-8 order-1 pb-12 text-center  md:col-span- md:text-left md:6 md:py-16 md:pl-20 md:order-2 "},[t._m(5),t._v(" "),r("p",{staticClass:"mb-12 text-gray-500 text-md tracking-wide leading-loose"},[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate ipsa error illum hic tempora labore quae nihil eum quia atque aperiam explicabo, rerum qui odit suscipit.")]),t._v(" "),r("nuxt-link",{staticClass:"py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ",attrs:{to:"/facilities/functional"}},[t._v("Learn more")])],1)]),t._v(" "),r("section",{staticClass:"grid grid-cols-12"},[r("div",{staticClass:"col-span-12 px-8 order-1 pb-12 text-center md:col-span-6 md:text-left md: md:pl-8 md:py-16 md:pr-12 "},[t._m(6),t._v(" "),r("p",{staticClass:"mb-12 text-gray-500 text-md tracking-wide leading-loose"},[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate ipsa error illum hic tempora labore quae nihil eum quia atque aperiam explicabo, rerum qui odit suscipit.")]),t._v(" "),r("nuxt-link",{staticClass:"py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ",attrs:{to:"/facilities/steam-sauna"}},[t._v("Learn more")])],1),t._v(" "),t._m(7)]),t._v(" "),r("SectionTitle",{staticClass:"mt-4",attrs:{text1:"Our",text2:"Classes",size:"text-7xl",color1:"text-gray-700",color2:"text-primary"}}),t._v(" "),r("MainText",{staticClass:" lg:px-32 lg:px-8 lg:pt-4 lg:pb-12",attrs:{text1:"We have a variety of classes available no matter what your health and fitness goals are. View our schedule to find out more!",text2:""}}),t._v(" "),t._m(8),t._v(" "),r("section",{staticClass:"text-center"},[r("nuxt-link",{staticClass:"py-2 w-24 mt-8 px-4 text-md bg-white border-2 uppercase text-primary font-bold border-primary ",attrs:{to:"/classes"}},[t._v("view schedule")])],1),t._v(" "),r("Pricing")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-12 order-2 md:col-span-6 md:order-1"},[e("div",{staticClass:"fac-img left-fac-img weights"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:" text-4xl mt-4 mb-4 text-center md:text-6xl md:mb-12 md:text-left uppercase font-bold  text-gray-700"},[t._v("Weight "),r("span",{staticClass:"text-primary"},[t._v("Training")]),t._v(".")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:" text-4xl mt-4 mb-4 text-center md:text-6xl md:mb-12 md:text-left uppercase font-bold  text-gray-700"},[t._v("Cardio"),r("span",{staticClass:"text-primary"},[t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-12 order-2 md:col-span-6 md:order-2"},[e("div",{staticClass:"fac-img right-fac-img cardio"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-12 order-2  md:col-span-6 md:order-1"},[e("div",{staticClass:"fac-img left-fac-img functional"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:" text-4xl mt-4 mb-4 text-center md:text-6xl md:mb-12 md:text-left uppercase font-bold  text-gray-700"},[r("span",{staticClass:"text-primary"},[t._v("Functional")]),t._v(" Training"),r("span",{staticClass:"text-primary"},[t._v(".")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:" text-4xl mt-4 mb-4 text-center md:text-6xl md:mb-12 md:text-left uppercase font-bold  text-gray-700"},[t._v("Sauna "),r("span",{staticClass:"text-primary"},[t._v("&")]),t._v(" Steam Room"),r("span",{staticClass:"text-primary"},[t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-12 order-2 md:col-span-6"},[e("div",{staticClass:"fac-img right-fac-img sauna"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"grid grid-cols-12 mb-4 px-4  gap-y-8 lg:px-32 lg:pb-8 text-center"},[r("div",{staticClass:"col-span-12 w-2/3 mx-auto md:w-full md:col-span-4 md: md:h-64"},[r("h4",{staticClass:"text-primary font-medium text-3xl uppercase"},[t._v("Aerobics")]),t._v(" "),r("img",{staticClass:"mx-auto w-12 my-4",attrs:{src:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636973667/Pro%20Fitness/icons/squats-100_bumc6s.png",alt:""}}),t._v(" "),r("p",{staticClass:"mb-4 lg:mb-12 text-gray-500"},[t._v("Break a sweat in one of our many aerobics studio classes.")])]),t._v(" "),r("div",{staticClass:"col-span-12 w-2/3 mx-auto md:w-full md:col-span-4 md:h-64"},[r("h4",{staticClass:"text-primary font-medium text-3xl uppercase"},[t._v("Spin")]),t._v(" "),r("img",{staticClass:"mx-auto w-12 my-4",attrs:{src:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636973667/Pro%20Fitness/icons/spinning-100_qznfpk.png",alt:""}}),t._v(" "),r("p",{staticClass:"mb-4 lg:mb-12 text-gray-500"},[t._v("Hop on a bike and ride yourself into the best shape of your life.")])]),t._v(" "),r("div",{staticClass:"col-span-12 w-2/3 mx-auto md:w-full md:col-span-4 md:h-64 \n   "},[r("h4",{staticClass:"text-primary font-medium text-3xl uppercase"},[t._v("Yoga & Pilates")]),t._v(" "),r("img",{staticClass:"mx-auto w-12 my-4",attrs:{src:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636973668/Pro%20Fitness/icons/yoga-100_xjfyrf.png",alt:""}}),t._v(" "),r("p",{staticClass:"mb-4 lg:mb-12 text-gray-500"},[t._v("Enjoy peace and relaxation through yoga, or improve strngth and flexibility in pilates.")])])])}],!1,null,"5c556e64",null);e.default=component.exports;installComponents(component,{PageHeader:r(361).default,UpcomingClasses:r(384).default,SectionTitle:r(365).default,MainText:r(364).default,Pricing:r(385).default})}}]);