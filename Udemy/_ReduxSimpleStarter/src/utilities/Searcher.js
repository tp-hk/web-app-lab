import YTSearch from 'youtube-api-search';

class Searcher {

  constructor(props) {
    // Sign up and get Youtube key from console.developers.google.com
    this.API_KEY = 'AIzaSyDU_FM_MUW1Hy_4G5E2tWcfOHzjshSfPjQ';
  }

  search(_term) {

    let promise = new Promise((resolve) => {
      YTSearch({ key: this.API_KEY, term: _term }, (data) => {
        resolve(data);
      });
    });
    return promise;
  }
}

// let instance = new Searcher();
export default Searcher;
// module.export = instance;
