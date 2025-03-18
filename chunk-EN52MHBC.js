import{a as V}from"./chunk-J43HCU6I.js";import{A as x,Aa as _,E as m,G as a,H as F,J as w,K as o,L as s,M as p,P as T,Q as b,R as d,S as A,T as E,U as R,V as q,W as l,X as u,Y as f,ca as h,da as k,fa as M,ka as H,la as g,m as y,ma as S,n as I,na as C,t as v,v as D,w as r,x as W,za as P}from"./chunk-HFZV3CKR.js";var G=(t,i)=>({"bg-[#489188] text-white":t,"bg-white ":i}),U=(t,i)=>({"font-black":t,"font-semibold":i}),B=(t,i)=>({"text-white":t,"text-[#5C675A]":i});function Q(t,i){if(t&1&&(o(0,"span",8),l(1),s()),t&2){let e=d();r(),f(" ",e.card.header," ")}}function $(t,i){if(t&1&&(o(0,"span"),l(1),s()),t&2){let e=d();w("w-full text-5xl font-black leading-[60px] uppercase ",e.card.titleClass,""),r(),f(" ",e.card.title," ")}}function X(t,i){if(t&1&&(o(0,"div",13),p(1,"img",14),s()),t&2){let e=d().$implicit;r(),a("src","icons/"+e.icon+".svg",v)("alt",e.icon)}}function J(t,i){if(t&1&&(o(0,"span",15),l(1),s()),t&2){let e=d().$implicit;r(),u(e.serial)}}function K(t,i){if(t&1&&(o(0,"div",9),m(1,X,2,2,"div",10)(2,J,2,1,"ng-template",null,0,k),o(4,"span",11),l(5),s(),o(6,"p",12),l(7),s()()),t&2){let e=i.$implicit,n=q(3);a("ngClass",h(7,G,e.theme==="dark",e.theme==="light")),r(),a("ngIf",e==null?null:e.icon)("ngIfElse",n),r(3),a("ngClass",h(10,U,!!e.icon,!e.icon)),r(),f(" ",e.title," "),r(),a("ngClass",h(13,B,e.theme==="dark",e.theme==="light")),r(),f(" ",e.description," ")}}var L=class t{card;floatingSquaresSide="left";floatingSquaresType="primary";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-work-card"]],inputs:{card:"card",floatingSquaresSide:"floatingSquaresSide",floatingSquaresType:"floatingSquaresType"},decls:8,vars:8,consts:[["serial",""],[1,"container","relative","mx-auto","px-10","py-16"],[3,"side","type"],[1,"w-full","flex","flex-col","gap-8","items-center","2xl:items-start","text-center","2xl:text-start"],["class","text-lg text-[#757575] font-black uppercase",4,"ngIf"],[3,"class",4,"ngIf"],[1,"flex","flex-wrap","gap-10","items-center","justify-center","2xl:justify-between"],["class","w-full sm:w-[550px] xl:w-[454px] h-full sm:h-[326px] flex flex-col gap-8 justify-center items-center xl:items-start text-center xl:text-start px-10 py-8 rounded-3xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300",3,"ngClass",4,"ngFor","ngForOf"],[1,"text-lg","text-[#757575]","font-black","uppercase"],[1,"w-full","sm:w-[550px]","xl:w-[454px]","h-full","sm:h-[326px]","flex","flex-col","gap-8","justify-center","items-center","xl:items-start","text-center","xl:text-start","px-10","py-8","rounded-3xl","shadow-lg","overflow-hidden","hover:scale-105","hover:shadow-xl","transition-all","duration-300",3,"ngClass"],["class","min-w-16 max-w-16 min-h-16 max-h-16 overflow-hidden",4,"ngIf","ngIfElse"],[1,"text-3xl",3,"ngClass"],[1,"text-xl",3,"ngClass"],[1,"min-w-16","max-w-16","min-h-16","max-h-16","overflow-hidden"],[1,"w-full","h-full",3,"src","alt"],[1,"text-5xl","font-semibold"]],template:function(e,n){e&1&&(o(0,"div")(1,"div",1),p(2,"app-float-square",2),o(3,"div",3),m(4,Q,2,1,"span",4)(5,$,2,4,"span",5),o(6,"div",6),m(7,K,8,16,"div",7),s()()()()),e&2&&(w("w-screen overflow-hidden ",n.card.backgroundColor,""),r(2),a("side",n.floatingSquaresSide)("type",n.floatingSquaresType),r(2),a("ngIf",n.card.header),r(),a("ngIf",n.card.title),r(2),a("ngForOf",n.card.services))},dependencies:[C,H,g,S,_],encapsulation:2})};var Y=["cardContainer"];function Z(t,i){if(t&1&&(o(0,"div",10),p(1,"img",11),o(2,"span",12),l(3),s(),o(4,"p",13),l(5),s()()),t&2){let e=i.$implicit;r(),a("src","icons/"+e.icon+".svg",v)("alt",e.icon),r(2),u(e.title),r(2),u(e.description)}}function ee(t,i){if(t&1&&(o(0,"div",8),m(1,Z,6,4,"div",9),s()),t&2){let e=d();F("width",e.cardContainerWidth,"px"),r(),a("ngForOf",e.visibleServices)}}function te(t,i){t&1&&p(0,"app-button",23),t&2&&a("text","View More")("redirectUrl","/services")}function ie(t,i){if(t&1){let e=T();o(0,"div",14)(1,"div",15)(2,"span",16),l(3,"Services provided by us"),s(),o(4,"p",17),l(5,"We have been providing great floring solutions service."),s(),m(6,te,1,2,"app-button",18),s(),o(7,"div",19)(8,"span",16),l(9),s(),o(10,"span",16),l(11,"More"),s(),o(12,"div",20),p(13,"img",21),s(),o(14,"div",22),b("click",function(){y(e);let c=d();return I(c._showMoreServices())}),p(15,"img",21),s()()()}if(t&2){let e=d();r(6),a("ngIf",e.isHome),r(3),f("+",e.moreServicesCount,""),r(4),a("src","icons/curves2.svg",v)("alt","curves"),r(2),a("src","icons/right-arrow.svg",v)("alt","arrow")}}var O=class t{constructor(i){this.cdr=i}cardContainer;isHome=!1;floatingSquaresSide="left";floatingSquaresType="primary";MAX_ROWS=2;CARD_GAP=28;CARD_WIDTH=454;services=V;visibleServices=[];moreServicesCount=0;cardContainerWidth=0;onWindowResize(){this.updateVisibleServices()}ngAfterViewInit(){this.updateVisibleServices()}updateVisibleServices(){let i=this.cardContainer.nativeElement.offsetWidth,e=Math.floor((i+this.CARD_GAP-this.CARD_WIDTH)/(this.CARD_WIDTH+this.CARD_GAP)),n=e*this.MAX_ROWS;n<=0?this.visibleServices=this.services:(this.visibleServices=this.services.slice(0,n),this.moreServicesCount=this.services.length-n,this.moreServicesCount>this.services.length&&(this.moreServicesCount=this.services.length),this.cardContainerWidth=e*(this.CARD_WIDTH+this.CARD_GAP)-this.CARD_GAP),this.cardContainerWidth<=0&&(this.cardContainerWidth=this.CARD_WIDTH),this.cdr.detectChanges()}_showMoreServices(){let i=this.cardContainer.nativeElement.offsetWidth,n=Math.floor((i+this.CARD_GAP-this.CARD_WIDTH)/(this.CARD_WIDTH+this.CARD_GAP))*this.MAX_ROWS,c=this.services.indexOf(this.visibleServices[this.visibleServices.length-1]);c+n>=this.services.length?this.visibleServices=this.services.slice(0,n):this.visibleServices=this.services.slice(c+1,c+n+1),this.moreServicesCount=this.services.length-this.visibleServices.length,this.moreServicesCount>this.services.length&&(this.moreServicesCount=this.services.length),this.cdr.detectChanges()}static \u0275fac=function(e){return new(e||t)(W(M))};static \u0275cmp=x({type:t,selectors:[["app-service-list"]],viewQuery:function(e,n){if(e&1&&A(Y,7),e&2){let c;E(c=R())&&(n.cardContainer=c.first)}},hostBindings:function(e,n){e&1&&b("resize",function(){return n.onWindowResize()},!1,D)},inputs:{isHome:"isHome",floatingSquaresSide:"floatingSquaresSide",floatingSquaresType:"floatingSquaresType"},decls:9,vars:4,consts:[["cardContainer",""],[1,"w-screen","bg-[url('/images/living-area-armchair-1.png')]","bg-cover","bg-center","bg-no-repeat","bg-[#f6fffee3]","bg-blend-lighten","overflow-hidden"],[1,"container","relative","mx-auto","py-16"],[3,"side","type"],[1,"block","lg:hidden","text-4xl","text-center","mb-6","font-semibold"],[1,"w-full","flex","items-center","justify-center","gap-7"],["class","flex flex-wrap gap-7",3,"width",4,"ngIf"],["class","min-w-[454px] max-w-[454px] flex flex-col gap-7",4,"ngIf"],[1,"flex","flex-wrap","gap-7"],["class","w-[454px] h-[326px] flex flex-col gap-7 items-center px-10 py-8 bg-white rounded-3xl shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#F6FFFE] hover:text-[#489188] transition-all duration-300",4,"ngFor","ngForOf"],[1,"w-[454px]","h-[326px]","flex","flex-col","gap-7","items-center","px-10","py-8","bg-white","rounded-3xl","shadow-lg","hover:scale-105","hover:shadow-xl","hover:bg-[#F6FFFE]","hover:text-[#489188]","transition-all","duration-300"],[1,"w-16","h-16",3,"src","alt"],[1,"text-3xl","font-semibold","truncate"],[1,"text-xl","text-[#5C675A]","text-center"],[1,"min-w-[454px]","max-w-[454px]","flex","flex-col","gap-7"],[1,"w-full","h-[326px]","flex","flex-col","gap-7","justify-center","px-10","py-8"],[1,"text-5xl","font-semibold"],[1,"text-xl","text-[#1A2239]"],[3,"text","redirectUrl",4,"ngIf"],[1,"relative","w-full","h-[326px]","flex","flex-col","gap-7","justify-center","px-10","py-8","text-white","bg-[#489188]","rounded-3xl","shadow-lg"],[1,"absolute","top-0","left-1/2","w-28"],[1,"w-full","h-full","object-cover",3,"src","alt"],[1,"absolute","top-2/3","left-3/4","w-16","cursor-pointer","hover:scale-125","transition-all","duration-200","ease-in-out",3,"click"],[3,"text","redirectUrl"]],template:function(e,n){e&1&&(o(0,"div",1)(1,"div",2,0),p(3,"app-float-square",3),o(4,"span",4),l(5,"Services provided by us"),s(),o(6,"div",5),m(7,ee,2,3,"div",6)(8,ie,16,6,"div",7),s()()()),e&2&&(r(3),a("side",n.floatingSquaresSide)("type",n.floatingSquaresType),r(4),a("ngIf",n.cardContainerWidth),r(),a("ngIf",n.services.length!==n.visibleServices.length))},dependencies:[C,g,S,_,P],encapsulation:2,changeDetection:0})};export{L as a,O as b};
