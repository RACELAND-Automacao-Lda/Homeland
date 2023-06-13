import{O as e,P as t,aH as a}from"./c.5a5021e9.js";import{eu as l}from"./main-b570e60a.js";import{l as r}from"./c.ee80f8c6.js";import"./c.2aff7a3c.js";var n=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InitializePluralRules=void 0,t.InitializePluralRules=function(e,t,l,n){var i=n.availableLocales,o=n.relevantExtensionKeys,s=n.localeData,u=n.getDefaultLocale,c=n.getInternalSlots,f=(0,r.CanonicalizeLocaleList)(t),d=Object.create(null),p=(0,r.CoerceOptionsToObject)(l),b=c(e);b.initializedPluralRules=!0;var v=(0,r.GetOption)(p,"localeMatcher","string",["best fit","lookup"],"best fit");d.localeMatcher=v,b.type=(0,r.GetOption)(p,"type","string",["cardinal","ordinal"],"cardinal"),(0,r.SetNumberFormatDigitOptions)(b,p,0,3,"standard");var m=(0,a.ResolveLocale)(i,f,d,o,s,u);return b.locale=m.locale,e}}));t(n),n.InitializePluralRules;var i=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.GetOperands=void 0,t.GetOperands=function(e){(0,r.invariant)("string"==typeof e,"GetOperands should have been called with a string");var t=(0,r.ToNumber)(e);(0,r.invariant)(isFinite(t),"n should be finite");var a,l,n,i=e.indexOf("."),o="";-1===i?(a=t,l=0,n=0):(a=e.slice(0,i),o=e.slice(i,e.length),l=(0,r.ToNumber)(o),n=o.length);var s,u,c=Math.abs((0,r.ToNumber)(a));if(0!==l){var f=o.replace(/0+$/,"");s=f.length,u=(0,r.ToNumber)(f)}else s=0,u=0;return{Number:t,IntegerDigits:c,NumberOfFractionDigits:n,NumberOfFractionDigitsWithoutTrailing:s,FractionDigits:l,FractionDigitsWithoutTrailing:u}}}));t(i),i.GetOperands;var o=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ResolvePlural=void 0,t.ResolvePlural=function(e,t,a){var l=a.getInternalSlots,n=a.PluralRuleSelect,o=l(e);if((0,r.invariant)("Object"===(0,r.Type)(o),"pl has to be an object"),(0,r.invariant)("initializedPluralRules"in o,"pluralrules must be initialized"),(0,r.invariant)("Number"===(0,r.Type)(t),"n must be a number"),!isFinite(t))return"other";var s=o.locale,u=o.type,c=(0,r.FormatNumericToString)(o,t).formattedString;return n(s,u,t,(0,i.GetOperands)(c))}}));t(o),o.ResolvePlural;var s=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a=new WeakMap;t.default=function(e){var t=a.get(e);return t||(t=Object.create(null),a.set(e,t)),t}}));t(s);var u=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PluralRules=void 0;var a=(0,l.__importDefault)(s);function i(e,t){if(!(e instanceof c))throw new TypeError("Method Intl.PluralRules.prototype.".concat(t," called on incompatible receiver ").concat(String(e)))}function u(e,t,a,l){var r=l.IntegerDigits,n=l.NumberOfFractionDigits,i=l.FractionDigits;return c.localeData[e].fn(n?"".concat(r,".").concat(i):r,"ordinal"===t)}var c=function(){function e(t,l){if(!(this&&this instanceof e?this.constructor:void 0))throw new TypeError("Intl.PluralRules must be called with 'new'");return(0,n.InitializePluralRules)(this,t,l,{availableLocales:e.availableLocales,relevantExtensionKeys:e.relevantExtensionKeys,localeData:e.localeData,getDefaultLocale:e.getDefaultLocale,getInternalSlots:a.default})}return e.prototype.resolvedOptions=function(){i(this,"resolvedOptions");var t=Object.create(null),r=(0,a.default)(this);return t.locale=r.locale,t.type=r.type,["minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"].forEach((function(e){var a=r[e];void 0!==a&&(t[e]=a)})),t.pluralCategories=(0,l.__spreadArray)([],e.localeData[t.locale].categories[t.type],!0),t},e.prototype.select=function(e){i(this,"select");var t=(0,r.ToNumber)(e);return(0,o.ResolvePlural)(this,t,{getInternalSlots:a.default,PluralRuleSelect:u})},e.prototype.toString=function(){return"[object Intl.PluralRules]"},e.supportedLocalesOf=function(t,a){return(0,r.SupportedLocales)(e.availableLocales,(0,r.CanonicalizeLocaleList)(t),a)},e.__addLocaleData=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];for(var l=0,r=t;l<r.length;l++){var n=r[l],i=n.data,o=n.locale;e.localeData[o]=i,e.availableLocales.add(o),e.__defaultLocale||(e.__defaultLocale=o)}},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.relevantExtensionKeys=[],e.polyfilled=!0,e}();t.PluralRules=c;try{"undefined"!=typeof Symbol&&Object.defineProperty(c.prototype,Symbol.toStringTag,{value:"Intl.PluralRules",writable:!1,enumerable:!1,configurable:!0});try{Object.defineProperty(c,"length",{value:0,writable:!1,enumerable:!1,configurable:!0})}catch(e){}Object.defineProperty(c.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(c.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(e){}}));t(u),u.PluralRules;var c=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.supportedLocales=void 0,t.supportedLocales=["af","ak","am","an","ar","ars","as","asa","ast","az","bal","be","bem","bez","bg","bho","bm","bn","bo","br","brx","bs","ca","ce","ceb","cgg","chr","ckb","cs","cy","da","de","doi","dsb","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fil","fo","fr","fur","fy","ga","gd","gl","gsw","gu","guw","gv","ha","haw","he","hi","hnj","hr","hsb","hu","hy","ia","id","ig","ii","io","is","it","iu","ja","jbo","jgo","jmc","jv","jw","ka","kab","kaj","kcg","kde","kea","kk","kkj","kl","km","kn","ko","ks","ksb","ksh","ku","kw","ky","lag","lb","lg","lij","lkt","ln","lo","lt","lv","mas","mg","mgo","mk","ml","mn","mo","mr","ms","mt","my","nah","naq","nb","nd","ne","nl","nn","nnh","no","nqo","nr","nso","ny","nyn","om","or","os","osa","pa","pap","pcm","pl","prg","ps","pt-PT","pt","rm","ro","rof","ru","rwk","sah","saq","sat","sc","scn","sd","sdh","se","seh","ses","sg","sh","shi","si","sk","sl","sma","smi","smj","smn","sms","sn","so","sq","sr","ss","ssy","st","su","sv","sw","syr","ta","te","teo","th","ti","tig","tk","tl","tn","to","tpi","tr","ts","tzm","ug","uk","und","ur","uz","ve","vi","vo","vun","wa","wae","wo","xh","xog","yi","yo","yue","zh","zu"]}));t(c),c.supportedLocales;var f=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.shouldPolyfill=void 0,t.shouldPolyfill=function(e){if(void 0===e&&(e="en"),!("PluralRules"in Intl)||"one"===new Intl.PluralRules("en",{minimumFractionDigits:2}).select(1)||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.PluralRules.supportedLocalesOf(t).length===t.length}(e))return e?(0,a.match)([e],c.supportedLocales,"en"):void 0}}));t(f),f.shouldPolyfill;var d=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),(0,f.shouldPolyfill)()&&Object.defineProperty(Intl,"PluralRules",{value:u.PluralRules,writable:!0,enumerable:!1,configurable:!0})})),p=t(d);export{d as __moduleExports,p as default};