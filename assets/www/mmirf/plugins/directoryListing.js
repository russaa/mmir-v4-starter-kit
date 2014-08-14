﻿/*
 * 	Copyright (C) 2012-2013 DFKI GmbH
 * 	Deutsches Forschungszentrum fuer Kuenstliche Intelligenz
 * 	German Research Center for Artificial Intelligence
 * 	http://www.dfki.de
 * 
 * 	Permission is hereby granted, free of charge, to any person obtaining a 
 * 	copy of this software and associated documentation files (the 
 * 	"Software"), to deal in the Software without restriction, including 
 * 	without limitation the rights to use, copy, modify, merge, publish, 
 * 	distribute, sublicense, and/or sell copies of the Software, and to 
 * 	permit persons to whom the Software is furnished to do so, subject to 
 * 	the following conditions:
 * 
 * 	The above copyright notice and this permission notice shall be included 
 * 	in all copies or substantial portions of the Software.
 * 
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
 * 	OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * 	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * 	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * 	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * 	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * 	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * @module mobileDS.plugins
 * 
 */

/**
 * Plugin for the reading of directories using phonegap-/cordova-plugin-functions to bind java-methods to a javascript method.
 * @returns {Object} Instance of DirectoryListing
 * @category core
 * 
 * @depends jQuery.ajax
 * @ignore
 */
var DirectoryListing = function() {
	this.isDebugEnabled = typeof IS_DEBUG_ENABLED !== 'undefined'? IS_DEBUG_ENABLED : false;
};


///**
// * This function reads the contents of a directory, filters out unwanted files and passes the return json-object to the success-callback-function as parameter.<br>
// * Superseded by the function {@link DirectoryListing#getDirectoryStructure} which can read all the relevant directories into one json-object. 
// * @function getDirectoryListing
// * @param {String} directory The target directory, which contents should be listed
// * @param {String} filter A filter to apply for the listing of the directory content
// * @param {Function} successCallback The callback which will be called when directory listing is successful
// * @param {Function} failureCallback The callback which will be called when directory listing encouters an error
// * @async
// * @deprecated unused
// */
//DirectoryListing.prototype.getDirectoryListing = function(directory, filter, successCallback, failureCallback) {
////	console.log("[getDirectoryListing] called.")
//	return cordova.exec(successCallback,    //Callback which will be called when directory listing is successful
//			failureCallback,     //Callback which will be called when directory listing encounters an error
//			'DirectoryListing',  //Telling cordova that we want to run "DirectoryListing" Plugin
//			'getDirectoryListing',              //Telling the plugin, which action we want to perform
//			[directory, filter]);        //Passing a list of arguments to the plugin, in this case this is the directory path
//};

///**
// * @param directory The directory for which we want the listing
// * @param successCallback The callback which will be called when directory listing is successful
// * @param failureCallback The callback which will be called when directory listing encouters an error
// * Not working right now
// */
//DirectoryListing.prototype.getDirectoryListingRecursively = function(directory, successCallback, failureCallback) {
////	console.log("[getDirectoryListing] called.")
//	return cordova.exec(successCallback,    //Callback which will be called when directory listing is successful
//			failureCallback,     //Callback which will be called when directory listing encounters an error
//			'DirectoryListing',  //Telling cordova that we want to run "DirectoryListing" Plugin
//			'getDirectoryStructure',              //Telling the plugin, which action we want to perform
//			[directory]);        //Passing a list of arguments to the plugin, in this case this is the directory path
//};
//
///**
// * @param directory The directory for which we want the listing
// * @param successCallback The callback which will be called when directory listing is successful
// * @param failureCallback The callback which will be called when directory listing encouters an error
// */
//DirectoryListing.prototype.getControllersAndViews = function(successCallback, failureCallback) {
////	console.log("[getControllersAndViews] called.")
//	return cordova.exec(successCallback,    //Callback which will be called when directory listing is successful
//			failureCallback,     //Callback which will be called when directory listing encounters an error
//			'DirectoryListing',  //Telling cordova that we want to run "DirectoryListing" Plugin
//			'getControllerAndViews',              //Telling the plugin, which action we want to perform
//			[]);        //Passing a list of arguments to the plugin
//};

/**
 * This function reads the directory structure recursively for a list of directories into a single json-object.<br>
 * It is a good idea not to pass the root directory ("/") as a parameter, because it would take too much time to pass the whole directory Structure of the "assets" directory.<br>
 * Example:
 * @example
	
	window.plugins.directoryListing.getDirectoryStructure(
		directoriesToParse,
        function(dirStruct){
        	console.log(JSON.stringify(dirStruct));
            self.directoryStructure = dirStruct;
            console.log("[getDirectoryStructure] finished.")
            console.log(JSON.stringify(dirStruct));
            if ((cb) && (typeof cb == 'function')){
            	cb.call()
			}
		}, 
		function(e){
			console.log("[ERROR] " + e);
		}
	);
                
 * 
 * @function getDirectoryStructure
 * @param {Array} directories An array of strings with directories which contents shall be listed
 * @param {Function} successCallback The callback which will be called when directory listing is successful
 * @param {Function} failureCallback The callback which will be called when directory listing encounters an error
 * @async
 */
DirectoryListing.prototype.getDirectoryStructure = function(directories, successCallback, failureCallback) {
	
	return cordova.exec(successCallback,    //Callback which will be called when directory listing is successful
		failureCallback,     //Callback which will be called when directory listing encounters an error
		'DirectoryListing',  //Telling cordova that we want to run "DirectoryListing" Plugin
		'getDirectoryStructure',              //Telling the plugin, which action we want to perform
		[directories]);        //Passing a list of arguments to the plugin, in this case this is the directory path
	
};

/**
 * This function finds the controllers and corresponding views and returns a json-object to the successCallback-function.<br>
 * Superseded by the function {@link mobileDS.ControllerManager-constructor-getControllerViewsAndPartials}
 * @function getControllersAndViews
 * @param {Function} successCallback The callback which will be called when successful
 * @param {Function} failureCallback The callback which will be called when encoutering an error
 * @deprecated unused, outdated
 */
DirectoryListing.prototype.getControllersAndViews = function(successCallback, failureCallback) {
//	console.log("[getControllersAndViews] called.")
	return cordova.exec(successCallback,    //Callback which will be called when directory listing is successful
			failureCallback,     //Callback which will be called when directory listing encounters an error
			'DirectoryListing',  //Telling cordova that we want to run "DirectoryListing" Plugin
			'getControllerAndViews',              //Telling the plugin, which action we want to perform
			[]);        //Passing a list of arguments to the plugin
};

DirectoryListing.prototype.getFilesFromDirectoryStructure = function(dirStructure) {
	dirStructureJSON = jQuery.parseJSON(dirStructure);
};

/**
 * <ul>
 * <li>Register the Directory Listing Javascript plugin.</li>
 * <li>Also register native call which will be called when this plugin runs</li>
 * </ul>
 */
//cordova.addConstructor(function() {
//	//Register the javascript plugin with cordova
//	cordova.addPlugin('directoryListing', new DirectoryListing());
//});

//Cordova 2.x plugin registration:
if(!window.plugins) {
  window.plugins = {};
}
if (!window.plugins.directoryListing) {
  window.plugins.directoryListing = new DirectoryListing();
}

console.log("Plugin 'DirectoryListing' loaded.");