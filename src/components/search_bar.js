import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};

    }

    handleChange(event) {
        this.setState({term: event.target.value})
    }

    handleSubmit(event) {
        this.props.handleSearchTermSubmit(this.state.term);
        event.preventDefault()

    }

    handleEnterPressed(event) {
        let code = event.keyCode || event.which;
        if (code === 13) {
            this.props.handleSearchTermSubmit(this.state.term);
        }
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"
                        value={this.state.term}
                        placeholder={"Search"}
                        onChange={this.handleChange.bind(this)}
                        onKeyPress={this.handleEnterPressed.bind(this)}/>
                    <button type="submit">
                        <span className="glyphicon glyphicon-search"/>
                    </button>
                </form>
            </div>

        );
    }
}

export default SearchBar;