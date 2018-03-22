import React from 'react';
import ComponentBase from './components/ComponentBase';
import ReactDom from 'react-dom';
import _ from 'lodash'; // for throttling 
import Searcher from './utilities/Searcher';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends ComponentBase {
  constructor(props) {
    super(props);
    this._bind('onVideoSelect', 'videoSearch');

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searcher = new Searcher();
    this.videoSearch('Corgi');
  }

  onVideoSelect(_video) {
    this.setState({
      selectedVideo: _video
    });
  }

  videoSearch(_term) {
    // gets call immediately when onSearchSubmit is called
    this.searcher.search(_term).then((response) => {
      if (!response || !response.length === 0)
        return;

      this.setState({
        videos: response,
        selectedVideo: response[0]
      });
    });
  }

  render() {
    // debounce returns a new function which can be called only every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

    return <div>
      <SearchBar onSearchTermSubmit={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        videos={this.state.videos}
        onVideoSelect={this.onVideoSelect} />
    </div>;
  }

}

ReactDom.render(<App />, document.getElementById('container'));


//// 
// From the above,App is a class which produces App instances, but ReactDom.render(App) requires instances not the class, therefore to fix this, pass in an instance of App i.e. <App/>

//// ReactDom.render(<App />); by itself doesn't know where to render. Therefore, add a second arg to include the Target container

//// step 1: define selectedVideo variable here and pass to VideoDetail through <VideoDetail video={this.state.selectedVideo} />
// step 2: pass callback `onVideoSelect={this.onVideoSelect}` to VideoList
