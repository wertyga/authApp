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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV;
var dbName = 'AuthApp';

exports.default = {
    PORT: env === 'test' ? 3001 : 3000,
    mongoose: {
        uri: env === 'test' ? 'mongodb://localhost/' + dbName + '-test' : 'mongodb://localhost/' + dbName,
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    },
    session: {
        secret: "nodeJSForever",
        key: "sid",
        cookie: {
            secure: false,
            sameSite: true,
            httpOnly: true,
            maxAge: 3600000
        },
        fieldToSaveSession: 'authUserId'
    },
    hash: {
        secret: 'boooom!',
        salt: 10
    },
    uploads: {
        directory: 'temp',
        destination: _path2.default.join(__dirname, '../', 'temp')
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

var _winston = __webpack_require__(30);

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLogger(module) {
    var pathName = __filename;

    return new _winston2.default.Logger({
        transports: [new _winston2.default.transports.Console({
            colorize: true,
            level: 'debug',
            label: pathName
        }), new _winston2.default.transports.File({
            filename: _path2.default.join(__dirname, 'node.log'),
            label: pathName
        })]
    });
}

module.exports = getLogger;
/* WEBPACK VAR INJECTION */}.call(exports, "/index.js", "/"))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    var errors = {};

    if (!data.username) errors.username = 'Field can not be blank';
    if (!data.password) errors.password = 'Field can not be blank';

    return {
        isValid: (0, _isEmpty2.default)(errors),
        errors: errors
    };
};

var _isEmpty = __webpack_require__(18);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return React.createElement(
        "div",
        { className: "Loading" },
        "Loading..."
    );
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_NEW_USER = exports.SET_NEW_USER = 'SET_NEW_USER';

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(12);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = _mongoose2.default.Schema({
    username: String,
    password: String
});

exports.default = _mongoose2.default.model('user', UserSchema);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.server = exports.app = undefined;

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(25);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

var _cluster = __webpack_require__(26);

var _cluster2 = _interopRequireDefault(_cluster);

var _http = __webpack_require__(27);

var _http2 = _interopRequireDefault(_http);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _sessionStore = __webpack_require__(28);

var _sessionStore2 = _interopRequireDefault(_sessionStore);

var _expressSession = __webpack_require__(14);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cors = __webpack_require__(33);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(34);

var _reactRouterDom = __webpack_require__(15);

var _reactRedux = __webpack_require__(9);

var _App = __webpack_require__(35);

var _App2 = _interopRequireDefault(_App);

var _configureStore = __webpack_require__(46);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _auth = __webpack_require__(51);

var _auth2 = _interopRequireDefault(_auth);

var _user = __webpack_require__(53);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = __webpack_require__(13)(module);

// ****************** Import routes *************


//***********************************************
var dev = process.env.NODE_ENV === 'development';
var test = process.env.NODE_ENV === 'test';
var prod = process.env.NODE_ENV === 'production';

var app = exports.app = (0, _express2.default)();
var server = exports.server = _http2.default.createServer(app);

if (prod && _cluster2.default.isMaster) {

    var cpuCount = __webpack_require__(55).cpus().length;

    for (var i = 0; i < cpuCount; i += 1) {
        _cluster2.default.schedulingPolicy = _cluster2.default.SCHED_NONE;
        _cluster2.default.fork();
    }

    _cluster2.default.on('exit', function (worker) {
        console.log('Worker ' + worker.id + ' died :(');
        _cluster2.default.fork();
    });
} else {
    //******************************** Run server ***************************

    server.listen(_config2.default.PORT, function () {
        return console.log('Server run on ' + _config2.default.PORT + ' port');
    });

    // *******************************************************************
};

if (prod) {
    var init = function init() {
        gcInterval = setInterval(function () {
            gcDo();
        }, 60000);
    };

    var gcDo = function gcDo() {
        global.gc();
        clearInterval(gcInterval);
        init();
    };

    //************************* GARBAGE magic ***********************************

    // Для работы с garbage collector запустите проект с параметрами:
    // node --nouse-idle-notification --expose-gc app.js
    var gcInterval = void 0;

    ;

    ;

    init();

    //************************************************************
}
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_express2.default.static('public'));
app.use((0, _expressSession2.default)({
    secret: _config2.default.session.secret,
    saveUninitialized: false,
    resave: true,
    key: _config2.default.session.key,
    cookie: _config2.default.session.cookie,
    store: _sessionStore2.default
}));

