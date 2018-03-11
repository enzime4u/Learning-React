'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Kent Roth'
    ),
    React.createElement(
        'p',
        null,
        'Age: 31'
    ),
    React.createElement(
        'p',
        null,
        'Location: Iowa'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
