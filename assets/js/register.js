/**
 * Created by wenlinli on 2016/2/4.
 */
require('./reset')
var React = require('react');
var ReactDOM = require('react-dom');
require('../less/base.less');
require('../less/register.less');

var params = {};

var Title = React.createClass({
    render() {
        return (
            <div className="title">性别选择</div>
        );
    }
});
var Content = React.createClass({
    handleSexChoose(e){
        alert(this.className);
        params.sex = sex;
    },
    render() {
        return (
        <div className="middle">
            <div className="content">
                <a onClick={this.handleSexChoose.bind(this)} className="male"><img src="./img/head.png"/></a>
                <a onClick={this.handleSexChoose} className="female"><img src="./img/head.png"/></a>
            </div>
        </div>
    );
    }
});
var Bottom = React.createClass({
    handleClick(){
        if(!params.sex){
            alert('请选择您的性别');
        }else{

        }
    },
    render() {
        return (
        <div className="bottom" onClick={this.handleClick}>完成</div>
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
    //document.body
    document.getElementById('main-con')
);
