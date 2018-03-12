

const app = {
    title: 'What Should I do?',
    subtitle: '',
    options:[]
};


const template = <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>


    <ol>
        <li>Continue to Code</li>
        <li>Start a Project</li>
    </ol>
</div>;



const user = {
    name: 'Kent',
    age: 31,
    location: 'Iowa',
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> //ternary
        {(user.age && user.age >= 18) && <p> Age: {user.age}</p>} //logical
        {getLocation(user.location)} // if statement
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);