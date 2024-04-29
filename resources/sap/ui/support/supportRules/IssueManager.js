/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/deepExtend","sap/ui/base/Object","sap/ui/support/library","sap/ui/support/supportRules/Constants"],function(e,t,i,r){"use strict";var s=[];var u=function(e){var t=sap.ui.getCore().byId(e.context.id),i="";if(e.context.id==="WEBPAGE"){i="sap.ui.core"}else if(t){i=t.getMetadata().getName()}return{severity:e.severity,name:e.rule.title,description:e.rule.description,resolution:e.rule.resolution,resolutionUrls:e.rule.resolutionurls,audiences:e.rule.audiences,categories:e.rule.categories,details:e.details,ruleLibName:e.rule.libName,ruleId:e.rule.id,async:e.rule.async===true,minVersion:e.rule.minversion,context:{className:i,id:e.context.id}}};var n={addIssue:function(e){s.push(e)},walkIssues:function(e){s.forEach(e)},clearIssues:function(){s=[]},getIssues:function(){return s.slice()},getIssuesModel:function(){var e=[];this.walkIssues(function(t){e.push(u(t))});return e},getRulesViewModel:function(t,i,r){var s={},u=0,n={},o={},a={},l=e({},t),d=e({},r);for(n in l){s[n]=e({},l[n].ruleset._mRules);o=s[n];Object.defineProperty(o,"selected",{enumerable:false,configurable:true,writable:true,value:false});Object.defineProperty(o,"issueCount",{enumerable:false,configurable:true,writable:true,value:0});for(a in l[n].ruleset._mRules){o[a]=e([],o[a]);Object.defineProperty(o[a],"selected",{enumerable:false,configurable:true,writable:true,value:false});Object.defineProperty(o[a],"issueCount",{enumerable:false,configurable:true,writable:true,value:0});if(i[a]){o[a].selected=true;o.selected=true}if(d[n]&&d[n][a]){o[a].push.apply(o[a],d[n][a]);u=d[n][a].length;o[a].issueCount=u;o.issueCount+=u}}}return s},getTreeTableViewModel:function(e){var t=0,i={},r,s,u=[];r=this.getRulesViewModel(e,[],[]);for(var n in r){i[t]={name:n,id:n+" "+t,selected:true,type:"lib",nodes:u};for(var o in r[n]){s=r[n][o];u.push({name:s.title,description:s.description,id:s.id,audiences:s.audiences.toString(),categories:s.categories.toString(),minversion:s.minversion,resolution:s.resolution,title:s.title,libName:n,selected:true})}u=[];t++}return i},getIssuesViewModel:function(e){var t={},i=0,r=0,s=0,u,n=0,o=0,a=0;for(var l in e){t[i]={name:l,showAudiences:false,showCategories:false,type:"lib"};for(var d in e[l]){u=this._sortSeverityIssuesByPriority(e[l][d]);t[i][r]={formattedName:this._getFormattedName({name:e[l][d][0].name,highCount:u.high,mediumCount:u.medium,lowCount:u.low,highName:"H",mediumName:"M",lowName:"L"}),name:e[l][d][0].name,showAudiences:true,showCategories:true,categories:e[l][d][0].categories.join(", "),audiences:e[l][d][0].audiences.join(", "),issueCount:e[l][d].length,description:e[l][d][0].description,resolution:e[l][d][0].resolution,type:"rule",ruleLibName:e[l][d][0].ruleLibName,ruleId:e[l][d][0].ruleId,selected:e[l][d][0].selected,details:e[l][d][0].details,severity:e[l][d][0].severity};s+=e[l][d].length;r++;n+=u.high;o+=u.medium;a+=u.low}t[i].formattedName=this._getFormattedName({name:t[i].name,highCount:n,mediumCount:o,lowCount:a,highName:"High",mediumName:"Medium",lowName:"Low"});t[i].name+=" ("+s+" issues)";t[i].issueCount=s;s=0;r=0;i++;n=0;o=0;a=0}return t},_getFormattedName:function(e){var t="",i="",r="";if(e.highCount>0){t="issueSeverityHigh"}if(e.mediumCount>0){i="issueSeverityMedium"}if(e.lowCount>0){r="issueSeverityLow"}return e.name+' (<span class="'+t+'"> '+e.highCount+" "+e.highName+", </span> "+'<span class="'+i+'"> '+e.mediumCount+" "+e.mediumName+", </span> "+'<span class="'+r+'"> '+e.lowCount+" "+e.lowName+"</span> )"},_sortSeverityIssuesByPriority:function(e){var t=0,i=0,s=0;e.forEach(function(e){switch(e.severity){case r.SUPPORT_ASSISTANT_ISSUE_SEVERITY_LOW:s++;break;case r.SUPPORT_ASSISTANT_ISSUE_SEVERITY_MEDIUM:i++;break;case r.SUPPORT_ASSISTANT_ISSUE_SEVERITY_HIGH:t++;break}});return{high:t,medium:i,low:s}},convertToViewModel:function(e){var t=[];for(var i=0;i<e.length;i++){t.push(u(e[i]))}return t},groupIssues:function(e){var t={},i={};for(var r=0;r<e.length;r++){i=e[r];if(!t[i.ruleLibName]){t[i.ruleLibName]={}}if(!t[i.ruleLibName][i.ruleId]){t[i.ruleLibName][i.ruleId]=[]}t[i.ruleLibName][i.ruleId].push(i)}return t},createIssueManagerFacade:function(e){return new o(e)}};var o=function(e){this.oRule=e};o.prototype.addIssue=function(e){e.rule=this.oRule;if(!i.Severity[e.severity]){throw"The issue from rule "+this.oRule.title+" does not have proper severity defined. Allowed values can be found"+"in sap.ui.support.Severity"}if(!e.context||!e.context.id){throw"The issue from rule '"+this.oRule.title+"' should provide a context id."}if(!e.details){throw"The issue from rule '"+this.oRule.title+"' should provide details for the generated issue."}n.addIssue(e)};return n},true);
//# sourceMappingURL=IssueManager.js.map