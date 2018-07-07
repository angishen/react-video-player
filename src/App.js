import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAGyv7G4g754tXcVznGOyDadVomsWwKY_w';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'cooking'}, (videos) => {
            // in ES6, equiv. to this.setState({ videos: videos })
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>

        );
    }
}

export default App;
