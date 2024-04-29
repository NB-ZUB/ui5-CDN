/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/date/UI5Date","sap/ui/mdc/enums/BaseType","sap/base/util/merge"],function(e,t,n,o){"use strict";const s=e.CalendarType;const a={createInternalType:function(e,t){const n=sap.ui.require(e.getMetadata().getName().replace(/\./g,"/"));const a=o({},e.getConstraints());const i=o({},e.getFormatOptions());if(i.style){delete i.style}i.pattern=t;i.calendarType=s.Gregorian;if(this.showTimezone(e)){i.showTimezone=false}return new n(i,a)},showTimezone:function(e){const t=e.getFormatOptions();const n=function(e,t){return!e.hasOwnProperty(t)||e[t]};return e.isA("sap.ui.model.odata.type.DateTimeWithTimezone")&&n(t,"showTimezone")&&(n(t,"showDate")||n(t,"showTime"))},typeToString:function(e,t,n){const o=this.createInternalType(t,n);const s=o.formatValue(e,"string");return s},stringToType:function(e,t,n){const o=this.createInternalType(t,n);const s=o.parseValue(e,"string");return s},typeToISO:function(e,n,o){if(n.getISOStringFromModelValue){return n.getISOStringFromModelValue(e)}else{let s=this.typeToDate(e,n,o);if(n.getFormatOptions().UTC){s=t.getInstance(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()))}return s.toISOString()}},ISOToType:function(e,n,o){if(n.getModelValueFromISOString){return n.getModelValueFromISOString(e)}else{let s=t.getInstance(e);if(n.getFormatOptions().UTC){s=t.getInstance(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}return this.dateToType(s,n,o)}},dateToType:function(e,o,s){let a;if(o.getModelValue){a=o.getModelValue(e)}else if(o.isA("sap.ui.model.type.DateTime")&&o.getFormatOptions().UTC){a=t.getInstance(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))}else{const t=o.getModelFormat();const i=o.getFormatOptions();const r=s===n.DateTime?!!i.UTC:false;a=t.format(e,r)}return a},typeToDate:function(e,o,s){let a;if(o.getDateValue){a=o.getDateValue(e)}else if(o.isA("sap.ui.model.type.DateTime")&&o.getFormatOptions().UTC){a=t.getInstance(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())}else{const t=o.getModelFormat();const i=o.getFormatOptions();const r=s===n.DateTime?!!i.UTC:false;a=t.parse(e,r)}return a}};return a});
//# sourceMappingURL=DateUtil.js.map