/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/deepExtend","sap/base/util/JSTokenizer","sap/base/util/ObjectPath","sap/ui/base/BindingInfo","sap/ui/base/BindingParser","sap/ui/base/ManagedObject","sap/ui/base/SyncPromise","sap/ui/core/Component","sap/ui/core/XMLTemplateProcessor","sap/ui/model/BindingMode","sap/ui/model/CompositeBinding","sap/ui/model/Context","sap/ui/performance/Measurement"],function(e,t,n,r,i,o,a,u,s,f,l,c,d,g){"use strict";var p="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1",m="sap.ui.core.util.XMLPreprocessor",h=[m],v=m+"/getResolvedBinding",b=m+"/insertFragment",y=m+".process",x=u.resolve(),w=u.resolve(true),C=Object.prototype.toString,N={},A=a.extend("sap.ui.core.util._with",{metadata:{library:"sap.ui.core",properties:{any:"any"},aggregations:{child:{multiple:false,type:"sap.ui.core.util._with"}}},updateProperty:function(){this.setAny(this.mBindingInfos.any.binding.getExternalValue())}}),M=A.extend("sap.ui.core.util._repeat",{metadata:{library:"sap.ui.core",aggregations:{list:{multiple:true,type:"n/a",_doesNotRequireFactory:true}}},updateList:function(){}});function P(e,t,n,r){function i(t){if(!r){r=e.getBinding("any");if(r instanceof c){r=r.getBindings();if(n!==undefined){r=r[n]}}}return Array.isArray(r)?r[t]:r}function o(e){return e instanceof d?e.getPath():e.getModel().resolve(e.getPath(),e.getContext())}return{_slice:function(e,n){i(0);return!e&&n>=r.length?this:P(null,t,undefined,r.slice(e,n))},getInterface:function(e,n){var o,a,u;if(typeof e==="string"){n=e;e=undefined}i();if(Array.isArray(r)){if(e>=0&&e<r.length){a=r[e]}else{throw new Error("Invalid index of part: "+e)}}else if(e!==undefined){throw new Error("Not the root formatter of a composite binding")}else if(n){a=r}else{throw new Error("Missing path")}if(n){u=a.getModel();if(n.charAt(0)!=="/"){o=a instanceof d?a:u.createBindingContext(a.getPath(),a.getContext())}a=u.createBindingContext(n,o);if(!a){throw new Error("Model could not create binding context synchronously: "+u)}}return P(null,t,undefined,a)},getModel:function(e){var t=i(e);return t&&t.getModel()},getPath:function(e){var t=i(e);return t&&o(t)},getSetting:function(e){if(e==="bindingContexts"||e==="models"){throw new Error("Illegal argument: "+e)}return t[e]}}}function E(e,t,n,r,i){var o=false;function a(t,a){var s=t.formatter,f=t.model,c=e.getModel(f);if(s&&s.requiresIContext===true){s=t.formatter=s.bind(null,P(e,n,a))}if(s&&i&&(c&&c.$$valueAsPromise||a===undefined&&o)){t.formatter=function(){var e=this;return u.all(arguments).then(function(t){return s.apply(e,t)})};t.formatter.textFragments=s.textFragments}t.mode=l.OneTime;t.parameters=t.parameters||{};t.parameters.scope=r;if(i&&c&&c.$$valueAsPromise){o=t.parameters.$$valueAsPromise=true}}try{t.parts.forEach(a);a(t);e.bindProperty("any",t);return u.resolve(e.getAny())}catch(e){return u.reject(e)}finally{e.unbindProperty("any",true)}}function I(e,t){var n=-1;function r(i){if(i){return e[n]}n+=1;if(n<e.length){return t(e[n],n,e).then(r)}}return e.length?r():x}function B(e){var t,n=e.attributes,r="<"+e.nodeName,i,o;for(i=0,o=n.length;i<o;i+=1){t=n.item(i);r+=" "+t.name+'="'+t.value+'"'}return r+(e.childNodes.length?">":"/>")}function F(e,t){return t.visitNode(e)}return{plugIn:function(t,n,r){var i=N[n];if(t!==null&&typeof t!=="function"||t===F){throw new Error("Invalid visitor: "+t)}if(!n||n===p||n==="sap.ui.core"||n.indexOf(" ")>=0){throw new Error("Invalid namespace: "+n)}e.debug("Plug-in visitor for namespace '"+n+"', local name '"+r+"'",t,m);if(r){n=n+" "+r;i=N[n]||i}N[n]=t;return i||F},visitNodeWrapper:F,process:function(a,c,P){var F=c.caller,j=e.isLoggable(e.Level.DEBUG,m),O=j,R=c.name,S={},$,L=0,U={},T=c._supportInfo,q=e.isLoggable(e.Level.WARNING,m);function k(e){return{find:function(e,t){try{return u.resolve(I(e,t))}catch(e){return u.reject(e)}},getContext:function(t){var n,r,i;t=t||"";if(t[0]==="{"){throw new Error("Must be a simple path, not a binding: "+t)}n=o.simpleParser("{"+t+"}");r=e.getModel(n.model);if(!r){throw new Error("Unknown model '"+n.model+"': "+t)}i=r.resolve(n.path,e.getBindingContext(n.model));if(!i){throw new Error("Cannot resolve path: "+t)}return r.createBindingContext(i)},getResult:function(t,n){return G(t,n,e,true)},getSettings:function(){return P},getViewInfo:function(){return t({},c)},insertFragment:function(t,n){return V(t,n,e)},visitAttribute:function(t,n){return oe(t,n,e)},visitAttributes:function(t){return ae(t,e)},visitChildNodes:function(t){return ue(t,e)},visitNode:function(t){try{return se(t,e)}catch(e){return u.reject(e)}},with:function(t,n){var r,i=false,o,a=new A;if(!n){e.setChild(a)}for(o in t){r=t[o];i=true;a.setModel(r.getModel(),o);a.bindObject({model:o,path:r.getPath()})}return i||n?k(a):this}}}function _(t){if(j){e.debug(W()+Array.prototype.slice.call(arguments,1).join(" "),t&&B(t),m)}}function D(t){if(j){e.debug(W()+"Finished","</"+t.nodeName+">",m)}}function X(t,n){t=t+B(n);e.error(t,F,m);throw new Error(F+": "+t)}function J(e){var t,n=Array.prototype.filter.call(e.childNodes,a),r,i,o=false;function a(e){return e.nodeType===1}function u(e,t){return e.namespaceURI===p&&e.localName===t}if(!n.length||!u(n[0],"then")){return null}for(r=1,i=n.length;r<i;r+=1){t=n[r];if(o){X("Expected </"+e.prefix+":if>, but instead saw ",t)}if(u(t,"else")){o=true}else if(!u(t,"elseif")){X("Expected <"+e.prefix+":elseif> or <"+e.prefix+":else>, but instead saw ",n[r])}}return n}function W(){return(L<10?"[ ":"[")+L+"] "}function z(e){return e&&e.charAt(0)==="."?r.get(e.slice(1),U):r.get(e||"",U)||r.get(e||"")}function G(e,t,n,r,a){try{g.average(v,"",h);let s;try{s=o.complexParser(e,U,r,true,true,true,null,!c.sync)}catch(e){return u.reject(e)}let f;if(s){if(!c.sync){if(s.wait){f=u.resolve(s.resolved)}s=s.bindingInfo}if(typeof s==="string"){a?.();return u.resolve(s)}s=i.createProperty(s)}else{a?.();return u.resolve(e)}if(s.functionsNotFound){if(r){fe(t,"Function name(s)",s.functionsNotFound.join(", "),"not found")}return null}const l=s.parts.every(e=>e.value!==undefined||n.getModel(e.model));if(!l){if(r){fe(t,"Binding not ready")}return null}if(!f){const r=E(n,s,P,U,!c.sync);if(c.sync&&r.isPending()){X("Async formatter in sync view in "+e+" of ",t)}return r}return f.then(function(){return E(n,s,P,U,true)})}finally{g.end(v)}}function V(e,t,n){var r,i=c.sync?f.loadTemplate:f.loadTemplatePromise,o=R;n.$mFragmentContexts=n.$mFragmentContexts||{};if(n.$mFragmentContexts[e]){X("Cyclic reference to fragment '"+e+"' ",t)}L++;_(t,"fragmentName =",e);n.$mFragmentContexts[e]=true;R=e;g.average(b,"",h);r=S[e];if(!r){S[e]=r=u.resolve(i(e,"fragment"))}return r.then(function(e){e=t.ownerDocument.importNode(e,true);g.end(b);return Q(e).then(function(){if(e.namespaceURI==="sap.ui.core"&&e.localName==="FragmentDefinition"){return H(e,n,t)}t.parentNode.insertBefore(e,t);return se(e,n)})}).then(function(){t.parentNode.removeChild(t);R=o;n.$mFragmentContexts[e]=false;D(t);L-=1})}function H(e,t,n){return ue(e,t).then(function(){var t;n=n||e;while(t=e.firstChild){n.parentNode.insertBefore(t,n)}})}function K(e,t){var n=fe.bind(null,e,"Constant test condition"),r=G(e.getAttribute("test"),e,t,true,n)||u.resolve(false);return r.catch(function(t){fe(e,"Error in formatter:",t)}).then(function(t){var n=!!t&&t!=="false";if(j){if(typeof t==="string"){t=JSON.stringify(t)}else if(t===undefined){t="undefined"}else if(Array.isArray(t)){t="[object Array]"}_(e,"test ==",t,"--\x3e",n)}return n})}function Q(e){var t={},r=e.getAttributeNodeNS(p,"require"),i,o;function a(){return new u(function(e,t){var n=o.map(sap.ui.require);if(n.every(Boolean)){e(n)}else{sap.ui.require(o,function(){e(arguments)},t)}}).then(function(e){Object.keys(t).forEach(function(t,n){U[t]=e[n]})})}if(r&&r.value){i=r.value;e.removeAttributeNode(r);if(i[0]==="{"){t=n.parseJS(i);o=Object.keys(t).map(function(e){return t[e]});return a()}o=i.split(" ").map(function(e){return e.replace(/\./g,"/")});if(!c.sync){return a()}o.forEach(sap.ui.requireSync)}return x}function Y(e,t,n){var r=G(t.value,e,n,false);if(!r){_(e,"Binding not ready for attribute",t.name);return x}return r.then(function(n){if(n===null||n===undefined){_(e,"Removed attribute",t.name);e.removeAttributeNode(t)}else if(n!==t.value){switch(typeof n){case"boolean":case"number":case"string":_(e,t.name,"=",n);t.value=n;break;default:_(e,"Ignoring",C.call(n),"value for attribute",t.name)}}},function(n){_(e,"Error in formatter of attribute",t.name,n)})}function Z(e,t){var n=e.getAttribute("name"),r,i,o=e.getAttribute("value");if(n&&n[0]==="."){n=n.slice(1)}if(!n||n.includes(".")){X("Missing proper relative name in ",e)}r=z(o);if(!r){X("Invalid value in ",e)}i=U[n];U[n]=r;return H(e,t).then(function(){e.parentNode.removeChild(e);U[n]=i})}function ee(e,t){var n=e.getAttribute("name"),r=G(n,e,t,true);if(!r){return w}return r.then(function(r){var i;if(r!==n){_(e,"name =",r)}i=s.getCustomizing(c.componentId,{extensionName:r,name:R,type:"sap.ui.viewExtensions"});if(i&&i.className==="sap.ui.core.Fragment"&&i.type==="XML"){return V(i.fragmentName,e,t)}return true},function(t){fe(e,"Error in formatter:",t);return true})}function te(e,t){var n=e.getAttribute("fragmentName"),r=G(n,e,t,true);if(!r){return x}return r.then(function(n){var r=U;U=Object.create(U);return V(n,e,t).then(function(){U=r})},function(t){fe(e,"Error in formatter:",t)})}function ne(e,t){L++;return I(J(e)||[e],function(n){if(n.localName==="else"){return w}if(n.localName==="then"){n=e}return K(n,t)}).then(function(n){return(n?H(n,t,e):x).then(function(){e.parentNode.removeChild(e);D(e);L-=1})})}function re(e,t){var n=e.getAttribute("list")||"",r=o.complexParser(n,U,false,true,true,true),i,a,s,f,d,g=e.getAttribute("var");if(g===""){X("Missing variable name for ",e)}if(!r){X("Missing binding for ",e)}if(r.functionsNotFound){fe(e,"Function name(s)",r.functionsNotFound.join(", "),"not found")}f=new M;t.setChild(f);r.mode=l.OneTime;f.bindAggregation("list",r);a=f.getBinding("list");f.unbindAggregation("list",true);s=r.model;if(!a){X("Missing model '"+s+"' in ",e)}a.enableExtendedChangeDetection();i=a.getContexts(r.startIndex,r.length||Infinity);if(!c.sync&&i.dataRequested){d=new u(function(e){a.attachEventOnce("change",e)}).then(function(){return a.getContexts(r.startIndex,r.length)})}else{d=u.resolve(i)}g=g||s;f.setModel(a.getModel(),g);L++;_(e,"Starting");return d.then(function(t){return I(t,function(n,r){var i=r===t.length-1?e:e.cloneNode(true);f.setBindingContext(n,g);_(e,g,"=",n.getPath());return H(i,f,e)}).then(function(){D(e);L-=1;e.parentNode.removeChild(e)})})}function ie(e,t){var n,r,i,a,s=e.getAttribute("helper"),f,l=e.getAttribute("path"),g,p,m=e.getAttribute("var");if(m===""){X("Missing variable name for ",e)}i=new A;t.setChild(i);n=o.simpleParser("{"+l+"}");m=m||n.model;if(s||m){r=t.getModel(n.model);if(!r){X("Missing model '"+n.model+"' in ",e)}p=r.resolve(n.path,t.getBindingContext(n.model));if(!p){X("Cannot resolve path for ",e)}f=r.createBindingContext(p);if(s){a=z(s);if(typeof a!=="function"){X("Cannot resolve helper for ",e)}f=a(f)}g=u.resolve(f);if(c.sync&&g.isPending()){X("Async helper in sync view in ",e)}g=g.then(function(t){if(t instanceof d){r=t.getModel();p=t.getPath()}else if(t!==undefined){if(typeof t!=="string"||t===""){X("Illegal helper result '"+t+"' in ",e)}p=t}i.setModel(r,m);i.bindObject({model:m,path:p})})}else{p=l;i.bindObject(p);g=x}return g.then(function(){L++;_(e,m,"=",p);if(i.getBindingContext(m)===t.getBindingContext(m)){fe(e,"Set unchanged path:",p);i=t}return H(e,i).then(function(){e.parentNode.removeChild(e);D(e);L-=1})})}function oe(e,t,n){if(T){T({context:undefined,env:{caller:"visitAttribute",before:{name:t.name,value:t.value}}})}return Y(e,t,n).then(function(){if(T){T({context:undefined,env:{caller:"visitAttribute",after:{name:t.name,value:t.value}}})}})}function ae(e,t){function n(e,t){return e.name.localeCompare(t.name)}return I(Array.prototype.slice.apply(e.attributes).sort(n),function(n){return oe(e,n,t)})}function ue(e,t){return I(Array.prototype.slice.apply(e.childNodes),function(e){return se(e,t)})}function se(e,t){var n;function r(){return ae(e,t).then(function(){return ue(e,t)}).then(function(){if(T){T({context:e,env:{caller:"visitNode",after:{name:e.tagName}}})}})}if(e.nodeType!==1){return x}if(T){T({context:e,env:{caller:"visitNode",before:{name:e.tagName}}})}if(e.namespaceURI===p){switch(e.localName){case"alias":return Z(e,t);case"if":return ne(e,t);case"repeat":return re(e,t);case"with":return ie(e,t);default:X("Unexpected tag ",e)}}else if(e.namespaceURI==="sap.ui.core"){switch(e.localName){case"ExtensionPoint":return ee(e,t).then(function(e){if(e){return r()}});case"Fragment":if(e.getAttribute("type")==="XML"){return te(e,t)}break}}else{n=N[e.namespaceURI+" "+e.localName]||N[e.namespaceURI];if(n){L++;_(e,"Calling visitor");return n(e,k(t)).then(function(t){if(t!==undefined){X("Unexpected return value from visitor for ",e)}D(e);L-=1})}}return r()}function fe(t){if(q){if(!O){O=true;e.warning("Warning(s) during processing of "+F,null,m)}e.warning(W()+Array.prototype.slice.call(arguments,1).join(" "),t&&B(t),m)}}g.average(y,"",h);P=P||{};if(j){_(undefined,"Start processing",F);if(P.bindingContexts instanceof d){_(undefined,"undefined =",P.bindingContexts)}else{for($ in P.bindingContexts){_(undefined,$,"=",P.bindingContexts[$])}}}if(T){T({context:a,env:{caller:"view",viewinfo:t({},c),settings:t({},P),clone:a.cloneNode(true),type:"template"}})}return Q(a).then(function(){return se(a,new A({models:P.models,bindingContexts:P.bindingContexts}))}).then(function(){_(undefined,"Finished processing",F);g.end(y);return a}).unwrap()}}},true);
//# sourceMappingURL=XMLPreprocessor.js.map