(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9559:function(e,t,n){Promise.resolve().then(n.bind(n,4078))},4078:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(9268);function a(e){return(0,o.jsxs)("button",{className:"group relative inline-block text-sm font-medium text-stone-500 focus:outline-none focus:ring active:text-stone-400",onClick:e.onClick,children:[(0,o.jsx)("span",{className:"absolute inset-0 translate-x-0 translate-y-0 bg-stone-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"}),(0,o.jsx)("span",{className:"relative block border border-current bg-white px-8 py-3 text-stone-800",children:e.text})]})}function r(){let e=new Date,t=e.toLocaleDateString(void 0,{weekday:"long"});switch(t){case"Monday":return"Munchday";case"Tuesday":return"Tunchday";case"Wednesday":return"Catalina day";case"Thursday":return"Thunchday";case"Friday":return"Fryday";default:return"Hope you're not working today..."}}var s=n(6006);function i(){let[e,t]=(0,s.useState)("Loading..."),[n,i]=(0,s.useState)("Loading...");(0,s.useEffect)(()=>{fetch("http://heapsgoodservers.com:1338/choose").then(e=>e.json()).then(e=>{"Catalina day"==r()?(t("Catalina (let me eat ya)"),i("nice try - still Catalina")):(t(e.choices.standard),i(e.choices.woolies))})},[]);let c="text-white bg-red-500 tracking-tighter font-black text-3xl italic",l="lowercase tracking-tight text-stone-800 text-xl";return(0,o.jsxs)("main",{className:"flex min-h-screen flex-col items-center p-10 bg-yellow-200",children:[(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("h1",{className:"text-stone-800 tracking-tighter uppercase font-black text-5xl",children:"Food Decision Making Machine"}),(0,o.jsx)("h2",{className:"text-stone-600 text-2xl tracking-tight lowercase",children:function(){let e=r(),t=["Happy ".concat(e,"!"),"Wow, as if it's already ".concat(e),"Hooray for ".concat(e,"!"),"What are we eating on this fine ".concat(e,"?"),"The Rat Dog better not have brought lunch on this historic ".concat(e,"..."),">python food.py -w","Are the towels on the Titanic wet?","NAAUUURGGHHH!","better that the original","AMP CHAFF!","instead of having dessert, just have more main","tony said he'd drive","Drinking game: take a shot every time Matt runs into someone he knows","If Matt's upstairs, we're not waiting for him","And to wash this down, how about a nice ALC?","Chris Mathie","Tim Allen","Conduit pods","Bitbucket proxy is down again, brad run the macro","I won't be mad, just give me my jacket back!","Why would someone STEAL a jacket?!"],n=Math.floor(Math.random()*t.length);return"Hope you're not working today..."==e?e:t[n]}()})]}),(0,o.jsx)("div",{className:"flex-col items-center text-center p-10",children:(0,o.jsxs)("div",{className:"max-w-md border-2 border-stone-800 bg-white p-10",children:[(0,o.jsxs)("h1",{className:l,children:["You're going to ",(0,o.jsx)("span",{className:c,children:e})," for lunch, unless you need to go to woolies."]}),(0,o.jsxs)("h1",{className:l,children:["If you need to go to woolies, you're going to ",(0,o.jsx)("span",{className:c,children:n})]})]})}),(0,o.jsx)("div",{className:"p-8 items-center",children:(0,o.jsx)(a,{text:"Veto",onClick:()=>window.location.reload()})})]})}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(6006),a=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,c={},l=null,h=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,o)&&!i.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:a,type:e,key:l,ref:h,props:c,_owner:s.current}}t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[667,139,744],function(){return e(e.s=9559)}),_N_E=e.O()}]);