"use strict";Object.defineProperty(exports, "__esModule", {value: true});var C=Object.defineProperty;var i=(e,o)=>C(e,"name",{value:o,configurable:!0});var _fs = require('fs');var _path = require('path');var y=i(e=>_fs.lstatSync.call(void 0, e).isDirectory(),"isDir"),S=i(e=>_fs.lstatSync.call(void 0, e).isFile(),"isFile");var m=i(e=>_fs.readdirSync.call(void 0, e).reduce((n,s)=>{let t=_path.join.call(void 0, e,s);return S(t)&&n.push({fileName:s,filePath:t}),n},[]),"getFiles");function c(e,o){let n=i(t=>Object.prototype.toString.call(t)==="[object Object]","isObject"),s=i((t,r)=>n(t)&&Reflect.has(t,r),"hasKey");for(let t in o)s(e,t)||(e[t]=o[t]),n(o[t])&&c(e[t],o[t]);return e}i(c,"mergeConfig");function x(e,o){return o.reduce((n,s)=>(n[s]=e.filter(t=>t.fileName.endsWith(".".concat(s))),n),{})}i(x,"extract");var p="vue-cli-plugin-inject-style",j={css:{loaderOptions:{scss:{additionalData:""},less:{additionalData:""}}}},h=i(e=>({[p]:{path:_path.join.call(void 0, e,"src","style"),suffixs:["scss","less"]}}),"getPluginConfig");function F(e,o){let{css:n={},pluginOptions:s={}}=o,t=e.getCwd(),r=c(s,h(t))[p];if(!y(r.path))return;let O=m(r.path),f=x(O,r.suffixs),l=c(n,j.css);Object.keys(f).forEach(a=>{var u;let d=(u=l.loaderOptions[a].additionalData)!=null?u:"";l.loaderOptions[a].additionalData=f[a].map(b=>'@import "'.concat(b.filePath.replace(/\\/g,"/"),'";')).join("")+"".concat(typeof d=="string"?d:"")}),o.css=l}i(F,"injectStyle");var _=F;exports.default = _;

module.exports = exports.default