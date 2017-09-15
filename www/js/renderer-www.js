(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (window.jkpSharedObj == null)
    window.jkpSharedObj = {};
function version() {
    return "0.1.0.0";
}
exports.version = version;
function sharedObj() {
    return window.jkpSharedObj;
}
exports.sharedObj = sharedObj;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jkp = require("./jkp-utils");
function loadUrl(url) {
    if (url == null || url === '' || url === '#')
        return false;
    if (url.substring(0, 1) === '#')
        window.location = "./" + url.substring(1) + ".html";
    else
        window.location = url;
    return true;
}
exports.loadUrl = loadUrl;
function readFromSettings(name) {
    if (typeof (Storage) !== "undefined") {
        return localStorage.getItem(name);
    }
    else {
        if (jkp.sharedObj().settings == null)
            jkp.sharedObj().settings = {};
        return jkp.sharedObj().settings[name];
    }
}
exports.readFromSettings = readFromSettings;
function writeToSettings(name, value) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(name, value);
    }
    else {
        if (jkp.sharedObj().settings == null)
            jkp.sharedObj().settings = {};
        jkp.sharedObj().settings[name] = value;
    }
}
exports.writeToSettings = writeToSettings;
jkp.sharedObj().loadUrl = loadUrl;
jkp.sharedObj().readFromSettings = readFromSettings;
jkp.sharedObj().writeToSettings = writeToSettings;

},{"./jkp-utils":1}]},{},[2]);
