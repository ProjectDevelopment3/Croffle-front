"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[486],{3376:function(e,t,n){n.d(t,{eE:function(){return u},Uj:function(){return f},yC:function(){return _}});var r=n(6265),a=n.n(r),c=n(5008);function s(e){return e.interceptors.request.use((function(e){return console.log(e),e.headers.Authorization=`Bearer ${(0,c.cd)()}`,e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}function o(){return a().create({baseURL:"http://34.64.139.239/"})}function i(){const e=a().create({baseURL:"/api"});return s(e)}const u=o(),f=i();function l(){return a().create({baseURL:"/v1/search",headers:{"X-Naver-Client-Id":"WDBUTDGAh6YGJ6Umihxr","X-Naver-Client-Secret":"Vjn2nII5K3"}})}function d(){const e=a().create({baseURL:"/v4"});return s(e)}function p(){const e=Math.floor(+new Date).toString(),t=a().create({baseURL:"/v3/geolocation/v2",headers:{"x-ncp-apigw-timestamp":e,"x-ncp-iam-access-key":"wnm6dyQfAzJLgs1r8r9I","x-ncp-apigw-signature-v2":"l9RFKQeUe3n09f4cu2m6CWyayyoC0p5jgrPXerDf"}});return t}function h(){const e=a().create({baseURL:"/v2"});return e}const _=l();p(),d(),h()},6370:function(e,t,n){n.d(t,{Yx:function(){return a}});var r=n(3376);function a(e){return r.yC.get(`/local.json?query=${encodeURI(e)}&display=5`)}},7486:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(3396),a=n(9242),c=n(7139);const s={class:"cafe-view"},o={id:"report-component"},i={class:"input__box"},u=(0,r._)("label",null,"카페명",-1),f={class:"search__box"},l={class:"card__wrapper--column"},d=["onClick"],p={class:"card__addr"};function h(e,t,n,h,_,m){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",o,[(0,r._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>m.searchCafe&&m.searchCafe(...e)),["prevent"]))},[(0,r._)("div",i,[u,(0,r._)("div",f,[(0,r.wy)((0,r._)("input",{placeholder:"카페명을 입력해주세요.",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>_.cafeData=e),id:"input__search",onKeypress:t[1]||(t[1]=(0,a.D2)(((...e)=>m.searchCafe&&m.searchCafe(...e)),["enter"]))},null,544),[[a.nr,_.cafeData]]),(0,r._)("button",{type:"button",class:"btn__duplicate btn--primary",id:"btn__search",onClick:t[2]||(t[2]=(...e)=>m.searchCafe&&m.searchCafe(...e))}," 검색 ")])])],32)]),(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.cafes,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"recommend__card"},[(0,r._)("div",null,[(0,r._)("span",{onClick:e=>m.submitCafeInfo(t),class:"card__name"},(0,c.zw)(e.title),9,d),(0,r._)("span",p,(0,c.zw)(e.roadAddress),1)])])))),128))])])}var _=n(6370),m={created(){let e=!0;this.$store.commit("isHeaderActive",e)},data(){return{cafeData:"",cafes:[]}},methods:{async searchCafe(){try{const e=await(0,_.Yx)(this.cafeData);this.cafes=e.data.items,this.cafes=this.cafes.map((e=>(e.title=e.title.replaceAll("<b>","").replaceAll("</b>",""),e))),console.log(e.data.items[0])}catch(e){console.log(e)}},submitCafeInfo(e){const t=this.cafes[e];this.$emit("submitCafeInfo",t),this.$router.push("/cafes/report")}}},v=n(89);const b=(0,v.Z)(m,[["render",h]]);var C=b}}]);
//# sourceMappingURL=486.679aa41e.js.map