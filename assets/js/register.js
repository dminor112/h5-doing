/**
 * Created by wenlinli on 2016/2/4.
 */
require('./reset')
var React = require('react');
var ReactDOM = require('react-dom');
require('../less/base.less');
require('../less/register.less');

var Title = React.createClass({
    render() {
        return (
            <div className="title">性别选择</div>
        );
    }
});
var Content = React.createClass({
    render() {
        return (
        <div className="middle">
            <div className="content"><img src="./img/head.png"/></div>
        </div>
    );
    }
});
var Bottom = React.createClass({
    render() {
        return (
        <div className="bottom">完成</div>
    );
    }
});
var Register = React.createClass({
    render() {
        return (
            <div className="sex-con">
                <Title />
                <Content />
                <Bottom />
            </div>
        );
    }
});
ReactDOM.render(
    <Register />,
    document.body
    //document.getElementById('main-con')
);
