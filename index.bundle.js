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

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar chats = JSON.parse(localStorage.getItem('chats')) || [];\nvar chatId = parseInt(window.location.hash.replace('#chat-', ''));\nvar chat = chats.find(function (c) {\n  return c.id === chatId;\n});\nif (!chat) {\n  document.body.innerHTML = '<p>Чат не найден. <a href=\"chatlist.html\">Вернуться к списку чатов</a></p>';\n} else {\n  var loadMessages = function loadMessages() {\n    messageList.innerHTML = '';\n    chat.messages.forEach(displayMessage);\n    scrollToBottom();\n  };\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    var messageText = input.value.trim();\n    if (messageText) {\n      var message = {\n        text: messageText,\n        sender: 'User',\n        time: new Date().toLocaleTimeString([], {\n          hour: '2-digit',\n          minute: '2-digit'\n        })\n      };\n      chat.messages.push(message);\n      saveChats();\n      displayMessage(message);\n      input.value = '';\n      toggleSendButton();\n      scrollToBottom();\n    }\n  };\n  var handleKeyPress = function handleKeyPress(event) {\n    if (event.keyCode === 13 && !event.shiftKey) {\n      event.preventDefault();\n      form.dispatchEvent(new Event('submit'));\n    }\n  };\n  var displayMessage = function displayMessage(message) {\n    var messageElement = document.createElement('div');\n    messageElement.classList.add('message-from-user');\n    var messageText = document.createElement('p');\n    messageText.textContent = message.text;\n    var messageTime = document.createElement('small');\n    messageTime.classList.add('small-time-message');\n    messageTime.textContent = message.time;\n    var messageCheck = document.createElement('span');\n    messageCheck.classList.add('material-icons', 'check');\n    messageCheck.textContent = 'check';\n    messageElement.appendChild(messageText);\n    messageElement.appendChild(messageTime);\n    messageElement.appendChild(messageCheck);\n    messageList.appendChild(messageElement);\n  };\n  var scrollToBottom = function scrollToBottom() {\n    messageList.scrollTop = messageList.scrollHeight;\n  };\n  var toggleSendButton = function toggleSendButton() {\n    input.value.trim() ? sendButtonIcon.textContent = 'send' : sendButtonIcon.textContent = 'attach_file';\n  };\n  document.querySelector('.info-chat-contact').textContent = chat.name;\n  var avatarElement = document.querySelector('.avatar .material-icons');\n  avatarElement.textContent = chat.avatar || 'face';\n  var form = document.querySelector('form');\n  var input = document.querySelector('.form-input');\n  var messageList = document.querySelector('.message-list');\n  var sendButtonIcon = document.querySelector('.send-button span');\n  form.addEventListener('submit', handleSubmit);\n  input.addEventListener('input', toggleSendButton);\n  form.addEventListener('keypress', handleKeyPress);\n  loadMessages();\n}\nfunction saveChats() {\n  localStorage.setItem('chats', JSON.stringify(chats));\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });