var React = require('react')
var ReactDOM = require('react-dom')
//'createClass' create a React component, all React components need a render method that returns a UI
var HelloWorld = React.createClass({
    render: function() {
        return (
            <div> Hello World! </div>
        )
    }
});
//ReactDOM takes two arguments, the first, HelloWorld, is the element to render, the second, 'app', is where to render to
ReactDOM.render(<HelloWorld />, document.getElementById('app'));

// var app = document.getElementById('app');
// app.innerHTML = 'Hello!'