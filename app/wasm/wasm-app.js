!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.wasm=r():e.wasm=r()}(this,(()=>(()=>{"use strict";var __webpack_modules__={354:(e,r,t)=>{t.a(e,(async(e,o)=>{try{t.r(r),t.d(r,{default:()=>e});var n=t(653);const e=(await(0,n._)()).exports;o()}catch(e){o(e)}}),1)},653:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{async function instantiate(imports={},runInitializer=!0){const externrefBoxes=new WeakMap;function tryGetOrSetExternrefBox(e,r){if("object"!=typeof e)return r;const t=externrefBoxes.get(e);return void 0!==t?t:(externrefBoxes.set(e,r),r)}const _ref_QGpzLWpvZGEvY29yZQ_=imports["@js-joda/core"]??await __webpack_require__.e(135).then(__webpack_require__.bind(__webpack_require__,135)),js_code={"kotlin.captureStackTrace":()=>(new Error).stack,"kotlin.wasm.internal.throwJsError":(e,r,t)=>{const o=new Error;throw o.message=e,o.name=r,o.stack=t,o},"kotlin.wasm.internal.stringLength":e=>e.length,"kotlin.wasm.internal.jsExportStringToWasm":(e,r,t,o)=>{const n=new Uint16Array(wasmExports.memory.buffer,o,t);let a=0,s=r;for(;a<t;)n.set([e.charCodeAt(s)],a),s++,a++},"kotlin.wasm.internal.importStringFromWasm":(e,r,t)=>{const o=new Uint16Array(wasmExports.memory.buffer,e,r),n=String.fromCharCode.apply(null,o);return null==t?n:t+n},"kotlin.wasm.internal.externrefToDouble":e=>Number(e),"kotlin.wasm.internal.getJsEmptyString":()=>"","kotlin.wasm.internal.externrefToString":e=>String(e),"kotlin.wasm.internal.externrefEquals":(e,r)=>e===r,"kotlin.wasm.internal.externrefHashCode":(()=>{const e=new DataView(new ArrayBuffer(8)),r=new WeakMap;return t=>{if(null==t)return 0;switch(typeof t){case"object":case"function":return function(e){const t=r.get(e);if(void 0===t){const t=4294967296,o=Math.random()*t|0;return r.set(e,o),o}return t}(t);case"number":return function(r){return(0|r)===r?0|r:(e.setFloat64(0,r,!0),(31*e.getInt32(0,!0)|0)+e.getInt32(4,!0)|0)}(t);case"boolean":return t?1231:1237;default:return function(e){for(var r=0,t=0;t<e.length;t++)r=31*r+e.charCodeAt(t)|0;return r}(String(t))}}})(),"kotlin.wasm.internal.isNullish":e=>null==e,"kotlin.wasm.internal.getJsTrue":()=>!0,"kotlin.wasm.internal.getJsFalse":()=>!1,"kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun":(e,r)=>tryGetOrSetExternrefBox(e,r),"kotlin.js.__convertKotlinClosureToJsClosure_((Js?)->Js?)":e=>r=>wasmExports["__callFunction_((Js?)->Js?)"](e,r),"kotlin.js.then_$external_fun":(e,r,t)=>e.then(r,t),"kotlin.js.__convertKotlinClosureToJsClosure_((Js)->Js?)":e=>r=>wasmExports["__callFunction_((Js)->Js?)"](e,r),"kotlin.js.__convertKotlinClosureToJsClosure_(()->Unit)":e=>()=>wasmExports["__callFunction_(()->Unit)"](e),"kotlin.random.initialSeed":()=>Math.random()*Math.pow(2,32)|0,"kotlinx.browser.document_$external_prop_getter":()=>document,"org.w3c.dom.length_$external_prop_getter":e=>e.length,"org.w3c.dom.item_$external_fun":(e,r)=>e.item(r),"org.khronos.webgl.setMethodImplForInt8Array":(e,r,t)=>{e[r]=t},"org.khronos.webgl.getMethodImplForInt8Array":(e,r)=>e[r],"org.khronos.webgl.Int8Array_$external_fun":e=>new Int8Array(e),"org.khronos.webgl.Int8Array_$external_fun_1":(e,r,t,o,n)=>new Int8Array(e,o?void 0:r,n?void 0:t),"org.khronos.webgl.length_$external_prop_getter":e=>e.length,"org.khronos.webgl.ArrayBuffer_$external_class_instanceof":e=>e instanceof ArrayBuffer,"org.w3c.dom.css.display_$external_prop_setter":(e,r)=>e.display=r,"org.w3c.dom.css.style_$external_prop_getter":e=>e.style,"org.w3c.dom.encryptedmedia.__convertKotlinClosureToJsClosure_((Js)->Unit)":e=>r=>wasmExports["__callFunction_((Js)->Unit)"](e,r),"org.w3c.dom.events.target_$external_prop_getter":e=>e.target,"org.w3c.dom.events.Event_$external_class_instanceof":e=>e instanceof Event,"org.w3c.dom.events.MouseEvent_$external_class_instanceof":e=>e instanceof MouseEvent,"org.w3c.dom.id_$external_prop_setter":(e,r)=>e.id=r,"org.w3c.dom.body_$external_prop_getter":e=>e.body,"org.w3c.dom.createElement_$external_fun":(e,r,t,o)=>e.createElement(r,o?void 0:t),"org.w3c.dom.createTextNode_$external_fun":(e,r)=>e.createTextNode(r),"org.w3c.dom.getElementById_$external_fun":(e,r)=>e.getElementById(r),"org.w3c.dom.value_$external_prop_getter":e=>e.value,"org.w3c.dom.value_$external_prop_setter":(e,r)=>e.value=r,"org.w3c.dom.max_$external_prop_getter":e=>e.max,"org.w3c.dom.max_$external_prop_setter":(e,r)=>e.max=r,"org.w3c.dom.HTMLProgressElement_$external_class_instanceof":e=>e instanceof HTMLProgressElement,"org.w3c.dom.ownerDocument_$external_prop_getter":e=>e.ownerDocument,"org.w3c.dom.appendChild_$external_fun":(e,r)=>e.appendChild(r),"org.w3c.dom.HTMLDivElement_$external_class_instanceof":e=>e instanceof HTMLDivElement,"org.w3c.dom.accept_$external_prop_setter":(e,r)=>e.accept=r,"org.w3c.dom.files_$external_prop_getter":e=>e.files,"org.w3c.dom.multiple_$external_prop_setter":(e,r)=>e.multiple=r,"org.w3c.dom.type_$external_prop_setter":(e,r)=>e.type=r,"org.w3c.dom.HTMLInputElement_$external_class_instanceof":e=>e instanceof HTMLInputElement,"org.w3c.dom.click_$external_fun":e=>e.click(),"org.w3c.dom.onchange_$external_prop_setter":(e,r)=>e.onchange=r,"org.w3c.dom.onclick_$external_prop_setter":(e,r)=>e.onclick=r,"org.w3c.dom.clearTimeout_$external_fun":(e,r,t)=>e.clearTimeout(t?void 0:r),"org.w3c.dom.remove_$external_fun":e=>e.remove(),"org.w3c.files.name_$external_prop_getter":e=>e.name,"org.w3c.files.FileReader_$external_fun":()=>new FileReader,"org.w3c.files.result_$external_prop_getter":e=>e.result,"org.w3c.files.onprogress_$external_prop_setter":(e,r)=>e.onprogress=r,"org.w3c.files.onload_$external_prop_setter":(e,r)=>e.onload=r,"org.w3c.files.onerror_$external_prop_setter":(e,r)=>e.onerror=r,"org.w3c.files.readAsText_$external_fun":(e,r,t,o)=>e.readAsText(r,o?void 0:t),"org.w3c.files.FileReader_$external_class_instanceof":e=>e instanceof FileReader,"org.w3c.xhr.loaded_$external_prop_getter":e=>e.loaded,"org.w3c.xhr.total_$external_prop_getter":e=>e.total,"org.w3c.xhr.ProgressEvent_$external_class_instanceof":e=>e instanceof ProgressEvent,"kotlinx.coroutines.tryGetProcess":()=>"undefined"!=typeof process&&"function"==typeof process.nextTick?process:null,"kotlinx.coroutines.tryGetWindow":()=>"undefined"!=typeof window&&null!=window&&"function"==typeof window.addEventListener?window:null,"kotlinx.coroutines.nextTick_$external_fun":(e,r)=>e.nextTick(r),"kotlinx.coroutines.error_$external_fun":(e,r)=>e.error(r),"kotlinx.coroutines.console_$external_prop_getter":()=>console,"kotlinx.coroutines.createScheduleMessagePoster":e=>()=>Promise.resolve(0).then(e),"kotlinx.coroutines.__callJsClosure_(()->Unit)":e=>e(),"kotlinx.coroutines.createRescheduleMessagePoster":e=>()=>e.postMessage("dispatchCoroutine","*"),"kotlinx.coroutines.subscribeToWindowMessages":(e,r)=>{e.addEventListener("message",(t=>{t.source==e&&"dispatchCoroutine"==t.data&&(t.stopPropagation(),r())}),!0)},"kotlinx.coroutines.setTimeout":(e,r,t)=>e.setTimeout(r,t),"kotlinx.coroutines.clearTimeout":e=>{"undefined"!=typeof clearTimeout&&clearTimeout(e)},"kotlinx.coroutines.setTimeout_$external_fun":(e,r)=>setTimeout(e,r),"dev.whyoleg.cryptography.providers.webcrypto.internal.privateKey_$external_prop_getter":e=>e.privateKey,"dev.whyoleg.cryptography.providers.webcrypto.internal.publicKey_$external_prop_getter":e=>e.publicKey,"dev.whyoleg.cryptography.providers.webcrypto.internal.getSubtleCrypto":()=>{var isNodeJs="undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node;return isNodeJs?eval("require")("node:crypto").webcrypto.subtle:(window?window.crypto?window.crypto:window.msCrypto:self.crypto).subtle},"dev.whyoleg.cryptography.providers.webcrypto.internal.digest_$external_fun":(e,r,t)=>e.digest(r,t),"kotlinx.datetime.internal.JSJoda.DateTimeFormatterBuilder_$external_fun":()=>new _ref_QGpzLWpvZGEvY29yZQ_.DateTimeFormatterBuilder,"kotlinx.datetime.internal.JSJoda.appendOffset_$external_fun":(e,r,t)=>e.appendOffset(r,t),"kotlinx.datetime.internal.JSJoda.appendOffsetId_$external_fun":e=>e.appendOffsetId(),"kotlinx.datetime.internal.JSJoda.parseCaseInsensitive_$external_fun":e=>e.parseCaseInsensitive(),"kotlinx.datetime.internal.JSJoda.toFormatter_$external_fun":(e,r)=>e.toFormatter(r),"kotlinx.datetime.internal.JSJoda.STRICT_$external_prop_getter":e=>e.STRICT,"kotlinx.datetime.internal.JSJoda.Companion_$external_object_getInstance":()=>_ref_QGpzLWpvZGEvY29yZQ_.ResolverStyle,"kotlinx.io.node.sep_$external_prop_getter":e=>e.sep,"kotlinx.io.node.requireExists":()=>"function"==typeof require,"kotlinx.io.node.requireModule":e=>{try{return require(e)||null}catch(e){return null}},"io.github.oshai.kotlinlogging.consoleLog":e=>console.log(e),"io.github.oshai.kotlinlogging.consoleInfo":e=>console.info(e),"io.github.oshai.kotlinlogging.consoleWarn":e=>console.warn(e),"io.github.oshai.kotlinlogging.consoleError":e=>console.error(e)};let wasmInstance,require,wasmExports;const isNodeJs="undefined"!=typeof process&&"node"===process.release.name,isStandaloneJsVM=!isNodeJs&&("undefined"!=typeof d8||"undefined"!=typeof inIon||"undefined"!=typeof jscOptions),isBrowser=!isNodeJs&&!isStandaloneJsVM&&"undefined"!=typeof window;if(!isNodeJs&&!isStandaloneJsVM&&!isBrowser)throw"Supported JS engine not detected";const wasmFilePath="./wasm-app.wasm",importObject={js_code};try{if(isNodeJs){const e=await import("node:module");require=e.default.createRequire("file:///home/runner/work/kotlin-mpp-playground/kotlin-mpp-playground/build/js/packages/wasm-app/kotlin/wasm-app.uninstantiated.mjs");const r=require("fs"),t=require("path"),o=require("url"),n=o.fileURLToPath("file:///home/runner/work/kotlin-mpp-playground/kotlin-mpp-playground/build/js/packages/wasm-app/kotlin/wasm-app.uninstantiated.mjs"),a=t.dirname(n),s=r.readFileSync(t.resolve(a,wasmFilePath)),i=new WebAssembly.Module(s);wasmInstance=new WebAssembly.Instance(i,importObject)}if(isStandaloneJsVM){const e=read(wasmFilePath,"binary"),r=new WebAssembly.Module(e);wasmInstance=new WebAssembly.Instance(r,importObject)}isBrowser&&(wasmInstance=(await WebAssembly.instantiateStreaming(fetch(wasmFilePath),importObject)).instance)}catch(e){if(e instanceof WebAssembly.CompileError){let e="Please make sure that your runtime environment supports the latest version of Wasm GC and Exception-Handling proposals.\nFor more information, see https://kotl.in/wasm-help\n";if(isBrowser)console.error(e);else{const r="\n"+e;"undefined"!=typeof console&&void 0!==console.log?console.log(r):print(r)}}throw e}return wasmExports=wasmInstance.exports,runInitializer&&wasmExports._initialize(),{instance:wasmInstance,exports:wasmExports}}__webpack_require__.d(__webpack_exports__,{_:()=>instantiate})}},__webpack_module_cache__={},webpackQueues,webpackExports,webpackError,resolveQueue,inProgress,dataWebpackPrefix;function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,webpackQueues="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",webpackExports="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",webpackError="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",resolveQueue=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},__webpack_require__.a=(e,r,t)=>{var o;t&&((o=[]).d=1);var n,a,s,i=new Set,_=e.exports,l=new Promise(((e,r)=>{s=r,a=e}));l[webpackExports]=_,l[webpackQueues]=e=>(o&&e(o),i.forEach(e),l.catch((e=>{}))),e.exports=l,r((e=>{var r;n=(e=>e.map((e=>{if(null!==e&&"object"==typeof e){if(e[webpackQueues])return e;if(e.then){var r=[];r.d=0,e.then((e=>{t[webpackExports]=e,resolveQueue(r)}),(e=>{t[webpackError]=e,resolveQueue(r)}));var t={};return t[webpackQueues]=e=>e(r),t}}var o={};return o[webpackQueues]=e=>{},o[webpackExports]=e,o})))(e);var t=()=>n.map((e=>{if(e[webpackError])throw e[webpackError];return e[webpackExports]})),a=new Promise((e=>{(r=()=>e(t)).r=0;var a=e=>e!==o&&!i.has(e)&&(i.add(e),e&&!e.d&&(r.r++,e.push(r)));n.map((e=>e[webpackQueues](a)))}));return r.r?a:t()}),(e=>(e?s(l[webpackError]=e):a(_),resolveQueue(o)))),o&&(o.d=0)},__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,t)=>(__webpack_require__.f[t](e,r),r)),[])),__webpack_require__.u=e=>e+".js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),inProgress={},dataWebpackPrefix="wasm:",__webpack_require__.l=(e,r,t,o)=>{if(inProgress[e])inProgress[e].push(r);else{var n,a;if(void 0!==t)for(var s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var _=s[i];if(_.getAttribute("src")==e||_.getAttribute("data-webpack")==dataWebpackPrefix+t){n=_;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",dataWebpackPrefix+t),n.src=e),inProgress[e]=[r];var l=(r,t)=>{n.onerror=n.onload=null,clearTimeout(c);var o=inProgress[e];if(delete inProgress[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},c=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),a&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={179:0};__webpack_require__.f.j=(r,t)=>{var o=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=__webpack_require__.p+__webpack_require__.u(r),s=new Error;__webpack_require__.l(a,(t=>{if(__webpack_require__.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,s,i]=t,_=0;if(a.some((r=>0!==e[r]))){for(o in s)__webpack_require__.o(s,o)&&(__webpack_require__.m[o]=s[o]);i&&i(__webpack_require__)}for(r&&r(t);_<a.length;_++)n=a[_],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=this.webpackChunkwasm=this.webpackChunkwasm||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var __webpack_exports__=__webpack_require__(354);return __webpack_exports__})()));
//# sourceMappingURL=wasm-app.js.map