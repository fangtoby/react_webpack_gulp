import React from 'react';
import ReactDOM from 'react-dom';
import HelloHandler from '../modules/hello.js';

let BlogHandler = React.createClass({
    render: function () {
        return (
            <div className="blogFrame">
                <HelloHandler name="blog-modules" />
            </div>
        );
    }
});

ReactDOM.render(<BlogHandler />, document.getElementById('blog-frame'));