var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AboutScreen = React.createClass({
    
	
    render: function(){
        return <div className="about-content">
        	<div className="row">
	        	<div className="col s8 offset-s2">
	        		<h2>About Us</h2>

	        		{/*<div className="center-align">
		        		<img src="/img/beach.jpg"/>
		        	</div>*/}
		        	
	        		<p>
	        			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	        		</p>
	        	</div>
        	</div>
        </div>
    }
    
});

module.exports = AboutScreen;

