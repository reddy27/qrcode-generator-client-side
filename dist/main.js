!function(e){function n(n){for(var t,c,l=n[0],f=n[1],i=n[2],p=0,s=[];p<l.length;p++)c=l[p],o[c]&&s.push(o[c][0]),o[c]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(e[t]=f[t]);for(a&&a(n);s.length;)s.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,n=0;n<u.length;n++){for(var r=u[n],t=!0,l=1;l<r.length;l++){var f=r[l];0!==o[f]&&(t=!1)}t&&(u.splice(n--,1),e=c(c.s=r[0]))}return e}var t={},o={0:0},u=[];function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=t,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(r,t,function(n){return e[n]}.bind(null,t));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var i=0;i<l.length;i++)n(l[i]);var a=f;u.push([9,1]),r()}({9:function(e,n,r){const t=r(10),o=document.getElementById("canvas");t.toCanvas(o,"you rock",{width:300},function(e){e&&console.error(e),console.log("successfully created QRCode!")})}});