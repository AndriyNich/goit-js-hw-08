var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var o,r,i,f,a,u,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function T(e){return c=e,a=setTimeout(j,t),l?y(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function j(){var e=m();if(h(e))return O(e);a=setTimeout(j,function(e){var n=t-(e-u);return v?d(n,i-(e-c)):n}(e))}function O(e){return a=void 0,b&&o?y(e):(o=r=void 0,f)}function w(){var e=m(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return T(u);if(v)return a=setTimeout(j,t),y(u)}return void 0===a&&(a=setTimeout(j,t)),f}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},w.flush=function(){return void 0===a?f:O(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=r.test(e);return a||i.test(e)?f(e.slice(2),a?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector("form"),y={};function T(){for(const e of b.elements)"BUTTON"!==e.nodeName&&(e.value="",y[e.name]="")}b.addEventListener("input",t((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),localStorage.removeItem("feedback-form-state"),T()})),function(){T();try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));for(const t of b.elements){const n=e[t.name];n&&(t.value=n,y[t.name]=n)}}catch{localStorage.removeItem("feedback-form-state")}}();
//# sourceMappingURL=03-feedback.900967c6.js.map
