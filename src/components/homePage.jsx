"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			 <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p>React, React-Route, Flux</p>
				<Link to="about" className="btn btn-primary btn-large">Learn More</Link>
             </div>
		);
	}
});

module.exports = Home;