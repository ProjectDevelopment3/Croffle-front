"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[226],{6146:function(e,t,n){n.d(t,{Xy:function(){return a},w$:function(){return r},xZ:function(){return l}});var s=n(3376);function a(e){return s.Hj.post("report/menu",e)}function l(e){return s.Hj.post("report/cafe",e)}function r(e){return s.Hj.post("report/info",e)}},226:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var s=n(3396),a=n(7139),l=n(9242);const r={class:"cafe-view"},i={id:"report-component"},o={class:"page-title"},u={class:"input__box"},c=(0,s._)("div",null,[(0,s._)("label",null,"카페명"),(0,s._)("em",null,"*")],-1),h=(0,s._)("button",{type:"button",class:"btn--border--black btn--sm-2"}," 카페 검색하기 ",-1),p={key:1,class:"text__cafe-title"},d={class:"input__box"},f=(0,s._)("div",null,[(0,s._)("label",null,"메뉴"),(0,s._)("em",null,"*")],-1),m={class:"count"},_={class:"input__box"},b=(0,s._)("div",null,[(0,s._)("label",null,"가격"),(0,s._)("em",null,"*")],-1),g={class:"count"},y={class:"input__box"},w=(0,s._)("label",null,"운영시간",-1),x={class:"count"},v={class:"input__box"},k=(0,s._)("label",null,"sns",-1),I={class:"count"},L=["disabled"];function V(e,t,n,V,z,C){const j=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",i,[(0,s._)("header",o,(0,a.zw)(z.header),1),(0,s._)("form",null,[(0,s._)("div",u,[c,""==this.cafeInfo?((0,s.wg)(),(0,s.j4)(j,{key:0,to:"/cafes/searchcafe"},{default:(0,s.w5)((()=>[h])),_:1})):(0,s.kq)("",!0),""!=this.cafeInfo?((0,s.wg)(),(0,s.iD)("div",p,(0,a.zw)(this.cafeInfo.title),1)):(0,s.kq)("",!0)]),(0,s._)("div",d,[f,(0,s.wy)((0,s._)("input",{placeholder:"메뉴를 입력해주세요.",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>this.menus.name=e),maxlength:"40"},null,512),[[l.nr,this.menus.name]]),(0,s._)("span",m,(0,a.zw)(C.priceLength)+"/40",1)]),(0,s._)("div",_,[b,(0,s.wy)((0,s._)("input",{placeholder:"가격을 입력해주세요.",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>this.menus.price=e),maxlength:"20",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},null,512),[[l.nr,this.menus.price]]),(0,s._)("span",g,(0,a.zw)(C.priceLength)+"/20",1)]),(0,s._)("div",y,[w,(0,s.wy)((0,s._)("textarea",{placeholder:"운영시간을 입력해주세요.",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>this.hours=e),maxlength:"255"},null,512),[[l.nr,this.hours]]),(0,s._)("span",x,(0,a.zw)(C.hoursLength)+"/255",1)]),(0,s._)("div",v,[k,(0,s.wy)((0,s._)("textarea",{placeholder:"sns 주소를 입력해주세요.",type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>this.site=e),maxlength:"255"},null,512),[[l.nr,this.site]]),(0,s._)("span",I,(0,a.zw)(C.snsLength)+"/255",1)])]),(0,s._)("button",{type:"button",class:(0,a.C_)(["btn--md",C.isValid?"btnPrimary":"btnDisabled"]),disabled:0==C.isValid,onClick:t[4]||(t[4]=(...t)=>e.reportMenu&&e.reportMenu(...t))}," 완료 ",10,L)])])}var z=n(3376),C=n(6146),j={created(){let e=!0;this.$store.commit("isHeaderActive",e)},props:{cafeInfo:{type:Object}},data(){return{header:"카페 제보하기",hours:"",site:"",menus:{name:"",price:""}}},computed:{isValid(){return!!(this.cafeInfo&&this.menus.name&&this.menus.price)},menuLength(){return this.menus.name.length},hoursLength(){return this.hours.length},snsLength(){return this.site.length},priceLength(){return this.menus.price.length}},methods:{async reportCafe(){try{console.log("카페 제보 폼 제출");const e=await(0,C.xZ)({cafe_name:this.cafeInfo.title,coord:(this.cafeInfo.mapx,this.cafeInfo.mapy),roadaddr:this.cafeInfo.roadAddress,menus:{name:this.menus.name,price:this.menus.price},hours:this.hours,site:this.site});console.lot(e)}catch(e){console.log(e)}finally{this.initForm(),this.$router.push("/cafes")}},initForm(){this.rate="",this.content=""},async searchCafe(){try{const e=await(0,z.Yx)(this.cafeData);console.log(e.data)}catch(e){console.log(e)}}}},D=n(89);const H=(0,D.Z)(j,[["render",V]]);var U=H}}]);
//# sourceMappingURL=226.68fdcfe2.js.map