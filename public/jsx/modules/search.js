/**
 * Created by 10000461 on 2016/5/26.
 */
import React from 'react';

let SearchBox = React.createClass({
    getInitialState:function () {
        return {
            enable: false,
            value:''
        }
    },
    handleClick:function () {
        this.setState({
              enable: !this.state.enable
        });
    },
    handleChange:function (event) {
        this.setState({
            value: event.target.value
        });
    },
    /**
     * 组件还未更新[ one more times ]
     */
    componentWillUpdate: function () {

    },
    /**
     * 组件已经更新完成 [one more times]
     */
    componentDidUpdate:function () {
        if(!this.state.enable){
            this.refs.mySearchInput.focus();
        }
    },
    /**
     * 组件还未加载到dom [ only ones ]
     */
    componentWillMount:function () {
    },
    /**
     * 组件已经加载到dom [ only ones ]
     */
    componentDidMount: function () {
        $.get(this.props.source, function(result) {
            console.log(result);

        }.bind(this));
    },
    /**
     * 组件将被卸载 [ only ones ]
     */
    componentWillUnmount:function () {

    },
    render: function () {
        return (
            <div className="searchBox">
                <input type="text" disabled={this.state.enable}  ref="mySearchInput" onChange={this.handleChange} />
                <button onClick={this.handleClick}>{this.props.butsName}</button>
                <p>{this.state.value}</p>
            </div>
        );
    }
});

export default SearchBox;