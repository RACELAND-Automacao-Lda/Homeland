function e(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e){t(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(n,o){t(2,arguments);var a=r(n).getTime(),s=e(o);return new Date(a+s)}function a(n,r){return t(2,arguments),o(n,36e5*e(r))}function s(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function u(e){t(1,arguments);var n=r(e);return n.setHours(0,0,0,0),n}var i=864e5;function g(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function c(e,n){t(2,arguments);var o=r(e),a=r(n),c=g(o,a),l=Math.abs(function(e,n){t(2,arguments);var r=u(e),o=u(n),a=r.getTime()-s(r),g=o.getTime()-s(o);return Math.round((a-g)/i)}(o,a));o.setDate(o.getDate()-c*l);var f=c*(l-Number(g(o,a)===-c));return 0===f?0:f}function l(e){t(1,arguments);var n=r(e);return n.setHours(23,59,59,999),n}export{o as a,r as b,a as c,c as d,l as e,t as r,u as s,e as t};