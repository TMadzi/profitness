(window.webpackJsonp=window.webpackJsonp||[]).push([[29,9,11,12,17],{377:function(e,t,r){"use strict";r.r(t);var l=r(3).default.extend({props:{img:String,height:String,isHome:Boolean}}),n=r(31),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"bg-cover relative bg-no-repeat bg-fixed md:bg-cover",class:e.height,style:{backgroundImage:"url("+e.img+")"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.isHome,expression:"isHome"}],staticClass:"hidden lg:block lg:bg-white lg:h-96 lg:w-72 lg:absolute lg:left-8 lg:bottom-16 lg:p-6"},[e._m(0),e._v(" "),e._m(1)])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{staticClass:"uppercase text-primary font-bold text-6xl"},[e._v("MAKE"),r("span",{staticClass:"text-gray-600"},[e._v(". ")]),r("span",{staticClass:"text-gray-600"},[e._v("IT")]),e._v(". HAPPEN"),r("span",{staticClass:"text-gray-600"},[e._v("!")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-md text-gray-700 mt-6"},[e._v("\r\n               Goals are meant to be achieved, and ours is to help our members reach theirs'.\r\n                "),r("br"),r("br"),e._v("Leave the excuses at the door\r\n                "),r("br"),r("br"),e._v("Let's "),r("span",{staticClass:"text-accent font-bold text-lg"},[e._v("MAKE IT HAPPEN!")])])}],!1,null,null,null);t.default=component.exports},381:function(e,t,r){"use strict";r.r(t);var l=r(3).default.extend({props:{text1:String,text2:String}}),n=r(31),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col gap-y-2 px-4 text-center py-8"},[r("p",{staticClass:" text-gray-500 text-md tracking-wide leading-loose md:leading-loose"},[e._v(e._s(e.text1))]),e._v(" "),r("p",{staticClass:"text-gray-500 text-md tracking-wide leading-loose md:leading-loose"},[e._v(e._s(e.text2))])])}),[],!1,null,null,null);t.default=component.exports},385:function(e,t,r){"use strict";r.r(t);var l=r(3).default.extend({props:{data:Array}}),n=r(31),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:" relative shadow-xs p-2 col-span-6 flex flex-col gap-y-4 justify-center mx-auto md:col-span-3 hover:cursor-pointer hover:transition hover:duration-300"},[r("img",{staticClass:"h-48 md:h-64",attrs:{src:e.data.img}}),e._v(" "),r("h4",{staticClass:"uppercase text-center text-bold text-primary text-xl"},[e._v(e._s(e.data.name))])])}),[],!1,null,null,null);t.default=component.exports},388:function(e,t,r){"use strict";r.r(t);var l=r(3).default.extend({props:{data:Array}}),n=r(31),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-8 grid grid-cols-12 px-4  lg:px-32 lg:gap-8"},e._l(e.data,(function(e){return r("PersonImage",{key:e.id,attrs:{data:e}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PersonImage:r(385).default})},424:function(e,t,r){"use strict";r.r(t);var l=r(3).default.extend({data:function(){return{staffMembers:[{name:"Sean",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528307/Pro%20Fitness/staff/photo_2021-11-03_08-34-15-removebg-preview_hwghd6.png"},{name:"Munya",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-15-removebg-preview_fafvum.png"},{name:"Tatenda",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-56-removebg-preview_df4pb3.png"},{name:"Nicole",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528304/Pro%20Fitness/staff/photo_2021-11-03_08-35-00-removebg-preview_zuxxdv.png"},{name:"James",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-45-removebg-preview_wc3wze.png"},{name:"Janice",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-33-removebg-preview_zulgxs.png"},{name:"Peter",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-37-removebg-preview_qlg9s7.png"},{name:"James",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528306/Pro%20Fitness/staff/photo_2021-11-03_08-34-40-removebg-preview_zot0fz.png"},{name:"Janice",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-52-removebg-preview_rhmcz6.png"},{name:"Peter",img:"https://res.cloudinary.com/defmmlrqg/image/upload/v1636528305/Pro%20Fitness/staff/photo_2021-11-03_08-34-48-removebg-preview_ldlvhd.png"}]}}}),n=r(31),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pb-16"},[r("div",{staticClass:"relative"},[r("PageHeader",{staticClass:"bg-top",attrs:{height:"h-72 lg:h-small-img",pos:"bg-top",img:"https://res.cloudinary.com/defmmlrqg/image/upload/c_scale,w_1800/v1633426850/Pro%20Fitness/_SAM2568_2_xi6obn.jpg"}}),e._v(" "),e._m(0)],1),e._v(" "),r("MainText",{staticClass:"col-span-12 px-4 lg:col-span-6 lg:pt-12 lg:px-32",attrs:{text1:"We have a dedicated and professional staff who are ready to make your experience with us pleasant and enjoyable. Our team is also ready to assist with any challenges you may face while in our facility, so please don't hesitate in asking them for any thing."}}),e._v(" "),r("StaffGrid",{attrs:{data:e.staffMembers}})],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-black absolute top-0 opacity-60 w-full h-full flex flex-col items-center justify-center"},[r("h1",{staticClass:"relative text-white flex  align-bottom justify-center  text-8xl  text-center font-bold md:text-9xl md:leading-44 md:px-16 md:justify-center tracking-wide w-full opacity-90"},[e._v("STAFF")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{PageHeader:r(377).default,MainText:r(381).default,StaffGrid:r(388).default})}}]);