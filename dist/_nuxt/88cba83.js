(window.webpackJsonp=window.webpackJsonp||[]).push([[16,15],{326:function(e,t,n){"use strict";n.r(t);var l=n(3).default.extend({props:{className:String,day:String,startTime:String,endTime:String,link:String}}),r=n(24),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-span-4 px-4 py-2 flex flex-col place-content-center bg-gray-100 h-32 group hover:cursor-pointer hover:bg-primary lg:col-span-3"},[n("h4",{staticClass:"font-medium text-md uppercase text-gray-600 transition duration-300 ease group-hover:text-white group-hover: md:text-2xl"},[e._v(e._s(e.className))]),e._v(" "),n("h6",{staticClass:"text-sm text-gray-500 group-hover:text-white group-hover:opacity-80 md:text-lg"},[e._v(e._s(e.startTime)+" - "+e._s(e.endTime)+", "+e._s(e.day))])])}),[],!1,null,null,null);t.default=component.exports},335:function(e,t,n){"use strict";n.r(t);n(39);var l=n(3).default.extend({data:function(){var e=[{id:1,className:"Annihilate",day:"Wednesday",startTime:"09:00",endTime:"10:00",link:"/classes/#annihilate"},{id:2,className:"Storo",day:"Friday",startTime:"17:00",endTime:"18:00",link:"/classes/#annihilate"},{id:3,className:"Power Run",day:"Saturday",startTime:"09:00",endTime:"10:00",link:"/classes/#annihilate"},{id:4,className:"Annihilate",day:"Wednesday",startTime:"09:00",endTime:"10:00",link:"/classes/#annihilate"},{id:5,className:"Storo",day:"Friday",startTime:"17:00",endTime:"18:00",link:"/classes/#annihilate"},{id:6,className:"Power Run",day:"Saturday",startTime:"09:00",endTime:"10:00",link:"/classes/#annihilate"}],t=new Date,n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=t.getDay(),time=t.getHours();return{shownClasses:e.filter((function(e){return n.indexOf(e.day)>=l})),upcomingClasses:e,today:l,time:time}}}),r=n(24),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"grid grid-cols-12"},[e._m(0),e._v(" "),e._l(e.shownClasses.slice(0,3),(function(e){return n("UpcomingClass",{key:e.id,attrs:{className:e.className,day:e.day,startTime:e.startTime,endTime:e.endTime,link:e.link}})}))],2)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-span-12  text-center px-4 flex place-items-center py-2 bg-primary h-16 md: lg:col-span-3 lg:text-left lg:h-32"},[n("h4",{staticClass:"w-full text-white text-xl uppercase font-medium"},[e._v("Upcoming classes")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{UpcomingClass:n(326).default})}}]);