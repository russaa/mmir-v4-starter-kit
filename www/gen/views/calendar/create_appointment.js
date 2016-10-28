require("storageUtils").restoreObject({ classConstructor: "view",name:"create_appointment",def:"@contentFor(\"header\"){\r\n   <h1>\r\n      @localize(\"create_appointment_header\")\r\n   </h1>\r\n}@\r\n\r\n@contentFor(\"content\"){\r\n\r\n  <div id=\"create_appointment\" class=\"app_content\" style=\"margin-top: 1em;\">\r\n  \r\n    <label for=\"subject\">\r\n      @localize(\"subject_label\")\r\n    </label>\r\n    <input type=\"text\" name=\"subject\" id=\"subject\" value=\"\" />\r\n    \r\n    \r\n    <label for=\"app-date\">\r\n      @localize(\"date_label\")\r\n    </label>   \r\n    <input name=\"app-date\" id=\"app-date\" type=\"date\" data-role=\"datebox\" \r\n           data-options='{\"mode\": \"flipbox\", \"themeHeader\": \"b\"}' />\r\n    \r\n    <label for=\"start-time\">\r\n      @localize(\"start_time_label\")\r\n    </label>\r\n    <input name=\"start-time\" id=\"start-time\" type=\"date\" data-role=\"datebox\" \r\n           data-options='{\"mode\": \"timeflipbox\", \"themeHeader\": \"b\"}' />\r\n    \r\n    <label for=\"end-time\">\r\n      @localize(\"end_time_label\")\r\n    </label>\r\n    <input name=\"end-time\" id=\"end-time\" type=\"date\" data-role=\"datebox\" \r\n           data-options='{\"mode\": \"timeflipbox\", \"themeHeader\": \"b\", \"overrideStyleClass\": \"ui-icon-clock\"}' />\r\n           \r\n    <label for=\"note\">\r\n      @localize(\"note_label\")\r\n    </label>\r\n    <textarea name=\"note\" id=\"note\"></textarea>\r\n    \r\n    <button id=\"save_appointment\" name=\"save_appointment_btn\" data-inline=\"true\" data-icon=\"check\">\r\n   \t\t@localize(\"save\")\r\n    </button>\r\n   \r\n    <button id=\"discard_appointment\" name=\"discard_appointment_btn\" data-inline=\"true\" data-icon=\"delete\">\r\n   \t\t@localize(\"discard\")\r\n    </button>\r\n\r\n  </div>\r\n}@ \r\n",contentFors:[require("storageUtils").restoreObject({ classConstructor: "contentElement",name:"header",definition:"\r\n   <h1>\r\n      @localize(\"create_appointment_header\")\r\n   </h1>\r\n",start:0,end:91,internalHasDynamicContent:true,allContentElements:[require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"create_appointment_header\"",nameType:"StringLiteral",start:17,end:55,type:4 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "create_appointment"; var ctrlName = "Calendar"; this.view = require("presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("renderUtils"); },init: function(){ this.initRenderer();  } }),require("storageUtils").restoreObject({ classConstructor: "contentElement",name:"content",definition:"\r\n\r\n  <div id=\"create_appointment\" class=\"app_content\" style=\"margin-top: 1em;\">\r\n  \r\n    <label for=\"subject\">\r\n      @localize(\"subject_label\")\r\n    </label>\r\n    <input type=\"text\" name=\"subject\" id=\"subject\" value=\"\" />\r\n    \r\n    \r\n    <label for=\"app-date\">\r\n      @localize(\"date_label\")\r\n    </label>   \r\n    <input name=\"app-date\" id=\"app-date\" type=\"date\" data-role=\"datebox\" \r\n           data-options='{\"mode\": \"flipbox\", \"themeHeader\": \"b\"}' />\r\n    \r\n    <label for=\"start-time\">\r\n      @localize(\"start_time_label\")\r\n    </label>\r\n    <input name=\"start-time\" id=\"start-time\" type=\"date\" data-role=\"datebox\" \r\n           data-options='{\"mode\": \"timeflipbox\", \"themeHeader\": \"b\"}' />\r\n    \r\n    <label for=\"end-time\">\r\n      @localize(\"end_time_label\")\r\n    </label>\r\n    <input name=\"end-time\" id=\"end-time\" type=\"date\" data-role=\"datebox\" \r\n           data-options='{\"mode\": \"timeflipbox\", \"themeHeader\": \"b\", \"overrideStyleClass\": \"ui-icon-clock\"}' />\r\n           \r\n    <label for=\"note\">\r\n      @localize(\"note_label\")\r\n    </label>\r\n    <textarea name=\"note\" id=\"note\"></textarea>\r\n    \r\n    <button id=\"save_appointment\" name=\"save_appointment_btn\" data-inline=\"true\" data-icon=\"check\">\r\n   \t\t@localize(\"save\")\r\n    </button>\r\n   \r\n    <button id=\"discard_appointment\" name=\"discard_appointment_btn\" data-inline=\"true\" data-icon=\"delete\">\r\n   \t\t@localize(\"discard\")\r\n    </button>\r\n\r\n  </div>\r\n",start:95,end:1533,internalHasDynamicContent:true,allContentElements:[require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"subject_label\"",nameType:"StringLiteral",start:119,end:145,type:4 }),require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"date_label\"",nameType:"StringLiteral",start:271,end:294,type:4 }),require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"start_time_label\"",nameType:"StringLiteral",start:500,end:529,type:4 }),require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"end_time_label\"",nameType:"StringLiteral",start:738,end:765,type:4 }),require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"note_label\"",nameType:"StringLiteral",start:1012,end:1035,type:4 }),require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"save\"",nameType:"StringLiteral",start:1212,end:1229,type:4 }),require("storageUtils").restoreObject({ classConstructor: "parsingResult",name:"\"discard\"",nameType:"StringLiteral",start:1364,end:1384,type:4 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "create_appointment"; var ctrlName = "Calendar"; this.view = require("presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("renderUtils"); },init: function(){ this.initRenderer();  } })],initPublish: function(){ require("presentationManager").addView(this.getController(), this); },initController: function(){ var ctrlName = "Calendar"; this.controller = require("controllerManager").getController(ctrlName); },init: function(){ this.initController();  } }, true, 2);