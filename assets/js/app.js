webpackJsonp([1],{

/***/ 0:
/*!***************************!*\
  !*** ./public/jsx/app.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 32);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 52);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _hello = __webpack_require__(/*! ./modules/hello */ 87);
	
	var _hello2 = _interopRequireDefault(_hello);
	
	var _search = __webpack_require__(/*! ./modules/search */ 169);
	
	var _search2 = _interopRequireDefault(_search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FrameHandler = _react2.default.createClass({
	    displayName: 'FrameHandler',
	
	    render: function render() {
	        var names = [{ 'name': 'Jack' }, { 'name': 'Tom' }, { 'name': 'Alice' }];
	        return _react2.default.createElement(
	            'div',
	            { className: 'bodyFrame' },
	            _react2.default.createElement(_search2.default, { butsName: 'Chnage State', source: 'https://api.github.com/users/octocat/gists' }),
	            _react2.default.createElement(_search2.default, { butsName: 'Chnage Again', source: 'https://api.github.com/users/octocat/gists' }),
	            _react2.default.createElement(_hello2.default, { name: 'app-modules', data: names, source: 'https://api.github.com/users/octocat/gists' })
	        );
	    }
	});
	
	_reactDom2.default.render(_react2.default.createElement(FrameHandler, null), document.getElementById('product-frame'));

/***/ },

/***/ 169:
/*!**************************************!*\
  !*** ./public/jsx/modules/search.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 32);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchBox = _react2.default.createClass({
	    displayName: 'SearchBox',
	
	    getInitialState: function getInitialState() {
	        return {
	            enable: false,
	            value: ''
	        };
	    },
	    handleClick: function handleClick() {
	        this.setState({
	            enable: !this.state.enable
	        });
	    },
	    handleChange: function handleChange(event) {
	        this.setState({
	            value: event.target.value
	        });
	    },
	    /**
	     * 组件还未更新[ one more times ]
	     */
	    componentWillUpdate: function componentWillUpdate() {},
	    /**
	     * 组件已经更新完成 [one more times]
	     */
	    componentDidUpdate: function componentDidUpdate() {
	        if (!this.state.enable) {
	            this.refs.mySearchInput.focus();
	        }
	    },
	    /**
	     * 组件还未加载到dom [ only ones ]
	     */
	    componentWillMount: function componentWillMount() {},
	    /**
	     * 组件已经加载到dom [ only ones ]
	     */
	    componentDidMount: function componentDidMount() {
	        /**
	         * 调用第三方库 $
	         */
	        // $.get(this.props.source, function(result) {
	        //     console.log(result);
	        //
	        // }.bind(this));
	    },
	    /**
	     * 组件将被卸载 [ only ones ]
	     */
	    componentWillUnmount: function componentWillUnmount() {},
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'searchBox' },
	            _react2.default.createElement('input', { type: 'text', disabled: this.state.enable, ref: 'mySearchInput', onChange: this.handleChange }),
	            _react2.default.createElement(
	                'button',
	                { onClick: this.handleClick },
	                this.props.butsName
	            ),
	            _react2.default.createElement(
	                'p',
	                null,
	                this.state.value
	            )
	        );
	    }
	}); /**
	     * Created by 10000461 on 2016/5/26.
	     */
	
	
	exports.default = SearchBox;

/***/ }

});
//# sourceMappingURL=app.js.map