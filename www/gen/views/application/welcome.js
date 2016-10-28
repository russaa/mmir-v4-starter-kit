require("storageUtils").restoreObject({ classConstructor: "view",name:"welcome",def:"@contentFor(\"header\"){\r\n   <h1>\r\n      @localize(\"welcome_header\")\r\n   </h1>\r\n   \r\n}@\r\n\r\n@contentFor(\"content\"){\r\n\r\n<div class=\"app_content\">\r\n   <h2>\r\n      @localize(\"welcome_text\")@(mmir.User.getInstance() ? ', '+ mmir.User.getInstance().getName() : '')\r\n   </h2>\r\n   <button id=\"appointmentButton\" name=\"appointment_btn\" data-inline=\"true\" data-icon=\"plus\">\r\n   \t @localize(\"create_appointment\")\r\n   </button>\r\n</div>\r\n\r\n}@\r\n",contentFors:[require("storageUtils").restoreObject({ classConstructor: "contentElement",name:"header",definition:"\r\n   <h1>\r\n      @localize(\"welcome_header\")\r\n   </h1>\r\n   \r\n",start:0,end:85,internalHasDynamicContent:true,allContentElements:[require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"welcome_header\"",nameType:"StringLiteral",start:17,end:44,type:4 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "welcome"; var ctrlName = "Application"; this.view = require("presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("renderUtils"); },init: function(){ this.initRenderer();  } }),require("storageUtils").restoreObject({ classConstructor: "contentElement",name:"content",definition:"\r\n\r\n<div class=\"app_content\">\r\n   <h2>\r\n      @localize(\"welcome_text\")@(mmir.User.getInstance() ? ', '+ mmir.User.getInstance().getName() : '')\r\n   </h2>\r\n   <button id=\"appointmentButton\" name=\"appointment_btn\" data-inline=\"true\" data-icon=\"plus\">\r\n   \t @localize(\"create_appointment\")\r\n   </button>\r\n</div>\r\n\r\n",start:89,end:427,internalHasDynamicContent:true,allContentElements:[require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"welcome_text\"",nameType:"StringLiteral",start:46,end:71,type:4 }),require("storageUtils").restoreObject({ classConstructor: "parsingResult",start:71,end:144,type:64 }),require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"create_appointment\"",nameType:"StringLiteral",start:256,end:287,type:4 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
this.allContentElements[1].scriptEval=function scriptEval(__$$DATA$$__){
var __$$DATA$$__RESULT__ = (function(){
return (mmir.User.getInstance() ? ', '+ mmir.User.getInstance().getName() : '');
})(); exportRenderDataTo(__$$DATA$$__); return __$$DATA$$__RESULT__;};
},initView: function(){ var viewName = "welcome"; var ctrlName = "Application"; this.view = require("presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("renderUtils"); },init: function(){ this.initRenderer();  } })],initPublish: function(){ require("presentationManager").addView(this.getController(), this); },initController: function(){ var ctrlName = "Application"; this.controller = require("controllerManager").getController(ctrlName); },init: function(){ this.initController();  } }, true, 2);