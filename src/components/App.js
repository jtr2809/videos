import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from './apis/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null }

    onVideoSelect = (video) => {
        console.log('Hola', video)
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get(`/search?&q=${term}`);
        this.setState({
            videos: response.data.items
        });
    };

    render() {
        return (
            <div className="ui container">
                <div><VideoDetail video={this.onVideoSelect}></VideoDetail></div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
            </div>
        )
    }
}

export default App;