import{A as w,B as U,Ba as me,C as p,D as C,F as ae,G as le,I as ue,J as ce,K as u,L as c,M as F,Q as I,S as de,Y as H,_ as L,a as s,b as l,c as J,ca as $,d as Q,e as ee,f as te,g as T,h as R,ha as he,i as G,ia as fe,j as h,ja as S,k as ne,ka as d,l as ie,la as W,o as re,q as oe,qa as pe,r as f,s as j,t as se,w as y,x as o,y as B,z as E}from"./chunk-DIMVLQIH.js";var _t=[{title:"Instagram",icon:"instagram",url:"https://www.instagram.com/"},{title:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/"},{title:"Facebook",icon:"facebook",url:"https://www.facebook.com/"},{title:"X",icon:"x",url:"https://x.com/"}];var be=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(o(B),o(j))};static \u0275dir=p({type:n})}return n})(),Be=(()=>{class n extends be{static \u0275fac=(()=>{let t;return function(r){return(t||(t=oe(n)))(r||n)}})();static \u0275dir=p({type:n,features:[C]})}return n})(),Ae=new h("");var Ue={provide:Ae,useExisting:T(()=>Me),multi:!0};function He(){let n=W()?W().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Le=new h(""),Me=(()=>{class n extends be{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!He())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(o(B),o(j),o(Le,8))};static \u0275dir=p({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&I("input",function(v){return r._handleInput(v.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(v){return r._compositionEnd(v.target.value)})},standalone:!1,features:[$([Ue]),C]})}return n})();var $e=new h(""),We=new h("");function Ee(n){return n!=null}function we(n){return ae(n)?Q(n):n}function Fe(n){let e={};return n.forEach(t=>{e=t!=null?s(s({},e),t):e}),Object.keys(e).length===0?null:e}function Ie(n,e){return e.map(t=>t(n))}function qe(n){return!n.validate}function Se(n){return n.map(e=>qe(e)?e:t=>e.validate(t))}function ze(n){if(!n)return null;let e=n.filter(Ee);return e.length==0?null:function(t){return Fe(Ie(t,e))}}function Ne(n){return n!=null?ze(Se(n)):null}function Ye(n){if(!n)return null;let e=n.filter(Ee);return e.length==0?null:function(t){let i=Ie(t,e).map(we);return te(i).pipe(ee(Fe))}}function xe(n){return n!=null?Ye(Se(n)):null}function ge(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Ze(n){return n._rawValidators}function Ke(n){return n._rawAsyncValidators}function q(n){return n?Array.isArray(n)?n:[n]:[]}function x(n,e){return Array.isArray(n)?n.includes(e):n===e}function _e(n,e){let t=q(e);return q(n).forEach(r=>{x(t,r)||t.push(r)}),t}function ve(n,e){return q(e).filter(t=>!x(n,t))}var O=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ne(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=xe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},z=class extends O{name;get formDirective(){return null}get path(){return null}},M=class extends O{_parent=null;name=null;valueAccessor=null},Y=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Xe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},jt=l(s({},Xe),{"[class.ng-submitted]":"isSubmitted"}),Bt=(()=>{class n extends Y{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(o(M,2))};static \u0275dir=p({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ue("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[C]})}return n})();var V="VALID",N="INVALID",m="PENDING",D="DISABLED",_=class{},P=class extends _{value;source;constructor(e,t){super(),this.value=e,this.source=t}},b=class extends _{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},A=class extends _{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},g=class extends _{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function Je(n){return(k(n)?n.validators:n)||null}function Qe(n){return Array.isArray(n)?Ne(n):n||null}function et(n,e){return(k(e)?e.asyncValidators:n)||null}function tt(n){return Array.isArray(n)?xe(n):n||null}function k(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var Z=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return d(this.statusReactive)}set status(e){d(()=>this.statusReactive.set(e))}_status=S(()=>this.statusReactive());statusReactive=E(void 0);get valid(){return this.status===V}get invalid(){return this.status===N}get pending(){return this.status==m}get disabled(){return this.status===D}get enabled(){return this.status!==D}errors;get pristine(){return d(this.pristineReactive)}set pristine(e){d(()=>this.pristineReactive.set(e))}_pristine=S(()=>this.pristineReactive());pristineReactive=E(!0);get dirty(){return!this.pristine}get touched(){return d(this.touchedReactive)}set touched(e){d(()=>this.touchedReactive.set(e))}_touched=S(()=>this.touchedReactive());touchedReactive=E(!1);get untouched(){return!this.touched}_events=new J;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(_e(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(_e(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ve(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ve(e,this._rawAsyncValidators))}hasValidator(e){return x(this._rawValidators,e)}hasAsyncValidator(e){return x(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(s({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new A(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new A(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(s({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new b(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new b(!0,i))}markAsPending(e={}){this.status=m;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new g(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(s({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable(l(s({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new P(this.value,i)),this._events.next(new g(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(s({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=V,this._forEachChild(i=>{i.enable(l(s({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(s({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===m)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new P(this.value,t)),this._events.next(new g(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(s({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=m,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=we(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new g(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new f,this.statusChanges=new f}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(m)?m:this._anyControlsHaveStatus(N)?N:V}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new b(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new A(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){k(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Qe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=tt(this._rawAsyncValidators)}};var Oe=new h("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function nt(n,e){return[...e.path,n]}function it(n,e,t=X){ot(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),st(n,e),lt(n,e),at(n,e),rt(n,e)}function ye(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function rt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ot(n,e){let t=Ze(n);e.validator!==null?n.setValidators(ge(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Ke(n);e.asyncValidator!==null?n.setAsyncValidators(ge(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();ye(e._rawValidators,r),ye(e._rawAsyncValidators,r)}function st(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Pe(n,e)})}function at(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Pe(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Pe(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function lt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function ut(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ct(n){return Object.getPrototypeOf(n.constructor)===Be}function dt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(a=>{a.constructor===Me?t=a:ct(a)?i=a:r=a}),r||i||t||null}function Ce(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ve(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ht=class extends Z{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Je(t),et(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ve(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ce(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ce(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ve(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ft={provide:M,useExisting:T(()=>pt)},De=Promise.resolve(),pt=(()=>{class n extends M{_changeDetectorRef;callSetDisabledState;control=new ht;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new f;constructor(t,i,r,a,v,je){super(),this._changeDetectorRef=v,this.callSetDisabledState=je,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=dt(this,a)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ut(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){it(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){De.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&fe(i);De.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?nt(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(o(z,9),o($e,10),o(We,10),o(Ae,10),o(he,8),o(Oe,8))};static \u0275dir=p({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[$([ft]),C,ie]})}return n})();var mt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=U({type:n});static \u0275inj=G({})}return n})();var Ht=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Oe,useValue:t.callSetDisabledState??X}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=U({type:n});static \u0275inj=G({imports:[mt]})}return n})();var ke=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["app-loader"]],decls:4,vars:0,consts:[[1,"w-full","h-full","min-h-96","flex","items-center","justify-center"],["viewBox","0 0 100 101",1,"w-8","h-8","text-gray-200","animate-spin","dark:text-gray-600","fill-[#489188]"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"]],template:function(t,i){t&1&&(u(0,"div",0),re(),u(1,"svg",1),F(2,"path",2)(3,"path",3),c()())},encapsulation:2})};var Te=class n{success=!1;customClass="";onConfirm=new f;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["app-thank-you"]],inputs:{success:"success",customClass:"customClass"},outputs:{onConfirm:"onConfirm"},decls:8,vars:7,consts:[[1,"w-16","h-16","flex","items-center","justify-center","rounded-full"],["alt","icon",1,"w-16","h-16","object-cover",3,"src"],[1,"text-2xl","font-bold"],[1,"text-xl"],[1,"w-fit",3,"click","text"]],template:function(t,i){t&1&&(u(0,"div")(1,"div",0),F(2,"img",1),c(),u(3,"span",2),H(4),c(),u(5,"span",3),H(6),c(),u(7,"app-button",4),I("click",function(){return i.onConfirm.emit()}),c()()),t&2&&(ce("w-full h-full flex flex-col items-center justify-center gap-6 ",i.customClass,""),y(2),de("src",i.success?"/icons/checked.png":"/icons/cancel.png",se),y(2),L(" ",i.success?"Thank you for your submission!":"Something went wrong!"," "),y(2),L(" ",i.success?"We will get back to you shortly.":"Please try again later."," "),y(),le("text",i.success?"Submit Another Response":"Try Again"))},dependencies:[me],encapsulation:2})};var Re={production:!0,apiBaseUrl:"https://eraya-server.vercel.app/contact"};var Ge=class n{constructor(e){this.httpClient=e}EMAIL_ENDPOINT=Re.apiBaseUrl;EMAIL_SENT_KEY="sentEmail";sessionStorage=sessionStorage;sendEmail(e){return this.httpClient.post(this.EMAIL_ENDPOINT,e)}setSentEmail(){this.sessionStorage.setItem(this.EMAIL_SENT_KEY,"true")}hasSentEmail(){return this.sessionStorage.getItem(this.EMAIL_SENT_KEY)==="true"}clearSentEmail(){this.sessionStorage.clear()}static \u0275fac=function(t){return new(t||n)(ne(pe))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})};export{_t as a,Me as b,Bt as c,pt as d,Ht as e,ke as f,Te as g,Ge as h};
