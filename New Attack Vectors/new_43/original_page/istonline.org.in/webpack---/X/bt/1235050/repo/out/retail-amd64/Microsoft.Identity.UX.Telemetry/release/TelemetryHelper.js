!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Telemetry=e():(t.Microsoft=t.Microsoft||{},t.Microsoft.Identity=t.Microsoft.Identity||{},t.Microsoft.Identity.UX=t.Microsoft.Identity.UX||{},t.Microsoft.Identity.UX.Telemetry=e())}(window,(function(){return function(t){function e(e){for(var n,r,o=e[0],s=e[1],a=0,c=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(p&&p(e);c.length;)c.shift()()}var n={},i={1:0,0:0};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=r.p+"oneDs_8363475333f6d315e7ae.js";var p=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(c);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}i[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var o=window.telemetry_webpackJsonp=window.telemetry_webpackJsonp||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var a=0;a<o.length;a++)e(o[a]);var p=s;return r(r.s=4)}([function(t,e){var n;!function(t){t.AddListener=function(t,e,n){if(t&&"function"==typeof t.addEventListener)t.addEventListener(e,n);else{if(!t||!t.attachEvent)throw"Browser supports neither addEventListener nor attachEvent";t.attachEvent("on"+e,n)}},t.GenerateGUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e,n,i=(e=0,n=16,Math.floor(Math.random()*Math.floor(n-e))+e);return"y"===t&&(i&=11),i.toString(16)}))},Object.keys||(Object.keys=function(){"use strict";var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=n.length;return function(r){if("function"!=typeof r&&("object"!=typeof r||null===r))throw new TypeError("Object.keys called on non-object");var o,s,a=[];for(o in r)t.call(r,o)&&a.push(o);if(e)for(s=0;s<i;s++)t.call(r,n[s])&&a.push(n[s]);return a}}()),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){if(null==this)throw new TypeError("'this' is null or not defined");var n=this.length>>>0;for(e=+e||0,Math.abs(e)===1/0&&(e=0),e<0&&(e+=n)<0&&(e=0);e<n;e++)if(this[e]===t)return e;return-1})}(n||(n={})),e.AddListener=n.AddListener,e.GenerateGUID=n.GenerateGUID},function(t,e,n){var i,r=window.ServerData||{},o=window.document.querySelector("script[nonce]"),s=o?o.nonce||o.getAttribute("nonce"):void 0;n.nc=s,n.p=(r.urlCdn||r.a)+"content/js/",function(t){var e=n(0),i=window,r=function(){function t(t){this._preSendHandlers=[],this._eventProvider=t}return t.prototype.initialize=function(t){return this._eventApiConfig=t,this._eventDict={},this._eventProvider.initialize(t)},t.prototype.set=function(t,e,n){void 0===n&&(n="data");void 0===this._eventDict[n]&&(this._eventDict[n]={}),null!=e&&(this._eventDict[n][t]=e)},t.prototype.get=function(t,e){return void 0===e&&(e="data"),this._eventDict[e][t]},t.prototype.hasEvents=function(){return this._numEvents()>0},t.prototype.hasEvent=function(t,e){return void 0===e&&(e="data"),void 0!==this._eventDict[e][t]},t.prototype.clear=function(){this._eventDict={}},t.prototype.post=function(t,e){for(var n=0,i=this._preSendHandlers;n<i.length;n++){(0,i[n])(e)}if(this.hasEvents()){var r=[];if(t){var o=this._eventDict.data;delete this._eventDict.data,r=[o,this._eventDict.cloud,this._eventDict.app],this.validKeysPresent(r)&&this._eventProvider.post({name:t,data:o,ext:this._eventDict})}else r=[this._eventDict.cloud,this._eventDict.app],this.validKeysPresent(r)&&this._eventProvider.post(this._eventDict);this.clear()}},t.prototype.validKeysPresent=function(t){for(var e=/^\w+$/,n=0;n<t.length;n++)for(var i in t[n])if(t[n].hasOwnProperty(i)&&!e.test(i))return!1;return!0},t.prototype.addPreSendHandler=function(t,e){this._preSendHandlers.push((function(n){t(e,n)}))},t.prototype._numEvents=function(){return Object.keys(this._eventDict).length},t}();t.EventApi=r;var o=function(){function t(){this._iduxProviderUrl="https://js.monitor.azure.com/scripts/c/ms.analytics-web-2.min.js",this._isAppInsightsLoaded=!1,this._pendingEventQueue=[]}return t.prototype.initialize=function(t){var r=this,o=this;return this._args=t,i.Telemetry.appInsights?(o._isAppInsightsLoaded=!0,!0):(this._args.providerUrl?o._checkIfOneDsScriptExists(this._args.providerUrl)?o._initializeAppInsights(new i.oneDS.AppInsightsCore,new i.oneDS.PostChannel):e.AddListener(i,"load",(function(){var t=i.document.createElement("script");t.src=r._args.providerUrl||r._iduxProviderUrl,t.type="text/javascript",s&&t.setAttribute("nonce",s),e.AddListener(t,"load",(function(){o._initializeAppInsights(new i.oneDS.AppInsightsCore,new i.oneDS.PostChannel)})),i.document.body.appendChild(t)})):n.e(2).then(function(){var t=n(2),e=n(3);o._initializeAppInsights(new t.AppInsightsCore,new e.PostChannel)}.bind(null,n)).catch(n.oe),!0)},t.prototype.post=function(t){this._isAppInsightsLoaded?this._postToAppInsights([t]):this._pendingEventQueue.push(t)},t.prototype._postToAppInsights=function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];this._isAppInsightsManager(i.Telemetry.appInsights)?(this._appInsights||(this._appInsights=i.Telemetry.appInsights.newInst(this._args.appInsightsConfig.instrumentationKey,[],[])),this._appInsights.track(r)):i.Telemetry.appInsights.track(r)}},t.prototype._initializeAppInsights=function(t,e){i.Telemetry.appInsights||(this._args.appInsightObject?i.Telemetry.appInsights=this._args.appInsightObject:i.Telemetry.appInsights=this._createAppInsightsCore(t,e)),this._isAppInsightsLoaded=!0,this._pendingEventQueue.length>0&&this._postToAppInsights(this._pendingEventQueue)},t.prototype._checkIfOneDsScriptExists=function(t){for(var e=document.getElementsByTagName("script"),n=0;n<e.length;n++)if(e[n].src===t)return!0;return!1},t.prototype._isAppInsightsManager=function(t){return"function"==typeof t.newInst},t.prototype._createAppInsightsCore=function(t,e){var n={instrumentationKey:this._args.appInsightsConfig.instrumentationKey,extensions:[e],extensionConfig:[]};return n.extensionConfig[e.identifier]={eventsLimitInMem:50},this._args.appInsightsConfig&&(n.extensionConfig=this._args.appInsightsConfig),t.initialize(n,[]),t},t}();t.OneDSEventProvider=o;var a=function(){function t(){}return t.prototype.initialize=function(){return!0},t.prototype.post=function(){},t}();t.EmptyEventProvider=a}(i||(i={})),e.EventApi=i.EventApi,e.OneDSEventProvider=i.OneDSEventProvider,e.EmptyEventProvider=i.EmptyEventProvider},,,function(t,e,n){var i;!function(t){var e=n(0),i=n(1),r=i.EventApi,o=i.EmptyEventProvider,s=i.OneDSEventProvider,a=window,p=n(5),c=function(){function t(t){var e=this;if(this._nonIndexedDataPoint={},this._enabled=!0,this._clientEventsConfig=t||{},this._enabled=this._clientEventsConfig.telemetryEnabled,this._enabled){if(this._clientEventsConfig.useOneDSEventApi?this._eventApi=new r(new s):this._eventApi=new r(new o),this._serverPageID=this._clientEventsConfig.hostPageID?this._clientEventsConfig.hostPageID.toString():"",this._serviceID=this._clientEventsConfig.serviceID?this._clientEventsConfig.serviceID.toString():"",this._eventApi.initialize(this._clientEventsConfig),this.addPreSendHandler((function(t){e._setPerRequestDataPoints(t)})),this._clientEventsConfig.autoPost){var n=this;setInterval((function(){(n.hasPageEvents()||n._eventApi.hasEvents())&&n.post(!1)}),this._clientEventsConfig.flush)}this._addUnloadHandlers()}}return t.prototype.get=function(t,e,n){if(void 0===e&&(e="data"),void 0===n&&(n=!1),this._enabled)return n?this._eventApi.get(t,e):this._nonIndexedDataPoint[t]},t.prototype.set=function(t,e,n,i){void 0===n&&(n=!1),this._enabled&&(n?this._eventApi.set(t,e,i):this._nonIndexedDataPoint[t]=e)},t.prototype.append=function(t,e,n){var i;(void 0===n&&(n=!1),this._enabled)&&((i=n?this._eventApi.get(t):this._nonIndexedDataPoint[t])?i instanceof Array||(i=[i]):i=[],i.push(e),n?this._eventApi.set(t,i):this._nonIndexedDataPoint[t]=i)},t.prototype.appendClientEvent=function(t,e,n){if(this._enabled){this._isNumeric(t)&&(t=this._getNumericValue(t));var i="number"==typeof t?t:a.Telemetry.EClientEvent[t];this.append("ClientEvents",{ID:i,EventTime:this._getCurrentTime(),Value:e,DataViewID:n})}},t.prototype.addPreSendHandler=function(t,e){if(this._enabled){this._eventApi.addPreSendHandler((function(e,n){t(n&&n.isViewTransition,e)}),e)}},t.prototype.post=function(t,e){if(this._enabled){e=e||this._clientEventsConfig.defaultEventName;var n=Object.keys(this._nonIndexedDataPoint).length;(n>0&&t||n>=this._clientEventsConfig.minEvents)&&(this._eventApi.set(p.NonIndexedDataPointKey,JSON.stringify(this._nonIndexedDataPoint)),this._nonIndexedDataPoint={}),this._eventApi.hasEvents()&&this._eventApi.post(e,{isViewTransition:t})}},t.prototype.postPageView=function(t,e){this._enabled&&(e=e||this._clientEventsConfig.defaultEventName,this.set("ViewID",t,!0),this._eventApi.post(e,!1))},t.prototype.applyClientEventBindings=function(t){if(this._enabled)for(var n=this,i=t.querySelectorAll("["+p.ReportEventIdAttr+"]"),r=t.getAttribute(p.DataViewId)?t.getAttribute(p.DataViewId):"",o=function(t){var o=i[t];if(o.getAttribute(p.ReportEventHandlerAttachedAttr))return{value:void 0};var s=o.getAttribute(p.ReportEventIdAttr),a=o.getAttribute(p.ReportEventValueAttr),c=o.getAttribute(p.ReportEventTriggerAttr);if(a){if(0===a.indexOf(p.ReportEventValueAttrBinding)){var u=a.slice(p.ReportEventValueAttrBinding.length).trim();a=o.getAttribute(u)}}else a=n._inferClientEventValue(o);var d=[p.Click,p.Dblclick,p.Keypress,p.Cut,p.Copy,p.Paste,p.Change,p.Focus,p.Scroll,p.Submit,p.Reset],h=c&&c.split(",")||[p.Click];if(h.length>0)for(var l=function(t){-1!==h.indexOf(d[t])&&(e.AddListener(o,d[t],(function(){var e;e=d[t],a||(a=e),n.appendClientEvent(s,a,r)})),o.setAttribute(p.ReportEventHandlerAttachedAttr,"1"))},v=0;v<d.length;v++)l(v)},s=0;s<i.length;s++){var a=o(s);if("object"==typeof a)return a.value}},t.prototype._getCurrentTime=function(){return Date.now?Date.now():(new Date).getTime()},t.prototype.hasPageEvents=function(){return Object.keys(this._nonIndexedDataPoint).length>0},t.prototype._addUnloadHandlers=function(){var t=this,n=function(){t.post(!0)};e.AddListener(a.document,"visibilitychange",(function(){"hidden"===a.document.visibilityState&&n()})),e.AddListener(a,"pagehide",n)},t.prototype._inferClientEventValue=function(t){var e;if(t)switch(t.tagName.toLowerCase()){case p.Input:t instanceof HTMLInputElement?t.type!==p.Radio&&t.type!==p.Checkbox||(e=t.checked?"checked":"unchecked"):t instanceof HTMLButtonElement&&(e=t.type===p.Button?"clicked":t.getAttribute(p.ReportEventIdAttr));break;case p.A:t instanceof HTMLAnchorElement&&(e="clicked");break;default:e=t.getAttribute(p.ReportEventIdAttr)}return e},t.prototype._setPerRequestDataPoints=function(t){this.set("ServerPageID",this._serverPageID,!0,"data"),this.set("PageName",this._clientEventsConfig.pageName,!0,"data"),this.set("ServiceID",this._serviceID,!0,"data"),this.set("id",this._clientEventsConfig.appId,!0,"app"),this.set("ver",this._clientEventsConfig.serverDetails.version,!0,"app"),this.set("name",this._clientEventsConfig.defaultEventName,!0,"app"),this.set("sesId",this._getCorrelationID(),!0,"app"),this.set("userId","p: "+this._clientEventsConfig.actorID,!0,"app"),this.set("env",this._clientEventsConfig.environment,!0,"app"),this.set("role",this._getCloudrole(),!0,"cloud"),this.set("roleInstance",this._clientEventsConfig.serverDetails.roleInstance,!0,"cloud"),this.set("roleVer",this._clientEventsConfig.serverDetails.version,!0,"cloud")},t.prototype._getCloudrole=function(){return this._clientEventsConfig.serverDetails.datacenter||"-"},t.prototype._getCorrelationID=function(){var t=this._clientEventsConfig.correlationID;return t||(t=e.GenerateGUID(),this._clientEventsConfig.correlationID=t),t},t.prototype._isNumeric=function(t){return!isNaN(t)},t.prototype._getNumericValue=function(t){return Number(t)},t}();t.TelemetryHelper=c}(i||(i={})),e.TelemetryHelper=i.TelemetryHelper},function(t,e){t.exports={ReportEventIdAttr:"data-report-event",ReportEventValueAttr:"data-report-value",ReportEventTriggerAttr:"data-report-trigger",ReportEventValueAttrBinding:"attr:",ReportEventHandlerAttachedAttr:"data-report-attached",DataViewId:"data-viewid",NonIndexedDataPointKey:"Data",Click:"click",Dblclick:"dblclick",Keypress:"keypress",Cut:"cut",Copy:"copy",Paste:"paste",Change:"change",Focus:"focus",Scroll:"scroll",Submit:"submit",Reset:"reset",Input:"input",A:"a",Radio:"radio",Checkbox:"checkbox",Button:"button"}}])}));
//# sourceMappingURL=TelemetryHelper.js.map