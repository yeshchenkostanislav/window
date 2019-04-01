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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function () {\n  \"use strict\";\n\n  var tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./parts/tabs.js\"),\n      modal = __webpack_require__(/*! ./parts/modal.js */ \"./parts/modal.js\"),\n      timer = __webpack_require__(/*! ./parts/timer.js */ \"./parts/timer.js\"),\n      galeri = __webpack_require__(/*! ./parts/galeri.js */ \"./parts/galeri.js\"),\n      input = __webpack_require__(/*! ./parts/input.js */ \"./parts/input.js\"),\n      form = __webpack_require__(/*! ./parts/form.js */ \"./parts/form.js\");\n\n  tabs();\n  modal();\n  timer();\n  galeri();\n  input();\n  form();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function form() {\n  //form\n  var message = {\n    loading: 'Загрузка...',\n    success: 'Спасибо! Скоро мы с вами свяжемся!',\n    failure: 'Что-то пошло не так...'\n  };\n  var form = document.querySelectorAll('form'),\n      input = document.querySelectorAll('input'),\n      inputTel = document.querySelectorAll('.user_phone'),\n      inputForm = document.querySelectorAll('.form-control_calc'),\n      checkbox = document.querySelectorAll('.checkbox'),\n      popupCalcEnd = document.querySelector('.popup_calc_end'),\n      overlay = document.querySelector('.popup_engineer'),\n      popup = document.querySelector('.popup'),\n      statusMessage = document.createElement('div'); //полифилл для forEach\n\n  (function () {\n    if (typeof NodeList.prototype.forEach === \"function\") return false;else NodeList.prototype.forEach = Array.prototype.forEach;\n  })(); // собираю данные с форм в один обьект\n\n\n  var tabImg3 = document.querySelectorAll('.type_img'); // выбор формы балкона\n\n  tabImg3.forEach(function (item) {\n    item.addEventListener('click', function () {\n      var attribute = item.getAttribute(\"alt\");\n      formCalc.balcony = attribute;\n    });\n  }); //считываем данные с инпутов\n\n  inputForm.forEach(function (item) {\n    item.addEventListener('change', function () {\n      if (item.getAttribute(\"id\") == 'width') {\n        formCalc.width = item.value;\n      } else {\n        formCalc.height = item.value;\n      }\n    });\n  });\n  var glazingType = document.getElementById('view_type');\n  glazingType.addEventListener('change', function () {\n    formCalc.type = glazingType.options[glazingType.selectedIndex].value;\n  });\n  checkbox.forEach(function (item) {\n    item.addEventListener('click', function () {\n      if (item.getAttribute(\"id\") == 'checkbox-1') {\n        formCalc.checkbox = 'Холодное';\n      } else {\n        formCalc.checkbox = 'Теплое';\n      }\n    });\n  });\n  var modalCalcInput = document.querySelectorAll('.modal-calc');\n  modalCalcInput.forEach(function (item) {\n    item.addEventListener('change', function () {\n      if (item.getAttribute(\"id\") == 'modal-name') {\n        formCalc.name = item.value;\n      } else {\n        formCalc.tel = item.value;\n      }\n    });\n  });\n  var formCalc = {\n    name: '',\n    tel: '',\n    balcony: 'Тип1',\n    width: '',\n    height: '',\n    type: 'Деревянное остекление',\n    checkbox: ''\n  };\n  form.forEach(function sendForm(item) {\n    item.addEventListener('submit', function (e) {\n      e.preventDefault();\n      item.appendChild(statusMessage);\n      var jSonString = JSON.stringify(formCalc);\n      var formData = new FormData(item);\n\n      function postData(data) {\n        return new Promise(function (resolve, reject) {\n          var request = new XMLHttpRequest();\n          request.open('POST', 'server.php');\n          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\n\n          request.onreadystatechange = function () {\n            if (request.readyState < 4) {\n              resolve();\n            } else if (request.readyState === 4) {\n              if (request.status == 200) {\n                resolve();\n              } else {\n                reject();\n              }\n            }\n          };\n\n          if (item.classList.contains('form-end')) {\n            request.send(jSonString);\n          } else {\n            request.send(data);\n          }\n        });\n      }\n\n      function clearInput() {\n        input.forEach(function (item) {\n          item.value = '';\n        });\n      }\n\n      ;\n      postData(formData).then(function () {\n        statusMessage.textContent = message.loading;\n      }).then(function () {\n        statusMessage.innerHTML = message.success;\n        setTimeout(func, 3000);\n        formCalc = {\n          name: '',\n          tel: '',\n          balcony: 'Тип1',\n          width: '',\n          height: '',\n          type: 'Деревянное остекление',\n          checkbox: ''\n        };\n        console.log(formCalc);\n      }).catch(function () {\n        statusMessage.innerHTML = message.failure;\n      }).then(clearInput);\n    });\n  });\n\n  function func() {\n    statusMessage.innerHTML = \"\";\n    popupCalcEnd.style.display = 'none';\n    overlay.style.display = 'none';\n    popup.style.display = 'none';\n  }\n\n  console.log(formCalc);\n  inputTel.forEach(function (item) {\n    // Проверяем фокус\n    item.addEventListener('focus', function () {\n      // Если там ничего нет или есть, но левое\n      if (!/^\\+\\d*$/.test(item.value)) // То вставляем знак плюса как значение\n        item.value = '+';\n    });\n    item.addEventListener('keypress', function (e) {\n      // Отменяем ввод не цифр\n      if (!/\\d/.test(e.key)) {\n        e.preventDefault();\n        alert(\"Прошу вводить только цыфры\");\n      } else {\n        if (item.value.length == 2) item.value = item.value + \"(\";\n        if (item.value.length == 6) item.value = item.value + \")-\";\n        if (item.value.length == 11) item.value = item.value + \"-\";\n        if (item.value.length == 14) item.value = item.value + \"-\";\n        if (item.value.length > 16) item.value = item.value.substring(0, 16);\n      }\n    });\n  });\n}\n\nmodule.exports = form;\n\n//# sourceURL=webpack:///./parts/form.js?");