//******************************** Routes ***************************
app.use('/auth', _auth2.default);
// app.use('/user', user);

app.get('*', function (req, res) {
    var markup = (0, _server.renderToString)(React.createElement(
        _reactRedux.Provider,
        { store: _configureStore2.default },
        React.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: {} },
            React.createElement(_App2.default, null)
        )
    ));

    res.send('\n            <!DOCTYPE html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <title>Title</title>\n                <link rel="stylesheet" href="/css/main.css"/>\n                <script src="/bundle.js" defer></script>\n            </head>\n            <body>\n            \n                <div id="app">' + markup + '</div>\n            \n            </body>\n            </html>\n        ');
});

//******************************** Uncaught Exception ***************************

process.on('uncaughtException', function (err) {
    log.error(new Date().toUTCString() + ' uncaughtException:', err.message);
    log.error(err.stack);
    process.exit(1);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module), __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(29);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var session = __webpack_require__(14);

var mongoStore = __webpack_require__(32)(session);

var sessionStore = new mongoStore({ mongooseConnection: _mongoose2.default.connection });

exports.default = sessionStore;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(12);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = __webpack_require__(13)(module);

_mongoose2.default.set('debug', true);
_mongoose2.default.Promise = __webpack_require__(31);

_mongoose2.default.connect(_config2.default.mongoose.uri, { useMongoClient: true }, function (err, db) {
    if (err) {
        log.error(err.message);
    } else {
        db.once('open', function () {
            return console.log('-- Mongoose connect --');
        });
    };
}), _config2.default.mongoose.options;

exports.default = _mongoose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactRouterDom = __webpack_require__(15);

var _LogInScreen = __webpack_require__(36);

var _LogInScreen2 = _interopRequireDefault(_LogInScreen);

var _SuccessLogin = __webpack_require__(40);

var _SuccessLogin2 = _interopRequireDefault(_SuccessLogin);

var _UpperMenu = __webpack_require__(42);

var _UpperMenu2 = _interopRequireDefault(_UpperMenu);

var _ = __webpack_require__(44);

var _2 = _interopRequireDefault(_);

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'App' },
                React.createElement(_UpperMenu2.default, null),
                React.createElement(
                    _reactRouterDom.Switch,
                    null,
                    React.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _LogInScreen2.default }),
                    React.createElement(_reactRouterDom.Route, { path: '/user/:id', component: _SuccessLogin2.default }),
                    React.createElement(_reactRouterDom.Route, { path: '*', component: _2.default })
                )
            );
        }
    }]);
    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LogInScreen = undefined;

var _defineProperty2 = __webpack_require__(37);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(38);

var _extends4 = _interopRequireDefault(_extends3);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _inputsValidation2 = __webpack_require__(17);

var _inputsValidation3 = _interopRequireDefault(_inputsValidation2);

var _Loading = __webpack_require__(19);

