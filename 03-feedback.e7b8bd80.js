!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,a,f,u,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,u=setTimeout(h,t),s?b(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=p();if(T(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return u=void 0,m&&r?b(e):(r=i=void 0,f)}function O(){var e=p(),n=T(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return j(c);if(d)return u=setTimeout(h,t),b(c)}return void 0===u&&(u=setTimeout(h,t)),f}return t=x(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(x(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},O.flush=function(){return void 0===u?f:w(p())},O}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j="feedback-form-state",T={},h={formBox:document.querySelector(".feedback-form")};h.formBox.addEventListener("submit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEach((function(e,t){T[t]=e})),e.currentTarget.reset(),localStorage.removeItem(j),console.log(T)})),h.formBox.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value.trim(),T.message=h.formBox.message.value,localStorage.setItem(j,JSON.stringify(T))}),500)),function(){var e=localStorage.getItem(j);if(e){var t=JSON.parse(e),n=t.email,r=t.message;h.formBox.email.value=n,h.formBox.message.value=r,T.email=n,T.message=r}}()}();
//# sourceMappingURL=03-feedback.e7b8bd80.js.map