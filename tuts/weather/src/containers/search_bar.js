import React, { Component } from 'react' ;
import API_KEY from "../index"

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);

        console.log("my key" + API_KEY)
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});

        console.log("my key" + API_KEY)
    }

    onFormSubmit(event) {
        console.log(API_KEY)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}