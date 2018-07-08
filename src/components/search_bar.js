import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={ event => this.onInputSubmit(event.target.value) }>
                    <input type="text"
                        placeholder={"Search"} />
                    <button type="submit">
                        <span className="glyphicon glyphicon-search"/>
                    </button>
                </form>
            </div>

        );
    }

    onInputSubmit(term) {
        this.setState({term});
        this.props.onSearchTermSubmit(term);
    }
}

export default SearchBar;