var nameVar = 'Kent';
nameVar = 'Adam';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Brittany';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Kent Roth';
    let firstName;

if (fullName) {
     firstName = fullName.split(' ')[0];
    console.log(firstName);
}
    console.log(firstName);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp()
};
const minusOne = () => {
    count--;
    renderCounterApp()
};
const reset = () => {
    count = 0;
    renderCounterApp()
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();



const app = {
    title: 'What Should I do?',
    subtitle: '',
    options:[]
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp()
    }
};
const onRemoveAll = () => {
    app.options = [];
    renderApp()
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
        <button onClick={onRemoveAll}>Reset All</button>



        <ol>
            {
                app.options.map((options) => {
                    return <li key={options}>{options}</li>
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type={'text'} name={'option'}/>
            <button>Add Option</button>
        </form>

    </div>;

    ReactDOM.render(template, appRoot)
};



const appRoot = document.getElementById('app');

renderApp();
