"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[852],{8762:function(n,t,e){e.d(t,{CF:function(){return a},MJ:function(){return l},P$:function(){return s},X7:function(){return o},aj:function(){return u},qp:function(){return c},th:function(){return i}});var r=e(3376);function c(){return r.cR.get("cafe")}function s(){return r.cR.put("cafe")}function u(){return r.cR.get("menu")}function a(){return r.cR.post("menu")}function o(){return r.cR.put("menu")}function l(n){return r.cR.get("coupon",n)}function i(n){return r.cR.post("stamp",n)}},2852:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r=e(3396),c=e(7139);const s={class:"owner-stamp"},u=(0,r._)("header",{class:"owner__header"},[(0,r._)("h1",null,"스탬프 찍어주기"),(0,r._)("span",null,"회원 정보가 일치하면 스탬프를 적립해주세요.")],-1),a={class:"owner__card"},o=(0,r._)("span",{class:"owner__card-title"},"고객정보",-1),l=(0,r._)("br",null,null,-1),i={class:"owner__card-text"},_=(0,r.Uk)(" 님"),f={class:"owner__card"},p=(0,r._)("span",{class:"owner__card-title"},"보유 스탬프",-1),d=(0,r._)("br",null,null,-1),m={class:"owner__card-text"},h={class:"count"},w=(0,r.Uk)(" / 10개");function g(n,t,e,g,k,b){return(0,r.wg)(),(0,r.iD)("div",s,[u,(0,r._)("div",a,[o,l,(0,r._)("span",i,[(0,r._)("strong",null,(0,c.zw)(e.stampInfo.user_nickname),1),_])]),(0,r._)("div",f,[p,d,(0,r._)("span",m,[(0,r._)("strong",h,(0,c.zw)(e.stampInfo.stamp_cnt),1),w])]),(0,r._)("button",{type:"button",onClick:t[0]||(t[0]=(...n)=>b.createStamp&&b.createStamp(...n)),class:"btn--primary"}," 스탬프 적립하기 ")])}var k=e(8762),b={data(){return{user:{user_nickname:"닉네임",stamp_cnt:"2"}}},props:{stampInfo:{type:Object}},methods:{async createStamp(){try{console.log("스탬프 적립 완료");const n=await(0,k.th)({cafe_id:this.cafe_id,user_id:this.user_id});console.log(n)}catch(n){console.log(n.message)}finally{let n="적립이";this.$emit("setMessage",n),this.$router.push("/owner/complete")}}}},v=e(89);const R=(0,v.Z)(b,[["render",g]]);var y=R}}]);
//# sourceMappingURL=852.a7ed1cb6.js.map