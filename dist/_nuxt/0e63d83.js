(window.webpackJsonp=window.webpackJsonp||[]).push([[21,2,4,5,9,16],{378:function(t,e,r){"use strict";var n=r(20),l=r(5),o=r(8),c=r(98),d=r(28),m=r(21),f=r(167),x=r(60),v=r(132),h=r(243),y=r(10),_=r(79).f,C=r(41).f,I=r(23).f,w=r(379),S=r(244).trim,k="Number",N=l.Number,M=N.prototype,T=l.TypeError,E=o("".slice),j=o("".charCodeAt),O=function(t){var e=h(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,n,l,o,c,d,code,m=h(t,"number");if(v(m))throw T("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=S(m),43===(e=j(m,0))||45===e){if(88===(r=j(m,2))||120===r)return NaN}else if(48===e){switch(j(m,1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+m}for(c=(o=E(m,2)).length,d=0;d<c;d++)if((code=j(o,d))<48||code>l)return NaN;return parseInt(o,n)}return+m};if(c(k,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var D,F=function(t){var e=arguments.length<1?0:N(O(t)),r=this;return x(M,r)&&y((function(){w(r)}))?f(Object(e),r,F):e},$=n?_(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;$.length>B;B++)m(N,D=$[B])&&!m(F,D)&&I(F,D,C(N,D));F.prototype=M,M.constructor=F,d(l,k,F)}},379:function(t,e,r){var n=r(8);t.exports=n(1..valueOf)},380:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(99),l=Object(n.c)("utils",{state:function(){return{sessions:[{hour:6,min:"00",suffix:"AM"},{hour:8,min:"00",suffix:"AM"},{hour:8,min:"30",suffix:"AM"},{hour:9,min:"15",suffix:"AM"},{hour:5,min:"30",suffix:"PM"}],days:[{long:"Monday",short:"Mon"},{long:"Tuesday",short:"Tues"},{long:"Wednesday",short:"Wed"},{long:"Thursday",short:"Thurs"},{long:"Friday",short:"Fri"},{long:"Saturday",short:"Sat"}]}},getters:{getClassDayFromId:function(t){t.days.foreach((function(t){return console.log(t)}))}}})},381:function(t,e,r){"use strict";r.r(e);var n=r(3).default.extend({props:{text1:String,text2:String}}),l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col gap-y-2 px-4 text-center py-8"},[r("p",{staticClass:" text-gray-500 text-md tracking-wide leading-loose md:leading-loose"},[t._v(t._s(t.text1))]),t._v(" "),r("p",{staticClass:"text-gray-500 text-md tracking-wide leading-loose md:leading-loose"},[t._v(t._s(t.text2))])])}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);var n=r(3).default.extend({props:{text1:String,text2:String,size:String,color1:String,color2:String}}),l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"px-8 uppercase text-5xl text-center font-black pt-4 md:text-6xl md:px-10 lg:px-32 lg:text-7xl lg:pt-4 lg:pb-8",class:t.color2},[t._v("\n    "+t._s(t.text1)+" "),r("span",{class:t.color1},[t._v(t._s(t.text2))])])}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(46),r(42),r(18);var n=r(99),l=r(380),o=Object(n.c)("classes",{state:function(){return{classes:[{id:1,class:"",trainer:"",desc:"",session:1,trainerImg:""},{id:2,class:"Hiit",trainer:"Shayne",desc:"",session:2,trainerImg:""},{id:3,class:"",trainer:"",desc:"",session:3,trainerImg:""},{id:4,class:"Pilates",trainer:"Kerryn",desc:"",session:4,trainerImg:""},{id:5,class:"Ultra Spin",trainer:"Lib",desc:"",session:5,trainerImg:""},{id:6,class:"",trainer:"",desc:"",session:1,trainerImg:""},{id:7,class:"",trainer:"",desc:"",session:2,trainerImg:""},{id:8,class:"",trainer:"",desc:"",session:3,trainerImg:""},{id:9,class:"",trainer:"",desc:"",session:4,trainerImg:""},{id:10,class:"Step",trainer:"Tendai",desc:"",session:5,trainerImg:""},{id:11,class:"",trainer:"",desc:"",session:1,trainerImg:""},{id:12,class:"Basic X-Train",trainer:"Doug",desc:"",session:2,trainerImg:""},{id:13,class:"",trainer:"",desc:"",session:3,trainerImg:""},{id:14,class:"",trainer:"",desc:"",session:4,trainerImg:""},{id:15,class:"",trainer:"",desc:"",session:5,trainerImg:""},{id:16,class:"",trainer:"",desc:"",session:1,trainerImg:""},{id:17,class:"",trainer:"",desc:"",session:2,trainerImg:""},{id:18,class:"",trainer:"",desc:"",session:3,trainerImg:""},{id:19,class:"",trainer:"",desc:"",session:4,trainerImg:""},{id:20,class:"Zumba",trainer:"Zororo",desc:"",session:5,trainerImg:""},{id:21,class:"",trainer:"",desc:"",session:1,trainerImg:""},{id:22,class:"Spin",trainer:"Cathy",desc:"",session:2,trainerImg:""},{id:23,class:"Yoga",trainer:"Kerryn",desc:"",session:3,trainerImg:""},{id:24,class:"",trainer:"",desc:"",session:4,trainerImg:""},{id:25,class:"",trainer:"",desc:"",session:5,trainerImg:""},{id:26,class:"",trainer:"",desc:"",session:1,trainerImg:""},{id:27,class:"Annihilate",trainer:"Danisa",desc:"",session:2,trainerImg:""},{id:28,class:"",trainer:"",desc:"",session:3,trainerImg:""},{id:29,class:"Spin Inferno",trainer:"Danisa",desc:"",session:4,trainerImg:""},{id:30,class:"",trainer:"",desc:"",session:5,trainerImg:""}]}},getters:{upcomingClasses:function(t){var time=(new Date).getHours(),e=0;switch(time){case time<6:e=0;break;case time>6&&time<7.5:e=1;break;case time>7.5&&time<8:e=2;break;case time>8&&time<9.25:e=3;break;case time>9.25&&time<17.5:e=4;break;case time>17.5:e=5}return t.classes.filter((function(t){return""!==t.trainer&&t.id>=5*(new Date).getDay()+e})).slice(0,3)}},actions:{getClassDayById:function(t){return t<=5?"Monday":t>5&&t<=10?"Tuesday":t>10&&t<=15?"Wednesday":t>15&&t<=20?"Thursday":t>20&&t<=25?"Friday":"Saturday"},getStartTimeBySessionId:function(t){return Object(l.a)().sessions[t-1]},getDaysClasses:function(t){return 0===t?this.classes.filter((function(t){return t.id<=5&&""!==t.trainer})):1===t?this.classes.filter((function(t){return t.id>5&&t.id<=10&&""!==t.trainer})):2===t?this.classes.filter((function(t){return t.id>10&&t.id<=15&&""!==t.trainer})):3===t?this.classes.filter((function(t){return t.id>15&&t.id<=20&&""!==t.trainer})):4===t?this.classes.filter((function(t){return t.id>20&&t.id<=25&&""!==t.trainer})):this.classes.filter((function(t){return t.id>25&&""!==t.trainer}))}}})},386:function(t,e,r){"use strict";r.r(e);r(378);var n=r(3).default.extend({props:{id:Number,className:String,trainer:String}}),l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center h-20 py-2 border-1 border-white text-gray-700 flex flex-col gap-px justify-center bg-purple-200 lg:py-3 lg:gap-1 lg:border-6 ",class:""==t.trainer?"":"hover:cursor-pointer hover:bg-purple-300 hover:transition-all hover:duration-200",on:{click:function(e){return t.$emit("open-modal")}}},[r("p",{staticClass:"font-bold uppercase text-gray-600 text-xs lg:text-md"},[t._v("\n    "+t._s(t.trainer)+"\n  ")]),t._v(" "),r("p",{staticClass:"uppercase text-gray-500 text-xs lg:text-sm",class:""===t.trainer?"font-bold text-lg":""},[t._v("\n    "+t._s(t.className)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,r){"use strict";r.r(e);var n=r(3).default.extend({props:{className:String,classDesc:String,instructor:String}}),l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed z-10 inset-0 overflow-y-auto",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[r("div",{staticClass:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",on:{click:function(e){return t.$emit("close-modal")}}},[r("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[t._v("​")]),t._v(" "),r("div",{staticClass:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"},[r("div",[r("div",{staticClass:"close absolute top-4 left-4",on:{click:function(e){return t.$emit("close-modal")}}},[r("h1",[t._v("X")])]),t._v(" "),r("div",{staticClass:"text-center"},[r("h3",{staticClass:"text-2xl leading-6 font-medium uppercase text-gray-900",attrs:{id:"modal-title"}},[t._v("\n            "+t._s(t.className)+"\n          ")]),t._v(" "),r("span",{staticClass:"block text-sm text-gray-600"},[t._v("with "+t._s(t.instructor))]),t._v(" "),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n              "+t._s(t.classDesc)+"  \n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,r){"use strict";r.r(e);r(42),r(18),r(38),r(29);var n=r(384),l=r(380),o={data:function(t){var e=t.$pinia,r=Object(n.a)(e),o=Object(l.a)(e),c=r.classes,d=o.sessions;return{openModal:!1,classes:c,selectedClass:{name:"",instructor:"",desc:"",img:""},days:o.days,classesStore:r,numbers:[0,1,2,3,4],sessions:d}},computed:{filteredArray:function(){return this.classes.filter((function(t){return!!t.time}))}},methods:{currentClass:function(t){var e=this;return this.classes.forEach((function(element){element.id===t&&(e.selectedClass.name=element.class,e.selectedClass.instructor=element.trainer,e.selectedClass.desc=element.desc)}))},handleClick:function(t){this.currentClass(t);""===this.selectedClass.name?this.openModal=!1:this.openModal=!0},handleVoid:function(t){console.log(t),this.openModal=!0}}},c=r(31),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-1  lg:px-24 lg:pb-12"},[t._l(t.days,(function(e,n){return r("div",{key:n,staticClass:"flex flex-col text-center py-4 even:bg-bgGrey last:pb-8 md:hidden"},[r("h2",{staticClass:"text-3xl text-center font-bold uppercase text-primary mt-2"},[t._v("\n      "+t._s(e.long)+"\n    ")]),t._v(" "),t._l(t.classesStore.getDaysClasses(n),(function(e){return r("div",{key:e.id,staticClass:" text-gray-700 tracking-wide  pb-4 px-8 border-b border-gray-1  00 last:border-none"},[r("h4",{staticClass:"mt-3"},[t._v(t._s(t.classesStore.getStartTimeBySessionId(e.session).hour+":"+t.classesStore.getStartTimeBySessionId(e.session).min+t.classesStore.getStartTimeBySessionId(e.session).suffix))]),t._v(" "),r("h3",{staticClass:"text-2xl uppercase font-medium"},[t._v("\n        "+t._s(e.class)+"\n      ")]),t._v(" "),r("h4",{staticClass:"text-md"},[t._v("\n        with "+t._s(e.trainer)+"\n      ")]),t._v(" "),r("p",{staticClass:"text-sm mt-4 pb-3 text-gray-500"},[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam corrupti consectetur quibusdam porro nostrum ex! Nihil illum ea sapiente dolorum iste provident laborum maxime maiores iusto vel. Ducimus, sint.\n      ")])])}))],2)})),t._v(" "),r("div",{staticClass:" hidden md:flex md:flex-row"},[r("div",{staticClass:"w-1/7 text-center md:flex md:flex-col text-xs lg:text-lg"},[r("div",{staticClass:"w-full py-4 text-white bg-primary bg-opacity-75"},[t._v("\n        TIME\n      ")]),t._v(" "),t._l(t.numbers,(function(e){return r("div",{key:e,staticClass:"w-full h-20 text-white text-lg bg-primary bg-opacity-75 flex items-center justify-center"},[t._v("\n        "+t._s(t.sessions[e].hour+":"+t.sessions[e].min+t.sessions[e].suffix)+"\n      ")])}))],2),t._v(" "),t._l(t.days,(function(e,n){return r("div",{key:n,staticClass:"w-1/7 flex-flex-col  text-white bg-primary bg-opacity-75 uppercase"},[r("div",{staticClass:"py-3 text-center"},[t._v("\n        "+t._s(t.days[n].short)+"\n      ")]),t._v(" "),t._l(t.classes.slice(5*n,5*n+5),(function(e){return r("ClassBlock",{key:e.id,attrs:{"class-name":e.class,trainer:e.trainer},on:{"open-modal":function(r){return t.handleClick(e.id)}}})}))],2)}))],2),t._v(" "),r("ClassModal",{directives:[{name:"show",rawName:"v-show",value:t.openModal,expression:"openModal"}],attrs:{"class-name":t.selectedClass.name,"class-desc":t.selectedClass.desc,instructor:t.selectedClass.instructor},on:{"close-modal":function(e){t.openModal=!1}}})],2)}),[],!1,null,"55eddb2b",null);e.default=component.exports;installComponents(component,{ClassBlock:r(386).default,ClassModal:r(387).default})},422:function(t,e,r){"use strict";r.r(e);var n={},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"relative"},[r("video",{staticClass:"mt-12",attrs:{width:"100%",height:"240",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:"https://res.cloudinary.com/defmmlrqg/video/upload/q_auto:low/v1636655940/Pro%20Fitness/Profitness_Videosmall_rliwh0.mp4",type:"video/mp4"}}),t._v("\n      Your browser does not support the video tag.\n\n    ")]),t._v(" "),t._m(0)]),t._v(" "),r("MainText",{staticClass:"col-span-6 pt-12 px-8 lg:px-32",attrs:{text1:"Our expert instructors offer a wide variety of classes suitable for all ages and fitness levels.",text2:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatum blanditiis porro dolorem? Accusantium distinctio, vitae perspiciatis, officiis facilis vero doloribus asperiores dolores aliquid consectetur, deserunt maiores necessitatibus ratione a!"}}),t._v(" "),r("SectionTitle",{attrs:{id:"schedule",text1:"Class",text2:"Schedule",size:"text-4xl",color2:"text-primary",color1:"text-gray-700"}}),t._v(" "),r("ClassSchedule",{staticClass:"md:mt-8"})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-black absolute top-0 opacity-60 w-full h-full flex flex-col items-center justify-center text-center"},[r("h1",{staticClass:"relative text-white z-50 opacity-100 align-bottom justify-center  text-5xl font-bold w-2/4 sm:w-3/4 sm:text-8xl md:px-16 lg:text-9xl lg:w-3/4 tracking-wide w-full uppercase"},[t._v("\n        More Than A Workout\n      ")]),t._v(" "),r("span",{staticClass:"block text-white mt-4 text-xl md:text-4xl md:mt-8"},[t._v("Our classes are guaranteed to make you sweat")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MainText:r(381).default,SectionTitle:r(382).default,ClassSchedule:r(396).default})}}]);