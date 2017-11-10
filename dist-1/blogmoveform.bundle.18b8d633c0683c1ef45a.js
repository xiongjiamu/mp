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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSpriteSymbol = factory());
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSprite = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = index(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: /msie/i.test(ua) || /trident/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, index(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE || browser.isEdge) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// $('.list-group > .list-group-item').click(()=> {
//     // ...
// })

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "logo",
  "use": "logo-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"logo\">\n        <defs>\n        </defs>\n        <path d=\"M533.941333 419.264c14.709333-1.621333 37.290667-3.264 68.352-3.264 51.872 0 93.802667 9.152 119.776 28.416 23.338667 17.952 38.858667 47.008 34.56 89.130667-3.978667 39.189333-24.042667 66.634667-53.312 83.594666C676.544 633.152 642.837333 640 592.106667 640c-29.888 0-58.421333-1.642667-80.106667-4.896l21.941333-215.84z m42.869334 172.938667c4.981333 0.992 11.562667 1.973333 24.533333 1.973333 51.882667 0 88.469333-25.877333 92.16-62.24 5.333333-52.554667-27.125333-70.944-81.802667-70.624-7.072 0-16.917333 0-22.133333 0.970667L576.8 592.213333h0.010667z m223.498666-164.704c210.954667-39.872 229.162667 31.776 222.645334 95.189333L1010.656 640h-66.944l11.210667-106.986667c2.421333-23.562667 17.504-69.653333-55.338667-67.914666-25.184 0.608-37.706667 4.064-37.706667 4.064s-2.186667 28.469333-4.832 49.514666L844.32 640H778.666667l13.024-119.573333\" fill=\"#231916\" p-id=\"7404\" />\n        <path d=\"M226.634667 632.682667c-12.373333 4.341333-38.037333 7.317333-73.909334 7.317333C49.6 640-6.048 590.933333 0.522667 526.090667 8.416 448.810667 90.858667 405.333333 181.141333 405.333333c34.976 0 55.552 2.858667 74.858667 7.637334l-6.208 52.064c-12.821333-4.384-42.890667-8.405333-67.232-8.405334-53.141333 0-98.250667 16.042667-103.424 66.762667-4.608 45.354667 27.061333 67.04 86.816 67.04 20.8 0 51.477333-3.018667 65.653333-7.370667l-4.992 49.6 0.021334 0.021334z\" fill=\"#C92027\" p-id=\"7405\" />\n        <path d=\"M272.714667 580.021333c19.285333 6.762667 59.488 13.504 92 13.504 35.029333 0 54.528-9.333333 56.096-23.797333 1.418667-13.205333-12.928-14.986667-52.490667-24.010667-54.666667-12.896-89.546667-32.842667-86.133333-64.704C286.176 443.989333 337.685333 416 416.725333 416c38.56 0 75.914667 2.613333 95.274667 8.714667l-6.656 46.666666c-12.565333-4.202667-60.672-10.037333-93.205333-10.037333-32.992 0-50.069333 9.973333-51.253334 20.917333-1.493333 13.845333 15.658667 14.485333 58.528 25.450667 58.026667 14.154667 83.402667 34.090667 80.085334 64.992C495.605333 609.109333 449.258667 640 356.714667 640c-38.528 0-71.744-6.762667-90.048-13.525333l6.048-46.453334z\" fill=\"#231916\" p-id=\"7406\" />\n    </symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "pencil",
  "use": "pencil-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"pencil\"><defs><style type=\"text/css\"></style></defs><path d=\"M121.905 780.19h780.19v97.524h-780.19V780.19zM823.296 298.496l-68.974-68.974-344.795 344.796-34.475 103.448 103.424-34.475zM875.008 246.76l17.237-17.238-68.949-68.949-17.262 17.237-17.237 17.238 68.974 68.973z\" p-id=\"1399\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "checked",
  "use": "checked-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"checked\"><defs><style type=\"text/css\"></style></defs><path d=\"M768 0H256C115.2 0 0 115.2 0 256v512c0 140.8 115.2 256 256 256h512c140.8 0 256-115.2 256-256V256c0-140.8-115.2-256-256-256z m17.6 377.6L460.8 728c-9.6 9.6-27.2 14.4-40 14.4-14.4 0-32-3.2-41.6-14.4l-142.4-153.6c-17.6-19.2-17.6-49.6 0-68.8 17.6-19.2 46.4-19.2 64 0l120 128 300.8-324.8c17.6-19.2 46.4-19.2 64 0s17.6 49.6 0 68.8z\" p-id=\"10094\" fill=\"#2AD41B\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

$('.icon-blog-logo').click(function () {
    //switch active  icon 
    $(this).addClass("active").siblings().removeClass("active");
    // switch active url
    var blog_url = $(this).attr('data-blog-site-url');
    $('.blog-site-url').html(blog_url);
});

//submit form -> form validation
$("#moveblogbtn").on("click", function () {
    if ($("#moveBlogForm").formIsValid()) {
        //submit form 
    } else {}
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

!function ($) {
  "use strict";

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var ClassName = {
    DANGER: 'has-danger',
    SUCCESS: 'has-success',
    VALUE_MISSING: 'value-missing'
  };

  var Properties = {
    DISABLED: 'disabled'
  };

  var Selector = {
    VALIDATE: '.validate',
    FORM_GROUP: '.form-group',
    ALL_INPUTS: 'input, select, textarea, checkbox',
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea',
    CHECKBOX: 'checkbox'
  };

  var Event = {
    CHANGE_BLUR: 'change.bs.validate ' + 'blur.bs.validate'
  };

  /**
   * ------------------------------------------------------------------------
   * Methods
   * ------------------------------------------------------------------------
   */

  // jQuery
  jQuery.fn.formIsValid = function () {
    var form = $(this[0]);
    var formGroups = $(Selector.FORM_GROUP, form);
    var formErrors = [];

    formGroups.each(function () {
      var inputs = $(Selector.ALL_INPUTS, $(this));
      if (inputs.length) {
        formErrors.push(_validate_input(inputs));
      }
    });

    return $.inArray(0, formErrors) === -1;
  };

  // private

  var _validate_input = function (input) {
    var retVal = 1;
    var formGroup = input.closest(Selector.FORM_GROUP);
    var inputValidity = input[0].validity;

    // skip over inputs that are disabled
    if (input.prop(Properties.DISABLED)) {} else if (inputValidity.valid) {
      formGroup.removeClass(ClassName.DANGER);

      // only style inputs that have a value
      // this prevents empty non-required inputs from getting styled
      if (input.val()) {
        formGroup.addClass(ClassName.SUCCESS);
      }
    } else {
      retVal = 0;
      formGroup.removeClass(ClassName.SUCCESS).addClass(ClassName.DANGER);

      // check if a required field is empty
      // value-missing will overwrite .form-control-feedback with 'Required'
      if (inputValidity.valueMissing) {
        formGroup.addClass(ClassName.VALUE_MISSING);
      } else {
        formGroup.removeClass(ClassName.VALUE_MISSING);
      }
    }

    return retVal;
  };

  /**
   * ------------------------------------------------------------------------
   * Events
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CHANGE_BLUR, Selector.VALIDATE, function (e) {
    var input = $(e.target);
    var tag = input[0].tagName.toLowerCase();

    switch (tag) {
      case Selector.INPUT:
      case Selector.SELECT:
      case Selector.TEXTAREA:
      case Selector.CHECKBOX:
        _validate_input(input);
        break;
    };
  });
}(jQuery);

//# sourceURL=jorosob.js

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "jianshu",
  "use": "jianshu-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"jianshu\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"1963\" /><path d=\"M801.28 245.76h46.08c5.12 0 12.8 5.12 12.8 10.24-2.56 7.68-7.68 15.36-10.24 23.04h145.92c0 10.24-2.56 17.92-2.56 28.16 0 7.68-7.68 12.8-12.8 12.8h-66.56c5.12 12.8 12.8 25.6 15.36 38.4 2.56 7.68-5.12 15.36-12.8 15.36h-40.96c-2.56-17.92-7.68-35.84-15.36-53.76h-38.4c-25.6 30.72-58.88 56.32-97.28 66.56v-40.96c20.48-12.8 38.4-25.6 51.2-46.08 15.36-15.36 20.48-35.84 25.6-53.76z m427.52 0h58.88v79.36H1459.2v158.72h66.56v161.28c0 30.72-28.16 56.32-58.88 58.88h-61.44c-7.68 0-15.36-5.12-15.36-10.24-2.56-10.24-2.56-20.48-2.56-30.72h56.32c12.8 0 23.04-10.24 23.04-23.04v-112.64h-181.76v207.36c0 10.24-7.68 17.92-15.36 17.92-12.8 2.56-28.16 2.56-40.96 5.12v-230.4h-174.08c-7.68 0-12.8-7.68-12.8-12.8 0-10.24-2.56-20.48-2.56-28.16h192v-115.2h-140.8c-7.68 0-12.8-5.12-12.8-10.24-2.56-10.24-2.56-20.48-2.56-30.72h158.72c-5.12-33.28-5.12-58.88-5.12-84.48m58.88 120.32v115.2h112.64v-115.2h-112.64zM565.76 245.76h46.08c5.12 0 12.8 5.12 12.8 10.24-2.56 7.68-7.68 15.36-10.24 23.04h138.24c0 7.68-2.56 17.92-2.56 25.6 0 7.68-7.68 12.8-15.36 12.8h-64l15.36 38.4c2.56 7.68-2.56 15.36-10.24 15.36h-40.96c-2.56-17.92-7.68-35.84-12.8-53.76h-30.72c-25.6 33.28-64 58.88-104.96 69.12v-40.96c40.96-15.36 69.12-56.32 79.36-99.84z m867.84 15.36h53.76c25.6 30.72 46.08 69.12 58.88 107.52 2.56 7.68-2.56 15.36-10.24 15.36h-46.08c-10.24-43.52-30.72-84.48-56.32-122.88z\" p-id=\"1964\" /><path d=\"M537.6 366.08h53.76c17.92 20.48 30.72 43.52 38.4 69.12 2.56 7.68-2.56 17.92-10.24 17.92h-43.52c-7.68-30.72-20.48-58.88-38.4-87.04z m99.84 25.6h330.24V691.2c0 28.16-20.48 56.32-48.64 61.44-20.48 5.12-38.4 2.56-58.88 2.56-7.68 0-15.36-2.56-17.92-10.24-2.56-10.24-2.56-20.48-5.12-30.72h53.76c12.8 0 20.48-12.8 20.48-23.04V435.2h-256c-7.68 0-12.8-5.12-12.8-10.24-5.12-10.24-5.12-23.04-5.12-33.28z m-120.32 61.44h56.32v279.04c0 10.24-7.68 17.92-15.36 20.48-12.8 2.56-25.6 2.56-40.96 5.12V453.12z\" p-id=\"1965\" /><path d=\"M632.32 471.04h220.16v153.6c0 12.8-2.56 25.6-7.68 35.84-10.24 20.48-35.84 33.28-58.88 33.28h-153.6v-222.72m53.76 38.4v48.64h112.64v-48.64h-112.64m0 89.6v53.76h89.6c10.24 0 20.48-5.12 23.04-15.36 2.56-12.8 0-25.6 0-38.4h-112.64z\" p-id=\"1966\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(10);
__webpack_require__(11);

__webpack_require__(6);
__webpack_require__(12);
__webpack_require__(13);

__webpack_require__(7);
__webpack_require__(8);

__webpack_require__(14);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(9);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "sina",
  "use": "sina-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"sina\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"2298\" /><path d=\"M1175.04 491.52s51.2-151.04-156.16-76.8c0 0 15.36-66.56-17.92-89.6-33.28-23.04-99.84-2.56-194.56 84.48 0 0-117.76 104.96-99.84 202.24s135.68 163.84 304.64 148.48c176.64-17.92 350.72-204.8 163.84-268.8z m-199.68 222.72c-102.4 12.8-192-28.16-199.68-94.72-7.68-66.56 66.56-130.56 166.4-145.92 102.4-12.8 192 28.16 199.68 94.72 10.24 69.12-66.56 133.12-166.4 145.92z\" p-id=\"2299\" /><path d=\"M916.48 527.36c-53.76 20.48-81.92 74.24-64 117.76 17.92 43.52 74.24 64 128 40.96 53.76-20.48 81.92-74.24 64-117.76-20.48-40.96-76.8-61.44-128-40.96z m10.24 117.76c-12.8 7.68-30.72 2.56-35.84-7.68-5.12-12.8 0-25.6 15.36-33.28 12.8-7.68 30.72-2.56 35.84 7.68 5.12 12.8-2.56 28.16-15.36 33.28z m286.72-189.44h5.12c7.68 0 15.36-5.12 17.92-12.8 10.24-30.72 5.12-58.88-7.68-79.36-25.6-35.84-76.8-38.4-79.36-38.4-10.24 0-17.92 7.68-20.48 17.92 0 10.24 7.68 17.92 17.92 20.48 0 0 35.84 2.56 51.2 23.04 7.68 10.24 7.68 25.6 2.56 46.08-2.56 10.24 5.12 20.48 12.8 23.04z\" p-id=\"2300\" /><path d=\"M1295.36 307.2c-56.32-64-158.72-58.88-163.84-56.32-10.24 0-17.92 10.24-17.92 20.48s10.24 17.92 20.48 17.92c0 0 89.6-5.12 133.12 43.52 25.6 30.72 33.28 74.24 20.48 133.12-2.56 10.24 5.12 20.48 15.36 23.04h5.12c7.68 0 15.36-5.12 17.92-15.36 12.8-69.12 2.56-125.44-30.72-166.4z\" p-id=\"2301\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "netease",
  "use": "netease-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"netease\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"2410\" /><path d=\"M704 660.48c7.68-10.24-5.12-48.64-5.12-48.64-48.64-43.52-38.4 30.72-38.4 30.72 33.28 56.32 43.52 17.92 43.52 17.92z m194.56-30.72s-53.76 2.56-43.52 35.84c0 0 81.92 20.48 89.6-15.36 2.56 0 7.68-33.28-46.08-20.48z m-217.6-163.84c-46.08-48.64 15.36-64 15.36-64 23.04-64-30.72-58.88-30.72-58.88-53.76-10.24-20.48 25.6-20.48 25.6-10.24 35.84-38.4 48.64-38.4 48.64-74.24-15.36-15.36-69.12-15.36-69.12-2.56-35.84 53.76-35.84 53.76-35.84 17.92-2.56 15.36-20.48 15.36-20.48-10.24-40.96-69.12-20.48-69.12-20.48-30.72 20.48-64 99.84-64 99.84-20.48 40.96 30.72 64 30.72 64 17.92 30.72-30.72 84.48-30.72 84.48 2.56 87.04 53.76 69.12 53.76 69.12 5.12 15.36 69.12 5.12 69.12 5.12-2.56-12.8 48.64-40.96 48.64-40.96 7.68-64-17.92-87.04-17.92-87.04z m-46.08 89.6s-79.36 2.56-64-30.72c0 0 17.92-46.08 25.6-40.96 0 0 35.84-43.52 64 10.24 0-2.56 10.24 43.52-25.6 61.44z m-128 130.56c-10.24 69.12 38.4 40.96 38.4 40.96-2.56-33.28 20.48-48.64 20.48-48.64V614.4c-43.52-15.36-58.88 71.68-58.88 71.68z m89.6-51.2c-15.36 156.16 38.4 74.24 38.4 74.24 7.68-133.12-38.4-74.24-38.4-74.24z m414.72-248.32c23.04-40.96-25.6-74.24-25.6-74.24l-33.28-5.12c-35.84-17.92-99.84-5.12-99.84-5.12-38.4 12.8-104.96 5.12-104.96 5.12-48.64 58.88-5.12 115.2-5.12 115.2v110.08c-7.68 102.4-48.64 153.6-48.64 153.6 5.12 64 43.52 25.6 43.52 25.6 25.6-15.36 38.4-138.24 38.4-138.24l25.6 10.24v64c12.8 25.6 40.96 15.36 43.52 10.24s0-15.36 0-15.36c-17.92-7.68-5.12-58.88-5.12-58.88 0-28.16 112.64-15.36 112.64-15.36 23.04-58.88-58.88-40.96-58.88-40.96-17.92-2.56-10.24-35.84-10.24-35.84 38.4-20.48 84.48-2.56 84.48 10.24 2.56 12.8 0 174.08 0 174.08 15.36 99.84 53.76 35.84 53.76 35.84 7.68-25.6-15.36-104.96-15.36-104.96-20.48-58.88 5.12-220.16 5.12-220.16z m-163.84 153.6c-53.76-10.24-69.12 5.12-69.12 5.12-5.12-79.36 69.12-48.64 69.12-48.64v43.52z m115.2-89.6l-48.64-5.12 5.12-25.6c17.92-12.8 15.36-53.76 15.36-53.76-53.76-30.72-48.64 40.96-48.64 40.96-2.56 58.88-43.52 48.64-43.52 48.64h-58.88c-51.2-35.84-10.24-99.84-10.24-99.84l53.76-10.24c2.56-20.48 79.36-10.24 79.36-10.24 48.64 2.56 53.76 35.84 53.76 35.84v79.36z m424.96 151.04s-102.4 61.44-128 89.6c0 0-76.8 23.04-99.84 25.6 0 0-66.56 69.12 64 35.84 0 0 71.68-30.72 99.84-64 0 0 89.6-66.56 122.88-94.72 0 2.56 5.12-56.32-58.88 7.68z m176.64 0c2.56-76.8-94.72-115.2-94.72-115.2-7.68 0-74.24-5.12-74.24-5.12-48.64-5.12-30.72 35.84-30.72 35.84-140.8 115.2-217.6 115.2-217.6 115.2-66.56 40.96 10.24 48.64 10.24 48.64 66.56 5.12 248.32-153.6 248.32-153.6 17.92-10.24 43.52 0 43.52 0 0 23.04 10.24 30.72 10.24 30.72 104.96-17.92 48.64 94.72 48.64 94.72-33.28 58.88-112.64 53.76-112.64 53.76-48.64-30.72-43.52 0-43.52 0 17.92 120.32 148.48 20.48 148.48 20.48 84.48-61.44 64-125.44 64-125.44z m-171.52-215.04c58.88-12.8 15.36-35.84 15.36-35.84-20.48-12.8-138.24 0-138.24 0-30.72 23.04 0 35.84 0 35.84h122.88z m-578.56-15.36c-20.48 20.48 5.12 56.32 5.12 56.32 17.92 20.48 30.72 5.12 30.72 5.12v-35.84c-10.24-38.4-35.84-25.6-35.84-25.6z m325.12 209.92c138.24-7.68 197.12-104.96 197.12-104.96l133.12-5.12c43.52-15.36 43.52-40.96 43.52-40.96 10.24-15.36 0-69.12 0-69.12-5.12-71.68-38.4-84.48-38.4-84.48-25.6-5.12-38.4-10.24-38.4-10.24-20.48-7.68-79.36 0-79.36 0-30.72-20.48-99.84 0-99.84 0-58.88 20.48-10.24 48.64-10.24 48.64 217.6-48.64 217.6 25.6 217.6 25.6 20.48 84.48-20.48 84.48-20.48 84.48-56.32-2.56-48.64 10.24-48.64 10.24-20.48 2.56-25.6-5.12-25.6-5.12-38.4-12.8-74.24 10.24-74.24 10.24H1254.4c-20.48-2.56-25.6-30.72-25.6-30.72v-84.48c-28.16-43.52-48.64 5.12-48.64 5.12v110.08c25.6 61.44 94.72 35.84 94.72 35.84-12.8 33.28-89.6 58.88-89.6 58.88-20.48 2.56-53.76 0-53.76 0-38.4 28.16 7.68 46.08 7.68 46.08z\" p-id=\"2411\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "bokeyuan",
  "use": "bokeyuan-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"bokeyuan\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"2075\" /><path d=\"M939.52 432.64H921.6v222.72h-48.64v-222.72h-20.48v-10.24h20.48v-66.56H921.6v66.56h17.92v10.24z m212.48 148.48h-23.04v38.4c0 25.6-15.36 38.4-43.52 38.4-30.72 0-58.88-7.68-81.92-23.04-5.12-2.56-7.68-5.12-7.68-5.12 0-2.56 5.12 0 10.24 0 12.8 2.56 30.72 2.56 48.64 2.56 15.36 0 23.04-7.68 20.48-25.6v-25.6h-145.92v-10.24H1075.2v-17.92h15.36v-28.16h-23.04v35.84h-48.64v-35.84h-23.04v35.84H947.2v-138.24h48.64v10.24c2.56-7.68 10.24-12.8 23.04-12.8v-17.92h-79.36v-10.24h79.36V358.4h48.64v33.28h28.16c-10.24-2.56-15.36-10.24-17.92-25.6h38.4c5.12 12.8 12.8 23.04 17.92 25.6h17.92v10.24h-81.92v17.92H1100.8c28.16 0 43.52 10.24 40.96 33.28v104.96h-12.8v10.24h23.04v12.8z m-192 5.12h58.88c10.24 17.92 23.04 28.16 40.96 35.84-30.72 0-51.2 0-61.44-2.56-10.24 0-17.92-5.12-20.48-10.24-2.56-2.56-5.12-5.12-7.68-10.24-7.68-7.68-10.24-10.24-10.24-12.8z m35.84-148.48v28.16h23.04v-35.84h-5.12c-7.68 0-15.36 2.56-17.92 7.68z m0 38.4v33.28h23.04v-30.72l-23.04-2.56z m76.8-46.08h-5.12v35.84h23.04v-17.92c2.56-12.8-5.12-20.48-17.92-17.92z m-5.12 46.08v33.28h23.04v-30.72l-23.04-2.56z m161.28-25.6h-51.2v-64h51.2v28.16c5.12-17.92 20.48-28.16 48.64-25.6h15.36v-28.16h58.88v28.16h61.44c38.4 0 56.32 10.24 53.76 30.72v10.24c0 7.68 0 15.36-2.56 23.04h-35.84c0 7.68-2.56 12.8-7.68 15.36-17.92 12.8-35.84 25.6-56.32 35.84 7.68 5.12 17.92 10.24 30.72 15.36 2.56 2.56 5.12 2.56 5.12 2.56 23.04 10.24 46.08 17.92 74.24 25.6-51.2 10.24-89.6 7.68-115.2-5.12-12.8-5.12-23.04-10.24-33.28-17.92-5.12 2.56-10.24 5.12-17.92 10.24-7.68 5.12-12.8 7.68-17.92 7.68-20.48 10.24-61.44 15.36-120.32 10.24 33.28-7.68 64-17.92 92.16-33.28 10.24-5.12 17.92-10.24 28.16-12.8-12.8-7.68-25.6-15.36-38.4-20.48-10.24 12.8-33.28 17.92-69.12 15.36 17.92-10.24 40.96-38.4 69.12-81.92h48.64c-2.56 2.56-2.56 5.12-5.12 7.68-2.56 2.56-5.12 7.68-10.24 15.36 7.68-5.12 15.36-7.68 25.6-7.68h74.24c12.8 0 23.04 2.56 30.72 5.12v-12.8c0-12.8-7.68-17.92-23.04-17.92h-120.32c-23.04 0-38.4 7.68-46.08 20.48l2.56 20.48z m30.72 199.68H1203.2v-94.72h56.32v23.04c2.56-15.36 12.8-23.04 33.28-23.04h102.4c33.28 0 48.64 12.8 51.2 38.4v23.04c0 23.04-15.36 35.84-48.64 33.28h-104.96c-20.48 0-30.72-7.68-33.28-23.04v23.04z m0-61.44v33.28c2.56 10.24 12.8 15.36 28.16 15.36h81.92c15.36 0 20.48-5.12 20.48-15.36v-30.72c0-15.36-7.68-23.04-25.6-23.04h-74.24c-15.36 0-25.6 5.12-30.72 20.48z m97.28-148.48h-48.64c-12.8 0-25.6 5.12-33.28 15.36l-7.68 7.68h25.6c5.12 5.12 15.36 7.68 25.6 12.8 5.12 2.56 7.68 2.56 10.24 2.56 2.56-2.56 7.68-2.56 10.24-5.12 7.68-5.12 12.8-7.68 17.92-10.24 12.8-7.68 20.48-12.8 17.92-17.92 0-2.56-5.12-5.12-17.92-5.12z m192 212.48h-48.64v-281.6h48.64v17.92c5.12-10.24 15.36-17.92 33.28-17.92h148.48c38.4 0 56.32 15.36 56.32 43.52v197.12c0 28.16-15.36 43.52-46.08 40.96h-161.28c-17.92 0-25.6-5.12-30.72-17.92v17.92z m0-253.44v222.72c2.56 12.8 10.24 17.92 20.48 15.36h143.36c17.92 0 28.16-10.24 28.16-30.72V409.6c0-17.92-10.24-28.16-28.16-28.16h-135.68c-12.8 2.56-23.04 7.68-28.16 17.92z m102.4 171.52v-81.92h-23.04c0 28.16-2.56 58.88-7.68 87.04 0 28.16-23.04 40.96-69.12 35.84 15.36-12.8 23.04-28.16 23.04-46.08 0-10.24 2.56-25.6 5.12-51.2 0-10.24 0-17.92 2.56-28.16h-25.6v-12.8h174.08v12.8h-33.28v76.8c0 12.8 2.56 20.48 10.24 17.92 7.68 2.56 15.36-10.24 20.48-40.96 5.12 46.08-2.56 66.56-25.6 64H1689.6c-28.16 5.12-40.96-7.68-38.4-33.28z m61.44-138.24h-140.8v-12.8h140.8v12.8zM673.28 332.8c-97.28-97.28-253.44-97.28-350.72 0s-97.28 253.44 0 348.16c97.28 97.28 253.44 97.28 348.16 0 99.84-94.72 99.84-253.44 2.56-348.16zM435.2 616.96c-10.24 10.24-25.6 10.24-33.28 0-10.24-10.24-10.24-25.6 0-33.28 10.24-10.24 25.6-10.24 33.28 0s7.68 25.6 0 33.28z m104.96 2.56c0 5.12-2.56 7.68-5.12 10.24-7.68 7.68-20.48 7.68-28.16 0-5.12-5.12-7.68-10.24-5.12-17.92 0-2.56 0-10.24-2.56-23.04-2.56-17.92-12.8-33.28-25.6-46.08s-28.16-20.48-46.08-25.6h-20.48c-5.12 2.56-12.8 0-17.92-5.12-7.68-7.68-7.68-20.48 0-28.16 2.56-2.56 7.68-5.12 10.24-5.12 2.56 0 56.32-7.68 102.4 38.4 46.08 43.52 38.4 99.84 38.4 102.4z m89.6 2.56c-2.56 10.24-12.8 17.92-23.04 15.36-5.12 0-7.68-2.56-10.24-5.12-5.12-5.12-7.68-10.24-5.12-17.92 0 0 2.56-20.48-2.56-46.08-7.68-35.84-23.04-66.56-48.64-92.16s-56.32-40.96-92.16-48.64c-25.6-5.12-46.08-2.56-46.08-2.56-7.68 0-12.8-2.56-17.92-5.12-2.56-2.56-5.12-7.68-5.12-10.24-2.56-10.24 5.12-20.48 17.92-20.48 0 0 25.6-2.56 56.32 2.56 17.92 2.56 38.4 10.24 53.76 17.92 20.48 10.24 40.96 25.6 58.88 43.52 17.92 17.92 30.72 38.4 43.52 58.88 7.68 17.92 15.36 35.84 17.92 53.76 7.68 33.28 2.56 56.32 2.56 56.32z\" p-id=\"2076\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "51cto",
  "use": "51cto-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"51cto\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"3082\" /><path d=\"M1792 650.24h-66.56v-43.52-117.76c0-5.12 0-12.8-2.56-17.92-2.56-2.56-7.68-5.12-10.24-5.12-5.12 0-10.24 2.56-10.24 5.12-2.56 5.12 0 20.48 0 28.16v151.04H1638.4v-17.92-143.36c0-10.24 2.56-25.6-10.24-25.6-15.36-2.56-15.36 12.8-15.36 23.04v163.84h-64v-225.28H1612.8c0 5.12 0 10.24 2.56 12.8 15.36-5.12 30.72-15.36 46.08-15.36 15.36 0 28.16 12.8 46.08 17.92 7.68-5.12 17.92-12.8 28.16-17.92 28.16-10.24 58.88 7.68 58.88 38.4-2.56 61.44-2.56 122.88-2.56 189.44M1103.36 448c0-48.64-20.48-74.24-69.12-79.36-48.64-7.68-99.84 15.36-97.28 76.8v115.2c0 17.92 0 35.84 5.12 51.2 12.8 33.28 48.64 48.64 89.6 43.52 46.08-7.68 69.12-30.72 69.12-79.36 2.56-40.96 2.56-84.48 2.56-128m-74.24 135.68c0 5.12 0 10.24-2.56 17.92 0 2.56-5.12 7.68-7.68 7.68-2.56 0-7.68-5.12-10.24-7.68-2.56-5.12-2.56-12.8-2.56-17.92v-143.36-5.12s0-15.36 10.24-15.36c7.68 0 10.24 10.24 10.24 15.36v76.8c2.56 23.04 2.56 46.08 2.56 71.68M752.64 491.52h-74.24v-48.64c0-5.12 0-12.8-2.56-17.92 0-2.56-7.68-7.68-10.24-7.68-5.12 0-10.24 2.56-10.24 7.68-2.56 5.12-2.56 10.24-2.56 17.92v153.6c0 2.56 5.12 12.8 12.8 12.8 5.12 0 10.24-10.24 10.24-12.8 2.56-17.92 0-35.84 0-56.32h71.68c12.8 46.08-2.56 92.16-35.84 110.08-33.28 17.92-69.12 15.36-102.4-5.12-20.48-12.8-28.16-33.28-28.16-56.32 0-46.08-2.56-92.16 0-138.24 0-46.08 17.92-66.56 64-76.8 25.6-5.12 51.2-2.56 76.8 10.24 15.36 7.68 25.6 20.48 25.6 38.4 2.56 20.48 5.12 43.52 5.12 69.12M325.12 414.72v40.96c15.36-2.56 28.16-7.68 40.96-10.24 33.28-2.56 53.76 15.36 56.32 51.2 2.56 33.28 2.56 69.12 0 102.4 0 28.16-28.16 53.76-61.44 56.32-17.92 0-33.28 0-51.2-5.12-28.16-5.12-46.08-25.6-48.64-53.76-2.56-17.92-2.56-33.28-2.56-51.2h69.12c0 17.92 2.56 35.84 5.12 51.2 0 5.12 5.12 12.8 12.8 12.8 5.12 2.56 10.24-7.68 10.24-15.36 0-30.72 2.56-58.88 0-94.72 0-5.12-10.24-12.8-17.92-7.68-10.24 5.12-7.68 10.24-10.24 17.92h-64v-140.8h148.48v43.52c-33.28 2.56-58.88 2.56-87.04 2.56M1344 506.88H1280v-33.28c0-5.12-2.56-12.8-10.24-12.8-7.68 0-10.24 7.68-10.24 12.8v122.88c0 5.12 5.12 15.36 12.8 15.36s10.24-10.24 10.24-15.36c2.56-12.8 0-25.6 0-40.96h61.44c2.56 30.72 2.56 64-25.6 84.48-28.16 20.48-58.88 17.92-89.6 7.68-20.48-7.68-33.28-23.04-35.84-43.52-2.56-40.96-5.12-81.92-2.56-122.88 2.56-35.84 28.16-58.88 66.56-61.44 17.92 0 38.4 2.56 53.76 10.24 28.16 12.8 35.84 35.84 33.28 76.8M765.44 424.96v-53.76H921.6v56.32h-40.96v222.72h-74.24v-20.48-179.2-23.04h-23.04c-5.12-2.56-10.24-2.56-17.92-2.56M483.84 647.68v-143.36-5.12c0-56.32 5.12-48.64-46.08-53.76v-28.16c28.16-7.68 53.76-20.48 74.24-43.52 7.68-7.68 25.6-2.56 40.96-5.12v279.04h-69.12M1121.28 593.92h48.64v53.76h-48.64zM1523.2 483.84c0-28.16-17.92-51.2-46.08-58.88-15.36-5.12-33.28-7.68-48.64-5.12-35.84 2.56-58.88 20.48-61.44 56.32-2.56 43.52-2.56 84.48 0 128 0 23.04 17.92 38.4 38.4 43.52 17.92 2.56 35.84 5.12 53.76 5.12 35.84-2.56 56.32-23.04 61.44-58.88l2.56-58.88v-51.2m-76.8 128c-17.92 0-17.92-151.04 0-151.04 15.36 0 15.36 151.04 0 151.04\" p-id=\"3083\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "chinaunix",
  "use": "chinaunix-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"chinaunix\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"2520\" /><path d=\"M437.76 424.96V460.8s-53.76-25.6-92.16-5.12-46.08 35.84-46.08 71.68 5.12 43.52 28.16 61.44c23.04 20.48 71.68 20.48 110.08 10.24v35.84s-28.16 10.24-56.32 10.24-66.56-7.68-92.16-28.16C256 588.8 253.44 560.64 253.44 527.36s7.68-53.76 28.16-71.68c20.48-20.48 53.76-35.84 99.84-35.84 43.52-5.12 56.32 5.12 56.32 5.12zM465.92 414.72v227.84h43.52v-110.08s7.68-28.16 46.08-28.16 38.4 28.16 38.4 28.16v110.08h43.52v-135.68s-2.56-12.8-17.92-28.16c-15.36-15.36-61.44-12.8-61.44-12.8s-48.64 7.68-48.64 38.4v-89.6h-43.52zM665.6 468.48h46.08V640H665.6zM688.64 453.12c-12.8 0-23.04-10.24-23.04-23.04s10.24-23.04 23.04-23.04 23.04 10.24 23.04 23.04-10.24 23.04-23.04 23.04zM747.52 468.48V640H793.6v-107.52s5.12-30.72 46.08-30.72 35.84 25.6 35.84 25.6v110.08H921.6v-128s2.56-15.36-10.24-28.16c-12.8-12.8-30.72-17.92-64-17.92s-53.76 25.6-53.76 25.6v-25.6h-46.08zM954.88 478.72v28.16s15.36-10.24 53.76-10.24 35.84 12.8 35.84 12.8v15.36s-33.28 17.92-56.32 17.92c-23.04 0-53.76 25.6-53.76 51.2s17.92 48.64 38.4 48.64h33.28s20.48 0 20.48-20.48v-12.8s-10.24 7.68-23.04 7.68c-15.36 0-30.72-2.56-30.72-23.04s20.48-17.92 35.84-23.04 38.4-17.92 38.4-17.92v89.6h46.08v-135.68s2.56-5.12-10.24-20.48c-12.8-15.36-15.36-17.92-33.28-17.92h-56.32s-17.92 0-38.4 10.24zM1118.72 414.72v153.6s2.56 30.72 17.92 46.08c15.36 15.36 40.96 28.16 64 28.16H1254.4s25.6-5.12 46.08-17.92 28.16-30.72 28.16-48.64v-161.28h-53.76v145.92s0 35.84-28.16 35.84h-48.64s-28.16 0-28.16-35.84v-145.92h-51.2zM1361.92 468.48V640H1408v-107.52s5.12-30.72 46.08-30.72 35.84 25.6 35.84 25.6v110.08H1536v-128s2.56-15.36-10.24-28.16c-12.8-12.8-30.72-17.92-64-17.92s-53.76 25.6-53.76 25.6v-25.6h-46.08zM1559.04 468.48h46.08V640h-46.08zM1582.08 453.12c-12.8 0-23.04-10.24-23.04-23.04s10.24-23.04 23.04-23.04 23.04 10.24 23.04 23.04-10.24 23.04-23.04 23.04zM1710.08 514.56l-35.84-46.08h-46.08l53.76 84.48-61.44 89.6h53.76l35.84-53.76 35.84 53.76H1792l-56.32-89.6 56.32-84.48h-46.08zM1620.48 389.12v64h17.92v-38.4s0-7.68 10.24-7.68c7.68 0 10.24 7.68 10.24 7.68v38.4h17.92v-38.4s0-10.24-7.68-17.92c-7.68-5.12-20.48-10.24-30.72 2.56v-7.68h-17.92zM1748.48 389.12v12.8h10.24v35.84s0 15.36 15.36 15.36 15.36-17.92 15.36-17.92h-10.24v5.12c0 2.56-7.68 2.56-7.68-2.56v-33.28h20.48v-12.8h-17.92v-10.24h-12.8v10.24h-12.8zM1730.56 432.64s-7.68 5.12-12.8 5.12-15.36 0-15.36-15.36h40.96s0-15.36-2.56-23.04c-5.12-7.68-10.24-12.8-25.6-12.8-12.8 0-28.16 10.24-28.16 33.28s17.92 30.72 28.16 30.72c10.24 0 28.16-5.12 28.16-17.92h-12.8z m-12.8-33.28c12.8 0 12.8 12.8 12.8 12.8h-25.6c-2.56 0-2.56-12.8 12.8-12.8z\" p-id=\"2521\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "hexun",
  "use": "hexun-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"hexun\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"2968\" /><path d=\"M391.68 304.64h25.6l58.88 389.12-48.64 7.68zM601.6 256l-107.52 504.32 87.04 7.68 56.32-512z\" p-id=\"2969\" /><path d=\"M427.52 381.44c130.56-56.32 340.48-58.88 340.48-58.88-230.4 43.52-332.8 97.28-332.8 97.28l-7.68-38.4z\" p-id=\"2970\" /><path d=\"M399.36 391.68s-84.48 38.4-99.84 102.4c-17.92 64 38.4 99.84 102.4 115.2 64 15.36 209.92 7.68 294.4-5.12 0 0-166.4 2.56-240.64-17.92-74.24-23.04-143.36-61.44-48.64-148.48l-7.68-46.08zM785.92 343.04s120.32 5.12 192-23.04l38.4 38.4s-56.32 10.24-74.24 12.8v43.52H1024v38.4h-79.36v38.4l30.72-23.04 61.44 51.2-38.4 30.72-51.2-51.2v130.56h-64v-104.96l-64 51.2h-7.68L773.12 537.6s56.32-17.92 102.4-76.8v-5.12h-89.6v-40.96h94.72v-38.4s-48.64 5.12-74.24 10.24l-20.48-43.52z\" p-id=\"2971\" /><path d=\"M1200.64 381.44h-56.32s-43.52 23.04-53.76 46.08V409.6s-30.72-7.68-56.32-33.28v232.96H1228.8V409.6c0-2.56-5.12-28.16-28.16-28.16zM1172.48 563.2h-79.36v-115.2s33.28-35.84 56.32-35.84c20.48 0 23.04 17.92 23.04 17.92V563.2zM1287.68 401.92v40.96h71.68v128l-12.8 12.8 38.4 43.52 107.52-69.12V512l-74.24 35.84v-145.92zM1320.96 348.16s56.32 33.28 71.68 46.08l40.96-30.72-66.56-43.52c2.56 0-23.04 10.24-46.08 28.16M1448.96 343.04v38.4H1612.8s20.48 5.12 20.48 25.6v179.2s10.24 40.96 51.2 40.96h66.56v-40.96h-40.96s-23.04 0-23.04-20.48v-158.72s-15.36-61.44-56.32-61.44h-181.76z\" p-id=\"2972\" /><path d=\"M1505.28 401.92v46.08h-56.32v40.96h56.32v138.24h61.44v-138.24h51.2v-40.96h-51.2v-23.04zM778.24 632.32v104.96h23.04v-43.52s28.16-17.92 33.28-17.92h7.68s15.36 0 15.36 15.36v46.08h17.92v-58.88s-2.56-23.04-25.6-23.04-48.64 25.6-48.64 25.6v-33.28c-2.56 0-15.36-15.36-23.04-15.36M926.72 655.36s-33.28 12.8-33.28 30.72v23.04s7.68 28.16 33.28 28.16h33.28s23.04-7.68 23.04-20.48v-5.12h-20.48s0 10.24-12.8 10.24h-23.04s-17.92-5.12-17.92-20.48V691.2s5.12-20.48 20.48-20.48h17.92s15.36 5.12 15.36 15.36H921.6l17.92 15.36h48.64v-23.04s-7.68-23.04-28.16-23.04h-33.28zM995.84 655.36h17.92l23.04 28.16h7.68l17.92-28.16h20.48v7.68l-30.72 35.84 30.72 40.96h-23.04l-20.48-28.16-20.48 28.16h-23.04l30.72-40.96-30.72-35.84zM1098.24 655.36v69.12s7.68 17.92 25.6 17.92 25.6-5.12 25.6-5.12l23.04-15.36v20.48h17.92v-84.48h-20.48v46.08s-20.48 20.48-30.72 20.48H1126.4s-10.24-2.56-10.24-10.24v-43.52l-17.92-15.36zM1213.44 655.36v84.48h20.48v-46.08s20.48-20.48 38.4-20.48 15.36 10.24 15.36 17.92v48.64h20.48v-66.56s-2.56-17.92-23.04-17.92c-17.92 0-28.16 5.12-28.16 5.12l-23.04 17.92V665.6c-2.56 0-12.8-10.24-20.48-10.24M1346.56 719.36h20.48v17.92h-20.48zM1474.56 673.28s-10.24-17.92-25.6-17.92h-28.16s-33.28 2.56-38.4 33.28v20.48s10.24 30.72 33.28 30.72h35.84s28.16-12.8 28.16-23.04v-7.68h-15.36s-5.12 15.36-20.48 15.36h-17.92s-20.48-5.12-20.48-20.48v-17.92s5.12-17.92 25.6-17.92h12.8s10.24 5.12 10.24 12.8c0 2.56 12.8 5.12 20.48-7.68M1553.92 652.8h-15.36c-25.6 0-43.52 20.48-43.52 43.52 0 23.04 20.48 43.52 43.52 43.52h15.36c25.6 0 43.52-20.48 43.52-43.52 0-23.04-17.92-43.52-43.52-43.52m-7.68 71.68c-17.92 0-30.72-12.8-30.72-28.16 0-15.36 12.8-28.16 30.72-28.16s30.72 12.8 30.72 28.16c0 15.36-15.36 28.16-30.72 28.16M1610.24 655.36v84.48h23.04v-51.2s10.24-15.36 23.04-15.36h12.8s10.24 0 10.24 12.8v53.76h20.48v-53.76s0-15.36 15.36-15.36h7.68s10.24 0 10.24 15.36v53.76h20.48v-58.88s-2.56-25.6-23.04-25.6h-25.6s-15.36 5.12-15.36 10.24c0 0-7.68-10.24-15.36-10.24s-23.04 0-38.4 23.04v-7.68c-2.56 0-10.24-15.36-25.6-15.36\" p-id=\"2973\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "oschina",
  "use": "oschina-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"oschina\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"2630\" /><path d=\"M432.64 604.16c58.88 0 87.04-48.64 87.04-48.64l145.92 48.64s-56.32 145.92-222.72 153.6c-151.04 5.12-248.32-120.32-248.32-245.76 0-140.8 102.4-245.76 250.88-245.76 158.72 0 217.6 153.6 217.6 153.6l-143.36 53.76S486.4 409.6 430.08 412.16c-48.64 0-99.84 40.96-97.28 97.28 7.68 61.44 48.64 94.72 99.84 94.72zM849.92 427.52h76.8v-76.8h-76.8v76.8z m-71.68-76.8c-5.12 0-10.24 0-12.8-2.56s-2.56-7.68-2.56-12.8 0-10.24 2.56-12.8 7.68-2.56 12.8-2.56h215.04c7.68 0 10.24 0 12.8 2.56s2.56 5.12 2.56 12.8c0 5.12 0 10.24-2.56 12.8s-7.68 2.56-12.8 2.56h-33.28v76.8h48.64c5.12 0 10.24 0 12.8 2.56s2.56 5.12 2.56 10.24 0 10.24-2.56 12.8-7.68 5.12-12.8 5.12h-48.64v99.84c0 7.68-2.56 10.24-5.12 12.8-2.56 2.56-7.68 2.56-12.8 2.56s-10.24 0-12.8-2.56-5.12-7.68-5.12-12.8v-99.84h-76.8c0 12.8-2.56 25.6-5.12 38.4-2.56 10.24-7.68 20.48-12.8 28.16-5.12 7.68-10.24 17.92-17.92 23.04-7.68 7.68-15.36 15.36-25.6 20.48-5.12 5.12-10.24 5.12-15.36 5.12s-7.68-2.56-12.8-7.68c-2.56-5.12-5.12-10.24-2.56-12.8 2.56-5.12 5.12-7.68 10.24-12.8 7.68-5.12 15.36-10.24 20.48-15.36 5.12-5.12 10.24-10.24 15.36-17.92 5.12-7.68 7.68-12.8 10.24-23.04 2.56-7.68 5.12-17.92 5.12-28.16H768c-5.12 0-10.24-2.56-12.8-5.12s-2.56-7.68-2.56-12.8 0-7.68 2.56-10.24 7.68-2.56 12.8-2.56h48.64v-76.8l-38.4 2.56zM1095.68 430.08c-2.56 2.56-7.68 5.12-12.8 5.12s-7.68-2.56-15.36-7.68c-2.56-2.56-5.12-5.12-10.24-7.68-5.12-2.56-7.68-7.68-12.8-10.24-5.12-5.12-7.68-7.68-7.68-10.24 0-2.56 0-7.68 5.12-12.8 7.68-7.68 15.36-7.68 25.6 0 2.56 2.56 7.68 5.12 12.8 10.24 5.12 2.56 10.24 7.68 12.8 10.24 5.12 5.12 7.68 7.68 7.68 12.8 0 0 0 5.12-5.12 10.24z m5.12 51.2c-2.56 15.36-7.68 28.16-12.8 40.96l-15.36 38.4c-2.56 5.12-7.68 10.24-10.24 10.24-5.12 2.56-10.24 0-12.8-2.56-5.12-2.56-7.68-5.12-7.68-10.24s0-10.24 5.12-17.92c5.12-10.24 10.24-20.48 12.8-33.28 5.12-12.8 7.68-25.6 10.24-38.4 2.56-7.68 2.56-10.24 7.68-12.8 2.56-2.56 7.68-2.56 12.8-2.56s10.24 2.56 12.8 7.68c0 5.12 0 12.8-2.56 20.48z m5.12-117.76c-2.56 2.56-7.68 5.12-12.8 5.12s-7.68-2.56-15.36-7.68c-2.56-2.56-7.68-7.68-12.8-10.24-5.12-2.56-7.68-7.68-10.24-10.24-2.56-2.56-5.12-7.68-5.12-10.24s0-7.68 5.12-12.8c2.56-5.12 7.68-7.68 10.24-7.68 5.12 0 10.24 0 12.8 5.12 2.56 2.56 7.68 5.12 10.24 7.68 2.56 2.56 5.12 5.12 7.68 5.12l5.12 5.12 5.12 5.12c5.12 5.12 7.68 7.68 7.68 12.8 0 2.56-2.56 7.68-7.68 12.8z m158.72 43.52v-12.8c0-2.56-2.56-5.12-5.12-5.12h-66.56v15.36l71.68 2.56z m0 40.96V435.2h-71.68v12.8c0 2.56 2.56 5.12 5.12 5.12h64c2.56 0 2.56 0 2.56-5.12z m-74.24-84.48h17.92l7.68-15.36v-5.12h-66.56V460.8c0 12.8-2.56 25.6-2.56 38.4-2.56 10.24-2.56 20.48-5.12 30.72-2.56 10.24-5.12 17.92-10.24 25.6-2.56 7.68-7.68 10.24-10.24 10.24-2.56 0-7.68 0-12.8-2.56-5.12 0-7.68-2.56-7.68-5.12s-2.56-2.56-2.56-5.12v-7.68c0-2.56 2.56-5.12 2.56-7.68 2.56-7.68 5.12-12.8 7.68-20.48s2.56-15.36 5.12-25.6c0-10.24 2.56-20.48 2.56-33.28v-115.2c0-10.24 2.56-17.92 7.68-23.04s10.24-7.68 20.48-7.68h148.48c5.12 0 10.24 0 12.8 2.56s2.56 5.12 2.56 10.24 0 7.68-2.56 10.24c-2.56 2.56-5.12 2.56-12.8 2.56h-48.64c2.56 2.56 2.56 10.24 0 15.36 0 0 0 2.56-2.56 2.56h30.72c10.24 0 15.36 2.56 20.48 7.68 2.56 5.12 5.12 12.8 5.12 20.48v64c0 10.24-2.56 17.92-5.12 20.48-5.12 5.12-10.24 5.12-20.48 5.12h-25.6v53.76c0 7.68 0 15.36-2.56 20.48-2.56 5.12-5.12 10.24-7.68 10.24-2.56 2.56-7.68 2.56-15.36 2.56-5.12 0-12.8 0-23.04-2.56-7.68 0-10.24-2.56-12.8-7.68-2.56-2.56-2.56-7.68 0-12.8s2.56-7.68 5.12-10.24c2.56-2.56 7.68 0 12.8 0 5.12 2.56 10.24 2.56 10.24 2.56s2.56-2.56 2.56-5.12v-53.76h-25.6c-17.92 0-25.6-10.24-25.6-28.16v-64c0-10.24 2.56-17.92 5.12-20.48 2.56 7.68 10.24 5.12 20.48 5.12z m2.56 145.92c-2.56 7.68-7.68 17.92-10.24 25.6-5.12 7.68-10.24 17.92-15.36 25.6-2.56 5.12-5.12 7.68-10.24 7.68-2.56 0-7.68 0-12.8-2.56-2.56-2.56-5.12-5.12-5.12-10.24 0-2.56 0-7.68 5.12-12.8 2.56-5.12 5.12-7.68 7.68-12.8 2.56-2.56 5.12-7.68 5.12-10.24 2.56-2.56 2.56-7.68 5.12-10.24 2.56-2.56 2.56-7.68 5.12-12.8s5.12-7.68 7.68-10.24 7.68-2.56 10.24 0c5.12 2.56 7.68 5.12 7.68 7.68 5.12 5.12 2.56 7.68 0 15.36z m110.08 28.16c2.56 5.12 5.12 10.24 5.12 15.36s-2.56 7.68-7.68 10.24-7.68 2.56-10.24 0c-2.56-2.56-5.12-5.12-7.68-10.24-2.56-5.12-5.12-7.68-7.68-12.8-2.56-2.56-5.12-7.68-5.12-10.24-2.56-2.56-2.56-5.12-5.12-10.24-2.56-2.56-5.12-5.12-5.12-10.24 0-2.56-2.56-2.56-2.56-5.12s-2.56-2.56-2.56-5.12v-5.12c0-2.56 2.56-5.12 2.56-5.12 2.56-2.56 5.12-5.12 10.24-5.12s7.68 2.56 10.24 7.68c2.56 5.12 5.12 7.68 7.68 12.8 2.56 2.56 5.12 7.68 5.12 10.24 2.56 2.56 5.12 7.68 5.12 10.24 2.56 2.56 5.12 7.68 7.68 12.8zM1377.28 386.56c-2.56 0-5.12 0-5.12 2.56V465.92s2.56 2.56 5.12 2.56h58.88v-81.92h-58.88z m94.72 0v81.92h61.44c2.56 0 5.12 0 7.68-2.56V396.8c0-2.56 0-5.12-2.56-7.68 0 0-5.12-2.56-7.68-2.56h-58.88z m-35.84-69.12c0-5.12 2.56-10.24 5.12-12.8 2.56-2.56 7.68-2.56 12.8-2.56s10.24 0 12.8 2.56 5.12 7.68 5.12 12.8v35.84H1559.04c5.12 0 7.68 2.56 10.24 5.12 2.56 2.56 5.12 5.12 5.12 10.24v115.2c0 5.12-2.56 7.68-5.12 10.24-2.56 2.56-5.12 5.12-10.24 5.12s-10.24 2.56-17.92 2.56h-69.12v58.88c0 5.12 0 7.68-2.56 12.8-2.56 2.56-7.68 5.12-12.8 5.12-7.68 0-12.8 0-15.36-2.56s-2.56-7.68-2.56-12.8v-58.88h-69.12c-7.68 0-12.8 0-15.36-2.56-5.12 0-7.68-2.56-10.24-5.12-2.56-2.56-5.12-5.12-5.12-10.24v-102.4-15.36c0-5.12 2.56-7.68 5.12-10.24 2.56-2.56 5.12-2.56 10.24-5.12H1438.72v-35.84h-2.56zM1763.84 468.48c-2.56-5.12-5.12-7.68-5.12-12.8 0-2.56 2.56-7.68 5.12-10.24h-15.36V486.4h35.84l-2.56-2.56-2.56-2.56-5.12-5.12-2.56-2.56-2.56-2.56s-2.56 0-5.12-2.56z m-92.16-76.8c-7.68 0-10.24 0-12.8-2.56s-2.56-5.12-2.56-12.8c0-5.12 0-10.24 2.56-12.8s7.68-2.56 12.8-2.56h130.56c7.68 0 10.24 0 12.8 2.56s2.56 5.12 2.56 12.8c0 5.12 0 10.24-2.56 10.24-2.56 2.56-7.68 2.56-12.8 2.56h-53.76v25.6H1792c7.68 0 10.24 0 12.8 2.56s2.56 5.12 2.56 10.24 0 10.24-2.56 10.24c-2.56 2.56-7.68 2.56-12.8 2.56h-5.12c2.56 5.12 7.68 7.68 10.24 10.24s5.12 7.68 10.24 12.8c2.56 2.56 5.12 7.68 2.56 10.24 0 2.56-2.56 5.12-5.12 7.68h2.56c7.68 0 10.24 0 12.8 2.56s2.56 5.12 2.56 12.8c0 5.12 0 10.24-2.56 10.24-2.56 2.56-7.68 2.56-12.8 2.56h-138.24c-7.68 0-10.24 0-12.8-2.56s-2.56-5.12-2.56-10.24 0-10.24 2.56-12.8 7.68-2.56 12.8-2.56H1715.2v-40.96h-35.84c-7.68 0-10.24 0-12.8-2.56s-2.56-5.12-2.56-10.24 0-10.24 2.56-10.24c2.56-2.56 7.68-2.56 12.8-2.56H1715.2v-25.6h-43.52v2.56z m-23.04-48.64c-2.56 0-5.12 0-5.12 2.56 0 0-2.56 2.56-2.56 7.68v171.52c0 7.68 2.56 12.8 10.24 12.8h171.52c2.56 0 5.12 0 5.12-2.56 2.56-2.56 2.56-5.12 2.56-7.68v-171.52c0-2.56 0-5.12-2.56-5.12-2.56-2.56-5.12-2.56-7.68-2.56h-171.52v-5.12z m212.48 192c0 10.24-2.56 17.92-7.68 23.04-5.12 5.12-12.8 7.68-23.04 7.68H1638.4c-10.24 0-17.92-2.56-23.04-7.68-5.12-5.12-5.12-12.8-5.12-23.04v-192c0-10.24 2.56-17.92 5.12-23.04 2.56-5.12 10.24-7.68 23.04-7.68h192c10.24 0 17.92 2.56 23.04 7.68 5.12 5.12 7.68 12.8 7.68 23.04v192zM773.12 678.4c0 10.24 2.56 17.92 10.24 25.6 5.12 5.12 15.36 7.68 23.04 7.68 10.24 0 17.92-2.56 23.04-7.68 5.12-5.12 10.24-12.8 10.24-25.6 0-10.24-2.56-17.92-10.24-23.04-5.12-5.12-15.36-7.68-23.04-7.68-10.24 0-17.92 2.56-23.04 7.68-7.68 5.12-10.24 12.8-10.24 23.04z m-20.48 0c0-15.36 5.12-28.16 17.92-35.84 10.24-5.12 20.48-10.24 35.84-10.24 15.36 0 28.16 2.56 38.4 10.24s15.36 17.92 15.36 30.72c0 10.24-2.56 20.48-7.68 25.6s-10.24 10.24-17.92 15.36c-7.68 2.56-17.92 5.12-28.16 5.12-15.36 0-28.16-2.56-38.4-10.24-10.24-5.12-15.36-15.36-15.36-30.72zM875.52 696.32l17.92-2.56c0 5.12 5.12 10.24 7.68 12.8 5.12 2.56 12.8 5.12 20.48 5.12s15.36-2.56 20.48-5.12 5.12-5.12 5.12-10.24c0-2.56-2.56-5.12-5.12-7.68-2.56 0-10.24-2.56-20.48-5.12-15.36-2.56-23.04-5.12-28.16-7.68-5.12-2.56-10.24-5.12-12.8-7.68-2.56-2.56-5.12-7.68-5.12-10.24s0-7.68 2.56-10.24 5.12-5.12 10.24-7.68c2.56-2.56 7.68-2.56 12.8-5.12 5.12 0 10.24-2.56 15.36-2.56 7.68 0 17.92 0 23.04 2.56 7.68 2.56 12.8 5.12 15.36 7.68 2.56 2.56 5.12 7.68 7.68 12.8l-17.92 2.56c0-5.12-2.56-7.68-7.68-10.24s-10.24-2.56-17.92-2.56-15.36 0-17.92 2.56c-2.56 2.56-5.12 5.12-5.12 7.68 0 2.56 0 2.56 2.56 5.12s5.12 2.56 7.68 2.56 7.68 2.56 17.92 2.56c12.8 2.56 23.04 5.12 28.16 7.68 5.12 2.56 10.24 5.12 12.8 7.68 2.56 2.56 5.12 7.68 5.12 12.8s-2.56 10.24-5.12 12.8-10.24 10.24-17.92 12.8-15.36 2.56-23.04 2.56c-15.36 0-25.6-2.56-33.28-7.68-10.24-2.56-15.36-7.68-15.36-17.92M1064.96 691.2l17.92 2.56c-2.56 10.24-7.68 17.92-15.36 23.04-7.68 5.12-17.92 7.68-30.72 7.68-15.36 0-28.16-2.56-38.4-10.24s-15.36-17.92-15.36-33.28c0-10.24 2.56-17.92 5.12-23.04 5.12-7.68 10.24-12.8 17.92-15.36s17.92-5.12 28.16-5.12c12.8 0 23.04 2.56 30.72 7.68 7.68 5.12 12.8 10.24 15.36 20.48h-17.92c-2.56-5.12-5.12-10.24-10.24-12.8s-10.24-5.12-15.36-5.12c-10.24 0-17.92 2.56-23.04 7.68-5.12 5.12-10.24 12.8-10.24 25.6 0 10.24 2.56 20.48 7.68 25.6s12.8 7.68 23.04 7.68c7.68 0 12.8-2.56 17.92-5.12 7.68-5.12 12.8-10.24 12.8-17.92M1100.8 721.92v-117.76h20.48v40.96c10.24-7.68 20.48-12.8 33.28-12.8 7.68 0 15.36 0 23.04 2.56 5.12 2.56 10.24 5.12 12.8 10.24 2.56 5.12 5.12 10.24 5.12 17.92V716.8h-20.48v-53.76c0-7.68-2.56-12.8-5.12-15.36-5.12-2.56-10.24-5.12-17.92-5.12-5.12 0-10.24 0-15.36 2.56-5.12 2.56-7.68 5.12-10.24 7.68-2.56 2.56-2.56 10.24-2.56 15.36v46.08H1100.8v7.68zM1221.12 622.08v-15.36h20.48v15.36h-20.48z m0 99.84v-84.48h20.48v84.48h-20.48zM1269.76 721.92v-84.48h17.92v12.8c7.68-10.24 20.48-12.8 35.84-12.8 7.68 0 12.8 0 17.92 2.56s10.24 5.12 12.8 7.68c2.56 2.56 5.12 7.68 5.12 10.24v64h-20.48v-51.2c0-5.12 0-10.24-2.56-12.8l-7.68-7.68c-2.56-2.56-7.68-2.56-12.8-2.56-7.68 0-15.36 2.56-20.48 5.12-5.12 5.12-7.68 10.24-7.68 23.04v46.08h-17.92zM1464.32 678.4c-7.68 2.56-17.92 5.12-30.72 5.12-7.68 0-12.8 2.56-17.92 2.56-2.56 0-5.12 2.56-7.68 5.12s-2.56 5.12-2.56 7.68c0 2.56 2.56 7.68 5.12 10.24 5.12 2.56 10.24 2.56 17.92 2.56s12.8 0 20.48-2.56c5.12-2.56 10.24-5.12 12.8-10.24 2.56-2.56 2.56-7.68 2.56-15.36v-5.12z m2.56 33.28c-7.68 5.12-12.8 7.68-20.48 10.24s-12.8 2.56-20.48 2.56c-12.8 0-23.04-2.56-28.16-7.68-7.68-5.12-10.24-10.24-10.24-17.92 0-5.12 0-7.68 2.56-10.24s5.12-5.12 10.24-7.68c5.12-2.56 7.68-2.56 12.8-5.12 2.56 0 10.24-2.56 17.92-2.56 15.36-2.56 28.16-2.56 33.28-5.12V665.6c0-5.12-2.56-10.24-5.12-12.8-5.12-2.56-12.8-5.12-23.04-5.12s-15.36 0-20.48 2.56-7.68 7.68-10.24 12.8l-17.92-2.56 7.68-15.36c5.12-2.56 10.24-7.68 17.92-7.68 7.68-2.56 15.36-2.56 25.6-2.56s17.92 0 23.04 2.56 10.24 2.56 12.8 7.68c2.56 2.56 5.12 5.12 5.12 10.24v56.32c0 2.56 2.56 7.68 5.12 10.24h-20.48c2.56-2.56 2.56-7.68 2.56-10.24zM1518.08 706.56h23.04v15.36h-23.04zM1574.4 721.92v-84.48h17.92v12.8c7.68-10.24 20.48-12.8 35.84-12.8 7.68 0 12.8 0 17.92 2.56s10.24 5.12 12.8 7.68c2.56 2.56 5.12 7.68 5.12 10.24v64h-20.48v-51.2c0-5.12 0-10.24-2.56-12.8l-7.68-7.68c-2.56-2.56-7.68-2.56-12.8-2.56-7.68 0-15.36 2.56-20.48 5.12-5.12 5.12-7.68 10.24-7.68 23.04v46.08h-17.92zM1710.08 670.72h64c0-7.68-2.56-12.8-7.68-15.36-5.12-5.12-12.8-7.68-23.04-7.68-7.68 0-15.36 2.56-23.04 7.68-5.12 2.56-10.24 7.68-10.24 15.36z m64 23.04l20.48 2.56c-2.56 7.68-7.68 15.36-17.92 20.48-7.68 5.12-20.48 7.68-33.28 7.68-15.36 0-30.72-2.56-38.4-10.24-10.24-7.68-15.36-17.92-15.36-33.28 0-15.36 5.12-25.6 15.36-33.28s23.04-12.8 38.4-12.8 28.16 5.12 38.4 12.8 15.36 17.92 15.36 33.28v2.56h-84.48c0 10.24 5.12 15.36 10.24 20.48 5.12 5.12 15.36 7.68 23.04 7.68s12.8-2.56 17.92-5.12c2.56-2.56 7.68-5.12 10.24-12.8zM1858.56 709.12l2.56 12.8h-15.36c-7.68 0-12.8 0-15.36-2.56s-7.68-2.56-7.68-7.68c-2.56-2.56-2.56-7.68-2.56-17.92v-48.64h-15.36v-10.24h15.36V614.4l17.92-7.68v30.72h20.48v10.24h-20.48V704l2.56 2.56h7.68c5.12 2.56 7.68 2.56 10.24 2.56\" p-id=\"2631\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "sohu",
  "use": "sohu-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"sohu\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"2854\" /><path d=\"M709.12 296.96c5.12 0 5.12 2.56 7.68 2.56 17.92 12.8-15.36 28.16-23.04 30.72-2.56 0-5.12-2.56-7.68-2.56-5.12-7.68 0-10.24 5.12-12.8l2.56-2.56c0-5.12 10.24-15.36 15.36-15.36z\" p-id=\"2855\" /><path d=\"M737.28 276.48c2.56 0 10.24-2.56 12.8 2.56 2.56 7.68-2.56 48.64-2.56 76.8 0 5.12-2.56 15.36 0 17.92l7.68 10.24c5.12 2.56 30.72-2.56 30.72-5.12 2.56-5.12 0-10.24 2.56-15.36-12.8 0-28.16-5.12-28.16-7.68 0 0-2.56-2.56 0-7.68 2.56-5.12 17.92-5.12 30.72-5.12 0-10.24 2.56-23.04-2.56-23.04s-23.04-2.56-23.04-5.12c-2.56-2.56-2.56-5.12-2.56-10.24s2.56-5.12 5.12-5.12c7.68-2.56 17.92 0 23.04 2.56 17.92 10.24 23.04 17.92 20.48 46.08-2.56 30.72 5.12 38.4-15.36 51.2-5.12 2.56-7.68 5.12-17.92 5.12-5.12 0-17.92-5.12-23.04-2.56 0 0-2.56 5.12-5.12 5.12-2.56 2.56 0 2.56 0 2.56v2.56c5.12 2.56 7.68 0 12.8 2.56l17.92 12.8c5.12 7.68 5.12 28.16 2.56 35.84-2.56 5.12-10.24 7.68-12.8 12.8 0 2.56 0 5.12-2.56 7.68 2.56 2.56 0 2.56 2.56 5.12s5.12 0 7.68 2.56l15.36 7.68v2.56h12.8s5.12 5.12 7.68 5.12c10.24 2.56 15.36 0 17.92 7.68 2.56 7.68 0 20.48-5.12 23.04-15.36 7.68-35.84-10.24-46.08-17.92-5.12-2.56-7.68-2.56-12.8-5.12-7.68-5.12-12.8-15.36-28.16-10.24-2.56 0-7.68 7.68-10.24 10.24-2.56 2.56-5.12 2.56-10.24 2.56-10.24 5.12-23.04 20.48-43.52 12.8l-2.56-5.12c-5.12-7.68-2.56-7.68-2.56-17.92 5.12 0 12.8 0 17.92-2.56 15.36-2.56 28.16-7.68 33.28-12.8 5.12-7.68-2.56-15.36-10.24-28.16-2.56-2.56 0-5.12-2.56-7.68-5.12-5.12-10.24-5.12-15.36-10.24 0 0 0-2.56-2.56-2.56-5.12 0-5.12-12.8 7.68-12.8 7.68 0 40.96 35.84 43.52 35.84 2.56 2.56 5.12 0 7.68 0 2.56 0 2.56-2.56 5.12-5.12s7.68-7.68 7.68-10.24c2.56-5.12 0-12.8 0-12.8-2.56-2.56-2.56-7.68-7.68-7.68-7.68-2.56-23.04 2.56-25.6 0-2.56-2.56 0-12.8 2.56-15.36l10.24-5.12s0-2.56-2.56-5.12 0-2.56-2.56-5.12c-10.24-7.68-28.16 2.56-40.96-2.56-15.36-7.68-12.8-12.8-12.8-35.84v-10.24s-2.56-17.92 2.56-23.04c5.12-5.12 10.24-2.56 15.36 12.8 7.68 0 20.48 0 23.04 2.56 2.56 0 5.12 5.12 2.56 7.68-2.56 2.56-7.68 5.12-15.36 7.68-2.56 0-7.68 2.56-10.24 2.56 0 12.8 0 17.92 2.56 17.92 2.56 2.56 28.16-2.56 30.72-12.8 2.56-10.24 0-28.16 0-38.4 0-10.24-5.12-51.2-2.56-58.88 0 7.68 2.56 7.68 5.12 7.68zM640 294.4c5.12-2.56 5.12-2.56 10.24 2.56s2.56 33.28 2.56 46.08c2.56 0 2.56 5.12 5.12 5.12 2.56 2.56 7.68 0 12.8 0 2.56 0 5.12 5.12 7.68 7.68 0 2.56 2.56 5.12 0 7.68-2.56 2.56-5.12 5.12-7.68 5.12-12.8 2.56-17.92 0-20.48 12.8-2.56 7.68-2.56 17.92 0 23.04 0 2.56 0 2.56 5.12 2.56 2.56 0 10.24-2.56 10.24-2.56l2.56 2.56s0 7.68-2.56 12.8-12.8 5.12-12.8 12.8c0 5.12 2.56 12.8 2.56 15.36V468.48c2.56 12.8 0 48.64-5.12 56.32 0 0-2.56 5.12-5.12 5.12l-5.12 2.56c-5.12 2.56-15.36 5.12-23.04 2.56-7.68-2.56-20.48-17.92-15.36-35.84l2.56-2.56h5.12c5.12 2.56 10.24 15.36 12.8 15.36h5.12c10.24-5.12 5.12-48.64 7.68-66.56-2.56 0-2.56-5.12-5.12-5.12-17.92-7.68-23.04 25.6-43.52 5.12-2.56-2.56 0-7.68 2.56-12.8 2.56-7.68 10.24-5.12 17.92-7.68 0 0 5.12-5.12 7.68-5.12 5.12-2.56 7.68 0 12.8-2.56 2.56-2.56 10.24-15.36 10.24-17.92 2.56-12.8-2.56-38.4-10.24-40.96-5.12-2.56-7.68 2.56-12.8 2.56-5.12 2.56-15.36 5.12-20.48 2.56l-2.56-2.56s0-10.24 2.56-12.8l2.56-2.56 5.12-2.56c7.68-2.56 15.36 2.56 23.04 0 2.56 0 7.68-5.12 7.68-5.12 0-10.24-2.56-40.96 2.56-46.08 0 2.56 0 2.56 5.12 2.56zM1198.08 435.2c2.56-2.56 12.8-17.92 15.36-23.04l2.56-5.12c0-7.68-2.56-15.36-2.56-17.92 0 0 2.56-2.56 0-7.68-2.56-2.56-7.68 2.56-12.8 5.12-2.56 0-2.56 5.12-2.56 5.12-10.24 10.24-12.8 10.24-25.6 2.56-2.56-2.56-2.56-5.12 0-10.24s20.48-15.36 30.72-20.48v-15.36l-5.12-2.56c-17.92-25.6-10.24-30.72-10.24-30.72s10.24-7.68 17.92-2.56c7.68 2.56 12.8 43.52 23.04 17.92 0-2.56 2.56-10.24 2.56-12.8 0-2.56-5.12-5.12-5.12-7.68v-7.68l2.56-2.56c2.56 0 5.12-2.56 5.12-2.56s5.12 0 10.24 2.56c2.56 2.56 7.68 17.92 7.68 23.04 0 5.12-2.56 15.36-2.56 17.92 0 2.56-5.12 5.12-5.12 7.68-2.56 5.12 0 7.68-2.56 10.24 0 2.56-5.12 5.12-5.12 7.68-2.56 15.36 7.68 35.84 10.24 51.2 5.12 48.64-2.56 104.96-25.6 125.44h-5.12L1203.2 537.6c-2.56-2.56-5.12-5.12-5.12-7.68-2.56-2.56-2.56-7.68-5.12-10.24 0-2.56-7.68-5.12-7.68-7.68-7.68-17.92 7.68-17.92 15.36-12.8 2.56 0 5.12 7.68 7.68 7.68 2.56 0 5.12-2.56 5.12-2.56 12.8-7.68 5.12-15.36 5.12-30.72 0-2.56 5.12-10.24 5.12-12.8 2.56-12.8 0-23.04-2.56-33.28 0 0-5.12 0-5.12 2.56-2.56 2.56-2.56 7.68-2.56 10.24-2.56 5.12-7.68 7.68-10.24 12.8-5.12 5.12-10.24 12.8-15.36 15.36-2.56 0-10.24-2.56-7.68-2.56 0 0-5.12 2.56-7.68-7.68-2.56-7.68 10.24-10.24 20.48-20.48l5.12-2.56z\" p-id=\"2856\" /><path d=\"M1359.36 299.52c12.8-2.56 17.92 7.68 15.36 17.92-5.12 17.92-33.28 15.36-51.2 17.92-2.56 0-10.24 5.12-12.8 5.12-7.68 0-12.8-2.56-20.48 2.56l-7.68 7.68-7.68 7.68c-2.56 2.56-2.56 7.68-2.56 7.68s2.56 15.36 2.56 23.04c0 5.12 7.68 12.8 7.68 17.92 2.56 30.72-10.24 117.76-20.48 128-7.68 10.24-12.8 7.68-17.92 5.12-5.12-2.56-2.56-2.56-5.12-7.68-2.56-5.12-2.56-10.24-2.56-10.24 2.56-2.56 0-5.12 2.56-7.68 2.56-5.12 7.68-7.68 10.24-12.8v-5.12c0-5.12 5.12-12.8 7.68-17.92 5.12-25.6 10.24-46.08 7.68-74.24-2.56-23.04-17.92-38.4-12.8-61.44 0-2.56 5.12-10.24 5.12-12.8 7.68-12.8 38.4-2.56 53.76-7.68l5.12-5.12c5.12-2.56 10.24 0 15.36-2.56 7.68-2.56 12.8-7.68 20.48-12.8 5.12 0 7.68-2.56 7.68-2.56z\" p-id=\"2857\" /><path d=\"M1364.48 350.72s5.12 0 7.68 2.56c10.24 5.12 0 17.92-2.56 25.6-2.56 5.12-5.12 15.36-5.12 17.92v7.68c0 2.56-2.56 7.68-5.12 7.68s-5.12-2.56-5.12-2.56c-5.12-10.24-5.12-40.96 0-51.2 0-2.56 10.24-7.68 10.24-7.68zM1318.4 360.96s5.12 0 5.12 2.56c2.56 2.56 0 7.68 2.56 10.24 2.56 15.36 2.56 38.4-2.56 51.2-2.56 5.12-7.68 12.8-7.68 17.92v7.68c-2.56 5.12-7.68 17.92-10.24 23.04-2.56 17.92 2.56 30.72 20.48 25.6 2.56 0 5.12-5.12 5.12-7.68-2.56-15.36-10.24-33.28 5.12-25.6 12.8 7.68 15.36 23.04 17.92 43.52 0 2.56-2.56 5.12-5.12 5.12s-5.12 0-5.12-2.56l-2.56-5.12c-2.56-5.12-5.12-2.56-5.12 0l-2.56 5.12s-12.8 12.8-35.84 2.56c-7.68-5.12-12.8-33.28-7.68-48.64 0-5.12 5.12-10.24 7.68-12.8 2.56-10.24 2.56-17.92 5.12-25.6 0-2.56 5.12-7.68 5.12-12.8 2.56-17.92-5.12-25.6-7.68-38.4 0-10.24 0-15.36 5.12-20.48 2.56-2.56 2.56-2.56 5.12-2.56l7.68 7.68zM1356.8 419.84s5.12 0 5.12 2.56c5.12 5.12 5.12 28.16 7.68 38.4 5.12 20.48 15.36 40.96 25.6 53.76 2.56 2.56 2.56 5.12 5.12 7.68 7.68 2.56 15.36 0 17.92 10.24 5.12 20.48-17.92 17.92-28.16 12.8-5.12-2.56-17.92-17.92-20.48-23.04-5.12-7.68-5.12-17.92-7.68-28.16 2.56-7.68-5.12-15.36-5.12-20.48-2.56-10.24-5.12-43.52-2.56-51.2l2.56-2.56zM1346.56 568.32c7.68 0 17.92 5.12 23.04 7.68 23.04 12.8-28.16 12.8-40.96 10.24-20.48-7.68 10.24-17.92 17.92-17.92zM993.28 568.32c28.16-5.12 46.08 10.24 69.12 7.68 10.24 0 33.28-5.12 33.28-2.56 2.56 2.56 2.56 7.68 2.56 7.68l-2.56 2.56c-10.24 5.12-107.52 0-110.08-2.56-5.12-5.12 2.56-10.24 7.68-12.8zM1292.8 568.32c7.68 0 15.36 2.56 17.92 5.12 2.56 2.56 2.56 5.12-2.56 7.68-2.56 2.56-46.08 2.56-69.12 2.56-33.28 2.56-110.08 2.56-112.64-2.56-2.56-7.68 2.56-7.68 5.12-7.68 7.68-2.56 20.48-2.56 30.72-2.56 23.04 0 51.2 0 71.68 2.56 5.12 0 12.8-2.56 15.36 0l2.56 2.56c15.36 2.56 28.16-7.68 40.96-7.68zM606.72 570.88c15.36-2.56 33.28 2.56 43.52 2.56 76.8 7.68 156.16-5.12 230.4 2.56 23.04 2.56 66.56 2.56 66.56 2.56s2.56 2.56 2.56 5.12c-2.56 2.56-25.6 0-38.4 2.56-74.24 7.68-156.16-5.12-232.96 2.56-10.24 0-25.6 2.56-35.84 2.56-2.56 0-7.68-2.56-12.8-2.56-2.56 0-10.24 5.12-12.8 5.12-10.24 2.56-20.48 2.56-30.72 0 0 0-2.56-2.56-2.56-7.68 5.12-10.24 15.36-15.36 23.04-15.36zM1397.76 570.88c10.24-2.56 25.6 2.56 28.16 7.68 2.56 2.56-2.56 7.68-2.56 7.68-12.8 0-30.72 0-33.28-2.56 0-5.12 7.68-12.8 7.68-12.8zM1059.84 750.08c20.48 0 20.48 33.28 2.56 35.84-23.04 2.56-23.04-35.84-2.56-35.84zM1164.8 698.88c-2.56-15.36-10.24-23.04-23.04-23.04-20.48 0-25.6 20.48-25.6 40.96 0 17.92 5.12 40.96 25.6 40.96 10.24 0 20.48-10.24 23.04-25.6h15.36c-2.56 17.92-10.24 40.96-38.4 40.96-25.6 0-40.96-23.04-40.96-53.76 0-33.28 12.8-61.44 43.52-61.44 25.6 0 33.28 20.48 35.84 38.4l-15.36 2.56zM1203.2 716.8c0-15.36 5.12-40.96 28.16-40.96 23.04 0 28.16 28.16 28.16 40.96 0 15.36-5.12 40.96-28.16 40.96-25.6 2.56-28.16-25.6-28.16-40.96z m-17.92 0c0 28.16 12.8 56.32 43.52 56.32s43.52-28.16 43.52-56.32-12.8-56.32-43.52-56.32c-28.16 0-43.52 28.16-43.52 56.32zM1287.68 663.04h15.36v15.36c2.56-5.12 10.24-17.92 28.16-17.92 17.92 0 23.04 12.8 25.6 17.92 7.68-10.24 15.36-17.92 28.16-17.92 10.24 0 28.16 5.12 28.16 35.84v74.24h-15.36v-69.12c0-15.36-5.12-25.6-17.92-25.6-12.8 0-23.04 15.36-23.04 28.16v66.56h-15.36v-74.24c0-10.24-2.56-20.48-15.36-20.48-10.24 0-25.6 7.68-25.6 35.84v58.88h-15.36l2.56-107.52zM622.08 640s7.68-2.56 12.8 0 5.12 2.56 5.12 5.12 0 5.12-5.12 10.24c-2.56 2.56-2.56 2.56-5.12 2.56h-2.56c-2.56 0-2.56 0-5.12 5.12l-2.56 5.12v10.24s2.56 7.68 5.12 12.8 0 10.24-7.68 7.68c-5.12-2.56-10.24-5.12-12.8-10.24-2.56-7.68 0-15.36 2.56-20.48 0 0 2.56 0 2.56-5.12 0 0 2.56-2.56 0-7.68-5.12-2.56 7.68-10.24 12.8-15.36zM642.56 645.12s0 5.12 2.56 10.24 5.12 7.68 7.68 10.24c2.56 2.56 2.56 2.56 7.68 2.56 5.12 0 5.12-5.12 5.12-7.68 0-2.56 0-5.12-2.56-10.24-5.12-5.12-10.24-7.68-15.36-7.68-5.12-2.56-5.12 2.56-5.12 2.56zM629.76 696.32h-5.12s-2.56 2.56 0 5.12 2.56 5.12 7.68 7.68c2.56 2.56 2.56 2.56 5.12 2.56s5.12 0 7.68 2.56c2.56 2.56 7.68 5.12 7.68 7.68V737.28s0 2.56-5.12 5.12-2.56 2.56-7.68 5.12c-5.12 2.56-2.56 2.56-2.56 2.56h-10.24s-2.56-2.56-7.68 0c0 0-5.12 2.56-5.12-2.56s0-15.36-10.24-15.36c0 0-5.12 2.56-2.56 12.8 0 0 2.56 7.68 5.12 10.24 2.56 2.56 2.56 2.56 5.12 10.24 2.56 5.12 5.12 5.12 12.8 5.12h12.8s0-2.56 7.68 0c0 0 5.12-2.56 7.68-7.68 0 0 7.68-2.56 10.24-10.24 0 0 0-2.56 2.56-7.68 0 0 0-2.56-2.56-7.68v-5.12c0-2.56 0-7.68-2.56-12.8s-7.68-7.68-10.24-10.24h-2.56-10.24c-2.56-12.8-5.12-12.8-7.68-12.8zM721.92 688.64c-2.56 0-10.24 7.68-10.24 15.36-2.56 7.68 0 23.04 2.56 28.16 2.56 5.12 7.68 17.92 10.24 20.48 5.12 5.12 10.24 7.68 10.24 7.68s2.56 0 2.56 2.56 2.56 5.12 5.12 5.12c0 2.56 2.56 2.56 5.12 0 5.12 0 5.12 2.56 12.8-2.56l7.68-7.68h2.56c2.56 0 7.68-2.56 10.24-10.24 2.56-10.24 2.56-12.8 2.56-20.48v-5.12s0-5.12-5.12-10.24v-2.56-5.12c2.56-2.56 5.12-7.68 5.12-7.68v-10.24c0-7.68-2.56-12.8-5.12-15.36-2.56-2.56-2.56-7.68-2.56-10.24 0-2.56-7.68-12.8-10.24-17.92l-5.12-2.56s-5.12 0-7.68-2.56c-2.56-2.56-5.12-2.56-7.68-2.56l-5.12 5.12-2.56 2.56s-5.12 0-5.12 2.56c-2.56 0-10.24 10.24-10.24 15.36v12.8s0 5.12 5.12 5.12h2.56s7.68-12.8 10.24-17.92c5.12-2.56 7.68-7.68 17.92-2.56 0 0 2.56 2.56 5.12 7.68 2.56 5.12 5.12 5.12 5.12 7.68 2.56 2.56 2.56 12.8 2.56 17.92v5.12s2.56 7.68 2.56 10.24c0 5.12-2.56 10.24-2.56 12.8v10.24c0 2.56 0 7.68-2.56 10.24-2.56 2.56-5.12 7.68-7.68 10.24-5.12 5.12-5.12 2.56-5.12 2.56s-5.12 5.12-10.24 0c-5.12-2.56-10.24-10.24-15.36-17.92-2.56-7.68-5.12-20.48-2.56-28.16 0-7.68 2.56-15.36 2.56-17.92h-7.68zM832 634.88s-7.68 2.56-7.68 5.12v12.8c0 5.12 2.56 10.24 2.56 10.24 0 2.56 2.56 2.56 2.56 2.56v15.36s-5.12 10.24-5.12 12.8v28.16c0 5.12 0 12.8-2.56 17.92-2.56 5.12-2.56 10.24 0 17.92 2.56 7.68 2.56 10.24 2.56 10.24 2.56 2.56 5.12 5.12 7.68 0 2.56-5.12 2.56-5.12 2.56-10.24s2.56-23.04 0-25.6v-20.48l2.56-5.12s5.12-2.56 0-10.24c-2.56-7.68-5.12-12.8-5.12-12.8v-10.24c0-5.12 0-7.68 2.56-12.8 0-2.56 2.56-12.8 0-17.92 7.68-2.56 2.56-10.24-2.56-7.68zM878.08 634.88s-5.12 5.12-5.12 10.24 0 7.68 2.56 10.24c0 2.56-2.56 7.68 0 12.8 0 5.12 5.12 10.24 5.12 10.24v2.56s0 5.12-2.56 7.68c-2.56 2.56-2.56 5.12-5.12 5.12s-12.8 0-15.36 2.56c-5.12 0-5.12 7.68 0 10.24 5.12 2.56 15.36 2.56 15.36 2.56s5.12 2.56 5.12 7.68v53.76s0 7.68 5.12 7.68 10.24 0 10.24-7.68V742.4v-12.8l2.56-30.72-7.68-12.8 2.56-5.12c2.56-2.56 5.12-2.56 5.12-12.8 2.56-10.24 2.56-12.8 2.56-12.8s-7.68-20.48-20.48-20.48zM954.88 637.44s-2.56-5.12-7.68 0c-5.12 5.12-7.68 10.24-7.68 10.24s-5.12 5.12 2.56 12.8l2.56 2.56v20.48c0 2.56 2.56 5.12 2.56 10.24 0 2.56 0 10.24-2.56 15.36 0 7.68-2.56 20.48-2.56 25.6 0 5.12 2.56 10.24 2.56 15.36 0 5.12 2.56 7.68 5.12 10.24 2.56 2.56 15.36 10.24 17.92 12.8 2.56 2.56 7.68 5.12 17.92-2.56 7.68-5.12 15.36-12.8 17.92-20.48l2.56-7.68v-30.72c0-5.12-7.68-12.8-12.8-2.56v23.04c0 7.68-2.56 10.24-7.68 15.36-5.12 5.12-12.8 7.68-17.92-2.56-7.68-7.68-7.68-10.24-7.68-23.04v-40.96c0-7.68 5.12-25.6 2.56-35.84l-7.68-7.68z\" p-id=\"2858\" /><path d=\"M993.28 637.44s-5.12 2.56-5.12 17.92v28.16c0 7.68 0 12.8 5.12 12.8s7.68-5.12 10.24-15.36c2.56-10.24 2.56-20.48 2.56-30.72 0-10.24 0-10.24-2.56-12.8-5.12-2.56-7.68 0-10.24 0z\" p-id=\"2859\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "iteye",
  "use": "iteye-usage",
  "viewBox": "0 0 2048 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 2048 1024\" id=\"iteye\"><defs><style type=\"text/css\"></style></defs><path d=\"M1945.6 25.6c43.52 0 76.8 33.28 76.8 76.8v819.2c0 43.52-33.28 76.8-76.8 76.8H102.4c-43.52 0-76.8-33.28-76.8-76.8V102.4c0-43.52 33.28-76.8 76.8-76.8h1843.2m0-25.6H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h1843.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z\" p-id=\"2185\" /><path d=\"M1628.16 573.44m-46.08 0a46.08 46.08 0 1 0 92.16 0 46.08 46.08 0 1 0-92.16 0Z\" p-id=\"2186\" /><path d=\"M972.8 573.44m-46.08 0a46.08 46.08 0 1 0 92.16 0 46.08 46.08 0 1 0-92.16 0Z\" p-id=\"2187\" /><path d=\"M396.8 396.8V760.32h84.48V396.8zM693.76 396.8h-171.52v84.48h79.36v279.04h87.04V481.28H768v-84.48zM1656.32 655.36c-12.8 7.68-28.16 12.8-43.52 12.8-48.64 0-87.04-38.4-87.04-87.04s38.4-87.04 87.04-87.04 87.04 38.4 87.04 87.04H1792c0-99.84-79.36-179.2-179.2-179.2s-179.2 79.36-179.2 179.2 79.36 179.2 179.2 179.2c33.28 0 64-10.24 92.16-25.6l-48.64-79.36zM1000.96 655.36c-12.8 7.68-28.16 12.8-43.52 12.8-48.64 0-87.04-38.4-87.04-87.04s38.4-87.04 87.04-87.04 87.04 38.4 87.04 87.04h92.16c0-99.84-79.36-179.2-179.2-179.2s-179.2 79.36-179.2 179.2 79.36 179.2 179.2 179.2c33.28 0 64-10.24 92.16-25.6l-48.64-79.36zM1356.8 399.36l-74.24 122.88-74.24-122.88h-97.28l128 217.6v143.36h84.48v-143.36l130.56-217.6H1356.8zM378.88 381.44l7.68-7.68c2.56-2.56 5.12-2.56 7.68-5.12-2.56 0-5.12 2.56-7.68 5.12 2.56-2.56 5.12-2.56 7.68-5.12l-7.68-20.48c-20.48 7.68-35.84 25.6-40.96 48.64l20.48 5.12c0-5.12 2.56-10.24 5.12-12.8-2.56 2.56-2.56 5.12-5.12 7.68 0-2.56 2.56-5.12 5.12-7.68l7.68-7.68z m7.68-5.12c-2.56 2.56-5.12 2.56-5.12 5.12 0-2.56 2.56-5.12 5.12-5.12z m-7.68 5.12c-2.56 2.56-2.56 5.12-5.12 7.68 0-2.56 2.56-5.12 5.12-7.68zM355.84 345.6c2.56-2.56 5.12-2.56 7.68-5.12 5.12-2.56 10.24-7.68 15.36-7.68l-7.68-23.04c-35.84 12.8-61.44 43.52-69.12 79.36l23.04 5.12c0-2.56 2.56-7.68 2.56-10.24 5.12-12.8 10.24-23.04 20.48-30.72l7.68-7.68z m0 0c2.56-2.56 5.12-2.56 5.12-5.12 0 2.56-2.56 5.12-5.12 5.12z m7.68-5.12l15.36-7.68-15.36 7.68z\" p-id=\"2188\" /><path d=\"M366.08 289.28l-10.24-25.6c-51.2 20.48-87.04 61.44-99.84 115.2l28.16 5.12c10.24-40.96 40.96-76.8 81.92-94.72z\" p-id=\"2189\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMThiOGQ2MzNjMDY4M2MxZWY0NWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3MvaGVhZGVyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3MvbWFpbi5sZXNzIiwid2VicGFjazovLy8uL3NyYy9sZXNzL25hdi5sZXNzIiwid2VicGFjazovLy8uL3NyYy9qcy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvcGVuY2lsLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9jaGVja2VkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVzcy9tb3ZlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3MvZm9ybV92YWxpZGF0aW9uLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2dtb3ZlZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL2Zvcm1fdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9qaWFuc2h1LnN2ZyIsIndlYnBhY2s6Ly8vLi9ibG9nbW92ZWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvc2luYS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvbmV0ZWFzZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvYm9rZXl1YW4uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnLzUxY3RvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9jaGluYXVuaXguc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2hleHVuLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9vc2NoaW5hLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9zb2h1LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9pdGV5ZS5zdmciXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiYmxvZ191cmwiLCJhdHRyIiwiaHRtbCIsIm9uIiwiZm9ybUlzVmFsaWQiLCJDbGFzc05hbWUiLCJEQU5HRVIiLCJTVUNDRVNTIiwiVkFMVUVfTUlTU0lORyIsIlByb3BlcnRpZXMiLCJESVNBQkxFRCIsIlNlbGVjdG9yIiwiVkFMSURBVEUiLCJGT1JNX0dST1VQIiwiQUxMX0lOUFVUUyIsIklOUFVUIiwiU0VMRUNUIiwiVEVYVEFSRUEiLCJDSEVDS0JPWCIsIkV2ZW50IiwiQ0hBTkdFX0JMVVIiLCJqUXVlcnkiLCJmbiIsImZvcm0iLCJmb3JtR3JvdXBzIiwiZm9ybUVycm9ycyIsImVhY2giLCJpbnB1dHMiLCJsZW5ndGgiLCJwdXNoIiwiX3ZhbGlkYXRlX2lucHV0IiwiaW5BcnJheSIsImlucHV0IiwicmV0VmFsIiwiZm9ybUdyb3VwIiwiY2xvc2VzdCIsImlucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInByb3AiLCJ2YWxpZCIsInZhbCIsInZhbHVlTWlzc2luZyIsImRvY3VtZW50IiwiZSIsInRhcmdldCIsInRhZyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztB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bkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EscUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFFIiwiZmlsZSI6ImJsb2dtb3ZlZm9ybS5idW5kbGUuMThiOGQ2MzNjMDY4M2MxZWY0NWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMThiOGQ2MzNjMDY4M2MxZWY0NWEiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZVN5bWJvbCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFNwcml0ZVN5bWJvbCA9IGZ1bmN0aW9uIFNwcml0ZVN5bWJvbChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuICB2YXIgdmlld0JveCA9IHJlZi52aWV3Qm94O1xuICB2YXIgY29udGVudCA9IHJlZi5jb250ZW50O1xuXG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy52aWV3Qm94ID0gdmlld0JveDtcbiAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBbJ2lkJywgJ3ZpZXdCb3gnLCAnY29udGVudCddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDFbcHJvcF07IH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGluZGV4ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gaW5kZXgoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxucmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGluZGV4ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gaW5kZXgoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgc3ZnJDEgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rJDEgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICBhdHRyczogKCBvYmogPSB7XG4gICAgc3R5bGU6IFsncG9zaXRpb246IGFic29sdXRlJywgJ3dpZHRoOiAwJywgJ2hlaWdodDogMCddLmpvaW4oJzsgJylcbiAgfSwgb2JqW3N2ZyQxLm5hbWVdID0gc3ZnJDEudXJpLCBvYmpbeGxpbmskMS5uYW1lXSA9IHhsaW5rJDEudXJpLCBvYmogKVxufTtcbnZhciBvYmo7XG5cbnZhciBTcHJpdGUgPSBmdW5jdGlvbiBTcHJpdGUoY29uZmlnKSB7XG4gIHRoaXMuY29uZmlnID0gaW5kZXgoZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcbiAgdGhpcy5zeW1ib2xzID0gW107XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAqIEBwYXJhbSB7U3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICovXG5TcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBleGlzdGluZyA9IHRoaXMuZmluZChzeW1ib2wuaWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHN5bWJvbHNbc3ltYm9scy5pbmRleE9mKGV4aXN0aW5nKV0gPSBzeW1ib2w7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3ltYm9sICYgZGVzdHJveSBpdFxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGZvdW5kICYgc3VjY2Vzc2Z1bGx5IGRlc3Ryb3llZCwgYGZhbHNlYCAtIG90aGVyd2lzZVxuICovXG5TcHJpdGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIHN5bWJvbCA9IHRoaXMuZmluZChpZCk7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHN5bWJvbHMuc3BsaWNlKHN5bWJvbHMuaW5kZXhPZihzeW1ib2wpLCAxKTtcbiAgICBzeW1ib2wuZGVzdHJveSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1Nwcml0ZVN5bWJvbHxudWxsfVxuICovXG5TcHJpdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kIChpZCkge1xuICByZXR1cm4gdGhpcy5zeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pWzBdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGlkKSB7XG4gIHJldHVybiB0aGlzLmZpbmQoaWQpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgdmFyIHJlZiA9IHRoaXMuY29uZmlnO1xuICAgIHZhciBhdHRycyA9IHJlZi5hdHRycztcbiAgdmFyIHN0cmluZ2lmaWVkU3ltYm9scyA9IHRoaXMuc3ltYm9scy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuc3RyaW5naWZ5KCk7IH0pLmpvaW4oJycpO1xuICByZXR1cm4gd3JhcEluU3ZnU3RyaW5nKHN0cmluZ2lmaWVkU3ltYm9scywgYXR0cnMpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG59O1xuXG52YXIgU3ByaXRlU3ltYm9sID0gZnVuY3Rpb24gU3ByaXRlU3ltYm9sKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciB2aWV3Qm94ID0gcmVmLnZpZXdCb3g7XG4gIHZhciBjb250ZW50ID0gcmVmLmNvbnRlbnQ7XG5cbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnZpZXdCb3ggPSB2aWV3Qm94O1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIFsnaWQnLCAndmlld0JveCcsICdjb250ZW50J10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMVtwcm9wXTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxudmFyIGRlZmF1bHRDb25maWckMSA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBmb2xsb3dpbmcgb3B0aW9ucyBiZSBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZWQ6XG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGF1dG9Db25maWd1cmU6IHRydWUsXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbW91bnRpbmcgc2VsZWN0b3JcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG1vdW50VG86ICdib2R5JyxcblxuICAvKipcbiAgICogRml4IGRpc2FwcGVhcmluZyBTVkcgZWxlbWVudHMgd2hlbiA8YmFzZSBocmVmPiBleGlzdHMuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgyNjUzMzYvNzk2MTUyXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V2ZXJkaW1lbnNpb24vYW5ndWxhci1zdmctYmFzZS1maXhcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2lzc3Vlcy84OTM0I2lzc3VlY29tbWVudC01NjU2ODQ2NlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN5bmNVcmxzV2l0aEJhc2VUYWc6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGxpc3RlbiBjdXN0b20gbG9jYXRpb24gY2hhbmdlIGV2ZW50XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudDogdHJ1ZSxcblxuICAvKipcbiAgICogQ3VzdG9tIHdpbmRvdyBldmVudCBuYW1lIHdoaWNoIHNob3VsZCBiZSBlbWl0dGVkIHRvIHVwZGF0ZSBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VFdmVudDogJ2xvY2F0aW9uQ2hhbmdlJyxcblxuICAvKipcbiAgICogRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcjogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIHRvIGZpbmQgc3ltYm9scyB1c2FnZXMgd2hlbiB1cGRhdGluZyBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdXNhZ2VzVG9VcGRhdGU6ICd1c2VbKnxocmVmXScsXG5cbiAgLyoqXG4gICAqIEZpeCBGaXJlZm94IGJ1ZyB3aGVuIGdyYWRpZW50cyBhbmQgcGF0dGVybnMgZG9uJ3Qgd29yayBpZiB0aGV5IGFyZSB3aXRoaW4gYSBzeW1ib2wuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIGlzIHJlbmRlcmVkLCBidXQgbm90IG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzA2Njc0XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzUzNTc1XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIzNTM2NFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sOiBmYWxzZVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IGFycmF5TGlrZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiAvY2hyb21lL2kudGVzdCh1YSksXG4gIGlzRmlyZWZveDogL2ZpcmVmb3gvaS50ZXN0KHVhKSxcblxuICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTAzKHY9dnMuODUpLmFzcHhcbiAgaXNJRTogL21zaWUvaS50ZXN0KHVhKSB8fCAvdHJpZGVudC9pLnRlc3QodWEpLFxuICBpc0VkZ2U6IC9lZGdlL2kudGVzdCh1YSlcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCBkYXRhKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuLyoqXG4gKiBJRSBkb2Vzbid0IGV2YWx1YXRlIDxzdHlsZT4gdGFncyBpbiBTVkdzIHRoYXQgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBwYWdlLlxuICogVGhpcyB0cmljayB3aWxsIHRyaWdnZXIgSUUgdG8gcmVhZCBhbmQgdXNlIGFueSBleGlzdGluZyBTVkcgPHN0eWxlPiB0YWdzLlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vaWNvbmljL1NWR0luamVjdG9yL2lzc3Vlcy8yM1xuICogQHNlZSBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMDg5ODQ2OS9cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgRE9NIEVsZW1lbnQgdG8gc2VhcmNoIDxzdHlsZT4gdGFncyBpblxuICogQHJldHVybiB7QXJyYXk8SFRNTFN0eWxlRWxlbWVudD59XG4gKi9cbnZhciBldmFsU3R5bGVzSUVXb3JrYXJvdW5kID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHVwZGF0ZWROb2RlcyA9IFtdO1xuXG4gIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCArPSAnJztcbiAgICAgIHVwZGF0ZWROb2Rlcy5wdXNoKHN0eWxlKTtcbiAgICB9KTtcblxuICByZXR1cm4gdXBkYXRlZE5vZGVzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0gSWYgbm90IHByb3ZpZGVkIC0gY3VycmVudCBVUkwgd2lsbCBiZSB1c2VkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiAodXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zcGxpdCgnIycpWzBdO1xufTtcblxuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICovXG52YXIgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiAoZSwgbmV3VXJsLCBvbGRVcmwpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCB7IG9sZFVybDogb2xkVXJsLCBuZXdVcmw6IG5ld1VybCB9KTtcbiAgICB9KTtcbiAgfV0pO1xufTtcblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4nO1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gZnVuY3Rpb24gKHN2Zywgc2VsZWN0b3IpIHtcbiAgaWYgKCBzZWxlY3RvciA9PT0gdm9pZCAwICkgc2VsZWN0b3IgPSBkZWZhdWx0U2VsZWN0b3I7XG5cbiAgYXJyYXlGcm9tKHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSkuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgYXJyYXlGcm9tKHN5bWJvbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc3ltYm9sLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHN5bWJvbCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW21hdGNoZXJdXG4gKiBAcmV0dXJuIHtBdHRyW119XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIG1hdGNoZXIpIHtcbiAgdmFyIGF0dHJzID0gYXJyYXlGcm9tKG5vZGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHZhciBhcnJheWZpZWQgPSBhcnJheUZyb20obm9kZS5hdHRyaWJ1dGVzKTtcbiAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoZXIgPyBhcnJheWZpZWQuZmlsdGVyKG1hdGNoZXIpIDogYXJyYXlmaWVkO1xuICAgIHJldHVybiBhY2MuY29uY2F0KG1hdGNoZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGF0dHJzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8Tm9kZX0gbm9kZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Nsb25lPXRydWVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxudmFyIHhMaW5rTlMgPSBuYW1lc3BhY2VzXzEueGxpbmsudXJpO1xudmFyIHhMaW5rQXR0ck5hbWUgPSAneGxpbms6aHJlZic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxudmFyIHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4gPSAvW3t9fFxcXFxcXF5cXFtcXF1gXCI8Pl0vZztcblxuZnVuY3Rpb24gZW5jb2Rlcih1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAoXCIlXCIgKyAobWF0Y2hbMF0uY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlZmVyZW5jZXMobm9kZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIGFycmF5RnJvbShub2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBocmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoeExpbmtBdHRyTmFtZSk7XG4gICAgaWYgKGhyZWYgJiYgaHJlZi5pbmRleE9mKHN0YXJ0c1dpdGgpID09PSAwKSB7XG4gICAgICB2YXIgbmV3VXJsID0gaHJlZi5yZXBsYWNlKHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoeExpbmtOUywgeExpbmtBdHRyTmFtZSwgbmV3VXJsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuLyoqXG4gKiBMaXN0IG9mIFNWRyBhdHRyaWJ1dGVzIHRvIHVwZGF0ZSB1cmwoKSB0YXJnZXQgaW4gdGhlbVxuICovXG52YXIgYXR0TGlzdCA9IFtcbiAgJ2NsaXBQYXRoJyxcbiAgJ2NvbG9yUHJvZmlsZScsXG4gICdzcmMnLFxuICAnY3Vyc29yJyxcbiAgJ2ZpbGwnLFxuICAnZmlsdGVyJyxcbiAgJ21hcmtlcicsXG4gICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXJNaWQnLFxuICAnbWFya2VyRW5kJyxcbiAgJ21hc2snLFxuICAnc3Ryb2tlJyxcbiAgJ3N0eWxlJ1xuXTtcblxudmFyIGF0dFNlbGVjdG9yID0gYXR0TGlzdC5tYXAoZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIChcIltcIiArIGF0dHIgKyBcIl1cIik7IH0pLmpvaW4oJywnKTtcblxuLyoqXG4gKiBVcGRhdGUgVVJMcyBpbiBzdmcgaW1hZ2UgKGxpa2UgYGZpbGw9XCJ1cmwoLi4uKVwiYCkgYW5kIHVwZGF0ZSByZWZlcmVuY2luZyBlbGVtZW50c1xuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IHJlZmVyZW5jZXNcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHt2b2lkfVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcuc3ByaXRlJyk7XG4gKiBjb25zdCB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1c2UnKTtcbiAqIHVwZGF0ZVVybHMoc3ByaXRlLCB1c2FnZXMsICcjJywgJ3ByZWZpeCMnKTtcbiAqL1xudmFyIHVwZGF0ZVVybHMgPSBmdW5jdGlvbiAoc3ZnLCByZWZlcmVuY2VzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICB2YXIgc3RhcnRzV2l0aEVuY29kZWQgPSBlbmNvZGVyKHN0YXJ0c1dpdGgpO1xuICB2YXIgcmVwbGFjZVdpdGhFbmNvZGVkID0gZW5jb2RlcihyZXBsYWNlV2l0aCk7XG5cbiAgdmFyIG5vZGVzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoYXR0U2VsZWN0b3IpO1xuICB2YXIgYXR0cnMgPSBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGxvY2FsTmFtZSA9IHJlZi5sb2NhbE5hbWU7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgcmV0dXJuIGF0dExpc3QuaW5kZXhPZihsb2NhbE5hbWUpICE9PSAtMSAmJiB2YWx1ZS5pbmRleE9mKChcInVybChcIiArIHN0YXJ0c1dpdGhFbmNvZGVkKSkgIT09IC0xO1xuICB9KTtcblxuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBhdHRyLnZhbHVlID0gYXR0ci52YWx1ZS5yZXBsYWNlKHN0YXJ0c1dpdGhFbmNvZGVkLCByZXBsYWNlV2l0aEVuY29kZWQpOyB9KTtcbiAgdXBkYXRlUmVmZXJlbmNlcyhyZWZlcmVuY2VzLCBzdGFydHNXaXRoRW5jb2RlZCwgcmVwbGFjZVdpdGhFbmNvZGVkKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgZW1pdHRlciBldmVudHNcbiAqIEBlbnVtXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRXZlbnRzID0ge1xuICBNT1VOVDogJ21vdW50JyxcbiAgU1lNQk9MX01PVU5UOiAnc3ltYm9sX21vdW50J1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGUgPSAoZnVuY3Rpb24gKFNwcml0ZSQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlKGNmZykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggY2ZnID09PSB2b2lkIDAgKSBjZmcgPSB7fTtcblxuICAgIFNwcml0ZSQkMS5jYWxsKHRoaXMsIGluZGV4KGRlZmF1bHRDb25maWckMSwgY2ZnKSk7XG5cbiAgICB2YXIgZW1pdHRlciA9IG1pdHQoKTtcbiAgICB0aGlzLl9lbWl0dGVyID0gZW1pdHRlcjtcbiAgICB0aGlzLm5vZGUgPSBudWxsO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9Db25maWd1cmUpIHtcbiAgICAgIHRoaXMuX2F1dG9Db25maWd1cmUoY2ZnKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnN5bmNVcmxzV2l0aEJhc2VUYWcpIHtcbiAgICAgIHZhciBiYXNlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzJDEudXBkYXRlVXJscygnIycsIGJhc2VVcmwpOyB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlTG9jYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlID0gaGFuZGxlTG9jYXRpb25DaGFuZ2U7XG5cbiAgICAvLyBQcm92aWRlIHdheSB0byB1cGRhdGUgc3ByaXRlIHVybHMgZXh0ZXJuYWxseSB2aWEgZGlzcGF0Y2hpbmcgY3VzdG9tIHdpbmRvdyBldmVudFxuICAgIGlmIChjb25maWcubGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGxvY2F0aW9uIGNoYW5nZSBldmVudCBpbiBBbmd1bGFyIGF1dG9tYXRpY2FsbHlcbiAgICBpZiAoY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIpIHtcbiAgICAgIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQpO1xuICAgIH1cblxuICAgIC8vIEFmdGVyIHNwcml0ZSBtb3VudGVkXG4gICAgZW1pdHRlci5vbihFdmVudHMuTU9VTlQsIGZ1bmN0aW9uIChzcHJpdGVOb2RlKSB7XG4gICAgICBpZiAoY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKSB7XG4gICAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKHNwcml0ZU5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQWZ0ZXIgc3ltYm9sIG1vdW50ZWQgaW50byBzcHJpdGVcbiAgICBlbWl0dGVyLm9uKEV2ZW50cy5TWU1CT0xfTU9VTlQsIGZ1bmN0aW9uIChzeW1ib2xOb2RlKSB7XG4gICAgICBpZiAoY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKSB7XG4gICAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKHN5bWJvbE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChicm93c2VyLmlzSUUgfHwgYnJvd3Nlci5pc0VkZ2UpIHtcbiAgICAgICAgZXZhbFN0eWxlc0lFV29ya2Fyb3VuZChzeW1ib2xOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICggU3ByaXRlJCQxICkgQnJvd3NlclNwcml0ZS5fX3Byb3RvX18gPSBTcHJpdGUkJDE7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU3ByaXRlJCQxICYmIFNwcml0ZSQkMS5wcm90b3R5cGUgKTtcbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCcm93c2VyU3ByaXRlO1xuXG4gIHZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzTW91bnRlZDoge30gfTtcblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSBjb25maWd1cmUgZm9sbG93aW5nIG9wdGlvbnNcbiAgICogLSBgc3luY1VybHNXaXRoQmFzZVRhZ2BcbiAgICogLSBgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcmBcbiAgICogLSBgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2xgXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9hdXRvQ29uZmlndXJlID0gZnVuY3Rpb24gX2F1dG9Db25maWd1cmUgKGNmZykge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKHR5cGVvZiBjZmcuc3luY1VybHNXaXRoQmFzZVRhZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnID0gdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0gIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9ICdhbmd1bGFyJyBpbiB3aW5kb3c7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjZmcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPSBicm93c2VyLmlzRmlyZWZveDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5vbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5uZXdVcmxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIF9oYW5kbGVMb2NhdGlvbkNoYW5nZSAoZXZlbnQpIHtcbiAgICB2YXIgcmVmID0gZXZlbnQuZGV0YWlsO1xuICAgIHZhciBvbGRVcmwgPSByZWYub2xkVXJsO1xuICAgIHZhciBuZXdVcmwgPSByZWYubmV3VXJsO1xuICAgIHRoaXMudXBkYXRlVXJscyhvbGRVcmwsIG5ld1VybCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAgICogSWYgc3ByaXRlIGFscmVhZHkgbW91bnRlZCAtIGBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpYCB3aWxsIGJlIGNhbGxlZC5cbiAgICogQGZpcmVzIEV2ZW50cyNTWU1CT0xfTU9VTlRcbiAgICogQHBhcmFtIHtCcm93c2VyU3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHN5bWJvbCkge1xuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuICAgIHZhciBpc05ld1N5bWJvbCA9IFNwcml0ZSQkMS5wcm90b3R5cGUuYWRkLmNhbGwodGhpcywgc3ltYm9sKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCAmJiBpc05ld1N5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuU1lNQk9MX01PVU5ULCBzeW1ib2wubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmV3U3ltYm9sO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggdG8gZXhpc3RpbmcgRE9NIG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gYXR0YWNoZWQgRE9NIEVsZW1lbnQuIG51bGwgaWYgbm9kZSB0byBhdHRhY2ggbm90IGZvdW5kLlxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoICh0YXJnZXQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUgRWxlbWVudCAqL1xuICAgIHZhciBub2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgc3ByaXRlLm5vZGUgPSBub2RlO1xuXG4gICAgLy8gQWxyZWFkeSBhZGRlZCBzeW1ib2xzIG5lZWRzIHRvIGJlIG1vdW50ZWRcbiAgICB0aGlzLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgICBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpO1xuICAgICAgdGhpcyQxLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHN5bWJvbHMgZnJvbSBleGlzdGluZyBET00gbm9kZXMsIGFkZCBhbmQgbW91bnQgdGhlbVxuICAgIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCcpKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbE5vZGUpIHtcbiAgICAgICAgdmFyIHN5bWJvbCA9IEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZShzeW1ib2xOb2RlKTtcbiAgICAgICAgc3ltYm9sLm5vZGUgPSBzeW1ib2xOb2RlOyAvLyBoYWNrIHRvIHByZXZlbnQgc3ltYm9sIG1vdW50aW5nIHRvIHNwcml0ZSB3aGVuIGFkZGluZ1xuICAgICAgICBzcHJpdGUuYWRkKHN5bWJvbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gICAgdmFyIF9lbWl0dGVyID0gcmVmLl9lbWl0dGVyO1xuXG4gICAgc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG5cbiAgICBfZW1pdHRlci5vZmYoJyonKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCwgdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmaXJlcyBFdmVudHMjTU9VTlRcbiAgICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gW3RhcmdldF1cbiAgICogQHBhcmFtIHtib29sZWFufSBbcHJlcGVuZD1mYWxzZV1cbiAgICogQHJldHVybiB7RWxlbWVudHxudWxsfSByZW5kZXJlZCBzcHJpdGUgbm9kZS4gbnVsbCBpZiBtb3VudCBub2RlIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCwgcHJlcGVuZCkge1xuICAgIGlmICggdGFyZ2V0ID09PSB2b2lkIDAgKSB0YXJnZXQgPSB0aGlzLmNvbmZpZy5tb3VudFRvO1xuICAgIGlmICggcHJlcGVuZCA9PT0gdm9pZCAwICkgcHJlcGVuZCA9IGZhbHNlO1xuXG4gICAgdmFyIHNwcml0ZSA9IHRoaXM7XG5cbiAgICBpZiAoc3ByaXRlLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHNwcml0ZS5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudE5vZGUgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHNwcml0ZS5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgaWYgKHByZXBlbmQgJiYgbW91bnROb2RlLmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgIG1vdW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbW91bnROb2RlLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3VudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KEV2ZW50cy5NT1VOVCwgbm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHBhcnNlKHRoaXMuc3RyaW5naWZ5KCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRhY2ggc3ByaXRlIGZyb20gdGhlIERPTVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBVUkxzIGluIHNwcml0ZSBhbmQgdXNhZ2UgZWxlbWVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFVybFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VXJsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIFVSTHMgd2FzIHVwZGF0ZWQsIGBmYWxzZWAgLSBzcHJpdGUgaXMgbm90IG1vdW50ZWRcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVVybHMgPSBmdW5jdGlvbiB1cGRhdGVVcmxzJDEgKG9sZFVybCwgbmV3VXJsKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLnVzYWdlc1RvVXBkYXRlKTtcblxuICAgIHVwZGF0ZVVybHMoXG4gICAgICB0aGlzLm5vZGUsXG4gICAgICB1c2FnZXMsXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChvbGRVcmwpKSArIFwiI1wiKSxcbiAgICAgICgoZ2V0VXJsV2l0aG91dEZyYWdtZW50KG5ld1VybCkpICsgXCIjXCIpXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGU7XG59KFNwcml0ZSkpO1xuXG52YXIgcmVhZHkkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIHsgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7IH1cblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSk7XG5cblxuICBpZiAoIWxvYWRlZClcbiAgeyBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcik7XG4gICAgbG9hZGVkID0gMTtcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgeyBsaXN0ZW5lcigpOyB9XG4gIH0pOyB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZm5zLnB1c2goZm4pO1xuICB9XG5cbn0pO1xufSk7XG5cbnZhciBzcHJpdGVOb2RlSWQgPSAnX19TVkdfU1BSSVRFX05PREVfXyc7XG52YXIgc3ByaXRlR2xvYmFsVmFyTmFtZSA9ICdfX1NWR19TUFJJVEVfXyc7XG52YXIgaXNTcHJpdGVFeGlzdHMgPSAhIXdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbnZhciBzcHJpdGU7XG5cbmlmIChpc1Nwcml0ZUV4aXN0cykge1xuICBzcHJpdGUgPSB3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG59IGVsc2Uge1xuICBzcHJpdGUgPSBuZXcgQnJvd3NlclNwcml0ZSh7IGF0dHJzOiB7IGlkOiBzcHJpdGVOb2RlSWQgfSB9KTtcbiAgd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdID0gc3ByaXRlO1xufVxuXG52YXIgbG9hZFNwcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENoZWNrIGZvciBwYWdlIGFscmVhZHkgY29udGFpbnMgc3ByaXRlIG5vZGVcbiAgICogSWYgZm91bmQgLSBhdHRhY2ggdG8gYW5kIHJldXNlIGl0J3MgY29udGVudFxuICAgKiBJZiBub3QgLSByZW5kZXIgYW5kIG1vdW50IHRoZSBuZXcgc3ByaXRlXG4gICAqL1xuICB2YXIgZXhpc3RpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzcHJpdGVOb2RlSWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHNwcml0ZS5hdHRhY2goZXhpc3RpbmcpO1xuICB9IGVsc2Uge1xuICAgIHNwcml0ZS5tb3VudChkb2N1bWVudC5ib2R5LCB0cnVlKTtcbiAgfVxufTtcblxuaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgbG9hZFNwcml0ZSgpO1xufSBlbHNlIHtcbiAgcmVhZHkkMShsb2FkU3ByaXRlKTtcbn1cblxudmFyIHNwcml0ZSQxID0gc3ByaXRlO1xuXG5yZXR1cm4gc3ByaXRlJDE7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2goZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxuXHRcdGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xlc3MvaGVhZGVyLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sZXNzL21haW4ubGVzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xlc3MvbmF2Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gJCgnLmxpc3QtZ3JvdXAgPiAubGlzdC1ncm91cC1pdGVtJykuY2xpY2soKCk9PiB7XG4vLyAgICAgLy8gLi4uXG4vLyB9KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9uYXYuanMiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibG9nb1wiLFxuICBcInVzZVwiOiBcImxvZ28tdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiBpZD1cXFwibG9nb1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgIDwvZGVmcz5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk01MzMuOTQxMzMzIDQxOS4yNjRjMTQuNzA5MzMzLTEuNjIxMzMzIDM3LjI5MDY2Ny0zLjI2NCA2OC4zNTItMy4yNjQgNTEuODcyIDAgOTMuODAyNjY3IDkuMTUyIDExOS43NzYgMjguNDE2IDIzLjMzODY2NyAxNy45NTIgMzguODU4NjY3IDQ3LjAwOCAzNC41NiA4OS4xMzA2NjctMy45Nzg2NjcgMzkuMTg5MzMzLTI0LjA0MjY2NyA2Ni42MzQ2NjctNTMuMzEyIDgzLjU5NDY2NkM2NzYuNTQ0IDYzMy4xNTIgNjQyLjgzNzMzMyA2NDAgNTkyLjEwNjY2NyA2NDBjLTI5Ljg4OCAwLTU4LjQyMTMzMy0xLjY0MjY2Ny04MC4xMDY2NjctNC44OTZsMjEuOTQxMzMzLTIxNS44NHogbTQyLjg2OTMzNCAxNzIuOTM4NjY3YzQuOTgxMzMzIDAuOTkyIDExLjU2MjY2NyAxLjk3MzMzMyAyNC41MzMzMzMgMS45NzMzMzMgNTEuODgyNjY3IDAgODguNDY5MzMzLTI1Ljg3NzMzMyA5Mi4xNi02Mi4yNCA1LjMzMzMzMy01Mi41NTQ2NjctMjcuMTI1MzMzLTcwLjk0NC04MS44MDI2NjctNzAuNjI0LTcuMDcyIDAtMTYuOTE3MzMzIDAtMjIuMTMzMzMzIDAuOTcwNjY3TDU3Ni44IDU5Mi4yMTMzMzNoMC4wMTA2Njd6IG0yMjMuNDk4NjY2LTE2NC43MDRjMjEwLjk1NDY2Ny0zOS44NzIgMjI5LjE2MjY2NyAzMS43NzYgMjIyLjY0NTMzNCA5NS4xODkzMzNMMTAxMC42NTYgNjQwaC02Ni45NDRsMTEuMjEwNjY3LTEwNi45ODY2NjdjMi40MjEzMzMtMjMuNTYyNjY3IDE3LjUwNC02OS42NTMzMzMtNTUuMzM4NjY3LTY3LjkxNDY2Ni0yNS4xODQgMC42MDgtMzcuNzA2NjY3IDQuMDY0LTM3LjcwNjY2NyA0LjA2NHMtMi4xODY2NjcgMjguNDY5MzMzLTQuODMyIDQ5LjUxNDY2Nkw4NDQuMzIgNjQwSDc3OC42NjY2NjdsMTMuMDI0LTExOS41NzMzMzNcXFwiIGZpbGw9XFxcIiMyMzE5MTZcXFwiIHAtaWQ9XFxcIjc0MDRcXFwiIC8+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNMjI2LjYzNDY2NyA2MzIuNjgyNjY3Yy0xMi4zNzMzMzMgNC4zNDEzMzMtMzguMDM3MzMzIDcuMzE3MzMzLTczLjkwOTMzNCA3LjMxNzMzM0M0OS42IDY0MC02LjA0OCA1OTAuOTMzMzMzIDAuNTIyNjY3IDUyNi4wOTA2NjcgOC40MTYgNDQ4LjgxMDY2NyA5MC44NTg2NjcgNDA1LjMzMzMzMyAxODEuMTQxMzMzIDQwNS4zMzMzMzNjMzQuOTc2IDAgNTUuNTUyIDIuODU4NjY3IDc0Ljg1ODY2NyA3LjYzNzMzNGwtNi4yMDggNTIuMDY0Yy0xMi44MjEzMzMtNC4zODQtNDIuODkwNjY3LTguNDA1MzMzLTY3LjIzMi04LjQwNTMzNC01My4xNDEzMzMgMC05OC4yNTA2NjcgMTYuMDQyNjY3LTEwMy40MjQgNjYuNzYyNjY3LTQuNjA4IDQ1LjM1NDY2NyAyNy4wNjEzMzMgNjcuMDQgODYuODE2IDY3LjA0IDIwLjggMCA1MS40NzczMzMtMy4wMTg2NjcgNjUuNjUzMzMzLTcuMzcwNjY3bC00Ljk5MiA0OS42IDAuMDIxMzM0IDAuMDIxMzM0elxcXCIgZmlsbD1cXFwiI0M5MjAyN1xcXCIgcC1pZD1cXFwiNzQwNVxcXCIgLz5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk0yNzIuNzE0NjY3IDU4MC4wMjEzMzNjMTkuMjg1MzMzIDYuNzYyNjY3IDU5LjQ4OCAxMy41MDQgOTIgMTMuNTA0IDM1LjAyOTMzMyAwIDU0LjUyOC05LjMzMzMzMyA1Ni4wOTYtMjMuNzk3MzMzIDEuNDE4NjY3LTEzLjIwNTMzMy0xMi45MjgtMTQuOTg2NjY3LTUyLjQ5MDY2Ny0yNC4wMTA2NjctNTQuNjY2NjY3LTEyLjg5Ni04OS41NDY2NjctMzIuODQyNjY3LTg2LjEzMzMzMy02NC43MDRDMjg2LjE3NiA0NDMuOTg5MzMzIDMzNy42ODUzMzMgNDE2IDQxNi43MjUzMzMgNDE2YzM4LjU2IDAgNzUuOTE0NjY3IDIuNjEzMzMzIDk1LjI3NDY2NyA4LjcxNDY2N2wtNi42NTYgNDYuNjY2NjY2Yy0xMi41NjUzMzMtNC4yMDI2NjctNjAuNjcyLTEwLjAzNzMzMy05My4yMDUzMzMtMTAuMDM3MzMzLTMyLjk5MiAwLTUwLjA2OTMzMyA5Ljk3MzMzMy01MS4yNTMzMzQgMjAuOTE3MzMzLTEuNDkzMzMzIDEzLjg0NTMzMyAxNS42NTg2NjcgMTQuNDg1MzMzIDU4LjUyOCAyNS40NTA2NjcgNTguMDI2NjY3IDE0LjE1NDY2NyA4My40MDI2NjcgMzQuMDkwNjY3IDgwLjA4NTMzNCA2NC45OTJDNDk1LjYwNTMzMyA2MDkuMTA5MzMzIDQ0OS4yNTg2NjcgNjQwIDM1Ni43MTQ2NjcgNjQwYy0zOC41MjggMC03MS43NDQtNi43NjI2NjctOTAuMDQ4LTEzLjUyNTMzM2w2LjA0OC00Ni40NTMzMzR6XFxcIiBmaWxsPVxcXCIjMjMxOTE2XFxcIiBwLWlkPVxcXCI3NDA2XFxcIiAvPlxcbiAgICA8L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3N2Zy9sb2dvLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwicGVuY2lsXCIsXG4gIFwidXNlXCI6IFwicGVuY2lsLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCIgaWQ9XFxcInBlbmNpbFxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNMTIxLjkwNSA3ODAuMTloNzgwLjE5djk3LjUyNGgtNzgwLjE5Vjc4MC4xOXpNODIzLjI5NiAyOTguNDk2bC02OC45NzQtNjguOTc0LTM0NC43OTUgMzQ0Ljc5Ni0zNC40NzUgMTAzLjQ0OCAxMDMuNDI0LTM0LjQ3NXpNODc1LjAwOCAyNDYuNzZsMTcuMjM3LTE3LjIzOC02OC45NDktNjguOTQ5LTE3LjI2MiAxNy4yMzctMTcuMjM3IDE3LjIzOCA2OC45NzQgNjguOTczelxcXCIgcC1pZD1cXFwiMTM5OVxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3N2Zy9wZW5jaWwuc3ZnXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJjaGVja2VkXCIsXG4gIFwidXNlXCI6IFwiY2hlY2tlZC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAyNCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiIGlkPVxcXCJjaGVja2VkXFxcIj48ZGVmcz48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9XFxcIk03NjggMEgyNTZDMTE1LjIgMCAwIDExNS4yIDAgMjU2djUxMmMwIDE0MC44IDExNS4yIDI1NiAyNTYgMjU2aDUxMmMxNDAuOCAwIDI1Ni0xMTUuMiAyNTYtMjU2VjI1NmMwLTE0MC44LTExNS4yLTI1Ni0yNTYtMjU2eiBtMTcuNiAzNzcuNkw0NjAuOCA3MjhjLTkuNiA5LjYtMjcuMiAxNC40LTQwIDE0LjQtMTQuNCAwLTMyLTMuMi00MS42LTE0LjRsLTE0Mi40LTE1My42Yy0xNy42LTE5LjItMTcuNi00OS42IDAtNjguOCAxNy42LTE5LjIgNDYuNC0xOS4yIDY0IDBsMTIwIDEyOCAzMDAuOC0zMjQuOGMxNy42LTE5LjIgNDYuNC0xOS4yIDY0IDBzMTcuNiA0OS42IDAgNjguOHpcXFwiIHAtaWQ9XFxcIjEwMDk0XFxcIiBmaWxsPVxcXCIjMkFENDFCXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnL2NoZWNrZWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGVzcy9tb3ZlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xlc3MvZm9ybV92YWxpZGF0aW9uLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiJCgnLmljb24tYmxvZy1sb2dvJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAvL3N3aXRjaCBhY3RpdmUgIGljb24gXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIC8vIHN3aXRjaCBhY3RpdmUgdXJsXG4gICAgdmFyIGJsb2dfdXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWJsb2ctc2l0ZS11cmwnKTtcbiAgICAkKCcuYmxvZy1zaXRlLXVybCcpLmh0bWwoYmxvZ191cmwpO1xufSlcblxuLy9zdWJtaXQgZm9ybSAtPiBmb3JtIHZhbGlkYXRpb25cbiQoXCIjbW92ZWJsb2didG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgaWYgKCQoXCIjbW92ZUJsb2dGb3JtXCIpLmZvcm1Jc1ZhbGlkKCkpIHtcbiAgICAvL3N1Ym1pdCBmb3JtIFxuICAgIH1lbHNle1xuICAgICAgICBcbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYmxvZ21vdmVmb3JtLmpzIiwiIShmdW5jdGlvbigkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgREFOR0VSOiAnaGFzLWRhbmdlcicsXG4gICAgU1VDQ0VTUzogJ2hhcy1zdWNjZXNzJyxcbiAgICBWQUxVRV9NSVNTSU5HOiAndmFsdWUtbWlzc2luZydcbiAgfTtcblxuICB2YXIgUHJvcGVydGllcyA9IHtcbiAgICBESVNBQkxFRDogJ2Rpc2FibGVkJ1xuICB9O1xuXG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBWQUxJREFURTogJy52YWxpZGF0ZScsXG4gICAgRk9STV9HUk9VUDogJy5mb3JtLWdyb3VwJyxcbiAgICBBTExfSU5QVVRTOiAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGNoZWNrYm94JyxcbiAgICBJTlBVVDogJ2lucHV0JyxcbiAgICBTRUxFQ1Q6ICdzZWxlY3QnLFxuICAgIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICAgIENIRUNLQk9YOiAnY2hlY2tib3gnXG4gIH07XG5cbiAgdmFyIEV2ZW50ID0ge1xuICAgIENIQU5HRV9CTFVSOiAnY2hhbmdlLmJzLnZhbGlkYXRlICcgKyAnYmx1ci5icy52YWxpZGF0ZSdcbiAgfTtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogTWV0aG9kc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLy8galF1ZXJ5XG4gIGpRdWVyeS5mbi5mb3JtSXNWYWxpZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb3JtID0gJCh0aGlzWzBdKTtcbiAgICB2YXIgZm9ybUdyb3VwcyA9ICQoU2VsZWN0b3IuRk9STV9HUk9VUCwgZm9ybSk7XG4gICAgdmFyIGZvcm1FcnJvcnMgPSBbXTtcblxuICAgIGZvcm1Hcm91cHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbnB1dHMgPSAkKFNlbGVjdG9yLkFMTF9JTlBVVFMsICQodGhpcykpO1xuICAgICAgaWYoaW5wdXRzLmxlbmd0aCl7XG4gICAgICAgIGZvcm1FcnJvcnMucHVzaChfdmFsaWRhdGVfaW5wdXQoaW5wdXRzKSk7ICBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICQuaW5BcnJheSgwLCBmb3JtRXJyb3JzKSA9PT0gLTE7XG4gIH07XG5cblxuICAvLyBwcml2YXRlXG5cbiAgdmFyIF92YWxpZGF0ZV9pbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdmFyIHJldFZhbCA9IDE7XG4gICAgdmFyIGZvcm1Hcm91cCA9IGlucHV0LmNsb3Nlc3QoU2VsZWN0b3IuRk9STV9HUk9VUCk7XG4gICAgdmFyIGlucHV0VmFsaWRpdHkgPSBpbnB1dFswXS52YWxpZGl0eTtcblxuICAgIC8vIHNraXAgb3ZlciBpbnB1dHMgdGhhdCBhcmUgZGlzYWJsZWRcbiAgICBpZiAoaW5wdXQucHJvcChQcm9wZXJ0aWVzLkRJU0FCTEVEKSkge1xuXG4gICAgfSBlbHNlIGlmIChpbnB1dFZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBmb3JtR3JvdXAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkRBTkdFUik7XG5cbiAgICAgIC8vIG9ubHkgc3R5bGUgaW5wdXRzIHRoYXQgaGF2ZSBhIHZhbHVlXG4gICAgICAvLyB0aGlzIHByZXZlbnRzIGVtcHR5IG5vbi1yZXF1aXJlZCBpbnB1dHMgZnJvbSBnZXR0aW5nIHN0eWxlZFxuICAgICAgaWYgKGlucHV0LnZhbCgpKSB7XG4gICAgICAgIGZvcm1Hcm91cC5hZGRDbGFzcyhDbGFzc05hbWUuU1VDQ0VTUyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldFZhbCA9IDBcbiAgICAgIGZvcm1Hcm91cC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU1VDQ0VTUykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkRBTkdFUik7XG5cbiAgICAgIC8vIGNoZWNrIGlmIGEgcmVxdWlyZWQgZmllbGQgaXMgZW1wdHlcbiAgICAgIC8vIHZhbHVlLW1pc3Npbmcgd2lsbCBvdmVyd3JpdGUgLmZvcm0tY29udHJvbC1mZWVkYmFjayB3aXRoICdSZXF1aXJlZCdcbiAgICAgIGlmIChpbnB1dFZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICBmb3JtR3JvdXAuYWRkQ2xhc3MoQ2xhc3NOYW1lLlZBTFVFX01JU1NJTkcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybUdyb3VwLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5WQUxVRV9NSVNTSU5HKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0VmFsO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBFdmVudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKEV2ZW50LkNIQU5HRV9CTFVSLCBTZWxlY3Rvci5WQUxJREFURSwgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGlucHV0ID0gJChlLnRhcmdldCk7XG4gICAgICB2YXIgdGFnID0gaW5wdXRbMF0udGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgICBjYXNlIFNlbGVjdG9yLklOUFVUOlxuICAgICAgICBjYXNlIFNlbGVjdG9yLlNFTEVDVDpcbiAgICAgICAgY2FzZSBTZWxlY3Rvci5URVhUQVJFQTpcbiAgICAgICAgY2FzZSBTZWxlY3Rvci5DSEVDS0JPWDpcbiAgICAgICAgICBfdmFsaWRhdGVfaW5wdXQoaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcblxuLy8jIHNvdXJjZVVSTD1qb3Jvc29iLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xpYi9mb3JtX3ZhbGlkYXRpb24uanMiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiamlhbnNodVwiLFxuICBcInVzZVwiOiBcImppYW5zaHUtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDIwNDggMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjA0OCAxMDI0XFxcIiBpZD1cXFwiamlhbnNodVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNMTk0NS42IDI1LjZjNDMuNTIgMCA3Ni44IDMzLjI4IDc2LjggNzYuOHY4MTkuMmMwIDQzLjUyLTMzLjI4IDc2LjgtNzYuOCA3Ni44SDEwMi40Yy00My41MiAwLTc2LjgtMzMuMjgtNzYuOC03Ni44VjEwMi40YzAtNDMuNTIgMzMuMjgtNzYuOCA3Ni44LTc2LjhoMTg0My4ybTAtMjUuNkgxMDIuNEM0Ni4wOCAwIDAgNDYuMDggMCAxMDIuNHY4MTkuMmMwIDU2LjMyIDQ2LjA4IDEwMi40IDEwMi40IDEwMi40aDE4NDMuMmM1Ni4zMiAwIDEwMi40LTQ2LjA4IDEwMi40LTEwMi40VjEwMi40YzAtNTYuMzItNDYuMDgtMTAyLjQtMTAyLjQtMTAyLjR6XFxcIiBwLWlkPVxcXCIxOTYzXFxcIiAvPjxwYXRoIGQ9XFxcIk04MDEuMjggMjQ1Ljc2aDQ2LjA4YzUuMTIgMCAxMi44IDUuMTIgMTIuOCAxMC4yNC0yLjU2IDcuNjgtNy42OCAxNS4zNi0xMC4yNCAyMy4wNGgxNDUuOTJjMCAxMC4yNC0yLjU2IDE3LjkyLTIuNTYgMjguMTYgMCA3LjY4LTcuNjggMTIuOC0xMi44IDEyLjhoLTY2LjU2YzUuMTIgMTIuOCAxMi44IDI1LjYgMTUuMzYgMzguNCAyLjU2IDcuNjgtNS4xMiAxNS4zNi0xMi44IDE1LjM2aC00MC45NmMtMi41Ni0xNy45Mi03LjY4LTM1Ljg0LTE1LjM2LTUzLjc2aC0zOC40Yy0yNS42IDMwLjcyLTU4Ljg4IDU2LjMyLTk3LjI4IDY2LjU2di00MC45NmMyMC40OC0xMi44IDM4LjQtMjUuNiA1MS4yLTQ2LjA4IDE1LjM2LTE1LjM2IDIwLjQ4LTM1Ljg0IDI1LjYtNTMuNzZ6IG00MjcuNTIgMGg1OC44OHY3OS4zNkgxNDU5LjJ2MTU4LjcyaDY2LjU2djE2MS4yOGMwIDMwLjcyLTI4LjE2IDU2LjMyLTU4Ljg4IDU4Ljg4aC02MS40NGMtNy42OCAwLTE1LjM2LTUuMTItMTUuMzYtMTAuMjQtMi41Ni0xMC4yNC0yLjU2LTIwLjQ4LTIuNTYtMzAuNzJoNTYuMzJjMTIuOCAwIDIzLjA0LTEwLjI0IDIzLjA0LTIzLjA0di0xMTIuNjRoLTE4MS43NnYyMDcuMzZjMCAxMC4yNC03LjY4IDE3LjkyLTE1LjM2IDE3LjkyLTEyLjggMi41Ni0yOC4xNiAyLjU2LTQwLjk2IDUuMTJ2LTIzMC40aC0xNzQuMDhjLTcuNjggMC0xMi44LTcuNjgtMTIuOC0xMi44IDAtMTAuMjQtMi41Ni0yMC40OC0yLjU2LTI4LjE2aDE5MnYtMTE1LjJoLTE0MC44Yy03LjY4IDAtMTIuOC01LjEyLTEyLjgtMTAuMjQtMi41Ni0xMC4yNC0yLjU2LTIwLjQ4LTIuNTYtMzAuNzJoMTU4LjcyYy01LjEyLTMzLjI4LTUuMTItNTguODgtNS4xMi04NC40OG01OC44OCAxMjAuMzJ2MTE1LjJoMTEyLjY0di0xMTUuMmgtMTEyLjY0ek01NjUuNzYgMjQ1Ljc2aDQ2LjA4YzUuMTIgMCAxMi44IDUuMTIgMTIuOCAxMC4yNC0yLjU2IDcuNjgtNy42OCAxNS4zNi0xMC4yNCAyMy4wNGgxMzguMjRjMCA3LjY4LTIuNTYgMTcuOTItMi41NiAyNS42IDAgNy42OC03LjY4IDEyLjgtMTUuMzYgMTIuOGgtNjRsMTUuMzYgMzguNGMyLjU2IDcuNjgtMi41NiAxNS4zNi0xMC4yNCAxNS4zNmgtNDAuOTZjLTIuNTYtMTcuOTItNy42OC0zNS44NC0xMi44LTUzLjc2aC0zMC43MmMtMjUuNiAzMy4yOC02NCA1OC44OC0xMDQuOTYgNjkuMTJ2LTQwLjk2YzQwLjk2LTE1LjM2IDY5LjEyLTU2LjMyIDc5LjM2LTk5Ljg0eiBtODY3Ljg0IDE1LjM2aDUzLjc2YzI1LjYgMzAuNzIgNDYuMDggNjkuMTIgNTguODggMTA3LjUyIDIuNTYgNy42OC0yLjU2IDE1LjM2LTEwLjI0IDE1LjM2aC00Ni4wOGMtMTAuMjQtNDMuNTItMzAuNzItODQuNDgtNTYuMzItMTIyLjg4elxcXCIgcC1pZD1cXFwiMTk2NFxcXCIgLz48cGF0aCBkPVxcXCJNNTM3LjYgMzY2LjA4aDUzLjc2YzE3LjkyIDIwLjQ4IDMwLjcyIDQzLjUyIDM4LjQgNjkuMTIgMi41NiA3LjY4LTIuNTYgMTcuOTItMTAuMjQgMTcuOTJoLTQzLjUyYy03LjY4LTMwLjcyLTIwLjQ4LTU4Ljg4LTM4LjQtODcuMDR6IG05OS44NCAyNS42aDMzMC4yNFY2OTEuMmMwIDI4LjE2LTIwLjQ4IDU2LjMyLTQ4LjY0IDYxLjQ0LTIwLjQ4IDUuMTItMzguNCAyLjU2LTU4Ljg4IDIuNTYtNy42OCAwLTE1LjM2LTIuNTYtMTcuOTItMTAuMjQtMi41Ni0xMC4yNC0yLjU2LTIwLjQ4LTUuMTItMzAuNzJoNTMuNzZjMTIuOCAwIDIwLjQ4LTEyLjggMjAuNDgtMjMuMDRWNDM1LjJoLTI1NmMtNy42OCAwLTEyLjgtNS4xMi0xMi44LTEwLjI0LTUuMTItMTAuMjQtNS4xMi0yMy4wNC01LjEyLTMzLjI4eiBtLTEyMC4zMiA2MS40NGg1Ni4zMnYyNzkuMDRjMCAxMC4yNC03LjY4IDE3LjkyLTE1LjM2IDIwLjQ4LTEyLjggMi41Ni0yNS42IDIuNTYtNDAuOTYgNS4xMlY0NTMuMTJ6XFxcIiBwLWlkPVxcXCIxOTY1XFxcIiAvPjxwYXRoIGQ9XFxcIk02MzIuMzIgNDcxLjA0aDIyMC4xNnYxNTMuNmMwIDEyLjgtMi41NiAyNS42LTcuNjggMzUuODQtMTAuMjQgMjAuNDgtMzUuODQgMzMuMjgtNTguODggMzMuMjhoLTE1My42di0yMjIuNzJtNTMuNzYgMzguNHY0OC42NGgxMTIuNjR2LTQ4LjY0aC0xMTIuNjRtMCA4OS42djUzLjc2aDg5LjZjMTAuMjQgMCAyMC40OC01LjEyIDIzLjA0LTE1LjM2IDIuNTYtMTIuOCAwLTI1LjYgMC0zOC40aC0xMTIuNjR6XFxcIiBwLWlkPVxcXCIxOTY2XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnL2ppYW5zaHUuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCIsInJlcXVpcmUoJ0xlc3MvaGVhZGVyLmxlc3MnKTtcbnJlcXVpcmUoJ0xlc3MvbWFpbi5sZXNzJyk7XG5yZXF1aXJlKCdMZXNzL25hdi5sZXNzJyk7XG5yZXF1aXJlKCdMZXNzL21vdmUubGVzcycpO1xucmVxdWlyZSgnTGVzcy9mb3JtX3ZhbGlkYXRpb24ubGVzcycpO1xuXG5yZXF1aXJlKCdKUy9uYXYuanMnKTtcbnJlcXVpcmUoJ0pTL2Jsb2dtb3ZlZm9ybS5qcycpO1xucmVxdWlyZSgnSlMvbGliL2Zvcm1fdmFsaWRhdGlvbi5qcycpO1xuXG5yZXF1aXJlKCdBc3NldC9zdmcvbG9nby5zdmcnKTtcbnJlcXVpcmUoJ0Fzc2V0L3N2Zy9wZW5jaWwuc3ZnJyk7XG5cbnJlcXVpcmUoJ0Fzc2V0L3N2Zy9qaWFuc2h1LnN2ZycpO1xucmVxdWlyZSgnQXNzZXQvc3ZnL3NpbmEuc3ZnJyk7XG5yZXF1aXJlKCdBc3NldC9zdmcvbmV0ZWFzZS5zdmcnKTtcbnJlcXVpcmUoJ0Fzc2V0L3N2Zy9ib2tleXVhbi5zdmcnKTtcbnJlcXVpcmUoJ0Fzc2V0L3N2Zy81MWN0by5zdmcnKTtcbnJlcXVpcmUoJ0Fzc2V0L3N2Zy9jaGluYXVuaXguc3ZnJyk7XG5yZXF1aXJlKCdBc3NldC9zdmcvaGV4dW4uc3ZnJyk7XG5yZXF1aXJlKCdBc3NldC9zdmcvb3NjaGluYS5zdmcnKTtcbnJlcXVpcmUoJ0Fzc2V0L3N2Zy9zb2h1LnN2ZycpO1xucmVxdWlyZSgnQXNzZXQvc3ZnL2l0ZXllLnN2ZycpO1xucmVxdWlyZSgnQXNzZXQvc3ZnL2NoZWNrZWQuc3ZnJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9nbW92ZWZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJzaW5hXCIsXG4gIFwidXNlXCI6IFwic2luYS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMjA0OCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQ4IDEwMjRcXFwiIGlkPVxcXCJzaW5hXFxcIj48ZGVmcz48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9XFxcIk0xOTQ1LjYgMjUuNmM0My41MiAwIDc2LjggMzMuMjggNzYuOCA3Ni44djgxOS4yYzAgNDMuNTItMzMuMjggNzYuOC03Ni44IDc2LjhIMTAyLjRjLTQzLjUyIDAtNzYuOC0zMy4yOC03Ni44LTc2LjhWMTAyLjRjMC00My41MiAzMy4yOC03Ni44IDc2LjgtNzYuOGgxODQzLjJtMC0yNS42SDEwMi40QzQ2LjA4IDAgMCA0Ni4wOCAwIDEwMi40djgxOS4yYzAgNTYuMzIgNDYuMDggMTAyLjQgMTAyLjQgMTAyLjRoMTg0My4yYzU2LjMyIDAgMTAyLjQtNDYuMDggMTAyLjQtMTAyLjRWMTAyLjRjMC01Ni4zMi00Ni4wOC0xMDIuNC0xMDIuNC0xMDIuNHpcXFwiIHAtaWQ9XFxcIjIyOThcXFwiIC8+PHBhdGggZD1cXFwiTTExNzUuMDQgNDkxLjUyczUxLjItMTUxLjA0LTE1Ni4xNi03Ni44YzAgMCAxNS4zNi02Ni41Ni0xNy45Mi04OS42LTMzLjI4LTIzLjA0LTk5Ljg0LTIuNTYtMTk0LjU2IDg0LjQ4IDAgMC0xMTcuNzYgMTA0Ljk2LTk5Ljg0IDIwMi4yNHMxMzUuNjggMTYzLjg0IDMwNC42NCAxNDguNDhjMTc2LjY0LTE3LjkyIDM1MC43Mi0yMDQuOCAxNjMuODQtMjY4Ljh6IG0tMTk5LjY4IDIyMi43MmMtMTAyLjQgMTIuOC0xOTItMjguMTYtMTk5LjY4LTk0LjcyLTcuNjgtNjYuNTYgNjYuNTYtMTMwLjU2IDE2Ni40LTE0NS45MiAxMDIuNC0xMi44IDE5MiAyOC4xNiAxOTkuNjggOTQuNzIgMTAuMjQgNjkuMTItNjYuNTYgMTMzLjEyLTE2Ni40IDE0NS45MnpcXFwiIHAtaWQ9XFxcIjIyOTlcXFwiIC8+PHBhdGggZD1cXFwiTTkxNi40OCA1MjcuMzZjLTUzLjc2IDIwLjQ4LTgxLjkyIDc0LjI0LTY0IDExNy43NiAxNy45MiA0My41MiA3NC4yNCA2NCAxMjggNDAuOTYgNTMuNzYtMjAuNDggODEuOTItNzQuMjQgNjQtMTE3Ljc2LTIwLjQ4LTQwLjk2LTc2LjgtNjEuNDQtMTI4LTQwLjk2eiBtMTAuMjQgMTE3Ljc2Yy0xMi44IDcuNjgtMzAuNzIgMi41Ni0zNS44NC03LjY4LTUuMTItMTIuOCAwLTI1LjYgMTUuMzYtMzMuMjggMTIuOC03LjY4IDMwLjcyLTIuNTYgMzUuODQgNy42OCA1LjEyIDEyLjgtMi41NiAyOC4xNi0xNS4zNiAzMy4yOHogbTI4Ni43Mi0xODkuNDRoNS4xMmM3LjY4IDAgMTUuMzYtNS4xMiAxNy45Mi0xMi44IDEwLjI0LTMwLjcyIDUuMTItNTguODgtNy42OC03OS4zNi0yNS42LTM1Ljg0LTc2LjgtMzguNC03OS4zNi0zOC40LTEwLjI0IDAtMTcuOTIgNy42OC0yMC40OCAxNy45MiAwIDEwLjI0IDcuNjggMTcuOTIgMTcuOTIgMjAuNDggMCAwIDM1Ljg0IDIuNTYgNTEuMiAyMy4wNCA3LjY4IDEwLjI0IDcuNjggMjUuNiAyLjU2IDQ2LjA4LTIuNTYgMTAuMjQgNS4xMiAyMC40OCAxMi44IDIzLjA0elxcXCIgcC1pZD1cXFwiMjMwMFxcXCIgLz48cGF0aCBkPVxcXCJNMTI5NS4zNiAzMDcuMmMtNTYuMzItNjQtMTU4LjcyLTU4Ljg4LTE2My44NC01Ni4zMi0xMC4yNCAwLTE3LjkyIDEwLjI0LTE3LjkyIDIwLjQ4czEwLjI0IDE3LjkyIDIwLjQ4IDE3LjkyYzAgMCA4OS42LTUuMTIgMTMzLjEyIDQzLjUyIDI1LjYgMzAuNzIgMzMuMjggNzQuMjQgMjAuNDggMTMzLjEyLTIuNTYgMTAuMjQgNS4xMiAyMC40OCAxNS4zNiAyMy4wNGg1LjEyYzcuNjggMCAxNS4zNi01LjEyIDE3LjkyLTE1LjM2IDEyLjgtNjkuMTIgMi41Ni0xMjUuNDQtMzAuNzItMTY2LjR6XFxcIiBwLWlkPVxcXCIyMzAxXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnL3NpbmEuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibmV0ZWFzZVwiLFxuICBcInVzZVwiOiBcIm5ldGVhc2UtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDIwNDggMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjA0OCAxMDI0XFxcIiBpZD1cXFwibmV0ZWFzZVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNMTk0NS42IDI1LjZjNDMuNTIgMCA3Ni44IDMzLjI4IDc2LjggNzYuOHY4MTkuMmMwIDQzLjUyLTMzLjI4IDc2LjgtNzYuOCA3Ni44SDEwMi40Yy00My41MiAwLTc2LjgtMzMuMjgtNzYuOC03Ni44VjEwMi40YzAtNDMuNTIgMzMuMjgtNzYuOCA3Ni44LTc2LjhoMTg0My4ybTAtMjUuNkgxMDIuNEM0Ni4wOCAwIDAgNDYuMDggMCAxMDIuNHY4MTkuMmMwIDU2LjMyIDQ2LjA4IDEwMi40IDEwMi40IDEwMi40aDE4NDMuMmM1Ni4zMiAwIDEwMi40LTQ2LjA4IDEwMi40LTEwMi40VjEwMi40YzAtNTYuMzItNDYuMDgtMTAyLjQtMTAyLjQtMTAyLjR6XFxcIiBwLWlkPVxcXCIyNDEwXFxcIiAvPjxwYXRoIGQ9XFxcIk03MDQgNjYwLjQ4YzcuNjgtMTAuMjQtNS4xMi00OC42NC01LjEyLTQ4LjY0LTQ4LjY0LTQzLjUyLTM4LjQgMzAuNzItMzguNCAzMC43MiAzMy4yOCA1Ni4zMiA0My41MiAxNy45MiA0My41MiAxNy45MnogbTE5NC41Ni0zMC43MnMtNTMuNzYgMi41Ni00My41MiAzNS44NGMwIDAgODEuOTIgMjAuNDggODkuNi0xNS4zNiAyLjU2IDAgNy42OC0zMy4yOC00Ni4wOC0yMC40OHogbS0yMTcuNi0xNjMuODRjLTQ2LjA4LTQ4LjY0IDE1LjM2LTY0IDE1LjM2LTY0IDIzLjA0LTY0LTMwLjcyLTU4Ljg4LTMwLjcyLTU4Ljg4LTUzLjc2LTEwLjI0LTIwLjQ4IDI1LjYtMjAuNDggMjUuNi0xMC4yNCAzNS44NC0zOC40IDQ4LjY0LTM4LjQgNDguNjQtNzQuMjQtMTUuMzYtMTUuMzYtNjkuMTItMTUuMzYtNjkuMTItMi41Ni0zNS44NCA1My43Ni0zNS44NCA1My43Ni0zNS44NCAxNy45Mi0yLjU2IDE1LjM2LTIwLjQ4IDE1LjM2LTIwLjQ4LTEwLjI0LTQwLjk2LTY5LjEyLTIwLjQ4LTY5LjEyLTIwLjQ4LTMwLjcyIDIwLjQ4LTY0IDk5Ljg0LTY0IDk5Ljg0LTIwLjQ4IDQwLjk2IDMwLjcyIDY0IDMwLjcyIDY0IDE3LjkyIDMwLjcyLTMwLjcyIDg0LjQ4LTMwLjcyIDg0LjQ4IDIuNTYgODcuMDQgNTMuNzYgNjkuMTIgNTMuNzYgNjkuMTIgNS4xMiAxNS4zNiA2OS4xMiA1LjEyIDY5LjEyIDUuMTItMi41Ni0xMi44IDQ4LjY0LTQwLjk2IDQ4LjY0LTQwLjk2IDcuNjgtNjQtMTcuOTItODcuMDQtMTcuOTItODcuMDR6IG0tNDYuMDggODkuNnMtNzkuMzYgMi41Ni02NC0zMC43MmMwIDAgMTcuOTItNDYuMDggMjUuNi00MC45NiAwIDAgMzUuODQtNDMuNTIgNjQgMTAuMjQgMC0yLjU2IDEwLjI0IDQzLjUyLTI1LjYgNjEuNDR6IG0tMTI4IDEzMC41NmMtMTAuMjQgNjkuMTIgMzguNCA0MC45NiAzOC40IDQwLjk2LTIuNTYtMzMuMjggMjAuNDgtNDguNjQgMjAuNDgtNDguNjRWNjE0LjRjLTQzLjUyLTE1LjM2LTU4Ljg4IDcxLjY4LTU4Ljg4IDcxLjY4eiBtODkuNi01MS4yYy0xNS4zNiAxNTYuMTYgMzguNCA3NC4yNCAzOC40IDc0LjI0IDcuNjgtMTMzLjEyLTM4LjQtNzQuMjQtMzguNC03NC4yNHogbTQxNC43Mi0yNDguMzJjMjMuMDQtNDAuOTYtMjUuNi03NC4yNC0yNS42LTc0LjI0bC0zMy4yOC01LjEyYy0zNS44NC0xNy45Mi05OS44NC01LjEyLTk5Ljg0LTUuMTItMzguNCAxMi44LTEwNC45NiA1LjEyLTEwNC45NiA1LjEyLTQ4LjY0IDU4Ljg4LTUuMTIgMTE1LjItNS4xMiAxMTUuMnYxMTAuMDhjLTcuNjggMTAyLjQtNDguNjQgMTUzLjYtNDguNjQgMTUzLjYgNS4xMiA2NCA0My41MiAyNS42IDQzLjUyIDI1LjYgMjUuNi0xNS4zNiAzOC40LTEzOC4yNCAzOC40LTEzOC4yNGwyNS42IDEwLjI0djY0YzEyLjggMjUuNiA0MC45NiAxNS4zNiA0My41MiAxMC4yNHMwLTE1LjM2IDAtMTUuMzZjLTE3LjkyLTcuNjgtNS4xMi01OC44OC01LjEyLTU4Ljg4IDAtMjguMTYgMTEyLjY0LTE1LjM2IDExMi42NC0xNS4zNiAyMy4wNC01OC44OC01OC44OC00MC45Ni01OC44OC00MC45Ni0xNy45Mi0yLjU2LTEwLjI0LTM1Ljg0LTEwLjI0LTM1Ljg0IDM4LjQtMjAuNDggODQuNDgtMi41NiA4NC40OCAxMC4yNCAyLjU2IDEyLjggMCAxNzQuMDggMCAxNzQuMDggMTUuMzYgOTkuODQgNTMuNzYgMzUuODQgNTMuNzYgMzUuODQgNy42OC0yNS42LTE1LjM2LTEwNC45Ni0xNS4zNi0xMDQuOTYtMjAuNDgtNTguODggNS4xMi0yMjAuMTYgNS4xMi0yMjAuMTZ6IG0tMTYzLjg0IDE1My42Yy01My43Ni0xMC4yNC02OS4xMiA1LjEyLTY5LjEyIDUuMTItNS4xMi03OS4zNiA2OS4xMi00OC42NCA2OS4xMi00OC42NHY0My41MnogbTExNS4yLTg5LjZsLTQ4LjY0LTUuMTIgNS4xMi0yNS42YzE3LjkyLTEyLjggMTUuMzYtNTMuNzYgMTUuMzYtNTMuNzYtNTMuNzYtMzAuNzItNDguNjQgNDAuOTYtNDguNjQgNDAuOTYtMi41NiA1OC44OC00My41MiA0OC42NC00My41MiA0OC42NGgtNTguODhjLTUxLjItMzUuODQtMTAuMjQtOTkuODQtMTAuMjQtOTkuODRsNTMuNzYtMTAuMjRjMi41Ni0yMC40OCA3OS4zNi0xMC4yNCA3OS4zNi0xMC4yNCA0OC42NCAyLjU2IDUzLjc2IDM1Ljg0IDUzLjc2IDM1Ljg0djc5LjM2eiBtNDI0Ljk2IDE1MS4wNHMtMTAyLjQgNjEuNDQtMTI4IDg5LjZjMCAwLTc2LjggMjMuMDQtOTkuODQgMjUuNiAwIDAtNjYuNTYgNjkuMTIgNjQgMzUuODQgMCAwIDcxLjY4LTMwLjcyIDk5Ljg0LTY0IDAgMCA4OS42LTY2LjU2IDEyMi44OC05NC43MiAwIDIuNTYgNS4xMi01Ni4zMi01OC44OCA3LjY4eiBtMTc2LjY0IDBjMi41Ni03Ni44LTk0LjcyLTExNS4yLTk0LjcyLTExNS4yLTcuNjggMC03NC4yNC01LjEyLTc0LjI0LTUuMTItNDguNjQtNS4xMi0zMC43MiAzNS44NC0zMC43MiAzNS44NC0xNDAuOCAxMTUuMi0yMTcuNiAxMTUuMi0yMTcuNiAxMTUuMi02Ni41NiA0MC45NiAxMC4yNCA0OC42NCAxMC4yNCA0OC42NCA2Ni41NiA1LjEyIDI0OC4zMi0xNTMuNiAyNDguMzItMTUzLjYgMTcuOTItMTAuMjQgNDMuNTIgMCA0My41MiAwIDAgMjMuMDQgMTAuMjQgMzAuNzIgMTAuMjQgMzAuNzIgMTA0Ljk2LTE3LjkyIDQ4LjY0IDk0LjcyIDQ4LjY0IDk0LjcyLTMzLjI4IDU4Ljg4LTExMi42NCA1My43Ni0xMTIuNjQgNTMuNzYtNDguNjQtMzAuNzItNDMuNTIgMC00My41MiAwIDE3LjkyIDEyMC4zMiAxNDguNDggMjAuNDggMTQ4LjQ4IDIwLjQ4IDg0LjQ4LTYxLjQ0IDY0LTEyNS40NCA2NC0xMjUuNDR6IG0tMTcxLjUyLTIxNS4wNGM1OC44OC0xMi44IDE1LjM2LTM1Ljg0IDE1LjM2LTM1Ljg0LTIwLjQ4LTEyLjgtMTM4LjI0IDAtMTM4LjI0IDAtMzAuNzIgMjMuMDQgMCAzNS44NCAwIDM1Ljg0aDEyMi44OHogbS01NzguNTYtMTUuMzZjLTIwLjQ4IDIwLjQ4IDUuMTIgNTYuMzIgNS4xMiA1Ni4zMiAxNy45MiAyMC40OCAzMC43MiA1LjEyIDMwLjcyIDUuMTJ2LTM1Ljg0Yy0xMC4yNC0zOC40LTM1Ljg0LTI1LjYtMzUuODQtMjUuNnogbTMyNS4xMiAyMDkuOTJjMTM4LjI0LTcuNjggMTk3LjEyLTEwNC45NiAxOTcuMTItMTA0Ljk2bDEzMy4xMi01LjEyYzQzLjUyLTE1LjM2IDQzLjUyLTQwLjk2IDQzLjUyLTQwLjk2IDEwLjI0LTE1LjM2IDAtNjkuMTIgMC02OS4xMi01LjEyLTcxLjY4LTM4LjQtODQuNDgtMzguNC04NC40OC0yNS42LTUuMTItMzguNC0xMC4yNC0zOC40LTEwLjI0LTIwLjQ4LTcuNjgtNzkuMzYgMC03OS4zNiAwLTMwLjcyLTIwLjQ4LTk5Ljg0IDAtOTkuODQgMC01OC44OCAyMC40OC0xMC4yNCA0OC42NC0xMC4yNCA0OC42NCAyMTcuNi00OC42NCAyMTcuNiAyNS42IDIxNy42IDI1LjYgMjAuNDggODQuNDgtMjAuNDggODQuNDgtMjAuNDggODQuNDgtNTYuMzItMi41Ni00OC42NCAxMC4yNC00OC42NCAxMC4yNC0yMC40OCAyLjU2LTI1LjYtNS4xMi0yNS42LTUuMTItMzguNC0xMi44LTc0LjI0IDEwLjI0LTc0LjI0IDEwLjI0SDEyNTQuNGMtMjAuNDgtMi41Ni0yNS42LTMwLjcyLTI1LjYtMzAuNzJ2LTg0LjQ4Yy0yOC4xNi00My41Mi00OC42NCA1LjEyLTQ4LjY0IDUuMTJ2MTEwLjA4YzI1LjYgNjEuNDQgOTQuNzIgMzUuODQgOTQuNzIgMzUuODQtMTIuOCAzMy4yOC04OS42IDU4Ljg4LTg5LjYgNTguODgtMjAuNDggMi41Ni01My43NiAwLTUzLjc2IDAtMzguNCAyOC4xNiA3LjY4IDQ2LjA4IDcuNjggNDYuMDh6XFxcIiBwLWlkPVxcXCIyNDExXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnL25ldGVhc2Uuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiYm9rZXl1YW5cIixcbiAgXCJ1c2VcIjogXCJib2tleXVhbi11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMjA0OCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQ4IDEwMjRcXFwiIGlkPVxcXCJib2tleXVhblxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNMTk0NS42IDI1LjZjNDMuNTIgMCA3Ni44IDMzLjI4IDc2LjggNzYuOHY4MTkuMmMwIDQzLjUyLTMzLjI4IDc2LjgtNzYuOCA3Ni44SDEwMi40Yy00My41MiAwLTc2LjgtMzMuMjgtNzYuOC03Ni44VjEwMi40YzAtNDMuNTIgMzMuMjgtNzYuOCA3Ni44LTc2LjhoMTg0My4ybTAtMjUuNkgxMDIuNEM0Ni4wOCAwIDAgNDYuMDggMCAxMDIuNHY4MTkuMmMwIDU2LjMyIDQ2LjA4IDEwMi40IDEwMi40IDEwMi40aDE4NDMuMmM1Ni4zMiAwIDEwMi40LTQ2LjA4IDEwMi40LTEwMi40VjEwMi40YzAtNTYuMzItNDYuMDgtMTAyLjQtMTAyLjQtMTAyLjR6XFxcIiBwLWlkPVxcXCIyMDc1XFxcIiAvPjxwYXRoIGQ9XFxcIk05MzkuNTIgNDMyLjY0SDkyMS42djIyMi43MmgtNDguNjR2LTIyMi43MmgtMjAuNDh2LTEwLjI0aDIwLjQ4di02Ni41Nkg5MjEuNnY2Ni41NmgxNy45MnYxMC4yNHogbTIxMi40OCAxNDguNDhoLTIzLjA0djM4LjRjMCAyNS42LTE1LjM2IDM4LjQtNDMuNTIgMzguNC0zMC43MiAwLTU4Ljg4LTcuNjgtODEuOTItMjMuMDQtNS4xMi0yLjU2LTcuNjgtNS4xMi03LjY4LTUuMTIgMC0yLjU2IDUuMTIgMCAxMC4yNCAwIDEyLjggMi41NiAzMC43MiAyLjU2IDQ4LjY0IDIuNTYgMTUuMzYgMCAyMy4wNC03LjY4IDIwLjQ4LTI1LjZ2LTI1LjZoLTE0NS45MnYtMTAuMjRIMTA3NS4ydi0xNy45MmgxNS4zNnYtMjguMTZoLTIzLjA0djM1Ljg0aC00OC42NHYtMzUuODRoLTIzLjA0djM1Ljg0SDk0Ny4ydi0xMzguMjRoNDguNjR2MTAuMjRjMi41Ni03LjY4IDEwLjI0LTEyLjggMjMuMDQtMTIuOHYtMTcuOTJoLTc5LjM2di0xMC4yNGg3OS4zNlYzNTguNGg0OC42NHYzMy4yOGgyOC4xNmMtMTAuMjQtMi41Ni0xNS4zNi0xMC4yNC0xNy45Mi0yNS42aDM4LjRjNS4xMiAxMi44IDEyLjggMjMuMDQgMTcuOTIgMjUuNmgxNy45MnYxMC4yNGgtODEuOTJ2MTcuOTJIMTEwMC44YzI4LjE2IDAgNDMuNTIgMTAuMjQgNDAuOTYgMzMuMjh2MTA0Ljk2aC0xMi44djEwLjI0aDIzLjA0djEyLjh6IG0tMTkyIDUuMTJoNTguODhjMTAuMjQgMTcuOTIgMjMuMDQgMjguMTYgNDAuOTYgMzUuODQtMzAuNzIgMC01MS4yIDAtNjEuNDQtMi41Ni0xMC4yNCAwLTE3LjkyLTUuMTItMjAuNDgtMTAuMjQtMi41Ni0yLjU2LTUuMTItNS4xMi03LjY4LTEwLjI0LTcuNjgtNy42OC0xMC4yNC0xMC4yNC0xMC4yNC0xMi44eiBtMzUuODQtMTQ4LjQ4djI4LjE2aDIzLjA0di0zNS44NGgtNS4xMmMtNy42OCAwLTE1LjM2IDIuNTYtMTcuOTIgNy42OHogbTAgMzguNHYzMy4yOGgyMy4wNHYtMzAuNzJsLTIzLjA0LTIuNTZ6IG03Ni44LTQ2LjA4aC01LjEydjM1Ljg0aDIzLjA0di0xNy45MmMyLjU2LTEyLjgtNS4xMi0yMC40OC0xNy45Mi0xNy45MnogbS01LjEyIDQ2LjA4djMzLjI4aDIzLjA0di0zMC43MmwtMjMuMDQtMi41NnogbTE2MS4yOC0yNS42aC01MS4ydi02NGg1MS4ydjI4LjE2YzUuMTItMTcuOTIgMjAuNDgtMjguMTYgNDguNjQtMjUuNmgxNS4zNnYtMjguMTZoNTguODh2MjguMTZoNjEuNDRjMzguNCAwIDU2LjMyIDEwLjI0IDUzLjc2IDMwLjcydjEwLjI0YzAgNy42OCAwIDE1LjM2LTIuNTYgMjMuMDRoLTM1Ljg0YzAgNy42OC0yLjU2IDEyLjgtNy42OCAxNS4zNi0xNy45MiAxMi44LTM1Ljg0IDI1LjYtNTYuMzIgMzUuODQgNy42OCA1LjEyIDE3LjkyIDEwLjI0IDMwLjcyIDE1LjM2IDIuNTYgMi41NiA1LjEyIDIuNTYgNS4xMiAyLjU2IDIzLjA0IDEwLjI0IDQ2LjA4IDE3LjkyIDc0LjI0IDI1LjYtNTEuMiAxMC4yNC04OS42IDcuNjgtMTE1LjItNS4xMi0xMi44LTUuMTItMjMuMDQtMTAuMjQtMzMuMjgtMTcuOTItNS4xMiAyLjU2LTEwLjI0IDUuMTItMTcuOTIgMTAuMjQtNy42OCA1LjEyLTEyLjggNy42OC0xNy45MiA3LjY4LTIwLjQ4IDEwLjI0LTYxLjQ0IDE1LjM2LTEyMC4zMiAxMC4yNCAzMy4yOC03LjY4IDY0LTE3LjkyIDkyLjE2LTMzLjI4IDEwLjI0LTUuMTIgMTcuOTItMTAuMjQgMjguMTYtMTIuOC0xMi44LTcuNjgtMjUuNi0xNS4zNi0zOC40LTIwLjQ4LTEwLjI0IDEyLjgtMzMuMjggMTcuOTItNjkuMTIgMTUuMzYgMTcuOTItMTAuMjQgNDAuOTYtMzguNCA2OS4xMi04MS45Mmg0OC42NGMtMi41NiAyLjU2LTIuNTYgNS4xMi01LjEyIDcuNjgtMi41NiAyLjU2LTUuMTIgNy42OC0xMC4yNCAxNS4zNiA3LjY4LTUuMTIgMTUuMzYtNy42OCAyNS42LTcuNjhoNzQuMjRjMTIuOCAwIDIzLjA0IDIuNTYgMzAuNzIgNS4xMnYtMTIuOGMwLTEyLjgtNy42OC0xNy45Mi0yMy4wNC0xNy45MmgtMTIwLjMyYy0yMy4wNCAwLTM4LjQgNy42OC00Ni4wOCAyMC40OGwyLjU2IDIwLjQ4eiBtMzAuNzIgMTk5LjY4SDEyMDMuMnYtOTQuNzJoNTYuMzJ2MjMuMDRjMi41Ni0xNS4zNiAxMi44LTIzLjA0IDMzLjI4LTIzLjA0aDEwMi40YzMzLjI4IDAgNDguNjQgMTIuOCA1MS4yIDM4LjR2MjMuMDRjMCAyMy4wNC0xNS4zNiAzNS44NC00OC42NCAzMy4yOGgtMTA0Ljk2Yy0yMC40OCAwLTMwLjcyLTcuNjgtMzMuMjgtMjMuMDR2MjMuMDR6IG0wLTYxLjQ0djMzLjI4YzIuNTYgMTAuMjQgMTIuOCAxNS4zNiAyOC4xNiAxNS4zNmg4MS45MmMxNS4zNiAwIDIwLjQ4LTUuMTIgMjAuNDgtMTUuMzZ2LTMwLjcyYzAtMTUuMzYtNy42OC0yMy4wNC0yNS42LTIzLjA0aC03NC4yNGMtMTUuMzYgMC0yNS42IDUuMTItMzAuNzIgMjAuNDh6IG05Ny4yOC0xNDguNDhoLTQ4LjY0Yy0xMi44IDAtMjUuNiA1LjEyLTMzLjI4IDE1LjM2bC03LjY4IDcuNjhoMjUuNmM1LjEyIDUuMTIgMTUuMzYgNy42OCAyNS42IDEyLjggNS4xMiAyLjU2IDcuNjggMi41NiAxMC4yNCAyLjU2IDIuNTYtMi41NiA3LjY4LTIuNTYgMTAuMjQtNS4xMiA3LjY4LTUuMTIgMTIuOC03LjY4IDE3LjkyLTEwLjI0IDEyLjgtNy42OCAyMC40OC0xMi44IDE3LjkyLTE3LjkyIDAtMi41Ni01LjEyLTUuMTItMTcuOTItNS4xMnogbTE5MiAyMTIuNDhoLTQ4LjY0di0yODEuNmg0OC42NHYxNy45MmM1LjEyLTEwLjI0IDE1LjM2LTE3LjkyIDMzLjI4LTE3LjkyaDE0OC40OGMzOC40IDAgNTYuMzIgMTUuMzYgNTYuMzIgNDMuNTJ2MTk3LjEyYzAgMjguMTYtMTUuMzYgNDMuNTItNDYuMDggNDAuOTZoLTE2MS4yOGMtMTcuOTIgMC0yNS42LTUuMTItMzAuNzItMTcuOTJ2MTcuOTJ6IG0wLTI1My40NHYyMjIuNzJjMi41NiAxMi44IDEwLjI0IDE3LjkyIDIwLjQ4IDE1LjM2aDE0My4zNmMxNy45MiAwIDI4LjE2LTEwLjI0IDI4LjE2LTMwLjcyVjQwOS42YzAtMTcuOTItMTAuMjQtMjguMTYtMjguMTYtMjguMTZoLTEzNS42OGMtMTIuOCAyLjU2LTIzLjA0IDcuNjgtMjguMTYgMTcuOTJ6IG0xMDIuNCAxNzEuNTJ2LTgxLjkyaC0yMy4wNGMwIDI4LjE2LTIuNTYgNTguODgtNy42OCA4Ny4wNCAwIDI4LjE2LTIzLjA0IDQwLjk2LTY5LjEyIDM1Ljg0IDE1LjM2LTEyLjggMjMuMDQtMjguMTYgMjMuMDQtNDYuMDggMC0xMC4yNCAyLjU2LTI1LjYgNS4xMi01MS4yIDAtMTAuMjQgMC0xNy45MiAyLjU2LTI4LjE2aC0yNS42di0xMi44aDE3NC4wOHYxMi44aC0zMy4yOHY3Ni44YzAgMTIuOCAyLjU2IDIwLjQ4IDEwLjI0IDE3LjkyIDcuNjggMi41NiAxNS4zNi0xMC4yNCAyMC40OC00MC45NiA1LjEyIDQ2LjA4LTIuNTYgNjYuNTYtMjUuNiA2NEgxNjg5LjZjLTI4LjE2IDUuMTItNDAuOTYtNy42OC0zOC40LTMzLjI4eiBtNjEuNDQtMTM4LjI0aC0xNDAuOHYtMTIuOGgxNDAuOHYxMi44ek02NzMuMjggMzMyLjhjLTk3LjI4LTk3LjI4LTI1My40NC05Ny4yOC0zNTAuNzIgMHMtOTcuMjggMjUzLjQ0IDAgMzQ4LjE2Yzk3LjI4IDk3LjI4IDI1My40NCA5Ny4yOCAzNDguMTYgMCA5OS44NC05NC43MiA5OS44NC0yNTMuNDQgMi41Ni0zNDguMTZ6TTQzNS4yIDYxNi45NmMtMTAuMjQgMTAuMjQtMjUuNiAxMC4yNC0zMy4yOCAwLTEwLjI0LTEwLjI0LTEwLjI0LTI1LjYgMC0zMy4yOCAxMC4yNC0xMC4yNCAyNS42LTEwLjI0IDMzLjI4IDBzNy42OCAyNS42IDAgMzMuMjh6IG0xMDQuOTYgMi41NmMwIDUuMTItMi41NiA3LjY4LTUuMTIgMTAuMjQtNy42OCA3LjY4LTIwLjQ4IDcuNjgtMjguMTYgMC01LjEyLTUuMTItNy42OC0xMC4yNC01LjEyLTE3LjkyIDAtMi41NiAwLTEwLjI0LTIuNTYtMjMuMDQtMi41Ni0xNy45Mi0xMi44LTMzLjI4LTI1LjYtNDYuMDhzLTI4LjE2LTIwLjQ4LTQ2LjA4LTI1LjZoLTIwLjQ4Yy01LjEyIDIuNTYtMTIuOCAwLTE3LjkyLTUuMTItNy42OC03LjY4LTcuNjgtMjAuNDggMC0yOC4xNiAyLjU2LTIuNTYgNy42OC01LjEyIDEwLjI0LTUuMTIgMi41NiAwIDU2LjMyLTcuNjggMTAyLjQgMzguNCA0Ni4wOCA0My41MiAzOC40IDk5Ljg0IDM4LjQgMTAyLjR6IG04OS42IDIuNTZjLTIuNTYgMTAuMjQtMTIuOCAxNy45Mi0yMy4wNCAxNS4zNi01LjEyIDAtNy42OC0yLjU2LTEwLjI0LTUuMTItNS4xMi01LjEyLTcuNjgtMTAuMjQtNS4xMi0xNy45MiAwIDAgMi41Ni0yMC40OC0yLjU2LTQ2LjA4LTcuNjgtMzUuODQtMjMuMDQtNjYuNTYtNDguNjQtOTIuMTZzLTU2LjMyLTQwLjk2LTkyLjE2LTQ4LjY0Yy0yNS42LTUuMTItNDYuMDgtMi41Ni00Ni4wOC0yLjU2LTcuNjggMC0xMi44LTIuNTYtMTcuOTItNS4xMi0yLjU2LTIuNTYtNS4xMi03LjY4LTUuMTItMTAuMjQtMi41Ni0xMC4yNCA1LjEyLTIwLjQ4IDE3LjkyLTIwLjQ4IDAgMCAyNS42LTIuNTYgNTYuMzIgMi41NiAxNy45MiAyLjU2IDM4LjQgMTAuMjQgNTMuNzYgMTcuOTIgMjAuNDggMTAuMjQgNDAuOTYgMjUuNiA1OC44OCA0My41MiAxNy45MiAxNy45MiAzMC43MiAzOC40IDQzLjUyIDU4Ljg4IDcuNjggMTcuOTIgMTUuMzYgMzUuODQgMTcuOTIgNTMuNzYgNy42OCAzMy4yOCAyLjU2IDU2LjMyIDIuNTYgNTYuMzJ6XFxcIiBwLWlkPVxcXCIyMDc2XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnL2Jva2V5dWFuLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcIjUxY3RvXCIsXG4gIFwidXNlXCI6IFwiNTFjdG8tdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDIwNDggMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjA0OCAxMDI0XFxcIiBpZD1cXFwiNTFjdG9cXFwiPjxkZWZzPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD1cXFwiTTE5NDUuNiAyNS42YzQzLjUyIDAgNzYuOCAzMy4yOCA3Ni44IDc2Ljh2ODE5LjJjMCA0My41Mi0zMy4yOCA3Ni44LTc2LjggNzYuOEgxMDIuNGMtNDMuNTIgMC03Ni44LTMzLjI4LTc2LjgtNzYuOFYxMDIuNGMwLTQzLjUyIDMzLjI4LTc2LjggNzYuOC03Ni44aDE4NDMuMm0wLTI1LjZIMTAyLjRDNDYuMDggMCAwIDQ2LjA4IDAgMTAyLjR2ODE5LjJjMCA1Ni4zMiA0Ni4wOCAxMDIuNCAxMDIuNCAxMDIuNGgxODQzLjJjNTYuMzIgMCAxMDIuNC00Ni4wOCAxMDIuNC0xMDIuNFYxMDIuNGMwLTU2LjMyLTQ2LjA4LTEwMi40LTEwMi40LTEwMi40elxcXCIgcC1pZD1cXFwiMzA4MlxcXCIgLz48cGF0aCBkPVxcXCJNMTc5MiA2NTAuMjRoLTY2LjU2di00My41Mi0xMTcuNzZjMC01LjEyIDAtMTIuOC0yLjU2LTE3LjkyLTIuNTYtMi41Ni03LjY4LTUuMTItMTAuMjQtNS4xMi01LjEyIDAtMTAuMjQgMi41Ni0xMC4yNCA1LjEyLTIuNTYgNS4xMiAwIDIwLjQ4IDAgMjguMTZ2MTUxLjA0SDE2MzguNHYtMTcuOTItMTQzLjM2YzAtMTAuMjQgMi41Ni0yNS42LTEwLjI0LTI1LjYtMTUuMzYtMi41Ni0xNS4zNiAxMi44LTE1LjM2IDIzLjA0djE2My44NGgtNjR2LTIyNS4yOEgxNjEyLjhjMCA1LjEyIDAgMTAuMjQgMi41NiAxMi44IDE1LjM2LTUuMTIgMzAuNzItMTUuMzYgNDYuMDgtMTUuMzYgMTUuMzYgMCAyOC4xNiAxMi44IDQ2LjA4IDE3LjkyIDcuNjgtNS4xMiAxNy45Mi0xMi44IDI4LjE2LTE3LjkyIDI4LjE2LTEwLjI0IDU4Ljg4IDcuNjggNTguODggMzguNC0yLjU2IDYxLjQ0LTIuNTYgMTIyLjg4LTIuNTYgMTg5LjQ0TTExMDMuMzYgNDQ4YzAtNDguNjQtMjAuNDgtNzQuMjQtNjkuMTItNzkuMzYtNDguNjQtNy42OC05OS44NCAxNS4zNi05Ny4yOCA3Ni44djExNS4yYzAgMTcuOTIgMCAzNS44NCA1LjEyIDUxLjIgMTIuOCAzMy4yOCA0OC42NCA0OC42NCA4OS42IDQzLjUyIDQ2LjA4LTcuNjggNjkuMTItMzAuNzIgNjkuMTItNzkuMzYgMi41Ni00MC45NiAyLjU2LTg0LjQ4IDIuNTYtMTI4bS03NC4yNCAxMzUuNjhjMCA1LjEyIDAgMTAuMjQtMi41NiAxNy45MiAwIDIuNTYtNS4xMiA3LjY4LTcuNjggNy42OC0yLjU2IDAtNy42OC01LjEyLTEwLjI0LTcuNjgtMi41Ni01LjEyLTIuNTYtMTIuOC0yLjU2LTE3Ljkydi0xNDMuMzYtNS4xMnMwLTE1LjM2IDEwLjI0LTE1LjM2YzcuNjggMCAxMC4yNCAxMC4yNCAxMC4yNCAxNS4zNnY3Ni44YzIuNTYgMjMuMDQgMi41NiA0Ni4wOCAyLjU2IDcxLjY4TTc1Mi42NCA0OTEuNTJoLTc0LjI0di00OC42NGMwLTUuMTIgMC0xMi44LTIuNTYtMTcuOTIgMC0yLjU2LTcuNjgtNy42OC0xMC4yNC03LjY4LTUuMTIgMC0xMC4yNCAyLjU2LTEwLjI0IDcuNjgtMi41NiA1LjEyLTIuNTYgMTAuMjQtMi41NiAxNy45MnYxNTMuNmMwIDIuNTYgNS4xMiAxMi44IDEyLjggMTIuOCA1LjEyIDAgMTAuMjQtMTAuMjQgMTAuMjQtMTIuOCAyLjU2LTE3LjkyIDAtMzUuODQgMC01Ni4zMmg3MS42OGMxMi44IDQ2LjA4LTIuNTYgOTIuMTYtMzUuODQgMTEwLjA4LTMzLjI4IDE3LjkyLTY5LjEyIDE1LjM2LTEwMi40LTUuMTItMjAuNDgtMTIuOC0yOC4xNi0zMy4yOC0yOC4xNi01Ni4zMiAwLTQ2LjA4LTIuNTYtOTIuMTYgMC0xMzguMjQgMC00Ni4wOCAxNy45Mi02Ni41NiA2NC03Ni44IDI1LjYtNS4xMiA1MS4yLTIuNTYgNzYuOCAxMC4yNCAxNS4zNiA3LjY4IDI1LjYgMjAuNDggMjUuNiAzOC40IDIuNTYgMjAuNDggNS4xMiA0My41MiA1LjEyIDY5LjEyTTMyNS4xMiA0MTQuNzJ2NDAuOTZjMTUuMzYtMi41NiAyOC4xNi03LjY4IDQwLjk2LTEwLjI0IDMzLjI4LTIuNTYgNTMuNzYgMTUuMzYgNTYuMzIgNTEuMiAyLjU2IDMzLjI4IDIuNTYgNjkuMTIgMCAxMDIuNCAwIDI4LjE2LTI4LjE2IDUzLjc2LTYxLjQ0IDU2LjMyLTE3LjkyIDAtMzMuMjggMC01MS4yLTUuMTItMjguMTYtNS4xMi00Ni4wOC0yNS42LTQ4LjY0LTUzLjc2LTIuNTYtMTcuOTItMi41Ni0zMy4yOC0yLjU2LTUxLjJoNjkuMTJjMCAxNy45MiAyLjU2IDM1Ljg0IDUuMTIgNTEuMiAwIDUuMTIgNS4xMiAxMi44IDEyLjggMTIuOCA1LjEyIDIuNTYgMTAuMjQtNy42OCAxMC4yNC0xNS4zNiAwLTMwLjcyIDIuNTYtNTguODggMC05NC43MiAwLTUuMTItMTAuMjQtMTIuOC0xNy45Mi03LjY4LTEwLjI0IDUuMTItNy42OCAxMC4yNC0xMC4yNCAxNy45MmgtNjR2LTE0MC44aDE0OC40OHY0My41MmMtMzMuMjggMi41Ni01OC44OCAyLjU2LTg3LjA0IDIuNTZNMTM0NCA1MDYuODhIMTI4MHYtMzMuMjhjMC01LjEyLTIuNTYtMTIuOC0xMC4yNC0xMi44LTcuNjggMC0xMC4yNCA3LjY4LTEwLjI0IDEyLjh2MTIyLjg4YzAgNS4xMiA1LjEyIDE1LjM2IDEyLjggMTUuMzZzMTAuMjQtMTAuMjQgMTAuMjQtMTUuMzZjMi41Ni0xMi44IDAtMjUuNiAwLTQwLjk2aDYxLjQ0YzIuNTYgMzAuNzIgMi41NiA2NC0yNS42IDg0LjQ4LTI4LjE2IDIwLjQ4LTU4Ljg4IDE3LjkyLTg5LjYgNy42OC0yMC40OC03LjY4LTMzLjI4LTIzLjA0LTM1Ljg0LTQzLjUyLTIuNTYtNDAuOTYtNS4xMi04MS45Mi0yLjU2LTEyMi44OCAyLjU2LTM1Ljg0IDI4LjE2LTU4Ljg4IDY2LjU2LTYxLjQ0IDE3LjkyIDAgMzguNCAyLjU2IDUzLjc2IDEwLjI0IDI4LjE2IDEyLjggMzUuODQgMzUuODQgMzMuMjggNzYuOE03NjUuNDQgNDI0Ljk2di01My43Nkg5MjEuNnY1Ni4zMmgtNDAuOTZ2MjIyLjcyaC03NC4yNHYtMjAuNDgtMTc5LjItMjMuMDRoLTIzLjA0Yy01LjEyLTIuNTYtMTAuMjQtMi41Ni0xNy45Mi0yLjU2TTQ4My44NCA2NDcuNjh2LTE0My4zNi01LjEyYzAtNTYuMzIgNS4xMi00OC42NC00Ni4wOC01My43NnYtMjguMTZjMjguMTYtNy42OCA1My43Ni0yMC40OCA3NC4yNC00My41MiA3LjY4LTcuNjggMjUuNi0yLjU2IDQwLjk2LTUuMTJ2Mjc5LjA0aC02OS4xMk0xMTIxLjI4IDU5My45Mmg0OC42NHY1My43NmgtNDguNjR6TTE1MjMuMiA0ODMuODRjMC0yOC4xNi0xNy45Mi01MS4yLTQ2LjA4LTU4Ljg4LTE1LjM2LTUuMTItMzMuMjgtNy42OC00OC42NC01LjEyLTM1Ljg0IDIuNTYtNTguODggMjAuNDgtNjEuNDQgNTYuMzItMi41NiA0My41Mi0yLjU2IDg0LjQ4IDAgMTI4IDAgMjMuMDQgMTcuOTIgMzguNCAzOC40IDQzLjUyIDE3LjkyIDIuNTYgMzUuODQgNS4xMiA1My43NiA1LjEyIDM1Ljg0LTIuNTYgNTYuMzItMjMuMDQgNjEuNDQtNTguODhsMi41Ni01OC44OHYtNTEuMm0tNzYuOCAxMjhjLTE3LjkyIDAtMTcuOTItMTUxLjA0IDAtMTUxLjA0IDE1LjM2IDAgMTUuMzYgMTUxLjA0IDAgMTUxLjA0XFxcIiBwLWlkPVxcXCIzMDgzXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnLzUxY3RvLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImNoaW5hdW5peFwiLFxuICBcInVzZVwiOiBcImNoaW5hdW5peC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMjA0OCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQ4IDEwMjRcXFwiIGlkPVxcXCJjaGluYXVuaXhcXFwiPjxkZWZzPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD1cXFwiTTE5NDUuNiAyNS42YzQzLjUyIDAgNzYuOCAzMy4yOCA3Ni44IDc2Ljh2ODE5LjJjMCA0My41Mi0zMy4yOCA3Ni44LTc2LjggNzYuOEgxMDIuNGMtNDMuNTIgMC03Ni44LTMzLjI4LTc2LjgtNzYuOFYxMDIuNGMwLTQzLjUyIDMzLjI4LTc2LjggNzYuOC03Ni44aDE4NDMuMm0wLTI1LjZIMTAyLjRDNDYuMDggMCAwIDQ2LjA4IDAgMTAyLjR2ODE5LjJjMCA1Ni4zMiA0Ni4wOCAxMDIuNCAxMDIuNCAxMDIuNGgxODQzLjJjNTYuMzIgMCAxMDIuNC00Ni4wOCAxMDIuNC0xMDIuNFYxMDIuNGMwLTU2LjMyLTQ2LjA4LTEwMi40LTEwMi40LTEwMi40elxcXCIgcC1pZD1cXFwiMjUyMFxcXCIgLz48cGF0aCBkPVxcXCJNNDM3Ljc2IDQyNC45NlY0NjAuOHMtNTMuNzYtMjUuNi05Mi4xNi01LjEyLTQ2LjA4IDM1Ljg0LTQ2LjA4IDcxLjY4IDUuMTIgNDMuNTIgMjguMTYgNjEuNDRjMjMuMDQgMjAuNDggNzEuNjggMjAuNDggMTEwLjA4IDEwLjI0djM1Ljg0cy0yOC4xNiAxMC4yNC01Ni4zMiAxMC4yNC02Ni41Ni03LjY4LTkyLjE2LTI4LjE2QzI1NiA1ODguOCAyNTMuNDQgNTYwLjY0IDI1My40NCA1MjcuMzZzNy42OC01My43NiAyOC4xNi03MS42OGMyMC40OC0yMC40OCA1My43Ni0zNS44NCA5OS44NC0zNS44NCA0My41Mi01LjEyIDU2LjMyIDUuMTIgNTYuMzIgNS4xMnpNNDY1LjkyIDQxNC43MnYyMjcuODRoNDMuNTJ2LTExMC4wOHM3LjY4LTI4LjE2IDQ2LjA4LTI4LjE2IDM4LjQgMjguMTYgMzguNCAyOC4xNnYxMTAuMDhoNDMuNTJ2LTEzNS42OHMtMi41Ni0xMi44LTE3LjkyLTI4LjE2Yy0xNS4zNi0xNS4zNi02MS40NC0xMi44LTYxLjQ0LTEyLjhzLTQ4LjY0IDcuNjgtNDguNjQgMzguNHYtODkuNmgtNDMuNTJ6TTY2NS42IDQ2OC40OGg0Ni4wOFY2NDBINjY1LjZ6TTY4OC42NCA0NTMuMTJjLTEyLjggMC0yMy4wNC0xMC4yNC0yMy4wNC0yMy4wNHMxMC4yNC0yMy4wNCAyMy4wNC0yMy4wNCAyMy4wNCAxMC4yNCAyMy4wNCAyMy4wNC0xMC4yNCAyMy4wNC0yMy4wNCAyMy4wNHpNNzQ3LjUyIDQ2OC40OFY2NDBINzkzLjZ2LTEwNy41MnM1LjEyLTMwLjcyIDQ2LjA4LTMwLjcyIDM1Ljg0IDI1LjYgMzUuODQgMjUuNnYxMTAuMDhIOTIxLjZ2LTEyOHMyLjU2LTE1LjM2LTEwLjI0LTI4LjE2Yy0xMi44LTEyLjgtMzAuNzItMTcuOTItNjQtMTcuOTJzLTUzLjc2IDI1LjYtNTMuNzYgMjUuNnYtMjUuNmgtNDYuMDh6TTk1NC44OCA0NzguNzJ2MjguMTZzMTUuMzYtMTAuMjQgNTMuNzYtMTAuMjQgMzUuODQgMTIuOCAzNS44NCAxMi44djE1LjM2cy0zMy4yOCAxNy45Mi01Ni4zMiAxNy45MmMtMjMuMDQgMC01My43NiAyNS42LTUzLjc2IDUxLjJzMTcuOTIgNDguNjQgMzguNCA0OC42NGgzMy4yOHMyMC40OCAwIDIwLjQ4LTIwLjQ4di0xMi44cy0xMC4yNCA3LjY4LTIzLjA0IDcuNjhjLTE1LjM2IDAtMzAuNzItMi41Ni0zMC43Mi0yMy4wNHMyMC40OC0xNy45MiAzNS44NC0yMy4wNCAzOC40LTE3LjkyIDM4LjQtMTcuOTJ2ODkuNmg0Ni4wOHYtMTM1LjY4czIuNTYtNS4xMi0xMC4yNC0yMC40OGMtMTIuOC0xNS4zNi0xNS4zNi0xNy45Mi0zMy4yOC0xNy45MmgtNTYuMzJzLTE3LjkyIDAtMzguNCAxMC4yNHpNMTExOC43MiA0MTQuNzJ2MTUzLjZzMi41NiAzMC43MiAxNy45MiA0Ni4wOGMxNS4zNiAxNS4zNiA0MC45NiAyOC4xNiA2NCAyOC4xNkgxMjU0LjRzMjUuNi01LjEyIDQ2LjA4LTE3LjkyIDI4LjE2LTMwLjcyIDI4LjE2LTQ4LjY0di0xNjEuMjhoLTUzLjc2djE0NS45MnMwIDM1Ljg0LTI4LjE2IDM1Ljg0aC00OC42NHMtMjguMTYgMC0yOC4xNi0zNS44NHYtMTQ1LjkyaC01MS4yek0xMzYxLjkyIDQ2OC40OFY2NDBIMTQwOHYtMTA3LjUyczUuMTItMzAuNzIgNDYuMDgtMzAuNzIgMzUuODQgMjUuNiAzNS44NCAyNS42djExMC4wOEgxNTM2di0xMjhzMi41Ni0xNS4zNi0xMC4yNC0yOC4xNmMtMTIuOC0xMi44LTMwLjcyLTE3LjkyLTY0LTE3Ljkycy01My43NiAyNS42LTUzLjc2IDI1LjZ2LTI1LjZoLTQ2LjA4ek0xNTU5LjA0IDQ2OC40OGg0Ni4wOFY2NDBoLTQ2LjA4ek0xNTgyLjA4IDQ1My4xMmMtMTIuOCAwLTIzLjA0LTEwLjI0LTIzLjA0LTIzLjA0czEwLjI0LTIzLjA0IDIzLjA0LTIzLjA0IDIzLjA0IDEwLjI0IDIzLjA0IDIzLjA0LTEwLjI0IDIzLjA0LTIzLjA0IDIzLjA0ek0xNzEwLjA4IDUxNC41NmwtMzUuODQtNDYuMDhoLTQ2LjA4bDUzLjc2IDg0LjQ4LTYxLjQ0IDg5LjZoNTMuNzZsMzUuODQtNTMuNzYgMzUuODQgNTMuNzZIMTc5MmwtNTYuMzItODkuNiA1Ni4zMi04NC40OGgtNDYuMDh6TTE2MjAuNDggMzg5LjEydjY0aDE3Ljkydi0zOC40czAtNy42OCAxMC4yNC03LjY4YzcuNjggMCAxMC4yNCA3LjY4IDEwLjI0IDcuNjh2MzguNGgxNy45MnYtMzguNHMwLTEwLjI0LTcuNjgtMTcuOTJjLTcuNjgtNS4xMi0yMC40OC0xMC4yNC0zMC43MiAyLjU2di03LjY4aC0xNy45MnpNMTc0OC40OCAzODkuMTJ2MTIuOGgxMC4yNHYzNS44NHMwIDE1LjM2IDE1LjM2IDE1LjM2IDE1LjM2LTE3LjkyIDE1LjM2LTE3LjkyaC0xMC4yNHY1LjEyYzAgMi41Ni03LjY4IDIuNTYtNy42OC0yLjU2di0zMy4yOGgyMC40OHYtMTIuOGgtMTcuOTJ2LTEwLjI0aC0xMi44djEwLjI0aC0xMi44ek0xNzMwLjU2IDQzMi42NHMtNy42OCA1LjEyLTEyLjggNS4xMi0xNS4zNiAwLTE1LjM2LTE1LjM2aDQwLjk2czAtMTUuMzYtMi41Ni0yMy4wNGMtNS4xMi03LjY4LTEwLjI0LTEyLjgtMjUuNi0xMi44LTEyLjggMC0yOC4xNiAxMC4yNC0yOC4xNiAzMy4yOHMxNy45MiAzMC43MiAyOC4xNiAzMC43MmMxMC4yNCAwIDI4LjE2LTUuMTIgMjguMTYtMTcuOTJoLTEyLjh6IG0tMTIuOC0zMy4yOGMxMi44IDAgMTIuOCAxMi44IDEyLjggMTIuOGgtMjUuNmMtMi41NiAwLTIuNTYtMTIuOCAxMi44LTEyLjh6XFxcIiBwLWlkPVxcXCIyNTIxXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnL2NoaW5hdW5peC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJoZXh1blwiLFxuICBcInVzZVwiOiBcImhleHVuLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAyMDQ4IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDIwNDggMTAyNFxcXCIgaWQ9XFxcImhleHVuXFxcIj48ZGVmcz48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9XFxcIk0xOTQ1LjYgMjUuNmM0My41MiAwIDc2LjggMzMuMjggNzYuOCA3Ni44djgxOS4yYzAgNDMuNTItMzMuMjggNzYuOC03Ni44IDc2LjhIMTAyLjRjLTQzLjUyIDAtNzYuOC0zMy4yOC03Ni44LTc2LjhWMTAyLjRjMC00My41MiAzMy4yOC03Ni44IDc2LjgtNzYuOGgxODQzLjJtMC0yNS42SDEwMi40QzQ2LjA4IDAgMCA0Ni4wOCAwIDEwMi40djgxOS4yYzAgNTYuMzIgNDYuMDggMTAyLjQgMTAyLjQgMTAyLjRoMTg0My4yYzU2LjMyIDAgMTAyLjQtNDYuMDggMTAyLjQtMTAyLjRWMTAyLjRjMC01Ni4zMi00Ni4wOC0xMDIuNC0xMDIuNC0xMDIuNHpcXFwiIHAtaWQ9XFxcIjI5NjhcXFwiIC8+PHBhdGggZD1cXFwiTTM5MS42OCAzMDQuNjRoMjUuNmw1OC44OCAzODkuMTItNDguNjQgNy42OHpNNjAxLjYgMjU2bC0xMDcuNTIgNTA0LjMyIDg3LjA0IDcuNjggNTYuMzItNTEyelxcXCIgcC1pZD1cXFwiMjk2OVxcXCIgLz48cGF0aCBkPVxcXCJNNDI3LjUyIDM4MS40NGMxMzAuNTYtNTYuMzIgMzQwLjQ4LTU4Ljg4IDM0MC40OC01OC44OC0yMzAuNCA0My41Mi0zMzIuOCA5Ny4yOC0zMzIuOCA5Ny4yOGwtNy42OC0zOC40elxcXCIgcC1pZD1cXFwiMjk3MFxcXCIgLz48cGF0aCBkPVxcXCJNMzk5LjM2IDM5MS42OHMtODQuNDggMzguNC05OS44NCAxMDIuNGMtMTcuOTIgNjQgMzguNCA5OS44NCAxMDIuNCAxMTUuMiA2NCAxNS4zNiAyMDkuOTIgNy42OCAyOTQuNC01LjEyIDAgMC0xNjYuNCAyLjU2LTI0MC42NC0xNy45Mi03NC4yNC0yMy4wNC0xNDMuMzYtNjEuNDQtNDguNjQtMTQ4LjQ4bC03LjY4LTQ2LjA4ek03ODUuOTIgMzQzLjA0czEyMC4zMiA1LjEyIDE5Mi0yMy4wNGwzOC40IDM4LjRzLTU2LjMyIDEwLjI0LTc0LjI0IDEyLjh2NDMuNTJIMTAyNHYzOC40aC03OS4zNnYzOC40bDMwLjcyLTIzLjA0IDYxLjQ0IDUxLjItMzguNCAzMC43Mi01MS4yLTUxLjJ2MTMwLjU2aC02NHYtMTA0Ljk2bC02NCA1MS4yaC03LjY4TDc3My4xMiA1MzcuNnM1Ni4zMi0xNy45MiAxMDIuNC03Ni44di01LjEyaC04OS42di00MC45Nmg5NC43MnYtMzguNHMtNDguNjQgNS4xMi03NC4yNCAxMC4yNGwtMjAuNDgtNDMuNTJ6XFxcIiBwLWlkPVxcXCIyOTcxXFxcIiAvPjxwYXRoIGQ9XFxcIk0xMjAwLjY0IDM4MS40NGgtNTYuMzJzLTQzLjUyIDIzLjA0LTUzLjc2IDQ2LjA4VjQwOS42cy0zMC43Mi03LjY4LTU2LjMyLTMzLjI4djIzMi45NkgxMjI4LjhWNDA5LjZjMC0yLjU2LTUuMTItMjguMTYtMjguMTYtMjguMTZ6TTExNzIuNDggNTYzLjJoLTc5LjM2di0xMTUuMnMzMy4yOC0zNS44NCA1Ni4zMi0zNS44NGMyMC40OCAwIDIzLjA0IDE3LjkyIDIzLjA0IDE3LjkyVjU2My4yek0xMjg3LjY4IDQwMS45MnY0MC45Nmg3MS42OHYxMjhsLTEyLjggMTIuOCAzOC40IDQzLjUyIDEwNy41Mi02OS4xMlY1MTJsLTc0LjI0IDM1Ljg0di0xNDUuOTJ6TTEzMjAuOTYgMzQ4LjE2czU2LjMyIDMzLjI4IDcxLjY4IDQ2LjA4bDQwLjk2LTMwLjcyLTY2LjU2LTQzLjUyYzIuNTYgMC0yMy4wNCAxMC4yNC00Ni4wOCAyOC4xNk0xNDQ4Ljk2IDM0My4wNHYzOC40SDE2MTIuOHMyMC40OCA1LjEyIDIwLjQ4IDI1LjZ2MTc5LjJzMTAuMjQgNDAuOTYgNTEuMiA0MC45Nmg2Ni41NnYtNDAuOTZoLTQwLjk2cy0yMy4wNCAwLTIzLjA0LTIwLjQ4di0xNTguNzJzLTE1LjM2LTYxLjQ0LTU2LjMyLTYxLjQ0aC0xODEuNzZ6XFxcIiBwLWlkPVxcXCIyOTcyXFxcIiAvPjxwYXRoIGQ9XFxcIk0xNTA1LjI4IDQwMS45MnY0Ni4wOGgtNTYuMzJ2NDAuOTZoNTYuMzJ2MTM4LjI0aDYxLjQ0di0xMzguMjRoNTEuMnYtNDAuOTZoLTUxLjJ2LTIzLjA0ek03NzguMjQgNjMyLjMydjEwNC45NmgyMy4wNHYtNDMuNTJzMjguMTYtMTcuOTIgMzMuMjgtMTcuOTJoNy42OHMxNS4zNiAwIDE1LjM2IDE1LjM2djQ2LjA4aDE3Ljkydi01OC44OHMtMi41Ni0yMy4wNC0yNS42LTIzLjA0LTQ4LjY0IDI1LjYtNDguNjQgMjUuNnYtMzMuMjhjLTIuNTYgMC0xNS4zNi0xNS4zNi0yMy4wNC0xNS4zNk05MjYuNzIgNjU1LjM2cy0zMy4yOCAxMi44LTMzLjI4IDMwLjcydjIzLjA0czcuNjggMjguMTYgMzMuMjggMjguMTZoMzMuMjhzMjMuMDQtNy42OCAyMy4wNC0yMC40OHYtNS4xMmgtMjAuNDhzMCAxMC4yNC0xMi44IDEwLjI0aC0yMy4wNHMtMTcuOTItNS4xMi0xNy45Mi0yMC40OFY2OTEuMnM1LjEyLTIwLjQ4IDIwLjQ4LTIwLjQ4aDE3LjkyczE1LjM2IDUuMTIgMTUuMzYgMTUuMzZIOTIxLjZsMTcuOTIgMTUuMzZoNDguNjR2LTIzLjA0cy03LjY4LTIzLjA0LTI4LjE2LTIzLjA0aC0zMy4yOHpNOTk1Ljg0IDY1NS4zNmgxNy45MmwyMy4wNCAyOC4xNmg3LjY4bDE3LjkyLTI4LjE2aDIwLjQ4djcuNjhsLTMwLjcyIDM1Ljg0IDMwLjcyIDQwLjk2aC0yMy4wNGwtMjAuNDgtMjguMTYtMjAuNDggMjguMTZoLTIzLjA0bDMwLjcyLTQwLjk2LTMwLjcyLTM1Ljg0ek0xMDk4LjI0IDY1NS4zNnY2OS4xMnM3LjY4IDE3LjkyIDI1LjYgMTcuOTIgMjUuNi01LjEyIDI1LjYtNS4xMmwyMy4wNC0xNS4zNnYyMC40OGgxNy45MnYtODQuNDhoLTIwLjQ4djQ2LjA4cy0yMC40OCAyMC40OC0zMC43MiAyMC40OEgxMTI2LjRzLTEwLjI0LTIuNTYtMTAuMjQtMTAuMjR2LTQzLjUybC0xNy45Mi0xNS4zNnpNMTIxMy40NCA2NTUuMzZ2ODQuNDhoMjAuNDh2LTQ2LjA4czIwLjQ4LTIwLjQ4IDM4LjQtMjAuNDggMTUuMzYgMTAuMjQgMTUuMzYgMTcuOTJ2NDguNjRoMjAuNDh2LTY2LjU2cy0yLjU2LTE3LjkyLTIzLjA0LTE3LjkyYy0xNy45MiAwLTI4LjE2IDUuMTItMjguMTYgNS4xMmwtMjMuMDQgMTcuOTJWNjY1LjZjLTIuNTYgMC0xMi44LTEwLjI0LTIwLjQ4LTEwLjI0TTEzNDYuNTYgNzE5LjM2aDIwLjQ4djE3LjkyaC0yMC40OHpNMTQ3NC41NiA2NzMuMjhzLTEwLjI0LTE3LjkyLTI1LjYtMTcuOTJoLTI4LjE2cy0zMy4yOCAyLjU2LTM4LjQgMzMuMjh2MjAuNDhzMTAuMjQgMzAuNzIgMzMuMjggMzAuNzJoMzUuODRzMjguMTYtMTIuOCAyOC4xNi0yMy4wNHYtNy42OGgtMTUuMzZzLTUuMTIgMTUuMzYtMjAuNDggMTUuMzZoLTE3Ljkycy0yMC40OC01LjEyLTIwLjQ4LTIwLjQ4di0xNy45MnM1LjEyLTE3LjkyIDI1LjYtMTcuOTJoMTIuOHMxMC4yNCA1LjEyIDEwLjI0IDEyLjhjMCAyLjU2IDEyLjggNS4xMiAyMC40OC03LjY4TTE1NTMuOTIgNjUyLjhoLTE1LjM2Yy0yNS42IDAtNDMuNTIgMjAuNDgtNDMuNTIgNDMuNTIgMCAyMy4wNCAyMC40OCA0My41MiA0My41MiA0My41MmgxNS4zNmMyNS42IDAgNDMuNTItMjAuNDggNDMuNTItNDMuNTIgMC0yMy4wNC0xNy45Mi00My41Mi00My41Mi00My41Mm0tNy42OCA3MS42OGMtMTcuOTIgMC0zMC43Mi0xMi44LTMwLjcyLTI4LjE2IDAtMTUuMzYgMTIuOC0yOC4xNiAzMC43Mi0yOC4xNnMzMC43MiAxMi44IDMwLjcyIDI4LjE2YzAgMTUuMzYtMTUuMzYgMjguMTYtMzAuNzIgMjguMTZNMTYxMC4yNCA2NTUuMzZ2ODQuNDhoMjMuMDR2LTUxLjJzMTAuMjQtMTUuMzYgMjMuMDQtMTUuMzZoMTIuOHMxMC4yNCAwIDEwLjI0IDEyLjh2NTMuNzZoMjAuNDh2LTUzLjc2czAtMTUuMzYgMTUuMzYtMTUuMzZoNy42OHMxMC4yNCAwIDEwLjI0IDE1LjM2djUzLjc2aDIwLjQ4di01OC44OHMtMi41Ni0yNS42LTIzLjA0LTI1LjZoLTI1LjZzLTE1LjM2IDUuMTItMTUuMzYgMTAuMjRjMCAwLTcuNjgtMTAuMjQtMTUuMzYtMTAuMjRzLTIzLjA0IDAtMzguNCAyMy4wNHYtNy42OGMtMi41NiAwLTEwLjI0LTE1LjM2LTI1LjYtMTUuMzZcXFwiIHAtaWQ9XFxcIjI5NzNcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9zdmcvaGV4dW4uc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwib3NjaGluYVwiLFxuICBcInVzZVwiOiBcIm9zY2hpbmEtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDIwNDggMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjA0OCAxMDI0XFxcIiBpZD1cXFwib3NjaGluYVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNMTk0NS42IDI1LjZjNDMuNTIgMCA3Ni44IDMzLjI4IDc2LjggNzYuOHY4MTkuMmMwIDQzLjUyLTMzLjI4IDc2LjgtNzYuOCA3Ni44SDEwMi40Yy00My41MiAwLTc2LjgtMzMuMjgtNzYuOC03Ni44VjEwMi40YzAtNDMuNTIgMzMuMjgtNzYuOCA3Ni44LTc2LjhoMTg0My4ybTAtMjUuNkgxMDIuNEM0Ni4wOCAwIDAgNDYuMDggMCAxMDIuNHY4MTkuMmMwIDU2LjMyIDQ2LjA4IDEwMi40IDEwMi40IDEwMi40aDE4NDMuMmM1Ni4zMiAwIDEwMi40LTQ2LjA4IDEwMi40LTEwMi40VjEwMi40YzAtNTYuMzItNDYuMDgtMTAyLjQtMTAyLjQtMTAyLjR6XFxcIiBwLWlkPVxcXCIyNjMwXFxcIiAvPjxwYXRoIGQ9XFxcIk00MzIuNjQgNjA0LjE2YzU4Ljg4IDAgODcuMDQtNDguNjQgODcuMDQtNDguNjRsMTQ1LjkyIDQ4LjY0cy01Ni4zMiAxNDUuOTItMjIyLjcyIDE1My42Yy0xNTEuMDQgNS4xMi0yNDguMzItMTIwLjMyLTI0OC4zMi0yNDUuNzYgMC0xNDAuOCAxMDIuNC0yNDUuNzYgMjUwLjg4LTI0NS43NiAxNTguNzIgMCAyMTcuNiAxNTMuNiAyMTcuNiAxNTMuNmwtMTQzLjM2IDUzLjc2UzQ4Ni40IDQwOS42IDQzMC4wOCA0MTIuMTZjLTQ4LjY0IDAtOTkuODQgNDAuOTYtOTcuMjggOTcuMjggNy42OCA2MS40NCA0OC42NCA5NC43MiA5OS44NCA5NC43MnpNODQ5LjkyIDQyNy41Mmg3Ni44di03Ni44aC03Ni44djc2Ljh6IG0tNzEuNjgtNzYuOGMtNS4xMiAwLTEwLjI0IDAtMTIuOC0yLjU2cy0yLjU2LTcuNjgtMi41Ni0xMi44IDAtMTAuMjQgMi41Ni0xMi44IDcuNjgtMi41NiAxMi44LTIuNTZoMjE1LjA0YzcuNjggMCAxMC4yNCAwIDEyLjggMi41NnMyLjU2IDUuMTIgMi41NiAxMi44YzAgNS4xMiAwIDEwLjI0LTIuNTYgMTIuOHMtNy42OCAyLjU2LTEyLjggMi41NmgtMzMuMjh2NzYuOGg0OC42NGM1LjEyIDAgMTAuMjQgMCAxMi44IDIuNTZzMi41NiA1LjEyIDIuNTYgMTAuMjQgMCAxMC4yNC0yLjU2IDEyLjgtNy42OCA1LjEyLTEyLjggNS4xMmgtNDguNjR2OTkuODRjMCA3LjY4LTIuNTYgMTAuMjQtNS4xMiAxMi44LTIuNTYgMi41Ni03LjY4IDIuNTYtMTIuOCAyLjU2cy0xMC4yNCAwLTEyLjgtMi41Ni01LjEyLTcuNjgtNS4xMi0xMi44di05OS44NGgtNzYuOGMwIDEyLjgtMi41NiAyNS42LTUuMTIgMzguNC0yLjU2IDEwLjI0LTcuNjggMjAuNDgtMTIuOCAyOC4xNi01LjEyIDcuNjgtMTAuMjQgMTcuOTItMTcuOTIgMjMuMDQtNy42OCA3LjY4LTE1LjM2IDE1LjM2LTI1LjYgMjAuNDgtNS4xMiA1LjEyLTEwLjI0IDUuMTItMTUuMzYgNS4xMnMtNy42OC0yLjU2LTEyLjgtNy42OGMtMi41Ni01LjEyLTUuMTItMTAuMjQtMi41Ni0xMi44IDIuNTYtNS4xMiA1LjEyLTcuNjggMTAuMjQtMTIuOCA3LjY4LTUuMTIgMTUuMzYtMTAuMjQgMjAuNDgtMTUuMzYgNS4xMi01LjEyIDEwLjI0LTEwLjI0IDE1LjM2LTE3LjkyIDUuMTItNy42OCA3LjY4LTEyLjggMTAuMjQtMjMuMDQgMi41Ni03LjY4IDUuMTItMTcuOTIgNS4xMi0yOC4xNkg3NjhjLTUuMTIgMC0xMC4yNC0yLjU2LTEyLjgtNS4xMnMtMi41Ni03LjY4LTIuNTYtMTIuOCAwLTcuNjggMi41Ni0xMC4yNCA3LjY4LTIuNTYgMTIuOC0yLjU2aDQ4LjY0di03Ni44bC0zOC40IDIuNTZ6TTEwOTUuNjggNDMwLjA4Yy0yLjU2IDIuNTYtNy42OCA1LjEyLTEyLjggNS4xMnMtNy42OC0yLjU2LTE1LjM2LTcuNjhjLTIuNTYtMi41Ni01LjEyLTUuMTItMTAuMjQtNy42OC01LjEyLTIuNTYtNy42OC03LjY4LTEyLjgtMTAuMjQtNS4xMi01LjEyLTcuNjgtNy42OC03LjY4LTEwLjI0IDAtMi41NiAwLTcuNjggNS4xMi0xMi44IDcuNjgtNy42OCAxNS4zNi03LjY4IDI1LjYgMCAyLjU2IDIuNTYgNy42OCA1LjEyIDEyLjggMTAuMjQgNS4xMiAyLjU2IDEwLjI0IDcuNjggMTIuOCAxMC4yNCA1LjEyIDUuMTIgNy42OCA3LjY4IDcuNjggMTIuOCAwIDAgMCA1LjEyLTUuMTIgMTAuMjR6IG01LjEyIDUxLjJjLTIuNTYgMTUuMzYtNy42OCAyOC4xNi0xMi44IDQwLjk2bC0xNS4zNiAzOC40Yy0yLjU2IDUuMTItNy42OCAxMC4yNC0xMC4yNCAxMC4yNC01LjEyIDIuNTYtMTAuMjQgMC0xMi44LTIuNTYtNS4xMi0yLjU2LTcuNjgtNS4xMi03LjY4LTEwLjI0czAtMTAuMjQgNS4xMi0xNy45MmM1LjEyLTEwLjI0IDEwLjI0LTIwLjQ4IDEyLjgtMzMuMjggNS4xMi0xMi44IDcuNjgtMjUuNiAxMC4yNC0zOC40IDIuNTYtNy42OCAyLjU2LTEwLjI0IDcuNjgtMTIuOCAyLjU2LTIuNTYgNy42OC0yLjU2IDEyLjgtMi41NnMxMC4yNCAyLjU2IDEyLjggNy42OGMwIDUuMTIgMCAxMi44LTIuNTYgMjAuNDh6IG01LjEyLTExNy43NmMtMi41NiAyLjU2LTcuNjggNS4xMi0xMi44IDUuMTJzLTcuNjgtMi41Ni0xNS4zNi03LjY4Yy0yLjU2LTIuNTYtNy42OC03LjY4LTEyLjgtMTAuMjQtNS4xMi0yLjU2LTcuNjgtNy42OC0xMC4yNC0xMC4yNC0yLjU2LTIuNTYtNS4xMi03LjY4LTUuMTItMTAuMjRzMC03LjY4IDUuMTItMTIuOGMyLjU2LTUuMTIgNy42OC03LjY4IDEwLjI0LTcuNjggNS4xMiAwIDEwLjI0IDAgMTIuOCA1LjEyIDIuNTYgMi41NiA3LjY4IDUuMTIgMTAuMjQgNy42OCAyLjU2IDIuNTYgNS4xMiA1LjEyIDcuNjggNS4xMmw1LjEyIDUuMTIgNS4xMiA1LjEyYzUuMTIgNS4xMiA3LjY4IDcuNjggNy42OCAxMi44IDAgMi41Ni0yLjU2IDcuNjgtNy42OCAxMi44eiBtMTU4LjcyIDQzLjUydi0xMi44YzAtMi41Ni0yLjU2LTUuMTItNS4xMi01LjEyaC02Ni41NnYxNS4zNmw3MS42OCAyLjU2eiBtMCA0MC45NlY0MzUuMmgtNzEuNjh2MTIuOGMwIDIuNTYgMi41NiA1LjEyIDUuMTIgNS4xMmg2NGMyLjU2IDAgMi41NiAwIDIuNTYtNS4xMnogbS03NC4yNC04NC40OGgxNy45Mmw3LjY4LTE1LjM2di01LjEyaC02Ni41NlY0NjAuOGMwIDEyLjgtMi41NiAyNS42LTIuNTYgMzguNC0yLjU2IDEwLjI0LTIuNTYgMjAuNDgtNS4xMiAzMC43Mi0yLjU2IDEwLjI0LTUuMTIgMTcuOTItMTAuMjQgMjUuNi0yLjU2IDcuNjgtNy42OCAxMC4yNC0xMC4yNCAxMC4yNC0yLjU2IDAtNy42OCAwLTEyLjgtMi41Ni01LjEyIDAtNy42OC0yLjU2LTcuNjgtNS4xMnMtMi41Ni0yLjU2LTIuNTYtNS4xMnYtNy42OGMwLTIuNTYgMi41Ni01LjEyIDIuNTYtNy42OCAyLjU2LTcuNjggNS4xMi0xMi44IDcuNjgtMjAuNDhzMi41Ni0xNS4zNiA1LjEyLTI1LjZjMC0xMC4yNCAyLjU2LTIwLjQ4IDIuNTYtMzMuMjh2LTExNS4yYzAtMTAuMjQgMi41Ni0xNy45MiA3LjY4LTIzLjA0czEwLjI0LTcuNjggMjAuNDgtNy42OGgxNDguNDhjNS4xMiAwIDEwLjI0IDAgMTIuOCAyLjU2czIuNTYgNS4xMiAyLjU2IDEwLjI0IDAgNy42OC0yLjU2IDEwLjI0Yy0yLjU2IDIuNTYtNS4xMiAyLjU2LTEyLjggMi41NmgtNDguNjRjMi41NiAyLjU2IDIuNTYgMTAuMjQgMCAxNS4zNiAwIDAgMCAyLjU2LTIuNTYgMi41NmgzMC43MmMxMC4yNCAwIDE1LjM2IDIuNTYgMjAuNDggNy42OCAyLjU2IDUuMTIgNS4xMiAxMi44IDUuMTIgMjAuNDh2NjRjMCAxMC4yNC0yLjU2IDE3LjkyLTUuMTIgMjAuNDgtNS4xMiA1LjEyLTEwLjI0IDUuMTItMjAuNDggNS4xMmgtMjUuNnY1My43NmMwIDcuNjggMCAxNS4zNi0yLjU2IDIwLjQ4LTIuNTYgNS4xMi01LjEyIDEwLjI0LTcuNjggMTAuMjQtMi41NiAyLjU2LTcuNjggMi41Ni0xNS4zNiAyLjU2LTUuMTIgMC0xMi44IDAtMjMuMDQtMi41Ni03LjY4IDAtMTAuMjQtMi41Ni0xMi44LTcuNjgtMi41Ni0yLjU2LTIuNTYtNy42OCAwLTEyLjhzMi41Ni03LjY4IDUuMTItMTAuMjRjMi41Ni0yLjU2IDcuNjggMCAxMi44IDAgNS4xMiAyLjU2IDEwLjI0IDIuNTYgMTAuMjQgMi41NnMyLjU2LTIuNTYgMi41Ni01LjEydi01My43NmgtMjUuNmMtMTcuOTIgMC0yNS42LTEwLjI0LTI1LjYtMjguMTZ2LTY0YzAtMTAuMjQgMi41Ni0xNy45MiA1LjEyLTIwLjQ4IDIuNTYgNy42OCAxMC4yNCA1LjEyIDIwLjQ4IDUuMTJ6IG0yLjU2IDE0NS45MmMtMi41NiA3LjY4LTcuNjggMTcuOTItMTAuMjQgMjUuNi01LjEyIDcuNjgtMTAuMjQgMTcuOTItMTUuMzYgMjUuNi0yLjU2IDUuMTItNS4xMiA3LjY4LTEwLjI0IDcuNjgtMi41NiAwLTcuNjggMC0xMi44LTIuNTYtMi41Ni0yLjU2LTUuMTItNS4xMi01LjEyLTEwLjI0IDAtMi41NiAwLTcuNjggNS4xMi0xMi44IDIuNTYtNS4xMiA1LjEyLTcuNjggNy42OC0xMi44IDIuNTYtMi41NiA1LjEyLTcuNjggNS4xMi0xMC4yNCAyLjU2LTIuNTYgMi41Ni03LjY4IDUuMTItMTAuMjQgMi41Ni0yLjU2IDIuNTYtNy42OCA1LjEyLTEyLjhzNS4xMi03LjY4IDcuNjgtMTAuMjQgNy42OC0yLjU2IDEwLjI0IDBjNS4xMiAyLjU2IDcuNjggNS4xMiA3LjY4IDcuNjggNS4xMiA1LjEyIDIuNTYgNy42OCAwIDE1LjM2eiBtMTEwLjA4IDI4LjE2YzIuNTYgNS4xMiA1LjEyIDEwLjI0IDUuMTIgMTUuMzZzLTIuNTYgNy42OC03LjY4IDEwLjI0LTcuNjggMi41Ni0xMC4yNCAwYy0yLjU2LTIuNTYtNS4xMi01LjEyLTcuNjgtMTAuMjQtMi41Ni01LjEyLTUuMTItNy42OC03LjY4LTEyLjgtMi41Ni0yLjU2LTUuMTItNy42OC01LjEyLTEwLjI0LTIuNTYtMi41Ni0yLjU2LTUuMTItNS4xMi0xMC4yNC0yLjU2LTIuNTYtNS4xMi01LjEyLTUuMTItMTAuMjQgMC0yLjU2LTIuNTYtMi41Ni0yLjU2LTUuMTJzLTIuNTYtMi41Ni0yLjU2LTUuMTJ2LTUuMTJjMC0yLjU2IDIuNTYtNS4xMiAyLjU2LTUuMTIgMi41Ni0yLjU2IDUuMTItNS4xMiAxMC4yNC01LjEyczcuNjggMi41NiAxMC4yNCA3LjY4YzIuNTYgNS4xMiA1LjEyIDcuNjggNy42OCAxMi44IDIuNTYgMi41NiA1LjEyIDcuNjggNS4xMiAxMC4yNCAyLjU2IDIuNTYgNS4xMiA3LjY4IDUuMTIgMTAuMjQgMi41NiAyLjU2IDUuMTIgNy42OCA3LjY4IDEyLjh6TTEzNzcuMjggMzg2LjU2Yy0yLjU2IDAtNS4xMiAwLTUuMTIgMi41NlY0NjUuOTJzMi41NiAyLjU2IDUuMTIgMi41Nmg1OC44OHYtODEuOTJoLTU4Ljg4eiBtOTQuNzIgMHY4MS45Mmg2MS40NGMyLjU2IDAgNS4xMiAwIDcuNjgtMi41NlYzOTYuOGMwLTIuNTYgMC01LjEyLTIuNTYtNy42OCAwIDAtNS4xMi0yLjU2LTcuNjgtMi41NmgtNTguODh6IG0tMzUuODQtNjkuMTJjMC01LjEyIDIuNTYtMTAuMjQgNS4xMi0xMi44IDIuNTYtMi41NiA3LjY4LTIuNTYgMTIuOC0yLjU2czEwLjI0IDAgMTIuOCAyLjU2IDUuMTIgNy42OCA1LjEyIDEyLjh2MzUuODRIMTU1OS4wNGM1LjEyIDAgNy42OCAyLjU2IDEwLjI0IDUuMTIgMi41NiAyLjU2IDUuMTIgNS4xMiA1LjEyIDEwLjI0djExNS4yYzAgNS4xMi0yLjU2IDcuNjgtNS4xMiAxMC4yNC0yLjU2IDIuNTYtNS4xMiA1LjEyLTEwLjI0IDUuMTJzLTEwLjI0IDIuNTYtMTcuOTIgMi41NmgtNjkuMTJ2NTguODhjMCA1LjEyIDAgNy42OC0yLjU2IDEyLjgtMi41NiAyLjU2LTcuNjggNS4xMi0xMi44IDUuMTItNy42OCAwLTEyLjggMC0xNS4zNi0yLjU2cy0yLjU2LTcuNjgtMi41Ni0xMi44di01OC44OGgtNjkuMTJjLTcuNjggMC0xMi44IDAtMTUuMzYtMi41Ni01LjEyIDAtNy42OC0yLjU2LTEwLjI0LTUuMTItMi41Ni0yLjU2LTUuMTItNS4xMi01LjEyLTEwLjI0di0xMDIuNC0xNS4zNmMwLTUuMTIgMi41Ni03LjY4IDUuMTItMTAuMjQgMi41Ni0yLjU2IDUuMTItMi41NiAxMC4yNC01LjEySDE0MzguNzJ2LTM1Ljg0aC0yLjU2ek0xNzYzLjg0IDQ2OC40OGMtMi41Ni01LjEyLTUuMTItNy42OC01LjEyLTEyLjggMC0yLjU2IDIuNTYtNy42OCA1LjEyLTEwLjI0aC0xNS4zNlY0ODYuNGgzNS44NGwtMi41Ni0yLjU2LTIuNTYtMi41Ni01LjEyLTUuMTItMi41Ni0yLjU2LTIuNTYtMi41NnMtMi41NiAwLTUuMTItMi41NnogbS05Mi4xNi03Ni44Yy03LjY4IDAtMTAuMjQgMC0xMi44LTIuNTZzLTIuNTYtNS4xMi0yLjU2LTEyLjhjMC01LjEyIDAtMTAuMjQgMi41Ni0xMi44czcuNjgtMi41NiAxMi44LTIuNTZoMTMwLjU2YzcuNjggMCAxMC4yNCAwIDEyLjggMi41NnMyLjU2IDUuMTIgMi41NiAxMi44YzAgNS4xMiAwIDEwLjI0LTIuNTYgMTAuMjQtMi41NiAyLjU2LTcuNjggMi41Ni0xMi44IDIuNTZoLTUzLjc2djI1LjZIMTc5MmM3LjY4IDAgMTAuMjQgMCAxMi44IDIuNTZzMi41NiA1LjEyIDIuNTYgMTAuMjQgMCAxMC4yNC0yLjU2IDEwLjI0Yy0yLjU2IDIuNTYtNy42OCAyLjU2LTEyLjggMi41NmgtNS4xMmMyLjU2IDUuMTIgNy42OCA3LjY4IDEwLjI0IDEwLjI0czUuMTIgNy42OCAxMC4yNCAxMi44YzIuNTYgMi41NiA1LjEyIDcuNjggMi41NiAxMC4yNCAwIDIuNTYtMi41NiA1LjEyLTUuMTIgNy42OGgyLjU2YzcuNjggMCAxMC4yNCAwIDEyLjggMi41NnMyLjU2IDUuMTIgMi41NiAxMi44YzAgNS4xMiAwIDEwLjI0LTIuNTYgMTAuMjQtMi41NiAyLjU2LTcuNjggMi41Ni0xMi44IDIuNTZoLTEzOC4yNGMtNy42OCAwLTEwLjI0IDAtMTIuOC0yLjU2cy0yLjU2LTUuMTItMi41Ni0xMC4yNCAwLTEwLjI0IDIuNTYtMTIuOCA3LjY4LTIuNTYgMTIuOC0yLjU2SDE3MTUuMnYtNDAuOTZoLTM1Ljg0Yy03LjY4IDAtMTAuMjQgMC0xMi44LTIuNTZzLTIuNTYtNS4xMi0yLjU2LTEwLjI0IDAtMTAuMjQgMi41Ni0xMC4yNGMyLjU2LTIuNTYgNy42OC0yLjU2IDEyLjgtMi41NkgxNzE1LjJ2LTI1LjZoLTQzLjUydjIuNTZ6IG0tMjMuMDQtNDguNjRjLTIuNTYgMC01LjEyIDAtNS4xMiAyLjU2IDAgMC0yLjU2IDIuNTYtMi41NiA3LjY4djE3MS41MmMwIDcuNjggMi41NiAxMi44IDEwLjI0IDEyLjhoMTcxLjUyYzIuNTYgMCA1LjEyIDAgNS4xMi0yLjU2IDIuNTYtMi41NiAyLjU2LTUuMTIgMi41Ni03LjY4di0xNzEuNTJjMC0yLjU2IDAtNS4xMi0yLjU2LTUuMTItMi41Ni0yLjU2LTUuMTItMi41Ni03LjY4LTIuNTZoLTE3MS41MnYtNS4xMnogbTIxMi40OCAxOTJjMCAxMC4yNC0yLjU2IDE3LjkyLTcuNjggMjMuMDQtNS4xMiA1LjEyLTEyLjggNy42OC0yMy4wNCA3LjY4SDE2MzguNGMtMTAuMjQgMC0xNy45Mi0yLjU2LTIzLjA0LTcuNjgtNS4xMi01LjEyLTUuMTItMTIuOC01LjEyLTIzLjA0di0xOTJjMC0xMC4yNCAyLjU2LTE3LjkyIDUuMTItMjMuMDQgMi41Ni01LjEyIDEwLjI0LTcuNjggMjMuMDQtNy42OGgxOTJjMTAuMjQgMCAxNy45MiAyLjU2IDIzLjA0IDcuNjggNS4xMiA1LjEyIDcuNjggMTIuOCA3LjY4IDIzLjA0djE5MnpNNzczLjEyIDY3OC40YzAgMTAuMjQgMi41NiAxNy45MiAxMC4yNCAyNS42IDUuMTIgNS4xMiAxNS4zNiA3LjY4IDIzLjA0IDcuNjggMTAuMjQgMCAxNy45Mi0yLjU2IDIzLjA0LTcuNjggNS4xMi01LjEyIDEwLjI0LTEyLjggMTAuMjQtMjUuNiAwLTEwLjI0LTIuNTYtMTcuOTItMTAuMjQtMjMuMDQtNS4xMi01LjEyLTE1LjM2LTcuNjgtMjMuMDQtNy42OC0xMC4yNCAwLTE3LjkyIDIuNTYtMjMuMDQgNy42OC03LjY4IDUuMTItMTAuMjQgMTIuOC0xMC4yNCAyMy4wNHogbS0yMC40OCAwYzAtMTUuMzYgNS4xMi0yOC4xNiAxNy45Mi0zNS44NCAxMC4yNC01LjEyIDIwLjQ4LTEwLjI0IDM1Ljg0LTEwLjI0IDE1LjM2IDAgMjguMTYgMi41NiAzOC40IDEwLjI0czE1LjM2IDE3LjkyIDE1LjM2IDMwLjcyYzAgMTAuMjQtMi41NiAyMC40OC03LjY4IDI1LjZzLTEwLjI0IDEwLjI0LTE3LjkyIDE1LjM2Yy03LjY4IDIuNTYtMTcuOTIgNS4xMi0yOC4xNiA1LjEyLTE1LjM2IDAtMjguMTYtMi41Ni0zOC40LTEwLjI0LTEwLjI0LTUuMTItMTUuMzYtMTUuMzYtMTUuMzYtMzAuNzJ6TTg3NS41MiA2OTYuMzJsMTcuOTItMi41NmMwIDUuMTIgNS4xMiAxMC4yNCA3LjY4IDEyLjggNS4xMiAyLjU2IDEyLjggNS4xMiAyMC40OCA1LjEyczE1LjM2LTIuNTYgMjAuNDgtNS4xMiA1LjEyLTUuMTIgNS4xMi0xMC4yNGMwLTIuNTYtMi41Ni01LjEyLTUuMTItNy42OC0yLjU2IDAtMTAuMjQtMi41Ni0yMC40OC01LjEyLTE1LjM2LTIuNTYtMjMuMDQtNS4xMi0yOC4xNi03LjY4LTUuMTItMi41Ni0xMC4yNC01LjEyLTEyLjgtNy42OC0yLjU2LTIuNTYtNS4xMi03LjY4LTUuMTItMTAuMjRzMC03LjY4IDIuNTYtMTAuMjQgNS4xMi01LjEyIDEwLjI0LTcuNjhjMi41Ni0yLjU2IDcuNjgtMi41NiAxMi44LTUuMTIgNS4xMiAwIDEwLjI0LTIuNTYgMTUuMzYtMi41NiA3LjY4IDAgMTcuOTIgMCAyMy4wNCAyLjU2IDcuNjggMi41NiAxMi44IDUuMTIgMTUuMzYgNy42OCAyLjU2IDIuNTYgNS4xMiA3LjY4IDcuNjggMTIuOGwtMTcuOTIgMi41NmMwLTUuMTItMi41Ni03LjY4LTcuNjgtMTAuMjRzLTEwLjI0LTIuNTYtMTcuOTItMi41Ni0xNS4zNiAwLTE3LjkyIDIuNTZjLTIuNTYgMi41Ni01LjEyIDUuMTItNS4xMiA3LjY4IDAgMi41NiAwIDIuNTYgMi41NiA1LjEyczUuMTIgMi41NiA3LjY4IDIuNTYgNy42OCAyLjU2IDE3LjkyIDIuNTZjMTIuOCAyLjU2IDIzLjA0IDUuMTIgMjguMTYgNy42OCA1LjEyIDIuNTYgMTAuMjQgNS4xMiAxMi44IDcuNjggMi41NiAyLjU2IDUuMTIgNy42OCA1LjEyIDEyLjhzLTIuNTYgMTAuMjQtNS4xMiAxMi44LTEwLjI0IDEwLjI0LTE3LjkyIDEyLjgtMTUuMzYgMi41Ni0yMy4wNCAyLjU2Yy0xNS4zNiAwLTI1LjYtMi41Ni0zMy4yOC03LjY4LTEwLjI0LTIuNTYtMTUuMzYtNy42OC0xNS4zNi0xNy45Mk0xMDY0Ljk2IDY5MS4ybDE3LjkyIDIuNTZjLTIuNTYgMTAuMjQtNy42OCAxNy45Mi0xNS4zNiAyMy4wNC03LjY4IDUuMTItMTcuOTIgNy42OC0zMC43MiA3LjY4LTE1LjM2IDAtMjguMTYtMi41Ni0zOC40LTEwLjI0cy0xNS4zNi0xNy45Mi0xNS4zNi0zMy4yOGMwLTEwLjI0IDIuNTYtMTcuOTIgNS4xMi0yMy4wNCA1LjEyLTcuNjggMTAuMjQtMTIuOCAxNy45Mi0xNS4zNnMxNy45Mi01LjEyIDI4LjE2LTUuMTJjMTIuOCAwIDIzLjA0IDIuNTYgMzAuNzIgNy42OCA3LjY4IDUuMTIgMTIuOCAxMC4yNCAxNS4zNiAyMC40OGgtMTcuOTJjLTIuNTYtNS4xMi01LjEyLTEwLjI0LTEwLjI0LTEyLjhzLTEwLjI0LTUuMTItMTUuMzYtNS4xMmMtMTAuMjQgMC0xNy45MiAyLjU2LTIzLjA0IDcuNjgtNS4xMiA1LjEyLTEwLjI0IDEyLjgtMTAuMjQgMjUuNiAwIDEwLjI0IDIuNTYgMjAuNDggNy42OCAyNS42czEyLjggNy42OCAyMy4wNCA3LjY4YzcuNjggMCAxMi44LTIuNTYgMTcuOTItNS4xMiA3LjY4LTUuMTIgMTIuOC0xMC4yNCAxMi44LTE3LjkyTTExMDAuOCA3MjEuOTJ2LTExNy43NmgyMC40OHY0MC45NmMxMC4yNC03LjY4IDIwLjQ4LTEyLjggMzMuMjgtMTIuOCA3LjY4IDAgMTUuMzYgMCAyMy4wNCAyLjU2IDUuMTIgMi41NiAxMC4yNCA1LjEyIDEyLjggMTAuMjQgMi41NiA1LjEyIDUuMTIgMTAuMjQgNS4xMiAxNy45MlY3MTYuOGgtMjAuNDh2LTUzLjc2YzAtNy42OC0yLjU2LTEyLjgtNS4xMi0xNS4zNi01LjEyLTIuNTYtMTAuMjQtNS4xMi0xNy45Mi01LjEyLTUuMTIgMC0xMC4yNCAwLTE1LjM2IDIuNTYtNS4xMiAyLjU2LTcuNjggNS4xMi0xMC4yNCA3LjY4LTIuNTYgMi41Ni0yLjU2IDEwLjI0LTIuNTYgMTUuMzZ2NDYuMDhIMTEwMC44djcuNjh6TTEyMjEuMTIgNjIyLjA4di0xNS4zNmgyMC40OHYxNS4zNmgtMjAuNDh6IG0wIDk5Ljg0di04NC40OGgyMC40OHY4NC40OGgtMjAuNDh6TTEyNjkuNzYgNzIxLjkydi04NC40OGgxNy45MnYxMi44YzcuNjgtMTAuMjQgMjAuNDgtMTIuOCAzNS44NC0xMi44IDcuNjggMCAxMi44IDAgMTcuOTIgMi41NnMxMC4yNCA1LjEyIDEyLjggNy42OGMyLjU2IDIuNTYgNS4xMiA3LjY4IDUuMTIgMTAuMjR2NjRoLTIwLjQ4di01MS4yYzAtNS4xMiAwLTEwLjI0LTIuNTYtMTIuOGwtNy42OC03LjY4Yy0yLjU2LTIuNTYtNy42OC0yLjU2LTEyLjgtMi41Ni03LjY4IDAtMTUuMzYgMi41Ni0yMC40OCA1LjEyLTUuMTIgNS4xMi03LjY4IDEwLjI0LTcuNjggMjMuMDR2NDYuMDhoLTE3Ljkyek0xNDY0LjMyIDY3OC40Yy03LjY4IDIuNTYtMTcuOTIgNS4xMi0zMC43MiA1LjEyLTcuNjggMC0xMi44IDIuNTYtMTcuOTIgMi41Ni0yLjU2IDAtNS4xMiAyLjU2LTcuNjggNS4xMnMtMi41NiA1LjEyLTIuNTYgNy42OGMwIDIuNTYgMi41NiA3LjY4IDUuMTIgMTAuMjQgNS4xMiAyLjU2IDEwLjI0IDIuNTYgMTcuOTIgMi41NnMxMi44IDAgMjAuNDgtMi41NmM1LjEyLTIuNTYgMTAuMjQtNS4xMiAxMi44LTEwLjI0IDIuNTYtMi41NiAyLjU2LTcuNjggMi41Ni0xNS4zNnYtNS4xMnogbTIuNTYgMzMuMjhjLTcuNjggNS4xMi0xMi44IDcuNjgtMjAuNDggMTAuMjRzLTEyLjggMi41Ni0yMC40OCAyLjU2Yy0xMi44IDAtMjMuMDQtMi41Ni0yOC4xNi03LjY4LTcuNjgtNS4xMi0xMC4yNC0xMC4yNC0xMC4yNC0xNy45MiAwLTUuMTIgMC03LjY4IDIuNTYtMTAuMjRzNS4xMi01LjEyIDEwLjI0LTcuNjhjNS4xMi0yLjU2IDcuNjgtMi41NiAxMi44LTUuMTIgMi41NiAwIDEwLjI0LTIuNTYgMTcuOTItMi41NiAxNS4zNi0yLjU2IDI4LjE2LTIuNTYgMzMuMjgtNS4xMlY2NjUuNmMwLTUuMTItMi41Ni0xMC4yNC01LjEyLTEyLjgtNS4xMi0yLjU2LTEyLjgtNS4xMi0yMy4wNC01LjEycy0xNS4zNiAwLTIwLjQ4IDIuNTYtNy42OCA3LjY4LTEwLjI0IDEyLjhsLTE3LjkyLTIuNTYgNy42OC0xNS4zNmM1LjEyLTIuNTYgMTAuMjQtNy42OCAxNy45Mi03LjY4IDcuNjgtMi41NiAxNS4zNi0yLjU2IDI1LjYtMi41NnMxNy45MiAwIDIzLjA0IDIuNTYgMTAuMjQgMi41NiAxMi44IDcuNjhjMi41NiAyLjU2IDUuMTIgNS4xMiA1LjEyIDEwLjI0djU2LjMyYzAgMi41NiAyLjU2IDcuNjggNS4xMiAxMC4yNGgtMjAuNDhjMi41Ni0yLjU2IDIuNTYtNy42OCAyLjU2LTEwLjI0ek0xNTE4LjA4IDcwNi41NmgyMy4wNHYxNS4zNmgtMjMuMDR6TTE1NzQuNCA3MjEuOTJ2LTg0LjQ4aDE3LjkydjEyLjhjNy42OC0xMC4yNCAyMC40OC0xMi44IDM1Ljg0LTEyLjggNy42OCAwIDEyLjggMCAxNy45MiAyLjU2czEwLjI0IDUuMTIgMTIuOCA3LjY4YzIuNTYgMi41NiA1LjEyIDcuNjggNS4xMiAxMC4yNHY2NGgtMjAuNDh2LTUxLjJjMC01LjEyIDAtMTAuMjQtMi41Ni0xMi44bC03LjY4LTcuNjhjLTIuNTYtMi41Ni03LjY4LTIuNTYtMTIuOC0yLjU2LTcuNjggMC0xNS4zNiAyLjU2LTIwLjQ4IDUuMTItNS4xMiA1LjEyLTcuNjggMTAuMjQtNy42OCAyMy4wNHY0Ni4wOGgtMTcuOTJ6TTE3MTAuMDggNjcwLjcyaDY0YzAtNy42OC0yLjU2LTEyLjgtNy42OC0xNS4zNi01LjEyLTUuMTItMTIuOC03LjY4LTIzLjA0LTcuNjgtNy42OCAwLTE1LjM2IDIuNTYtMjMuMDQgNy42OC01LjEyIDIuNTYtMTAuMjQgNy42OC0xMC4yNCAxNS4zNnogbTY0IDIzLjA0bDIwLjQ4IDIuNTZjLTIuNTYgNy42OC03LjY4IDE1LjM2LTE3LjkyIDIwLjQ4LTcuNjggNS4xMi0yMC40OCA3LjY4LTMzLjI4IDcuNjgtMTUuMzYgMC0zMC43Mi0yLjU2LTM4LjQtMTAuMjQtMTAuMjQtNy42OC0xNS4zNi0xNy45Mi0xNS4zNi0zMy4yOCAwLTE1LjM2IDUuMTItMjUuNiAxNS4zNi0zMy4yOHMyMy4wNC0xMi44IDM4LjQtMTIuOCAyOC4xNiA1LjEyIDM4LjQgMTIuOCAxNS4zNiAxNy45MiAxNS4zNiAzMy4yOHYyLjU2aC04NC40OGMwIDEwLjI0IDUuMTIgMTUuMzYgMTAuMjQgMjAuNDggNS4xMiA1LjEyIDE1LjM2IDcuNjggMjMuMDQgNy42OHMxMi44LTIuNTYgMTcuOTItNS4xMmMyLjU2LTIuNTYgNy42OC01LjEyIDEwLjI0LTEyLjh6TTE4NTguNTYgNzA5LjEybDIuNTYgMTIuOGgtMTUuMzZjLTcuNjggMC0xMi44IDAtMTUuMzYtMi41NnMtNy42OC0yLjU2LTcuNjgtNy42OGMtMi41Ni0yLjU2LTIuNTYtNy42OC0yLjU2LTE3Ljkydi00OC42NGgtMTUuMzZ2LTEwLjI0aDE1LjM2VjYxNC40bDE3LjkyLTcuNjh2MzAuNzJoMjAuNDh2MTAuMjRoLTIwLjQ4VjcwNGwyLjU2IDIuNTZoNy42OGM1LjEyIDIuNTYgNy42OCAyLjU2IDEwLjI0IDIuNTZcXFwiIHAtaWQ9XFxcIjI2MzFcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9zdmcvb3NjaGluYS5zdmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJzb2h1XCIsXG4gIFwidXNlXCI6IFwic29odS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMjA0OCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQ4IDEwMjRcXFwiIGlkPVxcXCJzb2h1XFxcIj48ZGVmcz48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9XFxcIk0xOTQ1LjYgMjUuNmM0My41MiAwIDc2LjggMzMuMjggNzYuOCA3Ni44djgxOS4yYzAgNDMuNTItMzMuMjggNzYuOC03Ni44IDc2LjhIMTAyLjRjLTQzLjUyIDAtNzYuOC0zMy4yOC03Ni44LTc2LjhWMTAyLjRjMC00My41MiAzMy4yOC03Ni44IDc2LjgtNzYuOGgxODQzLjJtMC0yNS42SDEwMi40QzQ2LjA4IDAgMCA0Ni4wOCAwIDEwMi40djgxOS4yYzAgNTYuMzIgNDYuMDggMTAyLjQgMTAyLjQgMTAyLjRoMTg0My4yYzU2LjMyIDAgMTAyLjQtNDYuMDggMTAyLjQtMTAyLjRWMTAyLjRjMC01Ni4zMi00Ni4wOC0xMDIuNC0xMDIuNC0xMDIuNHpcXFwiIHAtaWQ9XFxcIjI4NTRcXFwiIC8+PHBhdGggZD1cXFwiTTcwOS4xMiAyOTYuOTZjNS4xMiAwIDUuMTIgMi41NiA3LjY4IDIuNTYgMTcuOTIgMTIuOC0xNS4zNiAyOC4xNi0yMy4wNCAzMC43Mi0yLjU2IDAtNS4xMi0yLjU2LTcuNjgtMi41Ni01LjEyLTcuNjggMC0xMC4yNCA1LjEyLTEyLjhsMi41Ni0yLjU2YzAtNS4xMiAxMC4yNC0xNS4zNiAxNS4zNi0xNS4zNnpcXFwiIHAtaWQ9XFxcIjI4NTVcXFwiIC8+PHBhdGggZD1cXFwiTTczNy4yOCAyNzYuNDhjMi41NiAwIDEwLjI0LTIuNTYgMTIuOCAyLjU2IDIuNTYgNy42OC0yLjU2IDQ4LjY0LTIuNTYgNzYuOCAwIDUuMTItMi41NiAxNS4zNiAwIDE3LjkybDcuNjggMTAuMjRjNS4xMiAyLjU2IDMwLjcyLTIuNTYgMzAuNzItNS4xMiAyLjU2LTUuMTIgMC0xMC4yNCAyLjU2LTE1LjM2LTEyLjggMC0yOC4xNi01LjEyLTI4LjE2LTcuNjggMCAwLTIuNTYtMi41NiAwLTcuNjggMi41Ni01LjEyIDE3LjkyLTUuMTIgMzAuNzItNS4xMiAwLTEwLjI0IDIuNTYtMjMuMDQtMi41Ni0yMy4wNHMtMjMuMDQtMi41Ni0yMy4wNC01LjEyYy0yLjU2LTIuNTYtMi41Ni01LjEyLTIuNTYtMTAuMjRzMi41Ni01LjEyIDUuMTItNS4xMmM3LjY4LTIuNTYgMTcuOTIgMCAyMy4wNCAyLjU2IDE3LjkyIDEwLjI0IDIzLjA0IDE3LjkyIDIwLjQ4IDQ2LjA4LTIuNTYgMzAuNzIgNS4xMiAzOC40LTE1LjM2IDUxLjItNS4xMiAyLjU2LTcuNjggNS4xMi0xNy45MiA1LjEyLTUuMTIgMC0xNy45Mi01LjEyLTIzLjA0LTIuNTYgMCAwLTIuNTYgNS4xMi01LjEyIDUuMTItMi41NiAyLjU2IDAgMi41NiAwIDIuNTZ2Mi41NmM1LjEyIDIuNTYgNy42OCAwIDEyLjggMi41NmwxNy45MiAxMi44YzUuMTIgNy42OCA1LjEyIDI4LjE2IDIuNTYgMzUuODQtMi41NiA1LjEyLTEwLjI0IDcuNjgtMTIuOCAxMi44IDAgMi41NiAwIDUuMTItMi41NiA3LjY4IDIuNTYgMi41NiAwIDIuNTYgMi41NiA1LjEyczUuMTIgMCA3LjY4IDIuNTZsMTUuMzYgNy42OHYyLjU2aDEyLjhzNS4xMiA1LjEyIDcuNjggNS4xMmMxMC4yNCAyLjU2IDE1LjM2IDAgMTcuOTIgNy42OCAyLjU2IDcuNjggMCAyMC40OC01LjEyIDIzLjA0LTE1LjM2IDcuNjgtMzUuODQtMTAuMjQtNDYuMDgtMTcuOTItNS4xMi0yLjU2LTcuNjgtMi41Ni0xMi44LTUuMTItNy42OC01LjEyLTEyLjgtMTUuMzYtMjguMTYtMTAuMjQtMi41NiAwLTcuNjggNy42OC0xMC4yNCAxMC4yNC0yLjU2IDIuNTYtNS4xMiAyLjU2LTEwLjI0IDIuNTYtMTAuMjQgNS4xMi0yMy4wNCAyMC40OC00My41MiAxMi44bC0yLjU2LTUuMTJjLTUuMTItNy42OC0yLjU2LTcuNjgtMi41Ni0xNy45MiA1LjEyIDAgMTIuOCAwIDE3LjkyLTIuNTYgMTUuMzYtMi41NiAyOC4xNi03LjY4IDMzLjI4LTEyLjggNS4xMi03LjY4LTIuNTYtMTUuMzYtMTAuMjQtMjguMTYtMi41Ni0yLjU2IDAtNS4xMi0yLjU2LTcuNjgtNS4xMi01LjEyLTEwLjI0LTUuMTItMTUuMzYtMTAuMjQgMCAwIDAtMi41Ni0yLjU2LTIuNTYtNS4xMiAwLTUuMTItMTIuOCA3LjY4LTEyLjggNy42OCAwIDQwLjk2IDM1Ljg0IDQzLjUyIDM1Ljg0IDIuNTYgMi41NiA1LjEyIDAgNy42OCAwIDIuNTYgMCAyLjU2LTIuNTYgNS4xMi01LjEyczcuNjgtNy42OCA3LjY4LTEwLjI0YzIuNTYtNS4xMiAwLTEyLjggMC0xMi44LTIuNTYtMi41Ni0yLjU2LTcuNjgtNy42OC03LjY4LTcuNjgtMi41Ni0yMy4wNCAyLjU2LTI1LjYgMC0yLjU2LTIuNTYgMC0xMi44IDIuNTYtMTUuMzZsMTAuMjQtNS4xMnMwLTIuNTYtMi41Ni01LjEyIDAtMi41Ni0yLjU2LTUuMTJjLTEwLjI0LTcuNjgtMjguMTYgMi41Ni00MC45Ni0yLjU2LTE1LjM2LTcuNjgtMTIuOC0xMi44LTEyLjgtMzUuODR2LTEwLjI0cy0yLjU2LTE3LjkyIDIuNTYtMjMuMDRjNS4xMi01LjEyIDEwLjI0LTIuNTYgMTUuMzYgMTIuOCA3LjY4IDAgMjAuNDggMCAyMy4wNCAyLjU2IDIuNTYgMCA1LjEyIDUuMTIgMi41NiA3LjY4LTIuNTYgMi41Ni03LjY4IDUuMTItMTUuMzYgNy42OC0yLjU2IDAtNy42OCAyLjU2LTEwLjI0IDIuNTYgMCAxMi44IDAgMTcuOTIgMi41NiAxNy45MiAyLjU2IDIuNTYgMjguMTYtMi41NiAzMC43Mi0xMi44IDIuNTYtMTAuMjQgMC0yOC4xNiAwLTM4LjQgMC0xMC4yNC01LjEyLTUxLjItMi41Ni01OC44OCAwIDcuNjggMi41NiA3LjY4IDUuMTIgNy42OHpNNjQwIDI5NC40YzUuMTItMi41NiA1LjEyLTIuNTYgMTAuMjQgMi41NnMyLjU2IDMzLjI4IDIuNTYgNDYuMDhjMi41NiAwIDIuNTYgNS4xMiA1LjEyIDUuMTIgMi41NiAyLjU2IDcuNjggMCAxMi44IDAgMi41NiAwIDUuMTIgNS4xMiA3LjY4IDcuNjggMCAyLjU2IDIuNTYgNS4xMiAwIDcuNjgtMi41NiAyLjU2LTUuMTIgNS4xMi03LjY4IDUuMTItMTIuOCAyLjU2LTE3LjkyIDAtMjAuNDggMTIuOC0yLjU2IDcuNjgtMi41NiAxNy45MiAwIDIzLjA0IDAgMi41NiAwIDIuNTYgNS4xMiAyLjU2IDIuNTYgMCAxMC4yNC0yLjU2IDEwLjI0LTIuNTZsMi41NiAyLjU2czAgNy42OC0yLjU2IDEyLjgtMTIuOCA1LjEyLTEyLjggMTIuOGMwIDUuMTIgMi41NiAxMi44IDIuNTYgMTUuMzZWNDY4LjQ4YzIuNTYgMTIuOCAwIDQ4LjY0LTUuMTIgNTYuMzIgMCAwLTIuNTYgNS4xMi01LjEyIDUuMTJsLTUuMTIgMi41NmMtNS4xMiAyLjU2LTE1LjM2IDUuMTItMjMuMDQgMi41Ni03LjY4LTIuNTYtMjAuNDgtMTcuOTItMTUuMzYtMzUuODRsMi41Ni0yLjU2aDUuMTJjNS4xMiAyLjU2IDEwLjI0IDE1LjM2IDEyLjggMTUuMzZoNS4xMmMxMC4yNC01LjEyIDUuMTItNDguNjQgNy42OC02Ni41Ni0yLjU2IDAtMi41Ni01LjEyLTUuMTItNS4xMi0xNy45Mi03LjY4LTIzLjA0IDI1LjYtNDMuNTIgNS4xMi0yLjU2LTIuNTYgMC03LjY4IDIuNTYtMTIuOCAyLjU2LTcuNjggMTAuMjQtNS4xMiAxNy45Mi03LjY4IDAgMCA1LjEyLTUuMTIgNy42OC01LjEyIDUuMTItMi41NiA3LjY4IDAgMTIuOC0yLjU2IDIuNTYtMi41NiAxMC4yNC0xNS4zNiAxMC4yNC0xNy45MiAyLjU2LTEyLjgtMi41Ni0zOC40LTEwLjI0LTQwLjk2LTUuMTItMi41Ni03LjY4IDIuNTYtMTIuOCAyLjU2LTUuMTIgMi41Ni0xNS4zNiA1LjEyLTIwLjQ4IDIuNTZsLTIuNTYtMi41NnMwLTEwLjI0IDIuNTYtMTIuOGwyLjU2LTIuNTYgNS4xMi0yLjU2YzcuNjgtMi41NiAxNS4zNiAyLjU2IDIzLjA0IDAgMi41NiAwIDcuNjgtNS4xMiA3LjY4LTUuMTIgMC0xMC4yNC0yLjU2LTQwLjk2IDIuNTYtNDYuMDggMCAyLjU2IDAgMi41NiA1LjEyIDIuNTZ6TTExOTguMDggNDM1LjJjMi41Ni0yLjU2IDEyLjgtMTcuOTIgMTUuMzYtMjMuMDRsMi41Ni01LjEyYzAtNy42OC0yLjU2LTE1LjM2LTIuNTYtMTcuOTIgMCAwIDIuNTYtMi41NiAwLTcuNjgtMi41Ni0yLjU2LTcuNjggMi41Ni0xMi44IDUuMTItMi41NiAwLTIuNTYgNS4xMi0yLjU2IDUuMTItMTAuMjQgMTAuMjQtMTIuOCAxMC4yNC0yNS42IDIuNTYtMi41Ni0yLjU2LTIuNTYtNS4xMiAwLTEwLjI0czIwLjQ4LTE1LjM2IDMwLjcyLTIwLjQ4di0xNS4zNmwtNS4xMi0yLjU2Yy0xNy45Mi0yNS42LTEwLjI0LTMwLjcyLTEwLjI0LTMwLjcyczEwLjI0LTcuNjggMTcuOTItMi41NmM3LjY4IDIuNTYgMTIuOCA0My41MiAyMy4wNCAxNy45MiAwLTIuNTYgMi41Ni0xMC4yNCAyLjU2LTEyLjggMC0yLjU2LTUuMTItNS4xMi01LjEyLTcuNjh2LTcuNjhsMi41Ni0yLjU2YzIuNTYgMCA1LjEyLTIuNTYgNS4xMi0yLjU2czUuMTIgMCAxMC4yNCAyLjU2YzIuNTYgMi41NiA3LjY4IDE3LjkyIDcuNjggMjMuMDQgMCA1LjEyLTIuNTYgMTUuMzYtMi41NiAxNy45MiAwIDIuNTYtNS4xMiA1LjEyLTUuMTIgNy42OC0yLjU2IDUuMTIgMCA3LjY4LTIuNTYgMTAuMjQgMCAyLjU2LTUuMTIgNS4xMi01LjEyIDcuNjgtMi41NiAxNS4zNiA3LjY4IDM1Ljg0IDEwLjI0IDUxLjIgNS4xMiA0OC42NC0yLjU2IDEwNC45Ni0yNS42IDEyNS40NGgtNS4xMkwxMjAzLjIgNTM3LjZjLTIuNTYtMi41Ni01LjEyLTUuMTItNS4xMi03LjY4LTIuNTYtMi41Ni0yLjU2LTcuNjgtNS4xMi0xMC4yNCAwLTIuNTYtNy42OC01LjEyLTcuNjgtNy42OC03LjY4LTE3LjkyIDcuNjgtMTcuOTIgMTUuMzYtMTIuOCAyLjU2IDAgNS4xMiA3LjY4IDcuNjggNy42OCAyLjU2IDAgNS4xMi0yLjU2IDUuMTItMi41NiAxMi44LTcuNjggNS4xMi0xNS4zNiA1LjEyLTMwLjcyIDAtMi41NiA1LjEyLTEwLjI0IDUuMTItMTIuOCAyLjU2LTEyLjggMC0yMy4wNC0yLjU2LTMzLjI4IDAgMC01LjEyIDAtNS4xMiAyLjU2LTIuNTYgMi41Ni0yLjU2IDcuNjgtMi41NiAxMC4yNC0yLjU2IDUuMTItNy42OCA3LjY4LTEwLjI0IDEyLjgtNS4xMiA1LjEyLTEwLjI0IDEyLjgtMTUuMzYgMTUuMzYtMi41NiAwLTEwLjI0LTIuNTYtNy42OC0yLjU2IDAgMC01LjEyIDIuNTYtNy42OC03LjY4LTIuNTYtNy42OCAxMC4yNC0xMC4yNCAyMC40OC0yMC40OGw1LjEyLTIuNTZ6XFxcIiBwLWlkPVxcXCIyODU2XFxcIiAvPjxwYXRoIGQ9XFxcIk0xMzU5LjM2IDI5OS41MmMxMi44LTIuNTYgMTcuOTIgNy42OCAxNS4zNiAxNy45Mi01LjEyIDE3LjkyLTMzLjI4IDE1LjM2LTUxLjIgMTcuOTItMi41NiAwLTEwLjI0IDUuMTItMTIuOCA1LjEyLTcuNjggMC0xMi44LTIuNTYtMjAuNDggMi41NmwtNy42OCA3LjY4LTcuNjggNy42OGMtMi41NiAyLjU2LTIuNTYgNy42OC0yLjU2IDcuNjhzMi41NiAxNS4zNiAyLjU2IDIzLjA0YzAgNS4xMiA3LjY4IDEyLjggNy42OCAxNy45MiAyLjU2IDMwLjcyLTEwLjI0IDExNy43Ni0yMC40OCAxMjgtNy42OCAxMC4yNC0xMi44IDcuNjgtMTcuOTIgNS4xMi01LjEyLTIuNTYtMi41Ni0yLjU2LTUuMTItNy42OC0yLjU2LTUuMTItMi41Ni0xMC4yNC0yLjU2LTEwLjI0IDIuNTYtMi41NiAwLTUuMTIgMi41Ni03LjY4IDIuNTYtNS4xMiA3LjY4LTcuNjggMTAuMjQtMTIuOHYtNS4xMmMwLTUuMTIgNS4xMi0xMi44IDcuNjgtMTcuOTIgNS4xMi0yNS42IDEwLjI0LTQ2LjA4IDcuNjgtNzQuMjQtMi41Ni0yMy4wNC0xNy45Mi0zOC40LTEyLjgtNjEuNDQgMC0yLjU2IDUuMTItMTAuMjQgNS4xMi0xMi44IDcuNjgtMTIuOCAzOC40LTIuNTYgNTMuNzYtNy42OGw1LjEyLTUuMTJjNS4xMi0yLjU2IDEwLjI0IDAgMTUuMzYtMi41NiA3LjY4LTIuNTYgMTIuOC03LjY4IDIwLjQ4LTEyLjggNS4xMiAwIDcuNjgtMi41NiA3LjY4LTIuNTZ6XFxcIiBwLWlkPVxcXCIyODU3XFxcIiAvPjxwYXRoIGQ9XFxcIk0xMzY0LjQ4IDM1MC43MnM1LjEyIDAgNy42OCAyLjU2YzEwLjI0IDUuMTIgMCAxNy45Mi0yLjU2IDI1LjYtMi41NiA1LjEyLTUuMTIgMTUuMzYtNS4xMiAxNy45MnY3LjY4YzAgMi41Ni0yLjU2IDcuNjgtNS4xMiA3LjY4cy01LjEyLTIuNTYtNS4xMi0yLjU2Yy01LjEyLTEwLjI0LTUuMTItNDAuOTYgMC01MS4yIDAtMi41NiAxMC4yNC03LjY4IDEwLjI0LTcuNjh6TTEzMTguNCAzNjAuOTZzNS4xMiAwIDUuMTIgMi41NmMyLjU2IDIuNTYgMCA3LjY4IDIuNTYgMTAuMjQgMi41NiAxNS4zNiAyLjU2IDM4LjQtMi41NiA1MS4yLTIuNTYgNS4xMi03LjY4IDEyLjgtNy42OCAxNy45MnY3LjY4Yy0yLjU2IDUuMTItNy42OCAxNy45Mi0xMC4yNCAyMy4wNC0yLjU2IDE3LjkyIDIuNTYgMzAuNzIgMjAuNDggMjUuNiAyLjU2IDAgNS4xMi01LjEyIDUuMTItNy42OC0yLjU2LTE1LjM2LTEwLjI0LTMzLjI4IDUuMTItMjUuNiAxMi44IDcuNjggMTUuMzYgMjMuMDQgMTcuOTIgNDMuNTIgMCAyLjU2LTIuNTYgNS4xMi01LjEyIDUuMTJzLTUuMTIgMC01LjEyLTIuNTZsLTIuNTYtNS4xMmMtMi41Ni01LjEyLTUuMTItMi41Ni01LjEyIDBsLTIuNTYgNS4xMnMtMTIuOCAxMi44LTM1Ljg0IDIuNTZjLTcuNjgtNS4xMi0xMi44LTMzLjI4LTcuNjgtNDguNjQgMC01LjEyIDUuMTItMTAuMjQgNy42OC0xMi44IDIuNTYtMTAuMjQgMi41Ni0xNy45MiA1LjEyLTI1LjYgMC0yLjU2IDUuMTItNy42OCA1LjEyLTEyLjggMi41Ni0xNy45Mi01LjEyLTI1LjYtNy42OC0zOC40IDAtMTAuMjQgMC0xNS4zNiA1LjEyLTIwLjQ4IDIuNTYtMi41NiAyLjU2LTIuNTYgNS4xMi0yLjU2bDcuNjggNy42OHpNMTM1Ni44IDQxOS44NHM1LjEyIDAgNS4xMiAyLjU2YzUuMTIgNS4xMiA1LjEyIDI4LjE2IDcuNjggMzguNCA1LjEyIDIwLjQ4IDE1LjM2IDQwLjk2IDI1LjYgNTMuNzYgMi41NiAyLjU2IDIuNTYgNS4xMiA1LjEyIDcuNjggNy42OCAyLjU2IDE1LjM2IDAgMTcuOTIgMTAuMjQgNS4xMiAyMC40OC0xNy45MiAxNy45Mi0yOC4xNiAxMi44LTUuMTItMi41Ni0xNy45Mi0xNy45Mi0yMC40OC0yMy4wNC01LjEyLTcuNjgtNS4xMi0xNy45Mi03LjY4LTI4LjE2IDIuNTYtNy42OC01LjEyLTE1LjM2LTUuMTItMjAuNDgtMi41Ni0xMC4yNC01LjEyLTQzLjUyLTIuNTYtNTEuMmwyLjU2LTIuNTZ6TTEzNDYuNTYgNTY4LjMyYzcuNjggMCAxNy45MiA1LjEyIDIzLjA0IDcuNjggMjMuMDQgMTIuOC0yOC4xNiAxMi44LTQwLjk2IDEwLjI0LTIwLjQ4LTcuNjggMTAuMjQtMTcuOTIgMTcuOTItMTcuOTJ6TTk5My4yOCA1NjguMzJjMjguMTYtNS4xMiA0Ni4wOCAxMC4yNCA2OS4xMiA3LjY4IDEwLjI0IDAgMzMuMjgtNS4xMiAzMy4yOC0yLjU2IDIuNTYgMi41NiAyLjU2IDcuNjggMi41NiA3LjY4bC0yLjU2IDIuNTZjLTEwLjI0IDUuMTItMTA3LjUyIDAtMTEwLjA4LTIuNTYtNS4xMi01LjEyIDIuNTYtMTAuMjQgNy42OC0xMi44ek0xMjkyLjggNTY4LjMyYzcuNjggMCAxNS4zNiAyLjU2IDE3LjkyIDUuMTIgMi41NiAyLjU2IDIuNTYgNS4xMi0yLjU2IDcuNjgtMi41NiAyLjU2LTQ2LjA4IDIuNTYtNjkuMTIgMi41Ni0zMy4yOCAyLjU2LTExMC4wOCAyLjU2LTExMi42NC0yLjU2LTIuNTYtNy42OCAyLjU2LTcuNjggNS4xMi03LjY4IDcuNjgtMi41NiAyMC40OC0yLjU2IDMwLjcyLTIuNTYgMjMuMDQgMCA1MS4yIDAgNzEuNjggMi41NiA1LjEyIDAgMTIuOC0yLjU2IDE1LjM2IDBsMi41NiAyLjU2YzE1LjM2IDIuNTYgMjguMTYtNy42OCA0MC45Ni03LjY4ek02MDYuNzIgNTcwLjg4YzE1LjM2LTIuNTYgMzMuMjggMi41NiA0My41MiAyLjU2IDc2LjggNy42OCAxNTYuMTYtNS4xMiAyMzAuNCAyLjU2IDIzLjA0IDIuNTYgNjYuNTYgMi41NiA2Ni41NiAyLjU2czIuNTYgMi41NiAyLjU2IDUuMTJjLTIuNTYgMi41Ni0yNS42IDAtMzguNCAyLjU2LTc0LjI0IDcuNjgtMTU2LjE2LTUuMTItMjMyLjk2IDIuNTYtMTAuMjQgMC0yNS42IDIuNTYtMzUuODQgMi41Ni0yLjU2IDAtNy42OC0yLjU2LTEyLjgtMi41Ni0yLjU2IDAtMTAuMjQgNS4xMi0xMi44IDUuMTItMTAuMjQgMi41Ni0yMC40OCAyLjU2LTMwLjcyIDAgMCAwLTIuNTYtMi41Ni0yLjU2LTcuNjggNS4xMi0xMC4yNCAxNS4zNi0xNS4zNiAyMy4wNC0xNS4zNnpNMTM5Ny43NiA1NzAuODhjMTAuMjQtMi41NiAyNS42IDIuNTYgMjguMTYgNy42OCAyLjU2IDIuNTYtMi41NiA3LjY4LTIuNTYgNy42OC0xMi44IDAtMzAuNzIgMC0zMy4yOC0yLjU2IDAtNS4xMiA3LjY4LTEyLjggNy42OC0xMi44ek0xMDU5Ljg0IDc1MC4wOGMyMC40OCAwIDIwLjQ4IDMzLjI4IDIuNTYgMzUuODQtMjMuMDQgMi41Ni0yMy4wNC0zNS44NC0yLjU2LTM1Ljg0ek0xMTY0LjggNjk4Ljg4Yy0yLjU2LTE1LjM2LTEwLjI0LTIzLjA0LTIzLjA0LTIzLjA0LTIwLjQ4IDAtMjUuNiAyMC40OC0yNS42IDQwLjk2IDAgMTcuOTIgNS4xMiA0MC45NiAyNS42IDQwLjk2IDEwLjI0IDAgMjAuNDgtMTAuMjQgMjMuMDQtMjUuNmgxNS4zNmMtMi41NiAxNy45Mi0xMC4yNCA0MC45Ni0zOC40IDQwLjk2LTI1LjYgMC00MC45Ni0yMy4wNC00MC45Ni01My43NiAwLTMzLjI4IDEyLjgtNjEuNDQgNDMuNTItNjEuNDQgMjUuNiAwIDMzLjI4IDIwLjQ4IDM1Ljg0IDM4LjRsLTE1LjM2IDIuNTZ6TTEyMDMuMiA3MTYuOGMwLTE1LjM2IDUuMTItNDAuOTYgMjguMTYtNDAuOTYgMjMuMDQgMCAyOC4xNiAyOC4xNiAyOC4xNiA0MC45NiAwIDE1LjM2LTUuMTIgNDAuOTYtMjguMTYgNDAuOTYtMjUuNiAyLjU2LTI4LjE2LTI1LjYtMjguMTYtNDAuOTZ6IG0tMTcuOTIgMGMwIDI4LjE2IDEyLjggNTYuMzIgNDMuNTIgNTYuMzJzNDMuNTItMjguMTYgNDMuNTItNTYuMzItMTIuOC01Ni4zMi00My41Mi01Ni4zMmMtMjguMTYgMC00My41MiAyOC4xNi00My41MiA1Ni4zMnpNMTI4Ny42OCA2NjMuMDRoMTUuMzZ2MTUuMzZjMi41Ni01LjEyIDEwLjI0LTE3LjkyIDI4LjE2LTE3LjkyIDE3LjkyIDAgMjMuMDQgMTIuOCAyNS42IDE3LjkyIDcuNjgtMTAuMjQgMTUuMzYtMTcuOTIgMjguMTYtMTcuOTIgMTAuMjQgMCAyOC4xNiA1LjEyIDI4LjE2IDM1Ljg0djc0LjI0aC0xNS4zNnYtNjkuMTJjMC0xNS4zNi01LjEyLTI1LjYtMTcuOTItMjUuNi0xMi44IDAtMjMuMDQgMTUuMzYtMjMuMDQgMjguMTZ2NjYuNTZoLTE1LjM2di03NC4yNGMwLTEwLjI0LTIuNTYtMjAuNDgtMTUuMzYtMjAuNDgtMTAuMjQgMC0yNS42IDcuNjgtMjUuNiAzNS44NHY1OC44OGgtMTUuMzZsMi41Ni0xMDcuNTJ6TTYyMi4wOCA2NDBzNy42OC0yLjU2IDEyLjggMCA1LjEyIDIuNTYgNS4xMiA1LjEyIDAgNS4xMi01LjEyIDEwLjI0Yy0yLjU2IDIuNTYtMi41NiAyLjU2LTUuMTIgMi41NmgtMi41NmMtMi41NiAwLTIuNTYgMC01LjEyIDUuMTJsLTIuNTYgNS4xMnYxMC4yNHMyLjU2IDcuNjggNS4xMiAxMi44IDAgMTAuMjQtNy42OCA3LjY4Yy01LjEyLTIuNTYtMTAuMjQtNS4xMi0xMi44LTEwLjI0LTIuNTYtNy42OCAwLTE1LjM2IDIuNTYtMjAuNDggMCAwIDIuNTYgMCAyLjU2LTUuMTIgMCAwIDIuNTYtMi41NiAwLTcuNjgtNS4xMi0yLjU2IDcuNjgtMTAuMjQgMTIuOC0xNS4zNnpNNjQyLjU2IDY0NS4xMnMwIDUuMTIgMi41NiAxMC4yNCA1LjEyIDcuNjggNy42OCAxMC4yNGMyLjU2IDIuNTYgMi41NiAyLjU2IDcuNjggMi41NiA1LjEyIDAgNS4xMi01LjEyIDUuMTItNy42OCAwLTIuNTYgMC01LjEyLTIuNTYtMTAuMjQtNS4xMi01LjEyLTEwLjI0LTcuNjgtMTUuMzYtNy42OC01LjEyLTIuNTYtNS4xMiAyLjU2LTUuMTIgMi41NnpNNjI5Ljc2IDY5Ni4zMmgtNS4xMnMtMi41NiAyLjU2IDAgNS4xMiAyLjU2IDUuMTIgNy42OCA3LjY4YzIuNTYgMi41NiAyLjU2IDIuNTYgNS4xMiAyLjU2czUuMTIgMCA3LjY4IDIuNTZjMi41NiAyLjU2IDcuNjggNS4xMiA3LjY4IDcuNjhWNzM3LjI4czAgMi41Ni01LjEyIDUuMTItMi41NiAyLjU2LTcuNjggNS4xMmMtNS4xMiAyLjU2LTIuNTYgMi41Ni0yLjU2IDIuNTZoLTEwLjI0cy0yLjU2LTIuNTYtNy42OCAwYzAgMC01LjEyIDIuNTYtNS4xMi0yLjU2czAtMTUuMzYtMTAuMjQtMTUuMzZjMCAwLTUuMTIgMi41Ni0yLjU2IDEyLjggMCAwIDIuNTYgNy42OCA1LjEyIDEwLjI0IDIuNTYgMi41NiAyLjU2IDIuNTYgNS4xMiAxMC4yNCAyLjU2IDUuMTIgNS4xMiA1LjEyIDEyLjggNS4xMmgxMi44czAtMi41NiA3LjY4IDBjMCAwIDUuMTItMi41NiA3LjY4LTcuNjggMCAwIDcuNjgtMi41NiAxMC4yNC0xMC4yNCAwIDAgMC0yLjU2IDIuNTYtNy42OCAwIDAgMC0yLjU2LTIuNTYtNy42OHYtNS4xMmMwLTIuNTYgMC03LjY4LTIuNTYtMTIuOHMtNy42OC03LjY4LTEwLjI0LTEwLjI0aC0yLjU2LTEwLjI0Yy0yLjU2LTEyLjgtNS4xMi0xMi44LTcuNjgtMTIuOHpNNzIxLjkyIDY4OC42NGMtMi41NiAwLTEwLjI0IDcuNjgtMTAuMjQgMTUuMzYtMi41NiA3LjY4IDAgMjMuMDQgMi41NiAyOC4xNiAyLjU2IDUuMTIgNy42OCAxNy45MiAxMC4yNCAyMC40OCA1LjEyIDUuMTIgMTAuMjQgNy42OCAxMC4yNCA3LjY4czIuNTYgMCAyLjU2IDIuNTYgMi41NiA1LjEyIDUuMTIgNS4xMmMwIDIuNTYgMi41NiAyLjU2IDUuMTIgMCA1LjEyIDAgNS4xMiAyLjU2IDEyLjgtMi41Nmw3LjY4LTcuNjhoMi41NmMyLjU2IDAgNy42OC0yLjU2IDEwLjI0LTEwLjI0IDIuNTYtMTAuMjQgMi41Ni0xMi44IDIuNTYtMjAuNDh2LTUuMTJzMC01LjEyLTUuMTItMTAuMjR2LTIuNTYtNS4xMmMyLjU2LTIuNTYgNS4xMi03LjY4IDUuMTItNy42OHYtMTAuMjRjMC03LjY4LTIuNTYtMTIuOC01LjEyLTE1LjM2LTIuNTYtMi41Ni0yLjU2LTcuNjgtMi41Ni0xMC4yNCAwLTIuNTYtNy42OC0xMi44LTEwLjI0LTE3LjkybC01LjEyLTIuNTZzLTUuMTIgMC03LjY4LTIuNTZjLTIuNTYtMi41Ni01LjEyLTIuNTYtNy42OC0yLjU2bC01LjEyIDUuMTItMi41NiAyLjU2cy01LjEyIDAtNS4xMiAyLjU2Yy0yLjU2IDAtMTAuMjQgMTAuMjQtMTAuMjQgMTUuMzZ2MTIuOHMwIDUuMTIgNS4xMiA1LjEyaDIuNTZzNy42OC0xMi44IDEwLjI0LTE3LjkyYzUuMTItMi41NiA3LjY4LTcuNjggMTcuOTItMi41NiAwIDAgMi41NiAyLjU2IDUuMTIgNy42OCAyLjU2IDUuMTIgNS4xMiA1LjEyIDUuMTIgNy42OCAyLjU2IDIuNTYgMi41NiAxMi44IDIuNTYgMTcuOTJ2NS4xMnMyLjU2IDcuNjggMi41NiAxMC4yNGMwIDUuMTItMi41NiAxMC4yNC0yLjU2IDEyLjh2MTAuMjRjMCAyLjU2IDAgNy42OC0yLjU2IDEwLjI0LTIuNTYgMi41Ni01LjEyIDcuNjgtNy42OCAxMC4yNC01LjEyIDUuMTItNS4xMiAyLjU2LTUuMTIgMi41NnMtNS4xMiA1LjEyLTEwLjI0IDBjLTUuMTItMi41Ni0xMC4yNC0xMC4yNC0xNS4zNi0xNy45Mi0yLjU2LTcuNjgtNS4xMi0yMC40OC0yLjU2LTI4LjE2IDAtNy42OCAyLjU2LTE1LjM2IDIuNTYtMTcuOTJoLTcuNjh6TTgzMiA2MzQuODhzLTcuNjggMi41Ni03LjY4IDUuMTJ2MTIuOGMwIDUuMTIgMi41NiAxMC4yNCAyLjU2IDEwLjI0IDAgMi41NiAyLjU2IDIuNTYgMi41NiAyLjU2djE1LjM2cy01LjEyIDEwLjI0LTUuMTIgMTIuOHYyOC4xNmMwIDUuMTIgMCAxMi44LTIuNTYgMTcuOTItMi41NiA1LjEyLTIuNTYgMTAuMjQgMCAxNy45MiAyLjU2IDcuNjggMi41NiAxMC4yNCAyLjU2IDEwLjI0IDIuNTYgMi41NiA1LjEyIDUuMTIgNy42OCAwIDIuNTYtNS4xMiAyLjU2LTUuMTIgMi41Ni0xMC4yNHMyLjU2LTIzLjA0IDAtMjUuNnYtMjAuNDhsMi41Ni01LjEyczUuMTItMi41NiAwLTEwLjI0Yy0yLjU2LTcuNjgtNS4xMi0xMi44LTUuMTItMTIuOHYtMTAuMjRjMC01LjEyIDAtNy42OCAyLjU2LTEyLjggMC0yLjU2IDIuNTYtMTIuOCAwLTE3LjkyIDcuNjgtMi41NiAyLjU2LTEwLjI0LTIuNTYtNy42OHpNODc4LjA4IDYzNC44OHMtNS4xMiA1LjEyLTUuMTIgMTAuMjQgMCA3LjY4IDIuNTYgMTAuMjRjMCAyLjU2LTIuNTYgNy42OCAwIDEyLjggMCA1LjEyIDUuMTIgMTAuMjQgNS4xMiAxMC4yNHYyLjU2czAgNS4xMi0yLjU2IDcuNjhjLTIuNTYgMi41Ni0yLjU2IDUuMTItNS4xMiA1LjEycy0xMi44IDAtMTUuMzYgMi41NmMtNS4xMiAwLTUuMTIgNy42OCAwIDEwLjI0IDUuMTIgMi41NiAxNS4zNiAyLjU2IDE1LjM2IDIuNTZzNS4xMiAyLjU2IDUuMTIgNy42OHY1My43NnMwIDcuNjggNS4xMiA3LjY4IDEwLjI0IDAgMTAuMjQtNy42OFY3NDIuNHYtMTIuOGwyLjU2LTMwLjcyLTcuNjgtMTIuOCAyLjU2LTUuMTJjMi41Ni0yLjU2IDUuMTItMi41NiA1LjEyLTEyLjggMi41Ni0xMC4yNCAyLjU2LTEyLjggMi41Ni0xMi44cy03LjY4LTIwLjQ4LTIwLjQ4LTIwLjQ4ek05NTQuODggNjM3LjQ0cy0yLjU2LTUuMTItNy42OCAwYy01LjEyIDUuMTItNy42OCAxMC4yNC03LjY4IDEwLjI0cy01LjEyIDUuMTIgMi41NiAxMi44bDIuNTYgMi41NnYyMC40OGMwIDIuNTYgMi41NiA1LjEyIDIuNTYgMTAuMjQgMCAyLjU2IDAgMTAuMjQtMi41NiAxNS4zNiAwIDcuNjgtMi41NiAyMC40OC0yLjU2IDI1LjYgMCA1LjEyIDIuNTYgMTAuMjQgMi41NiAxNS4zNiAwIDUuMTIgMi41NiA3LjY4IDUuMTIgMTAuMjQgMi41NiAyLjU2IDE1LjM2IDEwLjI0IDE3LjkyIDEyLjggMi41NiAyLjU2IDcuNjggNS4xMiAxNy45Mi0yLjU2IDcuNjgtNS4xMiAxNS4zNi0xMi44IDE3LjkyLTIwLjQ4bDIuNTYtNy42OHYtMzAuNzJjMC01LjEyLTcuNjgtMTIuOC0xMi44LTIuNTZ2MjMuMDRjMCA3LjY4LTIuNTYgMTAuMjQtNy42OCAxNS4zNi01LjEyIDUuMTItMTIuOCA3LjY4LTE3LjkyLTIuNTYtNy42OC03LjY4LTcuNjgtMTAuMjQtNy42OC0yMy4wNHYtNDAuOTZjMC03LjY4IDUuMTItMjUuNiAyLjU2LTM1Ljg0bC03LjY4LTcuNjh6XFxcIiBwLWlkPVxcXCIyODU4XFxcIiAvPjxwYXRoIGQ9XFxcIk05OTMuMjggNjM3LjQ0cy01LjEyIDIuNTYtNS4xMiAxNy45MnYyOC4xNmMwIDcuNjggMCAxMi44IDUuMTIgMTIuOHM3LjY4LTUuMTIgMTAuMjQtMTUuMzZjMi41Ni0xMC4yNCAyLjU2LTIwLjQ4IDIuNTYtMzAuNzIgMC0xMC4yNCAwLTEwLjI0LTIuNTYtMTIuOC01LjEyLTIuNTYtNy42OCAwLTEwLjI0IDB6XFxcIiBwLWlkPVxcXCIyODU5XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnL3NvaHUuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaXRleWVcIixcbiAgXCJ1c2VcIjogXCJpdGV5ZS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMjA0OCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQ4IDEwMjRcXFwiIGlkPVxcXCJpdGV5ZVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNMTk0NS42IDI1LjZjNDMuNTIgMCA3Ni44IDMzLjI4IDc2LjggNzYuOHY4MTkuMmMwIDQzLjUyLTMzLjI4IDc2LjgtNzYuOCA3Ni44SDEwMi40Yy00My41MiAwLTc2LjgtMzMuMjgtNzYuOC03Ni44VjEwMi40YzAtNDMuNTIgMzMuMjgtNzYuOCA3Ni44LTc2LjhoMTg0My4ybTAtMjUuNkgxMDIuNEM0Ni4wOCAwIDAgNDYuMDggMCAxMDIuNHY4MTkuMmMwIDU2LjMyIDQ2LjA4IDEwMi40IDEwMi40IDEwMi40aDE4NDMuMmM1Ni4zMiAwIDEwMi40LTQ2LjA4IDEwMi40LTEwMi40VjEwMi40YzAtNTYuMzItNDYuMDgtMTAyLjQtMTAyLjQtMTAyLjR6XFxcIiBwLWlkPVxcXCIyMTg1XFxcIiAvPjxwYXRoIGQ9XFxcIk0xNjI4LjE2IDU3My40NG0tNDYuMDggMGE0Ni4wOCA0Ni4wOCAwIDEgMCA5Mi4xNiAwIDQ2LjA4IDQ2LjA4IDAgMSAwLTkyLjE2IDBaXFxcIiBwLWlkPVxcXCIyMTg2XFxcIiAvPjxwYXRoIGQ9XFxcIk05NzIuOCA1NzMuNDRtLTQ2LjA4IDBhNDYuMDggNDYuMDggMCAxIDAgOTIuMTYgMCA0Ni4wOCA0Ni4wOCAwIDEgMC05Mi4xNiAwWlxcXCIgcC1pZD1cXFwiMjE4N1xcXCIgLz48cGF0aCBkPVxcXCJNMzk2LjggMzk2LjhWNzYwLjMyaDg0LjQ4VjM5Ni44ek02OTMuNzYgMzk2LjhoLTE3MS41MnY4NC40OGg3OS4zNnYyNzkuMDRoODcuMDRWNDgxLjI4SDc2OHYtODQuNDh6TTE2NTYuMzIgNjU1LjM2Yy0xMi44IDcuNjgtMjguMTYgMTIuOC00My41MiAxMi44LTQ4LjY0IDAtODcuMDQtMzguNC04Ny4wNC04Ny4wNHMzOC40LTg3LjA0IDg3LjA0LTg3LjA0IDg3LjA0IDM4LjQgODcuMDQgODcuMDRIMTc5MmMwLTk5Ljg0LTc5LjM2LTE3OS4yLTE3OS4yLTE3OS4ycy0xNzkuMiA3OS4zNi0xNzkuMiAxNzkuMiA3OS4zNiAxNzkuMiAxNzkuMiAxNzkuMmMzMy4yOCAwIDY0LTEwLjI0IDkyLjE2LTI1LjZsLTQ4LjY0LTc5LjM2ek0xMDAwLjk2IDY1NS4zNmMtMTIuOCA3LjY4LTI4LjE2IDEyLjgtNDMuNTIgMTIuOC00OC42NCAwLTg3LjA0LTM4LjQtODcuMDQtODcuMDRzMzguNC04Ny4wNCA4Ny4wNC04Ny4wNCA4Ny4wNCAzOC40IDg3LjA0IDg3LjA0aDkyLjE2YzAtOTkuODQtNzkuMzYtMTc5LjItMTc5LjItMTc5LjJzLTE3OS4yIDc5LjM2LTE3OS4yIDE3OS4yIDc5LjM2IDE3OS4yIDE3OS4yIDE3OS4yYzMzLjI4IDAgNjQtMTAuMjQgOTIuMTYtMjUuNmwtNDguNjQtNzkuMzZ6TTEzNTYuOCAzOTkuMzZsLTc0LjI0IDEyMi44OC03NC4yNC0xMjIuODhoLTk3LjI4bDEyOCAyMTcuNnYxNDMuMzZoODQuNDh2LTE0My4zNmwxMzAuNTYtMjE3LjZIMTM1Ni44ek0zNzguODggMzgxLjQ0bDcuNjgtNy42OGMyLjU2LTIuNTYgNS4xMi0yLjU2IDcuNjgtNS4xMi0yLjU2IDAtNS4xMiAyLjU2LTcuNjggNS4xMiAyLjU2LTIuNTYgNS4xMi0yLjU2IDcuNjgtNS4xMmwtNy42OC0yMC40OGMtMjAuNDggNy42OC0zNS44NCAyNS42LTQwLjk2IDQ4LjY0bDIwLjQ4IDUuMTJjMC01LjEyIDIuNTYtMTAuMjQgNS4xMi0xMi44LTIuNTYgMi41Ni0yLjU2IDUuMTItNS4xMiA3LjY4IDAtMi41NiAyLjU2LTUuMTIgNS4xMi03LjY4bDcuNjgtNy42OHogbTcuNjgtNS4xMmMtMi41NiAyLjU2LTUuMTIgMi41Ni01LjEyIDUuMTIgMC0yLjU2IDIuNTYtNS4xMiA1LjEyLTUuMTJ6IG0tNy42OCA1LjEyYy0yLjU2IDIuNTYtMi41NiA1LjEyLTUuMTIgNy42OCAwLTIuNTYgMi41Ni01LjEyIDUuMTItNy42OHpNMzU1Ljg0IDM0NS42YzIuNTYtMi41NiA1LjEyLTIuNTYgNy42OC01LjEyIDUuMTItMi41NiAxMC4yNC03LjY4IDE1LjM2LTcuNjhsLTcuNjgtMjMuMDRjLTM1Ljg0IDEyLjgtNjEuNDQgNDMuNTItNjkuMTIgNzkuMzZsMjMuMDQgNS4xMmMwLTIuNTYgMi41Ni03LjY4IDIuNTYtMTAuMjQgNS4xMi0xMi44IDEwLjI0LTIzLjA0IDIwLjQ4LTMwLjcybDcuNjgtNy42OHogbTAgMGMyLjU2LTIuNTYgNS4xMi0yLjU2IDUuMTItNS4xMiAwIDIuNTYtMi41NiA1LjEyLTUuMTIgNS4xMnogbTcuNjgtNS4xMmwxNS4zNi03LjY4LTE1LjM2IDcuNjh6XFxcIiBwLWlkPVxcXCIyMTg4XFxcIiAvPjxwYXRoIGQ9XFxcIk0zNjYuMDggMjg5LjI4bC0xMC4yNC0yNS42Yy01MS4yIDIwLjQ4LTg3LjA0IDYxLjQ0LTk5Ljg0IDExNS4ybDI4LjE2IDUuMTJjMTAuMjQtNDAuOTYgNDAuOTYtNzYuOCA4MS45Mi05NC43MnpcXFwiIHAtaWQ9XFxcIjIxODlcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9zdmcvaXRleWUuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9