/*! For license information please see 95.js.LICENSE.txt */
"use strict";(self.webpackChunkdetails=self.webpackChunkdetails||[]).push([[95],{95:(t,e,n)=>{function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e),n.d(e,{default:()=>w});var a=n(416),o=n(379),i=n.n(o),c=n(795),s=n.n(c),l=n(569),d=n.n(l),u=n(565),f=n.n(u),p=n(216),h=n.n(p),m=n(589),v=n.n(m),_=n(383),y={};y.styleTagTransform=v(),y.setAttributes=f(),y.insert=d().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=h(),i()(_.Z,y),_.Z&&_.Z.locals&&_.Z.locals;var g=n(699),x=n(893),b=function(t){var e=t.forecast,n=(0,g.useAppContext)().theme,r=new Date(e.date).toLocaleDateString("en-US",{weekday:"long"});return(0,x.jsxs)("div",{className:"details_card card_".concat(n),children:[!e&&(0,x.jsx)("div",{children:"Loading data"}),e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"details_day_label",children:r}),(0,x.jsx)("div",{className:"details_date_label",children:e.date}),(0,x.jsxs)("div",{className:"forecast_details",children:[(0,x.jsx)("img",{src:e.day.condition.icon,className:"details_weather_img",alt:"weather_logo"}),(0,x.jsxs)("div",{className:"forecast_condition_wrapper",children:[(0,x.jsxs)("div",{className:"forecast_temperature_label",children:[e.day.avgtemp_c,"°C"]}),(0,x.jsx)("div",{className:"forecast_condition_text_label",children:e.day.condition.text})]})]})]})]})};const w=function(){var t,e,n=(0,g.useAppContext)(),o=n.theme,i=n.selectedCity,c=n.fetchWeatherData,s=(t=(0,a.useState)([]),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,i,c=[],s=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);s=!0);}catch(t){l=!0,a=t}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=s[0],d=s[1];return(0,a.useEffect)((function(){return i&&c(i).then((function(t){return d(t.forecast.forecastday)})),function(){d([])}}),[i]),(0,x.jsx)("div",{className:"forecast_container forecast_container_".concat(o),children:i&&l.length&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h2",{className:"details_title_".concat(o),children:"Details"}),(0,x.jsx)("div",{className:"details_cards_container",children:l.map((function(t,e){return(0,x.jsx)(b,{forecast:t},"forecast_".concat(e))}))})]})})}},383:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,".forecast_container {\n\twidth: 100%;\n\tmin-height: 600px;\n\tbackground-color: rgba(53, 48, 48, 0.8);\n\t/* padding: 20px; */\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n.forecast_container_dark {\n\tbackground-color: #333;\n}\n.forecast_container_light {\n\tbackground-color: rgba(235, 235, 237, 0.2);\n}\n\n.forecast_temperature_label {\n\tmargin-top: 5px;\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n}\n\n.details_day_label {\n\t/* margin-top: 20px; */\n\tfont-size: 1.2rem;\n\tfont-weight: 700;\n}\n.details_date_label {\n\t/* margin-top: 20px; */\n\tfont-size: 1.1rem;\n\tfont-weight: 300;\n\topacity: 0.5;\n}\n\n.details_title_dark {\n\tcolor: #eee;\n\tfont-size: 1.3rem;\n\tfont-weight: 600;\n}\n.details_title_light {\n\tcolor: #333;\n\tfont-size: 1.3rem;\n\tfont-weight: 600;\n}\n\n.details_weather_img {\n\twidth: 60px;\n\theight: 60px;\n\tmargin-right: 10px;\n}\n.details_cards_container {\n\twidth: 100%;\n\tpadding-top: 20px;\n\tdisplay: flex;\n\tjustify-content: space-around;\n}\n\n.forecast_condition_text_label {\n\tfont-size: 1rem;\n\tfont-weight: 200;\n\topacity: 1;\n}\n.forecast_details {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: 20px;\n}\n.details_card {\n\tposition: relative;\n\tpadding: 20px;\n\twidth: 250px;\n\theight: 200px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-size: 1.4rem;\n\tcursor: pointer;\n}\n\n.card_light {\n\tcolor: #333;\n\tborder: 1px solid rgba(0, 10, 20, 0.2);\n\tbox-shadow: 1px 3px 3px rgba(0, 10, 20, 0.06);\n}\n.card_dark {\n\tcolor: #eee;\n\tborder: 1px solid rgba(238, 238, 238, 0.2);\n\tbox-shadow: 1px 3px 3px rgba(238, 238, 238, 0.06);\n}\n\n.forecast_condition_wrapper {\n\tmin-width: 50%;\n\tmax-width: 50%;\n\tflex: 1;\n}\n",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},251:(t,e,n)=>{var r=n(416),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(d=e.ref),e)i.call(e,r)&&!s.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:a,type:t,key:l,ref:d,props:o,_owner:c.current}}e.Fragment=o,e.jsx=l,e.jsxs=l},893:(t,e,n)=>{t.exports=n(251)},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var f=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=a(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var c=n(o[i]);e[c].references--}for(var s=r(t,a),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);