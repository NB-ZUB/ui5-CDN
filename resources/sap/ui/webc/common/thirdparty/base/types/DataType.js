sap.ui.define(["exports"],function(t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;class e{static isValid(t){return false}static attributeToProperty(t){return t}static propertyToAttribute(t){return t===null?null:String(t)}static valuesAreEqual(t,e){return t===e}static generateTypeAccessors(t){Object.keys(t).forEach(e=>{Object.defineProperty(this,e,{get(){return t[e]}})})}static get isDataTypeClass(){return true}}var r=e;t.default=r});
//# sourceMappingURL=DataType.js.map