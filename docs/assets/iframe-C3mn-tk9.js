const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Button.stories-BzLB3NvM.js","./Button-Dlp1m998.js","./index-DZLKizrv.js","./jsx-runtime-CkxqCPlQ.js","./index-DJO9vBfz.js","./Button-BfyGbg8N.css","./Configure-BhctaG7J.js","./index-BrnU7xv7.js","./index-hoLRgqRO.js","./index-BM1xiIVW.js","./index-D-8MO0q_.js","./index-0wbOH00J.js","./index-DrFu-skq.js","./Header.stories-Cqhr-gq5.js","./Header-BeV0Ctx5.js","./Header-BjLH3naM.css","./MyLabel.stories-C-CUbg3e.js","./MyLabel-y1YDYk2q.css","./Page.stories-D7p-U6ZZ.js","./Page-B9ntr4df.css","./entry-preview-DI-3k1yV.js","./react-18-DLVnjSU8.js","./entry-preview-docs-CZAUkRav.js","./preview-BJPLiuSt.js","./preview-9hFJSo5S.js","./preview-DB9FwMii.js","./preview-DE7p7AzZ.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const f="modulepreload",R=function(t,i){return new URL(t,i).href},p={},o=function(i,c,a){let e=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),O=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));e=Promise.all(c.map(s=>{if(s=R(s,a),s in p)return;p[s]=!0;const l=s.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!a)for(let u=r.length-1;u>=0;u--){const m=r[u];if(m.href===s&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":f,l||(n.as="script",n.crossOrigin=""),n.href=s,O&&n.setAttribute("nonce",O),document.head.appendChild(n),l)return new Promise((u,m)=>{n.addEventListener("load",u),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>i()).catch(r=>{const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=r,window.dispatchEvent(_),!_.defaultPrevented)throw r})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,E=L({page:"preview"});T.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const P={"./src/stories/Button.stories.ts":async()=>o(()=>import("./Button.stories-BzLB3NvM.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>o(()=>import("./Configure-BhctaG7J.js"),__vite__mapDeps([6,3,4,7,8,9,10,11,12]),import.meta.url),"./src/stories/Header.stories.ts":async()=>o(()=>import("./Header.stories-Cqhr-gq5.js"),__vite__mapDeps([13,1,2,3,4,5,14,15]),import.meta.url),"./src/stories/MyLabel.stories.ts":async()=>o(()=>import("./MyLabel.stories-C-CUbg3e.js"),__vite__mapDeps([16,3,4,17]),import.meta.url),"./src/stories/Page.stories.ts":async()=>o(()=>import("./Page.stories-D7p-U6ZZ.js"),__vite__mapDeps([18,1,2,3,4,5,14,15,19]),import.meta.url)};async function y(t){return P[t]()}const{composeConfigs:I,PreviewWeb:S,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,V=async(t=[])=>{const i=await Promise.all([t.at(0)??o(()=>import("./entry-preview-DI-3k1yV.js"),__vite__mapDeps([20,4,21,9]),import.meta.url),t.at(1)??o(()=>import("./entry-preview-docs-CZAUkRav.js"),__vite__mapDeps([22,11,4,12]),import.meta.url),t.at(2)??o(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([23,10]),import.meta.url),t.at(3)??o(()=>import("./preview-BTA_ZaKE.js"),[],import.meta.url),t.at(4)??o(()=>import("./preview-Ct5NkTJf.js"),[],import.meta.url),t.at(5)??o(()=>import("./preview-9hFJSo5S.js"),__vite__mapDeps([24,12]),import.meta.url),t.at(6)??o(()=>import("./preview-BnWGZYux.js"),[],import.meta.url),t.at(7)??o(()=>import("./preview-Cdum89jS.js"),[],import.meta.url),t.at(8)??o(()=>import("./preview-DB9FwMii.js"),__vite__mapDeps([25,12]),import.meta.url),t.at(9)??o(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),t.at(10)??o(()=>import("./preview-DE7p7AzZ.js"),__vite__mapDeps([26,2]),import.meta.url),t.at(11)??o(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return I(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new S(y,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};