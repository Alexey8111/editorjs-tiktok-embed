!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.TikTokEmbed=t():e.TikTokEmbed=t()}(self,(function(){return(()=>{var e={150:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".block-wrapper {\n  padding: 20px 0;\n}\n\n.block-wrapper input {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #e4e4e4;\n  border-radius: 3px;\n  outline: none;\n  font-size: 14px;\n}\n\n.tiktok-wrapper {\n  position: relative;\n  height: 700px;\n}\n\n.tiktok-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0px;\n}\n\ninput.invalid {\n  border: 1px solid #eb5959cc;\n}\n",""]);const o=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},296:e=>{function t(e,t,n){var r,i,o,a,c;function s(){var l=Date.now()-a;l<t&&l>=0?r=setTimeout(s,t-l):(r=null,n||(c=e.apply(o,i),o=i=null))}null==t&&(t=100);var l=function(){o=this,i=arguments,a=Date.now();var l=n&&!r;return r||(r=setTimeout(s,t)),l&&(c=e.apply(o,i),o=i=null),c};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(c=e.apply(o,i),o=i=null,clearTimeout(r),r=null)},l}t.debounce=t,e.exports=t},379:(e,t,n)=>{"use strict";var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var c=e[i],s=t.base?c[0]+t.base:c[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=a(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(o[d].references++,o[d].updater(p)):o.push({identifier:u,updater:h(p,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,v=0;function h(e,t){var n,r,i;if(t.singleton){var o=v++;n=f||(f=s(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=s}}}},884:e=>{e.exports='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="39" height="39" rx="4.5" fill="#fff" stroke="#BDBDBD"></rect><path d="M14.602 23.463c.122-1.011.536-1.577 1.318-2.157 1.118-.786 2.514-.341 2.514-.341v-2.637c.34-.009.679.011 1.015.06v3.393s-1.396-.444-2.514.342c-.78.58-1.196 1.146-1.318 2.157-.004.549.1 1.266.574 1.887a4.65 4.65 0 0 1-.359-.206c-1.045-.701-1.235-1.754-1.23-2.498Zm10.612-10.01c-.769-.843-1.06-1.694-1.165-2.292h.968s-.193 1.567 1.213 3.108l.02.021a5.574 5.574 0 0 1-1.036-.838Zm4.66 2.388v3.325s-1.234-.048-2.147-.28c-1.276-.325-2.096-.824-2.096-.824s-.566-.356-.612-.38v6.866c0 .382-.105 1.337-.424 2.134-.417 1.041-1.06 1.725-1.178 1.865 0 0-.782.924-2.162 1.547-1.244.561-2.336.547-2.662.561 0 0-1.888.075-3.586-1.029a7.126 7.126 0 0 1-1.025-.823l.009.006c1.699 1.104 3.586 1.029 3.586 1.029.327-.014 1.419 0 2.662-.561 1.379-.623 2.162-1.547 2.162-1.547.117-.14.763-.824 1.178-1.866a6.678 6.678 0 0 0 .424-2.133v-6.866c.046.025.612.38.612.38s.82.5 2.096.824c.914.233 2.148.281 2.148.281v-2.606c.422.095.782.12 1.015.097Z" fill="#EE1D52"></path><path d="M28.86 15.745v2.604s-1.235-.048-2.148-.28c-1.276-.325-2.096-.824-2.096-.824s-.566-.355-.612-.38v6.867c0 .382-.105 1.337-.424 2.133-.417 1.042-1.06 1.726-1.178 1.866 0 0-.782.924-2.162 1.546-1.243.562-2.335.548-2.662.562 0 0-1.887.075-3.586-1.03l-.009-.005a6.476 6.476 0 0 1-.506-.55 6.516 6.516 0 0 1-.958-1.668c-.134-.388-.416-1.319-.378-2.22.069-1.591.628-2.567.776-2.812a6.685 6.685 0 0 1 1.506-1.764 6.353 6.353 0 0 1 1.79-1.015 6.228 6.228 0 0 1 2.221-.447v2.637s-1.396-.443-2.514.34c-.78.581-1.195 1.147-1.318 2.158-.005.744.186 1.796 1.23 2.499.122.077.241.145.358.205.183.237.405.444.658.612 1.02.645 1.874.69 2.967.271.729-.28 1.277-.912 1.532-1.612.16-.437.157-.877.157-1.332V11.16h2.544c.105.598.396 1.449 1.165 2.291.308.318.655.6 1.034.838.112.116.685.688 1.42 1.04.38.181.78.32 1.193.415Z" fill="#000"></path><path d="M11.507 25.779v.002l.063.171-.063-.173ZM16.213 18.775a6.354 6.354 0 0 0-1.79 1.016 6.683 6.683 0 0 0-1.505 1.767c-.148.244-.708 1.22-.776 2.811-.039.902.244 1.833.378 2.22v.003c.085.221.416 1.003.958 1.666.158.192.326.376.506.55a6.953 6.953 0 0 1-1.521-1.367 6.538 6.538 0 0 1-.956-1.663v-.002c-.134-.388-.418-1.319-.378-2.222.068-1.59.628-2.567.776-2.811.39-.668.9-1.266 1.505-1.767a6.344 6.344 0 0 1 1.79-1.016 6.34 6.34 0 0 1 1.262-.356 6.544 6.544 0 0 1 1.975-.028v.752a6.227 6.227 0 0 0-2.224.447Z" fill="#69C9D0"></path><path d="M24.05 11.161h-2.543v12.945c0 .455 0 .894-.158 1.332-.257.7-.803 1.332-1.531 1.612-1.094.421-1.948.374-2.968-.271a2.742 2.742 0 0 1-.659-.61c.869.444 1.646.437 2.61.066.727-.28 1.275-.912 1.53-1.612.161-.437.159-.877.159-1.332V10.344h3.512s-.04.322.048.817Zm4.81 3.863v.72a5.694 5.694 0 0 1-1.191-.414c-.735-.352-1.307-.924-1.419-1.04.13.082.265.156.404.223.893.427 1.772.555 2.206.511Z" fill="#69C9D0"></path></svg>'}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>u});var e=n(379),t=n.n(e),i=n(150);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var o=n(884),a=n.n(o),c=n(296);function s(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,i)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=t.data,r=t.api,i=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.data=n,this.readOnly=i,this.element=null,this.wrapper=null,this.source=null,this.embed=null,this.caption="",this.isEdited=!1}var t,n,r,i,o;return t=e,n=[{key:"CSS",get:function(){return{caption:"embed-tool__caption"}}},{key:"render",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("input");return n.value=this.data&&this.data.url?this.data.url:"",this.source=n.value,n.placeholder="Вставьте сюда url с TikTok ...",t.classList.add("block-wrapper"),t.appendChild(n),this._createIframe(n.value),n.addEventListener("change",(function(t){e.isEdited=!0,e.source=n.value,e._createIframe(n.value)})),this.embedIsReady(t).then((function(){})),this.wrapper=t,t}},{key:"_createIframe",value:function(e){var t=/https?:\/\/www.tiktok.com\/([^\/\?\&]*)\/video\/([^\/\?\&]*)/.exec(e);if(console.log("test videoId",t),t){var n="https://www.tiktok.com/embed/".concat(t[2]);this.wrapper.innerHTML=null;var r=document.createElement("div");r.classList.add("tiktok-wrapper");var i=document.createElement("iframe");this.embed=n,i.setAttribute("src",this.embed),i.setAttribute("allowfullscreen",!0),i.setAttribute("scrolling","no"),i.onload="rubberFrame(this)",r.appendChild(i);var o=document.createElement("div");o.classList.add("cdx-input",this.CSS.caption),o.contentEditable=!0,o.dataset.placeholder="Введите описание",this.wrapper.appendChild(r),this.wrapper.appendChild(o)}else this.isEdited&&this.wrapper.querySelector("input").classList.add("invalid")}},{key:"save",value:function(e){var t=e.querySelector(".".concat(this.CSS.caption));return{service:"TikTok",embed:this.embed,source:this.source,caption:t?t.innerHTML:""}}},{key:"embedIsReady",value:(i=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=4,new Promise((function(e,r){(n=new MutationObserver((0,c.debounce)(e,450))).observe(t,{childList:!0,subtree:!0})}));case 4:n.disconnect();case 5:case"end":return e.stop()}}),e)})),o=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=i.apply(e,t);function a(e){s(o,n,r,a,c,"next",e)}function c(e){s(o,n,r,a,c,"throw",e)}a(void 0)}))},function(e){return o.apply(this,arguments)})}],r=[{key:"toolbox",get:function(){return{title:"TikTok",icon:a()}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"rubberFrame",value:function(){console.log("test onload")}}],n&&l(t.prototype,n),r&&l(t,r),e}()})(),r})()}));