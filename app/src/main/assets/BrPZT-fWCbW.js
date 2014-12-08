/*!CK:3860001523!*//*1413775860,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["0z1ib"]); }

__d("MFacewebAndroidLink",["DOM"],function(a,b,c,d,e,f,g){function h(){g.listen(document.documentElement,'click',null,function(i){var j=i.getNode('tag:a');if(!j)return;var k=j.getAttribute('href');if(k)if(k.indexOf('#')===0)i.prevent();});}f.setupListeners=h;},null);
__d("MLogoutClearCache",["MCache","Stratcom"],function(a,b,c,d,e,f,g,h){h.listen('click','logout',g.clear);},null);
__d("MVerifyCache",["MCache"],function(a,b,c,d,e,f,g){var h=function(i){var j=g.VIEWER_KEY,k=g.getItem(j);if(k!==i.viewer){k&&g.clear();g.setItem(j,i.viewer,true);}};f.main=h;},null);
__d("IosWebapp",["Stratcom","MHistory","MURI","WebStorage"],function(a,b,c,d,e,f,g,h,i,j){var k=!!window.navigator.standalone;if(k){var l='last_visited_url',m=j.getLocalStorage();function n(p){if(p)return m.setItem(l,p);return m.removeItem(l);}function o(){return m.getItem(l);}g.listen('m:page:loading',null,function(p){n(p.getData());});g.listen('m:page:initialize',null,function(){var p=o();if(p)h.replaceState(new i(p).normalize().toString());});}},null);
__d("AddressBar",["setTimeoutAcrossTransitions","MViewport"],function(a,b,c,d,e,f,g,h){var i=0;function j(){clearTimeout(i);i=g(k,250);}function k(){i=0;if(h.getScrollTop()<60)h.scrollToHeader();}function l(){if(navigator.userAgent.indexOf('iPad')===-1)window.addEventListener('load',function m(){window.removeEventListener('load',m,false);k();},false);}f.setupLoadListener=l;},null);
__d("performanceAbsoluteNow",["performance"],function(a,b,c,d,e,f,g){var h;if(g.now&&g.timing&&g.timing.navigationStart){var i=g.timing.navigationStart;h=function(){return g.now.apply(g,arguments)+i;};}else h=Date.now.bind(Date);e.exports=h;},null);
__d("ArtillerySegment",["ImmutableObject","invariant","performanceAbsoluteNow"],function(a,b,c,d,e,f,g,h,i){var j=0;function k(l){"use strict";h(l);h(('category' in l)&&('description' in l));this.$ArtillerySegment0=false;this.$ArtillerySegment1=Object.assign({},l,{id:(j++).toString(36)});this.$ArtillerySegment2=[];}k.prototype.getID=function(){"use strict";return this.$ArtillerySegment1.id;};k.prototype.begin=function(){"use strict";this.$ArtillerySegment1.begin=i();return this;};k.prototype.end=function(){"use strict";this.$ArtillerySegment1.end=i();return this;};k.prototype.appendChild=function(){"use strict";for(var l=[],m=0,n=arguments.length;m<n;m++)l.push(arguments[m]);h(!this.$ArtillerySegment0);l.forEach(function(o){this.$ArtillerySegment2.push(o.getID());}.bind(this));return this;};k.prototype.setPosted=function(){"use strict";this.$ArtillerySegment0=true;return this;};k.prototype.getPostData=function(){"use strict";return new g(this.$ArtillerySegment1,{children:this.$ArtillerySegment2.slice()});};e.exports=k;},null);
__d("ArtillerySequence",["ImmutableObject","invariant"],function(a,b,c,d,e,f,g,h){var i=0;function j(k){"use strict";h(k);h('description' in k);this.$ArtillerySequence0=false;this.$ArtillerySequence1=Object.assign({},k,{id:(i++).toString(36)});this.$ArtillerySequence2=[];}j.prototype.getID=function(){"use strict";return this.$ArtillerySequence1.id;};j.prototype.addSegment=function(){"use strict";for(var k=[],l=0,m=arguments.length;l<m;l++)k.push(arguments[l]);h(!this.$ArtillerySequence0);k.forEach(function(n){this.$ArtillerySequence2.push(n.getID());}.bind(this));return this;};j.prototype.setPosted=function(){"use strict";this.$ArtillerySequence0=true;return this;};j.prototype.getPostData=function(){"use strict";return new g(this.$ArtillerySequence1,{segments:this.$ArtillerySequence2.slice()});};e.exports=j;},null);
__d("ArtilleryTrace",["ArtillerySegment","ArtillerySequence","ImmutableObject","invariant","mixInEventEmitter"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){"use strict";this.$ArtilleryTrace0=false;this.$ArtilleryTrace1=undefined;this.$ArtilleryTrace2={};this.$ArtilleryTrace3=[];this.$ArtilleryTrace4=[];this.$ArtilleryTrace5={};this.$ArtilleryTrace6=[];}l.prototype.createSequence=function(m){"use strict";j(!this.$ArtilleryTrace0);var n=new h(m);this.$ArtilleryTrace3.push(n);return n;};l.prototype.createSegment=function(m){"use strict";j(!this.$ArtilleryTrace0);var n=new g(m);this.$ArtilleryTrace4.push(n);return n;};l.prototype.markSegment=function(m,n){"use strict";j(!this.$ArtilleryTrace0);this.$ArtilleryTrace5[n]=m.getID();return this;};l.prototype.connectTrace=function(m,n){"use strict";j(!this.$ArtilleryTrace0);n=n||this.$ArtilleryTrace1;j(n);this.$ArtilleryTrace6.push({segment:m.getID(),trace:n});return this;};l.prototype.setID=function(m){"use strict";j(!this.$ArtilleryTrace1);this.$ArtilleryTrace1=m;return this;};l.prototype.getID=function(){"use strict";return this.$ArtilleryTrace1;};l.prototype.addProperty=function(m,n){"use strict";this.$ArtilleryTrace2[m]=n;};l.prototype.post=function(){"use strict";j(!this.$ArtilleryTrace0);this.$ArtilleryTrace0=true;var m=new i({id:this.$ArtilleryTrace1,properties:this.$ArtilleryTrace2,sequences:this.$ArtilleryTrace3.map(function(n){return n.setPosted().getPostData();}),segments:this.$ArtilleryTrace4.map(function(n){return n.setPosted().getPostData();}),marks:Object.assign({},this.$ArtilleryTrace5),connections:this.$ArtilleryTrace6.slice()});this.emitAndHold('post',m);};l.prototype.isPosted=function(){"use strict";return this.$ArtilleryTrace0;};k(l,{post:true});e.exports=l;},null);
__d("forEachObject",[],function(a,b,c,d,e,f){'use strict';var g=Object.prototype.hasOwnProperty;function h(i,j,k){for(var l in i)if(g.call(i,l))j.call(k,i[l],l,i);}e.exports=h;},null);
__d("Artillery",["ArtilleryTrace","Banzai","forEachObject","invariant","mixInEventEmitter"],function(a,b,c,d,e,f,g,h,i,j,k){var l=false,m=[],n,o,p;h.subscribe(h.SHUTDOWN,function(){q.postAll();});var q={isEnabled:function(){return l;},createTrace:function(){var r=new g();m.push(r);r.addListener('post',q.emitAndHold.bind(q,'posttrace'));return r;},getPageTrace:function(){j(n);if(o)return o;o=q.createTrace().setID(n);i(p,function(r,s,t){o.addProperty(s,r);});return o;},postAll:function(){m.forEach(function(r){return !r.isPosted()&&r.post();});},enable:function(){l=true;},setPageTraceID:function(r){j(!n);n=r;},setPageProperties:function(r){p=r;},getPageProperty:function(r){return p[r];}};k(q,{posttrace:true});e.exports=q;},null);
__d("LogHistoryListeners",["Clock","ErrorUtils","LogHistory"],function(a,b,c,d,e,f,g,h){var i=b('LogHistory').getInstance('sys');g.addListener(g.ANOMALY,function(j){i.warn('clock_anomaly',g.getSamples());});h.addListener(function(j){i.error('error',JSON.stringify({guard:j.guard,line:j.line,message:j.message,script:j.script,stack:j.stack}));});},null);
__d("ScriptPathLogger",["Banzai","ScriptPath","copyProperties","isInIframe"],function(a,b,c,d,e,f,g,h,i,j){var k='script_path_change',l={scriptPath:null,categoryToken:null,impressionID:null},m=false;function n(v,w,x){if(!m||j())return;var y=g.isEnabled('vital_navigations')?g.VITAL:g.BASIC,z={source_path:v.scriptPath,source_token:v.categoryToken,dest_path:w.scriptPath,dest_token:w.categoryToken,navigation:h.getNavigation(),impression_id:w.impressionID,cause:x};if(v.owningEntityID)z.source_owning_entity_id=v.owningEntityID;if(w.owningEntityID)z.dest_owning_entity_id=w.owningEntityID;if(v.topViewEndpoint)z.source_endpoint=v.topViewEndpoint;if(w.topViewEndpoint)z.dest_endpoint=w.topViewEndpoint;g.post(k,z,y);}function o(){n(l,h.getPageInfo(),h.CAUSE.PAGE_LOAD);}function p(v,w){n(v,w,h.CAUSE.TRANSITION);}function q(){n(h.getPageInfo(),l,h.CAUSE.PAGE_UNLOAD);}function r(v){var w=i({},l);w.scriptPath=v;n(h.getPageInfo(),w,h.CAUSE.DIALOG_OPEN);}function s(v){var w=i({},l);w.scriptPath=v;n(w,h.getPageInfo(),h.CAUSE.DIALOG_CLOSE);}var t=h.subscribe(function(v){if(m){var w=v.source,x=v.dest,y=v.cause;if(y){n(w||l,x||l,y);}else if(w){p(w,x);}else o();}});g.subscribe(g.SHUTDOWN,q);var u={startLogging:function(){m=true;if(h.getPageInfo())o();},stopLogging:function(){m=false;h.unsubscribe(t);},logDialogOpen:function(v){r(v);},logDialogClose:function(v){s(v);}};u.BANZAI_LOGGING_ROUTE=k;e.exports=u;},null);
__d("ServerJS-upstream",["ErrorUtils","EventEmitter","ServerJSDefine","copyProperties","ex","ge","replaceTransportMarkers"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=0,o=new h(),p=0;function q(){this._moduleMap={};this._relativeTo=null;this._moduleIDsToCleanup={};}q.PRE_JS_CALL='pre-js-call';q.POST_JS_CALL='post-js-call';q.addListener=o.addListener.bind(o);j(q.prototype,{handle:function(u){if(u.__guard)throw new Error('ServerJS.handle called on data that has already been handled');u.__guard=true;r(u.define||[],this._handleDefine,this);r(u.markup||[],this._handleMarkup,this);r(u.elements||[],this._handleElement,this);r(u.instances||[],this._handleInstance,this);var v=r(u.require||[],this._handleRequire,this);return {cancel:function(){for(var w=0;w<v.length;w++)if(v[w])v[w].cancel();}};},handlePartial:function(u){(u.instances||[]).forEach(s.bind(null,this._moduleMap,3));(u.markup||[]).forEach(s.bind(null,this._moduleMap,2));(u.elements||[]).forEach(s.bind(null,this._moduleMap,2));return this.handle(u);},setRelativeTo:function(u){this._relativeTo=u;return this;},cleanup:function(){var u=[];for(var v in this._moduleMap)u.push(v);d.call(null,u,t);this._moduleMap={};function w(y){var z=this._moduleIDsToCleanup[y],aa=z[0],ba=z[1];delete this._moduleIDsToCleanup[y];var ca=ba?'JS::call("'+aa+'", "'+ba+'", ...)':'JS::requireModule("'+aa+'")',da=ca+' did not fire because it has missing dependencies.';throw new Error(da);}for(var x in this._moduleIDsToCleanup)g.applyWithGuard(w,this,[x],null,'ServerJS:cleanup'+' id: '+x);},_handleDefine:g.guard(function(u,v,w,x){i.handleDefine(u,v,w,x,this._relativeTo);},'JS::define'),_handleRequire:function(u,v,w,x){return g.applyWithGuard(function(){var y=[u].concat(w||[]),z=(v?'__call__':'__requireModule__')+n++;this._moduleIDsToCleanup[z]=[u,v];return define(z,y,g.guard(function(aa){delete this._moduleIDsToCleanup[z];x&&m(this._relativeTo,x);if(v){if(!aa[v])throw new TypeError(k('Module %s has no method "%s"',u,v));var ba={moduleName:u,method:v,sourceMeta:aa[v].__SMmeta};o.emit(q.PRE_JS_CALL,p,ba);aa[v].apply(aa,x||[]);o.emit(q.POST_JS_CALL,p,ba);p++;}}.bind(this),v?"JS::call('"+u+"', '"+v+"', ...)":"JS::requireModule('"+u+"')"),1,this,1);},this,null,null,v?'JS::call':'JS::requireModule');},_handleInstance:g.guard(function(u,v,w,x){var y=null;if(v)y=function(z){m(this._relativeTo,w);var aa=Object.create(z.prototype);z.apply(aa,w);return aa;}.bind(this);define(u,v,y,0,null,x);},'JS::instance'),_handleMarkup:g.guard(function(u,v,w){define(u,['HTML'],function(x){return x.replaceJSONWrapper(v).getRootNode();},0,null,w);},'JS::markup'),_handleElement:g.guard(function(u,v,w,x){if(v===null&&w){define(u,null,null,0,null,w);return;}var y=[],z=0;if(x){y.push(x);z=1;w++;}define(u,y,function(aa){var ba=l(v,aa);if(!ba){var ca='Could not find element "%s"';throw new Error(k(ca,v));}return ba;},z,null,w);},'JS::element')});function r(u,v,w){return u.map(function(x){v.apply(w,x);});}function s(u,v,w){var x=w[0];if(!(x in u))w[v]=(w[v]||0)+1;u[x]=true;}function t(){return {};}e.exports=q;},null);
__d("ServerJS",["ServerJS-upstream","StopwatchPool"],function(a,b,c,d,e,f,g,h){var i='__BUFFER__' in a,j={};g.addListener(g.PRE_JS_CALL,function(k){var l=h.acquire();j[k]=l;l.reset();});g.addListener(g.POST_JS_CALL,function(k,l){var m=j[k];if(m){var n=m.read(),o=l.sourceMeta||{};i&&a.__BUFFER__.write('server_js_performance',{functionMeta:{module:l.moduleName,name:l.method,line:o.line,column:o.column},time:n,context:"JS::call('"+l.moduleName+"', '"+l.method+"', ...)"});delete j[k];h.release(m);}});e.exports=g;},null);
__d("TimeSpentArray",["Banzai","pageID","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i){var j=2,k=j*32,l,m,n,o,p,q,r,s,t,u={},v;function w(){return {timeoutDelayMap:u,nextDelay:v,timeoutInSeconds:n};}function x(){if(l){var fa=Date.now();if(fa>p)r=Math.min(k,Math.ceil((fa/1000)-o));var ga=ca();if(ga)l(ga,v);}ba();}function y(){z();m=i(x,n*1000);}function z(){if(m){clearTimeout(m);m=null;}}function aa(fa){o=fa;p=o*1000;q=[1];for(var ga=1;ga<j;ga++)q.push(0);r=1;s+=1;t+=1;var ha=t.toString()+'_delay';v=u[ha];if(typeof v=='undefined')v=u.delay;var ia=t.toString()+'_timeout',ja=u[ia];if(typeof ja=='undefined')ja=u.timeout;ja=Math.min(ja,k);n=ja||k;y();}function ba(){z();q=null;}function ca(){if(!q)return null;return {tos_id:h,start_time:o,tos_array:q.slice(0),tos_len:r,tos_seq:t,tos_cum:s};}function da(fa){if(fa>=p&&(fa-p)<1000)return;ea(Math.floor(fa/1000));}function ea(fa){var ga=fa-o;if(ga<0||ga>=k)x();if(!q){aa(fa);}else{q[ga>>5]|=(1<<(ga&31));r=ga+1;s+=1;p=fa*1000;}}e.exports={init:function(fa,ga,ha){s=0;t=-1;l=fa;if(typeof ga=='object'&&ga!==null){u=ga;}else u={};if(!ha)ha=Date.now();aa(Math.floor(ha/1000));g.subscribe(g.SHUTDOWN,x);},update:function(fa){da(fa);},get:function(){return ca();},ship:function(){x();},reset:function(){ba();},testState:function(){return w();}};},null);
__d("MWildeLink",["DOM","Stratcom","URI"],function(a,b,c,d,e,f,g,h,i){function j(){var k=null,l=function(n){if(k)document.body.removeChild(k);k=document.createElement('iframe');k.style.width=k.style.height='1px';k.style.position='absolute';k.style.borderStyle='none';if(n.getProtocol()!=='fb'){k.src=new i('fb://f').addQueryData('u',n.toString()).toString();}else k.src=n;document.body.appendChild(k);},m=function(n){return n&&n!=='http'&&n!=='https'&&n!=='fb';};g.listen(document.documentElement,'click',null,function(n){if(n.getPrevented())return;var o=n.getNode('tag:a');if(!o)return;var p=n.getRawEvent(),q=o.getAttribute('href'),r=o.getAttribute('target'),s=new i(q),t=s.getProtocol();if(!q||o.getAttribute('onclick')||(p.which||p.button)>=2||(r&&r!=='_blank')||m(t)){if(r==='_self'&&t==='fb'){n.prevent();window.location.href=s;return;}return;}n.prevent();if(q[0]==='#'){var u=document.getElementById(q.substr(1));u&&u.scrollIntoView();}else l(s);});h.listen('go',null,function(n){var o=new i(n.getData().uri);if(m(o.getProtocol()))return;n.prevent();l(o);});}f.setupListeners=j;},null);
__d("MExceptionHandler",["ex","ErrorUtils","MLogger"],function(a,b,c,d,e,f,g,h,i){if(window.onerror!==h.onerror)i.mustfix('ErrorUtils failed to assign window.onerror handler');function j(k,l){h.reportError(new Error(g('fwHandleException: %s, context: %s',k,l)));}a.fwHandleException=j;},null);
__d("MExceptionReportingMarauderLogger",["ErrorUtils"],function(a,b,c,d,e,f,g){function h(j){d(['MarauderLogger'],function(k){k.log('js_exception',undefined,j);j=null;});}function i(j,k,l){h({message:j,context:k,stack_trace:l});}g.addListener(function(j){h(j);});e.exports.log=i;},null);
__d("MNavigationEvent",["MarauderLogger","Stratcom"],function(a,b,c,d,e,f,g,h){var i=null,j=false;function k(l){if(!('ontouchstart' in window))return;i=l;h.listen('touchend','tag:a',function(m){if(j)return;var n=m.getNode('tag:a');if(n){var o=n.getAttribute('href'),p=o!=null?o.indexOf('_mn_='):-1;if(p!==-1){var q=o.indexOf('&',p),r=null;if(q!==-1){r=o.substring(p+5,q);}else r=o.substring(p+5);g.navigateTo(o,i[r]);}}});h.listen('MScrollArea:scrollstart',null,function(){j=true;});h.listen('MScrollArea:scrollend',null,function(){j=false;});}e.exports={init:k};},null);
__d("MOrientationMarauderLogger",["MarauderLogger","Stratcom","MViewport"],function(a,b,c,d,e,f,g,h,i){var j='orientation',k='landscape',l='portrait',m='orientation_change',n='foreground',o=null;function p(){q(m);}function q(r){var s=o;if(i.isLandscape()){o=k;}else o=l;g.log(j,undefined,{orientation_start:s,orientation_end:o,event_trigger:r});}h.listen('m:viewport:orientation-change',null,p);q(n);},null);
__d("MScrollingHooksLogger",["setTimeoutAcrossTransitions","Stratcom","MViewport","MarauderLogger"],function(a,b,c,d,e,f,g,h,i,j){var k=null,l=null,m=null;function n(p){var q={x:i.getScrollPos().x,y:i.getScrollPos().y};if(k===null)k=q;l=q;if(m!==null)clearTimeout(m);m=g(o,1000);}function o(){if(k.x!==l.x||k.y!==l.y)j.log('newsfeed_scroll',undefined,{end_pos:l.x,end_row:l.y,start_pos:k.x,start_row:k.y});k=null;l=null;m=null;}h.listen('scroll',null,n);},null);
__d("MCSSUtilizationDetector",["MarauderLogger","MStopNGo","Stratcom","setTimeoutAcrossTransitions","setIntervalAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k){var l=4,m=10000,n=100,o=400,p=40,q=null,r=[],s=0,t={},u={},v=[],w=[window.location.href],x=false,y=[],z={'>':true,'+':true,'~':true};function aa(ja){ja=ja.trim();var ka=ja.split(/[\[\]]/);for(var la=0;la<ka.length;la++){if(la%2)continue;var ma=ka[la].split(/[\(\)]/);for(var na=0;na<ma.length;na++)if(na%2==1)ma[na]='';ka[la]=ma;}ka=ka.map(function(pa){return typeof(pa)=='string'?'['+pa+']':pa;});ka=ka.map(function(pa){return Array.isArray(pa)?pa.map(function(qa){return qa.indexOf(':')?qa.split(':')[0]:qa;}).join(''):pa;});ka=ka.join('').split(' ');ka=ka.map(function(pa){return pa.replace(/\.touched([\.\s])?/,'$1');});var oa=true;while(oa){oa=false;if(ka.length&&(!ka[0]||ka[0] in z||!isNaN(parseInt(ka[0],10)))){ka.shift();oa=true;}if(ka.length&&(!ka[ka.length-1]||ka[ka.length-1] in z||!isNaN(parseInt(ka[ka.length-1],10)))){ka.pop();oa=true;}}return ka.join(' ');}var ba;function ca(ja){if(!y[ja]){y[ja]=[ba];v.push(ja);}else if(y[ja].indexOf(ba)<0)y[ja].push(ba);}function da(ja){var ka=ja.selectorText;if(ka){var la=ja.cssText,ma=la.indexOf('{');la=ma>=0?la.substring(ma+1):la;var na=la.lastIndexOf('}');la=na>=0?la.substring(0,na-1):la;ba=la.length;ka.split(',').map(aa).forEach(ca);}}function ea(ja){var ka=ja.rules||ja.cssRules;if(ka)Array.prototype.slice.call(ka).forEach(da);}function fa(ja,ka){var la=0;ja=ja||0;if(v.length)for(var ma=ja;ma<v.length;ma++){if(x||la==n){j(function(){fa(ma,ka);},o);return;}var na=v[ma],oa;try{oa=document.body.querySelector(na);}finally{if(oa){if(!u[na]){u[na]=y[na];delete t[na];}}else if(!u[na]&&!t[na])t[na]=y[na];}la++;}ka&&ka();}var ga=false;function ha(){var ja=document.styleSheets;if(!ja||!document.body.querySelector||ga)return;ga=true;Array.prototype.slice.call(ja).forEach(ea);fa(0,function(){ga=false;s++;if(s==l){if(q)clearTimeout(q);if(r)Array.prototype.slice.call(r).forEach(function(ka){ka&&ka.remove();});ia();}});}function ia(){var ja=Object.keys(t),ka=function(na){return na.reduce(function(oa,pa){return oa+pa;});},la=ja.map(function(na){return {selector:na,length:ka(t[na])};}).sort(function(na,oa){return oa.length-na.length;}),ma={pagehistory:w,stylesheets:document.styleSheets.length,used:Object.keys(u).length,unused:ja.length,checked:v.length,offenders:la.slice(0,p).reduce(function(na,oa){na[oa.selector]=oa.length;return na;},{})};g.log('css_utilization',undefined,ma);}q=k(ha,m);r=[i.listen('m:page:loading',null,function(){w.push(window.location.href);}),h.listen('go',function(){return x=false;}),h.listen('stop',function(){return x=true;})];e.exports={normalizeSelector:aa};},null);
__d("MRenderingScheduler",["DOM","ErrorUtils","EventEmitter","EventEmitterWithHolding","EventHolder","LogHistory","MRequest","Resource","ServerJS","Stratcom","ix","$","ge","invariant","MPageletUtilities"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u=b('MPageletUtilities').BreakPoint,v=b('MPageletUtilities').Visualization,w=[],x=[],y={},z=l.getInstance('scheduler');function aa(pa){if(y[pa]){y[pa].css=true;ca();}}function ba(pa){if(y[pa]){y[pa].js=true;da();}}function ca(){while(w.length){var pa=w[0].id;if(!y[pa].css)break;var qa=w.shift();h.guard(function(){var ra=s(pa);if(ra){z.log('insert',qa.pageletConfig.name);if(a.MPageletCavalry)a.MPageletCavalry.setEventTime(qa.pageletConfig.lid,qa.pageletConfig.name,"resources_ready");g.setContent(ra,qa.content);if(v&&v.isEnabled())v.addPagelet(qa.pageletConfig.name,qa.pageletConfig.pass,ra);if(a.MPageletCavalry)a.MPageletCavalry.setEventTime(qa.pageletConfig.lid,qa.pageletConfig.name,"dom_ready");y[pa].inserted=true;}else{z.log('discard',qa.pageletConfig.name);y[pa]=undefined;}},'scheduler')();}da();}function da(){while(x.length){var pa=x[0].id;if(!y[pa]){z.log('skip_js',x[0].pageletConfig.name,'pagelet was discarded before JS processing');x.shift();continue;}if(!y[pa].js||!y[pa].inserted)break;var qa=x.shift();if(!s(pa)){z.log('skip_js',qa.pageletConfig.name,'document element ('+pa+') was missing, possibly due to a page transition');continue;}ea(qa.pageletConfig);h.guard(function(){qa.callback();},'scheduler')();y[pa]=undefined;ia();}}function ea(pa){z.log('load',pa.name);q.add(pa.ixData);g.appendContent(r(pa.templateContainer),pa.templates);if(pa.onload)(new Function(pa.onload))();if(pa.onafterload)(new Function(pa.onafterload))();if(pa.serverJSData)(new o()).handle(pa.serverJSData);if(a.MPageletCavalry)a.MPageletCavalry.setTTI(pa.lid,pa.name);p.invoke('m:schedulable:loaded');}function fa(pa,qa,ra){if(u&&u.isEnabled()&&!ra){n.load(pa.js);u.setBreakPoint(fa.bind(this,pa,qa,true),{name:pa.pageletConfig.name,pass:pa.pageletConfig.pass});return;}z.log('schedule',pa.pageletConfig.name);if(ma)ma.emitAndHold('m:schedulable:sync-pagelet',JSON.parse(JSON.stringify(pa)));w.push(pa);x.push({id:pa.id,callback:qa,pageletConfig:pa.pageletConfig});y[pa.id]={};n.wait(pa.link,aa.bind(null,pa.id));n.load(pa.js,ba.bind(null,pa.id));}var ga,ha;function ia(){var pa=Object.keys(y),qa=true;if(ha&&ha==pa.length){pa.forEach(function(ra){if(y[ra])qa=false;});qa&&ga&&ga();}}function ja(pa){ha=pa;ia();}function ka(pa,qa,ra){t(a.MPageletCavalry);ja(ra);var sa=a.MPageletCavalry.pageletRunInfo(pa,qa,ra);for(var ta in sa)if(sa.hasOwnProperty(ta))new m('/a/logs').setData({message:JSON.stringify(sa[ta])}).setMethod('POST').send();}var la=new k(),ma=new j(new i(),la);function na(pa){if(ma)return ma.addRetroactiveListener('m:schedulable:sync-pagelet',pa);}function oa(pa){ga=pa;}p.listen('m:page:unload',null,function(){ma.releaseHeldEventType('m:schedulable:sync-pagelet');ma.removeAllListeners();ma=null;la=null;p.removeCurrentListener();});e.exports={onPageletReady:ea,schedule:fa,setPageletCount:ja,pageletRunInfo:ka,attachListenerToSyncPageletLoader:na,attachListenerToSyncPageletComplete:oa};},null);
__d("MTimeSpentBitArrayLogger",["Banzai","BanzaiODS","Stratcom","MarauderLogger","TimeSpentArray","TimeSpentImmediateActiveSecondsLogger","Visibility","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(){k.ship();}function p(){var t=Date.now();k.update(t);l.maybeReportActiveSecond(t);}function q(t){if(g.isEnabled('vital_navigations'))g.post('time_spent_mtouch_data_loss_isolation','',{delay:0,retry:true});j.log('time_spent_bit_array',undefined,t,undefined,undefined,undefined,Date.now());}function r(){return ['gesturestart','mousedown','touchstart','scroll','keydown'];}function s(){var t=r();i.listen(t,null,p);var u=('onpagehide' in window)?['pagehide','blur']:['blur'];i.listen(u,null,o);if(g.isEnabled('vital_navigations'))m.addListener('hidden',o);}e.exports={init:function(t){if(n())return;var u=Date.now();k.init(q,null,u);s();l.maybeReportActiveSecond(u);h.bumpEntityKey('ms.time_spent.qa.'+t,'time_spent.bits.js_initialized');},getMonitoredEvents:r};},null);
__d("MOpenable",["CSS","Stratcom"],function(a,b,c,d,e,f,g,h){var i='openable',j='opened',k;function l(n){k=n;g.conditionClass(k,j,true);}function m(){if(k){g.conditionClass(k,j,false);k=null;}}h.listen('touchstart',null,function(event){if(event.getNode(i)!=k)m();});h.listen('click',null,function(event){var n=event.getNode(i),o=k;m();if(n&&n!=o)l(n);});h.listen('touchcancel',null,m);f.main=function(){};},null);
__d("MModalDialogInit",["MModalDialog"],function(a,b,c,d,e,f,g){if(!a.FW_ENABLED)g.init();},null);