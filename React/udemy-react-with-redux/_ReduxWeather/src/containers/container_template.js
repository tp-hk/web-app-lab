import React from 'react';
import ComponentBase from '../components/ComponentBase';
import { bindActionCreators } from 'redux';

class WeatherList extends ComponentBase {
  constructor(props) {
    super(props);

  }

  render() {

  }
}

function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ foo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);