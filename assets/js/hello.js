/**
 * Created by wenlinli on 2016/2/3.
 */
var React = require('react');
var Hello = React.createClass({
    render() {
        return (
            <h1>Hello dfdfasdsad {this.props.name}!</h1>
        );
    }
});
module.exports = Hello;