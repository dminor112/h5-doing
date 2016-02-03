var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./Hello');
console.log(11111111111, Hello);

/*
ReactDOM.render(
    <h1>Hello, world!hahaenen</h1>,
    document.getElementById('example')
);*/
ReactDOM.render(
    <Hello />,
    document.getElementById('example')
);
