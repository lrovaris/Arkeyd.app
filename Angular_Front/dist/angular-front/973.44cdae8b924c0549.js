"use strict";(self.webpackChunkAngular_Front=self.webpackChunkAngular_Front||[]).push([[973],{8973:(T,u,l)=>{l.r(u),l.d(u,{ExchangeModule:()=>b});var a=l(4755),e=l(3020),r=l(8838),m=l(388);function g(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"li")(1,"a",18),e.NdJ("click",function(){const d=e.CHM(n).$implicit,s=e.oxw();return e.KtG(s.selectedCoin.set(d.symbol))}),e._uU(2),e.qZA()()}if(2&t){const n=i.$implicit;e.xp6(2),e.Oqu(n.symbol)}}let v=(()=>{class t{constructor(n){this.userService=n,this.balance=(0,e.tdS)(this.userService.user().balance),this.selectedCoin=(0,e.tdS)("ETH"),this.selectedPair=(0,e.tdS)("ARKD"),this.availableValue=(0,e.tdS)(this.userService.user().balance.find(o=>o.symbol==this.selectedCoin())?.value),this.availableValuePair=(0,e.tdS)(this.userService.user().balance.find(o=>o.symbol==this.selectedPair())?.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-swap"]],decls:54,vars:5,consts:[[1,"row",2,"text-align","left","margin-top","2vw"],["for","exampleFormControlInput1",1,"form-label"],[1,"row"],[1,"col-8",2,"text-align","left","line-height","12px"],["type","text","id","exampleFormControlInput1",1,"form-control","btn-input",3,"placeholder"],[1,"col-4"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","dropdown-toggle",2,"width","100%","border","1px solid black"],[1,"dropdown-menu"],[4,"ngFor","ngForOf"],[1,"col-9",2,"text-align","left"],[1,"col-3",2,"text-align","right"],[1,"row",2,"margin","3rem","font-size","64px"],[1,"col","d-flex","justify-content-center"],[1,"icoswap"],["type","text","id","exampleFormControlInput1","placeholder","28.571428571",1,"form-control","btn-input"],[1,"dropdown-item","disabled"],[1,"btn","primary"],[1,"dropdown-item",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2,"I want to swap"),e.qZA()(),e.TgZ(3,"div",2)(4,"div",3),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"button",7),e._uU(9),e.qZA(),e.TgZ(10,"ul",8),e.YNc(11,g,3,1,"li",9),e.qZA()()()(),e.TgZ(12,"div",2)(13,"div",10)(14,"small"),e._uU(15," available balance "),e.qZA()(),e.TgZ(16,"div",11)(17,"small"),e._uU(18),e.qZA()()(),e.TgZ(19,"div",12)(20,"div",13),e._UZ(21,"i",14),e.qZA()(),e.TgZ(22,"div",0)(23,"label",1),e._uU(24,"for"),e.qZA()(),e.TgZ(25,"div",2)(26,"div",3),e._UZ(27,"input",15),e.qZA(),e.TgZ(28,"div",5)(29,"div",6)(30,"button",7),e._uU(31," ETH "),e.qZA(),e.TgZ(32,"ul",8)(33,"li")(34,"a",16),e._uU(35,"coming soon"),e.qZA()()()()()(),e.TgZ(36,"div",2)(37,"div",10)(38,"small"),e._uU(39," swap fee "),e.qZA(),e._UZ(40,"br"),e.TgZ(41,"small"),e._uU(42," 0.936 ETH "),e.qZA()(),e.TgZ(43,"div",11)(44,"small"),e._uU(45," total received "),e.qZA(),e._UZ(46,"br"),e.TgZ(47,"small"),e._uU(48," 28.20 ETH "),e.qZA()()(),e.TgZ(49,"div",2)(50,"div",13)(51,"button",17),e._UZ(52,"i",14),e._uU(53," SWAP"),e.qZA()()()),2&n&&(e.xp6(5),e.Q6J("placeholder",o.availableValue()),e.xp6(4),e.hij(" ",o.selectedCoin()," "),e.xp6(2),e.Q6J("ngForOf",o.balance()),e.xp6(7),e.AsE(" ",o.availableValue()," ",o.selectedCoin()," "))},dependencies:[a.sg]}),t})();function Z(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"li")(1,"a",6),e.NdJ("click",function(){const d=e.CHM(n).$implicit,s=e.oxw();return e.KtG(s.selectedCoin.set(d.symbol))}),e._uU(2),e.qZA()()}if(2&t){const n=i.$implicit;e.xp6(2),e.Oqu(n.symbol)}}let _=(()=>{class t{constructor(n){this.userService=n,this.buySell=(0,e.tdS)("sell"),this.balance=(0,e.tdS)(this.userService.user().balance),this.selectedCoin=(0,e.tdS)("ETH"),this.selectedPair=(0,e.tdS)("ARKD"),this.availableValue=(0,e.tdS)(this.userService.user().balance.find(o=>o.symbol==this.selectedCoin())?.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-limit-order"]],decls:43,vars:5,consts:[[1,"row",2,"margin","4vw","font-size","calc(12px + 0.9vw)"],[1,"col","text-align-right"],[1,"col","text-align-left"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item",3,"click"],[1,"row"],[1,"col-8",2,"text-align","left","line-height","12px"],["type","text","id","exampleFormControlInput1",1,"form-control","btn-input",3,"placeholder"],[1,"col-4"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","dropdown-toggle",2,"width","100%","border","1px solid black"],[4,"ngFor","ngForOf"],[1,"col-8",2,"text-align","left"],[1,"col-3",2,"text-align","right"],[1,"row",2,"margin-top","1vw","text-align","left","font-size","18px","font-weight","400"],[1,"col-6"],[1,"col-6",2,"text-align","left","line-height","12px","position","relative"],["type","text","id","exampleFormControlInput1","placeholder","0.025",1,"form-control","btn-input"],[1,"input-left"],["type","text","id","exampleFormControlInput1","placeholder","0.00014",1,"form-control","btn-input"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"I want to"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"p",4),e._uU(6),e.qZA(),e.TgZ(7,"ul",5)(8,"li")(9,"a",6),e.NdJ("click",function(){return o.buySell.set("sell")}),e._uU(10,"sell"),e.qZA()(),e.TgZ(11,"li")(12,"a",6),e.NdJ("click",function(){return o.buySell.set("buy")}),e._uU(13,"buy"),e.qZA()()()()()(),e.TgZ(14,"div",7)(15,"div",8),e._UZ(16,"input",9),e.qZA(),e.TgZ(17,"div",10)(18,"div",3)(19,"button",11),e._uU(20),e.qZA(),e.TgZ(21,"ul",5),e.YNc(22,Z,3,1,"li",12),e.qZA()()()(),e.TgZ(23,"div",7)(24,"div",13),e._UZ(25,"small"),e.qZA(),e.TgZ(26,"div",14)(27,"small"),e._uU(28),e.qZA()()(),e.TgZ(29,"div",15)(30,"div",16),e._uU(31,"for total"),e.qZA(),e.TgZ(32,"div",16),e._uU(33,"@ price"),e.qZA()(),e.TgZ(34,"div",7)(35,"div",17),e._UZ(36,"input",18),e.TgZ(37,"small",19),e._uU(38," ETH "),e.qZA()(),e.TgZ(39,"div",17),e._UZ(40,"input",20),e.TgZ(41,"small",19),e._uU(42," KOKI/ETH "),e.qZA()()()),2&n&&(e.xp6(6),e.hij(" ",o.buySell()," "),e.xp6(10),e.Q6J("placeholder",o.availableValue()),e.xp6(4),e.hij(" ",o.selectedCoin()," "),e.xp6(2),e.Q6J("ngForOf",o.balance()),e.xp6(6),e.hij(" ",o.availableValue()," "))},dependencies:[a.sg],styles:[".input-left[_ngcontent-%COMP%]{position:absolute;right:44px;font-size:18px;top:calc(50% - 9px)}.btn-input[_ngcontent-%COMP%]{background-color:#0000000e}"]}),t})();function f(t,i){1&t&&e._UZ(0,"app-swap")}function h(t,i){1&t&&e._UZ(0,"app-limit-order")}let c=(()=>{class t{constructor(n){this.router=n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-exchange"]],decls:11,vars:6,consts:[[1,"col"],[1,"row"],[1,"nav","nav-tabs","nav-fill","justify-content-center"],[1,"nav-item"],["routerLink","/exchange/swap","aria-current","page",1,"nav-link"],["routerLink","/exchange/limit-order",1,"nav-link"],[4,"ngIf"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"ul",2)(3,"li",3)(4,"a",4),e._uU(5,"Swap"),e.qZA()(),e.TgZ(6,"li",3)(7,"a",5),e._uU(8,"limit order"),e.qZA()()()(),e.YNc(9,f,1,0,"app-swap",6),e.YNc(10,h,1,0,"app-limit-order",6),e.qZA()),2&n&&(e.xp6(4),e.ekj("active",!o.router.url.includes("limit-order")),e.xp6(3),e.ekj("active",o.router.url.includes("limit-order")),e.xp6(2),e.Q6J("ngIf",!o.router.url.includes("limit-order")),e.xp6(1),e.Q6J("ngIf",o.router.url.includes("limit-order")))},dependencies:[a.O5,r.rH,v,_],styles:[".active[_ngcontent-%COMP%]{color:#000!important}.nav-link[_ngcontent-%COMP%]{color:#3a3a3a}"]}),t})();const x=[{path:"",component:c},{path:"swap",component:c},{path:"limit-order",component:c},{path:"exchange",redirectTo:"/exchange/swap",pathMatch:"full"}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,r.Bz.forChild(x)]}),t})()}}]);