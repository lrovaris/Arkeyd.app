"use strict";(self.webpackChunkAngular_Front=self.webpackChunkAngular_Front||[]).push([[179],{388:(p,h,r)=>{r.d(h,{K:()=>g});var v=r(5861),s=r(3020);let t=(()=>{class i{constructor(){this.url=(0,s.tdS)("http://localhost:3000")}}return i.\u0275fac=function(c){return new(c||i)},i.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var f=r(3144);let g=(()=>{class i{constructor(c,u){this.url=c,this.http=u,this.user=(0,s.tdS)({_id:"",name:"",backupAddress:"",balance:[{symbol:"USDT",value:0}],inventory:[],open_orders:[],stake:[]})}getUser(c){var u=this;return(0,v.Z)(function*(){return u.http.get(`${u.url.url()}/user/${c}`)})()}}return i.\u0275fac=function(c){return new(c||i)(s.LFG(t),s.LFG(f.eN))},i.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},3167:(p,h,r)=>{var v=r(6550),s=r(8838),t=r(3020);const g=[{path:"wallet",loadChildren:()=>r.e(549).then(r.bind(r,2549)).then(e=>e.WalletModule)},{path:"user",loadChildren:()=>Promise.all([r.e(549),r.e(18)]).then(r.bind(r,8018)).then(e=>e.UserModule)},{path:"exchange",loadChildren:()=>r.e(973).then(r.bind(r,8973)).then(e=>e.ExchangeModule)},{path:"",component:(()=>{class e{constructor(){this.secondsLeft=0,this.launchDate=(0,t.tdS)(1686865696)}ngOnInit(){setInterval(()=>{this.getCountdownString()},1e3)}getCountdownString(){const n=Math.floor(Date.now()/1e3);return this.secondsLeft=1686865696-n,{days:Math.floor(this.secondsLeft/86400),hours:Math.floor(this.secondsLeft%86400/3600),minutes:Math.floor(this.secondsLeft%3600/60),seconds:Math.floor(this.secondsLeft%60)}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:46,vars:4,consts:[[1,"video-container"],["autoplay","","muted","","loop",""],["src","../../assets/home_video.webm","type","video/mp4"],[1,"caption"],[1,"row"],[1,"col"],[1,"row","bellow-text"],[1,"col",2,"margin-top","calc(50px + 5vw)"],["routerLink","deposit",1,"btn","primary"],["width","calc(1.5vw + 12px)","height","calc(1.5vw + 12px)","viewBox","0 0 20 20","fill","none","xmlns","http://www.w3.org/2000/svg",2,"margin-right","4px"],["d","M10.2059 10.4688C9.96487 10.466 9.72877 10.5371 9.52937 10.6725C9.32997 10.808 9.17684 11.0012 9.0906 11.2263C9.00436 11.4514 8.98915 11.6975 9.04701 11.9315C9.10487 12.1655 9.23302 12.3761 9.41423 12.5351V13.6355C9.41423 13.8455 9.49763 14.0468 9.6461 14.1953C9.79457 14.3438 9.99593 14.4272 10.2059 14.4272C10.4159 14.4272 10.6172 14.3438 10.7657 14.1953C10.9142 14.0468 10.9976 13.8455 10.9976 13.6355V12.5351C11.1788 12.3761 11.3069 12.1655 11.3648 11.9315C11.4226 11.6975 11.4074 11.4514 11.3212 11.2263C11.2349 11.0012 11.0818 10.808 10.8824 10.6725C10.683 10.5371 10.4469 10.466 10.2059 10.4688ZM14.1642 7.30216V5.71883C14.1642 4.66902 13.7472 3.6622 13.0049 2.91987C12.2625 2.17754 11.2557 1.7605 10.2059 1.7605C9.15608 1.7605 8.14926 2.17754 7.40693 2.91987C6.6646 3.6622 6.24756 4.66902 6.24756 5.71883V7.30216C5.61767 7.30216 5.01358 7.55239 4.56818 7.99779C4.12278 8.44318 3.87256 9.04728 3.87256 9.67716V15.2188C3.87256 15.8487 4.12278 16.4528 4.56818 16.8982C5.01358 17.3436 5.61767 17.5938 6.24756 17.5938H14.1642C14.7941 17.5938 15.3982 17.3436 15.8436 16.8982C16.289 16.4528 16.5392 15.8487 16.5392 15.2188V9.67716C16.5392 9.04728 16.289 8.44318 15.8436 7.99779C15.3982 7.55239 14.7941 7.30216 14.1642 7.30216ZM7.83089 5.71883C7.83089 5.08894 8.08111 4.48485 8.52651 4.03945C8.97191 3.59405 9.576 3.34383 10.2059 3.34383C10.8358 3.34383 11.4399 3.59405 11.8853 4.03945C12.3307 4.48485 12.5809 5.08894 12.5809 5.71883V7.30216H7.83089V5.71883ZM14.9559 15.2188C14.9559 15.4288 14.8725 15.6302 14.724 15.7786C14.5756 15.9271 14.3742 16.0105 14.1642 16.0105H6.24756C6.0376 16.0105 5.83623 15.9271 5.68777 15.7786C5.5393 15.6302 5.45589 15.4288 5.45589 15.2188V9.67716C5.45589 9.4672 5.5393 9.26584 5.68777 9.11737C5.83623 8.96891 6.0376 8.8855 6.24756 8.8855H14.1642C14.3742 8.8855 14.5756 8.96891 14.724 9.11737C14.8725 9.26584 14.9559 9.4672 14.9559 9.67716V15.2188Z","fill","white"],[1,"whitelist-text"],["href",""],["href","https://arkeyd.gitbook.io/arkeyd-docs/","target","_blank"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"video",1),t._UZ(2,"source",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",4)(7,"p"),t._uU(8),t.qZA()(),t.TgZ(9,"div",6)(10,"p"),t._uU(11,"days"),t.qZA()()(),t.TgZ(12,"div",5)(13,"div",4)(14,"p"),t._uU(15),t.qZA()(),t.TgZ(16,"div",6)(17,"p"),t._uU(18,"hours"),t.qZA()()(),t.TgZ(19,"div",5)(20,"div",4)(21,"p"),t._uU(22),t.qZA()(),t.TgZ(23,"div",6)(24,"p"),t._uU(25,"minutes"),t.qZA()()(),t.TgZ(26,"div",5)(27,"div",4)(28,"p"),t._uU(29),t.qZA()(),t.TgZ(30,"div",6)(31,"p"),t._uU(32,"seconds"),t.qZA()()()(),t.TgZ(33,"div",4)(34,"div",7)(35,"button",8),t.O4$(),t.TgZ(36,"svg",9),t._UZ(37,"path",10),t.qZA(),t._uU(38," OPENING SOON"),t.qZA(),t.kcU(),t.TgZ(39,"p",11),t._uU(40,"join our "),t.TgZ(41,"a",12),t._uU(42,"whitelist"),t.qZA(),t._uU(43," and read our "),t.TgZ(44,"a",13),t._uU(45,"docs"),t.qZA()()()()()()),2&n&&(t.xp6(8),t.Oqu(o.getCountdownString().days),t.xp6(7),t.Oqu(o.getCountdownString().hours),t.xp6(7),t.Oqu(o.getCountdownString().minutes),t.xp6(7),t.Oqu(o.getCountdownString().seconds))},dependencies:[s.rH],styles:[".video-container[_ngcontent-%COMP%]{height:30vw;width:70vw;position:relative;font-size:10vw}.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;object-fit:cover;z-index:0;border-radius:20px}.video-container[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{z-index:1;position:relative;text-align:center;top:calc(50% - 10vw);color:#000;padding:10px}.bellow-text[_ngcontent-%COMP%]{font-size:2vw;font-weight:300;margin-top:calc(-10px - 4vw)}.btn[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff}.whitelist-text[_ngcontent-%COMP%]{margin-top:calc(-5vw + 20px);font-size:calc(8px + .5vw);color:#000}a[_ngcontent-%COMP%]{color:#ff7649;text-decoration:none;font-weight:800}"]}),e})()},{path:"launchpad",loadChildren:()=>r.e(511).then(r.bind(r,511)).then(e=>e.LaunchpadModule)}];let i=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forRoot(g),s.Bz]}),e})();var l=r(5861);let u=(()=>{class e{get window(){return window}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var m=r(388);let C=(()=>{class e{constructor(n,o){this.winRef=n,this.user=o,this.wallet=(0,t.tdS)(""),this.ethereum=n.window.ethereum}connectAccount(n){var o=this;return(0,l.Z)(function*(){let d=yield o.ethereum.request({method:"eth_requestAccounts"});o.wallet.set(d[0]),n()})()}getChainId(){var n=this;return(0,l.Z)(function*(){return yield n.ethereum.request({method:"eth_chainId"})})()}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(u),t.LFG(m.K))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Z=(()=>{class e{constructor(n,o,d){this.metamask=n,this.router=o,this.user=d}ngOnInit(){}connect(){var n=this;return(0,l.Z)(function*(){""==n.metamask.wallet()&&n.metamask.connectAccount((0,l.Z)(function*(){(yield n.user.getUser(n.metamask.wallet())).subscribe()}))})()}reduceWallet(n){return n.length<=8?n:n.substring(0,3)+"..."+n.substring(n.length-5)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C),t.Y36(s.F0),t.Y36(m.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],decls:23,vars:13,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","user","aria-current","page",1,"nav-link"],["routerLink","exchange",1,"nav-link"],["routerLink","staking","aria-current","page",1,"nav-link","disabled"],["routerLink","launchpad",1,"nav-link","disabled"],[1,"d-flex","me-2"],[1,"nav-link","cursor-pointer",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"nav",0)(1,"div",1),t._UZ(2,"a",2),t.TgZ(3,"button",3),t._UZ(4,"span",4),t.qZA(),t.TgZ(5,"div",5),t._UZ(6,"div",6),t.TgZ(7,"ul",6)(8,"li",7)(9,"a",8),t._uU(10,"my account"),t.qZA()(),t.TgZ(11,"li",7)(12,"a",9),t._uU(13,"exchange"),t.qZA()(),t.TgZ(14,"li",7)(15,"a",10),t._uU(16,"marketplace"),t.qZA()(),t.TgZ(17,"li",7)(18,"a",11),t._uU(19,"launchpad"),t.qZA()()(),t.TgZ(20,"div",12)(21,"a",13),t.NdJ("click",function(){return o.connect()}),t._uU(22),t.qZA()()()()()),2&n&&(t.xp6(8),t.ekj("active",o.router.url.includes("user")),t.xp6(1),t.ekj("disabled",""==o.metamask.wallet()),t.xp6(2),t.ekj("active",o.router.url.includes("exchange")),t.xp6(1),t.ekj("disabled",""==o.metamask.wallet()),t.xp6(2),t.ekj("active",o.router.url.includes("staking")),t.xp6(3),t.ekj("active",o.router.url.includes("launchpad")),t.xp6(5),t.Oqu(""!=o.metamask.wallet()?o.reduceWallet(o.metamask.wallet()):"no wallet connected"))},dependencies:[s.rH],styles:['.active[_ngcontent-%COMP%]{position:relative}.active[_ngcontent-%COMP%]:after{content:"";position:absolute;width:4px;height:4px;border-radius:50%;background-color:orange;left:-6px;top:50%;transform:translateY(-50%)}.nav-item[_ngcontent-%COMP%]{margin-right:2vw;font-size:24px}.navbar-brand[_ngcontent-%COMP%]{background-image:url(logo-crop.9a14e34dd54e7c23.webp);background-size:cover;background-repeat:no-repeat;aspect-ratio:2.49289/1;width:calc(50px + 4vw)}']}),e})(),w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"container","max-width-600"],[2,"margin-top","2vw"],[1,"d-flex","justify-content-center"]],template:function(n,o){1&n&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0),t._UZ(2,"div",1),t.TgZ(3,"div",2),t._UZ(4,"router-outlet"),t.qZA()())},dependencies:[s.lC,Z]}),e})();var b=r(3144);let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[w]}),e.\u0275inj=t.cJS({providers:[u,m.K],imports:[v.b2,i,b.JF]}),e})();v.q6().bootstrapModule(y).catch(e=>console.error(e))}},p=>{p.O(0,[736],()=>p(p.s=3167)),p.O()}]);