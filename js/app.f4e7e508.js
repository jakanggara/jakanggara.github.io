(function(t){function e(e){for(var n,o,l=e[0],i=e[1],c=e[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/docs/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f08":function(t,e,a){"use strict";var n=a("df4c"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.layout,{tag:"component"},[a("router-view")],1)},s=[],o={computed:{layout:function(){return"layout-".concat(this.$route.meta.layout||1)}}},l=o,i=a("2877"),c=Object(i["a"])(l,r,s,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"vh-100"},[n("b-row",{staticClass:"mx-auto pt-5",attrs:{"align-h":"center"}},[n("b-col",{staticClass:"mb-4",attrs:{cols:"8"}},[n("b-img",{attrs:{src:a("e347"),alt:"home logo",center:"",fluid:""}})],1),n("b-col",{attrs:{cols:"12",lg:"8"}},[n("b-nav",{attrs:{align:"center"}},t._l(t.menu,(function(e){return n("b-nav-item",{key:e.link,attrs:{to:e.link}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1)],1)},f=[],m=[{name:"About",link:"about"},{name:"Profile",link:"profile"},{name:"Projects",link:"projects"}],b={data:function(){return{menu:m}}},v=b,h=(a("e79e"),Object(i["a"])(v,p,f,!1,null,null,null)),g=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"zero-scrollbar",attrs:{id:"profile"}},[a("b-media",[a("h1",[t._v("My Profile")]),a("p",[t._v(" I am a Geological Graduate that have great interest in Recent Technologies. I also developed skills to make web-apps and mobile apps. ")])]),a("b-media",[a("h2",[t._v("Skillsets")]),a("b-row",t._l(t.skills,(function(e){return a("b-col",{key:e.title,staticClass:"pb-2 px-1",attrs:{sm:"3"}},[a("b-card",[a("b-card-title",[t._v(" "+t._s(e.title)+" ")]),a("b-media",{attrs:{"right-align":""}},[[a("b-img",{attrs:{src:t.imgResolve(e.img),height:"50px",right:""}})],a("p",[t._v(t._s(e.desc))])],2)],1)],1)})),1)],1)],1)},y=[],w=[{id:0,title:"Python",desc:"",img:"python.png",children:""},{id:1,title:"HTML CSS",desc:"",img:"htmlcss.png",children:""},{id:2,title:"Javascript",desc:"",img:"js.png",children:""},{id:3,title:"Vue",desc:"",img:"vue.png",children:""},{id:4,title:"Flutter",desc:"",img:"flutter.png",children:""},{id:5,title:"ArcGIS",desc:"",img:"arcgis.png",children:""},{id:6,title:"QGIS",desc:"",img:"qgis.png",children:""},{id:7,title:"Geological Mapping",desc:"",img:"gmap.png",children:""},{id:8,title:"Office Suites (Presentation / Sheets / Words)",desc:"",img:"office.png",children:""}],j={data:function(){return{skills:w}},methods:{imgResolve:function(t){return"static/".concat(t)}}},k=j,C=Object(i["a"])(k,_,y,!1,null,null,null),x=C.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("b-container",{attrs:{id:"content"}},[a("h1",{staticClass:"mb-4"},[t._v("What is this Website?")]),a("p",[t._v(" This Website is an app that shows my recent works and capabilities. Feel free to check it out. ")]),a("p",[t._v(" Works being showcased here are personal project with no business logic nor plan. ")])])],1)},P=[],S={},E=S,$=(a("e564"),Object(i["a"])(E,O,P,!1,null,null,null)),M=$.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{id:"projects"}},[a("h1",{staticClass:"mb-4"},[t._v("My Projects")]),a("b-row",t._l(t.projects,(function(e){return a("b-col",{key:e.desc,staticClass:"px-2",attrs:{sm:"6",to:e.title}},[a("b-card",{staticClass:"mb-3 shadow",attrs:{"border-variant":t.statusHandle(e.status,1)}},[a("b-card-title",{staticClass:"mb-1"},[t._v(" "+t._s(e.title)+" ")]),a("b-card-sub-title",{staticClass:"mb-2"},[a("b-badge",{attrs:{pill:"",variant:t.statusHandle(e.status,1)}},[t._v(" "+t._s(t.statusHandle(e.status)))])],1),a("p",{staticClass:"mb-1"},[t._v(t._s(e.desc))])],1)],1)})),1)],1)},I=[],T=[{id:0,title:"Geological Mapping Database",desc:"Web-apps to publish geological map in svg. Built with vanilla js, leaflet was used to project the maps.",status:0},{id:1,title:"Computational Geology Learning Platform",desc:"Web-apps to accomodate remote learning and practice Computational Geology Course.",status:2},{id:2,title:"P A I M O N",desc:'Todo list apps inspired from "Genshin Impact" and planned to be a personal daily task reminder. This app is my learning experiment with flutter. Currently this app only uses CRUD to local database to save and interact with its todos. In the future maybe it will be developed to have reminder and schedule to fulfill PAIMON motto as a "Best Companion Traveler Ever!".',status:2}],W={data:function(){return{projects:T}},methods:{statusHandle:function(t,e){return 0==t?e?"danger":"deprecated":1==t?e?"success":"maintained":2==t?e?"primary":"in progress":e?"secondary":"unknown"}}},A=W,B=Object(i["a"])(A,G,I,!1,null,null,null),H=B.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("404 boi")])},J=[],F={},R=F,L=Object(i["a"])(R,N,J,!1,null,null,null),D=L.exports;n["default"].use(d["a"]);var q=[{path:"/",name:"Home",meta:{layout:2},component:g},{path:"/about",name:"About",meta:{layout:3},component:M},{path:"/profile",name:"Profile",component:x},{path:"/projects",name:"Projects",component:H},{path:"*",name:"404",component:D}],z=new d["a"]({mode:"history",base:"/docs/",routes:q}),Q=z,U=a("2f62");n["default"].use(U["a"]);var V=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(K["a"]);var X=a("ecee"),Y=a("ad3d"),Z=a("c074");X["c"].add(Z["a"]),n["default"].component("faIcon",Y["a"]);var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("NavBar"),a("router-view",{staticClass:"pt-5 overflow-auto"})],1)},et=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"shadow",attrs:{id:"navbar",toggleable:"md"}},[n("b-navbar-brand",{attrs:{to:"/"}},[n("b-img",{attrs:{src:a("e347"),alt:"home logo",height:"25px"}})],1),n("b-navbar-toggle",{attrs:{target:"navcol"}}),n("b-collapse",{attrs:{id:"navcol","is-nav":""}},[n("b-navbar-nav",t._l(t.menu,(function(e){return n("b-nav-item",{key:e.link,attrs:{to:e.link}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1)},nt=[],rt={data:function(){return{menu:m}}},st=rt,ot=(a("ed6b"),Object(i["a"])(st,at,nt,!1,null,null,null)),lt=ot.exports,it={components:{NavBar:lt}},ct=it,ut=(a("5fca"),Object(i["a"])(ct,tt,et,!1,null,null,null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("router-view")],1)},ft=[],mt={},bt=Object(i["a"])(mt,pt,ft,!1,null,null,null),vt=bt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("NavBar",{}),a("router-view",{staticClass:"overflow-auto pt-5"}),a("Footer",{staticClass:"mh-10"})],1)},gt=[],_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("b-row",{staticClass:"container-sm ml-auto mr-auto pt-3 footerdiv",attrs:{"no-gutters":"","align-v":"center"}},[n("b-col",{attrs:{cols:"2",sm:"2","align-self":"center"}},[n("b-img",{attrs:{center:"",src:a("e347"),width:"40px",alt:"Jaka Anggara Logo"}})],1),n("b-col",{attrs:{cols:"10",sm:"10"}},[t._v(" Email: jakanggara@outlook.com ")]),n("b-row",{staticStyle:{width:"100%"},attrs:{"no-gutters":""}},[n("b-col",{staticClass:"text-center"},[t._v(" ©2020 Jakanggara ")])],1)],1)],1)},yt=[],wt={},jt=wt,kt=(a("9baf"),Object(i["a"])(jt,_t,yt,!1,null,null,null)),Ct=kt.exports,xt={components:{NavBar:lt,Footer:Ct}},Ot=xt,Pt=(a("0f08"),Object(i["a"])(Ot,ht,gt,!1,null,null,null)),St=Pt.exports;n["default"].component("layout-1",dt),n["default"].component("layout-2",vt),n["default"].component("layout-3",St),n["default"].config.productionTip=!1,new n["default"]({router:Q,store:V,render:function(t){return t(u)}}).$mount("#app")},"5fca":function(t,e,a){"use strict";var n=a("d6fe"),r=a.n(n);r.a},6678:function(t,e,a){},"9baf":function(t,e,a){"use strict";var n=a("f61d"),r=a.n(n);r.a},d5a8:function(t,e,a){},d6fe:function(t,e,a){},df4c:function(t,e,a){},e347:function(t,e,a){t.exports=a.p+"img/logo.70cf4cf0.svg"},e564:function(t,e,a){"use strict";var n=a("f0c1"),r=a.n(n);r.a},e79e:function(t,e,a){"use strict";var n=a("6678"),r=a.n(n);r.a},ed6b:function(t,e,a){"use strict";var n=a("d5a8"),r=a.n(n);r.a},f0c1:function(t,e,a){},f61d:function(t,e,a){}});
//# sourceMappingURL=app.f4e7e508.js.map