/*!CK:28047387!*//*1413172498,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["v3DC1"]); }

__d("MButton",["CSSCore","DOM","cx","invariant"],function(a,b,c,d,e,f,g,h,i,j){var k="_2347";function l(n){j(h.isType(n,'button')||h.isType(n,'a'));}var m={isEnabled:function(n){l(n);return n.disabled===false||h.isType(n,'a')&&!g.hasClass(n,k);},setEnabled:function(n,o){l(n);if(m.isEnabled(n)===o)return;if(h.isType(n,'button')){n.disabled=!o;}else{g.conditionClass(n,k,!o);if(o){n.removeAttribute('tabindex');n.removeAttribute('aria-disabled');}else{n.setAttribute('tabindex','-1');n.setAttribute('aria-disabled','true');}}}};e.exports=m;},null);
__d("MLoginView",["DOM","MButton","Stratcom","ge"],function(a,b,c,d,e,f,g,h,i,j){var k={disableOnSubmit:function(m,n){g.listen(m,'submit',null,function(){h.setEnabled(n,false);setTimeout(h.setEnabled.bind(null,n,true),15000);});},setupPasswordVisibilityToggle:function(){this.passwordInput=g.find(document,"input","login-password-field");this.toggleStateQEInput=g.find(document,"input","spw");this.showPasswordLabel=g.find(document,"label","show-password-toggle");this.showPasswordCheckbox=g.find(this.showPasswordLabel,"input");i.listen('click','show-password-toggle',this.handlePasswordVisibilityToggle.bind(this));this.handlePasswordVisibilityToggle();},handlePasswordVisibilityToggle:function(){if(this.showPasswordCheckbox.checked){this.passwordInput.type="text";this.passwordInput.autocomplete="off";this.passwordInput.spellcheck=0;this.toggleStateQEInput.value=1;}else{this.passwordInput.type="password";this.toggleStateQEInput.value=-1;}}};e.exports=k;function l(){var m=j('login_form'),n=j('ajax'),o=j('width'),p=j('dimensions'),q=j('pxr'),r=j('gps');if(n)n.value=window.XMLHttpRequest&&m&&m.children.length?1:0;if(o)o.value=window.screen?screen.width:0;if(p)p.value=window.screen?screen.width+'x'+screen.height:0;var s=null;if(navigator.userAgent.indexOf('Firefox')!==-1||(!window.devicePixelRatio&&navigator.userAgent.indexOf("Windows Phone")!==-1)){s=screen.width/document.documentElement.offsetWidth;s=Math.max(1,Math.floor(s*2)/2);}if((!s||s===1)&&navigator.userAgent.indexOf('IEMobile')!==-1){s=Math.sqrt(screen.deviceXDPI*screen.deviceYDPI)/96;s=Math.max(1,Math.round(s*2)/2);}if(q)q.value=s||window.devicePixelRatio||1;if(r)r.value='geolocation' in navigator||(typeof GearsFactory!='undefined')||(typeof navigator.mimeTypes!='undefined'&&navigator.mimeTypes['application/x-googlegears'])?1:0;}f.updateUACapabilitySniffFieldsForLoginForm=l;},null);