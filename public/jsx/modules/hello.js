/**
 * Created by 10000461 on 2016/5/26.
 */
import React from 'react';

let ProductBox = React.createClass({
  render: function () {
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