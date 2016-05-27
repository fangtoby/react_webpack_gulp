/**
 * Created by 10000461 on 2016/5/26.
 */
import React from 'react';

let ProductBox = React.createClass({
    /**
     * 组件已经加载到dom [ only ones ]
     */
    componentDidMount: function () {
    },
    render: function () {
        /**
         * 调用第三方库 lodash _
         */
        // let tempstr = _.join(['a', 'b', 'c'], '~');
        return (
            <div className="productBox" data-name={this.props.name} >
                {
                    this.props.data.map(function (object, i) {
                        return <div  key={i}>Hello {object.name}!</div>
                    })
                }
            </div>
        );
    }
});
export default ProductBox;