var _Loading2 = _interopRequireDefault(_Loading);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogInScreen = exports.LogInScreen = function (_React$Component) {
    (0, _inherits3.default)(LogInScreen, _React$Component);

    function LogInScreen() {
        (0, _classCallCheck3.default)(this, LogInScreen);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LogInScreen.__proto__ || (0, _getPrototypeOf2.default)(LogInScreen)).call(this));

        _this.onChange = function (e) {
            var _this$setState;

            var name = e.target.name;
            _this.setState((_this$setState = {}, (0, _defineProperty3.default)(_this$setState, name, e.target.value), (0, _defineProperty3.default)(_this$setState, 'errors', (0, _extends4.default)({}, _this.state.errors, (0, _defineProperty3.default)({}, name, ''))), _this$setState));
        };

        _this.Submit = function (e) {

            var sendObject = {
                username: _this.state.username,
                password: _this.state.password
            };

            var _inputsValidation = (0, _inputsValidation3.default)(sendObject),
                isValid = _inputsValidation.isValid,
                errors = _inputsValidation.errors;

            if (isValid) {
                _this.setState({ loading: true, errors: {} });
                var login = e.target.getAttribute('id') === 'login';
                var url = login ? '/auth/login' : '/auth/sign-up';

                return _axios2.default.post(url, (0, _extends4.default)({}, sendObject)).then(function (res) {
                    return _this.props.history.push('/user/' + res.data.id);
                }).catch(function (err) {
                    err = err.response ? err.response.data.errors : { globalError: err.message };
                    _this.setState({
                        errors: err,
                        loading: false
                    });
                });
            } else {
                _this.setState({
                    errors: errors
                });
            }
        };

        _this.state = {
            username: '',
            password: '',
            errors: {},
            loading: false
        };
        return _this;
    }

    (0, _createClass3.default)(LogInScreen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'LogInScreen' },
                React.createElement(
                    'div',
                    { className: 'form' },
                    this.state.errors.globalError && React.createElement(
                        'div',
                        { className: 'error' },
                        this.state.errors.globalError
                    ),
                    this.state.loading && React.createElement(_Loading2.default, null),
                    React.createElement(
                        'label',
                        { htmlFor: 'usernameInput' },
                        'Username:'
                    ),
                    React.createElement('input', { type: 'text', name: 'username', placeholder: 'Username...',
                        value: this.state.username, onChange: this.onChange, id: 'usernameInput',
                        disabled: this.state.loading
                    }),
                    this.state.errors.username && React.createElement(
                        'div',
                        { className: 'error' },
                        this.state.errors.username
                    ),
                    React.createElement(
                        'label',
                        { htmlFor: 'passwordInput' },
                        'Password:'
                    ),
                    React.createElement('input', { type: 'text', name: 'password', placeholder: 'Password...',
                        value: this.state.password, onChange: this.onChange, id: 'passwordInput',
                        disabled: this.state.loading
                    }),
                    this.state.errors.password && React.createElement(
                        'div',
                        { className: 'error' },
                        this.state.errors.password
                    ),
                    React.createElement(
                        'button',
                        { className: 'primary',
                            disabled: this.state.loading || !this.state.username || !this.state.password,
                            onClick: this.Submit,
                            id: 'login'
                        },
                        'Login'
                    ),
                    React.createElement(
                        'button',
                        { id: 'registration',
                            className: 'primary',
                            disabled: this.state.loading,
                            onClick: this.Submit
                        },
                        'Registration'
                    )
                )
            );
        }
    }]);
    return LogInScreen;
}(React.Component);

;

exports.default = LogInScreen;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".LogInScreen {\n  height: 100vh;\n  width: 100%;\n  padding-top: 20%; }\n  .LogInScreen .form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 50%;\n    margin: 0 auto; }\n    .LogInScreen .form label {\n      margin-top: 20px;\n      margin-bottom: 5px;\n      font-weight: bold; }\n    .LogInScreen .form button:first-of-type {\n      margin-top: 40px; }\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactRedux = __webpack_require__(9);

var _auth = __webpack_require__(41);

var _Loading = __webpack_require__(19);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessLogin = function (_React$Component) {
    (0, _inherits3.default)(SuccessLogin, _React$Component);

    function SuccessLogin(props) {
        (0, _classCallCheck3.default)(this, SuccessLogin);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SuccessLogin.__proto__ || (0, _getPrototypeOf2.default)(SuccessLogin)).call(this, props));

        _this.state = {
            user: _this.props.user || {},
            loading: true,
            errors: ''
        };
        return _this;
    }

    (0, _createClass3.default)(SuccessLogin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.getUserData(this.props.match.params.id).then(function (res) {
                _this2.setState({ loading: false });
            });
            // .catch(err => {
            //     console.log(err.response.data)
            //     if(err.response && err.response.data.redirectUrl) {
            //         this.props.history.push(err.response.data.redirectUrl);
            //     } else {
            //         this.setState({
            //             loading: false,
            //             errors: err.response ? err.response.data.errors : err.message
            //         });
            //     }
            // })
        }
    }, {
        key: 'render',
        value: function render() {

            var main = React.createElement(
                'div',
                { className: 'content' },
                'Content'
            );

            return React.createElement(
                'div',
                { className: 'SuccessLogin' },
                this.state.errors && React.createElement(
                    'div',
                    { className: 'error' },
                    this.state.errors
                ),
                this.state.loading ? React.createElement(_Loading2.default, null) : main
            );
        }
    }]);
    return SuccessLogin;
}(React.Component);

