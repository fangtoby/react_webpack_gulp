webpackJsonp([2],[
/* 0 */
/*!*********************************!*\
  !*** ./public/jsx/blog/blog.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 32);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 54);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _hello = __webpack_require__(/*! ../modules/hello.js */ 90);
	
	var _hello2 = _interopRequireDefault(_hello);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BlogHandler = _react2.default.createClass({
	    displayName: 'BlogHandler',
	
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'blogFrame' },
	            _react2.default.createElement(_hello2.default, { name: 'blog-modules' })
	        );
	    }
	});
	
	_reactDom2.default.render(_react2.default.createElement(BlogHandler, null), document.getElementById('blog-frame'));

/***/ }
]);
//# sourceMappingURL=blog.js.map