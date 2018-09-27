import React from 'react';
import { WebMap } from 'react-arcgis';
import ComponentBase from './component-base';
import { connect } from 'react-redux';

import { setMap, setView } from '../actions/index';

class MapContainer extends ComponentBase {
  constructor(props) {
    super(props);
    this._bind('handleMapLoad', 'handleMapFail');

    this.state = {
      map: null,
      view: null,
      loadErrorMessage: '',
    };
  }

  handleMapLoad = (map, view) => {
    // map has loaded

    this.props.setMap(map);
    this.props.setView(view);
  }

  handleMapFail = (error) => {
    // map fails to load

    const loadErrorMessage = error.details && error.details.message
      ? error.details.message
      : error.message;

    alert(loadErrorMessage);

    this.setState({
      loadErrorMessage,
    });
  }

  render() {
    // 55cdda503e054b2a8b4967c716ecd42e
    // e69df70e702c4c5a8feed20a9e7fc229
    if (!this.props.webmapId) return null;

    return (
      <div style={{
        border: '3px solid #fff',
        height: '800px',
        width: '100%'
      }}>
        <WebMap
          id={this.props.webmapId}
          onLoad={this.handleMapLoad}
          onFail={this.handleMapFail}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    webmapId: state.webmapId,
  };
}

export default connect(mapStateToProps, { setMap, setView })(MapContainer);
