"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[209],{6146:function(e,n,t){t.d(n,{Xy:function(){return s},w$:function(){return i},xZ:function(){return o}});var r=t(3376);function s(e){return r.Hj.post("report/menu",e)}function o(e){return r.Hj.post("report/cafe",e)}function i(e){return r.Hj.post("report/info",e)}},1209:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(3396),s=t(7139),o=t(9242);const i={id:"report-component"},a={class:"page-title"},u={class:"input__box"},l=(0,r._)("label",null,"메뉴명",-1),c={class:"count"},d={class:"input__box"},p=(0,r._)("label",null,"가격",-1),h={class:"count"},m=(0,r._)("div",{class:"guide"},"크로플 메뉴만 등록할 수 있어요!",-1),f=["disabled"];function _(e,n,t,_,g,b){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("header",a,(0,s.zw)(g.header),1),(0,r._)("form",null,[(0,r._)("div",u,[l,(0,r._)("input",{placeholder:"메뉴명을 입력해주세요.",type:"text",onInput:n[0]||(n[0]=e=>this.menus.name=e.target.value),maxlength:"40"},null,32),(0,r._)("span",c,(0,s.zw)(b.menuLength)+"/40",1)]),(0,r._)("div",d,[p,(0,r.wy)((0,r._)("input",{placeholder:"가격을 입력해주세요.",type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>this.menus.price=e),maxlength:"20",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},null,512),[[o.nr,this.menus.price]]),(0,r._)("span",h,(0,s.zw)(b.priceLength)+"/20",1)])]),m,(0,r._)("button",{type:"button",class:(0,s.C_)(["btn--md",b.isValid?"btnPrimary":"btnDisabled"]),disabled:0==b.isValid,onClick:n[2]||(n[2]=(...e)=>b.reportMenu&&b.reportMenu(...e))}," 완료 ",10,f)])}var g=t(6146),b={data(){return{header:"메뉴 추가 제보하기",cafe_name:"",coord:"",roadAddress:"",menus:{name:"",price:""}}},computed:{isValid(){return!(!this.menus.name||!this.menus.price)},menuLength(){return this.menus.name.length},priceLength(){return this.menus.price.length}},methods:{async reportMenu(){try{console.log("메뉴 제보 폼 제출");const e=await(0,g.Xy)({cafe_name:this.cafe_name,coord:this.coord,roadAddress:this.roadAddress,menus:{name:this.menus.name,price:this.menus.price}});console.log(e)}catch(e){console.log(e.response.status),console.log(e.response.headers)}finally{this.initForm()}},initForm(){this.rate="",this.content=""}}},v=t(89);const y=(0,v.Z)(b,[["render",_]]);var w=y}}]);
//# sourceMappingURL=209.981c767e.js.map