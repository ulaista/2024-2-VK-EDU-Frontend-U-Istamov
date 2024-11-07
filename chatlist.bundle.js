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
/******/ 	return __webpack_require__(__webpack_require__.s = "./chatlist.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chatlist.js":
/*!*********************!*\
  !*** ./chatlist.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/variables.css */ \"./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ChatHeader_ChatHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ChatHeader/ChatHeader */ \"./components/ChatHeader/ChatHeader.js\");\n/* harmony import */ var _components_ChatList_ChatList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ChatList/ChatList */ \"./components/ChatList/ChatList.js\");\n\n\n\n\nvar chats = JSON.parse(localStorage.getItem('chats')) || [];\nfunction saveChats() {\n  localStorage.setItem('chats', JSON.stringify(chats));\n}\nfunction renderChats() {\n  var app = document.getElementById('app');\n  if (app) {\n    app.innerHTML = '';\n  } else {\n    app = document.createElement('div');\n    app.id = 'app';\n    document.body.appendChild(app);\n  }\n  var header = Object(_components_ChatHeader_ChatHeader__WEBPACK_IMPORTED_MODULE_2__[\"ChatHeader\"])('Messenger');\n  app.appendChild(header);\n  var chatListElement = Object(_components_ChatList_ChatList__WEBPACK_IMPORTED_MODULE_3__[\"ChatList\"])(chats);\n  app.appendChild(chatListElement);\n  var createChatButton = document.createElement('button');\n  createChatButton.classList.add('floating-button');\n  var addIcon = document.createElement('span');\n  addIcon.classList.add('material-icons');\n  addIcon.textContent = 'add';\n  createChatButton.appendChild(addIcon);\n  createChatButton.addEventListener('click', function () {\n    var chatName = prompt('Введите название нового чата:');\n    if (chatName) {\n      var newChat = {\n        id: Date.now(),\n        name: chatName,\n        messages: []\n      };\n      chats.push(newChat);\n      saveChats();\n      window.location.href = \"index.html#chat-\".concat(newChat.id);\n    }\n  });\n  app.appendChild(createChatButton);\n}\nrenderChats();\n\n//# sourceURL=webpack:///./chatlist.js?");

/***/ }),

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

/***/ "./components/ChatList/ChatList.css":
/*!******************************************!*\
  !*** ./components/ChatList/ChatList.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/ChatList/ChatList.css?");

/***/ }),

/***/ "./components/ChatList/ChatList.js":
/*!*****************************************!*\
  !*** ./components/ChatList/ChatList.js ***!
  \*****************************************/
/*! exports provided: ChatList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatList\", function() { return ChatList; });\n/* harmony import */ var _ChatList_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatList.css */ \"./components/ChatList/ChatList.css\");\n/* harmony import */ var _ChatList_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChatList_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ChatList(chats) {\n  var chatListElement = document.createElement('div');\n  chatListElement.classList.add('chat-list');\n  chats.forEach(function (chat) {\n    var chatItem = document.createElement('div');\n    chatItem.classList.add('chat-item');\n    var avatar = document.createElement('div');\n    avatar.classList.add('avatar');\n    var avatarIcon = document.createElement('span');\n    avatarIcon.classList.add('material-icons');\n    avatarIcon.textContent = 'person';\n    avatar.appendChild(avatarIcon);\n    var chatDetails = document.createElement('div');\n    chatDetails.classList.add('chat-details');\n    var chatName = document.createElement('div');\n    chatName.classList.add('chat-name');\n    chatName.textContent = chat.name;\n    var lastMessage = document.createElement('div');\n    lastMessage.classList.add('last-message');\n    lastMessage.textContent = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : 'Нет сообщений';\n    chatDetails.appendChild(chatName);\n    chatDetails.appendChild(lastMessage);\n    var chatTime = document.createElement('div');\n    chatTime.classList.add('chat-time');\n    chatTime.textContent = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].time : '';\n    chatItem.appendChild(avatar);\n    chatItem.appendChild(chatDetails);\n    chatItem.appendChild(chatTime);\n    chatItem.addEventListener('click', function () {\n      window.location.href = \"index.html#chat-\".concat(chat.id);\n    });\n    chatListElement.appendChild(chatItem);\n  });\n  return chatListElement;\n}\n\n//# sourceURL=webpack:///./components/ChatList/ChatList.js?");

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