function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var i=n("eWCmQ");const l=document.querySelector(".form"),u=document.querySelector("#submitter");l.addEventListener("submit",(t=>{t.preventDefault();!function(){u.setAttribute("disabled","");const t=l.elements.delay,o=l.elements.step,r=l.elements.amount,n=Number(t.value),s=Number(o.value),d=Number(r.value);if(n<0||s<0||d<0)return e(i).Notify.failure("Please select values greater than 0"),void u.removeAttribute("disabled","");function a(e,t){const o=Math.random()>.3;return new Promise(((r,n)=>{setTimeout((()=>{o?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}for(let t=0;t<d;t++)a(t+1,n+t*s).then((({position:t,delay:o})=>{t===d&&u.removeAttribute("disabled",""),e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}()}));
//# sourceMappingURL=03-promises.ab1cf0e1.js.map
