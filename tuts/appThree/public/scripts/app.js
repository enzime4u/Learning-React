'use strict';

var app = {
    title: 'What Should I do?',
    subtitle: '',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var renderApp = function renderApp() {
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What Should I Do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Reset All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (options) {
                return React.createElement(
                    'li',
                    { key: options },
                    options
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderApp();
