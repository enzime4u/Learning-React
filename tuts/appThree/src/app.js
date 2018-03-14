
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

const renderApp = () => {
    const template = <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <p>{app.options.length}</p>
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