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