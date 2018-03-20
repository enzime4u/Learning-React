class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteOption = this.deleteOption.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.state = {
            options:['One', 'Two']
        }
    }

    // Delete Option.  Needs to clear the array
    deleteOption() {
        this.setState(() => {
            return {
                options:[]
            };
        });
    }

    // Pick Option.  Needs to pick a random number and alert
    pickOption() {
        const rando = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rando];
        alert(option);
    }

    // Add Option.  Needs to add an option to the array.  Also, needs to handle errors.


    render() {
        return (
            <div>
                <Header />
                <Action
                pickOption={this.pickOption}
                />
                <Options
                deleteOption={this.deleteOption}
                />
                <Option />
                <AddOption />
            </div>
        );
    }
}


// Header - title and subtitle.  Once app completed pass in title and subtitle from const as challenge
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h3>I shall decide what you do.</h3>
            </div>
        )
    }
}

// Action - Pick options button
class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                onClick={this.props.handlePick}
                >Pick Option</button>
            </div>
        )
    }
}

// Options - remove options button and maps the options to option
class Options extends React.Component {
    render() {
        return(
            <div>
                <button
                    onClick={this.props.deleteOption}
                >Remove Options</button>
            </div>
        )
    }
}

// Option - displays the options
class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Options</p>
            </div>
        )
    }
}



// Add Option - Form and adds typed option to Options
class AddOption extends React.Component {
    render() {
        return (
            <form>
                <input type={'text'} name={'option'} />
                <button>Add Option</button>
            </form>
        )
    }
}





ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));