/***/ }),

/***/ "./parts/galeri.js":
/*!*************************!*\
  !*** ./parts/galeri.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function galeri() {\n  //galeri\n  var fotoWrap = document.querySelector('.foto-wrap'),\n      a = fotoWrap.getElementsByTagName('a');\n\n  var _loop = function _loop(i) {\n    a[i].addEventListener('click', function (e) {\n      e.preventDefault();\n      document.body.style.overflow = 'hidden';\n      var darkLayer = document.createElement('div'); // слой затемнения\n\n      darkLayer.id = 'shadow'; // id чтобы подхватить стиль\n\n      document.body.appendChild(darkLayer); // включаем затемнение\n\n      var attribute = a[i].getAttribute(\"href\");\n      var modalWin = document.createElement('img');\n      modalWin.classList.add('modalwin');\n      modalWin.setAttribute('src', attribute);\n      fotoWrap.appendChild(modalWin);\n      darkLayer.addEventListener('click', function () {\n        // при клике на слой затемнения все исчезнет\n        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение\n\n        modalWin.style.display = 'none'; // делаем окно невидимым\n\n        document.body.style.overflow = '';\n        return false;\n      });\n    });\n  };\n\n  for (var i = 0; i < a.length; i++) {\n    _loop(i);\n  }\n}\n\nmodule.exports = galeri;\n\n//# sourceURL=webpack:///./parts/galeri.js?");

/***/ }),

