import React from 'react';
import ComponentBase from '../components/ComponentBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends ComponentBase {
  constructor(props) {
    super(props);

    this._bind('handleSearchTermChange', 'handleSubmit');

    this.state = {
      term: ''
    }
  }

  handleSearchTermChange(evt) {
    evt.preventDefault();

    this.setState({
      term: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.fetchWeather(this.state.term);

      // .then((response) => {
      //   console.log(response, 'weatherInfos');
      // })

    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <form className='input-group' onSubmit={this.handleSubmit}>
        <input
          placeholder='Get a forecast in cities'
          className='form-control'
          value={this.state.term}
          onChange={this.handleSearchTermChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps ' + state);
  return {
    weatherInfo: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);