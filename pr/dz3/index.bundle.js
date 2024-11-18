/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ChatHeader/ChatHeader.css":
/*!**********************************************!*\
  !*** ./components/ChatHeader/ChatHeader.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/ChatHeader/ChatHeader.css?");

/***/ }),

/***/ "./components/ChatHeader/ChatHeader.js":
/*!*********************************************!*\
  !*** ./components/ChatHeader/ChatHeader.js ***!
  \*********************************************/
/*! exports provided: ChatHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatHeader\", function() { return ChatHeader; });\n/* harmony import */ var _ChatHeader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatHeader.css */ \"./components/ChatHeader/ChatHeader.css\");\n/* harmony import */ var _ChatHeader_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChatHeader_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ChatHeader(title) {\n  var avatar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'face';\n  var header = document.createElement('header');\n  header.classList.add('middle-header');\n  var contactChatWrapper = document.createElement('div');\n  contactChatWrapper.classList.add('contact-chat-wrapper');\n  var backButton = document.createElement('button');\n  backButton.classList.add('header-tool', 'back-button');\n  backButton.addEventListener('click', function () {\n    window.location.href = 'chatlist.html';\n  });\n  var backIcon = document.createElement('span');\n  backIcon.classList.add('material-icons');\n  backIcon.textContent = 'arrow_back';\n  backButton.appendChild(backIcon);\n  var avatarElem = document.createElement('div');\n  avatarElem.classList.add('avatar');\n  var avatarIcon = document.createElement('span');\n  avatarIcon.classList.add('material-icons');\n  avatarIcon.textContent = avatar;\n  avatarElem.appendChild(avatarIcon);\n  var infoChatContact = document.createElement('div');\n  infoChatContact.classList.add('info-chat-contact');\n  infoChatContact.textContent = title;\n  contactChatWrapper.appendChild(backButton);\n  contactChatWrapper.appendChild(avatarElem);\n  contactChatWrapper.appendChild(infoChatContact);\n  header.appendChild(contactChatWrapper);\n  return header;\n}\n\n//# sourceURL=webpack:///./components/ChatHeader/ChatHeader.js?");

/***/ }),

/***/ "./components/ChatInput/ChatInput.css":
/*!********************************************!*\
  !*** ./components/ChatInput/ChatInput.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/ChatInput/ChatInput.css?");

/***/ }),

/***/ "./components/ChatInput/ChatInput.js":
/*!*******************************************!*\
  !*** ./components/ChatInput/ChatInput.js ***!
  \*******************************************/
/*! exports provided: ChatInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatInput\", function() { return ChatInput; });\n/* harmony import */ var _ChatInput_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatInput.css */ \"./components/ChatInput/ChatInput.css\");\n/* harmony import */ var _ChatInput_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChatInput_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ChatInput(onMessageSubmit) {\n  var inputContainer = document.createElement('div');\n  inputContainer.classList.add('input-container');\n  var input = document.createElement('input');\n  input.classList.add('form-input');\n  input.setAttribute('placeholder', 'Message');\n  input.setAttribute('type', 'text');\n  var sendButton = document.createElement('button');\n  sendButton.classList.add('send-button', 'material-icons');\n  sendButton.textContent = 'send';\n  inputContainer.appendChild(input);\n  inputContainer.appendChild(sendButton);\n  sendButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    if (input.value.trim() !== '') {\n      onMessageSubmit(input.value.trim());\n      input.value = '';\n    }\n  });\n  return inputContainer;\n}\n\n//# sourceURL=webpack:///./components/ChatInput/ChatInput.js?");

/***/ }),

/***/ "./components/ChatMessages/ChatMessages.css":
/*!**************************************************!*\
  !*** ./components/ChatMessages/ChatMessages.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/ChatMessages/ChatMessages.css?");

/***/ }),

/***/ "./components/ChatMessages/ChatMessages.js":
/*!*************************************************!*\
  !*** ./components/ChatMessages/ChatMessages.js ***!
  \*************************************************/
/*! exports provided: ChatMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatMessages\", function() { return ChatMessages; });\n/* harmony import */ var _ChatMessages_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatMessages.css */ \"./components/ChatMessages/ChatMessages.css\");\n/* harmony import */ var _ChatMessages_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChatMessages_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ChatMessages(messages) {\n  var messageList = document.createElement('div');\n  messageList.classList.add('message-list');\n  messages.forEach(function (message) {\n    var messageItem = document.createElement('div');\n    messageItem.classList.add('message-item');\n    messageItem.textContent = message.text;\n    messageList.appendChild(messageItem);\n  });\n  return messageList;\n}\n\n//# sourceURL=webpack:///./components/ChatMessages/ChatMessages.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/variables.css */ \"./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ChatHeader_ChatHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ChatHeader/ChatHeader */ \"./components/ChatHeader/ChatHeader.js\");\n/* harmony import */ var _components_ChatInput_ChatInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ChatInput/ChatInput */ \"./components/ChatInput/ChatInput.js\");\n/* harmony import */ var _components_ChatMessages_ChatMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ChatMessages/ChatMessages */ \"./components/ChatMessages/ChatMessages.js\");\n\n\n\n\n\nvar chats = JSON.parse(localStorage.getItem('chats')) || [];\nvar chatId = parseInt(window.location.hash.replace('#chat-', ''));\nvar chat = chats.find(function (c) {\n  return c.id === chatId;\n});\nif (!chat) {\n  document.body.innerHTML = '<p>Чат не найден. <a href=\"chatlist.html\">Вернуться к списку чатов</a></p>';\n} else {\n  var app = document.getElementById('app');\n  if (app) {\n    app.innerHTML = '';\n  } else {\n    app = document.createElement('div');\n    app.id = 'app';\n    document.body.appendChild(app);\n  }\n  var header = Object(_components_ChatHeader_ChatHeader__WEBPACK_IMPORTED_MODULE_2__[\"ChatHeader\"])(chat.name, chat.avatar);\n  app.appendChild(header);\n  var messageList = Object(_components_ChatMessages_ChatMessages__WEBPACK_IMPORTED_MODULE_4__[\"ChatMessages\"])(chat.messages);\n  app.appendChild(messageList);\n  var input = Object(_components_ChatInput_ChatInput__WEBPACK_IMPORTED_MODULE_3__[\"ChatInput\"])(function (messageText) {\n    var message = {\n      text: messageText,\n      time: new Date().toLocaleTimeString([], {\n        hour: '2-digit',\n        minute: '2-digit'\n      })\n    };\n    chat.messages.push(message);\n    localStorage.setItem('chats', JSON.stringify(chats));\n    messageList.appendChild(Object(_components_ChatMessages_ChatMessages__WEBPACK_IMPORTED_MODULE_4__[\"ChatMessages\"])([message]));\n  });\n  app.appendChild(input);\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/global.css?");

/***/ }),

/***/ "./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/variables.css?");

/***/ })

/******/ });