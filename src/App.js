import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAGyv7G4g754tXcVznGOyDadVomsWwKY_w';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null };

        YTSearch({key: API_KEY, term: "ocean's 8"}, (videos) => {
            // in ES6, equiv. to this.setState({ videos: videos })
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>

        );
    }
}

export default App;
