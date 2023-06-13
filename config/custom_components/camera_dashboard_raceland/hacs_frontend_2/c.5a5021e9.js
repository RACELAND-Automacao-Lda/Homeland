import{d as e}from"./c.2aff7a3c.js";import{aF as t,N as a,aG as n,aH as i,aI as r,aJ as s,aK as o,au as c,aL as l,aM as d,am as u,aN as h,aO as m,aP as f,aQ as p,aR as g,aS as b,aT as v,aU as y,aV as _,aW as w,aX as k,aY as C,aZ as L,a_ as E,a$ as A,b0 as x,b1 as S,b2 as I,b3 as M,b4 as N,b5 as T,b6 as O,b7 as D,b8 as R,b9 as F,ba as z,bb as G,bc as $,bd as B,j,be as H,bf as P,bg as U,bh as K,bi as Y,bj as W,an as X,bk as q,bl as V,bm as Z,bn as Q,aq as J,bo as ee,bp as te,c as ae,f as ne,V as ie,W as re,ay as se,ah as oe,g as ce,aB as le,bq as de,H as ue,R as he,t as me,L as fe,az as pe,U as ge,aA as be,x as ve,Q as ye,o as _e,_ as we,k as ke,l as Ce,q as Le,br as Ee,v as Ae,F as xe,bs as Se,bt as Ie,bu as Me,bv as Ne,bw as Te,bx as Oe,by as De,bz as Re,bA as Fe,bB as ze,bC as Ge,bD as $e,bE as Be,bF as je,bG as He,bH as Pe,bI as Ue,bJ as Ke,bK as Ye,z as We,a5 as Xe,bL as qe,bM as Ve,bN as Ze,bO as Qe,bP as Je,bQ as et,bR as tt,bS as at,bT as nt,bU as it,bV as rt,bW as st,bX as ot,ak as ct,bY as lt,bZ as dt,b_ as ut,b$ as ht,c0 as mt,c1 as ft,c2 as pt,c3 as gt,c4 as bt,al as vt,c5 as yt,c6 as _t,c7 as wt,c8 as kt,c9 as Ct,ca as Lt,cb as Et,cc as At,cd as xt,ce as St,cf as It,cg as Mt,ch as Nt,ci as Tt,cj as Ot,ck as Dt,cl as Rt,cm as Ft,cn as zt,co as Gt,cp as $t,cq as Bt,cr as jt,cs as Ht,ct as Pt,cu as Ut,cv as Kt,cw as Yt,cx as Wt,cy as Xt,cz as qt,cA as Vt,cB as Zt,cC as Qt,cD as Jt,cE as ea,cF as ta,cG as aa,cH as na,cI as ia,cJ as ra,cK as sa,cL as oa,cM as ca,cN as la,cO as da,cP as ua,cQ as ha,cR as ma,cS as fa,cT as pa,cU as ga,cV as ba,cW as va,cX as ya,cY as _a,cZ as wa,c_ as ka,c$ as Ca,d0 as La,d1 as Ea,d2 as Aa,d3 as xa,d4 as Sa,d as Ia,J as Ma,d5 as Na,d6 as Ta,d7 as Oa,d8 as Da,d9 as Ra,da as Fa,db as za,dc as Ga,dd as $a,de as Ba,df as ja,dg as Ha,dh as Pa,di as Ua,dj as Ka,a8 as Ya,a4 as Wa,ad as Xa,a6 as qa,a7 as Va,i as Za,dk as Qa,K as Ja,e as en,T as tn,dl as an}from"./main-b570e60a.js";const nn=(e,t)=>e&&e.config.components.includes(t),rn=t,sn={alert:a,air_quality:n,automation:i,calendar:r,camera:s,climate:o,configurator:c,conversation:l,counter:d,fan:u,google_assistant:h,group:m,homeassistant:f,homekit:p,image_processing:g,input_button:b,input_datetime:v,input_number:y,input_select:_,input_text:w,light:k,mailbox:C,notify:L,number:y,persistent_notification:E,person:A,plant:x,proximity:S,remote:I,scene:M,script:N,select:_,sensor:T,siren:O,simple_alarm:E,sun:D,timer:R,updater:F,vacuum:z,water_heater:G,weather:$,zone:B},on={apparent_power:j,aqi:n,carbon_dioxide:H,carbon_monoxide:P,current:U,date:r,energy:K,frequency:Y,gas:W,humidity:X,illuminance:q,monetary:V,nitrogen_dioxide:Z,nitrogen_monoxide:Z,nitrous_oxide:Z,ozone:Z,pm1:Z,pm10:Z,pm25:Z,power:j,power_factor:Q,pressure:J,reactive_power:j,signal_strength:ee,sulphur_dioxide:Z,temperature:G,timestamp:te,volatile_organic_compounds:Z,voltage:Y},cn=["button","climate","cover","configurator","input_button","input_select","input_number","input_text","lock","media_player","number","scene","script","select","timer","vacuum","water_heater"],ln=["alarm_control_panel","automation","camera","climate","configurator","counter","cover","fan","group","humidifier","input_datetime","light","lock","media_player","person","remote","script","scene","sun","timer","vacuum","water_heater","weather"],dn=["input_number","input_select","input_text","number","scene","select"],un=["automation","button","cover","fan","group","humidifier","input_boolean","input_button","input_datetime","input_number","input_select","input_text","light","lock","media_player","number","scene","script","select","switch","vacuum"],hn=["camera","configurator"],mn=["closed","locked","off"],fn="on",pn="off",gn=new Set(["fan","input_boolean","light","switch","script","group","automation","humidifier"]),bn=new Set(["camera","media_player"]),vn="°F",yn=e=>e.substr(0,e.indexOf(".")),_n=e=>e.substr(e.indexOf(".")+1),wn=e=>void 0===e.attributes.friendly_name?_n(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||"",kn=e=>{let t=[];function a(a,n){e=n?a:Object.assign(Object.assign({},e),a);let i=t;for(let t=0;t<i.length;t++)i[t](e)}return{get state(){return e},action(t){function n(e){a(e,!1)}return function(){let a=[e];for(let e=0;e<arguments.length;e++)a.push(arguments[e]);let i=t.apply(this,a);if(null!=i)return i instanceof Promise?i.then(n):n(i)}},setState:a,subscribe:e=>(t.push(e),()=>{!function(e){let a=[];for(let n=0;n<t.length;n++)t[n]===e?e=null:a.push(t[n]);t=a}(e)})}},Cn=(e,t,a,n)=>{if(e[t])return e[t];let i,r=0,s=kn();const o=()=>a(e).then((e=>s.setState(e,!0))),c=()=>o().catch((t=>{if(e.connected)throw t}));return e[t]={get state(){return s.state},refresh:o,subscribe(t){r++,1===r&&(n&&(i=n(e,s)),e.addEventListener("ready",c),c());const a=s.subscribe(t);return void 0!==s.state&&setTimeout((()=>t(s.state)),0),()=>{a(),r--,r||(i&&i.then((e=>{e()})),e.removeEventListener("ready",o))}}},e[t]},Ln=(e,t,a,n,i)=>Cn(n,e,t,a).subscribe(i),En=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),An=(e,t,a)=>e.callWS({type:"config/entity_registry/update",entity_id:t,...a}),xn=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),Sn=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),In=(t,a)=>t.subscribeEvents(e((()=>Sn(t).then((e=>a.setState(e,!0)))),500,!0),"entity_registry_updated"),Mn=(e,t)=>Ln("_entityRegistry",Sn,In,e,t),Nn="unavailable",Tn="unknown",On=[Nn,Tn];var Dn=/-u(?:-[0-9a-z]{2,8})+/gi;function Rn(e,t,a){if(void 0===a&&(a=Error),!e)throw new a(t)}function Fn(e,t){for(var a=t;;){if(e.has(a))return a;var n=a.lastIndexOf("-");if(!~n)return;n>=2&&"-"===a[n-2]&&(n-=2),a=a.slice(0,n)}}function zn(e,t){Rn(2===t.length,"key must have 2 elements");var a=e.length,n="-".concat(t,"-"),i=e.indexOf(n);if(-1!==i){for(var r=i+4,s=r,o=r,c=!1;!c;){var l=e.indexOf("-",o);2===(-1===l?a-o:l-o)?c=!0:-1===l?(s=a,c=!0):(s=l,o=l+1)}return e.slice(r,s)}if(n="-".concat(t),-1!==(i=e.indexOf(n))&&i+3===a)return""}function Gn(e,t,a,n,i,r){var s;s="lookup"===a.localeMatcher?function(e,t,a){for(var n={locale:""},i=0,r=t;i<r.length;i++){var s=r[i],o=s.replace(Dn,""),c=Fn(e,o);if(c)return n.locale=c,s!==o&&(n.extension=s.slice(o.length+1,s.length)),n}return n.locale=a(),n}(e,t,r):function(e,t,a){var n,i={},r={},s={},o=new Set;e.forEach((function(e){var t=new Intl.Locale(e).minimize().toString(),a=Intl.getCanonicalLocales(e)[0]||e;i[t]=e,r[e]=e,s[a]=e,o.add(t),o.add(e),o.add(a)}));for(var c=0,l=t;c<l.length;c++){var d=l[c];if(n)break;var u=d.replace(Dn,"");if(e.has(u)){n=u;break}if(o.has(u)){n=u;break}var h=new Intl.Locale(u),m=h.maximize().toString(),f=h.minimize().toString();if(o.has(f)){n=f;break}n=Fn(o,m)}return n?{locale:r[n]||s[n]||i[n]||n}:{locale:a()}}(e,t,r);for(var o=s.locale,c={locale:"",dataLocale:o},l="-u",d=0,u=n;d<u.length;d++){var h=u[d];Rn(o in i,"Missing locale data for ".concat(o));var m=i[o];Rn("object"==typeof m&&null!==m,"locale data ".concat(h," must be an object"));var f=m[h];Rn(Array.isArray(f),"keyLocaleData for ".concat(h," must be an array"));var p=f[0];Rn("string"==typeof p||null===p,"value must be string or null but got ".concat(typeof p," in key ").concat(h));var g="";if(s.extension){var b=zn(s.extension,h);void 0!==b&&(""!==b?~f.indexOf(b)&&(p=b,g="-".concat(h,"-").concat(p)):~b.indexOf("true")&&(p="true",g="-".concat(h)))}if(h in a){var v=a[h];Rn("string"==typeof v||null==v,"optionsValue must be String, Undefined or Null"),~f.indexOf(v)&&v!==p&&(p=v,g="")}c[h]=p,l+=g}if(l.length>2){var y=o.indexOf("-x-");if(-1===y)o+=l;else{var _=o.slice(0,y),w=o.slice(y,o.length);o=_+l+w}o=Intl.getCanonicalLocales(o)[0]}return c.locale=o,c}function $n(e,t,a,n){var i=t.reduce((function(e,t){return e.add(t),e}),new Set);return Gn(i,function(e){return Intl.getCanonicalLocales(e)}(e),{localeMatcher:(null==n?void 0:n.algorithm)||"best fit"},[],{},(function(){return a})).locale}var Bn=Object.freeze({__proto__:null,match:$n,LookupSupportedLocales:function(e,t){for(var a=[],n=0,i=t;n<i.length;n++){var r=Fn(e,i[n].replace(Dn,""));r&&a.push(r)}return a},ResolveLocale:Gn}),jn=["af","ak","am","an","ar","ars","as","asa","ast","az","bal","be","bem","bez","bg","bho","bm","bn","bo","br","brx","bs","ca","ce","ceb","cgg","chr","ckb","cs","cy","da","de","doi","dsb","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fil","fo","fr","fur","fy","ga","gd","gl","gsw","gu","guw","gv","ha","haw","he","hi","hnj","hr","hsb","hu","hy","ia","id","ig","ii","io","is","it","iu","ja","jbo","jgo","jmc","jv","jw","ka","kab","kaj","kcg","kde","kea","kk","kkj","kl","km","kn","ko","ks","ksb","ksh","ku","kw","ky","lag","lb","lg","lij","lkt","ln","lo","lt","lv","mas","mg","mgo","mk","ml","mn","mo","mr","ms","mt","my","nah","naq","nb","nd","ne","nl","nn","nnh","no","nqo","nr","nso","ny","nyn","om","or","os","osa","pa","pap","pcm","pl","prg","ps","pt-PT","pt","rm","ro","rof","ru","rwk","sah","saq","sat","sc","scn","sd","sdh","se","seh","ses","sg","sh","shi","si","sk","sl","sma","smi","smj","smn","sms","sn","so","sq","sr","ss","ssy","st","su","sv","sw","syr","ta","te","teo","th","ti","tig","tk","tl","tn","to","tpi","tr","ts","tzm","ug","uk","und","ur","uz","ve","vi","vo","vun","wa","wae","wo","xh","xog","yi","yo","yue","zh","zu"];var Hn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Pn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Un(e,t){return e(t={exports:{}},t.exports),t.exports}var Kn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CanonicalizeLocaleList=void 0,t.CanonicalizeLocaleList=function(e){return Intl.getCanonicalLocales(e)}}));Pn(Kn),Kn.CanonicalizeLocaleList;var Yn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.invariant=t.UNICODE_EXTENSION_SEQUENCE_REGEX=void 0,t.UNICODE_EXTENSION_SEQUENCE_REGEX=/-u(?:-[0-9a-z]{2,8})+/gi,t.invariant=function(e,t,a){if(void 0===a&&(a=Error),!e)throw new a(t)}}));Pn(Yn),Yn.invariant,Yn.UNICODE_EXTENSION_SEQUENCE_REGEX;var Wn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BestAvailableLocale=void 0,t.BestAvailableLocale=function(e,t){for(var a=t;;){if(e.has(a))return a;var n=a.lastIndexOf("-");if(!~n)return;n>=2&&"-"===a[n-2]&&(n-=2),a=a.slice(0,n)}}}));Pn(Wn),Wn.BestAvailableLocale;var Xn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LookupMatcher=void 0,t.LookupMatcher=function(e,t,a){for(var n={locale:""},i=0,r=t;i<r.length;i++){var s=r[i],o=s.replace(Yn.UNICODE_EXTENSION_SEQUENCE_REGEX,""),c=(0,Wn.BestAvailableLocale)(e,o);if(c)return n.locale=c,s!==o&&(n.extension=s.slice(o.length+1,s.length)),n}return n.locale=a(),n}}));Pn(Xn),Xn.LookupMatcher;var qn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BestFitMatcher=void 0,t.BestFitMatcher=function(e,t,a){var n,i={},r={},s={},o=new Set;e.forEach((function(e){var t=new Intl.Locale(e).minimize().toString(),a=Intl.getCanonicalLocales(e)[0]||e;i[t]=e,r[e]=e,s[a]=e,o.add(t),o.add(e),o.add(a)}));for(var c=0,l=t;c<l.length;c++){var d=l[c];if(n)break;var u=d.replace(Yn.UNICODE_EXTENSION_SEQUENCE_REGEX,"");if(e.has(u)){n=u;break}if(o.has(u)){n=u;break}var h=new Intl.Locale(u),m=h.maximize().toString(),f=h.minimize().toString();if(o.has(f)){n=f;break}n=(0,Wn.BestAvailableLocale)(o,m)}return n?{locale:r[n]||s[n]||i[n]||n}:{locale:a()}}}));Pn(qn),qn.BestFitMatcher;var Vn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeExtensionValue=void 0,t.UnicodeExtensionValue=function(e,t){(0,Yn.invariant)(2===t.length,"key must have 2 elements");var a=e.length,n="-".concat(t,"-"),i=e.indexOf(n);if(-1!==i){for(var r=i+4,s=r,o=r,c=!1;!c;){var l=e.indexOf("-",o);2===(-1===l?a-o:l-o)?c=!0:-1===l?(s=a,c=!0):(s=l,o=l+1)}return e.slice(r,s)}if(n="-".concat(t),-1!==(i=e.indexOf(n))&&i+3===a)return""}}));Pn(Vn),Vn.UnicodeExtensionValue;var Zn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ResolveLocale=void 0,t.ResolveLocale=function(e,t,a,n,i,r){for(var s,o=(s="lookup"===a.localeMatcher?(0,Xn.LookupMatcher)(e,t,r):(0,qn.BestFitMatcher)(e,t,r)).locale,c={locale:"",dataLocale:o},l="-u",d=0,u=n;d<u.length;d++){var h=u[d];(0,Yn.invariant)(o in i,"Missing locale data for ".concat(o));var m=i[o];(0,Yn.invariant)("object"==typeof m&&null!==m,"locale data ".concat(h," must be an object"));var f=m[h];(0,Yn.invariant)(Array.isArray(f),"keyLocaleData for ".concat(h," must be an array"));var p=f[0];(0,Yn.invariant)("string"==typeof p||null===p,"value must be string or null but got ".concat(typeof p," in key ").concat(h));var g="";if(s.extension){var b=(0,Vn.UnicodeExtensionValue)(s.extension,h);void 0!==b&&(""!==b?~f.indexOf(b)&&(p=b,g="-".concat(h,"-").concat(p)):~b.indexOf("true")&&(p="true",g="-".concat(h)))}if(h in a){var v=a[h];(0,Yn.invariant)("string"==typeof v||null==v,"optionsValue must be String, Undefined or Null"),~f.indexOf(v)&&v!==p&&(p=v,g="")}c[h]=p,l+=g}if(l.length>2){var y=o.indexOf("-x-");if(-1===y)o+=l;else{var _=o.slice(0,y),w=o.slice(y,o.length);o=_+l+w}o=Intl.getCanonicalLocales(o)[0]}return c.locale=o,c}}));Pn(Zn),Zn.ResolveLocale;var Qn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LookupSupportedLocales=void 0,t.LookupSupportedLocales=function(e,t){for(var a=[],n=0,i=t;n<i.length;n++){var r=i[n].replace(Yn.UNICODE_EXTENSION_SEQUENCE_REGEX,""),s=(0,Wn.BestAvailableLocale)(e,r);s&&a.push(s)}return a}}));Pn(Qn),Qn.LookupSupportedLocales;var Jn=Un((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ResolveLocale=t.LookupSupportedLocales=t.match=void 0,t.match=function(e,t,a,n){var i=t.reduce((function(e,t){return e.add(t),e}),new Set);return(0,Zn.ResolveLocale)(i,(0,Kn.CanonicalizeLocaleList)(e),{localeMatcher:(null==n?void 0:n.algorithm)||"best fit"},[],{},(function(){return a})).locale},Object.defineProperty(t,"LookupSupportedLocales",{enumerable:!0,get:function(){return Qn.LookupSupportedLocales}});var a=Zn;Object.defineProperty(t,"ResolveLocale",{enumerable:!0,get:function(){return a.ResolveLocale}})}));Pn(Jn);var ei=Jn.ResolveLocale,ti=Jn.LookupSupportedLocales,ai=Jn.match,ni=["af-NA","af","agq","ak","am","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","ar","as","asa","ast","az-Cyrl","az-Latn","az","bas","be-tarask","be","bem","bez","bg","bm","bn-IN","bn","bo-IN","bo","br","brx","bs-Cyrl","bs-Latn","bs","ca-AD","ca-ES-valencia","ca-FR","ca-IT","ca","ccp-IN","ccp","ce","ceb","cgg","chr","ckb-IR","ckb","cs","cy","da-GL","da","dav","de-AT","de-BE","de-CH","de-IT","de-LI","de-LU","de","dje","doi","dsb","dua","dyo","dz","ebu","ee-TG","ee","el-CY","el","en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en","eo","es-419","es-AR","es-BO","es-BR","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","es","et","eu","ewo","fa-AF","fa","ff-Adlm-BF","ff-Adlm-CM","ff-Adlm-GH","ff-Adlm-GM","ff-Adlm-GW","ff-Adlm-LR","ff-Adlm-MR","ff-Adlm-NE","ff-Adlm-NG","ff-Adlm-SL","ff-Adlm-SN","ff-Adlm","ff-Latn-BF","ff-Latn-CM","ff-Latn-GH","ff-Latn-GM","ff-Latn-GN","ff-Latn-GW","ff-Latn-LR","ff-Latn-MR","ff-Latn-NE","ff-Latn-NG","ff-Latn-SL","ff-Latn","ff","fi","fil","fo-DK","fo","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fr","fur","fy","ga-GB","ga","gd","gl","gsw-FR","gsw-LI","gsw","gu","guz","gv","ha-GH","ha-NE","ha","haw","he","hi","hr-BA","hr","hsb","hu","hy","ia","id","ig","ii","is","it-CH","it-SM","it-VA","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","kgp","khq","ki","kk","kkj","kl","kln","km","kn","ko-KP","ko","kok","ks-Arab","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln-AO","ln-CF","ln-CG","ln","lo","lrc-IQ","lrc","lt","lu","luo","luy","lv","mai","mas-TZ","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni-Beng","mni","mr","ms-BN","ms-ID","ms-SG","ms","mt","mua","my","mzn","naq","nb-SJ","nb","nd","nds-NL","nds","ne-IN","ne","nl-AW","nl-BE","nl-BQ","nl-CW","nl-SR","nl-SX","nl","nmg","nn","nnh","no","nus","nyn","om-KE","om","or","os-RU","os","pa-Arab","pa-Guru","pa","pcm","pl","ps-PK","ps","pt-AO","pt-CH","pt-CV","pt-GQ","pt-GW","pt-LU","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","pt","qu-BO","qu-EC","qu","rm","rn","ro-MD","ro","rof","ru-BY","ru-KG","ru-KZ","ru-MD","ru-UA","ru","rw","rwk","sa","sah","saq","sat-Olck","sat","sbp","sc","sd-Arab","sd-Deva","sd","se-FI","se-SE","se","seh","ses","sg","shi-Latn","shi-Tfng","shi","si","sk","sl","smn","sn","so-DJ","so-ET","so-KE","so","sq-MK","sq-XK","sq","sr-Cyrl-BA","sr-Cyrl-ME","sr-Cyrl-XK","sr-Cyrl","sr-Latn-BA","sr-Latn-ME","sr-Latn-XK","sr-Latn","sr","su-Latn","su","sv-AX","sv-FI","sv","sw-CD","sw-KE","sw-UG","sw","ta-LK","ta-MY","ta-SG","ta","te","teo-KE","teo","tg","th","ti-ER","ti","tk","to","tr-CY","tr","tt","twq","tzm","ug","uk","und","ur-IN","ur","uz-Arab","uz-Cyrl","uz-Latn","uz","vai-Latn","vai-Vaii","vai","vi","vun","wae","wo","xh","xog","yav","yi","yo-BJ","yo","yrl-CO","yrl-VE","yrl","yue-Hans","yue-Hant","yue","zgh","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant","zh","zu"];var ii=["af-NA","af","agq","ak","am","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","ar","as","asa","ast","az-Cyrl","az-Latn","az","bas","be-tarask","be","bem","bez","bg","bm","bn-IN","bn","bo-IN","bo","br","brx","bs-Cyrl","bs-Latn","bs","ca-AD","ca-ES-valencia","ca-FR","ca-IT","ca","ccp-IN","ccp","ce","ceb","cgg","chr","ckb-IR","ckb","cs","cy","da-GL","da","dav","de-AT","de-BE","de-CH","de-IT","de-LI","de-LU","de","dje","doi","dsb","dua","dyo","dz","ebu","ee-TG","ee","el-CY","el","en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en","eo","es-419","es-AR","es-BO","es-BR","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","es","et","eu","ewo","fa-AF","fa","ff-Adlm-BF","ff-Adlm-CM","ff-Adlm-GH","ff-Adlm-GM","ff-Adlm-GW","ff-Adlm-LR","ff-Adlm-MR","ff-Adlm-NE","ff-Adlm-NG","ff-Adlm-SL","ff-Adlm-SN","ff-Adlm","ff-Latn-BF","ff-Latn-CM","ff-Latn-GH","ff-Latn-GM","ff-Latn-GN","ff-Latn-GW","ff-Latn-LR","ff-Latn-MR","ff-Latn-NE","ff-Latn-NG","ff-Latn-SL","ff-Latn","ff","fi","fil","fo-DK","fo","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fr","fur","fy","ga-GB","ga","gd","gl","gsw-FR","gsw-LI","gsw","gu","guz","gv","ha-GH","ha-NE","ha","haw","he","hi","hr-BA","hr","hsb","hu","hy","ia","id","ig","ii","is","it-CH","it-SM","it-VA","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","kgp","khq","ki","kk","kkj","kl","kln","km","kn","ko-KP","ko","kok","ks-Arab","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln-AO","ln-CF","ln-CG","ln","lo","lrc-IQ","lrc","lt","lu","luo","luy","lv","mai","mas-TZ","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni-Beng","mni","mr","ms-BN","ms-ID","ms-SG","ms","mt","mua","my","mzn","naq","nb-SJ","nb","nd","nds-NL","nds","ne-IN","ne","nl-AW","nl-BE","nl-BQ","nl-CW","nl-SR","nl-SX","nl","nmg","nn","nnh","no","nus","nyn","om-KE","om","or","os-RU","os","pa-Arab","pa-Guru","pa","pcm","pl","ps-PK","ps","pt-AO","pt-CH","pt-CV","pt-GQ","pt-GW","pt-LU","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","pt","qu-BO","qu-EC","qu","rm","rn","ro-MD","ro","rof","ru-BY","ru-KG","ru-KZ","ru-MD","ru-UA","ru","rw","rwk","sa","sah","saq","sat-Olck","sat","sbp","sc","sd-Arab","sd-Deva","sd","se-FI","se-SE","se","seh","ses","sg","shi-Latn","shi-Tfng","shi","si","sk","sl","smn","sn","so-DJ","so-ET","so-KE","so","sq-MK","sq-XK","sq","sr-Cyrl-BA","sr-Cyrl-ME","sr-Cyrl-XK","sr-Cyrl","sr-Latn-BA","sr-Latn-ME","sr-Latn-XK","sr-Latn","sr","su-Latn","su","sv-AX","sv-FI","sv","sw-CD","sw-KE","sw-UG","sw","ta-LK","ta-MY","ta-SG","ta","te","teo-KE","teo","tg","th","ti-ER","ti","tk","to","tr-CY","tr","tt","twq","tzm","ug","uk","und","ur-IN","ur","uz-Arab","uz-Cyrl","uz-Latn","uz","vai-Latn","vai-Vaii","vai","vi","vun","wae","wo","xh","xog","yav","yi","yo-BJ","yo","yrl-CO","yrl-VE","yrl","yue-Hans","yue-Hant","yue","zgh","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant","zh","zu"];let ri=function(e){return e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none",e}({}),si=function(e){return e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24",e}({});const oi={},ci=window.localStorage||{},li={"zh-cn":"zh-Hans","zh-sg":"zh-Hans","zh-my":"zh-Hans","zh-tw":"zh-Hant","zh-hk":"zh-Hant","zh-mo":"zh-Hant",zh:"zh-Hant"};function di(e){if(e in oi.translations)return e;const t=e.toLowerCase();if(t in li)return li[t];const a=Object.keys(oi.translations).find((e=>e.toLowerCase()===t));return a||(e.includes("-")?di(e.split("-")[0]):void 0)}const ui=new Set,hi=[];"Locale"in Intl&&!function(){try{return"x-private"===new Intl.Locale("und-x-private").toString()}catch(e){return!0}}()||hi.push(import("./c.79fa0930.js")),function(e){if(void 0===e&&(e="en"),!("PluralRules"in Intl)||"one"===new Intl.PluralRules("en",{minimumFractionDigits:2}).select(1)||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.PluralRules.supportedLocalesOf(t).length===t.length}(e))return e?$n([e],jn,"en"):void 0}()&&(hi.push(import("./c.169ebdf7.js")),hi.push(import("./c.e23b0d0b.js"))),function(e){if(void 0===e&&(e="en"),!("RelativeTimeFormat"in Intl)||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.RelativeTimeFormat.supportedLocalesOf(t).length===t.length}(e)||!function(e){try{return"numberingSystem"in new Intl.RelativeTimeFormat(e||"en",{numeric:"auto"}).resolvedOptions()}catch(e){return!1}}(e))return ai([e],ni,"en")}()&&hi.push(import("./c.c56fde20.js")),function(e){if(void 0===e&&(e="en"),!("DateTimeFormat"in Intl)||!("formatToParts"in Intl.DateTimeFormat.prototype)||!("formatRange"in Intl.DateTimeFormat.prototype)||function(){try{return"dayPeriod"!==new Intl.DateTimeFormat("en",{hourCycle:"h11",hour:"numeric"}).formatToParts(0)[2].type}catch(e){return!1}}()||function(){try{return!!new Intl.DateTimeFormat("en",{dateStyle:"short",hour:"numeric"}).format(new Date(0))}catch(e){return!1}}()||!function(){try{return!!new Intl.DateTimeFormat(void 0,{dateStyle:"short"}).resolvedOptions().dateStyle}catch(e){return!1}}()||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.DateTimeFormat.supportedLocalesOf(t).length===t.length}(e))return e?ai([e],ii,"en"):void 0}()&&(hi.push(import("./c.c09cd131.js")),hi.push(import("./c.ad739743.js")));const mi=0===hi.length?void 0:Promise.all(hi).then((()=>fi(function(){let e=null;if(ci.selectedLanguage)try{const t=JSON.parse(ci.selectedLanguage);if(t&&(e=di(t),e))return e}catch(e){}if(navigator.languages)for(const t of navigator.languages)if(e=di(t),e)return e;return e=di(navigator.language),e||"en"}()))),fi=async e=>{if(!ui.has(e)){ui.add(e);try{if(Intl.NumberFormat&&"function"==typeof Intl.NumberFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-numberformat/${e}.json`);Intl.NumberFormat.__addLocaleData(await t.json())}if(Intl.RelativeTimeFormat&&"function"==typeof Intl.RelativeTimeFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-relativetimeformat/${e}.json`);Intl.RelativeTimeFormat.__addLocaleData(await t.json())}if(Intl.DateTimeFormat&&"function"==typeof Intl.DateTimeFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-datetimeformat/${e}.json`);Intl.DateTimeFormat.__addLocaleData(await t.json())}}catch(e){}}};mi&&await mi;const pi=(e,t)=>gi(t).format(e),gi=ae((e=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"}))),bi=(e,t)=>vi(t).format(e),vi=ae((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"}))),yi=(e,t)=>_i(t).format(e),_i=ae((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"}))),wi=(e,t)=>ki(t).format(e),ki=ae((e=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"}))),Ci=(e,t)=>Li(t).format(e),Li=ae((e=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"}))),Ei=(e,t)=>Ai(t).format(e),Ai=ae((e=>new Intl.DateTimeFormat(e.language,{month:"long"}))),xi=(e,t)=>Si(t).format(e),Si=ae((e=>new Intl.DateTimeFormat(e.language,{year:"numeric"}))),Ii=ae((e=>{if(e.time_format===si.language||e.time_format===si.system){const t=e.time_format===si.language?e.language:void 0,a=(new Date).toLocaleString(t);return a.includes("AM")||a.includes("PM")}return e.time_format===si.am_pm}));mi&&await mi;const Mi=(e,t)=>Ni(t).format(e),Ni=ae((e=>new Intl.DateTimeFormat("en"!==e.language||Ii(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Ii(e)?"numeric":"2-digit",minute:"2-digit",hour12:Ii(e)}))),Ti=(e,t)=>Oi(t).format(e),Oi=ae((e=>new Intl.DateTimeFormat("en"!==e.language||Ii(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Ii(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:Ii(e)})));ae((e=>new Intl.DateTimeFormat("en"!==e.language||Ii(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:Ii(e)})));const Di=(e,t=2)=>Math.round(e*10**t)/10**t,Ri=e=>!!e.attributes.unit_of_measurement||!!e.attributes.state_class,Fi=e=>{switch(e.number_format){case ri.comma_decimal:return["en-US","en"];case ri.decimal_comma:return["de","es","it"];case ri.space_comma:return["fr","sv","cs"];case ri.system:return;default:return e.language}},zi=(e,t,a)=>{const n=t?Fi(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==ri.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(n,Gi(e,a)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Gi(e,a)).format(Number(e))}return"string"==typeof e?e:`${Di(e,null==a?void 0:a.maximumFractionDigits).toString()}${"currency"===(null==a?void 0:a.style)?` ${a.currency}`:""}`},Gi=(e,t)=>{const a={maximumFractionDigits:2,...t};if("string"!=typeof e)return a;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;a.minimumFractionDigits=t,a.maximumFractionDigits=t}return a},$i=e=>yn(e.entity_id),Bi=(e,t)=>0!=(e.attributes.supported_features&t),ji=e=>{ne(window,"haptic",e)};var Hi={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},Pi={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},Ui=function(e){function t(a){return e.call(this,re(re({},t.defaultAdapter),a))||this}return ie(t,e),Object.defineProperty(t,"strings",{get:function(){return Pi},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return Hi},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked(e),this.updateCheckedStyling(e)},t.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(Hi.DISABLED):this.adapter.removeClass(Hi.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked(t.checked),this.updateCheckedStyling(t.checked)},t.prototype.updateCheckedStyling=function(e){e?this.adapter.addClass(Hi.CHECKED):this.adapter.removeClass(Hi.CHECKED)},t.prototype.updateAriaChecked=function(e){this.adapter.setNativeControlAttr(Pi.ARIA_CHECKED_ATTR,""+!!e)},t}(se);class Ki extends pe{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=Ui,this.rippleHandlers=new ge((()=>(this.shouldRenderRipple=!0,this.ripple)))}changeHandler(e){this.mdcFoundation.handleChange(e),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},be(this.mdcRoot)),{setNativeControlChecked:e=>{this.formElement.checked=e},setNativeControlDisabled:e=>{this.formElement.disabled=e},setNativeControlAttr:(e,t)=>{this.formElement.setAttribute(e,t)}})}renderRipple(){return this.shouldRenderRipple?ve`
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}focus(){const e=this.formElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.formElement;e&&(this.rippleHandlers.endFocus(),e.blur())}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}render(){return ve`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${ye(this.ariaLabel)}"
              aria-labelledby="${ye(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}oe([ce({type:Boolean}),le((function(e){this.mdcFoundation.setChecked(e)}))],Ki.prototype,"checked",void 0),oe([ce({type:Boolean}),le((function(e){this.mdcFoundation.setDisabled(e)}))],Ki.prototype,"disabled",void 0),oe([de,ce({attribute:"aria-label"})],Ki.prototype,"ariaLabel",void 0),oe([de,ce({attribute:"aria-labelledby"})],Ki.prototype,"ariaLabelledBy",void 0),oe([ue(".mdc-switch")],Ki.prototype,"mdcRoot",void 0),oe([ue("input")],Ki.prototype,"formElement",void 0),oe([he("mwc-ripple")],Ki.prototype,"ripple",void 0),oe([me()],Ki.prototype,"shouldRenderRipple",void 0),oe([fe({passive:!0})],Ki.prototype,"handleRippleMouseDown",null),oe([fe({passive:!0})],Ki.prototype,"handleRippleTouchStart",null);const Yi=_e`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;we([Le("ha-switch")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[ce({type:Boolean})],key:"haptic",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(){ke(Ce(a.prototype),"firstUpdated",this).call(this),this.addEventListener("change",(()=>{this.haptic&&ji("light")}))}},{kind:"field",static:!0,key:"styles",value:()=>[Yi,_e`
      :host {
        /* transform: scale(0.9); */
        --mdc-theme-secondary: var(--switch-checked-color);
      }
      .mdc-switch.mdc-switch--checked .mdc-switch__thumb {
        width: 16px;
        height: 16px;
        border: 8px solid;
        background-color: var(--switch-checked-button-color);
        /* border-color: var(--switch-checked-button-color);
        border-color: var(--switch-unchecked-button-color); */
        border-color: #ffffff;
        box-shadow: none;
      }
      .mdc-switch.mdc-switch--checked .mdc-switch__track {
        width: 36px;
        height: 18px;
        border: 0px solid transparent;
        border-radius: 20px;
        background-color: var(--switch-checked-track-color);
        /* border-color: var(--switch-checked-track-color); */
        /* border-color: var(--switch-unchecked-button-color); */
        border-color: #ffffff;
        opacity: 100 !important;
      }

      .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {
        width: 16px;
        height: 16px;
        border: 8px solid;
        background-color: var(--switch-unchecked-button-color);
        /* border-color: var(--switch-unchecked-button-color); */
        border-color: #ffffff;
        box-shadow: none;
      }
      .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {
        width: 36px;
        height: 18px;
        border: 0px solid transparent;
        border-radius: 20px;
        background-color: var(--switch-unchecked-track-color);
        border-color: var(--switch-unchecked-track-color);
      }

      .mdc-switch__thumb-underlay {
        left: -15px;
        right: initial;
        top: -15px;
        width: 48px;
        height: 48px;
      }

      .mdc-switch--checked .mdc-switch__thumb-underlay {
        transform: translateX(18px);
      }

      .mdc-switch__thumb-underlay > mwc-ripple {
        transform: translate(3px, 3px) scale(0.1);
      }

      .mdc-switch__native-control {
        pointer-events: var(--mdc-switch__pointer_events, "all");
        width: 48px;
        height: 48px;
      }
    `]}]}}),Ki),Ee({_template:Ae`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var e=xe(this).parentNode,t=xe(this).getOwnerRoot();return this.for?xe(t).querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?t.host:e},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(e){"entry"===e?this.show():"exit"===e&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===xe(this).textContent.trim()){for(var e=!0,t=xe(this).getEffectiveChildNodes(),a=0;a<t.length;a++)if(""!==t[a].textContent.trim()){e=!1;break}if(e)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var e=this.offset;14!=this.marginTop&&14==this.offset&&(e=this.marginTop);var t,a,n=this.offsetParent.getBoundingClientRect(),i=this._target.getBoundingClientRect(),r=this.getBoundingClientRect(),s=(i.width-r.width)/2,o=(i.height-r.height)/2,c=i.left-n.left,l=i.top-n.top;switch(this.position){case"top":t=c+s,a=l-r.height-e;break;case"bottom":t=c+s,a=l+i.height+e;break;case"left":t=c-r.width-e,a=l+o;break;case"right":t=c+i.width+e,a=l+o}this.fitToVisibleBounds?(n.left+t+r.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,t)+"px",this.style.right="auto"),n.top+a+r.height>window.innerHeight?(this.style.bottom=n.height-l+e+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,a)+"px",this.style.bottom="auto")):(this.style.left=t+"px",this.style.top=a+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(e){500!==e&&this.updateStyles({"--paper-tooltip-delay-in":e+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(e){if("entry"===e&&""!==this.animationEntry)return this.animationEntry;if("exit"===e&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[e]&&"string"==typeof this.animationConfig[e][0].name){if(this.animationConfig[e][0].timing&&this.animationConfig[e][0].timing.delay&&0!==this.animationConfig[e][0].timing.delay){var t=this.animationConfig[e][0].timing.delay;"entry"===e?this.updateStyles({"--paper-tooltip-delay-in":t+"ms"}):"exit"===e&&this.updateStyles({"--paper-tooltip-delay-out":t+"ms"})}return this.animationConfig[e][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}});const Wi=e=>e.charAt(0).toUpperCase()+e.slice(1),Xi=e=>{const t=e.entity_id.split(".")[0];let a=e.state;return"climate"===t&&(a=e.attributes.hvac_action),a},qi=_e`
  ha-state-icon[data-domain="alert"][data-state="on"],
  ha-state-icon[data-domain="automation"][data-state="on"],
  ha-state-icon[data-domain="binary_sensor"][data-state="on"],
  ha-state-icon[data-domain="calendar"][data-state="on"],
  ha-state-icon[data-domain="camera"][data-state="streaming"],
  ha-state-icon[data-domain="cover"][data-state="open"],
  ha-state-icon[data-domain="fan"][data-state="on"],
  ha-state-icon[data-domain="humidifier"][data-state="on"],
  ha-state-icon[data-domain="light"][data-state="on"],
  ha-state-icon[data-domain="input_boolean"][data-state="on"],
  ha-state-icon[data-domain="lock"][data-state="unlocked"],
  ha-state-icon[data-domain="media_player"][data-state="on"],
  ha-state-icon[data-domain="media_player"][data-state="paused"],
  ha-state-icon[data-domain="media_player"][data-state="playing"],
  ha-state-icon[data-domain="remote"][data-state="on"],
  ha-state-icon[data-domain="script"][data-state="on"],
  ha-state-icon[data-domain="sun"][data-state="above_horizon"],
  ha-state-icon[data-domain="switch"][data-state="on"],
  ha-state-icon[data-domain="timer"][data-state="active"],
  ha-state-icon[data-domain="vacuum"][data-state="cleaning"],
  ha-state-icon[data-domain="group"][data-state="on"],
  ha-state-icon[data-domain="group"][data-state="home"],
  ha-state-icon[data-domain="group"][data-state="open"],
  ha-state-icon[data-domain="group"][data-state="locked"],
  ha-state-icon[data-domain="group"][data-state="problem"] {
    color: var(--paper-item-icon-active-color, #fdd835);
  }

  ha-state-icon[data-domain="climate"][data-state="cooling"] {
    color: var(--cool-color, var(--state-climate-cool-color));
  }

  ha-state-icon[data-domain="climate"][data-state="heating"] {
    color: var(--heat-color, var(--state-climate-heat-color));
  }

  ha-state-icon[data-domain="climate"][data-state="drying"] {
    color: var(--dry-color, var(--state-climate-dry-color));
  }

  ha-state-icon[data-domain="alarm_control_panel"] {
    color: var(--alarm-color-armed, var(--label-badge-red));
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="disarmed"] {
    color: var(--alarm-color-disarmed, var(--label-badge-green));
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="pending"],
  ha-state-icon[data-domain="alarm_control_panel"][data-state="arming"] {
    color: var(--alarm-color-pending, var(--label-badge-yellow));
    animation: pulse 1s infinite;
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="triggered"] {
    color: var(--alarm-color-triggered, var(--label-badge-red));
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ha-state-icon[data-domain="plant"][data-state="problem"],
  ha-state-icon[data-domain="zwave"][data-state="dead"] {
    color: var(--state-icon-error-color);
  }

  /* Color the icon if unavailable */
  ha-state-icon[data-state="unavailable"] {
    color: var(--state-unavailable-color);
  }
`,Vi=e=>{switch(e){case"armed_away":return Fe;case"armed_vacation":return Re;case"armed_home":return De;case"armed_night":return Oe;case"armed_custom_bypass":return Te;case"pending":return Ne;case"triggered":return Me;case"disarmed":return Ie;default:return Se}},Zi=e=>{switch(e.attributes.device_class){case"awning":case"door":case"gate":case"curtain":return Ct;default:return kt}},Qi=e=>{switch(e.attributes.device_class){case"awning":case"door":case"gate":case"curtain":return Et;default:return Lt}},Ji="timestamp",er={10:Ut,20:Kt,30:Yt,40:Wt,50:Xt,60:qt,70:Vt,80:Zt,90:Qt,100:yt},tr={10:Jt,20:ea,30:ta,40:aa,50:na,60:ia,70:ra,80:sa,90:oa,100:_t},ar=(e,t)=>{const a=Number(e);if(isNaN(a))return"off"===e?yt:"on"===e?Bt:jt;const n=10*Math.round(a/10);return t&&a>=10?tr[n]:t?Ht:a<=5?Pt:er[n]},nr=e=>{const t=null==e?void 0:e.attributes.device_class;if(t&&t in on)return on[t];if("battery"===t)return e?((e,t)=>{const a=e.state,n=t&&"on"===t.state;return ar(a,n)})(e):yt;const a=null==e?void 0:e.attributes.unit_of_measurement;return"°C"===a||"°F"===a?G:void 0},ir=(e,t,a)=>{const n=void 0!==a?a:null==t?void 0:t.state;switch(e){case"alarm_control_panel":return Vi(n);case"binary_sensor":return((e,t)=>{const a="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return a?yt:wt;case"battery_charging":return a?yt:_t;case"cold":return a?G:vt;case"connectivity":return a?gt:bt;case"door":return a?ft:pt;case"garage_door":return a?ht:mt;case"power":return k;case"gas":case"problem":case"safety":case"tamper":return a?lt:ut;case"smoke":return a?lt:dt;case"heat":return a?G:ct;case"light":return a?q:ot;case"lock":return a?rt:st;case"moisture":return a?nt:it;case"motion":return a?tt:at;case"occupancy":case"presence":return a?qe:Ve;case"opening":return a?Je:et;case"plug":return a?Ze:Qe;case"running":return a?We:Xe;case"sound":return a?Ke:Ye;case"update":return a?Pe:Ue;case"vibration":return a?je:He;case"window":return a?$e:Be;default:return a?ze:Ge}})(n,t);case"button":switch(null==t?void 0:t.attributes.device_class){case"restart":return Sa;case"update":return Ue;default:return b}case"cover":return((e,t)=>{const a="closed"!==e;switch(null==t?void 0:t.attributes.device_class){case"garage":switch(e){case"opening":return xt;case"closing":return At;case"closed":return ht;default:return mt}case"gate":switch(e){case"opening":case"closing":return $t;case"closed":return Gt;default:return zt}case"door":return a?pt:ft;case"damper":return a?Rt:Ft;case"shutter":switch(e){case"opening":return xt;case"closing":return At;case"closed":return Dt;default:return Ot}case"curtain":switch(e){case"opening":return Tt;case"closing":return Et;case"closed":return Nt;default:return Mt}case"blind":case"shade":switch(e){case"opening":return xt;case"closing":return At;case"closed":return It;default:return St}case"window":switch(e){case"opening":return xt;case"closing":return At;case"closed":return $e;default:return Be}}switch(e){case"opening":return xt;case"closing":return At;case"closed":return $e;default:return Be}})(n,t);case"device_tracker":return"router"===(null==t?void 0:t.attributes.source_type)?"home"===n?Ca:La:["bluetooth","bluetooth_le"].includes(null==t?void 0:t.attributes.source_type)?"home"===n?Ea:Aa:"not_home"===n?xa:A;case"humidifier":return a&&"off"===a?wa:ka;case"input_boolean":return"on"===n?ya:_a;case"lock":switch(n){case"unlocked":return st;case"jammed":return va;case"locking":case"unlocking":return ba;default:return rt}case"media_player":return"playing"===n?pa:ga;case"switch":switch(null==t?void 0:t.attributes.device_class){case"outlet":return"on"===n?Qe:Ze;case"switch":return"on"===n?ma:fa;default:return j}case"zwave":switch(n){case"dead":return ha;case"sleeping":return ua;case"initializing":return da;default:return la}case"sensor":{const e=nr(t);if(e)return e;break}case"input_datetime":if(null==t||!t.attributes.has_date)return te;if(!t.attributes.has_time)return r;break;case"sun":return"above_horizon"===(null==t?void 0:t.state)?sn[e]:ca}return e in sn?sn[e]:(console.warn(`Unable to find icon for domain ${e}`),rn)};we([Le("ha-state-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[ce({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[ce()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t,a;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?ve`<ha-icon
        .icon=${this.icon||(null===(t=this.state)||void 0===t?void 0:t.attributes.icon)}
      ></ha-icon>`:ve`<ha-svg-icon .path=${a=this.state,a?ir(yn(a.entity_id),a):rn}></ha-svg-icon>`}}]}}),Ia);let rr=we(null,(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[ce()],key:"stateObj",value:void 0},{kind:"field",decorators:[ce()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[ce()],key:"overrideImage",value:void 0},{kind:"field",decorators:[ce({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[ce({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[me()],key:"_iconStyle",value:()=>({})},{kind:"method",key:"render",value:function(){const e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return ve`<div class="missing">
        <ha-svg-icon .path=${a}></ha-svg-icon>
      </div>`;if(!this._showIcon)return ve``;const t=e?$i(e):void 0;return ve`
      <ha-state-icon
        style=${Ma(this._iconStyle)}
        data-domain=${ye(this.stateColor||"light"===t&&!1!==this.stateColor?t:void 0)}
        data-state=${e?Xi(e):""}
        .icon=${this.overrideIcon}
        .state=${e}
      ></ha-state-icon>
    `}},{kind:"method",key:"willUpdate",value:function(e){if(ke(Ce(n.prototype),"willUpdate",this).call(this,e),!e.has("stateObj")&&!e.has("overrideImage")&&!e.has("overrideIcon"))return;const t=this.stateObj,a={},i={backgroundImage:""};if(this._showIcon=!0,t&&void 0===this.overrideImage)if(!t.attributes.entity_picture_local&&!t.attributes.entity_picture||this.overrideIcon){if("on"===t.state){const e=t?$i(t):void 0;if(a.color="light"===e?"var(--state-light-active-color, #ffbd4b)":"var(--state-icon-active-color)",!1!==this.stateColor&&t.attributes.rgb_color&&(a.color=`rgb(${t.attributes.rgb_color.join(",")})`),t.attributes.brightness&&!1!==this.stateColor){const e=t.attributes.brightness;if("number"!=typeof e){const a=`Type error: state-badge expected number, but type of ${t.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(a)}a.filter=`brightness(${(e+245)/5}%)`}}}else{let e=t.attributes.entity_picture_local||t.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),i.backgroundImage=`url(${e})`,this._showIcon=!1}else if(this.overrideImage){let e=this.overrideImage;this.hass&&(e=this.hass.hassUrl(e)),i.backgroundImage=`url(${e})`,this._showIcon=!1}this._iconStyle=a,Object.assign(this.style,i)}},{kind:"get",static:!0,key:"styles",value:function(){return[qi,_e`
        :host {
          position: relative;
          display: inline-block;
          width: 24px;
          color: var(--paper-item-icon-color, #44739e);
          border-radius: 50%;
          height: 24px;
          text-align: center;
          background-size: cover;
          line-height: 22px;
          vertical-align: middle;
          box-sizing: border-box;
        }
        :host(:focus) {
          outline: none;
        }
        :host(:not([icon]):focus) {
          border: 2px solid var(--divider-color);
        }
        :host([icon]:focus) {
          background: var(--divider-color);
        }
        ha-state-icon {
          transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
          --mdc-icon-size: 100%;
          width: 40px;
        }
        ha-svg-icon {
          width: 40px;
          height: auto;
        }
        .missing {
          color: #fce588;
        }
      `]}}]}}),Ia);customElements.define("state-badge",rr);const sr=1,or=2,cr=4,lr=8,dr=16,ur=32,hr=128,mr=256,fr=512,pr=1024,gr=2048,br=4096,vr=16384,yr=65536,_r=131072,wr="browser",kr={album:{icon:Na,layout:"grid"},app:{icon:Ta,layout:"grid"},artist:{icon:Oa,layout:"grid",show_list_images:!0},channel:{icon:Da,thumbnail_ratio:"portrait",layout:"grid"},composer:{icon:Ra,layout:"grid",show_list_images:!0},contributing_artist:{icon:Oa,layout:"grid",show_list_images:!0},directory:{icon:Fa,layout:"grid",show_list_images:!0},episode:{icon:Da,layout:"grid",thumbnail_ratio:"portrait"},game:{icon:za,layout:"grid",thumbnail_ratio:"portrait"},genre:{icon:Ga,layout:"grid",show_list_images:!0},image:{icon:$a,layout:"grid"},movie:{icon:Ba,thumbnail_ratio:"portrait",layout:"grid"},music:{icon:ja},playlist:{icon:Ha,layout:"grid",show_list_images:!0},podcast:{icon:Pa,layout:"grid"},season:{icon:Da,layout:"grid",thumbnail_ratio:"portrait"},track:{icon:Ua},tv_show:{icon:Da,layout:"grid",thumbnail_ratio:"portrait"},url:{icon:Ka},video:{icon:s,layout:"grid"}},Cr=(e,t,a,n)=>e.callWS({type:"media_player/browse_media",entity_id:t,media_content_id:a,media_content_type:n}),Lr=e=>{let t=e.attributes.media_position;return"playing"!==e.state||(t+=(Date.now()-new Date(e.attributes.media_position_updated_at).getTime())/1e3),t},Er=e=>{let t;switch(e.attributes.media_content_type){case"music":case"image":t=e.attributes.media_artist;break;case"playlist":t=e.attributes.media_playlist;break;case"tvshow":t=e.attributes.media_series_title,e.attributes.media_season&&(t+=" S"+e.attributes.media_season,e.attributes.media_episode&&(t+="E"+e.attributes.media_episode));break;default:t=e.attributes.app_name||""}return t},Ar=e=>{if(!e)return;const t=e.state;if(On.includes(t))return;if("off"===t)return Bi(e,128)?[{icon:Ya,action:"turn_on"}]:void 0;const a=[];Bi(e,256)&&a.push({icon:Ya,action:"turn_off"});const n=!0===e.attributes.assumed_state;return("playing"===t||"paused"===t||n)&&Bi(e,16)&&a.push({icon:Wa,action:"media_previous_track"}),!n&&("playing"===t&&(Bi(e,1)||Bi(e,br))||("paused"===t||"idle"===t)&&Bi(e,vr)||"on"===t&&(Bi(e,vr)||Bi(e,1)))&&a.push({icon:"on"===t?Xa:"playing"!==t?Xe:Bi(e,1)?qa:We,action:"playing"!==t?"media_play":Bi(e,1)?"media_pause":"media_stop"}),n&&Bi(e,vr)&&a.push({icon:Xe,action:"media_play"}),n&&Bi(e,1)&&a.push({icon:qa,action:"media_pause"}),n&&Bi(e,br)&&a.push({icon:We,action:"media_stop"}),("playing"===t||"paused"===t||n)&&Bi(e,32)&&a.push({icon:Va,action:"media_next_track"}),a.length>0?a:void 0},xr=e=>{if(!e)return;const t=e.indexOf("?authSig=");return t>0?e.slice(0,t):e};class Sr extends TypeError{constructor(e,t){let a;const{message:n,...i}=e,{path:r}=e;super(0===r.length?n:"At path: "+r.join(".")+" -- "+n),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,i),this.name=this.constructor.name,this.failures=()=>{var n;return null!=(n=a)?n:a=[e,...t()]}}}function Ir(e){return"object"==typeof e&&null!=e}function Mr(e){return"string"==typeof e?JSON.stringify(e):""+e}function Nr(e,t,a,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:i,branch:r}=t,{type:s}=a,{refinement:o,message:c="Expected a value of type `"+s+"`"+(o?" with refinement `"+o+"`":"")+", but received: `"+Mr(n)+"`"}=e;return{value:n,type:s,refinement:o,key:i[i.length-1],path:i,branch:r,...e,message:c}}function*Tr(e,t,a,n){(function(e){return Ir(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const i of e){const e=Nr(i,t,a,n);e&&(yield e)}}function*Or(e,t,a){void 0===a&&(a={});const{path:n=[],branch:i=[e],coerce:r=!1,mask:s=!1}=a,o={path:n,branch:i};if(r&&(e=t.coercer(e,o),s&&"type"!==t.type&&Ir(t.schema)&&Ir(e)&&!Array.isArray(e)))for(const a in e)void 0===t.schema[a]&&delete e[a];let c=!0;for(const a of t.validator(e,o))c=!1,yield[a,void 0];for(let[a,l,d]of t.entries(e,o)){const t=Or(l,d,{path:void 0===a?n:[...n,a],branch:void 0===a?i:[...i,l],coerce:r,mask:s});for(const n of t)n[0]?(c=!1,yield[n[0],void 0]):r&&(l=n[1],void 0===a?e=l:e instanceof Map?e.set(a,l):e instanceof Set?e.add(l):Ir(e)&&(e[a]=l))}if(c)for(const a of t.refiner(e,o))c=!1,yield[a,void 0];c&&(yield[void 0,e])}class Dr{constructor(e){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:t,schema:a,validator:n,refiner:i,coercer:r=(e=>e),entries:s=function*(){}}=e;this.type=t,this.schema=a,this.entries=s,this.coercer=r,this.validator=n?(e,t)=>Tr(n(e,t),t,this,e):()=>[],this.refiner=i?(e,t)=>Tr(i(e,t),t,this,e):()=>[]}assert(e){return Rr(e,this)}create(e){return function(e,t){const a=zr(e,t,{coerce:!0});if(a[0])throw a[0];return a[1]}(e,this)}is(e){return Fr(e,this)}mask(e){return function(e,t){const a=zr(e,t,{coerce:!0,mask:!0});if(a[0])throw a[0];return a[1]}(e,this)}validate(e,t){return void 0===t&&(t={}),zr(e,this,t)}}function Rr(e,t){const a=zr(e,t);if(a[0])throw a[0]}function Fr(e,t){return!zr(e,t)[0]}function zr(e,t,a){void 0===a&&(a={});const n=Or(e,t,a),i=function(e){const{done:t,value:a}=e.next();return t?void 0:a}(n);if(i[0]){const e=new Sr(i[0],(function*(){for(const e of n)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,i[1]]}function Gr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const n="type"===t[0].type,i=t.map((e=>e.schema)),r=Object.assign({},...i);return n?Vr(r):Wr(r)}function $r(e,t){return new Dr({type:e,schema:null,validator:t})}function Br(e){return new Dr({type:"dynamic",schema:null,*entries(t,a){const n=e(t,a);yield*n.entries(t,a)},validator:(t,a)=>e(t,a).validator(t,a),coercer:(t,a)=>e(t,a).coercer(t,a),refiner:(t,a)=>e(t,a).refiner(t,a)})}function jr(){return $r("any",(()=>!0))}function Hr(e){return new Dr({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[a,n]of t.entries())yield[a,n,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||"Expected an array value, but received: "+Mr(e)})}function Pr(){return $r("boolean",(e=>"boolean"==typeof e))}function Ur(e){const t={},a=e.map((e=>Mr(e))).join();for(const a of e)t[a]=a;return new Dr({type:"enums",schema:t,validator:t=>e.includes(t)||"Expected one of `"+a+"`, but received: "+Mr(t)})}function Kr(e){const t=Mr(e),a=typeof e;return new Dr({type:"literal",schema:"string"===a||"number"===a||"boolean"===a?e:null,validator:a=>a===e||"Expected the literal `"+t+"`, but received: "+Mr(a)})}function Yr(){return $r("number",(e=>"number"==typeof e&&!isNaN(e)||"Expected a number, but received: "+Mr(e)))}function Wr(e){const t=e?Object.keys(e):[],a=$r("never",(()=>!1));return new Dr({type:"object",schema:e||null,*entries(n){if(e&&Ir(n)){const i=new Set(Object.keys(n));for(const a of t)i.delete(a),yield[a,n[a],e[a]];for(const e of i)yield[e,n[e],a]}},validator:e=>Ir(e)||"Expected an object, but received: "+Mr(e),coercer:e=>Ir(e)?{...e}:e})}function Xr(e){return new Dr({...e,validator:(t,a)=>void 0===t||e.validator(t,a),refiner:(t,a)=>void 0===t||e.refiner(t,a)})}function qr(){return $r("string",(e=>"string"==typeof e||"Expected a string, but received: "+Mr(e)))}function Vr(e){const t=Object.keys(e);return new Dr({type:"type",schema:e,*entries(a){if(Ir(a))for(const n of t)yield[n,a[n],e[n]]},validator:e=>Ir(e)||"Expected an object, but received: "+Mr(e)})}function Zr(e){const t=e.map((e=>e.type)).join(" | ");return new Dr({type:"union",schema:null,coercer(t,a){const n=e.find((e=>{const[a]=e.validate(t,{coerce:!0});return!a}))||$r("unknown",(()=>!0));return n.coercer(t,a)},validator(a,n){const i=[];for(const t of e){const[...e]=Or(a,t,n),[r]=e;if(!r[0])return[];for(const[t]of e)t&&i.push(t)}return["Expected the value to satisfy a union of `"+t+"`, but received: "+Mr(a),...i]}})}function Qr(e,t,a){return new Dr({...e,*refiner(n,i){yield*e.refiner(n,i);const r=Tr(a(n,i),i,e,n);for(const e of r)yield{...e,refinement:t}}})}const Jr=["queued","parallel"],es=Wr({alias:Xr(qr())}),ts=Wr({entity_id:Xr(Zr([qr(),Hr(qr())])),device_id:Xr(Zr([qr(),Hr(qr())])),area_id:Xr(Zr([qr(),Hr(qr())]))});Gr(es,Wr({service:Xr(qr()),service_template:Xr(qr()),entity_id:Xr(qr()),target:Xr(ts),data:Xr(Wr())}));const as=Gr(es,Wr({service:Kr("media_player.play_media"),target:Xr(Wr({entity_id:Xr(qr())})),entity_id:Xr(qr()),data:Wr({media_content_id:qr(),media_content_type:qr()}),metadata:Wr()})),ns=Gr(es,Wr({service:Kr("scene.turn_on"),target:Xr(Wr({entity_id:Xr(qr())})),entity_id:Xr(qr()),metadata:Wr()})),is=e=>"off"===e.state||!!("on"===e.state&&Jr.includes(e.attributes.mode)&&e.attributes.current<e.attributes.max),rs=e=>{if("delay"in e)return"delay";if("wait_template"in e)return"wait_template";if("condition"in e)return"check_condition";if("event"in e)return"fire_event";if("device_id"in e)return"device_action";if("scene"in e)return"activate_scene";if("repeat"in e)return"repeat";if("choose"in e)return"choose";if("wait_for_trigger"in e)return"wait_for_trigger";if("variables"in e)return"variables";if("service"in e){if("metadata"in e){if(Fr(e,ns))return"activate_scene";if(Fr(e,as))return"play_media"}return"service"}return"unknown"},ss=()=>import("./c.ade8c5bf.js"),os=(e,t,a)=>new Promise((n=>{const i=t.cancel,r=t.confirm;ne(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:ss,dialogParams:{...t,...a,cancel:()=>{n(!(null==a||!a.prompt)&&null),i&&i()},confirm:e=>{n(null==a||!a.prompt||e),r&&r(e)}}})})),cs=(e,t)=>os(e,t),ls=(e,t)=>os(e,t,{confirmation:!0}),ds=(e,t)=>os(e,t,{prompt:!0}),us=(e,t)=>{var a,n;const i=e._$AN;if(void 0===i)return!1;for(const e of i)null===(n=(a=e)._$AO)||void 0===n||n.call(a,t,!1),us(e,t);return!0},hs=e=>{let t,a;do{if(void 0===(t=e._$AM))break;a=t._$AN,a.delete(e),e=t}while(0===(null==a?void 0:a.size))},ms=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(void 0===a)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),gs(t)}};function fs(e){void 0!==this._$AN?(hs(this),this._$AM=e,ms(this)):this._$AM=e}function ps(e,t=!1,a=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let e=a;e<n.length;e++)us(n[e],!1),hs(n[e]);else null!=n&&(us(n,!1),hs(n));else us(this,e)}const gs=e=>{var t,a,n,i;e.type==Ja.CHILD&&(null!==(t=(n=e)._$AP)&&void 0!==t||(n._$AP=ps),null!==(a=(i=e)._$AQ)&&void 0!==a||(i._$AQ=fs))};class bs extends Za{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),ms(this),this.isConnected=e._$AU}_$AO(e,t=!0){var a,n;e!==this.isConnected&&(this.isConnected=e,e?null===(a=this.reconnected)||void 0===a||a.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(us(this,e),hs(this))}setValue(e){if(Qa(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class vs{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class ys{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var e;null!==(e=this.Z)&&void 0!==e||(this.Z=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Z=this.q=void 0}}const _s=e=>!an(e)&&"function"==typeof e.then,ws=1073741823;const ks=en(class extends bs{constructor(){super(...arguments),this._$Cwt=ws,this._$Cyt=[],this._$CK=new vs(this),this._$CX=new ys}render(...e){var t;return null!==(t=e.find((e=>!_s(e))))&&void 0!==t?t:tn}update(e,t){const a=this._$Cyt;let n=a.length;this._$Cyt=t;const i=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const s=t[e];if(!_s(s))return this._$Cwt=e,s;e<n&&s===a[e]||(this._$Cwt=ws,n=0,Promise.resolve(s).then((async e=>{for(;r.get();)await r.get();const t=i.deref();if(void 0!==t){const a=t._$Cyt.indexOf(s);a>-1&&a<t._$Cwt&&(t._$Cwt=a,t.setValue(e))}})))}return tn}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});function Cs(e){return!!e&&(e instanceof Date&&!isNaN(e.valueOf()))}const Ls="^\\d{4}-(0[1-9]|1[0-2])-([12]\\d|0[1-9]|3[01])",Es=new RegExp(Ls+"$"),As=new RegExp(Ls),xs=/^\d{4}-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])[T| ](((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)(\8[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)$/;let Ss;const Is=["assumed_state","attribution","custom_ui_more_info","custom_ui_state_card","device_class","editable","emulated_hue_name","emulated_hue","entity_picture","friendly_name","haaska_hidden","haaska_name","icon","initial_state","last_reset","restored","state_class","supported_features","unit_of_measurement"];function Ms(e){return e=e.replace(/_/g," ").replace(/\bid\b/g,"ID").replace(/\bip\b/g,"IP").replace(/\bmac\b/g,"MAC").replace(/\bgps\b/g,"GPS"),Wi(e)}function Ns(e,t){if(null===t)return"—";if(Array.isArray(t)&&t.some((e=>e instanceof Object))||!Array.isArray(t)&&t instanceof Object){Ss||(Ss=import("./c.ca7549f6.js"));const e=Ss.then((e=>e.dump(t)));return ve`<pre>${ks(e,"")}</pre>`}if("number"==typeof t)return zi(t,e.locale);if("string"==typeof t){if(t.startsWith("http"))try{const e=new URL(t);if("http:"===e.protocol||"https:"===e.protocol)return ve`<a target="_blank" rel="noreferrer" href=${t}
            >${t}</a
          >`}catch(e){}if(((e,t=!1)=>t?As.test(e):Es.test(e))(t,!0)){if(a=t,xs.test(a)){const a=new Date(t);if(Cs(a))return Ti(a,e.locale)}const n=new Date(t);if(Cs(n))return bi(n,e.locale)}}var a;return Array.isArray(t)?t.join(", "):t}const Ts=async e=>e.callWS({type:"config/auth/list"}),Os=e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?",Ds=(e,t,a)=>e(`component.${t}.title`)||(null==a?void 0:a.name)||t,Rs=(e,t)=>e.callWS({type:"manifest/get",integration:t}),Fs=(e,t)=>ne(e,"hass-notification",t),zs=async()=>{"function"!=typeof ResizeObserver&&(window.ResizeObserver=(await import("./c.004a7b01.js")).default)},Gs=(e,t)=>e.callWS({type:"auth/sign_path",path:t});export{cr as $,bs as A,fn as B,ir as C,cn as D,bn as E,Ts as F,ln as G,dn as H,Ds as I,ls as J,Fs as K,gn as L,Xi as M,qi as N,Un as O,Pn as P,zs as Q,un as R,mn as S,Er as T,Tn as U,dr as V,sr as W,br as X,vr as Y,ur as Z,hr as _,Nn as a,pr as a0,mr as a1,lr as a2,Cs as a3,vn as a4,Gs as a5,hn as a6,xn as a7,An as a8,cs as a9,_n as aA,Os as aB,rs as aC,Sr as aD,Qr as aE,Br as aF,ks as aG,Bn as aH,ei as aI,ti as aJ,Jn as aK,xi as aL,Ci as aM,Ei as aN,wi as aO,Vi as aP,Di as aQ,Cn as aR,or as aS,Lr as aT,ar as aU,Hn as aV,oi as aW,wr as aX,Cr as aY,En as aa,Ln as ab,Mn as ac,ds as ad,yi as ae,Ar as af,_r as ag,gr as ah,yr as ai,fr as aj,pi as ak,Gr as al,Wr as am,Xr as an,qr as ao,Pr as ap,Rr as aq,Zr as ar,Hr as as,Kr as at,Vr as au,Ur as av,jr as aw,Yr as ax,kr as ay,Rs as az,Mi as b,$i as c,bi as d,yn as e,zi as f,pn as g,On as h,Ri as i,wn as j,ji as k,Wi as l,Zi as m,Qi as n,Ji as o,mi as p,xr as q,is as r,Bi as s,Is as t,Ii as u,Ms as v,Ns as w,Fi as x,Ti as y,nn as z};
