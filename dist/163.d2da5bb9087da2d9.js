"use strict";(self.webpackChunknector_farm=self.webpackChunknector_farm||[]).push([[163],{7163:(T,d,n)=>{n.r(d),n.d(d,{ForgotPasswordModule:()=>a});var g=n(6895),m=n(2019),r=n(433),o=n(1571),u=n(6043);function f(e,s){1&e&&(o.TgZ(0,"div"),o._uU(1,"Email is required!"),o.qZA())}function p(e,s){1&e&&(o.TgZ(0,"div"),o._uU(1,"Enter a valid email address!"),o.qZA())}function h(e,s){if(1&e&&(o.TgZ(0,"div",23),o.YNc(1,f,2,0,"div",20),o.YNc(2,p,2,0,"div",20),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",null==t.form.email.errors?null:t.form.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==t.form.email.errors?null:t.form.email.errors.pattern)}}function v(e,s){1&e&&(o.TgZ(0,"div",24)(1,"span",25),o._uU(2,"Loading..."),o.qZA()())}function _(e,s){1&e&&(o.ynx(0),o._uU(1,"RESET PASSWORD"),o.BQk())}const b=function(e,s){return{"alert-success":e,"alert-danger":s}};function F(e,s){if(1&e&&(o.ynx(0),o.TgZ(1,"p",26),o._uU(2),o.qZA(),o.BQk()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngClass",o.WLB(2,b,"Success"===t.message.type,"Error"===t.message.type)),o.xp6(1),o.hij(" ",t.message.msg," ")}}const w=function(e){return{"is-invalid":e}},Z=function(){return["/login"]};class l{get form(){return this.forgotForm.controls}constructor(s,t,c){this.fb=s,this._commonService=t,this.router=c,this.submitted=!1,this.submitFlag=!1,this.loading=!1,this.message={msg:"",type:"",show:!1},this.forgotForm=this.fb.group({email:["",[r.kI.required,r.kI.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],roleType:["company_admin"]})}ngOnInit(){}showMessage(s,t){this.message.msg=s,this.message.type=t,this.message.show=!0,setTimeout(()=>{this.message.msg="",this.message.type="",this.message.show=!1},5e3)}onSubmit(){this.submitted=!0,this.forgotForm.valid&&(this.submitFlag=!0,this.loading=!0,this._commonService.forgotPassword(this.forgotForm.value).subscribe(s=>{let t={verifiedEmail:s.message.verifiedEmail};this.submitted=!1,this.loading=!1,this.forgotForm.controls.email.reset(),this._commonService.successToaster(s.message.message),this._commonService.setVerifiedMail(t),this.router.navigate(["/reset-password-otp"])}).add(()=>{this.submitFlag=!1,this.loading=!1}))}}l.\u0275fac=function(s){return new(s||l)(o.Y36(r.qu),o.Y36(u.v),o.Y36(m.F0))},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-forgot-password"]],decls:31,vars:10,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-6","d-flex","align-items-center","justify-content-center","logo-bg"],[1,"logo","text-center"],["href",""],["src","../../../assets/img/logo.png","alt",""],[1,"col-md-6"],[1,"login_right_side"],[1,"login_form"],[1,"max_center_400"],[1,"text-white","text-center","pb-2"],[1,"text-white","text-center","mb-5"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Enter your email",1,"form-control","form-control1",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"form-group","custom-input"],["type","submit",1,"btn-style-one","btn","btn_default","text-center","onhover"],["class","spinner-border text-light align-top","role","status",4,"ngIf"],[4,"ngIf"],[1,"text-center","mt-4"],["routerLinkActive","active",1,"text-color",3,"routerLink"],[1,"invalid-feedback"],["role","status",1,"spinner-border","text-light","align-top"],[1,"sr-only"],[1,"alert","mb-2",3,"ngClass"]],template:function(s,t){1&s&&(o.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"a",4),o._UZ(6,"img",5),o.qZA()()(),o.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"h2",10),o._uU(12,"Forgot password?"),o.qZA(),o.TgZ(13,"p",11),o._uU(14," Don't worry. Resetting your password is easy. Just tell us "),o._UZ(15,"br"),o._uU(16," the email address that was used to create this account. "),o.qZA()(),o.TgZ(17,"form",12),o.NdJ("ngSubmit",function(){return t.onSubmit()}),o.TgZ(18,"div",13)(19,"label",14),o._uU(20,"Email Address"),o.qZA(),o._UZ(21,"input",15),o.YNc(22,h,3,2,"div",16),o.qZA(),o.TgZ(23,"div",17)(24,"button",18),o.YNc(25,v,3,0,"div",19),o.YNc(26,_,2,0,"ng-container",20),o.qZA()(),o.YNc(27,F,3,5,"ng-container",20),o.TgZ(28,"div",21)(29,"a",22),o._uU(30,"Login"),o.qZA()()()()()()()()()),2&s&&(o.xp6(17),o.Q6J("formGroup",t.forgotForm),o.xp6(4),o.Q6J("ngClass",o.VKq(7,w,(t.submitted||t.form.email.touched)&&t.form.email.errors)),o.xp6(1),o.Q6J("ngIf",(t.submitted||t.form.email.touched)&&t.form.email.errors),o.xp6(3),o.Q6J("ngIf",t.loading),o.xp6(1),o.Q6J("ngIf",!t.loading),o.xp6(1),o.Q6J("ngIf",t.message.show),o.xp6(2),o.Q6J("routerLink",o.DdM(9,Z)))},dependencies:[g.mk,g.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,m.rH,m.Od],styles:[".logo-bg[_ngcontent-%COMP%]{background:url(login-bg.e327fcbe89ff996e.png);background-repeat:no-repeat}.text-color[_ngcontent-%COMP%]{color:#ee975d;text-decoration:none}[_ngcontent-%COMP%]::placeholder{color:#ada5a5;opacity:1}"]});const x=[{path:"",component:l,data:{title:"Forgot Password - Nector Farm"}}];class i{}i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[m.Bz.forChild(x),m.Bz]});var y=n(4772);class a{}a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[g.ez,y.m,i]})}}]);