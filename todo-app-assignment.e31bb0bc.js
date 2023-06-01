// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _registerApp = /*#__PURE__*/new WeakSet();
var _registerComponents = /*#__PURE__*/new WeakSet();
var _renderRemainCount = /*#__PURE__*/new WeakSet();
var _attachAddHandlers = /*#__PURE__*/new WeakSet();
var _attachDeleteHandler = /*#__PURE__*/new WeakSet();
var _attachClearAllHandler = /*#__PURE__*/new WeakSet();
var _exception = /*#__PURE__*/new WeakSet();
/**
 * @typedef {Object} ClassNames
 * @property {string} $todos
 * @property {string} $todo
 * @property {string} $addInput
 * @property {string} $addButton
 * @property {string} $deleteButton
 * @property {string} $clearButton
 * @property {string} $remainCount
 */
/**
 * @typedef {function} generateTodoEl
 * @param {string} content
 * @return {HTMLElement}
 */
/**
 * @class
 * @property {() => void} active
 */
var TodoApp = /*#__PURE__*/function () {
  /**
   * @param {string} appId - components classNames
   * @param {ClassNames} classNames - components classNames
   * @param {generateTodoEl} generateTodoEl - todo element generator
   */
  function TodoApp(_appId, _classNames, generateTodoEl) {
    _classCallCheck(this, TodoApp);
    _classPrivateMethodInitSpec(this, _exception);
    _classPrivateMethodInitSpec(this, _attachClearAllHandler);
    _classPrivateMethodInitSpec(this, _attachDeleteHandler);
    _classPrivateMethodInitSpec(this, _attachAddHandlers);
    _classPrivateMethodInitSpec(this, _renderRemainCount);
    _classPrivateMethodInitSpec(this, _registerComponents);
    _classPrivateMethodInitSpec(this, _registerApp);
    this.classNames = _classNames;
    this.generateTodoEl = generateTodoEl;
    _classPrivateMethodGet(this, _registerApp, _registerApp2).call(this, _appId);
    _classPrivateMethodGet(this, _registerComponents, _registerComponents2).call(this, _classNames);
    _classPrivateMethodGet(this, _renderRemainCount, _renderRemainCount2).call(this);
  }
  _createClass(TodoApp, [{
    key: "active",
    value: function active() {
      _classPrivateMethodGet(this, _attachAddHandlers, _attachAddHandlers2).call(this);
      _classPrivateMethodGet(this, _attachDeleteHandler, _attachDeleteHandler2).call(this);
      _classPrivateMethodGet(this, _attachClearAllHandler, _attachClearAllHandler2).call(this);
    }
  }]);
  return TodoApp;
}();
function _registerApp2(appId) {
  this.$app = document.getElementById(appId);
  if (!this.$app) {
    _classPrivateMethodGet(this, _exception, _exception2).call(this, {
      type: 'APP_NOT_FOUND',
      payload: {
        id: appId
      }
    });
  }
}
function _registerComponents2(classNames) {
  var _this = this;
  var excepts = new Set(['$todo', '$deleteButton']);
  Object.entries(classNames).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      fieldName = _ref2[0],
      /*String*/className = _ref2[1];
    if (excepts.has(fieldName)) return;
    var node = _this.$app.querySelector(".".concat(className));
    if (!node) {
      _classPrivateMethodGet(_this, _exception, _exception2).call(_this, {
        type: 'NODE_NOT_FOUND',
        payload: {
          className: className
        }
      });
    }
    _this[fieldName] = node;
  });
}
function _renderRemainCount2() {
  this.$remainCount.textContent = "".concat(this.$todos.children.length);
}
function _attachAddHandlers2() {
  var _this2 = this;
  var add = function add() {
    var content = _this2.$addInput.value.trim();
    if (!content) return;
    var todo = _this2.generateTodoEl(content);
    _this2.$todos.insertBefore(todo, _this2.$todos.children[0]);
    _this2.$addInput.value = '';
    _classPrivateMethodGet(_this2, _renderRemainCount, _renderRemainCount2).call(_this2);
  };
  this.$addButton.addEventListener('click', add);
  this.$addInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.isComposing) {
      add();
    }
  });
}
function _attachDeleteHandler2() {
  var _this3 = this;
  this.$todos.addEventListener('click', function (_ref3) {
    var target = _ref3.target;
    if (!target.classList.contains(_this3.classNames.$deleteButton)) return;
    var todo = target.closest(".".concat(_this3.classNames.$todo));
    if (!todo) return;
    todo.remove();
    _classPrivateMethodGet(_this3, _renderRemainCount, _renderRemainCount2).call(_this3);
  });
}
function _attachClearAllHandler2() {
  var _this4 = this;
  this.$clearButton.addEventListener('click', function () {
    _this4.$todos.innerHTML = '';
    _this4.$addInput.value = '';
    _classPrivateMethodGet(_this4, _renderRemainCount, _renderRemainCount2).call(_this4);
  });
}
function _exception2(_ref4) {
  var type = _ref4.type,
    payload = _ref4.payload;
  switch (type) {
    case 'APP_NOT_FOUND':
      {
        throw new Error("App node that maps to id \"".concat(payload.id, "\" not found."));
      }
    case 'NODE_NOT_FOUND':
      {
        throw new Error("Component node that maps to className \"".concat(payload.className, "\" not found."));
      }
  }
}
document.addEventListener('DOMContentLoaded', function () {
  /** @type {ClassNames} */
  var classNames = {
    $todos: 'todos',
    $todo: 'todo',
    $addButton: 'add-button',
    $addInput: 'add-input',
    $deleteButton: 'delete-button',
    $clearButton: 'clear-button',
    $remainCount: 'remain-tasks-count'
  };

  /** @type {generateTodoEl} */
  var generateTodoEl = function generateTodoEl(content) {
    var li = document.createElement('li');
    li.className = classNames.$todo;
    var p = document.createElement('p');
    p.textContent = content;
    var button = document.createElement('button');
    button.className = classNames.$deleteButton;
    li.append(p, button);
    return li;
  };
  var todoApp = new TodoApp('todoApp', classNames, generateTodoEl);
  todoApp.active();
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55298" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=todo-app-assignment.e31bb0bc.js.map