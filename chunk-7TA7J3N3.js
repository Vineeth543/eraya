import{a as W,b as N,c as B,d as D,e as O,f as L,g as R,h as P}from"./chunk-FTAXBBHZ.js";import{$ as f,A as y,Aa as V,E as S,G as r,K as t,L as n,M as b,N as E,O as F,P as w,Q as x,R as p,W as o,Y as v,Z as _,_ as g,fa as k,la as M,m as d,ma as T,n as u,na as I,t as h,w as s,x as C,za as U}from"./chunk-HFZV3CKR.js";function A(l,c){if(l&1&&(t(0,"a",11),o(1),n()),l&2){let e=c.$implicit;r("href",e.url,h)("target","_blank"),s(),v(" ",e.title," ")}}function H(l,c){if(l&1){let e=w();E(0),t(1,"div",23)(2,"span",24),o(3,"Name"),n(),t(4,"input",25),f("ngModelChange",function(i){d(e);let m=p();return g(m._name,i)||(m._name=i),u(i)}),n()(),t(5,"div",23)(6,"span",24),o(7,"Phone"),n(),t(8,"input",25),f("ngModelChange",function(i){d(e);let m=p();return g(m._phone,i)||(m._phone=i),u(i)}),n()(),t(9,"div",23)(10,"span",24),o(11,"Email"),n(),t(12,"input",25),f("ngModelChange",function(i){d(e);let m=p();return g(m._email,i)||(m._email=i),u(i)}),n()(),t(13,"div",23)(14,"span",24),o(15,"Enquiry"),n(),t(16,"textarea",26),f("ngModelChange",function(i){d(e);let m=p();return g(m._message,i)||(m._message=i),u(i)}),n()(),t(17,"app-button",27),x("click",function(){d(e);let i=p();return u(i._onSubmitForm())}),n(),F()}if(l&2){let e=p();s(4),r("id","name")("type","text"),_("ngModel",e._name),s(4),r("id","phone")("type","number"),_("ngModel",e._phone),s(4),r("id","email")("type","email"),_("ngModel",e._email),s(4),r("id","message")("rows",4),_("ngModel",e._message),s(),r("type","secondary")("text","Get Callback")("block",!0)}}function q(l,c){l&1&&b(0,"app-loader",28)}function z(l,c){if(l&1){let e=w();t(0,"app-thank-you",29),x("onConfirm",function(){d(e);let i=p();return u(i._onSubmitAnotherResponseClick())}),n()}if(l&2){let e=p();r("success",e._isFormSubmissionSuccess)("customClass","min-h-96")}}var j=class l{constructor(c,e){this.cdr=c;this.contactService=e;window.scrollTo({top:0,behavior:"smooth"}),this._isFormSubmissionSuccess=this.contactService.hasSentEmail()}_socials=W;_name="";_phone="";_email="";_message="";_loading=!1;_isFormSubmissionError=!1;_isFormSubmissionSuccess=!1;resetState(c,e){this._name="",this._phone="",this._email="",this._message="",this._loading=!1,this._isFormSubmissionError=e,this._isFormSubmissionSuccess=c,this.cdr.detectChanges()}_onSubmitForm(){let c=[{id:"name",value:this._name},{id:"phone",value:this._phone},{id:"email",value:this._email},{id:"message",value:this._message}];c.forEach(e=>document.getElementById(e.id).style.border=e.value?"1px solid white":"1px solid red"),!c.some(e=>!e.value)&&(this._loading=!0,this.contactService.sendEmail({name:this._name,phone:this._phone,email:this._email,message:this._message}).subscribe({next:()=>this.resetState(!0,!1),error:()=>this.resetState(!1,!0),complete:()=>this.contactService.setSentEmail()}))}_onSubmitAnotherResponseClick(){this.resetState(!1,!1),this.contactService.clearSentEmail()}_scrollToContactForm(){document.getElementById("contact-form")?.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(e){return new(e||l)(C(k),C(P))};static \u0275cmp=y({type:l,selectors:[["app-contact-us"]],decls:42,vars:8,consts:[[1,"w-screen","bg-[#F6FFFE]",3,"id"],[1,"container","relative","mx-auto","flex","flex-col","items-center","pt-16","lg:pb-96","xl:pb-72"],[1,"w-11/12","lg:w-full","text-center","lg:text-start","flex","flex-col","lg:flex-row","items-center","lg:items-start","gap-10","lg:gap-4","lg:px-10","xl:px-32"],[1,"w-full","lg:w-1/2","flex","flex-col","items-center","lg:items-start","gap-8","justify-between"],[1,"w-3/4","flex","flex-col","gap-5"],[1,"text-6xl","font-bold"],[1,"text-xl"],[1,"flex","flex-col","gap-3"],[1,"text-3xl","font-bold"],["href","tel:+919986723596",1,"w-fit","text-xl","underline","cursor-pointer"],["href","mailto:eraya@gmail.com",1,"w-fit","text-xl","underline","cursor-pointer"],[1,"w-fit","text-xl","underline","cursor-pointer",3,"href","target"],[1,"flex","flex-col","gap-2","items-center","lg:items-start"],["class","w-fit text-xl underline cursor-pointer",3,"href","target",4,"ngFor","ngForOf"],[1,"lg:hidden","w-full","text-5xl","text-center","font-bold"],[1,"w-full","lg:w-1/2","flex","flex-col","gap-5","justify-between"],[4,"ngIf"],["class","w-full h-full",4,"ngIf"],[3,"success","customClass","onConfirm",4,"ngIf"],[1,"relative","w-11/12","my-10","lg:my-0"],[1,"lg:absolute","top-10","w-fit","flex","flex-col","gap-10","items-center","bg-[#489188]","px-16","py-10"],[1,"text-6xl","text-white","text-center","font-black","uppercase"],[1,"relative","z-10","w-fit","px-6","py-3","text-white","text-xl","font-semibold","bg-black","border","border-white","hover:bg-white","hover:text-black","hover:border-black","focus:outline-none","focus:ring","focus:ring-black","transition","duration-300","ease-in-out",3,"click"],[1,"w-full","flex","flex-col","gap-3"],[1,"text-lg","font-medium"],[1,"w-full","p-3","bg-[#F7F7F7]","outline-none","border",3,"ngModelChange","id","type","ngModel"],[1,"w-full","p-3","bg-[#F7F7F7]","outline-none","border",3,"ngModelChange","id","rows","ngModel"],[1,"w-full",3,"click","type","text","block"],[1,"w-full","h-full"],[3,"onConfirm","success","customClass"]],template:function(e,a){e&1&&(t(0,"div",0)(1,"div",1),b(2,"app-float-square"),t(3,"div",2)(4,"div",3)(5,"div",4)(6,"span",5),o(7,"Let\u2019s Talk"),n(),t(8,"span",6),o(9," Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help "),n()(),t(10,"div",7)(11,"span",8),o(12,"Phone"),n(),t(13,"a",9),o(14," (+91) 998 6723 596 "),n()(),t(15,"div",7)(16,"span",8),o(17,"Email"),n(),t(18,"a",10),o(19),n()(),t(20,"div",7)(21,"span",8),o(22,"Office"),n(),t(23,"a",11),o(24," 123, 4th Cross, 5th Main, 6th Sector, HSR Layout, Bangalore - 560102 "),n()(),t(25,"div",7)(26,"span",8),o(27,"Socials"),n(),t(28,"div",12),S(29,A,2,3,"a",13),n()()(),t(30,"span",14),o(31,"Fill The Form Below"),n(),t(32,"div",15),S(33,H,18,15,"ng-container",16)(34,q,1,0,"app-loader",17)(35,z,1,2,"app-thank-you",18),n()(),t(36,"div",19)(37,"div",20)(38,"span",21),o(39,"LETS CHANGE YOUR OWN HOME INTERIOR DESIGN NOW"),n(),t(40,"button",22),x("click",function(){return a._scrollToContactForm()}),o(41," Connect With Us "),n()()()()()),e&2&&(r("id","contact-form"),s(19),v(" ","eraya@gmail.com"," "),s(4),r("href","https://maps.app.goo.gl/pnT2aMWBi5BCwMU96",h)("target","_blank"),s(6),r("ngForOf",a._socials),s(4),r("ngIf",!a._loading&&!a._isFormSubmissionSuccess&&!a._isFormSubmissionError),s(),r("ngIf",a._loading),s(),r("ngIf",a._isFormSubmissionSuccess||a._isFormSubmissionError))},dependencies:[I,M,T,O,N,B,D,U,V,L,R],encapsulation:2,changeDetection:0})};export{j as ContactUsComponent};
