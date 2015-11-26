"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Whoops! Can't find that page</p>
				<Link to="app">Back to Home</Link>
			</div>
		);
	}
});

module.exports = NotFoundPage;