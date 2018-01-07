import React from 'react';
import ComponentBase from '../components/ComponentBase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends ComponentBase {
  constructor(props) {
    super(props);

    this._bind('renderWeather');
  }

  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.pressure);
    const pressure = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} units='K'/>
        </td>
        <td>
          <Chart data={humidity} units='hPa'/>
        </td>
        <td>
          <Chart data={pressure} units='%'/>
        </td>
      </tr>);
  }


  render() {
    if (!this.props.weatherInfos || this.props.weatherInfos.length === 0 || !this.props.weatherInfos[0].list)
      return null;

    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weatherInfos.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherInfos: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ foo }, dispatch);
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);