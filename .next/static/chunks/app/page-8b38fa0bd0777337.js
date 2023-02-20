(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9020:function(e,t,r){Promise.resolve().then(r.bind(r,7199))},7199:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(1844),o=r(9332),u=r(5784);let s=async(e,t)=>{await fetch("/api/todo/add",{method:"POST",body:JSON.stringify({name:e})}),t()};function i(){let e=(0,o.useRouter)(),[t,r]=(0,u.useState)("");return(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"text",onChange:e=>r(e.target.value),value:t}),(0,n.jsx)("button",{onClick:async()=>{await s(t,e.refresh),r("")},children:"Add"})]})}},9803:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(5784),o=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,f={},a=null,c=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,n)&&!i.hasOwnProperty(n)&&(f[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===f[n]&&(f[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:c,props:f,_owner:s.current}}t.jsx=f,t.jsxs=f},1844:function(e,t,r){"use strict";e.exports=r(9803)},9332:function(e,t,r){e.exports=r(19)}},function(e){e.O(0,[17,744],function(){return e(e.s=9020)}),_N_E=e.O()}]);