import YTSearch from 'youtube-api-search';

class Searcher {

  constructor(props) {
    // Sign up and get Youtube key from console.developers.google.com
    this.API_KEY = 'AIzaSyDU_FM_MUW1Hy_4G5E2tWcfOHzjshSfPjQ';
  }

  search(_term, _limit) {
    const query = {
      key: this.API_KEY,
      term: _term,
      limit: _limit > 0 ? _limit : 20
    }
    let promise = new Promise((resolve) => {
      YTSearch(query, (data) => {
        resolve(data);
      });
    });
    return promise;
  }
}

// TODO get to the bottom of export
// let instance = new Searcher();
export default Searcher;
