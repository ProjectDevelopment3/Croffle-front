"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[20],{1020:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(3396),s=a(7139),r=a(9242);const i={id:"report-component"},l={class:"page-title"},o={class:"input__box"},c=(0,n._)("label",null,"카페명",-1),u={class:"info"},d={class:"input__box"},h=(0,n._)("label",null,"도로명 주소",-1),p={class:"info"},m={class:"input__box"},f=(0,n._)("label",null,"메뉴명",-1),_={class:"count"},g={class:"input__box"},b=(0,n._)("label",null,"가격",-1),v={class:"count"},w=(0,n._)("div",{class:"guide"},"크로플 메뉴만 등록할 수 있어요!",-1),y=["disabled"];function x(e,t,a,x,D,k){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("header",l,(0,s.zw)(D.header),1),(0,n._)("form",null,[(0,n._)("div",o,[c,(0,n._)("span",u,(0,s.zw)(D.cafeData.name),1)]),(0,n._)("div",d,[h,(0,n._)("span",p,(0,s.zw)(D.cafeData.roadaddr),1)]),(0,n._)("div",m,[f,(0,n._)("input",{placeholder:"메뉴명을 입력해주세요.",type:"text",onInput:t[0]||(t[0]=e=>this.menus.name=e.target.value),maxlength:"40"},null,32),(0,n._)("span",_,(0,s.zw)(k.menuLength)+"/40",1)]),(0,n._)("div",g,[b,(0,n.wy)((0,n._)("input",{placeholder:"가격을 입력해주세요.",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>this.menus.price=e),maxlength:"20",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},null,512),[[r.nr,this.menus.price]]),(0,n._)("span",v,(0,s.zw)(k.priceLength)+"/20",1)])]),w,(0,n._)("button",{type:"button",class:(0,s.C_)(["btn--md",k.isValid?"btnPrimary":"btnDisabled"]),disabled:0==k.isValid,onClick:t[2]||(t[2]=(...e)=>k.reportMenu&&k.reportMenu(...e))}," 완료 ",10,y)])}var D=a(6265),k=a.n(D),z={created(){this.fetchCafeInfo()},data(){return{header:"메뉴 추가 제보하기",menus:{name:"",price:""},cafeData:[]}},computed:{isValid(){return!(!this.menus.name||!this.menus.price)},menuLength(){return this.menus.name.length},priceLength(){return this.menus.price.length}},methods:{async reportMenu(){try{console.log("메뉴 제보 폼 제출"),await k().post(" http://34.64.32.174:8080/report/menu",{cafeName:this.cafeData.name,roadAddress:this.cafeData.roadaddr,menuList:{name:this.menus.name,price:this.menus.price}},{headers:{Authorization:`Bearer ${this.$store.state.token}`}})}catch(e){console.log(e.response.status),console.log(e.response.headers)}finally{this.initForm(),alert("메뉴 추가가 완료되었습니다.")}},initForm(){this.rate="",this.content=""},async fetchCafeInfo(){try{const{data:e}=await k().get(` http://34.64.32.174:8080/cafe/${this.$route.params.id}`);console.log("카페 상세 정보 조회",e),this.cafeData=e.data[0]}catch(e){console.log(e)}}}},C=a(89);const L=(0,C.Z)(z,[["render",x]]);var $=L}}]);
//# sourceMappingURL=20.3354b10a.js.map