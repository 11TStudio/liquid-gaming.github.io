(function(e){function t(t){for(var i,o,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c1c356a2"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,i){a=n[e]=[t,i]}));t.push(a[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,a[1](c)}n[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},1182:function(e,t,a){},1771:function(e,t,a){var i={"./LiQ.png":"379e","./LiQuid_PatchV3.png":"805d","./Liq_Gaming.png":"5103","./TANK.jpg":"81f3","./liqlogomoving.gif":"2e38","./tandam.png":"ac28"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id="1771"},2671:function(e,t,a){},"2e38":function(e,t,a){e.exports=a.p+"img/liqlogomoving.f1d18e0c.gif"},"34ba":function(e,t,a){"use strict";var i=a("1182"),n=a.n(i);n.a},"379e":function(e,t,a){e.exports=a.p+"img/LiQ.67a927cc.png"},5103:function(e,t,a){e.exports=a.p+"img/Liq_Gaming.c540998b.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app"}},[a("NavBar"),a("v-content",{staticStyle:{"background-color":"white"}},[a("router-view")],1),a("Footer")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{id:"navbar"}},[a("v-app-bar",{attrs:{flat:"",fixed:"",color:"transparent",dark:"",height:"80px"}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-container",[a("v-layout",[a("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(t){e.drawer=!e.drawer}}}),a("v-spacer"),a("v-toolbar-items",{staticClass:"text-right"},[a("v-btn",{attrs:{"x-small":e.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(t){return e.$vuetify.goTo("#Servers",e.options)}}},[e._v("Servers")]),a("v-btn",{attrs:{"x-small":e.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(t){return e.$vuetify.goTo("#contact",e.options)}}},[e._v("Contact")])],1)],1)],1)],1)],1),a("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-divider"),a("v-list",{attrs:{dense:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{link:""},on:{click:function(a){e.$vuetify.goTo("#"+t.title,e.options),e.drawer=!1}}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),a("v-fab-transition",[a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],staticStyle:{background:"#041238"},attrs:{fab:"",dark:"",fixed:"",bottom:"",right:""},on:{click:e.toTop}},[a("v-icon",[e._v("expand_less")])],1)],1)],1)},s=[],l={data:function(){return{drawer:!1,items:[{title:"Home",icon:"mdi-home-city"},{title:"Servers",icon:"mdi-dns"},{title:"Contact",icon:"mdi-account-group-outline"}],mini:!0,fab:!1}},methods:{onScroll:function(e){var t=document.querySelector(".v-toolbar");if("undefined"!==typeof window){var a=window.pageYOffset||e.target.scrollTop||0;a>300&&t.classList.remove("transparent"),a<300&&(t.classList.contains("transparent")||t.classList.add("transparent")),this.fab=a>500}},toTop:function(){this.$vuetify.goTo(0)}}},c=l,u=(a("34ba"),a("2877")),d=a("6544"),m=a.n(d),p=a("40dc"),h=a("5bc1"),f=a("8336"),v=a("a523"),b=a("ce7e"),y=a("0789"),g=a("132d"),w=a("a722"),k=a("8860"),A=a("da13"),x=a("5d23"),S=a("34c3"),L=a("f774"),q=a("2fa4"),C=a("2a7f"),O=a("269a"),T=a.n(O),_=a("f977"),E=Object(u["a"])(c,o,s,!1,null,null,null),I=E.exports;m()(E,{VAppBar:p["a"],VAppBarNavIcon:h["a"],VBtn:f["a"],VContainer:v["a"],VDivider:b["a"],VFabTransition:y["b"],VIcon:g["a"],VLayout:w["a"],VList:k["a"],VListItem:A["a"],VListItemContent:x["a"],VListItemIcon:S["a"],VListItemTitle:x["b"],VNavigationDrawer:L["a"],VSpacer:q["a"],VToolbarItems:C["a"]}),T()(E,{Scroll:_["b"]});var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"font-weight-medium",attrs:{app:"",absolute:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("LiQ These Nutz")])])],1)},N=[],j={},D=j,Q=a("62ad"),R=a("553a"),P=Object(u["a"])(D,V,N,!1,null,null,null),M=P.exports;m()(P,{VCol:Q["a"],VFooter:R["a"]});var F={name:"App",components:{NavBar:I,Footer:M},data:function(){return{}}},W=F,$=(a("034f"),a("7496")),B=a("a75b"),U=Object(u["a"])(W,n,r,!1,null,null,null),K=U.exports;m()(U,{VApp:$["a"],VContent:B["a"]});a("d3b7");var G=a("8c4f"),H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home",staticStyle:{background:"#121212"}},[i("v-parallax",{attrs:{height:"950",src:a("81f3"),id:"home-image"}},[i("v-layout",{attrs:{"fill-height":"","align-center":""}},[i("v-container",[i("v-row",{staticClass:"white--text",attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("div",{class:{"display-4 font-weight-bold ":e.$vuetify.breakpoint.smAndUp,"display-2 font-weight-bold":e.$vuetify.breakpoint.smAndDown}},[e._v(" LiQuid Gaming ")]),i("div",{class:{"subtitle-1":e.$vuetify.breakpoint.smAndDown},staticStyle:{opacity:"0.75","margin-top":"10px"}},[e._v(" We are a high-level clan in various gaming platforms with a community of over 800 players. "),i("br"),e._v(" We currently host 2 servers in Squad and have plan for more in the future. "),i("br"),i("br"),e._v(" We are eager to help new or ruturning players redisocer their passion for gaming. "),i("br"),e._v(" Please scroll down and take a look, we would love for you to join us! "),i("br")])])],1)],1)],1)],1),i("v-container",{staticClass:"mt-5 dark black--background",attrs:{id:"Servers"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-container",[i("v-row",{attrs:{align:"left",justify:"left"}},[i("div",{class:{"display-3 font-weight-bold ":e.$vuetify.breakpoint.smAndUp,"display-2 font-weight-bold":e.$vuetify.breakpoint.smAndDown}},[e._v(" Servers ")]),i("div",{class:{"subtitle-1":e.$vuetify.breakpoint.smAndDown},staticStyle:{opacity:"0.75","margin-top":"10px"}},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])])],1),i("v-layout",{attrs:{wrap:"","my-5":""}},[i("v-flex",{staticClass:"mt-5",attrs:{"justify-center":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-container",[i("v-row",{attrs:{align:"left",justify:"left"}},[i("div",{class:{"display-1 font-weight-bold ":e.$vuetify.breakpoint.smAndUp}},[e._v(" Squad ")])])],1),e._l(e.squadServersList,(function(e,t){return[i("v-flex",{key:t,attrs:{xs12:"",sm6:"",lg5:"",just:""}},[i("Servers",{attrs:{server:e}})],1)]}))],2)],1)],1)],1)],1),i("Carousel",{attrs:{carouselItems:e.firstCarouselItems}})],1)},Y=[],z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticStyle:{"border-radius":"20px",margin:"5px"},attrs:{target:"_blank",elevation:"5","max-width":"950px"}},[a("v-card-text",[a("div",{staticClass:"title mt-2 titleColour"},[e._v(e._s(e.server.name))]),a("div",[e._v(e._s(e.server.description))]),a("div",{staticClass:"title mt-2 titleColour"},[e._v("Battmetrics")]),a("v-layout",[[a("div",[a("a",{attrs:{href:"https://www.battlemetrics.com/servers/squad/7894269"}},[a("img",{attrs:{src:"https://cdn.battlemetrics.com/b/horizontal500x80px/"+e.server.battlemetricId+".png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700"}})])])]],2)],1),a("div",[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"titleColour"},[e._v("Rules")]),a("v-expansion-panel-content",{scopedSlots:e._u([{key:"actions",fn:function(){return[a("v-icon",{attrs:{color:"primary"}},[e._v("accessibility")])]},proxy:!0}])},e._l(e.server.rules,(function(t,i){return a("v-flex",{key:i},[a("v-card",{staticClass:"card-container",staticStyle:{margin:"7px",background:"#262626"}},[a("v-card-text",{staticClass:"px-4"},[a("v-card-title",[a("h5",{staticClass:"titleColour"},[e._v(e._s(i+1)+": "+e._s(t.title))])]),a("v-card-subtitle",[a("p",[e._v(e._s(t.description))])])],1)],1)],1)})),1)],1)],1)],1)],1)},J=[],X={props:{server:{type:Object,default:function(){return{}}}},methods:{logo:function(e){return a("1771")("./"+e)}}},Z=X,ee=(a("9bcd"),a("b0af")),te=a("99d9"),ae=a("cd55"),ie=a("49e2"),ne=a("c865"),re=a("0393"),oe=a("0e8f"),se=Object(u["a"])(Z,z,J,!1,null,"75a95c64",null),le=se.exports;m()(se,{VCard:ee["a"],VCardSubtitle:te["a"],VCardText:te["b"],VCardTitle:te["c"],VExpansionPanel:ae["a"],VExpansionPanelContent:ie["a"],VExpansionPanelHeader:ne["a"],VExpansionPanels:re["a"],VFlex:oe["a"],VIcon:g["a"],VLayout:w["a"]});var ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-carousel",{attrs:{"hide-delimiters":"",cycle:"",interval:"5000","show-arrows":!1,height:"350px"}},e._l(e.carouselItems,(function(e,t){return a("v-carousel-item",{key:t,staticStyle:{opacity:"0.7",background:"rgba(100,100,100)"},attrs:{src:e.src}})})),1)],1)},ue=[],de={name:"Carousel",props:{carouselItems:{type:Array,default:function(){return{}}}}},me=de,pe=a("5e66"),he=a("3e35"),fe=Object(u["a"])(me,ce,ue,!1,null,null,null),ve=fe.exports;m()(fe,{VCarousel:pe["a"],VCarouselItem:he["a"]});var be={name:"home",components:{Servers:le,Carousel:ve},data:function(){return{squadServersList:[{name:"『LiQ』Liquid Gaming: Noob Friendly -AAS/RAAS/INV - PTFO",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",battlemetricId:7871746,rules:[{title:"RACIAL SLURS Are Strictly FORBIDDEN",description:"Any racist terms, propaganda, slang, gestures and/or other sayings deemed by a LiQ admin to be offensive or hindering the experience of any player on a LiQuid Gaming Server. Will result in a ban determined by the LiQ admin."},{title:"All SQUAD LEADERS Must Have A MIC & Squad Leader KIT.",description:"Squad leaders must be able to effectively communicate with the team and squad using a microphone. Also the squad leader must at all times have a squad leader kit. Severity of circumstances for punishment will be determined by the LiQ admin of the server at that time."},{title:"If you CREATE a squad you must be the Squad Leader of that squad.",description:"When a player clicks to create a squad then they must lead that squad. A warn/kick method is in place for this rule and is up to the discretion of the LiQ admin to determine the severity of the circumstances."},{title:"LOCKED Squads With 4 Or Less Players Must SPECIFY Their Role; LOGI, TANK, MORTAR.",description:"Any squad that is locked with less than 4 people must have a specific role specified in the name of that squad. Clans or friends do not count as a specific reason to lock a squad. Handled with a warn/disband/kick method, that is decided on the specific situation by the LiQ admin."},{title:"DO NOT Solo Vehicles That Require A CREWMAN Kit.",description:"Any vehicle that requires a driver/gunner where both seats require a crewman kit. Is applicable under this rule. Handled with a warn/kick method to the discretion of the LiQ admin. All admins must remain cognizant of the probability that a crew member jumped out to repair or the vehicle is returning to main. This does not require administrative action."},{title:"DO NOT Exploit GAME BUGS Such As a Wall Breach & Invulnerable FOBs.",description:"Any game bug or exploit that is created, manufactured, or accidently found by a player and then used to hamper the opposing team's efforts to win the game. Is applicable to this rule and is met with a kick/ban where the severity of the circumstances are determined by the LiQ admin."},{title:"Players That Are NOT Assigned To a SQUAD Will Be KICKED From The Server.",description:"Any player that does not immediately join or create a squad when they join the server is subject to a kick from the server under the presumption that they are either AFK or wishing to play unassigned. Generally resulting in a kick but circumstances will be handled by a LiQ admin."},{title:"DON'T BE AN ASSHAT or TROLL.",description:"Under this rule any player found to be intentionally disrupting the flow of gameplay or other player’s experience in the server. Outside of normal gameplay and discussion. Will be met with a warn/kick/ban under the discretion of the LiQ admin."},{title:"DO NOT MINE OR CAMP THE ENEMY MAIN.",description:"If a player places a mine, positions their vehicle or person in a location where their intent is to kill or destroy enemy vehicles coming from/to the enemy main. Will be considered camping the enemy main and punished under this rule at the discretion of the LiQ admin in a kick/ban."},{title:"Squads NAMED after a vehicle get PRIORITY for that vehicle.",description:"When a squad is created and named with the intention of using a certain vehicle “ex. Helo” said squad will get priority of the named vehicle. If the named squad is not operating in a manner deemed acceptable by the LiQ admin the admin may disband the squad."}]},{name:"『LiQ』Liquid Gaming: - Map Voting -AAS/RAAS/INV - PTFO",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",battlemetricId:7894269,rules:[{title:"RACIAL SLURS Are Strictly FORBIDDEN",description:"Any racist terms, propaganda, slang, gestures and/or other sayings deemed by a LiQ admin to be offensive or hindering the experience of any player on a LiQuid Gaming Server. Will result in a ban determined by the LiQ admin."},{title:"All SQUAD LEADERS Must Have A MIC & Squad Leader KIT.",description:"Squad leaders must be able to effectively communicate with the team and squad using a microphone. Also the squad leader must at all times have a squad leader kit. Severity of circumstances for punishment will be determined by the LiQ admin of the server at that time."},{title:"If you CREATE a squad you must be the Squad Leader of that squad.",description:"When a player clicks to create a squad then they must lead that squad. A warn/kick method is in place for this rule and is up to the discretion of the LiQ admin to determine the severity of the circumstances."},{title:"LOCKED Squads With 4 Or Less Players Must SPECIFY Their Role; LOGI, TANK, MORTAR.",description:"Any squad that is locked with less than 4 people must have a specific role specified in the name of that squad. Clans or friends do not count as a specific reason to lock a squad. Handled with a warn/disband/kick method, that is decided on the specific situation by the LiQ admin."},{title:"DO NOT Solo Vehicles That Require A CREWMAN Kit.",description:"Any vehicle that requires a driver/gunner where both seats require a crewman kit. Is applicable under this rule. Handled with a warn/kick method to the discretion of the LiQ admin. All admins must remain cognizant of the probability that a crew member jumped out to repair or the vehicle is returning to main. This does not require administrative action."},{title:"DO NOT Exploit GAME BUGS Such As a Wall Breach & Invulnerable FOBs.",description:"Any game bug or exploit that is created, manufactured, or accidently found by a player and then used to hamper the opposing team's efforts to win the game. Is applicable to this rule and is met with a kick/ban where the severity of the circumstances are determined by the LiQ admin."},{title:"Players That Are NOT Assigned To a SQUAD Will Be KICKED From The Server.",description:"Any player that does not immediately join or create a squad when they join the server is subject to a kick from the server under the presumption that they are either AFK or wishing to play unassigned. Generally resulting in a kick but circumstances will be handled by a LiQ admin."},{title:"DON'T BE AN ASSHAT or TROLL.",description:"Under this rule any player found to be intentionally disrupting the flow of gameplay or other player’s experience in the server. Outside of normal gameplay and discussion. Will be met with a warn/kick/ban under the discretion of the LiQ admin."},{title:"DO NOT MINE OR CAMP THE ENEMY MAIN.",description:"If a player places a mine, positions their vehicle or person in a location where their intent is to kill or destroy enemy vehicles coming from/to the enemy main. Will be considered camping the enemy main and punished under this rule at the discretion of the LiQ admin in a kick/ban."},{title:"Squads NAMED after a vehicle get PRIORITY for that vehicle.",description:"When a squad is created and named with the intention of using a certain vehicle “ex. Helo” said squad will get priority of the named vehicle. If the named squad is not operating in a manner deemed acceptable by the LiQ admin the admin may disband the squad."}]}],firstCarouselItems:[{src:a("81f3")},{src:a("ac28")}]}}},ye=be,ge=(a("cccb"),a("8b9c")),we=a("0fd9"),ke=Object(u["a"])(ye,H,Y,!1,null,null,null),Ae=ke.exports;m()(ke,{VCol:Q["a"],VContainer:v["a"],VFlex:oe["a"],VLayout:w["a"],VParallax:ge["a"],VRow:we["a"]}),i["a"].use(G["a"]);var xe=[{path:"/",name:"Home",component:Ae},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Se=new G["a"]({mode:"history",base:"/",routes:xe}),Le=Se,qe=a("f309");i["a"].use(qe["a"]);var Ce=new qe["a"]({theme:{themes:{dark:{background:"#272727"}},dark:!0,options:{customProperties:!0}}}),Oe=a("caf9");i["a"].use(Oe["a"]),i["a"].config.productionTip=!1,new i["a"]({router:Le,vuetify:Ce,render:function(e){return e(K)}}).$mount("#app")},"5ced":function(e,t,a){},"805d":function(e,t,a){e.exports=a.p+"img/LiQuid_PatchV3.265173b6.png"},"81f3":function(e,t,a){e.exports=a.p+"img/TANK.b0d3598f.jpg"},"85ec":function(e,t,a){},"9bcd":function(e,t,a){"use strict";var i=a("2671"),n=a.n(i);n.a},ac28:function(e,t,a){e.exports=a.p+"img/tandam.16bcd4d3.png"},cccb:function(e,t,a){"use strict";var i=a("5ced"),n=a.n(i);n.a}});
//# sourceMappingURL=app.060dfc48.js.map