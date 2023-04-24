(function(){"use strict";var e={6053:function(e,n,t){var o=t(9242),r=t(3396);function i(e,n,t,o,i,s){const c=(0,r.up)("main-header"),a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[this.$store.state.headerActive?((0,r.wg)(),(0,r.j4)(c,{key:0})):(0,r.kq)("",!0),(0,r.Wm)(a)])}var s=t(7139);const c={id:"main-header"},a={class:"main-header__wrapper"},l={key:0,class:"main-header__isLogin"},u={key:1,class:"main-header__isLogin"},f=["src"];function m(e,n,t,o,i,m){return(0,r.wg)(),(0,r.iD)("header",c,[(0,r._)("div",a,[m.isUserLogin?((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("button",{type:"button",class:"btn--transparent btn__logout",onClick:n[0]||(n[0]=(...e)=>m.logoutUser&&m.logoutUser(...e))}," 로그아웃 "),(0,r._)("button",{type:"button",class:"btn--transparent btn__mypage",onClick:n[1]||(n[1]=(...e)=>m.toMypage&&m.toMypage(...e))}," My Page ")])):(0,r.kq)("",!0),m.isUserLogin?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("button",{type:"button",class:"btn--transparent btn__mypage",onClick:n[2]||(n[2]=(...e)=>m.toLogin&&m.toLogin(...e))}," 로그인 ")])),(0,r._)("img",{src:i.main_logo,onClick:n[3]||(n[3]=(...e)=>m.showHome&&m.showHome(...e)),class:"main-logo"},null,8,f)]),(0,r._)("nav",null,[(0,r._)("button",{type:"button",onClick:n[4]||(n[4]=(...e)=>m.showHome&&m.showHome(...e)),class:(0,s.C_)(["main-header__btn",{isActive:i.isActive1}])}," 홈 ",2),(0,r._)("button",{type:"button",onClick:n[5]||(n[5]=(...e)=>m.showRecommend&&m.showRecommend(...e)),class:(0,s.C_)(["main-header__btn",{isActive:i.isActive2}])}," 추천 ",2),(0,r._)("button",{type:"button",onClick:n[6]||(n[6]=(...e)=>m.showCommunity&&m.showCommunity(...e)),class:(0,s.C_)(["main-header__btn",{isActive:i.isActive3}])}," 커뮤니티 ",2)])])}var d=t.p+"img/logo_main.11aa7acd.svg",h=t(5008),p={created(){},data(){return{main_logo:d,isActive1:!0,isActive2:!1,isActive3:!1}},methods:{showHome(){this.isActive1=!0,this.isActive2=!1,this.isActive3=!1,this.$router.push("/cafes")},showRecommend(){this.isActive2=!0,this.isActive1=!1,this.isActive3=!1,this.$router.push("/recommend")},showCommunity(){this.isActive3=!0,this.isActive2=!1,this.isActive1=!1,this.$router.push("/community")},toMypage(){this.$router.push("/mypage")},toLogin(){this.$router.push("/")},logoutUser(){this.$store.commit("clearToken"),(0,h.kT)("til_auth"),this.$router.push("/")}},computed:{isUserLogin(){return this.$store.getters.userToken}}},b=t(89);const g=(0,b.Z)(p,[["render",m]]);var v=g,w={name:"App",components:{MainHeader:v}};const y=(0,b.Z)(w,[["render",i]]);var k=y,_=t(65);const P=(0,_.MT)({state:{headerActive:!1,token:localStorage.getItem("userToken")||"",owner:!1},getters:{userToken(e){return e.token},isLogin(e){return e.token,!1},isOwner(e){return e.owner}},mutations:{isHeaderActive(e,n){e.headerActive=n},setToken(e,n){e.token=n},clearToken(e){e.token=""},setOwner(e,n){e.owner=n}}});var O=t(678);const A=[{path:"/",component:()=>t.e(882).then(t.bind(t,7642))},{path:"/cafes",component:()=>t.e(21).then(t.bind(t,5021)),children:[{path:"/cafes",component:()=>Promise.all([t.e(265),t.e(503)]).then(t.bind(t,1582))},{path:"/cafes/report",component:()=>Promise.all([t.e(265),t.e(660)]).then(t.bind(t,660)),beforeEnter:(e,n,t)=>{if(P.getters.userToken)t();else{const e=confirm("로그인이 필요한 페이지입니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}}},{path:"/cafes/searchcafe",component:()=>Promise.all([t.e(265),t.e(486)]).then(t.bind(t,7486))}]},{path:"/cafe/:id",component:()=>t.e(636).then(t.bind(t,8636)),children:[{path:"/cafe/:id",component:()=>Promise.all([t.e(265),t.e(513)]).then(t.bind(t,5513))},{path:"/cafe/:id/review",component:()=>Promise.all([t.e(265),t.e(757)]).then(t.bind(t,1757)),beforeEnter:(e,n,t)=>{if(P.getters.userToken)t();else{const e=confirm("로그인이 필요한 페이지입니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}}},{path:"/cafe/:id/addreport",component:()=>Promise.all([t.e(265),t.e(20)]).then(t.bind(t,1020)),beforeEnter:(e,n,t)=>{if(P.getters.userToken)t();else{const e=confirm("로그인이 필요한 페이지입니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}}},{path:"/cafe/:id/reportinfo",component:()=>Promise.all([t.e(265),t.e(446)]).then(t.bind(t,9446)),beforeEnter:(e,n,t)=>{if(P.getters.userToken)t();else{const e=confirm("로그인이 필요한 페이지입니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return n();t("/"),console.log("인증이 필요합니다.")}}}]},{path:"/recommend",component:()=>Promise.all([t.e(265),t.e(194)]).then(t.bind(t,5485)),props:!0},{path:"/community",component:()=>t.e(11).then(t.bind(t,11)),children:[{path:"/community",component:()=>Promise.all([t.e(265),t.e(100)]).then(t.bind(t,3100))},{path:"/community/post",component:()=>Promise.all([t.e(265),t.e(559)]).then(t.bind(t,8559)),beforeEnter:(e,n,t)=>{if(P.getters.userToken)t();else{const e=confirm("로그인이 필요한 페이지입니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}}},{path:"/community/detail/:id",component:()=>Promise.all([t.e(265),t.e(412)]).then(t.bind(t,4460))},{path:"/community/edit/:id",component:()=>Promise.all([t.e(265),t.e(613)]).then(t.bind(t,7613)),beforeEnter:(e,n,t)=>{if(P.getters.userToken)t();else{const e=confirm("로그인이 필요한 페이지입니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}}}]},{path:"/owner",component:()=>t.e(743).then(t.bind(t,4743)),children:[{path:"/owner",component:()=>t.e(616).then(t.bind(t,1064)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/verify",component:()=>Promise.all([t.e(265),t.e(376)]).then(t.bind(t,1376)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("로그인");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/searchcafe",component:()=>Promise.all([t.e(265),t.e(586)]).then(t.bind(t,3586)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/cafe",component:()=>Promise.all([t.e(265),t.e(88)]).then(t.bind(t,2088)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/cafemanage",component:()=>Promise.all([t.e(265),t.e(132)]).then(t.bind(t,6132)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/menu",component:()=>Promise.all([t.e(265),t.e(708)]).then(t.bind(t,4708)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/menuadd",component:()=>Promise.all([t.e(265),t.e(666)]).then(t.bind(t,2666)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/menumodify",component:()=>Promise.all([t.e(265),t.e(522)]).then(t.bind(t,7522)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/stamp",component:()=>Promise.all([t.e(265),t.e(436)]).then(t.bind(t,1436)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/checkmember",component:()=>Promise.all([t.e(265),t.e(5)]).then(t.bind(t,8005)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/stampcoupon",component:()=>Promise.all([t.e(265),t.e(436)]).then(t.bind(t,1436)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("사장님 회원만 접근 가능합니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}},{path:"/owner/complete",component:()=>t.e(494).then(t.bind(t,8426)),beforeEnter:(e,n,t)=>{if(P.getters.isOwner){const e=confirm("로그인이 필요한 페이지입니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}else t()}}]},{path:"/mypage",component:()=>Promise.all([t.e(265),t.e(83)]).then(t.bind(t,2389)),beforeEnter:(e,n,t)=>{if(P.getters.userToken)t();else{const e=confirm("로그인이 필요한 페이지입니다. 로그인 페이지로 이동하시겠습니까?");if(!e)return;t("/"),console.log("인증이 필요합니다.")}},children:[{path:"/mypage",component:()=>Promise.all([t.e(265),t.e(550)]).then(t.bind(t,6607))},{path:"/mypage/changenickname",component:()=>Promise.all([t.e(265),t.e(291)]).then(t.bind(t,291))},{path:"/mypage/nicknamecomplete",component:()=>t.e(494).then(t.bind(t,8426))}]}],T=(0,O.p7)({history:(0,O.PO)(),routes:A});var E=t(8960);const C=(0,o.ri)(k);C.use(E.ZP,{clientId:"jnpe3fnq71",subModules:"geocoder"}),C.use(T),C.use(P),C.mount("#app")},5008:function(e,n,t){function o(e){let n=new Date(Date.now()+864e5);n=n.toUTCString(),document.cookie=`til_auth=${e}; "expires=`+n}function r(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function i(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`}t.d(n,{aZ:function(){return o},cd:function(){return r},kT:function(){return i}})}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(c=!1,i<s&&(s=i));if(c){e.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{5:"036b471a",11:"917da4e5",20:"3354b10a",21:"c5fda6ee",83:"9a03671c",88:"ac097984",100:"8c3e5cb4",132:"249d1d9f",194:"865e69a5",265:"d7dee4dc",291:"b6e41c75",376:"49b76135",412:"0159f368",436:"3651df7e",446:"92807231",486:"07e4827e",494:"2a78a6ca",503:"9c59d02f",513:"a1f76337",522:"3762c333",550:"e3d8a134",559:"67a6a013",586:"8d5a4803",613:"1a377594",616:"4f23bfdb",636:"4d0616b0",660:"b7838e2a",666:"2a01057e",708:"deb0e320",743:"491c34de",757:"9ffd1e09",882:"1decbcaa"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="croffle-frontend:";t.l=function(o,r,i,s){if(e[o])e[o].push(r);else{var c,a;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var m=function(n,t){c.onerror=c.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var s=t.p+t.u(n),c=new Error,a=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,r[1](c)}};t.l(s,a,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,s=o[0],c=o[1],a=o[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(a)var u=a(t)}for(n&&n(o);l<s.length;l++)i=s[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6053)}));o=t.O(o)})();
//# sourceMappingURL=app.f5846224.js.map