;

SuccessLogin.propTypes = {
    user: PropTypes.object.isRequired, //User data from user-reducer
    getUserData: PropTypes.func.isRequired //Fetch user data for dispatch
};

function mapState(state) {
    return {
        user: state.user
    };
};

exports.default = (0, _reactRedux.connect)(mapState, { getUserData: _auth.getUserData })(SuccessLogin);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(20)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserData = getUserData;
exports.setUser = setUser;

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(21);

var consts = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUserData(id) {
    return function (dispatch) {
        return _axios2.default.get('/user/' + id).then(function (res) {
            return dispatch(setUser(res.data.user));
        }).catch(function (err) {
            return console.log(err);
        });
    };
};
function setUser(user) {
    return {
        type: consts.SET_NEW_USER,
        user: user
    };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactRedux = __webpack_require__(9);

var _isEmpty = __webpack_require__(18);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpperMenu = function (_React$Component) {
    (0, _inherits3.default)(UpperMenu, _React$Component);

    function UpperMenu(props) {
        (0, _classCallCheck3.default)(this, UpperMenu);

        var _this = (0, _possibleConstructorReturn3.default)(this, (UpperMenu.__proto__ || (0, _getPrototypeOf2.default)(UpperMenu)).call(this, props));

        _this.state = {
            user: _this.props.user || {}
        };
        return _this;
    }

    (0, _createClass3.default)(UpperMenu, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.props.user !== prevProps.user) {
                this.setState({
                    user: this.props.user
                });
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var login = React.createElement(
                'div',
                { className: 'login' },
                React.createElement(
                    'span',
                    null,
                    'No user'
                )
            );
            var logout = React.createElement(
                'div',
                { className: 'logout' },
                React.createElement(
                    'span',
                    null,
                    'User: '
                ),
                React.createElement(
                    'span',
                    null,
                    this.state.user.username
                )
            );
            return React.createElement(
                'div',
                { className: 'UpperMenu' },
                React.createElement(
                    'div',
                    { className: 'wrapper' },
                    (0, _isEmpty2.default)(this.state.user) ? login : logout
                )
            );
        }
    }]);
    return UpperMenu;
}(React.Component);

;

UpperMenu.propTypes = {
    user: PropTypes.object.isRequired //User data from user-reducer
};

var mapState = function mapState(state) {
    return {
        user: state.user
    };
};

