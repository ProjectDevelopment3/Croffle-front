"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[790],{8762:function(n,e,t){t.d(e,{CF:function(){return a},MJ:function(){return l},P$:function(){return i},R$:function(){return m},X7:function(){return c},aj:function(){return o},qp:function(){return u},th:function(){return s}});var r=t(3376);function u(){return r.Uj.get("owner/cafe")}function i(n){return r.Uj.put(`owner/menu/${n}`)}function o(n){return r.Uj.get(`owner/menu/${n}`)}function a(){return r.Uj.post("owner/menu")}function c(n){return r.Uj.put(`owner/menu/${n}`)}function l(n){return r.Uj.get("owner/coupon",n)}function s(n){return r.Uj.post("/owner/stamp",n)}function m(){return r.Uj.put("/owner/verify")}},6790:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(3396),u=t(9242),i=t(7139);const o={class:"owner-form"},a=(0,r._)("header",{class:"page-title"},"메뉴 추가하기",-1),c={class:"input__box"},l=(0,r._)("label",{for:"menu"},"메뉴명",-1),s={class:"count"},m={class:"input__box"},p=(0,r._)("label",{for:"price"},[(0,r.Uk)("가격 "),(0,r._)("span",{class:"won"},"원")],-1),f={class:"count"},_=["disabled"];function d(n,e,t,d,h,w){return(0,r.wg)(),(0,r.iD)("div",o,[a,(0,r._)("form",null,[(0,r._)("div",c,[l,(0,r.wy)((0,r._)("input",{id:"menu","onUpdate:modelValue":e[0]||(e[0]=e=>n.menu_name=e),placeholder:"메뉴명을 입력해주세요.",onInput:e[1]||(e[1]=n=>this.menu_name=n.target.value),maxlength:"40"},null,544),[[u.nr,n.menu_name]]),(0,r._)("span",s,(0,i.zw)(w.menuLength)+"/40",1)]),(0,r._)("div",m,[p,(0,r.wy)((0,r._)("input",{id:"price","onUpdate:modelValue":e[2]||(e[2]=e=>n.menu_price=e),placeholder:"가격을 입력해주세요.",maxlength:"20",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},null,512),[[u.nr,n.menu_price]]),(0,r._)("span",f,(0,i.zw)(w.priceLength)+"/20",1)])]),(0,r._)("button",{type:"button",onClick:e[3]||(e[3]=(...n)=>w.createOwnerMenu&&w.createOwnerMenu(...n)),class:(0,i.C_)(["btn--md",w.isValid?"btnPrimary":"btnDisabled"]),disabled:0==w.isValid}," 완료 ",10,_)])}var h=t(8762),w={data:function(){return{menu_name:"",menu_price:""}},computed:{menuLength(){return this.menu_name.length},priceLength(){return this.menu_price.length},isValid(){return!(!this.menu_name||!this.menu_price)}},methods:{async createOwnerMenu(){try{console.log("사장님 - 메뉴 추가 폼 제출"),await(0,h.CF)({menu_name:this.menu_name,menu_price:this.menu_price})}catch(n){console.log(n.message)}finally{let n="추가가";this.$emit("setMessage",n),this.$router.push("/owner/complete")}}}},g=t(89);const b=(0,g.Z)(w,[["render",d]]);var v=b}}]);
//# sourceMappingURL=790.59e611db.js.map