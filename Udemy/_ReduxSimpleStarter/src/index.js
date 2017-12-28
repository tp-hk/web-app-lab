import React from 'react';
import ComponentBase from './components/ComponentBase';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import Searcher from './utilities/Searcher';

class App extends ComponentBase {
  constructor(props) {
    super(props);
    
    this.searcher = new Searcher();
    this.searcher.search('法鼓山').then((response) => {
      console.log(response);
      this.state = {
        videos: response
      };
    });
  }

  render() {
    return <div>
      <SearchBar />
    </div>;
  }

}

ReactDom.render(<App />, document.getElementById('container'));


//// 
// From the above,App is a class which produces App instances, but ReactDom.render(App) requires instances not the class, therefore to fix this, pass in an instance of App i.e. <App/>

//// ReactDom.render(<App />); by itself doesn't know where to render. Therefore, add a second arg to include the Target container

