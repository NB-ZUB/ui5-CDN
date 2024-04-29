/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var i={};i.render=function(i,t){i.write("<div");i.writeControlData(t);i.addClass("sapUiSli");this.controlAdditionalCode(i,t);if(t.getTooltip_AsString()){i.writeAttributeEscaped("title",t.getTooltip_AsString())}if(!t.getVertical()&&t.getWidth()){i.writeAttribute("style","width:"+t.getWidth()+";")}else{i.writeAttribute("style","height:"+t.getHeight()+";")}if(!t.getEnabled()){i.addClass("sapUiSliDsbl")}else{if(!t.getEditable()){i.addClass("sapUiSliRo")}else{i.addClass("sapUiSliStd")}}if(t.getVertical()){i.addClass("sapUiSliVert")}else{i.addClass("sapUiSliHori")}i.writeClasses();if(t.getTooltip_AsString()){i.write('><span id="'+t.getId()+'-Descr" style="visibility: hidden; display: none;">');i.writeEscaped(t.getTooltip_AsString());i.write("</span")}i.write("><div");i.writeAttribute("id",t.getId()+"-right");i.write('class="sapUiSliR" > <DIV');i.writeAttribute("id",t.getId()+"-left");i.write('class="sapUiSliL" > <DIV');i.writeAttribute("id",t.getId()+"-bar");i.write('class="sapUiSliBar" >');var e=false;if(t.getLabels()&&t.getLabels().length>0){e=true}if(t.getTotalUnits()>0||e){var r=t.getTotalUnits();if(e){r=t.getLabels().length-1}var s=(t.getMax()-t.getMin())/r;for(var a=0;a<=r;a++){i.write("<div");i.writeAttribute("id",t.getId()+"-tick"+a);i.write('class="sapUiSliTick" ');i.write("></div>");if(t.getStepLabels()){i.write("<div");i.writeAttribute("id",t.getId()+"-text"+a);switch(a){case 0:i.write('class="sapUiSliText sapUiSliTextLeft" >');break;case r:i.write('class="sapUiSliText sapUiSliTextRight" >');break;default:i.write('class="sapUiSliText" >');break}if(e){i.writeEscaped(t.getLabels()[a])}else{i.write(t.getMin()+a*s)}i.write("</div>")}}}i.write("<div");i.writeAttribute("id",t.getId()+"-hili");i.write('class="sapUiSliHiLi"></DIV>');this.renderGrip(i,t);i.write("</div></div></div></div>")};i.renderGrip=function(i,t){i.write("<div");i.writeAttribute("id",t.getId()+"-grip");if(t.getEnabled()){i.writeAttribute("tabindex","0")}else{i.writeAttribute("tabindex","-1")}i.writeAttribute("class","sapUiSliGrip");i.writeAttribute("title",t.getValue());var e="horizontal";if(t.getVertical()){e="vertical"}i.writeAccessibilityState(t,{role:"slider",orientation:e,valuemin:t.getMin(),valuemax:t.getMax(),disabled:!t.getEditable()||!t.getEnabled(),describedby:t.getTooltip_AsString()?t.getId()+"-Descr "+t.getAriaDescribedBy().join(" "):undefined});if(t.getVertical()){i.write(">&#9668;</div>")}else{i.write(">&#9650;</div>")}};i.controlAdditionalCode=function(i,t){};return i},true);
//# sourceMappingURL=SliderRenderer.js.map