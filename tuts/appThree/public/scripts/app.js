'use strict';

var app = {
    title: 'What Should I do?',
    subtitle: '',
    options: []
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Continue to Code'
        ),
        React.createElement(
            'li',
            null,
            'Start a Project'
        )
    )
);

var user = {
    name: 'Kent',
    age: 31,
    location: 'Iowa'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return undefined;
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    ' //ternary',
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        user.age
    ),
    ' //logical',
    getLocation(user.location),
    ' // if statement'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
