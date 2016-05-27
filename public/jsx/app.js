import React from 'react';
import ReactDOM from 'react-dom';
import HelloHandler from './modules/hello';
import SearchHandler from  './modules/search';

let FrameHandler = React.createClass({
    render: function () {
        let names = [
            {'name':'Jack'},
            {'name': 'Tom'},
            {'name': 'Alice'}
        ];
        return (
                <div className="bodyFrame">
                    <SearchHandler butsName="Chnage State" source="https://api.github.com/users/octocat/gists" />
                    <SearchHandler butsName="Chnage Again" source="https://api.github.com/users/octocat/gists" />
                    <HelloHandler name="app-modules" data={names} />
                </div>
            );
        }
});

ReactDOM.render(<FrameHandler />, document.getElementById('product-frame'));