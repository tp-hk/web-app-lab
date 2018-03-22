import React from 'react'
import ComponentBase from './ComponentBase';

export default class GoogleMap extends ComponentBase {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.coord.lat,
        lng: this.props.coord.lon
      }
    });
  }

  render() {
    return (
      <div ref='map' />
    )
  }
}