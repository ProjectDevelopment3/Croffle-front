"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[105],{6146:function(t,n,e){e.d(n,{Xy:function(){return r},w$:function(){return c},xZ:function(){return a}});var o=e(3376);function r(t){return o.Hj.post("report/menu",t)}function a(t){return o.Hj.post("report/cafe",t)}function c(t){return o.Hj.post("report/info",t)}},4105:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var o=e(3396),r=e(7139),a=e(9242);const c={id:"report-component"},l={class:"page-title"},s={class:"input__box"},i=(0,o._)("label",null,"수정하고 싶은 정보",-1),u=(0,o._)("option",{value:"cafeInfo"},"카페 정보 정정",-1),f=(0,o._)("option",{value:"menuInfo"},"메뉴 정정",-1),d=(0,o._)("option",{value:"etc"},"기타",-1),p=[u,f,d],h={class:"input__box"},_=(0,o._)("label",null,"정정 내용",-1),g={class:"count"},b=["disabled"];function m(t,n,e,u,f,d){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("header",l,(0,r.zw)(f.header),1),(0,o._)("form",null,[(0,o._)("div",s,[i,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":n[0]||(n[0]=t=>f.category=t)},p,512),[[a.bM,f.category]])]),(0,o._)("div",h,[_,(0,o._)("textarea",{placeholder:"정정하고 싶은 내용을 입력해주세요.",onInput:n[1]||(n[1]=t=>this.content=t.target.value),rows:"5",maxlength:"100"},null,32),(0,o._)("span",g,(0,r.zw)(d.contentLength)+"/100",1)])]),(0,o._)("button",{type:"button",class:(0,r.C_)(["btn--md",d.isValid?"btnPrimary":"btnDisabled"]),disabled:0==d.isValid,onClick:n[2]||(n[2]=(...t)=>d.reportInfo&&d.reportInfo(...t))}," 완료 ",10,b)])}var y=e(6146),v={data(){return{header:"카페 정보 수정 제보",cafe_id:"",category:"cafeInfo",content:""}},computed:{isValid(){return!!this.content},contentLength(){return this.content.length}},methods:{async reportInfo(){try{console.log("카페정보 수정 제보 폼 제출"),console.log("http://34.64.32.174:8080/");const t=await(0,y.w$)({cafe_id:this.cafe_id,category:this.category,content:this.content});console.log(t)}catch(t){console.log(t.response.status),console.log(t.response.headers)}finally{this.initForm}},initForm(){this.rate="",this.content=""}}},w=e(89);const I=(0,w.Z)(v,[["render",m]]);var k=I}}]);
//# sourceMappingURL=105.95c250d0.js.map