exports.default = (0, _reactRedux.connect)(mapState)(UpperMenu);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(20)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".UpperMenu {\n  background-color: #cccccc;\n  border-bottom: 1px solid #0d3349;\n  padding: 20px 30px;\n  display: flex;\n  justify-content: flex-end;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%; }\n  .UpperMenu .wrapper .login span {\n    border-left: 1px solid #7f7f7f;\n    padding-left: 20px; }\n  .UpperMenu .wrapper .logout span {\n    padding-right: 20px; }\n    .UpperMenu .wrapper .logout span:last-child {\n      border-left: 1px solid #7f7f7f; }\n", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var noFound = function noFound() {
    return React.createElement(
        'div',
        { className: 'not-found-page',
            style: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column' } },
        React.createElement(
            'h2',
            null,
            'Page not found'
        ),
        React.createElement(
            'h1',
            null,
            '404 Error'
        )
    );
};

exports.default = noFound;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".App {\n  width: 80%;\n  margin: 0 auto; }\n\n.error {\n  color: red;\n  margin-top: 10px;\n  margin-bottom: 0;\n  text-align: center; }\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxDevtoolsExtension = __webpack_require__(47);

var _rootReducer = __webpack_require__(48);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _redux = __webpack_require__(22);

var _reduxThunk = __webpack_require__(50);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = void 0;
var dev = process.env.NODE_ENV === 'development';
if (dev) {
    store = (0, _redux.createStore)(_rootReducer2.default, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
} else {
    store = (0, _redux.createStore)(_rootReducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

exports.default = store;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(22);

var _user = __webpack_require__(49);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    user: _user2.default
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialState = undefined;
exports.default = user;

var _constants = __webpack_require__(21);

var initialState = exports.initialState = {};

function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _constants.SET_NEW_USER:
            return action.user;

        default:
            return state;
    };
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passwordHash = __webpack_require__(52);

var _passwordHash2 = _interopRequireDefault(_passwordHash);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _inputsValidation = __webpack_require__(17);

var _inputsValidation2 = _interopRequireDefault(_inputsValidation);

var _user = __webpack_require__(23);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = __webpack_require__(7).Router();

// Registration new user
route.post('/sign-up', function (req, res) {
    var _validateInputs = (0, _inputsValidation2.default)(req.body),
        isValid = _validateInputs.isValid,
        errors = _validateInputs.errors;

    if (isValid) {
        return _user2.default.findOne({ username: req.body.username }).then(function (user) {
            if (user) {
                throw new Error('User is already exist');
            } else {
                return new _user2.default({
                    username: req.body.username,
                    password: _passwordHash2.default.generate(req.body.password)
                }).save().then(function (user) {
                    req.session[_config2.default.session.fieldToSaveSession] = user._id;
                    req.session.save();
                    res.json({ id: user._id });
                });
            }
        }).catch(function (err) {
            return res.status(500).json({ errors: { globalError: err.message } });
        });
    } else {
        res.status(400).json({ errors: errors });
    }
});

//Login user
route.post('/login', function (req, res) {
    var _validateInputs2 = (0, _inputsValidation2.default)(req.body),
        isValid = _validateInputs2.isValid,
        errors = _validateInputs2.errors;

    if (isValid) {
        return _user2.default.findOne({ username: req.body.username }).then(function (user) {
            if (user && _passwordHash2.default.verify(req.body.password, user.password)) {
                req.session[_config2.default.session.fieldToSaveSession] = user._id;
                req.session.save();
                res.json({ id: user._id });
            } else if (!user) {
                throw new Error('User is not exist');
            } else {
                throw new Error('Password is incorrect');
            }
        }).catch(function (err) {
            return res.status(500).json({ errors: { globalError: err.message } });
        });
    } else {
        res.status(400).json({ errors: errors });
    }
});

exports.default = route;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("password-hash");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _server = __webpack_require__(34);

var _configureStore = __webpack_require__(46);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _reactRouterDom = __webpack_require__(15);

var _reactRedux = __webpack_require__(9);

var _App = __webpack_require__(35);

var _App2 = _interopRequireDefault(_App);

var _session = __webpack_require__(54);

var _session2 = _interopRequireDefault(_session);

var _user = __webpack_require__(23);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = __webpack_require__(7).Router();

var ssr = function ssr(req, res) {
    var markup = (0, _server.renderToString)(React.createElement(
        _reactRedux.Provider,
        { store: _configureStore2.default },
        React.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: {} },
            React.createElement(_App2.default, null)
        )
    ));

    res.send('\n            <!DOCTYPE html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <title>Title</title>\n                <link rel="stylesheet" href="/css/main.css"/>\n                <script src="/bundle.js" defer></script>\n            </head>\n            <body>\n            \n                <div id="app">' + markup + '</div>\n            \n            </body>\n            </html>\n        ');
};

//Fetch user by id
route.get('/:id', _session2.default, function (req, res) {
    var userId = req.params.id;

    return _user2.default.findById(userId).then(function (user) {
        if (user) {
            res.json({ user: user });
        } else {
            req.session.destroy();
            res.status(400).json({
                errors: 'User is not exist!'
            });
        }
    });
});

exports.default = route;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res, next) {
    var userId = req.session[_config2.default.session.fieldToSaveSession];
    if (!userId) {
        res.status(401).json({
            redirectUrl: '/'
        });
    } else {
        next();
    };
};

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })
/******/ ]);