/***/ "./parts/input.js":
/*!************************!*\
  !*** ./parts/input.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function input() {\n  var inputForm = document.querySelectorAll('.form-control_calc'),\n      buttonCacl = document.querySelector('.popup_calc_button'),\n      popupCalc = document.querySelector('.popup_calc'),\n      profile = document.querySelector('.popup_calc_profile'),\n      calcProfileButton = document.querySelector('.popup_calc_profile_button'),\n      popupCalcEnd = document.querySelector('.popup_calc_end'),\n      checkbox = document.querySelectorAll('.checkbox');\n  inputForm.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9]+/g, '');\n    });\n    buttonCacl.addEventListener('click', function () {\n      if (inputForm[0].value == '' || inputForm[0].value == 0 || inputForm[1].value == '' || inputForm[1].value == 0) {} else {\n        popupCalc.style.display = 'none';\n        profile.style.display = 'flex';\n        inputForm[0].value = '';\n        inputForm[1].value = '';\n      }\n    }); // выбираем только один чекбокс\n\n    var last = {},\n        ie = 0;\n\n    document.body.onclick = function (e) {\n      e = ie ? event.scrElement : e.target;\n      if (e.name != \"checkbox-test\" && e.type != \"checkbox\") return;\n      last.checked = false;\n      e.checked = true;\n      last = e;\n    }; //проверяется выбран чекбокс или нет\n\n\n    calcProfileButton.addEventListener('click', function () {\n      checkbox.forEach(function (item) {\n        if (item.checked) {\n          profile.style.display = 'none';\n          popupCalcEnd.style.display = 'flex';\n        }\n      });\n    });\n  });\n}\n\nmodule.exports = input;\n\n//# sourceURL=webpack:///./parts/input.js?");

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal() {\n  //modal\n  var headerBtn = document.querySelector('.header_btn'),\n      input = document.querySelectorAll('input'),\n      overlay = document.querySelector('.popup_engineer'),\n      close = document.getElementsByClassName('popup_close'),\n      phoneLink = document.getElementsByClassName('phone_link'),\n      popup = document.querySelector('.popup'),\n      popupCalc = document.querySelector('.popup_calc'),\n      profile = document.querySelector('.popup_calc_profile'),\n      glazingBtn = document.querySelectorAll('.glazing_price_btn'),\n      popupCalcEnd = document.querySelector('.popup_calc_end');\n\n  function clearInput() {\n    input.forEach(function (item) {\n      item.value = '';\n    });\n  }\n\n  ;\n\n  for (var j = 0; j < phoneLink.length; j++) {\n    phoneLink[j].addEventListener('click', function (e) {\n      e.preventDefault();\n      popup.style.display = 'flex';\n      document.body.style.overflow = 'hidden';\n    });\n  }\n\n  headerBtn.addEventListener('click', function () {\n    overlay.style.display = 'flex';\n    document.body.style.overflow = 'hidden';\n  });\n  glazingBtn.forEach(function (item) {\n    item.addEventListener('click', function () {\n      popupCalc.style.display = 'flex';\n      document.body.style.overflow = 'hidden';\n    });\n  });\n\n  for (var i = 0; i < close.length; i++) {\n    close[i].addEventListener('click', function () {\n      popupCalc.style.display = 'none';\n      profile.style.display = 'none';\n      popupCalcEnd.style.display = 'none';\n      hide();\n      clearInput();\n      formCalc = {\n        name: '',\n        tel: '',\n        balcony: 'Тип1',\n        width: '',\n        height: '',\n        type: 'Деревянное остекление',\n        checkbox: ''\n      };\n    });\n  } // две функции подряд, это полифиллы для closest\n\n\n  (function () {\n    // проверяем поддержку\n    if (!Element.prototype.closest) {\n      // реализуем\n      Element.prototype.closest = function (css) {\n        var node = this;\n\n        while (node) {\n          if (node.matches(css)) return node;else node = node.parentElement;\n        }\n\n        return null;\n      };\n    }\n  })();\n\n  (function () {\n    // проверяем поддержку\n    if (!Element.prototype.matches) {\n      // определяем свойство\n      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;\n    }\n  })();\n\n  document.addEventListener('mousedown', function (e) {\n    if (e.target.closest('.popup_form') === null) {\n      hide();\n    }\n  });\n\n  function hide() {\n    overlay.style.display = 'none';\n    popup.style.display = 'none';\n    document.body.style.overflow = '';\n    clearInput();\n  }\n\n  var timerId = setTimeout(fun, 60000);\n\n  function fun() {\n    popup.style.display = 'flex';\n    document.body.style.overflow = 'hidden';\n    clearTimeout(timerId);\n  }\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./parts/modal.js?");

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\n  //tabs\n  // первая секция с табами\n  var info = document.querySelector('.glazing_slider'),\n      tabImg = document.querySelectorAll('.img'),\n      tabText = document.querySelectorAll('.tab-link'),\n      tabContent = document.querySelectorAll('.info-tabcontent'); // вторая секция с табами\n\n  var info2 = document.querySelector('.decoration_slider'),\n      tabText2 = document.querySelectorAll('.decoration_slider-link'),\n      tabContent2 = document.querySelectorAll('.info-tabcontent-2'); // табы в мод окне\n\n  var info3 = document.querySelector('.balcon_icons'),\n      tabLinck = info3.querySelectorAll('.balcon_icons a'),\n      tabImg3 = info3.querySelectorAll('.type_img'),\n      tabContent3 = document.querySelectorAll('.big_img-item');\n  tabLinck.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n    });\n  });\n\n  function hideTabContent(a, b) {\n    for (var i = a; i < b.length; i++) {\n      b[i].classList.remove('show');\n      b[i].classList.add('hide');\n\n      if (b[i].classList.contains('big_img-item')) {\n        b[i].style.margin = 'auto';\n        b[i].style.marginBottom = '10px';\n      }\n    }\n  }\n\n  hideTabContent(1, tabContent);\n  hideTabContent(1, tabContent2);\n  hideTabContent(1, tabContent3);\n\n  function showTabContent(b, c) {\n    if (c[b].classList.contains('hide')) {\n      c[b].classList.add('show');\n      c[b].classList.remove('hide');\n    }\n  }\n\n  function wrap(params) {\n    params.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target || target.classList.contains('glazing_block') || target.classList.contains('tab-link') || target.classList.contains('img') || target.classList.contains('decoration_slider-link')) {\n        var tab = function tab(_tab, tabContent) {\n          for (var i = 0; i < _tab.length; i++) {\n            if (target == _tab[i]) {\n              hideTabContent(0, tabContent);\n              showTabContent(i, tabContent);\n              break;\n            }\n          }\n        }; // первая секция с табами\n\n\n        tab(tabImg, tabContent);\n        tab(tabText, tabContent); // вторая секция с табами\n\n        tab(tabText2, tabContent2); // табы в мод окне\n\n        tab(tabImg3, tabContent3);\n      }\n    });\n  }\n\n  ;\n  wrap(info);\n  wrap(info2);\n  wrap(info3); //табы, изменение стиля родителя\n\n  var slideIndex = 1;\n  showSlides(slideIndex);\n\n  function showSlides(slideIndex) {\n    tabText2.forEach(function (item) {\n      return item.parentNode.classList.remove('after_click');\n    });\n    tabText2[slideIndex - 1].parentNode.classList.add('after_click');\n  }\n\n  info2.addEventListener('click', function (event) {\n    for (var i = 0; i < tabText2.length + 1; i++) {\n      if (event.target.classList.contains('decoration_slider-link') && event.target == tabText2[i - 1]) {\n        showSlides(i);\n      }\n    }\n  }); //калькулятор, увеличение кртинок при клике\n\n  var imgIndex = 1;\n  activeImg(imgIndex);\n\n  function activeImg(imgIndex) {\n    tabImg3.forEach(function (item) {\n      return item.classList.remove('do_image_more');\n    });\n    tabImg3[imgIndex - 1].classList.add('do_image_more');\n  }\n\n  info3.addEventListener('click', function (event) {\n    for (var i = 0; i < tabImg3.length + 1; i++) {\n      if (event.target.classList.contains('type_img') && event.target == tabImg3[i - 1]) {\n        activeImg(i);\n      }\n    }\n  });\n}\n\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./parts/tabs.js?");

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\n  var deadline = Date.UTC(2019, 3, 4);\n\n  function getTimeRemaining(endtime) {\n    var t = endtime - new Date(),\n        seconds = Math.floor(t / 1000 % 60),\n        minutes = Math.floor(t / 1000 / 60 % 60),\n        hours = Math.floor(t / 1000 / 60 / 60 % 24),\n        days = Math.floor(t / (1000 * 60 * 60 * 24));\n    if (days <= 9) days = \"0\" + days;\n    if (hours <= 9) hours = \"0\" + hours;\n    if (minutes <= 9) minutes = \"0\" + minutes;\n    if (seconds <= 9) seconds = \"0\" + seconds;\n    return {\n      'total': t,\n      'days': days,\n      'hours': hours,\n      'minutes': minutes,\n      'seconds': seconds\n    };\n  }\n\n  function setClock(endtime) {\n    var days = document.getElementById('days'),\n        hours = document.getElementById('hours'),\n        minutes = document.getElementById('minutes'),\n        seconds = document.getElementById('seconds'),\n        timeInterval = setInterval(updateClock, 1000);\n\n    function updateClock() {\n      var t = getTimeRemaining(endtime);\n      days.textContent = t.days;\n      hours.textContent = t.hours;\n      minutes.textContent = t.minutes;\n      seconds.textContent = t.seconds;\n\n      if (t.total <= 0) {\n        clearInterval(timeInterval);\n        days.textContent = \"00\";\n        hours.textContent = \"00\";\n        minutes.textContent = \"00\";\n        seconds.textContent = \"00\";\n      }\n    }\n  }\n\n  setClock(deadline);\n}\n\nmodule.exports = timer;\n/*   (function () {\r\n    // Setup all the variables needed\r\n\r\n    let days = document.getElementById('days'),\r\n      hours = document.getElementById('hours'),\r\n      minutes = document.getElementById('minutes'),\r\n      seconds = document.getElementById('seconds');\r\n    var target = Date.UTC(2019, 5, 17, 8);\r\n\r\n    setInterval(function () {\r\n      var now = new Date();\r\n      var d = target - now;\r\n\r\n      // Get number of weeks until event\r\n      days.innerHTML = Math.floor((d / (1000 * 60 * 60 * 24)));\r\n      hours.innerHTML = Math.floor((d / 1000 / 60 / 60) % 24);\r\n      minutes.innerHTML = Math.floor((d / 1000 / 60) % 60);\r\n      seconds.innerHTML = Math.floor((d / 1000) % 60);\r\n\r\n    }, 1000);\r\n  }()); */\n\n//# sourceURL=webpack:///./parts/timer.js?");

/***/ })

/******/ });