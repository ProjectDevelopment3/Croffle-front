"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[513],{3376:function(e,t,a){a.d(t,{Uj:function(){return l},yC:function(){return p}});var n=a(6265),s=a.n(n),o=a(5008);function r(e){return e.interceptors.request.use((function(e){return console.log(e),e.headers.Authorization=`Bearer ${(0,o.cd)()}`,e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}function c(){return s().create({baseURL:"http://192.168.0.3:8080/"})}function i(){const e=s().create({baseURL:"/api"});return r(e)}c();const l=i();function u(){return s().create({baseURL:"/v1/search",headers:{"X-Naver-Client-Id":"WDBUTDGAh6YGJ6Umihxr","X-Naver-Client-Secret":"Vjn2nII5K3"}})}function d(){const e=s().create({baseURL:"/v4"});return r(e)}function f(){const e=Math.floor(+new Date).toString(),t=s().create({baseURL:"/v3/geolocation/v2",headers:{"x-ncp-apigw-timestamp":e,"x-ncp-iam-access-key":"wnm6dyQfAzJLgs1r8r9I","x-ncp-apigw-signature-v2":"l9RFKQeUe3n09f4cu2m6CWyayyoC0p5jgrPXerDf"}});return t}function _(){const e=s().create({baseURL:"/v2"});return e}const p=u();f(),d(),_()},5513:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var n=a(3396),s=a(7139);const o={id:"cafe-page"},r={class:"cafe-info"},c={class:"cafe__name"},i={class:"cafe__address"},l=(0,n.Uk)(" 좋아요 "),u={class:"cafe-info__detail"},d={class:"cafe-info__wrapper"},f=(0,n._)("label",null,"전화번호",-1),_={class:"cafe-info__wrapper"},p=(0,n._)("label",null,"운영시간",-1),v={class:"cafe-info__wrapper"},h=(0,n._)("label",null,"SNS",-1),m={id:"cafe-menu"},w=(0,n._)("span",null,"메뉴",-1),g=(0,n._)("p",{class:"guide"},[(0,n.Uk)(" 아래 버튼을 눌러 크로플 메뉴 추가 제보 또는"),(0,n._)("br"),(0,n.Uk)(" 카페 정보 수정 제보를 해주세요! ")],-1),k={class:"menu__list"},b={class:"menus__name"},y={class:"menus__price"},C={class:"review__wrapper"},$=(0,n.Uk)("리뷰  "),D={class:"card__info"},I={class:"card__user"},U={class:"text__nickname"},R={class:"text__date"},z={class:"rate__stars"},L={class:"text__content"};function x(e,t,a,x,M,j){const A=(0,n.up)("modal-content"),K=(0,n.up)("modal-component");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",o,[(0,n._)("div",r,[(0,n._)("span",c,(0,s.zw)(M.cafeInfo.name),1),(0,n._)("span",i,(0,s.zw)(M.cafeInfo.roadaddr),1),(0,n._)("button",{type:"button",class:"cafe__btn-like",onClick:t[0]||(t[0]=(...e)=>j.scrapCafe&&j.scrapCafe(...e))},[l,(0,n._)("i",{class:(0,s.C_)(["fa-heart",M.liked?"fas":"far"])},null,2)])]),(0,n._)("div",u,[(0,n._)("div",d,[f,(0,n._)("span",null,(0,s.zw)(M.cafeInfo.telephone),1)]),(0,n._)("div",_,[p,(0,n._)("span",null,(0,s.zw)(M.cafeInfo.hours),1)]),(0,n._)("div",v,[h,(0,n._)("span",null,(0,s.zw)(M.cafeInfo.site),1)])])]),(0,n._)("div",m,[w,g,(0,n._)("div",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(M.cafeInfo.menus,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"menu-info__wrapper",key:e},[(0,n._)("span",b,(0,s.zw)(M.cafeInfo.menuListDtos.name),1),(0,n._)("span",y,(0,s.zw)(M.cafeInfo.menuListDtos.price),1)])))),128))])]),(0,n._)("button",{type:"button",onClick:t[1]||(t[1]=e=>M.isModalActive=!0),class:"btn--primary"}," 제보하기 + "),(0,n._)("div",C,[(0,n._)("span",null,[$,(0,n._)("strong",null,(0,s.zw)(M.reviewData.length),1)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(M.reviewData,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"review__card"},[(0,n._)("div",D,[(0,n._)("div",I,[(0,n._)("div",U,(0,s.zw)(e.author),1),(0,n._)("div",R,(0,s.zw)(e.createdDate),1)]),(0,n._)("div",z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(M.reviewData[t].rate,(e=>((0,n.wg)(),(0,n.iD)("i",{key:e,class:"fas fa-star fa-1x"})))),128))]),(0,n._)("div",L,(0,s.zw)(e.content),1)])])))),128))]),(0,n._)("button",{type:"button",onClick:t[2]||(t[2]=(...e)=>j.toReviewForm&&j.toReviewForm(...e)),class:"btn--border"}," 리뷰 작성하기 + "),M.isModalActive?((0,n.wg)(),(0,n.j4)(K,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(A,{onCloseModal:t[3]||(t[3]=e=>M.isModalActive=!1)})])),_:1})):(0,n.kq)("",!0)])}var M=a(1142);const j={class:"content"},A={class:"btn__close"},K=["src"],S=(0,n._)("h1",null,"무엇을 제보하시나요?",-1),Z={class:"btn__wrapper"};function F(e,t,a,s,o,r){return(0,n.wg)(),(0,n.iD)("div",j,[(0,n._)("div",A,[(0,n._)("button",{type:"button",class:"btn--transparent",onClick:t[0]||(t[0]=t=>e.$emit("close-modal"))},[(0,n._)("img",{src:o.ic__close},null,8,K)])]),S,(0,n._)("div",Z,[(0,n._)("button",{type:"button",class:"btn--secondary",onClick:t[1]||(t[1]=(...e)=>r.addReport&&r.addReport(...e))}," 크로플 메뉴 추가 제보 "),(0,n._)("button",{type:"button",class:"btn--negative",onClick:t[2]||(t[2]=(...e)=>r.reportInfo&&r.reportInfo(...e))}," 카페 정보 수정 제보 ")])])}var H=a(8391),W={name:"ModalContent",props:{msg:String},data(){return{ic__close:H}},methods:{addReport(){this.$emit("close-modal"),this.$router.push(`/cafe/${this.$route.params.id}/addreport`)},reportInfo(){this.$emit("close-modal"),this.$router.push(`/cafe/${this.$route.params.id}/reportinfo`)}}},Y=a(89);const N=(0,Y.Z)(W,[["render",F]]);var P=N,X=a(3376);function q(e){return X.Uj.post("like",e)}function B(e){return X.Uj.post("like/del",e)}var G=a(6265),J=a.n(G),Q={created(){this.fetchCafeInfo(),this.fetchReview()},components:{ModalComponent:M.Z,ModalContent:P},data(){return{isModalActive:!1,isHeaderActive:!0,liked:!1,reviewData:[],cafeInfo:{}}},methods:{toReviewForm(){this.$router.push(`/cafe/${this.$route.params.id}/review`)},async fetchReview(){try{const{data:e}=await J().get(` http://34.64.32.174:8080/review/${this.$route.params.id}`);console.log("리뷰 조회",e),this.reviewData=e.data}catch(e){console.log(e)}},async checkLike(){try{const{data:e}=await J().get(" http://34.64.32.174:8080/likes");e.some((function(e){return e.id==this.$route.params.id?this.liked=!0:this.liked=!1}))}catch(e){console.log(e)}},async scrapCafe(){if(""==this.$store.state.token||"undefined"==this.$store.state.token)alert("로그인이 필요한 기능입니다.");else if(0==this.liked)try{console.log("좋아요"),await q(this.$route.params.id),this.liked=!this.liked}catch(e){console.log(e.message)}else try{console.log("좋아요 취소"),await B(this.$route.params.id),this.liked=!this.liked}catch(e){console.log(e.message)}},async fetchCafeInfo(){try{console.log("카페 상세정보 조회");const{data:e}=await J().get(` http://34.64.32.174:8080/cafe/${this.$route.params.id}`);this.cafeInfo=e.data[0]}catch(e){console.log(e.message)}}}};const T=(0,Y.Z)(Q,[["render",x]]);var V=T},1142:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3396);const s={class:"modal"},o=(0,n._)("div",{class:"overlay"},null,-1),r={class:"modal-card"};function c(e,t,a,c,i,l){return(0,n.wg)(),(0,n.iD)("div",s,[o,(0,n._)("div",r,[(0,n.WI)(e.$slots,"default")])])}var i={props:{couponData:[]}},l=a(89);const u=(0,l.Z)(i,[["render",c]]);var d=u},8391:function(e,t,a){e.exports=a.p+"img/close.a59852f9.svg"}}]);
//# sourceMappingURL=513.a1f76337.js.map